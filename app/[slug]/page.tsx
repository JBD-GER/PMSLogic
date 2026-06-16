import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { HousekeepingMockup, RevenueMockup } from "@/components/Mockups";
import { PageHero } from "@/components/PageHero";
import {
  audiencePages,
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

type AudienceParams = {
  params: Promise<{
    slug: string;
  }>;
};

function getAudiencePage(slug: string) {
  return audiencePages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return audiencePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params
}: AudienceParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getAudiencePage(slug);

  if (!page) {
    return createMetadata({
      title: "PMSLogic | Moderne Hotelsoftware",
      description:
        "PMSLogic ist moderne Hotelsoftware für Reservierungen, Frontdesk, Housekeeping, Rechnungen, Integrationen und PMSAI.",
      path: "/"
    });
  }

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`
  });
}

export default async function AudiencePage({ params }: AudienceParams) {
  const { slug } = await params;
  const page = getAudiencePage(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = audiencePages.filter((item) => item.slug !== page.slug);

  return (
    <>
      <JsonLd id={`${page.slug}-software-jsonld`} data={softwareSchema()} />
      <JsonLd
        id={`${page.slug}-webpage-jsonld`}
        data={webPageSchema({
          name: page.title,
          description: page.metaDescription,
          path: `/${page.slug}`
        })}
      />
      <JsonLd id={`${page.slug}-faq-jsonld`} data={faqSchema(page.faq)} />
      <JsonLd
        id={`${page.slug}-breadcrumb-jsonld`}
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: page.title, path: `/${page.slug}` }
        ])}
      />

      <PageHero
        eyebrow="Zielgruppe"
        title={page.title}
        text={page.intro}
        secondaryHref="/funktionen"
        secondaryLabel="Funktionen ansehen"
      >
        <HousekeepingMockup />
      </PageHero>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Vorteile</p>
            <h2>Warum PMSLogic zu {page.label} passt</h2>
            <p>
              PMSLogic verbindet die tägliche Arbeit im Frontdesk,
              Reservierungsmanagement, Housekeeping, in der Abrechnung und in
              der Gästekommunikation. So entsteht ein klares Hotel PMS für
              professionelle digitale Hotelverwaltung.
            </p>
            <ul className="check-list">
              {page.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <RevenueMockup />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Relevante PMSLogic Module</p>
              <h2>Funktionen für Ihren Unterkunftstyp</h2>
              <p>
                Die folgenden Module sind für diese Zielgruppe besonders
                relevant. In der Demo stimmen wir ab, welche Abläufe für Ihren
                Betrieb Priorität haben.
              </p>
            </div>
          </div>
          <div className="benefit-grid">
            {page.benefits.map((benefit) => (
              <article className="benefit-card" key={benefit}>
                <h3>{benefit}</h3>
                <p>
                  Dieses Modul hilft, Reservierungen, Gäste, Zimmer, Team und
                  Verwaltung im Alltag nachvollziehbarer zu verbinden.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-panel">
          <p className="eyebrow">Kurze Erklärung</p>
          <h2>{page.title} mit PMSLogic</h2>
          {page.seoText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Fragen zu {page.title}</h2>
              <p>
                Kurze Antworten zu Einsatz, Einführung und typischen Abläufen
                für diese Unterkunftsart.
              </p>
            </div>
          </div>
          <FaqList items={page.faq} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Weitere Zielgruppen</p>
              <h2>PMSLogic für unterschiedliche Hotelbetriebe</h2>
              <p>
                Jede Unterkunft hat eigene Abläufe. PMSLogic bleibt flexibel,
                ohne die operative Klarheit zu verlieren.
              </p>
            </div>
          </div>
          <div className="target-grid">
            {relatedPages.map((related) => (
              <Link
                href={`/${related.slug}`}
                className="target-card"
                key={related.slug}
              >
                <div>
                  <h3>{related.title}</h3>
                  <p>{related.intro}</p>
                </div>
                <span>Mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${page.title} live erleben`}
        text="Fordern Sie eine kostenlose Demo an. Wir zeigen PMSLogic anhand Ihrer Unterkunft, Ihrer Zimmerstruktur und Ihrer aktuellen Prozesse."
        secondaryHref="/integrationen"
        secondaryLabel="Integrationen ansehen"
      />
    </>
  );
}
