"use client";

import { useState } from "react";
import type { RefObject } from "react";

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
  const [previewOpen, setPreviewOpen] =
    useState(false);

  const website =
    generatedWebsite?.generated_content;

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

      {previewOpen && website && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background:
              "rgba(0, 0, 0, 0.72)",
            overflowY: "auto",
            padding: "24px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              background: "#ffffff",
              minHeight:
                "calc(100vh - 48px)",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setPreviewOpen(false);
              }}
              style={{
                position: "fixed",
                top: "32px",
                right: "32px",
                zIndex: 10001,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "none",
                background: "#111827",
                color: "#ffffff",
                fontSize: "22px",
                cursor: "pointer",
              }}
              aria-label="Close preview"
            >
              ✕
            </button>

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
                            ) => (
                              <div
                                key={`${page.slug}-${sectionIndex}`}
                                style={{
                                  marginBottom:
                                    "48px",
                                }}
                              >
                                {section.heading && (
                                  <h2
                                    style={{
                                      fontSize:
                                        "30px",
                                      marginBottom:
                                        "12px",
                                    }}
                                  >
                                    {
                                      section.heading
                                    }
                                  </h2>
                                )}

                                {section.subheading && (
                                  <p
                                    style={{
                                      fontSize:
                                        "19px",
                                      lineHeight:
                                        1.7,
                                      marginBottom:
                                        "16px",
                                    }}
                                  >
                                    {
                                      section.subheading
                                    }
                                  </p>
                                )}

                                {section.content && (
                                  <p
                                    style={{
                                      fontSize:
                                        "16px",
                                      lineHeight:
                                        1.8,
                                      maxWidth:
                                        "850px",
                                    }}
                                  >
                                    {
                                      section.content
                                    }
                                  </p>
                                )}

                                {section.cta_text && (
                                  <button
                                    type="button"
                                    style={{
                                      marginTop:
                                        "20px",
                                      padding:
                                        "12px 22px",
                                      border:
                                        "none",
                                      borderRadius:
                                        "6px",
                                      background:
                                        theme.accent_color ||
                                        theme.primary_color ||
                                        "#2563eb",
                                      color:
                                        "#ffffff",
                                      cursor:
                                        "pointer",
                                    }}
                                  >
                                    {
                                      section.cta_text
                                    }
                                  </button>
                                )}
                              </div>
                            ),
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
      )}
    </>
  );
}