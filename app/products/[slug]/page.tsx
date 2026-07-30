import { notFound } from "next/navigation";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductPackage from "@/components/product/ProductPackage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import { productDetails } from "@/constants/product-details";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductReviews from "@/components/product/ProductReviews";

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
      <Header showNavigation={false} />

      <main className="product-detail-page">
        <ProductHero product={product} />
        <ProductFeatures features={product.features} />

        <ProductPackage 
        packageIncludes={product.packageIncludes}
        addons={product.addons}
        />

        <ProductSpecifications
        specifications={product.specifications}
        />

        <ProductReviews
        rating={product.rating}
        reviewCount={product.reviewCount}
        ratingBreakdown={product.ratingBreakdown}
        reviews={product.reviews}
        />
      </main>

      <Footer />
    </>
  );
}