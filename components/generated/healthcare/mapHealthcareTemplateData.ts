import type {
  HealthcareGeneratedContent,
  HealthcareTemplateData,
} from "./types";

const doctorImages = [
  "/templates/healthcare/doctor-1.webp",
  "/templates/healthcare/doctor-2.webp",
  "/templates/healthcare/doctor-3.webp",
];

export function mapHealthcareTemplateData(
  content: HealthcareGeneratedContent,
): HealthcareTemplateData {
  return {
    businessName: content.businessName,
    tagline: content.tagline,
    description: content.description,

    phone: content.phone || undefined,
    email: content.email || undefined,
    address: content.address || undefined,

    colors: content.colors,

    heroImage: "/templates/healthcare/hero.webp",

    highlights: content.highlights,

    services: content.services,

    doctors: content.doctors.map(
      (doctor, index) => ({
        name: doctor.name,
        specialization: doctor.specialization,
        image:
          doctorImages[index] ??
          doctorImages[0],
      }),
    ),

    process: content.process,

    processImage:
      "/templates/healthcare/process.webp",

    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,

    aboutImage:
      "/templates/healthcare/about.webp",

    testimonials: content.testimonials,
  };
}