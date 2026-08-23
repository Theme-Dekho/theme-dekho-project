import type {
  HealthcareGeneratedContent,
  HealthcareTemplateData,
} from "./types";

const doctorImages = [
  "/templates/healthcare/doctor-1.png",
  "/templates/healthcare/doctor-2.png",
  "/templates/healthcare/doctor-3.png",
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

    heroImage: "/templates/healthcare/hero.png",

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
      "/templates/healthcare/process.png",

    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,

    aboutImage:
      "/templates/healthcare/about.png",

    testimonials: content.testimonials,
  };
}