import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import toast from "react-hot-toast";
import { getReports, getAllAccounts } from "../../utils/api";
import {
  Search,
  Download,
  Check,
  Repeat,
  Activity,
  BarChart2,
  Banknote,
} from "lucide-react";
import { fmt, fmtDate, fmtDateTime } from "../../utils/helpers";
import { adminReportsStyles as s } from "../../assets/dummyStyles";

const toInputDate = (d) => d.toISOString().split("T")[0];

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");

const TYPE_BADGE = {
  deposit: s.typeBadgeDeposit,
  withdrawal: s.typeBadgeWithdrawal,
  transfer: s.typeBadgeTransfer,
};

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={s.chartTooltip}>
      <p className={s.chartTooltipLabel}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {fmt(p.value)}
        </p>
      ))}
    </div>
  );
};

export default function AdminReports() {
  const today = new Date();
  const monthAgo = new Date(today);
  monthAgo.setDate(today.getDate() - 30);

  const [filters, setFilters] = useState({
    fromDate: toInputDate(monthAgo),
    toDate: toInputDate(today),
    accountNumber: "all",
    type: "all",
  });
  const [data, setData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllAccounts()
      .then((res) => setAccounts(res.data.accounts || []))
      .catch(() => {});
    fetchReports(filters);
  }, []);

  const fetchReports = async (f = filters) => {
    setLoading(true);
    try {
      const res = await getReports({
        fromDate: f.fromDate,
        toDate: f.toDate,
        accountNumber: f.accountNumber !== "all" ? f.accountNumber : undefined,
        type: f.type !== "all" ? f.type : undefined,
      });
      setData(res.data);
    } catch {
      toast.error("Failed to load reports. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    if (!data?.transactions?.length) return toast.error("No data to export.");
    const rows = data.transactions.map((t) =>
      [
        t.transactionId,
        t.toAccountNumber || t.fromAccountNumber || "",
        `${t.initiatedBy?.firstName || ""} ${t.initiatedBy?.lastName || ""}`.trim(),
        t.type,
        t.amount,
        new Date(t.createdAt).toLocaleString(),
        `"${(t.description || "").replace(/"/g, '""')}"`,
      ].join(","),
    );
    const csv = `Transaction ID,Account No,Customer,Type,Amount,Date & Time,Description\n${rows.join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const a = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(blob),
      download: `report_${filters.fromDate}_to_${filters.toDate}.csv`,
    });
    a.click();
    URL.revokeObjectURL(a.href);
    toast.success("CSV exported successfully.");
  };

  const setF = (k, v) => setFilters((f) => ({ ...f, [k]: v }));

  const summary = data?.summary || {};
  const dailyTrend = data?.dailyTrend || [];

  const STAT_CARDS = [
    {
      label: "Total Transactions",
      val: summary.total || 0,
      icon: <BarChart2 size={22} className={s.statTextIndigo} />,
      bg: s.statIconBgIndigo,
      cls: s.statTextIndigo,
    },
    {
      label: "Total Deposits",
      val: fmt(summary.totalDeposits),
      icon: <Check size={22} className={s.statTextGreen} />,
      bg: s.statIconBgGreen,
      cls: s.statTextGreen,
    },
    {
      label: "Total Withdrawals",
      val: fmt(summary.totalWithdrawals),
      icon: <Banknote size={22} className={s.statTextRed} />,
      bg: s.statIconBgRed,
      cls: s.statTextRed,
    },
    {
      label: "Total Transfers",
      val: fmt(summary.totalTransfers),
      icon: <Repeat size={22} className={s.statTextYellow} />,
      bg: s.statIconBgYellow,
      cls: s.statTextYellow,
    },
  ];

  return (
    <div className={s.pageContainer}>
      <div className={s.headerMargin}>
        <h1 className={s.title}>Reports & Analytics</h1>
        <p className={s.subtitle}>
          Generate transaction reports and view analytics
        </p>
      </div>

      {/* Filter panel */}
      <div className={s.filterPanel}>
        <div className={s.filterHeader}>
          <div className={s.filterHeaderIconRow}>
            <Search size={16} className={s.filterHeaderIcon} />
            <h3 className={s.filterHeaderTitle}>Filter Transactions</h3>
          </div>
          <button onClick={exportCSV} className={s.exportBtn}>
            <Download size={14} /> Export CSV
          </button>
        </div>
        <div className={s.filterGrid}>
          <div>
            <label className={s.filterLabel}>From Date</label>
            <input
              type="date"
              className={s.input}
              value={filters.fromDate}
              onChange={(e) => setF("fromDate", e.target.value)}
            />
          </div>
          <div>
            <label className={s.filterLabel}>To Date</label>
            <input
              type="date"
              className={s.input}
              value={filters.toDate}
              onChange={(e) => setF("toDate", e.target.value)}
            />
          </div>
          <div>
            <label className={s.filterLabel}>Account</label>
            <select
              className={s.select}
              value={filters.accountNumber}
              onChange={(e) => setF("accountNumber", e.target.value)}
            >
              <option value="all">All Accounts</option>
              {accounts.map((a) => (
                <option key={a._id} value={a.accountNumber}>
                  {a.accountNumber}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={s.filterLabel}>Transaction Type</label>
            <select
              className={s.select}
              value={filters.type}
              onChange={(e) => setF("type", e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="deposit">Deposit</option>
              <option value="withdrawal">Withdrawal</option>
              <option value="transfer">Transfer</option>
            </select>
          </div>
        </div>
        <div className={s.applyBtnRow}>
          <button
            onClick={() => fetchReports(filters)}
            disabled={loading}
            className={s.applyBtn}
          >
            {loading ? "Loading..." : "Apply Filters"}
          </button>
        </div>
      </div>

      {/* Summary stat cards */}
      <div className={s.statGrid}>
        {STAT_CARDS.map((card) => (
          <div key={card.label} className={s.statCard}>
            <div>
              <p className={s.statLabel}>{card.label}</p>
              <p className={`${s.statValueBase} ${card.cls}`}>{card.val}</p>
            </div>
            <div className={`${s.statIconContainer} ${card.bg}`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Daily trend line chart */}
      <div className={s.chartCard}>
        <div className={s.chartHeader}>
          <Activity size={16} className={s.chartHeaderIcon} />
          <h3 className={s.chartTitle}>Daily Transaction Trends</h3>
        </div>
        {dailyTrend.length > 0 ? (
          <div className={s.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyTrend}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f1f5f9"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) =>
                    `₹${v >= 1000 ? (v / 1000).toFixed(0) + "k" : v}`
                  }
                />
                <Tooltip content={<ChartTooltip />} />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
                <Line
                  type="monotone"
                  dataKey="deposits"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  dot={false}
                  name="Deposits"
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="transfers"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={false}
                  name="Transfers"
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="withdrawals"
                  stroke="#ef4444"
                  strokeWidth={2.5}
                  dot={false}
                  name="Withdrawals"
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className={s.chartEmpty}>
            No transaction data for selected date range
          </div>
        )}
      </div>

      {/* Transaction details table */}
      <div className={s.tableCard}>
        <div className={s.tableHeader}>
          <h3 className={s.tableHeaderTitle}>
            Transaction Details ({summary.total || 0})
          </h3>
        </div>
        <div className={s.tableWrapper}>
          <table className={s.table}>
            <thead>
              <tr className={s.theadRow}>
                {[
                  "Transaction ID",
                  "Account No.",
                  "Customer",
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
                  <td colSpan="7" className={s.tableLoadingRow}>
                    <div className={s.tableLoadingSpinner} />
                  </td>
                </tr>
              ) : !data?.transactions?.length ? (
                <tr>
                  <td colSpan="7" className={s.tableEmptyRow}>
                    No transactions found for the selected filters
                  </td>
                </tr>
              ) : (
                data.transactions.map((txn) => (
                  <tr key={txn._id} className={s.tableRow}>
                    <td className={s.tdId}>{txn.transactionId}</td>
                    <td className={s.tdAccount}>
                      {txn.toAccountNumber || txn.fromAccountNumber || "-"}
                    </td>
                    <td className={s.tdCustomer}>
                      {txn.initiatedBy
                        ? `${txn.initiatedBy.firstName} ${txn.initiatedBy.lastName}`
                        : "-"}
                    </td>
                    <td className={s.tdType}>
                      <span
                        className={`${s.typeBadgeBase} ${
                          TYPE_BADGE[txn.type] || s.typeBadgeDefault
                        }`}
                      >
                        {cap(txn.type)}
                      </span>
                    </td>
                    <td className={s.tdAmount}>{fmt(txn.amount)}</td>
                    <td className={s.tdDate}>{fmtDateTime(txn.createdAt)}</td>
                    <td className={s.tdDescription}>
                      {txn.description || "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
