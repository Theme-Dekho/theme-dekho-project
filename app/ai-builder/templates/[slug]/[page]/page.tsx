import Link from "next/link";
import { notFound } from "next/navigation";
import { findTemplatePage, industryData, pageSlug, templateData, templateSlug } from "../../../../lib/data";
import type { IndustryKey } from "../../../../lib/types";
import TopBar from "../../../../components/TopBar";
import SiteFooter from "../../../../components/SiteFooter";

function pageDescription(pageName: string) {
  const n = pageName.toLowerCase();
  if (n.includes("home")) return "The first thing visitors see — headline, intro, and a quick overview of what you offer.";
  if (n.includes("about")) return "Your story, your team, and why customers should choose you.";
  if (n.includes("doctor")) return "Profiles for each doctor — specialisation, experience, and photo.";
  if (n.includes("appointment") || n.includes("booking")) return "A simple form for customers to book a slot online.";
  if (n.includes("service") || n.includes("product")) return "A clear breakdown of what you offer, with pricing or details.";
  if (n.includes("portfolio") || n.includes("gallery")) return "Photos of your work, products, or space to build trust.";
  if (n.includes("process")) return "A step-by-step look at how you work with clients.";
  if (n.includes("propert") || n.includes("listing")) return "Searchable listings with photos, price, and details.";
  if (n.includes("testimonial")) return "Reviews and ratings from past customers.";
  if (n.includes("contact")) return "Phone, address, map, and an enquiry form so customers can reach you.";
  return "AI-generated content tailored to your business.";
}

export function generateStaticParams() {
  const params: { slug: string; page: string }[] = [];
  (Object.keys(templateData) as IndustryKey[]).forEach((key) => {
    templateData[key].items.forEach((item) => {
      industryData[key].pages.forEach((pageName) => {
        params.push({ slug: templateSlug(key, item.name), page: pageSlug(pageName) });
      });
    });
  });
  return params;
}

export default async function TemplatePagePreview({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const found = findTemplatePage(slug, page);
  if (!found) notFound();

  const { item, pageName, pages, industryKey } = found;
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
            <Link href={`/templates/${slug}`} className="btn btn-outline">
              ← Back to {item.name}
            </Link>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-inner" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="tpl-eyebrow">
            {item.name} · {industry.label}
          </div>
          <h1 className="tpl-detail-title">{pageName}</h1>
          <p className="tpl-sub" style={{ margin: "0 auto 8px", textAlign: "center" }}>
            {pageDescription(pageName)}
          </p>

          <div className="tpl-filter-row">
            {pages.map((p) => {
              const active = pageSlug(p) === page;
              return (
                <Link
                  key={p}
                  href={`/templates/${slug}/${pageSlug(p)}`}
                  className={"tpl-filter-pill" + (active ? " tpl-filter-pill-active" : "")}
                >
                  {p}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="demo-shell" style={{ margin: 0 }}>
            <div className="demo-topbar">
              <span></span>
              <span></span>
              <span></span>
              <div className="url">
                {slug}.themedekho.com/{page === "home" ? "" : page}
              </div>
            </div>
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
          </div>

          <div style={{ textAlign: "center", marginTop: 32, display: "flex", justifyContent: "center", gap: 14 }}>
            <Link href={`/templates/${slug}`} className="btn btn-outline">
              ← Back to template
            </Link>
            <Link href="/" className="btn btn-generate">
              ✨ Build a website like this
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
