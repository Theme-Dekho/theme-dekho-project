"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="pcard">
      <div className="pcard-img">
        <Image
          src={product.img}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />

        <div className="pcard-badges">
          {product.badges.map((badge) => (
            <span
              key={`${product.id}-${badge.label}`}
              className={`badge ${badge.type}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="pcard-preview-btn"
        >
          👁 Live Preview
        </button>
      </div>

      <div className="pcard-body">
        <div className="pcard-meta2">
          <span className="pcard-cat">
            {product.subCategoryLabel}
          </span>

          <div className="pcard-meta-right">
            <span className="pcard-sold">
              🛒 {product.sold}
            </span>

            <span className="pcard-rate">
              <span
                className="pcard-rate-star"
                aria-hidden="true"
              >
                ★★★★★
              </span>

              <span className="pcard-rate-num">
                {product.rating}
              </span>
            </span>
          </div>
        </div>

        <h2 className="pcard-name">
          {product.name}
        </h2>

        <div className="pcard-addon-wrap">
          <span className="pcard-addon-label">
            Add-ons — not included
          </span>

          <div className="pcard-tags">
            {product.tags.map((tag) => (
              <span className="ptag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pcard-price">
          <span className="price-now">
            {product.priceDisplay}
          </span>

          <span className="price-tier">
            {product.priceTier}
          </span>

          <button
            type="button"
            className="price-info"
            aria-label={`View pricing details for ${product.name}`}
          >
            i
          </button>
        </div>

        <div className="pcard-actions">
          {/* <button
            type="button"
            className="btn-buy"
          >
            <span aria-hidden="true">▶</span>
            Get Details
          </button> */}
           <Link
              href={`/products/${product.slug}`}
              className="btn-buy"
            >
          <span aria-hidden="true">▶</span>
            Get Details
          </Link>

          <button
            type="button"
            className="card-save"
            aria-label={`Save ${product.name}`}
            title="Save for later"
          >
            <BookmarkIcon />
          </button>

          <button
            type="button"
            className="btn-share"
            aria-label={`Share ${product.name}`}
            title="Share"
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

function BookmarkIcon() {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V19L8 15.5L2 19V2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}