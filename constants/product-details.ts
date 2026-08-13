
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

// HEALTHCARE
const healthcareSharedFeatures: ProductFeature[] = [
  {
    icon: "👨‍⚕️",
    title: "Doctor & Specialist Profiles",
    description:
      "Present doctors, specialists and healthcare professionals with qualifications and experience.",
    iconBackground: "#eef3ff",
  },
  {
    icon: "📅",
    title: "Appointment Booking",
    description:
      "Allow patients to submit appointment and consultation requests directly from the website.",
    iconBackground: "#e7f5ef",
  },
  {
    icon: "🩺",
    title: "Treatment Information",
    description:
      "Show medical treatments, procedures, services and specialties in a clear structured format.",
    iconBackground: "#fff7e6",
  },
  {
    icon: "📱",
    title: "Mobile Responsive",
    description:
      "Optimized for patients browsing from mobile phones, tablets and desktop devices.",
    iconBackground: "#f3e8ff",
  },
  {
    icon: "💬",
    title: "Patient Enquiry",
    description:
      "Generate enquiries through forms, WhatsApp and direct contact actions.",
    iconBackground: "#eaf1fd",
  },
  {
    icon: "🔍",
    title: "Healthcare SEO",
    description:
      "SEO-friendly structure for doctors, treatments, services and healthcare-related searches.",
    iconBackground: "#edfae8",
  },
];

const healthcareSharedPackageIncludes: PackageItem[] = [
  {
    title: "Home Page",
    description:
      "Healthcare business introduction, major services and appointment call-to-actions.",
  },
  {
    title: "About Us",
    description:
      "Present the organization, doctors, experience, mission and healthcare expertise.",
  },
  {
    title: "Doctors / Specialists",
    description:
      "Professional profiles for doctors, specialists and healthcare professionals.",
  },
  {
    title: "Treatments / Services",
    description:
      "Dedicated sections for important treatments, procedures and healthcare services.",
  },
  {
    title: "Appointment Booking",
    description:
      "Patient appointment and consultation request form.",
  },
  {
    title: "Patient Testimonials",
    description:
      "Display patient feedback and healthcare experiences.",
  },
  {
    title: "FAQ Section",
    description:
      "Answer common patient questions about appointments, treatments and services.",
  },
  {
    title: "Contact Page",
    description:
      "Address, phone numbers, map, WhatsApp and patient enquiry information.",
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
  isHealthcareProduct: boolean,
): ProductReview[] {
  if (isHealthcareProduct) {
    return [
      {
        id: `${productName}-review-1`,
        name: "Dr. Amit Sharma",
        initials: "AS",
        location: "Delhi",
        role: "Healthcare Professional",
        rating: 5,
        text: `${productName} has a professional healthcare layout and makes our doctors, services and appointment information easy for patients to understand.`,
        avatarBackground: "#1b4de4",
      },
      {
        id: `${productName}-review-2`,
        name: "Neha Verma",
        initials: "NV",
        location: "Noida",
        role: "Clinic Administrator",
        rating: 5,
        text:
          "The website works well on mobile and makes appointment enquiries much easier for patients.",
        avatarBackground: "#12855a",
      },
      {
        id: `${productName}-review-3`,
        name: "Rajesh Gupta",
        initials: "RG",
        location: "Gurugram",
        role: "Healthcare Business Owner",
        rating: 4,
        text:
          "The doctor profiles, treatment sections and enquiry structure give the website a professional healthcare presence.",
        avatarBackground: "#7c3aed",
      },
    ];
  }

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

  const isHealthcareProduct =
    input.category.includes("Hospital") ||
    input.category.includes("Dental") ||
    input.category.includes("Eye") ||
    input.category.includes("Cardiology") ||
    input.category.includes("IVF") ||
    input.category.includes("Doctor") ||
    input.category.includes("Diagnostic") ||
    input.category.includes("Medical Tourism");

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

    // features:
    //   input.customFeatures ?? sharedFeatures,
    features:
    input.customFeatures ??
    (isHealthcareProduct
      ? healthcareSharedFeatures
      : sharedFeatures),

    // packageIncludes:
    //   input.customPackageIncludes ??
    //   sharedPackageIncludes,
    packageIncludes:
    input.customPackageIncludes ??
    (isHealthcareProduct
      ? healthcareSharedPackageIncludes
      : sharedPackageIncludes),

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

    reviews: createReviews(
      input.name,
      isHealthcareProduct),
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

  // Healthcare Details
  "medicare-plus-hospital": createProductDetail({
  slug: "medicare-plus-hospital",

  name: "MediCare Plus Hospital",

  category: "Hospital Website",

  tagline:
    "A professional hospital website designed for multispeciality hospitals and healthcare organizations with doctor profiles, departments, appointment booking and patient enquiry features.",

  rating: "4.8",
  reviewCount: 45,
  purchases: 156,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👨‍⚕️",
      title: "Doctor Profiles",
      description:
        "Show doctors, specializations, experience and consultation information in dedicated profiles.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Hospital Departments",
      description:
        "Present cardiology, orthopedics, neurology and other hospital departments clearly.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to submit appointment requests directly through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Optimized for patients browsing the hospital website from mobile, tablet and desktop devices.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "Patient Enquiry",
      description:
        "Generate patient leads through enquiry forms, contact actions and WhatsApp integration.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Healthcare SEO",
      description:
        "SEO-friendly structure for hospital services, departments, doctors and treatment pages.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Hospital overview, major departments, doctors, facilities and appointment call-to-actions.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital history, infrastructure, accreditations and healthcare expertise.",
    },
    {
      title: "Departments",
      description:
        "Dedicated sections for hospital departments and medical specialties.",
    },
    {
      title: "Doctors",
      description:
        "Doctor listing with specialization, experience and professional information.",
    },
    {
      title: "Facilities",
      description:
        "Show emergency care, diagnostics, ICU, operation theatres and other hospital facilities.",
    },
    {
      title: "Appointment Booking",
      description:
        "Patient appointment request form connected to the hospital enquiry workflow.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient experiences and hospital reviews.",
    },
    {
      title: "Contact Page",
      description:
        "Hospital address, phone numbers, emergency contact, map and enquiry form.",
    },
  ],
}),

