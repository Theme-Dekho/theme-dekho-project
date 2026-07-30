import type { CategoryPillData } from "@/types/category";

export const whyChooseUs = [
  {
    icon: "✅",
    title: "100% Genuine Products",
    desc: "Every template is original, verified & absolutely safe to use on any WordPress website — no piracy, ever.",
  },
  {
    icon: "⚡",
    title: "Instant Activation",
    desc: "No waiting. As soon as your payment is confirmed, your website template is delivered immediately.",
  },
  {
    icon: "🔄",
    title: "Regular Updates",
    desc: "Get free access to all future updates for every theme & plugin — your site always stays current.",
  },
  {
    icon: "🎧",
    title: "Expert Support",
    desc: "Our dedicated support team is always ready to answer your questions and resolve issues fast.",
  },
  {
    icon: "💰",
    title: "Lowest Cost in India",
    desc: "Premium quality at prices that make sense for Indian businesses and freelancers just starting out.",
  },
  {
    icon: "🔒",
    title: "Highly Secure",
    desc: "Security is our top priority. We only provide original, certified products — your site is always safe.",
  },
];

export const testimonials = [
  {
    avatarColor: "#1A56DB",
    initials: "RK",
    name: "Rahul Kumar",
    role: "Interior Designer, Delhi",
    text: "Bahut accha service mila. Template bilkul waisa hi tha jaise website par dikhaya tha. Support team bhi bahut helpful rahi. Highly recommend!",
  },
  {
    avatarColor: "#0E1A33",
    initials: "DS",
    name: "Dr. Sunita Sharma",
    role: "Hospital Owner, Mumbai",
    text: "Best price mili puri market mein. Hospital website ke liye perfect template mila. 3 din mein website live ho gayi. Bohot satisfied hoon.",
  },
  {
    avatarColor: "#101B36",
    initials: "AM",
    name: "Anjali Mehta",
    role: "Fashion Store Owner, Jaipur",
    text: "E-commerce store ke liye bilkul sahi template. Discount bhi bahut acha mila. Main apne saare clients ko Theme Dekho hi recommend karta hoon.",
  },
];

export const categoryPills: CategoryPillData[] = [
  { key: "all", label: "All Templates" },
  { key: "interior", label: "Interior & Architect" },
  { key: "healthcare", label: "Medical Healthcare" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "all", label: "Real Estate", soon: true },
  { key: "all", label: "Tour & Travels", soon: true },
  { key: "all", label: "Jewelry Store", soon: true },
];

/** Sub-category pills shown under the strip once a top-level category is picked */
export const subCategories: Record<string, string[]> = {
  interior: ["All", "Architect Website", "Home Décor", "Interior + Architect", "Interior Design"],
  healthcare: ["All", "Hospital & Clinic", "Dental Hospital", "Eye Hospital", "Cardiology", "Doctor", "Medical Tourism"],
  ecommerce: ["All", "Fashion Store", "Jewellery Store", "Electronics", "Groceries", "Furniture Store", "Apparel"],
};

export const pricingTiers = [
  { pages: "Single Page Website", price: "₹4,999" },
  { pages: "Up to 10 Pages", price: "₹7,999" },
  { pages: "Up to 15 Pages", price: "₹9,999" },
  { pages: "Up to 30 Pages", price: "₹14,999" },
  { pages: "Up to 50 Pages", price: "₹19,999" },
];

export const pricingExclusions = [
  "Price / cost calculator",
  "CRM integration",
  "BOQ management",
  "Payment gateway & custom modules",
];

export const footerColumns = [
  {
    title: "Quick Links",
    links: ["Home", "Readymade Designs", "My Account", "Contact Us", "Terms & Conditions"],
  },
  {
    title: "Categories",
    links: ["E-Commerce", "Medical Healthcare", "Interior & Architect", "Real Estate", "Tour & Travels", "Jewelry Store"],
  },
  {
    title: "Best Sellers",
    links: ["Dream Home Studio", "Evergreen Design", "Decorpot", "Design Cafe", "Central Hospital", "Showcase Renovation"],
  },
];

export const reviewsData = [
  { name: "Rahul Sharma", city: "Delhi", rating: 5, date: "12 May 2026", text: "Bahut accha design mila. Bilkul waisa hi tha jaise preview mein dikhaya tha. Support team bhi helpful rahi!" },
  { name: "Priya Mehta", city: "Mumbai", rating: 5, date: "8 May 2026", text: "Amazing quality website. Setup mein koi problem nahi hui. Highly recommend karta hoon!" },
  { name: "Suresh Kumar", city: "Bangalore", rating: 4, date: "3 May 2026", text: "Achha tha overall. Thoda customization karna pada lekin result bahut achha aaya." },
  { name: "Anjali Singh", city: "Jaipur", rating: 5, date: "28 Apr 2026", text: "Best price mili market mein. 2 din mein website ready ho gayi. Bohot satisfied hoon!" },
  { name: "Mohit Gupta", city: "Pune", rating: 4, date: "20 Apr 2026", text: "Good design, fast delivery. CRM integration bhi smooth raha. Will buy again!" },
  { name: "Neha Agarwal", city: "Lucknow", rating: 5, date: "15 Apr 2026", text: "Professional aur clean design. Client ko bahut pasand aaya. Thank you Theme Dekho!" },
];

export const businessTypeOptions = [
  "Interior & Architecture",
  "Medical / Hospital / Clinic",
  "E-Commerce / Online Store",
  "Real Estate / Builder",
  "Tour & Travels",
  "Restaurant / Food",
  "Education / Institute",
  "Other",
];
