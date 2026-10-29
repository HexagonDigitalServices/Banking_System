const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const pw = form.newPassword;
  const reqs = [
    { label: "At least 8 characters", met: pw.length >= 8 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(pw) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(pw) },
    { label: "Contains number", met: /\d/.test(pw) },
    {
      label: "Contains special character",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(pw),
    },
  ];
  const allReqsMet = reqs.every((r) => r.met);

   
                {
                  key: "currentPassword",
                  label: "Current Password",
                  placeholder: "Enter current password",
                  showKey: "current",
                },
                {
                  key: "newPassword",
                  label: "New Password",
                  placeholder: "Enter new password",
                  showKey: "new",
                },
                {
                  key: "confirmPassword",
                  label: "Confirm New Password",
                  placeholder: "Confirm new password",
                  showKey: "confirm",
                },
      

        
        

        <div className={s.rightColumn}>
          <div className={s.requirementCard}>
            <div className={s.requirementsHeader}>
              <ShieldCheck size={16} color="#3b82f6" />
              <h4 className={s.requirementsTitle}>Password Requirements</h4>
            </div>
            <div className={s.requirementsList}>
              {reqs.map((r) => (
                <div key={r.label} className={s.requirementItem}>
                  <div
                    className={`${s.reqCircleBase} ${r.met ? s.reqCircleMet : s.reqCircleNotMet}`}
                  >
                    {r.met ? (
                      <Check size={10} color="#16a34a" />
                    ) : (
                      <div className={s.reqCircleDot} />
                    )}
                  </div>
                  <span
                    className={`${s.reqLabelBase} ${r.met ? s.reqLabelMet : s.reqLabelNotMet}`}
                  >
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
            <div className={s.progressBarContainer}>
              <div className={s.progressBarOuter}>
                <div
                  className={`${s.progressBarInnerBase} ${allReqsMet ? s.progressBarInnerComplete : s.progressBarInnerIncomplete}`}
                  style={{
                    width: `${Math.round((reqs.filter((r) => r.met).length / reqs.length) * 100)}%`,
                  }}
                />
              </div>
              <p className={s.progressText}>
                {reqs.filter((r) => r.met).length}/{reqs.length} requirements
                met
              </p>
            </div>
          </div>

          <div className={s.tipCard}>
            <h4 className={s.tipTitle}>Security Tips</h4>
            <ul className={s.tipList}>
              {[
                "Use a unique password for this account",
                "Never share your password with anyone",
                "Change your password regularly",
                "Avoid using personal information",
              ].map((tip) => (
                <li key={tip} className={s.tipItem}>
                  <span className={s.tipBullet}>•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
    