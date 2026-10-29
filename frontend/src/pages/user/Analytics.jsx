import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getUserAnalytics } from "../../utils/api";
import { analyticsStyles as s } from "../../assets/dummyStyles";

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#64748b",
];

export default function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserAnalytics()
      .then((res) => setData(res.data))
      .catch(() => setData({ monthlyData: [], categories: [] }))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className={s.loadingContainer}>
        <div className={s.spinner} />
      </div>
    );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={s.tooltipContainer}>
          <p className={s.tooltipLabel}>{label}</p>
          {payload.map((p, i) => (
            <p
              key={i}
              className={
                p.dataKey === "income" ? s.incomeClass : s.spendingClass
              }
            >
              {p.name}: ₹{p.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={s.tooltipContainer}>
          <p className={s.tooltipName}>{payload[0].name}</p>
          <p className={s.tooltipValue}>₹{payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={s.pageContainer}>
      <div className="mb-6">
        <h1 className={s.headingTitle}>Financial Analytics</h1>
        <p className={s.headingSubtitle}>Track your spending and income</p>
      </div>

      <div className={s.grid}>
        <div className={s.card}>
          <h3 className={s.cardHeading}>Income vs Spending</h3>
          <div className={s.legendContainer}>
            <div className={s.legendRow}>
              <div className={s.greenDot} />
              <span className={s.legendText}>Income</span>
            </div>
            <div className={s.legendRow}>
              <div className={s.redDot} />
              <span className={s.legendText}>Spending</span>
            </div>
          </div>
          <div className={s.barChartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.monthlyData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f1f5f9"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) =>
                    `₹${v >= 1000 ? (v / 1000).toFixed(0) + "k" : v}`
                  }
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="income"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
                <Bar
                  dataKey="spending"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={s.card}>
          <h3 className={s.cardHeading}>Spending by Category</h3>
          <div className={s.pieCategoryRow}>
            <div className={s.pieChartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.categories}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="amount"
                    stroke="none"
                  >
                    {data.categories.map((cat, i) => (
                      <Cell
                        key={i}
                        fill={cat.color || COLORS[i % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={s.categoryListWrapper}>
              {data.categories.map((cat, i) => {
                const color = cat.color || COLORS[i % COLORS.length];
                return (
                  <div key={cat.name} className={s.categoryItem}>
                    <div
                      className={s.categoryDotShape}
                      style={{ backgroundColor: color }}
                    />
                    <div className="flex-1">
                      <div className={s.categoryFlexRow}>
                        <span className={s.categoryTextName}>
                          {cat.name} {cat.percentage}%
                        </span>
                        <span className={s.categoryTextAmount}>
                          ₹{cat.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className={s.categoryProgressBar}>
                        <div
                          className={s.categoryProgressFill}
                          style={{
                            width: `${cat.percentage}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
