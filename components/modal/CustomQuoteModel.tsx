"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";

const websiteTypes = [
  "Business Website",
  "Healthcare Website",
  "Interior & Architecture Website",
  "E-Commerce Website",
  "Real Estate Website",
  "Travel Website",
  "Education Website",
  "Portfolio Website",
  "Other",
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function CustomQuoteModal() {
  const { customQuoteModal } = useSite();

  const [businessName, setBusinessName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!customQuoteModal.isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        customQuoteModal.close();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [customQuoteModal.isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!businessName.trim()) {
      setError("Please enter your business name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(whatsappNumber)) {
      setError("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    if (!websiteType) {
      setError("Please select the type of website.");
      return;
    }
    
    if (!API_BASE_URL) {
      setError(
        "NEXT_PUBLIC_API_BASE_URL is missing.",
      );
      return;
    }

    if (isSubmitting) {
      return;
    }

    
    try {
        setIsSubmitting(true);
        setError("");

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
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.detail ||
              data.message ||
              "Unable to submit quote request.",
          );
        }

        alert(
          "Free quote request submitted successfully.",
        );

        setBusinessName("");
        setWhatsappNumber("");
        setWebsiteType("");

        customQuoteModal.close();
      } catch (error: unknown) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to submit quote request.",
        );
      } finally {
        setIsSubmitting(false);
      }
  
  }

  function handleNumberChange(value: string) {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setWhatsappNumber(cleanedValue);
  }

  if (!customQuoteModal.isOpen) {
    return null;
  }

  return (
    <div
      className="quote-modal-overlay"
      role="presentation"
      onMouseDown={customQuoteModal.close}
    >
      <div
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="quote-modal-close"
          onClick={customQuoteModal.close}
          aria-label="Close quote form"
        >
          ×
        </button>

        <div className="quote-modal-label">
          <span aria-hidden="true">🛠️</span>
          CUSTOM WEB DEVELOPMENT
        </div>

        <h2 id="quote-modal-title">Build Your Dream Website</h2>

        <p className="quote-modal-description">
          Tell us your requirement — our expert team will contact you within 30
          minutes.
        </p>

        <form className="quote-modal-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="quote-business-name">
            Business name
          </label>

          <input
            id="quote-business-name"
            type="text"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            placeholder="Your Business Name *"
            autoComplete="organization"
          />

          <label className="sr-only" htmlFor="quote-whatsapp-number">
            WhatsApp number
          </label>

          <input
            id="quote-whatsapp-number"
            type="tel"
            inputMode="numeric"
            value={whatsappNumber}
            onChange={(event) => handleNumberChange(event.target.value)}
            placeholder="WhatsApp Number *"
            autoComplete="tel"
          />

          <label className="sr-only" htmlFor="quote-website-type">
            Type of website
          </label>

          <div className="quote-select-wrap">
            <select
              id="quote-website-type"
              value={websiteType}
              onChange={(event) => setWebsiteType(event.target.value)}
            >
              <option value="">Type of Website</option>

              {websiteTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="quote-modal-error" role="alert">
              {error}
            </p>
          )}

          <button
              type="submit"
              className="quote-submit-button"
              disabled={isSubmitting}
            >
              <span aria-hidden="true">🚀</span>

              {isSubmitting
                ? "Submitting..."
                : "Get Free Quote Now"}
            </button>
        </form>

        <p className="quote-modal-note">
          <span aria-hidden="true">🔒</span>
          100% Free · No Spam · Reply in 30 Min
        </p>
      </div>
    </div>
  );
}