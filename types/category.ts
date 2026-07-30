export type CategoryFilter = "all" | "interior" | "healthcare" | "ecommerce";

export interface CategoryPillData {
  key: CategoryFilter;
  label: string;
  soon?: boolean;
}

export interface SubCategory {
  key: string; // used to filter products, "all" shows everything
  label: string;
  count: number;
}

export interface CategoryHeroContent {
  tag: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  stats: { value: string; label: string; tone?: "orange" | "green" | "default" }[];
}

export interface FeatureStripItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface AddOnFeature {
  key: string;
  icon: string;
  name: string;
  price: string;
  desc: string;
  points: string[];
}

export interface PricingTier {
  pages: string;
  price: string;
}

// @/components/constants/category-data.ts
// export interface CategoryHeroStat {
//   value: string;
//   label: string;
//   tone?: "blue" | "orange" | "green";
// }

// export interface CategoryHeroContent {
//   tag: string;
//   titleLine1: string;
//   titleHighlight: string;
//   subtitle: string;
//   stats: CategoryHeroStat[];
// }
