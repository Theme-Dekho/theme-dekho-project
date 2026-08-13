"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import ProductGrid from "@/components/category/products/ProductGrid";
import type { Product } from "@/types/product";
// import { interiorProducts } from "@/constants/interior-products";
import { useRouter, useSearchParams } from "next/navigation";
import type { SubCategory } from "@/types/category";
import type {
  SortOption,
  ViewMode,
} from "@/types/product";

interface CategoryContentProps {
  categoryName: string;
  subcategories: SubCategory[];
  products: Product[];
}

interface PriceFilterProps {
  maximumPrice: number;
  onMaximumPriceChange: (price: number) => void;
}

const INITIAL_PRODUCT_COUNT = 3;
const LOAD_MORE_COUNT = 3;

export default function CategoryContent({
  categoryName,
  subcategories,
  products,
}: CategoryContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialSubcategory =
  searchParams.get("subcategory") ?? "all";

  const [selectedSubcategory, setSelectedSubcategory] =
  useState(initialSubcategory);

  const [maximumPrice, setMaximumPrice] =
    useState(50000);

  const [sortOption, setSortOption] =
    useState<SortOption>("popular");

  const [viewMode, setViewMode] =
    useState<ViewMode>("grid");

  const [
    visibleProductCount,
    setVisibleProductCount,
  ] = useState(INITIAL_PRODUCT_COUNT);


  const filteredProducts = useMemo(() => {
    const matchingProducts = products.filter(
      (product) => {
        const subcategoryMatches =
          selectedSubcategory === "all" ||
          product.category === selectedSubcategory;

        const priceMatches =
          product.price <= maximumPrice;

        return subcategoryMatches && priceMatches;
      },
    );

    return [...matchingProducts].sort(
      (first, second) => {
        switch (sortOption) {
          case "price-low":
            return first.price - second.price;

          case "price-high":
            return second.price - first.price;

          case "discount":
            return second.discount - first.discount;

          case "newest":
            return second.id - first.id;

          case "popular":
          default:
            return (
              Number(second.sold) -
              Number(first.sold)
            );
        }
      },
    );
  }, [
    selectedSubcategory,
    maximumPrice,
    sortOption,
  ]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(
      0,
      visibleProductCount,
    );
  }, [filteredProducts, visibleProductCount]);

  const hasMoreProducts =
    visibleProductCount < filteredProducts.length;

  useEffect(() => {
    setVisibleProductCount(INITIAL_PRODUCT_COUNT);
  }, [
    selectedSubcategory,
    maximumPrice,
    sortOption,
  ]);

  const handleLoadMore = () => {
    setVisibleProductCount((currentCount) =>
      Math.min(
        currentCount + LOAD_MORE_COUNT,
        filteredProducts.length,
      ),
    );
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);

    if (subcategory === "all") {
      // router.push(window.location.pathname);
      router.push(window.location.pathname, { scroll: false });
      return;
    }

    // router.push(
    //   `${window.location.pathname}?subcategory=${subcategory}`
    // );
    router.push(
      `${window.location.pathname}?subcategory=${subcategory}`,
      { scroll: false }
    );
  };

  useEffect(() => {
  const subcategory =
    searchParams.get("subcategory") ?? "all";

  setSelectedSubcategory(subcategory);
}, [searchParams]);

  return (
    <section
      className="main-wrap"
      aria-label={`${categoryName} website templates`}
    >
      <aside className="sidebar">
        <div className="sb-card">
          <div className="sb-head">
            <span aria-hidden="true">☰</span>
            Subcategories
          </div>

          <div className="sb-body">
            <div className="subcat-list">
              {subcategories.map((subcategory) => {
                const active =
                  selectedSubcategory ===
                  subcategory.key;

                return (
                  <button
                    type="button"
                    key={subcategory.key}
                    className={
                      active
                        ? "subcat-item active"
                        : "subcat-item"
                    }
                    aria-pressed={active}
                    // onClick={() =>
                    //   setSelectedSubcategory(
                    //     subcategory.key,
                    //   )
                    // }
                    onClick={() =>
                      handleSubcategoryChange(subcategory.key)
                    }
                  >
                    <span>
                      {subcategory.label}
                    </span>

                    <span className="subcat-count">
                      {subcategory.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <PriceFilter
          maximumPrice={maximumPrice}
          onMaximumPriceChange={
            setMaximumPrice
          }
        />
      </aside>

      <div className="category-results">
        <div className="category-results-toolbar">
          <div className="sort-info">
            Showing{" "}
            <strong>
              {visibleProducts.length}
            </strong>
            {" of "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            website designs
          </div>

          <div className="sort-right">
            <select
              className="sort-select"
              aria-label="Sort website designs"
              value={sortOption}
              onChange={(event) =>
                setSortOption(
                  event.target
                    .value as SortOption,
                )
              }
            >
              <option value="popular">
                Most Popular
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="newest">
                Newest First
              </option>

              <option value="discount">
                Highest Discount
              </option>
            </select>

            <div
              className="view-btns"
              aria-label="Product layout"
            >
              <button
                type="button"
                className={
                  viewMode === "grid"
                    ? "vbtn active"
                    : "vbtn"
                }
                aria-label="Grid view"
                aria-pressed={
                  viewMode === "grid"
                }
                title="Grid view"
                onClick={() =>
                  setViewMode("grid")
                }
              >
                ⊞
              </button>

              <button
                type="button"
                className={
                  viewMode === "list"
                    ? "vbtn active"
                    : "vbtn"
                }
                aria-label="List view"
                aria-pressed={
                  viewMode === "list"
                }
                title="List view"
                onClick={() =>
                  setViewMode("list")
                }
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        <ProductGrid
          products={visibleProducts}
          viewMode={viewMode}
        />

        {hasMoreProducts && (
          <div className="load-more-wrap">
            <button
              type="button"
              className="btn-load"
              onClick={handleLoadMore}
            >
              Load More Templates
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PriceFilter({
  maximumPrice,
  onMaximumPriceChange,
}: PriceFilterProps) {
  return (
    <div className="sb-card">
      <div className="sb-head">
        <span aria-hidden="true">₹</span>
        Price Range
      </div>

      <div className="sb-body">
        <div className="price-filter">
          <div className="price-inputs">
            <input
              type="text"
              className="price-input"
              value="₹0"
              readOnly
              aria-label="Minimum price"
            />

            <input
              type="text"
              className="price-input"
              value={`₹${maximumPrice.toLocaleString(
                "en-IN",
              )}`}
              readOnly
              aria-label="Maximum price"
            />
          </div>

          <input
            type="range"
            className="price-slider"
            min={5000}
            max={50000}
            step={1000}
            value={maximumPrice}
            onChange={(event) =>
              onMaximumPriceChange(
                Number(event.target.value),
              )
            }
            aria-label="Maximum website price"
          />

          <div className="price-display">
            Website price up to{" "}
            <strong>
              ₹
              {maximumPrice.toLocaleString(
                "en-IN",
              )}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}