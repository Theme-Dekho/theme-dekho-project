// "use client";

// import { useMemo, useState } from "react";

// import type {
//   ProductSpecification,
// } from "@/constants/product-details";

// interface ProductSpecificationsProps {
//   specifications: ProductSpecification[];
// }

// type SpecificationFilter =
//   | "all"
//   | "included"
//   | "addon";

// function getSpecificationGroup(label: string) {
//   const normalized = label.toLowerCase();

//   if (
//     normalized.includes("website type") ||
//     normalized.includes("number of pages") ||
//     normalized.includes("technology") ||
//     normalized.includes("customisation")
//   ) {
//     return "Package Overview";
//   }

//   if (
//     normalized.includes("responsive") ||
//     normalized.includes("seo") ||
//     normalized.includes("browser")
//   ) {
//     return "Design & Performance";
//   }

//   if (
//     normalized.includes("contact") ||
//     normalized.includes("whatsapp") ||
//     normalized.includes("crm") ||
//     normalized.includes("dashboard")
//   ) {
//     return "Lead & Contact Tools";
//   }

//   if (
//     normalized.includes("support") ||
//     normalized.includes("hosting") ||
//     normalized.includes("domain") ||
//     normalized.includes("delivery")
//   ) {
//     return "Delivery & Support";
//   }

//   return "Additional Details";
// }

// export default function ProductSpecifications({
//   specifications,
// }: ProductSpecificationsProps) {
//   const [activeFilter, setActiveFilter] =
//     useState<SpecificationFilter>("all");

//   const filteredSpecifications = useMemo(() => {
//     if (activeFilter === "all") {
//       return specifications;
//     }

//     return specifications.filter(
//       (specification) =>
//         specification.badge === activeFilter,
//     );
//   }, [activeFilter, specifications]);

//   const groupedSpecifications = useMemo(() => {
//     return filteredSpecifications.reduce<
//       Record<string, ProductSpecification[]>
//     >((groups, specification) => {
//       const group = getSpecificationGroup(
//         specification.label,
//       );

//       if (!groups[group]) {
//         groups[group] = [];
//       }

//       groups[group].push(specification);

//       return groups;
//     }, {});
//   }, [filteredSpecifications]);

//   return (
//     <section
//       className="product-specifications-section"
//       id="technical-specifications"
//     >
//       <div className="product-section-inner">

//         <div className="product-specifications-heading">
//           <h2>Technical Specifications</h2>

//           <p>
//             Important technical and delivery details for this
//             website package
//           </p>
//         </div>

//         <div className="product-specification-toolbar">

//           <div className="product-specification-filters">
//             <button
//               type="button"
//               className={
//                 activeFilter === "all" ? "active" : ""
//               }
//               onClick={() => setActiveFilter("all")}
//             >
//               All
//             </button>

//             <button
//               type="button"
//               className={
//                 activeFilter === "included"
//                   ? "active"
//                   : ""
//               }
//               onClick={() =>
//                 setActiveFilter("included")
//               }
//             >
//               Included
//             </button>

//             <button
//               type="button"
//               className={
//                 activeFilter === "addon"
//                   ? "active"
//                   : ""
//               }
//               onClick={() => setActiveFilter("addon")}
//             >
//               Add-On
//             </button>
//           </div>

//           <div className="product-specification-legend">
//             <span className="specification-legend included">
//               ✓ Included
//             </span>

//             <span className="specification-legend addon">
//               Add-On
//             </span>
//           </div>

//         </div>

//         {filteredSpecifications.length > 0 ? (
//           <div className="product-specification-groups">

//             {Object.entries(
//               groupedSpecifications,
//             ).map(([group, items]) => (
//               <div
//                 className="product-specification-group"
//                 key={group}
//               >
//                 <div className="product-specification-group-header">

//                   <span
//                     className="product-specification-group-icon"
//                     aria-hidden="true"
//                   >
//                     ◇
//                   </span>

//                   <h3>{group}</h3>

//                   <span className="product-specification-group-count">
//                     {items.length}{" "}
//                     {items.length === 1
//                       ? "item"
//                       : "items"}
//                   </span>

//                 </div>

//                 <div className="product-specification-group-body">

//                   {items.map((specification) => (
//                     <div
//                       className="product-specification-row"
//                       key={specification.label}
//                     >
//                       <span className="product-specification-label">
//                         {specification.label}
//                       </span>

//                       {specification.badge ? (
//                         <span
//                           className={
//                             specification.badge ===
//                             "included"
//                               ? "product-specification-status included"
//                               : "product-specification-status addon"
//                           }
//                         >
//                           {specification.value}
//                         </span>
//                       ) : (
//                         <span className="product-specification-value">
//                           {specification.value}
//                         </span>
//                       )}

//                     </div>
//                   ))}

//                 </div>
//               </div>
//             ))}

//           </div>
//         ) : (
//           <div className="product-specification-empty">
//             No specifications match this filter.
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

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
  | "free"
  | "addon";

type SpecificationGroup =
  | "Package Overview"
  | "Design & Performance"
  | "Portfolio & Content"
  | "Lead & Contact Tools"
  | "Domain, Hosting & Delivery"
  | "Optional Upgrades & Support";

interface GroupConfig {
  name: SpecificationGroup;
  icon: string;
}

const groupOrder: GroupConfig[] = [
  {
    name: "Package Overview",
    icon: "◇",
  },
  {
    name: "Design & Performance",
    icon: "▯",
  },
  {
    name: "Portfolio & Content",
    icon: "▧",
  },
  {
    name: "Lead & Contact Tools",
    icon: "□",
  },
  {
    name: "Domain, Hosting & Delivery",
    icon: "T",
  },
  {
    name: "Optional Upgrades & Support",
    icon: "☆",
  },
];

