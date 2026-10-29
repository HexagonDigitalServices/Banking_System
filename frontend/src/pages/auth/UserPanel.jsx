const AnimInput = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightEl,
  required,
  autoComplete,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`${s.inputWrapperBase} ${
        focused ? s.inputWrapperFocusedExtras : s.inputWrapperUnfocusedExtras
      }`}
    >
      {Icon && (
        <Icon
          size={16}
          className={`${s.iconBase} ${
            focused ? s.iconFocused : s.iconUnfocused
          }`}
        />
      )}
      <input
        type={type}
        className={s.inputField}
        placeholder={focused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete={autoComplete}
      />
      {rightEl}
    </div>
  );
};

function useRipple() {
  const [ripples, setRipples] = useState([]);
  const addRipple = (e) => {
    const btn = e.currentTarget.getBoundingClientRect(),
      size = Math.max(btn.width, btn.height) * 2,
      id = Date.now();
    setRipples((r) => [
      ...r,
      {
        id,
        x: e.clientX - btn.left - size / 2,
        y: e.clientY - btn.top - size / 2,
        size,
      },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rr) => rr.id !== id)), 650);
  };
  return { ripples, addRipple };
}

const RippleButton = ({
  children,
  onClick,
  disabled,
  className,
  type = "button",
}) => {
  const { ripples, addRipple } = useRipple();
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${s.rippleButtonBase} ${s.rippleButtonAfter} ${className}`}
      onClick={(e) => {
        addRipple(e);
        onClick && onClick(e);
      }}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
          className={s.ripple}
        />
      ))}
      {children}
    </button>
  );
};

const LoadingDots = () => (
  <span className={s.loadingContainer}>
    <span className={s.loadingDot} />
    <span className={`${s.loadingDot} ${s.loadingDotDelay150}`} />
    <span className={`${s.loadingDot} ${s.loadingDotDelay300}`} />
  </span>
);

  const regFields = [
    { l: "First Name", k: "firstName", i: User, p: "John", r: true, h: true },
    { l: "Last Name", k: "lastName", i: User, p: "Doe", r: true, h: true },
    {
      l: "Username",
      k: "username",
      i: AtSign,
      p: "Choose a username",
      r: true,
    },
    {
      l: "Email Address",
      k: "email",
      i: Mail,
      p: "john@example.com",
      r: true,
      t: "email",
    },
    { l: "Phone", k: "phone", i: Phone, p: "+91 xxxxx", h: true },
    {
      l: "Password",
      k: "password",
      i: Lock,
      p: "Min 8 chars",
      r: true,
      t: "password",
      h: true,
    },
  ];




          {tab === "register" && regStep === 2 && (
            <div>
              <div className={s.regStep2Header}>
                <h2 className={s.headingLarge}>Verify Your Email</h2>
                <p className={s.subheading}>
                  OTP sent to{" "}
                  <span className={s.emailHighlight}>{regForm.email}</span>
                </p>
              </div>
              <div
                className={`${s.timerBanner} ${
                  regTimer > 0 ? s.timerActiveBg : s.timerExpiredBg
                }`}
              >
                <Clock size={14} />
                {regTimer > 0 ? `OTP expires in ${regTimer}s` : "OTP expired"}
              </div>
              <form onSubmit={handleVerifyRegOTP} className={s.formSpace}>
                <div>
                  <label className={s.regStep2Label}>Enter OTP</label>
                  <AnimInput
                    icon={ClipboardList}
                    placeholder="• • • • • •"
                    value={regOTP}
                    onChange={(e) => setRegOTP(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setRegStep(1);
                      clearInterval(regTimerRef.current);
                    }}
                    className={s.backButton}
                  >
                    ← Back
                  </button>
                  <RippleButton
                    type="submit"
                    disabled={regLoading || regTimer === 0}
                    className={s.verifyButton}
                  >
                    {regLoading ? (
                      <>
                        <LoadingDots /> Verifying…
                      </>
                    ) : (
                      "Verify & Create Account"
                    )}
                  </RippleButton>
                </div>
                <div className={s.resendContainer}>
                  <p className={s.resendText}>
                    Didn't receive?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setRegLoading(true);
                        sendRegistrationOTP(regForm)
                          .then(() => {
                            toast.success("OTP sent!");
                            setRegOTP("");
                            startTimer();
                          })
                          .finally(() => setRegLoading(false));
                      }}
                      disabled={regTimer > 0 || regLoading}
                      className={`${s.resendBtnBase} ${
                        regTimer > 0 ? s.resendBtnInactive : s.resendBtnActive
                      }`}
                    >
                      {regTimer > 0 ? `Wait ${regTimer}s` : "Resend OTP"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        