// import type {CategoryHeroContent,FeatureStripItem} from "@/types/category";

// export interface CategoryPageData {
//   name: string;
//   title: string;
//   description: string;
//   hero: CategoryHeroContent;
// }

// export interface CategoryPageData {
//   name: string;
//   title: string;
//   description: string;
//   hero: CategoryHeroContent;
//   features: FeatureStripItem[];
// }

// export const categoryData: Record<string, CategoryPageData> = {
//   "interior-architecture": {
//     name: "Interior & Architecture",

//     title: "Interior & Architecture Website Design — ThemeDekho",

//     description:
//       "Explore professional website designs for interior designers, architects, studios, and architecture firms.",

//     hero: {
//       tag: "Interior & Architecture",

//       titleLine1: "Custom Website Built at",

//       titleHighlight: "Affordable Price for Indian Startup",

//       subtitle:
//         "750+ premium Interior & Architecture websites built for design firms across India — mobile-ready, SEO-optimized, with Price Calculator and CRM.",

//       stats: [
//         {
//           value: "750+",
//           label: "Clients Served",
//           tone: "default",
//         },
//         {
//           value: "10–12 Days",
//           label: "Delivery",
//           tone: "orange",
//         },
//         {
//           value: "68%",
//           label: "Average Savings",
//           tone: "green",
//         },
//       ],
//     },
//   },

//   healthcare: {
//     name: "Healthcare & Clinic",

//     title: "Healthcare Website Design — ThemeDekho",

//     description:
//       "Explore professional website designs for hospitals, clinics, doctors, and healthcare providers.",

//     hero: {
//       tag: "Healthcare & Clinic",

//       titleLine1: "Custom Healthcare Website Built at",

//       titleHighlight: "Affordable Price for Indian Business",

//       subtitle:
//         "Professional healthcare websites for hospitals, clinics, doctors, diagnostic centers, and medical businesses across India.",

//       stats: [
//         {
//           value: "500+",
//           label: "Healthcare Clients",
//           tone: "default",
//         },
//         {
//           value: "10–12 Days",
//           label: "Delivery",
//           tone: "orange",
//         },
//         {
//           value: "24/7",
//           label: "Support",
//           tone: "green",
//         },
//       ],
//     },
//   },
// };


import type {
  CategoryHeroContent,
  FeatureStripItem,
  SubCategory,
} from "@/types/category";

export interface CategoryPageData {
  name: string;
  title: string;
  description: string;
  hero: CategoryHeroContent;
  features: FeatureStripItem[];
}

export interface CategoryPageData {
  name: string;
  title: string;
  description: string;
  hero: CategoryHeroContent;
  features: FeatureStripItem[];
  subcategories: SubCategory[];
}

