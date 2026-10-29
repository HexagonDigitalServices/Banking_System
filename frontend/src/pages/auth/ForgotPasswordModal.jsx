const AnimInput = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightEl,
  required,
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
      />
      {rightEl}
    </div>
  );
};

const LoadingDots = () => (
  <span className={s.loadingContainer}>
    <span className={`${s.loadingDot} ${s.loadingDotDelay0}`} />
    <span className={`${s.loadingDot} ${s.loadingDotDelay150}`} />
    <span className={`${s.loadingDot} ${s.loadingDotDelay300}`} />
  </span>
);


  const STEP_LABELS = {
    1: "Enter your email to receive OTP",
    2: "Verify the OTP sent to your email",
    3: "Create a strong new password",
  };


              <React.Fragment key={sNum}>
                <div
                  className={`${s.stepCircleBase} ${
                    step > sNum
                      ? s.stepCompleted
                      : step === sNum
                        ? s.stepActive
                        : s.stepInactive
                  }`}
                >
                  {step > sNum ? <CheckCircle size={14} /> : sNum}
                </div>
                {sNum < 3 && (
                  <div
                    className={`${s.connector} ${
                      step > sNum ? s.connectorActive : s.connectorInactive
                    }`}
                  />
                )}
              </React.Fragment>
          
          {step === 2 && (
            <form onSubmit={handleVerifyOTP} className={s.formSpace}>
              <div
                className={`${s.timerBanner} ${
                  timer > 0 ? s.timerActiveBg : s.timerExpiredBg
                }`}
              >
                <Clock size={14} />
                {timer > 0
                  ? `OTP expires in ${Math.floor(timer / 60)}m ${timer % 60}s`
                  : "OTP expired — request a new one"}
              </div>
              <div>
                <label className={s.label}>OTP Code</label>
                <AnimInput
                  icon={ClipboardList}
                  placeholder="• • • • • •"
                  value={forgotOTP}
                  onChange={(e) => setForgotOTP(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={s.secondaryBtn}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={forgotLoading || timer === 0}
                  className={s.verifyBtn}
                >
                  {forgotLoading ? (
                    <>
                      <LoadingDots /> Verifying…
                    </>
                  ) : (
                    "Verify OTP"
                  )}
                </button>
              </div>
              <div className={s.resendContainer}>
                <p className={s.resendText}>
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={timer > 0 || forgotLoading}
                    className={`${s.resendLinkBase} ${
                      timer > 0 ? s.resendLinkDisabled : s.resendLinkEnabled
                    }`}
                  >
                    {timer > 0 ? `Wait ${timer}s to Resend` : "Resend OTP Now"}
                  </button>
                </p>
              </div>
            </form>
          )}
    
       