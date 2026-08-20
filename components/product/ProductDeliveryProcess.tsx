const deliverySteps = [
  {
    number: 1,
    title: "Share Requirement",
    description:
      "Send your business details, logo and the pages you need. Our team calls you to confirm the scope.",
    day: "Day 0",
  },
  {
    number: 2,
    title: "Confirm & Book",
    description:
      "Approve the quote and book the package. Domain and hosting are arranged at actual cost.",
    day: "Day 1",
  },
  {
    number: 3,
    title: "Content & Design",
    description:
      "You share project photos and text. We apply your branding, colours and content to the design.",
    day: "Day 2–5",
  },
  {
    number: 4,
    title: "Review & Changes",
    description:
      "You review the staging link and request changes. We refine until the website matches your studio.",
    day: "Day 6–8",
  },
  {
    number: 5,
    title: "Go Live",
    description:
      "We deploy on your domain, connect WhatsApp and enquiry forms, and hand over full access.",
    day: "Day 9–10",
  },
];

export default function ProductDeliveryProcess() {
  return (
    <section className="product-delivery-section">
      <div className="product-section-inner">

        <div className="product-delivery-heading">
          <h2>How Your Website Goes Live</h2>

          <p>
            A clear 5-step process from enquiry to launch —
            usually completed in 7 to 10 working days
          </p>
        </div>

        <div className="product-delivery-steps">
          {deliverySteps.map((step) => (
            <article
              className="product-delivery-step"
              key={step.number}
            >
              <div className="product-delivery-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <span className="product-delivery-day">
                {step.day}
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}