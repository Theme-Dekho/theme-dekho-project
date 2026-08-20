"use client";

import {
  useEffect,
  useState,
} from "react";

import type {
  ProductDetail,
} from "@/constants/product-details";

import { useSite } from "@/lib/site-context";

interface ProductStickyBarProps {
  product: ProductDetail;
}

export default function ProductStickyBar({
  product,
}: ProductStickyBarProps) {
  const { openQuoteModal } = useSite();

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const priceBox =
        document.querySelector(
          ".product-price-box",
        );

      if (!priceBox) {
        setIsVisible(false);
        return;
      }

      const rect =
        priceBox.getBoundingClientRect();

      /*
       * Show sticky bar only after the
       * original price + CTA area has
       * completely passed above viewport.
       */
      setIsVisible(rect.bottom < 0);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="product-sticky-bar">
      <div className="product-sticky-inner">

        <div className="product-sticky-info">
          <strong>
            {product.name}
          </strong>

          <span>
            {product.category} ·{" "}
            {product.priceRange}
          </span>
        </div>

        <div className="product-sticky-price">
          <strong>
            {product.currentPrice}
          </strong>

          <span>
            {product.oldPrice}
          </span>
        </div>

        <div className="product-sticky-actions">
          <a
            href={product.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="product-sticky-preview"
          >
            Live Preview
          </a>

          <button
            type="button"
            className="product-sticky-enquiry"
            onClick={() =>
              openQuoteModal(product.name)
            }
          >
            Get Enquiry
          </button>
        </div>

      </div>
    </div>
  );
}