
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

  "urban-space-interiors": createProductDetail({
    slug: "urban-space-interiors",
    name: "Urban Space Interiors",
    category: "Interior Design Business Website",
    tagline:
      "A clean and modern interior design website for residential designers, renovation firms and turnkey interior businesses.",
    rating: "4.6",
    reviewCount: 34,
    purchases: 42,
    currentPrice: "₹8,999",
    oldPrice: "₹17,999",
    discount: "50% OFF",
    priceRange: "Up to 15 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),

  "elite-home-interiors": createProductDetail({
    slug: "elite-home-interiors",
    name: "Elite Home Interiors",
    category: "Interior Design Business Website",
    tagline:
      "A premium interior website for showcasing residential projects, design services and customer enquiries.",
    rating: "4.7",
    reviewCount: 41,
    purchases: 58,
    currentPrice: "₹10,999",
    oldPrice: "₹24,999",
    discount: "56% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),

  "signature-interior-studio": createProductDetail({
    slug: "signature-interior-studio",
    name: "Signature Interior Studio",
    category: "Interior Design Business Website",
    tagline:
      "A portfolio-focused website for interior studios that want to present projects, services and design expertise professionally.",
    rating: "4.8",
    reviewCount: 48,
    purchases: 71,
    currentPrice: "₹12,999",
    oldPrice: "₹30,999",
    discount: "58% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),

  "dreamline-interiors": createProductDetail({
    slug: "dreamline-interiors",
    name: "Dreamline Interiors",
    category: "Interior Design Business Website",
    tagline:
      "A compact interior design website for small studios, independent designers and growing interior businesses.",
    rating: "4.5",
    reviewCount: 29,
    purchases: 36,
    currentPrice: "₹7,999",
    oldPrice: "₹14,999",
    discount: "45% OFF",
    priceRange: "Up to 12 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),

  "living-space-designs": createProductDetail({
    slug: "living-space-designs",
    name: "Living Space Designs",
    category: "Interior Design Business Website",
    tagline:
      "A professional interior website for presenting complete home interiors, modular solutions and completed projects.",
    rating: "4.8",
    reviewCount: 56,
    purchases: 83,
    currentPrice: "₹14,999",
    oldPrice: "₹37,999",
    discount: "60% OFF",
    priceRange: "Up to 25 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),

  "prime-interior-solutions": createProductDetail({
    slug: "prime-interior-solutions",
    name: "Prime Interior Solutions",
    category: "Interior Design Business Website",
    tagline:
      "A business-oriented interior website for generating leads, displaying services and presenting completed design projects.",
    rating: "4.7",
    reviewCount: 43,
    purchases: 64,
    currentPrice: "₹11,999",
    oldPrice: "₹24,999",
    discount: "52% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/decorpot.jpg",
  }),
  
  "axis-architects": createProductDetail({
    slug: "axis-architects",
    name: "Axis Architects",
    category: "Architecture Firm Website",
    tagline:
      "A clean architecture website for studios that want to present projects, services, design philosophy and client enquiries.",
    rating: "4.7",
    reviewCount: 35,
    purchases: 49,
    currentPrice: "₹13,999",
    oldPrice: "₹30,999",
    discount: "55% OFF",
    priceRange: "Up to 25 pages",
    mainImage: "/images/templates/interior/modern-architect.jpg",
  }),

  "urban-arc-studio": createProductDetail({
    slug: "urban-arc-studio",
    name: "Urban Arc Studio",
    category: "Architecture Firm Website",
    tagline:
      "A modern architecture portfolio website for showcasing residential, commercial and urban design projects.",
    rating: "4.8",
    reviewCount: 44,
    purchases: 62,
    currentPrice: "₹16,999",
    oldPrice: "₹40,999",
    discount: "59% OFF",
    priceRange: "Up to 30 pages",
    mainImage: "/images/templates/interior/modern-architect.jpg",
  }),

  "form-space-architects": createProductDetail({
    slug: "form-space-architects",
    name: "Form & Space Architects",
    category: "Architecture Firm Website",
    tagline:
      "A premium architecture website for design firms that need a strong project showcase, service presentation and professional brand presence.",
    rating: "4.9",
    reviewCount: 52,
    purchases: 74,
    currentPrice: "₹18,999",
    oldPrice: "₹49,999",
    discount: "62% OFF",
    priceRange: "Up to 35 pages",
    mainImage: "/images/templates/interior/modern-architect.jpg",
  }),

  "studio-vertex": createProductDetail({
    slug: "studio-vertex",
    name: "Studio Vertex",
    category: "Architecture Firm Website",
    tagline:
      "A professional architecture website for studios, consultants and planning firms with project galleries and lead-generation sections.",
    rating: "4.7",
    reviewCount: 39,
    purchases: 55,
    currentPrice: "₹15,999",
    oldPrice: "₹36,999",
    discount: "57% OFF",
    priceRange: "Up to 30 pages",
    mainImage: "/images/templates/interior/modern-architect.jpg",
  }),

  "arc-and-interiors": createProductDetail({
    slug: "arc-and-interiors",
    name: "Arc & Interiors Studio",
    category: "Interior and Architecture Firm Website",
    tagline:
      "A combined architecture and interior website for firms that handle planning, design, execution and complete project delivery.",
    rating: "4.7",
    reviewCount: 37,
    purchases: 47,
    currentPrice: "₹14,999",
    oldPrice: "₹33,999",
    discount: "56% OFF",
    priceRange: "Up to 25 pages",
    mainImage: "/images/templates/interior/interior-architect.jpg",
  }),

  "buildspace-designs": createProductDetail({
    slug: "buildspace-designs",
    name: "BuildSpace Designs",
    category: "Interior and Architecture Firm Website",
    tagline:
      "A modern business website for architecture and interior firms showcasing projects, services, planning capabilities and client enquiries.",
    rating: "4.8",
    reviewCount: 45,
    purchases: 59,
    currentPrice: "₹16,999",
    oldPrice: "₹41,999",
    discount: "60% OFF",
    priceRange: "Up to 30 pages",
    mainImage: "/images/templates/interior/interior-architect.jpg",
  }),

  "studio-integrate": createProductDetail({
    slug: "studio-integrate",
    name: "Studio Integrate",
    category: "Interior and Architecture Firm Website",
    tagline:
      "A premium website for integrated design firms offering architecture, interiors, project management and turnkey execution.",
    rating: "4.9",
    reviewCount: 51,
    purchases: 68,
    currentPrice: "₹18,999",
    oldPrice: "₹50,999",
    discount: "63% OFF",
    priceRange: "Up to 35 pages",
    mainImage: "/images/templates/interior/interior-architect.jpg",
  }),

  "minimal-interior-portfolio": createProductDetail({
    slug: "minimal-interior-portfolio",
    name: "Minimal Interior Portfolio",
    category: "Interior Designer Portfolio Website",
    tagline:
      "A minimal portfolio website for independent interior designers who want to showcase projects, design style and client work clearly.",
    rating: "4.6",
    reviewCount: 28,
    purchases: 32,
    currentPrice: "₹8,999",
    oldPrice: "₹17,999",
    discount: "48% OFF",
    priceRange: "Up to 15 pages",
    mainImage: "/images/templates/interior/interior-portfolio.jpg",
  }),

  "creative-interior-showcase": createProductDetail({
    slug: "creative-interior-showcase",
    name: "Creative Interior Showcase",
    category: "Interior Designer Portfolio Website",
    tagline:
      "A visual-first interior portfolio website for designers who want to highlight completed spaces, concepts and design services.",
    rating: "4.7",
    reviewCount: 36,
    purchases: 46,
    currentPrice: "₹10,999",
    oldPrice: "₹23,999",
    discount: "54% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/interior-portfolio.jpg",
  }),

  "designer-portfolio-studio": createProductDetail({
    slug: "designer-portfolio-studio",
    name: "Designer Portfolio Studio",
    category: "Interior Designer Portfolio Website",
    tagline:
      "A professional portfolio website for interior designers with project galleries, service sections and direct client enquiry options.",
    rating: "4.8",
    reviewCount: 42,
    purchases: 53,
    currentPrice: "₹11,999",
    oldPrice: "₹27,999",
    discount: "57% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/interior-portfolio.jpg",
  }),

  "modern-architect-portfolio": createProductDetail({
    slug: "modern-architect-portfolio",
    name: "Modern Architect Portfolio",
    category: "Architect Portfolio Website",
    tagline:
      "A clean architect portfolio website for presenting concepts, completed projects, design philosophy and professional experience.",
    rating: "4.7",
    reviewCount: 31,
    purchases: 39,
    currentPrice: "₹12,999",
    oldPrice: "₹28,999",
    discount: "55% OFF",
    priceRange: "Up to 20 pages",
    mainImage: "/images/templates/interior/architect-portfolio.jpg",
  }),

  "premium-architect-showcase": createProductDetail({
    slug: "premium-architect-showcase",
    name: "Premium Architect Showcase",
    category: "Architect Portfolio Website",
    tagline:
      "A premium architecture portfolio for showcasing high-end residential, commercial and conceptual design work.",
    rating: "4.8",
    reviewCount: 43,
    purchases: 57,
    currentPrice: "₹16,999",
    oldPrice: "₹42,999",
    discount: "60% OFF",
    priceRange: "Up to 30 pages",
    mainImage: "/images/templates/interior/architect-portfolio.jpg",
  }),
};