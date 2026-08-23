import type {
  InteriorGeneratedContent,
  InteriorTemplateData,
} from "./types";

const projectImages = [
  "/templates/interior/project-1.png",
  "/templates/interior/project-2.png",
  "/templates/interior/project-3.png",
];

export function mapInteriorTemplateData(
  content: InteriorGeneratedContent,
): InteriorTemplateData {
  return {
    businessName: content.businessName,
    tagline: content.tagline,
    description: content.description,

    phone: content.phone || undefined,
    email: content.email || undefined,
    address: content.address || undefined,

    colors: content.colors,

    heroImage: "/templates/interior/hero.png",

    highlights: content.highlights,

    projects: content.projects.map(
      (project, index) => ({
        title: project.title,
        image:
          projectImages[index] ??
          projectImages[0],
      }),
    ),

    process: content.process,

    processImage:
      "/templates/interior/process.png",

    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,

    aboutImage:
      "/templates/interior/about.png",

    testimonials: content.testimonials,
  };
}