export const respondToRequest = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const { requestId, action, payFromAccountId } = req.body;
    let result = null;

    await session.withTransaction(async () => {
      const request = await MoneyRequest.findOne({
        _id: requestId,
        recipientUser: req.user._id,
        status: "pending",
      }).session(session);

      if (!request) throw new Error("Request not found.");

      if (action === "reject") {
        request.status = "rejected";
        await request.save({ session });
        await Notification.create(
          [
            {
              userId: request.sender,
              title: "Request Rejected",
              message: `${req.user.firstName} rejected your request of ₹${request.amount.toFixed(2)}.`,
              type: "warning",
            },
          ],
          { session },
        );
        result = { success: true, message: "Request rejected." };
        return;
      }

      if (action === "accept") {
        const fromAcc = await Account.findOne({
          _id: payFromAccountId || request.recipientAccount,
          userId: req.user._id,
          status: "active",
        }).session(session);

        if (!fromAcc || fromAcc.balance < request.amount)
          throw new Error("Insufficient funds or invalid account.");

        const toAcc = await Account.findById(request.senderAccount).session(
          session,
        );
        if (!toAcc || toAcc.status !== "active")
          throw new Error("Target account inactive.");

        await Account.findByIdAndUpdate(
          fromAcc._id,
          { $inc: { balance: -request.amount } },
          { session },
        );
        await Account.findByIdAndUpdate(
          toAcc._id,
          { $inc: { balance: request.amount } },
          { session },
        );

        const [txn] = await Transaction.create(
          [
            {
              transactionId: await Transaction.generateTransactionId(),
              type: "transfer",
              fromAccount: fromAcc._id,
              toAccount: toAcc._id,
              fromAccountNumber: fromAcc.accountNumber,
              toAccountNumber: toAcc.accountNumber,
              amount: request.amount,
              description: `Request Fulfilled: ${request.description}`,
              status: "completed",
              balanceAfterTransaction: fromAcc.balance - request.amount,
              initiatedBy: req.user._id,
            },
          ],
          { session },
        );

        request.status = "accepted";
        request.transactionId = txn._id;
        await request.save({ session });
        await Notification.create(
          [
            {
              userId: request.sender,
              title: "Request Fulfilled",
              message: `${req.user.firstName} paid your request of ₹${request.amount.toFixed(2)}.`,
              type: "success",
            },
          ],
          { session },
        );

        result = {
          success: true,
          message: "Payment successful!",
          transaction: txn,
        };
      }
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  } finally {
    session.endSession();
  }
};