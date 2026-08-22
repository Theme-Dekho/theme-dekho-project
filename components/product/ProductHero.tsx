
"use client";

import Image from "next/image";
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

  // const { openQuoteModal } = useSite();
  const { openQuoteModal, openPreviewModal,} = useSite();

  return (
    <section className="product-hero-section">
      <div className="product-hero-wrap">

        {/* MAIN PRODUCT AREA */}
        <div className="product-hero-inner">

          {/* LEFT — PRODUCT GALLERY */}
          {/* <div className="product-gallery">

            <div className="product-main-image">
              <span className="product-image-badge">
                Premium
              </span>

              <Image
                src={activeImage}
                alt={`${product.name} website preview`}
                fill
                priority
                sizes="(max-width: 950px) 100vw, 60vw"
              />
            </div>

            <div className="product-thumbnail-row">
              {product.gallery.map((image, index) => {
                const isActive =
                  activeImage === image;

                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={
                      isActive
                        ? "product-thumbnail active"
                        : "product-thumbnail"
                    }
                    onClick={() =>
                      setActiveImage(image)
                    }
                    aria-label={`View screenshot ${
                      index + 1
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="90px"
                    />
                  </button>
                );
              })}
            </div>

          </div> */}
          {/* LEFT — PRODUCT GALLERY */}
          <div className="product-gallery">

            <div className="product-browser-preview">

              <span className="product-image-badge">
                Premium
              </span>

              <div className="product-browser-window">

                <div className="product-browser-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />

                  <span className="browser-url">
                    yourstudio.com
                  </span>
                </div>

                <div className="product-browser-body">

                  {activeImage === product.gallery[0] && (
                    <div className="product-preview-screen">

                      <div className="preview-nav">
                        <span className="preview-logo" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-button" />
                      </div>

                      <div className="preview-hero-block">
                        <span className="preview-title-line" />
                        <span className="preview-subtitle-line" />
                        <span className="preview-button-line" />
                      </div>

                      <div className="preview-grid preview-grid-three">
                        <span className="preview-tile tile-blue" />
                        <span className="preview-tile tile-purple" />
                        <span className="preview-tile tile-green" />
                      </div>

                      <span className="preview-content-line" />
                      <span className="preview-content-line short" />

                    </div>
                  )}

                  {activeImage === product.gallery[1] && (
                    <div className="product-preview-screen">

                      <div className="preview-nav">
                        <span className="preview-logo" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-button" />
                      </div>

                      <div className="preview-section-label">
                        Our Projects
                      </div>

                      <div className="preview-grid preview-grid-three">
                        <span className="preview-tile tile-blue" />
                        <span className="preview-tile" />
                        <span className="preview-tile tile-purple" />
                        <span className="preview-tile tile-green" />
                        <span className="preview-tile tile-blue" />
                        <span className="preview-tile" />
                      </div>

                      <span className="preview-content-line short" />

                    </div>
                  )}

                  {activeImage === product.gallery[2] && (
                    <div className="product-preview-screen">

                      <div className="preview-nav">
                        <span className="preview-logo" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-link" />
                        <span className="preview-nav-button" />
                      </div>

                      <div className="preview-grid preview-grid-two">
                        <span className="preview-tile tall tile-blue" />
                        <span className="preview-tile tall" />
                      </div>

                      <div className="preview-detail-columns">
                        <div>
                          <span />
                          <span />
                          <span />
                        </div>

                        <div>
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>

                    </div>
                  )}

                </div>

              </div>

              <div className="product-gallery-caption">
                <strong>
                  {activeImage === product.gallery[0]
                    ? "Home Page"
                    : activeImage === product.gallery[1]
                      ? "Portfolio Page"
                      : "Project Detail Page"}
                </strong>

                <span>
                  Click thumbnails to switch
                </span>
              </div>

            </div>

            <div className="product-thumbnail-row">

              <button
                type="button"
                className={
                  activeImage === product.gallery[0]
                    ? "product-thumbnail active"
                    : "product-thumbnail"
                }
                onClick={() =>
                  setActiveImage(product.gallery[0])
                }
              >
                Home
              </button>

              <button
                type="button"
                className={
                  activeImage === product.gallery[1]
                    ? "product-thumbnail active"
                    : "product-thumbnail"
                }
                onClick={() =>
                  setActiveImage(product.gallery[1])
                }
              >
                Portfolio
              </button>

              <button
                type="button"
                className={
                  activeImage === product.gallery[2]
                    ? "product-thumbnail active"
                    : "product-thumbnail"
                }
                onClick={() =>
                  setActiveImage(product.gallery[2])
                }
              >
                Project
              </button>

            </div>

          </div>

          {/* RIGHT — PRODUCT DETAILS */}
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

            {/* RATING */}
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

            {/* PRICE */}
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
                  onClick={() =>
                    openQuoteModal(product.name)
                  }
                >
                  Get Enquiry
                </button>

                {/* <a
                  href={product.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="product-preview-button"
                >
                  Live Preview
                </a> */}
                <button
                  type="button"
                  className="product-preview-button"
                  onClick={() =>
                    openPreviewModal(
                      product.previewUrl,
                      product.name
                    )
                  }
                >
                  Live Preview
                </button>

              </div>
            </div>

            {/* PRODUCT BENEFITS */}
            <div className="product-meta-list">

              <div className="product-meta-item">
                <span className="product-meta-icon">
                  📱
                </span>

                <span>
                  Fully responsive across all devices
                </span>
              </div>

              <div className="product-meta-item">
                <span className="product-meta-icon">
                  🔍
                </span>

                <span>
                  SEO-friendly structure &amp; fast
                  loading
                </span>
              </div>

              <div className="product-meta-item">
                <span className="product-meta-icon">
                  ✓
                </span>

                <span>
                  Free domain setup, hosting setup
                  &amp; deployment
                </span>
              </div>

            </div>

          </aside>
        </div>

        {/* TRUST STRIP */}
        <div className="product-trust-strip">

          <div className="product-trust-item">
            <span className="product-trust-icon">
              ⏱
            </span>

            <div>
              <strong>
                7–10 Days Delivery
              </strong>

              <span>
                Live website, content ready
              </span>
            </div>
          </div>

          <div className="product-trust-item">
            <span className="product-trust-icon">
              ✓
            </span>

            <div>
              <strong>
                100% Source Code
              </strong>

              <span>
                Full ownership, no lock-in
              </span>
            </div>
          </div>

          <div className="product-trust-item">
            <span className="product-trust-icon">
              💬
            </span>

            <div>
              <strong>
                Dedicated Manager
              </strong>

              <span>
                Single point of contact
              </span>
            </div>
          </div>

          <div className="product-trust-item">
            <span className="product-trust-icon">
              💳
            </span>

            <div>
              <strong>
                Easy Payment
              </strong>

              <span>
                UPI, cards &amp; net banking
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}