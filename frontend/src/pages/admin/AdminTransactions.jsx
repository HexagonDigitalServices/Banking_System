

      <div className={s.tableCard}>
        <div className={s.tableHeader}>
          <h3 className={s.tableTitle}>Recent Transactions</h3>
          <button
            onClick={fetchTransactions}
            className={s.refreshBtn}
            title="Refresh"
          >
            <RefreshCw size={15} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className={s.table}>
            <thead>
              <tr className={s.theadRow}>
                {[
                  "Transaction ID",
                  "Account No.",
                  "Type",
                  "Amount",
                  "Date & Time",
                  "Description",
                ].map((h) => (
                  <th key={h} className={s.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {loading ? (
                <tr>
                  <td colSpan="6" className={s.tableLoadingRow}>
                    <div className={s.loadingSpinner} />
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan="6" className={s.tableEmptyRow}>
                    No transactions yet
                  </td>
                </tr>
              ) : (
                transactions.map((txn) => {
                  const typeBadgeCls =
                    txn.type === "deposit"
                      ? s.typeBadgeDeposit
                      : txn.type === "withdrawal"
                        ? s.typeBadgeWithdrawal
                        : s.typeBadgeTransfer;
                  const amountColor =
                    txn.type === "deposit" ? s.amountCredit : s.amountDefault;
                  const typeLabel =
                    txn.type === "deposit"
                      ? "Deposit"
                      : txn.type === "withdrawal"
                        ? "Withdrawal"
                        : "Transfer";
                  return (
                    <tr key={txn._id} className={s.tableRow}>
                      <td className={s.tdTransactionId}>
                        {txn.transactionId || "---"}
                      </td>
                      <td className={s.tdAccount}>
                        {txn.toAccountNumber || txn.fromAccountNumber || "---"}
                      </td>
                      <td className={s.tdType}>
                        <span className={`${s.typeBadgeBase} ${typeBadgeCls}`}>
                          {typeLabel}
                        </span>
                      </td>
                      <td className={s.tdAmount}>
                        <span className={`text-sm font-bold ${amountColor}`}>
                          {fmt(txn.amount)}
                        </span>
                      </td>
                      <td className={s.tdDate}>{fmtDateTime(txn.createdAt)}</td>
                      <td className={s.tdDescription}>
                        {txn.description || "---"}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
   