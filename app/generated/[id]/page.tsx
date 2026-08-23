"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import InteriorTemplate from "@/components/generated/interior/InteriorTemplate";
import { mapInteriorTemplateData } from "@/components/generated/interior/mapInteriorTemplateData";
import type {
  InteriorGeneratedContent,
} from "@/components/generated/interior/types";

import HealthcareTemplate from "@/components/generated/healthcare/HealthcareTemplate";
import { mapHealthcareTemplateData } from "@/components/generated/healthcare/mapHealthcareTemplateData";
import type {
  HealthcareGeneratedContent,
} from "@/components/generated/healthcare/types";


import RealEstateTemplate from "@/components/generated/real-estate/RealEstateTemplate";
import { mapRealEstateTemplateData } from "@/components/generated/real-estate/mapRealEstateTemplateData";
import type {
  RealEstateGeneratedContent,
} from "@/components/generated/real-estate/types";

type GenerationResponse = {
  id: number;
  generation_status: string;

  template_type: string | null;
  template_version: string | null;

  generated_content: unknown;
};

export default function GeneratedWebsitePage() {
  const params = useParams();

  const generationId = params.id as string;

  const [generation, setGeneration] =
    useState<GenerationResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadGeneration() {
      try {
        const apiBaseUrl =
          process.env.NEXT_PUBLIC_API_BASE_URL;

        if (!apiBaseUrl) {
          throw new Error(
            "NEXT_PUBLIC_API_BASE_URL is not configured.",
          );
        }

        const response = await fetch(
          `${apiBaseUrl}/api/ai-websites/${generationId}`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load generated website.",
          );
        }

        const data: GenerationResponse =
          await response.json();

        setGeneration(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong.",
        );
      } finally {
        setLoading(false);
      }
    }

    if (generationId) {
      loadGeneration();
    }
  }, [generationId]);

  if (loading) {
    return <div>Loading website...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!generation) {
    return <div>Website not found.</div>;
  }

  if (
    generation.generation_status !== "completed"
  ) {
    return (
      <div>
        Website generation is not completed.
      </div>
    );
  }

  if (!generation.generated_content) {
    return (
      <div>
        Generated website content is missing.
      </div>
    );
  }

  if (
    generation.template_type === "interior"
  ) {
    const content =
      generation.generated_content as InteriorGeneratedContent;

    const templateData =
      mapInteriorTemplateData(content);

    return (
      <InteriorTemplate
        data={templateData}
      />
    );
  }

  // Healthcare
  if (
    generation.template_type === "healthcare"
  ) {
    const content =
      generation.generated_content as HealthcareGeneratedContent;

    const templateData =
      mapHealthcareTemplateData(content);

    return (
      <HealthcareTemplate
        data={templateData}
      />
    );
  }

  // Real-Estate
  if (
    generation.template_type === "real_estate"
  ) {
    const content =
      generation.generated_content as RealEstateGeneratedContent;

    const templateData =
      mapRealEstateTemplateData(content);

    return (
      <RealEstateTemplate
        data={templateData}
      />
    );
  }

  return (
    <div>
      Unsupported website template:{" "}
      {generation.template_type ??
        "unknown"}
    </div>
  );
}