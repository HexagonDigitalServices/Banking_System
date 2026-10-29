 const getProcessedTransactions = () => {
    const ids = accounts.map((a) => a._id?.toString());
    const displayList = [];

    transactions.forEach((txn) => {
      const isFromMe = ids.includes(
        txn.fromAccount?._id?.toString() || txn.fromAccount?.toString(),
      );
      const isToMe = ids.includes(
        txn.toAccount?._id?.toString() || txn.toAccount?.toString(),
      );

      if (txn.type === "transfer" && isFromMe && isToMe) {
        // Entry 1: The Debit
        displayList.push({
          ...txn,
          _displayId: `${txn._id}_out`,
          displayType: "debit",
          displayLabel: `Transfer: ${txn.fromAccount?.accountName || "Source"} ➔ ${txn.toAccount?.accountName || "Dest"}`,
          displaySign: "-",
          isInternal: true,
        });
        // Entry 2: The Credit
        displayList.push({
          ...txn,
          _displayId: `${txn._id}_in`,
          displayType: "credit",
          displayLabel: `Received: ${txn.toAccount?.accountName || "Dest"} ⬅ ${txn.fromAccount?.accountName || "Source"}`,
          displaySign: "+",
          isInternal: true,
        });
      } else if (
        txn.type === "deposit" ||
        (txn.type === "transfer" && isToMe)
      ) {
        displayList.push({
          ...txn,
          _displayId: txn._id,
          displayType: "credit",
          displayLabel: txn.description || "Deposit",
          displaySign: "+",
        });
      } else {
        displayList.push({
          ...txn,
          _displayId: txn._id,
          displayType: "debit",
          displayLabel: txn.description || "Withdrawal",
          displaySign: "-",
        });
      }
    });

    return displayList.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  };

