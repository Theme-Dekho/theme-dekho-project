import type { MegaMenuColumn, MegaMenuBarItem, SimpleDropLink, MobileAccordionLink } from "@/types/menu";

/** Top colored category bar inside the "Our Work" mega dropdown */
export const megaMenuBar: MegaMenuBarItem[] = [
  { icon: "🏛️", title: "Interior Architect", count: "400+ Designs" },
  { icon: "🛒", title: "E-Commerce", count: "200+ Designs" },
  { icon: "🏥", title: "Medical Healthcare", count: "150+ Designs" },
  { icon: "🏘️", title: "Real Estate", count: "100+ Designs" },
];

/** 4 link columns inside the "Our Work" mega dropdown */
export const megaMenuColumns: MegaMenuColumn[] = [
  {
    links: [
      "Architect website",
      "Home décor website",
      "Interior + Architect",
      "Interior website",
    ],
  },
  {
    links: [
      "Electronics store",
      "Groceries stores",
      "Home & furniture store",
      "Apparel & fashion store",
      "Jewelry-Store",
    ],
  },
  {
    links: [
      "Hospital & Clinic",
      "Cardio",
      "Eye Hospital",
      "Dental Hospital",
      "Doctor",
      "Medical tourism",
    ],
  },
  {
    links: ["Builder", "Contractor"],
  },
];

/** "Custom web development" simple dropdown */
export const customDevLinks: SimpleDropLink[] = [
  { label: "WordPress Development", href: "#" },
  { label: "Shopify Development", href: "#" },
  { label: "E-commerce website", href: "#" },
  { label: "Custom web development", href: "#" },
];

/** Primary nav items rendered in the desktop header */
export const primaryNav = [
  { label: "Home", href: "#", active: true },
  { label: "Our Work", href: "#", hasMegaMenu: true },
  { label: "Custom web development", href: "#", hasSimpleDropdown: true },
  { label: "Redesign WordPress Website", href: "#" },
  { label: "Contact us", href: "#" },
] as const;

/** Mobile nav drawer — "Our Work" accordion links */
export const mobileOurWorkLinks: MobileAccordionLink[] = [
  { label: "Interior & Architect", href: "#" },
  { label: "Medical Healthcare", href: "#" },
  { label: "E-Commerce", href: "#" },
  { label: "Real Estate", href: "#" },
  { label: "Tour & Travels", href: "#" },
  { label: "Jewelry Store", href: "#" },
];

export const phoneNumber = {
  display: "844-773-1920",
  href: "tel:+918447731920",
};
