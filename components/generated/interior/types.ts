export type InteriorColors = {
  background: string;
  backgroundSoft: string;
  accent: string;
  secondary: string;
  text: string;
};

export type InteriorHighlight = {
  title: string;
  label: string;
};

export type InteriorProject = {
  title: string;
};

export type InteriorProcessStep = {
  title: string;
  description: string;
};

export type InteriorTestimonial = {
  name: string;
  text: string;
};

export type InteriorGeneratedContent = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string | null;
  email?: string | null;
  address?: string | null;

  colors: InteriorColors;

  highlights: InteriorHighlight[];
  projects: InteriorProject[];
  process: InteriorProcessStep[];

  aboutTitle: string;
  aboutDescription: string;

  testimonials: InteriorTestimonial[];
};

export type InteriorTemplateData = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string;
  email?: string;
  address?: string;

  colors: InteriorColors;

  heroImage: string;

  highlights: InteriorHighlight[];

  projects: {
    title: string;
    image: string;
  }[];

  process: InteriorProcessStep[];

  processImage: string;

  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;

  testimonials: InteriorTestimonial[];
};