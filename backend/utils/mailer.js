
    from: '"SecureBank" <>',
    to: toEmail,
    subject: "SecureBank — Password Reset OTP",
    html: `<div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:32px;border:1px solid #e5e7eb;border-radius:12px;"><h2 style="color:#1d4ed8;margin-bottom:4px;">SecureBank</h2><p style="color:#6b7280;margin-top:0;font-size:14px;">Secure Banking System</p><hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0;"/><p style="font-size:15px;color:#111827;">Your password reset OTP is:</p><div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:20px;text-align:center;margin:20px 0;"><span style="font-size:36px;font-weight:700;letter-spacing:12px;color:#1d4ed8;">${otp}</span></div><p style="font-size:13px;color:#6b7280;">This OTP expires in 1 minute. Do not share it.</p></div>`,



    from: '"SecureBank" <>',
    to: toEmail,
    subject: `SecureBank — Verify Your ${roleLabel} Registration`,
    html: `<div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:32px;border:1px solid #e5e7eb;border-radius:12px;"><h2 style="color:#1d4ed8;margin-bottom:4px;">SecureBank</h2><p style="color:#6b7280;margin-top:0;font-size:14px;">Secure Banking System</p><hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0;"/><p style="font-size:15px;color:#111827;">You are registering a <strong>${roleLabel}</strong>. Please verify your email with the OTP:</p><div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:20px;text-align:center;margin:20px 0;"><span style="font-size:36px;font-weight:700;letter-spacing:12px;color:#1d4ed8;">${otp}</span></div></div>`,
 

    from: '"SecureBank" <>',
    to: toEmail,
    subject: `Welcome to SecureBank — Your ${accountType} is Ready`,
    html: `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:32px;border:1px solid #e5e7eb;border-radius:12px;"><h2 style="color:#1d4ed8;margin-bottom:4px;">SecureBank</h2><p style="color:#6b7280;margin-top:0;font-size:14px;">Secure Banking System</p><hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0;"/><p style="font-size:15px;color:#111827;">Hi <strong>${firstName}</strong>, welcome!</p><p style="font-size:14px;color:#374151;">Your <strong>${accountType}</strong> has been created.</p><div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:20px 0;"><p>Acc No: ${accountNumber}</p><p>Email: ${loginEmail}</p><p>Pass: ${loginPassword}</p></div><p style="color:#ef4444;">Please change your password after login.</p></div>`,
    