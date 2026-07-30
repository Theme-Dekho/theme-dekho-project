import Link from "next/link";
import TopBar from "@/components/ai-builder/TopBar";
import SiteFooter from "@/components/ai-builder/SiteFooter";

const includes = [
  { icon: "📅", title: "Online Booking", desc: "Let customers book appointments or services directly from your site." },
  { icon: "💬", title: "WhatsApp Chat", desc: "One-tap WhatsApp button so customers can reach you instantly." },
  { icon: "📍", title: "Google Maps", desc: "Show your location and directions right on the page." },
  { icon: "🖼️", title: "Photo Gallery", desc: "Showcase your work, products, or space with a gallery." },
  { icon: "⭐", title: "Testimonials", desc: "Build trust with customer reviews and ratings." },
  { icon: "🧾", title: "Price / Service Menu", desc: "List your services and pricing clearly for visitors." },
  { icon: "📝", title: "Enquiry Forms", desc: "Capture leads with a simple contact or quote-request form." },
  { icon: "🔍", title: "SEO Ready", desc: "Clean, fast pages built to help you get found on Google." },
];

const steps = [
  { icon: "1️⃣", title: "Describe", desc: "Tell us your business name, industry, and what you offer — no technical detail needed." },
  { icon: "2️⃣", title: "Generate", desc: "AI drafts your homepage, pages, layout, and content instantly." },
  { icon: "3️⃣", title: "Review", desc: "Preview the live draft and tweak text, images, or colours." },
  { icon: "4️⃣", title: "Publish", desc: "Verify your phone number and your site goes live on your own domain." },
];

export default function ForSmallBusinessPage() {
  return (
    <>
      <TopBar />
      <header>
        <div className="header-inner">
          <a href="/" className="logo-text">
            Theme<span className="dot">Dekho</span>
          </a>
          <div className="header-cta">
            <Link href="/" className="btn btn-outline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 760, textAlign: "center" }}>
          <div className="section-eyebrow">Solutions · For Small Business</div>
          <h1 className="section-title">A professional website — without agencies or developers</h1>
          <p className="section-sub">
            Describe your business in plain language and Theme Dekho&apos;s AI drafts a complete, live website in
            minutes. Skip the cost, back-and-forth, and weeks of waiting that come with hiring a designer or
            developer.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 26, flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-generate">
              ✨ Start Building Free
            </Link>
            <Link href="/templates" className="btn btn-outline">
              Browse Templates
            </Link>
          </div>

          <div className="stat-row">
            <div>
              <strong>12,400+</strong>
              <span>websites generated</span>
            </div>
            <div>
              <strong>60 sec</strong>
              <span>average build time</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>rated by users</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="quote-block">
            <p>
              &ldquo;I used to pay a freelancer every time I wanted to update my price list or add a photo. Now I
              just describe the change and it&apos;s done in minutes — no back and forth, no extra invoice.&rdquo;
            </p>
            <span>— Priya, Owner, a salon &amp; spa business</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--light)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">What Your Website Can Include</div>
          <h2 className="section-title">Everything a small business needs</h2>
          <p className="section-sub">Pick what you need — AI adds the rest automatically based on your industry.</p>
          <div className="feat-grid">
            {includes.map((item) => (
              <div className="feat-card" key={item.title}>
                <div className="feat-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">From description to live site, in four steps</h2>
          <p className="section-sub">No technical knowledge required — our AI does the heavy lifting.</p>
          <div className="feat-grid">
            {steps.map((step) => (
              <div className="feat-card" key={step.title}>
                <div className="feat-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-banner">
          <h2>Start building your small business website today</h2>
          <p>Free to try — no credit card, no design skills needed.</p>
          <Link href="/" className="btn btn-generate" style={{ fontSize: 15, padding: "14px 30px" }}>
            ✨ Start Building Free
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
