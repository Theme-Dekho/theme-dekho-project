import type { ProductAddon } from "@/constants/product-details";

interface ProductPackageProps {
  addons: ProductAddon[];
}

const suitableFor = [
  "Interior Design Studio",
  "Interior Designer",
  "Home Interior Designer",
  "Residential Interior Designer",
  "Commercial Interior Designer",
  "Office Interior Designer",
  "Modular Kitchen Designer",
  "Turnkey Interior Designer",
  "Luxury Interior Designer",
  "Interior Decorator",
  "Home Renovation Studio",
  "Interior Architecture Studio",
];

// const addonDetails: Record<
//   string,
//   {
//     chargeText: string;
//     description: string;
//     bullets: string[];
//   }
// > = {
//   "interior-cost-calculator": {
//     chargeText: "+ Actual charges apply",
//     description:
//       "Lets visitors estimate interior cost based on their project requirements.",
//     bullets: [
//       "Property type & area",
//       "Room type & interior style",
//       "Material / finish selection",
//     ],
//   },

//   "crm-integration": {
//     chargeText: "+ Actual charges apply",
//     description:
//       "Connects website enquiries to your CRM for lead management and follow-up.",
//     bullets: [
//       "Lead capture & tracking",
//       "Follow-up management",
//       "Enquiry pipeline",
//     ],
//   },

//   "ai-chatbot": {
//     chargeText: "+ Actual charges apply",
//     description:
//       "Gives instant responses to common interior-design questions.",
//     bullets: [
//       "Services & project process",
//       "Design styles & enquiries",
//       "Studio timings & location",
//     ],
//   },

//   "domain-hosting": {
//     chargeText:
//       "Setup FREE · purchase charges apply",
//     description:
//       "Only actual domain registration and hosting purchase cost applies.",
//     bullets: [
//       "Domain registration",
//       "Hosting purchase",
//       "Setup, config & deployment free",
//     ],
//   },

//   "multi-language-website": {
//     chargeText: "+ Actual charges apply",
//     description:
//       "Serves your content in more than one language for wider reach.",
//     bullets: [
//       "Hindi + English versions",
//       "Language switcher in header",
//       "Regional language on request",
//     ],
//   },

//   "appointment-scheduler": {
//     chargeText: "+ Actual charges apply",
//     description:
//       "Lets clients book a design consultation slot directly from your website.",
//     bullets: [
//       "Calendar with available slots",
//       "Email & WhatsApp confirmation",
//       "Reduces back-and-forth calls",
//     ],
//   },
// };

const addonDetails: Record<
  string,
  {
    chargeText: string;
    description: string;
    bullets: string[];
  }
> = {
  calculator: {
    chargeText: "+ Actual charges apply",
    description:
      "Lets visitors estimate interior cost based on their project requirements.",
    bullets: [
      "Property type & area",
      "Room type & interior style",
      "Material / finish selection",
    ],
  },

  crm: {
    chargeText: "+ Actual charges apply",
    description:
      "Connects website enquiries to your CRM for lead management and follow-up.",
    bullets: [
      "Lead capture & tracking",
      "Follow-up management",
      "Enquiry pipeline",
    ],
  },

  boq: {
    chargeText: "+ Actual charges apply",
    description:
      "Helps create and manage Bills of Quantities for interior projects.",
    bullets: [
      "Project quantity planning",
      "Material and work breakdown",
      "BOQ management",
    ],
  },

  "ai-chatbot": {
    chargeText: "+ Actual charges apply",
    description:
      "Gives instant responses to common interior-design questions.",
    bullets: [
      "Services & project process",
      "Design styles & enquiries",
      "Studio timings & location",
    ],
  },
};

export default function ProductPackage({
  addons,
}: ProductPackageProps) {
  return (
    <section className="product-package-section">
      <div className="product-section-inner">

        <div className="product-package-heading">
          <h2>
            Add-On Features &amp; Suitable For
          </h2>

          <p>
            Optional upgrades you can attach, and the
            businesses this website is built for
          </p>
        </div>

        <div className="product-package-grid">

          {/* ADD-ONS */}
          <div className="product-package-column addons-column">

            <div className="product-package-column-header">
              <span
                className="package-header-icon"
                aria-hidden="true"
              >
                ★
              </span>

              <strong>
                Available Add-On Features
              </strong>

              <span className="package-header-count">
                {addons.length} optional
              </span>
            </div>

            <div className="product-package-column-body">

              {addons.map((addon) => {
                const details =
                  addonDetails[addon.id];

                return (
                  <article
                    className="addon-item"
                    key={addon.id}
                  >
                    <div
                      className="addon-item-icon"
                      aria-hidden="true"
                    >
                      {addon.icon}
                    </div>

                    <div className="addon-item-content">
                      <h3>
                        {addon.name}
                      </h3>

                      <p className="addon-charge-text">
                        {details?.chargeText ??
                          "+ Actual charges apply"}
                      </p>
                    </div>

                    <div className="addon-details-wrap">

                      <button
                        type="button"
                        className="addon-details-button"
                      >
                        <span
                          className="addon-details-icon"
                          aria-hidden="true"
                        >
                          ⓘ
                        </span>

                        Details
                      </button>

                      {details && (
                        <div
                          className="addon-tooltip"
                          role="tooltip"
                        >
                          <strong>
                            {addon.name}
                          </strong>

                          <p>
                            {details.description}
                          </p>

                          <ul>
                            {details.bullets.map(
                              (bullet) => (
                                <li key={bullet}>
                                  {bullet}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                    </div>
                  </article>
                );
              })}

              <div className="product-package-note">
                <strong>
                  Nothing is charged upfront.
                </strong>{" "}
                Add-ons are fully optional and can
                be attached anytime — even months
                after your website goes live.
              </div>

            </div>
          </div>

          {/* SUITABLE FOR */}
          <div className="product-package-column suitable-column">

            <div className="product-package-column-header">
              <span
                className="package-header-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <strong>
                Suitable For
              </strong>

              <span className="package-header-count">
                {suitableFor.length} business types
              </span>
            </div>

            <div className="product-package-column-body">

              <div className="suitable-grid">
                {suitableFor.map((item) => (
                  <div
                    className="suitable-item"
                    key={item}
                  >
                    <span
                      className="suitable-check"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <div className="product-suitable-note">
                <strong>
                  Not sure if it fits your business?
                </strong>{" "}
                Share your requirement — our team
                will confirm suitability and suggest
                the right customisation within
                30 minutes.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}