export const approveAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account || account.approvalStatus !== "pending")
      return res
        .status(400)
        .json({ success: false, message: "Invalid account state" });
    account.status = "active";
    account.approvalStatus = "approved";
    account.balance = account.initialDeposit || 0;
    account.approvedBy = req.user._id;
    account.approvedAt = new Date();
    await account.save();
    if (account.initialDeposit > 0) {
      const txnId = await Transaction.generateTransactionId();
      await Transaction.create({
        transactionId: txnId,
        type: "deposit",
        toAccount: account._id,
        toAccountNumber: account.accountNumber,
        amount: account.initialDeposit,
        description: "Initial deposit (account approved)",
        status: "completed",
        balanceAfterTransaction: account.initialDeposit,
        processedBy: req.user._id,
        initiatedBy: account.userId,
      });
    }
    await Notification.create({
      userId: account.userId,
      title: "Account Approved",
      message: `Your account (${account.accountNumber}) has been approved and activated.`,
      type: "success",
    });
    res.json({
      success: true,
      message: `Account ${account.accountNumber} approved and activated.`,
      account,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


export const rejectAccount = async (req, res) => {
  try {
    const { reason } = req.body;
    if (!reason?.trim())
      return res
        .status(400)
        .json({ success: false, message: "Rejection reason is required" });
    const account = await Account.findById(req.params.id);
    if (!account || account.approvalStatus !== "pending")
      return res
        .status(400)
        .json({ success: false, message: "Invalid account state" });
    account.status = "rejected";
    account.approvalStatus = "rejected";
    account.rejectionReason = reason.trim();
    account.approvedBy = req.user._id;
    account.approvedAt = new Date();
    await account.save();
    await Notification.create({
      userId: account.userId,
      title: "Account Application Rejected",
      message: `Your application was rejected. Reason: ${reason.trim()}`,
      type: "danger",
    });
    res.json({
      success: true,
      message: `Account ${account.accountNumber} has been rejected.`,
      account,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


export const getAccountHistory = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id)
      .populate(
        "userId",
        "firstName lastName email phone username address createdAt",
      )
      .populate("approvedBy", "firstName lastName");
    if (!account)
      return res
        .status(404)
        .json({ success: false, message: "Account not found" });
    const transactions = await Transaction.find({
      $or: [{ fromAccount: account._id }, { toAccount: account._id }],
    })
      .populate(
        "fromAccount toAccount",
        "accountNumber accountName accountType",
      )
      .populate("initiatedBy processedBy", "firstName lastName username")
      .sort("-createdAt");
    const accountIdStr = account._id.toString();
    const totalDeposited = transactions
      .filter(
        (t) =>
          t.type === "deposit" && t.toAccount?._id?.toString() === accountIdStr,
      )
      .reduce((s, t) => s + t.amount, 0);
    const totalWithdrawn = transactions
      .filter(
        (t) =>
          t.type === "withdrawal" &&
          t.fromAccount?._id?.toString() === accountIdStr,
      )
      .reduce((s, t) => s + t.amount, 0);
    const totalTransferred = transactions
      .filter(
        (t) =>
          t.type === "transfer" &&
          t.fromAccount?._id?.toString() === accountIdStr,
      )
      .reduce((s, t) => s + t.amount, 0);
    const totalReceived = transactions
      .filter(
        (t) =>
          t.type === "transfer" &&
          t.toAccount?._id?.toString() === accountIdStr,
      )
      .reduce((s, t) => s + t.amount, 0);
    res.json({
      success: true,
      account,
      transactions,
      stats: {
        totalTransactions: transactions.length,
        totalDeposited,
        totalWithdrawn,
        totalTransferred,
        totalReceived,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


export const adminCreateAccount = async (req, res) => {
  try {
    const {
      ownerFirstName,
      ownerEmail,
      loginPassword,
      accountType,
      initialDeposit,
    } = req.body;
    if (!ownerFirstName || !ownerEmail || !loginPassword || !accountType)
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    const emailLower = ownerEmail.trim().toLowerCase();
    let user = await User.findOne({ email: emailLower });
    if (!user) {
      const username =
        emailLower.split("@")[0].replace(/[^a-z0-9]/g, "") +
        "_" +
        Date.now().toString().slice(-4);
      user = await User.create({
        firstName: ownerFirstName.trim(),
        lastName: req.body.ownerLastName?.trim() || "",
        username,
        email: emailLower,
        password: loginPassword,
        phone: req.body.ownerPhone?.trim() || "",
        address: req.body.ownerAddress || "",
        role: "user",
      });
    }
    const existingAccount = await Account.findOne({
      userId: user._id,
      accountType,
      status: { $in: ["active", "pending", "frozen"] },
    });
    if (existingAccount)
      return res.status(400).json({
        success: false,
        message: "User already has this account type.",
      });
    const accountNumber = await Account.generateAccountNumber(),
      deposit = parseFloat(initialDeposit) || 0,
      accountNames = {
        current: "Current Account",
        savings: "Savings Account",
        investment: "Investment Account",
      };
    let extraFields = {};
    if (accountType === "current")
      extraFields = {
        overdraftLimit: 20000,
        minimumBalance: 10000,
        penaltyAmount: 500,
      };
    else if (accountType === "savings") extraFields = { interestRate: 4 };
    const account = await Account.create({
      accountNumber,
      userId: user._id,
      accountType,
      accountName: accountNames[accountType],
      balance: deposit,
      ownerFirstName: user.firstName,
      ownerLastName: user.lastName,
      ownerEmail: emailLower,
      initialDeposit: deposit,
      status: "active",
      approvalStatus: "not_required",
      approvedBy: req.user._id,
      approvedAt: new Date(),
      ...extraFields,
    });
    if (deposit > 0) {
      const txnId = await Transaction.generateTransactionId();
      await Transaction.create({
        transactionId: txnId,
        type: "deposit",
        toAccount: account._id,
        toAccountNumber: account.accountNumber,
        amount: deposit,
        description: "Initial deposit (admin)",
        status: "completed",
        balanceAfterTransaction: deposit,
        initiatedBy: req.user._id,
        processedBy: req.user._id,
      });
    }
    try {
      await sendWelcomeEmail({
        toEmail: emailLower,
        firstName: user.firstName,
        accountType: accountNames[accountType],
        accountNumber,
        loginEmail: emailLower,
        loginPassword,
      });
    } catch (e) {
      console.error("Welcome email failed", e.message);
    }
    res.status(201).json({
      success: true,
      message: "Account created and welcome email sent.",
      account,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