function normalizeLabel(label: string) {
  return label.toLowerCase().trim();
}

function isFreeSpecification(
  specification: ProductSpecification,
) {
  const value = specification.value
    .toLowerCase()
    .trim();

  return (
    value === "free" ||
    value.startsWith("free ") ||
    value.includes(" free")
  );
}

function getSpecificationFilterType(
  specification: ProductSpecification,
): Exclude<SpecificationFilter, "all"> | "plain" {
  if (isFreeSpecification(specification)) {
    return "free";
  }

  if (specification.badge === "included") {
    return "included";
  }

  if (specification.badge === "addon") {
    return "addon";
  }

  return "plain";
}

function getSpecificationGroup(
  specification: ProductSpecification,
): SpecificationGroup {
  const normalized = normalizeLabel(
    specification.label,
  );

  /*
   * OPTIONAL UPGRADES
   */
  if (
    normalized.includes("ai chatbot") ||
    normalized.includes("ai assistant") ||
    normalized.includes("crm") ||
    normalized.includes("cost calculator") ||
    normalized.includes("calculator") ||
    normalized.includes("website support")
  ) {
    return "Optional Upgrades & Support";
  }

  /*
   * DOMAIN / HOSTING / DELIVERY
   */
  if (
    normalized.includes("domain") ||
    normalized.includes("hosting") ||
    normalized.includes("deployment")
  ) {
    return "Domain, Hosting & Delivery";
  }

  /*
   * LEAD / CONTACT
   */
  if (
    normalized.includes("contact form") ||
    normalized.includes("whatsapp") ||
    normalized.includes("call integration") ||
    normalized.includes("google maps") ||
    normalized.includes("consultation enquiry") ||
    normalized.includes("project enquiry") ||
    normalized.includes("tour enquiry") ||
    normalized.includes("appointment")
  ) {
    return "Lead & Contact Tools";
  }

  /*
   * DESIGN / PERFORMANCE
   */
  if (
    normalized.includes("responsive") ||
    normalized.includes("mobile optimization") ||
    normalized.includes("seo") ||
    normalized.includes("browser compatibility") ||
    normalized.includes("fast loading") ||
    normalized.includes("performance")
  ) {
    return "Design & Performance";
  }

  /*
   * PACKAGE OVERVIEW
   */
  if (
    normalized.includes("website type") ||
    normalized.includes("number of pages") ||
    normalized === "pages" ||
    normalized.includes("technology") ||
    normalized.includes("customisation") ||
    normalized.includes("customization")
  ) {
    return "Package Overview";
  }

  /*
   * EVERYTHING PRODUCT / CONTENT RELATED
   */
  return "Portfolio & Content";
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
        getSpecificationFilterType(specification) ===
        activeFilter,
    );
  }, [activeFilter, specifications]);

  const groupedSpecifications = useMemo(() => {
    const groups = new Map<
      SpecificationGroup,
      ProductSpecification[]
    >();

    groupOrder.forEach(({ name }) => {
      groups.set(name, []);
    });

    filteredSpecifications.forEach(
      (specification) => {
        const group =
          getSpecificationGroup(specification);

        groups.get(group)?.push(specification);
      },
    );

    return groupOrder
      .map(({ name, icon }) => ({
        name,
        icon,
        items: groups.get(name) ?? [],
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredSpecifications]);

  return (
    <section
      className="product-specifications-section"
      id="technical-specifications"
    >
      <div className="product-section-inner">

        {/* HEADING */}
        <div className="product-specifications-heading">
          <h2>
            Technical Specifications
          </h2>

          <p>
            Important technical and delivery details for this
            website package
          </p>
        </div>

        {/* FILTER + LEGEND */}
        <div className="product-specification-toolbar">

          <div className="product-specification-filters">

            <button
              type="button"
              className={
                activeFilter === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("all")
              }
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
                activeFilter === "free"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("free")
              }
            >
              Free
            </button>

            <button
              type="button"
              className={
                activeFilter === "addon"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("addon")
              }
            >
              Add-On
            </button>

          </div>

          <div className="product-specification-legend">

            <span className="specification-legend included">
              ✓ Included
            </span>

            <span className="specification-legend free">
              Free
            </span>

            <span className="specification-legend addon">
              Add-On
            </span>

          </div>

        </div>

        {/* GROUPS */}
        {groupedSpecifications.length > 0 ? (
          <div className="product-specification-groups">

            {groupedSpecifications.map(
              ({ name, icon, items }) => (
                <article
                  className="product-specification-group"
                  key={name}
                >

                  <div className="product-specification-group-header">

                    <span
                      className="product-specification-group-icon"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>

                    <h3>{name}</h3>

                    <span className="product-specification-group-count">
                      {items.length}{" "}
                      {items.length === 1
                        ? "item"
                        : "items"}
                    </span>

                  </div>

                  <div className="product-specification-group-body">

                    {items.map((specification) => {
                      const type =
                        getSpecificationFilterType(
                          specification,
                        );

                      return (
                        <div
                          className="product-specification-row"
                          key={`${name}-${specification.label}`}
                        >

                          <span className="product-specification-label">
                            {specification.label}
                          </span>

                          {type === "included" && (
                            <span className="product-specification-status included">
                              ✓ Included
                            </span>
                          )}

                          {type === "free" && (
                            <span className="product-specification-status free">
                              Free
                            </span>
                          )}

                          {type === "addon" && (
                            <span className="product-specification-status addon">
                              Add-On
                            </span>
                          )}

                          {type === "plain" && (
                            <span className="product-specification-value">
                              {specification.value}
                            </span>
                          )}

                        </div>
                      );
                    })}

                  </div>

                </article>
              ),
            )}

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