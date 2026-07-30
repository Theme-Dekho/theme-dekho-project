"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const ops = ["+", "-", "×"] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  const answer = op === "+" ? a + b : op === "-" ? Math.max(a, b) - Math.min(a, b) : a * b;
  const display = op === "-" ? `${Math.max(a, b)} ${op} ${Math.min(a, b)}` : `${a} ${op} ${b}`;
  return { display, answer };
}

export default function QuoteModal() {
  const { quoteModalOpen, quoteProductName, closeQuoteModal } = useSite();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [error, setError] = useState("");

  useEffect(() => {
    if (quoteModalOpen) {
      setName("");
      setPhone("");
      setCity("");
      setEmail("");
      setCaptchaAnswer("");
      setError("");
      setCaptcha(generateCaptcha());
    }
  }, [quoteModalOpen]);

  if (!quoteModalOpen) return null;

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
    setError("");
  };

  const handleSubmit = () => {
    const ans = parseInt(captchaAnswer, 10);
    if (isNaN(ans) || ans !== captcha.answer) {
      setError("❌ Wrong answer! Please try again.");
      refreshCaptcha();
      return;
    }
    setError("");
    alert("✅ Enquiry submitted successfully! Our team will contact you soon.");
    closeQuoteModal();
  };

  return (
    <div
      className="quote-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeQuoteModal();
      }}
    >
      <div className="quote-box">
        <div className="quote-header">
          <button className="quote-close" onClick={closeQuoteModal}>
            &times;
          </button>
          <div className="quote-header-tag">📋 Enquiry Form</div>
          <div className="quote-product-name">{quoteProductName || "Product Name"}</div>
          <p>Fill in your details — our team will get back to you shortly!</p>
        </div>

        <div className="quote-body">
          <div className="quote-grid">
            <div className="quote-field">
              <label>Your Name *</label>
              <input type="text" placeholder="e.g. Rahul Sharma" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="quote-field">
              <label>Phone Number *</label>
              <input type="tel" placeholder="e.g. 9876543210" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="quote-field">
              <label>City *</label>
              <input type="text" placeholder="e.g. Delhi, Mumbai" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="quote-field">
              <label>Email *</label>
              <input type="email" placeholder="e.g. you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="quote-field full">
              <label>Verification *</label>
              <div className="captcha-wrap">
                <div className="captcha-box">
                  <span className="captcha-q">{captcha.display}</span>
                  <span className="captcha-eq">=</span>
                  <input
                    className="captcha-input"
                    type="number"
                    placeholder="Answer"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                  />
                  <button className="captcha-refresh" type="button" onClick={refreshCaptcha}>
                    &#8635;
                  </button>
                </div>
              </div>
              <span className="captcha-err" style={{ display: error ? "block" : "none" }}>
                {error}
              </span>
            </div>
          </div>

          <button className="quote-submit" onClick={handleSubmit}>
            📩 Submit Enquiry
          </button>
          <p className="quote-note">
            🔒 Your info is safe. <span>We never share your data.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
