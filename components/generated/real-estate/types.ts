export type RealEstateColors = {
  background: string;
  backgroundSoft: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
};

export type RealEstateHighlight = {
  title: string;
  label: string;
};

export type RealEstateProperty = {
  title: string;
  location: string;
  propertyType: string;
};

export type RealEstateService = {
  title: string;
  description: string;
};

export type RealEstateProcessStep = {
  title: string;
  description: string;
};

export type RealEstateTestimonial = {
  name: string;
  text: string;
};

export type RealEstateGeneratedContent = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string | null;
  email?: string | null;
  address?: string | null;

  colors: RealEstateColors;

  highlights: RealEstateHighlight[];
  properties: RealEstateProperty[];
  services: RealEstateService[];
  process: RealEstateProcessStep[];

  aboutTitle: string;
  aboutDescription: string;

  testimonials: RealEstateTestimonial[];
};

export type RealEstateTemplateData = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string;
  email?: string;
  address?: string;

  colors: RealEstateColors;

  heroImage: string;

  highlights: RealEstateHighlight[];

  properties: {
    title: string;
    location: string;
    propertyType: string;
    image: string;
  }[];

  services: RealEstateService[];

  process: RealEstateProcessStep[];

  processImage: string;

  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;

  testimonials: RealEstateTestimonial[];
};