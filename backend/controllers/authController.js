export const resetPasswordWithOTP = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const { otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return fail(res, 400, "Email, OTP, and new password are required.");
    }

    if (newPassword.length < 8) {
      return fail(res, 400, "Password must be at least 8 characters.");
    }

    const record = otpStore.get(email);
    if (!isOTPValid(record, otp.trim())) {
      return fail(res, 400, "Invalid or expired OTP.");
    }

    // Only regular users can use this flow — not admins
    const user = await User.findOne({ email, role: "user" });
    if (!user) {
      return fail(res, 404, "User account not found.");
    }

    user.password = newPassword;
    await user.save();
    otpStore.delete(email);

    return ok(res, 200, { message: "Password reset successfully. Please login." });
  } catch (err) {
    return fail(res, 500, err.message);
  }
};
