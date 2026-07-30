import type { ProductFeature } from "@/constants/product-details";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

export default function ProductFeatures({
  features,
}: ProductFeaturesProps) {
  return (
    <section className="product-section product-section-alt">
      <div className="product-section-inner">
        <h2 className="product-section-title">
          Website Features
        </h2>

        <p className="product-section-subtitle">
          Everything included in this website design
        </p>

        <div className="product-features-grid">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="product-feature-card"
            >
              <div
                className="product-feature-icon"
                style={{
                  background: feature.iconBackground,
                }}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}