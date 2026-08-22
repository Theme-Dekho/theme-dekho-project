"use client";

import { SubmitEvent, useEffect, useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

type ServiceQuoteFormProps = {
  className?: string;
  errorClassName?: string;
  captchaClassName?: string;
  submitClassName?: string;
};

export default function ServiceQuoteForm({
  className = "custom-web-lead-form",
  errorClassName = "custom-web-form-error",
  captchaClassName = "custom-web-captcha",
  submitClassName = "custom-web-form-submit",
}: ServiceQuoteFormProps) {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] =
    useState("");
  const [websiteType, setWebsiteType] =
    useState("");

  const [captchaA, setCaptchaA] = useState(0);
  const [captchaB, setCaptchaB] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] =
    useState("");

  const [captchaError, setCaptchaError] =
    useState(false);

  const [formError, setFormError] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  useEffect(() => {
    setCaptchaA(
      Math.floor(Math.random() * 6) + 2,
    );

    setCaptchaB(
      Math.floor(Math.random() * 6) + 2,
    );
  }, []);

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setFormError("");
    setCaptchaError(false);

    if (!fullName.trim()) {
      setFormError(
        "Please enter your full name.",
      );
      return;
    }

    const normalizedPhone =
      contactNumber.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      setFormError(
        "Please enter a valid 10-digit mobile number.",
      );
      return;
    }

    if (!websiteType) {
      setFormError(
        "Please select the type of website.",
      );
      return;
    }

    if (
      Number(captchaAnswer) !==
      captchaA * captchaB
    ) {
      setCaptchaError(true);

      setFormError(
        "Please enter the correct CAPTCHA answer.",
      );

      return;
    }

    if (!API_BASE_URL) {
      setFormError(
        "API base URL is not configured.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/quote-requests`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            business_name:
              fullName.trim(),

            whatsapp_number:
              normalizedPhone,

            website_type:
              websiteType,

            source_url:
              window.location.pathname +
              window.location.search,
          }),
        },
      );

      if (!response.ok) {
        const errorData =
          await response
            .json()
            .catch(() => null);

        throw new Error(
          errorData?.detail ||
            "Unable to submit your request.",
        );
      }

      alert(
        "Your request has been submitted successfully.",
      );

      setFullName("");
      setContactNumber("");
      setWebsiteType("");
      setCaptchaAnswer("");
      setCaptchaError(false);
      setFormError("");

      setCaptchaA(
        Math.floor(Math.random() * 6) + 2,
      );

      setCaptchaB(
        Math.floor(Math.random() * 6) + 2,
      );
    } catch (error) {
      console.error(
        "Quote submission failed:",
        error,
      );

      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to submit your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={fullName}
        onChange={(event) =>
          setFullName(event.target.value)
        }
        placeholder="Enter your full name"
        required
      />

      <input
        type="tel"
        inputMode="numeric"
        value={contactNumber}
        onChange={(event) => {
            const value = event.target.value
            .replace(/\D/g, "")
            .slice(0, 10);

            setContactNumber(value);
        }}
        placeholder="WhatsApp Number *"
        minLength={10}
        maxLength={10}
        pattern="[6-9][0-9]{9}"
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
            Type of Website *
        </option>

        <option value="E-Commerce Website">
            E-Commerce Website
        </option>

        <option value="Interior & Architecture Website">
            Interior & Architecture Website
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

      <div className={captchaClassName}>
        <span>
          {captchaA > 0 &&
          captchaB > 0
            ? `${captchaA} × ${captchaB} =`
            : "Loading..."}
        </span>

       <input
        type="number"
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
        <p
          className={errorClassName}
        >
          {formError}
        </p>
      )}

      <button
        type="submit"
        className={submitClassName}
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending..."
          : "Send message to our team"}
      </button>
    </form>
  );
}