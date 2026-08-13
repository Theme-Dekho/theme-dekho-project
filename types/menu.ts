// export interface MegaMenuBarItem {
//   icon: string;
//   title: string;
//   count: string;
// }

// export interface MegaMenuColumn {
//   links: string[];
// }

// export interface SimpleDropLink {
//   label: string;
//   href: string;
// }

// export interface MobileAccordionLink {
//   label: string;
//   href: string;
// }

export interface MegaMenuBarItem {
  icon: string;
  title: string;
  count: string;
  href?: string;
}

export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  links: MegaMenuLink[];
}

export interface SimpleDropLink {
  label: string;
  href: string;
}

export interface MobileAccordionLink {
  label: string;
  href: string;
}
