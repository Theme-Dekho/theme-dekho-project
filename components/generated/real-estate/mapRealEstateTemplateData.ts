import type {
  RealEstateGeneratedContent,
  RealEstateTemplateData,
} from "./types";

const propertyImages = [
  "/templates/real-estate/property-1.png",
  "/templates/real-estate/property-2.png",
  "/templates/real-estate/property-3.png",
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
      "/templates/real-estate/hero.png",

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
      "/templates/real-estate/process.png",

    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,

    aboutImage:
      "/templates/real-estate/about.png",

    testimonials: content.testimonials,
  };
}