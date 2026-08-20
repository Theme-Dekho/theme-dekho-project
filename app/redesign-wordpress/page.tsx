"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./redesign-wordpress.css";


const redesignReasons = [
    {
        number: "01",
        title: "Outdated design & functionality",
        why:
        "An old-fashioned website always remains unpleasant for every visitor, and records say that users judge a brand by a website's looks. So, an outdated website may not interest your audience.",
        benefit:
        "Redesigning your WordPress site makes it visually appealing, which creates a strong first impression, keeps your audience engaged, and reduces the bounce rate on your website.",
    },
    {
        number: "02",
        title: "Poor user experience",
        why:
        "A poor user experience makes visitors judge your site's credibility, and they may eventually skip your website if it doesn't have faster loading time and intuitive navigation. Performance optimization is key to keeping your audience engaged.",
        benefit:
        "When you rebuild a WordPress site it enhances user navigation, provides proper page flow, and overall delivers a user-friendly experience that keeps your audience engaged till the end.",
    },
    {
        number: "03",
        title: "Mobile responsiveness",
        why:
        "The rate of mobile users has taken over desktop users, so a website being responsive across various screen sizes is important for not losing visitors.",
        benefit:
        "Redesigning helps your site stay responsive across every device, making your site accessible and helping your audience reach you quickly.",
    },
    {
        number: "04",
        title: "To align with your business growth",
        why:
        "A company's services and business models can change significantly over the years — extended services, new locations, and so on. It's important to update your site to reflect that.",
        benefit:
        "Updating your website lets users know your ongoing business goals and the full details of the services you provide, helping you reach a wider audience and grow your business.",
    },
    {
        number: "05",
        title: "Low search engine rankings",
        why:
        "SEO plays a major role in Google rankings, online visibility, and organic traffic. Only a site that performs well with a clear structure and engaging content can rank well.",
        benefit:
        "When you revamp a WordPress website, it improves the site's structure, speeds up loading, and enables higher search rankings that drive your target audience effectively.",
    },
    ];


const redesignServices = [
  {
    number: "01",
    name: "Custom Design Revamp",
    title: "Designs that fit your brand perfectly",
    description:
      "We create stunning, entirely customized designs that perfectly align with your website's needs. As a leading WordPress redesign company, we craft engaging layouts, seamless navigation systems, and intuitive UI/UX design services. Our approach elevates both the appearance and user experience of your website, transforming it into a high-performing platform that captivates visitors and drives results.",
  },
  {
    number: "02",
    name: "Enhancing User Experience",
    title: "Promote optimized performance through better UX",
    description:
      "A smooth, intuitive experience is what keeps visitors on your site. We enhance user experience by improving navigation, page flow, loading speed, and accessibility across every screen. By removing friction and making key actions effortless, we increase engagement, reduce bounce rate, and turn more of your visitors into enquiries and customers.",
  },
  {
    number: "03",
    name: "Content Updates & Management",
    title: "Keep your content fresh and easy to manage",
    description:
      "Outdated content quietly costs you traffic and trust. We restructure and refresh your content, set up a clean content management workflow, and make sure your pages stay accurate, relevant, and SEO-friendly. Your own team can then update text, images, and offers easily — without touching code — so your site always reflects your latest business.",
  },
  {
    number: "04",
    name: "Custom Plugins & Themes",
    title: "Troubleshoot problems and stay on the latest version",
    description:
      "Off-the-shelf themes and plugins can only take you so far. We build custom plugins and themes tailored to your exact requirements, and keep everything updated and secure. We fix bugs, patch vulnerabilities, and run periodic audits to determine flaws and resolve them — improving speed, navigation, and mobile responsiveness, which directly affects lead generation and sales.",
  },
  {
    number: "05",
    name: "Functionality Updates",
    title: "Add the features your business actually needs",
    description:
      "One of our core priorities is adding innovative features or enhancing existing ones. Specialized WordPress e-commerce functions, easy booking systems, member/user areas, or any additional features that fulfil your requirements — we build them in. We constantly monitor performance to ensure your site runs smoothly, stays secure, and delivers exactly what your business needs, with 24/7 support for superior performance.",
  },
];    

