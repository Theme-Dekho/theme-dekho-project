"use client";

import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/navigation/MegaMenu";
import {
  customDevLinks,
  mobileOurWorkLinks,
  phoneNumber,
} from "@/constants/menu";
import { cn } from "@/lib/utils";
import { useSite } from "@/lib/site-context";
import { useAuth } from "@/lib/auth-context";
import { trackEvent } from "@/lib/analytics/trackEvent";
import AuthModal from "@/components/auth/AuthModal";
import AuthControls from "@/components/auth/AuthControls";
import WishlistDrawer from "@/components/account/WishlistDrawer";
import EnquiryDrawer from "@/components/account/EnquiryDrawer";
import logo from "@/public/images/logo.jpg";

type LoginStep = "phone" | "otp" | "success";

type ApiResponse = {
  success?: boolean;
  status?: string;
  authenticated?: boolean;
  message?: string;
  detail?: string;
  error?: string;
  retry_after?: number;
  user?: {
    id?: number;
    phone?: string;
    name?: string | null;
    email?: string | null;
  };
};

const OTP_LENGTH = 4;
const DEFAULT_RESEND_SECONDS = 30;

interface HeaderProps {
  showNavigation?: boolean;
  modalOnly?: boolean;
}

export default function Header({
  showNavigation = true,
  modalOnly = false,
}: HeaderProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileAccOpen, setMobileAccOpen] = useState(false);

  const [loginStep, setLoginStep] = useState<LoginStep>("phone");
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );

  const [loginError, setLoginError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(0);

  const otpInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const { customQuoteModal } = useSite();
  const {
  loginModalOpen,
  openLoginModal,
  closeLoginModal: closeGlobalLoginModal,
  setAuthenticatedUser,
} = useAuth();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const completeOtp = loginOtp.join("");
  const formattedPhone = `${loginPhone}`;

  const openMobileNav = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileAccOpen(false);
  };

  const resetLoginModal = () => {
    setLoginStep("phone");
    setLoginPhone("");
    setLoginOtp(Array(OTP_LENGTH).fill(""));
    setLoginError("");
    setLoginMessage("");
    setLoginLoading(false);
    setResendSeconds(0);
  };

  const closeLoginModal = () => {
  if (loginLoading) {
    return;
  }

  closeGlobalLoginModal();
  resetLoginModal();
};
 

  const getApiErrorMessage = (data: unknown): string => {
  if (!data || typeof data !== "object") {
    return "Request failed.";
  }

  const responseData = data as {
    detail?: unknown;
    message?: unknown;
    error?: unknown;
  };

  if (typeof responseData.detail === "string") {
    return responseData.detail;
  }

  if (Array.isArray(responseData.detail)) {
    return responseData.detail
      .map((item) => {
        if (
          item &&
          typeof item === "object" &&
          "msg" in item &&
          typeof item.msg === "string"
        ) {
          const location =
            "loc" in item && Array.isArray(item.loc)
              ? item.loc.join(".")
              : "";

          return location
            ? `${location}: ${item.msg}`
            : item.msg;
        }

        return JSON.stringify(item);
      })
      .join(", ");
  }

  if (typeof responseData.message === "string") {
    return responseData.message;
  }

  if (typeof responseData.error === "string") {
    return responseData.error;
  }

  return "Request failed.";
};

