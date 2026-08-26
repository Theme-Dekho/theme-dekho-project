"use client";

import dynamic from "next/dynamic";


import Link from "next/link";
import { useEffect, useState } from "react";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";
// import PreviewModal from "@/components/product/PreviewModal";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import Testimonial from "@/components/sections/Testimonial";
import CTABand from "@/components/sections/CTABand";

// Dynamically loaded modals to improve initial page load performance
const PriceInfoModal = dynamic(() => import("@/components/modal/PriceInfoModal"), { ssr: false });
const CustomQuoteModal = dynamic(() => import("@/components/modal/CustomQuoteModel"), { ssr: false });
const ReviewsModal = dynamic(() => import("@/components/modal/ReviewsModal"), { ssr: false });
const SaveToast = dynamic(() => import("@/components/modal/SaveToast"), { ssr: false });
const QuoteModal = dynamic(() => import("@/components/modal/QuoteModal"), { ssr: false });

import { adBanners } from "@/constants/product";
import { storeCategoryProducts } from "@/constants/store-products";
import { interiorProducts} from "@/constants/interior-products";
import { healthcareCategoryProducts} from "@/constants/healthcare-products";
import type { CategoryFilter } from "@/types/category";
import { cn } from "@/lib/utils";
import AnalyticsTestButton from "@/components/Temp";
import type { Product, ProductCardData} from "@/types/product";

