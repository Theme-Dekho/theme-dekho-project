import { testimonials } from "@/constants/section";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";

export default function Testimonial() {
  return (
    <section className="section">
      <Container>
        <div className="section-head">
          <div>
            <div className="section-label">Client Reviews</div>
            <div className="section-title">What Our Clients Say</div>
          </div>
        </div>

        {/* <div className="test-grid">
          {testimonials.map((t) => (
            <Card variant="test" key={t.name}> */}
            {/* <div className="test-grid">
              {[...testimonials, ...testimonials].map((t, index) => ( */}
              <div className="test-carousel">
                <div className="test-grid">
                  {[...testimonials, ...testimonials].map((t, index) => (
                <Card variant="test" key={`${t.name}-${index}`}>
              <div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="test-text">&quot;{t.text}&quot;</p>
              <div className="test-author">
                <div className="test-av" style={{ background: t.avatarColor }}>
                  {t.initials}
                </div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
