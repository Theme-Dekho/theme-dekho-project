import Link from "next/link";
import TopBar from "@/components/ai-builder/TopBar";
import SiteFooter from "@/components/ai-builder/SiteFooter";
import TemplateCard from "@/components/ai-builder/TemplateCard";
import ViewMoreGate from "@/components/ai-builder/ViewMoreGate";
import { industryData, templateData, templateSlug } from "@/lib/ai-builder/data";
import type { IndustryKey } from "@/lib/ai-builder/types";

const industryKeys: IndustryKey[] = ["interior", "medical", "realestate", "other"];

export default function TemplatesGalleryPage() {
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

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-inner">
          <div className="section-eyebrow">Ready-Made Templates</div>
          <h1 className="section-title">Find a template for your business</h1>
          <p className="section-sub">
            400+ premium designs across industries — start from a template, or describe your business and let AI
            build one from scratch.
          </p>
          <div className="tpl-filter-row">
            {industryKeys.map((key) => (
              <a key={key} href={`#${key}`} className="tpl-filter-pill">
                {industryData[key].label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {industryKeys.map((key) => {
        const info = templateData[key];
        return (
          <section className="section" key={key} id={key}>
            <div className="section-inner">
              <div className="tpl-header">
                <div>
                  <h2 className="tpl-title">{info.title}</h2>
                  <p className="tpl-sub">{info.sub}</p>
                </div>
              </div>
              <div className="tpl-grid">
                {info.items.map((item) => (
                  <TemplateCard key={item.name} item={item} href={`/templates/${templateSlug(key, item.name)}`} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <ViewMoreGate />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