const toHomeProductCard = (
  product: Product,
): ProductCardData => {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.subCategoryLabel,
    // priceFrom: product.priceDisplay,
    // priceTo: product.priceDisplay,
    priceFrom: "₹4,999",
    priceTo: "₹19,999",
    rating: Number(product.rating),
    reviewCount: Number(product.sold),
    sold: Number(product.sold),
    previewUrl: product.previewUrl,
    previewName: product.name,
    image: product.img,
  };
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [scrollCategory, setScrollCategory] = useState<CategoryFilter>("all");

  const show = (cat: CategoryFilter) => activeCategory === "all" || activeCategory === cat;
  useEffect(() => {
    const handleScroll = () => {
      // If user manually selected a category,
      // don't override it with scroll detection.
      if (activeCategory !== "all") {
        setScrollCategory(activeCategory);
        return;
      }

      const interior =
        document.querySelector<HTMLElement>(
          'section[data-cat="interior"]'
        );

      const healthcare =
        document.querySelector<HTMLElement>(
          'section[data-cat="healthcare"]'
        );

      const ecommerce =
        document.querySelector<HTMLElement>(
          'section[data-cat="ecommerce"]'
        );

      const triggerPoint = 220;

      if (
        ecommerce &&
        ecommerce.getBoundingClientRect().top <= triggerPoint
      ) {
        setScrollCategory("ecommerce");
      } else if (
        healthcare &&
        healthcare.getBoundingClientRect().top <= triggerPoint
      ) {
        setScrollCategory("healthcare");
      } else if (
        interior &&
        interior.getBoundingClientRect().top <= triggerPoint
      ) {
        setScrollCategory("interior");
      } else {
        setScrollCategory("all");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCategory]);

  return (
    <>
      <Topbar />
      <Header />
      {/* <AnalyticsTestButton /> */}

      <main>
        <Hero />

        {/* <ProductFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} /> */}
        {/* <ProductFilters
          activeCategory={
            activeCategory === "all"
              ? scrollCategory
              : activeCategory
          }
          onCategoryChange={setActiveCategory}
        /> */}
        <ProductFilters
          activeCategory={
            activeCategory === "all"
              ? scrollCategory
              : activeCategory
          }
          onCategoryChange={setActiveCategory}
          showSubCategories={activeCategory !== "all"}
        />

        {/* INTERIOR */}
        <section className={cn("section", "sec-orange", !show("interior") && "is-hidden")} id="templates" data-cat="interior">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-label">Our Interior Work</div>
                <div className="section-title">Interior &amp; Architect Websites</div>
                <div className="section-sub">
                  750+ premium Interior websites built with portfolio gallery, price calculator &amp; SEO-friendly pages.
                </div>
              </div>
              <Link
                  href="/categories/interior-architecture"
                  className="view-all"
              >
                  Explore Interior Portfolio &rarr;
              </Link>
            </div>
            {/* <ProductGrid products={interiorProducts} sectionLabel="Our Interior Work" /> */}
            {/* <ProductGrid products={interiorProducts.slice(0, 4)} sectionLabel="Our Interior Work"/> */}
            <ProductGrid products={interiorProducts.slice(0, 4).map(toHomeProductCard)}sectionLabel="Our Interior Work"/>
          </div>
        </section>
        <div className="divider" />
        <div className={cn(!show("interior") && "is-hidden")} data-cat="interior">
          <Pricing data={adBanners.interior} />
        </div>

        {/* HEALTHCARE */}
        <section className={cn("section", "alt", "sec-green", !show("healthcare") && "is-hidden")} data-cat="healthcare">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-label">Our Healthcare Work</div>
                <div className="section-title">Healthcare &amp; Hospital Websites</div>
                <div className="section-sub">
                  Websites we&apos;ve built for hospitals, clinics, dental, eye care &amp; medical tourism practices.
                </div>
              </div>
              {/* <a href="#" className="view-all">
                Explore Healthcare Portfolio &rarr;
              </a> */}
              <Link
                href="/categories/healthcare"
                className="view-all"
              >
                Explore Healthcare Portfolio &rarr;
              </Link>
            </div>
            {/* <ProductGrid products={healthcareProducts} sectionLabel="Our Healthcare Work" scrollable /> */}
            <ProductGrid
              products={healthcareCategoryProducts
                .slice(0, 4)
                .map(toHomeProductCard)}
              sectionLabel="Our Healthcare Work"
            />
          </div>
        </section>
        <div className="divider" />
        <div className={cn(!show("healthcare") && "is-hidden")} data-cat="healthcare">
          <Pricing data={adBanners.healthcare} />
        </div>

        {/* E-COMMERCE */}
        <section className={cn("section", "sec-blue", !show("ecommerce") && "is-hidden")} data-cat="ecommerce">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-label">Our E-Commerce Work</div>
                <div className="section-title">Online Store Websites</div>
                <div className="section-sub">
                  High-converting stores we&apos;ve built for Fashion, Jewellery, Electronics &amp; Grocery brands.
                </div>
              </div>
              {/* <a href="#" className="view-all">
                Explore Store Portfolio &rarr;
              </a> */}
              <Link
                href="/categories/ecommerce"
                className="view-all"
              >
                Explore Store Portfolio &rarr;
              </Link>
            </div>
            <ProductGrid
              products={[
                storeCategoryProducts.find(
                  (product) => product.slug === "techzone-electronics"
                ),
                storeCategoryProducts.find(
                  (product) => product.slug === "freshbasket-grocery"
                ),
                storeCategoryProducts.find(
                  (product) => product.slug === "urban-home-furniture"
                ),
                storeCategoryProducts.find(
                  (product) => product.slug === "stylehub-fashion"
                ),
              ]
                .filter((product): product is Product => Boolean(product))
                .map(toHomeProductCard)}
              sectionLabel="Our E-Commerce Work"
            />
          </div>
        </section>
        <div className="divider" />
        <div className={cn(!show("ecommerce") && "is-hidden")} data-cat="ecommerce">
          <Pricing data={adBanners.ecommerce} />
        </div>

        <Features />
        <Testimonial />
        <CTABand />
      </main>

      <Footer />

      {/* Modals & overlays — always mounted, visibility driven by SiteProvider state */}
      <PriceInfoModal />
      <CustomQuoteModal />
      <ReviewsModal />
      {/* <PreviewModal /> */}
      <SaveToast />
      <QuoteModal />
    </>
  );
}
