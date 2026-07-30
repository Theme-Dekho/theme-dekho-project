export default function FeaturesGrid() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-eyebrow">Why Use AI Builder</div>
        <h2 className="section-title">Everything you&apos;d expect, none of the wait</h2>

        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-icon">⚡</div>
            <h3>Instant Draft</h3>
            <p>A full multi-page website generated in under a minute — no blank canvas.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Every generated layout is responsive by default, on phone, tablet, or desktop.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🔍</div>
            <h3>SEO Friendly</h3>
            <p>Clean structure and AI-written meta content, built to help you get found.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🎨</div>
            <h3>Fully Editable</h3>
            <p>Change any text, image, or section afterwards in the drag-and-drop editor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
