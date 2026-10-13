
export const handleWithdraw = (req, res, query, isUser) =>
  atomic(res, async (session) => {
    const amt = parseFloat(req.body.amount);
    if (isNaN(amt) || amt <= 0) throw new Error("Invalid amount.");
    const acc = await Account.findOne(query).session(session);
    if (!acc) throw new Error("Account not found.");
    let penalty = 0;
    if (isUser) {
      if (acc.accountType === "savings") {
        if (amt > 50000) throw new Error("Daily limit ₹50,000.");
        const count = await Transaction.countDocuments({
          type: "withdrawal",
          fromAccount: acc._id,
          createdAt: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        }).session(session);
        if (count >= 5) throw new Error("Monthly limit reached.");
        if (acc.balance < amt) throw new Error("Insufficient balance.");
      } else if (acc.accountType === "current") {
        if (amt > acc.balance + (acc.overdraftLimit || 20000))
          throw new Error("Overdraft exceeded.");
        if (acc.balance - amt < (acc.minimumBalance || MIN_BAL))
          penalty = PENALTY;
      }
    } else if (acc.balance < amt) throw new Error("Insufficient balance.");
    const up = await Account.findByIdAndUpdate(
      acc._id,
      {
        $inc: { balance: -(amt + penalty) },
        ...(penalty > 0 && { penaltyApplied: true }),
      },
      { new: true, session },
    );
    await saveTxn(
      {
        type: "withdrawal",
        fromAccount: acc._id,
        fromAccountNumber: acc.accountNumber,
        amount: amt,
        description: req.body.description || "Withdrawal",
        category: req.body.category || "Other",
        balanceAfterTransaction: acc.balance - amt,
        initiatedBy: req.user._id,
      },
      session,
    );
    if (penalty > 0)
      await saveTxn(
        {
          type: "withdrawal",
          fromAccount: acc._id,
          fromAccountNumber: acc.accountNumber,
          amount: penalty,
          description: "Min balance penalty",
          category: "Bank Fees",
          balanceAfterTransaction: up.balance,
          initiatedBy: req.user._id,
        },
        session,
      );
    if (isUser)
      notify(req.user._id, "Withdrawal", `₹${amt} withdrawn.`, "success");
    return { message: "Withdrawal successful.", newBalance: up.balance };
  });

export const handleTransfer = (req, res, fromQ, toQ, isUser) =>
  atomic(res, async (session) => {
    const amt = parseFloat(req.body.amount);
    if (isNaN(amt) || amt <= 0) throw new Error("Invalid amount.");
    const from = await Account.findOne(fromQ).session(session);
    if (!from) throw new Error("Source account missing/inactive.");
    const to = await Account.findOne({ $or: toQ.$or }).session(session);
    if (!to || to.status !== "active")
      throw new Error("Recipient missing/inactive.");
    if (from._id.equals(to._id)) throw new Error("Same account transfer.");
    let penalty =
      isUser &&
        from.accountType === "current" &&
        from.balance - amt < (from.minimumBalance || MIN_BAL)
        ? PENALTY
        : 0;
    let fee = !isUser && amt > 10000 ? parseFloat((amt * 0.001).toFixed(2)) : 0;
    if (from.balance < amt + penalty + fee)
      throw new Error("Insufficient balance.");
    await Account.findByIdAndUpdate(
      from._id,
      {
        $inc: { balance: -(amt + penalty + fee) },
        ...(penalty > 0 && { penaltyApplied: true }),
      },
      { session },
    );
    await Account.findByIdAndUpdate(
      to._id,
      { $inc: { balance: amt } },
      { session },
    );
    const txn = await saveTxn(
      {
        type: "transfer",
        fromAccount: from._id,
        toAccount: to._id,
        fromAccountNumber: from.accountNumber,
        toAccountNumber: to.accountNumber,
        amount: amt,
        fee,
        description: req.body.description || "Transfer",
        category: req.body.category || "Other",
        balanceAfterTransaction: from.balance - amt - fee - penalty,
        initiatedBy: req.user._id,
      },
      session,
    );
    if (penalty > 0)
      await saveTxn(
        {
          type: "withdrawal",
          fromAccount: from._id,
          fromAccountNumber: from.accountNumber,
          amount: penalty,
          description: "Min balance penalty",
          category: "Bank Fees",
          balanceAfterTransaction: from.balance - amt - fee - penalty,
          initiatedBy: req.user._id,
        },
        session,
      );
    if (isUser) {
      notify(
        from.userId,
        "Transfer Sent",
        `₹${amt} sent to ${to.accountNumber}.`,
        "success",
      );
      notify(
        to.userId,
        "Transfer Received",
        `₹${amt} received from ${from.accountNumber}.`,
        "info",
      );
    }
    return {
      message: "Transfer successful.",
      transaction: txn,
      newBalance: from.balance - amt - penalty - fee,
    };
  });