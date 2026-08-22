"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./contact.css";

export default function ContactPage() {

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <>
      <Header />

      <main className="contact-page">

        <section className="contact-hero">
            <div className="contact-hero-inner">

            <div className="contact-eyebrow">
                Get in touch
            </div>

            <h1>
                Let&apos;s talk about your project
            </h1>

            <p>
                Have a question, an idea, or a project in mind?
                Our team is here to help. Reach out and we&apos;ll
                get back to you within 30 minutes during business
                hours.
            </p>

            </div>
        </section>

        <section className="contact-quick-section">
        <div className="contact-quick-cards">

            <article className="contact-quick-card">
            <div className="contact-quick-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>
            </div>

            <div>
                <h3>Call us</h3>

                <a href="tel:+918447731920">
                844-773-1920
                </a>

                <p>
                Mon–Sat, 10am–7pm IST
                </p>
            </div>
            </article>

            <article className="contact-quick-card">
            <div className="contact-quick-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                />

                <path d="M22 7l-10 6L2 7" />
                </svg>
            </div>

            <div>
                <h3>Email us</h3>

                <a href="mailto:info@themedekho.com">
                info@themedekho.com
                </a>

                <p>
                We reply within a few hours
                </p>
            </div>
            </article>

            <article className="contact-quick-card">
            <div className="contact-quick-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />

                <circle
                    cx="12"
                    cy="10"
                    r="3"
                />
                </svg>
            </div>

            <div>
                <h3>Visit us</h3>

                <p>
                Metro Pillar No. 786, 2nd Floor,
                Above Aggarwal Sweets, Near Dwarka
                Mor Red Light, New Delhi 110059
                </p>
            </div>
            </article>

        </div>
        </section>

        <section className="contact-main-section">
        <div className="contact-main-grid">

            <div className="contact-form-card"
            id="contact-form"
            >

            <h2>
                Send us a message
            </h2>

            <p className="contact-form-subtitle">
                Fill in the form and our team will get back to you shortly.
            </p>

            <form>

                <div className="contact-form-row">
                <label htmlFor="contact-name">
                    Your name *
                </label>

                <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                />
                </div>

                <div className="contact-form-row">
                <label htmlFor="contact-email">
                    Your email *
                </label>

                <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />
                </div>

                <div className="contact-form-row">
                <label htmlFor="contact-subject">
                    Subject *
                </label>

                <input
                    id="contact-subject"
                    type="text"
                    placeholder="What is this about?"
                    required
                />
                </div>

                <div className="contact-form-row">
                <label htmlFor="contact-message">
                    Your message
                </label>

                <textarea
                    id="contact-message"
                    placeholder="Tell us a little about your project or question..."
                />
                </div>

                <div className="contact-captcha">
                <span>
                    5 × 4 =
                </span>

                <input
                    type="text"
                    placeholder="?"
                    required
                />
                </div>

                <button
                type="submit"
                className="contact-submit-button"
                >
                Submit message
                </button>

            </form>

            </div>

            <aside className="contact-aside">

            <div className="contact-help-card">

                <h3>
                Need help? Speak to us here!
                </h3>

                <p>
                Prefer a quick chat? Call or email us directly —
                a real person from our team will help you figure
                out the best solution for your business.
                </p>

                <div className="contact-hours">

                <div>
                    <span>Monday – Friday</span>
                    <span>10:00 – 19:00</span>
                </div>

                <div>
                    <span>Saturday</span>
                    <span>10:00 – 16:00</span>
                </div>

                <div>
                    <span>Sunday</span>
                    <span>Closed</span>
                </div>

                </div>

            </div>

            <div className="contact-why-card">

                <h3>
                Why reach out to us?
                </h3>

                <ul>

                <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span>
                    Free consultation &amp; project quote within
                    30 minutes
                    </span>
                </li>

                <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span>
                    10+ years of web development experience
                    </span>
                </li>

                <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span>
                    Transparent pricing, no hidden costs
                    </span>
                </li>

                <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                    </svg>

                    <span>
                    Dedicated support before and after launch
                    </span>
                </li>

                </ul>

            </div>

            </aside>

        </div>
        </section>
        
        <section className="contact-faq">
        <div className="contact-section-inner">

            <div className="contact-section-head">

            <div className="contact-eyebrow">
                Questions
            </div>

            <h2>
                Frequently asked questions
            </h2>

            <p>
                Quick answers to the things people usually ask
                before getting in touch.
            </p>

            </div>

            <div className="contact-faq-grid">

            {[
                {
                question: "How soon will I get a reply?",
                answer:
                    "During business hours (Mon–Sat, 10am–7pm IST) we typically reply within 30 minutes. Messages sent overnight or on Sundays are answered first thing the next working day.",
                },
                {
                question: "Do you offer a free consultation?",
                answer:
                    "Yes. The first consultation and project quote are completely free. Share your requirements and we'll advise on the best approach, timeline, and budget — no obligation.",
                },
                {
                question: "What information should I include?",
                answer:
                    "A short description of your project, the type of website or service you need, any reference sites you like, and a rough budget or timeline. The more you share, the faster we can give you an accurate quote.",
                },
                {
                question: "Which services do you provide?",
                answer:
                    "We build custom websites, WordPress and Shopify stores, ecommerce platforms, and website redesigns — plus SEO and digital marketing. If you're unsure what you need, just ask and we'll guide you.",
                },
                {
                question: "Do you work with clients outside Delhi?",
                answer:
                    "Absolutely. While our office is in New Delhi, we work with clients across India and globally. Everything can be handled remotely over call, email, and video meetings.",
                },
                {
                question: "Can I visit your office?",
                answer:
                    "Of course. You're welcome to visit us at Metro Pillar No. 786, 2nd Floor, Near Dwarka Mor, New Delhi. We'd recommend calling ahead so the right person is available to meet you.",
                },
            ].map((item, index) => {
                const isOpen = openFaq === index;

                return (
                <div
                    key={item.question}
                    className={`contact-faq-item ${
                    isOpen ? "open" : ""
                    }`}
                >

                    <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    >
                    <span>{item.question}</span>

                    <span className="contact-faq-plus">
                        +
                    </span>
                    </button>

                    <div className="contact-faq-answer">
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

        <section className="contact-final-cta">
        <div className="contact-section-inner">

            <div className="contact-cta-box">

            <div className="contact-cta-content">

                <div>
                <h2>
                    Need a custom website or redesign?
                </h2>

                <p>
                    Share your details and get a free quote within
                    30 minutes.
                </p>

                <div className="contact-cta-tags">
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
                    .getElementById("contact-form")
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