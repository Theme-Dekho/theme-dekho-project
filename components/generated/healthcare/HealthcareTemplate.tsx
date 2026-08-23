import type { CSSProperties } from "react";

import type {
  HealthcareTemplateData,
} from "./types";

import styles from "./HealthcareTemplate.module.css";

type HealthcareTemplateProps = {
  data: HealthcareTemplateData;
};

export default function HealthcareTemplate({
  data,
}: HealthcareTemplateProps) {
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
          <div className={styles.brand}>
            {data.businessName}
          </div>

          <a
            href="#contact"
            className={styles.headerCta}
          >
            Book Appointment
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Healthcare
              </span>

              <h1>{data.tagline}</h1>

              <p>{data.description}</p>

              <a
                href="#services"
                className={styles.primaryButton}
              >
                Explore Services
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
        id="services"
        className={styles.section}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              Our Services
            </span>

            <h2>Healthcare Services</h2>
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

      {data.doctors.length > 0 && (
        <section className={styles.doctorsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>
                Medical Team
              </span>

              <h2>Our Doctors</h2>
            </div>

            <div className={styles.doctorGrid}>
              {data.doctors.map(
                (doctor, index) => (
                  <article
                    key={`${doctor.name}-${index}`}
                    className={styles.doctorCard}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                    />

                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialization}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div>
              <span className={styles.eyebrow}>
                Patient Journey
              </span>

              <h2>How It Works</h2>

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
                alt="Healthcare process"
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
                About Us
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

              <h2>Patient Stories</h2>
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