export default function RedesignWordPressPage() {

  const [reasonTabs, setReasonTabs] = useState<Record<number, "why" | "benefit">>({});
  const [activeService, setActiveService] = useState(0);
  const selectedService = redesignServices[activeService];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      <main className="redesign-wordpress-page">

        <section className="redesign-hero">
            <div className="redesign-hero-inner">

            <div className="redesign-hero-content">

                <span className="redesign-hero-chip">
                <span />
                Quality service handled by tech pros
                </span>

                <h1>
                Redesign your{" "}
                <span>WordPress</span>{" "}
                website.
                </h1>

                <p className="redesign-hero-description">
                Revitalize your online presence with expert WordPress
                redesign. Boost performance, attract more visitors,
                and convert leads with a fresh, custom design built
                by our team.
                </p>

                <div className="redesign-hero-actions">

                <a
                    href="#redesign-work"
                    className="redesign-primary-button"
                >
                    See our work →
                </a>

                <a
                    href="#redesign-lead"
                    className="redesign-secondary-button"
                >
                    Talk to an expert
                </a>

                </div>

                <div className="redesign-hero-stats">

                <div>
                    <strong>500+</strong>
                    <span>Industries served</span>
                </div>

                <div>
                    <strong>12+</strong>
                    <span>Years of experience</span>
                </div>

                <div>
                    <strong>5/5</strong>
                    <span>Client rating</span>
                </div>

                </div>

            </div>

            <div
                className="redesign-lead-card"
                id="redesign-lead"
            >

                <h2>
                Let&apos;s build a dream website
                </h2>

                <p>
                Tell us your requirement — we reply within
                30 minutes.
                </p>

                <form className="redesign-lead-form">

                <input
                    type="text"
                    placeholder="Full name *"
                    required
                />

                <input
                    type="email"
                    placeholder="Email *"
                    required
                />

                <input
                    type="tel"
                    placeholder="Contact number *"
                    required
                />

                <select defaultValue="" required>
                    <option value="" disabled>
                    Type of website
                    </option>

                    <option>E-Commerce Store</option>
                    <option>Interior &amp; Architecture</option>
                    <option>Healthcare &amp; Clinic</option>
                    <option>Real Estate</option>
                    <option>Corporate / Business</option>
                    <option>Other</option>
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

                <div className="redesign-captcha">
                    <span>3 × 4 =</span>

                    <input
                    type="text"
                    placeholder="?"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="redesign-submit-button"
                >
                    Send message to our team
                </button>

                </form>

            </div>

            </div>
        </section>

        <section className="redesign-awards">
        <div className="redesign-awards-inner">

            <div className="redesign-awards-label">
            Award-winning SEO &amp; web agency
            </div>

            <div className="redesign-awards-row">

            <div className="redesign-award-item">
                <strong>DesignRush</strong>
                <span>Best SEO Company in India</span>
            </div>

            <div className="redesign-award-item">
                <strong>The Manifest</strong>
                <span>Best SEO Agency 2025</span>
            </div>

            <div className="redesign-award-item">
                <strong>Clutch</strong>
                <span>Top Rated Agency</span>
            </div>

            <div className="redesign-award-item">
                <strong>SiliconIndia</strong>
                <span>Top Rated in India</span>
            </div>

            </div>

        </div>
        </section>

        <section className="redesign-intro">
        <div className="redesign-section-inner">

            <div className="redesign-intro-grid">

            <div className="redesign-intro-copy">

                <div className="redesign-eyebrow">
                Long-term potential
                </div>

                <h2 className="redesign-section-title">
                A redesign that aligns your site with today&apos;s standards
                </h2>

                <p>
                WordPress redesigning upgrades your existing site with
                a makeover that fits your market, with enriched
                functionality. Theme Dekho is a professional WordPress
                company with a team offering exceptional redesign
                assistance for over 12+ years on a global scale.
                </p>

                <p>
                An outdated or poorly maintained website hurts your
                visitor rate and creates future risk. Redesigning
                speeds up loading time, improves Google rankings, and
                modernizes visuals to keep pace with the features your
                audience expects.
                </p>

                <p>
                In a nutshell, our dedicated team transforms a site
                into something far better than its previous version.
                </p>

            </div>

            <div className="redesign-stat-stack">

                <div className="redesign-stat-row">
                <strong>500+</strong>
                <span>Industries served across sectors</span>
                </div>

                <div className="redesign-stat-row">
                <strong>100+</strong>
                <span>Successful campaigns delivered</span>
                </div>

                <div className="redesign-stat-row">
                <strong>12+</strong>
                <span>Years redesigning WordPress sites</span>
                </div>

                <div className="redesign-stat-row">
                <strong>5/5</strong>
                <span>Average client satisfaction rating</span>
                </div>

            </div>

            </div>

        </div>
        </section>

        <section className="redesign-why">
        <div className="redesign-section-inner">

            <div className="redesign-section-head">

            <div className="redesign-eyebrow">
                Why it matters
            </div>

            <h2 className="redesign-section-title">
                Five signs your WordPress site needs a redesign
            </h2>

            <p className="redesign-section-intro">
                Like our gadgets, a website needs updating — not just
                for looks, but to improve functionality and resolve
                risk. Most businesses should redesign every 2–3 years
                to keep growing.
            </p>

            </div>

            <div className="redesign-reasons-grid">

            {redesignReasons.map((reason, index) => {
                const activeTab =
                reasonTabs[index] ?? "why";

                return (
                <article
                    className="redesign-reason-card"
                    key={reason.number}
                >

                    <div className="redesign-reason-header">
                    <span>{reason.number}</span>

                    <h3>
                        {reason.title}
                    </h3>
                    </div>

                    <div className="redesign-reason-tabs">

                    <button
                        type="button"
                        className={
                        activeTab === "why"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                        setReasonTabs((previous) => ({
                            ...previous,
                            [index]: "why",
                        }))
                        }
                    >
                        Why
                    </button>

                    <button
                        type="button"
                        className={
                        activeTab === "benefit"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                        setReasonTabs((previous) => ({
                            ...previous,
                            [index]: "benefit",
                        }))
                        }
                    >
                        Benefit
                    </button>

                    </div>

                    <p>
                    {activeTab === "why"
                        ? reason.why
                        : reason.benefit}
                    </p>

                </article>
                );
            })}

            </div>

        </div>
        </section>

        <section className="redesign-services"
        id="redesign-work"
        >
        <div className="redesign-section-inner">

            <div className="redesign-section-head">

            <div className="redesign-eyebrow">
                What we do
            </div>

            <h2 className="redesign-section-title">
                Everything included in our WordPress redesign
            </h2>

            <p className="redesign-section-intro">
                We create better designs, enhanced functionality,
                and optimized performance from your existing WordPress
                site — customized to what your business needs.
            </p>

            </div>

            <div className="redesign-services-layout">

            <div className="redesign-services-nav">

                {redesignServices.map((service, index) => (
                <button
                    key={service.name}
                    type="button"
                    className={
                    activeService === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                    setActiveService(index)
                    }
                >
                    <span className="redesign-service-number">
                    {index + 1}
                    </span>

                    <span className="redesign-service-name">
                    {service.name}
                    </span>
                </button>
                ))}

            </div>

            <div className="redesign-service-panel">

                <div className="redesign-service-label">
                {selectedService.number} —{" "}
                {selectedService.name}
                </div>

                <h3>
                {selectedService.title}
                </h3>

                <p>
                {selectedService.description}
                </p>

            </div>

            </div>

        </div>
        </section>

        <section className="redesign-why-theme">
        <div className="redesign-section-inner">

            <div className="redesign-section-head">
            <div className="redesign-eyebrow">
                Why Theme Dekho
            </div>

            <h2 className="redesign-section-title">
                A redesign partner you can rely on
            </h2>

            <p className="redesign-section-intro">
                A renowned WordPress redesign company offering expert
                services around Bangalore and globally. We carry every
                project to success with accuracy and skill.
            </p>
            </div>

            <div className="redesign-why-theme-grid">

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                🔄
                </div>

                <h3>
                Continuous improvements
                </h3>

                <p>
                We implement regular updates and enhancements to stay
                in step with newer advancements.
                </p>
            </article>

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                🤝
                </div>

                <h3>
                Collaborative approach
                </h3>

                <p>
                We partner with you for consistent, transparent
                communication — a trustable partner to rebuild your
                site.
                </p>
            </article>

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                🔍
                </div>

                <h3>
                In-depth discovery
                </h3>

                <p>
                Every project starts with detailed research and
                analysis, the stepping stone for exceptional outcomes.
                </p>
            </article>

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                💡
                </div>

                <h3>
                Innovative technology
                </h3>

                <p>
                Our experts bring modern design solutions using
                fore-front technologies for better functionality.
                </p>
            </article>

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                ✅
                </div>

                <h3>
                Quality assurance
                </h3>

                <p>
                Happy customers worldwide, thanks to our precision
                and quality in every element of our work.
                </p>
            </article>

            <article className="redesign-why-theme-card">
                <div className="redesign-why-theme-icon">
                🗺
                </div>

                <h3>
                Strategic roadmap
                </h3>

                <p>
                Streamlined, well-executed planning empowers us to
                meet your needs consistently.
                </p>
            </article>

            </div>

        </div>
        </section>

        <section className="redesign-process">
        <div className="redesign-section-inner">

            <div className="redesign-process-layout">

            <div className="redesign-process-head">

                <div className="redesign-eyebrow">
                How we work
                </div>

                <h2>
                A structured, client-centric process
                </h2>

                <p>
                There&apos;s no such word as &quot;no&quot; in our team.
                We meticulously address issues and revamp sites to
                perfection — a step-by-step process for a flawless
                redesign tailored to you.
                </p>

            </div>

            <div className="redesign-process-steps">

                <div className="redesign-process-step">
                <div className="redesign-process-number">1</div>

                <div>
                    <h3>Project&apos;s goal</h3>

                    <ul>
                    <li>
                        We set a clear goal before starting, gathering
                        your needs upfront.
                    </li>

                    <li>
                        Concerns like user experience, branding, or
                        security are defined early.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">2</div>

                <div>
                    <h3>Pre-requisites</h3>

                    <ul>
                    <li>
                        We carry out detailed research on your existing
                        website.
                    </li>

                    <li>
                        We set benchmarks, milestones, and a clear
                        project timeline.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">3</div>

                <div>
                    <h3>Backup &amp; safeguarding data</h3>

                    <ul>
                    <li>
                        We back up existing data before making any
                        changes.
                    </li>

                    <li>
                        We use multiple methods — backup plugins,
                        manual backups, hosting backups.
                    </li>

                    <li>
                        This lets us make changes without touching the
                        live site.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">4</div>

                <div>
                    <h3>Wireframe &amp; prototype</h3>

                    <ul>
                    <li>
                        We develop a wireframe guiding content placement,
                        page flow, and layout.
                    </li>

                    <li>
                        A prototype mockup lets us assess experience
                        and functionality.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">5</div>

                <div>
                    <h3>Building the website</h3>

                    <ul>
                    <li>
                        We implement custom layouts, themes, plugins,
                        and features with advanced tech.
                    </li>

                    <li>
                        E-commerce elements and dashboards can be added
                        if needed.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">6</div>

                <div>
                    <h3>Testing &amp; monitoring</h3>

                    <ul>
                    <li>
                        Consistent test runs ensure page flow and element
                        functionality.
                    </li>

                    <li>
                        We monitor responsiveness across all devices.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="redesign-process-step">
                <div className="redesign-process-number">7</div>

                <div>
                    <h3>Deployment &amp; maintenance</h3>

                    <ul>
                    <li>
                        We launch, ensuring seamless performance.
                    </li>

                    <li>
                        Post-launch maintenance handles updates and
                        future risks.
                    </li>
                    </ul>
                </div>
                </div>

            </div>

            </div>

        </div>
        </section>

        <section className="redesign-tech">
        <div className="redesign-section-inner">

            <div className="redesign-section-head">
            <div className="redesign-eyebrow">
                Our stack
            </div>

            <h2 className="redesign-section-title">
                Technologies &amp; plugins we deploy
            </h2>
            </div>

            <div className="redesign-tech-grid">

            <article className="redesign-tech-card">
                <h3>Frontend</h3>

                <div className="redesign-tech-chips">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>React</span>
                </div>
            </article>

            <article className="redesign-tech-card">
                <h3>Backend</h3>

                <div className="redesign-tech-chips">
                <span>PHP</span>
                <span>WordPress</span>
                </div>
            </article>

            <article className="redesign-tech-card">
                <h3>Database</h3>

                <div className="redesign-tech-chips">
                <span>MySQL</span>
                </div>
            </article>

            <article className="redesign-tech-card">
                <h3>Version Control</h3>

                <div className="redesign-tech-chips">
                <span>Git</span>
                </div>
            </article>

            <article className="redesign-tech-card">
                <h3>Programming Language</h3>

                <div className="redesign-tech-chips">
                <span>PHP</span>
                </div>
            </article>

            <article className="redesign-tech-card">
                <h3>Cloud &amp; DevOps</h3>

                <div className="redesign-tech-chips">
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Azure</span>
                </div>
            </article>

            </div>

            <div className="redesign-marketing-head">
            <div className="redesign-eyebrow">
                Marketing tools
            </div>

            <h3>
                The industry&apos;s leading tools, for maximum accuracy
            </h3>
            </div>

            <div className="redesign-marketing-tools">
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

        <section className="redesign-comparison">
        <div className="redesign-section-inner">

            <div className="redesign-section-head">
            <div className="redesign-eyebrow">
                The difference
            </div>

            <h2 className="redesign-section-title">
                Theme Dekho vs other agencies
            </h2>
            </div>

            <div className="redesign-comparison-grid">

            <article className="redesign-comparison-card redesign-comparison-us">

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

            <article className="redesign-comparison-card redesign-comparison-them">

                <h3>
                Other agencies
                </h3>

                <ul>
                <li>
                    Make unrealistic promises that are hard to achieve.
                </li>

                <li>
                    Use generic strategies without in-depth research.
                </li>

                <li>
                    Juggle multiple projects, causing missed deadlines.
                </li>

                <li>
                    May hide or misrepresent issues if targets are
                    missed.
                </li>

                <li>
                    Focus on short-term gains and quantity over quality.
                </li>

                <li>
                    Track success only through rankings and traffic
                    numbers.
                </li>

                <li>
                    Minimal discussion about trends and improvements.
                </li>
                </ul>

            </article>

            </div>

        </div>
        </section>

        <section className="redesign-faq">
        <div className="redesign-section-inner">

            <div className="redesign-section-head">
            <div className="redesign-eyebrow">
                Questions
            </div>

            <h2 className="redesign-section-title">
                Frequently asked questions
            </h2>
            </div>

            <div className="redesign-faq-grid">

            {[
                {
                question:
                    "Can you redesign without losing my existing content?",
                answer:
                    "Yes. We take a complete backup of your data and content before starting. Everything is preserved and carried into the new design unless you ask us to change it.",
                },
                {
                question:
                    "How much does a WordPress redesign cost?",
                answer:
                    "It depends on your site size, number of pages, and features. Share your requirements in the form and we'll send a clear, custom quote within 30 minutes.",
                },
                {
                question:
                    "Will there be downtime during the process?",
                answer:
                    "No. We build and test on a separate staging environment, so your live site keeps running. We switch over only once everything is approved.",
                },
                {
                question:
                    "Do I need a new theme to revamp my site?",
                answer:
                    "Not always. We can improve your existing theme or build a custom one if it limits performance or design. We recommend the best option after reviewing your site.",
                },
                {
                question:
                    "Can you make my website mobile-friendly?",
                answer:
                    "Absolutely. Every redesign is fully responsive and tested across mobile, tablet, and desktop for a smooth experience on any screen.",
                },
                {
                question:
                    "What should I look for in a redesign provider?",
                answer:
                    "Check their portfolio, experience, communication, backup practices, and post-launch support. A good partner explains the roadmap clearly and focuses on long-term results.",
                },
            ].map((item, index) => {
                const isOpen = openFaq === index;

                return (
                <div
                    key={item.question}
                    className={`redesign-faq-item ${
                    isOpen ? "open" : ""
                    }`}
                >
                    <button
                    type="button"
                    className="redesign-faq-question"
                    onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    >
                    <span>
                        {item.question}
                    </span>

                    <span className="redesign-faq-plus">
                        +
                    </span>
                    </button>

                    <div className="redesign-faq-answer">
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

        <section className="redesign-final-cta">
        <div className="redesign-section-inner">

            <div className="redesign-cta-box">

            <div className="redesign-cta-content">

                <div>
                <h2>
                    Need a custom website or redesign?
                </h2>

                <p>
                    Share your details and get a free quote within
                    30 minutes.
                </p>

                <div className="redesign-cta-tags">
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
                href="#redesign-lead"
                className="redesign-cta-button"
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