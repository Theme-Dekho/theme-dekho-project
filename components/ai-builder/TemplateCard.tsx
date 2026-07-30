import Link from "next/link";
import type { TemplateItem } from "@/lib/ai-builder/types";

interface TemplateCardProps {
  item: TemplateItem;
  href: string;
}

export default function TemplateCard({ item, href }: TemplateCardProps) {
  return (
    <div className="tpl-card">
      <Link href={href} className="tpl-thumb-link">
        <div className="tpl-thumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/templates_image.jpg" alt={item.name} className="tpl-thumb-img" />
          <span className="tpl-badge" style={{ background: item.color }}>
            {item.badge}
          </span>
          <span className="tpl-eye-btn" title="Live Preview">
            <span className="tpl-eye-btn-label">Live Preview</span>
            <span className="tpl-eye-btn-icon">👁</span>
          </span>
        </div>
      </Link>
      <div className="tpl-body">
        <Link href={href} className="tpl-name-link">
          <div className="tpl-name">{item.name}</div>
        </Link>
        <div className="tpl-price-row">
          <span className="tpl-price">{item.price}</span>
          <span className="tpl-price-orig">{item.original}</span>
          <span className="tpl-discount">{item.discount}</span>
        </div>
        <div className="tpl-meta-row">
          <span className="tpl-rating">★ {item.rating}</span> ({item.reviews} reviews) · {item.purchased} purchased
        </div>
        <div className="tpl-actions">
          <button className="btn-get-quote" type="button">
            Get Quote
          </button>
          <button className="tpl-icon-btn" type="button" title="Save">
            🔖
          </button>
          <button className="tpl-icon-btn" type="button" title="Share">
            🔗
          </button>
        </div>
      </div>
    </div>
  );
}
