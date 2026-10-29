import React, { useState, useEffect } from "react";
import { getMyAccounts, getMiniStatement } from "../../utils/api";
import { fmt, fmtDateTime } from "../../utils/helpers";
import {
  ChevronDown,
  Printer,
  Download,
  ArrowDownLeft,
  ArrowUpRight,
  Inbox,
} from "lucide-react";
import { miniStatementStyles as s } from "../../assets/dummyStyles";

const SelectWrapper = ({ label, value, onChange, children }) => (
  <div>
    <label className={s.selectLabel}>{label}</label>
    <div className={s.selectWrapper}>
      <select className={s.selectField} value={value} onChange={onChange}>
        {children}
      </select>
      <div className={s.selectChevron}>
        <ChevronDown size={14} />
      </div>
    </div>
  </div>
);

export default function MiniStatement() {
  const [accounts, setAccounts] = useState([]);
  const [selected, setSelected] = useState("");
  const [count, setCount] = useState("5");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyAccounts().then((res) => {
      setAccounts(res.data.accounts);
      if (res.data.accounts.length > 0) setSelected(res.data.accounts[0]._id);
    });
  }, []);

  useEffect(() => {
    if (selected) fetchStatement();
  }, [selected, count]);

  const fetchStatement = async () => {
    setLoading(true);
    try {
      const res = await getMiniStatement({ accountId: selected, count });
      setData(res.data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const selectedAcc = accounts.find((a) => a._id === selected);

  const handlePrint = () => window.print();

  const handleDownload = () => {
    if (!data) return;
    const rows = data.transactions
      .map(
        (t) =>
          `"${(t.description || t.type).replace(/"/g, '""')}",${t.type},${t.isCredit ? "Credit" : "Debit"},${t.amount ?? 0},${fmtDateTime(t.createdAt)},${t.balanceAfterTransaction ?? ""}`,
      )
      .join("\n");
    const blob = new Blob(
      [`Description,Type,CR/DR,Amount,Date,Balance After\n${rows}`],
      { type: "text/csv" },
    );
    const a = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(blob),
      download: `statement_${selectedAcc?.accountNumber || "account"}.csv`,
    });
    a.click();
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.printHeader}>
        <div className={s.printHeaderRow}>
          <div>
            <div className={s.printHeaderTitle}>SecureBank</div>
            <div className={s.printHeaderSubtitle}>Mini Statement Snapshot</div>
          </div>
          <div className={s.printHeaderMeta}>
            <p>GEN: {new Date().toLocaleDateString("en-GB")}</p>
            <p>REF: {Math.random().toString(36).slice(2, 10).toUpperCase()}</p>
          </div>
        </div>
      </div>

      <div className={s.screenHeader}>
        <h1 className={s.screenTitle}>Mini Statement</h1>
        <p className={s.screenSubtitle}>View your recent transactions</p>
      </div>

      <div className={s.printAccountRow}>
        {[
          ["Account Name", selectedAcc?.accountName],
          ["Account Number", selectedAcc?.accountNumber],
          ["Type", selectedAcc?.accountType],
          ["Closing Balance", fmt(selectedAcc?.balance)],
        ].map(([l, v]) => (
          <div key={l}>
            <p className={s.printAccountLabel}>{l}</p>
            <p className={s.printAccountValue}>{v}</p>
          </div>
        ))}
      </div>

      <div className={s.mainCard}>
        {/* Controls row */}
        <div className={s.controlsRow}>
          <div className={s.controlsFlex}>
            <div className={s.selectorsGroup}>
              <SelectWrapper
                label="Select Account"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {accounts.map((a) => (
                  <option key={a._id} value={a._id}>
                    {a.accountName} — ••••{a.accountNumber.slice(-4)}
                  </option>
                ))}
              </SelectWrapper>
              <SelectWrapper
                label="Transactions"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              >
                <option value="5">Last 5</option>
                <option value="10">Last 10</option>
                <option value="20">Last 20</option>
              </SelectWrapper>
            </div>
            <div className={s.buttonsGroup}>
              <button onClick={handlePrint} className={s.printButton}>
                <Printer size={14} />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button onClick={handleDownload} className={s.downloadButton}>
                <Download size={14} />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={s.loadingContainer}>
            <div className={s.spinner} />
          </div>
        ) : data ? (
          <div className={s.contentContainer}>
            {/* Screen-only account info card */}
            <div className={s.accountInfoCard}>
              <div>
                <p className={s.bankName}>SecureBank</p>
                <p className={s.accountStatementLabel}>Account Statement</p>
              </div>
              <div className={s.accountDetailsContainer}>
                <p className={s.accountName}>
                  {selectedAcc?.accountName} — ••••
                  {selectedAcc?.accountNumber.slice(-4)}
                </p>
                <p className={s.balanceLabel}>
                  Balance:{" "}
                  <span className={s.balanceAmount}>
                    {fmt(selectedAcc?.balance)}
                  </span>
                </p>
                <p className={s.generatedText}>
                  Generated: {new Date().toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>

            {/* Print-only table */}
            <div className={s.printTableContainer}>
              <table className={s.printTable}>
                <thead>
                  <tr className={s.printTheadRow}>
                    {[
                      "DATE & TIME",
                      "DESCRIPTION",
                      "TYPE",
                      "CR/DR",
                      "AMOUNT",
                      "BALANCE",
                    ].map((h) => (
                      <th
                        key={h}
                        className={`${s.printThBase}${h === "AMOUNT" || h === "BALANCE" ? " " + s.printThRight : ""}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={s.printTbody}>
                  {(data.transactions || []).map((txn, idx) => (
                    <tr
                      key={txn._id}
                      className={idx % 2 === 0 ? s.printRowEven : s.printRowOdd}
                    >
                      <td className={`${s.printTdBase} ${s.printTdFontMono}`}>
                        {fmtDateTime(txn.createdAt)}
                      </td>
                      <td className={`${s.printTdBase} ${s.printTdMedium}`}>
                        {txn.description || txn.type}
                      </td>
                      <td className={`${s.printTdBase} ${s.printTdCapitalize}`}>
                        {txn.type}
                      </td>
                      <td className={s.printTdBase}>
                        <span
                          className={`${s.printCrDrBase} ${txn.isCredit ? s.printCr : s.printDr}`}
                        >
                          {txn.isCredit ? "CR" : "DR"}
                        </span>
                      </td>
                      <td
                        className={`${s.printTdBase} ${s.printAmountTdBase} ${txn.isCredit ? s.printAmountCredit : s.printAmountDebit}`}
                      >
                        {txn.isCredit ? "+" : "-"}
                        {fmt(txn.amount)}
                      </td>
                      <td className={`${s.printTdBase} ${s.printBalanceTd}`}>
                        {txn.balanceAfterTransaction != null
                          ? fmt(txn.balanceAfterTransaction)
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={s.printFooterRow}>
                <div className={s.printFooterLeft}>
                  <p>© 2025 SecureBank — System Generated Document</p>
                  <p>
                    Electronic verification: SB-SEC-VER-
                    {Math.random().toString(36).slice(2, 6).toUpperCase()}
                  </p>
                </div>
                <div className={s.printSeal}>Digital Seal</div>
              </div>
            </div>

            {/* Screen transaction list */}
            {data.transactions.length === 0 ? (
              <div className={s.emptyState}>
                <Inbox size={48} strokeWidth={1} className={s.emptyIcon} />
                <p className={s.emptyText}>
                  No transactions found for this period.
                </p>
              </div>
            ) : (
              <div className={s.transactionList}>
                {data.transactions.map((txn) => (
                  <div key={txn._id} className={s.transactionRow}>
                    <div
                      className={`${s.txIconBase} ${txn.isCredit ? s.txIconCredit : s.txIconDebit}`}
                    >
                      {txn.isCredit ? (
                        <ArrowDownLeft size={14} />
                      ) : (
                        <ArrowUpRight size={14} />
                      )}
                    </div>
                    <div className={s.txDetail}>
                      <p className={s.txDescription}>
                        {txn.description || txn.type}
                      </p>
                      <div className={s.txMeta}>
                        <p className={s.txDate}>{fmtDateTime(txn.createdAt)}</p>
                        <span
                          className={`${s.txBadgeBase} ${txn.isCredit ? s.txBadgeCredit : s.txBadgeDebit}`}
                        >
                          {txn.isCredit ? "Credit" : "Debit"}
                        </span>
                        <span className={s.txType}>{txn.type}</span>
                      </div>
                    </div>
                    <div className={s.txAmountContainer}>
                      <p
                        className={`${s.txAmountBase} ${txn.isCredit ? s.txAmountCredit : s.txAmountDebit}`}
                      >
                        {txn.isCredit ? "+" : "-"}
                        {fmt(txn.amount)}
                      </p>
                      {txn.balanceAfterTransaction != null && (
                        <p className={s.txBalanceAfter}>
                          Bal: {fmt(txn.balanceAfterTransaction)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
