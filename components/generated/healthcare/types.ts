export type HealthcareColors = {
  background: string;
  backgroundSoft: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
};

export type HealthcareHighlight = {
  title: string;
  label: string;
};

export type HealthcareService = {
  title: string;
  description: string;
};

export type HealthcareDoctor = {
  name: string;
  specialization: string;
};

export type HealthcareProcessStep = {
  title: string;
  description: string;
};

export type HealthcareTestimonial = {
  name: string;
  text: string;
};

export type HealthcareGeneratedContent = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string | null;
  email?: string | null;
  address?: string | null;

  colors: HealthcareColors;

  highlights: HealthcareHighlight[];
  services: HealthcareService[];
  doctors: HealthcareDoctor[];
  process: HealthcareProcessStep[];

  aboutTitle: string;
  aboutDescription: string;

  testimonials: HealthcareTestimonial[];
};

export type HealthcareTemplateData = {
  businessName: string;
  tagline: string;
  description: string;

  phone?: string;
  email?: string;
  address?: string;

  colors: HealthcareColors;

  heroImage: string;

  highlights: HealthcareHighlight[];

  services: HealthcareService[];

  doctors: {
    name: string;
    specialization: string;
    image: string;
  }[];

  process: HealthcareProcessStep[];

  processImage: string;

  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;

  testimonials: HealthcareTestimonial[];
};