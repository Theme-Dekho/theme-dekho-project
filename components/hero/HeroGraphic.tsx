import HeroStats from "@/components/hero/HeroStats";

const pills = [
  { icon: "🤖", title: "AI Powered", sub: "Smart Automation", className: "hg-pill-1" },
  { icon: "📊", title: "CRM Integrated", sub: "Lead Management", className: "hg-pill-2" },
  { icon: "🔍", title: "SEO Friendly", sub: "Google Optimized", className: "hg-pill-3" },
  { icon: "⚙️", title: "Custom Dev", sub: "WordPress & Shopify", className: "hg-pill-4" },
];

const svgLines = [
  { x2: 230, y2: 52, stroke: "#2563EB", dash: "4,5", opacity: 0.3 },
  { x2: 418, y2: 230, stroke: "#1A56DB", dash: "4,5", opacity: 0.3 },
  { x2: 230, y2: 408, stroke: "#1A56DB", dash: "4,5", opacity: 0.3 },
  { x2: 42, y2: 230, stroke: "#2563EB", dash: "4,5", opacity: 0.3 },
  { x2: 360, y2: 100, stroke: "#2563EB", dash: "3,6", opacity: 0.2 },
  { x2: 360, y2: 360, stroke: "#1A56DB", dash: "3,6", opacity: 0.2 },
  { x2: 100, y2: 100, stroke: "#1A56DB", dash: "3,6", opacity: 0.2 },
  { x2: 100, y2: 360, stroke: "#2563EB", dash: "3,6", opacity: 0.2 },
];

/** The decorative animated constellation graphic on the right side of the hero.
 *  Hidden on tablet/mobile via `.hero-graphic { display: none }` — same as the original. */
export default function HeroGraphic() {
  return (
    <div className="hero-graphic">
      <div className="hg-bg" />
      <div className="hg-ring1" />
      <div className="hg-ring2" />

      <svg className="hg-svg" viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg">
        {svgLines.map((line, i) => (
          <line
            key={i}
            x1={230}
            y1={230}
            x2={line.x2}
            y2={line.y2}
            stroke={line.stroke}
            strokeWidth={1}
            strokeDasharray={line.dash}
            opacity={line.opacity}
          />
        ))}
      </svg>

      <div className="hg-center">
        <div className="hg-center-icon">🌐</div>
        <div className="hg-center-num">
          5000<sup style={{ fontSize: 11, color: "rgba(255,255,255,0.9)" }}>+</sup>
        </div>
        <div className="hg-center-lbl">
          Websites
          <br />
          Served
        </div>
      </div>

      {pills.map((p) => (
        <div className={`hg-pill ${p.className}`} key={p.className}>
          <div className="hg-pill-icon">{p.icon}</div>
          <div className="hg-pill-text">
            <div className="hg-pill-title">{p.title}</div>
            <div className="hg-pill-sub">{p.sub}</div>
          </div>
        </div>
      ))}

      <HeroStats />
    </div>
  );
}
