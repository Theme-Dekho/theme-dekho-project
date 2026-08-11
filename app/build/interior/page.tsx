"use client";

import Image from "next/image";
import "./interior-builder.css";
import logo from "@/public/images/logo.jpg";

import { useEffect, useRef, useState } from "react";

import AuthControls from "@/components/auth/AuthControls";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/lib/auth-context";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function InteriorBuilderPage() {
  const {isLoggedIn, sessionChecked, setAuthenticatedUser} = useAuth();
  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const [businessLogo, setBusinessLogo] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardError, setWizardError] = useState("");

  const [subIndustry, setSubIndustry] = useState("");

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [customPage, setCustomPage] = useState("");
  const [customFeature, setCustomFeature] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const [isBuilding, setIsBuilding] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);
  const [visitorId, setVisitorId] = useState("");

  const [pages, setPages] = useState([
    "Home",
    "About Us",
    "Portfolio / Gallery",
    "Services",
    "Our Process",
    "Contact Us",
  ]);

  const [features, setFeatures] = useState([
    "Contact Form",
    "Google Maps Location",
    "WhatsApp Chat Button",
    "Portfolio Gallery Slider",
    "Before / After Slider",
    "Free Quote Calculator",
  ]);

  const [attribution, setAttribution] = useState({
    landingCategory: "interior",
    landingPage: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
  });

  const handleNextStep = () => {
    setWizardError("");

    if (currentStep === 1) {
        setCurrentStep(2);
        return;
    }

    if (currentStep === 2) {
        if (!subIndustry) {
        setWizardError("Please select a specialisation.");
        return;
        }

        setCurrentStep(3);
        return;
    }

    if (currentStep === 3) {
        if (pages.length === 0) {
        setWizardError("Please select at least one page.");
        return;
        }

        setCurrentStep(4);
        return;
    }

    // if (currentStep === 4) {
    //     if (!businessName.trim()) {
    //     setWizardError("Please enter your business name.");
    //     return;
    //     }

    //     const normalizedPhone = businessPhone.replace(/\D/g, "");

    //     if (normalizedPhone.length !== 10) {
    //     setWizardError("Please enter a valid 10-digit phone number.");
    //     return;
    //     }

    //     // Website generation will be connected in the next step.
    //     startBuild();
    //     return;
    // }
    if (currentStep === 4) {
      if (!businessName.trim()) {
        setWizardError("Please enter your business name.");
        return;
      }

      const normalizedPhone = businessPhone.replace(/\D/g, "");

      if (normalizedPhone.length !== 10) {
        setWizardError("Please enter a valid 10-digit phone number.");
        return;
      }

      if (!sessionChecked) {
        setWizardError("Checking your login session. Please try again.");
        return;
      }

      if (!isLoggedIn) {
        setLoginModalOpen(true);
        return;
      }

      startBuild();
      return;
    }
    };

    
    const getStepClassName = (step: number) => {
    if (currentStep === step) {
        return "wizard-step-dot active";
    }

    if (currentStep > step) {
        return "wizard-step-dot done";
    }

    return "wizard-step-dot";
    };


    // added New Func
    const startBuild = () => {
      setWizardError("");
      setIsBuilding(true);
      setBuildProgress(0);

      let progress = 0;

      const interval = window.setInterval(() => {
        progress += 5;

        if (progress >= 100) {
          progress = 100;
          window.clearInterval(interval);
        }

        setBuildProgress(progress);
      }, 150);
    };

    // Users Attribution
  //   useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);

  //   const attributionData = {
  //     landing_category: "interior",
  //     landing_page: window.location.pathname,
  //     utm_source: params.get("utm_source") ?? "",
  //     utm_medium: params.get("utm_medium") ?? "",
  //     utm_campaign: params.get("utm_campaign") ?? "",
  //     utm_content: params.get("utm_content") ?? "",
  //   };

  //   setAttribution({
  //     landingCategory: attributionData.landing_category,
  //     landingPage: attributionData.landing_page,
  //     utmSource: attributionData.utm_source,
  //     utmMedium: attributionData.utm_medium,
  //     utmCampaign: attributionData.utm_campaign,
  //     utmContent: attributionData.utm_content,
  //   });

  //   if (!API_BASE_URL) {
  //     console.error(
  //       "NEXT_PUBLIC_API_BASE_URL is not configured."
  //     );
  //     return;
  //   }

  //   const saveAttribution = async () => {
  //     try {
  //       const response = await fetch(
  //         `${API_BASE_URL}/api/attribution`,
  //         {
  //           method: "POST",
  //           credentials: "include",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(attributionData),
  //         }
  //       );

  //       const data = await response.json();

  //       console.log(
  //         "Attribution save response:",
  //         data
  //       );
  //     } catch (error) {
  //       console.error(
  //         "Failed to save attribution:",
  //         error
  //       );
  //     }
  //   };

  //   void saveAttribution();
  // }, []);
  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

  let storedVisitorId = localStorage.getItem(
  "theme_dekho_visitor_id"
);

