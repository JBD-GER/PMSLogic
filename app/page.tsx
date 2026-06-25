import Link from "next/link";
import {
  BarChart3,
  BedDouble,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareText,
  ReceiptText
} from "lucide-react";
import { BlogImage } from "@/components/BlogImage";
import { CTASection } from "@/components/CTASection";
import { CompactFeatureGrid } from "@/components/FeatureSections";
import { FaqList } from "@/components/FaqList";
import {
  HeroHotelImage,
  HotelImageGrid,
  TabletSoftwareImage
} from "@/components/HotelImages";
import { JsonLd } from "@/components/JsonLd";
import { AIAssistantMockup } from "@/components/Mockups";
import {
  audiencePages,
  blogPosts,
  createMetadata,
  faqSchema,
  featureGroups,
  globalFaq,
  integrations,
  servicePages,
  softwareSchema,
  webPageSchema
} from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata = createMetadata({
  title: "PMSLogic Hotelsoftware | Modernes Hotel PMS für digitale Hotelverwaltung",
  description:
    "PMSLogic ist moderne Hotelsoftware für Reservierungen, Frontdesk, Housekeeping, Rechnungen, Gästekommunikation, Integrationen und PMSAI. Kostenlose Demo anfragen.",
  path: "/"
});

const benefits = [
  {
    title: "Ein klarer Arbeitsbereich",
    description:
      "Reservierungen, Gäste, Zimmer, Team und Abrechnung werden in einer modernen Hotel Verwaltungssoftware zusammengeführt."
  },
  {
    title: "Weniger Verwaltungsaufwand",
    description:
      "PMSLogic reduziert manuelle Übergaben, verstreute Notizen und doppelte Datenpflege im Hotelalltag."
  },
  {
    title: "Cloud PMS für flexible Teams",
    description:
      "Ob Frontdesk, Housekeeping oder Management: Wichtige Abläufe bleiben auch mobil und standortübergreifend sichtbar."
  },
  {
    title: "Professionell für viele Unterkunftsarten",
    description:
      "Geeignet für Hotelanlagen, Resorts, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen."
  },
  {
    title: "PMSAI als smarte Assistenz",
    description:
      "KI-Unterstützung hilft bei Gästemails, Reservierungszusammenfassungen, Aufgabenhinweisen und Upselling-Ideen."
  },
  {
    title: "Demo statt Sofortkauf",
    description:
      "PMSLogic wird persönlich vorgestellt. So sehen Sie vorab, wie die Hotelsoftware zu Ihren Prozessen passt."
  }
];

const operations = [
  {
    icon: CalendarCheck2,
    title: "Reservierung & Frontdesk",
    description:
      "Anfragen, Buchungen, Anreisen und Check-out bleiben in einem klaren Arbeitsfluss.",
    meta: "PMSReservierungen · PMSFrontdesk"
  },
  {
    icon: BedDouble,
    title: "Zimmer & Housekeeping",
    description:
      "Zimmerstatus, Reinigung, Aufgaben und Wartung werden für Rezeption und Team nachvollziehbar.",
    meta: "PMSHousekeeping · PMSAufgaben"
  },
  {
    icon: ReceiptText,
    title: "Rechnung & Verwaltung",
    description:
      "Abrechnung, Zahlungen, Dokumente und Meldeschein-Prozesse bleiben nah am Aufenthalt.",
    meta: "PMSRechnungen · PMSDokumente"
  },
  {
    icon: MessageSquareText,
    title: "Gäste & Kommunikation",
    description:
      "Nachrichten, Vorlagen, Upselling-Ideen und Gästekontext unterstützen persönlichen Service.",
    meta: "PMSGuest · PMSAI"
  },
  {
    icon: BarChart3,
    title: "Reporting & Revenue",
    description:
      "Auslastung, Umsatzentwicklung und Nachfragehinweise werden verständlich auswertbar.",
    meta: "PMSRevenue · PMSReporting"
  },
  {
    icon: ClipboardCheck,
    title: "Demo & Einführung",
    description:
      "Die Einführung wird an Unterkunftsart, Prozesse, Teamrollen und vorhandene Systeme angepasst.",
    meta: "Persönliche Demo · Setup"
  }
];

