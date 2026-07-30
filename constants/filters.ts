import { AddOnFeature, PricingTier } from "@/types/category";

export const ADD_ON_FEATURES: AddOnFeature[] = [
  {
    key: "calc",
    icon: "🧮",
    name: "Price Calculator",
    price: "+₹3,000",
    desc: "Let clients estimate their project cost directly on your website.",
    points: [
      "Room-wise cost estimation",
      "Material & finish selection",
      "Auto WhatsApp/Email estimate",
      "Admin panel rate control",
    ],
  },
  {
    key: "crm",
    icon: "📊",
    name: "CRM Integration",
    price: "+₹5,000",
    desc: "Capture & manage all website leads from one dashboard.",
    points: [
      "Auto lead capture from forms",
      "Instant WhatsApp notifications",
      "Follow-up reminders & pipeline",
      "Export leads to Excel/PDF",
    ],
  },
  {
    key: "boq",
    icon: "📋",
    name: "BOQ Management",
    price: "+₹4,000",
    desc: "Generate professional Bill of Quantities for clients instantly.",
    points: [
      "Room-wise material list",
      "Auto quantity calculation",
      "Branded PDF export",
      "Send via WhatsApp/Email",
    ],
  },
  {
    key: "ai",
    icon: "🤖",
    name: "AI Chatbot",
    price: "+₹3,500",
    desc: "24/7 automated chatbot that captures leads & answers queries.",
    points: [
      "Auto replies to common queries",
      "Lead capture while you sleep",
      "WhatsApp & website integration",
      "Fully customizable responses",
    ],
  },
  {
    key: "booking",
    icon: "🛒",
    name: "Online Booking",
    price: "+₹4,000",
    desc: "Let clients book consultations or appointments directly online.",
    points: [
      "Calendar-based slot booking",
      "Auto confirmation messages",
      "Google Calendar integration",
      "Admin booking dashboard",
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  { pages: "Single Page Website", price: "₹4,999" },
  { pages: "Up to 10 Pages", price: "₹7,999" },
  { pages: "Up to 15 Pages", price: "₹9,999" },
  { pages: "Up to 30 Pages", price: "₹14,999" },
  { pages: "Up to 50 Pages", price: "₹19,999" },
];

export const SORT_OPTIONS: { value: string; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "discount", label: "Highest Discount" },
];
