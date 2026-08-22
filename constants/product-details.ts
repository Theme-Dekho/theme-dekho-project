
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

  // customFeatures?: ProductFeature[];
  // customPackageIncludes?: PackageItem[];
  customFeatures?: ProductFeature[];
  customPackageIncludes?: PackageItem[];
  customAddons?: ProductAddon[];
  customSpecifications?: ProductSpecification[];
  customReviews?: ProductReview[];
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

    // addons: sharedAddons,
    addons: input.customAddons ?? sharedAddons,

    specifications: 
      input.customSpecifications ?? [
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

    // reviews: createReviews(
    //   input.name,
    //   isHealthcareProduct),
    reviews: input.customReviews ??
    createReviews(
      input.name,
      isHealthcareProduct
    ),
  };
}

export const productDetails: Record<
  string,
  ProductDetail
> = {
  // decorpot: createProductDetail({
  //   slug: "decorpot",
  //   name: "Decorpot",
  //   category: "Interior Design Business Website",

  //   tagline:
  //     "A premium interior design website for modern studios, residential designers and turnkey interior firms.",

  //   rating: "4.8",
  //   reviewCount: 52,
  //   purchases: 98,

  //   currentPrice: "₹14,999",
  //   oldPrice: "₹46,999",
  //   discount: "68% OFF",
  //   priceRange: "Up to 30 pages",

  //   mainImage:
  //     "/images/templates/interior/decorpot.jpg",
  // }),

  decorpot: createProductDetail({
  slug: "decorpot",

  name: "Decorpot",

  category: "Interior Design Business Website",

  tagline:
    "A premium interior design studio website for residential, commercial and turnkey interior businesses that need a strong project portfolio, design-style presentation and consultation enquiry system.",

  rating: "4.8",
  reviewCount: 52,
  purchases: 98,

  currentPrice: "₹14,999",
  oldPrice: "₹46,999",
  discount: "68% OFF",
  priceRange: "Up to 30 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "✨",
      title: "Premium Interior Design Presentation",
      description:
        "Modern, visually attractive website presentation designed specifically for professional interior design studios.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏢",
      title: "Studio Profile",
      description:
        "Present studio experience, specialization, design approach, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Project Portfolio",
      description:
        "Show completed, ongoing and featured interior projects in a professional portfolio format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏠",
      title: "Residential Interior Projects",
      description:
        "Showcase homes, apartments, villas and other residential interior projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏬",
      title: "Commercial Interior Projects",
      description:
        "Present office, retail, showroom and other commercial interior projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Portfolio",
      description:
        "Showcase modular kitchen designs and completed kitchen projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project type, location, area, design style, images, key features and project descriptions.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔄",
      title: "Before & After Gallery",
      description:
        "Show renovation and transformation projects where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛋️",
      title: "Interior Services Showcase",
      description:
        "Present the studio's available interior design services clearly.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit interior design consultation and project enquiries.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences to build trust.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow visitors to directly contact the interior design studio through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Help visitors locate the studio or office through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Interior Design Blog",
      description:
        "Publish design trends, renovation tips, modular kitchen ideas, home décor and other interior content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Studio introduction, featured projects, services, design styles, testimonials and consultation CTA.",
    },
    {
      title: "About Studio",
      description:
        "Present studio experience, philosophy, expertise and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of residential, commercial and other interior services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Professional portfolio for completed and ongoing interior projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present home, apartment, villa and residential-space projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom and commercial-space projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show modular kitchen designs and completed kitchen projects.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client feedback and project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about design process, timelines, costing, materials and projects.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends, renovation tips and project-related content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow visitors to submit consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "decorpot-ai-chatbot",
      icon: "🤖",
      name: "AI Interior Design Assistant",
      description:
        "Answer common questions about interior services, project process, design styles, studio timings, location and general project enquiries.",
      price: "Add-On",
    },
    {
      id: "decorpot-crm",
      icon: "📊",
      name: "Interior Project CRM",
      description:
        "Connect website project enquiries with CRM workflows for lead capture, management, tracking and follow-up.",
      price: "Add-On",
    },
    {
      id: "decorpot-cost-calculator",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Provide estimated interior costs based on property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "decorpot-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "decorpot-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "gopesh-interior": createProductDetail({
  //   slug: "gopesh-interior",

  //   name: "Gopesh Interior Furniture House",

  //   category:
  //     "Interior and Furniture Business Website",

  //   tagline:
  //     "A complete business website for interior contractors, furniture manufacturers and home-furnishing companies.",

  //   rating: "4.5",
  //   reviewCount: 31,
  //   purchases: 33,

  //   currentPrice: "₹9,999",
  //   oldPrice: "₹22,000",
  //   discount: "55% OFF",
  //   priceRange: "Up to 15 pages",

  //   mainImage:
  //     "/images/templates/interior/gopesh-interior.jpg",
  // }),

  "gopesh-interior": createProductDetail({
  slug: "gopesh-interior",

  name: "Gopesh Interior Furniture House",

  category:
    "Interior and Furniture Business Website",

  tagline:
    "A complete interior and furniture business website for modular kitchen companies, wardrobe designers, custom furniture manufacturers and home-interior businesses.",

  rating: "4.5",
  reviewCount: 31,
  purchases: 33,

  currentPrice: "₹9,999",
  oldPrice: "₹22,000",
  discount: "55% OFF",
  priceRange: "Up to 15 pages",

  mainImage:
    "/images/templates/interior/gopesh-interior.jpg",

  customFeatures: [
    {
      icon: "🍽️",
      title: "Modular Kitchen Showcase",
      description:
        "Present different modular kitchen layouts, finishes, designs and completed kitchen projects professionally.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🚪",
      title: "Wardrobe Showcase",
      description:
        "Show sliding, hinged, walk-in and customized wardrobe designs.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🪵",
      title: "Custom Furniture Categories",
      description:
        "Present TV units, crockery units, bedroom storage, kitchen cabinets and other custom furniture.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏢",
      title: "Business & Brand Profile",
      description:
        "Show company experience, expertise, design approach and manufacturing or installation capabilities.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🖼️",
      title: "Furniture Project Portfolio",
      description:
        "Show completed kitchen, wardrobe and furniture projects in a professional portfolio format.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project type, location, area, design style, materials, finishes, images and key features.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable kitchen and furniture styles.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🧱",
      title: "Materials & Finishes",
      description:
        "Present available materials, finishes, colours, textures and hardware options.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔄",
      title: "Before & After Gallery",
      description:
        "Show kitchen renovations, wardrobe transformations and other applicable space makeovers.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛠️",
      title: "Design, Manufacturing & Installation",
      description:
        "Present design consultation, manufacturing, installation and other applicable services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📏",
      title: "Site Visit & Measurement Enquiry",
      description:
        "Allow customers to request a site visit, home visit or project measurement.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Project Consultation Enquiry",
      description:
        "Allow customers to request consultation for kitchen, wardrobe or custom-furniture projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Customer Testimonials",
      description:
        "Display customer reviews and project experiences to build trust.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow customers to directly contact the furniture business through WhatsApp.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📍",
      title: "Showroom Location",
      description:
        "Help customers locate the showroom, studio or office through Google Maps.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Featured kitchens, wardrobes, custom furniture, services, portfolio and consultation CTA.",
    },
    {
      title: "About Business",
      description:
        "Present company experience, expertise, design approach and professional information.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show different kitchen layouts, designs, finishes and completed projects.",
    },
    {
      title: "Wardrobes",
      description:
        "Show wardrobe designs, storage solutions and customized options.",
    },
    {
      title: "Walk-in Wardrobe",
      description:
        "Present walk-in wardrobe designs and projects where applicable.",
    },
    {
      title: "Custom Furniture",
      description:
        "Show TV units, crockery units, storage solutions and other customized furniture.",
    },
    {
      title: "Project Portfolio",
      description:
        "Professional portfolio of completed kitchen, wardrobe and furniture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, style, images, materials, finishes and key features.",
    },
    {
      title: "Design Styles",
      description:
        "Present different kitchen, wardrobe and furniture design concepts.",
    },
    {
      title: "Materials & Finishes",
      description:
        "Show available materials, colours, textures, finishes and hardware options.",
    },
    {
      title: "Before & After",
      description:
        "Show applicable renovation and furniture transformation projects.",
    },
    {
      title: "Services",
      description:
        "Present consultation, manufacturing, installation and other applicable services.",
    },
    {
      title: "Customer Testimonials",
      description:
        "Display customer reviews and project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions related to kitchen, wardrobe, materials, installation, timelines and costing.",
    },
    {
      title: "Kitchen & Wardrobe Blog",
      description:
        "Publish design ideas, storage solutions, trends, materials and maintenance content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential customers to submit project consultation requests.",
    },
    {
      title: "Site Visit / Measurement Enquiry",
      description:
        "Allow customers to request site measurement or home visits.",
    },
    {
      title: "Contact & Showroom Location",
      description:
        "Phone, WhatsApp, email, business address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "gopesh-ai-chatbot",
      icon: "🤖",
      name: "AI Kitchen & Furniture Assistant",
      description:
        "Answer common questions about kitchen designs, wardrobe designs, materials, finishes, services, consultation and project process.",
      price: "Add-On",
    },
    {
      id: "gopesh-crm",
      icon: "📊",
      name: "Furniture Enquiry CRM",
      description:
        "Connect customer enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "gopesh-cost-calculator",
      icon: "🧮",
      name: "Interior / Kitchen Cost Calculator",
      description:
        "Estimate kitchen, wardrobe or furniture project costs using type, area, layout, material, finish and storage requirements.",
      price: "Add-On",
    },
    {
      id: "gopesh-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "gopesh-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior and Furniture Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Business / Brand Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product / Design Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "modern-architect-studio": createProductDetail({
  //   slug: "modern-architect-studio",

  //   name: "Modern Architect Studio",

  //   category: "Architecture Firm Website",

  //   tagline:
  //     "A premium architecture website for studios, consultants and firms that need a strong project-focused presentation.",

  //   rating: "4.9",
  //   reviewCount: 45,
  //   purchases: 67,

  //   currentPrice: "₹19,999",
  //   oldPrice: "₹51,000",
  //   discount: "61% OFF",
  //   priceRange: "Up to 40 pages",

  //   mainImage:
  //     "/images/templates/interior/modern-architect.jpg",
  // }),
   
   "modern-architect-studio": createProductDetail({
  slug: "modern-architect-studio",

  name: "Modern Architect Studio",

  category: "Architecture Firm Website",

  tagline:
    "A premium architecture firm website for studios and consultants that need a strong project portfolio, design philosophy, architectural drawings and professional consultation enquiry system.",

  rating: "4.9",
  reviewCount: 45,
  purchases: 67,

  currentPrice: "₹19,999",
  oldPrice: "₹51,000",
  discount: "61% OFF",
  priceRange: "Up to 40 pages",

  mainImage:
    "/images/templates/interior/modern-architect.jpg",

  customFeatures: [
    {
      icon: "🏛️",
      title: "Premium Architecture Design",
      description:
        "Modern and visually strong website presentation designed specifically for architects and architecture firms.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍💼",
      title: "Architect / Firm Profile",
      description:
        "Present firm experience, expertise, design philosophy, qualifications, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Architecture Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects in a professional portfolio format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential architecture projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Show offices, retail spaces, commercial buildings and other commercial architecture projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏨",
      title: "Institutional & Hospitality Projects",
      description:
        "Present schools, institutions, hotels, resorts and other applicable architecture projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Show project type, location, area, design concept, drawings, plans, key features and project status.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Present the firm's architectural vision, design principles and creative approach.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📏",
      title: "Drawings & Plans Showcase",
      description:
        "Show architectural drawings, floor plans, elevations, sections and design concepts where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present professional awards, recognitions and architectural achievements.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Architecture Consultation Enquiry",
      description:
        "Allow potential clients to submit architecture consultation and project enquiries.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences to build professional trust.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow visitors to directly contact the architect or firm through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Help clients locate the architecture studio or office through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Architecture Blog",
      description:
        "Publish architecture trends, design ideas, planning insights and project stories.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Firm introduction, featured architecture projects, services, design philosophy, testimonials and consultation CTA.",
    },
    {
      title: "About Architect / Firm",
      description:
        "Present firm experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of design, planning, consultation and related architecture services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Professional portfolio for completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design concept, images, plans, features and status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and other commercial projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision and design approach.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections, architectural drawings and concepts where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Show high-quality architectural photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards, recognition and achievements.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about architecture services, process, planning, consultation and timelines.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, planning, design and construction-related insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit architecture consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "modern-architect-ai",
      icon: "🤖",
      name: "AI Architecture Assistant",
      description:
        "Answer common questions about architecture services, project types, design process, consultation information, studio timings and location.",
      price: "Add-On",
    },
    {
      id: "modern-architect-crm",
      icon: "📊",
      name: "Architecture Project CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "modern-architect-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Provide estimated project costs based on property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "modern-architect-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "modern-architect-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect / Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Architecture Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "interior-portfolio-pro": createProductDetail({
  //   slug: "interior-portfolio-pro",

  //   name: "Interior Portfolio Pro",

  //   category: "Interior Designer Portfolio",

  //   tagline:
  //     "A visual portfolio website for independent interior designers who want to showcase their work and attract new clients.",

  //   rating: "4.7",
  //   reviewCount: 36,
  //   purchases: 41,

  //   currentPrice: "₹12,999",
  //   oldPrice: "₹30,999",
  //   discount: "58% OFF",
  //   priceRange: "Up to 20 pages",

  //   mainImage:
  //     "/images/templates/interior/interior-portfolio.jpg",
  // }),

  "interior-portfolio-pro": createProductDetail({
  slug: "interior-portfolio-pro",

  name: "Interior Portfolio Pro",

  category: "Interior Designer Portfolio",

  tagline:
    "A visual portfolio website for independent interior designers who want to showcase residential and commercial projects, design styles, transformations and professional consultation services.",

  rating: "4.7",
  reviewCount: 36,
  purchases: 41,

  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/interior-portfolio.jpg",

  customFeatures: [
    {
      icon: "🎨",
      title: "Designer Personal Brand",
      description:
        "Present the designer's experience, specialization, design philosophy, expertise and professional information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Visual Project Portfolio",
      description:
        "Show completed, ongoing and featured interior projects through a strong visual portfolio.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏠",
      title: "Residential Interior Portfolio",
      description:
        "Showcase homes, apartments, villas and other residential interior projects.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏢",
      title: "Commercial Interior Portfolio",
      description:
        "Present office, retail, showroom and other commercial interior projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Case Studies",
      description:
        "Present project overview, location, type, area, design style, images, key features and project description.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "✨",
      title: "Design Styles Showcase",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🔄",
      title: "Before & After Portfolio",
      description:
        "Show renovation and transformation projects where applicable.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📸",
      title: "High-Quality Project Gallery",
      description:
        "Display interior photography and project visuals in an attractive gallery format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Clearly present the designer's available interior design and consultation services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit consultation and interior-project enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and completed-project experiences.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the designer directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide an easy direct-call option for project and consultation enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Interior Design FAQ",
      description:
        "Answer common questions related to design process, project timelines, costing and materials.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends, renovation tips, home décor and project-related content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Portfolio Home Page",
      description:
        "Designer introduction, featured projects, services, design styles, testimonials and consultation CTA.",
    },
    {
      title: "About Designer",
      description:
        "Present experience, philosophy, expertise, specialization and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of the designer's available interior services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing projects in a professional visual portfolio.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, key features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Show homes, apartments, villas and residential interior projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Show offices, retail, showroom and other commercial interior projects.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, minimalist, luxury and other applicable design styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality interior photographs and project visuals.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and interior-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, costing, materials and timelines.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish interior trends, inspiration, renovation tips and design content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit consultation and project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and other professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "interior-portfolio-ai",
      icon: "🤖",
      name: "AI Interior Portfolio Assistant",
      description:
        "Answer questions about interior services, project process, design styles, consultation information and general project enquiries.",
      price: "Add-On",
    },
    {
      id: "interior-portfolio-crm",
      icon: "📊",
      name: "Designer Lead CRM",
      description:
        "Connect portfolio enquiries with CRM workflows for lead capture, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "interior-portfolio-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Provide estimated project costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "interior-portfolio-domain",
      icon: "🌐",
      name: "Personal Portfolio Domain",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "interior-portfolio-hosting",
      icon: "☁️",
      name: "Portfolio Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Designer Portfolio",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Designer Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Before & After Gallery",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "architect-portfolio": createProductDetail({
  //   slug: "architect-portfolio",

  //   name: "Architect Portfolio",

  //   category: "Architect Portfolio Website",

  //   tagline:
  //     "A professional architecture portfolio for presenting concepts, completed buildings, planning work and studio experience.",

  //   rating: "4.8",
  //   reviewCount: 49,
  //   purchases: 76,

  //   currentPrice: "₹15,999",
  //   oldPrice: "₹39,999",
  //   discount: "60% OFF",
  //   priceRange: "Up to 25 pages",

  //   mainImage:
  //     "/images/templates/interior/architect-portfolio.jpg",
  // }),

   "architect-portfolio": createProductDetail({
  slug: "architect-portfolio",

  name: "Architect Portfolio",

  category: "Architect Portfolio Website",

  tagline:
    "A professional architect portfolio website for showcasing design philosophy, residential and commercial projects, architectural drawings, concepts, achievements and consultation enquiries.",

  rating: "4.8",
  reviewCount: 49,
  purchases: 76,

  currentPrice: "₹15,999",
  oldPrice: "₹39,999",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage:
    "/images/templates/interior/architect-portfolio.jpg",

  customFeatures: [
    {
      icon: "👨‍💼",
      title: "Architect Personal Profile",
      description:
        "Present professional experience, expertise, qualifications, design philosophy, awards and architectural specialization.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Architecture Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects in a professional visual portfolio.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Showcase homes, villas, apartments and other residential architecture projects.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces, commercial buildings and other commercial architecture work.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏨",
      title: "Institutional & Hospitality Projects",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📐",
      title: "Architecture Project Case Studies",
      description:
        "Show project type, location, area, design concept, drawings, project status, key features and detailed descriptions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision and personal design approach.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show architectural drawings, floor plans, elevations, sections and design concepts where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display architectural photography, drawings and high-quality project visuals.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present professional awards, recognitions and architecture-related achievements.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to request an architecture consultation or project discussion.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture-project experiences.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the architect directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide an easy direct-call option for architecture and consultation enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Architecture Blog",
      description:
        "Publish architecture trends, design ideas, planning insights and project stories.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Portfolio Home Page",
      description:
        "Architect introduction, featured projects, services, design philosophy, testimonials and consultation CTA.",
    },
    {
      title: "About Architect",
      description:
        "Present experience, expertise, qualifications, philosophy and professional background.",
    },
    {
      title: "Architecture Services",
      description:
        "Overview of design, planning, consultation and related architecture services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design concept, images, drawings, key features and status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential architecture projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Show architectural principles, approach and personal creative vision.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Present plans, elevations, sections and architectural concepts where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality architecture photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards, recognitions and achievements.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about architecture services, process, planning, consultation and timelines.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture, planning, design trends and project-related insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit architecture consultation and project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "architect-portfolio-ai",
      icon: "🤖",
      name: "AI Architect Assistant",
      description:
        "Answer questions about architecture services, project types, design process, consultation information and general project enquiries.",
      price: "Add-On",
    },
    {
      id: "architect-portfolio-crm",
      icon: "📊",
      name: "Architect Lead CRM",
      description:
        "Connect portfolio enquiries with CRM workflows for lead capture, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "architect-portfolio-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Provide estimated project costs based on property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "architect-portfolio-domain",
      icon: "🌐",
      name: "Personal Portfolio Domain",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "architect-portfolio-hosting",
      icon: "☁️",
      name: "Portfolio Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architect Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Drawings & Plans",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "interior-architect-firm":
  //   createProductDetail({
  //     slug: "interior-architect-firm",

  //     name: "Interior & Architect Firm",

  //     category:
  //       "Interior and Architecture Firm Website",

  //     tagline:
  //       "A combined business website for firms offering architectural planning, interior design and project execution services.",

  //     rating: "4.9",
  //     reviewCount: 44,
  //     purchases: 52,

  //     currentPrice: "₹17,999",
  //     oldPrice: "₹48,999",
  //     discount: "63% OFF",
  //     priceRange: "Up to 35 pages",

  //     mainImage:
  //       "/images/templates/interior/interior-architect.jpg",
  //   }),

  "interior-architect-firm":
  createProductDetail({
    slug: "interior-architect-firm",

    name: "Interior & Architect Firm",

    category:
      "Interior and Architecture Firm Website",

    tagline:
      "A premium combined website for firms offering interior design, architectural planning, turnkey execution, renovation and complete design-to-build project services.",

    rating: "4.9",
    reviewCount: 44,
    purchases: 52,

    currentPrice: "₹17,999",
    oldPrice: "₹48,999",
    discount: "63% OFF",
    priceRange: "Up to 35 pages",

    mainImage:
      "/images/templates/interior/interior-architect.jpg",

    customFeatures: [
      {
        icon: "🏢",
        title: "Interior & Architecture Firm Profile",
        description:
          "Present firm experience, expertise, design philosophy, team, awards and professional information.",
        iconBackground: "#eef3ff",
      },
      {
        icon: "🖼️",
        title: "Combined Project Portfolio",
        description:
          "Show completed, ongoing and featured interior design and architecture projects in one professional portfolio.",
        iconBackground: "#e7f5ef",
      },
      {
        icon: "🛋️",
        title: "Interior Design Services",
        description:
          "Present interior design, space planning, modular kitchen, turnkey interior and related services.",
        iconBackground: "#fff7e6",
      },
      {
        icon: "🏛️",
        title: "Architecture Services",
        description:
          "Present architectural planning, building design, elevations, space planning and related architecture services.",
        iconBackground: "#f3e8ff",
      },
      {
        icon: "🛠️",
        title: "Design & Build / Turnkey Services",
        description:
          "Show complete design-to-execution and turnkey project services where applicable.",
        iconBackground: "#eaf1fd",
      },
      {
        icon: "🏠",
        title: "Residential Projects",
        description:
          "Present homes, apartments, villas and other residential interior and architecture projects.",
        iconBackground: "#edfae8",
      },
      {
        icon: "🏬",
        title: "Commercial Projects",
        description:
          "Show offices, retail spaces, showrooms, restaurants and other commercial projects.",
        iconBackground: "#eef3ff",
      },
      {
        icon: "🍽️",
        title: "Modular Kitchen Portfolio",
        description:
          "Show modular kitchen designs and completed kitchen projects.",
        iconBackground: "#e7f5ef",
      },
      {
        icon: "🔄",
        title: "Renovation & Remodeling",
        description:
          "Present renovation, remodeling and transformation projects.",
        iconBackground: "#fff7e6",
      },
      {
        icon: "📐",
        title: "Detailed Project Pages",
        description:
          "Present project type, location, area, design style, architecture concept, drawings, features and project status.",
        iconBackground: "#f3e8ff",
      },
      {
        icon: "📏",
        title: "Drawings & Plans",
        description:
          "Show floor plans, elevations, sections, architectural drawings and design concepts where applicable.",
        iconBackground: "#eaf1fd",
      },
      {
        icon: "📸",
        title: "Interior & Architecture Gallery",
        description:
          "Display high-quality interior photography, architectural photography and project visuals.",
        iconBackground: "#edfae8",
      },
      {
        icon: "🏆",
        title: "Awards & Achievements",
        description:
          "Present firm awards, recognitions and professional achievements.",
        iconBackground: "#eef3ff",
      },
      {
        icon: "📅",
        title: "Project Consultation Enquiry",
        description:
          "Allow potential clients to request interior, architecture or complete project consultations.",
        iconBackground: "#e7f5ef",
      },
      {
        icon: "💬",
        title: "WhatsApp Integration",
        description:
          "Allow potential clients to contact the firm directly through WhatsApp.",
        iconBackground: "#fff7e6",
      },
      {
        icon: "📰",
        title: "Interior & Architecture Blog",
        description:
          "Publish interior trends, architecture ideas, renovation, planning and industry insights.",
        iconBackground: "#f3e8ff",
      },
    ],

    customPackageIncludes: [
      {
        title: "Premium Home Page",
        description:
          "Firm introduction, featured projects, interior and architecture services, design approach and consultation CTA.",
      },
      {
        title: "About Firm",
        description:
          "Present firm experience, expertise, design philosophy, team and professional information.",
      },
      {
        title: "Interior Design Services",
        description:
          "Complete overview of interior design, space planning and related services.",
      },
      {
        title: "Architecture Services",
        description:
          "Complete overview of architectural planning, design and related services.",
      },
      {
        title: "Projects / Portfolio",
        description:
          "Show completed, ongoing and featured interior and architecture projects.",
      },
      {
        title: "Project Detail Pages",
        description:
          "Project overview, type, location, area, design style, architecture concept, images, drawings, features and status.",
      },
      {
        title: "Residential Projects",
        description:
          "Present residential interior and architecture projects including homes, villas and apartments.",
      },
      {
        title: "Commercial Projects",
        description:
          "Present offices, retail, showroom, restaurant and other commercial projects.",
      },
      {
        title: "Modular Kitchen",
        description:
          "Show modular kitchen designs and completed kitchen projects.",
      },
      {
        title: "Turnkey Interior",
        description:
          "Show design-to-execution and turnkey interior projects.",
      },
      {
        title: "Renovation & Remodeling",
        description:
          "Present existing-space renovation and transformation projects.",
      },
      {
        title: "Design Philosophy",
        description:
          "Present the firm's interior and architectural design principles and approach.",
      },
      {
        title: "Before & After",
        description:
          "Show renovation and transformation results where applicable.",
      },
      {
        title: "Drawings & Plans",
        description:
          "Present floor plans, elevations, sections and architectural concepts where applicable.",
      },
      {
        title: "Project Gallery",
        description:
          "Display interior photography, architectural photography and other project visuals.",
      },
      {
        title: "Awards & Achievements",
        description:
          "Present professional awards, recognitions and firm achievements.",
      },
      {
        title: "Client Testimonials",
        description:
          "Display client reviews and project experiences.",
      },
      {
        title: "FAQ Section",
        description:
          "Answer common questions about interior design, architecture, execution, costing and timelines.",
      },
      {
        title: "Interior & Architecture Blog",
        description:
          "Publish design trends, architecture, renovation and project-related insights.",
      },
      {
        title: "Consultation Enquiry",
        description:
          "Allow potential clients to submit project discussion and consultation requests.",
      },
      {
        title: "Contact & Studio Location",
        description:
          "Phone, WhatsApp, email, office address and Google Maps navigation.",
      },
    ],

    customAddons: [
      {
        id: "interior-architect-ai",
        icon: "🤖",
        name: "AI Interior & Architecture Assistant",
        description:
          "Answer questions about interior services, architecture services, project process, design styles, turnkey services and consultations.",
        price: "Add-On",
      },
      {
        id: "interior-architect-crm",
        icon: "📊",
        name: "Design Project CRM",
        description:
          "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
        price: "Add-On",
      },
      {
        id: "interior-architect-cost",
        icon: "🧮",
        name: "Interior & Construction Cost Calculator",
        description:
          "Estimate interior, design or construction costs using property type, built-up area, project type, room or space type, design requirements, materials and project scope.",
        price: "Add-On",
      },
      {
        id: "interior-architect-domain",
        icon: "🌐",
        name: "Domain Registration",
        description:
          "Custom domain registration with setup and configuration.",
        price: "Add-On",
      },
      {
        id: "interior-architect-hosting",
        icon: "☁️",
        name: "Hosting & Deployment",
        description:
          "Website hosting, configuration and production deployment.",
        price: "Add-On",
      },
    ],

      customSpecifications: [
    {
      label: "Website Type",
      value: "Interior and Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
  }),

  // "urban-space-interiors": createProductDetail({
  //   slug: "urban-space-interiors",
  //   name: "Urban Space Interiors",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A clean and modern interior design website for residential designers, renovation firms and turnkey interior businesses.",
  //   rating: "4.6",
  //   reviewCount: 34,
  //   purchases: 42,
  //   currentPrice: "₹8,999",
  //   oldPrice: "₹17,999",
  //   discount: "50% OFF",
  //   priceRange: "Up to 15 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),

  "urban-space-interiors": createProductDetail({
  slug: "urban-space-interiors",

  name: "Urban Space Interiors",

  category: "Interior Design Business Website",

  tagline:
    "A modern interior design website for urban homes, apartment renovations and turnkey interior businesses that want to showcase transformations, residential projects and complete design-to-execution services.",

  rating: "4.6",
  reviewCount: 34,
  purchases: 42,

  currentPrice: "₹8,999",
  oldPrice: "₹17,999",
  discount: "50% OFF",
  priceRange: "Up to 15 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "🏙️",
      title: "Urban Interior Design Presentation",
      description:
        "Modern website presentation focused on apartment interiors, contemporary homes and urban residential projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏠",
      title: "Residential Interior Portfolio",
      description:
        "Show homes, apartments, villas and other residential interior design projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔄",
      title: "Renovation & Transformation Showcase",
      description:
        "Present renovation and interior-transformation projects through before-and-after visuals.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛠️",
      title: "Turnkey Interior Services",
      description:
        "Show design-to-execution and turnkey interior services for complete residential projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project overview, location, type, area, design style, images, key features and project description.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Clearly showcase residential interior design, space planning and related design services.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🎨",
      title: "Design Style Showcase",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Projects",
      description:
        "Show completed modular kitchen designs as part of residential interior projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📸",
      title: "Transformation Gallery",
      description:
        "Display high-quality project photography and renovation transformation visuals.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Project Consultation Enquiry",
      description:
        "Allow homeowners to submit residential interior, renovation and turnkey project enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Show client feedback and completed-home project experiences.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow potential clients to contact the interior business directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for renovation and interior-project discussions.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Renovation & Interior FAQ",
      description:
        "Answer common questions about design process, project timeline, costing, materials and renovation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Urban Interior Blog",
      description:
        "Publish renovation ideas, interior trends, home décor inspiration and residential design content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Modern Home Page",
      description:
        "Interior business introduction, featured residential projects, renovation work, services and consultation CTA.",
    },
    {
      title: "About Studio",
      description:
        "Present business experience, design philosophy, expertise and professional information.",
    },
    {
      title: "Residential Interior Services",
      description:
        "Complete overview of home, apartment and villa interior design services.",
    },
    {
      title: "Turnkey Interior",
      description:
        "Present complete design-to-execution interior project services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing residential and renovation projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, style, images, features and description.",
    },
    {
      title: "Apartment Interiors",
      description:
        "Show apartment and urban residential interior projects.",
    },
    {
      title: "Home & Villa Interiors",
      description:
        "Present home, villa and other residential interior projects.",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Show existing-space renovation and transformation projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Present completed modular kitchen designs and projects.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation results where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality residential interior and renovation visuals.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about interior process, costing, timelines, renovation and materials.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish renovation tips, home décor, trends and residential interior ideas.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow homeowners to submit interior, renovation and turnkey project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and other business contact information.",
    },
  ],

  customAddons: [
    {
      id: "urban-space-ai",
      icon: "🤖",
      name: "AI Home Interior Assistant",
      description:
        "Answer common questions about residential interiors, renovation, design styles, turnkey services and project enquiries.",
      price: "Add-On",
    },
    {
      id: "urban-space-crm",
      icon: "📊",
      name: "Renovation Lead CRM",
      description:
        "Connect residential and renovation enquiries with CRM workflows for lead capture and follow-up.",
      price: "Add-On",
    },
    {
      id: "urban-space-cost",
      icon: "🧮",
      name: "Home Interior Cost Calculator",
      description:
        "Provide estimated interior costs based on property type, area, room type, interior style, materials and project requirements.",
      price: "Add-On",
    },
    {
      id: "urban-space-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "urban-space-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "elite-home-interiors": createProductDetail({
  //   slug: "elite-home-interiors",
  //   name: "Elite Home Interiors",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A premium interior website for showcasing residential projects, design services and customer enquiries.",
  //   rating: "4.7",
  //   reviewCount: 41,
  //   purchases: 58,
  //   currentPrice: "₹10,999",
  //   oldPrice: "₹24,999",
  //   discount: "56% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),
   
  "elite-home-interiors": createProductDetail({
  slug: "elite-home-interiors",

  name: "Elite Home Interiors",

  category: "Interior Design Business Website",

  tagline:
    "A premium luxury interior design website for high-end residential designers and studios that want to showcase elegant homes, villas, design styles, transformations and consultation services.",

  rating: "4.8",
  reviewCount: 38,
  purchases: 49,

  currentPrice: "₹13,999",
  oldPrice: "₹34,999",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "✨",
      title: "Luxury Interior Presentation",
      description:
        "Premium visual website presentation focused on high-end residential and luxury interior design.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏠",
      title: "Luxury Residential Portfolio",
      description:
        "Showcase premium homes, apartments, villas and other residential interior projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎨",
      title: "Premium Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "High-End Project Portfolio",
      description:
        "Display completed, ongoing and featured interior projects in a premium portfolio format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Stories",
      description:
        "Present project overview, location, type, area, design style, images, features and descriptions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔄",
      title: "Before & After Transformations",
      description:
        "Show premium renovation and interior-transformation results where applicable.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📸",
      title: "Luxury Project Gallery",
      description:
        "Display high-quality project photography in an elegant visual gallery.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Clearly present residential interior design and consultation services.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Portfolio",
      description:
        "Show premium modular kitchen designs and completed kitchen projects.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Luxury Design Consultation",
      description:
        "Allow potential clients to request consultations for premium residential interior projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and luxury-project experiences to build trust.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the studio directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for premium project and consultation enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Luxury Interior FAQ",
      description:
        "Answer common questions about design process, materials, costing, project timelines and styles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Luxury Interior Blog",
      description:
        "Publish premium design inspiration, luxury interior trends, décor ideas and renovation content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Luxury Home Page",
      description:
        "Studio introduction, featured luxury projects, services, design styles, testimonials and consultation CTA.",
    },
    {
      title: "About Studio / Designer",
      description:
        "Present experience, design philosophy, expertise and professional information.",
    },
    {
      title: "Luxury Interior Services",
      description:
        "Overview of premium residential interior design and consultation services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing luxury interior projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, key features and description.",
    },
    {
      title: "Luxury Residential Interiors",
      description:
        "Present premium homes, apartments, villas and other residential projects.",
    },
    {
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show premium modular kitchen projects and designs.",
    },
    {
      title: "Before & After",
      description:
        "Present renovation and transformation results where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality luxury interior photography and project visuals.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about premium interiors, timelines, materials, styles and costing.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish luxury design trends, décor inspiration, renovation and interior ideas.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit luxury interior consultation and project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "elite-home-ai",
      icon: "🤖",
      name: "AI Luxury Interior Assistant",
      description:
        "Answer common questions about premium interior services, design styles, project process and consultations.",
      price: "Add-On",
    },
    {
      id: "elite-home-crm",
      icon: "📊",
      name: "Premium Project CRM",
      description:
        "Connect high-value project enquiries with CRM workflows for lead tracking and follow-up.",
      price: "Add-On",
    },
    {
      id: "elite-home-cost",
      icon: "🧮",
      name: "Luxury Interior Cost Calculator",
      description:
        "Provide estimated project costs based on property type, area, room type, interior style, materials and project requirements.",
      price: "Add-On",
    },
    {
      id: "elite-home-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "elite-home-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "signature-interior-studio": createProductDetail({
  //   slug: "signature-interior-studio",
  //   name: "Signature Interior Studio",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A portfolio-focused website for interior studios that want to present projects, services and design expertise professionally.",
  //   rating: "4.8",
  //   reviewCount: 48,
  //   purchases: 71,
  //   currentPrice: "₹12,999",
  //   oldPrice: "₹30,999",
  //   discount: "58% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),

  "signature-interior-studio": createProductDetail({
  slug: "signature-interior-studio",

  name: "Signature Interior Studio",

  category: "Interior Design Business Website",

  tagline:
    "A portfolio-led interior design studio website for presenting signature design styles, curated residential and commercial projects, detailed case studies and professional consultation services.",

  rating: "4.8",
  reviewCount: 48,
  purchases: 71,

  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "✒️",
      title: "Signature Studio Identity",
      description:
        "Present the studio's experience, specialization, design approach, philosophy and professional identity.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Curated Interior Portfolio",
      description:
        "Show selected completed, ongoing and featured interior projects through a premium visual portfolio.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎨",
      title: "Signature Design Styles",
      description:
        "Showcase the studio's modern, contemporary, luxury, minimalist and other applicable design concepts.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📐",
      title: "Project Case Studies",
      description:
        "Present project type, location, area, design style, images, key features and detailed project descriptions.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏠",
      title: "Residential Interior Projects",
      description:
        "Showcase homes, apartments, villas and other residential interior projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏢",
      title: "Commercial Interior Projects",
      description:
        "Present offices, retail spaces, showrooms, restaurants and other commercial interiors.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Portfolio",
      description:
        "Showcase modular kitchen designs and completed kitchen projects where applicable.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display high-quality project photography and interior visuals in a professional gallery.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔄",
      title: "Before & After Showcase",
      description:
        "Present renovation and interior transformation projects where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Clearly present the studio's available interior design and consultation services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Design Consultation Enquiry",
      description:
        "Allow potential clients to submit consultation and project enquiries directly through the website.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences to strengthen studio credibility.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the studio directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Help clients locate the studio or office through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Design Inspiration Blog",
      description:
        "Publish interior trends, design ideas, renovation tips, décor inspiration and studio insights.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Signature Home Page",
      description:
        "Studio introduction, signature projects, design styles, services, testimonials and consultation CTA.",
    },
    {
      title: "About Studio",
      description:
        "Present studio experience, philosophy, expertise, specialization and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of the studio's available interior design services.",
    },
    {
      title: "Signature Projects",
      description:
        "Curated portfolio of selected completed, ongoing and featured projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, style, images, features and detailed description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present homes, apartments, villas and residential interior projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom, restaurant and other commercial projects.",
    },
    {
      title: "Design Styles",
      description:
        "Present the studio's signature modern, contemporary, luxury, minimalist and other design styles.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show completed modular kitchen designs and projects where applicable.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality project photography and interior visuals.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client feedback and project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, materials, costing and project timelines.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design trends, inspiration, renovation tips and home décor content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "signature-studio-ai",
      icon: "🤖",
      name: "AI Studio Design Assistant",
      description:
        "Answer common questions about interior services, design styles, project process, consultation information and studio enquiries.",
      price: "Add-On",
    },
    {
      id: "signature-studio-crm",
      icon: "📊",
      name: "Studio Project CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, enquiry tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "signature-studio-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Provide estimated project costs based on property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "signature-studio-domain",
      icon: "🌐",
      name: "Studio Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "signature-studio-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "dreamline-interiors": createProductDetail({
  //   slug: "dreamline-interiors",
  //   name: "Dreamline Interiors",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A compact interior design website for small studios, independent designers and growing interior businesses.",
  //   rating: "4.5",
  //   reviewCount: 29,
  //   purchases: 36,
  //   currentPrice: "₹7,999",
  //   oldPrice: "₹14,999",
  //   discount: "45% OFF",
  //   priceRange: "Up to 12 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),

   "dreamline-interiors": createProductDetail({
  slug: "dreamline-interiors",

  name: "Dreamline Interiors",

  category: "Interior Design Business Website",

  tagline:
    "A compact interior design website for independent designers and growing studios that need a professional business profile, selected project portfolio, service showcase and consultation enquiry system.",

  rating: "4.5",
  reviewCount: 29,
  purchases: 36,

  currentPrice: "₹7,999",
  oldPrice: "₹14,999",
  discount: "45% OFF",
  priceRange: "Up to 12 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "🏢",
      title: "Professional Studio Profile",
      description:
        "Present studio or designer experience, expertise, philosophy and professional information clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛋️",
      title: "Interior Services Showcase",
      description:
        "Present the main interior design services offered by the designer or growing studio.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Selected Project Portfolio",
      description:
        "Show completed and ongoing interior projects in a clean professional portfolio.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏠",
      title: "Residential Projects",
      description:
        "Present homes, apartments, villas and other residential interior projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏢",
      title: "Commercial Projects",
      description:
        "Show office, retail, showroom and other applicable commercial interior projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📐",
      title: "Project Details",
      description:
        "Present project overview, location, project type, area, design style, images and key features.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display high-quality interior images in a simple and attractive gallery format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit interior consultation and project enquiries.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client feedback and project experiences to build trust.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow visitors to contact the designer or studio directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct calling option for project and consultation enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Interior Design FAQ",
      description:
        "Answer common questions about design process, timelines, costing and materials.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Interior Design Blog",
      description:
        "Publish design ideas, renovation tips, trends and interior-related content.",
      iconBackground: "#e7f5ef",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Studio introduction, selected projects, services, testimonials and consultation CTA.",
    },
    {
      title: "About Designer / Studio",
      description:
        "Present experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Provide a clear overview of available interior design services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing interior projects professionally.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Present project overview, location, type, area, style, images and key features.",
    },
    {
      title: "Residential Interior",
      description:
        "Show homes, apartments, villas and residential interior projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom and other applicable commercial projects.",
    },
    {
      title: "Design Styles",
      description:
        "Show applicable modern, contemporary, luxury and minimalist design styles.",
    },
    {
      title: "Project Gallery",
      description:
        "Display selected interior-project photography.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common design-process, timeline, costing and material questions.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends and renovation-related content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow visitors to submit consultation and project requests.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and other business contact information.",
    },
  ],

  customAddons: [
    {
      id: "dreamline-ai",
      icon: "🤖",
      name: "AI Interior Enquiry Assistant",
      description:
        "Answer common questions about interior services, design styles, project process and consultations.",
      price: "Add-On",
    },
    {
      id: "dreamline-crm",
      icon: "📊",
      name: "Studio Lead CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, tracking and follow-up.",
      price: "Add-On",
    },
    {
      id: "dreamline-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Estimate interior costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "dreamline-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "dreamline-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "living-space-designs": createProductDetail({
  //   slug: "living-space-designs",
  //   name: "Living Space Designs",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A professional interior website for presenting complete home interiors, modular solutions and completed projects.",
  //   rating: "4.8",
  //   reviewCount: 56,
  //   purchases: 83,
  //   currentPrice: "₹14,999",
  //   oldPrice: "₹37,999",
  //   discount: "60% OFF",
  //   priceRange: "Up to 25 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),

  "living-space-designs": createProductDetail({
  slug: "living-space-designs",

  name: "Living Space Designs",

  category: "Interior Design Business Website",

  tagline:
    "A complete home interior website for businesses offering modular kitchens, wardrobes, storage solutions and customized interior projects with consultation and site-visit enquiries.",

  rating: "4.8",
  reviewCount: 56,
  purchases: 83,

  currentPrice: "₹14,999",
  oldPrice: "₹37,999",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "🏠",
      title: "Complete Home Interior Presentation",
      description:
        "Professional website presentation for home-interior businesses offering modular and customized design solutions.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Showcase",
      description:
        "Present different kitchen layouts, designs, finishes and completed modular kitchen projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚪",
      title: "Wardrobe Solutions",
      description:
        "Show sliding, hinged, walk-in and customized wardrobe designs.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🗄️",
      title: "Storage Solutions",
      description:
        "Present bedroom storage, kitchen cabinets, TV units, crockery units and other storage solutions.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🪵",
      title: "Custom Furniture",
      description:
        "Show customized furniture solutions including TV units, crockery units and other made-to-order pieces.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🖼️",
      title: "Home Interior Project Portfolio",
      description:
        "Show completed kitchen, wardrobe and furniture projects in a professional portfolio format.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project type, location, area, design style, materials, finishes, images and key project features.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable home-interior design styles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧱",
      title: "Materials & Finishes",
      description:
        "Show available materials, finishes, colours, textures and hardware options.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔄",
      title: "Before & After Gallery",
      description:
        "Show kitchen renovations, wardrobe transformations and home-interior makeovers.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛠️",
      title: "Design & Installation Services",
      description:
        "Present design consultation, manufacturing, installation and other applicable home-interior services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📏",
      title: "Site Visit & Measurement Enquiry",
      description:
        "Allow customers to request site measurement or home visits for interior projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📅",
      title: "Project Consultation Enquiry",
      description:
        "Allow customers to request consultations for kitchen, wardrobe and home-interior projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Customer Testimonials",
      description:
        "Display customer reviews and completed-project experiences.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow customers to contact the interior business directly through WhatsApp.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Featured kitchens, wardrobes, home-interior solutions, portfolio, testimonials and consultation CTA.",
    },
    {
      title: "About Business",
      description:
        "Present business experience, expertise, design approach and professional information.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show different kitchen layouts, designs, finishes and completed projects.",
    },
    {
      title: "Wardrobes",
      description:
        "Present wardrobe designs, storage options and customized wardrobe solutions.",
    },
    {
      title: "Walk-in Wardrobe",
      description:
        "Show walk-in wardrobe designs and projects where applicable.",
    },
    {
      title: "Custom Furniture",
      description:
        "Present TV units, crockery units, storage solutions and other customized furniture.",
    },
    {
      title: "Project Portfolio",
      description:
        "Show completed home-interior, kitchen, wardrobe and furniture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design style, images, materials, finishes and key features.",
    },
    {
      title: "Product / Design Categories",
      description:
        "Organize kitchens, wardrobes, storage and custom furniture into clear categories.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Materials & Finishes",
      description:
        "Show available materials, finishes, colours, textures and hardware.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and home-interior transformation projects where applicable.",
    },
    {
      title: "Services",
      description:
        "Present design consultation, manufacturing, installation and other applicable services.",
    },
    {
      title: "Customer Testimonials",
      description:
        "Show customer reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about kitchens, wardrobes, materials, installation, timelines and costing.",
    },
    {
      title: "Kitchen & Wardrobe Blog",
      description:
        "Publish kitchen ideas, wardrobe ideas, storage solutions, materials and maintenance content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow customers to submit home-interior project consultation requests.",
    },
    {
      title: "Site Visit / Measurement Enquiry",
      description:
        "Allow customers to request site measurement or home visits.",
    },
    {
      title: "Contact & Showroom Location",
      description:
        "Phone, WhatsApp, email, business address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "living-space-ai",
      icon: "🤖",
      name: "AI Home Interior Assistant",
      description:
        "Answer common questions about kitchen designs, wardrobe options, materials, finishes, services and consultations.",
      price: "Add-On",
    },
    {
      id: "living-space-crm",
      icon: "📊",
      name: "Home Interior Lead CRM",
      description:
        "Connect customer enquiries with CRM workflows for lead capture, tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "living-space-cost",
      icon: "🧮",
      name: "Interior / Kitchen Cost Calculator",
      description:
        "Estimate kitchen, wardrobe or interior costs using type, area, layout, material, finish, storage and design requirements.",
      price: "Add-On",
    },
    {
      id: "living-space-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "living-space-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "prime-interior-solutions": createProductDetail({
  //   slug: "prime-interior-solutions",
  //   name: "Prime Interior Solutions",
  //   category: "Interior Design Business Website",
  //   tagline:
  //     "A business-oriented interior website for generating leads, displaying services and presenting completed design projects.",
  //   rating: "4.7",
  //   reviewCount: 43,
  //   purchases: 64,
  //   currentPrice: "₹11,999",
  //   oldPrice: "₹24,999",
  //   discount: "52% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/decorpot.jpg",
  // }),
  
   "prime-interior-solutions": createProductDetail({
  slug: "prime-interior-solutions",

  name: "Prime Interior Solutions",

  category: "Interior Design Business Website",

  tagline:
    "A business-focused interior design website built for lead generation, service presentation, project enquiries and professional showcasing of completed residential and commercial interior work.",

  rating: "4.7",
  reviewCount: 43,
  purchases: 64,

  currentPrice: "₹11,999",
  oldPrice: "₹24,999",
  discount: "52% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/decorpot.jpg",

  customFeatures: [
    {
      icon: "📈",
      title: "Lead-Focused Interior Website",
      description:
        "Business-oriented website structure designed to convert visitors into interior design consultation and project enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏢",
      title: "Professional Business Profile",
      description:
        "Present studio experience, expertise, design approach and professional business information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🛋️",
      title: "Interior Services Showcase",
      description:
        "Clearly present available residential, commercial and other interior design services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "Completed Project Portfolio",
      description:
        "Show completed and ongoing interior projects in a professional portfolio format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project overview, location, type, area, design style, images, key features and descriptions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Interior Projects",
      description:
        "Show homes, apartments, villas and other residential interior projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏬",
      title: "Commercial Interior Projects",
      description:
        "Present offices, retail spaces, showrooms and other commercial interior projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable interior styles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry System",
      description:
        "Allow visitors to submit interior consultation and project enquiries directly through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📊",
      title: "CRM-Ready Lead Flow",
      description:
        "Support lead capture, lead management, enquiry tracking and follow-up through CRM integration.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Lead Capture",
      description:
        "Allow potential clients to contact the business directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct calling option for consultation and project discussions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and completed-project experiences to improve business credibility.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Project FAQ",
      description:
        "Answer common questions about services, project timelines, costing, materials and process.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Interior Business Blog",
      description:
        "Publish interior trends, design ideas, renovation tips and project-related content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Lead-Focused Home Page",
      description:
        "Business introduction, featured services, completed projects, testimonials and strong consultation CTA.",
    },
    {
      title: "About Business",
      description:
        "Present experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of available interior design services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing interior projects professionally.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present homes, apartments, villas and other residential projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present offices, retail spaces, showrooms and other commercial projects.",
    },
    {
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable design styles.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, materials, costing and timelines.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design trends, renovation tips and business-related interior content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Capture potential-client consultation and project requests.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and other business contact information.",
    },
  ],

  customAddons: [
    {
      id: "prime-interior-ai",
      icon: "🤖",
      name: "AI Interior Lead Assistant",
      description:
        "Answer questions about interior services, project process, design styles, consultation information, timings and general enquiries.",
      price: "Add-On",
    },
    {
      id: "prime-interior-crm",
      icon: "📊",
      name: "Interior Lead Management CRM",
      description:
        "Connect website enquiries with CRM workflows for lead capture, lead management, follow-up management and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "prime-interior-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Estimate project costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "prime-interior-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "prime-interior-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Design Business Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Studio Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Interior Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "axis-architects": createProductDetail({
  //   slug: "axis-architects",
  //   name: "Axis Architects",
  //   category: "Architecture Firm Website",
  //   tagline:
  //     "A clean architecture website for studios that want to present projects, services, design philosophy and client enquiries.",
  //   rating: "4.7",
  //   reviewCount: 35,
  //   purchases: 49,
  //   currentPrice: "₹13,999",
  //   oldPrice: "₹30,999",
  //   discount: "55% OFF",
  //   priceRange: "Up to 25 pages",
  //   mainImage: "/images/templates/interior/modern-architect.jpg",
  // }),

   "axis-architects": createProductDetail({
  slug: "axis-architects",

  name: "Axis Architects",

  category: "Architecture Firm Website",

  tagline:
    "A clean architecture firm website for studios that want to present planning expertise, design philosophy, selected projects, architectural drawings and professional consultation enquiries.",

  rating: "4.7",
  reviewCount: 35,
  purchases: 49,

  currentPrice: "₹13,999",
  oldPrice: "₹30,999",
  discount: "55% OFF",
  priceRange: "Up to 25 pages",

  mainImage:
    "/images/templates/interior/modern-architect.jpg",

  customFeatures: [
    {
      icon: "🏛️",
      title: "Clean Architecture Presentation",
      description:
        "Professional architecture-focused website presentation for studios and architectural firms.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍💼",
      title: "Firm Profile",
      description:
        "Present firm experience, expertise, qualifications, design philosophy, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Selected Architecture Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects professionally.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📐",
      title: "Planning & Design Services",
      description:
        "Present architectural design, planning, consultation and related services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Show the firm's architectural vision, working philosophy and design approach.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential architecture projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Show offices, retail spaces, commercial buildings and related architecture projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏨",
      title: "Institutional & Hospitality Projects",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show architectural drawings, plans, elevations, sections and design concepts where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display architectural photography, drawings and project visuals.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present professional awards, recognitions and architectural achievements.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Architecture Consultation Enquiry",
      description:
        "Allow prospective clients to submit architecture consultation and project enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow clients to contact the architecture firm directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for architecture and consultation enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Architecture Blog",
      description:
        "Publish architecture trends, planning insights, building concepts and project stories.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Architecture Home Page",
      description:
        "Firm introduction, featured projects, services, design philosophy, testimonials and consultation CTA.",
    },
    {
      title: "About Firm",
      description:
        "Present experience, expertise, qualifications, philosophy and professional information.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of planning, design, consultation and related architecture services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured architectural projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design concept, images, drawings, features and project status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and residential architecture projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels, resorts and other applicable architecture projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present the firm's architectural principles, approach and creative vision.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections and architectural concepts where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display architectural photography and professional project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards and architecture-related recognition.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about architecture services, planning, process, consultation and timelines.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, planning ideas and project insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit architecture consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "axis-architects-ai",
      icon: "🤖",
      name: "AI Architecture Enquiry Assistant",
      description:
        "Answer common questions about architecture services, project types, design process, consultation information and location.",
      price: "Add-On",
    },
    {
      id: "axis-architects-crm",
      icon: "📊",
      name: "Architecture Lead CRM",
      description:
        "Connect architecture enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "axis-architects-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Estimate project costs based on property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "axis-architects-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "axis-architects-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect / Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Architecture Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "urban-arc-studio": createProductDetail({
  //   slug: "urban-arc-studio",
  //   name: "Urban Arc Studio",
  //   category: "Architecture Firm Website",
  //   tagline:
  //     "A modern architecture portfolio website for showcasing residential, commercial and urban design projects.",
  //   rating: "4.8",
  //   reviewCount: 44,
  //   purchases: 62,
  //   currentPrice: "₹16,999",
  //   oldPrice: "₹40,999",
  //   discount: "59% OFF",
  //   priceRange: "Up to 30 pages",
  //   mainImage: "/images/templates/interior/modern-architect.jpg",
  // }),

   "urban-arc-studio": createProductDetail({
  slug: "urban-arc-studio",

  name: "Urban Arc Studio",

  category: "Architecture Firm Website",

  tagline:
    "A modern architecture portfolio website for studios showcasing residential, commercial, office and institutional projects through strong visuals, detailed project stories and architectural concepts.",

  rating: "4.8",
  reviewCount: 44,
  purchases: 62,

  currentPrice: "₹16,999",
  oldPrice: "₹40,999",
  discount: "59% OFF",
  priceRange: "Up to 30 pages",

  mainImage:
    "/images/templates/interior/modern-architect.jpg",

  customFeatures: [
    {
      icon: "🏙️",
      title: "Modern Architecture Portfolio",
      description:
        "Present completed, ongoing and featured architectural projects through a modern visual portfolio.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Showcase homes, apartments, villas and other residential architecture projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces, commercial buildings and other commercial projects.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💼",
      title: "Office Architecture",
      description:
        "Organize and showcase office architecture projects as a dedicated project category.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏫",
      title: "Institutional Architecture",
      description:
        "Present schools, institutions and other applicable institutional architecture projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏨",
      title: "Hospitality Architecture",
      description:
        "Show hotels, resorts and other applicable hospitality architecture projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏭",
      title: "Industrial Architecture",
      description:
        "Organize and present applicable industrial architecture projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏡",
      title: "Villa & Luxury Projects",
      description:
        "Highlight premium villa and luxury architecture projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📐",
      title: "Detailed Project Stories",
      description:
        "Show project type, location, area, design concept, images, description, key features and project status.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Present floor plans, elevations, sections, architectural drawings and concepts where applicable.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Present the studio's architectural vision, design principles and working approach.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📸",
      title: "Architectural Project Gallery",
      description:
        "Display high-quality architectural photography, drawings and other project visuals.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present architectural awards, recognitions and professional achievements.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Project Consultation Enquiry",
      description:
        "Allow prospective clients to request architecture consultations or project discussions.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow visitors to contact the architecture studio directly through WhatsApp.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Modern Home Page",
      description:
        "Studio introduction, featured projects, architecture services, design philosophy and consultation CTA.",
    },
    {
      title: "About Studio",
      description:
        "Present experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of architectural design, planning, consultation and related services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, concept, images, drawings, features, description and status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, apartments, villas and other residential architecture projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Office Architecture",
      description:
        "Present office architecture projects as a dedicated category.",
    },
    {
      title: "Institutional Architecture",
      description:
        "Present schools, institutions and other applicable projects.",
    },
    {
      title: "Hospitality Architecture",
      description:
        "Present hotels, resorts and other applicable hospitality projects.",
    },
    {
      title: "Industrial Architecture",
      description:
        "Present applicable industrial architecture projects.",
    },
    {
      title: "Villa & Luxury Projects",
      description:
        "Highlight villa and luxury architecture projects.",
    },
    {
      title: "Renovation & Restoration",
      description:
        "Present applicable renovation and restoration architecture projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision and design approach.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show plans, elevations, sections and architectural concepts where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display professional architecture photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present awards, recognitions and professional achievements.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about architecture services, planning, project process, consultation and timelines.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, planning ideas, building concepts and project stories.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "urban-arc-ai",
      icon: "🤖",
      name: "AI Architecture Portfolio Assistant",
      description:
        "Answer common questions about architecture services, project categories, design process, consultations and general enquiries.",
      price: "Add-On",
    },
    {
      id: "urban-arc-crm",
      icon: "📊",
      name: "Architecture Enquiry CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "urban-arc-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Estimate project costs using property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "urban-arc-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "urban-arc-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect / Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Architecture Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "form-space-architects": createProductDetail({
  //   slug: "form-space-architects",
  //   name: "Form & Space Architects",
  //   category: "Architecture Firm Website",
  //   tagline:
  //     "A premium architecture website for design firms that need a strong project showcase, service presentation and professional brand presence.",
  //   rating: "4.9",
  //   reviewCount: 52,
  //   purchases: 74,
  //   currentPrice: "₹18,999",
  //   oldPrice: "₹49,999",
  //   discount: "62% OFF",
  //   priceRange: "Up to 35 pages",
  //   mainImage: "/images/templates/interior/modern-architect.jpg",
  // }),

   "form-space-architects": createProductDetail({
  slug: "form-space-architects",

  name: "Form & Space Architects",

  category: "Architecture Firm Website",

  tagline:
    "A premium architecture firm website for design-led practices that want to build a strong professional brand through refined project presentation, design philosophy, architectural drawings and recognized achievements.",

  rating: "4.9",
  reviewCount: 52,
  purchases: 74,

  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",

  mainImage:
    "/images/templates/interior/modern-architect.jpg",

  customFeatures: [
    {
      icon: "🏛️",
      title: "Premium Architecture Brand",
      description:
        "Create a modern and visually strong professional presence for an architecture or design firm.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👥",
      title: "Firm Profile & Expertise",
      description:
        "Present firm experience, expertise, qualifications, design philosophy, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Featured Architecture Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects in a premium portfolio format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision, design approach and working philosophy.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Case Studies",
      description:
        "Present project overview, location, area, design concept, images, drawings, features and project status.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Showcase homes, villas, apartments and other residential architecture projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces, commercial buildings and related projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏨",
      title: "Institutional & Hospitality Projects",
      description:
        "Show schools, institutions, hotels, resorts and other applicable architecture projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📏",
      title: "Architectural Drawings & Plans",
      description:
        "Present floor plans, elevations, sections, architectural drawings and design concepts where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📸",
      title: "Premium Project Gallery",
      description:
        "Display architectural photography, drawings and project visuals in a professional gallery.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Highlight architectural awards, professional recognitions and firm achievements.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and completed-project experiences to reinforce professional credibility.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📅",
      title: "Premium Consultation Enquiry",
      description:
        "Allow prospective clients to request architecture consultations and project discussions.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Show office or studio location with Google Maps navigation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Architecture Insights",
      description:
        "Publish architecture trends, design ideas, planning insights, building concepts and project stories.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Firm introduction, featured projects, architecture services, design philosophy, testimonials and consultation CTA.",
    },
    {
      title: "About Firm",
      description:
        "Present experience, expertise, qualifications, philosophy and professional information.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of architectural design, planning, consultation and related services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, concept, images, drawings, features, description and status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and residential architecture projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision and working approach.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show architectural drawings, floor plans, elevations, sections and concepts.",
    },
    {
      title: "Premium Project Gallery",
      description:
        "Display architectural photography and project visuals professionally.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present architectural awards, recognitions and professional achievements.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about architecture services, planning, process, consultation and timelines.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, design ideas, planning and project insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit architecture consultation and project requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "form-space-ai",
      icon: "🤖",
      name: "AI Architecture Brand Assistant",
      description:
        "Answer common questions about architecture services, project types, design process, consultation information, studio timings and general enquiries.",
      price: "Add-On",
    },
    {
      id: "form-space-crm",
      icon: "📊",
      name: "Premium Architecture CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "form-space-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Estimate architecture or project costs using property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "form-space-domain",
      icon: "🌐",
      name: "Professional Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "form-space-hosting",
      icon: "☁️",
      name: "Premium Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect / Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Architecture Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "studio-vertex": createProductDetail({
  //   slug: "studio-vertex",
  //   name: "Studio Vertex",
  //   category: "Architecture Firm Website",
  //   tagline:
  //     "A professional architecture website for studios, consultants and planning firms with project galleries and lead-generation sections.",
  //   rating: "4.7",
  //   reviewCount: 39,
  //   purchases: 55,
  //   currentPrice: "₹15,999",
  //   oldPrice: "₹36,999",
  //   discount: "57% OFF",
  //   priceRange: "Up to 30 pages",
  //   mainImage: "/images/templates/interior/modern-architect.jpg",
  // }),

   "studio-vertex": createProductDetail({
  slug: "studio-vertex",

  name: "Studio Vertex",

  category: "Architecture Firm Website",

  tagline:
    "A professional architecture and planning consultancy website for studios that need strong project galleries, service presentation, consultation enquiries and structured lead-management workflows.",

  rating: "4.7",
  reviewCount: 39,
  purchases: 55,

  currentPrice: "₹15,999",
  oldPrice: "₹36,999",
  discount: "57% OFF",
  priceRange: "Up to 30 pages",

  mainImage:
    "/images/templates/interior/modern-architect.jpg",

  customFeatures: [
    {
      icon: "📐",
      title: "Architecture & Planning Services",
      description:
        "Present architectural design, planning, consultation and other related professional services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏢",
      title: "Professional Studio Profile",
      description:
        "Present experience, expertise, design philosophy, qualifications, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Project Gallery",
      description:
        "Show completed, ongoing and featured architecture projects through professional photography, drawings and visuals.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📋",
      title: "Detailed Project Information",
      description:
        "Present project type, location, area, design concept, description, key features and project status.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏠",
      title: "Residential Projects",
      description:
        "Showcase homes, villas, apartments and other residential architecture projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏬",
      title: "Commercial Projects",
      description:
        "Present offices, retail spaces, commercial buildings and other commercial architecture work.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏫",
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📏",
      title: "Drawings & Plans Showcase",
      description:
        "Display architectural plans, elevations, sections, drawings and design concepts where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧠",
      title: "Design Approach",
      description:
        "Present the studio's architectural vision, design approach and working philosophy.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit architecture consultation and project discussion requests.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📊",
      title: "Lead Management Ready",
      description:
        "Support lead capture, lead management, follow-up management and enquiry tracking through CRM integration.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiries",
      description:
        "Allow potential clients to contact the studio directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for architecture and project consultation enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Show the office or studio location with Google Maps navigation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Architecture Insights",
      description:
        "Publish architecture trends, planning ideas, building concepts and industry insights.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Professional Home Page",
      description:
        "Studio introduction, featured projects, architecture services, testimonials and consultation CTA.",
    },
    {
      title: "About Studio",
      description:
        "Present experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Architecture & Planning Services",
      description:
        "Complete overview of architecture, planning and consultation services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, concept, images, drawings, features and project status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Present schools, institutions, hotels and resorts where applicable.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present architectural principles, approach and creative vision.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show plans, elevations, sections and architectural concepts where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display architectural photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards and architecture-related recognitions.",
    },
    {
      title: "Client Testimonials",
      description:
        "Display client reviews and architecture-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about architecture services, planning, project process and consultation.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, planning insights and project stories.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Capture architecture consultation and project enquiries.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "studio-vertex-ai",
      icon: "🤖",
      name: "AI Architecture Consultation Assistant",
      description:
        "Answer common questions about architecture services, project types, planning process, consultation information, studio timings and general enquiries.",
      price: "Add-On",
    },
    {
      id: "studio-vertex-crm",
      icon: "📊",
      name: "Architecture Lead CRM",
      description:
        "Connect website enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "studio-vertex-cost",
      icon: "🧮",
      name: "Project Cost Calculator",
      description:
        "Estimate architecture or project costs using property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "studio-vertex-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "studio-vertex-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect / Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Architecture Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "arc-and-interiors": createProductDetail({
  //   slug: "arc-and-interiors",
  //   name: "Arc & Interiors Studio",
  //   category: "Interior and Architecture Firm Website",
  //   tagline:
  //     "A combined architecture and interior website for firms that handle planning, design, execution and complete project delivery.",
  //   rating: "4.7",
  //   reviewCount: 37,
  //   purchases: 47,
  //   currentPrice: "₹14,999",
  //   oldPrice: "₹33,999",
  //   discount: "56% OFF",
  //   priceRange: "Up to 25 pages",
  //   mainImage: "/images/templates/interior/interior-architect.jpg",
  // }),

   "arc-and-interiors": createProductDetail({
  slug: "arc-and-interiors",

  name: "Arc & Interiors Studio",

  category: "Interior and Architecture Firm Website",

  tagline:
    "A combined interior and architecture website for firms offering planning, architectural design, interior design, renovation and complete design-to-execution project delivery.",

  rating: "4.7",
  reviewCount: 37,
  purchases: 47,

  currentPrice: "₹14,999",
  oldPrice: "₹33,999",
  discount: "56% OFF",
  priceRange: "Up to 25 pages",

  mainImage:
    "/images/templates/interior/interior-architect.jpg",

  customFeatures: [
    {
      icon: "🏢",
      title: "Integrated Firm Profile",
      description:
        "Present the firm's interior design, architecture expertise, experience, design approach and professional information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏛️",
      title: "Architecture Services",
      description:
        "Show architectural planning, building design, elevations, space planning and related services.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Present interior design, space planning, modular kitchen, turnkey interior and related services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛠️",
      title: "Design & Build / Turnkey",
      description:
        "Show complete design-to-execution services for clients looking for end-to-end project delivery.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🖼️",
      title: "Combined Project Portfolio",
      description:
        "Show completed, ongoing and featured interior and architecture projects in one professional portfolio.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Projects",
      description:
        "Present residential interior, residential architecture, villas and other home projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏬",
      title: "Commercial Projects",
      description:
        "Show offices, retail, showrooms, restaurants and other commercial interior and architecture projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🔄",
      title: "Renovation & Remodeling",
      description:
        "Present renovation, remodeling and interior-transformation projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project type, location, area, design style, architecture concept, images, drawings, features and status.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections, architectural drawings and design concepts where applicable.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display interior photography, architectural photography and other project visuals.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present firm awards, recognitions and professional achievements.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📅",
      title: "Project Consultation Enquiry",
      description:
        "Allow potential clients to request interior, architecture or complete project consultations.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the firm directly through WhatsApp.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Interior & Architecture Blog",
      description:
        "Publish interior trends, architecture ideas, renovation, planning and project insights.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Integrated Home Page",
      description:
        "Firm introduction, featured projects, interior and architecture services, design approach and consultation CTA.",
    },
    {
      title: "About Firm",
      description:
        "Present experience, expertise, design philosophy and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of interior design, space planning and related services.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of architectural planning, building design and related services.",
    },
    {
      title: "Design & Build / Turnkey",
      description:
        "Present end-to-end design-to-execution services where applicable.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing interior and architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design style, architecture concept, images, drawings and status.",
    },
    {
      title: "Residential Projects",
      description:
        "Present residential interior and architecture work including homes, villas and apartments.",
    },
    {
      title: "Commercial Projects",
      description:
        "Present offices, retail, showroom, restaurant and other commercial projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show modular kitchen designs and completed kitchen projects.",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Present existing-space renovation and transformation projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present the firm's combined interior and architectural design approach.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation results where applicable.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Present floor plans, elevations, sections and architectural concepts.",
    },
    {
      title: "Project Gallery",
      description:
        "Display interior and architecture project photography.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards and firm recognitions.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design, architecture, execution, costing and timelines.",
    },
    {
      title: "Interior & Architecture Blog",
      description:
        "Publish design trends, architecture, renovation and planning insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit interior, architecture and complete-project enquiries.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "arc-interiors-ai",
      icon: "🤖",
      name: "AI Design & Architecture Assistant",
      description:
        "Answer common questions about interior services, architecture services, design process, turnkey execution, consultations and general enquiries.",
      price: "Add-On",
    },
    {
      id: "arc-interiors-crm",
      icon: "📊",
      name: "Integrated Project CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "arc-interiors-cost",
      icon: "🧮",
      name: "Interior & Construction Cost Calculator",
      description:
        "Estimate interior, design or construction costs using property type, built-up area, project type, space type, design requirements, materials and project scope.",
      price: "Add-On",
    },
    {
      id: "arc-interiors-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "arc-interiors-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior and Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "buildspace-designs": createProductDetail({
  //   slug: "buildspace-designs",
  //   name: "BuildSpace Designs",
  //   category: "Interior and Architecture Firm Website",
  //   tagline:
  //     "A modern business website for architecture and interior firms showcasing projects, services, planning capabilities and client enquiries.",
  //   rating: "4.8",
  //   reviewCount: 45,
  //   purchases: 59,
  //   currentPrice: "₹16,999",
  //   oldPrice: "₹41,999",
  //   discount: "60% OFF",
  //   priceRange: "Up to 30 pages",
  //   mainImage: "/images/templates/interior/interior-architect.jpg",
  // }),
   
  "buildspace-designs": createProductDetail({
  slug: "buildspace-designs",

  name: "BuildSpace Designs",

  category: "Interior and Architecture Firm Website",

  tagline:
    "A modern business website for interior and architecture firms that want to present planning expertise, organized residential and commercial projects, professional services and consultation-focused client enquiries.",

  rating: "4.8",
  reviewCount: 45,
  purchases: 59,

  currentPrice: "₹16,999",
  oldPrice: "₹41,999",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage:
    "/images/templates/interior/interior-architect.jpg",

  customFeatures: [
    {
      icon: "📐",
      title: "Architecture Planning Expertise",
      description:
        "Present architectural planning, building design, elevations, space planning and related architecture capabilities.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Show interior design, space planning, modular kitchen and other applicable interior services.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏢",
      title: "Professional Firm Profile",
      description:
        "Present firm experience, expertise, design philosophy, team, awards and professional information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🗂️",
      title: "Structured Project Categories",
      description:
        "Organize interior and architecture projects into clear residential, commercial, office, hospitality, villa and other applicable categories.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏠",
      title: "Residential Project Showcase",
      description:
        "Present residential interior and architecture projects including homes, apartments and villas.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏬",
      title: "Commercial Project Showcase",
      description:
        "Show commercial interior and architecture work including offices, retail spaces and showrooms.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💼",
      title: "Office Interior & Architecture",
      description:
        "Show office planning, interior and architecture projects as a dedicated project category.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏨",
      title: "Hospitality Projects",
      description:
        "Present applicable hospitality interior and architecture projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📋",
      title: "Detailed Project Information",
      description:
        "Present project type, location, area, design style, architecture concept, images, drawings and project status.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections, architectural drawings and design concepts where applicable.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📸",
      title: "Professional Project Gallery",
      description:
        "Display high-quality interior and architectural project visuals in a professional gallery.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Consultation Lead Capture",
      description:
        "Allow potential clients to submit interior, architecture and project-discussion enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiries",
      description:
        "Allow visitors to contact the firm directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Help prospective clients find the firm or studio through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Design & Planning Blog",
      description:
        "Publish architecture ideas, planning insights, interior trends, renovation and project-related content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Modern Business Home Page",
      description:
        "Firm introduction, planning capabilities, featured projects, interior and architecture services and consultation CTA.",
    },
    {
      title: "About Firm",
      description:
        "Present firm experience, expertise, design philosophy, team and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of interior design, space planning and related services.",
    },
    {
      title: "Architecture & Planning Services",
      description:
        "Present architectural planning, building design, elevations and related architecture services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured interior and architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, area, type, design style, architecture concept, drawings, images and status.",
    },
    {
      title: "Residential Projects",
      description:
        "Present residential interior and architecture projects.",
    },
    {
      title: "Commercial Projects",
      description:
        "Present commercial interior and architecture projects.",
    },
    {
      title: "Office Interior & Architecture",
      description:
        "Show office design, planning and architecture projects.",
    },
    {
      title: "Villa & Luxury Projects",
      description:
        "Present applicable villa and luxury design projects.",
    },
    {
      title: "Hospitality Projects",
      description:
        "Show applicable hospitality interior and architecture projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Present modular kitchen designs and completed projects where applicable.",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Show renovation and interior transformation projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present the firm's interior and architectural design approach.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Display floor plans, elevations, sections and design concepts.",
    },
    {
      title: "Project Gallery",
      description:
        "Display interior and architectural project visuals.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about interior design, architecture, planning, execution, costing and timelines.",
    },
    {
      title: "Interior & Architecture Blog",
      description:
        "Publish design trends, architecture, planning, renovation and project insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Capture project-discussion and consultation requests from prospective clients.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "buildspace-ai",
      icon: "🤖",
      name: "AI Design & Planning Assistant",
      description:
        "Answer questions about interior services, architecture services, planning, project process, design styles, consultations and general enquiries.",
      price: "Add-On",
    },
    {
      id: "buildspace-crm",
      icon: "📊",
      name: "Project Enquiry CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, lead management, follow-up management and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "buildspace-cost",
      icon: "🧮",
      name: "Interior & Construction Cost Calculator",
      description:
        "Estimate interior, design or construction costs using property type, built-up area, project type, room or space type, design requirements, materials and project scope.",
      price: "Add-On",
    },
    {
      id: "buildspace-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "buildspace-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior and Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "studio-integrate": createProductDetail({
  //   slug: "studio-integrate",
  //   name: "Studio Integrate",
  //   category: "Interior and Architecture Firm Website",
  //   tagline:
  //     "A premium website for integrated design firms offering architecture, interiors, project management and turnkey execution.",
  //   rating: "4.9",
  //   reviewCount: 51,
  //   purchases: 68,
  //   currentPrice: "₹18,999",
  //   oldPrice: "₹50,999",
  //   discount: "63% OFF",
  //   priceRange: "Up to 35 pages",
  //   mainImage: "/images/templates/interior/interior-architect.jpg",
  // }),

   "studio-integrate": createProductDetail({
  slug: "studio-integrate",

  name: "Studio Integrate",

  category: "Interior and Architecture Firm Website",

  tagline:
    "A premium integrated design website for firms combining architecture, interiors, planning and turnkey execution under one professional project-delivery brand.",

  rating: "4.9",
  reviewCount: 51,
  purchases: 68,

  currentPrice: "₹18,999",
  oldPrice: "₹50,999",
  discount: "63% OFF",
  priceRange: "Up to 35 pages",

  mainImage:
    "/images/templates/interior/interior-architect.jpg",

  customFeatures: [
    {
      icon: "🔗",
      title: "Integrated Design Practice",
      description:
        "Present architecture and interior design capabilities together under one unified professional brand.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏢",
      title: "Premium Firm Profile",
      description:
        "Show firm experience, expertise, design philosophy, team, awards and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏛️",
      title: "Architecture Services",
      description:
        "Present architectural planning, building design, elevations, space planning and related architecture services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Show interior design, space planning, modular kitchen, turnkey interior and related services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛠️",
      title: "Turnkey Design-to-Execution",
      description:
        "Present complete design-to-execution and turnkey project-delivery capabilities.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🖼️",
      title: "Integrated Project Portfolio",
      description:
        "Show completed, ongoing and featured interior and architecture projects in one portfolio.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏠",
      title: "Residential Projects",
      description:
        "Present homes, apartments, villas and other residential interior and architecture projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏬",
      title: "Commercial Projects",
      description:
        "Show offices, retail spaces, showrooms, restaurants and other commercial projects.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Projects",
      description:
        "Show modular kitchen designs and completed kitchen projects where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔄",
      title: "Renovation & Remodeling",
      description:
        "Present renovation, remodeling and interior transformation projects.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Case Studies",
      description:
        "Present project type, location, area, design style, architecture concept, drawings, images, features and status.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections, architectural drawings and design concepts where applicable.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📸",
      title: "Premium Project Gallery",
      description:
        "Display interior and architectural photography and other project visuals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Integrated Project Consultation",
      description:
        "Allow prospective clients to submit interior, architecture and complete-project consultation enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow prospective clients to contact the integrated design firm directly through WhatsApp.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Integrated Home Page",
      description:
        "Firm introduction, featured projects, architecture and interior services, design approach and consultation CTA.",
    },
    {
      title: "About Firm",
      description:
        "Present firm experience, expertise, team, design philosophy and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Complete overview of interior design, space planning and related services.",
    },
    {
      title: "Architecture Services",
      description:
        "Complete overview of architectural planning, building design, elevations and related services.",
    },
    {
      title: "Turnkey / Design & Build",
      description:
        "Present complete design-to-execution project capabilities where applicable.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed, ongoing and featured interior and architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design style, architecture concept, images, drawings, features and status.",
    },
    {
      title: "Residential Projects",
      description:
        "Present residential interior and architecture projects.",
    },
    {
      title: "Commercial Projects",
      description:
        "Present commercial interior and architecture projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show modular kitchen designs and completed projects where applicable.",
    },
    {
      title: "Turnkey Projects",
      description:
        "Show design-to-execution / turnkey interior projects.",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Present existing-space renovation and transformation projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present the firm's integrated interior and architectural design principles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation results where applicable.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Present floor plans, elevations, sections and architectural concepts.",
    },
    {
      title: "Project Gallery",
      description:
        "Display interior and architecture photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present firm awards, recognitions and professional achievements.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about interiors, architecture, execution, costing and project timelines.",
    },
    {
      title: "Interior & Architecture Blog",
      description:
        "Publish design trends, architecture ideas, renovation, home interiors and project insights.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to submit integrated-design and project consultation requests.",
    },
    {
      title: "Contact & Studio Location",
      description:
        "Phone, WhatsApp, email, office address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "studio-integrate-ai",
      icon: "🤖",
      name: "AI Integrated Design Assistant",
      description:
        "Answer common questions about interior services, architecture services, turnkey execution, project process, design styles and consultations.",
      price: "Add-On",
    },
    {
      id: "studio-integrate-crm",
      icon: "📊",
      name: "Integrated Project CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, lead management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "studio-integrate-cost",
      icon: "🧮",
      name: "Interior & Construction Cost Calculator",
      description:
        "Estimate interior, design or construction costs using property type, built-up area, project type, room or space type, design requirements, material or finish and project scope.",
      price: "Add-On",
    },
    {
      id: "studio-integrate-domain",
      icon: "🌐",
      name: "Professional Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "studio-integrate-hosting",
      icon: "☁️",
      name: "Premium Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior and Architecture Firm Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Firm Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Design Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // "minimal-interior-portfolio": createProductDetail({
  //   slug: "minimal-interior-portfolio",
  //   name: "Minimal Interior Portfolio",
  //   category: "Interior Designer Portfolio Website",
  //   tagline:
  //     "A minimal portfolio website for independent interior designers who want to showcase projects, design style and client work clearly.",
  //   rating: "4.6",
  //   reviewCount: 28,
  //   purchases: 32,
  //   currentPrice: "₹8,999",
  //   oldPrice: "₹17,999",
  //   discount: "48% OFF",
  //   priceRange: "Up to 15 pages",
  //   mainImage: "/images/templates/interior/interior-portfolio.jpg",
  // }),
  
  "minimal-interior-portfolio": createProductDetail({
  slug: "minimal-interior-portfolio",

  name: "Minimal Interior Portfolio",

  category: "Interior Designer Portfolio Website",

  tagline:
    "A clean and minimal portfolio website for independent interior designers who want to present their profile, selected projects, design style and consultation details without unnecessary complexity.",

  rating: "4.6",
  reviewCount: 28,
  purchases: 32,

  currentPrice: "₹8,999",
  oldPrice: "₹17,999",
  discount: "48% OFF",
  priceRange: "Up to 15 pages",

  mainImage:
    "/images/templates/interior/interior-portfolio.jpg",

  customFeatures: [
    {
      icon: "👤",
      title: "Personal Designer Profile",
      description:
        "Present experience, specialization, design approach, awards and professional information clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Selected Project Portfolio",
      description:
        "Show completed, ongoing and featured interior projects in a clean portfolio layout.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎨",
      title: "Design Style Showcase",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📐",
      title: "Simple Project Details",
      description:
        "Show project type, location, area, design style, images, description and key features.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏠",
      title: "Residential Interior Work",
      description:
        "Present homes, apartments, villas and other residential interior projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏢",
      title: "Commercial Interior Work",
      description:
        "Show office, retail, showroom, restaurant and other applicable commercial projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📸",
      title: "Minimal Project Gallery",
      description:
        "Display high-quality interior images without overcrowding the portfolio experience.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🔄",
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🛋️",
      title: "Design Services",
      description:
        "Present available interior design services in a simple, easy-to-understand format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow potential clients to request an interior design consultation or project discussion.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client feedback and project experiences to support professional credibility.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow prospective clients to contact the designer directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call",
      description:
        "Provide a direct calling option for project and consultation enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Simple FAQ",
      description:
        "Answer common questions about design process, timelines, costing and materials.",
      iconBackground: "#e7f5ef",
    },
  ],

  customPackageIncludes: [
    {
      title: "Minimal Home Page",
      description:
        "Designer introduction, selected projects, services, design styles and consultation CTA.",
    },
    {
      title: "About Designer",
      description:
        "Present experience, philosophy, expertise and professional information.",
    },
    {
      title: "Design Services",
      description:
        "Provide a clear overview of available interior design services.",
    },
    {
      title: "Selected Portfolio",
      description:
        "Show completed and ongoing projects in a clean portfolio format.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, key features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present homes, apartments, villas and other residential projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom and other applicable commercial projects.",
    },
    {
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display selected high-quality interior project images.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, timeline, costing and materials.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow visitors to submit consultation and project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "minimal-interior-ai",
      icon: "🤖",
      name: "AI Designer Assistant",
      description:
        "Answer common questions about design services, project process, design styles, consultation information and general enquiries.",
      price: "Add-On",
    },
    {
      id: "minimal-interior-crm",
      icon: "📊",
      name: "Designer Lead CRM",
      description:
        "Connect portfolio enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "minimal-interior-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Estimate interior costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "minimal-interior-domain",
      icon: "🌐",
      name: "Portfolio Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "minimal-interior-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Designer Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Designer Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Before & After Gallery",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),
  
  // "creative-interior-showcase": createProductDetail({
  //   slug: "creative-interior-showcase",
  //   name: "Creative Interior Showcase",
  //   category: "Interior Designer Portfolio Website",
  //   tagline:
  //     "A visual-first interior portfolio website for designers who want to highlight completed spaces, concepts and design services.",
  //   rating: "4.7",
  //   reviewCount: 36,
  //   purchases: 46,
  //   currentPrice: "₹10,999",
  //   oldPrice: "₹23,999",
  //   discount: "54% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/interior-portfolio.jpg",
  // }),
    
  "creative-interior-showcase": createProductDetail({
  slug: "creative-interior-showcase",

  name: "Creative Interior Showcase",

  category: "Interior Designer Portfolio Website",

  tagline:
    "A visual-first interior portfolio website for designers who want to showcase completed spaces, design concepts, transformation stories and services through strong imagery and project-focused presentation.",

  rating: "4.7",
  reviewCount: 36,
  purchases: 46,

  currentPrice: "₹10,999",
  oldPrice: "₹23,999",
  discount: "54% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/interior-portfolio.jpg",

  customFeatures: [
    {
      icon: "📸",
      title: "Visual-First Project Gallery",
      description:
        "Present high-quality interior photography in a strong gallery-led portfolio experience.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Completed Space Showcase",
      description:
        "Show completed, ongoing and featured interior spaces professionally.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎨",
      title: "Design Concept Presentation",
      description:
        "Present project design styles, concepts and creative direction clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔄",
      title: "Before & After Stories",
      description:
        "Show renovation and transformation projects through before-and-after visuals where applicable.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Project Detail Pages",
      description:
        "Show project type, location, area, design style, images, description and key features.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Interior Showcase",
      description:
        "Present homes, apartments, villas and other residential interior projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏬",
      title: "Commercial Interior Showcase",
      description:
        "Present offices, retail, showrooms, restaurants and other commercial interior projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🍽️",
      title: "Modular Kitchen Projects",
      description:
        "Show modular kitchen designs and completed kitchen projects where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🛋️",
      title: "Design Services Showcase",
      description:
        "Present interior design services clearly alongside project work.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "✨",
      title: "Design Style Highlights",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable interior styles.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences to strengthen trust.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow visitors to request interior design consultations and project discussions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow prospective clients to contact the designer directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for consultation and project enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Design Inspiration Blog",
      description:
        "Publish design inspiration, interior trends, renovation tips, home décor and project-related content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Visual Home Page",
      description:
        "Designer introduction, featured spaces, services, design styles, testimonials and consultation CTA.",
    },
    {
      title: "About Designer",
      description:
        "Present experience, design approach, specialization and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Provide a clear overview of available interior design services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing projects through a visual-first portfolio.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, key features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present homes, apartments, villas and other residential projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom and other commercial projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show modular kitchen designs and completed projects where applicable.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display high-quality interior photography in a dedicated gallery.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, project timelines, costing and materials.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends, renovation tips and home décor content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit consultation and project enquiries.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "creative-showcase-ai",
      icon: "🤖",
      name: "AI Design Showcase Assistant",
      description:
        "Answer common questions about interior services, design styles, project process, consultations and general enquiries.",
      price: "Add-On",
    },
    {
      id: "creative-showcase-crm",
      icon: "📊",
      name: "Portfolio Enquiry CRM",
      description:
        "Connect portfolio enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "creative-showcase-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Estimate interior costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "creative-showcase-domain",
      icon: "🌐",
      name: "Portfolio Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "creative-showcase-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Designer Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Designer Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Before & After Gallery",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


  // "designer-portfolio-studio": createProductDetail({
  //   slug: "designer-portfolio-studio",
  //   name: "Designer Portfolio Studio",
  //   category: "Interior Designer Portfolio Website",
  //   tagline:
  //     "A professional portfolio website for interior designers with project galleries, service sections and direct client enquiry options.",
  //   rating: "4.8",
  //   reviewCount: 42,
  //   purchases: 53,
  //   currentPrice: "₹11,999",
  //   oldPrice: "₹27,999",
  //   discount: "57% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/interior-portfolio.jpg",
  // }),

   "designer-portfolio-studio": createProductDetail({
  slug: "designer-portfolio-studio",

  name: "Designer Portfolio Studio",

  category: "Interior Designer Portfolio Website",

  tagline:
    "A professional portfolio website for interior designers who want to build a strong personal brand, present services and completed projects, and convert visitors into direct consultation and project enquiries.",

  rating: "4.8",
  reviewCount: 42,
  purchases: 53,

  currentPrice: "₹11,999",
  oldPrice: "₹27,999",
  discount: "57% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/interior-portfolio.jpg",

  customFeatures: [
    {
      icon: "👤",
      title: "Professional Designer Profile",
      description:
        "Present experience, specialization, design approach, awards and professional information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛋️",
      title: "Interior Design Services",
      description:
        "Present available interior design services clearly for prospective clients.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Professional Project Portfolio",
      description:
        "Show completed, ongoing and featured interior projects in a structured portfolio.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📸",
      title: "Project Gallery",
      description:
        "Display high-quality interior photography in a professional gallery format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📐",
      title: "Detailed Project Pages",
      description:
        "Present project type, location, area, design style, images, description and key features.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏠",
      title: "Residential Interior Projects",
      description:
        "Show homes, apartments, villas and other residential interior projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏬",
      title: "Commercial Interior Projects",
      description:
        "Present office, retail, showroom, restaurant and other commercial interior work.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎨",
      title: "Design Styles",
      description:
        "Show modern, contemporary, luxury, minimalist and other applicable interior design styles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔄",
      title: "Before & After",
      description:
        "Show renovation and transformation results where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and project experiences to strengthen professional credibility.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Direct Consultation Enquiry",
      description:
        "Allow potential clients to submit consultation or project enquiries directly.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow prospective clients to contact the designer directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct calling option for project and consultation enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Studio Location",
      description:
        "Show studio or office location with Google Maps navigation where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends, renovation tips, home décor and project-related content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Professional Home Page",
      description:
        "Designer introduction, featured projects, services, design styles, testimonials and consultation CTA.",
    },
    {
      title: "About Designer",
      description:
        "Present experience, philosophy, expertise, specialization and professional information.",
    },
    {
      title: "Interior Design Services",
      description:
        "Provide a clear overview of available design services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show completed and ongoing interior projects professionally.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, location, type, area, design style, images, key features and description.",
    },
    {
      title: "Residential Interior",
      description:
        "Present homes, apartments, villas and other residential projects.",
    },
    {
      title: "Commercial Interior",
      description:
        "Present office, retail, showroom, restaurant and other commercial projects.",
    },
    {
      title: "Modular Kitchen",
      description:
        "Show modular kitchen designs and completed projects where applicable.",
    },
    {
      title: "Design Styles",
      description:
        "Present modern, contemporary, luxury, minimalist and other applicable styles.",
    },
    {
      title: "Before & After",
      description:
        "Show renovation and transformation projects where applicable.",
    },
    {
      title: "Project Gallery",
      description:
        "Display professional interior project photography.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about design process, project timelines, costing and materials.",
    },
    {
      title: "Interior Design Blog",
      description:
        "Publish design inspiration, trends, renovation tips and home décor content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to submit project and consultation requests.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
    {
      title: "Studio Location",
      description:
        "Show office or studio address with Google Maps navigation where applicable.",
    },
  ],

  customAddons: [
    {
      id: "designer-portfolio-ai",
      icon: "🤖",
      name: "AI Designer Enquiry Assistant",
      description:
        "Answer common questions about design services, project process, design styles, consultations, studio timings and general enquiries.",
      price: "Add-On",
    },
    {
      id: "designer-portfolio-crm",
      icon: "📊",
      name: "Designer Enquiry CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "designer-portfolio-cost",
      icon: "🧮",
      name: "Interior Cost Calculator",
      description:
        "Estimate interior costs using property type, area, room type, interior style, material or finish and project requirements.",
      price: "Add-On",
    },
    {
      id: "designer-portfolio-domain",
      icon: "🌐",
      name: "Professional Portfolio Domain",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "designer-portfolio-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Interior Designer Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Designer Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Before & After Gallery",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}), 

  // "modern-architect-portfolio": createProductDetail({
  //   slug: "modern-architect-portfolio",
  //   name: "Modern Architect Portfolio",
  //   category: "Architect Portfolio Website",
  //   tagline:
  //     "A clean architect portfolio website for presenting concepts, completed projects, design philosophy and professional experience.",
  //   rating: "4.7",
  //   reviewCount: 31,
  //   purchases: 39,
  //   currentPrice: "₹12,999",
  //   oldPrice: "₹28,999",
  //   discount: "55% OFF",
  //   priceRange: "Up to 20 pages",
  //   mainImage: "/images/templates/interior/architect-portfolio.jpg",
  // }),

   "modern-architect-portfolio": createProductDetail({
  slug: "modern-architect-portfolio",

  name: "Modern Architect Portfolio",

  category: "Architect Portfolio Website",

  tagline:
    "A clean personal portfolio website for architects who want to present professional experience, architectural concepts, selected projects, design philosophy and consultation information.",

  rating: "4.7",
  reviewCount: 31,
  purchases: 39,

  currentPrice: "₹12,999",
  oldPrice: "₹28,999",
  discount: "55% OFF",
  priceRange: "Up to 20 pages",

  mainImage:
    "/images/templates/interior/architect-portfolio.jpg",

  customFeatures: [
    {
      icon: "👤",
      title: "Personal Architect Profile",
      description:
        "Present architectural experience, expertise, qualifications, philosophy, awards and professional information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Selected Architecture Portfolio",
      description:
        "Show completed, ongoing and featured architecture projects in a clean personal portfolio.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧠",
      title: "Design Philosophy",
      description:
        "Present architectural principles, creative vision and personal design approach.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📐",
      title: "Project Case Studies",
      description:
        "Present project type, location, area, design concept, images, description, features and project status.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏠",
      title: "Residential Architecture",
      description:
        "Show homes, apartments, villas and other residential architecture projects.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces, commercial buildings and related projects.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏨",
      title: "Institutional & Hospitality Work",
      description:
        "Present schools, institutions, hotels, resorts and other applicable projects.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📏",
      title: "Drawings & Plans",
      description:
        "Show architectural drawings, floor plans, elevations, sections and concepts where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📸",
      title: "Architecture Gallery",
      description:
        "Display architectural photography, drawings and project visuals.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Present architectural awards, recognitions and professional achievements.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Client Testimonials",
      description:
        "Display client reviews and completed-project experiences.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow prospective clients to request architecture consultations or project discussions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow potential clients to contact the architect directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct calling option for architecture and consultation enquiries.",
      iconBackground: "#e7f5ef",
    },
  ],

  customPackageIncludes: [
    {
      title: "Portfolio Home Page",
      description:
        "Architect introduction, featured projects, design philosophy, testimonials and consultation CTA.",
    },
    {
      title: "About Architect",
      description:
        "Present professional experience, expertise, qualifications, philosophy and achievements.",
    },
    {
      title: "Architecture Services",
      description:
        "Provide an overview of architectural design, planning, consultation and related services.",
    },
    {
      title: "Projects / Portfolio",
      description:
        "Show selected completed, ongoing and featured architecture projects.",
    },
    {
      title: "Project Detail Pages",
      description:
        "Project overview, type, location, area, design concept, images, drawings, features and status.",
    },
    {
      title: "Residential Architecture",
      description:
        "Present homes, villas, apartments and other residential projects.",
    },
    {
      title: "Commercial Architecture",
      description:
        "Present offices, retail spaces and commercial-building projects.",
    },
    {
      title: "Institutional & Hospitality",
      description:
        "Show schools, institutions, hotels, resorts and other applicable projects.",
    },
    {
      title: "Design Philosophy",
      description:
        "Present architectural principles, approach and creative vision.",
    },
    {
      title: "Drawings & Plans",
      description:
        "Show floor plans, elevations, sections and architectural concepts.",
    },
    {
      title: "Project Gallery",
      description:
        "Display architectural photography and project visuals.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Present professional awards and architectural recognitions.",
    },
    {
      title: "Client Testimonials",
      description:
        "Show client reviews and completed-project experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about architecture services, planning, process and consultation.",
    },
    {
      title: "Architecture Blog",
      description:
        "Publish architecture trends, design ideas, planning insights and project stories.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow visitors to submit architecture consultation and project requests.",
    },
    {
      title: "Contact Page",
      description:
        "Phone, WhatsApp, email and professional contact information.",
    },
  ],

  customAddons: [
    {
      id: "modern-architect-ai",
      icon: "🤖",
      name: "AI Architect Portfolio Assistant",
      description:
        "Answer common questions about architecture services, project types, design process, consultations and general enquiries.",
      price: "Add-On",
    },
    {
      id: "modern-architect-crm",
      icon: "📊",
      name: "Architect Lead CRM",
      description:
        "Connect project enquiries with CRM workflows for lead capture, management, follow-up and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "modern-architect-cost",
      icon: "🧮",
      name: "Architecture Project Cost Calculator",
      description:
        "Estimate architecture or project costs using property type, built-up area, project type, construction area, design requirements and project scope.",
      price: "Add-On",
    },
    {
      id: "modern-architect-domain",
      icon: "🌐",
      name: "Portfolio Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "modern-architect-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Architect Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Drawings & Plans",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
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
  

  customSpecifications: [
    {
      label: "Website Type",
      value: "Architect Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Architect Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Portfolio",
      value: "Included",
      badge: "included",
    },
    {
      label: "Project Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Drawings & Plans",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

  // Healthcare Details
//   "medicare-plus-hospital": createProductDetail({
//   slug: "medicare-plus-hospital",

//   name: "MediCare Plus Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A professional hospital website designed for multispeciality hospitals and healthcare organizations with doctor profiles, departments, appointment booking and patient enquiry features.",

//   rating: "4.8",
//   reviewCount: 45,
//   purchases: 156,

//   currentPrice: "₹14,999",
//   oldPrice: "₹37,499",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "👨‍⚕️",
//       title: "Doctor Profiles",
//       description:
//         "Show doctors, specializations, experience and consultation information in dedicated profiles.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "🏥",
//       title: "Hospital Departments",
//       description:
//         "Present cardiology, orthopedics, neurology and other hospital departments clearly.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to submit appointment requests directly through the website.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "📱",
//       title: "Mobile Responsive",
//       description:
//         "Optimized for patients browsing the hospital website from mobile, tablet and desktop devices.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "💬",
//       title: "Patient Enquiry",
//       description:
//         "Generate patient leads through enquiry forms, contact actions and WhatsApp integration.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "Healthcare SEO",
//       description:
//         "SEO-friendly structure for hospital services, departments, doctors and treatment pages.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Hospital overview, major departments, doctors, facilities and appointment call-to-actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Present hospital history, infrastructure, accreditations and healthcare expertise.",
//     },
//     {
//       title: "Departments",
//       description:
//         "Dedicated sections for hospital departments and medical specialties.",
//     },
//     {
//       title: "Doctors",
//       description:
//         "Doctor listing with specialization, experience and professional information.",
//     },
//     {
//       title: "Facilities",
//       description:
//         "Show emergency care, diagnostics, ICU, operation theatres and other hospital facilities.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Patient appointment request form connected to the hospital enquiry workflow.",
//     },
//     {
//       title: "Patient Testimonials",
//       description:
//         "Display patient experiences and hospital reviews.",
//     },
//     {
//       title: "Contact Page",
//       description:
//         "Hospital address, phone numbers, emergency contact, map and enquiry form.",
//     },
//   ],
// }),
"medicare-plus-hospital": createProductDetail({
  slug: "medicare-plus-hospital",

  name: "MediCare Plus Hospital",

  category: "Hospital Website",

  tagline:
    "A multispeciality hospital website with a dedicated Cardiology and Heart Care focus, presenting cardiologists, cardiac diagnostics, heart treatments, procedures, facilities and patient appointment enquiries.",

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
      icon: "🏥",
      title: "Cardiology-Focused Hospital Design",
      description:
        "Professional hospital website presentation with dedicated focus on cardiology, heart care and cardiac services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Profiles",
      description:
        "Show cardiologist qualifications, specialization, experience, certifications and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❤️",
      title: "Cardiology Services",
      description:
        "Present cardiology consultations, diagnostics, treatments and cardiac-care services clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🫀",
      title: "Heart Treatment Information",
      description:
        "Provide patient-friendly information about cardiac conditions and available heart treatments.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Present available cardiac diagnostic services and heart-related investigations.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚕️",
      title: "Cardiac Procedures",
      description:
        "Create dedicated information sections for available cardiac procedures and interventions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Present heart-health screening, prevention and lifestyle-related cardiac-care information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⚙️",
      title: "Facilities & Technology",
      description:
        "Showcase hospital cardiac facilities, diagnostic equipment, technology and infrastructure.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Enquiry",
      description:
        "Allow patients to request cardiology consultations and hospital appointments online.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to strengthen trust in hospital cardiac care.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the hospital directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for appointments and cardiac-care enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help patients locate the hospital through integrated Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Heart Care FAQ",
      description:
        "Answer common questions related to cardiology services, diagnostics, treatments and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness information.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, cardiology services, specialists, facilities and appointment CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital experience, facilities, approach and professional information.",
    },
    {
      title: "Cardiology Department",
      description:
        "Dedicated section presenting the hospital's cardiology and heart-care services.",
    },
    {
      title: "Cardiologist Profiles",
      description:
        "Professional cardiologist information including specialization and experience.",
    },
    {
      title: "Cardiology Services",
      description:
        "Overview of consultations, diagnostics, treatments and cardiac-care services.",
    },
    {
      title: "Heart Treatments",
      description:
        "Information about major cardiac conditions and treatment options.",
    },
    {
      title: "Cardiac Diagnostics",
      description:
        "Present available cardiac diagnostic services and investigations.",
    },
    {
      title: "Cardiac Procedures",
      description:
        "Dedicated information for available cardiac procedures and interventions.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health screening, prevention and lifestyle-related care information.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Showcase cardiac facilities, technology, diagnostic equipment and hospital infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and hospital-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common cardiology and heart-care questions.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention and awareness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request hospital appointments and cardiology consultations.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "medicare-cardiac-ai",
      icon: "🤖",
      name: "AI Cardiac Care Assistant",
      description:
        "Answer common questions about cardiology services, treatment information, cardiologists, hospital timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "medicare-cardiac-crm",
      icon: "📊",
      name: "Hospital Enquiry CRM",
      description:
        "Connect patient enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "medicare-cardiac-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac treatments or procedures.",
      price: "Add-On",
    },
    {
      id: "medicare-cardiac-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "medicare-cardiac-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "medicare-cardiac-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "citycare-hospital": createProductDetail({
//   slug: "citycare-hospital",

//   name: "CityCare Multispeciality Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A complete multispeciality hospital website for presenting departments, specialists, facilities, emergency services and online appointment options.",

//   rating: "4.8",
//   reviewCount: 39,
//   purchases: 119,

//   currentPrice: "₹17,999",
//   oldPrice: "₹46,499",
//   discount: "61% OFF",
//   priceRange: "Up to 35 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🏥",
//       title: "Multispeciality Departments",
//       description:
//         "Present all major medical departments and specialties in a clear, structured format.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Doctor Directory",
//       description:
//         "Display doctors with specialization, experience, qualifications and consultation details.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to request appointments with selected departments or doctors.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "🚑",
//       title: "Emergency Information",
//       description:
//         "Highlight emergency numbers, ambulance support and 24/7 emergency services.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "💬",
//       title: "Patient Enquiry",
//       description:
//         "Capture enquiries through forms, WhatsApp and direct contact actions.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "Healthcare SEO",
//       description:
//         "SEO-friendly pages for departments, treatments, doctors and healthcare services.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Hospital overview, departments, doctors, facilities and appointment call-to-actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Hospital profile, history, mission, infrastructure and accreditations.",
//     },
//     {
//       title: "Departments",
//       description:
//         "Dedicated pages or sections for every medical specialty.",
//     },
//     {
//       title: "Doctor Directory",
//       description:
//         "Professional doctor listings with specialization and experience.",
//     },
//     {
//       title: "Facilities",
//       description:
//         "Show ICU, diagnostics, pharmacy, emergency care and hospital infrastructure.",
//     },
//     {
//       title: "Emergency Services",
//       description:
//         "Emergency contact details, ambulance information and urgent-care support.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Patient appointment form for selected doctors or departments.",
//     },
//     {
//       title: "Contact Page",
//       description:
//         "Hospital location, map, phone numbers, email and patient enquiry form.",
//     },
//   ],
// }),

"citycare-hospital": createProductDetail({
  slug: "citycare-hospital",

  name: "CityCare Multispeciality Hospital",

  category: "Hospital Website",

  tagline:
    "A multispeciality hospital website with a dedicated ENT and Head-Neck Care focus, presenting ENT specialists, ear, nose and throat services, hearing care, treatment information, facilities and patient appointment enquiries.",

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
      title: "ENT-Focused Hospital Design",
      description:
        "Professional hospital website presentation with dedicated focus on ENT, head-neck care and specialist services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "ENT Specialist Profiles",
      description:
        "Show ENT specialist qualifications, specialization, experience, certifications and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👂",
      title: "Ear Care",
      description:
        "Present ear-related treatments, hearing care and common ear-condition information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "👃",
      title: "Nose & Sinus Care",
      description:
        "Present sinus, nasal-condition, allergy-related and other nose-care information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🗣️",
      title: "Throat Care",
      description:
        "Present throat infections, tonsil-related issues, voice problems and related treatments.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎧",
      title: "Hearing & Audiology",
      description:
        "Show hearing tests, hearing-related services and available audiology support.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🩺",
      title: "ENT Services",
      description:
        "Present ear, nose, throat and related healthcare services in a clear structured format.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📋",
      title: "ENT Treatment Information",
      description:
        "Provide clear information about common ENT conditions and available treatment options.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⚙️",
      title: "Facilities & Infrastructure",
      description:
        "Showcase ENT facilities, equipment and treatment infrastructure available at the hospital.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "ENT Appointment Enquiry",
      description:
        "Allow patients to request ENT specialist consultations and hospital appointments online.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and ENT-care experiences to build trust.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the hospital directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for ENT appointments and enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help patients locate the hospital through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❓",
      title: "ENT FAQ",
      description:
        "Answer common patient questions related to ENT conditions, treatments and appointments.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, ENT services, specialists, facilities and appointment CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital experience, facilities, professional approach and ENT-care capabilities.",
    },
    {
      title: "ENT Department",
      description:
        "Dedicated section for the hospital's ear, nose, throat and head-neck services.",
    },
    {
      title: "ENT Specialist Profiles",
      description:
        "Professional specialist profiles including qualification, specialization and experience.",
    },
    {
      title: "ENT Services",
      description:
        "Complete overview of available ear, nose and throat services.",
    },
    {
      title: "Ear Care",
      description:
        "Information about ear conditions, hearing problems and related treatments.",
    },
    {
      title: "Nose & Sinus Care",
      description:
        "Information about sinus, nasal and allergy-related conditions.",
    },
    {
      title: "Throat Care",
      description:
        "Information about throat infections, tonsils, voice issues and related care.",
    },
    {
      title: "Hearing & Audiology",
      description:
        "Present hearing tests and available hearing-related services.",
    },
    {
      title: "ENT Treatments",
      description:
        "Patient-friendly information about major ENT conditions and treatment options.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Show ENT equipment, facilities and treatment infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and ENT treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common ENT treatment and hospital questions.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request ENT appointments and consultations.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "citycare-ent-ai",
      icon: "🤖",
      name: "AI ENT Patient Assistant",
      description:
        "Answer common questions about ENT services, treatments, specialists, hospital timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "citycare-ent-crm",
      icon: "📊",
      name: "ENT Enquiry CRM",
      description:
        "Connect patient enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "citycare-ent-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected ENT treatments or services.",
      price: "Add-On",
    },
    {
      id: "citycare-ent-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select an ENT specialist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "citycare-ent-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "citycare-ent-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "lifeline-super-speciality-hospital": createProductDetail({
//   slug: "lifeline-super-speciality-hospital",

//   name: "Lifeline Super Speciality Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A premium super-speciality hospital website for showcasing departments, doctors, advanced treatments, emergency care and patient services.",

//   rating: "4.8",
//   reviewCount: 42,
//   purchases: 143,

//   currentPrice: "₹18,999",
//   oldPrice: "₹49,999",
//   discount: "62% OFF",
//   priceRange: "Up to 35 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🏥",
//       title: "Speciality Departments",
//       description:
//         "Showcase cardiology, neurology, oncology, orthopedics and other speciality departments.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Specialist Doctors",
//       description:
//         "Display specialist doctors with qualifications, experience and consultation information.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to request appointments with doctors or selected departments.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "🚑",
//       title: "Emergency Services",
//       description:
//         "Prominently display ambulance, emergency and critical-care contact information.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "🩺",
//       title: "Treatment Information",
//       description:
//         "Create dedicated sections for procedures, treatments and speciality services.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "Healthcare SEO",
//       description:
//         "Search-engine-friendly structure for hospital departments, doctors and treatment pages.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Premium hospital homepage with departments, specialists, facilities and appointment actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Hospital background, leadership, accreditations, mission and infrastructure.",
//     },
//     {
//       title: "Specialities",
//       description:
//         "Dedicated sections for major medical specialties and hospital departments.",
//     },
//     {
//       title: "Doctors",
//       description:
//         "Specialist doctor profiles with qualifications, experience and expertise.",
//     },
//     {
//       title: "Treatments",
//       description:
//         "Pages explaining important procedures, surgeries and healthcare services.",
//     },
//     {
//       title: "Facilities",
//       description:
//         "Show ICU, diagnostics, operation theatres, pharmacy and advanced hospital infrastructure.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Patient appointment request form with doctor and department selection.",
//     },
//     {
//       title: "Contact & Emergency",
//       description:
//         "Hospital address, emergency numbers, ambulance support, map and enquiry information.",
//     },
//   ],
// }),

"lifeline-super-speciality-hospital": createProductDetail({
  slug: "lifeline-super-speciality-hospital",

  name: "Lifeline Super Speciality Hospital",

  category: "Hospital Website",

  tagline:
    "A super-speciality hospital website with a dedicated Rehabilitation, Recovery and Elder Care focus, presenting specialists, rehabilitation programs, senior-care services, recovery facilities and patient or family enquiries.",

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
      title: "Rehabilitation-Focused Hospital Design",
      description:
        "Professional hospital website presentation focused on rehabilitation, recovery, senior care and long-term patient support.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Rehabilitation Specialist Profiles",
      description:
        "Present doctors, rehabilitation specialists, nurses and care professionals with qualifications, specialization and experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "♿",
      title: "Rehabilitation Services",
      description:
        "Present physical rehabilitation, mobility care, recovery programs and related rehabilitation services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "👵",
      title: "Elder Care Services",
      description:
        "Show care, assistance, wellness and support services available for senior citizens.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛏️",
      title: "Post-Surgery Rehabilitation",
      description:
        "Provide information about structured recovery and rehabilitation services following surgery.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🧠",
      title: "Stroke & Neurological Rehabilitation",
      description:
        "Present stroke recovery and neurological rehabilitation services where applicable.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🚶",
      title: "Mobility & Recovery",
      description:
        "Present mobility improvement, strength, balance and recovery-related services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏠",
      title: "Home Care Services",
      description:
        "Present home nursing, home rehabilitation and elderly home-care services where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⚙️",
      title: "Facilities & Care Environment",
      description:
        "Showcase rooms, rehabilitation areas, equipment and the hospital's recovery-care environment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation & Care Enquiry",
      description:
        "Allow patients or family members to request consultations, assessments or care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient & Family Testimonials",
      description:
        "Display patient and family experiences to build confidence in rehabilitation and elder-care services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Family Support",
      description:
        "Allow family members to directly contact the hospital through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for rehabilitation and care enquiries.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help patients and families locate the hospital through Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❓",
      title: "Rehabilitation & Elder Care FAQ",
      description:
        "Answer common questions related to rehabilitation, recovery and senior-care services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Health & Care Blog",
      description:
        "Publish rehabilitation, recovery, mobility, senior wellness and care-related content.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, rehabilitation services, elder care, specialists, facilities and enquiry CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital experience, rehabilitation approach, facilities and professional information.",
    },
    {
      title: "Rehabilitation Department",
      description:
        "Dedicated overview of rehabilitation programs and recovery services.",
    },
    {
      title: "Doctor / Specialist Profiles",
      description:
        "Professional profiles for rehabilitation doctors, therapists and care specialists.",
    },
    {
      title: "Rehabilitation Services",
      description:
        "Complete overview of available rehabilitation and recovery programs.",
    },
    {
      title: "Elder Care Services",
      description:
        "Present care, assistance, wellness and support services for senior citizens.",
    },
    {
      title: "Post-Surgery Rehabilitation",
      description:
        "Information about recovery and rehabilitation services following surgery.",
    },
    {
      title: "Stroke & Neurological Rehabilitation",
      description:
        "Dedicated information for neurological and stroke-recovery services where applicable.",
    },
    {
      title: "Mobility & Recovery",
      description:
        "Present strength, balance, mobility and recovery-related services.",
    },
    {
      title: "Home Care Services",
      description:
        "Present home nursing, rehabilitation and elderly home-care services where applicable.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Show therapy areas, rooms, rehabilitation equipment and the care environment.",
    },
    {
      title: "Patient / Family Testimonials",
      description:
        "Display patient and family reviews and care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common rehabilitation and elder-care questions.",
    },
    {
      title: "Health & Care Blog",
      description:
        "Publish rehabilitation, recovery, mobility and senior-wellness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients or family members to submit consultation and care enquiries.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "lifeline-rehab-ai",
      icon: "🤖",
      name: "AI Rehabilitation & Care Assistant",
      description:
        "Answer common questions about rehabilitation services, elder care, therapy information, hospital timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "lifeline-rehab-crm",
      icon: "📊",
      name: "Patient & Family Enquiry CRM",
      description:
        "Connect rehabilitation and care enquiries with CRM workflows for lead and follow-up management.",
      price: "Add-On",
    },
    {
      id: "lifeline-rehab-cost",
      icon: "🧮",
      name: "Treatment / Care Cost Calculator",
      description:
        "Provide estimated costs based on selected rehabilitation, recovery or care services.",
      price: "Add-On",
    },
    {
      id: "lifeline-rehab-booking",
      icon: "💳",
      name: "Online Care Booking + Payment",
      description:
        "Allow patients or family members to select a specialist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "lifeline-rehab-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "lifeline-rehab-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "apollo-care-hospital": createProductDetail({
//   slug: "apollo-care-hospital",

//   name: "Apollo Care Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A modern hospital website for presenting departments, doctors, patient services, treatment information and online appointment options in a clean professional layout.",

//   rating: "4.7",
//   reviewCount: 37,
//   purchases: 128,

//   currentPrice: "₹16,999",
//   oldPrice: "₹41,999",
//   discount: "59% OFF",
//   priceRange: "Up to 30 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🏥",
//       title: "Department Showcase",
//       description:
//         "Present hospital departments and medical specialties in an organized structure.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Doctor Profiles",
//       description:
//         "Display doctors with specialization, qualifications, experience and availability.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Enable patients to send appointment requests directly from the website.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "🩺",
//       title: "Treatment Pages",
//       description:
//         "Explain hospital treatments, procedures and major healthcare services.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "💬",
//       title: "Patient Enquiry",
//       description:
//         "Collect patient enquiries through forms, phone actions and WhatsApp integration.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "SEO Friendly",
//       description:
//         "Optimized page structure for doctors, departments, treatments and hospital services.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Hospital introduction, services, doctors, departments and appointment call-to-actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Hospital profile, vision, mission, infrastructure and healthcare experience.",
//     },
//     {
//       title: "Departments",
//       description:
//         "Dedicated sections for major hospital departments and specialties.",
//     },
//     {
//       title: "Doctors",
//       description:
//         "Professional doctor profiles with specialization and experience.",
//     },
//     {
//       title: "Treatments",
//       description:
//         "Pages describing major treatments, procedures and medical services.",
//     },
//     {
//       title: "Patient Services",
//       description:
//         "Information about admission, insurance, emergency support and patient facilities.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Appointment form for patients to choose a department or doctor.",
//     },
//     {
//       title: "Contact Page",
//       description:
//         "Hospital address, phone numbers, map, WhatsApp and enquiry details.",
//     },
//   ],
// }),

"apollo-care-hospital": createProductDetail({
  slug: "apollo-care-hospital",

  name: "Apollo Care Hospital",

  category: "Hospital Website",

  tagline:
    "A hospital website with a dedicated Ayurveda, Panchakarma and Wellness focus, presenting Ayurvedic doctors, therapies, preventive wellness programs, treatment information and consultation enquiries.",

  rating: "4.8",
  reviewCount: 41,
  purchases: 137,

  currentPrice: "₹19,999",
  oldPrice: "₹52,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌿",
      title: "Ayurveda-Focused Hospital Design",
      description:
        "Clean, calming and professional hospital presentation focused on Ayurveda, wellness and holistic healthcare.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Ayurvedic Doctor Profiles",
      description:
        "Show Ayurvedic doctor or practitioner qualifications, specialization, experience and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🪷",
      title: "Ayurveda Services",
      description:
        "Present Ayurvedic treatments, therapies, wellness programs and consultation services clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧘",
      title: "Wellness Programs",
      description:
        "Present detox, lifestyle, stress-management, wellness and preventive-care programs.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💆",
      title: "Treatment & Therapy Information",
      description:
        "Provide detailed information about available Ayurvedic treatments and therapies.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🌱",
      title: "Panchakarma Services",
      description:
        "Create dedicated sections for Panchakarma and related Ayurvedic therapies.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🖼️",
      title: "Treatment & Therapy Gallery",
      description:
        "Showcase therapy rooms, hospital facilities and the wellness-care environment.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow visitors to request Ayurveda consultations, treatment enquiries or wellness-program appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient and client experiences to build trust in Ayurveda and wellness services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow visitors to contact the hospital directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for treatment, therapy and consultation enquiries.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help visitors locate the hospital using Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Ayurveda & Wellness FAQ",
      description:
        "Answer common questions about Ayurveda treatments, therapies and wellness programs.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Ayurveda & Wellness Blog",
      description:
        "Publish Ayurveda, lifestyle, wellness, nutrition and preventive-care information.",
      iconBackground: "#e7f5ef",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, Ayurvedic treatments, therapies, doctors, wellness programs and enquiry CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital philosophy, facilities, care approach and professional information.",
    },
    {
      title: "Ayurvedic Doctor Profiles",
      description:
        "Professional profiles with qualifications, specialization and experience.",
    },
    {
      title: "Ayurveda Services",
      description:
        "Complete overview of available Ayurvedic healthcare and consultation services.",
    },
    {
      title: "Ayurvedic Treatments",
      description:
        "Dedicated treatment and therapy information for patients.",
    },
    {
      title: "Panchakarma",
      description:
        "Detailed Panchakarma therapies and related treatment information.",
    },
    {
      title: "Wellness Programs",
      description:
        "Present detox, lifestyle, wellness and preventive-care programs.",
    },
    {
      title: "Therapy Details",
      description:
        "Individual pages or sections for available Ayurvedic therapies.",
    },
    {
      title: "Treatment / Therapy Gallery",
      description:
        "Show therapy areas, facilities and wellness-care environments.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient and client reviews and experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common Ayurveda and wellness-related questions.",
    },
    {
      title: "Ayurveda & Wellness Blog",
      description:
        "Publish lifestyle, wellness, nutrition and healthy-living content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow visitors to submit consultation and wellness-program enquiries.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "apollo-ayurveda-ai",
      icon: "🤖",
      name: "AI Ayurveda Assistant",
      description:
        "Answer common questions about Ayurveda services, treatments, therapies, wellness programs, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "apollo-ayurveda-crm",
      icon: "📊",
      name: "Ayurveda Enquiry CRM",
      description:
        "Connect treatment and wellness enquiries with CRM workflows for lead and follow-up management.",
      price: "Add-On",
    },
    {
      id: "apollo-ayurveda-cost",
      icon: "🧮",
      name: "Treatment / Therapy Cost Calculator",
      description:
        "Provide estimated costs based on selected Ayurvedic treatments, therapies or wellness services.",
      price: "Add-On",
    },
    {
      id: "apollo-ayurveda-booking",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow visitors to select a doctor, therapy or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "apollo-ayurveda-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "apollo-ayurveda-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "greenfield-hospital": createProductDetail({
//   slug: "greenfield-hospital",

//   name: "Greenfield Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A clean healthcare website for hospitals and clinics that need to present doctors, emergency services, departments and patient appointment options professionally.",

//   rating: "4.7",
//   reviewCount: 34,
//   purchases: 96,

//   currentPrice: "₹15,999",
//   oldPrice: "₹37,999",
//   discount: "58% OFF",
//   priceRange: "Up to 30 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🏥",
//       title: "Hospital Departments",
//       description:
//         "Organize and display all major medical departments and healthcare services clearly.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Doctor Directory",
//       description:
//         "Show doctor profiles with specialization, experience and consultation information.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to request appointments with doctors and hospital departments.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "🚑",
//       title: "Emergency Services",
//       description:
//         "Highlight emergency contact details, ambulance support and urgent-care services.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "⭐",
//       title: "Patient Testimonials",
//       description:
//         "Show patient reviews and healthcare experiences to improve trust.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "📱",
//       title: "Mobile Responsive",
//       description:
//         "Provide a smooth experience across mobile phones, tablets and desktop devices.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Hospital introduction, services, departments, doctors and appointment actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Hospital history, mission, healthcare expertise and infrastructure information.",
//     },
//     {
//       title: "Departments",
//       description:
//         "Structured pages for medical specialties and hospital services.",
//     },
//     {
//       title: "Doctors",
//       description:
//         "Professional doctor profiles with qualifications and specialization.",
//     },
//     {
//       title: "Emergency Services",
//       description:
//         "Emergency care details, ambulance contact and urgent-care information.",
//     },
//     {
//       title: "Patient Testimonials",
//       description:
//         "Display patient feedback, experiences and hospital reviews.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Online patient appointment and enquiry form.",
//     },
//     {
//       title: "Contact Page",
//       description:
//         "Hospital location, map, phone numbers, WhatsApp and enquiry information.",
//     },
//   ],
// }),

"greenfield-hospital": createProductDetail({
  slug: "greenfield-hospital",

  name: "Greenfield Hospital",

  category: "Hospital Website",

  tagline:
    "A hospital website with a dedicated Dermatology, Skin, Hair and Aesthetic Care focus, presenting specialists, treatments, cosmetic services, treatment results and patient appointment enquiries.",

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
      title: "Dermatology-Focused Hospital Design",
      description:
        "Modern and professional hospital presentation focused on dermatology, skin care, hair care and aesthetic services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Dermatologist Profiles",
      description:
        "Show dermatologist qualifications, specialization, experience, certifications and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✨",
      title: "Skin Treatments",
      description:
        "Present available skin treatments and dermatology services in a clear professional format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💇",
      title: "Hair Treatments",
      description:
        "Present hair-related treatments and services with dedicated information sections.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🌟",
      title: "Aesthetic & Cosmetic Services",
      description:
        "Show available aesthetic and cosmetic services offered by the hospital or specialist centre.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide detailed information, benefits and treatment overviews for skin and hair services.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🖼️",
      title: "Before & After Gallery",
      description:
        "Showcase treatment results and transformations through a professional visual gallery.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Appointment & Consultation Enquiry",
      description:
        "Allow patients to request dermatologist consultations and treatment appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences to build trust.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the hospital directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for appointments and treatment enquiries.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help patients locate the hospital through Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Skin & Hair FAQ",
      description:
        "Answer common questions related to skin treatments, hair treatments and aesthetic services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Skin & Hair Blog",
      description:
        "Publish skin-care, hair-care, treatment and awareness-related content.",
      iconBackground: "#e7f5ef",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, dermatology services, treatments, specialists, results and appointment CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital experience, facilities, approach and professional dermatology-care information.",
    },
    {
      title: "Dermatologist Profiles",
      description:
        "Professional specialist profiles including qualification, specialization and experience.",
    },
    {
      title: "Skin Treatments",
      description:
        "Dedicated sections for available dermatology and skin-care treatments.",
    },
    {
      title: "Hair Treatments",
      description:
        "Present hair-related treatments and services.",
    },
    {
      title: "Aesthetic / Cosmetic Services",
      description:
        "Overview of available aesthetic and cosmetic healthcare services.",
    },
    {
      title: "Treatment Details",
      description:
        "Individual treatment pages with detailed information and benefits.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Showcase treatment results and patient transformations.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common skin, hair and treatment-related questions.",
    },
    {
      title: "Skin & Hair Blog",
      description:
        "Publish skin-care, hair-care and treatment-guidance content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request dermatologist consultations and appointments.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "greenfield-derma-ai",
      icon: "🤖",
      name: "AI Skin & Hair Assistant",
      description:
        "Answer common questions about skin treatments, hair treatments, services, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "greenfield-derma-crm",
      icon: "📊",
      name: "Dermatology Enquiry CRM",
      description:
        "Connect patient enquiries with CRM workflows for lead capture, tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "greenfield-derma-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected skin, hair or aesthetic treatments.",
      price: "Add-On",
    },
    {
      id: "greenfield-derma-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a doctor or treatment, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "greenfield-derma-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "greenfield-derma-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "metro-health-hospital": createProductDetail({
//   slug: "metro-health-hospital",

//   name: "Metro Health Hospital",

//   category: "Hospital Website",

//   tagline:
//     "A premium hospital website for multispeciality healthcare providers that need advanced department pages, doctor listings, appointment booking and patient lead management.",

//   rating: "4.9",
//   reviewCount: 48,
//   purchases: 171,

//   currentPrice: "₹19,999",
//   oldPrice: "₹53,999",
//   discount: "63% OFF",
//   priceRange: "Up to 40 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🏥",
//       title: "Advanced Departments",
//       description:
//         "Present multiple hospital departments, specialties and treatment areas in a structured format.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Doctor Directory",
//       description:
//         "Display specialist doctors with qualifications, experience, specialties and consultation details.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to request appointments with selected doctors or departments.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "📊",
//       title: "CRM Ready",
//       description:
//         "Structure patient enquiries so they can be integrated with your CRM and follow-up workflow.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "🚑",
//       title: "Emergency Care",
//       description:
//         "Prominently display emergency contacts, ambulance services and critical-care information.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "Healthcare SEO",
//       description:
//         "SEO-friendly pages for doctors, departments, treatments and hospital services.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Premium hospital homepage with departments, doctors, facilities and appointment actions.",
//     },
//     {
//       title: "About Hospital",
//       description:
//         "Hospital profile, infrastructure, accreditations, mission and healthcare expertise.",
//     },
//     {
//       title: "Departments",
//       description:
//         "Dedicated pages for major medical specialties and departments.",
//     },
//     {
//       title: "Doctor Directory",
//       description:
//         "Structured specialist listings with doctor profile information.",
//     },
//     {
//       title: "Treatments",
//       description:
//         "Detailed pages for important treatments, procedures and medical services.",
//     },
//     {
//       title: "Patient Services",
//       description:
//         "Information about admission, insurance, diagnostics and patient support.",
//     },
//     {
//       title: "Appointment & CRM",
//       description:
//         "Appointment and enquiry workflow ready for CRM integration.",
//     },
//     {
//       title: "Contact & Emergency",
//       description:
//         "Hospital location, emergency numbers, map, WhatsApp and enquiry details.",
//     },
//   ],
// }),

"metro-health-hospital": createProductDetail({
  slug: "metro-health-hospital",

  name: "Metro Health Hospital",

  category: "Hospital Website",

  tagline:
    "A premium hospital website with a dedicated Pediatric and Child Care focus, presenting pediatricians, child healthcare services, vaccinations, growth and development information and parent appointment enquiries.",

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
      title: "Pediatric Hospital Design",
      description:
        "Clean, friendly and trustworthy hospital presentation focused on pediatric, child-care and family healthcare services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Pediatrician Profiles",
      description:
        "Show pediatrician qualifications, specialization, experience, certifications and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👶",
      title: "Child Healthcare Services",
      description:
        "Present pediatric and child healthcare services in a clear and parent-friendly format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Child Treatment Information",
      description:
        "Provide information about common child-health conditions, treatments and preventive care.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💉",
      title: "Vaccination Information",
      description:
        "Present child vaccination services and immunization-related information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📈",
      title: "Growth & Development",
      description:
        "Provide dedicated information about child growth, development and wellness monitoring.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🥗",
      title: "Child Nutrition",
      description:
        "Present basic child-nutrition and healthy-development information for parents.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🍼",
      title: "Newborn & Infant Care",
      description:
        "Present newborn and infant-care services where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Pediatric Appointment Enquiry",
      description:
        "Allow parents to request pediatric consultations and hospital appointments online.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Parent Testimonials",
      description:
        "Display parent reviews and child-care experiences to build trust.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Parent Support",
      description:
        "Allow parents to contact the hospital directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide direct calling for pediatric appointments and child-care enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Hospital Location",
      description:
        "Help parents locate the hospital through Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Child Healthcare FAQ",
      description:
        "Answer common parent questions related to child healthcare, vaccinations and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Child Health Blog",
      description:
        "Publish child-health, nutrition, vaccination, parenting and preventive-care content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Hospital introduction, pediatric services, doctors, child-care information and appointment CTA.",
    },
    {
      title: "About Hospital",
      description:
        "Present hospital experience, facilities, pediatric approach and professional information.",
    },
    {
      title: "Pediatric Department",
      description:
        "Dedicated overview of child healthcare and pediatric services.",
    },
    {
      title: "Pediatrician Profiles",
      description:
        "Professional doctor profiles with qualifications, specialization and experience.",
    },
    {
      title: "Pediatric Services",
      description:
        "Complete overview of available child healthcare services.",
    },
    {
      title: "Child Treatments",
      description:
        "Present common child-health conditions and available treatment information.",
    },
    {
      title: "Vaccination",
      description:
        "Provide vaccination and child-immunization information.",
    },
    {
      title: "Child Growth & Development",
      description:
        "Present growth monitoring, development and child-wellness information.",
    },
    {
      title: "Child Nutrition",
      description:
        "Basic nutrition and healthy-development information for parents.",
    },
    {
      title: "Newborn & Infant Care",
      description:
        "Present newborn and infant-care services where applicable.",
    },
    {
      title: "Parent Testimonials",
      description:
        "Display parent reviews and child-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common parent and pediatric-care questions.",
    },
    {
      title: "Child Health Blog",
      description:
        "Publish child-health, nutrition, vaccination and parenting content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow parents to request pediatric consultations and appointments.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "metro-pediatric-ai",
      icon: "🤖",
      name: "AI Parent Care Assistant",
      description:
        "Answer common questions about child healthcare services, vaccination information, hospital timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "metro-pediatric-crm",
      icon: "📊",
      name: "Pediatric Enquiry CRM",
      description:
        "Connect parent and patient enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "metro-pediatric-cost",
      icon: "🧮",
      name: "Child Healthcare Cost Calculator",
      description:
        "Provide estimated costs based on selected child-healthcare services or treatments.",
      price: "Add-On",
    },
    {
      id: "metro-pediatric-booking",
      icon: "💳",
      name: "Online Pediatric Booking + Payment",
      description:
        "Allow parents to select a pediatrician or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "metro-pediatric-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "metro-pediatric-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatments / Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Healthcare Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
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

    customAddons: [
    {
      id: "smilecare-ai-chatbot",
      icon: "🤖",
      name: "AI Dental Assistant",
      description:
        "Answer common patient questions about dental services, treatments, clinic timings, location and basic patient guidance.",
      price: "Add-On",
    },
    {
      id: "smilecare-crm",
      icon: "📊",
      name: "Dental Enquiry CRM",
      description:
        "Connect website enquiries with CRM workflows for lead capture, enquiry tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "smilecare-treatment-cost",
      icon: "🧮",
      name: "Dental Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected dental treatments such as implants, root canal, braces, aligners, whitening, veneers or crowns.",
      price: "Add-On",
    },
    {
      id: "smilecare-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "smilecare-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Dental Clinic Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Dentist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
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

    customAddons: [
    {
      id: "bright-smile-ai-chatbot",
      icon: "🤖",
      name: "AI Dental Hospital Assistant",
      description:
        "Answer common patient questions about dental treatments, dentist availability, clinic timings, location and basic patient guidance.",
      price: "Add-On",
    },
    {
      id: "bright-smile-crm",
      icon: "📊",
      name: "Dental Patient CRM",
      description:
        "Connect dental enquiries with CRM workflows for lead capture, enquiry tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "bright-smile-treatment-cost",
      icon: "🧮",
      name: "Dental Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected dental treatments such as implants, root canal, braces, aligners, whitening, veneers and crowns.",
      price: "Add-On",
    },
    {
      id: "bright-smile-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "bright-smile-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Dental Clinic Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Dentist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "dental-care-plus": createProductDetail({
//   slug: "dental-care-plus",

//   name: "Dental Care Plus",

//   category: "Dental Clinic Website",

//   tagline:
//     "A clean and professional dental clinic website for showcasing treatments, dentists, appointment booking and patient communication.",

//   rating: "4.7",
//   reviewCount: 26,
//   purchases: 67,

//   currentPrice: "₹10,999",
//   oldPrice: "₹24,499",
//   discount: "55% OFF",
//   priceRange: "Up to 20 pages",

//   mainImage: "/images/templates.jpg",

//   customFeatures: [
//     {
//       icon: "🦷",
//       title: "Dental Services",
//       description:
//         "Present implants, root canal, braces, whitening and other dental treatments clearly.",
//       iconBackground: "#eef3ff",
//     },
//     {
//       icon: "👨‍⚕️",
//       title: "Dentist Profiles",
//       description:
//         "Display dentists with specialization, qualifications and professional experience.",
//       iconBackground: "#e7f5ef",
//     },
//     {
//       icon: "📅",
//       title: "Appointment Booking",
//       description:
//         "Allow patients to send appointment requests directly through the website.",
//       iconBackground: "#fff7e6",
//     },
//     {
//       icon: "💬",
//       title: "WhatsApp Integration",
//       description:
//         "Give patients a quick way to contact the clinic through WhatsApp.",
//       iconBackground: "#f3e8ff",
//     },
//     {
//       icon: "⭐",
//       title: "Patient Reviews",
//       description:
//         "Display testimonials and patient experiences to improve trust.",
//       iconBackground: "#eaf1fd",
//     },
//     {
//       icon: "🔍",
//       title: "Dental SEO",
//       description:
//         "SEO-friendly structure for treatment pages, dentists and local clinic searches.",
//       iconBackground: "#edfae8",
//     },
//   ],

//   customPackageIncludes: [
//     {
//       title: "Home Page",
//       description:
//         "Clinic overview, treatments, dentists and appointment actions.",
//     },
//     {
//       title: "About Clinic",
//       description:
//         "Present clinic experience, technology and patient-care approach.",
//     },
//     {
//       title: "Treatments",
//       description:
//         "Dedicated sections for important dental treatments and procedures.",
//     },
//     {
//       title: "Dentist Profiles",
//       description:
//         "Professional profiles for dentists and specialists.",
//     },
//     {
//       title: "Patient Reviews",
//       description:
//         "Display testimonials and patient treatment experiences.",
//     },
//     {
//       title: "Appointment Booking",
//       description:
//         "Online appointment and consultation request form.",
//     },
//     {
//       title: "WhatsApp Contact",
//       description:
//         "Quick patient communication through WhatsApp.",
//     },
//     {
//       title: "Contact Page",
//       description:
//         "Clinic address, map, phone number and enquiry form.",
//     },
//   ],
// }),

// ============================================================
// DENTAL CLINIC
// ============================================================
"dental-care-plus": createProductDetail({
  slug: "dental-care-plus",

  name: "Dental Care Plus",

  category: "Dental Clinic Website",

  tagline:
    "A complete Dental Clinic Website for dentists and dental clinics to showcase treatments, dentist profiles, patient results, appointments and clinic information professionally.",

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
      icon: "🎨",
      title: "Professional Dental Clinic Design",
      description:
        "Modern, clean and professional website design that builds trust and gives your dental clinic a premium online presence.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description:
        "Website is properly optimized for mobile, tablet and desktop devices.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist Profile",
      description:
        "Showcase dentist qualifications, specialization, experience, achievements and professional information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🦷",
      title: "Dental Services Showcase",
      description:
        "Display the clinic's complete dental services in an attractive and easy-to-understand format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide detailed information about dental treatments, benefits, procedures and other important treatment information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit an enquiry for an appointment or dental consultation.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🖼️",
      title: "Before & After Gallery",
      description:
        "Showcase before-and-after results from dental treatments and smile transformations.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display existing patient reviews and experiences to build trust with new patients.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📝",
      title: "Contact & Enquiry Form",
      description:
        "Collect patient enquiries and dental consultation requests directly from the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the dental clinic directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct calling option for patients browsing the website from mobile devices.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Google Maps Integration",
      description:
        "Help patients easily locate the dental clinic using Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "FAQ Section",
      description:
        "Clearly present answers to common patient questions about the clinic and dental treatments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🔍",
      title: "SEO-Friendly Structure",
      description:
        "Use a properly structured website architecture designed to support search-engine visibility.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⚡",
      title: "Fast Loading Performance",
      description:
        "Optimized website structure designed to provide patients with a faster browsing experience.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, key treatments, dentist information, trust elements, testimonials and enquiry CTA.",
    },
    {
      title: "About Clinic",
      description:
        "Present the clinic's experience, approach, infrastructure and professional information.",
    },
    {
      title: "Dentist / Doctor Profile",
      description:
        "Show dentist qualifications, specialization, experience and professional profile.",
    },
    {
      title: "Dental Services",
      description:
        "Provide a complete overview of the major dental services available at the clinic.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated pages or sections containing detailed information about important dental treatments.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Visual gallery for showcasing dental treatment results.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common dental treatment and clinic-related questions.",
    },
    {
      title: "Dental Blog",
      description:
        "Publish dental care, treatment awareness and educational content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit appointment or consultation requests.",
    },
    {
      title: "Contact Us",
      description:
        "Display phone, WhatsApp, email and other clinic contact information.",
    },
    {
      title: "Clinic Location & Google Maps",
      description:
        "Display the clinic address and provide location navigation through Google Maps.",
    },
  ],

  customAddons: [
    {
      id: "ai-chatbot",
      icon: "🤖",
      name: "AI Chatbot",
      description:
        "AI-powered chatbot for dental services, treatment information, clinic timings, location, general enquiries and basic patient guidance.",
      price: "Add-On",
    },
    {
      id: "crm-integration",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect website enquiries with a CRM for lead capture, lead management, follow-ups and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "domain",
      icon: "🌐",
      name: "Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting and deployment setup.",
      price: "Add-On",
    },
    {
      id: "treatment-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Estimate treatment costs for services such as dental implants, root canal, braces, aligners, teeth whitening, veneers and crowns.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Dental Clinic Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Dentist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "perfect-smile-dental": createProductDetail({
//   slug: "perfect-smile-dental",
//   name: "Perfect Smile Dental Clinic",
//   category: "Dental Clinic Website",
//   tagline:
//     "A premium dental clinic website for dentists offering cosmetic dentistry, implants, orthodontics and general dental care.",
//   rating: "4.8",
//   reviewCount: 38,
//   purchases: 104,
//   currentPrice: "₹12,999",
//   oldPrice: "₹30,999",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"perfect-smile-dental": createProductDetail({
  slug: "perfect-smile-dental",

  name: "Perfect Smile Dental Clinic",

  category: "Dental Clinic Website",

  tagline:
    "A premium Dental Clinic Website designed for cosmetic dentistry, dental implants, orthodontics and smile-design practices that want to present treatments and patient results professionally.",

  rating: "4.8",
  reviewCount: 38,
  purchases: 104,

  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "✨",
      title: "Premium Smile Design Presentation",
      description:
        "Present cosmetic dentistry and smile-design services through a clean, premium clinic website experience.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🦷",
      title: "Advanced Treatment Showcase",
      description:
        "Showcase implants, root canal, braces, aligners, veneers, crowns and teeth-whitening treatments clearly.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist & Specialist Profiles",
      description:
        "Present dentist qualifications, specialization, professional experience and achievements.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "Smile Transformation Gallery",
      description:
        "Display before-and-after dental treatment results and smile transformations professionally.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Detailed Treatment Information",
      description:
        "Explain treatment procedures, benefits and important information for major dental services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow patients to request consultations and appointments directly from the website.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Show patient experiences and treatment feedback to strengthen trust and credibility.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Contact",
      description:
        "Allow patients to directly contact the clinic through WhatsApp for treatment and consultation enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📞",
      title: "One-Tap Calling",
      description:
        "Provide a direct call option for patients using mobile devices.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📍",
      title: "Clinic Location & Maps",
      description:
        "Integrate Google Maps so patients can easily find and navigate to the clinic.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "❓",
      title: "Dental FAQ",
      description:
        "Answer common questions related to treatments, consultations and clinic services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔍",
      title: "Dental SEO Structure",
      description:
        "SEO-friendly structure for dental treatments, dentist profiles and local clinic searches.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Clinic introduction, cosmetic treatments, dentists, patient results, testimonials and consultation CTA.",
    },
    {
      title: "About Clinic",
      description:
        "Showcase clinic experience, approach, infrastructure and professional information.",
    },
    {
      title: "Dentist / Specialist Profiles",
      description:
        "Professional profiles covering dentist qualifications, specialization and experience.",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Dedicated section for cosmetic dentistry and smile-enhancement services.",
    },
    {
      title: "Dental Implants",
      description:
        "Dedicated treatment information for dental implants and related procedures.",
    },
    {
      title: "Orthodontics",
      description:
        "Information for braces, aligners and orthodontic treatment services.",
    },
    {
      title: "Smile Design",
      description:
        "Present smile-design, veneers, whitening and cosmetic treatment options.",
    },
    {
      title: "Treatment Details",
      description:
        "Detailed pages for important dental procedures, treatment benefits and patient information.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Showcase visual dental treatment results and smile transformations.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and dental treatment experiences.",
    },
    {
      title: "Dental Blog",
      description:
        "Publish dental-care, treatment-awareness and educational content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to submit treatment consultation and appointment enquiries.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "perfect-smile-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs for implants, root canal, braces, aligners, whitening, veneers, crowns and other dental treatments.",
      price: "Add-On",
    },
    {
      id: "perfect-smile-ai-chatbot",
      icon: "🤖",
      name: "AI Dental Assistant",
      description:
        "Answer common questions related to treatments, clinic timings, location and general patient enquiries.",
      price: "Add-On",
    },
    {
      id: "perfect-smile-crm",
      icon: "📊",
      name: "Patient Enquiry CRM",
      description:
        "Connect website enquiries with CRM workflows for lead capture, enquiry tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "perfect-smile-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain configuration.",
      price: "Add-On",
    },
    {
      id: "perfect-smile-hosting",
      icon: "☁️",
      name: "Website Hosting",
      description:
        "Website hosting, deployment and production setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Dental Clinic Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Dentist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "smile-point-dental": createProductDetail({
//   slug: "smile-point-dental",
//   name: "Smile Point Dental Center",
//   category: "Dental Clinic Website",
//   tagline:
//     "A simple professional dental website for clinics that need dentist profiles, treatment information and appointment enquiries.",
//   rating: "4.6",
//   reviewCount: 24,
//   purchases: 54,
//   currentPrice: "₹8,999",
//   oldPrice: "₹17,999",
//   discount: "50% OFF",
//   priceRange: "Up to 15 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// EYE HOSPITAL
// ============================================================

"smile-point-dental": createProductDetail({
  slug: "smile-point-dental",

  name: "Smile Point Dental Center",

  category: "Dental Clinic Website",

  tagline:
    "A clean and practical Dental Clinic Website for general dentistry practices that need clear treatment information, dentist profiles, appointment enquiries and easy patient communication.",

  rating: "4.6",
  reviewCount: 24,
  purchases: 58,

  currentPrice: "₹8,999",
  oldPrice: "₹18,999",
  discount: "53% OFF",
  priceRange: "Up to 15 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🦷",
      title: "General Dental Services",
      description:
        "Clearly present routine and advanced dental services in an easy-to-understand format for patients.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Dentist Profile",
      description:
        "Show dentist qualifications, specialization, professional experience and clinic information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Explain important dental treatments, procedures, benefits and basic patient guidance.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Appointment Enquiry",
      description:
        "Allow patients to request a dental appointment or consultation directly from the website.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📝",
      title: "Patient Enquiry Form",
      description:
        "Capture treatment enquiries and consultation requests through a dedicated contact form.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Give patients a direct WhatsApp option for quick clinic communication.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Allow mobile visitors to call the dental clinic with a single tap.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Google Maps Location",
      description:
        "Help patients find the clinic easily using integrated Google Maps navigation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences to improve trust in the clinic.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "❓",
      title: "Dental FAQ",
      description:
        "Answer common questions about dental treatments, appointments and clinic services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔍",
      title: "Local Dental SEO",
      description:
        "SEO-friendly structure for dentist, treatment and local dental clinic searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Optimized for patients browsing from mobile phones, tablets and desktop devices.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, key treatments, dentist information and appointment enquiry actions.",
    },
    {
      title: "About Clinic",
      description:
        "Present clinic experience, dental-care approach, facilities and professional information.",
    },
    {
      title: "Dentist Profile",
      description:
        "Professional dentist profile with qualifications, specialization and experience.",
    },
    {
      title: "Dental Services",
      description:
        "Overview of the major dental services offered by the clinic.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information sections for important dental treatments and procedures.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions related to clinic services and treatments.",
    },
    {
      title: "Dental Blog",
      description:
        "Publish dental-care tips, treatment awareness and educational content.",
    },
    {
      title: "Appointment Enquiry",
      description:
        "Patient appointment and consultation request form.",
    },
    {
      title: "Contact Us",
      description:
        "Phone, WhatsApp, email and clinic contact information.",
    },
    {
      title: "Clinic Location",
      description:
        "Clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "smile-point-ai-chatbot",
      icon: "🤖",
      name: "AI Dental Chatbot",
      description:
        "Answer common questions about treatments, clinic timings, location and general dental enquiries.",
      price: "Add-On",
    },
    {
      id: "smile-point-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with a CRM for lead capture, tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "smile-point-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated treatment costs for selected dental services.",
      price: "Add-On",
    },
    {
      id: "smile-point-domain",
      icon: "🌐",
      name: "Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "smile-point-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Dental Clinic Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Dentist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Dental Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "visionpoint-eye-clinic": createProductDetail({
//   slug: "visionpoint-eye-clinic",
//   name: "VisionPoint Eye Clinic",
//   category: "Eye Hospital Website",
//   tagline:
//     "A professional eye-care website for ophthalmologists and eye hospitals offering consultations, surgery and vision-care services.",
//   rating: "4.6",
//   reviewCount: 28,
//   purchases: 76,
//   currentPrice: "₹12,999",
//   oldPrice: "₹30,999",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"visionpoint-eye-clinic": createProductDetail({
  slug: "visionpoint-eye-clinic",

  name: "VisionPoint Eye Clinic",

  category: "Eye Hospital Website",

  tagline:
    "A professional Eye Clinic Website for ophthalmologists and eye-care centres offering consultations, treatments, surgeries and vision-care services.",

  rating: "4.6",
  reviewCount: 28,
  purchases: 76,

  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👁️",
      title: "Professional Eye Care Design",
      description:
        "Modern, clean and trustworthy website design specifically created for Eye Hospitals and Eye Clinics.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor / Ophthalmologist Profile",
      description:
        "Showcase doctor qualifications, specialization, experience, achievements and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Eye Care Services Showcase",
      description:
        "Present major eye-care services and specialties in a clear and professional format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📋",
      title: "Eye Treatment Information",
      description:
        "Provide detailed information about different eye treatments, procedures and care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏥",
      title: "Eye Surgery Information",
      description:
        "Create dedicated sections for major eye surgeries and procedures offered by the clinic.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit consultation and appointment enquiries directly through the website.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build trust and credibility.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Treatment Gallery",
      description:
        "Showcase relevant treatment, facility and eye-care images professionally.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📝",
      title: "Contact & Enquiry Form",
      description:
        "Capture patient enquiries and consultation requests through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to directly contact the eye clinic or hospital through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide one-click calling for patients browsing from mobile devices.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Google Maps Integration",
      description:
        "Help patients easily locate the eye clinic or hospital through Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "FAQ Section",
      description:
        "Answer common questions related to eye treatments, services and appointments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Eye Care Blog",
      description:
        "Publish eye-health, treatment-awareness and vision-care content.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "SEO-Friendly Structure",
      description:
        "SEO-ready structure for eye treatments, ophthalmologists, eye clinics and location-based searches.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⚡",
      title: "Fast Loading Performance",
      description:
        "Optimized website structure designed to provide a smoother browsing experience.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, key eye-care services, doctors, treatments, testimonials and enquiry CTA.",
    },
    {
      title: "About Hospital / Clinic",
      description:
        "Present clinic information, experience, facilities and professional approach.",
    },
    {
      title: "Doctor / Ophthalmologist Profile",
      description:
        "Show doctor qualifications, specialization, experience and professional information.",
    },
    {
      title: "Eye Care Services",
      description:
        "Complete overview of the eye-care services available at the clinic.",
    },
    {
      title: "Eye Treatments",
      description:
        "Detailed information about major eye treatments and procedures.",
    },
    {
      title: "Eye Surgery",
      description:
        "Information about available eye surgeries and procedures.",
    },
    {
      title: "Cataract Treatment",
      description:
        "Dedicated information about cataract treatment and related services.",
    },
    {
      title: "LASIK & Vision Correction",
      description:
        "Information about LASIK, vision correction and related services where offered.",
    },
    {
      title: "Glaucoma Care",
      description:
        "Information about glaucoma diagnosis, treatment and ongoing care.",
    },
    {
      title: "Retina & Specialized Eye Care",
      description:
        "Dedicated sections for retina and specialized eye-care services based on clinic offerings.",
    },
    {
      title: "Treatment Gallery",
      description:
        "Showcase relevant treatment, facility and eye-care images.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions related to eye care and appointments.",
    },
    {
      title: "Eye Care Blog",
      description:
        "Publish eye-health, awareness, treatment and vision-care articles.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit appointment or consultation requests.",
    },
    {
      title: "Contact Us",
      description:
        "Display phone, WhatsApp, email and other contact information.",
    },
    {
      title: "Hospital / Clinic Location",
      description:
        "Show clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "visionpoint-ai-chatbot",
      icon: "🤖",
      name: "AI Eye Care Chatbot",
      description:
        "Provide instant answers for eye treatments, services, clinic timings, location and general patient enquiries.",
      price: "Add-On",
    },
    {
      id: "visionpoint-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with CRM workflows for lead capture, follow-ups and enquiry tracking.",
      price: "Add-On",
    },
    {
      id: "visionpoint-treatment-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Estimate costs for cataract treatment, LASIK, vision correction, eye surgery and other eye treatments.",
      price: "Add-On",
    },
    {
      id: "visionpoint-online-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time, enter patient details and make an online payment.",
      price: "Add-On",
    },
    {
      id: "visionpoint-domain",
      icon: "🌐",
      name: "Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "visionpoint-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Eye Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "vision-eye-care": createProductDetail({
//   slug: "vision-eye-care",
//   name: "Vision Eye Care Center",
//   category: "Eye Hospital Website",
//   tagline:
//     "A modern eye hospital website for presenting specialists, treatments, diagnostic services and appointment booking.",
//   rating: "4.8",
//   reviewCount: 34,
//   purchases: 88,
//   currentPrice: "₹13,999",
//   oldPrice: "₹33,999",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"vision-eye-care": createProductDetail({
  slug: "vision-eye-care",

  name: "Vision Eye Care Center",

  category: "Eye Hospital Website",

  tagline:
    "A modern Eye Care Website for clinics and eye centres offering cataract treatment, LASIK, glaucoma care, retina services and specialist consultations.",

  rating: "4.8",
  reviewCount: 34,
  purchases: 88,

  currentPrice: "₹13,999",
  oldPrice: "₹33,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👁️",
      title: "Modern Eye Care Design",
      description:
        "Clean and trustworthy website presentation designed for eye clinics and specialist eye-care centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Ophthalmologist Profiles",
      description:
        "Present specialist qualifications, experience, areas of expertise and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Eye Treatment Showcase",
      description:
        "Present important eye treatments and procedures in a clear, patient-friendly format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🌤️",
      title: "Cataract Treatment",
      description:
        "Dedicated information about cataract diagnosis, treatment and available care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "✨",
      title: "LASIK & Vision Correction",
      description:
        "Showcase LASIK, vision correction and related refractive eye-care services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🧿",
      title: "Glaucoma Care",
      description:
        "Present information about glaucoma diagnosis, treatment and long-term eye-care management.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🔎",
      title: "Retina & Specialized Eye Care",
      description:
        "Create dedicated sections for retina and other specialized eye-care services.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Eye Surgery Information",
      description:
        "Explain available eye surgeries, procedures and related patient information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Enquiry",
      description:
        "Allow patients to request consultations and appointments through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🖼️",
      title: "Treatment & Facility Gallery",
      description:
        "Show treatment-related images, clinic facilities and eye-care infrastructure.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences to build credibility.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp & Direct Contact",
      description:
        "Allow patients to contact the eye-care centre quickly through WhatsApp and direct enquiry actions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Eye Care FAQ",
      description:
        "Answer common patient questions about eye treatments, procedures and appointments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Eye Care Blog",
      description:
        "Publish eye-health, treatment-awareness and vision-care articles.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Eye Care SEO",
      description:
        "SEO-friendly structure for ophthalmologists, eye treatments, procedures and local eye-care searches.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Eye-care centre introduction, treatments, specialists, testimonials and consultation actions.",
    },
    {
      title: "About Eye Care Center",
      description:
        "Present experience, facilities, treatment approach and professional eye-care information.",
    },
    {
      title: "Ophthalmologist Profiles",
      description:
        "Specialist profiles with qualifications, experience and areas of expertise.",
    },
    {
      title: "Eye Care Services",
      description:
        "Complete overview of available eye-care services.",
    },
    {
      title: "Eye Treatments",
      description:
        "Detailed information about important eye treatments and procedures.",
    },
    {
      title: "Cataract Treatment",
      description:
        "Dedicated cataract treatment and patient-information section.",
    },
    {
      title: "LASIK & Vision Correction",
      description:
        "Detailed information about LASIK and vision-correction services.",
    },
    {
      title: "Glaucoma Care",
      description:
        "Information about glaucoma diagnosis, treatment and monitoring.",
    },
    {
      title: "Retina Care",
      description:
        "Dedicated content for retina and specialized eye-care services.",
    },
    {
      title: "Eye Surgery",
      description:
        "Information about available surgeries and eye-care procedures.",
    },
    {
      title: "Treatment Gallery",
      description:
        "Show treatment, facility and eye-care related images.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "Eye Care Blog",
      description:
        "Publish eye-health and treatment-awareness content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to submit appointment and consultation enquiries.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps location.",
    },
  ],

  customAddons: [
    {
      id: "vision-care-ai-chatbot",
      icon: "🤖",
      name: "AI Eye Care Assistant",
      description:
        "Answer common questions about eye treatments, specialists, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "vision-care-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with lead tracking and follow-up workflows.",
      price: "Add-On",
    },
    {
      id: "vision-care-cost-calculator",
      icon: "🧮",
      name: "Eye Treatment Cost Calculator",
      description:
        "Provide estimated costs for cataract treatment, LASIK, vision correction and other eye-care services.",
      price: "Add-On",
    },
    {
      id: "vision-care-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a specialist or service, choose a date and time and complete an online payment.",
      price: "Add-On",
    },
    {
      id: "vision-care-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "vision-care-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, deployment and production configuration.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Eye Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "clearvision-eye-hospital": createProductDetail({
//   slug: "clearvision-eye-hospital",
//   name: "ClearVision Eye Hospital",
//   category: "Eye Hospital Website",
//   tagline:
//     "A premium ophthalmology website for hospitals providing cataract, retina, LASIK and comprehensive eye-care services.",
//   rating: "4.8",
//   reviewCount: 37,
//   purchases: 93,
//   currentPrice: "₹14,999",
//   oldPrice: "₹36,999",
//   discount: "59% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),
"clearvision-eye-hospital": createProductDetail({
  slug: "clearvision-eye-hospital",

  name: "ClearVision Eye Hospital",

  category: "Eye Hospital Website",

  tagline:
    "A premium Eye Hospital Website for ophthalmology hospitals offering cataract surgery, LASIK, retina care, specialist consultations and advanced eye-care services.",

  rating: "4.8",
  reviewCount: 37,
  purchases: 93,

  currentPrice: "₹14,999",
  oldPrice: "₹36,999",
  discount: "59% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Premium Eye Hospital Design",
      description:
        "Professional and trustworthy website presentation designed for eye hospitals and advanced ophthalmology centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Ophthalmologist & Specialist Profiles",
      description:
        "Show specialist qualifications, experience, achievements and areas of ophthalmology expertise.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🌤️",
      title: "Cataract Treatment & Surgery",
      description:
        "Dedicated information for cataract diagnosis, treatment options and surgical procedures.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "✨",
      title: "LASIK & Vision Correction",
      description:
        "Present LASIK, refractive procedures and vision-correction services in a structured format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🧿",
      title: "Retina Care",
      description:
        "Dedicated sections for retina diagnosis, treatment and specialized retinal care services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔬",
      title: "Advanced Eye Treatments",
      description:
        "Present major eye treatments, procedures and specialist care services clearly.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏨",
      title: "Eye Surgery Information",
      description:
        "Create detailed sections for available eye surgeries and related patient information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit consultation and specialist appointment enquiries online.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🖼️",
      title: "Hospital & Treatment Gallery",
      description:
        "Show hospital facilities, treatment areas, equipment and relevant eye-care images.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences to improve trust and credibility.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Support",
      description:
        "Provide quick patient communication through direct WhatsApp integration.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Allow mobile visitors to call the eye hospital directly with one tap.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Hospital Location & Maps",
      description:
        "Help patients find the hospital easily with Google Maps integration.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Eye Health Blog",
      description:
        "Publish eye-health, surgery-awareness and vision-care educational content.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Ophthalmology SEO",
      description:
        "SEO-friendly structure for eye specialists, surgeries, treatments and location-based searches.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Hospital Home Page",
      description:
        "Eye hospital introduction, specialists, surgeries, treatments, facilities and appointment actions.",
    },
    {
      title: "About Eye Hospital",
      description:
        "Present hospital experience, facilities, technology and professional eye-care approach.",
    },
    {
      title: "Ophthalmologist Profiles",
      description:
        "Professional profiles for ophthalmologists and eye-care specialists.",
    },
    {
      title: "Eye Care Services",
      description:
        "Complete overview of hospital eye-care specialties and services.",
    },
    {
      title: "Cataract Treatment",
      description:
        "Dedicated cataract diagnosis, treatment and surgery information.",
    },
    {
      title: "LASIK & Vision Correction",
      description:
        "Detailed LASIK and refractive vision-correction information.",
    },
    {
      title: "Retina & Specialized Eye Care",
      description:
        "Dedicated sections for retinal and specialized ophthalmology services.",
    },
    {
      title: "Glaucoma Care",
      description:
        "Information about glaucoma diagnosis, treatment and monitoring.",
    },
    {
      title: "Eye Surgery",
      description:
        "Detailed information about available eye surgeries and procedures.",
    },
    {
      title: "Facilities & Technology",
      description:
        "Show hospital infrastructure, diagnostic equipment and eye-care technology.",
    },
    {
      title: "Treatment Gallery",
      description:
        "Display facility, procedure and treatment-related images.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Show patient reviews and eye-treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions about eye treatments, surgeries and appointments.",
    },
    {
      title: "Eye Health Blog",
      description:
        "Publish eye-care, surgery-awareness and vision-health content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request appointments with specialists and services.",
    },
    {
      title: "Contact & Hospital Location",
      description:
        "Phone, WhatsApp, email, hospital address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "clearvision-ai-chatbot",
      icon: "🤖",
      name: "AI Eye Hospital Assistant",
      description:
        "Answer patient questions about specialists, treatments, surgeries, hospital timings and location.",
      price: "Add-On",
    },
    {
      id: "clearvision-crm",
      icon: "📊",
      name: "Patient CRM Integration",
      description:
        "Connect patient enquiries with CRM workflows for lead management, tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "clearvision-cost-calculator",
      icon: "🧮",
      name: "Eye Treatment Cost Calculator",
      description:
        "Provide estimated costs for cataract treatment, LASIK, vision correction, eye surgery and other treatments.",
      price: "Add-On",
    },
    {
      id: "clearvision-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time, enter details and complete online payment.",
      price: "Add-On",
    },
    {
      id: "clearvision-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain configuration.",
      price: "Add-On",
    },
    {
      id: "clearvision-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, production deployment and configuration.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Eye Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "advanced-eye-centre": createProductDetail({
//   slug: "advanced-eye-centre",
//   name: "Advanced Eye Centre",
//   category: "Eye Hospital Website",
//   tagline:
//     "A clean ophthalmology website for eye specialists, treatment centers and diagnostic eye-care clinics.",
//   rating: "4.7",
//   reviewCount: 26,
//   purchases: 69,
//   currentPrice: "₹11,999",
//   oldPrice: "₹26,999",
//   discount: "56% OFF",
//   priceRange: "Up to 20 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// CARDIOLOGY
// ============================================================

"advanced-eye-centre": createProductDetail({
  slug: "advanced-eye-centre",

  name: "Advanced Eye Centre",

  category: "Eye Hospital Website",

  tagline:
    "A specialist Eye Care Website for ophthalmologists, diagnostic eye centres and advanced vision-care clinics offering consultations, diagnostics and treatment services.",

  rating: "4.7",
  reviewCount: 26,
  purchases: 69,

  currentPrice: "₹11,999",
  oldPrice: "₹26,999",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👁️",
      title: "Specialist Eye Care Design",
      description:
        "Clean and professional website design created for ophthalmologists, eye specialists and diagnostic eye-care centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Ophthalmologist Profile",
      description:
        "Present specialist qualifications, experience, expertise and professional information clearly.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Diagnostic Eye Services",
      description:
        "Showcase eye examinations, diagnostic services and specialist vision-care services.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📋",
      title: "Eye Treatment Information",
      description:
        "Provide structured information about eye conditions, treatments and available care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🧿",
      title: "Specialized Eye Care",
      description:
        "Present retina, glaucoma, cornea and other specialized eye-care services based on the centre's offerings.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏥",
      title: "Eye Procedure Information",
      description:
        "Create dedicated sections for eye procedures, minor surgeries and advanced treatments.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow patients to request specialist consultations and appointments online.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Facility & Treatment Gallery",
      description:
        "Showcase diagnostic facilities, treatment rooms, technology and eye-care images.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences to build credibility.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow patients to contact the eye centre directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Provide one-tap calling for patients browsing from mobile devices.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Google Maps Integration",
      description:
        "Help patients easily locate the eye centre through Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Eye Care FAQ",
      description:
        "Answer common questions about consultations, diagnostics and eye treatments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Vision Care Blog",
      description:
        "Publish eye-health, diagnostic awareness and vision-care educational content.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Eye Specialist SEO",
      description:
        "SEO-friendly structure for ophthalmologists, diagnostic services, treatments and local eye-care searches.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Eye centre introduction, specialists, diagnostic services, treatments and consultation CTA.",
    },
    {
      title: "About Eye Centre",
      description:
        "Present centre experience, facilities, technology and professional eye-care approach.",
    },
    {
      title: "Ophthalmologist Profile",
      description:
        "Professional specialist profile with qualifications, experience and expertise.",
    },
    {
      title: "Eye Care Services",
      description:
        "Overview of available specialist eye-care services.",
    },
    {
      title: "Eye Diagnostics",
      description:
        "Dedicated information about eye examinations, tests and diagnostic services.",
    },
    {
      title: "Eye Treatments",
      description:
        "Detailed information about major eye conditions and treatments.",
    },
    {
      title: "Glaucoma Care",
      description:
        "Information about glaucoma diagnosis, monitoring and treatment.",
    },
    {
      title: "Retina Care",
      description:
        "Dedicated content for retina diagnosis and treatment services.",
    },
    {
      title: "Cornea & Specialized Care",
      description:
        "Present cornea and other specialist eye-care services where available.",
    },
    {
      title: "Procedures & Surgery",
      description:
        "Information about available procedures and eye surgeries.",
    },
    {
      title: "Facility Gallery",
      description:
        "Showcase diagnostic equipment, treatment areas and centre facilities.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and eye-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about eye diagnostics, treatments and consultations.",
    },
    {
      title: "Vision Care Blog",
      description:
        "Publish eye-health and vision-care educational content.",
    },
    {
      title: "Consultation Enquiry",
      description:
        "Allow patients to request specialist consultations and appointments.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "advanced-eye-ai-chatbot",
      icon: "🤖",
      name: "AI Eye Care Assistant",
      description:
        "Answer common questions about diagnostics, treatments, specialists, timings and location.",
      price: "Add-On",
    },
    {
      id: "advanced-eye-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with lead tracking and follow-up workflows.",
      price: "Add-On",
    },
    {
      id: "advanced-eye-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected eye treatments and procedures.",
      price: "Add-On",
    },
    {
      id: "advanced-eye-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a specialist or service, choose a time slot and complete payment online.",
      price: "Add-On",
    },
    {
      id: "advanced-eye-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "advanced-eye-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, deployment and production setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Eye Hospital Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profiles",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Eye Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "heartcare-cardiology": createProductDetail({
//   slug: "heartcare-cardiology",
//   name: "HeartCare Cardiology Center",
//   category: "Cardiology Website",
//   tagline:
//     "A specialist cardiology website for heart hospitals and cardiac clinics with cardiologist profiles, treatments and appointment booking.",
//   rating: "4.8",
//   reviewCount: 35,
//   purchases: 84,
//   currentPrice: "₹15,999",
//   oldPrice: "₹39,999",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",
//   mainImage: "/images/templates.jpg",
// }),

"heartcare-cardiology": createProductDetail({
  slug: "heartcare-cardiology",

  name: "HeartCare Cardiology Center",

  category: "Cardiology Website",

  tagline:
    "A specialist Cardiology Website for heart clinics and cardiac care centres offering cardiologist consultations, diagnostics, treatments, preventive care and appointment enquiries.",

  rating: "4.8",
  reviewCount: 35,
  purchases: 84,

  currentPrice: "₹15,999",
  oldPrice: "₹39,999",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "❤️",
      title: "Professional Cardiology Design",
      description:
        "Modern, clean and trustworthy website design specifically created for cardiology clinics, heart hospitals and cardiac care centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist / Doctor Profile",
      description:
        "Showcase cardiologist qualifications, specialization, experience, certifications and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🫀",
      title: "Cardiac Services Showcase",
      description:
        "Present cardiology consultations, diagnostics, treatments and cardiac-care services clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide easy-to-understand information about major cardiac conditions and treatment options.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🩺",
      title: "Cardiac Procedures Information",
      description:
        "Create dedicated sections for available cardiac procedures and interventions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Present available heart diagnostic services, tests and cardiac screening information.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Provide information about heart-health screening, prevention and lifestyle-focused cardiac care.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🚑",
      title: "Emergency Cardiac Care",
      description:
        "Highlight emergency contact and urgent cardiac-care information where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit cardiology consultation and appointment requests through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏥",
      title: "Facilities & Technology",
      description:
        "Showcase cardiac facilities, diagnostic equipment, technology and healthcare infrastructure.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build trust and credibility.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the cardiology clinic or heart centre directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct calling option for mobile visitors.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Google Maps Integration",
      description:
        "Help patients easily locate the clinic or heart centre using Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❓",
      title: "Cardiology FAQ",
      description:
        "Answer common questions related to cardiac care, treatments and appointments.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔍",
      title: "Cardiology SEO Structure",
      description:
        "SEO-friendly structure for cardiologists, heart treatments, cardiac services and location-based searches.",
      iconBackground: "#eaf1fd",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, cardiac services, cardiologist information, facilities, testimonials and enquiry CTA.",
    },
    {
      title: "About Clinic / Heart Centre",
      description:
        "Present experience, facilities, technology and professional cardiac-care information.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional cardiologist profile with qualifications, specialization and experience.",
    },
    {
      title: "Cardiology Services",
      description:
        "Complete overview of available cardiac services.",
    },
    {
      title: "Heart Treatments",
      description:
        "Information about major cardiac conditions and treatment options.",
    },
    {
      title: "Cardiac Diagnostics",
      description:
        "Dedicated information about cardiac diagnostic services and tests.",
    },
    {
      title: "Cardiac Procedures",
      description:
        "Dedicated sections for available cardiac procedures and interventions.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health screening, prevention and lifestyle-related cardiac-care information.",
    },
    {
      title: "Emergency Cardiac Care",
      description:
        "Emergency contact and urgent cardiac-care information where applicable.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Showcase cardiac facilities, technology and healthcare infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to heart care, treatments and consultations.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and awareness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit cardiology appointment and consultation requests.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "heartcare-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiology Chatbot",
      description:
        "Answer common questions about cardiology services, treatments, doctors, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "heartcare-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with CRM workflows for lead management, tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "heartcare-cost-calculator",
      icon: "🧮",
      name: "Cardiac Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected cardiac treatments and services.",
      price: "Add-On",
    },
    {
      id: "heartcare-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time, enter patient details and complete online payment.",
      price: "Add-On",
    },
    {
      id: "heartcare-domain",
      icon: "🌐",
      name: "Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "heartcare-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, deployment and production setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Cardiology Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Cardiologist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Cardiology Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Heart Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "cardio-life-heart-centre": createProductDetail({
//   slug: "cardio-life-heart-centre",
//   name: "CardioLife Heart Centre",
//   category: "Cardiology Website",
//   tagline:
//     "A professional heart-care website for cardiologists, cardiac hospitals and advanced cardiovascular treatment centers.",
//   rating: "4.8",
//   reviewCount: 38,
//   purchases: 92,
//   currentPrice: "₹16,999",
//   oldPrice: "₹42,499",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",
//   mainImage: "/images/templates.jpg",
// }),

"cardio-life-heart-centre": createProductDetail({
  slug: "cardio-life-heart-centre",

  name: "CardioLife Heart Centre",

  category: "Cardiology Website",

  tagline:
    "A premium Heart Centre Website for cardiologists and cardiovascular care centres offering advanced diagnostics, cardiac procedures, preventive cardiology and specialist consultations.",

  rating: "4.8",
  reviewCount: 38,
  purchases: 92,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "❤️",
      title: "Premium Cardiac Care Design",
      description:
        "Professional and trustworthy website presentation designed for advanced heart centres and cardiovascular care facilities.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist & Specialist Profiles",
      description:
        "Present cardiologist qualifications, specialization, certifications, experience and professional expertise.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Advanced Cardiac Diagnostics",
      description:
        "Showcase cardiac diagnostic services, investigations and heart-health screening options.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🫀",
      title: "Cardiac Treatment Information",
      description:
        "Explain major heart conditions, treatment options and cardiovascular care services clearly.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🩺",
      title: "Cardiac Procedures",
      description:
        "Create dedicated sections for available cardiac procedures, interventions and treatment pathways.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Present heart-health screening, risk prevention, lifestyle management and preventive cardiac-care services.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🚑",
      title: "Emergency Cardiac Care",
      description:
        "Highlight emergency cardiac-care information and urgent contact options where applicable.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Facilities & Cardiac Technology",
      description:
        "Showcase diagnostic equipment, cardiac facilities, technology and centre infrastructure.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Specialist Appointment Enquiry",
      description:
        "Allow patients to request consultations with cardiologists and cardiac specialists.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Experiences",
      description:
        "Display patient reviews and cardiac-care experiences to strengthen trust.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Support",
      description:
        "Provide patients with quick access to the heart centre through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Allow mobile visitors to call the cardiac centre directly.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Heart Centre Location",
      description:
        "Integrate Google Maps so patients can easily locate and navigate to the centre.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiac Care FAQ",
      description:
        "Answer common patient questions about diagnostics, procedures, consultations and heart care.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Wellness Blog",
      description:
        "Publish prevention, lifestyle, heart-health and cardiovascular-awareness content.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Cardiology SEO",
      description:
        "SEO-friendly structure for cardiologists, diagnostics, heart procedures and local cardiovascular-care searches.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Heart centre overview, cardiologists, cardiac services, facilities and appointment actions.",
    },
    {
      title: "About Heart Centre",
      description:
        "Present centre experience, cardiac-care approach, technology and infrastructure.",
    },
    {
      title: "Cardiologist Profiles",
      description:
        "Professional profiles with qualifications, specialization, certifications and experience.",
    },
    {
      title: "Cardiac Services",
      description:
        "Complete overview of available cardiovascular and cardiac-care services.",
    },
    {
      title: "Heart Conditions & Treatments",
      description:
        "Dedicated information about major cardiac conditions and treatment options.",
    },
    {
      title: "Advanced Cardiac Diagnostics",
      description:
        "Present available diagnostic tests, screening and cardiovascular investigations.",
    },
    {
      title: "Cardiac Procedures",
      description:
        "Detailed sections for available cardiac procedures and interventions.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health screening, prevention, lifestyle guidance and risk-management information.",
    },
    {
      title: "Emergency Cardiac Care",
      description:
        "Urgent cardiac-care contact and emergency service information where applicable.",
    },
    {
      title: "Facilities & Technology",
      description:
        "Show cardiac facilities, diagnostic technology and centre infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiovascular-care experiences.",
    },
    {
      title: "Cardiac Care FAQ",
      description:
        "Answer common questions about heart conditions, diagnostics and procedures.",
    },
    {
      title: "Heart Wellness Blog",
      description:
        "Publish prevention, lifestyle and heart-health awareness content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request appointments with cardiologists and services.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "cardiolife-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Care Assistant",
      description:
        "Answer common questions about cardiologists, cardiac services, treatments, timings and location.",
      price: "Add-On",
    },
    {
      id: "cardiolife-crm",
      icon: "📊",
      name: "Cardiac Patient CRM",
      description:
        "Connect patient enquiries with CRM workflows for tracking, follow-ups and lead management.",
      price: "Add-On",
    },
    {
      id: "cardiolife-cost-calculator",
      icon: "🧮",
      name: "Cardiac Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected cardiac diagnostics, treatments and procedures.",
      price: "Add-On",
    },
    {
      id: "cardiolife-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or cardiac service, choose a date and time, enter patient details and complete payment online.",
      price: "Add-On",
    },
    {
      id: "cardiolife-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain configuration.",
      price: "Add-On",
    },
    {
      id: "cardiolife-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Cardiology Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Cardiologist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Cardiology Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Heart Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "heart-first-cardiac-clinic": createProductDetail({
//   slug: "heart-first-cardiac-clinic",
//   name: "Heart First Cardiac Clinic",
//   category: "Cardiology Website",
//   tagline:
//     "A focused cardiology clinic website for consultations, cardiac diagnostics, treatments and patient appointments.",
//   rating: "4.7",
//   reviewCount: 30,
//   purchases: 73,
//   currentPrice: "₹13,999",
//   oldPrice: "₹32,499",
//   discount: "57% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"heart-first-cardiac-clinic": createProductDetail({
  slug: "heart-first-cardiac-clinic",

  name: "Heart First Cardiac Clinic",

  category: "Cardiology Website",

  tagline:
    "A focused Cardiology Clinic Website for cardiologist consultations, cardiac diagnostics, heart-treatment information and patient appointment enquiries.",

  rating: "4.7",
  reviewCount: 30,
  purchases: 73,

  currentPrice: "₹13,999",
  oldPrice: "₹32,499",
  discount: "57% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "❤️",
      title: "Professional Cardiology Clinic Design",
      description:
        "Clean and trustworthy website design created specifically for cardiology clinics and specialist heart-care practices.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Profile",
      description:
        "Show cardiologist qualifications, specialization, experience, certifications and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🫀",
      title: "Cardiology Services",
      description:
        "Present cardiology consultations, diagnostics, treatments and cardiac-care services clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Showcase available cardiac tests, diagnostic services and heart-health screening information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide patient-friendly information about major cardiac conditions and treatment options.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🩺",
      title: "Cardiac Procedures",
      description:
        "Create dedicated information sections for available procedures and interventions.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛡️",
      title: "Preventive Heart Care",
      description:
        "Present heart-health screening, prevention and lifestyle-focused cardiology information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📅",
      title: "Consultation Appointment Enquiry",
      description:
        "Allow patients to request a cardiologist consultation or clinic appointment online.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac-care experiences to build trust.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏥",
      title: "Clinic Facilities & Technology",
      description:
        "Present available diagnostic equipment, facilities and cardiac-care technology.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow patients to contact the cardiac clinic directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Provide a one-tap call option for patients browsing on mobile devices.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Google Maps Location",
      description:
        "Help patients easily locate the cardiac clinic using Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiology FAQ",
      description:
        "Answer common patient questions about consultations, diagnostics and heart treatments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, cardiologist profile, cardiac services and consultation actions.",
    },
    {
      title: "About Cardiac Clinic",
      description:
        "Present clinic experience, facilities, approach and professional cardiac-care information.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional profile with qualifications, specialization, certifications and experience.",
    },
    {
      title: "Cardiology Services",
      description:
        "Complete overview of available cardiac consultations and services.",
    },
    {
      title: "Cardiac Diagnostics",
      description:
        "Information about available diagnostic tests and heart-health investigations.",
    },
    {
      title: "Heart Treatments",
      description:
        "Detailed information about major cardiac conditions and treatment options.",
    },
    {
      title: "Cardiac Procedures",
      description:
        "Dedicated sections for available cardiac procedures and interventions.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health screening, prevention and lifestyle-related cardiac-care information.",
    },
    {
      title: "Facilities & Technology",
      description:
        "Show clinic infrastructure, diagnostic equipment and cardiac-care facilities.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to cardiology consultations and treatments.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish prevention, lifestyle and heart-health educational content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit cardiology consultation and appointment requests.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "heart-first-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiology Assistant",
      description:
        "Answer common questions about cardiology services, doctor information, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "heart-first-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect patient enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "heart-first-cost-calculator",
      icon: "🧮",
      name: "Cardiac Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected cardiac diagnostics, consultations and treatments.",
      price: "Add-On",
    },
    {
      id: "heart-first-online-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a time slot and complete payment online.",
      price: "Add-On",
    },
    {
      id: "heart-first-domain",
      icon: "🌐",
      name: "Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "heart-first-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, deployment and production setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Cardiology Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Cardiologist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Cardiology Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Heart Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "pulse-heart-institute": createProductDetail({
//   slug: "pulse-heart-institute",
//   name: "Pulse Heart Institute",
//   category: "Cardiology Website",
//   tagline:
//     "A premium cardiac institute website for showcasing specialists, advanced treatments, facilities and patient-care programs.",
//   rating: "4.9",
//   reviewCount: 46,
//   purchases: 116,
//   currentPrice: "₹18,999",
//   oldPrice: "₹49,999",
//   discount: "62% OFF",
//   priceRange: "Up to 35 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// IVF CENTER
// ============================================================

"pulse-heart-institute": createProductDetail({
  slug: "pulse-heart-institute",

  name: "Pulse Heart Institute",

  category: "Cardiology Website",

  tagline:
    "A premium Heart Institute Website for advanced cardiac care, specialist cardiologists, cardiac procedures, diagnostics, emergency services and comprehensive patient-care programs.",

  rating: "4.9",
  reviewCount: 46,
  purchases: 116,

  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🏥",
      title: "Premium Heart Institute Design",
      description:
        "Modern and trustworthy website design for cardiac institutes, heart hospitals and advanced cardiovascular centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist & Specialist Team",
      description:
        "Showcase cardiologist qualifications, specializations, certifications, experience and professional expertise.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🫀",
      title: "Advanced Cardiac Services",
      description:
        "Present consultations, diagnostics, treatments and comprehensive cardiac-care services in a structured format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Showcase available heart diagnostics, investigations, screening services and diagnostic technology.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide clear information about cardiac conditions, treatment options and patient-care pathways.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🩺",
      title: "Advanced Cardiac Procedures",
      description:
        "Create dedicated sections for cardiac procedures, interventions and specialized treatments.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Present heart-health screening, prevention, lifestyle management and risk-reduction programs.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🚑",
      title: "Emergency Cardiac Care",
      description:
        "Highlight emergency cardiac services, urgent-care information and important contact options where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⚙️",
      title: "Facilities & Cardiac Technology",
      description:
        "Showcase cardiac infrastructure, diagnostic equipment, facilities and advanced technology.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Specialist Appointment Enquiry",
      description:
        "Allow patients to request consultations with cardiologists and cardiac-care specialists.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac-care experiences to strengthen trust and credibility.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Support",
      description:
        "Allow patients to contact the heart institute directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide one-tap calling for patients browsing the website from mobile devices.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Institute Location & Maps",
      description:
        "Help patients locate the institute easily through integrated Google Maps navigation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health & Prevention Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Advanced Cardiology SEO",
      description:
        "SEO-friendly structure for cardiologists, cardiac procedures, treatments and heart-hospital searches.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Institute Home Page",
      description:
        "Heart institute introduction, specialists, treatments, facilities and appointment actions.",
    },
    {
      title: "About Heart Institute",
      description:
        "Present institute experience, cardiac-care approach, facilities, technology and professional information.",
    },
    {
      title: "Cardiologist & Specialist Profiles",
      description:
        "Professional profiles with qualifications, specializations, certifications and experience.",
    },
    {
      title: "Cardiac Services",
      description:
        "Complete overview of available cardiac and cardiovascular services.",
    },
    {
      title: "Heart Conditions & Treatments",
      description:
        "Detailed information about important cardiac conditions and treatment options.",
    },
    {
      title: "Cardiac Diagnostics",
      description:
        "Information about heart investigations, diagnostic tests and screening services.",
    },
    {
      title: "Advanced Cardiac Procedures",
      description:
        "Dedicated pages for available cardiac procedures and interventions.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health screening, prevention and lifestyle-care information.",
    },
    {
      title: "Emergency Cardiac Care",
      description:
        "Urgent cardiac-care information and emergency contact details where applicable.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Showcase cardiac facilities, diagnostic equipment and institute infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac-treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to cardiac services, treatments and appointments.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish prevention, lifestyle and cardiovascular-awareness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request appointments with cardiologists and specialist services.",
    },
    {
      title: "Contact & Institute Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "pulse-heart-ai-chatbot",
      icon: "🤖",
      name: "AI Heart Care Assistant",
      description:
        "Answer common questions about specialists, cardiac services, treatments, timings and location.",
      price: "Add-On",
    },
    {
      id: "pulse-heart-crm",
      icon: "📊",
      name: "Cardiac Patient CRM",
      description:
        "Connect patient enquiries with CRM workflows for tracking, follow-ups and lead management.",
      price: "Add-On",
    },
    {
      id: "pulse-heart-cost-calculator",
      icon: "🧮",
      name: "Cardiac Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected diagnostics, treatments and cardiac procedures.",
      price: "Add-On",
    },
    {
      id: "pulse-heart-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or cardiac service, choose a date and time, enter patient details and complete online payment.",
      price: "Add-On",
    },
    {
      id: "pulse-heart-domain",
      icon: "🌐",
      name: "Custom Domain",
      description:
        "Custom domain registration and website domain setup.",
      price: "Add-On",
    },
    {
      id: "pulse-heart-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Cardiology Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Cardiologist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Cardiology Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Heart Care Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "hope-ivf-center": createProductDetail({
//   slug: "hope-ivf-center",
//   name: "Hope IVF Center",
//   category: "IVF Center Website",
//   tagline:
//     "A professional fertility clinic website for IVF centers offering treatment information, specialist profiles and patient enquiries.",
//   rating: "4.8",
//   reviewCount: 34,
//   purchases: 86,
//   currentPrice: "₹14,999",
//   oldPrice: "₹35,999",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"hope-ivf-center": createProductDetail({
  slug: "hope-ivf-center",

  name: "Hope IVF Center",

  category: "IVF Center Website",

  tagline:
    "A professional Fertility & IVF Clinic Website for IVF centres offering fertility consultations, IVF and IUI treatment information, specialist profiles, fertility testing and patient enquiries.",

  rating: "4.8",
  reviewCount: 34,
  purchases: 86,

  currentPrice: "₹14,999",
  oldPrice: "₹35,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌸",
      title: "Professional Fertility & IVF Design",
      description:
        "Modern, clean and trustworthy website design specifically for fertility clinics, IVF centres and reproductive healthcare centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Fertility Specialist Profile",
      description:
        "Showcase fertility specialist, IVF doctor, gynecologist or reproductive specialist qualifications, specialization and experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧬",
      title: "Fertility Services Showcase",
      description:
        "Present IVF, IUI, fertility consultation, fertility testing and other reproductive healthcare services clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧪",
      title: "IVF Treatment Information",
      description:
        "Explain the IVF process, treatment stages and related information in a simple and easy-to-understand format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔬",
      title: "Fertility Testing & Assessment",
      description:
        "Present available fertility tests, consultations and assessment services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👫",
      title: "Male & Female Fertility Care",
      description:
        "Showcase male and female fertility-related consultation, testing and treatment services separately.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📋",
      title: "Fertility Treatment Information",
      description:
        "Provide dedicated information sections for different fertility treatment options and procedures.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "✨",
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and patient success stories.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build trust and credibility.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit fertility consultation or appointment enquiries through the website.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to directly contact the fertility clinic through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct call option for mobile visitors.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Google Maps Integration",
      description:
        "Help patients easily find the IVF centre or fertility clinic location.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Fertility & IVF FAQ",
      description:
        "Answer common fertility and IVF-related patient questions.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Fertility & IVF Blog",
      description:
        "Publish fertility, IVF, reproductive-health and treatment-awareness content.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "IVF SEO Structure",
      description:
        "SEO-friendly structure for IVF clinics, fertility specialists, fertility treatments and location-based searches.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, fertility services, IVF treatments, doctor information, success stories, testimonials and enquiry CTA.",
    },
    {
      title: "About Clinic / IVF Centre",
      description:
        "Present centre experience, facilities, treatment approach and professional information.",
    },
    {
      title: "Fertility Specialist Profile",
      description:
        "Doctor qualification, specialization, experience and professional details.",
    },
    {
      title: "Fertility Services",
      description:
        "Complete overview of available fertility services.",
    },
    {
      title: "IVF Treatment",
      description:
        "Detailed IVF treatment and process information.",
    },
    {
      title: "IUI Treatment",
      description:
        "Dedicated IUI treatment and related information.",
    },
    {
      title: "Fertility Testing & Assessment",
      description:
        "Information about available fertility tests, consultations and assessment services.",
    },
    {
      title: "Male Fertility",
      description:
        "Male fertility consultation, testing and treatment services.",
    },
    {
      title: "Female Fertility",
      description:
        "Female fertility consultation, testing and treatment services.",
    },
    {
      title: "Fertility Treatment Details",
      description:
        "Detailed pages or sections for individual fertility treatments and procedures.",
    },
    {
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and success stories.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and fertility-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common fertility and IVF-related questions.",
    },
    {
      title: "Fertility & IVF Blog",
      description:
        "Publish fertility awareness, IVF and reproductive-health educational content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit fertility consultation and appointment requests.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "hope-ivf-ai-chatbot",
      icon: "🤖",
      name: "AI Fertility Chatbot",
      description:
        "Answer common questions about IVF services, fertility treatments, treatment process, clinic timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "hope-ivf-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect website enquiries with CRM workflows for lead management and follow-ups.",
      price: "Add-On",
    },
    {
      id: "hope-ivf-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Calculate estimated treatment costs based on selected fertility treatments or services.",
      price: "Add-On",
    },
    {
      id: "hope-ivf-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time, enter patient details and make an online payment.",
      price: "Add-On",
    },
    {
      id: "hope-ivf-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "hope-ivf-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Hosting purchase, setup, configuration and website deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "IVF Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Fertility Specialist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "IVF Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Fertility Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "fertility-care-ivf": createProductDetail({
//   slug: "fertility-care-ivf",
//   name: "Fertility Care IVF",
//   category: "IVF Center Website",
//   tagline:
//     "A modern IVF website for fertility specialists with treatment pages, success stories and consultation booking.",
//   rating: "4.8",
//   reviewCount: 41,
//   purchases: 108,
//   currentPrice: "₹16,999",
//   oldPrice: "₹42,499",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",
//   mainImage: "/images/templates.jpg",
// }),

"fertility-care-ivf": createProductDetail({
  slug: "fertility-care-ivf",

  name: "Fertility Care IVF",

  category: "IVF Center Website",

  tagline:
    "A modern Fertility & IVF Website focused on IVF and IUI treatment journeys, fertility assessment, specialist consultations, success stories and patient enquiries.",

  rating: "4.8",
  reviewCount: 41,
  purchases: 108,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌸",
      title: "Modern Fertility Clinic Design",
      description:
        "Clean, reassuring and professional website design for fertility clinics, IVF centres and reproductive healthcare practices.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👩‍⚕️",
      title: "Fertility Specialist Profile",
      description:
        "Present IVF doctors, fertility specialists, gynecologists and reproductive specialists with qualifications and experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧬",
      title: "IVF Treatment Journey",
      description:
        "Explain IVF treatment stages and the overall treatment process in a clear and patient-friendly way.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧪",
      title: "IUI Treatment Information",
      description:
        "Provide dedicated information about IUI treatment, procedures and related fertility-care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔬",
      title: "Fertility Testing & Assessment",
      description:
        "Show available fertility tests, consultations and assessment services for patients.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👨",
      title: "Male Fertility Care",
      description:
        "Present male fertility consultation, testing and treatment services separately.",
      iconBackground: "#edfae8",
    },
    {
      icon: "👩",
      title: "Female Fertility Care",
      description:
        "Present female fertility consultation, testing and treatment options clearly.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📋",
      title: "Fertility Treatment Details",
      description:
        "Create dedicated sections for individual fertility treatments and procedures.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✨",
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and success stories in a dedicated section.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build trust and confidence.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow patients to request fertility consultations and appointments online.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow patients to contact the fertility centre directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide mobile visitors with a direct call option.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Clinic Location",
      description:
        "Integrate Google Maps to help patients easily locate the fertility centre.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❓",
      title: "IVF & Fertility FAQ",
      description:
        "Answer common patient questions related to IVF, IUI and fertility treatments.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Reproductive Health Blog",
      description:
        "Publish fertility awareness, IVF, reproductive health and treatment-related educational content.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Fertility services, IVF treatments, specialist information, success stories and consultation CTA.",
    },
    {
      title: "About Fertility Centre",
      description:
        "Present centre experience, facilities, treatment approach and professional information.",
    },
    {
      title: "Fertility Specialist Profile",
      description:
        "Show doctor qualifications, specialization, experience and fertility-care expertise.",
    },
    {
      title: "Fertility Services",
      description:
        "Complete overview of available fertility and reproductive-health services.",
    },
    {
      title: "IVF Treatment",
      description:
        "Detailed IVF process, treatment stages and patient information.",
    },
    {
      title: "IUI Treatment",
      description:
        "Dedicated information about IUI treatment and related procedures.",
    },
    {
      title: "Fertility Testing & Assessment",
      description:
        "Information about fertility tests, consultations and diagnostic assessment services.",
    },
    {
      title: "Male Fertility",
      description:
        "Male fertility testing, consultations and treatment options.",
    },
    {
      title: "Female Fertility",
      description:
        "Female fertility testing, consultations and treatment options.",
    },
    {
      title: "Treatment Details",
      description:
        "Detailed pages or sections for specific fertility treatments and procedures.",
    },
    {
      title: "Success Stories",
      description:
        "Show fertility-treatment journeys and successful patient outcomes.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and fertility-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common fertility and IVF-related patient questions.",
    },
    {
      title: "Fertility & IVF Blog",
      description:
        "Publish fertility-awareness and reproductive-health content.",
    },
    {
      title: "Consultation / Appointment",
      description:
        "Allow patients to request fertility consultations and appointments.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "fertility-care-ai-chatbot",
      icon: "🤖",
      name: "AI Fertility Assistant",
      description:
        "Answer common questions about IVF, IUI, fertility services, treatment processes, timings and location.",
      price: "Add-On",
    },
    {
      id: "fertility-care-crm",
      icon: "📊",
      name: "Fertility Lead CRM",
      description:
        "Connect consultation enquiries with CRM workflows for tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "fertility-care-cost-calculator",
      icon: "🧮",
      name: "Fertility Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected IVF, IUI and fertility treatment services.",
      price: "Add-On",
    },
    {
      id: "fertility-care-booking-payment",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "fertility-care-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration and setup for the fertility centre website.",
      price: "Add-On",
    },
    {
      id: "fertility-care-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "IVF Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Fertility Specialist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "IVF Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Fertility Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "motherhood-fertility-center": createProductDetail({
//   slug: "motherhood-fertility-center",
//   name: "Motherhood Fertility Center",
//   category: "IVF Center Website",
//   tagline:
//     "A premium fertility center website for IVF, IUI and reproductive-care services with international patient support.",
//   rating: "4.9",
//   reviewCount: 47,
//   purchases: 121,
//   currentPrice: "₹18,999",
//   oldPrice: "₹49,999",
//   discount: "62% OFF",
//   priceRange: "Up to 35 pages",
//   mainImage: "/images/templates.jpg",
// }),

"motherhood-fertility-center": createProductDetail({
  slug: "motherhood-fertility-center",

  name: "Motherhood Fertility Center",

  category: "IVF Center Website",

  tagline:
    "A premium Fertility & IVF Centre Website for reproductive healthcare centres offering IVF, IUI, fertility assessment, male and female fertility care and specialist consultations.",

  rating: "4.9",
  reviewCount: 47,
  purchases: 121,

  currentPrice: "₹18,999",
  oldPrice: "₹49,999",
  discount: "62% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌸",
      title: "Premium Fertility Centre Design",
      description:
        "Modern, clean and trustworthy website presentation for fertility centres, IVF clinics and reproductive healthcare centres.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👩‍⚕️",
      title: "Fertility Specialist Profiles",
      description:
        "Showcase IVF doctors, gynecologists and reproductive specialists with qualifications, specialization and experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧬",
      title: "IVF Treatment Information",
      description:
        "Explain IVF treatment stages, process and related patient information clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧪",
      title: "IUI Treatment Information",
      description:
        "Present dedicated information about IUI treatment and related fertility-care services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔬",
      title: "Fertility Assessment",
      description:
        "Present fertility tests, specialist consultations and assessment services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👨",
      title: "Male Fertility Care",
      description:
        "Showcase male fertility consultations, testing and treatment services.",
      iconBackground: "#edfae8",
    },
    {
      icon: "👩",
      title: "Female Fertility Care",
      description:
        "Present female fertility consultations, testing and treatment services separately.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📋",
      title: "Fertility Treatment Details",
      description:
        "Create detailed sections for individual fertility treatments and reproductive procedures.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✨",
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and patient success stories.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build trust and credibility.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📅",
      title: "Consultation & Appointment Enquiry",
      description:
        "Allow patients to submit fertility consultation and appointment requests online.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the fertility centre directly through WhatsApp.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct call option for mobile visitors.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📍",
      title: "Centre Location & Maps",
      description:
        "Help patients easily locate the fertility centre using Google Maps.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "❓",
      title: "Fertility & IVF FAQ",
      description:
        "Answer common questions related to IVF, IUI, fertility assessment and treatment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Fertility & IVF Blog",
      description:
        "Publish fertility awareness, IVF, reproductive-health and treatment-related educational content.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Centre introduction, fertility services, IVF treatments, specialists, success stories and consultation CTA.",
    },
    {
      title: "About Fertility Centre",
      description:
        "Present centre experience, facilities, treatment approach and professional information.",
    },
    {
      title: "Fertility Specialist Profiles",
      description:
        "Professional profiles covering qualification, specialization and experience.",
    },
    {
      title: "Fertility Services",
      description:
        "Complete overview of available fertility and reproductive healthcare services.",
    },
    {
      title: "IVF Treatment",
      description:
        "Detailed information about IVF treatment and the treatment process.",
    },
    {
      title: "IUI Treatment",
      description:
        "Dedicated information about IUI treatment and related services.",
    },
    {
      title: "Fertility Testing & Assessment",
      description:
        "Information about fertility tests, consultations and assessment services.",
    },
    {
      title: "Male Fertility",
      description:
        "Male fertility consultations, testing and treatment services.",
    },
    {
      title: "Female Fertility",
      description:
        "Female fertility consultations, testing and treatment services.",
    },
    {
      title: "Fertility Treatment Details",
      description:
        "Detailed pages or sections for individual treatments and procedures.",
    },
    {
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and success stories.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and fertility-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common fertility and IVF-related questions.",
    },
    {
      title: "Fertility & IVF Blog",
      description:
        "Publish fertility awareness, reproductive-health and treatment-related content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to submit fertility consultation and appointment requests.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, centre address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "motherhood-ai-chatbot",
      icon: "🤖",
      name: "AI Fertility Assistant",
      description:
        "Answer common questions about IVF services, fertility treatments, treatment processes, timings and location.",
      price: "Add-On",
    },
    {
      id: "motherhood-crm",
      icon: "📊",
      name: "Fertility CRM Integration",
      description:
        "Connect patient enquiries with CRM workflows for lead tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "motherhood-cost-calculator",
      icon: "🧮",
      name: "Fertility Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected fertility treatments and services.",
      price: "Add-On",
    },
    {
      id: "motherhood-booking-payment",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time, enter patient details and make an online payment.",
      price: "Add-On",
    },
    {
      id: "motherhood-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "motherhood-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "IVF Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Fertility Specialist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "IVF Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Fertility Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "newlife-ivf-clinic": createProductDetail({
//   slug: "newlife-ivf-clinic",
//   name: "NewLife IVF Clinic",
//   category: "IVF Center Website",
//   tagline:
//     "A clean fertility clinic website for presenting IVF treatments, fertility specialists, testimonials and consultations.",
//   rating: "4.7",
//   reviewCount: 27,
//   purchases: 64,
//   currentPrice: "₹12,999",
//   oldPrice: "₹29,999",
//   discount: "56% OFF",
//   priceRange: "Up to 20 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// DOCTOR
// ============================================================

"newlife-ivf-clinic": createProductDetail({
  slug: "newlife-ivf-clinic",

  name: "NewLife IVF Clinic",

  category: "IVF Center Website",

  tagline:
    "A clean and focused IVF Clinic Website for fertility specialists offering IVF treatment information, fertility assessment, consultations, testimonials and patient enquiries.",

  rating: "4.7",
  reviewCount: 27,
  purchases: 64,

  currentPrice: "₹12,999",
  oldPrice: "₹29,999",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌸",
      title: "Clean IVF Clinic Design",
      description:
        "Professional and reassuring website design created for IVF clinics and fertility specialist practices.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👩‍⚕️",
      title: "Fertility Specialist Profile",
      description:
        "Present doctor qualifications, specialization, experience and professional fertility-care information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🧬",
      title: "IVF Treatment Information",
      description:
        "Explain the IVF process, treatment stages and related information in a clear patient-friendly format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🧪",
      title: "IUI Treatment Information",
      description:
        "Present dedicated information about IUI treatment and related fertility services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔬",
      title: "Fertility Testing & Assessment",
      description:
        "Show available fertility tests, consultations and assessment services.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👫",
      title: "Male & Female Fertility Care",
      description:
        "Present fertility consultation, testing and treatment services for both male and female patients.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Create dedicated sections for important fertility treatments and procedures.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "✨",
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and success stories.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to build confidence and trust.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow patients to submit fertility consultation and appointment requests online.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the IVF clinic directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Provide a direct call option for mobile visitors.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Clinic Location",
      description:
        "Help patients find the IVF clinic easily using Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "IVF FAQ",
      description:
        "Answer common questions related to IVF, fertility testing and consultations.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Fertility Blog",
      description:
        "Publish fertility awareness, IVF and reproductive-health educational content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Clinic introduction, fertility services, IVF treatment information and consultation CTA.",
    },
    {
      title: "About IVF Clinic",
      description:
        "Present clinic experience, treatment approach and professional information.",
    },
    {
      title: "Fertility Specialist Profile",
      description:
        "Professional doctor profile with qualifications, specialization and experience.",
    },
    {
      title: "Fertility Services",
      description:
        "Overview of available fertility and reproductive-health services.",
    },
    {
      title: "IVF Treatment",
      description:
        "Detailed information about IVF treatment and treatment stages.",
    },
    {
      title: "IUI Treatment",
      description:
        "Dedicated IUI treatment and related information.",
    },
    {
      title: "Fertility Testing & Assessment",
      description:
        "Information about fertility tests, consultation and assessment services.",
    },
    {
      title: "Male & Female Fertility",
      description:
        "Information about male and female fertility consultation, testing and treatments.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated sections for individual fertility treatments and procedures.",
    },
    {
      title: "Success Stories",
      description:
        "Showcase fertility treatment journeys and success stories.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and fertility-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common IVF and fertility-related patient questions.",
    },
    {
      title: "Fertility Blog",
      description:
        "Publish fertility, IVF and reproductive-health educational content.",
    },
    {
      title: "Consultation / Appointment",
      description:
        "Allow patients to submit consultation and appointment enquiries.",
    },
    {
      title: "Contact & Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "newlife-ai-chatbot",
      icon: "🤖",
      name: "AI IVF Assistant",
      description:
        "Answer common questions about IVF services, fertility treatments, clinic timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "newlife-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect fertility enquiries with CRM workflows for tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "newlife-cost-calculator",
      icon: "🧮",
      name: "Fertility Treatment Cost Calculator",
      description:
        "Provide estimated costs for selected fertility treatments and services.",
      price: "Add-On",
    },
    {
      id: "newlife-booking-payment",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a doctor or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "newlife-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration and setup.",
      price: "Add-On",
    },
    {
      id: "newlife-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "IVF Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Fertility Specialist Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "IVF Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Fertility Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "dr-healthcare-profile": createProductDetail({
//   slug: "dr-healthcare-profile",
//   name: "Dr. Healthcare Profile",
//   category: "Doctor Portfolio Website",
//   tagline:
//     "A professional personal website for doctors who want to showcase their profile, treatments, expertise and appointment information.",
//   rating: "4.6",
//   reviewCount: 24,
//   purchases: 61,
//   currentPrice: "₹7,999",
//   oldPrice: "₹15,999",
//   discount: "50% OFF",
//   priceRange: "Up to 12 pages",
//   mainImage: "/images/templates.jpg",
// }),

"dr-healthcare-profile": createProductDetail({
  slug: "dr-healthcare-profile",

  name: "Dr. Healthcare Profile",

  category: "Doctor Portfolio Website",

  tagline:
    "A professional Doctor Profile Website for individual doctors and medical specialists who want to showcase their expertise, treatments, achievements and consultation information.",

  rating: "4.6",
  reviewCount: 24,
  purchases: 61,

  currentPrice: "₹7,999",
  oldPrice: "₹15,999",
  discount: "50% OFF",
  priceRange: "Up to 12 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👨‍⚕️",
      title: "Professional Doctor Profile",
      description:
        "Showcase qualifications, specialization, experience, certifications, memberships and professional details.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎯",
      title: "Specializations",
      description:
        "Present the doctor's key areas of expertise and medical specializations clearly.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🩺",
      title: "Services & Treatments",
      description:
        "Show consultation services, treatments, procedures and healthcare services in a structured format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide clear and informative sections for important treatments and procedures.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🏥",
      title: "Clinic / Hospital Affiliation",
      description:
        "Present information about associated clinics, hospitals or healthcare centres.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Show professional awards, certifications, recognitions and achievements.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences to build professional credibility.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Before & After Gallery",
      description:
        "Where applicable, showcase treatment results and professional work visually.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit consultation and appointment requests through the website.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the doctor or clinic directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct call option for patients browsing from mobile devices.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Clinic Location & Maps",
      description:
        "Help patients find the doctor's clinic location through Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Patient FAQ",
      description:
        "Answer common patient questions related to consultations and treatments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Doctor Blog",
      description:
        "Publish healthcare awareness, treatment information and expert advice.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Doctor SEO Structure",
      description:
        "SEO-friendly structure for doctor name, specialization, treatments and location-based searches.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Doctor introduction, specialization, experience, key services, achievements, testimonials and appointment CTA.",
    },
    {
      title: "About Doctor",
      description:
        "Professional background, experience, expertise and medical approach.",
    },
    {
      title: "Doctor Profile",
      description:
        "Qualifications, specialization, experience, certifications, memberships and professional details.",
    },
    {
      title: "Specializations",
      description:
        "Detailed overview of the doctor's areas of expertise.",
    },
    {
      title: "Services / Treatments",
      description:
        "Overview of consultations, treatments and procedures.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information pages or sections for important treatments and procedures.",
    },
    {
      title: "Clinic / Hospital Affiliation",
      description:
        "Information about associated clinics, hospitals or healthcare centres.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Professional awards, certifications and recognitions.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences.",
    },
    {
      title: "Before & After Gallery",
      description:
        "Where applicable, showcase treatment results and professional work.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions.",
    },
    {
      title: "Doctor Blog",
      description:
        "Publish healthcare, treatment, awareness and expert-advice articles.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit consultation and appointment requests.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "dr-healthcare-ai-chatbot",
      icon: "🤖",
      name: "AI Doctor Assistant",
      description:
        "Answer common questions about doctor services, treatments, consultation information, clinic timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "dr-healthcare-crm",
      icon: "📊",
      name: "Patient Enquiry CRM",
      description:
        "Connect website enquiries with CRM workflows for lead capture, enquiry tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "dr-healthcare-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a consultation or service, choose a date and time, enter patient details and complete online payment.",
      price: "Add-On",
    },
    {
      id: "dr-healthcare-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "dr-healthcare-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, setup, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Doctor Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "dr-arjun-clinic": createProductDetail({
//   slug: "dr-arjun-clinic",
//   name: "Dr. Arjun Clinic",
//   category: "Doctor Website",
//   tagline:
//     "A clean doctor clinic website for presenting medical expertise, consultation services and online appointment options.",
//   rating: "4.6",
//   reviewCount: 22,
//   purchases: 58,
//   currentPrice: "₹8,999",
//   oldPrice: "₹18,999",
//   discount: "52% OFF",
//   priceRange: "Up to 15 pages",
//   mainImage: "/images/templates.jpg",
// }),

"dr-arjun-clinic": createProductDetail({
  slug: "dr-arjun-clinic",

  name: "Dr. Arjun Clinic",

  category: "Doctor Website",

  tagline:
    "A clean Doctor Clinic Website for individual doctors who want to present their medical expertise, consultation services, treatments and appointment information professionally.",

  rating: "4.6",
  reviewCount: 22,
  purchases: 58,

  currentPrice: "₹8,999",
  oldPrice: "₹18,999",
  discount: "52% OFF",
  priceRange: "Up to 15 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👨‍⚕️",
      title: "Professional Doctor Branding",
      description:
        "Build a clean and professional online presence focused on the doctor's personal brand and medical practice.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🪪",
      title: "Doctor Profile",
      description:
        "Show qualifications, specialization, experience, certifications, memberships and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🩺",
      title: "Medical Specialization",
      description:
        "Highlight the doctor's main specialization and areas of medical expertise.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏥",
      title: "Consultation Services",
      description:
        "Present available consultations, medical services and patient-care offerings clearly.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide clear and informative sections for important treatments and procedures.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📅",
      title: "Appointment Enquiry",
      description:
        "Allow patients to submit consultation and appointment requests directly from the website.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences to strengthen trust in the doctor and clinic.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Show professional awards, certifications, recognitions and achievements.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏨",
      title: "Clinic / Hospital Affiliation",
      description:
        "Present information about associated clinics, hospitals or healthcare centres.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the doctor or clinic directly through WhatsApp.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Provide a one-tap call option for mobile visitors.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📍",
      title: "Clinic Location",
      description:
        "Help patients locate the clinic easily through Google Maps.",
      iconBackground: "#edfae8",
    },
    {
      icon: "❓",
      title: "Patient FAQ",
      description:
        "Answer common questions about consultations, services and treatments.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📰",
      title: "Doctor Blog",
      description:
        "Publish healthcare awareness, treatment information and expert advice.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Doctor SEO",
      description:
        "SEO-friendly structure for doctor name, specialization, treatments and local clinic searches.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Doctor introduction, specialization, services, achievements, testimonials and appointment CTA.",
    },
    {
      title: "About Doctor",
      description:
        "Professional background, experience, expertise and medical approach.",
    },
    {
      title: "Doctor Profile",
      description:
        "Qualifications, specialization, experience, certifications and memberships.",
    },
    {
      title: "Specializations",
      description:
        "Detailed overview of the doctor's medical areas of expertise.",
    },
    {
      title: "Consultation Services",
      description:
        "Overview of consultations and medical services offered by the doctor.",
    },
    {
      title: "Treatments & Procedures",
      description:
        "Dedicated information sections for important treatments and procedures.",
    },
    {
      title: "Clinic / Hospital Affiliation",
      description:
        "Information about associated clinics, hospitals or healthcare centres.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Professional awards, certifications and recognitions.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and consultation experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions.",
    },
    {
      title: "Doctor Blog",
      description:
        "Publish healthcare, treatment and expert-advice articles.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request consultations and appointments.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "dr-arjun-ai-chatbot",
      icon: "🤖",
      name: "AI Doctor Assistant",
      description:
        "Answer common questions about doctor services, treatments, consultation information, timings and location.",
      price: "Add-On",
    },
    {
      id: "dr-arjun-crm",
      icon: "📊",
      name: "Patient Enquiry CRM",
      description:
        "Manage consultation enquiries, patient leads and follow-up workflows.",
      price: "Add-On",
    },
    {
      id: "dr-arjun-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a consultation or service, choose a date and time and complete online payment.",
      price: "Add-On",
    },
    {
      id: "dr-arjun-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "dr-arjun-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, setup, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Doctor Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "specialist-doctor-profile": createProductDetail({
//   slug: "specialist-doctor-profile",
//   name: "Specialist Doctor Profile",
//   category: "Doctor Portfolio Website",
//   tagline:
//     "A specialist doctor website for showcasing qualifications, treatments, publications, experience and patient consultations.",
//   rating: "4.7",
//   reviewCount: 29,
//   purchases: 74,
//   currentPrice: "₹10,999",
//   oldPrice: "₹24,499",
//   discount: "55% OFF",
//   priceRange: "Up to 20 pages",
//   mainImage: "/images/templates.jpg",
// }),

"specialist-doctor-profile": createProductDetail({
  slug: "specialist-doctor-profile",

  name: "Specialist Doctor Profile",

  category: "Doctor Portfolio Website",

  tagline:
    "A specialist Doctor Professional Website for medical consultants who want to showcase their qualifications, specialization, treatments, experience, achievements and patient consultations.",

  rating: "4.7",
  reviewCount: 29,
  purchases: 74,

  currentPrice: "₹10,999",
  oldPrice: "₹24,499",
  discount: "55% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "👨‍⚕️",
      title: "Specialist Doctor Branding",
      description:
        "Build a professional online presence centered on the doctor's specialist expertise and medical reputation.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🎓",
      title: "Qualifications & Credentials",
      description:
        "Showcase medical qualifications, certifications, memberships and professional credentials.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎯",
      title: "Medical Specialization",
      description:
        "Prominently present the doctor's specialization and key areas of medical expertise.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Specialist Services",
      description:
        "Present consultations, treatments, procedures and specialist healthcare services clearly.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide detailed and informative sections for important treatments and procedures.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🧑‍⚕️",
      title: "Professional Experience",
      description:
        "Present the doctor's professional journey, clinical experience, expertise and approach.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Show professional awards, certifications, recognitions and medical achievements.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Clinic / Hospital Affiliation",
      description:
        "Present associated clinics, hospitals and healthcare centres.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences to strengthen trust and credibility.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Specialist Consultation Enquiry",
      description:
        "Allow patients to request specialist consultations and appointments online.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow patients to directly contact the doctor or clinic through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for mobile visitors.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Clinic Location",
      description:
        "Help patients easily find the doctor's clinic through Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Specialist FAQ",
      description:
        "Answer common patient questions about consultations, treatments and procedures.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Expert Doctor Blog",
      description:
        "Publish healthcare awareness, treatment information and specialist medical insights.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Specialist Doctor SEO",
      description:
        "SEO-friendly structure for doctor name, specialization, treatments and location-based searches.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Professional Home Page",
      description:
        "Doctor introduction, specialization, experience, key treatments, achievements and consultation CTA.",
    },
    {
      title: "About Doctor",
      description:
        "Professional journey, clinical experience, expertise and treatment approach.",
    },
    {
      title: "Doctor Profile",
      description:
        "Qualifications, certifications, memberships and professional details.",
    },
    {
      title: "Specializations",
      description:
        "Detailed overview of specialist medical expertise.",
    },
    {
      title: "Services & Treatments",
      description:
        "Overview of consultations, specialist treatments and procedures.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information pages or sections for important treatments and procedures.",
    },
    {
      title: "Professional Experience",
      description:
        "Present clinical experience, expertise and professional background.",
    },
    {
      title: "Clinic / Hospital Affiliation",
      description:
        "Information about associated clinics, hospitals or healthcare centres.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Professional awards, certifications and recognitions.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions related to specialist care.",
    },
    {
      title: "Doctor Blog",
      description:
        "Publish healthcare awareness, treatments and expert-advice articles.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request specialist consultations and appointments.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "specialist-doctor-ai-chatbot",
      icon: "🤖",
      name: "AI Specialist Assistant",
      description:
        "Answer common questions about specialist services, treatments, consultation information, timings and location.",
      price: "Add-On",
    },
    {
      id: "specialist-doctor-crm",
      icon: "📊",
      name: "Patient Enquiry CRM",
      description:
        "Manage specialist consultation enquiries, lead tracking and patient follow-ups.",
      price: "Add-On",
    },
    {
      id: "specialist-doctor-booking-payment",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a consultation or service, choose a date and time and complete online payment.",
      price: "Add-On",
    },
    {
      id: "specialist-doctor-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "specialist-doctor-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment setup.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Doctor Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "premium-doctor-portfolio": createProductDetail({
//   slug: "premium-doctor-portfolio",
//   name: "Premium Doctor Portfolio",
//   category: "Doctor Portfolio Website",
//   tagline:
//     "A premium personal brand website for established doctors, surgeons and healthcare specialists.",
//   rating: "4.8",
//   reviewCount: 36,
//   purchases: 91,
//   currentPrice: "₹12,999",
//   oldPrice: "₹30,999",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// DIAGNOSTIC CENTER
// ============================================================

"premium-doctor-portfolio": createProductDetail({
  slug: "premium-doctor-portfolio",

  name: "Premium Doctor Portfolio",

  category: "Doctor Portfolio Website",

  tagline:
    "A premium Doctor Professional Website for established doctors, surgeons and medical specialists who want to build a strong personal brand and showcase expertise, achievements, treatments and patient consultations.",

  rating: "4.8",
  reviewCount: 36,
  purchases: 91,

  currentPrice: "₹12,999",
  oldPrice: "₹30,999",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "⭐",
      title: "Premium Doctor Branding",
      description:
        "Create a polished professional website focused on strengthening the doctor's personal brand and online presence.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Executive Doctor Profile",
      description:
        "Showcase qualifications, specialization, experience, certifications, memberships and professional background.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🎯",
      title: "Medical Specialization",
      description:
        "Prominently highlight areas of expertise, specialist services and professional focus.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Services & Treatments",
      description:
        "Present consultations, treatments, procedures and healthcare services in a professional format.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Detailed Treatment Information",
      description:
        "Create dedicated information sections for important treatments and procedures.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🏆",
      title: "Awards & Achievements",
      description:
        "Showcase professional awards, certifications, recognitions and important career achievements.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏥",
      title: "Clinic & Hospital Affiliations",
      description:
        "Present associated clinics, hospitals and healthcare institutions professionally.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🖼️",
      title: "Professional Gallery",
      description:
        "Showcase treatment results and professional work where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and experiences to strengthen professional credibility.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📅",
      title: "Consultation Enquiry",
      description:
        "Allow patients to request specialist consultations and appointments through the website.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the doctor or clinic directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct calling option for mobile visitors.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Clinic Location & Maps",
      description:
        "Help patients easily locate the doctor's clinic through Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Professional FAQ",
      description:
        "Answer common patient questions related to consultations, treatments and specialist services.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Expert Doctor Blog",
      description:
        "Publish healthcare awareness, treatment information and professional expert insights.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Personal Brand SEO",
      description:
        "SEO-friendly structure for doctor name, specialization, treatments and location-based searches.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Doctor introduction, specialization, experience, services, achievements, testimonials and consultation CTA.",
    },
    {
      title: "About Doctor",
      description:
        "Professional journey, expertise, experience and treatment approach.",
    },
    {
      title: "Doctor Profile",
      description:
        "Qualifications, specialization, certifications, memberships and professional details.",
    },
    {
      title: "Specializations",
      description:
        "Detailed overview of the doctor's specialist areas of expertise.",
    },
    {
      title: "Services & Treatments",
      description:
        "Overview of consultations, treatments and procedures.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information pages for important treatments and procedures.",
    },
    {
      title: "Awards & Achievements",
      description:
        "Professional awards, certifications and recognitions.",
    },
    {
      title: "Clinic / Hospital Affiliations",
      description:
        "Information about associated clinics, hospitals and healthcare centres.",
    },
    {
      title: "Professional Gallery",
      description:
        "Showcase treatment results and professional work where applicable.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and professional consultation experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common patient questions.",
    },
    {
      title: "Doctor Blog",
      description:
        "Publish healthcare awareness, treatment and expert-advice articles.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request appointments and consultations.",
    },
    {
      title: "Contact & Clinic Location",
      description:
        "Phone, WhatsApp, email, clinic address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "premium-doctor-ai-chatbot",
      icon: "🤖",
      name: "AI Doctor Concierge",
      description:
        "Answer common questions about specialist services, treatments, consultation information, clinic timings and location.",
      price: "Add-On",
    },
    {
      id: "premium-doctor-crm",
      icon: "📊",
      name: "Patient Enquiry CRM",
      description:
        "Connect consultation enquiries with CRM workflows for tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "premium-doctor-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a consultation or service, choose a date and time, enter details and complete payment online.",
      price: "Add-On",
    },
    {
      id: "premium-doctor-domain",
      icon: "🌐",
      name: "Premium Domain Setup",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "premium-doctor-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Doctor Portfolio Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Doctor Profile",
      value: "Included",
      badge: "included",
    },
    {
      label: "Services",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "healthscan-diagnostics": createProductDetail({
//   slug: "healthscan-diagnostics",
//   name: "HealthScan Diagnostic Center",
//   category: "Diagnostic Center Website",
//   tagline:
//     "A diagnostic center website for presenting laboratory tests, health packages, sample collection and patient enquiries.",
//   rating: "4.7",
//   reviewCount: 31,
//   purchases: 82,
//   currentPrice: "₹11,999",
//   oldPrice: "₹27,499",
//   discount: "56% OFF",
//   priceRange: "Up to 20 pages",
//   mainImage: "/images/templates.jpg",
// }),

"healthscan-diagnostics": createProductDetail({
  slug: "healthscan-diagnostics",

  name: "HealthScan Diagnostic Center",

  category: "Diagnostic Center Website",

  tagline:
    "A Cardiac Diagnostic Centre Website for presenting heart-health screening, cardiac diagnostic services, cardiologist information, preventive cardiology and patient appointment enquiries.",

  rating: "4.7",
  reviewCount: 31,
  purchases: 82,

  currentPrice: "₹11,999",
  oldPrice: "₹27,499",
  discount: "56% OFF",
  priceRange: "Up to 20 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🫀",
      title: "Cardiac Diagnostic Centre Design",
      description:
        "Clean and trustworthy website presentation focused on cardiac diagnostics, heart-health screening and preventive cardiology.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Profile",
      description:
        "Show cardiologist qualifications, specialization, experience and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Present available cardiac diagnostic services, heart-related tests and diagnostic information clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "❤️",
      title: "Heart Health Screening",
      description:
        "Present preventive cardiac screening and heart-health assessment information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Provide information about heart-health prevention, screening and lifestyle-related cardiac care.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide patient-friendly information about major cardiac conditions and available treatment options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🩺",
      title: "Cardiology Services",
      description:
        "Show consultations, diagnostics and related cardiac-care services available through the centre.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⚙️",
      title: "Diagnostic Facilities & Technology",
      description:
        "Showcase cardiac diagnostic equipment, facilities, technology and centre infrastructure.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Diagnostic Appointment Enquiry",
      description:
        "Allow patients to request cardiac diagnostic appointments or cardiology consultations online.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences to build trust.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the cardiac diagnostic centre directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for appointment and diagnostic enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Centre Location & Google Maps",
      description:
        "Help patients easily locate the cardiac diagnostic centre.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiac Diagnostics FAQ",
      description:
        "Answer common patient questions related to cardiac diagnostics, screening and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Centre introduction, cardiac diagnostics, cardiologist information, facilities and appointment CTA.",
    },
    {
      title: "About Diagnostic Centre",
      description:
        "Present centre experience, diagnostic facilities, technology and professional information.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional cardiologist information including specialization and experience.",
    },
    {
      title: "Cardiac Diagnostic Services",
      description:
        "Complete overview of available cardiac diagnostic services and heart-related tests.",
    },
    {
      title: "Heart Health Screening",
      description:
        "Information about cardiac screening and preventive heart-health assessments.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health prevention, screening and lifestyle-related information.",
    },
    {
      title: "Heart Treatment Information",
      description:
        "Patient-friendly information about major cardiac conditions and treatments.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Show cardiac diagnostic equipment, facilities and centre infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to cardiac diagnostics and screening.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention and cardiac-awareness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to submit diagnostic appointment and cardiology consultation requests.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "healthscan-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Diagnostics Assistant",
      description:
        "Answer common questions about cardiac services, diagnostic information, cardiologist details, timings and location.",
      price: "Add-On",
    },
    {
      id: "healthscan-crm",
      icon: "📊",
      name: "Diagnostic Enquiry CRM",
      description:
        "Connect diagnostic and consultation enquiries with CRM workflows for tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "healthscan-cost-calculator",
      icon: "🧮",
      name: "Cardiac Service Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac diagnostic services or related care.",
      price: "Add-On",
    },
    {
      id: "healthscan-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time, enter patient details and complete online payment.",
      price: "Add-On",
    },
    {
      id: "healthscan-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "healthscan-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Diagnostic Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Diagnostic Tests",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Test Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Diagnostic Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "prime-diagnostics": createProductDetail({
//   slug: "prime-diagnostics",
//   name: "Prime Diagnostics",
//   category: "Diagnostic Center Website",
//   tagline:
//     "A modern pathology and diagnostic website for lab tests, imaging services, health packages and home sample collection.",
//   rating: "4.8",
//   reviewCount: 39,
//   purchases: 105,
//   currentPrice: "₹13,999",
//   oldPrice: "₹33,499",
//   discount: "58% OFF",
//   priceRange: "Up to 25 pages",
//   mainImage: "/images/templates.jpg",
// }),

"prime-diagnostics": createProductDetail({
  slug: "prime-diagnostics",

  name: "Prime Diagnostics",

  category: "Diagnostic Center Website",

  tagline:
    "A modern Cardiac Diagnostic Centre Website for heart-health assessments, cardiac diagnostic services, preventive cardiology, specialist information and patient appointment enquiries.",

  rating: "4.8",
  reviewCount: 39,
  purchases: 105,

  currentPrice: "₹13,999",
  oldPrice: "₹33,499",
  discount: "58% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "❤️",
      title: "Modern Cardiac Diagnostics Design",
      description:
        "Clean and professional website design focused on cardiac diagnostic services, heart-health assessments and preventive care.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Information",
      description:
        "Show cardiologist qualifications, specialization, experience and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostic Services",
      description:
        "Present available cardiac diagnostic services and heart-related investigations clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🫀",
      title: "Heart Health Assessment",
      description:
        "Provide structured information about heart-health screening and cardiac assessment services.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Present preventive cardiac care, screening and lifestyle-related heart-health information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚙️",
      title: "Advanced Diagnostic Facilities",
      description:
        "Showcase cardiac diagnostic infrastructure, equipment, facilities and technology.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide clear information about major cardiac conditions and available treatment options.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🩺",
      title: "Cardiology Services",
      description:
        "Present cardiology consultations, cardiac care services and related patient information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Diagnostic Appointment Enquiry",
      description:
        "Allow patients to request cardiac diagnostic appointments and cardiology consultations.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient experiences and reviews to strengthen trust in the diagnostic centre.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow patients to contact the cardiac diagnostic centre directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for diagnostic and consultation enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Centre Location",
      description:
        "Help patients easily locate the diagnostic centre through Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiac Diagnostics FAQ",
      description:
        "Answer common patient questions related to diagnostics, screening and cardiac care.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Diagnostic centre introduction, cardiac services, heart-health assessments, facilities and appointment CTA.",
    },
    {
      title: "About Diagnostic Centre",
      description:
        "Present centre experience, facilities, technology and diagnostic-care approach.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional cardiologist details including specialization and experience.",
    },
    {
      title: "Cardiac Diagnostic Services",
      description:
        "Complete overview of available cardiac diagnostic services and investigations.",
    },
    {
      title: "Heart Health Assessment",
      description:
        "Information about cardiac screening and heart-health assessments.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Prevention, screening and lifestyle-related cardiac-care information.",
    },
    {
      title: "Heart Treatments",
      description:
        "Patient-friendly information about major heart conditions and treatment options.",
    },
    {
      title: "Facilities & Technology",
      description:
        "Show diagnostic equipment, infrastructure and cardiac-care technology.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common cardiac diagnostic and screening questions.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish prevention, lifestyle and heart-health educational content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request diagnostic appointments and cardiology consultations.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "prime-diagnostics-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Diagnostics Assistant",
      description:
        "Answer common questions about diagnostic services, cardiac-care information, cardiologist details, timings and location.",
      price: "Add-On",
    },
    {
      id: "prime-diagnostics-crm",
      icon: "📊",
      name: "Diagnostic Enquiry CRM",
      description:
        "Connect diagnostic enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "prime-diagnostics-cost-calculator",
      icon: "🧮",
      name: "Cardiac Service Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac diagnostic or related services.",
      price: "Add-On",
    },
    {
      id: "prime-diagnostics-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "prime-diagnostics-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "prime-diagnostics-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Diagnostic Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Diagnostic Tests",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Test Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Diagnostic Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "medilab-diagnostic-center": createProductDetail({
//   slug: "medilab-diagnostic-center",
//   name: "MediLab Diagnostic Center",
//   category: "Diagnostic Center Website",
//   tagline:
//     "A practical diagnostic lab website for blood tests, pathology, radiology and online booking services.",
//   rating: "4.6",
//   reviewCount: 25,
//   purchases: 66,
//   currentPrice: "₹9,999",
//   oldPrice: "₹21,999",
//   discount: "54% OFF",
//   priceRange: "Up to 18 pages",
//   mainImage: "/images/templates.jpg",
// }),

"medilab-diagnostic-center": createProductDetail({
  slug: "medilab-diagnostic-center",

  name: "MediLab Diagnostic Center",

  category: "Diagnostic Center Website",

  tagline:
    "A practical Cardiac Diagnostic Centre Website for presenting cardiac diagnostic services, cardiologist information, preventive heart care, facilities and patient appointment enquiries.",

  rating: "4.6",
  reviewCount: 26,
  purchases: 67,

  currentPrice: "₹10,999",
  oldPrice: "₹23,999",
  discount: "54% OFF",
  priceRange: "Up to 18 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🫀",
      title: "Cardiac Diagnostic Centre Design",
      description:
        "Clean and practical website presentation for cardiac diagnostic centres and heart-care facilities.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Profile",
      description:
        "Show cardiologist qualification, specialization, experience and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostics",
      description:
        "Present available cardiac diagnostic services and heart-related diagnostic information clearly.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "❤️",
      title: "Heart Health Screening",
      description:
        "Present heart-health screening and preventive cardiac-care information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Provide heart-health prevention, screening and lifestyle-related cardiac-care information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🩺",
      title: "Cardiology Services",
      description:
        "Present cardiology consultations, diagnostic services and related patient-care information.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Provide clear information about important cardiac conditions and treatment options.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⚙️",
      title: "Diagnostic Facilities",
      description:
        "Showcase diagnostic facilities, cardiac-care infrastructure and available technology.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Diagnostic Appointment Enquiry",
      description:
        "Allow patients to request diagnostic appointments or cardiology consultations online.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Enquiry",
      description:
        "Allow patients to contact the diagnostic centre directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Option",
      description:
        "Provide a direct call option for cardiac diagnostic enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Centre Location",
      description:
        "Help patients easily locate the diagnostic centre using Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiac Diagnostics FAQ",
      description:
        "Answer common patient questions about cardiac diagnostics, screening and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Diagnostic centre introduction, cardiac services, cardiologist information and appointment CTA.",
    },
    {
      title: "About Diagnostic Centre",
      description:
        "Present centre experience, facilities, infrastructure and professional information.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional cardiologist information including specialization and experience.",
    },
    {
      title: "Cardiac Diagnostic Services",
      description:
        "Overview of available cardiac diagnostic services.",
    },
    {
      title: "Heart Health Screening",
      description:
        "Information about cardiac screening and preventive heart-health assessment.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health prevention, screening and lifestyle-care information.",
    },
    {
      title: "Heart Treatment Information",
      description:
        "Patient-friendly information about cardiac conditions and treatment options.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Show diagnostic facilities, technology and cardiac-care infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common cardiac diagnostic and screening questions.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health and prevention content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request diagnostic appointments and cardiology consultations.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "medilab-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Diagnostics Assistant",
      description:
        "Answer common questions about diagnostic services, cardiologist information, timings and location.",
      price: "Add-On",
    },
    {
      id: "medilab-crm",
      icon: "📊",
      name: "Diagnostic Enquiry CRM",
      description:
        "Manage patient diagnostic enquiries, lead tracking and follow-ups.",
      price: "Add-On",
    },
    {
      id: "medilab-cost-calculator",
      icon: "🧮",
      name: "Cardiac Service Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac diagnostic or related services.",
      price: "Add-On",
    },
    {
      id: "medilab-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "medilab-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "medilab-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Diagnostic Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Diagnostic Tests",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Test Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Diagnostic Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "accurate-diagnostics": createProductDetail({
//   slug: "accurate-diagnostics",
//   name: "Accurate Diagnostics",
//   category: "Diagnostic Center Website",
//   tagline:
//     "A professional diagnostic website for health packages, imaging, laboratory services and report-access information.",
//   rating: "4.8",
//   reviewCount: 35,
//   purchases: 91,
//   currentPrice: "₹14,999",
//   oldPrice: "₹36,999",
//   discount: "59% OFF",
//   priceRange: "Up to 28 pages",
//   mainImage: "/images/templates.jpg",
// }),

"accurate-diagnostics": createProductDetail({
  slug: "accurate-diagnostics",

  name: "Accurate Diagnostics",

  category: "Diagnostic Center Website",

  tagline:
    "A professional Cardiac Diagnostic Centre Website focused on accurate heart-health screening, cardiac diagnostic services, preventive cardiology, facilities and patient appointment enquiries.",

  rating: "4.7",
  reviewCount: 33,
  purchases: 79,

  currentPrice: "₹12,999",
  oldPrice: "₹28,499",
  discount: "54% OFF",
  priceRange: "Up to 22 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🎯",
      title: "Accuracy-Focused Diagnostic Design",
      description:
        "Professional website presentation centered on reliable cardiac diagnostic services and structured patient information.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist Profile",
      description:
        "Present cardiologist qualification, specialization, experience and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Cardiac Diagnostic Services",
      description:
        "Clearly present available cardiac diagnostic services and related tests.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "❤️",
      title: "Heart Health Screening",
      description:
        "Present heart-health screening and preventive cardiac assessment information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Provide information about heart-health prevention, screening and lifestyle-related cardiac care.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📋",
      title: "Heart Treatment Information",
      description:
        "Explain major cardiac conditions and available treatment options in an easy-to-understand format.",
      iconBackground: "#edfae8",
    },
    {
      icon: "⚙️",
      title: "Facilities & Infrastructure",
      description:
        "Showcase cardiac diagnostic facilities, equipment, technology and infrastructure.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🩺",
      title: "Cardiology Services",
      description:
        "Present consultations, diagnostics and related cardiac-care services.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment Enquiry",
      description:
        "Allow patients to request diagnostic appointments and cardiology consultations online.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac diagnostic-care experiences.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to directly contact the diagnostic centre through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Call Integration",
      description:
        "Provide a direct call option for diagnostic and consultation enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Google Maps Location",
      description:
        "Help patients easily locate the diagnostic centre.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Cardiac Diagnostics FAQ",
      description:
        "Answer common questions related to cardiac diagnostics, screening and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Diagnostic centre introduction, cardiac services, screening information, facilities and appointment CTA.",
    },
    {
      title: "About Diagnostic Centre",
      description:
        "Present centre experience, infrastructure, technology and professional information.",
    },
    {
      title: "Cardiologist Profile",
      description:
        "Professional cardiologist details including specialization and experience.",
    },
    {
      title: "Cardiac Diagnostics",
      description:
        "Overview of available cardiac diagnostic services and tests.",
    },
    {
      title: "Heart Health Screening",
      description:
        "Information about preventive cardiac screening and heart-health assessments.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health prevention, screening and lifestyle-related care.",
    },
    {
      title: "Heart Treatment Information",
      description:
        "Information about major cardiac conditions and treatment options.",
    },
    {
      title: "Facilities & Infrastructure",
      description:
        "Show diagnostic facilities, equipment and cardiac-care technology.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and diagnostic-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to cardiac diagnostics.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention and awareness content.",
    },
    {
      title: "Appointment / Consultation Enquiry",
      description:
        "Allow patients to request diagnostic appointments and cardiology consultations.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "accurate-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Diagnostics Assistant",
      description:
        "Answer common questions about diagnostic services, cardiologist information, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "accurate-crm",
      icon: "📊",
      name: "Diagnostic Enquiry CRM",
      description:
        "Manage cardiac diagnostic enquiries, lead tracking and patient follow-ups.",
      price: "Add-On",
    },
    {
      id: "accurate-cost-calculator",
      icon: "🧮",
      name: "Cardiac Service Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac diagnostic or related services.",
      price: "Add-On",
    },
    {
      id: "accurate-booking-payment",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "accurate-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "accurate-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Diagnostic Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Diagnostic Tests",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Test Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Diagnostic Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),


// "advanced-diagnostic-lab": createProductDetail({
//   slug: "advanced-diagnostic-lab",
//   name: "Advanced Diagnostic Lab",
//   category: "Diagnostic Center Website",
//   tagline:
//     "A premium diagnostics website for advanced laboratory services, radiology, health packages and lead management.",
//   rating: "4.9",
//   reviewCount: 44,
//   purchases: 118,
//   currentPrice: "₹16,999",
//   oldPrice: "₹43,999",
//   discount: "61% OFF",
//   priceRange: "Up to 30 pages",
//   mainImage: "/images/templates.jpg",
// }),


// ============================================================
// MEDICAL TOURISM
// ============================================================

"advanced-diagnostic-lab": createProductDetail({
  slug: "advanced-diagnostic-lab",

  name: "Advanced Diagnostic Lab",

  category: "Diagnostic Center Website",

  tagline:
    "A premium Cardiac Diagnostic Centre Website for advanced cardiac diagnostics, preventive cardiology, specialist information, modern facilities and patient appointment management.",

  rating: "4.9",
  reviewCount: 44,
  purchases: 118,

  currentPrice: "₹16,999",
  oldPrice: "₹43,999",
  discount: "61% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🫀",
      title: "Advanced Cardiac Diagnostic Design",
      description:
        "Premium website presentation for cardiac diagnostic centres, heart-care facilities and advanced cardiac-service providers.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "👨‍⚕️",
      title: "Cardiologist & Specialist Profiles",
      description:
        "Show cardiologist qualifications, specialization, experience and professional details.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔬",
      title: "Advanced Cardiac Diagnostics",
      description:
        "Present available cardiac diagnostic services and heart-related tests in a structured format.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "❤️",
      title: "Heart Health Screening",
      description:
        "Present cardiac screening, preventive assessments and heart-health monitoring information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🛡️",
      title: "Preventive Cardiology",
      description:
        "Provide heart-health screening, prevention and lifestyle-related cardiac-care information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🩺",
      title: "Cardiology Services",
      description:
        "Show consultations, diagnostics, treatments and related cardiac-care services.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📋",
      title: "Cardiac Procedure Information",
      description:
        "Create dedicated information sections for available cardiac procedures and interventions.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⚙️",
      title: "Advanced Facilities & Technology",
      description:
        "Showcase cardiac diagnostic facilities, equipment, technology and infrastructure.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📅",
      title: "Appointment & Consultation Enquiry",
      description:
        "Allow patients to request cardiac diagnostic appointments and cardiology consultations.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "⭐",
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac-care experiences to build trust.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow patients to contact the diagnostic centre directly through WhatsApp.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📞",
      title: "Direct Call Integration",
      description:
        "Provide a direct call option for diagnostic and consultation enquiries.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📍",
      title: "Centre Location & Maps",
      description:
        "Help patients easily locate the cardiac diagnostic centre through Google Maps.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Advanced Cardiac FAQ",
      description:
        "Answer common questions related to cardiac diagnostics, screening, procedures and appointments.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "📰",
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention, lifestyle and cardiac-awareness content.",
      iconBackground: "#fff7e6",
    },
  ],

  customPackageIncludes: [
    {
      title: "Premium Home Page",
      description:
        "Centre introduction, advanced cardiac diagnostics, specialists, facilities and appointment CTA.",
    },
    {
      title: "About Diagnostic Centre",
      description:
        "Present centre experience, technology, facilities and cardiac diagnostic capabilities.",
    },
    {
      title: "Cardiologist Profiles",
      description:
        "Professional cardiologist details including specialization and experience.",
    },
    {
      title: "Advanced Cardiac Diagnostics",
      description:
        "Complete overview of available cardiac diagnostic services and tests.",
    },
    {
      title: "Heart Health Screening",
      description:
        "Information about cardiac screening and preventive heart-health assessment.",
    },
    {
      title: "Preventive Cardiology",
      description:
        "Heart-health prevention, screening and lifestyle-related cardiac care.",
    },
    {
      title: "Cardiac Procedures",
      description:
        "Dedicated information about available cardiac procedures and interventions.",
    },
    {
      title: "Heart Treatment Information",
      description:
        "Information about major cardiac conditions and treatment options.",
    },
    {
      title: "Facilities & Technology",
      description:
        "Show diagnostic equipment, technology and cardiac-care infrastructure.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display patient reviews and cardiac diagnostic-care experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions related to cardiac diagnostics and procedures.",
    },
    {
      title: "Heart Health Blog",
      description:
        "Publish heart-health, prevention and cardiac-awareness content.",
    },
    {
      title: "Appointment / Consultation",
      description:
        "Allow patients to request diagnostic appointments and specialist consultations.",
    },
    {
      title: "Contact & Centre Location",
      description:
        "Phone, WhatsApp, email, address and Google Maps navigation.",
    },
  ],

  customAddons: [
    {
      id: "advanced-diagnostic-ai-chatbot",
      icon: "🤖",
      name: "AI Cardiac Care Assistant",
      description:
        "Answer common questions about diagnostics, procedures, cardiologists, timings, location and general enquiries.",
      price: "Add-On",
    },
    {
      id: "advanced-diagnostic-crm",
      icon: "📊",
      name: "Advanced Patient Enquiry CRM",
      description:
        "Connect diagnostic and consultation enquiries with CRM workflows for lead tracking and follow-up management.",
      price: "Add-On",
    },
    {
      id: "advanced-diagnostic-cost-calculator",
      icon: "🧮",
      name: "Cardiac Service Cost Calculator",
      description:
        "Provide estimated costs based on selected cardiac diagnostic or related services.",
      price: "Add-On",
    },
    {
      id: "advanced-diagnostic-booking",
      icon: "💳",
      name: "Online Appointment Booking + Payment",
      description:
        "Allow patients to select a cardiologist or service, choose a date and time, enter patient details and complete payment online.",
      price: "Add-On",
    },
    {
      id: "advanced-diagnostic-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "advanced-diagnostic-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Diagnostic Center Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Diagnostic Tests",
      value: "Included",
      badge: "included",
    },
    {
      label: "Health Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Test Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "Diagnostic Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "medtour-global": createProductDetail({
//   slug: "medtour-global",
//   name: "MedTour Global",
//   category: "Medical Tourism Website",
//   tagline:
//     "A professional medical tourism website connecting international patients with hospitals, doctors and treatment services in India.",
//   rating: "4.9",
//   reviewCount: 52,
//   purchases: 134,
//   currentPrice: "₹19,999",
//   oldPrice: "₹52,999",
//   discount: "62% OFF",
//   priceRange: "Up to 40 pages",
//   mainImage: "/images/templates.jpg",
// }),

"medtour-global": createProductDetail({
  slug: "medtour-global",

  name: "MedTour Global",

  category: "Medical Tourism Website",

  tagline:
    "A premium Medical Tourism Website connecting international patients with partner hospitals, specialist doctors, treatment packages, destinations and coordinated healthcare travel services.",

  rating: "4.9",
  reviewCount: 52,
  purchases: 134,

  currentPrice: "₹19,999",
  oldPrice: "₹52,999",
  discount: "62% OFF",
  priceRange: "Up to 40 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌍",
      title: "Global Medical Tourism Design",
      description:
        "Premium and trustworthy website presentation for medical tourism companies, international patient facilitators and healthcare travel businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Partner Hospital Profiles",
      description:
        "Showcase partner hospitals with facilities, specialties, doctors, locations and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor & Specialist Profiles",
      description:
        "Present partner doctors and specialists with qualifications, specialization, experience and professional details.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Medical Treatments Showcase",
      description:
        "Clearly present available medical treatments, procedures and specialties for international patients.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Detailed Treatment Information",
      description:
        "Explain treatment processes, facilities, recovery information and other important treatment details.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📦",
      title: "Treatment Packages",
      description:
        "Professionally showcase available medical treatment packages.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🤝",
      title: "International Patient Services",
      description:
        "Present assistance, coordination and patient-support services available for international patients.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛂",
      title: "Medical Visa Assistance",
      description:
        "Show medical visa assistance and related service information where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✈️",
      title: "Travel & Accommodation Support",
      description:
        "Present airport transfer, accommodation and travel-support information where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📍",
      title: "Medical Destination Information",
      description:
        "Show destination, city, hospital location and relevant travel information for medical travellers.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "⭐",
      title: "International Patient Testimonials",
      description:
        "Display international patient experiences, reviews and success stories.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📝",
      title: "Treatment Enquiry",
      description:
        "Allow international patients to submit treatment and consultation enquiries online.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Contact",
      description:
        "Allow international patients to communicate directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🗺️",
      title: "Hospital & Treatment Locations",
      description:
        "Integrate Google Maps for office, hospital and treatment-location navigation.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🌐",
      title: "Multi-Language Ready",
      description:
        "Prepare the website structure for serving international audiences in multiple languages.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Medical Tourism Blog",
      description:
        "Publish treatment guides, healthcare destinations and international patient information.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Global Home Page",
      description:
        "Company introduction, treatments, partner hospitals, doctors, destinations, patient services and enquiry CTA.",
    },
    {
      title: "About Medical Tourism Company",
      description:
        "Present company experience, healthcare network, patient assistance and medical tourism services.",
    },
    {
      title: "Treatments / Medical Services",
      description:
        "Complete overview of available treatments and medical specialties.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information for individual treatments and procedures.",
    },
    {
      title: "Partner Hospitals",
      description:
        "Showcase hospitals and healthcare facilities available to international patients.",
    },
    {
      title: "Hospital Details",
      description:
        "Present hospital facilities, specialties, doctors and location information.",
    },
    {
      title: "Doctors / Specialists",
      description:
        "Show partner doctor and specialist professional profiles.",
    },
    {
      title: "Treatment Packages",
      description:
        "Present available medical treatment packages.",
    },
    {
      title: "International Patient Services",
      description:
        "Show assistance and coordination services for international patients.",
    },
    {
      title: "Medical Visa Assistance",
      description:
        "Provide medical visa support information where applicable.",
    },
    {
      title: "Travel & Accommodation",
      description:
        "Present airport transfer, accommodation and travel-support information where applicable.",
    },
    {
      title: "Destination Pages",
      description:
        "Dedicated information about medical destinations, cities and treatment locations.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display international patient experiences and success stories.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about treatment, travel, accommodation, visa and patient support.",
    },
    {
      title: "Medical Tourism Blog",
      description:
        "Publish treatment, destination and international healthcare information.",
    },
    {
      title: "Treatment Enquiry / Consultation",
      description:
        "Allow patients to submit treatment and consultation enquiries.",
    },
    {
      title: "Contact & Locations",
      description:
        "Phone, WhatsApp, email and Google Maps information for relevant locations.",
    },
  ],

  customAddons: [
    {
      id: "medtour-global-ai-chatbot",
      icon: "🤖",
      name: "AI International Patient Assistant",
      description:
        "Answer questions about treatments, hospitals, doctors, packages, travel, visa, accommodation and general enquiries.",
      price: "Add-On",
    },
    {
      id: "medtour-global-crm",
      icon: "📊",
      name: "International Patient CRM",
      description:
        "Connect patient enquiries with CRM workflows for lead management and international patient follow-ups.",
      price: "Add-On",
    },
    {
      id: "medtour-global-cost-calculator",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected medical treatments or procedures.",
      price: "Add-On",
    },
    {
      id: "medtour-global-booking",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a hospital, doctor or treatment, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "medtour-global-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "medtour-global-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Medical Tourism Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Network",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Medical Tourism Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "india-medical-journey": createProductDetail({
//   slug: "india-medical-journey",
//   name: "India Medical Journey",
//   category: "Medical Tourism Website",
//   tagline:
//     "A medical travel website for international patients requiring hospital discovery, treatment enquiries, visa assistance and travel support.",
//   rating: "4.8",
//   reviewCount: 38,
//   purchases: 97,
//   currentPrice: "₹21,999",
//   oldPrice: "₹59,499",
//   discount: "63% OFF",
//   priceRange: "Up to 40 pages",
//   mainImage: "/images/templates.jpg",
// }),

"india-medical-journey": createProductDetail({
  slug: "india-medical-journey",

  name: "India Medical Journey",

  category: "Medical Tourism Website",

  tagline:
    "A Medical Tourism Website built around the complete India treatment journey, helping international patients discover hospitals, explore treatments, request consultations and understand visa, destination, travel and accommodation support.",

  rating: "4.8",
  reviewCount: 46,
  purchases: 119,

  currentPrice: "₹17,999",
  oldPrice: "₹44,999",
  discount: "60% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🇮🇳",
      title: "India Medical Journey Design",
      description:
        "Professional medical tourism website presentation focused on helping international patients plan treatment journeys in India.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Hospital Discovery",
      description:
        "Showcase partner hospitals, healthcare facilities, specialties, doctors and treatment locations.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor & Specialist Profiles",
      description:
        "Present partner doctors and specialists with qualifications, specialization and experience.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Treatment Discovery",
      description:
        "Help international patients explore available medical treatments, procedures and specialties.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Treatment Journey Information",
      description:
        "Explain treatment processes, facilities, recovery information and important treatment details.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📦",
      title: "Treatment Packages",
      description:
        "Present available treatment packages in a clear and structured format.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🤝",
      title: "International Patient Coordination",
      description:
        "Show assistance and coordination services available throughout the patient's medical journey.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🛂",
      title: "Medical Visa Assistance",
      description:
        "Present medical visa assistance and related service information where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✈️",
      title: "Airport & Travel Support",
      description:
        "Present airport transfer and other travel-support information where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🏨",
      title: "Accommodation Information",
      description:
        "Provide accommodation-support information for international patients and attendants where applicable.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📍",
      title: "India Destination Pages",
      description:
        "Create destination pages covering medical cities, hospital locations and relevant travel information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "International Patient Stories",
      description:
        "Display international patient reviews, experiences and success stories.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📝",
      title: "Treatment & Consultation Enquiry",
      description:
        "Allow international patients to submit treatment and consultation requests online.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Assistance",
      description:
        "Provide a direct WhatsApp communication option for international patient enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🌐",
      title: "Multi-Language Ready",
      description:
        "Prepare the website structure for serving patients from different countries and language groups.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "India Medical Travel Blog",
      description:
        "Publish treatment guides, healthcare destinations and international patient information.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Medical Journey Home Page",
      description:
        "India treatment introduction, hospitals, doctors, destinations, patient services and enquiry CTA.",
    },
    {
      title: "About Medical Travel Service",
      description:
        "Present company experience, healthcare network, patient assistance and coordination services.",
    },
    {
      title: "Treatments",
      description:
        "Overview of available medical treatments, procedures and specialties.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated information about treatment processes, facilities and recovery.",
    },
    {
      title: "Hospitals in India",
      description:
        "Show partner hospitals and healthcare facilities.",
    },
    {
      title: "Hospital Details",
      description:
        "Present facilities, specialties, doctors and hospital location information.",
    },
    {
      title: "Doctors / Specialists",
      description:
        "Show professional profiles of partner doctors and specialists.",
    },
    {
      title: "Treatment Packages",
      description:
        "Present available treatment packages for international patients.",
    },
    {
      title: "International Patient Services",
      description:
        "Show treatment coordination and international patient assistance services.",
    },
    {
      title: "Medical Visa Assistance",
      description:
        "Provide medical visa support information where applicable.",
    },
    {
      title: "Travel Support",
      description:
        "Present airport-transfer and travel-support information where applicable.",
    },
    {
      title: "Accommodation",
      description:
        "Provide accommodation-support information where applicable.",
    },
    {
      title: "India Destination Pages",
      description:
        "Present medical destinations, cities and hospital-location information.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display international patient reviews and treatment experiences.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer questions about treatments, travel, visa, accommodation and patient support.",
    },
    {
      title: "Medical Tourism Blog",
      description:
        "Publish healthcare, treatment and India medical-travel information.",
    },
    {
      title: "Treatment Enquiry / Consultation",
      description:
        "Allow international patients to submit treatment and consultation requests.",
    },
    {
      title: "Contact & Locations",
      description:
        "Phone, WhatsApp, email and relevant hospital or office locations.",
    },
  ],

  customAddons: [
    {
      id: "india-medical-journey-ai",
      icon: "🤖",
      name: "AI Medical Journey Assistant",
      description:
        "Answer questions about treatments, hospitals, doctors, packages, destinations, visa, travel and accommodation.",
      price: "Add-On",
    },
    {
      id: "india-medical-journey-crm",
      icon: "📊",
      name: "International Patient CRM",
      description:
        "Manage treatment enquiries, international patient leads and follow-up coordination.",
      price: "Add-On",
    },
    {
      id: "india-medical-journey-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated treatment costs based on selected procedures or services.",
      price: "Add-On",
    },
    {
      id: "india-medical-journey-booking",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a hospital, doctor or treatment, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "india-medical-journey-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "india-medical-journey-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Medical Tourism Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Network",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Medical Tourism Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "global-health-travel": createProductDetail({
//   slug: "global-health-travel",
//   name: "Global Health Travel",
//   category: "Medical Tourism Website",
//   tagline:
//     "A premium international healthcare platform for treatment packages, partner hospitals, medical visas and patient travel coordination.",
//   rating: "4.9",
//   reviewCount: 49,
//   purchases: 126,
//   currentPrice: "₹24,999",
//   oldPrice: "₹71,499",
//   discount: "65% OFF",
//   priceRange: "Up to 45 pages",
//   mainImage: "/images/templates.jpg",
// }),

"global-health-travel": createProductDetail({
  slug: "global-health-travel",

  name: "Global Health Travel",

  category: "Medical Tourism Website",

  tagline:
    "A premium international healthcare platform for medical tourism businesses managing treatment packages, partner hospitals, specialist doctors, global destinations, visas and patient travel coordination.",

  rating: "4.9",
  reviewCount: 49,
  purchases: 126,

  currentPrice: "₹24,999",
  oldPrice: "₹71,499",
  discount: "65% OFF",
  priceRange: "Up to 45 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🌍",
      title: "International Healthcare Platform",
      description:
        "Premium website presentation for medical tourism companies, international healthcare facilitators and global patient-service providers.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Partner Hospital Network",
      description:
        "Showcase partner hospitals with facilities, specialties, doctors, locations and professional information.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Global Specialist Profiles",
      description:
        "Present partner doctors and specialists with qualifications, specialization, experience and professional details.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Treatment & Specialty Directory",
      description:
        "Organize available treatments, medical procedures and specialties for international patients.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📦",
      title: "Treatment Packages",
      description:
        "Professionally showcase medical treatment packages for different procedures and patient requirements.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🤝",
      title: "International Patient Coordination",
      description:
        "Present patient assistance, treatment coordination and support services throughout the medical journey.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛂",
      title: "Medical Visa Assistance",
      description:
        "Present medical visa assistance and related service information where applicable.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "✈️",
      title: "Travel Coordination",
      description:
        "Present airport transfer and travel-support information where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏨",
      title: "Accommodation Support",
      description:
        "Provide accommodation-support information for patients and attendants where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🗺️",
      title: "Global Destination Pages",
      description:
        "Create destination pages for different cities, countries, hospital locations and medical travel options.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🌐",
      title: "Multi-Language Ready",
      description:
        "Prepare the website structure for serving international audiences in multiple languages.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "International Patient Stories",
      description:
        "Display international patient reviews, treatment experiences and success stories.",
      iconBackground: "#edfae8",
    },
    {
      icon: "📝",
      title: "Global Treatment Enquiries",
      description:
        "Allow international patients to submit treatment and consultation enquiries online.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Support",
      description:
        "Provide direct WhatsApp communication for international patient enquiries.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🔍",
      title: "Medical Tourism SEO",
      description:
        "SEO-friendly structure for treatments, hospitals, doctors, destinations and medical-tourism searches.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Global Medical Tourism Blog",
      description:
        "Publish treatment guides, healthcare destination information and international patient content.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Global Home Page",
      description:
        "International healthcare introduction, treatments, hospitals, specialists, destinations and enquiry CTA.",
    },
    {
      title: "About Global Health Travel",
      description:
        "Present company experience, healthcare network, international patient assistance and coordination services.",
    },
    {
      title: "Treatments & Specialties",
      description:
        "Complete overview of available medical treatments, procedures and specialties.",
    },
    {
      title: "Treatment Details",
      description:
        "Dedicated treatment information covering process, facilities and recovery information.",
    },
    {
      title: "Partner Hospitals",
      description:
        "Showcase partner hospitals and healthcare facilities.",
    },
    {
      title: "Hospital Details",
      description:
        "Present hospital facilities, specialties, doctors and location information.",
    },
    {
      title: "Doctors / Specialists",
      description:
        "Professional profiles for partner doctors and specialists.",
    },
    {
      title: "Treatment Packages",
      description:
        "Present available medical treatment packages.",
    },
    {
      title: "International Patient Services",
      description:
        "Show assistance, coordination and support services for international patients.",
    },
    {
      title: "Medical Visa Assistance",
      description:
        "Provide medical visa support information where applicable.",
    },
    {
      title: "Travel & Accommodation",
      description:
        "Present airport transfer, accommodation and travel-support information where applicable.",
    },
    {
      title: "Global Destination Pages",
      description:
        "Dedicated pages for medical destinations, cities, countries and hospital locations.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display international patient reviews, experiences and success stories.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about treatment, travel, visa, accommodation and patient support.",
    },
    {
      title: "Medical Tourism Blog",
      description:
        "Publish treatment, destination and international healthcare information.",
    },
    {
      title: "Treatment Enquiry / Consultation",
      description:
        "Allow international patients to submit treatment and consultation requests.",
    },
    {
      title: "Contact & Global Locations",
      description:
        "Phone, WhatsApp, email and relevant office, hospital or treatment-location information.",
    },
  ],

  customAddons: [
    {
      id: "global-health-ai",
      icon: "🤖",
      name: "AI International Patient Assistant",
      description:
        "Answer questions about treatments, hospitals, doctors, packages, destinations, visa, travel and accommodation.",
      price: "Add-On",
    },
    {
      id: "global-health-crm",
      icon: "📊",
      name: "Global Patient CRM",
      description:
        "Manage international treatment enquiries, patient leads and follow-up coordination.",
      price: "Add-On",
    },
    {
      id: "global-health-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated costs based on selected medical treatments or procedures.",
      price: "Add-On",
    },
    {
      id: "global-health-booking",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a hospital, doctor or treatment, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "global-health-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "global-health-hosting",
      icon: "☁️",
      name: "Hosting & Deployment",
      description:
        "Website hosting, configuration and production deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Medical Tourism Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Network",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Medical Tourism Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "medassist-india": createProductDetail({
//   slug: "medassist-india",
//   name: "MedAssist India",
//   category: "Medical Tourism Website",
//   tagline:
//     "A healthcare assistance website for overseas patients seeking treatment planning, hospitals, medical visa support and patient coordination.",
//   rating: "4.8",
//   reviewCount: 34,
//   purchases: 89,
//   currentPrice: "₹18,999",
//   oldPrice: "₹48,999",
//   discount: "61% OFF",
//   priceRange: "Up to 35 pages",
//   mainImage: "/images/templates.jpg",
// }),
"medassist-india": createProductDetail({
  slug: "medassist-india",

  name: "MedAssist India",

  category: "Medical Tourism Website",

  tagline:
    "A patient-assistance Medical Tourism Website for overseas patients seeking treatment planning, hospital and specialist coordination, medical visa support, travel guidance and end-to-end healthcare assistance in India.",

  rating: "4.8",
  reviewCount: 34,
  purchases: 89,

  currentPrice: "₹18,999",
  oldPrice: "₹48,999",
  discount: "61% OFF",
  priceRange: "Up to 35 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🤝",
      title: "International Patient Assistance",
      description:
        "Present assistance and coordination services designed for overseas patients seeking medical treatment in India.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "🏥",
      title: "Hospital Coordination",
      description:
        "Showcase partner hospitals, facilities, specialties and treatment locations for patient planning.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor & Specialist Coordination",
      description:
        "Present specialist profiles with qualifications, experience and areas of medical expertise.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🩺",
      title: "Treatment Planning",
      description:
        "Help patients understand available treatments, procedures, specialties and treatment options.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Treatment Information",
      description:
        "Provide structured information about treatment processes, facilities, recovery and related details.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "📦",
      title: "Treatment Packages",
      description:
        "Present available medical treatment packages in a clear and professional format.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛂",
      title: "Medical Visa Guidance",
      description:
        "Provide medical visa assistance information where applicable.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "✈️",
      title: "Travel Assistance",
      description:
        "Present airport-transfer and travel-support information where applicable.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🏨",
      title: "Accommodation Assistance",
      description:
        "Provide accommodation-support information for patients and attendants where applicable.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📍",
      title: "Treatment Destination Guidance",
      description:
        "Present medical destinations, cities, hospital locations and relevant travel information.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📝",
      title: "Treatment Enquiry Support",
      description:
        "Allow overseas patients to submit treatment and consultation enquiries online.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⭐",
      title: "International Patient Testimonials",
      description:
        "Display overseas patient reviews, experiences and treatment journeys.",
      iconBackground: "#edfae8",
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Support",
      description:
        "Allow international patients to communicate directly through WhatsApp.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❓",
      title: "Patient Support FAQ",
      description:
        "Answer common questions about treatment, visa, travel, accommodation and coordination.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🌐",
      title: "Multi-Language Ready",
      description:
        "Prepare the website structure for serving international patients from different language groups.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "📰",
      title: "Patient Guidance Blog",
      description:
        "Publish treatment guides, destination information and international patient-support content.",
      iconBackground: "#f3e8ff",
    },
  ],

  customPackageIncludes: [
    {
      title: "Patient Assistance Home Page",
      description:
        "Patient-support introduction, treatments, hospitals, doctors, destinations and enquiry CTA.",
    },
    {
      title: "About MedAssist",
      description:
        "Present healthcare network, international patient assistance and coordination services.",
    },
    {
      title: "Treatment Planning",
      description:
        "Overview of available treatments, procedures and medical specialties.",
    },
    {
      title: "Treatment Details",
      description:
        "Detailed information about treatment processes, facilities and recovery.",
    },
    {
      title: "Partner Hospitals",
      description:
        "Show hospitals and healthcare facilities available to overseas patients.",
    },
    {
      title: "Hospital Details",
      description:
        "Present hospital facilities, specialties, doctors and location information.",
    },
    {
      title: "Doctors / Specialists",
      description:
        "Show professional profiles of partner doctors and specialists.",
    },
    {
      title: "Treatment Packages",
      description:
        "Present available medical treatment packages.",
    },
    {
      title: "International Patient Services",
      description:
        "Show assistance and coordination services throughout the treatment journey.",
    },
    {
      title: "Medical Visa Assistance",
      description:
        "Provide medical visa support information where applicable.",
    },
    {
      title: "Travel Assistance",
      description:
        "Present airport-transfer and travel-support information where applicable.",
    },
    {
      title: "Accommodation Assistance",
      description:
        "Provide accommodation-support information where applicable.",
    },
    {
      title: "Destination Information",
      description:
        "Present medical cities, hospital locations and relevant travel information.",
    },
    {
      title: "Patient Testimonials",
      description:
        "Display international patient experiences and treatment journeys.",
    },
    {
      title: "FAQ Section",
      description:
        "Answer common questions about treatment, visa, travel, accommodation and patient support.",
    },
    {
      title: "Medical Tourism Blog",
      description:
        "Publish treatment, destination and patient-guidance information.",
    },
    {
      title: "Treatment Enquiry / Consultation",
      description:
        "Allow overseas patients to submit treatment and consultation requests.",
    },
    {
      title: "Contact & Assistance",
      description:
        "Phone, WhatsApp, email and relevant office or treatment-location information.",
    },
  ],

  customAddons: [
    {
      id: "medassist-ai",
      icon: "🤖",
      name: "AI Patient Assistance Bot",
      description:
        "Answer questions about treatments, hospitals, doctors, packages, visa, travel, accommodation and general patient support.",
      price: "Add-On",
    },
    {
      id: "medassist-crm",
      icon: "📊",
      name: "International Patient CRM",
      description:
        "Manage overseas patient enquiries, treatment leads and follow-up coordination.",
      price: "Add-On",
    },
    {
      id: "medassist-cost",
      icon: "🧮",
      name: "Treatment Cost Calculator",
      description:
        "Provide estimated treatment costs based on selected procedures or services.",
      price: "Add-On",
    },
    {
      id: "medassist-booking",
      icon: "💳",
      name: "Online Consultation Booking + Payment",
      description:
        "Allow patients to select a hospital, doctor or treatment, choose a date and time and complete payment online.",
      price: "Add-On",
    },
    {
      id: "medassist-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "medassist-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting, configuration and deployment.",
      price: "Add-On",
    },
  ],

    customSpecifications: [
    {
      label: "Website Type",
      value: "Medical Tourism Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Hospital Network",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Packages",
      value: "Included",
      badge: "included",
    },
    {
      label: "Treatment Information",
      value: "Included",
      badge: "included",
    },
    {
      label: "Medical Tourism Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],
}),

// "techzone-electronics": createProductDetail({
//   slug: "techzone-electronics",

//   name: "TechZone Electronics",

//   category: "Electronics Store",

//   tagline:
//     "A modern electronics e-commerce website for selling smartphones, laptops, accessories, gadgets and consumer electronics with a professional online shopping experience.",

//   rating: "4.8",
//   reviewCount: 42,
//   purchases: 86,

//   currentPrice: "₹14,999",
//   oldPrice: "₹37,499",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",

//   mainImage: "/images/templates.jpg",
// }),

"techzone-electronics": createProductDetail({
  slug: "techzone-electronics",

  name: "TechZone Electronics",

  category: "Electronics Store",

  tagline:
    "A modern multi-product electronics e-commerce website for selling smartphones, laptops, accessories, gadgets and consumer electronics with product search, shopping cart, checkout, online payments and customer account features.",

  rating: "4.8",
  reviewCount: 42,
  purchases: 86,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional E-Commerce Design",
      description:
        "Modern, attractive and conversion-focused online store designed to present electronics products professionally.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description:
        "Show smartphones, laptops, accessories, gadgets and other electronics in a professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description:
        "Organize electronics products into categories and sub-categories for easier browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description:
        "Allow customers to search and filter products by name, category, price range, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📱",
      title: "Detailed Product Pages",
      description:
        "Display product images, pricing, sale price, descriptions, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description:
        "Manage applicable options such as model, colour, storage, configuration and other product variations.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description:
        "Allow customers to add multiple products to their cart and manage product quantities.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description:
        "Customers can save favourite electronics products to their wishlist for later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description:
        "Checkout flow for customer information, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description:
        "Allow customers to complete payments through an integrated online payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description:
        "Manage orders, order status, customer details and relevant order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description:
        "Customers can register, log in and manage their profile, saved information and order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupon & Discount",
      description:
        "Manage promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description:
        "Allow customers to rate products and share their shopping experience.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description:
        "Display shipping charges, delivery areas, delivery timelines and applicable policies.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Allow customers to directly contact the store for product and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔍",
      title: "SEO-Friendly Structure",
      description:
        "SEO-ready structure for electronics products, categories, brands and relevant search queries.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description:
        "Optimized storefront for fast performance and a smooth shopping experience across mobile, tablet and desktop.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description:
        "Complete electronics product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description:
        "Organize products using category and sub-category structures.",
    },
    {
      title: "Product Detail Page",
      description:
        "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description:
        "Help customers quickly find products using relevant search and filter options.",
    },
    {
      title: "Shopping Cart",
      description:
        "Manage selected products, quantities and cart totals.",
    },
    {
      title: "Wishlist",
      description:
        "Allow customers to save favourite products.",
    },
    {
      title: "Checkout",
      description:
        "Customer information, shipping details and checkout process.",
    },
    {
      title: "Online Payment",
      description:
        "Payment gateway integration for online transactions.",
    },
    {
      title: "Customer Account",
      description:
        "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description:
        "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description:
        "Display coupon codes, promotional offers and special deals.",
    },
    {
      title: "Product Reviews",
      description:
        "Display customer ratings and reviews for products.",
    },
    {
      title: "About Us",
      description:
        "Business introduction, company experience and brand information.",
    },
    {
      title: "Contact Us",
      description:
        "Phone, WhatsApp, email and other contact information.",
    },
    {
      title: "Shipping Information",
      description:
        "Shipping charges, delivery timelines and delivery-related information.",
    },
    {
      title: "Return / Refund Information",
      description:
        "Applicable return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description:
        "Website privacy information.",
    },
    {
      title: "Terms & Conditions",
      description:
        "Applicable terms and conditions for the e-commerce website.",
    },
    {
      title: "FAQ Section",
      description:
        "Common questions regarding products, payment, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description:
        "Product guides, buying guides, offers and helpful electronics-related content.",
    },
  ],

  customAddons: [
    {
      id: "techzone-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description:
        "Provide instant responses for product information, recommendations, order queries, shipping, returns and general enquiries.",
      price: "Add-On",
    },
    {
      id: "techzone-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect customer enquiries, leads and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "techzone-product-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description:
        "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "techzone-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description:
        "Support complex order workflows, custom order statuses and advanced order processing.",
      price: "Add-On",
    },
    {
      id: "techzone-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "techzone-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting purchase, setup, configuration and deployment.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Number of Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
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
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },

    // Portfolio & Content — keep only these 4 items in this group.
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
      value: "Included",
      badge: "included",
    },
  ],

  customReviews: [
    {
      id: "techzone-review-1",
      name: "Rohit Sharma",
      initials: "RS",
      location: "Delhi",
      role: "Electronics Store Owner",
      rating: 5,
      text:
        "The product catalogue, search filters and checkout flow make it easy for customers to browse and purchase electronics online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "techzone-review-2",
      name: "Amit Verma",
      initials: "AV",
      location: "Noida",
      role: "Online Retail Business Owner",
      rating: 5,
      text:
        "The store works smoothly across mobile and desktop, and the customer account and order features give it a complete e-commerce experience.",
      avatarBackground: "#12855a",
    },
    {
      id: "techzone-review-3",
      name: "Neha Kapoor",
      initials: "NK",
      location: "Gurugram",
      role: "E-Commerce Manager",
      rating: 4,
      text:
        "The category structure, wishlist, product details and payment flow are organized well for a multi-product electronics store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),


// "digital-hub-store": createProductDetail({
//   slug: "digital-hub-store",

//   name: "Digital Hub Store",

//   category: "Electronics Store",

//   tagline:
//     "A professional electronics e-commerce website for selling smartphones, laptops, accessories, smart devices and digital products through a clean online storefront.",

//   rating: "4.7",
//   reviewCount: 38,
//   purchases: 74,

//   currentPrice: "₹14,999",
//   oldPrice: "₹37,499",
//   discount: "60% OFF",
//   priceRange: "Up to 30 pages",

//   mainImage: "/images/templates.jpg",
// }),

"digital-hub-store": createProductDetail({
  slug: "digital-hub-store",

  name: "Digital Hub Store",

  category: "Electronics Store",

  tagline:
    "A professional electronics e-commerce website for selling smartphones, laptops, accessories, smart devices and digital products through a clean online storefront with product search, cart, checkout, online payments and customer account features.",

  rating: "4.7",
  reviewCount: 38,
  purchases: 74,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Electronics Store Design",
      description:
        "Modern and conversion-focused online storefront designed specifically for electronics, gadgets and digital-product businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description:
        "Show smartphones, laptops, accessories, smart devices and other electronics in structured product listings.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description:
        "Organize electronics into categories and sub-categories for simple and faster browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description:
        "Allow customers to search and filter products by category, brand, price, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📱",
      title: "Detailed Product Pages",
      description:
        "Present product images, descriptions, price, sale price, specifications, availability, variations, ratings and purchase actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description:
        "Support applicable choices such as colour, model, storage, configuration and other electronics variations.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description:
        "Customers can add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description:
        "Allow customers to save preferred electronics products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description:
        "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description:
        "Integrate an online payment gateway so customers can complete purchases directly through the website.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description:
        "Manage customer orders, order status and important order-related information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description:
        "Customers can register, sign in, manage profile information and access their order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description:
        "Create promotional offers, discount codes, coupons and special shopping deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description:
        "Allow customers to review products and display ratings to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description:
        "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "Customers can directly contact the electronics store for product, delivery and order enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description:
        "SEO-ready structure for electronics products, categories, brands and relevant product searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description:
        "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description:
        "Featured electronics, categories, offers, best sellers, new arrivals and promotional shopping sections.",
    },
    {
      title: "Shop / Products",
      description:
        "Complete electronics catalogue with structured product listings.",
    },
    {
      title: "Product Categories",
      description:
        "Organize smartphones, laptops, accessories, smart devices and other products into categories.",
    },
    {
      title: "Product Detail Page",
      description:
        "Product images, name, price, sale price, description, specifications, variations, availability, reviews and buying actions.",
    },
    {
      title: "Search & Filter",
      description:
        "Help customers find electronics through search and relevant filtering options.",
    },
    {
      title: "Shopping Cart",
      description:
        "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description:
        "Allow customers to save products for future purchase.",
    },
    {
      title: "Checkout",
      description:
        "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description:
        "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description:
        "Registration, login, customer profile and saved account information.",
    },
    {
      title: "My Orders",
      description:
        "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description:
        "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description:
        "Show customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description:
        "Present the electronics business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description:
        "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description:
        "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description:
        "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description:
        "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description:
        "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description:
        "Common questions about electronics, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description:
        "Buying guides, product comparisons, electronics information and useful shopping content.",
    },
  ],

  customAddons: [
    {
      id: "digital-hub-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description:
        "Help customers with product information, recommendations, order queries, shipping and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "digital-hub-crm",
      icon: "📊",
      name: "CRM Integration",
      description:
        "Connect enquiries and customer data with CRM workflows for lead management and follow-up.",
      price: "Add-On",
    },
    {
      id: "digital-hub-product-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description:
        "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "digital-hub-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description:
        "Support custom order statuses, complex workflows and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "digital-hub-domain",
      icon: "🌐",
      name: "Domain Registration",
      description:
        "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "digital-hub-hosting",
      icon: "☁️",
      name: "Hosting",
      description:
        "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },

    // Design & Performance
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },

    // Portfolio & Content — only 4 items
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
      value: "Included",
      badge: "included",
    },

    // Lead & Contact Tools
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

    // Domain, Hosting & Delivery
    {
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },

    // Optional Upgrades & Support
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "digital-hub-review-1",
      name: "Karan Malhotra",
      initials: "KM",
      location: "Delhi",
      role: "Electronics Retailer",
      rating: 5,
      text:
        "The catalogue and product-detail structure make it easy for customers to compare electronics and complete purchases online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "digital-hub-review-2",
      name: "Pooja Arora",
      initials: "PA",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text:
        "The mobile storefront, checkout flow and customer account features give the store a complete professional shopping experience.",
      avatarBackground: "#12855a",
    },
    {
      id: "digital-hub-review-3",
      name: "Vikas Mehta",
      initials: "VM",
      location: "Gurugram",
      role: "Electronics Business Owner",
      rating: 4,
      text:
        "Product categories, search, wishlist and order-related features are organized clearly and work well for an electronics catalogue.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"smartcart-electronics": createProductDetail({
  slug: "smartcart-electronics",

  name: "SmartCart Electronics",

  category: "Electronics Store",

  tagline:
    "A modern electronics shopping website for smartphones, laptops, gadgets, accessories and smart devices with a clean product-focused e-commerce layout.",

  rating: "4.8",
  reviewCount: 35,
  purchases: 69,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Electronics Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for electronics businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show smartphones, laptops, accessories, gadgets and smart devices in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as mobiles, laptops, accessories, gadgets and smart devices for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage model, colour, storage, configuration and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for electronics products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete electronics product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into mobiles, laptops, accessories, gadgets and smart devices and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Buying guides, product comparisons, technology updates and electronics tips.",
    },
  ],

  customAddons: [
    {
      id: "smartcart-electronics-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "smartcart-electronics-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "smartcart-electronics-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "smartcart-electronics-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "smartcart-electronics-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "smartcart-electronics-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "smartcart-electronics-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Electronics Store Owner",
      rating: 5,
      text: "SmartCart Electronics gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "smartcart-electronics-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "smartcart-electronics-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"gadget-point-store": createProductDetail({
  slug: "gadget-point-store",

  name: "Gadget Point Store",

  category: "Electronics Store",

  tagline:
    "A modern gadget and electronics e-commerce website for selling smartphones, accessories, wearables, smart devices and everyday tech products through a clean online storefront.",

  rating: "4.7",
  reviewCount: 33,
  purchases: 62,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Electronics Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for electronics businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show smartphones, laptops, accessories, gadgets and smart devices in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as mobiles, laptops, accessories, gadgets and smart devices for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage model, colour, storage, configuration and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for electronics products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete electronics product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into mobiles, laptops, accessories, gadgets and smart devices and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Buying guides, product comparisons, technology updates and electronics tips.",
    },
  ],

  customAddons: [
    {
      id: "gadget-point-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "gadget-point-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "gadget-point-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "gadget-point-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "gadget-point-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "gadget-point-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "gadget-point-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Electronics Store Owner",
      rating: 5,
      text: "Gadget Point Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "gadget-point-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "gadget-point-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"daily-mart-store": createProductDetail({
  slug: "daily-mart-store",

  name: "Daily Mart Store",

  category: "Groceries Store",

  tagline:
    "A convenient grocery and daily-needs e-commerce website for selling food items, household essentials, beverages and everyday products through an easy online shopping experience.",

  rating: "4.7",
  reviewCount: 37,
  purchases: 72,

  currentPrice: "₹12,999",
  oldPrice: "₹32,499",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Groceries Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for grocery and daily essentials businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show groceries, fresh produce, packaged foods, beverages and daily essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as fruits & vegetables, groceries, beverages, snacks, household items and daily essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage pack size, weight, quantity, brand and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for grocery and daily essentials products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete grocery and daily essentials product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into fruits & vegetables, groceries, beverages, snacks, household items and daily essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Food guides, grocery tips, offers, recipes and everyday shopping content.",
    },
  ],

  customAddons: [
    {
      id: "daily-mart-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "daily-mart-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "daily-mart-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "daily-mart-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "daily-mart-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "daily-mart-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "daily-mart-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Grocery Store Owner",
      rating: 5,
      text: "Daily Mart Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "daily-mart-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "daily-mart-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"freshbasket-grocery": createProductDetail({
  slug: "freshbasket-grocery",

  name: "FreshBasket Grocery",

  category: "Groceries Store",

  tagline:
    "A modern grocery e-commerce website for selling fresh produce, packaged foods, beverages and daily essentials through a simple and convenient online shopping experience.",

  rating: "4.8",
  reviewCount: 41,
  purchases: 81,

  currentPrice: "₹12,999",
  oldPrice: "₹32,499",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Groceries Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for grocery and daily essentials businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show groceries, fresh produce, packaged foods, beverages and daily essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as fruits & vegetables, groceries, beverages, snacks, household items and daily essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage pack size, weight, quantity, brand and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for grocery and daily essentials products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete grocery and daily essentials product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into fruits & vegetables, groceries, beverages, snacks, household items and daily essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Food guides, grocery tips, offers, recipes and everyday shopping content.",
    },
  ],

  customAddons: [
    {
      id: "freshbasket-grocery-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "freshbasket-grocery-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "freshbasket-grocery-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "freshbasket-grocery-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "freshbasket-grocery-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "freshbasket-grocery-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "freshbasket-grocery-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Grocery Store Owner",
      rating: 5,
      text: "FreshBasket Grocery gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "freshbasket-grocery-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "freshbasket-grocery-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"organic-basket": createProductDetail({
  slug: "organic-basket",

  name: "Organic Basket",

  category: "Groceries Store",

  tagline:
    "A clean grocery e-commerce website for selling organic food, fresh produce, healthy products and daily essentials with a simple and trustworthy online shopping experience.",

  rating: "4.8",
  reviewCount: 34,
  purchases: 67,

  currentPrice: "₹12,999",
  oldPrice: "₹32,499",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Groceries Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for grocery and daily essentials businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show groceries, fresh produce, packaged foods, beverages and daily essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as fruits & vegetables, groceries, beverages, snacks, household items and daily essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage pack size, weight, quantity, brand and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for grocery and daily essentials products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete grocery and daily essentials product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into fruits & vegetables, groceries, beverages, snacks, household items and daily essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Food guides, grocery tips, offers, recipes and everyday shopping content.",
    },
  ],

  customAddons: [
    {
      id: "organic-basket-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "organic-basket-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "organic-basket-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "organic-basket-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "organic-basket-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "organic-basket-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "organic-basket-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Grocery Store Owner",
      rating: 5,
      text: "Organic Basket gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "organic-basket-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "organic-basket-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"quick-grocery-store": createProductDetail({
  slug: "quick-grocery-store",

  name: "Quick Grocery Store",

  category: "Groceries Store",

  tagline:
    "A fast and user-friendly grocery e-commerce website for selling fresh food, packaged products, beverages and household essentials with a smooth online ordering experience.",

  rating: "4.7",
  reviewCount: 32,
  purchases: 63,

  currentPrice: "₹12,999",
  oldPrice: "₹32,499",
  discount: "60% OFF",
  priceRange: "Up to 25 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Groceries Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for grocery and daily essentials businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show groceries, fresh produce, packaged foods, beverages and daily essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as fruits & vegetables, groceries, beverages, snacks, household items and daily essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage pack size, weight, quantity, brand and other applicable options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for grocery and daily essentials products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete grocery and daily essentials product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into fruits & vegetables, groceries, beverages, snacks, household items and daily essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Food guides, grocery tips, offers, recipes and everyday shopping content.",
    },
  ],

  customAddons: [
    {
      id: "quick-grocery-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "quick-grocery-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "quick-grocery-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "quick-grocery-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "quick-grocery-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "quick-grocery-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "quick-grocery-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Grocery Store Owner",
      rating: 5,
      text: "Quick Grocery Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "quick-grocery-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "quick-grocery-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"urban-home-furniture": createProductDetail({
  slug: "urban-home-furniture",

  name: "Urban Home Furniture",

  category: "Home & Furniture Store",

  tagline:
    "A modern furniture e-commerce website for selling sofas, beds, tables, storage furniture, home décor and interior essentials through a clean online shopping experience.",

  rating: "4.8",
  reviewCount: 39,
  purchases: 76,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Home & Furniture Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for home and furniture businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show sofas, beds, tables, chairs, storage furniture, décor and home essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as living room, bedroom, dining, office furniture, décor and home essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, material, finish and other applicable furniture options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for home and furniture products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete home and furniture product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into living room, bedroom, dining, office furniture, décor and home essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Furniture buying guides, décor ideas, room inspiration and home styling content.",
    },
  ],

  customAddons: [
    {
      id: "urban-home-furniture-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "urban-home-furniture-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "urban-home-furniture-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "urban-home-furniture-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "urban-home-furniture-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "urban-home-furniture-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "urban-home-furniture-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Furniture Store Owner",
      rating: 5,
      text: "Urban Home Furniture gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "urban-home-furniture-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "urban-home-furniture-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"living-space-furniture": createProductDetail({
  slug: "living-space-furniture",

  name: "Living Space Furniture",

  category: "Home & Furniture Store",

  tagline:
    "A professional furniture e-commerce website for selling living-room furniture, bedroom furniture, dining sets, storage solutions and home décor products through a modern online storefront.",

  rating: "4.7",
  reviewCount: 36,
  purchases: 71,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Home & Furniture Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for home and furniture businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show sofas, beds, tables, chairs, storage furniture, décor and home essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as living room, bedroom, dining, office furniture, décor and home essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, material, finish and other applicable furniture options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for home and furniture products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete home and furniture product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into living room, bedroom, dining, office furniture, décor and home essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Furniture buying guides, décor ideas, room inspiration and home styling content.",
    },
  ],

  customAddons: [
    {
      id: "living-space-furniture-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "living-space-furniture-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "living-space-furniture-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "living-space-furniture-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "living-space-furniture-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "living-space-furniture-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "living-space-furniture-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Furniture Store Owner",
      rating: 5,
      text: "Living Space Furniture gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "living-space-furniture-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "living-space-furniture-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"comfort-home-store": createProductDetail({
  slug: "comfort-home-store",

  name: "Comfort Home Store",

  category: "Home & Furniture Store",

  tagline:
    "A clean furniture and home-living e-commerce website for selling sofas, beds, dining furniture, storage products and home essentials through a simple online shopping experience.",

  rating: "4.8",
  reviewCount: 34,
  purchases: 68,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Home & Furniture Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for home and furniture businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show sofas, beds, tables, chairs, storage furniture, décor and home essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as living room, bedroom, dining, office furniture, décor and home essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, material, finish and other applicable furniture options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for home and furniture products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete home and furniture product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into living room, bedroom, dining, office furniture, décor and home essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Furniture buying guides, décor ideas, room inspiration and home styling content.",
    },
  ],

  customAddons: [
    {
      id: "comfort-home-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "comfort-home-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "comfort-home-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "comfort-home-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "comfort-home-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "comfort-home-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "comfort-home-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Furniture Store Owner",
      rating: 5,
      text: "Comfort Home Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "comfort-home-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "comfort-home-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"woodcraft-furniture": createProductDetail({
  slug: "woodcraft-furniture",

  name: "WoodCraft Furniture",

  category: "Home & Furniture Store",

  tagline:
    "A professional furniture e-commerce website for selling wooden furniture, custom furniture, tables, beds, storage units and home décor through a modern online storefront.",

  rating: "4.7",
  reviewCount: 31,
  purchases: 64,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Home & Furniture Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for home and furniture businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show sofas, beds, tables, chairs, storage furniture, décor and home essentials in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as living room, bedroom, dining, office furniture, décor and home essentials for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, material, finish and other applicable furniture options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for home and furniture products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete home and furniture product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into living room, bedroom, dining, office furniture, décor and home essentials and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Furniture buying guides, décor ideas, room inspiration and home styling content.",
    },
  ],

  customAddons: [
    {
      id: "woodcraft-furniture-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "woodcraft-furniture-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "woodcraft-furniture-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "woodcraft-furniture-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "woodcraft-furniture-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "woodcraft-furniture-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "woodcraft-furniture-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Furniture Store Owner",
      rating: 5,
      text: "WoodCraft Furniture gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "woodcraft-furniture-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "woodcraft-furniture-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"stylehub-fashion": createProductDetail({
  slug: "stylehub-fashion",

  name: "StyleHub Fashion",

  category: "Apparel & Fashion Store",

  tagline:
    "A stylish fashion e-commerce website for selling clothing, footwear, accessories and lifestyle products through a modern, visually focused online storefront.",

  rating: "4.8",
  reviewCount: 40,
  purchases: 79,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Apparel & Fashion Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for fashion and apparel businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show men's wear, women's wear, accessories, footwear and fashion collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as men, women, accessories, footwear, new arrivals and seasonal collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, fit, style and other applicable fashion options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for fashion and apparel products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete fashion and apparel product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into men, women, accessories, footwear, new arrivals and seasonal collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Style guides, fashion trends, collection highlights and shopping inspiration.",
    },
  ],

  customAddons: [
    {
      id: "stylehub-fashion-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "stylehub-fashion-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "stylehub-fashion-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "stylehub-fashion-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "stylehub-fashion-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "stylehub-fashion-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "stylehub-fashion-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Fashion Store Owner",
      rating: 5,
      text: "StyleHub Fashion gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "stylehub-fashion-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "stylehub-fashion-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"urban-wear-store": createProductDetail({
  slug: "urban-wear-store",

  name: "Urban Wear Store",

  category: "Apparel & Fashion Store",

  tagline:
    "A modern fashion e-commerce website for selling casual wear, streetwear, footwear and lifestyle accessories through a clean and trend-focused online storefront.",

  rating: "4.7",
  reviewCount: 37,
  purchases: 73,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Apparel & Fashion Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for fashion and apparel businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show men's wear, women's wear, accessories, footwear and fashion collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as men, women, accessories, footwear, new arrivals and seasonal collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, fit, style and other applicable fashion options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for fashion and apparel products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete fashion and apparel product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into men, women, accessories, footwear, new arrivals and seasonal collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Style guides, fashion trends, collection highlights and shopping inspiration.",
    },
  ],

  customAddons: [
    {
      id: "urban-wear-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "urban-wear-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "urban-wear-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "urban-wear-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "urban-wear-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "urban-wear-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "urban-wear-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Fashion Store Owner",
      rating: 5,
      text: "Urban Wear Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "urban-wear-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "urban-wear-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"luxury-fashion-boutique": createProductDetail({
  slug: "luxury-fashion-boutique",

  name: "Luxury Fashion Boutique",

  category: "Apparel & Fashion Store",

  tagline:
    "A premium fashion boutique e-commerce website for selling designer clothing, luxury accessories, footwear and curated lifestyle products through an elegant online storefront.",

  rating: "4.9",
  reviewCount: 35,
  purchases: 70,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Apparel & Fashion Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for fashion and apparel businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show men's wear, women's wear, accessories, footwear and fashion collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as men, women, accessories, footwear, new arrivals and seasonal collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, fit, style and other applicable fashion options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for fashion and apparel products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete fashion and apparel product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into men, women, accessories, footwear, new arrivals and seasonal collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Style guides, fashion trends, collection highlights and shopping inspiration.",
    },
  ],

  customAddons: [
    {
      id: "luxury-fashion-boutique-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "luxury-fashion-boutique-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "luxury-fashion-boutique-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "luxury-fashion-boutique-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "luxury-fashion-boutique-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "luxury-fashion-boutique-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "luxury-fashion-boutique-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Fashion Store Owner",
      rating: 5,
      text: "Luxury Fashion Boutique gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "luxury-fashion-boutique-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "luxury-fashion-boutique-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"trendline-apparel": createProductDetail({
  slug: "trendline-apparel",

  name: "Trendline Apparel",

  category: "Apparel & Fashion Store",

  tagline:
    "A modern apparel e-commerce website for selling clothing, seasonal collections, footwear and fashion accessories through a clean and product-focused online storefront.",

  rating: "4.7",
  reviewCount: 33,
  purchases: 66,

  currentPrice: "₹14,999",
  oldPrice: "₹37,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Apparel & Fashion Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for fashion and apparel businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show men's wear, women's wear, accessories, footwear and fashion collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as men, women, accessories, footwear, new arrivals and seasonal collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage size, colour, fit, style and other applicable fashion options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for fashion and apparel products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete fashion and apparel product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into men, women, accessories, footwear, new arrivals and seasonal collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Style guides, fashion trends, collection highlights and shopping inspiration.",
    },
  ],

  customAddons: [
    {
      id: "trendline-apparel-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "trendline-apparel-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "trendline-apparel-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "trendline-apparel-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "trendline-apparel-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "trendline-apparel-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "trendline-apparel-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Fashion Store Owner",
      rating: 5,
      text: "Trendline Apparel gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "trendline-apparel-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "trendline-apparel-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"royal-jewels-store": createProductDetail({
  slug: "royal-jewels-store",

  name: "Royal Jewels Store",

  category: "Jewelry Store",

  tagline:
    "A premium jewelry e-commerce website for selling rings, necklaces, earrings, bracelets and luxury collections through an elegant and trust-focused online storefront.",

  rating: "4.9",
  reviewCount: 43,
  purchases: 82,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Jewelry Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for jewelry businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show rings, earrings, necklaces, bracelets, gold jewelry, diamond jewelry and premium collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as rings, earrings, necklaces, bracelets, gold, diamond and occasion collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage metal, purity, size, stone, weight and other applicable jewelry options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for jewelry products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete jewelry product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into rings, earrings, necklaces, bracelets, gold, diamond and occasion collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Jewelry buying guides, care tips, styling ideas and collection stories.",
    },
  ],

  customAddons: [
    {
      id: "royal-jewels-store-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "royal-jewels-store-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "royal-jewels-store-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "royal-jewels-store-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "royal-jewels-store-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "royal-jewels-store-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "royal-jewels-store-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Jewelry Store Owner",
      rating: 5,
      text: "Royal Jewels Store gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "royal-jewels-store-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "royal-jewels-store-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"diamond-gallery": createProductDetail({
  slug: "diamond-gallery",

  name: "Diamond Gallery",

  category: "Jewelry Store",

  tagline:
    "A premium jewelry e-commerce website for showcasing and selling diamond rings, necklaces, earrings, bracelets and luxury collections through an elegant online storefront.",

  rating: "4.8",
  reviewCount: 39,
  purchases: 75,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Jewelry Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for jewelry businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show rings, earrings, necklaces, bracelets, gold jewelry, diamond jewelry and premium collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as rings, earrings, necklaces, bracelets, gold, diamond and occasion collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage metal, purity, size, stone, weight and other applicable jewelry options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for jewelry products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete jewelry product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into rings, earrings, necklaces, bracelets, gold, diamond and occasion collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Jewelry buying guides, care tips, styling ideas and collection stories.",
    },
  ],

  customAddons: [
    {
      id: "diamond-gallery-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "diamond-gallery-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "diamond-gallery-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "diamond-gallery-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "diamond-gallery-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "diamond-gallery-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "diamond-gallery-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Jewelry Store Owner",
      rating: 5,
      text: "Diamond Gallery gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "diamond-gallery-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "diamond-gallery-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"ornament-house": createProductDetail({
  slug: "ornament-house",

  name: "Ornament House",

  category: "Jewelry Store",

  tagline:
    "An elegant jewelry e-commerce website for selling rings, necklaces, earrings, bracelets and traditional ornament collections through a premium online storefront.",

  rating: "4.8",
  reviewCount: 36,
  purchases: 71,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Jewelry Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for jewelry businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show rings, earrings, necklaces, bracelets, gold jewelry, diamond jewelry and premium collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as rings, earrings, necklaces, bracelets, gold, diamond and occasion collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage metal, purity, size, stone, weight and other applicable jewelry options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for jewelry products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete jewelry product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into rings, earrings, necklaces, bracelets, gold, diamond and occasion collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Jewelry buying guides, care tips, styling ideas and collection stories.",
    },
  ],

  customAddons: [
    {
      id: "ornament-house-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "ornament-house-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "ornament-house-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "ornament-house-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "ornament-house-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "ornament-house-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "ornament-house-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Jewelry Store Owner",
      rating: 5,
      text: "Ornament House gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "ornament-house-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "ornament-house-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
"elegance-jewellery": createProductDetail({
  slug: "elegance-jewellery",

  name: "Elegance Jewellery",

  category: "Jewelry Store",

  tagline:
    "A premium jewelry e-commerce website for selling elegant rings, necklaces, earrings, bracelets and curated collections through a polished online storefront.",

  rating: "4.9",
  reviewCount: 34,
  purchases: 68,

  currentPrice: "₹16,999",
  oldPrice: "₹42,499",
  discount: "60% OFF",
  priceRange: "Up to 30 pages",

  mainImage: "/images/templates.jpg",

  customFeatures: [
    {
      icon: "🛍️",
      title: "Professional Jewelry Store Design",
      description: "Modern, attractive and conversion-focused online store designed specifically for jewelry businesses.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "📦",
      title: "Product Catalogue",
      description: "Show rings, earrings, necklaces, bracelets, gold jewelry, diamond jewelry and premium collections in a clear and professional product listing format.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🗂️",
      title: "Product Categories",
      description: "Organize products into categories such as rings, earrings, necklaces, bracelets, gold, diamond and occasion collections for easy browsing.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "🔍",
      title: "Product Search & Filters",
      description: "Allow customers to search and filter products by name, category, price, brand, availability and other relevant attributes.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📄",
      title: "Detailed Product Pages",
      description: "Display product images, name, price, sale price, description, specifications, availability, variations, reviews and buying actions.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "🎛️",
      title: "Product Variations",
      description: "Manage metal, purity, size, stone, weight and other applicable jewelry options.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🛒",
      title: "Shopping Cart",
      description: "Allow customers to add multiple products, update quantities and review cart totals before checkout.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description: "Let customers save favourite products and return to them later.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "✅",
      title: "Complete Checkout",
      description: "Structured checkout for customer details, delivery address, shipping options and payment.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💳",
      title: "Online Payment",
      description: "Enable online payments through an integrated payment gateway.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "📋",
      title: "Order Management",
      description: "Manage customer orders, order status and important order information.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "👤",
      title: "Customer Account",
      description: "Customers can register, sign in, manage profile information and access order history.",
      iconBackground: "#edfae8",
    },
    {
      icon: "🏷️",
      title: "Coupons & Discounts",
      description: "Create promotional offers, discount codes, coupons and special deals.",
      iconBackground: "#eef3ff",
    },
    {
      icon: "⭐",
      title: "Product Reviews & Ratings",
      description: "Allow customers to rate products and share feedback to improve buyer confidence.",
      iconBackground: "#e7f5ef",
    },
    {
      icon: "🚚",
      title: "Shipping Information",
      description: "Display shipping charges, delivery timelines, supported areas and related delivery information.",
      iconBackground: "#fff7e6",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Allow customers to contact the store directly for product, delivery and order-related enquiries.",
      iconBackground: "#f3e8ff",
    },
    {
      icon: "🔎",
      title: "SEO-Friendly Structure",
      description: "SEO-ready structure for jewelry products, categories, brands and relevant searches.",
      iconBackground: "#eaf1fd",
    },
    {
      icon: "⚡",
      title: "Mobile-Friendly & Fast Loading",
      description: "Optimized shopping experience across smartphones, tablets and desktop devices with fast page performance.",
      iconBackground: "#edfae8",
    },
  ],

  customPackageIncludes: [
    {
      title: "Home Page",
      description: "Featured products, categories, offers, best sellers, new arrivals, promotional banners and shopping call-to-actions.",
    },
    {
      title: "Shop / Products",
      description: "Complete jewelry product catalogue with professional product listings.",
    },
    {
      title: "Product Categories",
      description: "Organize products into rings, earrings, necklaces, bracelets, gold, diamond and occasion collections and other relevant categories.",
    },
    {
      title: "Product Detail Page",
      description: "Product images, name, price, sale price, description, specifications, variations, availability, reviews, Add to Cart and Buy Now.",
    },
    {
      title: "Search & Filter",
      description: "Help customers quickly find products using search and relevant filter options.",
    },
    {
      title: "Shopping Cart",
      description: "Manage selected products, quantities and shopping-cart totals.",
    },
    {
      title: "Wishlist",
      description: "Allow customers to save favourite products for future purchase.",
    },
    {
      title: "Checkout",
      description: "Customer information, shipping details and payment flow.",
    },
    {
      title: "Online Payment",
      description: "Online payment gateway integration for customer transactions.",
    },
    {
      title: "Customer Account",
      description: "Customer registration, login, profile and saved account information.",
    },
    {
      title: "My Orders",
      description: "Customers can view and track previous and current orders.",
    },
    {
      title: "Offers & Discounts",
      description: "Display promotional offers, coupon codes and special pricing campaigns.",
    },
    {
      title: "Product Reviews",
      description: "Display customer ratings and product feedback.",
    },
    {
      title: "About Us",
      description: "Present the business, experience and brand information.",
    },
    {
      title: "Contact Us",
      description: "Phone, WhatsApp, email and other customer-support information.",
    },
    {
      title: "Shipping Information",
      description: "Delivery charges, timelines, service areas and shipping information.",
    },
    {
      title: "Return / Refund Information",
      description: "Applicable product return, exchange and refund policies.",
    },
    {
      title: "Privacy Policy",
      description: "Website privacy and customer-data information.",
    },
    {
      title: "Terms & Conditions",
      description: "Applicable online-store terms and conditions.",
    },
    {
      title: "FAQ Section",
      description: "Common questions about products, payments, shipping, returns and orders.",
    },
    {
      title: "E-Commerce Blog",
      description: "Jewelry buying guides, care tips, styling ideas and collection stories.",
    },
  ],

  customAddons: [
    {
      id: "elegance-jewellery-ai-chatbot",
      icon: "🤖",
      name: "AI Shopping Assistant",
      description: "Help customers with product information, recommendations, order queries, shipping, returns and general shopping enquiries.",
      price: "Add-On",
    },
    {
      id: "elegance-jewellery-crm",
      icon: "📊",
      name: "CRM Integration",
      description: "Connect customer enquiries and customer data with CRM workflows for management and follow-up.",
      price: "Add-On",
    },
    {
      id: "elegance-jewellery-price-calculator",
      icon: "🧮",
      name: "Advanced Product / Price Calculator",
      description: "Calculate customized pricing based on product configuration, quantity, selected options or bulk-order requirements.",
      price: "Add-On",
    },
    {
      id: "elegance-jewellery-advanced-orders",
      icon: "📦",
      name: "Advanced Order Management",
      description: "Support complex order workflows, custom order statuses and advanced order-processing requirements.",
      price: "Add-On",
    },
    {
      id: "elegance-jewellery-domain",
      icon: "🌐",
      name: "Domain Registration",
      description: "Custom domain registration with setup and configuration.",
      price: "Add-On",
    },
    {
      id: "elegance-jewellery-hosting",
      icon: "☁️",
      name: "Hosting",
      description: "Website hosting purchase, configuration, deployment and production setup.",
      price: "Add-On",
    },
  ],

  customSpecifications: [
    {
      label: "Website Type",
      value: "General / Multi-Product E-Commerce Website",
    },
    {
      label: "Pages",
      value: "Based on Client Requirements",
    },
    {
      label: "Responsive Design",
      value: "Included",
      badge: "included",
    },
    {
      label: "SEO Setup",
      value: "Basic",
    },
    {
      label: "Browser Compatibility",
      value: "Modern Browsers",
    },
    {
      label: "Product Catalogue",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Categories",
      value: "Included",
      badge: "included",
    },
    {
      label: "Product Details",
      value: "Included",
      badge: "included",
    },
    {
      label: "E-Commerce Blog",
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
      label: "Domain Registration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Hosting",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "CRM Integration",
      value: "Add-On",
      badge: "addon",
    },
    {
      label: "Website Support",
      value: "As per Package",
    },
  ],

  customReviews: [
    {
      id: "elegance-jewellery-review-1",
      name: "Rohan Mehta",
      initials: "RM",
      location: "Delhi",
      role: "Jewelry Store Owner",
      rating: 5,
      text: "Elegance Jewellery gives us a clear product catalogue and shopping flow that makes it easier for customers to browse and place orders online.",
      avatarBackground: "#1b4de4",
    },
    {
      id: "elegance-jewellery-review-2",
      name: "Priya Sharma",
      initials: "PS",
      location: "Noida",
      role: "Online Store Manager",
      rating: 5,
      text: "The mobile experience, product pages and checkout structure feel professional and are easy for customers to use.",
      avatarBackground: "#12855a",
    },
    {
      id: "elegance-jewellery-review-3",
      name: "Aman Gupta",
      initials: "AG",
      location: "Gurugram",
      role: "E-Commerce Business Owner",
      rating: 4,
      text: "Product categories, wishlist, customer account and order-related features are organized well for a growing online store.",
      avatarBackground: "#7c3aed",
    },
  ],
}),
};