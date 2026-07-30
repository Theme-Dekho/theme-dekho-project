"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I create a website with Theme Dekho?",
    a: "Describe your business in plain language and our AI drafts a complete website — pages, copy, layout, and colour palette included. Pick your industry, choose the pages and features you want, add your business details, and AI builds it live in under a minute. You can then edit any text, image, or section afterwards.",
  },
  {
    q: "Do I need to know how to code to build a website?",
    a: "No coding or design experience is needed. Theme Dekho's AI builder handles the layout, content, and styling for you — you just describe your business and review the result.",
  },
  {
    q: "How much does it cost to create a website?",
    a: "Building and previewing your website with AI is free to try. You only pay when you're ready to download the code or connect a custom domain for your live site.",
  },
  {
    q: "Can I get a custom domain name for my website?",
    a: "Yes. Every site gets a free themedekho.com subdomain to start, and you can connect your own custom domain whenever you're ready to go live.",
  },
  {
    q: "Can I sell products or take bookings online?",
    a: "Depending on your industry, AI adds relevant features like online appointment booking, a price/service menu, or a product gallery — with more e-commerce tools like cart and checkout on the way.",
  },
  {
    q: "Does Theme Dekho offer AI-powered website building tools?",
    a: "Yes — AI is the core of the builder. It writes your homepage and page content, picks a layout and colour palette suited to your industry, and keeps everything mobile-responsive by default.",
  },
  {
    q: "Is my website mobile-friendly and SEO optimised?",
    a: "Every generated layout is responsive on phone, tablet, and desktop, with clean structure and AI-written meta content built to help you get found on Google.",
  },
  {
    q: "Does my website come with hosting and security?",
    a: "Yes. Your site is hosted on Theme Dekho's servers with a free SSL certificate included, so it's secure and live as soon as you publish.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="section-inner" style={{ maxWidth: 780 }}>
        <div className="section-eyebrow">FAQ</div>
        <h2 className="section-title">Questions people ask us</h2>
        <p className="section-sub">Everything you need to know before you start building.</p>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={"faq-item" + (open ? " open" : "")} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  {item.q}
                  <span className="faq-toggle">{open ? "−" : "+"}</span>
                </button>
                {open && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
