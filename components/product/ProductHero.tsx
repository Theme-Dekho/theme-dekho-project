"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSite } from "@/lib/site-context";
import type { ProductDetail } from "@/constants/product-details";

interface ProductHeroProps {
  product: ProductDetail;
}

export default function ProductHero({
  product,
}: ProductHeroProps) {
  const [activeImage, setActiveImage] = useState(
    product.mainImage,
  );

  const {openQuoteModal} = useSite();

  return (
    <>
      <div className="product-breadcrumb-wrap">
        <nav
          className="product-breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>

          <span aria-hidden="true">›</span>

          <Link href="/categories/interior">
            Interior Portfolios
          </Link>

          <span aria-hidden="true">›</span>

          <strong>{product.name}</strong>
        </nav>
      </div>

      <section className="product-hero-section">
        <div className="product-hero-inner">
          <div className="product-gallery">
            <div className="product-main-image">
              <span className="product-image-badge">
                Premium
              </span>

              <Image
                src={activeImage}
                alt={`${product.name} website preview`}
                fill
                priority
                sizes="(max-width: 950px) 100vw, 65vw"
              />
            </div>

            <div className="product-thumbnail-row">
              {product.gallery.map((image, index) => {
                const isActive =
                  activeImage === image;

                return (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    className={
                      isActive
                        ? "product-thumbnail active"
                        : "product-thumbnail"
                    }
                    aria-label={`View screenshot ${
                      index + 1
                    }`}
                    onClick={() =>
                      setActiveImage(image)
                    }
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="80px"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="product-info-panel">
            <span className="product-category-badge">
              {product.category}
            </span>

            <h1 className="product-title">
              {product.name}
            </h1>

            <p className="product-tagline">
              {product.tagline}
            </p>

            <div className="product-rating">
              <span
                className="product-stars"
                aria-label={`${product.rating} out of 5 stars`}
              >
                ★★★★★
              </span>

              <strong>{product.rating}</strong>

              <a
                href="#customer-reviews"
                className="product-review-count"
              >
                {product.reviewCount} reviews
              </a>

              <span className="product-purchases">
                {product.purchases} purchases
              </span>
            </div>

            <div className="product-price-box">
              <div className="product-price-row">
                <strong className="product-current-price">
                  {product.currentPrice}
                </strong>

                <span className="product-old-price">
                  {product.oldPrice}
                </span>

                <span className="product-discount">
                  {product.discount}
                </span>
              </div>

              <p className="product-price-range">
                {product.priceRange}
              </p>

              <div className="product-cta-row">
                <button
                  type="button"
                  className="product-quote-button"
                  onClick={() => {
                    openQuoteModal(product.name);
                  }}
                >
                  Get Enquiry
                </button>

                <a
                  href={product.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="product-preview-button"
                >
                  Live Preview
                </a>
              </div>
            </div>

            {/* <div className="product-quick-features">
              {product.quickFeatures.map(
                (feature) => (
                  <div
                    key={feature.label}
                    className="product-quick-feature"
                  >
                    <span aria-hidden="true">
                      {feature.icon}
                    </span>

                    <span>{feature.label}</span>
                  </div>
                ),
              )}
            </div> */}
          </aside>
        </div>
      </section>
    </>
  );
}