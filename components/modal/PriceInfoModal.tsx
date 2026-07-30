"use client";

import { useSite } from "@/lib/site-context";
import { pricingTiers, pricingExclusions } from "@/constants/section";

export default function PriceInfoModal() {
  const { priceInfoModal } = useSite();

  return (
    <div
      className={`pinfo-overlay${priceInfoModal.isOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) priceInfoModal.close();
      }}
    >
      <div className="pinfo-box">
        <div className="pinfo-head">
          <button className="pinfo-close" onClick={priceInfoModal.close} aria-label="Close">
            &times;
          </button>
          <h3>How Our Pricing Works</h3>
          <p>Price depends on the number of pages, not the design.</p>
        </div>

        <div className="pinfo-body">
          {pricingTiers.map((tier) => (
            <div className="ptier" key={tier.pages}>
              <span className="ptier-pages">{tier.pages}</span>
              <span className="ptier-price">{tier.price}</span>
            </div>
          ))}

          <div className="pinfo-note">
            <strong>What&rsquo;s not included</strong>
            <p>Every design shown is ready to launch. Custom functionality is charged separately &mdash; for example:</p>
            <ul>
              {pricingExclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 8 }}>Full details are listed on each product page.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
