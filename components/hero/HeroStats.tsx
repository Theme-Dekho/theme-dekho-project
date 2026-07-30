const stats = [
  { icon: "📱", value: "Mobile", label: "Friendly", className: "hg-stat-1" },
  { icon: "⚡", value: "Light", label: "Speed", className: "hg-stat-2" },
  { icon: "💻", value: "Latest", label: "Technology", className: "hg-stat-3", small: true },
  { icon: "🔒", value: "SSL", label: "Secure", className: "hg-stat-4" },
];

/** The 4 small floating stat cards positioned on the diagonals of the hero graphic. */
export default function HeroStats() {
  return (
    <>
      {stats.map((s) => (
        <div className={`hg-stat ${s.className}`} key={s.className}>
          <div className="hg-stat-icon">{s.icon}</div>
          <div className="hg-stat-num" style={{ fontSize: s.small ? "11px" : "13px" }}>
            {s.value}
          </div>
          <div className="hg-stat-lbl">{s.label}</div>
        </div>
      ))}
    </>
  );
}