if (!storedVisitorId) {
  storedVisitorId = crypto.randomUUID();

  localStorage.setItem(
    "theme_dekho_visitor_id",
    storedVisitorId
  );
}

setVisitorId(storedVisitorId);

    const attributionData = {
      session_id: storedVisitorId,
      landing_category: "interior",
      landing_page: window.location.pathname,
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
    };

    setAttribution({
      landingCategory: attributionData.landing_category,
      landingPage: attributionData.landing_page,
      utmSource: attributionData.utm_source,
      utmMedium: attributionData.utm_medium,
      utmCampaign: attributionData.utm_campaign,
      utmContent: attributionData.utm_content,
    });

    if (!API_BASE_URL) {
      console.error(
        "NEXT_PUBLIC_API_BASE_URL is not configured."
      );
      return;
    }

    const saveAttribution = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/attribution`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(attributionData),
          }
        );

        const data = await response.json();

        console.log(
          "Attribution save response:",
          data
        );
      } catch (error) {
        console.error(
          "Failed to save attribution:",
          error
        );
      }
    };

    void saveAttribution();
  }, []);



  return (
    <>
      {/* =========================
          TOP BAR
      ========================= */}
      <div className="topbar">
        <div className="inner">
          <span>
            🇮🇳 India&apos;s No.1 AI-Powered Custom Website Builder
          </span>

          <div className="topbar-contact">
            <a href="tel:+919876543210">
              📞 +91 98765 43210
            </a>

            <span className="topbar-sep">|</span>

            <a href="mailto:info@themedekho.com">
              ✉️ info@themedekho.com
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          HEADER
      ========================= */}
      <header>
        <div className="header-inner">
          <div className="logo-text">
            <Image
              src={logo}
              alt="Theme Dekho"
              className="logo-img"
              priority
            />
          </div>

          <div className="header-cta">
            <AuthControls
              onLoginClick={() => {
                setLoginModalOpen(true);
              }}
            />
          </div>
        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section className="ai-hero">
        <div className="ai-hero-inner">
        <div className="ai-eyebrow">
            <span className="ai-pulse-dot" />
            For Interior Designers — 100% Free to Try
            </div>

            <h1>
            Hello Interior 👋
            <br />

            <span className="grad">
                Get Your Website Live in Just 60 Sec
            </span>
            </h1>

            <p className="sub">
            No coding, no designers, no waiting. Tell our AI about your
            interior studio — it drafts your pages, picks a premium layout,
            and writes your content instantly.
            </p>  

          {/* =========================
              WIZARD
          ========================= */}
          {!isBuilding && (
            <div className="ai-wizard">

            {/* =========================
                PROGRESS
            ========================= */}
            <div className="wizard-progress">

              <div
                className={getStepClassName(1)}
              >
                <span className="num">
                {currentStep > 1 ? "✓" : "1"}
                </span>

                <span className="label">
                  Industry
                </span>
              </div>

              <div className="wizard-connector" />

              <div 
              className={getStepClassName(2)}
              >
                <span className="num">
                {currentStep > 2 ? "✓" : "2"}
                </span>

                <span className="label">
                  Specialisation
                </span>
              </div>

              <div className="wizard-connector" />

              <div 
              className={getStepClassName(3)}
              >
                <span className="num">
                {currentStep > 3 ? "✓" : "3"}
                </span>

                <span className="label">
                  Pages & Features
                </span>
              </div>

              <div className="wizard-connector" />

              <div 
              className={getStepClassName(4)}
              >
                <span className="num">
                  4
                </span>

                <span className="label">
                  Business Info
                </span>
              </div>
            </div>

            {/* =========================
                STEP 1
            ========================= */}
            {currentStep === 1 && (
              <div className="wizard-panel active">
                <div className="wiz-card">
                  <span className="wiz-label">
                    Which industry is your business in?
                  </span>

                  <p className="wiz-sub">
                    This helps our AI pick the right layout, pages, and
                    features for you.
                  </p>

                  <div className="select-wrap">
                    <select
                      className="wiz-select"
                      defaultValue="interior"
                    >
                      <option value="interior">
                        Interior & Architecture
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* =========================
                STEP 2
            ========================= */}
            {currentStep === 2 && (
              <div className="wizard-panel active">
                <div className="wiz-card">
                  <span className="wiz-label">
                    Choose your specialisation
                  </span>

                  <p className="wiz-sub">
                    Pick the option closest to your business.
                  </p>

                  <div className="select-wrap">
                    <select
                      className="wiz-select"
                      value={subIndustry}
                      onChange={(event) => {
                        setSubIndustry(event.target.value);
                      }}
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select sub-industry
                      </option>

                      <option value="residential-interior-design">
                        Residential Interior Design
                      </option>

                      <option value="commercial-interior-design">
                        Commercial Interior Design
                      </option>

                      <option value="architecture-firm">
                        Architecture Firm
                      </option>

                      <option value="modular-kitchen-furniture">
                        Modular Kitchen & Furniture
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* =========================
                STEP 3
            ========================= */}
            {currentStep === 3 && (
              <div className="wizard-panel active">
                <div className="wiz-card">

                  {/* =========================
                      PAGES
                  ========================= */}
                  <div className="wiz-block">
                    <span className="wiz-label">
                      Pages for your website
                    </span>

                    <p className="wiz-sub">
                      Default pages are pre-selected based on your industry.
                    </p>

                    <div className="chip-list">
                      {pages.map((page) => (
                        <label
                            key={page}
                            className="chip-check checked"
                            >
                            <input
                                type="checkbox"
                                checked
                                onChange={() => {
                                setPages((current) =>
                                    current.filter((item) => item !== page)
                                );
                                }}
                            />

                            <span className="tick">
                                ✕
                            </span>

                            {page}
                            </label>
                      ))}
                    </div>

                    {/* ADD CUSTOM PAGE */}
                    <div className="add-chip-form">
                      <input
                        type="text"
                        value={customPage}
                        placeholder="Add a custom page e.g. Careers"
                        onChange={(event) => {
                          setCustomPage(event.target.value);
                        }}
                      />

                      <button
                        type="button"
                        className="btn-add-chip"
                        onClick={() => {
                          const value = customPage.trim();

                          if (!value) {
                            return;
                          }

                          setPages((current) => {
                            if (current.includes(value)) {
                              return current;
                            }

                            return [
                              ...current,
                              value,
                            ];
                          });

                          setCustomPage("");
                        }}
                      >
                        + Add Page
                      </button>
                    </div>
                  </div>

                  {/* =========================
                      FEATURES
                  ========================= */}
                  <div className="wiz-block">
                    <span className="wiz-label">
                      Website features
                    </span>

                    <p className="wiz-sub">
                      Recommended features for your Interior website.
                    </p>

                    <div className="chip-list">
                      {features.map((feature) => (
                        <label
                            key={feature}
                            className="chip-check checked"
                            >
                            <input
                                type="checkbox"
                                checked
                                onChange={() => {
                                setFeatures((current) =>
                                    current.filter((item) => item !== feature)
                                );
                                }}
                            />

                            <span className="tick">
                                ✕
                            </span>

                            {feature}
                            </label>
                      ))}
                    </div>

                    {/* ADD CUSTOM FEATURE */}
                    <div className="add-chip-form">
                      <input
                        type="text"
                        value={customFeature}
                        placeholder="Add a custom / add-on feature"
                        onChange={(event) => {
                          setCustomFeature(event.target.value);
                        }}
                      />

                      <button
                        type="button"
                        className="btn-add-chip"
                        onClick={() => {
                          const value =
                            customFeature.trim();

                          if (!value) {
                            return;
                          }

                          setFeatures((current) => {
                            if (current.includes(value)) {
                              return current;
                            }

                            return [
                              ...current,
                              value,
                            ];
                          });

                          setCustomFeature("");
                        }}
                      >
                        + Add Feature
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================
                STEP 4
                WILL ADD NEXT
            ========================= */}
            {currentStep === 4 && (
                <div className="wizard-panel active">
                    <div className="wiz-card">
                    <span className="wiz-label">
                        Tell us about your business
                    </span>

                    <p className="wiz-sub">
                        Our AI uses this to personalise your content, logo, and contact details.
                    </p>

                    <div className="wiz-field full logo-field">
                        <label>Business Logo</label>

                        <div className="logo-upload">
                            <div className="logo-preview">
                            {businessLogo ? (
                                <img
                                src={businessLogo}
                                alt="Business logo preview"
                                />
                            ) : (
                                <span>🖼️</span>
                            )}
                            </div>

                            <button
                            type="button"
                            className="btn-upload-logo"
                            onClick={() => {
                                logoInputRef.current?.click();
                            }}
                            >
                            Upload Logo
                            </button>

                            <input
                            ref={logoInputRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(event) => {
                                const file = event.target.files?.[0];

                                if (!file) {
                                return;
                                }

                                const reader = new FileReader();

                                reader.onload = () => {
                                if (typeof reader.result === "string") {
                                    setBusinessLogo(reader.result);
                                }
                                };

                                reader.readAsDataURL(file);
                            }}
                            />
                        </div>
                        </div>

                    <div className="wiz-grid">

                        <div className="wiz-field full">
                        <label>Business Name *</label>

                        <input
                            type="text"
                            value={businessName}
                            placeholder="e.g. Sunrise Interiors"
                            onChange={(event) => {
                            setBusinessName(event.target.value);
                            }}
                        />
                        </div>

                        <div className="wiz-field">
                        <label>Phone Number *</label>

                        <input
                            type="tel"
                            value={businessPhone}
                            placeholder="10-digit mobile number"
                            onChange={(event) => {
                            setBusinessPhone(event.target.value);
                            }}
                        />
                        </div>

                        <div className="wiz-field">
                        <label>Email Address</label>

                        <input
                            type="email"
                            value={businessEmail}
                            placeholder="you@business.com"
                            onChange={(event) => {
                            setBusinessEmail(event.target.value);
                            }}
                        />
                        </div>

                        <div className="wiz-field full">
                        <label>Business Address</label>

                        <input
                            type="text"
                            value={businessAddress}
                            placeholder="City, State"
                            onChange={(event) => {
                            setBusinessAddress(event.target.value);
                            }}
                        />
                        </div>

                        <div className="wiz-field full">
                        <div className="describe-label-row">
                            <label>
                            Describe Your Business
                            </label>

                            <span className="describe-ai-badge">
                            ✨ AI uses this most
                            </span>
                        </div>

                        <div className="describe-box">
                            <textarea
                            value={businessDescription}
                            placeholder="Describe your business — services you offer, tone, colours you like, and anything else the AI should know..."
                            onChange={(event) => {
                                setBusinessDescription(event.target.value);
                            }}
                            />
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                )}

            {/* =========================
                NAVIGATION
            ========================= */}
            {wizardError && (
                <p className="wiz-nav-error">
                    {wizardError}
                </p>
                )}

            <div className="wiz-nav">
            <button
                type="button"
                className="btn btn-wiz-back"
                disabled={currentStep === 1}
                onClick={() => {
                setWizardError("");

                setCurrentStep((step) =>
                    Math.max(1, step - 1)
                );
                }}
            >
                ← Back
            </button>

            <button
                type="button"
                className="btn btn-wiz-next"
                onClick={handleNextStep}
            >
                {currentStep === 4
                ? "✨ Free Website Build with AI"
                : "Next →"}
            </button>
            </div>
          </div>
          )}
        </div>

        {isBuilding && (
        <div className="build-stage active">
          <h3>
            ✨ Building your website with AI...
          </h3>

          <p className="build-sub">
            We&apos;re creating your pages, content, layout, and features.
          </p>

          <div className="build-progress-bar">
            <div
              className="build-progress-fill"
              style={{
                width: `${buildProgress}%`,
              }}
            />
          </div>

          <div className="build-progress-text">
            {buildProgress}%
          </div>

          <div className="float-zone">
            <div className="float-item float-item-1">
              📄 Creating pages
            </div>

            <div className="float-item float-item-2">
              ✍️ Writing content
            </div>

            <div className="float-item float-item-3">
              🎨 Choosing design
            </div>

            <div className="float-item float-item-4">
              📱 Making it responsive
            </div>

            <div className="float-item float-item-5">
              ⚙️ Adding features
            </div>
          </div>
        </div>
      )}

      </section>

      <section className="section">
        <div className="section-inner">

            <div
            className="section-eyebrow"
            style={{ color: "var(--blue)" }}
            >
            How It Works
            </div>

            <h2 className="section-title">
            From idea to live site, in four steps
            </h2>

            <p className="section-sub">
            Our AI reads your description and does the heavy lifting —
            you just review and publish.
            </p>

            <div className="steps-wrap">

            <div className="step-card in-view">
                <div className="step-num">
                01
                </div>

                <h3>
                Select industry
                </h3>

                <p>
                Pick your industry and specialisation — that&apos;s all
                the AI needs to get started.
                </p>

                <span className="step-example">
                e.g. Interior → Residential, Commercial
                </span>
            </div>

            <div className="step-card in-view">
                <div className="step-num">
                02
                </div>

                <h3>
                Select pages & features
                </h3>

                <p>
                We suggest the right pages and features for your industry —
                untick anything, or add your own.
                </p>

                <span className="step-example">
                You can also add custom pages
                </span>
            </div>

            <div className="step-card in-view">
                <div className="step-num">
                03
                </div>

                <h3>
                Add business info
                </h3>

                <p>
                Name, contact details, and describe exactly what you want
                built — the AI personalises everything around it.
                </p>

                <span className="step-example">
                Tell the AI anything else it should know
                </span>
            </div>

            <div className="step-card in-view">
                <div className="step-num">
                04
                </div>

                <h3>
                Verify & AI builds — free
                </h3>

                <p>
                AI generates your pages live, then a quick phone verification
                unlocks your finished website.
                </p>

                <span className="step-example">
                100% free, no card needed
                </span>
            </div>

            </div>
        </div>
        </section>

        <section className="section demo-section">
            <div className="section-inner">

                <div className="section-eyebrow">
                Live Preview
                </div>

                <h2 className="section-title">
                Watch your website take shape
                </h2>

                <p className="section-sub">
                Every generated site is fully editable and mobile-responsive
                from the first draft.
                </p>

                <div className="demo-shell">
                <div className="demo-topbar">
                    <span />
                    <span />
                    <span />

                    <div className="url">
                    yourbusiness.themedekho.com
                    </div>
                </div>

                <div className="demo-body">
                    <div className="demo-badge">
                    ⚡ Generated in 47 seconds
                    </div>

                    <h2>
                    &quot;Modern interior design studio in Jaipur&quot;
                    </h2>

                    <p>
                    AI created a homepage, portfolio gallery, and contact page —
                    complete with copy, layout, and a matching colour palette.
                    </p>

                    <div className="demo-blocks">
                    <div />
                    <div />
                    <div />
                    <div />
                    </div>
                </div>
                </div>

            </div>
            </section>

        <section className="section">
            <div className="section-inner">
                <div className="section-eyebrow">
                Why Use AI Builder
                </div>

                <h2 className="section-title">
                Everything you&apos;d expect, none of the wait
                </h2>

                <div className="feat-grid">

                <div className="feat-card">
                    <div className="feat-icon">
                    ⚡
                    </div>

                    <h3>
                    Instant Draft
                    </h3>

                    <p>
                    A full multi-page website generated in under a minute —
                    no blank canvas.
                    </p>
                </div>

                <div className="feat-card">
                    <div className="feat-icon">
                    📱
                    </div>

                    <h3>
                    Mobile Ready
                    </h3>

                    <p>
                    Every generated layout is responsive by default,
                    on phone, tablet, or desktop.
                    </p>
                </div>

                <div className="feat-card">
                    <div className="feat-icon">
                    🔍
                    </div>

                    <h3>
                    SEO Friendly
                    </h3>

                    <p>
                    Clean structure and AI-written meta content,
                    built to help you get found.
                    </p>
                </div>

                <div className="feat-card">
                    <div className="feat-icon">
                    🎨
                    </div>

                    <h3>
                    Fully Editable
                    </h3>

                    <p>
                    Change any text, image, or section afterwards
                    in the drag-and-drop editor.
                    </p>
                </div>

                </div>
            </div>
            </section>

        <section
            className="section"
            style={{ paddingTop: 0 }}
            >
            <div className="cta-banner">
                <h2>
                Your website is one description away
                </h2>

                <p>
                Try the AI builder free — no credit card,
                no design skills needed.
                </p>

                <button
                type="button"
                className="btn btn-generate"
                style={{
                    fontSize: "15px",
                    padding: "14px 30px",
                }}
                onClick={() => {
                    window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    });
                }}
                >
                ✨ Start Building Free
                </button>
            </div>
            </section>

        <footer>
            <p>
                © 2026 Theme Dekho. All rights reserved.
            </p>
            </footer>            

      {/* =========================
          AUTH MODAL
      ========================= */}
      {/* <AuthModal
        isOpen={loginModalOpen}
        onClose={() => {
          setLoginModalOpen(false);
        }}
      /> */}
      <AuthModal
        isOpen={loginModalOpen}
        onClose={() => {
          setLoginModalOpen(false);
        }}
        // onAuthenticated={(data) => {
        //   if (
        //     data.authenticated === true &&
        //     data.user &&
        //     data.user.id &&
        //     data.user.phone
        //   ) {
        //     setAuthenticatedUser({
        //       id: Number(data.user.id),
        //       phone: data.user.phone,
        //       name: data.user.name ?? null,
        //       email: data.user.email ?? null,
        //     });
        //   }

        //   setLoginModalOpen(false);
        // }}
        onAuthenticated={(data) => {
        if (
          data.authenticated === true &&
          data.user &&
          data.user.id &&
          data.user.phone
        ) {
          setAuthenticatedUser({
            id: Number(data.user.id),
            phone: data.user.phone,
            name: data.user.name ?? null,
            email: data.user.email ?? null,
          });

          if (API_BASE_URL && visitorId) {
            void fetch(
              `${API_BASE_URL}/api/attribution`,
              {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  session_id: visitorId,
                  landing_category:
                    attribution.landingCategory,
                  landing_page:
                    attribution.landingPage,
                  utm_source:
                    attribution.utmSource,
                  utm_medium:
                    attribution.utmMedium,
                  utm_campaign:
                    attribution.utmCampaign,
                  utm_content:
                    attribution.utmContent,
                }),
              }
            ).catch((error) => {
              console.error(
                "Failed to bind attribution:",
                error
              );
            });
          }
        }

        setLoginModalOpen(false);
      }}
      />
    </>
  );
}