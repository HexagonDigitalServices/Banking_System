<div>
  <label className={s.fieldLabel}>Category</label>
  <div className={s.selectWrapper}>
    <select
      className={s.selectField}
      value={form.category}
      onChange={(e) => set("category", e.target.value)}
    >
      {[
        "Shopping",
        "Food & Dining",
        "Utilities",
        "Entertainment",
        "Transportation",
        "Bank Fees",
        "Other",
      ].map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
    <div className={s.selectIcon}>
      <ChevronDown size={16} />
    </div>
  </div>
</div>