const readApiResponse = async (
  response: Response,
): Promise<ApiResponse> => {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    const responseText = await response.text();

    throw new Error(
      responseText ||
        `Backend returned an invalid response (${response.status}).`,
    );
  }

  const data = (await response.json()) as ApiResponse;

  if (!response.ok) {
    throw new Error(getApiErrorMessage(data));
  }

  return data;
};

  const validateName = () => {
  const trimmedName = loginName.trim();

  if (trimmedName.length < 2) {
    setLoginError("Enter your full name.");
    return false;
  }

  if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
    setLoginError("Enter a valid full name.");
    return false;
  }

  return true;
};

  const validateEmail = () => {
  const trimmedEmail = loginEmail.trim();

  if (!trimmedEmail) {
    setLoginError("Enter your email address.");
    return false;
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmedEmail)) {
    setLoginError("Enter a valid email address.");
    return false;
  }

  return true;
};

  const validatePhone = () => {
    if (!/^[6-9]\d{9}$/.test(loginPhone)) {
      setLoginError("Enter a valid 10-digit Indian mobile number.");
      return false;
    }

    return true;
  };

  const handleSendOtp = async () => {
    if (!validateName()) {
      return;
    }

    if (!validateEmail()) {
      return;
    }

    if (!validatePhone()) {
      return;
    }

    if (!API_BASE_URL) {
      setLoginError(
        "NEXT_PUBLIC_API_BASE_URL is missing from the .env.local file.",
      );
      return;
    }

    try {
      setLoginLoading(true);
      setLoginError("");
      setLoginMessage("");

      const response = await fetch(
        `${API_BASE_URL}/api/auth/generate-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            phone: formattedPhone,
          }),
        },
      );


      const data = await readApiResponse(response);

      setLoginOtp(Array(OTP_LENGTH).fill(""));
      setLoginStep("otp");
      setLoginMessage(
        data.message || "OTP sent successfully.",
      );
      setResendSeconds(
        typeof data.retry_after === "number"
          ? data.retry_after
          : DEFAULT_RESEND_SECONDS,
      );

      void trackEvent({
        eventName: "otp_requested",
        elementName: "login-generate-otp-button",
        metadata: {
          delivery_channel: "whatsapp",
          otp_length: OTP_LENGTH,
        },
      });

      window.setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 50);
    } catch (error: unknown) {
      setLoginError(
        error instanceof Error
          ? error.message
          : "Unable to send OTP. Please try again.",
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (completeOtp.length !== OTP_LENGTH) {
      setLoginError(`Enter the complete ${OTP_LENGTH}-digit OTP.`);
      return;
    }

    if (!API_BASE_URL) {
      setLoginError(
        "NEXT_PUBLIC_API_BASE_URL is missing from the .env.local file.",
      );
      return;
    }

    try {
      setLoginLoading(true);
      setLoginError("");
      setLoginMessage("");

      const response = await fetch(
        `${API_BASE_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
          name: loginName.trim(),
          email: loginEmail.trim().toLowerCase(),
          phone: formattedPhone,
          otp: completeOtp,
        }),
        },
      );

      const data = await readApiResponse(response);

      if (
        !data.user?.id ||
        !data.user.phone
      ) {
        throw new Error(
          "The backend did not return the authenticated user.",
        );
      }

      setAuthenticatedUser({
        id: data.user.id,
        phone: data.user.phone,
        name: data.user.name ?? null,
        email: data.user.email ?? null,
      });
      // setLoginModalOpen(false);
      closeGlobalLoginModal();
      
      setLoginStep("phone");
      setLoginOtp(Array(OTP_LENGTH).fill(""));
      setLoginError("");
      setLoginMessage("");
      setResendSeconds(0);
    } catch (error: unknown) {
      setLoginError(
        error instanceof Error
          ? error.message
          : "OTP verification failed. Please try again.",
      );

      setLoginOtp(Array(OTP_LENGTH).fill(""));

      window.setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 50);
    } finally {
      setLoginLoading(false);
    }
  };


  const handleResendOtp = async () => {
    if (resendSeconds > 0 || loginLoading) {
      return;
    }

    await handleSendOtp();
  };

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setLoginName(event.target.value);
    setLoginError("");
    setLoginMessage("");
  };

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setLoginEmail(
      event.target.value
        .trimStart()
        .toLowerCase(),
    );

    setLoginError("");
    setLoginMessage("");
  };

  const handlePhoneChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setLoginPhone(value);
    setLoginError("");
    setLoginMessage("");
  };

  const handleOtpChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value.replace(/\D/g, "");

    if (!value) {
      const updatedOtp = [...loginOtp];
      updatedOtp[index] = "";

      setLoginOtp(updatedOtp);
      setLoginError("");
      return;
    }

    const digits = value
      .slice(0, OTP_LENGTH - index)
      .split("");

    const updatedOtp = [...loginOtp];

    digits.forEach((digit, offset) => {
      updatedOtp[index + offset] = digit;
    });

    setLoginOtp(updatedOtp);
    setLoginError("");

    const nextIndex = Math.min(
      index + digits.length,
      OTP_LENGTH - 1,
    );

    otpInputRefs.current[nextIndex]?.focus();
  };

  const handleOtpKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      if (loginOtp[index]) {
        const updatedOtp = [...loginOtp];
        updatedOtp[index] = "";
        setLoginOtp(updatedOtp);
        return;
      }

      if (index > 0) {
        otpInputRefs.current[index - 1]?.focus();
      }
    }

    if (event.key === "ArrowLeft" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < OTP_LENGTH - 1
    ) {
      otpInputRefs.current[index + 1]?.focus();
    }

    if (event.key === "Enter") {
      void handleVerifyOtp();
    }
  };

  const handleOtpPaste = (
    event: ClipboardEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    const pastedOtp = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pastedOtp) {
      return;
    }

    const updatedOtp = Array.from(
      { length: OTP_LENGTH },
      (_, index) => pastedOtp[index] ?? "",
    );

    setLoginOtp(updatedOtp);
    setLoginError("");

    const focusIndex = Math.min(
      pastedOtp.length,
      OTP_LENGTH - 1,
    );

    otpInputRefs.current[focusIndex]?.focus();
  };

  useEffect(() => {
    document.body.classList.toggle(
      "mnav-open",
      mobileNavOpen,
    );

    return () => {
      document.body.classList.remove("mnav-open");
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    if (!loginModalOpen) {
      return;
    }

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [loginModalOpen]);

  useEffect(() => {
    if (resendSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setResendSeconds((current) =>
        Math.max(current - 1, 0),
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [resendSeconds]);

  useEffect(() => {
    if (!loginModalOpen) {
      return;
    }

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLoginModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [loginModalOpen, loginLoading]);

  return (
    <>
    {!modalOnly && (
      <>
      <header>
        <div className="header-inner">
          <button
            type="button"
            className="mnav-toggle"
            aria-label="Open menu"
            aria-expanded={mobileNavOpen}
            onClick={openMobileNav}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo-img-link">
            <Image
              src={logo}
              alt="Theme Dekho"
              className="logo-img"
              priority
            />
          </Link>

          {showNavigation && (
          <nav>
            {/* <div className="nav-item active"> */}
            <div className={cn("nav-item",
            pathname === "/" && "active",
            )}  
            >
              <Link href="/">Home</Link>
            </div>

            {/* <div className="nav-item"> */}
            <div className={cn("nav-item",
              (
                pathname.startsWith("/categories/") ||
                pathname.startsWith("/products/")
              ) && "active",
            )}
          >
              <Link href="#">
                Our Work <span className="arrow">▾</span>
              </Link>

              <MegaMenu />
            </div>

            {/* <div className="nav-item"> */}
            <div className={cn("nav-item",
              (pathname.startsWith("/custom-web-development") ||
              pathname.startsWith("/shopify-development") ||
              pathname.startsWith("/wordpress-development") ||
              pathname.startsWith("/ecommerce-development")
              ) &&
                "active",
            )}
          >
              <Link href="#">
                Custom web development{" "}
                <span className="arrow">▾</span>
              </Link>

              <div className="simple-drop">
                {customDevLinks.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                  >
                    <span className="li-dot" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={cn("nav-item",
            pathname === "/redesign-wordpress" && "active",
            )}  
            >
              <Link href="/redesign-wordpress">
                Redesign WordPress Website
              </Link>
            </div>

            <div className={cn("nav-item",
            pathname === "/contact" && "active",
            )}  
            >
              <Link href="/contact">Contact us</Link>
            </div>
          </nav>
          )}

          <div className="header-right">
            <div className="phone-tag">
              <div className="ph-icon">📞</div>
              {phoneNumber.display}
            </div>

            <AuthControls
              onLoginClick={() => {
                resetLoginModal();
                openLoginModal();
              }}
            />
          
          </div>
        </div>
      </header>

      <div
        className="mnav-scrim"
        onClick={closeMobileNav}
      />

      <aside
        className="mnav"
        aria-hidden={!mobileNavOpen}
      >
        <div className="mnav-head">
          <span className="mnav-title">Menu</span>

          <button
            type="button"
            className="mnav-close"
            aria-label="Close menu"
            onClick={closeMobileNav}
          >
            &times;
          </button>
        </div>

        <nav className="mnav-list">
          <Link
            href="/"
            className="mnav-link active"
            onClick={closeMobileNav}
          >
            Home
          </Link>
          
          <button
            type="button"
            className="mnav-acc"
            aria-expanded={mobileAccOpen}
            onClick={() =>
              setMobileAccOpen((current) => !current)
            }
          >
            Our Work <span className="mnav-chev">▾</span>
          </button>

          <div
            className={cn(
              "mnav-panel",
              mobileAccOpen && "open",
            )}
          >
            {mobileOurWorkLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={closeMobileNav}
              >
                {link.label}
              </Link>
            ))}
          </div>


          <AuthControls
            mobile
            onLoginClick={() => {
                  closeMobileNav();
                  resetLoginModal();
                  openLoginModal();
            }}
          />


          <Link href="#" className="mnav-link">
            Contact Us
          </Link>

          <Link href="#" className="mnav-link">
            Terms &amp; Conditions
          </Link>
        </nav>

        <div className="mnav-foot">
          <a
            className="mnav-call"
            href={phoneNumber.href}
          >
            📞 {phoneNumber.display}
          </a>

          <button
            type="button"
            className="mnav-cta"
            onClick={() => {
              closeMobileNav();
              customQuoteModal.open();
            }}
          >
            Get a Free Quote
          </button>
        </div>
      </aside>
      </>
    )}


      <WishlistDrawer />
      <EnquiryDrawer />
    
      {/* changes made */}
      <AuthModal
        isOpen={loginModalOpen}
        onClose={closeLoginModal}
        onAuthenticated={(data) => {
          if (
            !data.user?.id ||
            !data.user.phone
          ) {
            return;
          }

          setAuthenticatedUser({
            id: Number(data.user.id),
            phone: data.user.phone,
            name: data.user.name ?? null,
            email: data.user.email ?? null,
          });

          closeGlobalLoginModal();
        }}
      />
    </>
  );
}