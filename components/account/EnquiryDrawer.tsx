"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";

export default function EnquiryDrawer() {
  const {
    enquiryDrawer,
    enquiryItems,
    removeEnquiry,
  } = useSite();

  if (!enquiryDrawer.isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="wishlist-drawer-overlay"
        aria-label="Close enquiries"
        onClick={enquiryDrawer.close}
      />

      <aside
        className="wishlist-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-drawer-title"
      >
        <div className="wishlist-drawer-header">
          <div>
            <span>Submitted requests</span>

            <h2 id="enquiry-drawer-title">
              My Enquiries
            </h2>
          </div>

          <button
            type="button"
            className="wishlist-drawer-close"
            aria-label="Close enquiries"
            onClick={enquiryDrawer.close}
          >
            ×
          </button>
        </div>

        <div className="wishlist-drawer-count">
          {enquiryItems.length}{" "}
          {enquiryItems.length === 1
            ? "enquiry"
            : "enquiries"}
        </div>

        <div className="wishlist-drawer-list">
          {enquiryItems.length === 0 ? (
            <div className="wishlist-drawer-empty">
              <span>📋</span>

              <h3>No enquiries yet</h3>

              <p>
                Your submitted product enquiries will appear here.
              </p>
            </div>
          ) : (
            enquiryItems.map((item) => (
            //   <article
            //     key={item.id}
            //     className="wishlist-drawer-item"
            //   >
            //     <Link
            //       href={`/products/${item.slug}`}
            //       className="wishlist-drawer-product-link"
            //       onClick={enquiryDrawer.close}
            //     >
            //       <span>
            //         {item.status}
            //       </span>

            //       <h3>
            //         {item.productName}
            //       </h3>

            //       <p>
            //         {item.city || "City not provided"}
            //       </p>
            //     </Link>
            //   </article>
                <article
                key={item.id}
                className="wishlist-drawer-item enquiry-drawer-item"
                >
                <Link
                    href={`/products/${item.slug}`}
                    className="wishlist-drawer-product-link"
                    onClick={enquiryDrawer.close}
                >
                    <span>{item.status}</span>

                    <h3>{item.productName}</h3>

                    <p>{item.city || "City not provided"}</p>
                </Link>

                <div className="enquiry-drawer-actions">
                    <a
                    // href={`tel:${item.phone}`}
                    // className="enquiry-phone-button"
                    // aria-label={`Call ${item.customerName}`}
                    // title={`Call ${item.phone}`}
                    >
                    📞
                    </a>

                    <button
                    type="button"
                    className="enquiry-remove-button"
                    onClick={() => {
                        const confirmed = window.confirm(
                        `Remove enquiry for "${item.productName}"?`,
                        );

                        if (confirmed) {
                        void removeEnquiry(item.id);
                        }
                    }}
                    aria-label={`Remove enquiry for ${item.productName}`}
                    >
                    Remove
                    </button>
                </div>
                </article>
            ))
          )}
        </div>

        {enquiryItems.length > 0 && (
          <div className="wishlist-drawer-footer">
            {/* <Link
              href="/account/enquiries"
              onClick={enquiryDrawer.close}
            >
              View All Enquiries
            </Link> */}
          </div>
        )}
      </aside>
    </>
  );
}