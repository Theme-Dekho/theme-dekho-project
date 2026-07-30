import type { FeatureStripItem } from "@/types/category";

interface FeatureStripProps {
  items: FeatureStripItem[];
}

export default function FeatureStrip({
  items,
}: FeatureStripProps) {
  return (
    <section
      className="feat-strip"
      aria-label="Website features"
    >
      <div className="inner">
        {items.map((item) => (
          <article
            className="fs-item"
            key={item.title}
          >
            <span
              className="fs-icon"
              aria-hidden="true"
            >
              {item.icon}
            </span>

            <div className="fs-text">
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}