import type {
  PackageItem,
  ProductAddon,
} from "@/constants/product-details";

interface ProductPackageProps {
  packageIncludes: PackageItem[];
  addons: ProductAddon[];
}

export default function ProductPackage({
  packageIncludes,
  addons,
}: ProductPackageProps) {
  return (
    <section className="product-package-section">
      <div className="product-section-inner">
        <h2 className="product-section-title">
          What&apos;s Included
        </h2>

        <p className="product-section-subtitle">
          Pages and sections included in this website package
        </p>

        <div className="product-package-grid">
          <div className="package-panel">
            <div className="package-panel-header">
              <h3>Website Pages &amp; Sections</h3>

              <p>
                Core content included in the base website
                package
              </p>
            </div>

            <div className="package-items">
              {packageIncludes.map((item) => (
                <div
                  className="package-item"
                  key={item.title}
                >
                  <span
                    className="package-item-dot"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>{item.title}</strong>

                    <span>
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="addons-panel">
            <div className="addons-panel-header">
              <h3>⚡ Available Add-On Features</h3>

              <p>
                Enhance your website with additional tools
              </p>
            </div>

            <div className="addon-items">
              {addons.map((addon) => (
                <article
                  className="addon-item"
                  key={addon.id}
                >
                  <div
                    className="addon-item-icon"
                    aria-hidden="true"
                  >
                    {addon.icon}
                  </div>

                  <div className="addon-item-content">
                    <h4>{addon.name}</h4>

                    <p>{addon.description}</p>
                  </div>

                  <span className="addon-item-price">
                    {addon.price}
                  </span>

                  <div className="addon-item-actions">
                    <button
                      type="button"
                      className="addon-details-button"
                    >
                      Details
                    </button>

                    <button
                      type="button"
                      className="addon-add-button"
                    >
                      ADD
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}