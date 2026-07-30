// import type { Product } from "@/types/product";
// import ProductCard from "./ProductCard";

// interface ProductGridProps {
//   products: Product[];
// }

// export default function ProductGrid({
//   products,
// }: ProductGridProps) {
//   if (products.length === 0) {
//     return (
//       <div className="no-results">
//         <div className="nr-icon" aria-hidden="true">
//           🔍
//         </div>

//         <h3>No website designs found</h3>

//         <p>
//           Try changing the subcategory or price filter.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <ProductCard
//           product={product}
//           key={product.id}
//         />
//       ))}
//     </div>
//   );
// }

import type { Product, ViewMode } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
}

export default function ProductGrid({
  products,
  viewMode,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="no-results">
        <div className="nr-icon" aria-hidden="true">
          🔍
        </div>

        <h3>No website designs found</h3>

        <p>
          Try changing the subcategory or price filter.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "list"
          ? "product-grid list-view"
          : "product-grid"
      }
    >
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}