"use client";

import { useState } from "react";
import { useSite } from "@/lib/site-context";

/** The dark "Need a Custom Website?" strip with a mini name+phone form
 *  that opens the full Custom Development modal, same as the source. */
export default function CTABand() {
  const { customQuoteModal } = useSite();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="cta-band">
      <div className="cta-inner">
        <div className="cta-text">
          <h2>Need a Custom Website?</h2>
          <p>Tell us your requirements — we&apos;ll build it from scratch. WordPress, Shopify, E-commerce &amp; more.</p>
        </div>
        <div className="cta-form">
          {/* <input
            className="cta-input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          {/* <input
            className="cta-input"
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          {/* <button className="cta-submit" onClick={customQuoteModal.open}>
            Free Quote &rarr;
          </button> */}
          <button
              type="button"
              className="cta-submit"
              onClick={customQuoteModal.open}
            >
              Free Quote &rarr;
            </button>
        </div>
      </div>
    </div>
  );
}