"citycare-hospital": createProductDetail({
  slug: "citycare-hospital",

  name: "CityCare Multispeciality Hospital",

  category: "Hospital Website",

  tagline:
    "A complete multispeciality hospital website for presenting departments, specialists, facilities, emergency services and online appointment options.",

  rating: "4.8",
  reviewCount: 39,
  purchases: 119,

  currentPrice: "₹17,999",
  oldPrice: "₹46,499",
  discount: "61% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Multispeciality Departments",
      description:
        "Present all major medical departments and specialties in a clear, structured format.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Directory",
      description:
        "Display doctors with specialization, experience, qualifications and consultation details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request appointments with selected departments or doctors.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🚑",
      title: "Emergency Information",
      description:
        "Highlight emergency numbers, ambulance support and 24/7 emergency services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "Patient Enquiry",
      description:
        "Capture enquiries through forms, WhatsApp and direct contact actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Healthcare SEO",
      description:
        "SEO-friendly pages for departments, treatments, doctors and healthcare services.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Hospital overview, departments, doctors, facilities and appointment call-to-actions.",
    },
    {
      title: "About Hospital",
      description:
        "Hospital profile, history, mission, infrastructure and accreditations.",
    },
    {
      title: "Departments",
      description:
        "Dedicated pages or sections for every medical specialty.",
    },
    {
      title: "Doctor Directory",
      description:
        "Professional doctor listings with specialization and experience.",
    },
    {
      title: "Facilities",
      description:
        "Show ICU, diagnostics, pharmacy, emergency care and hospital infrastructure.",
    },
    {
      title: "Emergency Services",
      description:
        "Emergency contact details, ambulance information and urgent-care support.",
    },
    {
      title: "Appointment Booking",
      description:
        "Patient appointment form for selected doctors or departments.",
    },
    {
      title: "Contact Page",
      description:
        "Hospital location, map, phone numbers, email and patient enquiry form.",
    },
  ],
}),

