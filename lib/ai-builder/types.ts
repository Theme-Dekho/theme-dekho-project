export type IndustryKey = "interior" | "medical" | "realestate" | "other";

export interface IndustryInfo {
  label: string;
  subIndustries: string[];
  pages: string[];
  features: string[];
}

export interface Chip {
  label: string;
  checked: boolean;
}

export interface TemplateItem {
  name: string;
  price: string;
  original: string;
  discount: string;
  rating: string;
  reviews: number;
  purchased: number;
  badge: string;
  color: string;
}

export interface TemplateInfo {
  title: string;
  sub: string;
  items: TemplateItem[];
}

export interface FloatItem {
  id: number;
  label: string;
  left: number;
  top: number;
}

export type FabPanel = "download" | "edit" | "expert";
