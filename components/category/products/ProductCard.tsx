"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useAuth } from "@/lib/auth-context";
import { useSite } from "@/lib/site-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { isLoggedIn, openLoginModal} = useAuth();
  const { isSaved, toggleSave, openPreviewModal,} = useSite();
  const productId = String(product.id ?? product.slug ?? product.name);
  const productSlug = String(product.slug ?? product.id ?? product.name);
  const saved = isSaved(productId);

  const handlePreview = () => {
    openPreviewModal(
      product.previewUrl,
      product.name
    );
  };

  const handleWishlist = async () => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    await toggleSave({
      productId,
      slug: productSlug,
      name: product.name,
      label: product.subCategoryLabel,
      image: product.img ?? null,
    });
  };

  return (
    <article className="pcard">
      <div className="pcard-img">
        <Image
          src={product.img}
          alt={product.alt}
          width={600}
          height={1800}
          className="scroll-img"
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
          onClick={handlePreview}
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

        {/* <div className="pcard-price">
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
        </div> */}

        <div className="pcard-actions">
           <Link
              href={`/products/${product.slug}`}
              className="btn-buy"
            >
          <span aria-hidden="true">▶</span>
            Get Details
          </Link>

          <button
            type="button"
            className={
              saved
                ? "pc-save saved"
                : "pc-save"
            }
            aria-label={
              saved
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
            onClick={handleWishlist}
          >
            {saved ? (
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V19L8 15.5L2 19V2Z"
                  fill="currentColor"
                />

                <line
                  x1="4"
                  y1="9"
                  x2="12"
                  y2="9"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V19L8 15.5L2 19V2Z"
                  fill="currentColor"
                />

                <line
                  x1="8"
                  y1="5"
                  x2="8"
                  y2="13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <line
                  x1="4"
                  y1="9"
                  x2="12"
                  y2="9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}

            <span className="save-tooltip">
              {saved
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </span>
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