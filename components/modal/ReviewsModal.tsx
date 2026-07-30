"use client";

import { useSite } from "@/lib/site-context";
import { reviewsData } from "@/constants/section";

export default function ReviewsModal() {
  const { reviewsModalOpen, reviewsProduct, closeReviewsModal } = useSite();

  if (!reviewsModalOpen || !reviewsProduct) return null;

  const list = reviewsData.slice(0, Math.min(reviewsProduct.reviewCount, 6));

  return (
    <div
      className="modal-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeReviewsModal();
      }}
    >
      <div className="modal-box" style={{ maxWidth: 520 }}>
        <div className="modal-header" style={{ background: "#0F172A" }}>
          <button className="modal-close" onClick={closeReviewsModal}>
            &times;
          </button>
          <div
            style={{
              fontSize: 10,
              color: "var(--orange)",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            ⭐ Customer Reviews
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{reviewsProduct.name}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            ⭐ {reviewsProduct.rating} average rating · {reviewsProduct.reviewCount} reviews
          </div>
        </div>

        <div className="modal-body" style={{ padding: "20px 28px 28px" }}>
          {list.map((r) => (
            <div
              key={r.name}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                background: "var(--light)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--dark)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--dark)" }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>📍 {r.city}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#f59e0b", fontSize: 13 }}>
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--muted)" }}>{r.date}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, fontStyle: "italic" }}>&quot;{r.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
