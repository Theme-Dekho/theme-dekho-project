import type { CSSProperties } from "react";

import type {
  RealEstateTemplateData,
} from "./types";

import styles from "./RealEstateTemplate.module.css";

type RealEstateTemplateProps = {
  data: RealEstateTemplateData;
};

export default function RealEstateTemplate({
  data,
}: RealEstateTemplateProps) {
  const cssVariables = {
    "--background": data.colors.background,
    "--background-soft": data.colors.backgroundSoft,
    "--primary": data.colors.primary,
    "--secondary": data.colors.secondary,
    "--accent": data.colors.accent,
    "--text": data.colors.text,
  } as CSSProperties;

  return (
    <main
      className={styles.page}
      style={cssVariables}
    >


      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brandWrap}>
            <div className={styles.brand}>
              {data.businessName}
            </div>

            <span className={styles.brandTagline}>
              Property & Real Estate
            </span>
          </div>

          <nav
            className={styles.nav}
            aria-label="Real estate navigation"
          >
            {data.properties.length > 0 && (
              <a href="#properties">
                Properties
              </a>
            )}

            <a href="#services">
              Services
            </a>

            <a href="#process">
              Process
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>
          </nav>

          <div className={styles.headerActions}>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className={styles.phoneLink}
              >
                {data.phone}
              </a>
            )}

            <a
              href="#contact"
              className={styles.headerCta}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Real Estate
              </span>

              <h1>{data.tagline}</h1>

              <p>{data.description}</p>

              <a
                href={
                  data.properties.length > 0
                    ? "#properties"
                    : "#services"
                }
                className={styles.primaryButton}
              >
                Explore Properties
              </a>
            </div>

            <div className={styles.heroVisual}>
              <img
                src={data.heroImage}
                alt={data.businessName}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        <div className={styles.container}>
          <div className={styles.highlightGrid}>
            {data.highlights.map(
              (item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className={styles.highlight}
                >
                  <strong>{item.title}</strong>
                  <span>{item.label}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {data.properties.length > 0 && (
        <section
          id="properties"
          className={styles.section}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>
                Featured Properties
              </span>

              <h2>Explore Properties</h2>
            </div>

            <div className={styles.propertyGrid}>
              {data.properties.map(
                (property, index) => (
                  <article
                    key={`${property.title}-${index}`}
                    className={styles.propertyCard}
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                    />

                    <div className={styles.propertyContent}>
                      <span>
                        {property.propertyType}
                      </span>

                      <h3>{property.title}</h3>

                      <p>{property.location}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section
        id="services"
        className={styles.servicesSection}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              What We Do
            </span>

            <h2>Real Estate Services</h2>
          </div>

          <div className={styles.serviceGrid}>
            {data.services.map(
              (service, index) => (
                <article
                  key={`${service.title}-${index}`}
                  className={styles.serviceCard}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div>
              <span className={styles.eyebrow}>
                Our Process
              </span>

              <h2>How We Work</h2>

              <div className={styles.processList}>
                {data.process.map(
                  (step, index) => (
                    <div
                      key={`${step.title}-${index}`}
                      className={styles.processItem}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className={styles.processVisual}>
              <img
                src={data.processImage}
                alt="Real estate process"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <img
              src={data.aboutImage}
              alt={data.aboutTitle}
            />

            <div>
              <span className={styles.eyebrow}>
                About
              </span>

              <h2>{data.aboutTitle}</h2>

              <p>{data.aboutDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {data.testimonials.length > 0 && (
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>
                Testimonials
              </span>

              <h2>Client Stories</h2>
            </div>

            <div className={styles.testimonialGrid}>
              {data.testimonials.map(
                (testimonial, index) => (
                  <blockquote
                    key={`${testimonial.name}-${index}`}
                    className={styles.testimonial}
                  >
                    <p>{testimonial.text}</p>

                    <footer>
                      {testimonial.name}
                    </footer>
                  </blockquote>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <footer
        id="contact"
        className={styles.footer}
      >
        <div className={styles.container}>
          <h2>{data.businessName}</h2>

          <div className={styles.contactDetails}>
            {data.phone && (
              <span>{data.phone}</span>
            )}

            {data.email && (
              <span>{data.email}</span>
            )}

            {data.address && (
              <span>{data.address}</span>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}