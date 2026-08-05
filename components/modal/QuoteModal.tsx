"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";
import { productDetails } from "@/constants/product-details";
import { useAuth } from "@/lib/auth-context";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  // const { quoteModalOpen, quoteProductName, closeQuoteModal } = useSite();
  const {quoteModalOpen, quoteProductName, closeQuoteModal, removeSaved, savedItems, refreshEnquiries} = useSite();
  const currentProduct = Object.values(productDetails).find((product) => product.name === quoteProductName,);
  
  const addons = currentProduct?.addons ?? [];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [error, setError] = useState("");
  const { user, isLoggedIn } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedAddons, setSelectedAddons] = useState<
    string[]
  >([]);
  const [message, setMessage] = useState(""); 


  useEffect(() => {
    if (!quoteModalOpen) {
      return;
    }

    setCity("");
    setCaptchaAnswer("");
    setError("");
    setCaptcha(generateCaptcha());

    setStep(1);
    setSelectedAddons([]);
    setMessage("");

    if (isLoggedIn && user) {
      setName(user.name ?? "");
      setPhone(user.phone ?? "");
      setEmail(user.email ?? "");
    } else {
      setName("");
      setPhone("");
      setEmail("");
    }
  }, [quoteModalOpen, isLoggedIn, user]);

  if (!quoteModalOpen) return null;

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
    setError("");
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((current) =>
      current.includes(addonId)
        ? current.filter((id) => id !== addonId)
        : [...current, addonId],
    );
  };


  const handleSubmit = async () => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedCity = city.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length < 2) {
    setError("Enter your full name.");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    setError("Enter a valid 10-digit WhatsApp number.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    setError("Enter a valid email address.");
    return;
  }

  const answer = Number.parseInt(captchaAnswer, 10);

  if (Number.isNaN(answer) || answer !== captcha.answer) {
    setError("Wrong verification answer. Please try again.");
    refreshCaptcha();
    return;
  }

  if (!currentProduct) {
    setError("Product information is unavailable.");
    return;
  }

  if (!API_BASE_URL) {
    setError(
      "NEXT_PUBLIC_API_BASE_URL is missing from the environment file.",
    );
    return;
  }

  try {
    setError("");

    const response = await fetch(
      `${API_BASE_URL}/api/enquiries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          product_id: currentProduct.slug,
          product_slug: currentProduct.slug,
          product_name: currentProduct.name,
          customer_name: trimmedName,
          email: trimmedEmail,
          phone,
          city: trimmedCity || null,
          selected_addons: selectedAddons,
          message: trimmedMessage || null,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.detail ||
          data.message ||
          "Unable to submit enquiry.",
      );
    }

    alert(
      "Enquiry submitted successfully. Our team will contact you soon.",
    );

  
  if (isLoggedIn && currentProduct) {
    const matchingWishlistItem = savedItems.find(
      (item) => item.slug === currentProduct.slug,
    );

    if (matchingWishlistItem) {
      await removeSaved(
        matchingWishlistItem.productId,
      );
    }
  }

  if (isLoggedIn) {
    await refreshEnquiries();
  }

    closeQuoteModal();
  } catch (error: unknown) {
    setError(
      error instanceof Error
        ? error.message
        : "Unable to submit enquiry.",
    );
  }
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
          {step === 1 && (
          <>
            <div className="quote-step-header">
              <span>Step 1 of 2</span>
              <h3>Enhance Your Website</h3>
              <p>
                Select any optional features you want to include.
              </p>
            </div>

            <div className="quote-addon-list">
              {addons.map((addon) => {
                const selected = selectedAddons.includes(addon.id);

                return (
                  <article
                    key={addon.id}
                    className={
                      selected
                        ? "quote-addon-card selected"
                        : "quote-addon-card"
                    }
                  >
                    <div className="quote-addon-icon">
                      {addon.icon}
                    </div>

                    <div className="quote-addon-content">
                      <h4>{addon.name}</h4>
                      <p>{addon.description}</p>
                    </div>

                    <button
                      type="button"
                      className="quote-addon-toggle"
                      onClick={() => toggleAddon(addon.id)}
                    >
                      {selected ? "Remove" : "Add"}
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="quote-step-actions">
              <button
                type="button"
                className="quote-step-skip"
                onClick={() => setStep(2)}
              >
                Skip
              </button>

              <button
                type="button"
                className="quote-step-next"
                onClick={() => setStep(2)}
              >
                Proceed
              </button>
            </div>
          </>
        )}

       {step === 2 && (
          <>
            <div className="quote-step-header">
              <span>Step 2 of 2</span>
              <h3>Submit Your Enquiry</h3>
              <p>
                Enter your details and describe your website requirements.
              </p>
            </div>

            <div className="quote-grid">
              <div className="quote-field">
                <label htmlFor="quote-name">
                  Your Name *
                </label>

                <input
                  id="quote-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className="quote-field">
                <label htmlFor="quote-phone">
                  WhatsApp Number *
                </label>

                <input
                  id="quote-phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(event) => {
                    setPhone(
                      event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10),
                    );
                    setError("");
                  }}
                />
              </div>

              <div className="quote-field">
                <label htmlFor="quote-email">
                  Email Address *
                </label>

                <input
                  id="quote-email"
                  type="email"
                  placeholder="e.g. you@email.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className="quote-field">
                <label htmlFor="quote-city">
                  City *
                </label>

                <input
                  id="quote-city"
                  type="text"
                  placeholder="e.g. Delhi"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className="quote-field full">
                <label htmlFor="quote-message">
                  Project Requirements
                </label>

                <textarea
                  id="quote-message"
                  rows={4}
                  placeholder="Describe your website requirements"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className="quote-field full">
                <label htmlFor="quote-captcha">
                  Verification *
                </label>

                <div className="captcha-wrap">
                  <div className="captcha-box">
                    <span className="captcha-q">
                      {captcha.display}
                    </span>

                    <span className="captcha-eq">=</span>

                    <input
                      id="quote-captcha"
                      className="captcha-input"
                      type="number"
                      placeholder="Answer"
                      value={captchaAnswer}
                      onChange={(event) => {
                        setCaptchaAnswer(event.target.value);
                        setError("");
                      }}
                    />

                    <button
                      className="captcha-refresh"
                      type="button"
                      onClick={refreshCaptcha}
                    >
                      &#8635;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <p className="captcha-err">
                {error}
              </p>
            )}

            <div className="quote-step-actions">
              <button
                type="button"
                className="quote-step-skip"
                onClick={() => setStep(1)}
              >
                Back
              </button>

              <button
                type="button"
                className="quote-submit"
                onClick={handleSubmit}
              >
                Submit Enquiry
              </button>
            </div>

            <p className="quote-note">
              🔒 Your information is safe.{" "}
              <span>We never share your data.</span>
            </p>
          </>
        )}
        </div>
      </div>
    </div>
  );
}
