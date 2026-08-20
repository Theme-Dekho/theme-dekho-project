import type {
  ProductFeature,
  PackageItem,
} from "@/constants/product-details";

interface ProductFeaturesIncludedProps {
  features: ProductFeature[];
  packageIncludes: PackageItem[];
}

export default function ProductFeaturesIncluded({
  features,
  packageIncludes,
}: ProductFeaturesIncludedProps) {
  return (
    <section className="product-overview-section">
      <div className="product-section-inner">

        <div className="product-overview-heading">
          <h2>
            Website Features &amp; What&apos;s Included
          </h2>

          <p>
            Design capabilities plus every page and section
            you get in this website package
          </p>
        </div>

        <div className="product-overview-grid">

          {/* LEFT — WEBSITE FEATURES */}
          <div className="product-overview-panel product-features-panel">

            <div className="product-overview-panel-header">
              <div className="product-panel-title">
                <span className="product-panel-icon">
                  ★
                </span>

                <strong>Website Features</strong>
              </div>

              <span className="product-panel-count">
                {features.length} features
              </span>
            </div>

            <div className="product-overview-panel-body">
              {features.map((feature) => (
                <article
                  className="product-overview-feature"
                  key={feature.title}
                >
                  <div
                    className="product-overview-feature-icon"
                    style={{
                      background:
                        feature.iconBackground,
                    }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h3>{feature.title}</h3>

                    <p>
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* RIGHT — WHAT'S INCLUDED */}
          <div className="product-overview-panel product-included-panel">

            <div className="product-overview-panel-header">
              <div className="product-panel-title">
                <span className="product-panel-icon">
                  ▦
                </span>

                <strong>
                  What&apos;s Included
                </strong>
              </div>

              <span className="product-panel-count">
                {packageIncludes.length} core sections
              </span>
            </div>

            <div className="product-overview-panel-body">
              {packageIncludes.map((item) => (
                <div
                  className="product-included-item"
                  key={item.title}
                >
                  <span
                    className="product-included-dot"
                    aria-hidden="true"
                  />

                  <div>
                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}