export const categoryData: Record<string, CategoryPageData> = {
  "interior-architecture": {
    name: "Interior & Architecture",

    title: "Interior & Architecture Website Design — ThemeDekho",

    description:
      "Explore professional website designs for interior designers, architects, studios, and architecture firms.",

    hero: {
      tag: "Interior & Architecture",
      titleLine1: "Custom Website Built at",
      titleHighlight: "Affordable Price for Indian Startup",
      subtitle:
        "750+ premium Interior & Architecture websites built for design firms across India — mobile-ready, SEO-optimized, with Price Calculator and CRM.",
        
      stats: [
        {
          value: "750+",
          label: "Clients Served",
          tone: "default",
        },
        {
          value: "10–12 Days",
          label: "Delivery",
          tone: "orange",
        },
        {
          value: "68%",
          label: "Average Savings",
          tone: "green",
        },
      ],
    },

    features: [
      {
        icon: "⚡",
        title: "Light Speed",
        subtitle: "Fast loading websites",
      },
      {
        icon: "📱",
        title: "Mobile Ready",
        subtitle: "All screen sizes",
      },
      {
        icon: "🔍",
        title: "SEO Optimized",
        subtitle: "Rank on Google",
      },
      {
        icon: "🧮",
        title: "Price Calculator",
        subtitle: "Built-in estimator",
      },
      {
        icon: "📊",
        title: "CRM Integration",
        subtitle: "Manage leads easily",
      },
      {
        icon: "🔄",
        title: "Free Updates",
        subtitle: "Lifetime support",
      },
    ],

    subcategories: [
  {
    key: "all",
    label: "All Designs",
    count: 24,
  },
  {
    key: "interior-firm",
    label: "Interior Firm",
    count: 8,
  },
  {
    key: "architect-firm",
    label: "Architect Firm",
    count: 5,
  },
  {
    key: "interior-architect",
    label: "Interior & Architect Firm",
    count: 4,
  },
  {
    key: "interior-portfolio",
    label: "Interior Designer Portfolio",
    count: 4,
  },
  {
    key: "architect-portfolio",
    label: "Architect Portfolio",
    count: 3,
  },
],
  },

  healthcare: {
    name: "Healthcare & Clinic",

    title: "Healthcare Website Design — ThemeDekho",

    description:
      "Explore professional website designs for hospitals, clinics, doctors, and healthcare providers.",

    hero: {
      tag: "Healthcare & Clinic",
      titleLine1: "Custom Healthcare Website Built at",
      titleHighlight: "Affordable Price for Indian Business",
      subtitle:
        "Professional healthcare websites for hospitals, clinics, doctors, diagnostic centers, and medical businesses across India.",

      stats: [
        {
          value: "500+",
          label: "Healthcare Clients",
          tone: "default",
        },
        {
          value: "10–12 Days",
          label: "Delivery",
          tone: "orange",
        },
        {
          value: "24/7",
          label: "Support",
          tone: "green",
        },
      ],
    },

    features: [
      {
        icon: "⚡",
        title: "Light Speed",
        subtitle: "Fast loading websites",
      },
      {
        icon: "📱",
        title: "Mobile Ready",
        subtitle: "All screen sizes",
      },
      {
        icon: "🔍",
        title: "SEO Optimized",
        subtitle: "Rank on Google",
      },
      {
        icon: "📅",
        title: "Appointments",
        subtitle: "Patient booking system",
      },
      {
        icon: "📊",
        title: "CRM Integration",
        subtitle: "Manage patient leads",
      },
      {
        icon: "🔄",
        title: "Free Updates",
        subtitle: "Lifetime support",
      },
    ],

    subcategories: [
  {
    key: "all",
    label: "All Designs",
    count: 36,
  },
  {
    key: "hospital",
    label: "Hospital",
    count: 6,
  },
  {
    key: "dental-clinic",
    label: "Dental Clinic",
    count: 5,
  },
  {
    key: "eye-hospital",
    label: "Eye Hospital",
    count: 4,
  },
  {
    key: "cardiology",
    label: "Cardiology",
    count: 4,
  },
  {
    key: "ivf-center",
    label: "IVF Center",
    count: 4,
  },
  {
    key: "doctor",
    label: "Doctor",
    count: 4,
  },
  {
    key: "diagnostic-center",
    label: "Diagnostic Center",
    count: 5,
  },
  {
    key: "medical-tourism",
    label: "Medical Tourism",
    count: 4,
  },
],
  },

  "ecommerce": {
    name: "E-Commerce & Retail",

    title: "E-Commerce Website Design — ThemeDekho",

    description:
      "Explore professional e-commerce website designs for online stores, retail businesses and product-based brands.",

    hero: {
      tag: "E-Commerce & Retail",

      titleLine1: "Custom Online Store Built at",

      titleHighlight: "Affordable Price for Indian Business",

      subtitle:
        "Professional e-commerce websites for electronics, grocery, furniture, fashion and jewelry businesses across India.",

      stats: [
        {
          value: "200+",
          label: "Store Designs",
          tone: "default",
        },
        {
          value: "10–12 Days",
          label: "Delivery",
          tone: "orange",
        },
        {
          value: "24/7",
          label: "Support",
          tone: "green",
        },
      ],
    },

    features: [
      {
        icon: "⚡",
        title: "Fast Store",
        subtitle: "Optimized loading",
      },
      {
        icon: "📱",
        title: "Mobile Ready",
        subtitle: "All screen sizes",
      },
      {
        icon: "🔍",
        title: "SEO Optimized",
        subtitle: "Rank products on Google",
      },
      {
        icon: "🛒",
        title: "Shopping Cart",
        subtitle: "Easy online checkout",
      },
      {
        icon: "💳",
        title: "Payment Ready",
        subtitle: "Online payment integration",
      },
      {
        icon: "🔄",
        title: "Free Updates",
        subtitle: "Lifetime support",
      },
    ],

    subcategories: [
      {
        key: "all",
        label: "All Designs",
        count: 20,
      },
      {
        key: "electronics-store",
        label: "Electronics Store",
        count: 4,
      },
      {
        key: "grocery-store",
        label: "Groceries Store",
        count: 4,
      },
      {
        key: "furniture-store",
        label: "Home & Furniture Store",
        count: 4,
      },
      {
        key: "fashion-store",
        label: "Apparel & Fashion Store",
        count: 4,
      },
      {
        key: "jewelry-store",
        label: "Jewelry Store",
        count: 4,
      },
    ],
  },

  "real-estate": {
    name: "Real Estate",

    title: "Real Estate Website Design — ThemeDekho",

    description:
      "Explore professional website designs for builders, contractors, property dealers and real estate businesses.",

    hero: {
      tag: "Real Estate",

      titleLine1: "Custom Real Estate Website Built at",

      titleHighlight: "Affordable Price for Indian Business",

      subtitle:
        "Professional real estate websites for builders, contractors, property agencies and property businesses across India.",

      stats: [
        {
          value: "100+",
          label: "Website Designs",
          tone: "default",
        },
        {
          value: "10–12 Days",
          label: "Delivery",
          tone: "orange",
        },
        {
          value: "24/7",
          label: "Support",
          tone: "green",
        },
      ],
    },

    features: [
      {
        icon: "⚡",
        title: "Fast Website",
        subtitle: "Optimized performance",
      },
      {
        icon: "📱",
        title: "Mobile Ready",
        subtitle: "All screen sizes",
      },
      {
        icon: "🔍",
        title: "SEO Optimized",
        subtitle: "Rank on Google",
      },
      {
        icon: "🏠",
        title: "Property Listings",
        subtitle: "Show projects easily",
      },
      {
        icon: "📊",
        title: "CRM Integration",
        subtitle: "Manage property leads",
      },
      {
        icon: "🔄",
        title: "Free Updates",
        subtitle: "Lifetime support",
      },
    ],

    subcategories: [
      {
        key: "all",
        label: "All Designs",
        count: 10,
      },
      {
        key: "builder",
        label: "Builder",
        count: 5,
      },
      {
        key: "contractor",
        label: "Contractor",
        count: 5,
      },
    ],
  },
};