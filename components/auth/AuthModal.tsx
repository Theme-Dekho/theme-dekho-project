"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "@/styles/AuthModal.css";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type AuthMode = "login" | "register";
type RegisterStep = "form" | "otp";

export type AuthResponse = {
  status?: string;
  message?: string;
  authenticated?: boolean;
  user?: {
    id?: number | string;
    name?: string | null;
    email?: string | null;
    phone?: string;
  };
};

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated?: (data: AuthResponse) => void;
};

type ApiError = {
  detail?: string | Array<{ msg?: string }>;
  error?: string;
  message?: string;
};

async function parseResponse<T>(
  response: Response,
  fallback: string,
): Promise<T> {
  const data = (await response.json()) as T & ApiError;

  if (!response.ok) {
    const detail = Array.isArray(data.detail)
      ? data.detail.map((item) => item.msg).filter(Boolean).join(", ")
      : data.detail;

    throw new Error(detail || data.error || data.message || fallback);
  }

  return data;
}

export default function AuthModal({
  isOpen,
  onClose,
  onAuthenticated,
}: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [registerStep, setRegisterStep] = useState<RegisterStep>("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRef = useRef<HTMLInputElement>(null);
  const sanitizedPhone = phone.replace(/\D/g, "").slice(0, 10);

  const reset = () => {
    setMode("login");
    setRegisterStep("form");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setShowPassword(false);
    setOtp("");
    setError("");
    setMessage("");
    setIsSubmitting(false);
  };

  const close = () => {
    if (isSubmitting) return;
    reset();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => phoneRef.current?.focus(), 50);

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting]);

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value.replace(/\D/g, "").slice(0, 10));
    setError("");
  };

  const validatePhone = () => {
    if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validatePhone() || !validatePassword()) return;

    if (!API_BASE_URL) {
      setError("NEXT_PUBLIC_API_BASE_URL is missing.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: sanitizedPhone,
          password,
        }),
      });

      const data = await parseResponse<AuthResponse>(
        response,
        "Unable to log in.",
      );

      onAuthenticated?.(data);
      close();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unable to log in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      setError("Enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    if (!validatePhone() || !validatePassword()) return;

    if (!API_BASE_URL) {
      setError("NEXT_PUBLIC_API_BASE_URL is missing.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE_URL}/api/auth/generate-otp`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: sanitizedPhone }),
        },
      );

      const data = await parseResponse<{ message?: string }>(
        response,
        "Unable to send OTP.",
      );

      setRegisterStep("otp");
      setOtp("");
      setMessage(data.message || "OTP sent successfully.");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unable to send OTP.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^\d{4,6}$/.test(otp)) {
      setError("Enter the complete OTP.");
      return;
    }

    if (!API_BASE_URL) {
      setError("NEXT_PUBLIC_API_BASE_URL is missing.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch(
        `${API_BASE_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: sanitizedPhone,
            otp,
            password,
          }),
        },
      );

      const data = await parseResponse<AuthResponse>(
        response,
        "Unable to complete registration.",
      );

      onAuthenticated?.(data);
      close();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to complete registration.",
      );
      setOtp("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (nextMode: AuthMode) => {
    if (isSubmitting) return;

    setMode(nextMode);
    setRegisterStep("form");
    setPassword("");
    setOtp("");
    setError("");
    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="auth-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        className="auth-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button
          type="button"
          className="auth-modal-close"
          onClick={close}
          disabled={isSubmitting}
          aria-label="Close authentication modal"
        >
          ×
        </button>

        <div className="auth-modal-tabs">
          <button
            type="button"
            className={mode === "login" ? "auth-modal-tab active" : "auth-modal-tab"}
            onClick={() => switchMode("login")}
            disabled={isSubmitting}
          >
            Login
          </button>

          <button
            type="button"
            className={
              mode === "register"
                ? "auth-modal-tab active"
                : "auth-modal-tab"
            }
            onClick={() => switchMode("register")}
            disabled={isSubmitting}
          >
            Register
          </button>
        </div>

        {mode === "login" && (
          <>
            {/* <h2 id="auth-modal-title">Login to your account</h2> */}
            {/* <p className="login-modal-description">
              Enter your phone number and password.
            </p> */}

            <form className="auth-modal-form" onSubmit={handleLogin}>
              <label htmlFor="login-phone">Phone number</label>

              <div className="auth-phone-field">
                <span>+91</span>
                <input
                  ref={phoneRef}
                  id="login-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                />
              </div>

              {/* <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
              /> */}
              <label htmlFor="login-password">
                  Password
                </label>

                <div className="auth-password-field">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                  />

                  {/* <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button> */}
                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                        <path d="M9.9 4.2A10.7 10.7 0 0112 4c5 0 8.5 4 9 8a9.7 9.7 0 01-2.1 4.4" />
                        <path d="M6.2 6.2C4.3 7.5 3.2 9.6 3 12c.5 4 4 8 9 8a10 10 0 004.1-.9" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

              {error && <p className="login-error-message">{error}</p>}

              <button
                type="submit"
                className="login-send-otp"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
          </>
        )}

        {mode === "register" && registerStep === "form" && (
          <>
            {/* <h2 id="auth-modal-title">Create your account</h2> */}
            {/* <p className="login-modal-description">
              Enter your details. We will verify your phone using OTP.
            </p> */}

            <form className="auth-modal-form" onSubmit={handleSendOtp}>
              <label htmlFor="register-name">Full name</label>
              <input
                id="register-name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setError("");
                }}
              />

              <label htmlFor="register-email">Email address</label>
              <input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
              />

              <label htmlFor="register-phone">Phone number</label>
              <div className="auth-phone-field">
                <span>+91</span>
                <input
                  ref={phoneRef}
                  id="register-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                />
              </div>

              {/* <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
              /> */}
              <label htmlFor="register-password">
                  Password
                </label>

                <div className="auth-password-field">
                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Minimum 8 characters"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                  />

                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                        <path d="M9.9 4.2A10.7 10.7 0 0112 4c5 0 8.5 4 9 8a9.7 9.7 0 01-2.1 4.4" />
                        <path d="M6.2 6.2C4.3 7.5 3.2 9.6 3 12c.5 4 4 8 9 8a10 10 0 004.1-.9" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

              {error && <p className="login-error-message">{error}</p>}
              {message && <p className="login-success-message">{message}</p>}

              <button
                type="submit"
                className="login-send-otp"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending OTP..." : "Register with OTP"}
              </button>
            </form>
          </>
        )}

        {mode === "register" && registerStep === "otp" && (
          <>
            <h2 id="auth-modal-title">Verify OTP</h2>
            <p className="login-modal-description">
              Enter the OTP sent to +91 {sanitizedPhone}.
            </p>

            <form className="auth-modal-form" onSubmit={handleVerifyOtp}>
              <label htmlFor="register-otp">OTP</label>
              <input
                id="register-otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="Enter OTP"
                value={otp}
                onChange={(event) => {
                  setOtp(
                    event.target.value.replace(/\D/g, "").slice(0, 6),
                  );
                  setError("");
                }}
                maxLength={6}
              />

              {error && <p className="login-error-message">{error}</p>}
              {message && <p className="login-success-message">{message}</p>}

              <div className="auth-modal-actions">
                <button
                  type="button"
                  className="auth-modal-secondary"
                  onClick={() => {
                    setRegisterStep("form");
                    setOtp("");
                    setError("");
                    setMessage("");
                  }}
                  disabled={isSubmitting}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="login-send-otp"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
