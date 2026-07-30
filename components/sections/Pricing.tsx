"use client";

import type { AdBannerData } from "@/types/product";
import { useSite } from "@/lib/site-context";

const addonItems = [
  { icon: "🧮", label: "Calculate Function" },
  { icon: "📊", label: "CRM Integration" },
  { icon: "📋", label: "BOQ Management" },
];

/** The colored "special offer" banner shown after each category's product grid. */
export default function Pricing({ data }: { data: AdBannerData }) {
  const { customQuoteModal } = useSite();
  const addonClass = data.variant === "orange" ? "addon-orange" : "addon-green";

  return (
    <div className={`ad-banner ad-${data.variant}`} data-cat={data.category}>
      <div className="ad-inner">
        <div className="ad-left">
          <div className="ad-tag">{data.tag}</div>
          <h3 className="ad-title">
            {data.titlePrefix}
            <span className="hl">{data.titleHighlight}</span>
            {data.titleSuffix}
          </h3>
          <div className="ad-sub">
            <span className="ad-sub-item">AI Powered</span>
            <span className="ad-sub-item">Mobile Friendly</span>
            <span className="ad-sub-item">SSL Secure</span>
            <span className="ad-sub-item">SEO Ready</span>
          </div>
          <div className="ad-addon-row">
            <span className="ad-addon-label">Add-ons</span>
            {addonItems.map((item) => (
              <span className={`ad-addon-item ${addonClass}`} key={item.label}>
                {item.icon} {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="ad-right ad-right-stack">
          <div className="ad-price-row1">
            <span className="ad-old">{data.oldPrice}</span>
            <span className="ad-disc" style={data.discountBg ? { background: data.discountBg } : undefined}>
              {data.discountLabel}
            </span>
          </div>
          <div className="ad-price">{data.price}</div>
          <div className="ad-price-note">one-time, all inclusive</div>
          <button
            className="ad-btn"
            style={data.btnBg ? { background: data.btnBg, boxShadow: data.btnShadow } : undefined}
            onClick={customQuoteModal.open}
          >
            Claim Offer →
          </button>
          <div className="ad-timer">⏱ Limited period offer</div>
        </div>
      </div>
    </div>
  );
}
