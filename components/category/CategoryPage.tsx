"use client";

import { useMemo, useState } from "react";
import type { CategoryConfig } from "@/constants/categories";
import { products } from "@/constants/products";

interface CategoryPageProps {
  initialCategory: string;
  config: CategoryConfig;
}

export default function CategoryPage({
  initialCategory,
  config,
}: CategoryPageProps) {
  const [selectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatches = product.category === selectedCategory;

      const subcategoryMatches =
        selectedSubcategory === "All" ||
        product.subcategory === selectedSubcategory;

      return categoryMatches && subcategoryMatches;
    });
  }, [selectedCategory, selectedSubcategory]);

  return (
    <main>
      <section>
        <h1>{config.title}</h1>
        <p>{config.description}</p>
      </section>

      <aside>
        <h2>Category</h2>

        <div className="category-filter-item active">
          {config.title}
        </div>

        <h2>Subcategories</h2>

        {config.subcategories.map((subcategory) => (
          <button
            key={subcategory}
            type="button"
            className={
              selectedSubcategory === subcategory
                ? "subcategory-filter active"
                : "subcategory-filter"
            }
            onClick={() => setSelectedSubcategory(subcategory)}
          >
            {subcategory}
          </button>
        ))}
      </aside>

      <section>
        <p>{filteredProducts.length} websites found</p>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.subcategory}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}