"use client";

import { SubmitEvent, useState } from "react";
import Header from "@/components/layout/Header";
import "./wordpress-development.css";
import Footer from "@/components/layout/Footer";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function WordPressDevelopmentPage() {
  
  const wordpressStages = [
    {
        number: "01",
        label: "Planning",
        title: "Determine business needs to amplify benefits",
        description:
        "Research and planning are the initial stages of the WordPress site development process, where we understand your business needs and analyze the scope of the project. A successful website relies entirely on how well you plan it — it includes recognizing the fundamental website features, user experience, efficiency, and other aspects. Our developers will thoroughly discuss the website goals with you so we can map out the strategy and the essential approaches required to execute it, planning your website design based on your preconditions.",
    },
    {
        number: "02",
        label: "Development",
        title: "Turn the approved strategy into a functional website",
        description:
        "Our developers transform the approved design and project plan into a responsive WordPress website. We configure the required theme, functionality, plugins, integrations, content structure, and technical elements while keeping usability, scalability, and performance in focus.",
    },
    {
        number: "03",
        label: "Test",
        title: "Test performance, functionality, and user experience",
        description:
        "Before launch, the website is checked across devices and browsers for responsiveness, functionality, forms, links, speed, compatibility, and overall user experience. Issues identified during testing are resolved before the website is approved for release.",
    },
    {
        number: "04",
        label: "Launch",
        title: "Deploy your WordPress website and make it live",
        description:
        "After final approval and testing, the website is prepared for launch. We complete deployment, final configuration, production checks, and essential post-launch verification so your WordPress website is ready for visitors and ongoing growth.",
    },
    ];

    const [activeStage, setActiveStage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [businessName, setBusinessName] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [websiteType, setWebsiteType] = useState("");
    const [captchaAnswer, setCaptchaAnswer] = useState("");
    const [quoteError, setQuoteError] = useState("");
    const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

    // add handleWhatsappChange here
    function handleWhatsappChange(value: string) {
        const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
        setWhatsappNumber(cleanedValue);
        }

        
    // add handleQuoteSubmit here
        async function handleQuoteSubmit(
            event: SubmitEvent<HTMLFormElement>
            ) {
            event.preventDefault();
    
            setQuoteError("");
    
            if (!businessName.trim()) {
                setQuoteError("Please enter your business name.");
                return;
            }
    
            if (!/^[6-9]\d{9}$/.test(whatsappNumber)) {
                setQuoteError(
                "Please enter a valid 10-digit WhatsApp number."
                );
                return;
            }
    
            if (!websiteType) {
                setQuoteError("Please select the type of website.");
                return;
            }
    
            if (captchaAnswer.trim() !== "12") {
                setQuoteError("Incorrect captcha answer.");
                setCaptchaAnswer("");
                return;
            }
    
            if (!API_BASE_URL) {
                setQuoteError(
                "NEXT_PUBLIC_API_BASE_URL is missing."
                );
                return;
            }
    
            if (isSubmittingQuote) {
                return;
            }
    
            try {
                setIsSubmittingQuote(true);
    
                const response = await fetch(
                `${API_BASE_URL}/api/quote-requests`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    business_name: businessName.trim(),
                    whatsapp_number: whatsappNumber,
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
    
                setBusinessName("");
                setWhatsappNumber("");
                setWebsiteType("");
                setCaptchaAnswer("");
                setQuoteError("");
            } catch (error: unknown) {
                setQuoteError(
                error instanceof Error
                    ? error.message
                    : "Unable to submit quote request."
                );
            } finally {
                setIsSubmittingQuote(false);
            }
            }


    const wordpressFaqs = [
    {
        question: "Is WordPress ideal for my business?",
        answer:
        "WordPress is a highly versatile CMS with immense flexibility, supporting 200+ languages and 60,000+ plugins. It's preferred across sectors — small enterprises, startups, non-profits, content sites, mega-corporations, and financial establishments all fit. To confirm if it's profitable for you, discuss your project with our experts.",
    },
    {
        question: "Can I use WordPress to build an ecommerce website?",
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
    ];

  return (
    <>
      <Header />

      {/* <main className="wordpress-development-page"> */}
        {/* WordPress Development page sections will go here */}
      {/* </main> */}
        <main className="wordpress-development-page">
            <section className="wp-hero">
            <div className="wp-hero-inner">
                {/* LEFT CONTENT */}
                <div className="wp-hero-content">
                <div className="wp-hero-chip">
                    <span className="wp-hero-chip-dot" />
                    Top WordPress Website Development Agency in India
                </div>

                <h1>
                    WordPress development services that{" "}
                    <span>drive growth</span> and performance.
                </h1>

                <p className="wp-hero-description">
                    Build an attractive, engaging WordPress website that
                    nurtures audience engagement and drives lead generation.
                    Trusted by 500+ businesses to grow their online presence.
                </p>

                <ul className="wp-hero-points">
                    <li>
                    Custom WordPress themes, plugins &amp; integrations
                    </li>

                    <li>
                    Fast, secure, and SEO-friendly websites
                    </li>

                    <li>
                    Endless customization for any industry
                    </li>
                </ul>

                <div className="wp-hero-actions">
                    <a
                    href="#work"
                    className="wp-button wp-button-primary"
                    >
                    See our work →
                    </a>

                    <a
                    href="#lead"
                    className="wp-button wp-button-secondary"
                    >
                    Talk to an expert
                    </a>
                </div>

                <div className="wp-hero-stats">
                    <div className="wp-hero-stat">
                    <strong>500+</strong>
                    <span>Industries served</span>
                    </div>

                    <div className="wp-hero-stat">
                    <strong>10+</strong>
                    <span>Years of experience</span>
                    </div>

                    <div className="wp-hero-stat">
                    <strong>5/5</strong>
                    <span>Client rating</span>
                    </div>
                </div>
                </div>

                {/* RIGHT LEAD FORM */}
                <div className="wp-lead-card" id="lead">
                <h2>Let&apos;s build a dream website</h2>

                <p>
                    Tell us your requirement — we reply within 30 minutes.
                </p>

                {/* <form className="wp-lead-form"
                onSubmit={handleQuoteSubmit}
                >
                    <input
                    type="text"
                    value={businessName}
                    onChange={(event) =>
                    setBusinessName(event.target.value)
                    }
                    placeholder="Your Business Name *"
                    required
                    />

                    <input
                    type="tel"
                    value={whatsappNumber}
                    onChange={(event) =>
                    handleWhatsappChange(event.target.value)
                    }
                    placeholder="WhatsApp Number *"
                    required
                    />

                    <select required defaultValue="">
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

                    <div className="wp-captcha">
                    <span>3 × 4 =</span>

                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="?"
                        required
                    />
                    </div>

                    <button
                    type="submit"
                    className="wp-form-submit"
                    >
                    Send message to our team
                    </button>
                </form> */}
                <form
                    className="wp-lead-form"
                    onSubmit={handleQuoteSubmit}
                    >
                    <input
                        type="text"
                        value={businessName}
                        onChange={(event) =>
                        setBusinessName(event.target.value)
                        }
                        placeholder="Name *"
                        autoComplete="organization"
                        required
                    />

                    <input
                        type="tel"
                        inputMode="numeric"
                        value={whatsappNumber}
                        onChange={(event) =>
                        handleWhatsappChange(event.target.value)
                        }
                        placeholder="WhatsApp Number *"
                        autoComplete="tel"
                        required
                    />

                    <select
                        value={websiteType}
                        onChange={(event) =>
                        setWebsiteType(event.target.value)
                        }
                        required
                    >
                        <option value="">
                        Type of website
                        </option>

                        <option value="E-Commerce Website">
                        E-Commerce Website
                        </option>

                        <option value="Interior & Architecture Website">
                        Interior &amp; Architecture Website
                        </option>

                        <option value="Healthcare Website">
                        Healthcare Website
                        </option>

                        <option value="Real Estate Website">
                        Real Estate Website
                        </option>

                        <option value="Business Website">
                        Business Website
                        </option>

                        <option value="Other">
                        Other
                        </option>
                    </select>

                    <div className="wp-captcha">
                        <span>3 × 4 =</span>

                        <input
                        type="text"
                        inputMode="numeric"
                        value={captchaAnswer}
                        onChange={(event) =>
                            setCaptchaAnswer(
                            event.target.value
                                .replace(/\D/g, "")
                                .slice(0, 2)
                            )
                        }
                        placeholder="?"
                        required
                        />
                    </div>

                    {quoteError && (
                        <p
                        role="alert"
                        style={{
                            gridColumn: "1 / -1",
                            margin: 0,
                            color: "#c4342e",
                            fontSize: "13px",
                        }}
                        >
                        {quoteError}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="wp-form-submit"
                        disabled={isSubmittingQuote}
                    >
                        {isSubmittingQuote
                        ? "Sending..."
                        : "Send message to our team"}
                    </button>
                    </form>
                </div>
            </div>
            </section>

            <section className="wp-awards">
                <div className="wp-awards-inner">
                    <div className="wp-awards-label">
                    Award-winning SEO &amp; web agency
                    </div>

                    <div className="wp-awards-row">
                    <div className="wp-award-item">
                        <strong>DesignRush</strong>
                        <span>Best SEO Company in India</span>
                    </div>

                    <div className="wp-award-item">
                        <strong>The Manifest</strong>
                        <span>Best SEO Agency 2025</span>
                    </div>

                    <div className="wp-award-item">
                        <strong>Clutch</strong>
                        <span>Top Rated Agency</span>
                    </div>

                    <div className="wp-award-item">
                        <strong>SiliconIndia</strong>
                        <span>Top Rated in India</span>
                    </div>
                    </div>
                </div>
            </section>

            <section className="wp-intro-section">
                <div className="wp-section-wrap">
                    <div className="wp-intro-grid">
                    <div className="wp-intro-copy">
                        <div className="wp-section-eyebrow">
                        Long-term impact
                        </div>

                        <h2 className="wp-section-title">
                        Attractive websites through WordPress development India
                        </h2>

                        <p>
                        Do you want a stunning professional website with
                        state-of-the-art features that create a lifelong impact?
                        WordPress website development is your go-to solution — it
                        enables designing and building influential websites that
                        nurture audience engagement and aid successful lead
                        generation.
                        </p>

                        <p>
                        WordPress is the largest content management system,
                        accounting for 43.6% of all websites, with around 493
                        million sites using it. It&apos;s the most popular CMS
                        platform, favored for its versatility, flexibility, easy
                        management, and superior customization.
                        </p>

                        <p>
                        With advanced development services, our developers create
                        appealing, responsive websites with a unique content
                        structure — helping you achieve your business goals while
                        focusing on user needs.
                        </p>
                    </div>

                    <div className="wp-intro-stats">
                        <div className="wp-intro-stat">
                        <strong>500+</strong>
                        <span>Industries served across sectors</span>
                        </div>

                        <div className="wp-intro-stat">
                        <strong>100+</strong>
                        <span>Successful campaigns delivered</span>
                        </div>

                        <div className="wp-intro-stat">
                        <strong>10+</strong>
                        <span>Years of web development experience</span>
                        </div>

                        <div className="wp-intro-stat">
                        <strong>5/5</strong>
                        <span>Average client satisfaction rating</span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="wp-why-section">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        Why choose us
                    </div>

                    <h2 className="wp-section-title">
                        So, what makes us your best choice?
                    </h2>

                    <p className="wp-section-intro">
                        As the digital landscape rapidly transforms, more businesses opt
                        for WordPress development — a highly secure platform with built-in
                        plugins and integrations enabling endless customization. Here&apos;s
                        what sets us apart.
                    </p>
                    </div>

                    <div className="wp-reasons-grid">
                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>01</span>
                        <h3>Experienced WordPress developers</h3>
                        </div>

                        <p>
                        Working in the industry for more than a decade, we&apos;re reputed
                        as one of the leading development agencies. Our team of skilled,
                        exclusive developers crafts websites to excellence — with
                        meticulous knowledge of coding, security, and problem-solving
                        that scales your business.
                        </p>
                    </article>

                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>02</span>
                        <h3>Streamlined approach</h3>
                        </div>

                        <p>
                        The secret to a successful website lies in strategic planning.
                        Our services rely on a steadfast outlook focused on thorough
                        research, planning, and deployment — the entire procedure
                        carefully executed for smooth project management.
                        </p>
                    </article>

                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>03</span>
                        <h3>Advanced coding</h3>
                        </div>

                        <p>
                        Coding is the foundation of a highly functional website with
                        enhanced efficiency and performance. It gives your site a
                        unique style, design, and security standard. With the latest
                        coding standards, we ensure dynamic features and increased
                        online visibility.
                        </p>
                    </article>

                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>04</span>
                        <h3>Customized solutions</h3>
                        </div>

                        <p>
                        Development cost varies with features, complexity, and page
                        count. We propose tailored solutions that meet your budget and
                        fulfil business needs — working together to recognise the most
                        suitable design and development plan for your requirements.
                        </p>
                    </article>

                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>05</span>
                        <h3>Adhere to timelines</h3>
                        </div>

                        <p>
                        With streamlined project execution, we minimise risks and
                        errors while meeting deadlines. Our proactive,
                        tried-and-tested methodologies keep us competitive and help
                        deliver your website on time, every time.
                        </p>
                    </article>

                    <article className="wp-reason-card">
                        <div className="wp-reason-heading">
                        <span>06</span>
                        <h3>Outstanding maintenance &amp; support</h3>
                        </div>

                        <p>
                        Our job doesn&apos;t end after delivery. For effective functioning
                        and performance, we provide constant support through unwavering
                        maintenance — staying updated with the newest digital shifts so
                        you remain at the top of the search rank.
                        </p>
                    </article>
                    </div>
                </div>
            </section>

            <section className="wp-services-section" id="work">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        What we do
                    </div>

                    <h2 className="wp-section-title">
                        WordPress development services we provide
                    </h2>

                    <p className="wp-section-intro">
                        Research and planning are the initial stages of the WordPress site
                        development process. A successful website relies entirely on how
                        well it&apos;s planned — here&apos;s how we take your project from idea
                        to launch.
                    </p>
                    </div>

                    <div className="wp-services-grid">
                    <div className="wp-services-nav">
                        {wordpressStages.map((stage, index) => (
                        <button
                            key={stage.label}
                            type="button"
                            className={
                            activeStage === index
                                ? "wp-service-tab active"
                                : "wp-service-tab"
                            }
                            onClick={() => setActiveStage(index)}
                        >
                            <span className="wp-service-number">
                            {index + 1}
                            </span>

                            <span>{stage.label}</span>
                        </button>
                        ))}
                    </div>

                    <div className="wp-service-panel">
                        <div className="wp-service-panel-number">
                        {wordpressStages[activeStage].number} —{" "}
                        {wordpressStages[activeStage].label}
                        </div>

                        <h3>
                        {wordpressStages[activeStage].title}
                        </h3>

                        <p>
                        {wordpressStages[activeStage].description}
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="wp-benefits-section">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        The benefits
                    </div>

                    <h2 className="wp-section-title">
                        How is WordPress website development beneficial?
                    </h2>

                    <p className="wp-section-intro">
                        Manage and update your website content for increased engagement
                        and conversions. Here&apos;s what a professionally developed
                        WordPress website brings to your business.
                    </p>
                    </div>

                    <div className="wp-benefits-grid">
                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">▦</div>

                        <div>
                        <h3>Captivating templates</h3>

                        <p>
                            WordPress offers a wide array of stunning templates that
                            give your website a premium look. Best part — most templates
                            are free and you can easily customize them.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">✦</div>

                        <div>
                        <h3>Specialized plugins</h3>

                        <p>
                            Wondering about increasing your website&apos;s functionality?
                            From shopping carts and AR videos to SEO, plugins in
                            WordPress site development are incredible features.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">➤</div>

                        <div>
                        <h3>User-friendly interface</h3>

                        <p>
                            WordPress has a user-friendly interface enabling easy
                            navigation and enhanced experience. You can effortlessly
                            upload content, including new pages, menu bars, and images.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">⚡</div>

                        <div>
                        <h3>Up-to-date features</h3>

                        <p>
                            Complying with the latest trends and technological
                            developments, WordPress allows advanced features and smooth
                            transition of changes without any glitches.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">✓</div>

                        <div>
                        <h3>Easy to use</h3>

                        <p>
                            Website development in WordPress is very easy to use without
                            worrying about maintenance and updates. Change your website
                            look by switching templates, saving time and money.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">⌕</div>

                        <div>
                        <h3>SEO-friendly</h3>

                        <p>
                            Another significant advantage of WordPress — your website is
                            SEO-friendly. Improve your search rank and visibility,
                            driving higher organic traffic and promoting credibility.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">▤</div>

                        <div>
                        <h3>Seamless content management</h3>

                        <p>
                            Content is the vital component providing value and
                            relevance. To stay ahead of the competition, regular updates
                            and following trends are pivotal — and WordPress makes it
                            seamless.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">▯</div>

                        <div>
                        <h3>Mobile responsive</h3>

                        <p>
                            There are 7.2 billion smartphone users worldwide, and most
                            people access the internet through mobile phones. A mobile
                            responsive website is crucial.
                        </p>
                        </div>
                    </article>

                    <article className="wp-benefit-card">
                        <div className="wp-benefit-icon">◴</div>

                        <div>
                        <h3>Enhanced performance</h3>

                        <p>
                            We help your website perform better with faster page speed,
                            simplified architecture, optimized images and videos,
                            regular security updates, and constant monitoring.
                        </p>
                        </div>
                    </article>
                    </div>
                </div>
            </section>

            <section className="wp-hiring-section">
                <div className="wp-section-wrap">
                    <div className="wp-hiring-grid">
                    <div className="wp-hiring-head">
                        <div className="wp-section-eyebrow">
                        Before you hire
                        </div>

                        <h2 className="wp-section-title wp-hiring-title">
                        What to know before hiring a WordPress company
                        </h2>

                        <p>
                        Since 2014, WordPress has been the fastest-growing CMS,
                        available in 200+ languages with 60,000+ plugins. Choosing the
                        right developer among millions of options is an arduous task —
                        here&apos;s what to look for.
                        </p>
                    </div>

                    <div className="wp-hiring-steps">
                        <div className="wp-hiring-step">
                        <div className="wp-hiring-number">1</div>

                        <div>
                            <h3>Clear your vision</h3>

                            <ul>
                            <li>
                                Evaluate your goals — why you need a developer and the
                                type of design you want.
                            </li>
                            <li>
                                Define the purpose of building the website and your
                                allocated budget.
                            </li>
                            <li>
                                A clear picture makes it easier to find your best match.
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="wp-hiring-step">
                        <div className="wp-hiring-number">2</div>

                        <div>
                            <h3>Experience &amp; specialization</h3>

                            <ul>
                            <li>
                                The more experience, the more competent — look for five
                                years or more.
                            </li>
                            <li>
                                Industry specialization matters, as challenges vary by
                                sector.
                            </li>
                            <li>
                                Experienced teams are more efficient and skilled.
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="wp-hiring-step">
                        <div className="wp-hiring-number">3</div>

                        <div>
                            <h3>SEO skills &amp; portfolio</h3>

                            <ul>
                            <li>
                                SEO is key to strong rankings and visibility — insist on
                                an SEO strategy.
                            </li>
                            <li>
                                Check previous projects to recognise work patterns and
                                success rates.
                            </li>
                            <li>
                                Ask for client testimonials to understand their
                                experience.
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="wp-hiring-step">
                        <div className="wp-hiring-number">4</div>

                        <div>
                            <h3>Security, reporting &amp; support</h3>

                            <ul>
                            <li>
                                Transparency and direct reporting build a comfortable
                                partnership.
                            </li>
                            <li>
                                WordPress is prone to threats — stringent security
                                measures are a must.
                            </li>
                            <li>
                                Awesome after-sales support and maintenance make a
                                company credible.
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="wp-tech-section">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        Our stack
                    </div>

                    <h2 className="wp-section-title">
                        Technologies &amp; plugins we deploy
                    </h2>
                    </div>

                    <div className="wp-tech-grid">
                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">{"</>"}</span>
                        Frontend
                        </div>

                        <div className="wp-tech-chips">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>jQuery</span>
                        <span>React</span>
                        </div>
                    </article>

                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">▤</span>
                        Backend
                        </div>

                        <div className="wp-tech-chips">
                        <span>PHP</span>
                        <span>WordPress</span>
                        </div>
                    </article>

                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">◉</span>
                        Database
                        </div>

                        <div className="wp-tech-chips">
                        <span>MySQL</span>
                        </div>
                    </article>

                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">⌘</span>
                        Version Control
                        </div>

                        <div className="wp-tech-chips">
                        <span>Git</span>
                        </div>
                    </article>

                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">&gt;_</span>
                        Programming Language
                        </div>

                        <div className="wp-tech-chips">
                        <span>PHP</span>
                        </div>
                    </article>

                    <article className="wp-tech-card">
                        <div className="wp-tech-heading">
                        <span className="wp-tech-icon">☁</span>
                        Cloud &amp; DevOps
                        </div>

                        <div className="wp-tech-chips">
                        <span>AWS</span>
                        <span>Google Cloud</span>
                        <span>Azure</span>
                        </div>
                    </article>
                    </div>

                    <div className="wp-marketing-block">
                    <div className="wp-section-eyebrow">
                        Marketing tools
                    </div>

                    <h3>
                        The industry&apos;s leading tools, for maximum accuracy
                    </h3>

                    <div className="wp-marketing-tools">
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

            <section className="wp-comparison-section">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        The difference
                    </div>

                    <h2 className="wp-section-title">
                        Theme Dekho vs other agencies
                    </h2>
                    </div>

                    <div className="wp-comparison-grid">
                    <article className="wp-comparison-card wp-comparison-us">
                        <h3>📌 Theme Dekho</h3>

                        <ul>
                        <li>
                            Clear milestones and realistic objectives, explained with
                            confidence.
                        </li>

                        <li>
                            We learn your business, market, competition, and goals, then
                            plan fully.
                        </li>

                        <li>
                            Dedicated focus with daily or weekly progress updates.
                        </li>

                        <li>
                            Complete transparency — even small issues are raised
                            immediately.
                        </li>

                        <li>
                            Focused on long-term SEO success with ethical, reliable
                            methods.
                        </li>

                        <li>
                            Results measured on ROI, conversions, and qualified leads.
                        </li>

                        <li>
                            Personalized strategies with unique insights and expert
                            guidance.
                        </li>
                        </ul>
                    </article>

                    <article className="wp-comparison-card wp-comparison-other">
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
                    </article>
                    </div>
                </div>
            </section>

            <section className="wp-faq-section">
                <div className="wp-section-wrap">
                    <div className="wp-section-head">
                    <div className="wp-section-eyebrow">
                        Questions
                    </div>

                    <h2 className="wp-section-title">
                        Frequently asked questions
                    </h2>
                    </div>

                    <div className="wp-faq-grid">
                    {wordpressFaqs.map((faq, index) => {
                        const isOpen = openFaq === index;

                        return (
                        <article
                            key={faq.question}
                            className={
                            isOpen
                                ? "wp-faq-item open"
                                : "wp-faq-item"
                            }
                        >
                            <button
                            type="button"
                            className="wp-faq-question"
                            onClick={() =>
                                setOpenFaq(isOpen ? null : index)
                            }
                            aria-expanded={isOpen}
                            >
                            <span>{faq.question}</span>

                            <span className="wp-faq-plus">
                                +
                            </span>
                            </button>

                            <div className="wp-faq-answer">
                            <div className="wp-faq-answer-inner">
                                {faq.answer}
                            </div>
                            </div>
                        </article>
                        );
                    })}
                    </div>
                </div>
            </section>

            <section className="wp-cta-section">
                <div className="wp-section-wrap">
                    <div className="wp-cta-card">
                    <div className="wp-cta-content">
                        <div>
                        <h2>Need a custom website or redesign?</h2>

                        <p>
                            Share your details and get a free quote within 30 minutes.
                        </p>

                        <div className="wp-cta-categories">
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