import type { IndustryKey, IndustryInfo, TemplateInfo, TemplateItem } from "./types";
import { slugify } from "./utils";

export const industryData: Record<IndustryKey, IndustryInfo> = {
  interior: {
    label: "Interior & Architecture",
    subIndustries: ["Residential Interior Design", "Commercial Interior Design", "Architecture Firm", "Modular Kitchen & Furniture", "Other"],
    pages: ["Home", "About Us", "Portfolio / Gallery", "Services", "Our Process", "Contact Us"],
    features: ["Contact Form", "Google Maps Location", "WhatsApp Chat Button", "Portfolio Gallery Slider", "Before / After Slider", "Free Quote Calculator"],
  },
  medical: {
    label: "Medical & Healthcare",
    subIndustries: ["Multi-Speciality Hospital", "Medical Tourism", "Eye Clinic", "Dental Clinic", "Other"],
    pages: ["Home", "About Us", "Our Doctors", "Services / Specialities", "Book Appointment", "Gallery", "Contact Us"],
    features: ["Contact Form", "Google Maps Location", "WhatsApp Chat Button", "Online Appointment Booking", "Doctor Profile Cards", "Live Chat Support"],
  },
  realestate: {
    label: "Real Estate",
    subIndustries: ["Builder / Developer", "Real Estate Agent / Broker", "Property Management", "Rental Listings", "Other"],
    pages: ["Home", "About Us", "Properties / Listings", "Services", "Testimonials", "Contact Us"],
    features: ["Contact Form", "Google Maps Location", "WhatsApp Chat Button", "Property Search & Filters", "EMI Calculator", "Virtual Tour / 360°"],
  },
  other: {
    label: "Other",
    subIndustries: ["Retail / E-commerce", "Education & Coaching", "Restaurant / Food", "Fitness & Wellness", "Other"],
    pages: ["Home", "About Us", "Services / Products", "Gallery", "Contact Us"],
    features: ["Contact Form", "Google Maps Location", "WhatsApp Chat Button", "Newsletter Signup"],
  },
};

export const templateData: Record<IndustryKey, TemplateInfo> = {
  interior: {
    title: "Interior & Architect Websites",
    sub: "400+ premium designs with portfolio gallery, price calculator & SEO-friendly pages.",
    items: [
      { name: "Active Designs Pvt. Ltd.", price: "₹30,000", original: "₹45,000", discount: "33% OFF", rating: "4.8", reviews: 38, purchased: 124, badge: "Interior", color: "var(--orange)" },
      { name: "Arkin Designs", price: "₹12,000", original: "₹20,000", discount: "40% OFF", rating: "4.6", reviews: 24, purchased: 87, badge: "Architecture", color: "var(--dark)" },
      { name: "D'LIFE Interiors", price: "₹95,000", original: "₹3,00,000", discount: "68% OFF", rating: "4.9", reviews: 67, purchased: 215, badge: "Premium", color: "var(--green)" },
      { name: "Dream Home Studio (DHS)", price: "₹7,999", original: "₹14,999", discount: "47% OFF", rating: "4.7", reviews: 52, purchased: 193, badge: "Trending", color: "var(--blue)" },
    ],
  },
  medical: {
    title: "Medical & Healthcare Websites",
    sub: "350+ premium designs with appointment booking, doctor profiles & SEO-friendly pages.",
    items: [
      { name: "MediCare Plus Hospital", price: "₹25,000", original: "₹40,000", discount: "38% OFF", rating: "4.8", reviews: 45, purchased: 156, badge: "Hospital", color: "var(--blue)" },
      { name: "SmileCare Dental Studio", price: "₹9,999", original: "₹18,000", discount: "44% OFF", rating: "4.7", reviews: 33, purchased: 98, badge: "Dental", color: "var(--orange)" },
      { name: "VisionPoint Eye Clinic", price: "₹14,500", original: "₹25,000", discount: "42% OFF", rating: "4.6", reviews: 28, purchased: 76, badge: "Eye Clinic", color: "var(--green)" },
      { name: "MedTour Global", price: "₹35,000", original: "₹60,000", discount: "42% OFF", rating: "4.9", reviews: 52, purchased: 134, badge: "Medical Tourism", color: "var(--dark)" },
    ],
  },
  realestate: {
    title: "Real Estate Websites",
    sub: "300+ premium designs with property listings, EMI calculator & SEO-friendly pages.",
    items: [
      { name: "Prime Properties", price: "₹20,000", original: "₹35,000", discount: "43% OFF", rating: "4.7", reviews: 41, purchased: 142, badge: "Builder", color: "var(--dark)" },
      { name: "Skyline Realty", price: "₹15,000", original: "₹25,000", discount: "40% OFF", rating: "4.8", reviews: 36, purchased: 118, badge: "Broker", color: "var(--orange)" },
      { name: "Urban Nest Estates", price: "₹18,500", original: "₹30,000", discount: "38% OFF", rating: "4.6", reviews: 29, purchased: 95, badge: "Premium", color: "var(--green)" },
      { name: "HomeFinder Rentals", price: "₹8,999", original: "₹15,000", discount: "40% OFF", rating: "4.5", reviews: 22, purchased: 67, badge: "Rentals", color: "var(--blue)" },
    ],
  },
  other: {
    title: "Business Websites",
    sub: "500+ premium designs across industries with SEO-friendly, mobile-ready pages.",
    items: [
      { name: "Retail Hub Store", price: "₹10,000", original: "₹18,000", discount: "44% OFF", rating: "4.6", reviews: 31, purchased: 88, badge: "E-commerce", color: "var(--orange)" },
      { name: "BrightPath Academy", price: "₹11,500", original: "₹20,000", discount: "43% OFF", rating: "4.7", reviews: 27, purchased: 74, badge: "Education", color: "var(--blue)" },
      { name: "Spice Route Restaurant", price: "₹9,000", original: "₹16,000", discount: "44% OFF", rating: "4.6", reviews: 24, purchased: 69, badge: "Restaurant", color: "var(--green)" },
      { name: "FitZone Studio", price: "₹8,500", original: "₹15,000", discount: "43% OFF", rating: "4.5", reviews: 19, purchased: 53, badge: "Fitness", color: "var(--dark)" },
    ],
  },
};

export const stepLabels = ["Industry", "Specialisation", "Pages & Features", "Business Info"];
export const TOTAL_STEPS = 4;

export function templateSlug(industryKey: IndustryKey, name: string) {
  return `${industryKey}--${slugify(name)}`;
}

export function findTemplateBySlug(slug: string): { industryKey: IndustryKey; item: TemplateItem } | null {
  for (const key of Object.keys(templateData) as IndustryKey[]) {
    const item = templateData[key].items.find((it) => templateSlug(key, it.name) === slug);
    if (item) return { industryKey: key, item };
  }
  return null;
}

export function pageSlug(pageName: string) {
  return slugify(pageName);
}

export function findTemplatePage(
  templateSlugValue: string,
  pageSlugValue: string
): { industryKey: IndustryKey; item: TemplateItem; pageName: string; pages: string[] } | null {
  const found = findTemplateBySlug(templateSlugValue);
  if (!found) return null;
  const pages = industryData[found.industryKey].pages;
  const pageName = pages.find((p) => pageSlug(p) === pageSlugValue);
  if (!pageName) return null;
  return { ...found, pageName, pages };
}
