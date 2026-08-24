import type { CSSProperties } from "react";

import type {
  InteriorTemplateData,
} from "./types";

import styles from "./InteriorTemplate.module.css";

type InteriorTemplateProps = {
  data: InteriorTemplateData;
};

export default function InteriorTemplate({
  data,
}: InteriorTemplateProps) {
  const cssVariables = {
    "--background": data.colors.background,
    "--background-soft": data.colors.backgroundSoft,
    "--accent": data.colors.accent,
    "--secondary": data.colors.secondary,
    "--text": data.colors.text,
  } as CSSProperties;

  return (
    <main
      className={styles.page}
      style={cssVariables}
    >
      {/* <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            {data.businessName}
          </div>

          <a
            href="#contact"
            className={styles.headerCta}
          >
            Contact
          </a>
        </div>
      </header> */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brandWrap}>
            <div className={styles.brand}>
              {data.businessName}
            </div>

            <span className={styles.brandTagline}>
              Interior & Architecture Studio
            </span>
          </div>

          <nav
            className={styles.nav}
            aria-label="Interior navigation"
          >
            <a href="#projects">
              Projects
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
              Get Consultation
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Interior & Architecture
              </span>

              <h1>{data.tagline}</h1>

              <p>
                {data.description}
              </p>

              <a
                href="#projects"
                className={styles.primaryButton}
              >
                View Projects
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

      <section
        id="about"
        className={styles.section}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              Selected Work
            </span>

            <h2>Our Projects</h2>
          </div>

          <div className={styles.projectGrid}>
            {data.projects.map(
              (project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className={styles.projectCard}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <h3>{project.title}</h3>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section 
      id="process"
      className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div>
              <span className={styles.eyebrow}>
                How We Work
              </span>

              <h2>Our Process</h2>

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
                alt="Interior design process"
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