export interface CategoryConfig {
  slug: string;
  title: string;
  description: string;
  subcategories: string[];
}

export const categoryConfigs: Record<string, CategoryConfig> = {
  "interior-architecture": {
    slug: "interior-architecture",
    title: "Interior & Architecture",
    description:
      "Website designs for interior designers, architects, studios, and contractors.",
    subcategories: [
      "All",
      "Interior Firm",
      "Architect Firm",
      "Interior & Architect Firm",
      "Interior Designer Portfolio",
      "Architect Portfolio",
    ],
  },

  healthcare: {
    slug: "healthcare",
    title: "Healthcare & Clinic",
    description:
      "Website designs for hospitals, clinics, doctors, and healthcare businesses.",
    subcategories: [
      "All",
      "Hospital",
      "Dental Clinic",
      "IVF Center",
      "Physiotherapy",
      "Dermatology",
      "Diagnostic Center",
    ],
  },
};