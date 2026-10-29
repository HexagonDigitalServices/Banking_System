
// --- AUTHENTICATION ENDPOINTS ---
// Authenticates user credentials and returns session tokens.
export const login = (data) => API.post("/auth/login", data);
export const sendRegistrationOTP = (data) =>
  API.post("/auth/register/send-otp", data);
export const verifyRegistrationOTP = (data) =>
  API.post("/auth/register/verify-otp", data);

export const getMe = () => API.get("/auth/me");
export const changePassword = (data) => API.put("/auth/change-password", data);

// --- ACCOUNT MANAGEMENT ---
// Retrieves the list of accounts belonging to the currently authenticated user.
export const getMyAccounts = () => API.get("/accounts/my");
export const createAccount = (data) => API.post("/accounts/create", data);
export const getAllAccounts = (params) =>
  API.get("/accounts/admin/all", { params });
export const adminCreateAccount = (data) =>
  API.post("/accounts/admin/create", data);
export const updateAccountStatus = (id, data) =>
  API.patch(`/accounts/admin/${id}/status`, data);
export const deleteAccount = (id) => API.delete(`/accounts/admin/${id}`);
export const getPendingAccounts = () => API.get("/accounts/admin/pending");
export const approveAccount = (id) =>
  API.patch(`/accounts/admin/${id}/approve`);
export const rejectAccount = (id, data) =>
  API.patch(`/accounts/admin/${id}/reject`, data);
export const getAccountHistory = (id) =>
  API.get(`/accounts/admin/${id}/history`);

// --- TRANSACTION SERVICES ---
// Initiates a standard deposit transaction for the user's account.
export const deposit = (data) => API.post("/transactions/deposit", data);
export const withdraw = (data) => API.post("/transactions/withdraw", data);
export const transfer = (data) => API.post("/transactions/transfer", data);
export const getMyTransactions = (params) =>
  API.get("/transactions/my", { params });
export const getMiniStatement = (params) =>
  API.get("/transactions/mini-statement", { params });
export const adminDeposit = (data) =>
  API.post("/transactions/admin/deposit", data);
export const adminWithdraw = (data) =>
  API.post("/transactions/admin/withdraw", data);
export const adminTransfer = (data) =>
  API.post("/transactions/admin/transfer", data);
export const getAllTransactions = () => API.get("/transactions/admin/all");
export const getReports = (params) =>
  API.get("/transactions/admin/reports", { params });
export const getAdminDashboard = () => API.get("/admin/dashboard");
export const getAllUsers = () => API.get("/admin/users");
export const toggleUserStatus = (id) => API.patch(`/admin/users/${id}/toggle`);
export const getUserAnalytics = () => API.get("/user/analytics");

// --- PEER-TO-PEER MONEY REQUESTS ---
// Creates a new payment request targeting another user's account.
export const createMoneyRequest = (data) =>
  API.post("/money-requests/create", data);
export const getMyRequests = () => API.get("/money-requests/my");
export const respondToRequest = (data) =>
  API.post("/money-requests/respond", data);

export const getMyNotifications = () => API.get("/notifications");
export const markNotificationAsRead = (id) =>
  API.patch(`/notifications/${id}/read`);
export const markAllNotificationsAsRead = () =>
  API.patch("/notifications/read-all");

export default API;

// Forgot password OTP
export const sendForgotOTP = (data) =>
  API.post("/auth/forgot-password/send-otp", data);
export const verifyForgotOTP = (data) =>
  API.post("/auth/forgot-password/verify-otp", data);
export const resetPasswordOTP = (data) =>
  API.post("/auth/forgot-password/reset", data);