"lifeline-super-speciality-hospital": createProductDetail({
  slug: "lifeline-super-speciality-hospital",

  name: "Lifeline Super Speciality Hospital",

  category: "Hospital Website",

  tagline:
    "A premium super-speciality hospital website for showcasing departments, doctors, advanced treatments, emergency care and patient services.",

  rating: "4.8",
  reviewCount: 42,
  purchases: 143,

  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Speciality Departments",
      description:
        "Showcase cardiology, neurology, oncology, orthopedics and other speciality departments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Specialist Doctors",
      description:
        "Display specialist doctors with qualifications, experience and consultation information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request appointments with doctors or selected departments.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🚑",
      title: "Emergency Services",
      description:
        "Prominently display ambulance, emergency and critical-care contact information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🩺",
      title: "Treatment Information",
      description:
        "Create dedicated sections for procedures, treatments and speciality services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Healthcare SEO",
      description:
        "Search-engine-friendly structure for hospital departments, doctors and treatment pages.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Premium hospital homepage with departments, specialists, facilities and appointment actions.",
    },
    {
      title: "About Hospital",
      description:
        "Hospital background, leadership, accreditations, mission and infrastructure.",
    },
    {
      title: "Specialities",
      description:
        "Dedicated sections for major medical specialties and hospital departments.",
    },
    {
      title: "Doctors",
      description:
        "Specialist doctor profiles with qualifications, experience and expertise.",
    },
    {
      title: "Treatments",
      description:
        "Pages explaining important procedures, surgeries and healthcare services.",
    },
    {
      title: "Facilities",
      description:
        "Show ICU, diagnostics, operation theatres, pharmacy and advanced hospital infrastructure.",
    },
    {
      title: "Appointment Booking",
      description:
        "Patient appointment request form with doctor and department selection.",
    },
    {
      title: "Contact & Emergency",
      description:
        "Hospital address, emergency numbers, ambulance support, map and enquiry information.",
    },
  ],
}),

"apollo-care-hospital": createProductDetail({
  slug: "apollo-care-hospital",

  name: "Apollo Care Hospital",

  category: "Hospital Website",

  tagline:
    "A modern hospital website for presenting departments, doctors, patient services, treatment information and online appointment options in a clean professional layout.",

  rating: "4.7",
  reviewCount: 37,
  purchases: 128,

  currentPrice: "₹16,999",
  oldPrice: "₹41,999",
  discount: "59% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Department Showcase",
      description:
        "Present hospital departments and medical specialties in an organized structure.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Profiles",
      description:
        "Display doctors with specialization, qualifications, experience and availability.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Enable patients to send appointment requests directly from the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Treatment Pages",
      description:
        "Explain hospital treatments, procedures and major healthcare services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "Patient Enquiry",
      description:
        "Collect patient enquiries through forms, phone actions and WhatsApp integration.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "SEO Friendly",
      description:
        "Optimized page structure for doctors, departments, treatments and hospital services.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Hospital introduction, services, doctors, departments and appointment call-to-actions.",
    },
    {
      title: "About Hospital",
      description:
        "Hospital profile, vision, mission, infrastructure and healthcare experience.",
    },
    {
      title: "Departments",
      description:
        "Dedicated sections for major hospital departments and specialties.",
    },
    {
      title: "Doctors",
      description:
        "Professional doctor profiles with specialization and experience.",
    },
    {
      title: "Treatments",
      description:
        "Pages describing major treatments, procedures and medical services.",
    },
    {
      title: "Patient Services",
      description:
        "Information about admission, insurance, emergency support and patient facilities.",
    },
    {
      title: "Appointment Booking",
      description:
        "Appointment form for patients to choose a department or doctor.",
    },
    {
      title: "Contact Page",
      description:
        "Hospital address, phone numbers, map, WhatsApp and enquiry details.",
    },
  ],
}),

