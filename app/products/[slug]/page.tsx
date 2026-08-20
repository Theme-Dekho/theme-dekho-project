import { notFound } from "next/navigation";
import ProductFeaturesIncluded from "@/components/product/ProductFeaturesIncluded";
import ProductPackage from "@/components/product/ProductPackage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import { productDetails } from "@/constants/product-details";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductReviews from "@/components/product/ProductReviews";
import QuoteModal from "@/components/modal/QuoteModal";
import ProductDeliveryProcess from "@/components/product/ProductDeliveryProcess";
import ProductFaq from "@/components/product/ProductFaq";
import ProductStickyBar from "@/components/product/ProductStickyBar";

import "@/styles/product-detail.css";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = productDetails[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="product-detail-page">
        <ProductHero product={product} />
        {/* <ProductFeaturesIncluded features={product.features} /> */}
        <ProductFeaturesIncluded 
        features={product.features} 
        packageIncludes={product.packageIncludes}
        />

        <ProductPackage 
        addons={product.addons}
        />

        <ProductSpecifications
        specifications={product.specifications}
        />

        <ProductDeliveryProcess />

        <ProductReviews
        rating={product.rating}
        reviewCount={product.reviewCount}
        ratingBreakdown={product.ratingBreakdown}
        reviews={product.reviews}
        />

      <ProductFaq />
      <ProductStickyBar product={product}  />
      </main>

      <Footer />
      <QuoteModal />
    </>
  );
}