
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureStrip from "@/components/category/FeatureStrip";
import { interiorProducts } from "@/constants/interior-products";
import { healthcareCategoryProducts } from "@/constants/healthcare-products";

// import CategoryBreadcrumb from "@/components/category/CategoryBreadcrumb";
import CategoryHero from "@/components/category/CategoryHero";
import { categoryData } from "@/constants/category-data";
import CategoryContent from "@/components/category/CategoryContent";

import "@/styles/category-page.css";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = categoryData[category];


  if (!currentCategory) {
    return {
      title: "Category Not Found — ThemeDekho",
      description: "The requested website category could not be found.",
    };
  }

  return {
    title: currentCategory.title,
    description: currentCategory.description,
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = categoryData[category];

  if (!currentCategory) {
    notFound();
  }

 const products =
  category === "interior-architecture"
    ? interiorProducts
    : category === "healthcare"
      ? healthcareCategoryProducts
      : [];

  return (
    <>
    <Header showNavigation={false}/>
    <main className="category-page">
      {/* <CategoryBreadcrumb categoryName={currentCategory.name} /> */}

      <CategoryHero content={currentCategory.hero} />

      <FeatureStrip items={currentCategory.features} />

      <CategoryContent
        categoryName={currentCategory.name}
        subcategories={currentCategory.subcategories}
        products={products}
       />
    </main>

    <Footer />
    </>
  );
}
