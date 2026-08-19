"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { createPortal } from "react-dom";

interface PreviewStageProps {
  previewStageRef: RefObject<HTMLDivElement | null>;
  previewUrl: string;
  previewHeadline: string;
  previewDesc: string;
  generatedWebsite: any | null;
}

export default function PreviewStage({
  previewStageRef,
  previewUrl,
  previewHeadline,
  previewDesc,
  generatedWebsite,
}: PreviewStageProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  
  useEffect(() => {
      if (!previewOpen) {
        return;
      }

      const previousOverflow =
        document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow =
          previousOverflow;
      };
    }, [previewOpen]);

  const website = generatedWebsite?.generated_content;

  return (
    <>
      <div
        className="preview-stage active"
        ref={previewStageRef}
      >
        <div className="preview-frame-wrap">
          <div
            className="demo-shell"
            style={{
              margin: 0,
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            <div className="demo-topbar">
              <span />
              <span />
              <span />

              <div className="url">
                {previewUrl}
              </div>
            </div>

            <div className="demo-body">
              <div className="demo-badge">
                ⚡ Generated just now
              </div>

              <h2>
                {previewHeadline}
              </h2>

              <p>
                {previewDesc}
              </p>

              <button
                type="button"
                className="btn btn-wiz-next"
                onClick={() => {
                  setPreviewOpen(true);
                }}
                disabled={!website}
              >
                👁 Preview Website
              </button>
            </div>
          </div>
        </div>
      </div>

      {previewOpen && website && createPortal(
        <>
        <div
          style={{
          position: "fixed",
          inset: 0,
          // zIndex: 9999,
          zIndex: 2147483000,
          background: "rgba(0, 0, 0, 0.58)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          overflow: "auto",
          padding: "24px",
        }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              background: "#ffffff",
              // minHeight: "calc(100vh - 120px)",
              minHeight: "100vh",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
            }}
          >

            {(() => {
              const theme =
                website.theme ?? {};

              const generatedPages =
                website.pages ?? [];

              return (
                <main
                  style={{
                    minHeight: "100vh",
                    background:
                      theme.secondary_color ||
                      "#ffffff",
                    color:
                      theme.primary_color ||
                      "#111111",
                    fontFamily:
                      theme.font_style ||
                      "Arial, sans-serif",
                  }}
                >
                  <header
                    style={{
                      padding: "20px 6%",
                      background:
                        theme.primary_color ||
                        "#111827",
                      color: "#ffffff",
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                      gap: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          fontSize: "24px",
                        }}
                      >
                        {
                          website.business_name
                        }
                      </strong>

                      {website.tagline && (
                        <div
                          style={{
                            marginTop: "4px",
                            fontSize: "13px",
                            opacity: 0.85,
                          }}
                        >
                          {
                            website.tagline
                          }
                        </div>
                      )}
                    </div>

                    <nav
                      style={{
                        display: "flex",
                        gap: "18px",
                        flexWrap: "wrap",
                      }}
                    >
                      {generatedPages.map(
                        (page: any) => (
                          <a
                            key={page.slug}
                            href={`#ai-preview-${page.slug}`}
                            style={{
                              color:
                                "#ffffff",
                              textDecoration:
                                "none",
                            }}
                          >
                            {
                              page.page_name
                            }
                          </a>
                        ),
                      )}
                    </nav>
                  </header>

                  {generatedPages.map(
                    (
                      page: any,
                      pageIndex: number,
                    ) => (
                      <section
                        key={page.slug}
                        id={`ai-preview-${page.slug}`}
                        style={{
                          padding:
                            "70px 8%",
                          background:
                            pageIndex %
                              2 ===
                            0
                              ? "#ffffff"
                              : theme.secondary_color ||
                                "#f8fafc",
                        }}
                      >
                        <div
                          style={{
                            maxWidth:
                              "1100px",
                            margin:
                              "0 auto",
                          }}
                        >
                          <h1
                            style={{
                              fontSize:
                                "40px",
                              marginBottom:
                                "40px",
                            }}
                          >
                            {
                              page.page_name
                            }
                          </h1>

                          {page.sections?.map(
                            (
                              section: any,
                              sectionIndex: number,
                            ) => {
                              const columns = Math.min(
                                Math.max(section.columns || 3, 1),
                                4,
                              );

                              const isHero =
                                section.section_type === "hero";

                              const isSplit =
                                section.layout?.includes("split");

                              const isCentered =
                                section.alignment === "center";

                              const sectionBackground =
                                section.background_style?.includes("primary")
                                  ? theme.primary_color
                                  : section.background_style?.includes(
                                        "secondary",
                                      )
                                    ? theme.secondary_color
                                    : section.background_style?.includes(
                                          "surface",
                                        )
                                      ? theme.surface_color
                                      : "transparent";

                              return (
                                <section
                                  key={`${page.slug}-${sectionIndex}`}
                                  style={{
                                    marginBottom: "56px",
                                    padding: isHero
                                      ? "72px 6%"
                                      : "48px 5%",
                                    borderRadius:
                                      theme.border_radius || "18px",
                                    background:
                                      sectionBackground ||
                                      "transparent",
                                    textAlign: isCentered
                                      ? "center"
                                      : "left",
                                  }}
                                >
                                  <div
                                    style={{
                                      // display:
                                      //   isSplit && isHero
                                      //     ? "grid"
                                      //     : "block",
                                      // gridTemplateColumns:
                                      //   isSplit && isHero
                                      //     ? "1.1fr 0.9fr"
                                      //     : undefined,
                                      display: isHero
                                        ? "grid"
                                        : "block",

                                      gridTemplateColumns: isHero
                                        ? "1.05fr 0.95fr"
                                        : undefined,
                                        gap: "48px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div>
                                      {section.eyebrow && (
                                        <div
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            marginBottom: "12px",
                                            color:
                                              theme.accent_color ||
                                              theme.primary_color,
                                          }}
                                        >
                                          {section.eyebrow}
                                        </div>
                                      )}

                                      {section.heading && (
                                        <h2
                                          style={{
                                            fontSize: isHero
                                              ? "clamp(38px, 6vw, 72px)"
                                              : "clamp(30px, 4vw, 44px)",
                                            lineHeight: 1.08,
                                            marginBottom: "18px",
                                            maxWidth: isCentered
                                              ? "900px"
                                              : "780px",
                                            marginLeft: isCentered
                                              ? "auto"
                                              : 0,
                                            marginRight: isCentered
                                              ? "auto"
                                              : 0,
                                          }}
                                        >
                                          {section.heading}
                                        </h2>
                                      )}

                                      {section.subheading && (
                                        <p
                                          style={{
                                            fontSize: isHero
                                              ? "20px"
                                              : "18px",
                                            lineHeight: 1.7,
                                            marginBottom: "18px",
                                            maxWidth: "760px",
                                            marginLeft: isCentered
                                              ? "auto"
                                              : 0,
                                            marginRight: isCentered
                                              ? "auto"
                                              : 0,
                                          }}
                                        >
                                          {section.subheading}
                                        </p>
                                      )}

                                      {section.content && (
                                        <p
                                          style={{
                                            fontSize: "16px",
                                            lineHeight: 1.8,
                                            maxWidth: "820px",
                                            marginBottom: "22px",
                                            marginLeft: isCentered
                                              ? "auto"
                                              : 0,
                                            marginRight: isCentered
                                              ? "auto"
                                              : 0,
                                          }}
                                        >
                                          {section.content}
                                        </p>
                                      )}

                                      {(section.primary_cta ||
                                        section.secondary_cta) && (
                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "12px",
                                            marginTop: "24px",
                                            justifyContent: isCentered
                                              ? "center"
                                              : "flex-start",
                                            flexWrap: "wrap",
                                          }}
                                        >
                                          {section.primary_cta && (
                                            <button
                                              type="button"
                                              style={{
                                                padding:
                                                  "14px 24px",
                                                border: "none",
                                                borderRadius:
                                                  theme.border_radius ||
                                                  "10px",
                                                background:
                                                  theme.accent_color ||
                                                  theme.primary_color ||
                                                  "#2563eb",
                                                color: "#ffffff",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                              }}
                                            >
                                              {section.primary_cta.text}
                                            </button>
                                          )}

                                          {section.secondary_cta && (
                                            <button
                                              type="button"
                                              style={{
                                                padding:
                                                  "14px 24px",
                                                border: `1px solid ${
                                                  theme.primary_color ||
                                                  "#111827"
                                                }`,
                                                borderRadius:
                                                  theme.border_radius ||
                                                  "10px",
                                                background:
                                                  "transparent",
                                                color:
                                                  theme.primary_color ||
                                                  "#111827",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                              }}
                                            >
                                              {section.secondary_cta.text}
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </div>
{/* 
                                    {isHero &&
                                      section.image_direction && (
                                        <div
                                          style={{
                                            minHeight: "320px",
                                            borderRadius:
                                              theme.border_radius ||
                                              "18px",
                                            background:
                                              theme.surface_color ||
                                              "#f3f4f6",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent:
                                              "center",
                                            padding: "32px",
                                            textAlign: "center",
                                            color:
                                              theme.muted_text_color ||
                                              "#6b7280",
                                            fontSize: "14px",
                                            lineHeight: 1.6,
                                          }}
                                        >
                                          {section.image_direction}
                                        </div>
                                      )} */}
                                      {isHero && (
                                        <div
                                          style={{
                                            minHeight: "500px",
                                            borderRadius:
                                              theme.border_radius ||
                                              "24px",
                                            // background: `
                                            //   linear-gradient(
                                            //     135deg,
                                            //     ${
                                            //       theme.primary_color ||
                                            //       "#1f2937"
                                            //     }18,
                                            //     ${
                                            //       theme.accent_color ||
                                            //       "#d1a36f"
                                            //     }35
                                            //   )
                                            // `,
                                            background: `
                                              linear-gradient(
                                                145deg,
                                                ${theme.primary_color || "#2f2f2f"} 0%,
                                                ${theme.secondary_color || "#6b6258"} 55%,
                                                ${theme.accent_color || "#c4a47c"} 100%
                                              )
                                            `,
                                            boxShadow: "0 30px 70px rgba(0,0,0,0.14)",
                                            transform: "translateY(12px)",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            justifyContent: "flex-start",
                                            padding: "28px",
                                            position: "relative",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              background: `
                                                radial-gradient(
                                                  circle at 70% 30%,
                                                  ${
                                                    theme.accent_color ||
                                                    "#d1a36f"
                                                  }30,
                                                  transparent 45%
                                                )
                                              `,
                                            }}
                                          />

                                          {section.image_direction && (
                                            <div
                                              style={{
                                                position: "relative",
                                                zIndex: 1,
                                                maxWidth: "340px",
                                                padding: "14px 16px",
                                                borderRadius: "12px",
                                                background:
                                                  "rgba(255,255,255,0.82)",
                                                backdropFilter: "blur(8px)",
                                                fontSize: "13px",
                                                lineHeight: 1.5,
                                                color:
                                                  theme.text_color ||
                                                  "#111827",
                                              }}
                                            >
                                              {section.image_direction}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                  </div>

                                  {section.items?.length > 0 && (
                                    <div
                                      style={{
                                        display: "grid",
                                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                                        gap: "22px",
                                        marginTop: "36px",
                                      }}
                                    >
                                      {section.items.map(
                                        (
                                          item: any,
                                          itemIndex: number,
                                        ) => (
                                          <article
                                            key={itemIndex}
                                            style={{
                                              padding: "24px",
                                              borderRadius:
                                                theme.border_radius ||
                                                "14px",
                                              background:
                                                theme.surface_color ||
                                                "#ffffff",
                                              boxShadow:
                                                theme.shadow_style ||
                                                "0 10px 30px rgba(0,0,0,0.06)",
                                            }}
                                          >
                                            {item.label && (
                                              <div
                                                style={{
                                                  fontSize: "12px",
                                                  fontWeight: 700,
                                                  marginBottom: "10px",
                                                  color:
                                                    theme.accent_color ||
                                                    theme.primary_color,
                                                }}
                                              >
                                                {item.label}
                                              </div>
                                            )}

                                            <h3
                                              style={{
                                                fontSize: "20px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              {item.title}
                                            </h3>

                                            {item.description && (
                                              <p
                                                style={{
                                                  fontSize: "15px",
                                                  lineHeight: 1.7,
                                                }}
                                              >
                                                {item.description}
                                              </p>
                                            )}
                                          </article>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </section>
                              );
                            },
                          )}
                        </div>
                      </section>
                    ),
                  )}

                  <footer
                    style={{
                      padding:
                        "40px 8%",
                      background:
                        theme.primary_color ||
                        "#111827",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        maxWidth:
                          "1100px",
                        margin:
                          "0 auto",
                      }}
                    >
                      <h3>
                        {
                          website.business_name
                        }
                      </h3>

                      {website.phone && (
                        <p>
                          Phone:{" "}
                          {
                            website.phone
                          }
                        </p>
                      )}

                      {website.email && (
                        <p>
                          Email:{" "}
                          {
                            website.email
                          }
                        </p>
                      )}

                      {website.address && (
                        <p>
                          Address:{" "}
                          {
                            website.address
                          }
                        </p>
                      )}
                    </div>
                  </footer>
                </main>
              );
            })()}
          </div>
        </div>

         <button
          type="button"
          onClick={() => {
            setPreviewOpen(false);
          }}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 2147483647,
            width: "46px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.9)",
            background: "#111827",
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: 1,
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          }}
          aria-label="Close preview"
        >
          ✕
        </button>
      </>,
        document.body
      )}
    </>
  );
}