import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";

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
          <TrackedLink
            href="/demo"
            className="btn btn-secondary"
            eventName="Demo CTA Clicked"
            eventProperties={{
              placement: "not_found",
              cta_label: "Demo anfragen"
            }}
          >
            Demo anfragen
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
