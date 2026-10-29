const ACCOUNT_TYPES = [
  {
    value: "current",
    label: "Current Account",
    desc: "Day-to-day transactions & bill payments",
    min: 10000,
  },
  {
    value: "savings",
    label: "Savings Account",
    desc: "Earn interest on your deposits",
    min: 1000,
  },
  {
    value: "investment",
    label: "Investment Account",
    desc: "Grow your wealth with investment products",
    min: 25000,
  },
];
const MIN_MAP = { savings: 1000, current: 10000, investment: 25000 };
const TYPE_LABELS = {
  current: "Current",
  savings: "Savings",
  investment: "Investment",
};

const PERSONAL_FIELDS = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "email", label: "Email Address" },
  { key: "phone", label: "Phone Number" },
];
const RULES = [
  "Savings Min: ₹1,000 | Current Min: ₹10,000 | Investment Min: ₹25,000",
  "Your account will be pending until admin approves it",
  "You cannot withdraw or transfer until the account is approved",
  "Only 1 account of each type is allowed per customer",
];

          <div>
            <h3 className={s.accountTypeHeading}>Account Type *</h3>
            <div className={s.accountTypeList}>
              {ACCOUNT_TYPES.map((opt) => {
                const owned = existingTypes.includes(opt.value);
                const sel = form.accountType === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`${s.accountTypeLabelBase} ${owned ? s.accountTypeOwned : sel ? s.accountTypeSelected : s.accountTypeDefault}`}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value={opt.value}
                      disabled={owned}
                      checked={sel}
                      onChange={() => !owned && set("accountType", opt.value)}
                      className={s.radioInput}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`${s.accountTypeNameBase} ${owned ? s.accountTypeNameOwned : s.accountTypeNameDefault}`}
                        >
                          {opt.label}
                        </span>
                        {owned && (
                          <span className={s.alreadyOwnedBadge}>
                            Already Owned
                          </span>
                        )}
                      </div>
                      <p className={s.accountTypeDesc}>{opt.desc}</p>
                      <p className={s.accountTypeMin}>
                        Required Min: ₹{opt.min.toLocaleString()}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>