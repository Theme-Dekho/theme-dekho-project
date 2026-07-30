"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { templateSlug } from "@/lib/ai-builder/data";
import type { IndustryKey } from "@/lib/ai-builder/types";

const showcaseSites: {
  industryKey: IndustryKey;
  name: string;
  url: string;
  badge: string;
  headline: string;
  desc: string;
  gradient: string;
}[] = [
  {
    industryKey: "interior",
    name: "D'LIFE Interiors",
    url: "dlife-interiors.themedekho.com",
    badge: "⚡ Generated in 47 seconds",
    headline: '"Modern interior design studio in Jaipur"',
    desc: "Portfolio gallery, before/after slider, and a free quote calculator — all AI-generated.",
    gradient: "linear-gradient(135deg, var(--orange-light), var(--blue-light))",
  },
  {
    industryKey: "medical",
    name: "SmileCare Dental Studio",
    url: "smilecare-dental.themedekho.com",
    badge: "⚡ Generated in 52 seconds",
    headline: '"Family dental clinic in Pune"',
    desc: "Online appointment booking and doctor profile cards, ready in minutes.",
    gradient: "linear-gradient(135deg, var(--blue-light), var(--green-light))",
  },
  {
    industryKey: "realestate",
    name: "Skyline Realty",
    url: "skyline-realty.themedekho.com",
    badge: "⚡ Generated in 41 seconds",
    headline: '"Property listings across Mumbai"',
    desc: "EMI calculator, virtual tours, and a searchable property grid.",
    gradient: "linear-gradient(135deg, var(--green-light), var(--orange-light))",
  },
  {
    industryKey: "other",
    name: "Spice Route Restaurant",
    url: "spice-route.themedekho.com",
    badge: "⚡ Generated in 38 seconds",
    headline: '"Neighbourhood restaurant menu & booking"',
    desc: "Menu showcase, gallery, and a newsletter signup — built by AI.",
    gradient: "linear-gradient(135deg, var(--blue-light), var(--orange-light))",
  },
];

export default function DemoPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = showcaseSites.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % len);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, len]);

  return (
    <section
      className="section demo-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-inner">
        <div className="section-eyebrow">Live Preview</div>
        <h2 className="section-title">Make your website your competitive edge</h2>
        <p className="section-sub">
          Build a brand people trust, with a website that&apos;s live in minutes — not weeks.
        </p>

        <div className="showcase-stage">
          <div className="showcase-glow">
            {showcaseSites.map((site, i) => (
              <div
                key={site.name}
                className="showcase-glow-layer"
                style={{ background: site.gradient, opacity: i === active ? 1 : 0 }}
              />
            ))}
          </div>

          {showcaseSites.map((site, i) => {
            let diff = i - active;
            if (diff > len / 2) diff -= len;
            if (diff < -len / 2) diff += len;
            const abs = Math.abs(diff);
            const isActive = diff === 0;

            return (
              <div
                key={site.name}
                className={"showcase-slide" + (isActive ? " is-active" : "")}
                style={{
                  transform: `translate(-50%, -50%) translateX(${diff * 62}%) scale(${isActive ? 1 : 0.82})`,
                  zIndex: 10 - abs,
                  opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
                  pointerEvents: abs > 1 ? "none" : "auto",
                }}
                onClick={() => !isActive && setActive(i)}
              >
                <div className="demo-shell showcase-shell">
                  <div className="demo-topbar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="url">{site.url}</div>
                  </div>
                  <div className="demo-body" style={{ background: site.gradient }}>
                    <div className="demo-badge">{site.badge}</div>
                    <h2>{site.headline}</h2>
                    <p>{site.desc}</p>
                    <div className="demo-blocks">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                {isActive && (
                  <div className="showcase-meta">
                    <span className="showcase-name">{site.name}</span>
                    <Link
                      href={`/templates/${templateSlug(site.industryKey, site.name)}`}
                      className="showcase-view"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View website →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="showcase-controls">
          <div className="showcase-dots">
            {showcaseSites.map((site, i) => (
              <button
                key={site.name}
                type="button"
                className={"showcase-dot" + (i === active ? " active" : "")}
                onClick={() => setActive(i)}
                aria-label={`Show ${site.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
