export type BadgeType = "badge-sale" | "badge-new" | "badge-hot" | "badge-premium";

export interface ProductBadge {
  type: BadgeType;
  label: string;
}

/* Homepage product card */
export interface ProductCardData {
  id?: number;
  slug?: string;
  name: string;
  category: string;
  categoryVariant?: "hot" | "default";
  // priceFrom: string;
  // priceTo: string;
  rating: number;
  reviewCount: number;
  sold?: number;
  previewUrl: string;
  previewName?: string;
  image?: string;
  bgColor?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string; // subcategory filter key e.g. "interior" | "architect" | "decor" | "renovation"
  subCategoryLabel: string; // display label e.g. "Interior Design"
  price: number;
  priceDisplay: string;
  priceTier: string;
  discount: number;
  img: string;
  alt: string;
  previewUrl: string;
  badges: ProductBadge[];
  sold: string;
  rating: string;
  tags: string[];
}

export type ViewMode = "grid" | "list";

export type SortOption = "popular" | "price-low" | "price-high" | "newest" | "discount";

export interface AdBannerData {
  category: string;
  variant: "orange" | "green";

  tag: string;

  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;

  oldPrice: string;
  discountLabel: string;
  price: string;

  discountBg?: string;
  btnBg?: string;
  btnShadow?: string;
}
