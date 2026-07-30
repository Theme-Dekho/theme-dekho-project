// "use client";

// import { notFound } from "next/navigation";
// import { useState } from "react";
// import Header from "@/components/layout/Header";
// import Breadcrumb from "@/components/common/category/Breadcrumb";
// import CategoryHero from "@/components/category/CategoryHero";
// // import FeatureStrip from "@/components/category/FeatureStrip";
// // import CategoryLayout from "@/components/category/CategoryLayout";
// // import QuoteModal from "@/components/category/modals/QuoteModal";
// // import FloatingCTA from "@/components/common/FloatingCTA";
// // import { useProducts } from "@/hooks/useProducts";
// // import { INTERIOR_ARCHITECTURE_SUBCATEGORIES } from "@/constants/subcategories";
// // import categoriesData from "@/data/categories.json";
// import { CategoryHeroContent } from "@/types/category";

// interface CategoryPageProps {
//   params: { category: string };
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   const categoryConfig = (categoriesData as any[]).find((c) => c.slug === params.category);
//   if (!categoryConfig) notFound();

//   const { products } = useProducts();
//   const [quoteOpen, setQuoteOpen] = useState(false);

//   const heroContent: CategoryHeroContent = {
//     tag: categoryConfig.heroTag,
//     titleLine1: categoryConfig.titleLine1,
//     titleHighlight: categoryConfig.titleHighlight,
//     subtitle: categoryConfig.subtitle,
//     stats: categoryConfig.stats,
//   };

//   return (
//     <>
//       <Header onOpenQuote={() => setQuoteOpen(true)} />

//       <Breadcrumb
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Our Work", href: "#" },
//           { label: categoryConfig.label },
//         ]}
//       />

//       <CategoryHero content={heroContent} />

//       <FeatureStrip />

//       <CategoryLayout
//         products={products}
//         subCategories={INTERIOR_ARCHITECTURE_SUBCATEGORIES}
//         totalTemplateCount={50}
//         onOpenQuote={() => setQuoteOpen(true)}
//       />

//       <FloatingCTA />
//       <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
//     </>
//   );
// }


// import { notFound } from "next/navigation";

// import CategoryBreadcrumb from "@/components/category/CategoryBreadcrumb";
// import CategoryHero from "@/components/category/CategoryHero";

// interface CategoryPageProps {
//   params: Promise<{
//     category: string;
//   }>;
// }

// const categoryData = {
//   "interior-architecture": {
//     name: "Interior & Architecture",
//     tag: "Interior & Architecture Websites",
//     title: "Professional websites for",
//     highlightedText: "interior and architecture businesses",
//     description:
//       "Explore ready-to-customize website designs for interior designers, architects, studios, contractors and design professionals.",
//     stats: [
//       {
//         value: "120+",
//         label: "Website Designs",
//       },
//       {
//         value: "4.8/5",
//         label: "Customer Rating",
//       },
//       {
//         value: "7 Days",
//         label: "Fast Delivery",
//       },
//     ],
//   },

//   healthcare: {
//     name: "Healthcare & Clinic",
//     tag: "Healthcare Websites",
//     title: "Professional websites for",
//     highlightedText: "healthcare and clinic businesses",
//     description:
//       "Explore website designs for hospitals, clinics, doctors, diagnostic centers and healthcare professionals.",
//     stats: [
//       {
//         value: "150+",
//         label: "Website Designs",
//       },
//       {
//         value: "4.9/5",
//         label: "Customer Rating",
//       },
//       {
//         value: "7 Days",
//         label: "Fast Delivery",
//       },
//     ],
//   },
// } as const;

// export default async function CategoryPage({
//   params,
// }: CategoryPageProps) {
//   const { category } = await params;

//   const data =
//     categoryData[category as keyof typeof categoryData];

//   if (!data) {
//     notFound();
//   }

//   return (
//     <main>
//       <CategoryBreadcrumb categoryName={data.name} />

//       <CategoryHero
//         tag={data.tag}
//         title={data.title}
//         highlightedText={data.highlightedText}
//         description={data.description}
//         stats={[...data.stats]}
//       />

//       <div id="category-products" />
//     </main>
//   );
// }


import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureStrip from "@/components/category/FeatureStrip";

import CategoryBreadcrumb from "@/components/category/CategoryBreadcrumb";
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

  return (
    <>
    <Header showNavigation={false}/>
    <main className="category-page">
      <CategoryBreadcrumb categoryName={currentCategory.name} />

      <CategoryHero content={currentCategory.hero} />

      <FeatureStrip items={currentCategory.features} />

      <CategoryContent
        categoryName={currentCategory.name}
        subcategories={currentCategory.subcategories}
       />
    </main>

    <Footer />
    </>
  );
}
