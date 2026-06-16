import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { DemoRequestCard } from "@/components/Mockups";
import { PageHero } from "@/components/PageHero";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  globalFaq,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Hotelsoftware FAQ | Fragen zu Hotel PMS, Cloud PMS und PMSLogic",
  description:
    "FAQ zu PMSLogic: Hotel PMS, Hotelsoftware, kostenlose Demo, Housekeeping, Booking Engine, Channel Manager, PMSAI, Cloud, mobile Nutzung, Datenübernahme und Support.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <JsonLd id="faq-jsonld" data={faqSchema(globalFaq)} />
      <JsonLd
        id="faq-webpage-jsonld"
        data={webPageSchema({
          name: "Hotelsoftware FAQ",
          description:
            "FAQ zu PMSLogic, Hotel PMS, Cloud PMS, Housekeeping, Booking Engine, Channel Manager, PMSAI, Datenübernahme und Support.",
          path: "/faq"
        })}
      />
      <JsonLd
        id="faq-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "FAQ", path: "/faq" }
        ])}
      />

      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen zu PMSLogic und moderner Hotelsoftware"
        text="Antworten zu Hotel PMS, PMS Software Hotel, Cloud PMS Hotel, Housekeeping, Channel-Manager-Prozessen, PMSAI, Datenübernahme, mobiler Nutzung und persönlichem Support."
        secondaryHref="/demo"
        secondaryLabel="Kostenlose Demo anfragen"
      >
        <DemoRequestCard />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Antworten</p>
              <h2>Alles Wichtige vor der Demo</h2>
              <p>
                Die folgenden Fragen helfen bei der Einordnung, ob PMSLogic zu
                Ihren Abläufen, Ihrer Unterkunftsart und Ihrer aktuellen
                Systemlandschaft passt.
              </p>
            </div>
            <Link href="/funktionen" className="btn btn-secondary">
              Funktionen ansehen
            </Link>
          </div>
          <FaqList items={globalFaq} />
        </div>
      </section>

      <CTASection
        title="Ihre Frage ist noch offen?"
        text="Stellen Sie Ihre Frage direkt in der Demo-Anfrage. Wir melden uns persönlich zurück und gehen auf Ihren Hotelbetrieb ein."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      />
    </>
  );
}
