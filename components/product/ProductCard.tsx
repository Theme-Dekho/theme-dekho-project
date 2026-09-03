"use client";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { ProductCardData } from "@/types/product";
import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-context";

const addonFeatures = ["AI Chat Bot", "CRM", "Price Calculator", "BOQ"];

interface ProductCardProps {
  product: ProductCardData;
  /** Section label used when this product gets saved (shown in the saved-list drawer) */
  sectionLabel: string;
}

export default function ProductCard({ product, sectionLabel }: ProductCardProps) {
  const { isSaved, toggleSave, openReviewsModal, openPreviewModal, showToast, priceInfoModal } = useSite();
  const { isLoggedIn, openLoginModal} = useAuth();  
  
  const handlePreview = () => {
    openPreviewModal(product.previewUrl, product.previewName ?? product.name);
  };
  
  // const handleReviews = (e: React.MouseEvent) => {
    const handleReviews = (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      openReviewsModal({ name: product.name, rating: product.rating, reviewCount: product.reviewCount });
    };
    
    // const handleShare = async (e: React.MouseEvent) => {
      const handleShare = async (
        e: MouseEvent<HTMLButtonElement>,
      ) => {
        e.stopPropagation();
        const shareData = {
          title: product.name,
          // text: `Check out "${product.name}" ${product.priceFrom} – ${product.priceTo} on Theme Dekho!`,
          url: "https://themedekho.com/",
        };
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch {
            /* user cancelled — no-op */
          }
        } else {
          // await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
          showToast("🔗 Link copied to clipboard!");
        }
      };
      

  const productId = String(product.id ?? product.slug ?? product.name,);
  const productSlug = String(product.slug ?? product.id ?? product.name,);
  const saved = isSaved(productId);
  const handleWishlist = async (
  event: MouseEvent<HTMLButtonElement>,
) => {
  event.stopPropagation();

  if (!isLoggedIn) {
    openLoginModal();
    return;
  }

  await toggleSave({
    productId,
    slug: productSlug,
    name: product.name,
    label: sectionLabel,
    image: product.image ?? null,
  });
}; 

  return (
    <div className="product-card">
      <div className="pc-img" style={{ background: product.bgColor }}>
        {/* <span className="pc-preview" onClick={handlePreview}>
          <span className="eye-icon" />
          <span className="eye-text">Live Preview</span>
        </span> */}
        <button
        type="button"
        className="pcard-preview-btn"
        onClick={handlePreview}
      >
        👁 Live Preview
      </button>
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="scroll-img" src={product.image} alt="website preview" />
        ) : (
          product.previewName ?? product.name
        )}
      </div>

      <div className="pc-body">
        <div className="pc-meta">
          <span className={cn("pc-cat", product.categoryVariant === "hot" && "hot")}>{product.category}</span>
          <div className="pc-meta-right">
            {product.sold !== undefined && <span className="pc-sold">&#128722; {product.sold}</span>}
            <span className="pc-rate">
              <span className="pc-rate-star">★★★★</span>
              <span className="pc-rate-num">{product.rating}</span>
              <span className="pc-rate-rev" onClick={handleReviews}>
                ({product.reviewCount})
              </span>
            </span>
          </div>
        </div>

        <div className="pc-name">{product.name}</div>

        <div className="pc-addon-wrap">
          <span className="pc-addon-label">Add-ons &mdash; not included</span>
          <div className="pc-feats">
            {addonFeatures.map((f) => (
              <span className="pc-feat" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* <div className="pc-prices"> */}
          {/* <span className="pc-range">
            {product.priceFrom} <span className="pc-dash">&ndash;</span> {product.priceTo}
          </span> */}
          {/* <button
            className="pc-info"
            type="button"
            aria-label="Pricing details"
            onClick={(e) => {
              e.stopPropagation();
              priceInfoModal.open();
            }}
          >
            <span aria-hidden="true">i</span>
          </button> */}
        {/* </div> */}

        <div className="pc-actions">
          {/* <a className="pc-details" href="/product-page">
            <span className="det-arrow">&#9654;</span>Get Details
          </a> */}
          {/* <Link
            className="pc-details"
            href={`/products/${productSlug}`}
          >
            <span className="det-arrow">&#9654;</span>
            Get Details
          </Link> */}
          <Link
              href={`/products/${productSlug}`}
              className="btn-buy"
            >
              <span aria-hidden="true">▶</span>
              Get Details
            </Link>

          {/* <button className={cn("pc-save", saved && "saved")} onClick={() => toggleSave(product.name, sectionLabel)}> */}
          {/* <button type="button" className={cn("pc-save", saved && "saved",)}onClick={handleWishlist}
                aria-label={
                  saved
                    ? `Remove ${product.name} from wishlist`
                    : `Add ${product.name} to wishlist`
                }
              > */}
            <button type="button" className={cn("pc-save", saved && "saved",)}
                  onClick={handleWishlist}
                  aria-label={
                    saved
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                >  
            {saved ? (
              <svg width="16" height="18" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V19L8 15.5L2 19V2Z"
                  fill="currentColor"
                />
                <line x1="4" y1="9" x2="12" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="18" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V19L8 15.5L2 19V2Z"
                  fill="currentColor"
                />
                <line x1="8" y1="5" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="9" x2="12" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
            <span className="save-tooltip">{saved ? "Remove from Saved" : "Save for Later"}</span>
          </button>

          <button className="pc-share" onClick={handleShare}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
