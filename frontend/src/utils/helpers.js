export const fmt = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n || 0);

export const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const fmtDateShort = (d) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export const fmtDateTime = (d) =>
  new Date(d).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export const toInputDate = (d) => d.toISOString().split("T")[0];

export const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");