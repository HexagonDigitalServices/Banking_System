import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  getMyAccounts,
  getMyRequests,
  createMoneyRequest,
  respondToRequest,
} from "../../utils/api";
import { ArrowUp, Inbox, Send, Wallet, Lock, Banknote } from "lucide-react";
import { fmt } from "../../utils/helpers";
import { moneyRequestsStyles as s } from "../../assets/dummyStyles";

const statusBadge = (status) => {
  const map = {
    pending: s.statusPending,
    accepted: s.statusAccepted,
    rejected: s.statusRejected,
  };
  return (
    <span className={`${s.statusBadgeBase} ${map[status] || s.statusDefault}`}>
      {status}
    </span>
  );
};

export default function MoneyRequests() {
  const [tab, setTab] = useState("received");
  const [accounts, setAccounts] = useState([]);
  const [requests, setRequests] = useState({ sent: [], received: [] });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    senderAccountId: "",
    recipientAccountNumber: "",
    amount: "",
    description: "",
  });
  const [modal, setModal] = useState({
    isOpen: false,
    requestId: null,
    action: null,
    amount: 0,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [accRes, reqRes] = await Promise.all([
        getMyAccounts(),
        getMyRequests(),
      ]);
      setAccounts(accRes.data.accounts.filter((a) => a.status === "active"));
      setRequests(reqRes.data);
    } catch {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sub = async (e) => {
    e.preventDefault();
    if (
      !form.senderAccountId ||
      !form.recipientAccountNumber ||
      !form.amount ||
      parseFloat(form.amount) <= 0
    )
      return toast.error("Check fields");
    setLoading(true);
    try {
      await createMoneyRequest(form);
      toast.success("Sent!");
      setForm({
        senderAccountId: "",
        recipientAccountNumber: "",
        amount: "",
        description: "",
      });
      setTab("sent");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  const resp = async () => {
    const { requestId, action } = modal;
    setModal((m) => ({ ...m, isOpen: false }));
    setLoading(true);
    try {
      const res = await respondToRequest({ requestId, action });
      toast.success(res.data.message);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.header}>
        <h1 className={s.title}>
          <Wallet className={s.titleIcon} /> Money Requests
        </h1>
        <p className={s.subtitle}>
          Request payments or settle pending requests
        </p>
      </div>

      <div className={s.tabBar}>
        {[
          {
            k: "received",
            l: "Received",
            i: <Inbox size={16} />,
            b: requests.received.filter((r) => r.status === "pending").length,
          },
          { k: "sent", l: "Sent", i: <Send size={16} /> },
          { k: "new", l: "+ New Request" },
        ].map((t) => (
          <button
            key={t.k}
            onClick={() => setTab(t.k)}
            className={`${s.tabButtonBase} ${tab === t.k ? s.tabButtonActive : s.tabButtonInactive}`}
          >
            {t.i}
            {t.l}
            {t.b > 0 && <span className={s.badge}>{t.b}</span>}
          </button>
        ))}
      </div>

      <div className={s.mainCard}>
        {tab === "received" && (
          <div className={s.innerSection}>
            {requests.received.length === 0 ? (
              <div className={s.emptyState}>
                <Inbox size={48} className={s.emptyIcon} />
                <h3 className={s.emptyTitle}>No incoming requests</h3>
              </div>
            ) : (
              <div className={s.listDivider}>
                {requests.received.map((r) => (
                  <div key={r._id} className={s.receivedRow}>
                    <div className={s.rowLeft}>
                      <div className={s.avatarYellow}>
                        <Banknote size={20} className={s.avatarIcon} />
                      </div>
                      <div>
                        <p className={s.recipientName}>
                          {r.sender?.firstName} {r.sender?.lastName}
                        </p>
                        <p className={s.description}>
                          {r.description || "General Fund Request"}
                        </p>
                      </div>
                    </div>
                    <div className={s.rowRight}>
                      <div className={s.amountRight}>
                        <p className={s.amountBold}>{fmt(r.amount)}</p>
                        {r.status === "pending" ? (
                          <p className={s.actionText}>Action Required</p>
                        ) : (
                          statusBadge(r.status)
                        )}
                      </div>
                      {r.status === "pending" && (
                        <div className={s.buttonsRow}>
                          <button
                            onClick={() =>
                              setModal({
                                isOpen: true,
                                requestId: r._id,
                                action: "accept",
                                amount: r.amount,
                              })
                            }
                            className={s.payButton}
                          >
                            Pay Now
                          </button>
                          <button
                            onClick={() =>
                              setModal({
                                isOpen: true,
                                requestId: r._id,
                                action: "reject",
                                amount: r.amount,
                              })
                            }
                            className={s.rejectButton}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "sent" && (
          <div className={s.innerSection}>
            {requests.sent.length === 0 ? (
              <div className={s.sentEmpty}>
                <Send size={48} className={s.emptyIcon} />
                <h3 className={s.sentEmptyTitle}>No requests sent</h3>
                <button
                  onClick={() => setTab("new")}
                  className={s.createButton}
                >
                  Create Request
                </button>
              </div>
            ) : (
              <div className={s.listDivider}>
                {requests.sent.map((r) => (
                  <div key={r._id} className={s.sentRow}>
                    <div className={s.sentLeft}>
                      <div className={s.sentAvatar}>
                        <ArrowUp size={16} />
                      </div>
                      <div>
                        <p className={s.sentRecipientName}>
                          Request to {r.recipientUser?.firstName}
                        </p>
                        <p className={s.sentDate}>
                          {new Date(r.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className={s.sentAmount}>
                      <p className={s.sentAmountBold}>{fmt(r.amount)}</p>
                      {statusBadge(r.status)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "new" && (
          <div className={s.newRequestSection}>
            <h2 className={s.newRequestTitle}>New Money Request</h2>
            <form onSubmit={sub} className={s.formSpace}>
              <div>
                <label className={s.label}>Receiving Account</label>
                <select
                  className={s.select}
                  value={form.senderAccountId}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, senderAccountId: e.target.value }))
                  }
                >
                  <option value="">Select account</option>
                  {accounts.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.accountName} — {a.accountNumber}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={s.label}>Recipient Account Number</label>
                <input
                  className={s.input}
                  placeholder="Enter account number"
                  value={form.recipientAccountNumber}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      recipientAccountNumber: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className={s.twoColGrid}>
                <div>
                  <label className={s.label}>Amount (₹)</label>
                  <input
                    className={s.input}
                    type="number"
                    value={form.amount}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, amount: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className={s.label}>Description</label>
                  <input
                    className={s.input}
                    value={form.description}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, description: e.target.value }))
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={s.submitButton}
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>
        )}
      </div>

      {modal.isOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>
              {modal.action === "accept"
                ? "Authorize Payment"
                : "Reject Request"}
            </h3>
            <p className={s.modalText}>
              {modal.action === "accept"
                ? "Approving this authorizes a fund transfer."
                : "Rejecting will notify the sender."}
            </p>
            {modal.action === "accept" && (
              <div className={s.darkCard}>
                <div>
                  <p className={s.darkCardLabel}>Total Value</p>
                  <p className={s.darkCardAmount}>{fmt(modal.amount)}</p>
                </div>
                <Lock size={24} className={s.darkCardIcon} />
              </div>
            )}
            <div className={s.modalButtons}>
              <button
                onClick={() => setModal((m) => ({ ...m, isOpen: false }))}
                className={s.modalCancel}
              >
                Cancel
              </button>
              <button
                onClick={resp}
                disabled={loading}
                className={`${s.modalAccept} ${modal.action === "accept" ? s.modalAcceptBg : s.modalRejectBg}`}
              >
                {loading
                  ? "..."
                  : modal.action === "accept"
                    ? `Pay ${fmt(modal.amount)}`
                    : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
