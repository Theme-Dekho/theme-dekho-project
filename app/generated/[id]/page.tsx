"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export default function GeneratedWebsitePage() {
  const params = useParams<{ id: string }>();

  const {
    isLoggedIn,
    sessionChecked,
    openLoginModal,
  } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [generation, setGeneration] =
    useState<any | null>(null);

  useEffect(() => {
    if (!sessionChecked) {
      return;
    }

    if (!isLoggedIn) {
      setLoading(false);
      openLoginModal();
      return;
    }

    if (!API_BASE_URL) {
      setError(
        "AI website service is not configured.",
      );
      setLoading(false);
      return;
    }

    const loadGeneration = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/api/ai-websites/${params.id}`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          },
        );

        const data = await response.json();

        if (!response.ok) {
          setError(
            data.detail ??
              "Unable to load generated website.",
          );
          return;
        }

        setGeneration(data);
      } catch (error) {
        console.error(
          "Generated website load error:",
          error,
        );

        setError(
          "Unable to load generated website.",
        );
      } finally {
        setLoading(false);
      }
    };

    void loadGeneration();
  }, [
    params.id,
    isLoggedIn,
    sessionChecked,
    openLoginModal,
  ]);

  if (!sessionChecked || loading) {
    return (
      <main>
        <p>Loading generated website...</p>
      </main>
    );
  }

  if (!isLoggedIn) {
    return (
      <main>
        <p>Please login to preview your website.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
      </main>
    );
  }

  if (!generation) {
    return null;
  }

  const website = generation.generated_content;

    if (!website) {
    return (
        <main>
        <p>Generated website content is unavailable.</p>
        </main>
    );
    }

    const theme = website.theme ?? {};
    const generatedPages = website.pages ?? [];

  return (
    <main
        style={{
        minHeight: "100vh",
        background:
            theme.secondary_color || "#ffffff",
        color: theme.primary_color || "#111111",
        fontFamily:
            theme.font_style ||
            "Arial, sans-serif",
        }}
    >
        {/* HEADER */}
        <header
        style={{
            padding: "20px 6%",
            background:
            theme.primary_color || "#111827",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
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
            {website.business_name}
            </strong>

            {website.tagline && (
            <div
                style={{
                marginTop: "4px",
                fontSize: "13px",
                opacity: 0.85,
                }}
            >
                {website.tagline}
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
                href={`#${page.slug}`}
                style={{
                    color: "#ffffff",
                    textDecoration: "none",
                }}
                >
                {page.page_name}
                </a>
            ),
            )}
        </nav>
        </header>

        {/* GENERATED PAGES */}
        {generatedPages.map(
        (page: any, pageIndex: number) => (
            <section
            key={page.slug}
            id={page.slug}
            style={{
                padding: "70px 8%",
                background:
                pageIndex % 2 === 0
                    ? "#ffffff"
                    : theme.secondary_color ||
                    "#f8fafc",
            }}
            >
            <div
                style={{
                maxWidth: "1100px",
                margin: "0 auto",
                }}
            >
                <h1
                style={{
                    fontSize: "40px",
                    marginBottom: "40px",
                    color:
                    theme.primary_color ||
                    "#111827",
                }}
                >
                {page.page_name}
                </h1>

                {page.sections?.map(
                (
                    section: any,
                    sectionIndex: number,
                ) => (
                    <div
                    key={`${page.slug}-${sectionIndex}`}
                    style={{
                        marginBottom: "48px",
                    }}
                    >
                    {section.heading && (
                        <h2
                        style={{
                            fontSize: "30px",
                            marginBottom: "12px",
                        }}
                        >
                        {section.heading}
                        </h2>
                    )}

                    {section.subheading && (
                        <p
                        style={{
                            fontSize: "19px",
                            lineHeight: 1.7,
                            marginBottom: "16px",
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
                            maxWidth: "850px",
                        }}
                        >
                        {section.content}
                        </p>
                    )}

                    {section.cta_text && (
                        <button
                        type="button"
                        style={{
                            marginTop: "20px",
                            padding: "12px 22px",
                            border: "none",
                            borderRadius: "6px",
                            background:
                            theme.accent_color ||
                            theme.primary_color ||
                            "#2563eb",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontSize: "15px",
                        }}
                        >
                        {section.cta_text}
                        </button>
                    )}
                    </div>
                ),
                )}
            </div>
            </section>
        ),
        )}

        {/* CONTACT / FOOTER */}
        <footer
        style={{
            padding: "40px 8%",
            background:
            theme.primary_color || "#111827",
            color: "#ffffff",
        }}
        >
        <div
            style={{
            maxWidth: "1100px",
            margin: "0 auto",
            }}
        >
            <h3>{website.business_name}</h3>

            {website.phone && (
            <p>Phone: {website.phone}</p>
            )}

            {website.email && (
            <p>Email: {website.email}</p>
            )}

            {website.address && (
            <p>Address: {website.address}</p>
            )}
        </div>
        </footer>
    </main>
    );
}