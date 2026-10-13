export const getDashboardStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const [
      totalUsers,
      activeAccounts,
      pendingApprovals,
      todayDeposits,
      todayWithdrawals,
      last7Days,
      distribution,
      recentActivity,
    ] = await Promise.all([
      User.countDocuments({ role: "user" }),
      Account.countDocuments({ status: "active" }),
      Account.countDocuments({ approvalStatus: "pending" }),
      Transaction.aggregate([
        {
          $match: {
            type: "deposit",
            status: "completed",
          },
        },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]),
      Transaction.aggregate([
        {
          $match: {
            type: "withdrawal",
            status: "completed",
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: { $add: ["$amount", { $ifNull: ["$fee", 0] }] } },
          },
        },
      ]),
      Transaction.aggregate([
        { $match: { createdAt: { $gte: sevenDaysAgo } } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
            amount: { $sum: "$amount" },
          },
        },
        { $sort: { _id: 1 } },
      ]),
      Transaction.aggregate([
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 },
            total: { $sum: "$amount" },
          },
        },
      ]),
      Transaction.find()
        .populate("initiatedBy", "firstName lastName")
        .sort("-createdAt")
        .limit(10),
    ]);
    res.json({
      success: true,
      stats: {
        totalCustomers: totalUsers,
        totalDepositsToday: todayDeposits[0]?.total || 0,
        withdrawalsToday: todayWithdrawals[0]?.total || 0,
        activeAccounts,
        pendingApprovals,
      },
      last7Days,
      distribution,
      recentActivity,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};