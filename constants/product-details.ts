
export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
  iconBackground: string;
}

export interface PackageItem {
  title: string;
  description: string;
}

export interface ProductAddon {
  id: string;
  icon: string;
  name: string;
  description: string;
  price: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
  badge?: "included" | "addon";
}

export interface ProductRatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

export interface ProductReview {
  id: string;
  name: string;
  initials: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  avatarBackground: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;

  rating: string;
  reviewCount: number;
  purchases: number;

  currentPrice: string;
  oldPrice: string;
  discount: string;
  priceRange: string;

  previewUrl: string;

  mainImage: string;
  gallery: string[];

  features: ProductFeature[];
  packageIncludes: PackageItem[];
  addons: ProductAddon[];
  specifications: ProductSpecification[];

  ratingBreakdown: ProductRatingBreakdown[];
  reviews: ProductReview[];
}

interface ProductDetailInput {
  slug: string;
  name: string;
  category: string;
  tagline: string;

  rating: string;
  reviewCount: number;
  purchases: number;

  currentPrice: string;
  oldPrice: string;
  discount: string;
  priceRange: string;

  mainImage: string;
  previewUrl?: string;

  customFeatures?: ProductFeature[];
  customPackageIncludes?: PackageItem[];
}

const sharedFeatures: ProductFeature[] = [
  {
    icon: "🎨",
    title: "Premium Modern Design",
    description:
      "A polished website layout created to present your business, services and completed projects professionally.",
    iconBackground: "#eef3ff",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "The website adjusts correctly across desktop, tablet and mobile screen sizes.",
    iconBackground: "#e7f5ef",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description:
      "Optimized structure and assets help pages load quickly and provide a smoother experience.",
    iconBackground: "#fff7e6",
  },
  {
    icon: "🔍",
    title: "SEO Friendly",
    description:
      "Built with clean structure, metadata support and search-engine-friendly content sections.",
    iconBackground: "#f3e8ff",
  },
  {
    icon: "🖼️",
    title: "Project Gallery",
    description:
      "Display residential, commercial, architectural and renovation projects professionally.",
    iconBackground: "#eaf1fd",
  },
  {
    icon: "💬",
    title: "Lead Generation",
    description:
      "Inquiry forms, contact actions and WhatsApp integration help generate business leads.",
    iconBackground: "#edfae8",
  },
];

const sharedPackageIncludes: PackageItem[] = [
  {
    title: "Home Page",
    description:
      "Premium landing page presenting services, projects and business strengths.",
  },
  {
    title: "About Us",
    description:
      "Introduce the business, team, experience and design philosophy.",
  },
  {
    title: "Services Page",
    description:
      "Display residential, commercial, renovation and consulting services.",
  },
  {
    title: "Projects Portfolio",
    description:
      "Show completed work using project images and relevant details.",
  },
  {
    title: "Project Detail Pages",
    description:
      "Dedicated pages containing individual project descriptions and galleries.",
  },
  {
    title: "Contact and Enquiry Page",
    description:
      "Contact details, inquiry form, WhatsApp action and business location.",
  },
  {
    title: "Testimonials Section",
    description:
      "Display client feedback and completed-project reviews.",
  },
  {
    title: "Footer Section",
    description:
      "Business information, social links and quick navigation.",
  },
];

const sharedAddons: ProductAddon[] = [
  {
    id: "price-calculator",
    icon: "🧮",
    name: "Price Calculator",
    description:
      "Allow visitors to estimate their project cost.",
    price: "+₹3,000",
  },
  {
    id: "crm",
    icon: "📊",
    name: "CRM Integration",
    description:
      "Track enquiries, leads and customer follow-ups.",
    price: "+₹5,000",
  },
  {
    id: "boq",
    icon: "📋",
    name: "BOQ Management",
    description:
      "Create and manage Bills of Quantities.",
    price: "+₹4,000",
  },
  {
    id: "ai-chatbot",
    icon: "🤖",
    name: "AI Chat Bot",
    description:
      "Answer visitor questions and collect enquiries.",
    price: "+₹6,000",
  },
];

const sharedSpecifications: ProductSpecification[] = [
  {
    label: "Technology",
    value: "Next.js, FastAPI and MySQL",
  },
  {
    label: "Responsive Design",
    value: "Included",
    badge: "included",
  },
  {
    label: "SEO Setup",
    value: "Included",
    badge: "included",
  },
  {
    label: "Contact Form",
    value: "Included",
    badge: "included",
  },
  {
    label: "WhatsApp Integration",
    value: "Included",
    badge: "included",
  },
  {
    label: "Admin Dashboard",
    value: "Available as add-on",
    badge: "addon",
  },
  {
    label: "CRM Integration",
    value: "Available as add-on",
    badge: "addon",
  },
  {
    label: "Browser Compatibility",
    value: "Chrome, Edge, Firefox and Safari",
  },
  {
    label: "Customisation",
    value: "Colours, text, images and branding",
  },
  {
    label: "Support",
    value: "30 days after delivery",
  },
];

function createRatingBreakdown(
  reviewCount: number,
): ProductRatingBreakdown[] {
  const fiveStar = Math.round(reviewCount * 0.82);
  const fourStar = Math.round(reviewCount * 0.12);
  const threeStar = Math.round(reviewCount * 0.04);
  const twoStar = Math.max(
    0,
    reviewCount -
      fiveStar -
      fourStar -
      threeStar,
  );

  return [
    {
      stars: 5,
      count: fiveStar,
      percentage: 82,
    },
    {
      stars: 4,
      count: fourStar,
      percentage: 12,
    },
    {
      stars: 3,
      count: threeStar,
      percentage: 4,
    },
    {
      stars: 2,
      count: twoStar,
      percentage: 2,
    },
    {
      stars: 1,
      count: 0,
      percentage: 0,
    },
  ];
}

