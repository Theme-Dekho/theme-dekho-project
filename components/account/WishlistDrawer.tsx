"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";

export default function WishlistDrawer() {
  const {
    savedItems,
    removeSaved,
    savedDrawer,
  } = useSite();

  if (!savedDrawer.isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="wishlist-drawer-overlay"
        aria-label="Close wishlist"
        onClick={savedDrawer.close}
      />

      <aside
        className="wishlist-drawer"
        aria-label="My Wishlist"
      >
        <div className="wishlist-drawer-header">
          <div>
            <p>Saved products</p>
            <h2>My Wishlist</h2>
          </div>

          <button
            type="button"
            className="wishlist-drawer-close"
            aria-label="Close wishlist"
            onClick={savedDrawer.close}
          >
            ×
          </button>
        </div>

        <div className="wishlist-drawer-count">
          {savedItems.length}{" "}
          {savedItems.length === 1
            ? "item"
            : "items"}
        </div>

        <div className="wishlist-drawer-body">
          {savedItems.length === 0 ? (
            <div className="wishlist-drawer-empty">
              <span aria-hidden="true">♡</span>

              <h3>Your wishlist is empty</h3>

              <p>
                Save products to view them here.
              </p>
            </div>
          ) : (
            savedItems.map((item) => (
              <article
                key={item.id}
                className="wishlist-drawer-item"
              >
                <Link
                  href={`/products/${item.slug}`}
                  onClick={savedDrawer.close}
                  className="wishlist-drawer-product-link"
                >
                  <span>{item.label}</span>
                  <h3>{item.name}</h3>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    void removeSaved(item.productId);
                  }}
                  aria-label={`Remove ${item.name} from wishlist`}
                >
                  Remove
                </button>
              </article>
            ))
          )}
        </div>

        <div className="wishlist-drawer-footer">
          <Link
            href="/account/wishlist"
            onClick={savedDrawer.close}
          >
            View Full Wishlist
          </Link>
        </div>
      </aside>
    </>
  );
}