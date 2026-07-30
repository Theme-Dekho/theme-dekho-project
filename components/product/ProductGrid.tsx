"use client";

import type { ProductCardData } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";
import { useHorizontalScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: ProductCardData[];
  sectionLabel: string;
  /** Only the Healthcare section uses the scrollable variant with arrow buttons in the source */
  scrollable?: boolean;
}

export default function ProductGrid({ products, sectionLabel, scrollable = false }: ProductGridProps) {
  const { ref, canScrollLeft, canScrollRight, scrollLeft, scrollRight } = useHorizontalScroll<HTMLDivElement>();

  if (!scrollable) {
    return (
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard product={p} sectionLabel={sectionLabel} key={p.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid-wrap">
      <button
        className={cn("scroll-arrow", "left", !canScrollLeft && "hidden")}
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        &#8249;
      </button>
      <div className="product-grid" ref={ref}>
        {products.map((p) => (
          <ProductCard product={p} sectionLabel={sectionLabel} key={p.id} />
        ))}
      </div>
      <button
        className={cn("scroll-arrow", "right", !canScrollRight && "hidden")}
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        &#8250;
      </button>
    </div>
  );
}
