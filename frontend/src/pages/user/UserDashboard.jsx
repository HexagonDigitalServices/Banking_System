const ACCOUNT_COLORS = {
  current: { bg: "bg-gray-900", label: "Current Account" },
  savings: { bg: "bg-green-500", label: "Savings Account" },
  investment: { bg: "bg-blue-600", label: "Investment Account" },
};

const QUICK_ACTIONS = [
  {
    label: "Send Money",
    color: "bg-blue-500",
    path: "/user/transfer",
    icon: <Send size={22} />,
  },
  {
    label: "Request",
    color: "bg-green-500",
    path: "/user/money-requests",
    icon: <Check size={22} />,
  },
  {
    label: "Pay Bills",
    color: "bg-purple-500",
    path: "/user/transfer",
    icon: <Receipt size={22} />,
  },
  {
    label: "Withdraw",
    color: "bg-yellow-500",
    path: "/user/deposit-withdraw",
    icon: <ArrowUpCircle size={22} />,
  },
];

  

  const getProcessedTransactions = () => {
    const ids = accounts.map((a) => a._id?.toString());
    const list = [];
    transactions.forEach((txn) => {
      const from = ids.includes(
        txn.fromAccount?._id?.toString() || txn.fromAccount?.toString(),
      );
      const to = ids.includes(
        txn.toAccount?._id?.toString() || txn.toAccount?.toString(),
      );
      if (txn.type === "transfer" && from && to) {
        list.push({
          ...txn,
          _displayId: `${txn._id}_out`,
          displayType: "debit",
          displayLabel: `Transfer: ${txn.fromAccount?.accountName || "Source"} ➔ ${txn.toAccount?.accountName || "Dest"}`,
          displaySign: "-",
          isInternal: true,
        });
        list.push({
          ...txn,
          _displayId: `${txn._id}_in`,
          displayType: "credit",
          displayLabel: `Received: ${txn.toAccount?.accountName || "Dest"} ⬅ ${txn.fromAccount?.accountName || "Source"}`,
          displaySign: "+",
          isInternal: true,
        });
      } else if (txn.type === "deposit" || (txn.type === "transfer" && to)) {
        list.push({
          ...txn,
          _displayId: txn._id,
          displayType: "credit",
          displayLabel: txn.description || "Deposit",
          displaySign: "+",
        });
      } else {
        list.push({
          ...txn,
          _displayId: txn._id,
          displayType: "debit",
          displayLabel: txn.description || "Withdrawal",
          displaySign: "-",
        });
      }
    });
    return list
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 8);
  };

  const savingsPct = Math.min(
    Math.round(((summary.totalBalance || 0) / 50000) * 100),
    100,
  );

  const STATS = [
    {
      label: "Total Balance",
      val: fmt(summary.totalBalance),
      color: "text-gray-900",
      icon: <Wallet size={20} className="text-yellow-600" />,
      bg: "bg-yellow-50",
    },
    {
      label: "Total Income",
      val: fmt(summary.monthlyIncome),
      color: "text-green-600",
      icon: <TrendingUp size={20} className="text-green-600" />,
      bg: "bg-green-50",
    },
    {
      label: "Expenses",
      val: fmt(summary.monthlyExpenses),
      color: "text-red-500",
      icon: <TrendingDown size={20} className="text-red-500" />,
      bg: "bg-red-50",
    },
    {
      label: "Savings Goal",
      val: `${savingsPct}%`,
      color: "text-blue-600",
      icon: <Target size={20} className="text-blue-600" />,
      bg: "bg-blue-50",
      extra: (
        <div className={s.progressBarOuter}>
          <div className={`${s.progressBarFill} w-[${savingsPct}%]`} />
        </div>
      ),
    },
  ];

 


        <div>
          <div className={s.sectionHeader}>
            <h3 className={s.sectionTitle}>Recent Transactions</h3>
            <button
              onClick={() => navigate("/user/transactions")}
              className={s.viewAllBtn}
            >
              View All
            </button>
          </div>
          <div className={s.transactionsContainer}>
            {transactions.length === 0 ? (
              <div className={s.emptyTransactions}>No transactions yet.</div>
            ) : (
              <div className={s.transactionsList}>
                {getProcessedTransactions().map((txn) => {
                  const isCredit = txn.displayType === "credit";
                  const cls = txn.isInternal
                    ? "bg-purple-100 text-purple-600"
                    : isCredit
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500";
                  const amountColor = txn.isInternal
                    ? "text-purple-600"
                    : isCredit
                      ? "text-green-600"
                      : "text-red-500";
                  return (
                    <div key={txn._displayId} className={s.transactionRow}>
                      <div className={`${s.txIconContainer} ${cls}`}>
                        {isCredit ? (
                          <ArrowDownLeft size={15} />
                        ) : (
                          <ArrowUpRight size={15} />
                        )}
                      </div>
                      <div className={s.txDetails}>
                        <p className={s.txLabel}>{txn.displayLabel}</p>
                        <p className={s.txDate}>{fmtDate(txn.createdAt)}</p>
                      </div>
                      <p className={`${s.txAmountBase} ${amountColor}`}>
                        {txn.displaySign}
                        {fmt(txn.amount)}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
    