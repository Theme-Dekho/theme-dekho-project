"use client";

import Link from "next/link";
import HeroGraphic from "@/components/hero/HeroGraphic";
import { useSite } from "@/lib/site-context";

export default function Hero() {
  const { customQuoteModal } = useSite();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="dot" />
            INDIA&apos;S NO.1 WEBSITE DEVELOPMENT COMPANY (WEBSITE BUILD WITH AI)
          </div>

          <h1>
            Affordable &amp; Custom Website
            <br />
            Built for <em>Indian Startup</em>
          </h1>

          <p className="hero-sub">
            10,000+ websites built for Healthcare, Interior Design, E-Commerce, Real Estate
            &amp; Tour &amp; Travel businesses. Launch your professional website today.
          </p>

          <div className="hero-actions">
            {/* <Link href="#templates" className="btn-primary">
              Explore Portfolio &rarr;
            </Link> */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <span className="click-tag">Free</span>
              <button className="btn-secondary-outline" onClick={customQuoteModal.open}>
                &#9654; Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
