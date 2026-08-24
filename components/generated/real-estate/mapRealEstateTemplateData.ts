import type {
  RealEstateGeneratedContent,
  RealEstateTemplateData,
} from "./types";

const propertyImages = [
  "/templates/real-estate/property-1.webp",
  "/templates/real-estate/property-2.webp",
  "/templates/real-estate/property-3.webp",
];

export function mapRealEstateTemplateData(
  content: RealEstateGeneratedContent,
): RealEstateTemplateData {
  return {
    businessName: content.businessName,
    tagline: content.tagline,
    description: content.description,

    phone: content.phone || undefined,
    email: content.email || undefined,
    address: content.address || undefined,

    colors: content.colors,

    heroImage:
      "/templates/real-estate/hero.webp",

    highlights: content.highlights,

    properties: content.properties.map(
      (property, index) => ({
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        image:
          propertyImages[index] ??
          propertyImages[0],
      }),
    ),

    services: content.services,

    process: content.process,

    processImage:
      "/templates/real-estate/process.webp",

    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,

    aboutImage:
      "/templates/real-estate/about.webp",

    testimonials: content.testimonials,
  };
}