"greenfield-hospital": createProductDetail({
  slug: "greenfield-hospital",

  name: "Greenfield Hospital",

  category: "Hospital Website",

  tagline:
    "A clean healthcare website for hospitals and clinics that need to present doctors, emergency services, departments and patient appointment options professionally.",

  rating: "4.7",
  reviewCount: 34,
  purchases: 96,

  currentPrice: "₹15,999",
  oldPrice: "₹37,999",
  discount: "58% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Hospital Departments",
      description:
        "Organize and display all major medical departments and healthcare services clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Directory",
      description:
        "Show doctor profiles with specialization, experience and consultation information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request appointments with doctors and hospital departments.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🚑",
      title: "Emergency Services",
      description:
        "Highlight emergency contact details, ambulance support and urgent-care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Show patient reviews and healthcare experiences to improve trust.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Provide a smooth experience across mobile phones, tablets and desktop devices.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Hospital introduction, services, departments, doctors and appointment actions.",
    },
    {
      title: "About Hospital",
      description:
        "Hospital history, mission, healthcare expertise and infrastructure information.",
    },
    {
      title: "Departments",
      description:
        "Structured pages for medical specialties and hospital services.",
    },
    {
      title: "Doctors",
      description:
        "Professional doctor profiles with qualifications and specialization.",
    },
    {
      title: "Emergency Services",
      description:
        "Emergency care details, ambulance contact and urgent-care information.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient feedback, experiences and hospital reviews.",
    },
    {
      title: "Appointment Booking",
      description:
        "Online patient appointment and enquiry form.",
    },
    {
      title: "Contact Page",
      description:
        "Hospital location, map, phone numbers, WhatsApp and enquiry information.",
    },
  ],
}),

"metro-health-hospital": createProductDetail({
  slug: "metro-health-hospital",

  name: "Metro Health Hospital",

  category: "Hospital Website",

  tagline:
    "A premium hospital website for multispeciality healthcare providers that need advanced department pages, doctor listings, appointment booking and patient lead management.",

  rating: "4.9",
  reviewCount: 48,
  purchases: 171,

  currentPrice: "₹19,999",
  oldPrice: "₹53,999",
  discount: "63% OFF",
  priceRange: "Up to 40 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Advanced Departments",
      description:
        "Present multiple hospital departments, specialties and treatment areas in a structured format.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Directory",
      description:
        "Display specialist doctors with qualifications, experience, specialties and consultation details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request appointments with selected doctors or departments.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📊",
      title: "CRM Ready",
      description:
        "Structure patient enquiries so they can be integrated with your CRM and follow-up workflow.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      description:
        "Prominently display emergency contacts, ambulance services and critical-care information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Healthcare SEO",
      description:
        "SEO-friendly pages for doctors, departments, treatments and hospital services.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Premium hospital homepage with departments, doctors, facilities and appointment actions.",
    },
    {
      title: "About Hospital",
      description:
        "Hospital profile, infrastructure, accreditations, mission and healthcare expertise.",
    },
    {
      title: "Departments",
      description:
        "Dedicated pages for major medical specialties and departments.",
    },
    {
      title: "Doctor Directory",
      description:
        "Structured specialist listings with doctor profile information.",
    },
    {
      title: "Treatments",
      description:
        "Detailed pages for important treatments, procedures and medical services.",
    },
    {
      title: "Patient Services",
      description:
        "Information about admission, insurance, diagnostics and patient support.",
    },
    {
      title: "Appointment & CRM",
      description:
        "Appointment and enquiry workflow ready for CRM integration.",
    },
    {
      title: "Contact & Emergency",
      description:
        "Hospital location, emergency numbers, map, WhatsApp and enquiry details.",
    },
  ],
}),

"smilecare-dental": createProductDetail({
  slug: "smilecare-dental",

  name: "SmileCare Dental Studio",

  category: "Dental Clinic Website",

  tagline:
    "A modern dental clinic website for dentists and dental hospitals with treatment pages, doctor profiles, appointment booking and patient enquiry features.",

  rating: "4.7",
  reviewCount: 33,
  purchases: 98,

  currentPrice: "₹9,999",
  oldPrice: "₹21,999",
  discount: "55% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🦷",
      title: "Dental Treatments",
      description:
        "Show treatments such as implants, root canal, braces, whitening and cosmetic dentistry.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist Profiles",
      description:
        "Present dentists with specialization, experience, qualifications and consultation details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request dental appointments directly from the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "Before & After Gallery",
      description:
        "Show dental treatment results and smile transformation images professionally.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "Patient Enquiry",
      description:
        "Capture enquiries through contact forms, phone actions and WhatsApp integration.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Dental SEO",
      description:
        "SEO-friendly pages for dental services, treatments and dentist profiles.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Dental clinic introduction, treatments, dentists and appointment call-to-actions.",
    },
    {
      title: "About Clinic",
      description:
        "Clinic background, technology, experience and dental care approach.",
    },
    {
      title: "Dental Treatments",
      description:
        "Dedicated pages for major dental procedures and services.",
    },
    {
      title: "Dentist Profiles",
      description:
        "Professional dentist profiles with specialization and experience.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Showcase treatment outcomes and smile transformations.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient feedback and dental treatment experiences.",
    },
    {
      title: "Appointment Booking",
      description:
        "Online dental appointment request form.",
    },
    {
      title: "Contact Page",
      description:
        "Clinic address, map, phone number, WhatsApp and enquiry details.",
    },
  ],
}),

