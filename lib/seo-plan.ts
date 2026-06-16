export const seoPlan = {
  brand: "PMSLogic",
  market: "Deutschsprachige Hotelsoftware / Hotel PMS",
  primaryGoal:
    "Demo-Anfragen für PMSLogic über organische Suchanfragen zu Hotelsoftware, Hotel PMS und operativen Hotelprozessen gewinnen.",
  mainKeywords: [
    "Hotelsoftware",
    "PMS Software",
    "Hotel PMS",
    "Property Management System Hotel",
    "Hotelverwaltungssoftware",
    "Hotel Management Software",
    "Hotelsoftware für Hotels",
    "Hotelsoftware für kleine Hotels",
    "Hotelsoftware für Pensionen",
    "Hotelsoftware für Ferienwohnungen"
  ],
  featureKeywords: [
    "Reservierungssoftware Hotel",
    "Belegungsplan Software Hotel",
    "Channel Manager Hotel",
    "Booking Engine Hotel",
    "Housekeeping Software Hotel",
    "Rechnungssoftware Hotel",
    "Meldeschein Software Hotel",
    "Gästeverwaltung Hotel",
    "Revenue Management Hotel",
    "Hotel Automatisierung"
  ],
  pageMap: [
    {
      path: "/",
      intent: "Haupt-Commercial-Intent",
      focusKeywords: ["Hotelsoftware", "Hotel PMS", "Hotelverwaltungssoftware"]
    },
    {
      path: "/funktionen",
      intent: "Feature-Vergleich und PMS-Funktionsübersicht",
      focusKeywords: [
        "PMS Software",
        "Property Management System Hotel",
        "Hotel Management Software"
      ]
    },
    {
      path: "/leistungen/hotel-pms",
      intent: "Hotel PMS / Property Management System",
      focusKeywords: ["Hotel PMS", "Property Management System Hotel"]
    },
    {
      path: "/leistungen/reservierungsmanagement",
      intent: "Reservierungssoftware und Belegungsplan",
      focusKeywords: [
        "Reservierungssoftware Hotel",
        "Belegungsplan Software Hotel"
      ]
    },
    {
      path: "/leistungen/channel-manager-integrationen",
      intent: "Vertrieb, Portale und Direktbuchung",
      focusKeywords: ["Channel Manager Hotel", "Booking Engine Hotel"]
    },
    {
      path: "/leistungen/housekeeping-software",
      intent: "Housekeeping und operative Aufgaben",
      focusKeywords: ["Housekeeping Software Hotel"]
    },
    {
      path: "/leistungen/rechnungen-zahlungen",
      intent: "Abrechnung, Meldeschein und Verwaltung",
      focusKeywords: ["Rechnungssoftware Hotel", "Meldeschein Software Hotel"]
    },
    {
      path: "/leistungen/reporting-revenue",
      intent: "Revenue und Auswertung",
      focusKeywords: ["Revenue Management Hotel"]
    },
    {
      path: "/leistungen/ki-automatisierung",
      intent: "Automatisierung und KI-Unterstützung",
      focusKeywords: ["Hotel Automatisierung"]
    },
    {
      path: "/zielgruppen",
      intent: "Unterkunftsarten und Hotelkategorien",
      focusKeywords: [
        "Hotelsoftware für Hotels",
        "Hotelsoftware für Pensionen",
        "Hotelsoftware für Ferienwohnungen"
      ]
    },
    {
      path: "/demo",
      intent: "Conversion und Demo-Anfrage",
      focusKeywords: ["Hotelsoftware Demo", "Hotelsoftware kostenlos testen"]
    }
  ],
  contentClusters: [
    {
      cluster: "Grundlagen Hotel PMS",
      pillar: "/ratgeber/was-ist-ein-hotel-pms",
      supportingKeywords: [
        "Hotel PMS",
        "PMS Software",
        "Property Management System Hotel"
      ]
    },
    {
      cluster: "Softwareauswahl",
      pillar: "/ratgeber/hotelsoftware-auswaehlen",
      supportingKeywords: [
        "Hotelsoftware",
        "Hotelverwaltungssoftware",
        "Hotel Management Software"
      ]
    },
    {
      cluster: "Reservierung und Belegung",
      pillar: "/ratgeber/reservierungssoftware-hotel-belegungsplan",
      supportingKeywords: [
        "Reservierungssoftware Hotel",
        "Belegungsplan Software Hotel",
        "Gästeverwaltung Hotel"
      ]
    },
    {
      cluster: "Online-Vertrieb",
      pillar: "/ratgeber/channel-manager-booking-engine-hotel",
      supportingKeywords: ["Channel Manager Hotel", "Booking Engine Hotel"]
    },
    {
      cluster: "Housekeeping und Betrieb",
      pillar: "/ratgeber/housekeeping-software-hotel-zimmerstatus",
      supportingKeywords: [
        "Housekeeping Software Hotel",
        "Hotel Automatisierung"
      ]
    }
  ],
  internalLinkRules: [
    "Jeder Ratgeberartikel verlinkt mindestens auf /demo und eine passende Leistungsseite.",
    "Jede Leistungsseite verlinkt auf /funktionen und /demo.",
    "Feature-Keywords werden natürlich in H2/H3, Fließtext und FAQ verwendet, ohne Keyword-Stuffing.",
    "PMSAI wird als Funktion und Leistung behandelt, nicht als Hauptnavigationselement."
  ],
  technicalChecklist: [
    "Jede indexierbare Seite erhält einen eindeutigen Meta Title und eine eindeutige Meta Description.",
    "Jede indexierbare Seite erhält eine kanonische URL über createMetadata.",
    "Globale strukturierte Daten: Organization, WebSite und SiteNavigationElement.",
    "Seitentypische strukturierte Daten: SoftwareApplication, Service, WebPage, FAQPage, BlogPosting, BreadcrumbList und ItemList.",
    "Die Sitemap enthält nur relevante Seiten, stabile lastModified-Daten, Prioritäten und Change Frequencies.",
    "robots.txt blockiert nur technische API-Routen und nicht die indexierbaren Inhaltsseiten.",
    "Social Preview nutzt ein echtes 1200x630 Open-Graph-Bild unter /seo/pmslogic-og.jpg.",
    "Danke-Seite bleibt per robots-Metadaten noindex, damit Conversion-Bestätigungen nicht in Google landen."
  ],
  expansionBacklog: [
    {
      topic: "Meldeschein Software Hotel",
      recommendedPath: "/ratgeber/meldeschein-software-hotel",
      targetService: "/leistungen/rechnungen-zahlungen"
    },
    {
      topic: "Revenue Management Hotel",
      recommendedPath: "/ratgeber/revenue-management-hotel-pms",
      targetService: "/leistungen/reporting-revenue"
    },
    {
      topic: "Hotel Automatisierung",
      recommendedPath: "/ratgeber/hotel-automatisierung-ki-pms",
      targetService: "/leistungen/ki-automatisierung"
    }
  ]
} as const;
