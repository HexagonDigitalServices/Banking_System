const PIE_COLORS = ["#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6"];

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={s.tooltipContainer}>
      <p className={s.tooltipLabel}>{fmtDateShort(label)}</p>
      {payload.map((p, i) => (
        <p key={i}>
          {p.name}: {p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const PieTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={s.tooltipContainer}>
      <p className={s.tooltipName}>{payload[0].name}</p>
      <p className={s.tooltipValue}>{payload[0].value} Accounts</p>
    </div>
  );
};

const buildActivityList = (recent) => {
  const list = [];
  recent.forEach((txn) => {
    if (txn.type === "transfer") {
      list.push({
        ...txn,
        _displayId: `${txn._id}_out`,
        displayType: "transfer out",
        displayAccount: txn.fromAccountNumber,
        displayColor: "bg-orange-100 text-orange-700",
      });
      list.push({
        ...txn,
        _displayId: `${txn._id}_in`,
        displayType: "transfer in",
        displayAccount: txn.toAccountNumber,
        displayColor: "bg-blue-100 text-blue-700",
      });
    } else {
      list.push({
        ...txn,
        _displayId: txn._id,
        displayType: txn.type,
        displayAccount: txn.toAccountNumber || txn.fromAccountNumber,
        displayColor:
          txn.type === "deposit"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700",
      });
    }
  });
  return list
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 15);
};


  const STAT_CARDS = [
    {
      label: "Total Customers",
      value: stats.totalCustomers || 0,
      icon: <Users size={22} className="text-blue-600" />,
      iconBg: "bg-blue-50",
      valueColor: "text-gray-900",
    },
    {
      label: "Total Deposits",
      value: fmt(stats.totalDepositsToday),
      icon: <ArrowUpRight size={22} className="text-green-600" />,
      iconBg: "bg-green-50",
      valueColor: "text-green-600",
    },
    {
      label: "Total Withdrawals",
      value: fmt(stats.withdrawalsToday),
      icon: <ArrowDownLeft size={22} className="text-red-600" />,
      iconBg: "bg-red-50",
      valueColor: "text-red-600",
    },
    {
      label: "Active Accounts",
      value: stats.activeAccounts || 0,
      icon: <Activity size={22} className="text-purple-600" />,
      iconBg: "bg-purple-50",
      valueColor:
        stats.pendingApprovals > 0 ? "text-yellow-500" : "text-gray-900",
    },
  ];

 


      <div className={s.chartsGrid}>
        <div className={s.chartCard}>
          <h3 className={s.chartTitle}>Transaction Distribution</h3>
          {pieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  dataKey="value"
                  stroke="none"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className={s.chartEmpty}>No transaction data yet</div>
          )}
        </div>

        <div className={s.chartCard}>
          <h3 className={s.chartTitle}>Last 7 Days Activity</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={last7}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f1f5f9"
                vertical={false}
              />
              <XAxis
                dataKey="_id"
                tickFormatter={(d) => fmtDateShort(d)}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{
                  r: 4,
                  fill: "#fff",
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent activity table */}
      <div className={s.tableCard}>
        <div className={s.tableHeader}>
          <h3 className={s.tableHeaderTitle}>Recent Activity</h3>
        </div>
        {recent.length === 0 ? (
          <div className={s.emptyActivity}>
            <Activity size={40} className="text-gray-300 mb-3" />
            <p>No recent activity</p>
          </div>
        ) : (
          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr className={s.theadRow}>
                  {[
                    "Transaction ID",
                    "Type",
                    "Amount",
                    "Account",
                    "Date",
                    "Status",
                  ].map((h) => (
                    <th key={h} className={s.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={s.tbody}>
                {buildActivityList(recent).map((txn) => {
                  const isCredit =
                    txn.displayType === "deposit" ||
                    txn.displayType === "transfer in";
                  return (
                    <tr key={txn._displayId} className={s.row}>
                      <td className={s.tdId}>{txn.transactionId || "---"}</td>
                      <td className={s.tdBase}>
                        <span
                          className={`${s.typeBadgeBase} ${txn.displayColor}`}
                        >
                          {txn.displayType}
                        </span>
                      </td>
                      <td
                        className={`${s.tdAmount} ${
                          isCredit ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {isCredit ? "+" : "-"}
                        {fmt(txn.amount)}
                      </td>
                      <td className={s.tdAccount}>
                        {txn.displayAccount || "---"}
                      </td>
                      <td className={s.tdDate}>
                        {fmtDateShort(txn.createdAt)}
                      </td>
                      <td className={s.tdBase}>
                        <span
                          className={`${s.statusBadgeBase} ${
                            txn.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : txn.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    