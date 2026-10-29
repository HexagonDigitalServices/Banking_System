const BADGE = {
  pending: { cls: "bg-yellow-100 text-yellow-700", label: "⏳ Pending" },
  rejected: { cls: "bg-red-100 text-red-700", label: "✕ Rejected" },
  active: { cls: "bg-green-100 text-green-700", label: "● Active" },
  frozen: { cls: "bg-blue-100 text-blue-700", label: "❄ Frozen" },
};

const StatusBadge = ({ status, approvalStatus }) => {
  const key =
    approvalStatus === "pending"
      ? "pending"
      : status === "rejected" || approvalStatus === "rejected"
        ? "rejected"
        : status;
  const b = BADGE[key] || { cls: "bg-gray-100 text-gray-700", label: status };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${b.cls}`}
    >
      {b.label}
    </span>
  );
};

const MIN_DEP = { savings: 1000, current: 10000, investment: 25000 };
const INPUT_CLS =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500";
const FORM_FIELDS = [
  {
    label: "First Name",
    key: "ownerFirstName",
    placeholder: "John",
    required: true,
  },
  { label: "Last Name", key: "ownerLastName", placeholder: "Doe" },
  {
    label: "Email",
    key: "ownerEmail",
    placeholder: "john@email.com",
    type: "email",
  },
  { label: "Phone", key: "ownerPhone", placeholder: "+91 xxxxx xxxxx" },
];
const BLANK_FORM = {
  ownerFirstName: "",
  ownerLastName: "",
  ownerEmail: "",
  ownerPhone: "",
  ownerAddress: "",
  accountType: "current",
  initialDeposit: "",
  loginPassword: "",
};


  return (
    <div className={s.pageContainer}>
      <div className={s.headerRow}>
        <div>
          <h1 className={s.title}>Accounts Management</h1>
          <p className={s.subtitle}>Manage all customer accounts</p>
        </div>
        <button onClick={() => setShowModal(true)} className={s.addButton}>
          + Add New Account
        </button>
      </div>

      {pendingAccounts.length > 0 && activeTab !== "pending" && (
        <div className={s.pendingBanner}>
          <div className="flex items-center gap-3">
            <span className={s.pendingIcon}>🔔</span>
            <div>
              <p className={s.pendingBannerTitle}>
                {pendingAccounts.length} account
                {pendingAccounts.length > 1 ? "s" : ""} awaiting approval
              </p>
              <p className={s.pendingBannerDesc}>
                New applications need review.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab("pending")}
            className={s.reviewButton}
          >
            Review Now →
          </button>
        </div>
      )}

      <div className={s.tabBar}>
        <button
          onClick={() => setActiveTab("all")}
          className={`${s.tabButton} ${activeTab === "all" ? s.tabActiveAll : s.tabInactive}`}
        >
          All Accounts ({accounts.length})
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`relative ${s.tabButton} ${activeTab === "pending" ? s.tabActivePending : s.tabInactive}`}
        >
          Pending{" "}
          {pendingAccounts.length > 0 && (
            <span className={s.pendingBadge}>{pendingAccounts.length}</span>
          )}
        </button>
      </div>

      {activeTab === "all" && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className={s.searchContainer}>
            <div className={s.searchInputWrapper}>
              <div className={s.searchIcon}>
                <Search size={16} />
              </div>
              <input
                className={s.searchInput}
                placeholder="Search by account number or customer name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className={s.table}>
              <thead>
                <tr className={s.theadRow}>
                  {[
                    "Account No.",
                    "Customer Name",
                    "Type",
                    "Phone",
                    "Status",
                    "Balance",
                    "Created Date",
                  ].map((h) => (
                    <th key={h} className={s.thBase}>
                      {h}
                    </th>
                  ))}
                  <th className={s.thRight}>Actions</th>
                </tr>
              </thead>
              <tbody className={s.tbody}>
                {loading ? (
                  <tr>
                    <td colSpan="8" className={s.loadingRow}>
                      <div className={s.spinner} />
                    </td>
                  </tr>
                ) : accounts.length === 0 ? (
                  <tr>
                    <td colSpan="8" className={s.emptyRow}>
                      No accounts found.
                    </td>
                  </tr>
                ) : (
                  accounts.map((acc) => (
                    <tr key={acc._id} className={s.row}>
                      <td className={s.accountNumberCell}>
                        <span className={s.accountNumberBadge}>
                          {acc.accountNumber}
                        </span>
                      </td>
                      <td className={s.nameCell}>
                        <p className={s.name}>
                          {acc.ownerFirstName || acc.userId?.firstName}{" "}
                          {acc.ownerLastName || acc.userId?.lastName}
                        </p>
                        <p className={s.email}>
                          {acc.ownerEmail || acc.userId?.email}
                        </p>
                      </td>
                      <td className={s.typeCell}>{acc.accountType}</td>
                      <td className={s.phoneCell}>
                        {acc.ownerPhone || acc.userId?.phone || "—"}
                      </td>
                      <td className={s.statusCell}>
                        <StatusBadge
                          status={acc.status}
                          approvalStatus={acc.approvalStatus}
                        />
                      </td>
                      <td className={s.balanceCell}>{fmt(acc.balance)}</td>
                      <td className={s.dateCell}>{fmtDate(acc.createdAt)}</td>
                      <td className={s.actionsCell}>
                        <div className={s.actionsRow}>
                          <button
                            onClick={() =>
                              navigate(`/admin/accounts/${acc._id}`)
                            }
                            className={`${s.actionBtn} ${s.viewBtn}`}
                            title="View"
                          >
                            <Eye size={16} />
                          </button>
                          {(acc.status === "active" ||
                            acc.status === "frozen") && (
                            <button
                              onClick={() =>
                                handleStatusToggle(acc._id, acc.status)
                              }
                              className={`${s.actionBtn} ${acc.status === "active" ? s.toggleActiveBtn : s.toggleFrozenBtn}`}
                              title={
                                acc.status === "active" ? "Freeze" : "Activate"
                              }
                            >
                              {acc.status === "active" ? (
                                <Lock size={16} />
                              ) : (
                                <Unlock size={16} />
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(acc._id)}
                            className={`${s.actionBtn} ${s.deleteBtn}`}
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "pending" && (
        <div>
          {pendingAccounts.length === 0 ? (
            <div className={s.pendingEmptyCard}>
              <div className={s.pendingEmptyIcon}>✨</div>
              <h3 className={s.pendingEmptyTitle}>All Caught Up!</h3>
              <p className={s.pendingEmptyDesc}>
                No pending account applications.
              </p>
            </div>
          ) : (
            <div className={s.pendingCardsGrid}>
              {pendingAccounts.map((acc) => (
                <div key={acc._id} className={s.pendingCard}>
                  <div className={s.pendingCardHeader}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={s.pendingAccountNumber}>
                          {acc.accountNumber}
                        </span>
                        <span className={s.pendingTypeTag}>
                          {acc.accountType}
                        </span>
                      </div>
                      <h4 className={s.pendingName}>
                        {acc.ownerFirstName || acc.userId?.firstName}{" "}
                        {acc.ownerLastName || acc.userId?.lastName}
                      </h4>
                      <p className={s.pendingEmail}>
                        {acc.ownerEmail || acc.userId?.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={s.pendingDepositLabel}>Initial Deposit</p>
                      <p className={s.pendingDepositValue}>
                        {fmt(acc.initialDeposit)}
                      </p>
                    </div>
                  </div>
                  {acc.ownerAddress && (
                    <p className={s.pendingAddress}>
                      <span>📍</span>
                      {acc.ownerAddress}
                    </p>
                  )}
                  <div className={s.pendingButtons}>
                    <button
                      onClick={() => navigate(`/admin/accounts/${acc._id}`)}
                      className={s.pendingDetailsBtn}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => {
                        setRejectTarget(acc);
                        setRejectReason("");
                        setShowRejectModal(true);
                      }}
                      className={s.pendingRejectBtn}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApprove(acc._id)}
                      className={s.pendingApproveBtn}
                    >
                      Approve Account
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showRejectModal && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>Reject Application</h3>
            <p className={s.modalSubtitle}>Provide a reason for rejection.</p>
            <div className={s.modalInfoBox}>
              <p className={s.modalInfoName}>
                {rejectTarget?.ownerFirstName} {rejectTarget?.ownerLastName}
              </p>
              <p className={s.modalInfoAccount}>
                {rejectTarget?.accountNumber}
              </p>
            </div>
            <label className={s.label}>Reason for Rejection</label>
            <textarea
              className={s.textarea}
              rows={4}
              placeholder="Visible to customer..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowRejectModal(false)}
                className={s.cancelBtn}
              >
                Cancel
              </button>
              <button onClick={handleReject} className={s.confirmRejectBtn}>
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className={s.createModalOverlay}>
          <div className={s.createModalContent}>
            <div className={s.createModalHeader}>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Create New Account
                </h3>
                <p className="text-sm text-gray-500">
                  Register a new customer account manually.
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className={s.closeBtn}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleCreate} className={s.formBody}>
              <div className={s.formGrid}>
                {FORM_FIELDS.map((f) => (
                  <div key={f.key}>
                    <label className={s.label}>
                      {f.label}
                      {f.required && <span className={s.requiredStar}> *</span>}
                    </label>
                    <input
                      type={f.type || "text"}
                      className={`${INPUT_CLS} focus:border-blue-500`}
                      placeholder={f.placeholder}
                      required={f.required}
                      value={form[f.key]}
                      onChange={(e) => set(f.key, e.target.value)}
                    />
                  </div>
                ))}
                <div>
                  <label className={s.label}>
                    Login Password <span className={s.requiredStar}>*</span>
                  </label>
                  <div className={s.pwWrapper}>
                    <input
                      type={showLoginPw ? "text" : "password"}
                      className={s.pwInput}
                      placeholder="Min 8 characters"
                      value={form.loginPassword}
                      onChange={(e) => set("loginPassword", e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPw((p) => !p)}
                      className={s.pwToggle}
                    >
                      {showLoginPw ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </div>
                  <p className={s.pwHint}>
                    User will receive credentials via welcome email
                  </p>
                </div>
              </div>
              <div>
                <label className={s.label}>Address</label>
                <input
                  className={`${INPUT_CLS} focus:border-blue-500`}
                  placeholder="Full address"
                  value={form.ownerAddress}
                  onChange={(e) => set("ownerAddress", e.target.value)}
                />
              </div>
              <div className={s.formGrid}>
                <div>
                  <label className={s.label}>Account Type</label>
                  <select
                    className={`${INPUT_CLS} ${s.select}`}
                    value={form.accountType}
                    onChange={(e) => set("accountType", e.target.value)}
                  >
                    <option value="current">Current Account</option>
                    <option value="savings">Savings Account</option>
                    <option value="investment">Investment Account</option>
                  </select>
                </div>
                <div>
                  <label className={s.label}>
                    Initial Deposit (Min ₹
                    {(MIN_DEP[form.accountType] || 0).toLocaleString()})
                  </label>
                  <input
                    type="number"
                    min={MIN_DEP[form.accountType] || 0}
                    step="0.01"
                    className={`${INPUT_CLS} focus:border-blue-500`}
                    placeholder={`Min ₹${(MIN_DEP[form.accountType] || 0).toLocaleString()}`}
                    value={form.initialDeposit}
                    onChange={(e) => set("initialDeposit", e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={s.submitBtn}
              >
                {submitting ? "Creating..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );