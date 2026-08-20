import type {
  ProductRatingBreakdown,
  ProductReview,
} from "@/constants/product-details";

interface ProductReviewsProps {
  rating: string;
  reviewCount: number;
  ratingBreakdown: ProductRatingBreakdown[];
  reviews: ProductReview[];
}

function renderStars(rating: number) {
  return Array.from(
    { length: 5 },
    (_, index) => (index < rating ? "★" : "☆"),
  ).join("");
}

export default function ProductReviews({
  rating,
  reviewCount,
  ratingBreakdown,
  reviews,
}: ProductReviewsProps) {
  return (
    <section
      className="product-reviews-section"
      id="customer-reviews"
    >
      <div className="product-section-inner">

        <div className="product-reviews-heading">
          <h2>Customer Reviews</h2>

          <p>
            What our clients say about this website template
          </p>
        </div>

        <div className="product-reviews-summary">

          {/* SCORE */}
          <div className="product-rating-overview">
            <strong className="product-rating-large">
              {rating}
            </strong>

            <div
              className="product-rating-large-stars"
              aria-label={`${rating} out of 5 stars`}
            >
              ★★★★★
            </div>

            <span className="product-rating-total">
              {reviewCount} reviews
            </span>
          </div>

          {/* DISTRIBUTION */}
          <div className="product-rating-bars">
            {ratingBreakdown.map((item) => (
              <div
                className="product-rating-bar-row"
                key={item.stars}
              >
                <span className="product-rating-label">
                  {item.stars} ★
                </span>

                <div className="product-rating-track">
                  <div
                    className="product-rating-fill"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <span className="product-rating-count">
                  {item.count}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* REVIEW CARDS */}
        <div className="product-reviews-list">
          {reviews.map((review) => (
            <article
              className="product-review-card"
              key={review.id}
            >
              <div className="product-review-header">

                <div
                  className="product-review-avatar"
                  style={{
                    background:
                      review.avatarBackground,
                  }}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>

                <div className="product-review-person">
                  <h3>{review.name}</h3>

                  <p>
                    {review.location} • {review.role}
                  </p>
                </div>

                <div
                  className="product-review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {renderStars(review.rating)}
                </div>

              </div>

              <p className="product-review-text">
                “{review.text}”
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}