"bright-smile-dental": createProductDetail({
  slug: "bright-smile-dental",

  name: "Bright Smile Dental Hospital",

  category: "Dental Clinic Website",

  tagline:
    "A professional dental hospital website for clinics and dental centers that need treatment pages, dentist profiles, appointment booking and patient communication features.",

  rating: "4.7",
  reviewCount: 29,
  purchases: 72,

  currentPrice: "₹11,999",
  oldPrice: "₹27,999",
  discount: "57% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🦷",
      title: "Dental Treatment Pages",
      description:
        "Present implants, braces, root canal, crowns, whitening and other dental treatments clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist Profiles",
      description:
        "Show dentists with specialization, qualifications, experience and consultation information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to request appointments with dentists directly from the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "Before & After Gallery",
      description:
        "Show smile transformations and treatment results in a professional gallery.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Enable patients to contact the clinic quickly through WhatsApp and enquiry forms.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Optimized for patients browsing from smartphones, tablets and desktop devices.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Dental hospital introduction, treatments, dentists and appointment call-to-actions.",
    },
    {
      title: "About Clinic",
      description:
        "Clinic background, dental technology, expertise and patient-care approach.",
    },
    {
      title: "Dental Treatments",
      description:
        "Dedicated sections for major dental treatments and procedures.",
    },
    {
      title: "Dentist Profiles",
      description:
        "Professional dentist profiles with specialization and experience.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Display smile transformations and dental treatment outcomes.",
    },
    {
      title: "Patient Reviews",
      description:
        "Show patient testimonials and dental treatment experiences.",
    },
    {
      title: "Appointment Booking",
      description:
        "Online appointment and dental consultation request form.",
    },
    {
      title: "Contact Page",
      description:
        "Clinic address, map, phone, WhatsApp and enquiry information.",
    },
  ],
}),

"dental-care-plus": createProductDetail({
  slug: "dental-care-plus",

  name: "Dental Care Plus",

  category: "Dental Clinic Website",

  tagline:
    "A clean and professional dental clinic website for showcasing treatments, dentists, appointment booking and patient communication.",

  rating: "4.7",
  reviewCount: 26,
  purchases: 67,

  currentPrice: "₹10,999",
  oldPrice: "₹24,499",
  discount: "55% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🦷",
      title: "Dental Services",
      description:
        "Present implants, root canal, braces, whitening and other dental treatments clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist Profiles",
      description:
        "Display dentists with specialization, qualifications and professional experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description:
        "Allow patients to send appointment requests directly through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Give patients a quick way to contact the clinic through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Reviews",
      description:
        "Display testimonials and patient experiences to improve trust.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Dental SEO",
      description:
        "SEO-friendly structure for treatment pages, dentists and local clinic searches.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic overview, treatments, dentists and appointment actions.",
    },
    {
      title: "About Clinic",
      description:
        "Present clinic experience, technology and patient-care approach.",
    },
    {
      title: "Treatments",
      description:
        "Dedicated sections for important dental treatments and procedures.",
    },
    {
      title: "Dentist Profiles",
      description:
        "Professional profiles for dentists and specialists.",
    },
    {
      title: "Patient Reviews",
      description:
        "Display testimonials and patient treatment experiences.",
    },
    {
      title: "Appointment Booking",
      description:
        "Online appointment and consultation request form.",
    },
    {
      title: "WhatsApp Contact",
      description:
        "Quick patient communication through WhatsApp.",
    },
    {
      title: "Contact Page",
      description:
        "Clinic address, map, phone number and enquiry form.",
    },
  ],
}),

// ============================================================
// DENTAL CLINIC
// ============================================================

