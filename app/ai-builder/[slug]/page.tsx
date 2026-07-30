import Link from "next/link";
import { notFound } from "next/navigation";
import { findStaticPage, staticPages } from "@/lib/ai-builder/staticPages";
import TopBar from "@/components/ai-builder/TopBar"; 
import SiteFooter from "@/components/ai-builder/SiteFooter";

export function generateStaticParams() {
  return staticPages.map((p) => ({ slug: p.slug }));
}

export default async function StaticInfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findStaticPage(slug);
  if (!page) notFound();

  return (
    <>
      <TopBar />
      <header>
        <div className="header-inner">
          <a href="/" className="logo-text">
            Theme<span className="dot">Dekho</span>
          </a>
          <div className="header-cta">
            <Link href="/" className="btn btn-outline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="ai-section">
        <div className="ai-section-inner" style={{ maxWidth: 720 }}>
          <div className="tpl-eyebrow">{page.eyebrow}</div>
          <h1 className="tpl-detail-title">{page.title}</h1>
          <p className="tpl-sub" style={{ maxWidth: 560, marginBottom: 28 }}>
            {page.description}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {page.bullets.map((bullet) => (
              <li key={bullet} style={{ fontSize: 14.5, color: "var(--text)" }}>
                <span style={{ color: "var(--green)", fontWeight: 700, marginRight: 8 }}>✓</span>
                {bullet}
              </li>
            ))}
          </ul>
          <Link href="/" className="btn btn-generate">
            ✨ Start Building Free
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
