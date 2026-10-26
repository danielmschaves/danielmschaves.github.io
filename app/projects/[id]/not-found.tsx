import Button from "@/components/Button";

export default function ProjectNotFound() {
  return (
    <div className="lg-container">
      <section className="lg-hero">
        <p className="lg-hero__eyebrow lg-mono">NOT FOUND</p>
        <h1 className="display-l" style={{ margin: 0, fontSize: "clamp(56px, 8vw, 84px)" }}>
          404
        </h1>
        <div className="lg-hero__foot" style={{ marginTop: 28 }}>
          <p className="lg-hero__lead">This case study doesn’t exist or has moved.</p>
          <div className="lg-actions">
            <Button variant="link" href="/#work">
              All work →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