export default function HomePage() {
  const homeFaq = globalFaq.slice(0, 8);

  return (
    <>
      <JsonLd id="software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="home-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Hotelsoftware",
          description:
            "Moderne Hotelsoftware und Cloud Hotel PMS für Reservierungen, Frontdesk, Housekeeping, Rechnungen, Gästekommunikation, Integrationen und PMSAI.",
          path: "/",
          primaryImage: "/hero-images/reception-checkin.jpg"
        })}
      />
      <JsonLd id="home-faq-jsonld" data={faqSchema(homeFaq)} />

      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cloud PMS Hotel</p>
            <h1>PMSLogic Hotelsoftware</h1>
            <p className="claim">
              PMSLogic verbindet Reservierungen, Gäste, Zimmer, Team und
              Abrechnung in einer modernen Hotelsoftware - klar, cloudbasiert
              und bereit für die digitale Hotellerie.
            </p>
            <div className="hero-actions">
              <TrackedLink
                href="/demo"
                className="btn btn-primary"
                eventName="Demo CTA Clicked"
                eventProperties={{
                  placement: "home_hero_primary",
                  cta_label: "Kostenlose Demo anfragen"
                }}
              >
                Kostenlose Demo anfragen
              </TrackedLink>
              <Link href="/funktionen" className="btn btn-secondary">
                Funktionen ansehen
              </Link>
            </div>
            <div className="hero-proof" aria-label="PMSLogic Vorteile">
              {[
                "Hotel PMS Deutschland",
                "Hotelsoftware mit Housekeeping",
                "Hotelsoftware mit Rechnung",
                "PMSAI für smarte Prozesse"
              ].map((item) => (
                <span className="proof-pill" key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <HeroHotelImage />
        </div>
      </section>

      <section className="section-tight">
        <div className="container trust-strip" aria-label="PMSLogic Vertrauen">
          <div className="trust-item">
            <strong>Persönliche Einführung</strong>
            <span>Die Demo und Einführung orientieren sich an Ihrem Betrieb.</span>
          </div>
          <div className="trust-item">
            <strong>Für echte Hotelprozesse</strong>
            <span>Vom Frontdesk bis Housekeeping in einem klaren Workflow.</span>
          </div>
          <div className="trust-item">
            <strong>Moderne Cloud-Technologie</strong>
            <span>Für digitale Hotelverwaltung, mobile Teams und Wachstum.</span>
          </div>
          <div className="trust-item">
            <strong>Support auf Augenhöhe</strong>
            <span>Verständliche Begleitung statt anonymer Standardantworten.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Kernvorteile</p>
              <h2>Hotelmanagement Software für klare Abläufe</h2>
              <p>
                PMSLogic ist nicht nur ein Belegungsplan, sondern eine
                vollständige PMS Software Hotel für Reservierung, Frontdesk,
                Housekeeping, Rechnungen, Kommunikation und Auswertung.
              </p>
            </div>
            <TrackedLink
              href="/demo"
              className="btn btn-secondary"
              eventName="Demo CTA Clicked"
              eventProperties={{
                placement: "home_benefits",
                cta_label: "Hotelsoftware live erleben"
              }}
            >
              Hotelsoftware live erleben
            </TrackedLink>
          </div>
          <CompactFeatureGrid items={benefits} />
        </div>
      </section>

      <section className="section alt">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Hotelbereiche</p>
            <h2>Eine Software für Frontdesk, Gäste, Zimmer und Zusatzbereiche</h2>
            <p>
              PMSLogic denkt Hotelsoftware nicht nur vom Bildschirm aus,
              sondern vom Betrieb: Gäste kommen an, Zimmer werden vorbereitet,
              Teams koordinieren Aufgaben und Zusatzleistungen werden Teil des
              Aufenthalts.
            </p>
            <ul className="check-list">
              <li>Rezeption und Reservierungen im gleichen Arbeitsfluss</li>
              <li>Zimmer, Housekeeping und Gästewünsche sichtbar verbunden</li>
              <li>PMSSPA für Wellness, Termine und definierbare Zusatzbereiche</li>
              <li>Auswertung über Aufenthalte, Leistungen und operative Bereiche</li>
            </ul>
          </div>
          <HotelImageGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Leistungen</p>
              <h2>PMSLogic nach Hotelprozessen erklärt</h2>
              <p>
                Die Leistungsseiten zeigen nicht nur Funktionen, sondern echte
                Abläufe: Reservierung, Housekeeping, Rechnungen,
                Gästekommunikation, Integrationen, Reporting und KI.
              </p>
            </div>
            <Link href="/leistungen" className="btn btn-primary">
              Alle Leistungen ansehen
            </Link>
          </div>
          <div className="service-grid compact">
            {servicePages.slice(0, 4).map((service) => (
              <Link
                href={`/leistungen/${service.slug}`}
                className="service-card"
                key={service.slug}
              >
                <span className="service-card-eyebrow">{service.eyebrow}</span>
                <h3>{service.label}</h3>
                <p>{service.promise}</p>
                <strong>Leistung ansehen</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Funktionsübersicht</p>
              <h2>Vom Hotel Reservierungssystem bis zur Abrechnung</h2>
              <p>
                PMSLogic bündelt zentrale Module für den täglichen Betrieb,
                Online-Vertrieb, Gäste, Rechnungen, Reporting, Schnittstellen
                und KI-gestützte Automatisierung.
              </p>
            </div>
            <Link href="/funktionen" className="btn btn-primary">
              Alle PMS-Funktionen ansehen
            </Link>
          </div>
          <div className="benefit-grid">
            {featureGroups.slice(0, 6).map((group) => (
              <article className="benefit-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Funktion: PMSAI</p>
            <h2>KI-Unterstützung als Teil der PMSLogic Funktionen</h2>
            <p>
              PMSAI ist kein eigener Hauptbereich, sondern eine Funktion
              innerhalb von PMSLogic: Antwortvorschläge,
              Reservierungszusammenfassungen, Aufgabenhinweise,
              Upselling-Ideen und smarte Empfehlungen unterstützen Ihr Team,
              ohne Entscheidungen zu ersetzen.
            </p>
            <ul className="check-list">
              <li>Automatische Entwürfe für Gästemails und Rückfragen</li>
              <li>Zusammenfassungen von Reservierungen und Gästehistorie</li>
              <li>Hinweise auf offene Aufgaben und passende nächste Schritte</li>
              <li>Empfehlungen für Auslastung, Kommunikation und Abläufe</li>
            </ul>
            <div className="hero-actions">
              <Link href="/funktionen#pmsai" className="btn btn-primary">
                PMSAI unter Funktionen ansehen
              </Link>
              <TrackedLink
                href="/demo"
                className="btn btn-secondary"
                eventName="Demo CTA Clicked"
                eventProperties={{
                  placement: "home_pmsai_section",
                  cta_label: "Demo mit PMSLogic starten"
                }}
              >
                Demo mit PMSLogic starten
              </TrackedLink>
            </div>
          </div>
          <AIAssistantMockup />
        </div>
      </section>

      <section className="section alt">
        <div className="container split-section">
          <TabletSoftwareImage />
          <div className="split-copy">
            <p className="eyebrow">Tablet & mobile Abläufe</p>
            <h2>PMSLogic dort nutzen, wo Hotelarbeit entsteht</h2>
            <p>
              Rezeption, Management, Housekeeping und operative Teams brauchen
              schnelle Orientierung. PMSLogic ist responsive gedacht und zeigt
              Reservierungen, Zimmerstatus, Aufgaben und Tagesinformationen
              auch auf mobilen Geräten klar.
            </p>
            <ul className="check-list">
              <li>Tablet-Ansichten für Rezeption und Management</li>
              <li>Mobile Aufgaben und Zimmerstatus für operative Teams</li>
              <li>Klarer Zugriff auf Reservierungen und Gästekontext</li>
              <li>Cloud PMS für flexible Nutzung im Hotelalltag</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Zielgruppen</p>
              <h2>Software für Hotels und moderne Unterkunftsbetriebe</h2>
              <p>
                PMSLogic ist flexibel genug für verschiedene Betriebsmodelle
                und klar genug für Teams, die im Tagesgeschäft schnell arbeiten
                müssen.
              </p>
            </div>
          </div>
          <div className="target-grid">
            {audiencePages.map((page) => (
              <Link
                href={`/${page.slug}`}
                className="target-card"
                key={page.slug}
              >
                <div>
                  <h3>{page.title}</h3>
                  <p>{page.intro}</p>
                </div>
                <span>Mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Hotelbetrieb im Überblick</p>
              <h2>Die wichtigsten Arbeitsbereiche klar verbunden</h2>
              <p>
                PMSLogic ordnet operative Prozesse so, dass Teams nicht in
                einzelnen Listen oder Inseltools arbeiten müssen. Jeder Bereich
                bleibt eigenständig, aber mit Reservierung, Gast, Zimmer und
                Abrechnung verbunden.
              </p>
            </div>
          </div>
          <div className="operations-grid">
            {operations.map((item) => {
              const Icon = item.icon;

              return (
                <article className="operation-card" key={item.title}>
                  <div className="operation-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.meta}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Integrationen</p>
              <h2>Vorbereitet für typische Hotel-Schnittstellen</h2>
              <p>
                PMSLogic ist auf eine moderne Systemlandschaft ausgelegt.
                Konkrete Anbieter werden in der Demo als mögliche oder typische
                Integrationen transparent besprochen.
              </p>
            </div>
            <Link href="/integrationen" className="btn btn-secondary">
              Integrationen ansehen
            </Link>
          </div>
          <div className="integration-grid">
            {integrations.map((item) => (
              <div className="integration-card" key={item}>
                <span aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Ratgeber</p>
              <h2>Hotelsoftware verstehen und besser auswählen</h2>
              <p>
                Der Ratgeber ergänzt die Website mit hilfreichen Artikeln
                zu Hotel PMS, Softwareauswahl, Cloud PMS und digitaler
                Hotelverwaltung.
              </p>
            </div>
            <Link href="/ratgeber" className="btn btn-secondary">
              Zum Ratgeber
            </Link>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 4).map((post) => (
              <Link
                href={`/ratgeber/${post.slug}`}
                className="blog-card"
                key={post.slug}
              >
                <BlogImage post={post} />
                <div>
                  <span>{post.readingTime}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <strong>Artikel lesen</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Häufige Fragen zur Hotelsoftware Demo</h2>
              <p>
                Kurze Antworten zu Hotel PMS, Cloud PMS Hotel, Housekeeping,
                Channel-Manager-Prozessen, KI und Einführung.
              </p>
            </div>
            <Link href="/faq" className="btn btn-secondary">
              Alle Fragen ansehen
            </Link>
          </div>
          <FaqList items={homeFaq} />
        </div>
      </section>

      <section className="section">
        <div className="container seo-panel">
          <p className="eyebrow">Kurze Erklärung</p>
          <h2>Hotelsoftware für digitale Hotelverwaltung</h2>
          <p>
            PMSLogic ist eine moderne Hotelsoftware für Hotelanlagen, Resorts,
            Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und
            Hotelgruppen.
            Als Hotel PMS verbindet PMSLogic Reservierungen, Zimmerverwaltung,
            Gästeverwaltung, Frontdesk, Housekeeping, Rechnungen,
            Gästekommunikation, Reporting, Integrationen und PMSAI in einer
            zentralen Lösung.
          </p>
          <p>
            Wer ein Property Management System Hotel, eine PMS Software Hotel,
            ein Hotel Reservierungssystem oder eine cloudbasierte
            Hotelmanagement Software sucht, findet in PMSLogic einen klaren
            Ansatz für weniger Verwaltungsaufwand und mehr Überblick im
            Hotelalltag. Die kostenlose Demo zeigt, wie PMSLogic bestehende
            Prozesse sinnvoll ergänzen oder ersetzen kann.
          </p>
        </div>
      </section>
    </>
  );
}
