interface CtaBannerProps {
  onStartBuilding: () => void;
}

export default function CtaBanner({ onStartBuilding }: CtaBannerProps) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="cta-banner">
        <h2>The work is only as good as the thinking before it.</h2>
        <p>
          You already know what you&apos;re trying to build. Describe it. Theme Dekho&apos;s AI handles everything
          after that.
        </p>
        <button className="btn btn-generate" style={{ fontSize: 15, padding: "14px 30px" }} onClick={onStartBuilding}>
          ✨ Start Building Free
        </button>
      </div>
    </section>
  );
}
