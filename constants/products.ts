export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Interior Studio",
    category: "interior-architecture",
    subcategory: "Interior Firm",
  },
  {
    id: 2,
    name: "Architecture Portfolio",
    category: "interior-architecture",
    subcategory: "Architect Portfolio",
  },
  {
    id: 3,
    name: "Advanced Dental Clinic",
    category: "healthcare",
    subcategory: "Dental Clinic",
  },
];