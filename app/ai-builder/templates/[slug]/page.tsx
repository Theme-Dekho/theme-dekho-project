import Link from "next/link";
import { notFound } from "next/navigation";
import { findTemplateBySlug, industryData, pageSlug, templateData, templateSlug } from "@/lib/ai-builder/data";
import type { IndustryKey } from "@/lib/ai-builder/types";
import TopBar from "@/components/ai-builder/TopBar";
import SiteFooter from "@/components/ai-builder/SiteFooter";

export function generateStaticParams() {
  return (Object.keys(templateData) as IndustryKey[]).flatMap((key) =>
    templateData[key].items.map((item) => ({ slug: templateSlug(key, item.name) }))
  );
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findTemplateBySlug(slug);
  if (!found) notFound();

  const { industryKey, item } = found;
  const industry = industryData[industryKey];

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

      <section className="section">
        <div className="section-inner">
          <div className="tpl-detail-grid">
            <div className="tpl-thumb tpl-detail-thumb">
              <div className="tpl-thumb-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="tpl-thumb-block block-a"></div>
              <div className="tpl-thumb-block block-b"></div>
              <div className="tpl-thumb-block block-c">
                <i></i>
                <i></i>
              </div>
              <span className="tpl-badge" style={{ background: item.color }}>
                {item.badge}
              </span>
            </div>

            <div className="tpl-detail-panel">
              <div className="tpl-eyebrow">{industry.label}</div>
              <h1 className="tpl-detail-title">{item.name}</h1>
              <div className="tpl-meta-row">
                <span className="tpl-rating">★ {item.rating}</span> ({item.reviews} reviews) · {item.purchased}{" "}
                purchased
              </div>
              <div className="tpl-price-row">
                <span className="tpl-price">{item.price}</span>
                <span className="tpl-price-orig">{item.original}</span>
                <span className="tpl-discount">{item.discount}</span>
              </div>
              <p className="tpl-sub">
                A ready-made {industry.label.toLowerCase()} website template — fully responsive, SEO-friendly, and
                customisable with your own content, logo, and colours.
              </p>
              <div className="tpl-detail-actions">
                <button className="btn-get-quote" type="button">
                  Get Quote
                </button>
                <Link href="/" className="btn btn-generate">
                  ✨ Build a website like this
                </Link>
              </div>
            </div>
          </div>

          <div className="tpl-pages-included">
            <h2 className="tpl-detail-title" style={{ fontSize: 20 }}>
              Pages included
            </h2>
            <div className="tpl-filter-row" style={{ justifyContent: "flex-start", marginTop: 16 }}>
              {industry.pages.map((page) => (
                <Link key={page} href={`/templates/${slug}/${pageSlug(page)}`} className="tpl-filter-pill">
                  {page}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
