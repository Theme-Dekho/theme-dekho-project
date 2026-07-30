"use client";

import Link from "next/link";
import { useState } from "react";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";
import PreviewModal from "@/components/product/PreviewModal";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import Testimonial from "@/components/sections/Testimonial";
import CTABand from "@/components/sections/CTABand";
import PriceInfoModal from "@/components/modal/PriceInfoModal";
import CustomQuoteModal from "@/components/modal/CustomQuoteModel";
import ReviewsModal from "@/components/modal/ReviewsModal";
import SavedListDrawer from "@/components/modal/SavedListDrawer";
import SaveToast from "@/components/modal/SaveToast";
import QuoteModal from "@/components/modal/QuoteModal";
import { interiorProducts, healthcareProducts, ecommerceProducts, adBanners } from "@/constants/product";
import type { CategoryFilter } from "@/types/category";
import { cn } from "@/lib/utils";
import AnalyticsTestButton from "@/components/Temp";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const show = (cat: CategoryFilter) => activeCategory === "all" || activeCategory === cat;

  return (
    <>
      <Topbar />
      <Header />
      {/* <AnalyticsTestButton /> */}

      <main>
        <Hero />

        <ProductFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

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
                  Explore Interior Portfolio
              </Link>
            </div>
            <ProductGrid products={interiorProducts} sectionLabel="Our Interior Work" />
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
              <a href="#" className="view-all">
                Explore Healthcare Portfolio &rarr;
              </a>
            </div>
            <ProductGrid products={healthcareProducts} sectionLabel="Our Healthcare Work" scrollable />
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
              <a href="#" className="view-all">
                Explore Store Portfolio &rarr;
              </a>
            </div>
            <ProductGrid products={ecommerceProducts} sectionLabel="Our E-Commerce Work" />
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
      <PreviewModal />
      <SavedListDrawer />
      <SaveToast />
      <QuoteModal />
    </>
  );
}