"perfect-smile-dental": createProductDetail({
  slug: "perfect-smile-dental",
  name: "Perfect Smile Dental Clinic",
  category: "Dental Clinic Website",
  tagline:
    "A premium dental clinic website for dentists offering cosmetic dentistry, implants, orthodontics and general dental care.",
  rating: "4.8",
  reviewCount: 38,
  purchases: 104,
  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"smile-point-dental": createProductDetail({
  slug: "smile-point-dental",
  name: "Smile Point Dental Center",
  category: "Dental Clinic Website",
  tagline:
    "A simple professional dental website for clinics that need dentist profiles, treatment information and appointment enquiries.",
  rating: "4.6",
  reviewCount: 24,
  purchases: 54,
  currentPrice: "₹8,999",
  oldPrice: "₹17,999",
  discount: "50% OFF",
  priceRange: "Up to 15 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// EYE HOSPITAL
// ============================================================

"visionpoint-eye-clinic": createProductDetail({
  slug: "visionpoint-eye-clinic",
  name: "VisionPoint Eye Clinic",
  category: "Eye Hospital Website",
  tagline:
    "A professional eye-care website for ophthalmologists and eye hospitals offering consultations, surgery and vision-care services.",
  rating: "4.6",
  reviewCount: 28,
  purchases: 76,
  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"vision-eye-care": createProductDetail({
  slug: "vision-eye-care",
  name: "Vision Eye Care Center",
  category: "Eye Hospital Website",
  tagline:
    "A modern eye hospital website for presenting specialists, treatments, diagnostic services and appointment booking.",
  rating: "4.8",
  reviewCount: 34,
  purchases: 88,
  currentPrice: "₹13,999",
  oldPrice: "₹33,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"clearvision-eye-hospital": createProductDetail({
  slug: "clearvision-eye-hospital",
  name: "ClearVision Eye Hospital",
  category: "Eye Hospital Website",
  tagline:
    "A premium ophthalmology website for hospitals providing cataract, retina, LASIK and comprehensive eye-care services.",
  rating: "4.8",
  reviewCount: 37,
  purchases: 93,
  currentPrice: "₹14,999",
  oldPrice: "₹36,999",
  discount: "59% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"advanced-eye-centre": createProductDetail({
  slug: "advanced-eye-centre",
  name: "Advanced Eye Centre",
  category: "Eye Hospital Website",
  tagline:
    "A clean ophthalmology website for eye specialists, treatment centers and diagnostic eye-care clinics.",
  rating: "4.7",
  reviewCount: 26,
  purchases: 69,
  currentPrice: "₹11,999",
  oldPrice: "₹26,999",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// CARDIOLOGY
// ============================================================

"heartcare-cardiology": createProductDetail({
  slug: "heartcare-cardiology",
  name: "HeartCare Cardiology Center",
  category: "Cardiology Website",
  tagline:
    "A specialist cardiology website for heart hospitals and cardiac clinics with cardiologist profiles, treatments and appointment booking.",
  rating: "4.8",
  reviewCount: 35,
  purchases: 84,
  currentPrice: "₹15,999",
  oldPrice: "₹39,999",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",
  mainImage: "/images/templates.jpg",
}),

"cardio-life-heart-centre": createProductDetail({
  slug: "cardio-life-heart-centre",
  name: "CardioLife Heart Centre",
  category: "Cardiology Website",
  tagline:
    "A professional heart-care website for cardiologists, cardiac hospitals and advanced cardiovascular treatment centers.",
  rating: "4.8",
  reviewCount: 38,
  purchases: 92,
  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",
  mainImage: "/images/templates.jpg",
}),

"heart-first-cardiac-clinic": createProductDetail({
  slug: "heart-first-cardiac-clinic",
  name: "Heart First Cardiac Clinic",
  category: "Cardiology Website",
  tagline:
    "A focused cardiology clinic website for consultations, cardiac diagnostics, treatments and patient appointments.",
  rating: "4.7",
  reviewCount: 30,
  purchases: 73,
  currentPrice: "₹13,999",
  oldPrice: "₹32,499",
  discount: "57% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"pulse-heart-institute": createProductDetail({
  slug: "pulse-heart-institute",
  name: "Pulse Heart Institute",
  category: "Cardiology Website",
  tagline:
    "A premium cardiac institute website for showcasing specialists, advanced treatments, facilities and patient-care programs.",
  rating: "4.9",
  reviewCount: 46,
  purchases: 116,
  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// IVF CENTER
// ============================================================

"hope-ivf-center": createProductDetail({
  slug: "hope-ivf-center",
  name: "Hope IVF Center",
  category: "IVF Center Website",
  tagline:
    "A professional fertility clinic website for IVF centers offering treatment information, specialist profiles and patient enquiries.",
  rating: "4.8",
  reviewCount: 34,
  purchases: 86,
  currentPrice: "₹14,999",
  oldPrice: "₹35,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"fertility-care-ivf": createProductDetail({
  slug: "fertility-care-ivf",
  name: "Fertility Care IVF",
  category: "IVF Center Website",
  tagline:
    "A modern IVF website for fertility specialists with treatment pages, success stories and consultation booking.",
  rating: "4.8",
  reviewCount: 41,
  purchases: 108,
  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",
  mainImage: "/images/templates.jpg",
}),

"motherhood-fertility-center": createProductDetail({
  slug: "motherhood-fertility-center",
  name: "Motherhood Fertility Center",
  category: "IVF Center Website",
  tagline:
    "A premium fertility center website for IVF, IUI and reproductive-care services with international patient support.",
  rating: "4.9",
  reviewCount: 47,
  purchases: 121,
  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",
  mainImage: "/images/templates.jpg",
}),

"newlife-ivf-clinic": createProductDetail({
  slug: "newlife-ivf-clinic",
  name: "NewLife IVF Clinic",
  category: "IVF Center Website",
  tagline:
    "A clean fertility clinic website for presenting IVF treatments, fertility specialists, testimonials and consultations.",
  rating: "4.7",
  reviewCount: 27,
  purchases: 64,
  currentPrice: "₹12,999",
  oldPrice: "₹29,999",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// DOCTOR
// ============================================================

"dr-healthcare-profile": createProductDetail({
  slug: "dr-healthcare-profile",
  name: "Dr. Healthcare Profile",
  category: "Doctor Portfolio Website",
  tagline:
    "A professional personal website for doctors who want to showcase their profile, treatments, expertise and appointment information.",
  rating: "4.6",
  reviewCount: 24,
  purchases: 61,
  currentPrice: "₹7,999",
  oldPrice: "₹15,999",
  discount: "50% OFF",
  priceRange: "Up to 12 pages",
  mainImage: "/images/templates.jpg",
}),

"dr-arjun-clinic": createProductDetail({
  slug: "dr-arjun-clinic",
  name: "Dr. Arjun Clinic",
  category: "Doctor Website",
  tagline:
    "A clean doctor clinic website for presenting medical expertise, consultation services and online appointment options.",
  rating: "4.6",
  reviewCount: 22,
  purchases: 58,
  currentPrice: "₹8,999",
  oldPrice: "₹18,999",
  discount: "52% OFF",
  priceRange: "Up to 15 pages",
  mainImage: "/images/templates.jpg",
}),

"specialist-doctor-profile": createProductDetail({
  slug: "specialist-doctor-profile",
  name: "Specialist Doctor Profile",
  category: "Doctor Portfolio Website",
  tagline:
    "A specialist doctor website for showcasing qualifications, treatments, publications, experience and patient consultations.",
  rating: "4.7",
  reviewCount: 29,
  purchases: 74,
  currentPrice: "₹10,999",
  oldPrice: "₹24,499",
  discount: "55% OFF",
  priceRange: "Up to 20 pages",
  mainImage: "/images/templates.jpg",
}),

"premium-doctor-portfolio": createProductDetail({
  slug: "premium-doctor-portfolio",
  name: "Premium Doctor Portfolio",
  category: "Doctor Portfolio Website",
  tagline:
    "A premium personal brand website for established doctors, surgeons and healthcare specialists.",
  rating: "4.8",
  reviewCount: 36,
  purchases: 91,
  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// DIAGNOSTIC CENTER
// ============================================================

"healthscan-diagnostics": createProductDetail({
  slug: "healthscan-diagnostics",
  name: "HealthScan Diagnostic Center",
  category: "Diagnostic Center Website",
  tagline:
    "A diagnostic center website for presenting laboratory tests, health packages, sample collection and patient enquiries.",
  rating: "4.7",
  reviewCount: 31,
  purchases: 82,
  currentPrice: "₹11,999",
  oldPrice: "₹27,499",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",
  mainImage: "/images/templates.jpg",
}),

"prime-diagnostics": createProductDetail({
  slug: "prime-diagnostics",
  name: "Prime Diagnostics",
  category: "Diagnostic Center Website",
  tagline:
    "A modern pathology and diagnostic website for lab tests, imaging services, health packages and home sample collection.",
  rating: "4.8",
  reviewCount: 39,
  purchases: 105,
  currentPrice: "₹13,999",
  oldPrice: "₹33,499",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",
  mainImage: "/images/templates.jpg",
}),

"medilab-diagnostic-center": createProductDetail({
  slug: "medilab-diagnostic-center",
  name: "MediLab Diagnostic Center",
  category: "Diagnostic Center Website",
  tagline:
    "A practical diagnostic lab website for blood tests, pathology, radiology and online booking services.",
  rating: "4.6",
  reviewCount: 25,
  purchases: 66,
  currentPrice: "₹9,999",
  oldPrice: "₹21,999",
  discount: "54% OFF",
  priceRange: "Up to 18 pages",
  mainImage: "/images/templates.jpg",
}),

"accurate-diagnostics": createProductDetail({
  slug: "accurate-diagnostics",
  name: "Accurate Diagnostics",
  category: "Diagnostic Center Website",
  tagline:
    "A professional diagnostic website for health packages, imaging, laboratory services and report-access information.",
  rating: "4.8",
  reviewCount: 35,
  purchases: 91,
  currentPrice: "₹14,999",
  oldPrice: "₹36,999",
  discount: "59% OFF",
  priceRange: "Up to 28 pages",
  mainImage: "/images/templates.jpg",
}),

"advanced-diagnostic-lab": createProductDetail({
  slug: "advanced-diagnostic-lab",
  name: "Advanced Diagnostic Lab",
  category: "Diagnostic Center Website",
  tagline:
    "A premium diagnostics website for advanced laboratory services, radiology, health packages and lead management.",
  rating: "4.9",
  reviewCount: 44,
  purchases: 118,
  currentPrice: "₹16,999",
  oldPrice: "₹43,999",
  discount: "61% OFF",
  priceRange: "Up to 30 pages",
  mainImage: "/images/templates.jpg",
}),


// ============================================================
// MEDICAL TOURISM
// ============================================================

"medtour-global": createProductDetail({
  slug: "medtour-global",
  name: "MedTour Global",
  category: "Medical Tourism Website",
  tagline:
    "A professional medical tourism website connecting international patients with hospitals, doctors and treatment services in India.",
  rating: "4.9",
  reviewCount: 52,
  purchases: 134,
  currentPrice: "₹19,999",
  oldPrice: "₹52,999",
  discount: "62% OFF",
  priceRange: "Up to 40 pages",
  mainImage: "/images/templates.jpg",
}),

"india-medical-journey": createProductDetail({
  slug: "india-medical-journey",
  name: "India Medical Journey",
  category: "Medical Tourism Website",
  tagline:
    "A medical travel website for international patients requiring hospital discovery, treatment enquiries, visa assistance and travel support.",
  rating: "4.8",
  reviewCount: 38,
  purchases: 97,
  currentPrice: "₹21,999",
  oldPrice: "₹59,499",
  discount: "63% OFF",
  priceRange: "Up to 40 pages",
  mainImage: "/images/templates.jpg",
}),

"global-health-travel": createProductDetail({
  slug: "global-health-travel",
  name: "Global Health Travel",
  category: "Medical Tourism Website",
  tagline:
    "A premium international healthcare platform for treatment packages, partner hospitals, medical visas and patient travel coordination.",
  rating: "4.9",
  reviewCount: 49,
  purchases: 126,
  currentPrice: "₹24,999",
  oldPrice: "₹71,499",
  discount: "65% OFF",
  priceRange: "Up to 45 pages",
  mainImage: "/images/templates.jpg",
}),

"medassist-india": createProductDetail({
  slug: "medassist-india",
  name: "MedAssist India",
  category: "Medical Tourism Website",
  tagline:
    "A healthcare assistance website for overseas patients seeking treatment planning, hospitals, medical visa support and patient coordination.",
  rating: "4.8",
  reviewCount: 34,
  purchases: 89,
  currentPrice: "₹18,999",
  oldPrice: "₹48,999",
  discount: "61% OFF",
  priceRange: "Up to 35 pages",
  mainImage: "/images/templates.jpg",
}),
};