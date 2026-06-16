import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container legal-content">
        <p className="eyebrow">404</p>
        <h1>Seite nicht gefunden</h1>
        <p className="lead">
          Diese Seite existiert nicht oder wurde verschoben. Über die
          Startseite, die Funktionen oder die Demo-Anfrage finden Sie schnell
          zurück zu PMSLogic.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Zur Startseite
          </Link>
          <Link href="/demo" className="btn btn-secondary">
            Demo anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
