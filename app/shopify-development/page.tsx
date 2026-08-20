"use client";

import { SubmitEvent, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./shopify-development.css";


const shopifyServices = [
    {
        number: "01 — Storefront Setup",
        label: "Storefront Setup",
        title: "Design and build a visually striking, responsive store",
        description:
        "Responsive website design and user experience can increase your ROI by up to 9,900%. Most users judge a brand's credibility by its design — and when a website delivers a poor shopping experience, 88% of users are less likely to revisit. As a seasoned Shopify development company in India, we set up your storefront integrating customized themes, multiple payment gateways, shipping and tracking records, and order management for superior user experience and boosted engagement. We ensure a user-friendly interface and mobile-responsive site for smooth operations and scalable results.",
    },
    {
        number: "02 — App Development",
        label: "App Development",
        title: "Promote optimized performance through custom app development",
        description:
        "What can be better than a Shopify app to expand your business? A website or mobile app can be easily installed, and users receive a personalized shopping experience. Transforming your online store into a shopping app increases conversion opportunities as users access services and information on the go — even offline — while promoting real-time communication that enhances engagement and revenue. We specialize in Shopify app development that accelerates your website's functionality. Using diverse third-party integrations and APIs, we create state-of-the-art apps with exemplary features, implementing best practices for advanced security, optimized architecture, and clean code that leverages optimal benefits from your ecommerce app.",
    },
    {
        number: "03 — Migration",
        label: "Migration",
        title: "Move your existing ecommerce website to Shopify",
        description:
        "Revamp your existing ecommerce website by migrating it to Shopify — elevate your storefront's look and feel for improved performance. Unlock the potential of your online store by seamlessly incorporating innovative features like product lists, shopping carts, and orders. A Shopify development agency in India can effortlessly transfer data in minimal downtime, and you can optimize content, workflows, and administration for an improved shopping experience. Our experts acknowledge the significance of website migrations and perform them precisely to ensure no glitches or interruptions. With sophisticated tools, we simplify complex Shopify migrations, saving time and assuring increased website security that boosts your site's performance.",
    },
    {
        number: "04 — Maintenance & Support",
        label: "Maintenance & Support",
        title: "Troubleshoot problems and stay on the latest version",
        description:
        "You cannot expect impressive results until you keep your website up-to-date. Fixing bugs and malware and upgrading your Shopify ecommerce site to the latest version enhances security and optimizes functionality. Performing periodic website audits is crucial to determine flaws and work on them — improving speed, user experience, navigation, and mobile responsiveness, which directly affects lead generation and sales. Our Shopify development services in India are incomplete without maintenance and support. We constantly monitor your eCommerce site's performance, curtail risks, and safeguard your website against information breaches and malware. We fix technical issues and propose 24/7 support for superior performance.",
    },
    ];

export default function ShopifyDevelopmentPage() {

  const [activeService, setActiveService] = useState(0);
  const currentService = shopifyServices[activeService];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [captchaA, setCaptchaA] = useState(0);
  const [captchaB, setCaptchaB] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [fullName, setFullName] = useState(""); 
  const [contactNumber, setContactNumber] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


  useEffect(() => {
  setCaptchaA(Math.floor(Math.random() * 6) + 2);
  setCaptchaB(Math.floor(Math.random() * 6) + 2);
}, []);


  
//   const handleShopifyFormSubmit = (
//     event: SubmitEvent<HTMLFormElement>
//     ) => {
//     event.preventDefault();

//     const correctAnswer = captchaA * captchaB;

//     if (Number(captchaAnswer) !== correctAnswer) {
//         setCaptchaError(true);
//         setCaptchaAnswer("");
//         return;
//     }

//     setCaptchaError(false);

//     alert(
//         "Thank you! Our team will contact you within 30 minutes."
//     );

//     event.currentTarget.reset();
//     setCaptchaAnswer("");
//     };

    const handleShopifyFormSubmit = async (
        event: SubmitEvent<HTMLFormElement>
        ) => {
        event.preventDefault();

        setFormError("");

        const correctAnswer = captchaA * captchaB;

        if (Number(captchaAnswer) !== correctAnswer) {
            setCaptchaError(true);
            setCaptchaAnswer("");
            return;
        }

        if (!fullName.trim()) {
            setFormError("Please enter your full name.");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(contactNumber)) {
            setFormError("Please enter a valid 10-digit contact number.");
            return;
        }

        if (!websiteType) {
            setFormError("Please select the type of website.");
            return;
        }

        if (!API_BASE_URL) {
            setFormError("NEXT_PUBLIC_API_BASE_URL is missing.");
            return;
        }

        if (isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch(
            `${API_BASE_URL}/api/quote-requests`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                business_name: fullName.trim(),
                whatsapp_number: contactNumber,
                website_type: websiteType,
                }),
            }
            );

            const data = await response.json();

            if (!response.ok) {
            throw new Error(
                data.detail ||
                data.message ||
                "Unable to submit quote request."
            );
            }

            alert("Free quote request submitted successfully.");

            setFullName("");
            setContactNumber("");
            setWebsiteType("");
            setCaptchaAnswer("");
            setCaptchaError(false);
        } catch (error: unknown) {
            setFormError(
            error instanceof Error
                ? error.message
                : "Unable to submit quote request."
            );
        } finally {
            setIsSubmitting(false);
        }
        };


  return (
    <>
      <Header />

     <main className="shopify-development-page">
        <section className="shopify-hero">
            <div className="shopify-hero-inner">
            <div className="shopify-hero-content">
                <span className="shopify-hero-chip">
                <span className="shopify-hero-chip-dot" />
                Top Shopify Development Agency in India
                </span>

                <h1>
                Shopify development in India — build online stores that{" "}
                <span className="shopify-blue">drive sales</span>.
                </h1>

                <p className="shopify-hero-description">
                Grow your online business with our Shopify development services
                in India. We build fast, secure, and conversion-focused Shopify
                stores that offer a seamless shopping experience and help you
                boost sales.
                </p>

                <ul className="shopify-hero-points">
                <li>
                    Custom Shopify store development for all business types
                </li>

                <li>
                    Fast, secure, and mobile-optimized eCommerce websites
                </li>

                <li>
                    Boost online sales, brand credibility &amp; engagement
                </li>
                </ul>

                <div className="shopify-hero-actions">
                <a
                    href="#work"
                    className="shopify-button shopify-button-primary"
                >
                    See our work →
                </a>

                <a
                    href="#lead"
                    className="shopify-button shopify-button-ghost"
                >
                    Talk to an expert
                </a>
                </div>

                <div className="shopify-hero-meta">
                <div className="shopify-hero-stat">
                    <span className="shopify-hero-stat-number">
                    500+
                    </span>
                    <span className="shopify-hero-stat-label">
                    Industries served
                    </span>
                </div>

                <div className="shopify-hero-stat">
                    <span className="shopify-hero-stat-number">
                    10+
                    </span>
                    <span className="shopify-hero-stat-label">
                    Years of experience
                    </span>
                </div>

                <div className="shopify-hero-stat">
                    <span className="shopify-hero-stat-number">
                    5/5
                    </span>
                    <span className="shopify-hero-stat-label">
                    Client rating
                    </span>
                </div>
                </div>
            </div>

            <div className="shopify-lead-card" id="lead">
                <div className="shopify-lead-heading">
                Let&apos;s build a dream website
                </div>

                <div className="shopify-lead-subtitle">
                Tell us your requirement — we reply within 30 minutes.
                </div>

                <form className="shopify-lead-form"
                 onSubmit={handleShopifyFormSubmit} >

                <input
                type="text"
                placeholder="Name *"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
                />


                <input
                type="tel"
                placeholder="Contact number *"
                value={contactNumber}
                onChange={(event) => {
                    const value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                    setContactNumber(value);
                }}
                required
                />

                <select
                required
                value={websiteType}
                onChange={(event) => setWebsiteType(event.target.value)}
                >
                <option value="">Type of website</option>
                <option>E-Commerce Store</option>
                <option>Interior &amp; Architecture</option>
                <option>Healthcare &amp; Clinic</option>
                <option>Real Estate</option>
                <option>Corporate / Business</option>
                <option>Other</option>
                </select>

                <div className="shopify-captcha">
                    <span>
                    {captchaA > 0 && captchaB > 0
                        ? `${captchaA} × ${captchaB} =`
                        : "Loading..."}
                    </span>

                    <input
                    type="text"
                    inputMode="numeric"
                    value={captchaAnswer}
                    onChange={(event) => {
                        setCaptchaAnswer(event.target.value);

                        if (captchaError) {
                        setCaptchaError(false);
                        }
                    }}
                    placeholder={captchaError ? "Try again" : "?"}
                    className={captchaError ? "captcha-error" : ""}
                    required
                    />
                </div>

                {formError && (
                <p className="shopify-form-error">
                    {formError}
                </p>
                )}

                <button
                type="submit"
                className="shopify-form-submit"
                disabled={isSubmitting}
                >
                {isSubmitting
                    ? "Submitting..."
                    : "Send message to our team"}
                </button>
                </form>
            </div>
            </div>
        </section>

        <section className="shopify-awards">
            <div className="shopify-awards-inner">
                <div className="shopify-awards-label">
                Award-winning SEO &amp; web agency
                </div>

                <div className="shopify-awards-row">
                <div className="shopify-award-item">
                    <strong>DesignRush</strong>
                    <span>Best SEO Company in India</span>
                </div>

                <div className="shopify-award-item">
                    <strong>The Manifest</strong>
                    <span>Best SEO Agency 2025</span>
                </div>

                <div className="shopify-award-item">
                    <strong>Clutch</strong>
                    <span>Top Rated Agency</span>
                </div>

                <div className="shopify-award-item">
                    <strong>SiliconIndia</strong>
                    <span>Top Rated in India</span>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-intro-section">
            <div className="shopify-section-wrap">
                <div className="shopify-intro-grid">
                <div className="shopify-intro-copy">
                    <div className="shopify-section-eyebrow">
                    Long-term impact
                    </div>

                    <h2 className="shopify-section-title">
                    End-to-end online retail with Shopify development India
                    </h2>

                    <p>
                    Nearly 5 million websites run on Shopify across the world,
                    accounting for 10.32% of the global ecommerce market.
                    It&apos;s one of the best ecommerce platforms, with a
                    simplified architecture and centralized content management
                    system — and adoption keeps growing every year.
                    </p>

                    <p>
                    When you want your online storefront to be a profit generator
                    driving increased sales, Shopify development is the need of
                    the hour. As the ecommerce marketplace grows more competitive,
                    you must showcase something out of the box to deliver an
                    unparalleled shopping experience that propels conversions.
                    </p>

                    <p>
                    At Theme Dekho, our certified, well-versed Shopify developers
                    propose benchmark solutions that deliver scalable growth —
                    transforming your store into an ecommerce enterprise that
                    aligns with your goals and escalates sales.
                    </p>
                </div>

                <div className="shopify-intro-stats">
                    <div className="shopify-intro-stat">
                    <strong>500+</strong>
                    <span>Industries served across sectors</span>
                    </div>

                    <div className="shopify-intro-stat">
                    <strong>100+</strong>
                    <span>Successful campaigns delivered</span>
                    </div>

                    <div className="shopify-intro-stat">
                    <strong>10+</strong>
                    <span>Years of web development experience</span>
                    </div>

                    <div className="shopify-intro-stat">
                    <strong>5/5</strong>
                    <span>Average client satisfaction rating</span>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-why-section">
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    Why choose us
                </div>

                <h2 className="shopify-section-title">
                    So, what makes us your best choice?
                </h2>

                <p className="shopify-section-intro">
                    As the ecommerce marketplace grows more competitive,
                    more businesses choose Shopify — a secure, scalable
                    platform with endless app integrations. Here&apos;s
                    what sets us apart.
                </p>
                </div>

                <div className="shopify-reasons-grid">
                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
                    <span>01</span>
                    <h3>Certified Shopify developers</h3>
                    </div>

                    <p>
                    Working in the industry for more than a decade,
                    we&apos;re a reputed Shopify development company.
                    Our team of certified, well-versed Shopify developers
                    crafts stores to excellence — with meticulous
                    knowledge of themes, apps, security, and
                    problem-solving that scales your business.
                    </p>
                </div>

                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
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
                </div>

                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
                    <span>03</span>
                    <h3>Advanced coding</h3>
                    </div>

                    <p>
                    Coding is the foundation of a highly functional website
                    with enhanced efficiency and performance. It gives your
                    site a unique style, design, and security standard. With
                    the latest coding standards, we ensure dynamic features
                    and increased online visibility.
                    </p>
                </div>

                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
                    <span>04</span>
                    <h3>Customized solutions</h3>
                    </div>

                    <p>
                    Development cost varies with features, complexity, and
                    page count. We propose tailored solutions that meet your
                    budget and fulfil business needs — working together to
                    recognise the most suitable design and development plan
                    for your requirements.
                    </p>
                </div>

                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
                    <span>05</span>
                    <h3>Adhere to timelines</h3>
                    </div>

                    <p>
                    With streamlined project execution, we minimise risks
                    and errors while meeting deadlines. Our proactive,
                    tried-and-tested methodologies keep us competitive and
                    help deliver your website on time, every time.
                    </p>
                </div>

                <div className="shopify-reason-card">
                    <div className="shopify-reason-heading">
                    <span>06</span>
                    <h3>Outstanding maintenance &amp; support</h3>
                    </div>

                    <p>
                    Our job doesn&apos;t end after delivery. For effective
                    functioning and performance, we provide constant support
                    through unwavering maintenance — staying updated with
                    the newest digital shifts so you remain at the top of
                    the search rank.
                    </p>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-services-section"
            id="work"
            >
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    What we do
                </div>

                <h2 className="shopify-section-title">
                    Shopify website development services we provide
                </h2>

                <p className="shopify-section-intro">
                    Responsive website design and user experience can increase
                    your ROI significantly. As a seasoned Shopify development
                    company in India, we cover everything from storefront setup
                    to ongoing support.
                </p>
                </div>

                <div className="shopify-services-grid">
                <div className="shopify-services-nav">
                    {shopifyServices.map((service, index) => (
                    <button
                        key={service.label}
                        type="button"
                        className={
                        activeService === index
                            ? "shopify-service-button active"
                            : "shopify-service-button"
                        }
                        onClick={() => setActiveService(index)}
                    >
                        <span className="shopify-service-number">
                        {index + 1}
                        </span>

                        <span className="shopify-service-label">
                        {service.label}
                        </span>
                    </button>
                    ))}
                </div>

                <div className="shopify-service-panel">
                    <div className="shopify-service-panel-number">
                    {currentService.number}
                    </div>

                    <h3>{currentService.title}</h3>

                    <p>{currentService.description}</p>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-benefits-section">
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    The benefits
                </div>

                <h2 className="shopify-section-title">
                    Why is Shopify ideal for your ecommerce business?
                </h2>

                <p className="shopify-section-intro">
                    Manage your store and content for increased engagement
                    and conversions. Here&apos;s what makes Shopify a powerful
                    platform for your online business.
                </p>
                </div>

                <div className="shopify-benefits-grid">
                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">01</div>
                    <div>
                    <h3>Built-in SEO tools</h3>
                    <p>
                        Improve your search engine rankings with built-in SEO
                        features and structure. Optimize your Shopify store for
                        better online visibility and organic traffic.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">02</div>
                    <div>
                    <h3>Customizable themes</h3>
                    <p>
                        Shopify offers a wide range of stunning, customizable
                        themes. Give your storefront a premium look that matches
                        your brand and appeals to your customers.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">03</div>
                    <div>
                    <h3>User-friendly interface</h3>
                    <p>
                        With a simple and intuitive dashboard, Shopify makes
                        managing products, orders, and inventory effortless —
                        even without technical expertise.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">04</div>
                    <div>
                    <h3>Simplified automations</h3>
                    <p>
                        Automate repetitive tasks like order confirmations,
                        inventory updates, and email flows — saving you time
                        and letting you focus on growth.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">05</div>
                    <div>
                    <h3>Mobile responsive</h3>
                    <p>
                        With most shoppers on mobile, Shopify stores are fully
                        responsive out of the box — delivering a smooth
                        experience across every device.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">06</div>
                    <div>
                    <h3>Enhanced scalability</h3>
                    <p>
                        Shopify grows with your business — from a handful of
                        products to thousands. Scale confidently without worrying
                        about performance or infrastructure.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">07</div>
                    <div>
                    <h3>Seamless integrations</h3>
                    <p>
                        Connect payment gateways, shipping providers, marketing
                        tools, and thousands of apps — extend your store with the
                        features your business needs.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">08</div>
                    <div>
                    <h3>Omnichannel selling</h3>
                    <p>
                        Sell across web, social media, and marketplaces from one
                        place. Reach customers wherever they are and manage it all
                        from a single dashboard.
                    </p>
                    </div>
                </div>

                <div className="shopify-benefit-card">
                    <div className="shopify-benefit-icon">09</div>
                    <div>
                    <h3>Centralized management</h3>
                    <p>
                        Manage products, orders, customers, and analytics from one
                        centralized dashboard — everything you need to run your
                        store efficiently in one place.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-process-section">
            <div className="shopify-section-wrap">
                <div className="shopify-process-grid">
                <div className="shopify-process-head">
                    <div className="shopify-section-eyebrow">
                    Before you hire
                    </div>

                    <h2 className="shopify-process-title">
                    What to know before hiring a Shopify company
                    </h2>

                    <p>
                    Shopify powers millions of stores worldwide with a simplified
                    architecture and endless app integrations. Choosing the right
                    development partner is crucial — here&apos;s what to look for.
                    </p>
                </div>

                <div className="shopify-process-steps">
                    <div className="shopify-process-step">
                    <div className="shopify-process-number">1</div>

                    <div>
                        <h3>Clear your vision</h3>

                        <ul>
                        <li>
                            Evaluate your goals — why you need a store and the type
                            of design you want.
                        </li>
                        <li>
                            Define the purpose of your store and your allocated budget.
                        </li>
                        <li>
                            A clear picture makes it easier to find your best match.
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="shopify-process-step">
                    <div className="shopify-process-number">2</div>

                    <div>
                        <h3>Experience &amp; specialization</h3>

                        <ul>
                        <li>
                            The more experience, the more competent — look for proven
                            Shopify work.
                        </li>
                        <li>
                            Ecommerce specialization matters, as retail challenges are unique.
                        </li>
                        <li>
                            Experienced teams handle integrations and scale efficiently.
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="shopify-process-step">
                    <div className="shopify-process-number">3</div>

                    <div>
                        <h3>SEO skills &amp; portfolio</h3>

                        <ul>
                        <li>
                            SEO drives store visibility and organic sales — insist on a strategy.
                        </li>
                        <li>
                            Check previous stores to recognise work patterns and success rates.
                        </li>
                        <li>
                            Ask for client testimonials to understand their experience.
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="shopify-process-step">
                    <div className="shopify-process-number">4</div>

                    <div>
                        <h3>Security, reporting &amp; support</h3>

                        <ul>
                        <li>
                            Transparency and direct reporting build a comfortable partnership.
                        </li>
                        <li>
                            Payment and customer data need stringent security measures.
                        </li>
                        <li>
                            Awesome after-sales support and maintenance make a company credible.
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="shopify-tech-section">
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    Our stack
                </div>

                <h2 className="shopify-section-title">
                    Technologies &amp; plugins we deploy
                </h2>
                </div>

                <div className="shopify-tech-grid">
                <div className="shopify-tech-card">
                    <h3>Frontend</h3>
                    <div className="shopify-tech-chips">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>React</span>
                    </div>
                </div>

                <div className="shopify-tech-card">
                    <h3>Backend</h3>
                    <div className="shopify-tech-chips">
                    <span>Shopify</span>
                    <span>Liquid</span>
                    <span>Node.js</span>
                    </div>
                </div>

                <div className="shopify-tech-card">
                    <h3>Database</h3>
                    <div className="shopify-tech-chips">
                    <span>MySQL</span>
                    </div>
                </div>

                <div className="shopify-tech-card">
                    <h3>Version Control</h3>
                    <div className="shopify-tech-chips">
                    <span>Git</span>
                    </div>
                </div>

                <div className="shopify-tech-card">
                    <h3>Programming Language</h3>
                    <div className="shopify-tech-chips">
                    <span>PHP</span>
                    </div>
                </div>

                <div className="shopify-tech-card">
                    <h3>Cloud &amp; DevOps</h3>
                    <div className="shopify-tech-chips">
                    <span>AWS</span>
                    <span>Google Cloud</span>
                    <span>Azure</span>
                    </div>
                </div>
                </div>

                <div className="shopify-marketing-tools">
                <div className="shopify-section-eyebrow">
                    Marketing tools
                </div>

                <h3>
                    The industry&apos;s leading tools, for maximum accuracy
                </h3>

                <div className="shopify-tools-list">
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

        <section className="shopify-comparison-section">
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    The difference
                </div>

                <h2 className="shopify-section-title">
                    Theme Dekho vs other agencies
                </h2>
                </div>

                <div className="shopify-comparison-grid">
                <div className="shopify-comparison-card shopify-comparison-us">
                    <h3>📌 Theme Dekho</h3>

                    <ul>
                    <li>
                        Clear milestones and realistic objectives, explained with confidence.
                    </li>

                    <li>
                        We learn your business, market, competition, and goals, then plan fully.
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

                <div className="shopify-comparison-card shopify-comparison-them">
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

        <section className="shopify-faq-section">
            <div className="shopify-section-wrap">
                <div className="shopify-section-head">
                <div className="shopify-section-eyebrow">
                    Questions
                </div>

                <h2 className="shopify-section-title">
                    Frequently asked questions
                </h2>
                </div>

                <div className="shopify-faq-grid">
                {[
                    {
                    question: "Is Shopify ideal for my business?",
                    answer:
                        "Shopify is a powerful, flexible ecommerce platform suited to businesses of all sizes — from startups and small stores to large enterprises. With simplified management, endless apps, and built-in payments, it fits diverse retail needs. Discuss your project with our experts to confirm the best fit for you.",
                    },
                    {
                    question: "Can you migrate my existing store to Shopify?",
                    answer:
                        "Yes. Our experts handle complete Shopify migrations — transferring products, orders, and customer data with minimal downtime. We ensure no glitches or interruptions and optimize your content and workflows for an improved shopping experience.",
                    },
                    {
                    question: "Does Shopify support SEO?",
                    answer:
                        "Absolutely. Shopify comes with built-in SEO features — clean URLs, meta tags, sitemaps, and fast loading. Combined with quality content and a strong digital marketing strategy, your store can rank well and drive organic sales.",
                    },
                    {
                    question: "When will I get my Shopify store?",
                    answer:
                        "The timeframe depends on complexity — number of products, custom features, integrations, and design. It may take from a week up to a few months depending on your demands. We always give our best to deliver at the earliest.",
                    },
                    {
                    question: "How much does a Shopify store cost?",
                    answer:
                        "Cost varies with features, apps, theme customization, and the number of products. We propose tailored solutions that meet your budget and business needs. Share your requirements in the form and we'll send a clear, custom quote within 30 minutes.",
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
                            ? "shopify-faq-item open"
                            : "shopify-faq-item"
                        }
                    >
                        <button
                        type="button"
                        className="shopify-faq-question"
                        onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                        }
                        >
                        <span>{faq.question}</span>

                        <span className="shopify-faq-plus">
                            +
                        </span>
                        </button>

                        <div className="shopify-faq-answer">
                        <div className="shopify-faq-answer-inner">
                            {faq.answer}
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>

        <section className="shopify-cta-section">
            <div className="shopify-section-wrap">
                <div className="shopify-cta">
                <div className="shopify-cta-inner">
                    <div className="shopify-cta-content">
                    <h2>Need a custom website or redesign?</h2>

                    <p>
                        Share your details and get a free quote within 30 minutes.
                    </p>

                    <div className="shopify-cta-categories">
                        <span>E-Commerce</span>
                        <span>Jewellery Store</span>
                        <span>Home &amp; Furniture</span>
                        <span>Medical Healthcare</span>
                        <span>Hospital &amp; Clinic</span>
                        <span>Dental</span>
                        <span>Eye Hospital</span>
                    </div>
                    </div>

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