import Link from "next/link";
import {
  audiencePages,
  legalLinks,
  servicePages,
  siteConfig
} from "@/lib/content";
import { Logo } from "./Logo";
import { TrackedLink } from "./TrackedLink";

const productLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Funktionen", href: "/funktionen" },
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Integrationen", href: "/integrationen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" }
];

const serviceFooterLinks = [
  "hotel-pms",
  "reservierungsmanagement",
  "housekeeping-software",
  "rechnungen-zahlungen",
  "wellness-spa-zusatzbereiche",
  "channel-manager-integrationen",
  "reporting-revenue",
  "ki-automatisierung"
];

const guideLinks = [
  { label: "Ratgeber Übersicht", href: "/ratgeber" },
  { label: "Was ist ein Hotel PMS?", href: "/ratgeber/was-ist-ein-hotel-pms" },
  { label: "Hotelsoftware auswählen", href: "/ratgeber/hotelsoftware-auswaehlen" },
  {
    label: "Reservierungssoftware",
    href: "/ratgeber/reservierungssoftware-hotel-belegungsplan"
  },
  {
    label: "Channel Manager & Booking Engine",
    href: "/ratgeber/channel-manager-booking-engine-hotel"
  },
  {
    label: "Housekeeping Software",
    href: "/ratgeber/housekeeping-software-hotel-zimmerstatus"
  }
];

export function Footer() {
  const services = servicePages.filter((page) =>
    serviceFooterLinks.includes(page.slug)
  );

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Hotelsoftware live erleben</p>
            <h2>Bereit für klarere Abläufe im Hotelalltag?</h2>
            <p>
              Starten Sie mit einer kostenlosen Demo. Wir melden uns persönlich
              zurück und zeigen, wie PMSLogic zu Ihrem Haus passt.
            </p>
          </div>
          <TrackedLink
            href="/demo"
            className="btn btn-primary"
            eventName="Demo CTA Clicked"
            eventProperties={{
              placement: "footer_cta",
              cta_label: "Kostenlose Demo anfragen"
            }}
          >
            Kostenlose Demo anfragen
          </TrackedLink>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>{siteConfig.description}</p>
            <div className="footer-badges" aria-label="PMSLogic Schwerpunkte">
              <span>Cloud PMS</span>
              <span>Hotelsoftware</span>
              <span>Demo</span>
            </div>
            <TrackedLink
              href={`mailto:${siteConfig.email}`}
              className="footer-contact"
              eventName="Email Link Clicked"
              eventProperties={{
                placement: "footer_brand"
              }}
            >
              {siteConfig.email}
            </TrackedLink>
          </div>

          <nav className="footer-grid" aria-label="Footer Navigation">
            <div>
              <h3>Produkt</h3>
              <ul>
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Leistungen</h3>
              <ul>
                {services.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/leistungen/${page.slug}`}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Zielgruppen</h3>
              <ul>
                {audiencePages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Ratgeber</h3>
              <ul>
                {guideLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/demo"
                className="footer-text-cta"
                eventName="Demo CTA Clicked"
                eventProperties={{
                  placement: "footer_text_cta",
                  cta_label: "Hotelsoftware Demo anfragen"
                }}
              >
                Hotelsoftware Demo anfragen
              </TrackedLink>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PMSLogic. Alle Rechte vorbehalten.
          </span>
          <div className="footer-legal">
            {legalLinks.map((link) => (
              <span key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </div>
          <span>{siteConfig.domain}</span>
        </div>
      </div>
    </footer>
  );
}
