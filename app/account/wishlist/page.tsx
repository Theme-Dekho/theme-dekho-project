"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";

export default function WishlistPage() {
  const {
    savedItems,
    removeSaved,
  } = useSite();

  return (
    <main className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <div>
            <p className="wishlist-eyebrow">
              My Account
            </p>

            <h1>My Wishlist</h1>

            <p>
              {savedItems.length}{" "}
              {savedItems.length === 1
                ? "item"
                : "items"}{" "}
              saved
            </p>
          </div>

          <Link
            href="/categories/interior-architecture"
            className="wishlist-explore-link"
          >
            Explore Products
          </Link>
        </div>

        {savedItems.length === 0 ? (
          <section className="wishlist-empty">
            <span aria-hidden="true">♡</span>

            <h2>Your wishlist is empty</h2>

            <p>
              Save products to view them here.
            </p>

            <Link href="/categories/interior-architecture">
              Explore Products
            </Link>
          </section>
        ) : (
          <section className="wishlist-list">
            {savedItems.map((item) => (
              <article
                key={item.id}
                className="wishlist-item"
              >
                <Link
                  href={`/products/${item.slug}`}
                  className="wishlist-item-link"
                >
                  <span className="wishlist-item-label">
                    {item.label}
                  </span>

                  <h2>{item.name}</h2>
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
            ))}
          </section>
        )}
      </div>
    </main>
  );
}