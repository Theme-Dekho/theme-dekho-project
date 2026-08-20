"use client";

import { useMemo, useState } from "react";

import type {
  ProductSpecification,
} from "@/constants/product-details";

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

type SpecificationFilter =
  | "all"
  | "included"
  | "addon";

function getSpecificationGroup(label: string) {
  const normalized = label.toLowerCase();

  if (
    normalized.includes("website type") ||
    normalized.includes("number of pages") ||
    normalized.includes("technology") ||
    normalized.includes("customisation")
  ) {
    return "Package Overview";
  }

  if (
    normalized.includes("responsive") ||
    normalized.includes("seo") ||
    normalized.includes("browser")
  ) {
    return "Design & Performance";
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("whatsapp") ||
    normalized.includes("crm") ||
    normalized.includes("dashboard")
  ) {
    return "Lead & Contact Tools";
  }

  if (
    normalized.includes("support") ||
    normalized.includes("hosting") ||
    normalized.includes("domain") ||
    normalized.includes("delivery")
  ) {
    return "Delivery & Support";
  }

  return "Additional Details";
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  const [activeFilter, setActiveFilter] =
    useState<SpecificationFilter>("all");

  const filteredSpecifications = useMemo(() => {
    if (activeFilter === "all") {
      return specifications;
    }

    return specifications.filter(
      (specification) =>
        specification.badge === activeFilter,
    );
  }, [activeFilter, specifications]);

  const groupedSpecifications = useMemo(() => {
    return filteredSpecifications.reduce<
      Record<string, ProductSpecification[]>
    >((groups, specification) => {
      const group = getSpecificationGroup(
        specification.label,
      );

      if (!groups[group]) {
        groups[group] = [];
      }

      groups[group].push(specification);

      return groups;
    }, {});
  }, [filteredSpecifications]);

  return (
    <section
      className="product-specifications-section"
      id="technical-specifications"
    >
      <div className="product-section-inner">

        <div className="product-specifications-heading">
          <h2>Technical Specifications</h2>

          <p>
            Important technical and delivery details for this
            website package
          </p>
        </div>

        <div className="product-specification-toolbar">

          <div className="product-specification-filters">
            <button
              type="button"
              className={
                activeFilter === "all" ? "active" : ""
              }
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>

            <button
              type="button"
              className={
                activeFilter === "included"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("included")
              }
            >
              Included
            </button>

            <button
              type="button"
              className={
                activeFilter === "addon"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveFilter("addon")}
            >
              Add-On
            </button>
          </div>

          <div className="product-specification-legend">
            <span className="specification-legend included">
              ✓ Included
            </span>

            <span className="specification-legend addon">
              Add-On
            </span>
          </div>

        </div>

        {filteredSpecifications.length > 0 ? (
          <div className="product-specification-groups">

            {Object.entries(
              groupedSpecifications,
            ).map(([group, items]) => (
              <div
                className="product-specification-group"
                key={group}
              >
                <div className="product-specification-group-header">

                  <span
                    className="product-specification-group-icon"
                    aria-hidden="true"
                  >
                    ◇
                  </span>

                  <h3>{group}</h3>

                  <span className="product-specification-group-count">
                    {items.length}{" "}
                    {items.length === 1
                      ? "item"
                      : "items"}
                  </span>

                </div>

                <div className="product-specification-group-body">

                  {items.map((specification) => (
                    <div
                      className="product-specification-row"
                      key={specification.label}
                    >
                      <span className="product-specification-label">
                        {specification.label}
                      </span>

                      {specification.badge ? (
                        <span
                          className={
                            specification.badge ===
                            "included"
                              ? "product-specification-status included"
                              : "product-specification-status addon"
                          }
                        >
                          {specification.value}
                        </span>
                      ) : (
                        <span className="product-specification-value">
                          {specification.value}
                        </span>
                      )}

                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="product-specification-empty">
            No specifications match this filter.
          </div>
        )}

      </div>
    </section>
  );
}