function createReviews(
  productName: string,
): ProductReview[] {
  return [
    {
      id: `${productName}-review-1`,
      name: "Rahul Kumar",
      initials: "RK",
      location: "Delhi",
      role: "Interior Designer",
      rating: 5,
      text: `${productName} has a professional layout and makes our services and completed projects easy to present.`,
      avatarBackground: "#1b4de4",
    },
    {
      id: `${productName}-review-2`,
      name: "Priya Mehta",
      initials: "PM",
      location: "Mumbai",
      role: "Design Studio Owner",
      rating: 5,
      text:
        "The website looks clean on desktop and mobile. The inquiry structure also helps customers contact us easily.",
      avatarBackground: "#12855a",
    },
    {
      id: `${productName}-review-3`,
      name: "Suresh Verma",
      initials: "SV",
      location: "Gurugram",
      role: "Business Owner",
      rating: 4,
      text:
        "The portfolio and service sections work well. The final website looks professional after adding our branding.",
      avatarBackground: "#7c3aed",
    },
  ];
}

function createProductDetail(
  input: ProductDetailInput,
): ProductDetail {
  return {
    slug: input.slug,
    name: input.name,
    category: input.category,
    tagline: input.tagline,

    rating: input.rating,
    reviewCount: input.reviewCount,
    purchases: input.purchases,

    currentPrice: input.currentPrice,
    oldPrice: input.oldPrice,
    discount: input.discount,
    priceRange: input.priceRange,

    previewUrl:
      input.previewUrl ?? "https://themedekho.com/",

    mainImage: input.mainImage,

    gallery: [
      input.mainImage,
      input.mainImage,
      input.mainImage,
    ],

    features:
      input.customFeatures ?? sharedFeatures,

    packageIncludes:
      input.customPackageIncludes ??
      sharedPackageIncludes,

    addons: sharedAddons,

    specifications: [
      {
        label: "Website Type",
        value: input.category,
      },
      {
        label: "Number of Pages",
        value: input.priceRange,
      },
      ...sharedSpecifications,
    ],

    ratingBreakdown: createRatingBreakdown(
      input.reviewCount,
    ),

    reviews: createReviews(input.name),
  };
}

export const productDetails: Record<
  string,
  ProductDetail
> = {
  decorpot: createProductDetail({
    slug: "decorpot",
    name: "Decorpot",
    category: "Interior Design Business Website",

    tagline:
      "A premium interior design website for modern studios, residential designers and turnkey interior firms.",

    rating: "4.8",
    reviewCount: 52,
    purchases: 98,

    currentPrice: "₹14,999",
    oldPrice: "₹46,999",
    discount: "68% OFF",
    priceRange: "Up to 30 pages",

    mainImage:
      "/images/templates/interior/decorpot.jpg",
  }),

  "gopesh-interior": createProductDetail({
    slug: "gopesh-interior",

    name: "Gopesh Interior Furniture House",

    category:
      "Interior and Furniture Business Website",

    tagline:
      "A complete business website for interior contractors, furniture manufacturers and home-furnishing companies.",

    rating: "4.5",
    reviewCount: 31,
    purchases: 33,

    currentPrice: "₹9,999",
    oldPrice: "₹22,000",
    discount: "55% OFF",
    priceRange: "Up to 15 pages",

    mainImage:
      "/images/templates/interior/gopesh-interior.jpg",
  }),

  "modern-architect-studio": createProductDetail({
    slug: "modern-architect-studio",

    name: "Modern Architect Studio",

    category: "Architecture Firm Website",

    tagline:
      "A premium architecture website for studios, consultants and firms that need a strong project-focused presentation.",

    rating: "4.9",
    reviewCount: 45,
    purchases: 67,

    currentPrice: "₹19,999",
    oldPrice: "₹51,000",
    discount: "61% OFF",
    priceRange: "Up to 40 pages",

    mainImage:
      "/images/templates/interior/modern-architect.jpg",
  }),

  "interior-portfolio-pro": createProductDetail({
    slug: "interior-portfolio-pro",

    name: "Interior Portfolio Pro",

    category: "Interior Designer Portfolio",

    tagline:
      "A visual portfolio website for independent interior designers who want to showcase their work and attract new clients.",

    rating: "4.7",
    reviewCount: 36,
    purchases: 41,

    currentPrice: "₹12,999",
    oldPrice: "₹30,999",
    discount: "58% OFF",
    priceRange: "Up to 20 pages",

    mainImage:
      "/images/templates/interior/interior-portfolio.jpg",
  }),

  "architect-portfolio": createProductDetail({
    slug: "architect-portfolio",

    name: "Architect Portfolio",

    category: "Architect Portfolio Website",

    tagline:
      "A professional architecture portfolio for presenting concepts, completed buildings, planning work and studio experience.",

    rating: "4.8",
    reviewCount: 49,
    purchases: 76,

    currentPrice: "₹15,999",
    oldPrice: "₹39,999",
    discount: "60% OFF",
    priceRange: "Up to 25 pages",

    mainImage:
      "/images/templates/interior/architect-portfolio.jpg",
  }),

  "interior-architect-firm":
    createProductDetail({
      slug: "interior-architect-firm",

      name: "Interior & Architect Firm",

      category:
        "Interior and Architecture Firm Website",

      tagline:
        "A combined business website for firms offering architectural planning, interior design and project execution services.",

      rating: "4.9",
      reviewCount: 44,
      purchases: 52,

      currentPrice: "₹17,999",
      oldPrice: "₹48,999",
      discount: "63% OFF",
      priceRange: "Up to 35 pages",

      mainImage:
        "/images/templates/interior/interior-architect.jpg",
    }),
};