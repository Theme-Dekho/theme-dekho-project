"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./ecommerce-development.css";

const ecommercePlatforms = [
    {
        number: "01",
        name: "WordPress",
        title:
        "Attractive themes with feature-loaded plugins",
        description:
        "WordPress is always the most preferred CMS platform because it's extensively user-friendly and has ready-to-use plugins. For an ecommerce website, WordPress proposes limitless customization options and supports 24 languages — it fits every business's needs. We have dedicated WordPress developers offering dynamic solutions by implementing advanced content management integrations and technological systems. Our ecommerce web development services through WordPress prioritize performance optimization and security augmentation for a seamless online shopping experience.",
    },

    {
        number: "02",
        name: "Magento",
        title:
        "Enormous flexibility and scalable results",
        description:
        "Magento is the ideal ecommerce platform for multi-branding and businesses with complex workflows. With sophisticated custom web development features, it supports both B2B and B2C businesses. Magento furnishes a cross-channel shopping experience where consumers can purchase through an app, online, or in-store. Being SEO-friendly and offering 150 languages, Magento is substantially popular. Our developers design on-demand Magento websites with superior inventory management and state-of-the-art user experience — we specialize in responsive theme development, extension development, migration, and upgradation, with certified Magento developers delivering a personalized experience for higher sales.",
    },

    {
        number: "03",
        name: "Shopify",
        title:
        "Attractive interface with improved functionalities",
        description:
        "Today, there are around 4.5 million active Shopify stores worldwide. Since its inception, Shopify has become the ecommerce bandwagon. Ecommerce development on Shopify has a compelling design with innovative features — if you want to offer consumers smooth navigation and the ultimate purchase experience, Shopify is your iconic solution. Enriched with storefront customizations, marketing applications, and mobile-responsive themes, Shopify fulfills your marketing goals. We build Shopify websites with a mind-boggling user interface that boosts sales, using diverse tools for secure payments, shipping operations, and efficient inventory management.",
    },

    {
        number: "04",
        name: "WooCommerce",
        title:
        "Simplify website browsing and amplify global community",
        description:
        "For a fully functional ecommerce website with eye-catching elements, WooCommerce is an outstanding platform. Designed to support multi-device responsiveness, WooCommerce websites provide an exceptional browsing experience. Among other platforms, WooCommerce is highly competitive because it focuses on enhancing operational management — from easy checkout to shipping operations, it's ideal for medium to large-scale businesses. Our developers build intuitive WooCommerce websites with responsive themes, ensuring your website becomes a sales machine with advanced WordPress integrations and third-party collaborations, plus more visitors through SEO solutions.",
    },
    ];

