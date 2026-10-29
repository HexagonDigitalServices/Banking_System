const GRADIENTS = {
  savings: "from-green-500 to-green-700",
  investment: "from-blue-500 to-blue-700",
  current: "from-gray-700 to-gray-900",
};

const TYPE_COLOR = {
  deposit: "bg-green-100 text-green-700",
  withdrawal: "bg-red-100 text-red-700",
  transfer: "bg-blue-100 text-blue-700",
};

useEffect(() => {
  setLoading(true);
  getAccountHistory(id)
    .then((res) => {
      if (res.data.success) setData(res.data);
      else navigate("/admin/accounts");
    })
    .catch(() => {
      toast.error("Failed to load account history.");
      navigate("/admin/accounts");
    })
    .finally(() => setLoading(false));
}, [id, navigate]);

const exportCSV = () => {
  if (!data?.transactions?.length) return toast.error("No data to export.");
  const headers =
    "Transaction ID,Type,Amount (₹),Fee (₹),From/To Account,Description,Initiated By,Status,Date";
  const rows = data.transactions.map((t) =>
    [
      t.transactionId,
      t.type,
      t.amount,
      t.fee ?? 0,
      t.fromAccountNumber || t.toAccountNumber || "",
      `"${(t.description ?? "").replace(/"/g, '""')}"`,
      t.initiatedBy
        ? `${t.initiatedBy.firstName} ${t.initiatedBy.lastName}`
        : "",
      t.status,
      new Date(t.createdAt).toLocaleString(),
    ].join(","),
  );
  const blob = new Blob([`${headers}\n${rows.join("\n")}`], {
    type: "text/csv",
  });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), {
    href: url,
    download: `account-${data.account?.accountNumber}-history.csv`,
  });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

if (loading)
  return (
    <div className={s.loadingContainer}>
      <div className={s.spinner} />
    </div>
  );
if (!data) return null;

const { account, transactions, stats } = data;
const owner = account.userId ?? {};
const accountIdStr = account._id?.toString();
const gradient = GRADIENTS[account.accountType] || GRADIENTS.current;
const filteredTxns =
  filterType === "all"
    ? transactions
    : transactions.filter((t) => t.type === filterType);

const STAT_CARDS = [
  {
    label: "Total Txns",
    value: stats.totalTransactions,
    icon: <BarChart3 size={18} />,
    cls: "bg-blue-50 text-blue-600",
  },
  {
    label: "Deposited",
    value: fmt(stats.totalDeposited),
    icon: <ArrowDownCircle size={18} />,
    cls: "bg-green-50 text-green-600",
  },
  {
    label: "Withdrawn",
    value: fmt(stats.totalWithdrawn),
    icon: <ArrowUpCircle size={18} />,
    cls: "bg-red-50 text-red-600",
  },
  {
    label: "Transfers Out",
    value: fmt(stats.totalTransferred),
    icon: <MoveHorizontal size={18} />,
    cls: "bg-purple-50 text-purple-600",
  },
];

<div className="flex-1 space-y-4">
  {/* Summary stat cards */}
  <div className={s.statGrid}>
    {STAT_CARDS.map(({ label, value, icon, cls }) => (
      <div key={label} className={s.statCard}>
        <div>
          <p className={s.statLabel}>{label}</p>
          <p className={s.statValue}>{value}</p>
        </div>
        <div className={`${s.statIconContainer} ${cls}`}>{icon}</div>
      </div>
    ))}
  </div>

  {/* Transaction history table with type filter */}
  <div className={s.tableContainer}>
    <div className={s.tableHeaderRow}>
      <h3 className={s.tableTitle}>
        Transaction History ({filteredTxns.length})
      </h3>
      <div className="flex items-center gap-2">
        {["Deposit", "Withdrawal", "Transfer"].map((t) => (
          <button
            key={t}
            onClick={() =>
              setFilterType(
                filterType === t.toLowerCase() ? "all" : t.toLowerCase(),
              )
            }
            className={`${s.filterButtonBase} ${
              filterType === t.toLowerCase() ? s.filterActive : s.filterInactive
            }`}
          >
            {t}
          </button>
        ))}
        <button onClick={exportCSV} className={s.exportButton}>
          <Download size={14} /> Export
        </button>
      </div>
    </div>

    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            {["Ref ID", "Type", "Amount", "Account", "Date", "Status"].map(
              (h) => (
                <th key={h} className={s.th}>
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {filteredTxns.length === 0 ? (
            <tr>
              <td colSpan="6" className={s.emptyRow}>
                No transactions found.
              </td>
            </tr>
          ) : (
            filteredTxns.map((t) => {
              const isCredit =
                t.type === "deposit" ||
                (t.type === "transfer" &&
                  (t.toAccount?._id?.toString() === accountIdStr ||
                    t.toAccountNumber === account.accountNumber));
              return (
                <tr key={t._id} className={s.tr}>
                  <td className={`${s.td} ${s.refId}`}>
                    {t.transactionId.slice(-12)}
                  </td>
                  <td className={s.td}>
                    <span
                      className={`${s.typeBadgeBase} ${
                        TYPE_COLOR[t.type] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>
                  <td
                    className={`${s.td} ${s.amountBase} ${
                      isCredit ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCredit ? "+" : "-"}
                    {fmt(t.amount)}
                  </td>
                  <td className={`${s.td} ${s.otherAccount}`}>
                    {isCredit
                      ? t.fromAccountNumber || "External"
                      : t.toAccountNumber || "External"}
                  </td>
                  <td className={`${s.td} ${s.date}`}>
                    {fmtDateTime(t.createdAt)}
                  </td>
                  <td
                    className={`${s.td} ${s.statusBase} ${
                      t.status === "completed"
                        ? "text-green-600"
                        : "text-amber-500"
                    }`}
                  >
                    {t.status}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>