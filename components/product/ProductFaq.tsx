"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "Can I change the colours, images and text?",
    answer:
      "Yes. Complete customisation of colours, fonts, logo, images, project photos and all written content is included in the package price. You share your material and our team applies it — you do not need any technical knowledge.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Typically 7 to 10 working days from the date content is received. Delivery depends mainly on how quickly you share your project photos and business details. If you need it faster, tell our team — priority delivery can usually be arranged.",
  },
  {
    question:
      "Do I own the website and source code?",
    answer:
      "Yes. Once the project is delivered and payment is complete, the website, its source code and the domain are registered in your name. There is no lock-in, licence renewal or monthly platform fee to keep the website running.",
  },
  {
    question:
      "What if I need more than 30 pages?",
    answer:
      "The package covers up to 30 pages, which is enough for most studios including a full project portfolio. Additional pages can be added at a per-page cost — share your requirement and our team will quote it before you book.",
  },
];

export default function ProductFaq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="product-faq-section">
      <div className="product-section-inner">

        <div className="product-faq-heading">
          <h2>Frequently Asked Questions</h2>

          <p>
            Common questions about this website package,
            delivery and ownership
          </p>
        </div>

        {/* <div className="product-faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={
                  isOpen
                    ? "product-faq-item open"
                    : "product-faq-item"
                }
                key={faq.question}
              >
                <button
                  type="button"
                  className="product-faq-question"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index,
                    )
                  }
                >
                  <span>{faq.question}</span>

                  <span
                    className="product-faq-toggle"
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="product-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div> */}
        <div className="product-faq-grid">
          <div className="product-faq-column">
            {faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq, index) => {
                const actualIndex = index * 2;
                const isOpen = openIndex === actualIndex;

                return (
                  <article
                    className={
                      isOpen
                        ? "product-faq-item open"
                        : "product-faq-item"
                    }
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="product-faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? -1 : actualIndex
                        )
                      }
                    >
                      <span>{faq.question}</span>

                      <span
                        className="product-faq-toggle"
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="product-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
          </div>

          <div className="product-faq-column">
            {faqs
              .filter((_, index) => index % 2 === 1)
              .map((faq, index) => {
                const actualIndex = index * 2 + 1;
                const isOpen = openIndex === actualIndex;

                return (
                  <article
                    className={
                      isOpen
                        ? "product-faq-item open"
                        : "product-faq-item"
                    }
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="product-faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? -1 : actualIndex
                        )
                      }
                    >
                      <span>{faq.question}</span>

                      <span
                        className="product-faq-toggle"
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="product-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
          </div>
        </div>

      </div>
    </section>
  );
}