export default function EcommerceDevelopmentPage() {
  
  const [activePlatform, setActivePlatform] = useState(0);
  const selectedPlatform = ecommercePlatforms[activePlatform];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      <main className="ecommerce-development-page">

        <section className="ecommerce-hero">
          <div className="ecommerce-hero-inner">

            <div className="ecommerce-hero-content">

              <span className="ecommerce-hero-chip">
                <span />
                Top Ecommerce Web Development Agency in India
              </span>

              <h1>
                Ecommerce web development in India —
                build online stores that{" "}
                <span>drive sales</span>.
              </h1>

              <p className="ecommerce-hero-description">
                Build a successful online store with our
                ecommerce web development services in India.
                We create secure, fast, and scalable
                eCommerce websites designed to improve user
                experience and increase sales.
              </p>

              <ul className="ecommerce-hero-points">
                <li>
                  Tailor-made ecommerce websites for every
                  industry
                </li>

                <li>
                  Fast, mobile-optimized, and secure shopping
                  experiences
                </li>

                <li>
                  Enhanced visibility, better engagement &
                  higher ROI
                </li>
              </ul>

              <div className="ecommerce-hero-actions">
                <a
                  href="#ecommerce-work"
                  className="ecommerce-primary-button"
                >
                  See our work →
                </a>

                <a
                  href="#ecommerce-lead"
                  className="ecommerce-secondary-button"
                >
                  Talk to an expert
                </a>
              </div>

              <div className="ecommerce-hero-stats">

                <div>
                  <strong>500+</strong>
                  <span>Industries served</span>
                </div>

                <div>
                  <strong>10+</strong>
                  <span>Years of experience</span>
                </div>

                <div>
                  <strong>5/5</strong>
                  <span>Client rating</span>
                </div>

              </div>

            </div>

            <div
              className="ecommerce-lead-card"
              id="ecommerce-lead"
            >
              <h2>
                Let&apos;s build a dream website
              </h2>

              <p>
                Tell us your requirement — we reply within
                30 minutes.
              </p>

              <form className="ecommerce-lead-form">

                <input
                  type="text"
                  placeholder="Full name *"
                />

                <input
                  type="email"
                  placeholder="Email *"
                />

                <input
                  type="tel"
                  placeholder="Contact number *"
                />

                <select defaultValue="">
                  <option value="" disabled>
                    Type of website
                  </option>

                  <option>
                    E-Commerce Store
                  </option>

                  <option>
                    Interior & Architecture
                  </option>

                  <option>
                    Healthcare & Clinic
                  </option>

                  <option>
                    Real Estate
                  </option>

                  <option>
                    Corporate / Business
                  </option>

                  <option>
                    Other
                  </option>
                </select>

                <input
                  className="full"
                  type="text"
                  placeholder="Reference websites if any"
                />

                <input
                  type="text"
                  placeholder="Budget"
                />

                <div className="ecommerce-captcha">
                  <span>
                    3 × 4 =
                  </span>

                  <input
                    type="text"
                    placeholder="?"
                  />
                </div>

                <button
                  type="submit"
                  className="ecommerce-submit-button"
                >
                  Send message to our team
                </button>

              </form>
            </div>

          </div>
        </section>

        <section className="ecommerce-awards">
        <div className="ecommerce-awards-inner">

            <div className="ecommerce-awards-label">
            Award-winning SEO & web agency
            </div>

            <div className="ecommerce-awards-row">

            <div className="ecommerce-award-item">
                <strong>DesignRush</strong>
                <span>Best SEO Company in India</span>
            </div>

            <div className="ecommerce-award-item">
                <strong>The Manifest</strong>
                <span>Best SEO Agency 2025</span>
            </div>

            <div className="ecommerce-award-item">
                <strong>Clutch</strong>
                <span>Top Rated Agency</span>
            </div>

            <div className="ecommerce-award-item">
                <strong>SiliconIndia</strong>
                <span>Top Rated in India</span>
            </div>

            </div>

        </div>
        </section>

        <section className="ecommerce-intro">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-intro-grid">

            <div className="ecommerce-intro-copy">

                <div className="ecommerce-eyebrow">
                Long-term impact
                </div>

                <h2 className="ecommerce-section-title">
                Ecommerce development for seamless user experience
                </h2>

                <p>
                Global retail has transformed substantially over the
                last few years, especially post-pandemic. Ecommerce
                has attained enormous popularity as consumers sit at
                home, place an order, and get doorstep delivery — no
                fuss, no queue. Ecommerce development has become
                indispensable for businesses selling consumer and
                commercial products.
                </p>

                <p>
                Today, 2.71 billion of the global population choose
                online purchases, and the total number of ecommerce
                websites has reached 26.6 million. To take your
                business to the next level, you need a noteworthy
                ecommerce development company that provides customized
                solutions aligned with your goals.
                </p>

                <p>
                At Theme Dekho, our developers design compelling
                ecommerce websites with eye-catching interfaces,
                advanced payment security, seamless integration,
                fast page speed, and multi-device compatibility —
                delivering stellar projects with innovative
                technologies.
                </p>

            </div>

            <div className="ecommerce-stat-stack">

                <div className="ecommerce-stat-row">
                <strong>2.71B</strong>
                <span>People worldwide shop online</span>
                </div>

                <div className="ecommerce-stat-row">
                <strong>26.6M</strong>
                <span>Ecommerce websites globally</span>
                </div>

                <div className="ecommerce-stat-row">
                <strong>24/7</strong>
                <span>Online selling opportunity</span>
                </div>

                <div className="ecommerce-stat-row">
                <strong>100%</strong>
                <span>Responsive shopping experience</span>
                </div>

            </div>

            </div>

        </div>
        </section>

        <section className="ecommerce-why">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">

            <div className="ecommerce-eyebrow">
                Why choose us
            </div>

            <h2 className="ecommerce-section-title">
                So, what makes us your best choice?
            </h2>

            <p className="ecommerce-section-intro">
                The global online retail market is highly competitive —
                you need out-of-the-box ecommerce services to be the
                cynosure. Here&apos;s what sets us apart.
            </p>

            </div>

            <div className="ecommerce-reasons">

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>01</span>
                <h3>Experienced ecommerce developers</h3>
                </div>

                <p>
                Working in the industry for more than a decade,
                we&apos;re a reputed ecommerce development company.
                Our team crafts online stores to excellence across
                every platform — with meticulous knowledge of design,
                payments, security, and problem-solving that scales
                your business.
                </p>
            </article>

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>02</span>
                <h3>Streamlined approach</h3>
                </div>

                <p>
                The secret to a successful website lies in strategic
                planning. Our services rely on a steadfast outlook
                focused on thorough research, planning, and deployment
                — the entire procedure carefully executed for smooth
                project management.
                </p>
            </article>

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>03</span>
                <h3>Advanced coding</h3>
                </div>

                <p>
                Coding is the foundation of a highly functional
                website with enhanced efficiency and performance.
                It gives your site a unique style, design, and
                security standard. With the latest coding standards,
                we ensure dynamic features and increased online
                visibility.
                </p>
            </article>

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>04</span>
                <h3>Customized solutions</h3>
                </div>

                <p>
                Development cost varies with features, complexity,
                and page count. We propose tailored solutions that
                meet your budget and fulfil business needs — working
                together to recognise the most suitable design and
                development plan for your requirements.
                </p>
            </article>

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>05</span>
                <h3>Adhere to timelines</h3>
                </div>

                <p>
                With streamlined project execution, we minimise risks
                and errors while meeting deadlines. Our proactive,
                tried-and-tested methodologies keep us competitive
                and help deliver your website on time, every time.
                </p>
            </article>

            <article className="ecommerce-reason-card">
                <div className="ecommerce-reason-header">
                <span>06</span>
                <h3>
                    Outstanding maintenance &amp; support
                </h3>
                </div>

                <p>
                Our job doesn&apos;t end after delivery. For effective
                functioning and performance, we provide constant
                support through unwavering maintenance — staying
                updated with the newest digital shifts so you remain
                at the top of the search rank.
                </p>
            </article>

            </div>

        </div>
        </section>

        <section className="ecommerce-platforms"
        id="ecommerce-work"
        >
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">

            <div className="ecommerce-eyebrow">
                What we do
            </div>

            <h2 className="ecommerce-section-title">
                Platforms we use as an ecommerce
                development company
            </h2>

            <p className="ecommerce-section-intro">
                Every business has different needs — so we
                work across the leading ecommerce platforms.
                Here&apos;s what each one brings and how we
                build with it.
            </p>

            </div>

            <div className="ecommerce-platform-layout">

            <div className="ecommerce-platform-nav">

                {ecommercePlatforms.map(
                (platform, index) => (
                    <button
                    key={platform.name}
                    type="button"
                    className={
                        activePlatform === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                        setActivePlatform(index)
                    }
                    >
                    <span className="platform-number">
                        {index + 1}
                    </span>

                    <span className="platform-name">
                        {platform.name}
                    </span>
                    </button>
                ),
                )}

            </div>

            <div className="ecommerce-platform-panel">

                <div className="ecommerce-platform-label">
                {selectedPlatform.number} —{" "}
                {selectedPlatform.name}
                </div>

                <h3>
                {selectedPlatform.title}
                </h3>

                <p>
                {selectedPlatform.description}
                </p>

            </div>

            </div>

        </div>
        </section>

        <section className="ecommerce-benefits">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">

            <div className="ecommerce-eyebrow">
                The benefits
            </div>

            <h2 className="ecommerce-section-title">
                What are the benefits of ecommerce development?
            </h2>

            <p className="ecommerce-section-intro">
                Online shopping is preferred by millions and growing.
                Here&apos;s what a professionally built ecommerce
                website brings to your business.
            </p>

            </div>

            <div className="ecommerce-benefits-grid">

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="7" rx="1" />
                    <rect x="3" y="14" width="9" height="7" rx="1" />
                    <rect x="16" y="14" width="5" height="7" rx="1" />
                </svg>
                </div>

                <div>
                <h3>Improved design &amp; functionality</h3>

                <p>
                    A well-designed, functional store builds trust and
                    keeps shoppers engaged. We craft attractive
                    interfaces with smooth navigation that convert
                    visitors into buyers.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z" />
                </svg>
                </div>

                <div>
                <h3>Customized solutions</h3>

                <p>
                    Every business is unique. We build tailored
                    ecommerce solutions that align with your goals,
                    budget, and industry — no generic templates, just
                    what fits you.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                </div>

                <div>
                <h3>Feature-rich advancement</h3>

                <p>
                    From live consultations and interactive manuals to
                    real-time insights, we implement innovative
                    features that give your store a competitive edge.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M3 3v18h18" />
                    <rect x="7" y="12" width="3" height="6" />
                    <rect x="12" y="8" width="3" height="10" />
                    <rect x="17" y="5" width="3" height="13" />
                </svg>
                </div>

                <div>
                <h3>Streamlined inventory management</h3>

                <p>
                    Manage stock, orders, and fulfilment effortlessly.
                    Automated inventory keeps your store accurate and
                    saves you hours of manual work.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M14 4a2 2 0 1 0-4 0v1.5a.5.5 0 0 1-.5.5H8a2 2 0 0 0-2 2v1.5a.5.5 0 0 1-.5.5H4a2 2 0 1 0 0 4h1.5a.5.5 0 0 1 .5.5V20a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5V20a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 .5.5H18a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-.5-.5H18a2 2 0 1 1 0-4h1.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-1.5a.5.5 0 0 1-.5-.5V4z" />
                </svg>
                </div>

                <div>
                <h3>Third-party systems</h3>

                <p>
                    Integrate payment gateways, shipping providers,
                    CRMs, and marketing tools — connect the systems
                    your business relies on for a smooth operation.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M4 4l7.07 17 2.51-7.42L21 11.07 4 4z" />
                </svg>
                </div>

                <div>
                <h3>Enhanced user experience</h3>

                <p>
                    A frictionless journey from browse to checkout
                    increases satisfaction and repeat purchases. We
                    optimize every step for a delightful shopping
                    experience.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M12 1v22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                </div>

                <div>
                <h3>Budget friendly</h3>

                <p>
                    Get a premium ecommerce store without overspending.
                    We propose cost-effective solutions that maximise
                    value and deliver strong ROI.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                </div>

                <div>
                <h3>Superior performance</h3>

                <p>
                    Fast page speed, optimized architecture, and clean
                    code keep your store running smoothly — even during
                    high-traffic sales and peak seasons.
                </p>
                </div>
            </article>

            <article className="ecommerce-benefit-card">
                <div className="ecommerce-benefit-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
                </div>

                <div>
                <h3>Secured transactions</h3>

                <p>
                    Advanced payment security and encryption protect
                    your customers and your business. Shoppers buy with
                    confidence, and you stay compliant and safe.
                </p>
                </div>
            </article>

            </div>

        </div>
        </section>

        <section className="ecommerce-hiring">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-hiring-layout">

            <div className="ecommerce-hiring-head">

                <div className="ecommerce-eyebrow">
                Before you hire
                </div>

                <h2>
                What to know before hiring an ecommerce company
                </h2>

                <p>
                The global ecommerce market is massive and competitive.
                Choosing the right development partner is crucial to
                standing out — here&apos;s what to look for.
                </p>

            </div>

            <div className="ecommerce-hiring-steps">

                <div className="ecommerce-hiring-step">
                <div className="ecommerce-step-number">1</div>

                <div>
                    <h3>Clear your vision</h3>

                    <ul>
                    <li>
                        Evaluate your goals — why you need a store and
                        the type of design you want.
                    </li>

                    <li>
                        Define the purpose of your store and your
                        allocated budget.
                    </li>

                    <li>
                        A clear picture makes it easier to find your
                        best match.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="ecommerce-hiring-step">
                <div className="ecommerce-step-number">2</div>

                <div>
                    <h3>Experience &amp; specialization</h3>

                    <ul>
                    <li>
                        The more experience, the more competent — look
                        for proven ecommerce work.
                    </li>

                    <li>
                        Platform specialization matters — WordPress,
                        Magento, Shopify, or WooCommerce.
                    </li>

                    <li>
                        Experienced teams handle integrations and scale
                        efficiently.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="ecommerce-hiring-step">
                <div className="ecommerce-step-number">3</div>

                <div>
                    <h3>SEO skills &amp; portfolio</h3>

                    <ul>
                    <li>
                        SEO drives store visibility and organic sales —
                        insist on a strategy.
                    </li>

                    <li>
                        Check previous stores to recognise work patterns
                        and success rates.
                    </li>

                    <li>
                        Ask for client testimonials to understand their
                        experience.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="ecommerce-hiring-step">
                <div className="ecommerce-step-number">4</div>

                <div>
                    <h3>Security, reporting &amp; support</h3>

                    <ul>
                    <li>
                        Transparency and direct reporting build a
                        comfortable partnership.
                    </li>

                    <li>
                        Payment and customer data need stringent
                        security measures.
                    </li>

                    <li>
                        Awesome after-sales support and maintenance make
                        a company credible.
                    </li>
                    </ul>
                </div>
                </div>

            </div>

            </div>

        </div>
        </section>

        <section className="ecommerce-tech">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">
            <div className="ecommerce-eyebrow">
                Our stack
            </div>

            <h2 className="ecommerce-section-title">
                Technologies &amp; plugins we deploy
            </h2>
            </div>

            <div className="ecommerce-tech-grid">

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    </svg>
                </span>

                Frontend
                </div>

                <div className="ecommerce-tech-chips">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>React</span>
                </div>
            </article>

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <rect
                        x="2"
                        y="3"
                        width="20"
                        height="8"
                        rx="2"
                    />
                    <rect
                        x="2"
                        y="13"
                        width="20"
                        height="8"
                        rx="2"
                    />
                    <path d="M6 7h.01M6 17h.01" />
                    </svg>
                </span>

                Backend
                </div>

                <div className="ecommerce-tech-chips">
                <span>PHP</span>
                <span>WordPress</span>
                <span>Magento</span>
                <span>Node.js</span>
                </div>
            </article>

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <ellipse
                        cx="12"
                        cy="5"
                        rx="8"
                        ry="3"
                    />
                    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                    </svg>
                </span>

                Database
                </div>

                <div className="ecommerce-tech-chips">
                <span>MySQL</span>
                </div>
            </article>

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                    </svg>
                </span>

                Version Control
                </div>

                <div className="ecommerce-tech-chips">
                <span>Git</span>
                </div>
            </article>

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <polyline points="4 17 10 11 4 5" />
                    <line
                        x1="12"
                        y1="19"
                        x2="20"
                        y2="19"
                    />
                    </svg>
                </span>

                Programming Language
                </div>

                <div className="ecommerce-tech-chips">
                <span>PHP</span>
                </div>
            </article>

            <article className="ecommerce-tech-card">
                <div className="ecommerce-tech-heading">
                <span className="ecommerce-tech-icon">
                    <svg viewBox="0 0 24 24">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                </span>

                Cloud &amp; DevOps
                </div>

                <div className="ecommerce-tech-chips">
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Azure</span>
                </div>
            </article>

            </div>

            <div className="ecommerce-marketing-head">
            <div className="ecommerce-eyebrow">
                Marketing tools
            </div>

            <h3>
                The industry&apos;s leading tools, for maximum accuracy
            </h3>
            </div>

            <div className="ecommerce-marketing-tools">
            <span>Ahrefs</span>
            <span>Screaming Frog</span>
            <span>Google Analytics</span>
            <span>Search Console</span>
            <span>Google Trends</span>
            <span>Yoast</span>
            <span>Ubersuggest</span>
            <span>Surfer</span>
            <span>Google Ads</span>
            <span>Data Studio</span>
            <span>HubSpot</span>
            <span>SEMrush</span>
            </div>

        </div>
        </section>

        <section className="ecommerce-comparison">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">
            <div className="ecommerce-eyebrow">
                The difference
            </div>

            <h2 className="ecommerce-section-title">
                Theme Dekho vs other agencies
            </h2>
            </div>

            <div className="ecommerce-comparison-grid">

            <article className="ecommerce-comparison-card ecommerce-comparison-us">
                <h3>
                📌 Theme Dekho
                </h3>

                <ul>
                <li>
                    Clear milestones and realistic objectives,
                    explained with confidence.
                </li>

                <li>
                    We learn your business, market, competition,
                    and goals, then plan fully.
                </li>

                <li>
                    Dedicated focus with daily or weekly progress
                    updates.
                </li>

                <li>
                    Complete transparency — even small issues are
                    raised immediately.
                </li>

                <li>
                    Focused on long-term SEO success with ethical,
                    reliable methods.
                </li>

                <li>
                    Results measured on ROI, conversions, and
                    qualified leads.
                </li>

                <li>
                    Personalized strategies with unique insights
                    and expert guidance.
                </li>
                </ul>
            </article>

            <article className="ecommerce-comparison-card ecommerce-comparison-them">
                <h3>
                Other agencies
                </h3>

                <ul>
                <li>
                    Make unrealistic promises that are hard to
                    achieve.
                </li>

                <li>
                    Use generic strategies without in-depth
                    research.
                </li>

                <li>
                    Juggle multiple projects, causing missed
                    deadlines.
                </li>

                <li>
                    May hide or misrepresent issues if targets are
                    missed.
                </li>

                <li>
                    Focus on short-term gains and quantity over
                    quality.
                </li>

                <li>
                    Measure success using surface-level metrics
                    rather than actual business results.
                </li>

                <li>
                    Use one-size-fits-all approaches with limited
                    strategic guidance.
                </li>
                </ul>
            </article>

            </div>

        </div>
        </section>

        <section className="ecommerce-faq">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-section-head">
            <div className="ecommerce-eyebrow">
                Questions
            </div>

            <h2 className="ecommerce-section-title">
                Frequently asked questions
            </h2>
            </div>

            <div className="ecommerce-faq-grid">

            {[
                {
                question:
                    "Which ecommerce platform is best for my business?",
                answer:
                    "It depends on your needs. WordPress/WooCommerce suits flexible, content-rich stores; Shopify is great for quick, hosted setups; Magento fits large, complex catalogues. We assess your goals and recommend the best-fit platform — discuss your project with our experts.",
                },
                {
                question:
                    "Can you migrate my existing store to a new platform?",
                answer:
                    "Yes. Our experts handle complete migrations across platforms — transferring products, orders, and customer data with minimal downtime. We ensure no glitches and optimize your content and workflows for an improved shopping experience.",
                },
                {
                question:
                    "Will my ecommerce website be SEO-friendly?",
                answer:
                    "Absolutely. We build every store with clean structure, fast loading, meta tags, and sitemaps. Combined with quality content and a strong digital marketing strategy, your store can rank well and drive organic sales.",
                },
                {
                question:
                    "When will I get my ecommerce website?",
                answer:
                    "The timeframe depends on complexity — number of products, custom features, integrations, and design. It may take from a week up to a few months depending on your demands. We always give our best to deliver at the earliest.",
                },
                {
                question:
                    "How much does an ecommerce website cost?",
                answer:
                    "Cost varies with platform, features, integrations, and the number of products. We propose tailored solutions that meet your budget and business needs. Share your requirements in the form and we'll send a clear, custom quote within 30 minutes.",
                },
                {
                question:
                    "Will my website be mobile responsive?",
                answer:
                    "Yes. With 7.2 billion smartphone users worldwide, mobile responsiveness is crucial. Every website we build is fully responsive and tested across mobile, tablet, and desktop for a smooth experience on any screen.",
                },
            ].map((item, index) => {
                const isOpen = openFaq === index;

                return (
                <div
                    key={item.question}
                    className={`ecommerce-faq-item ${
                    isOpen ? "open" : ""
                    }`}
                >
                    <button
                    type="button"
                    className="ecommerce-faq-question"
                    onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    >
                    <span>{item.question}</span>

                    <span className="ecommerce-faq-plus">
                        +
                    </span>
                    </button>

                    <div className="ecommerce-faq-answer">
                    <div>
                        {item.answer}
                    </div>
                    </div>
                </div>
                );
            })}

            </div>

        </div>
        </section>

        <section className="ecommerce-final-cta">
        <div className="ecommerce-section-inner">

            <div className="ecommerce-cta-box">

            <div className="ecommerce-cta-content">

                <div>
                <h2>
                    Need a custom website or redesign?
                </h2>

                <p>
                    Share your details and get a free quote within
                    30 minutes.
                </p>

                <div className="ecommerce-cta-tags">
                    <span>E-Commerce</span>
                    <span>Jewellery Store</span>
                    <span>Home &amp; Furniture</span>
                    <span>Medical Healthcare</span>
                    <span>Hospital &amp; Clinic</span>
                    <span>Dental</span>
                    <span>Eye Hospital</span>
                </div>
                </div>

                <a
                href="#ecommerce-lead"
                className="ecommerce-cta-button"
                >
                Get a free quote →
                </a>

            </div>

            </div>

        </div>
        </section>

      </main>

      <Footer />
    </>
  );
}