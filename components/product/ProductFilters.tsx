"use client";

import { useState } from "react";
import CategoryStrip from "@/components/navigation/CategoryStrip";
// import SubCategoryStrip from "@/components/navigation/SubCategoryStrip";
import type { CategoryFilter } from "@/types/category";

// interface ProductFiltersProps {
//   activeCategory: CategoryFilter;
//   onCategoryChange: (cat: CategoryFilter) => void;
// }
interface ProductFiltersProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (cat: CategoryFilter) => void;
  showSubCategories?: boolean;
}

/**
 * Composes CategoryStrip + SubCategoryStrip and owns the sub-category /
 * search-box state (the top-level category selection itself is lifted to
 * the page so the product sections below can react to it).
 */
// export default function ProductFilters({ activeCategory, onCategoryChange }: ProductFiltersProps) {
export default function ProductFilters({ activeCategory, onCategoryChange, showSubCategories = true}: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  // const [activeSub, setActiveSub] = useState("All");

  const handleCategorySelect = (cat: CategoryFilter) => {
    onCategoryChange(cat);
    // setActiveSub("All");

    // Smooth-scroll to the relevant section, mirroring the original
    // `filterCat()` scroll offsets (130px for "all", 175px for a specific category).
    requestAnimationFrame(() => {
      setTimeout(() => {
        const target =
          cat === "all"
            ? document.querySelector<HTMLElement>("[data-cat]")
            : document.querySelector<HTMLElement>(`section[data-cat="${cat}"]`);
        if (!target) return;
        const offset = cat === "all" ? 130 : 175;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }, cat === "all" ? 100 : 200);
    });
  };

  return (
    <>
      <CategoryStrip
        active={activeCategory}
        onSelect={handleCategorySelect}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      {/* <SubCategoryStrip
        category={activeCategory === "all" ? null : activeCategory}
        activeSub={activeSub}
        onSelectSub={setActiveSub}
      /> */}
      {/* {showSubCategories && (
        <SubCategoryStrip
          category={activeCategory === "all" ? null : activeCategory}
          activeSub={activeSub}
          onSelectSub={setActiveSub}
        />
      )} */}
    </>
  );
}
