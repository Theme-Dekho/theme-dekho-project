import type { MegaMenuColumn, MegaMenuBarItem, SimpleDropLink, MobileAccordionLink } from "@/types/menu";

/** Top colored category bar inside the "Our Work" mega dropdown */
export const megaMenuBar: MegaMenuBarItem[] = [
  { icon: "🏛️", title: "Interior Architect", count: "400+ Designs", href: "/categories/interior-architecture"},
  { icon: "🛒", title: "E-Commerce", count: "200+ Designs", href: "/categories/ecommerce"},
  { icon: "🏥", title: "Medical Healthcare", count: "150+ Designs", href: "/categories/healthcare"},
  { icon: "🏘️", title: "Real Estate", count: "100+ Designs", href: "/categories/real-estate"},
];

/** 4 link columns inside the "Our Work" mega dropdown */
export const megaMenuColumns: MegaMenuColumn[] = [
  {
      links: [
    {
      label: "Architect website",
      href: "/categories/interior-architecture?subcategory=architect-firm"
    },
    {
      label: "Interior Designer Portfolio",
      href: "/categories/interior-architecture?subcategory=interior-portfolio",
    },
    {
      label: "Interior + Architect",
      href: "/categories/interior-architecture?subcategory=interior-architect",
    },
    {
      label: "Interior firm",
      href: "/categories/interior-architecture?subcategory=interior-firm",
    },
  ],
  },
  {
    links: [
    {
      label: "Electronics store",
      href: "/categories/ecommerce?subcategory=electronics-store",
    },  
    {
      label: "Groceries stores",
      href: "/categories/ecommerce?subcategory=grocery-store",
    },    
    {
      label: "Home & furniture store",
      href: "/categories/ecommerce?subcategory=furniture-store",
    },    
    {
      label: "Apparel & fashion store",
      href: "/categories/ecommerce?subcategory=fashion-store",
    },    
    {
      label:  "Jewelry-Store",
      href: "/categories/ecommerce?subcategory=jewelry-store",
    },    
    ],
  },
  {
    links: [
    {
      label: "Hospital & Clinic",
      href: "/categories/healthcare?subcategory=hospital",
    },  
    {
      label: "Cardio",
      href: "/categories/healthcare?subcategory=cardiology",
    },  
    {
      label: "Eye Hospital",
      href: "/categories/healthcare?subcategory=eye-hospital",
    },  
    {
      label: "Dental Hospital",
      href: "/categories/healthcare?subcategory=dental-clinic",
    },  
    {
      label: "Doctor",
      href: "/categories/healthcare?subcategory=doctor",
    },  
    {
      label: "Medical tourism",
      href: "/categories/healthcare?subcategory=medical-tourism",
    },  
    ],
  },
  {
    links: [
    {
      label: "Builder",
      href: "/categories/real-estate?subcategory=builder", 
    },  
    {
      label: "Contractor",
      href: "/categories/real-estate?subcategory=contractor", 
    }  
    ],
  },
];

/** "Custom web development" simple dropdown */
export const customDevLinks: SimpleDropLink[] = [
  { label: "WordPress Development", href: "/wordpress-development"},
  { label: "Shopify Development", href: "/shopify-development" },
  { label: "E-commerce Development", href: "/ecommerce-development" },
  { label: "Custom web Development", href: "/custom-web-development" },
];

/** Primary nav items rendered in the desktop header */
export const primaryNav = [
  { label: "Home", href: "#", active: true },
  { label: "Our Work", href: "#", hasMegaMenu: true },
  { label: "Custom web development", href: "#", hasSimpleDropdown: true },
  { label: "Redesign WordPress Website", href: "/redesign-wordpress" },
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
