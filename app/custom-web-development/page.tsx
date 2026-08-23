"use client";

import { SubmitEvent, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceQuoteForm from "@/components/forms/ServiceQuoteForm";
import "./custom-web-development.css";

const customWebServices = [
    {
        number: "01 — PHP Framework",
        label: "PHP Framework",
        title: "Get improved website speed with boosted performance",
        description:
        "When you think of a website with elegant design and attractive features, there's no platform better than the PHP framework. With many built-in customization options, this open-source language powers around 80% of websites. Using PHP promotes scalability, productivity, security, and performance. As an eminent custom web development agency in India, we specialize in Laravel, Phalcon, Symfony, and CodeIgniter — frameworks with a unique architecture and elegant syntax that give your website a captivating look, easy navigation, and improved security that keeps bugs away.",
    },
    {
        number: "02 — App Development",
        label: "App Development",
        title: "Organize content effortlessly while assuring regular site updates",
        description:
        "CMS, or content management system, is user-friendly software where you can create alluring and enjoyable web content. It's one of the easiest development platforms and doesn't require a coding language — nearly 68 million websites use CMS for custom web development in India. Our developers possess extensive expertise in building websites from scratch using the CMS. Implementing various templates and extensions, we design and build your custom website with an exquisite display and exciting content that boosts audience engagement and encourages conversions.",
    },
    {
        number: "03 — Ecommerce",
        label: "Ecommerce",
        title:
        "Structured product management and secured payment gateways for increased sales",
        description:
        "Speaking of ecommerce websites, user experience is the priority — so users can conveniently browse products and add them to the cart, with easy checkout and secured payment gateways. With more than 30.7 million ecommerce websites today, competition is high. Therefore, our custom developers focus on simplifying website design so users enjoy online shopping and brand promotion. For a positive first impression, we ensure easy navigation and increased security that boosts the sales funnel.",
    },
    {
        number: "04 — WordPress",
        label: "WordPress",
        title:
        "Attractive design syntax with well-organized content for a seamless experience",
        description:
        "WordPress is a content management system where you can use custom templates, themes, plugins, and other features to build an attractive, engaging website. It's the most popular custom web development platform, with endless customization opportunities. Our experienced developers specialize in WordPress and have exhaustive knowledge of coding languages — JavaScript, CSS, HTML, and PHP are the popular ones we use for WordPress websites. Your users enjoy a seamless browsing experience, encouraging better engagement and conversions.",
    },
    ];

export default function CustomWebDevelopmentPage() {

  const [activeService, setActiveService] = useState(0);
  const currentService = customWebServices[activeService];  
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  
  return (
    <>
      <Header />

      <main className="custom-web-development-page">
        <section className="custom-web-hero">
            <div className="custom-web-hero-inner">
            <div className="custom-web-hero-content">
                <span className="custom-web-hero-chip">
                <span className="custom-web-hero-chip-dot" />
                Top WordPress Website Development Agency in India
                </span>

                <h1>
                Web development services in India that build{" "}
                <span className="custom-web-blue">
                    high-performance
                </span>{" "}
                websites.
                </h1>

                <p className="custom-web-hero-description">
                Get reliable web development services in India tailored to your
                business. We build fast, secure, and user-friendly websites that
                work on all devices — boosting your brand, customers, and
                conversions.
                </p>

                <ul className="custom-web-hero-points">
                <li>
                    Custom web development solutions for every business
                </li>

                <li>
                    High-speed, secure, and SEO-optimized websites
                </li>

                <li>
                    Enhance online presence, credibility, and sales
                </li>
                </ul>

                <div className="custom-web-hero-actions">
                <span
                    className="custom-web-button custom-web-button-primary"
                >
                    See our work →
                </span>

                <a
                    href="#lead"
                    className="custom-web-button custom-web-button-ghost"
                >
                    Talk to an expert
                </a>
                </div>

                <div className="custom-web-hero-meta">
                <div className="custom-web-hero-stat">
                    <span className="custom-web-hero-stat-number">
                    500+
                    </span>

                    <span className="custom-web-hero-stat-label">
                    Industries served
                    </span>
                </div>

                <div className="custom-web-hero-stat">
                    <span className="custom-web-hero-stat-number">
                    10+
                    </span>

                    <span className="custom-web-hero-stat-label">
                    Years of experience
                    </span>
                </div>

                <div className="custom-web-hero-stat">
                    <span className="custom-web-hero-stat-number">
                    5/5
                    </span>

                    <span className="custom-web-hero-stat-label">
                    Client rating
                    </span>
                </div>
                </div>
            </div>

            <div
                className="custom-web-lead-card"
                id="lead"
            >
                <div className="custom-web-lead-heading">
                Let&apos;s build a dream website
                </div>

                <div className="custom-web-lead-subtitle">
                Tell us your requirement — we reply within 30 minutes.
                </div>

                <ServiceQuoteForm />

            </div>
            </div>
        </section>

        <section className="custom-web-awards">
        <div className="custom-web-awards-inner">
            <div className="custom-web-awards-label">
            Award-winning SEO &amp; web agency
            </div>

            <div className="custom-web-awards-row">
            <div className="custom-web-award-item">
                <strong>DesignRush</strong>
                <span>Best SEO Company in India</span>
            </div>

            <div className="custom-web-award-item">
                <strong>The Manifest</strong>
                <span>Best SEO Agency 2025</span>
            </div>

            <div className="custom-web-award-item">
                <strong>Clutch</strong>
                <span>Top Rated Agency</span>
            </div>

            <div className="custom-web-award-item">
                <strong>SiliconIndia</strong>
                <span>Top Rated in India</span>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-intro-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-intro-grid">
            <div className="custom-web-intro-copy">
                <div className="custom-web-section-eyebrow">
                Long-term impact
                </div>

                <h2 className="custom-web-section-title">
                Attractive websites with a user-friendly interface
                </h2>

                <p>
                Do you want a stunning professional website with state-of-the-art
                features that create a lifelong impact? WordPress website development
                is your go-to solution — it enables designing and building influential
                websites that nurture audience engagement and aid successful lead
                generation.
                </p>

                <p>
                WordPress is the largest content management system, accounting for
                43.6% of all websites, with around 493 million sites using it. It&apos;s
                the most popular CMS platform, favored for its versatility,
                flexibility, easy management, and superior customization.
                </p>

                <p>
                With advanced development services, our developers create appealing,
                responsive websites with a unique content structure — helping you
                achieve your business goals while focusing on user needs.
                </p>
            </div>

            <div className="custom-web-intro-stats">
                <div className="custom-web-intro-stat">
                <strong>500+</strong>
                <span>Industries served across sectors</span>
                </div>

                <div className="custom-web-intro-stat">
                <strong>100+</strong>
                <span>Successful campaigns delivered</span>
                </div>

                <div className="custom-web-intro-stat">
                <strong>10+</strong>
                <span>Years of web development experience</span>
                </div>

                <div className="custom-web-intro-stat">
                <strong>5/5</strong>
                <span>Average client satisfaction rating</span>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-why-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                Why choose us
            </div>

            <h2 className="custom-web-section-title">
                So, what makes us your best choice?
            </h2>

            <p className="custom-web-section-intro">
                As the digital landscape rapidly transforms, more businesses opt for
                WordPress development — a highly secure platform with built-in plugins
                and integrations enabling endless customization. Here&apos;s what sets
                us apart.
            </p>
            </div>

            <div className="custom-web-reasons-grid">
            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>01</span>
                <h3>Experienced WordPress developers</h3>
                </div>

                <p>
                Working in the industry for more than a decade, we&apos;re reputed as
                one of the leading development agencies. Our team of skilled,
                exclusive developers crafts websites to excellence — with meticulous
                knowledge of coding, security, and problem-solving that scales your
                business.
                </p>
            </div>

            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>02</span>
                <h3>Streamlined approach</h3>
                </div>

                <p>
                The secret to a successful website lies in strategic planning. Our
                services rely on a steadfast outlook focused on thorough research,
                planning, and deployment — the entire procedure carefully executed
                for smooth project management.
                </p>
            </div>

            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>03</span>
                <h3>Advanced coding</h3>
                </div>

                <p>
                Coding is the foundation of a highly functional website with enhanced
                efficiency and performance. It gives your site a unique style,
                design, and security standard. With the latest coding standards, we
                ensure dynamic features and increased online visibility.
                </p>
            </div>

            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>04</span>
                <h3>Customized solutions</h3>
                </div>

                <p>
                Development cost varies with features, complexity, and page count.
                We propose tailored solutions that meet your budget and fulfil
                business needs — working together to recognise the most suitable
                design and development plan for your requirements.
                </p>
            </div>

            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>05</span>
                <h3>Adhere to timelines</h3>
                </div>

                <p>
                With streamlined project execution, we minimise risks and errors
                while meeting deadlines. Our proactive, tried-and-tested
                methodologies keep us competitive and help deliver your website on
                time, every time.
                </p>
            </div>

            <div className="custom-web-reason-card">
                <div className="custom-web-reason-heading">
                <span>06</span>
                <h3>Outstanding maintenance &amp; support</h3>
                </div>

                <p>
                Our job doesn&apos;t end after delivery. For effective functioning
                and performance, we provide constant support through unwavering
                maintenance — staying updated with the newest digital shifts so you
                remain at the top of the search rank.
                </p>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-services-section"
        id="work"
        >
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                What we do
            </div>

            <h2 className="custom-web-section-title">
                Custom website development services we provide
            </h2>

            <p className="custom-web-section-intro">
                At Theme Dekho, we offer a wide range of website development
                services focused on creating better designs, enhanced
                functionality, and optimized performance. Services can be
                customized to your needs — here are some of our core offerings.
            </p>
            </div>

            <div className="custom-web-services-grid">
            <div className="custom-web-services-nav">
                {customWebServices.map((service, index) => (
                <button
                    key={service.label}
                    type="button"
                    className={
                    activeService === index
                        ? "custom-web-service-button active"
                        : "custom-web-service-button"
                    }
                    onClick={() => setActiveService(index)}
                >
                    <span className="custom-web-service-number">
                    {index + 1}
                    </span>

                    <span className="custom-web-service-label">
                    {service.label}
                    </span>
                </button>
                ))}
            </div>

            <div className="custom-web-service-panel">
                <div className="custom-web-service-panel-number">
                {currentService.number}
                </div>

                <h3>{currentService.title}</h3>

                <p>{currentService.description}</p>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-benefits-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                The benefits
            </div>

            <h2 className="custom-web-section-title">
                How is website development beneficial?
            </h2>

            <p className="custom-web-section-intro">
                Manage and update your website content for increased engagement
                and conversions. Here&apos;s what a professionally developed
                WordPress website brings to your business.
            </p>
            </div>

            <div className="custom-web-benefits-grid">
            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">01</div>
                <div>
                <h3>Captivating templates</h3>
                <p>
                    WordPress offers a wide array of stunning templates that give
                    your website a premium look. Best part — most templates are
                    free and you can easily customize them.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">02</div>
                <div>
                <h3>Specialized plugins</h3>
                <p>
                    Wondering about increasing your website&apos;s functionality?
                    From shopping carts and AR videos to SEO, plugins in WordPress
                    site development are incredible features.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">03</div>
                <div>
                <h3>User-friendly interface</h3>
                <p>
                    WordPress has a user-friendly interface enabling easy
                    navigation and enhanced experience. You can effortlessly upload
                    content, including new pages, menu bars, and images.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">04</div>
                <div>
                <h3>Up-to-date features</h3>
                <p>
                    Complying with the latest trends and technological
                    developments, WordPress allows advanced features and smooth
                    transition of changes without any glitches.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">05</div>
                <div>
                <h3>Easy to use</h3>
                <p>
                    Website development in WordPress is very easy to use without
                    worrying about maintenance and updates. Change your website look
                    by switching templates, saving time and money.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">06</div>
                <div>
                <h3>SEO-friendly</h3>
                <p>
                    Another significant advantage of WordPress — your website is
                    SEO-friendly. Improve your search rank and visibility, driving
                    higher organic traffic and promoting credibility.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">07</div>
                <div>
                <h3>Seamless content management</h3>
                <p>
                    Content is the vital component providing value and relevance.
                    To stay ahead of the competition, regular updates and following
                    trends are pivotal — and WordPress makes it seamless.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">08</div>
                <div>
                <h3>Mobile responsive</h3>
                <p>
                    There are 7.2 billion smartphone users worldwide, and most
                    people access the internet through mobile phones. A mobile
                    responsive website is crucial.
                </p>
                </div>
            </div>

            <div className="custom-web-benefit-card">
                <div className="custom-web-benefit-icon">09</div>
                <div>
                <h3>Enhanced performance</h3>
                <p>
                    We help your website perform better with faster page speed,
                    simplified architecture, optimized images and videos, regular
                    security updates, and constant monitoring.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-process-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-process-grid">
            <div className="custom-web-process-head">
                <div className="custom-web-section-eyebrow">
                How we work
                </div>

                <h2 className="custom-web-process-title">
                A structured development process
                </h2>

                <p>
                Research and planning are the initial stages of the development
                process, where we understand your business needs and analyze the
                project scope. A successful website relies entirely on how well
                it&apos;s planned — and we plan every step with you.
                </p>
            </div>

            <div className="custom-web-process-steps">
                <div className="custom-web-process-step">
                <div className="custom-web-process-number">1</div>

                <div>
                    <h3>Planning</h3>

                    <ul>
                    <li>
                        We determine your business needs to amplify the benefits.
                    </li>

                    <li>
                        We recognise fundamental features, user experience, and
                        efficiency.
                    </li>

                    <li>
                        We map out the strategy and essential approaches to execute it.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="custom-web-process-step">
                <div className="custom-web-process-number">2</div>

                <div>
                    <h3>Development</h3>

                    <ul>
                    <li>
                        We build your website using the right frameworks and
                        technologies.
                    </li>

                    <li>
                        Custom layouts, themes, plugins, and features are implemented.
                    </li>

                    <li>
                        Code is written to the latest standards for speed and security.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="custom-web-process-step">
                <div className="custom-web-process-number">3</div>

                <div>
                    <h3>Test</h3>

                    <ul>
                    <li>
                        Consistent test runs ensure smooth page flow and functionality.
                    </li>

                    <li>
                        We check responsiveness across all devices and screen sizes.
                    </li>

                    <li>
                        Bugs and issues are identified and resolved before launch.
                    </li>
                    </ul>
                </div>
                </div>

                <div className="custom-web-process-step">
                <div className="custom-web-process-number">4</div>

                <div>
                    <h3>Launch</h3>

                    <ul>
                    <li>
                        We deploy your website ensuring seamless performance.
                    </li>

                    <li>
                        Post-launch, we provide maintenance and constant support.
                    </li>

                    <li>
                        We stay updated with the newest digital shifts for the best
                        experience.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-tech-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                Our stack
            </div>

            <h2 className="custom-web-section-title">
                Technologies &amp; plugins we deploy
            </h2>
            </div>

            <div className="custom-web-tech-grid">
            <div className="custom-web-tech-card">
                <h3>Frontend</h3>

                <div className="custom-web-tech-chips">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>React</span>
                </div>
            </div>

            <div className="custom-web-tech-card">
                <h3>Backend</h3>

                <div className="custom-web-tech-chips">
                <span>PHP</span>
                <span>WordPress</span>
                </div>
            </div>

            <div className="custom-web-tech-card">
                <h3>Database</h3>

                <div className="custom-web-tech-chips">
                <span>MySQL</span>
                </div>
            </div>

            <div className="custom-web-tech-card">
                <h3>Version Control</h3>

                <div className="custom-web-tech-chips">
                <span>Git</span>
                </div>
            </div>

            <div className="custom-web-tech-card">
                <h3>Programming Language</h3>

                <div className="custom-web-tech-chips">
                <span>PHP</span>
                </div>
            </div>

            <div className="custom-web-tech-card">
                <h3>Cloud &amp; DevOps</h3>

                <div className="custom-web-tech-chips">
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Azure</span>
                </div>
            </div>
            </div>

            <div className="custom-web-marketing-tools">
            <div className="custom-web-section-eyebrow">
                Marketing tools
            </div>

            <h3>
                The industry&apos;s leading tools, for maximum accuracy
            </h3>

            <div className="custom-web-tools-list">
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
        </div>
        </section>

        <section className="custom-web-comparison-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                The difference
            </div>

            <h2 className="custom-web-section-title">
                Theme Dekho vs other agencies
            </h2>
            </div>

            <div className="custom-web-comparison-grid">
            <div className="custom-web-comparison-card custom-web-comparison-us">
                <h3>📌 Theme Dekho</h3>

                <ul>
                <li>
                    Clear milestones and realistic objectives, explained with
                    confidence.
                </li>

                <li>
                    We learn your business, market, competition, and goals, then plan
                    fully.
                </li>

                <li>
                    Dedicated focus with daily or weekly progress updates.
                </li>

                <li>
                    Complete transparency — even small issues are raised immediately.
                </li>

                <li>
                    Focused on long-term SEO success with ethical, reliable methods.
                </li>

                <li>
                    Results measured on ROI, conversions, and qualified leads.
                </li>

                <li>
                    Personalized strategies with unique insights and expert guidance.
                </li>
                </ul>
            </div>

            <div className="custom-web-comparison-card custom-web-comparison-them">
                <h3>Other agencies</h3>

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
                    May hide or misrepresent issues if targets are missed.
                </li>

                <li>
                    Focus on short-term gains and quantity over quality.
                </li>

                <li>
                    Track success only through rankings and traffic numbers.
                </li>

                <li>
                    Minimal discussion about trends and improvements.
                </li>
                </ul>
            </div>
            </div>
        </div>
        </section>

        <section className="custom-web-faq-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-section-head">
            <div className="custom-web-section-eyebrow">
                Questions
            </div>

            <h2 className="custom-web-section-title">
                Frequently asked questions
            </h2>
            </div>

            <div className="custom-web-faq-grid">
            {[
                {
                question: "Is WordPress ideal for my business?",
                answer:
                    "WordPress is a highly versatile CMS with immense flexibility, supporting 200+ languages and 60,000+ plugins. It's preferred across sectors — small enterprises, startups, non-profits, content sites, mega-corporations, and financial establishments all fit. To confirm if it's profitable for you, discuss your project with our experts.",
                },
                {
                question:
                    "Can I use WordPress to build an ecommerce website?",
                answer:
                    "Yes. Our developers can customize any WordPress website to your preferences. We improve efficiency, performance, and functionality through unique customizations that make you stand out — our tailor-made sites focus on fulfilling your business requirements.",
                },
                {
                question: "Does WordPress support SEO?",
                answer:
                    "Absolutely. WordPress is SEO-friendly by design and pairs well with tools like Yoast. With a clean structure, fast loading, and engaging content, your site can rank well — especially when combined with a strong digital marketing strategy.",
                },
                {
                question: "When will I get my WordPress website?",
                answer:
                    "The timeframe depends on project complexity — number of pages, customizations, SEO, and so on. It may take a week up to three months depending on your demands. However, we give our best shot to deliver it at the earliest we can.",
                },
                {
                question: "How much does custom web development cost?",
                answer:
                    "Cost varies considerably with features, complexity, and the number of pages. We propose tailored solutions that meet your budget and business needs. Share your requirements in the form and we'll send a clear, custom quote within 30 minutes.",
                },
                {
                question: "Will my website be mobile responsive?",
                answer:
                    "Yes. With 7.2 billion smartphone users worldwide, mobile responsiveness is crucial. Every website we build is fully responsive and tested across mobile, tablet, and desktop for a smooth experience on any screen.",
                },
            ].map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                <div
                    key={faq.question}
                    className={
                    isOpen
                        ? "custom-web-faq-item open"
                        : "custom-web-faq-item"
                    }
                >
                    <button
                    type="button"
                    className="custom-web-faq-question"
                    onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                    }
                    >
                    <span>{faq.question}</span>

                    <span className="custom-web-faq-plus">
                        +
                    </span>
                    </button>

                    <div className="custom-web-faq-answer">
                    <div className="custom-web-faq-answer-inner">
                        {faq.answer}
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </section>

        <section className="custom-web-cta-section">
        <div className="custom-web-section-wrap">
            <div className="custom-web-cta">
            <div className="custom-web-cta-inner">
                <div className="custom-web-cta-content">
                <h2>
                    Need a custom website or redesign?
                </h2>

                <p>
                    Share your details and get a free quote within 30 minutes.
                </p>

                <div className="custom-web-cta-categories">
                    <span>E-Commerce</span>
                    <span>Jewellery Store</span>
                    <span>Home &amp; Furniture</span>
                    <span>Medical Healthcare</span>
                    <span>Hospital &amp; Clinic</span>
                    <span>Dental</span>
                    <span>Eye Hospital</span>
                </div>
                </div>

                {/* <a
                href="#lead"
                className="custom-web-cta-button"
                >
                Get a free quote →
                </a> */}
                <button
                type="button"
                className="wp-cta-button"
                onClick={() => {
                    document
                    .getElementById("lead")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
                >
                Get a free quote →
                </button>
            </div>
            </div>
        </div>
        </section>
        </main>

      <Footer />
    </>
  );
}