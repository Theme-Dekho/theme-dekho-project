import { whyChooseUs } from "@/constants/section";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";

export default function Features() {
  return (
    <section className="section alt">
      <Container>
        <div className="section-head">
          <div>
            <div className="section-label">Why Theme Dekho</div>
            <div className="section-title">Why Choose Us?</div>
            <div className="section-sub">Professional digital presence at the most affordable prices in India.</div>
          </div>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <Card variant="why" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
