import type { ProductSpecification } from "@/constants/product-details";

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <section className="product-section product-section-alt">
      <div className="product-section-inner">
        <h2 className="product-section-title">
          Technical Specifications
        </h2>

        <p className="product-section-subtitle">
          Important technical and delivery details for this
          website package
        </p>

        <div className="product-specifications-card">
          <table className="product-specifications-table">
            <tbody>
              {specifications.map((specification) => (
                <tr key={specification.label}>
                  <th scope="row">
                    {specification.label}
                  </th>

                  <td>
                    {specification.badge ? (
                      <span
                        className={
                          specification.badge ===
                          "included"
                            ? "product-specification-badge included"
                            : "product-specification-badge addon"
                        }
                      >
                        {specification.value}
                      </span>
                    ) : (
                      specification.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}