import Link from "next/link";
import type { IndustryKey, TemplateInfo } from "@/lib/ai-builder/types";
import { templateSlug } from "@/lib/ai-builder/data";
import TemplateCard from "./TemplateCard";

interface TemplatesSectionProps {
  active: boolean;
  templateInfo: TemplateInfo;
  industryKey: IndustryKey;
}

export default function TemplatesSection({ active, templateInfo, industryKey }: TemplatesSectionProps) {
  return (
    <section className={"section tpl-templates-section" + (active ? " active" : "")}>
      <div className="section-inner">
        <div className="tpl-header">
          <div>
            <div className="tpl-eyebrow">Ready-Made Templates</div>
            <h2 className="tpl-title">{templateInfo.title}</h2>
            <p className="tpl-sub">{templateInfo.sub}</p>
          </div>
          <Link href="/templates" className="tpl-viewall">
            View All Templates →
          </Link>
        </div>
        <div className="tpl-grid">
          {templateInfo.items.map((item: TemplateInfo["items"][number]) => (
            <TemplateCard key={item.name} item={item} href={`/templates/${templateSlug(industryKey, item.name)}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
