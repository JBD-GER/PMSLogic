import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, createMetadata } from "@/lib/content";

export const metadata = createMetadata({
  title: "Vielen Dank | PMSLogic",
  description:
    "Vielen Dank für Ihre Anfrage. PMSLogic meldet sich zeitnah persönlich zurück.",
  path: "/danke",
  index: false
});

export default function DankePage() {
  return (
    <>
      <JsonLd
        id="thanks-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Vielen Dank", path: "/danke" }
        ])}
      />
      <section className="page-hero">
        <div className="container form-success thank-you-panel">
          <CheckCircle2 aria-hidden="true" />
          <h1>Vielen Dank.</h1>
          <p>
            Wir haben Ihre Anfrage erhalten und melden uns zeitnah persönlich
            bei Ihnen.
          </p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary">
              Zur Startseite
            </Link>
            <Link href="/ratgeber" className="btn btn-secondary">
              Ratgeber lesen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
