userRouter.get("/analytics", protect, async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.user._id });
    const accountIds = accounts.map((a) => a._id);
    const transactions = await Transaction.find({
      $or: [
        { fromAccount: { $in: accountIds } },
        { toAccount: { $in: accountIds } },
      ],
      status: "completed",
    }).sort("-createdAt");

    const monthlyData = {};
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let categoryMap = {};
    let totalSpending = 0;

    const ids = accountIds.map((id) => id.toString());

    transactions.forEach((t) => {
      const month = months[new Date(t.createdAt).getMonth()];
      if (!monthlyData[month])
        monthlyData[month] = { month, income: 0, spending: 0 };

      const toMe = t.toAccount && ids.includes(t.toAccount.toString());
      const fromMe = t.fromAccount && ids.includes(t.fromAccount.toString());

      const isIncome =
        (t.type === "deposit" && toMe) ||
        (t.type === "transfer" && toMe && !fromMe);

      const isExpense =
        (t.type === "withdrawal" && fromMe) ||
        (t.type === "transfer" && fromMe && !toMe);

      if (isIncome) {
        monthlyData[month].income += t.amount;
      } else if (isExpense) {
        monthlyData[month].spending += t.amount;
        const cat = t.category || "Other";
        if (!categoryMap[cat]) categoryMap[cat] = 0;
        categoryMap[cat] += t.amount;
        totalSpending += t.amount;
      }
    });

    const categoryColors = {
      Shopping: "#6366f1",
      "Food & Dining": "#a855f7",
      Utilities: "#ec4899",
      Entertainment: "#f59e0b",
      Transportation: "#10b981",
      "Bank Fees": "#ef4444",
      Other: "#64748b",
    };

    let categories = [];
    if (totalSpending === 0) {
      categories = [
        {
          name: "No Spending Yet",
          percentage: 100,
          amount: 0,
          color: "#cbd5e1",
        },
      ];
    } else {
      categories = Object.keys(categoryMap)
        .map((name) => ({
          name,
          amount: categoryMap[name],
          percentage: Math.round((categoryMap[name] / totalSpending) * 100),
          color: categoryColors[name] || categoryColors["Other"],
        }))
        .sort((a, b) => b.amount - a.amount);
    }

    res.json({
      success: true,
      monthlyData: Object.values(monthlyData).slice(-6),
      categories,
      totalTransactions: transactions.length,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});