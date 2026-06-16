import type { Metadata } from "next";

export const siteConfig = {
  name: "PMSLogic",
  domain: "www.pmslogic.com",
  url: "https://www.pmslogic.com",
  email: "demo@pmslogic.com",
  description:
    "PMSLogic verbindet Reservierungen, Gäste, Zimmer, Team und Abrechnung in einer modernen Hotelsoftware - klar, cloudbasiert und bereit für die digitale Hotellerie."
};

export const legalConfig = {
  company: "Flaaq Holding GmbH",
  address: "Großer Kamp 5a, 31633 Leese",
  representative: "Christoph Pfad",
  phone: "05761 8429666",
  email: siteConfig.email,
  registerCourt: "Amtsgericht Hannover",
  registerNumber: "HRB 230241",
  vatId: "DE460472563",
  sourceReference: "heimlogik.de/impressum"
};

export const defaultSeoImage = "/seo/pmslogic-og.jpg";

export const seoKeywords = [
  "Hotelsoftware",
  "PMS Software",
  "Hotel PMS",
  "Property Management System Hotel",
  "PMS Software Hotel",
  "Hotel Verwaltungssoftware",
  "Hotelverwaltungssoftware",
  "Hotelmanagement Software",
  "Hotel Management Software",
  "Software für Hotels",
  "Hotelsoftware für Hotels",
  "Hotel Reservierungssystem",
  "Hotelsoftware für kleine Hotels",
  "Hotelsoftware für Pensionen",
  "Hotelsoftware für Ferienwohnungen",
  "Hotelsoftware für Boutique Hotels",
  "Hotelsoftware mit Channel Manager",
  "Hotelsoftware mit Rechnung",
  "Hotelsoftware mit Housekeeping",
  "Hotelsoftware mit KI",
  "KI Hotelsoftware",
  "Hotel PMS Deutschland",
  "Cloud PMS Hotel",
  "Hotelsoftware Demo",
  "Hotelsoftware kostenlos testen",
  "digitale Hotelverwaltung",
  "Hotelsoftware für Ferienunterkünfte",
  "Hotelsoftware für Aparthotels",
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
];

export const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Funktionen", href: "/funktionen" },
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Kontakt", href: "/kontakt" }
];

export const legalLinks = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Impressum", href: "/impressum" }
];

export const primaryRoutes = [
  "/",
  "/leistungen",
  "/funktionen",
  "/zielgruppen",
  "/hotelsoftware-hotelanlagen",
  "/hotelsoftware-pensionen",
  "/hotelsoftware-boutique-hotels",
  "/hotelsoftware-aparthotels",
  "/hotelsoftware-ferienunterkuenfte",
  "/hotelsoftware-hotelgruppen",
  "/integrationen",
  "/demo",
  "/kontakt",
  "/ratgeber",
  "/ueber-uns",
  "/faq",
  "/agb",
  "/datenschutz",
  "/impressum"
];

const navigationLabels: Record<string, string> = {
  "/": "Startseite",
  "/leistungen": "Leistungen",
  "/funktionen": "Funktionen",
  "/zielgruppen": "Zielgruppen",
  "/hotelsoftware-hotelanlagen": "Hotelsoftware für Hotelanlagen und Resorts",
  "/hotelsoftware-pensionen": "Hotelsoftware für Pensionen",
  "/hotelsoftware-boutique-hotels": "Hotelsoftware für Boutique-Hotels",
  "/hotelsoftware-aparthotels": "Hotelsoftware für Aparthotels",
  "/hotelsoftware-ferienunterkuenfte": "Hotelsoftware für Ferienunterkünfte",
  "/hotelsoftware-hotelgruppen": "Hotelsoftware für Hotelgruppen",
  "/integrationen": "Integrationen",
  "/demo": "Demo anfragen",
  "/kontakt": "Kontakt",
  "/ratgeber": "Ratgeber",
  "/ueber-uns": "Über uns",
  "/faq": "FAQ"
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const globalFaq: FaqItem[] = [
  {
    question: "Was ist ein Hotel PMS?",
    answer:
      "Ein Hotel PMS ist ein Property Management System für Hotels. Es bündelt Reservierungen, Zimmerstatus, Gästeprofile, Frontdesk-Prozesse, Housekeeping, Abrechnung und Auswertungen in einer zentralen Hotelsoftware."
  },
  {
    question: "Was ist der Unterschied zwischen Hotelsoftware und PMS?",
    answer:
      "Hotelsoftware ist der Oberbegriff. Ein PMS ist der operative Kern dieser Software: Es verwaltet Buchungen, Belegung, Gäste, Zimmer und tägliche Abläufe. PMSLogic versteht sich als vollständiges Cloud PMS Hotel mit zusätzlichen Modulen für Kommunikation, Reporting, Integrationen und KI-Unterstützung."
  },
  {
    question: "Für welche Hotels ist PMSLogic geeignet?",
    answer:
      "PMSLogic eignet sich für Hotelanlagen, Resorts, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen, die ihre digitale Hotelverwaltung klarer, schneller und transparenter organisieren möchten."
  },
  {
    question: "Gibt es eine kostenlose Demo?",
    answer:
      "Ja. Über die Demo-Anfrage können Sie PMSLogic live erleben. Nach dem Absenden melden wir uns persönlich zurück und stimmen einen passenden Termin ab."
  },
  {
    question: "Kann PMSLogic bestehende Prozesse ersetzen?",
    answer:
      "PMSLogic ist darauf ausgelegt, viele manuelle Abläufe rund um Reservierung, Frontdesk, Housekeeping, Rechnungen und Gästekommunikation zu bündeln. Welche bestehenden Prozesse ersetzt werden können, klären wir gemeinsam in der Demo."
  },
  {
    question: "Unterstützt PMSLogic Housekeeping?",
    answer:
      "Ja. PMSHousekeeping zeigt Reinigungsstatus, Aufgaben, Zuständigkeiten und Zimmerverfügbarkeit, damit Frontdesk und Reinigungsteam auf demselben Stand arbeiten."
  },
  {
    question: "Gibt es eine Booking Engine?",
    answer:
      "PMSLogic ist für den Einsatz mit Direktbuchungen und Booking-Engine-Prozessen konzipiert. In der Demo zeigen wir, welche Buchungswege für Ihr Haus sinnvoll sind."
  },
  {
    question: "Gibt es Channel-Manager-Funktionen?",
    answer:
      "PMSChannels ist für Online-Vertrieb und typische Channel-Manager-Prozesse vorgesehen. Mögliche oder typische Schnittstellen zu Portalen wie Booking.com, Airbnb, Expedia oder Google Hotel Ads werden transparent besprochen."
  },
  {
    question: "Ist PMSLogic für unterschiedliche Unterkunftskategorien geeignet?",
    answer:
      "Ja. PMSLogic ist bewusst so aufgebaut, dass Hotelanlagen, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen ihre jeweiligen Bereiche und Abläufe klar abbilden können."
  },
  {
    question: "Kann PMSLogic mit KI unterstützen?",
    answer:
      "PMSAI unterstützt Hotelteams mit Antwortvorschlägen, Zusammenfassungen, Aufgabenhinweisen, Upselling-Ideen und Prognoseimpulsen. Entscheidungen bleiben beim Team; die KI ist als Assistenz für klare Abläufe gedacht."
  },
  {
    question: "Wie läuft die Einführung ab?",
    answer:
      "Nach der Demo stimmen wir Anforderungen, Unterkunftsart, Zimmerstruktur, Abläufe und mögliche Datenübernahme ab. Danach folgt eine persönliche Einführung, damit das Team PMSLogic sicher im Alltag nutzen kann."
  },
  {
    question: "Können Daten aus alter Hotelsoftware übernommen werden?",
    answer:
      "Eine Datenübernahme ist je nach Ausgangssystem und Datenqualität möglich. In der Demo prüfen wir, welche Stammdaten, Gästeinformationen oder Reservierungsdaten sinnvoll übernommen werden können."
  },
  {
    question: "Ist PMSLogic cloudbasiert?",
    answer:
      "Ja. PMSLogic ist als moderne Cloud Hotelsoftware konzipiert, damit Teams standortübergreifend, im Büro oder mobil auf relevante Prozesse zugreifen können."
  },
  {
    question: "Funktioniert PMSLogic mobil?",
    answer:
      "PMSLogic wird responsive entwickelt. Wichtige Abläufe wie Aufgaben, Housekeeping-Status oder Reservierungsdetails können dadurch auch auf mobilen Geräten unterstützt werden."
  },
  {
    question: "Wie sicher sind die Daten?",
    answer:
      "PMSLogic setzt auf moderne Cloud-Technologie, klare Rollen, technische Schutzmaßnahmen und saubere Prozesse. Konkrete Sicherheits- und Datenschutzanforderungen besprechen wir passend zu Ihrem Betrieb."
  },
  {
    question: "Gibt es persönlichen Support?",
    answer:
      "Ja. PMSLogic setzt auf persönliche Einführung und Support auf Augenhöhe, damit Fragen aus dem Hotelalltag nicht in anonymen Ticketprozessen untergehen."
  }
];

export type FeatureItem = {
  name: string;
  description: string;
};

export type FeatureGroup = {
  title: string;
  eyebrow: string;
  description: string;
  items: FeatureItem[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "PMSCore",
    eyebrow: "Tagesbetrieb",
    description:
      "Alles für den täglichen Hotelbetrieb: Reservierungen, Belegung, Gäste, Zimmer und Frontdesk in einem klaren Arbeitsbereich.",
    items: [
      {
        name: "PMSReservierungen",
        description:
          "Reservierungen zentral erfassen, bearbeiten und nachvollziehen - mit Anreise, Abreise, Rate, Notizen und Gästeinformationen an einem Ort."
      },
      {
        name: "PMSBelegungsplan",
        description:
          "Ein übersichtlicher Belegungsplan zeigt Verfügbarkeiten, Aufenthalte und Lücken, damit Ihr Team schneller auf Buchungsanfragen reagieren kann."
      },
      {
        name: "PMSGästeverwaltung",
        description:
          "Gästeprofile bündeln Kontaktdaten, Präferenzen, Aufenthalte und relevante Hinweise, ohne dass Informationen in E-Mails oder Tabellen verschwinden."
      },
      {
        name: "PMSZimmerverwaltung",
        description:
          "Zimmer, Kategorien, Einheiten und Status sauber verwalten - ideal für Hotels, Pensionen, Aparthotels und Ferienunterkünfte mit mehreren Einheitstypen."
      },
      {
        name: "PMSFrontdesk",
        description:
          "Der Frontdesk sieht Anreisen, Abreisen, offene Aufgaben, Zahlungsstatus und Zimmerbereitschaft in einer fokussierten Tagesansicht."
      },
      {
        name: "PMSCheck-in",
        description:
          "Check-ins strukturieren, Gästedaten prüfen und interne Hinweise sichtbar machen, damit Anreisen ruhig und professionell ablaufen."
      },
      {
        name: "PMSCheck-out",
        description:
          "Abreisen, offene Posten und Rechnungsstatus im Blick behalten, damit der Check-out schnell, korrekt und freundlich funktioniert."
      },
      {
        name: "PMSKalender",
        description:
          "Kalenderansichten verbinden Reservierungen, Aufgaben und operative Hinweise, damit Teams ihre nächsten Schritte klar planen können."
      },
      {
        name: "PMSNotizen",
        description:
          "Interne Notizen zu Gästen, Buchungen oder Zimmern bleiben im Kontext und helfen, Wissen im Team zuverlässig weiterzugeben."
      }
    ]
  },
  {
    title: "PMSOperations",
    eyebrow: "Abläufe & Team",
    description:
      "Alles für interne Abläufe, Housekeeping, Wartung und Aufgaben - verbunden mit Belegung und Frontdesk.",
    items: [
      {
        name: "PMSHousekeeping",
        description:
          "Housekeeping-Listen zeigen, welche Zimmer gereinigt, geprüft oder vorbereitet werden müssen, inklusive Prioritäten und Tagesbezug."
      },
      {
        name: "PMSReinigungsstatus",
        description:
          "Sauber, in Reinigung, gesperrt oder geprüft: Statusänderungen werden sichtbar, damit Frontdesk und Reinigungsteam abgestimmt arbeiten."
      },
      {
        name: "PMSAufgaben",
        description:
          "Aufgaben für Rezeption, Housekeeping, Technik oder Management erstellen, zuweisen und nachverfolgen - direkt am richtigen Vorgang."
      },
      {
        name: "PMSWartung",
        description:
          "Defekte, Sperrungen und Wartungsthemen dokumentieren, damit Zimmerqualität und Verfügbarkeit besser planbar bleiben."
      },
      {
        name: "PMSTeam",
        description:
          "Rollen, Zuständigkeiten und operative Hinweise helfen dem Team, Aufgaben sauber zu verteilen und Übergaben zu vereinfachen."
      },
      {
        name: "PMSMobile",
        description:
          "Wichtige Hotelprozesse mobil verfügbar machen - besonders für Housekeeping, Management-Rundgänge und schnelle Statusprüfungen."
      }
    ]
  },
  {
    title: "PMSChannels",
    eyebrow: "Vertrieb & Buchungen",
    description:
      "Alles für Online-Buchungen, Direktbuchungen und Vertriebskanäle - vorbereitet für professionelle digitale Buchungswege.",
    items: [
      {
        name: "PMSChannelManager",
        description:
          "Channel-Manager-Prozesse unterstützen die Steuerung von Verfügbarkeiten und Raten über relevante Buchungskanäle hinweg."
      },
      {
        name: "PMSBookingEngine",
        description:
          "Direktbuchungen strukturieren und mit dem PMS verbinden, damit Anfragen und Reservierungen nicht außerhalb der Hotelsoftware liegen."
      },
      {
        name: "PMSAngebote",
        description:
          "Angebote professionell vorbereiten, nachfassen und in Reservierungen überführen, damit weniger Potenzial im Posteingang verloren geht."
      },
      {
        name: "PMSWarteliste",
        description:
          "Nachfrage sauber vormerken und bei Verfügbarkeit schneller reagieren - hilfreich bei beliebten Zeiträumen, Gruppen oder Stammgästen."
      }
    ]
  },
  {
    title: "PMSFinance",
    eyebrow: "Abrechnung & Verwaltung",
    description:
      "Alles für Rechnungen, Zahlungen, Dokumente und administrative Hotelprozesse - verständlich für Teams und nachvollziehbar für die Verwaltung.",
    items: [
      {
        name: "PMSRechnungen",
        description:
          "Rechnungen im Kontext von Buchungen erstellen, prüfen und dokumentieren - mit sauberer Verbindung zu Gast, Aufenthalt und Leistung."
      },
      {
        name: "PMSZahlungen",
        description:
          "Zahlungsstatus, offene Beträge und Zahlungsarten strukturiert erfassen, damit Frontdesk und Verwaltung denselben Stand sehen."
      },
      {
        name: "PMSKassenbuch",
        description:
          "Barvorgänge und relevante Kassenprozesse nachvollziehbar dokumentieren, damit der Tagesabschluss weniger Reibung erzeugt."
      },
      {
        name: "PMSMeldeschein",
        description:
          "Meldeschein-Prozesse digital vorbereiten und mit Gästedaten verbinden, um manuelle Doppeleingaben zu reduzieren."
      },
      {
        name: "PMSDokumente",
        description:
          "Reservierungsbestätigungen, Angebote, Rechnungen und interne Dokumente geordnet ablegen und leichter wiederfinden."
      }
    ]
  },
  {
    title: "PMSGuest",
    eyebrow: "Gäste & Umsatz",
    description:
      "Alles rund um Gästekommunikation, Zusatzumsätze und Beziehungspflege - professionell, nachvollziehbar und teamfähig.",
    items: [
      {
        name: "PMSGästekommunikation",
        description:
          "Kommunikation rund um Buchung, Anreise, Aufenthalt und Abreise strukturieren, damit Gäste klare Informationen erhalten."
      },
      {
        name: "PMSNachrichten",
        description:
          "Nachrichten im Reservierungskontext halten und relevante Rückfragen sichtbar machen, damit kein Anliegen im Team verloren geht."
      },
      {
        name: "PMSUpselling",
        description:
          "Zusatzleistungen wie Frühstück, Late Check-out, Parken oder Arrangements passend zum Aufenthalt anbieten und dokumentieren."
      },
      {
        name: "PMSGutscheine",
        description:
          "Gutscheine und Wertguthaben strukturiert verwalten, damit Einlösung, Restwerte und Gastbezug nachvollziehbar bleiben."
      }
    ]
  },
  {
    title: "PMSRevenue",
    eyebrow: "Auslastung & Analyse",
    description:
      "Alles für Preise, Auslastung, Umsatzanalyse und Forecasting - damit Entscheidungen auf besseren Informationen basieren.",
    items: [
      {
        name: "PMSRatenmanagement",
        description:
          "Raten und Preislogik strukturiert organisieren, um Zeiträume, Kategorien und Vertriebskanäle bewusster zu steuern."
      },
      {
        name: "PMSRevenue",
        description:
          "Umsatzchancen erkennen, Nachfrage einordnen und Entscheidungen über Preise oder Verfügbarkeiten besser vorbereiten."
      },
      {
        name: "PMSUmsatzanalyse",
        description:
          "Kennzahlen zu Umsatz, Belegung und Aufenthalten verständlich auswerten, ohne manuelle Tabellen pflegen zu müssen."
      },
      {
        name: "PMSForecasting",
        description:
          "Auslastung, Anreisen und Nachfrageentwicklung vorausdenken, damit Personalplanung und Vertrieb besser zusammenspielen."
      },
      {
        name: "PMSReporting",
        description:
          "Berichte für Management, Team und Verwaltung erstellen, die relevante Entwicklungen kompakt und nachvollziehbar zeigen."
      }
    ]
  },
  {
    title: "PMSConnect",
    eyebrow: "Schnittstellen & Standorte",
    description:
      "Alles für Integrationen, API-Anbindung und mehrere Häuser - damit PMSLogic in Ihre bestehende Systemlandschaft passt.",
    items: [
      {
        name: "PMSIntegrationen",
        description:
          "Typische Hotel-Schnittstellen für Vertrieb, Zahlungen, Buchhaltung, Türen, E-Mail und Kalender sauber planen und verbinden."
      },
      {
        name: "PMSAPI",
        description:
          "Eine API-orientierte Architektur unterstützt individuelle Prozesse, Automatisierungen und Systemverbindungen."
      },
      {
        name: "PMSMultiProperty",
        description:
          "Mehrere Häuser oder Einheiten übergreifend strukturieren, ohne die operative Klarheit einzelner Standorte zu verlieren."
      }
    ]
  },
  {
    title: "PMSAddons",
    eyebrow: "Wellness & Zusatzbereiche",
    description:
      "Alles für Spa, Wellness, Zusatzleistungen und definierbare Hotelbereiche - damit Leistungen außerhalb der reinen Zimmerbuchung sauber abgebildet werden.",
    items: [
      {
        name: "PMSSPA",
        description:
          "Spa- und Wellnessbereiche mit Behandlungen, Zeiten, Ressourcen und internen Hinweisen strukturieren, ohne sie vom Aufenthalt zu trennen."
      },
      {
        name: "PMSWellness",
        description:
          "Wellnessangebote wie Massagen, Sauna-Zeiten, Anwendungen oder Pakete verwalten und mit Gästen oder Reservierungen verbinden."
      },
      {
        name: "PMSZusatzbereiche",
        description:
          "Individuelle Bereiche wie Tagungsräume, Parkplätze, Fahrradverleih, Frühstückszeiten oder Services definieren und operativ sichtbar machen."
      },
      {
        name: "PMSLeistungen",
        description:
          "Zusatzleistungen sauber anlegen, buchen, auswerten und für Abrechnung oder Gästekommunikation nachvollziehbar halten."
      },
      {
        name: "PMSRessourcen",
        description:
          "Ressourcen wie Räume, Behandlungsplätze, Ausstattung oder Personal zeitlich planen und mit Aufgaben verbinden."
      },
      {
        name: "PMSTermine",
        description:
          "Termine für Spa, Wellness, Services oder interne Bereiche strukturieren und mit Aufenthalt, Gastprofil und Teamaufgaben verknüpfen."
      }
    ]
  },
  {
    title: "PMSAI",
    eyebrow: "KI & Automatisierung",
    description:
      "Alles für KI-gestützte Assistenz, Automatisierungen und smarte Prozesshinweise - glaubwürdig, kontrollierbar und praxisnah.",
    items: [
      {
        name: "PMSAI",
        description:
          "Das KI-Modul unterstützt bei Gästemails, Zusammenfassungen, Aufgabenhinweisen und Empfehlungen, während Entscheidungen beim Hotelteam bleiben."
      },
      {
        name: "PMSAutomationen",
        description:
          "Wiederkehrende Erinnerungen, Statuswechsel und Prozesshinweise automatisieren, damit Ihr Team weniger manuell nachhalten muss."
      }
    ]
  }
];

export const aiCapabilities = [
  {
    title: "Antwortvorschläge für Gästeanfragen",
    description:
      "PMSAI formuliert passende Entwürfe für häufige Fragen zu Anreise, Zimmern, Zusatzleistungen oder Aufenthaltsdetails."
  },
  {
    title: "Zusammenfassungen von Reservierungen",
    description:
      "Reservierungen, Gästehistorie und interne Hinweise werden kompakt aufbereitet, damit Ihr Team schneller den Kontext versteht."
  },
  {
    title: "Intelligente Aufgabenverteilung",
    description:
      "Offene Aufgaben können anhand von Zuständigkeit, Zimmerstatus und Zeitpunkt priorisiert und dem passenden Teamkontext zugeordnet werden."
  },
  {
    title: "Vorschläge für Upselling",
    description:
      "PMSAI erkennt mögliche Zusatzleistungen im Aufenthaltskontext und hilft, passende Angebote professionell vorzubereiten."
  },
  {
    title: "Nachfrageprognosen",
    description:
      "Aus Buchungs- und Belegungsdaten entstehen Hinweise für erwartete Nachfrage, damit Preise, Personal und Verfügbarkeit besser geplant werden können."
  },
  {
    title: "Unterstützung bei Gästemails",
    description:
      "E-Mail-Entwürfe für Bestätigungen, Rückfragen oder Erinnerungen lassen sich schneller und konsistenter vorbereiten."
  },
  {
    title: "Automatisierte Erinnerungen",
    description:
      "Wichtige Schritte vor Anreise, während des Aufenthalts oder nach Abreise werden als Erinnerungen sichtbar gemacht."
  },
  {
    title: "Erkennung offener Aufgaben",
    description:
      "PMSAI hilft, offene Punkte aus Reservierungen, Nachrichten oder Statusänderungen zu erkennen und strukturiert nachzuhalten."
  },
  {
    title: "Empfehlungen für Auslastung und Abläufe",
    description:
      "Smarte Hinweise zeigen Potenzial bei Zimmerauslastung, Prioritäten im Tagesgeschäft und wiederkehrenden Prozessmustern."
  }
];

export const integrations = [
  "Channel Manager",
  "Booking.com",
  "Airbnb",
  "Expedia",
  "CHECK24",
  "Google Hotel Ads",
  "Zahlungsanbieter",
  "Buchhaltung",
  "Kassensysteme",
  "Türsysteme / Smart Locks",
  "E-Mail",
  "Kalender",
  "API"
];

export type ServicePage = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  promise: string;
  outcomes: string[];
  modules: Array<{
    title: string;
    text: string;
  }>;
  process: string[];
  seoText: string[];
  faq: FaqItem[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "hotel-pms",
    label: "Hotel PMS",
    eyebrow: "Property Management System",
    title: "Hotel PMS für Reservierung, Frontdesk und digitale Hotelverwaltung",
    metaTitle: "Hotel PMS Software | PMSLogic Property Management System Hotel",
    metaDescription:
      "PMSLogic ist ein modernes Hotel PMS für Reservierungen, Belegungsplan, Gäste, Zimmer, Frontdesk, Housekeeping, Rechnungen und Reporting.",
    lead:
      "PMSLogic bildet den operativen Kern Ihres Hotels ab: Reservierungen, Gäste, Zimmer, Aufgaben, Rechnungen und Auswertungen greifen in einem klaren Cloud PMS ineinander.",
    promise:
      "Das moderne Hotel-PMS für klare Abläufe vom ersten Buchungskontakt bis zum Check-out.",
    outcomes: [
      "Tagesgeschäft im Frontdesk schneller überblicken",
      "Reservierungen, Zimmerstatus und Gästeprofile verbinden",
      "Housekeeping, Aufgaben und Abrechnung in denselben Prozess bringen",
      "Digitale Hotelverwaltung ohne Insellösungen aufbauen"
    ],
    modules: [
      {
        title: "PMSCore",
        text: "Reservierungen, Belegungsplan, Gästeverwaltung, Zimmerverwaltung, Check-in und Check-out in einem zentralen Arbeitsbereich."
      },
      {
        title: "PMSOperations",
        text: "Housekeeping, Aufgaben, Wartung und Teamkommunikation direkt mit Belegung und Frontdesk verbunden."
      },
      {
        title: "PMSFinance",
        text: "Rechnungen, Zahlungen, Kassenbuch, Meldeschein und Dokumente nachvollziehbar im Reservierungskontext."
      }
    ],
    process: ["Buchung erfassen", "Zimmer planen", "Gast betreuen", "Aufgaben steuern", "Abrechnung abschließen"],
    seoText: [
      "Ein Hotel PMS ist das operative Zentrum einer professionellen Hotelsoftware. PMSLogic verbindet Reservierungen, Zimmer, Gäste, Team und Abrechnung, damit der Hotelalltag nicht in einzelnen Tabellen, E-Mails oder Notizen zerfällt.",
      "Als Property Management System Hotel eignet sich PMSLogic für Hotelanlagen, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen, die ihre digitale Hotelverwaltung klarer organisieren möchten."
    ],
    faq: [
      {
        question: "Was leistet ein Hotel PMS in PMSLogic?",
        answer:
          "PMSLogic bündelt Reservierungen, Belegung, Gästeprofile, Zimmerstatus, Housekeeping, Rechnungen und Reporting in einer zentralen Hotelsoftware."
      },
      {
        question: "Ist PMSLogic ein Cloud PMS?",
        answer:
          "Ja. PMSLogic ist als moderne Cloud Hotelsoftware konzipiert und auf flexible Nutzung im Hotelalltag ausgelegt."
      }
    ]
  },
  {
    slug: "reservierungsmanagement",
    label: "Reservierungsmanagement",
    eyebrow: "Buchungen & Belegung",
    title: "Hotel Reservierungssystem für klare Buchungsabläufe",
    metaTitle: "Hotel Reservierungssystem | PMSLogic Reservierungsmanagement",
    metaDescription:
      "PMSLogic unterstützt Reservierungsmanagement mit Belegungsplan, Gästeprofilen, Angeboten, Kalender, Notizen und Direktbuchungsprozessen.",
    lead:
      "Mit PMSLogic werden Buchungsanfragen, Reservierungen, Verfügbarkeiten, Angebote und Gästedaten in einem strukturierten Reservierungsmanagement zusammengeführt.",
    promise:
      "Weniger Suche, weniger Doppeleingaben, mehr Klarheit bei jeder Buchung.",
    outcomes: [
      "Reservierungen schneller erfassen und ändern",
      "Verfügbarkeiten im Belegungsplan klar sehen",
      "Gästeprofile und Notizen direkt am Vorgang nutzen",
      "Angebote, Wartelisten und Rückfragen sauber nachhalten"
    ],
    modules: [
      {
        title: "PMSReservierungen",
        text: "Alle relevanten Reservierungsdaten mit Aufenthalt, Rate, Gast, Status und internen Hinweisen an einem Ort."
      },
      {
        title: "PMSBelegungsplan",
        text: "Eine visuelle Belegung hilft, Lücken, Anreisen, Abreisen und Verfügbarkeiten schneller zu erkennen."
      },
      {
        title: "PMSAngebote",
        text: "Angebote vorbereiten, nachfassen und bei Zusage direkt in strukturierte Reservierungen überführen."
      }
    ],
    process: ["Anfrage prüfen", "Verfügbarkeit sehen", "Angebot senden", "Reservierung bestätigen", "Anreise vorbereiten"],
    seoText: [
      "Ein gutes Hotel Reservierungssystem muss Buchungen nicht nur speichern, sondern Teams im Tagesgeschäft führen. PMSLogic macht Reservierungen, Belegung, Gästehinweise und Folgeaufgaben gemeinsam sichtbar.",
      "Damit eignet sich PMSLogic für Betriebe, die ein professionelles Reservierungsmanagement als Teil einer vollständigen Hotelmanagement Software suchen."
    ],
    faq: [
      {
        question: "Kann PMSLogic Reservierungen und Angebote verbinden?",
        answer:
          "Ja. Angebote können strukturiert vorbereitet und in Reservierungen überführt werden."
      },
      {
        question: "Gibt es einen Belegungsplan?",
        answer:
          "Ja. PMSBelegungsplan zeigt Aufenthalte, Lücken, Anreisen, Abreisen und verfügbare Zimmer übersichtlich."
      }
    ]
  },
  {
    slug: "housekeeping-software",
    label: "Housekeeping",
    eyebrow: "Abläufe & Zimmerstatus",
    title: "Hotelsoftware mit Housekeeping für saubere Übergaben",
    metaTitle: "Hotelsoftware mit Housekeeping | PMSLogic PMSOperations",
    metaDescription:
      "PMSLogic verbindet Housekeeping, Reinigungsstatus, Aufgaben, Wartung und Frontdesk in einer modernen Hotelsoftware.",
    lead:
      "PMSLogic hilft Frontdesk und Housekeeping, Zimmerstatus, Reinigungsaufgaben, Prioritäten und Wartungsthemen auf demselben Stand zu halten.",
    promise:
      "Zimmer werden schneller bereit, Übergaben klarer und offene Aufgaben sichtbarer.",
    outcomes: [
      "Reinigungsstatus je Zimmer nachvollziehen",
      "Aufgaben und Prioritäten direkt im Tageskontext sehen",
      "Wartung und Sperrungen sauber dokumentieren",
      "Mobile Nutzung für Teams im Haus vorbereiten"
    ],
    modules: [
      {
        title: "PMSHousekeeping",
        text: "Tageslisten und Zimmerstatus für Reinigung, Prüfung und Vorbereitung."
      },
      {
        title: "PMSReinigungsstatus",
        text: "Status wie bereit, in Reinigung, prüfen oder gesperrt bleiben für Frontdesk und Team sichtbar."
      },
      {
        title: "PMSWartung",
        text: "Defekte, Sperrungen und technische Hinweise werden dokumentiert und in operative Abläufe eingebunden."
      }
    ],
    process: ["Abreisen erkennen", "Reinigung priorisieren", "Zimmer prüfen", "Status freigeben", "Frontdesk informieren"],
    seoText: [
      "Hotelsoftware mit Housekeeping spart vor allem dann Zeit, wenn Zimmerstatus, Aufgaben und Belegung nicht getrennt gepflegt werden. PMSLogic verbindet PMSOperations mit Reservierungen und Frontdesk.",
      "So wird Housekeeping nicht zur isolierten Liste, sondern zu einem Teil der digitalen Hotelverwaltung."
    ],
    faq: [
      {
        question: "Kann Housekeeping mobil genutzt werden?",
        answer:
          "PMSLogic ist responsive aufgebaut. Wichtige Housekeeping- und Aufgabenprozesse können dadurch auch mobil unterstützt werden."
      },
      {
        question: "Sind Wartungsthemen abbildbar?",
        answer:
          "Ja. PMSWartung dokumentiert Defekte, Sperrungen und offene technische Aufgaben."
      }
    ]
  },
  {
    slug: "rechnungen-zahlungen",
    label: "Rechnungen & Zahlungen",
    eyebrow: "Abrechnung",
    title: "Hotelsoftware mit Rechnung und Zahlungsübersicht",
    metaTitle: "Hotelsoftware mit Rechnung | PMSLogic PMSFinance",
    metaDescription:
      "PMSLogic unterstützt Rechnungen, Zahlungen, Kassenbuch, Meldeschein und Dokumente als Teil der digitalen Hotelverwaltung.",
    lead:
      "PMSFinance verbindet Aufenthalt, Gast, Leistungen, Rechnungen und Zahlungsstatus, damit Frontdesk und Verwaltung dieselbe Grundlage nutzen.",
    promise:
      "Abrechnung wird nachvollziehbarer, schneller prüfbar und enger mit dem Aufenthalt verbunden.",
    outcomes: [
      "Rechnungen im Reservierungskontext vorbereiten",
      "Offene Beträge und Zahlungsstatus schneller sehen",
      "Dokumente strukturiert ablegen",
      "Administrative Abläufe wie Meldeschein und Kassenbuch unterstützen"
    ],
    modules: [
      {
        title: "PMSRechnungen",
        text: "Rechnungen mit Gast, Aufenthalt und Leistung verbinden und nachvollziehbar dokumentieren."
      },
      {
        title: "PMSZahlungen",
        text: "Zahlungsstatus, offene Beträge und Zahlungsarten klar im Blick behalten."
      },
      {
        title: "PMSDokumente",
        text: "Bestätigungen, Angebote, Rechnungen und relevante Unterlagen geordnet ablegen."
      }
    ],
    process: ["Leistung prüfen", "Rechnung vorbereiten", "Zahlung erfassen", "Dokument ablegen", "Abschluss kontrollieren"],
    seoText: [
      "Hotelsoftware mit Rechnung hilft, wenn Abrechnung und operativer Hotelprozess zusammengehören. PMSLogic verbindet Rechnungen, Zahlungen und Dokumente direkt mit Reservierung und Gast.",
      "Dadurch wird PMSFinance zu einem wichtigen Baustein einer vollständigen PMS Software Hotel."
    ],
    faq: [
      {
        question: "Unterstützt PMSLogic Rechnungsprozesse?",
        answer:
          "Ja. PMSRechnungen verbindet Rechnung, Gast, Aufenthalt und Leistung in einem nachvollziehbaren Prozess."
      },
      {
        question: "Können Zahlungen verfolgt werden?",
        answer:
          "Ja. PMSZahlungen zeigt Zahlungsstatus, offene Beträge und Zahlungsarten strukturiert."
      }
    ]
  },
  {
    slug: "gaestekommunikation-upselling",
    label: "Gäste & Upselling",
    eyebrow: "Kommunikation",
    title: "Gästekommunikation und Upselling in der Hotelsoftware",
    metaTitle: "Gästekommunikation und Upselling | PMSLogic Hotelsoftware",
    metaDescription:
      "PMSLogic unterstützt Gästekommunikation, Nachrichten, Upselling, Gutscheine und PMSAI-Antwortvorschläge im Hotelalltag.",
    lead:
      "PMSGuest bündelt Kommunikation, Gästehistorie, Nachrichten, Zusatzleistungen und Upselling-Potenziale direkt im Aufenthaltskontext.",
    promise:
      "Gäste erhalten klarere Informationen, und Ihr Team erkennt Zusatzumsätze strukturierter.",
    outcomes: [
      "Nachrichten und Rückfragen im Reservierungskontext halten",
      "Gästepräferenzen und Hinweise schneller nutzen",
      "Upselling-Angebote passend zum Aufenthalt vorbereiten",
      "PMSAI für Entwürfe und Zusammenfassungen einsetzen"
    ],
    modules: [
      {
        title: "PMSGästekommunikation",
        text: "Kommunikation vor, während und nach dem Aufenthalt professionell strukturieren."
      },
      {
        title: "PMSUpselling",
        text: "Zusatzleistungen wie Frühstück, Late Check-out, Parken oder Arrangements passend anbieten."
      },
      {
        title: "PMSAI",
        text: "Antwortvorschläge, Zusammenfassungen und Empfehlungen unterstützen das Team."
      }
    ],
    process: ["Anfrage verstehen", "Gastkontext prüfen", "Antwort vorbereiten", "Zusatzleistung anbieten", "Aufgabe nachhalten"],
    seoText: [
      "Moderne Hotelsoftware sollte Gästekommunikation nicht vom PMS trennen. PMSLogic hält Nachrichten, Reservierung, Gästeprofil und Zusatzleistungen im gleichen Kontext.",
      "So werden persönliche Betreuung, professionelle Abläufe und Umsatzchancen besser miteinander verbunden."
    ],
    faq: [
      {
        question: "Kann PMSLogic Gästemails unterstützen?",
        answer:
          "Ja. PMSAI kann Entwürfe vorbereiten, die vom Team geprüft und angepasst werden."
      },
      {
        question: "Sind Upselling-Prozesse enthalten?",
        answer:
          "PMSUpselling hilft, Zusatzleistungen passend zum Aufenthalt zu strukturieren und nachzuhalten."
      }
    ]
  },
  {
    slug: "wellness-spa-zusatzbereiche",
    label: "Wellness, Spa & Zusatzbereiche",
    eyebrow: "PMSSPA",
    title: "Hotelsoftware für Wellness, Spa und definierbare Zusatzbereiche",
    metaTitle: "PMSSPA | Hotelsoftware für Wellness, Spa und Zusatzbereiche",
    metaDescription:
      "PMSLogic erweitert das Hotel PMS um PMSSPA, Wellness, Zusatzleistungen, Ressourcen, Termine und frei definierbare Hotelbereiche.",
    lead:
      "Mit PMSSPA und PMSAddons lassen sich Wellnessangebote, Spa-Termine, Zusatzleistungen, Ressourcen und individuelle Hotelbereiche strukturiert verwalten.",
    promise:
      "Nicht nur Zimmer, sondern auch Erlebnisse, Leistungen und Ressourcen werden Teil der digitalen Hotelverwaltung.",
    outcomes: [
      "Spa- und Wellnessleistungen im Aufenthaltskontext abbilden",
      "Zusatzbereiche wie Tagung, Parken, Frühstück oder Fahrradverleih definieren",
      "Ressourcen und Termine nachvollziehbarer planen",
      "Leistungen für Abrechnung, Kommunikation und Reporting vorbereiten"
    ],
    modules: [
      {
        title: "PMSSPA",
        text: "Spa-Behandlungen, Wellnesszeiten und interne Hinweise als strukturierte Hotelprozesse erfassen."
      },
      {
        title: "PMSZusatzbereiche",
        text: "Flexible Bereiche wie Tagung, Parkplätze, Frühstück, Verleih oder Services definieren."
      },
      {
        title: "PMSRessourcen",
        text: "Räume, Ausstattung, Zeitfenster oder Mitarbeitende als planbare Ressourcen einbinden."
      }
    ],
    process: ["Leistung definieren", "Ressource planen", "Termin buchen", "Gast informieren", "Abrechnung vorbereiten"],
    seoText: [
      "Viele Hotels verkaufen längst mehr als Zimmer. Wellness, Spa, Frühstück, Parken, Tagungsräume, Verleihangebote oder individuelle Zusatzleistungen gehören zum Aufenthalt und sollten deshalb nicht außerhalb der Hotelsoftware verwaltet werden.",
      "PMSLogic erweitert das Hotel PMS mit PMSSPA und PMSAddons um definierbare Bereiche, Leistungen, Ressourcen und Termine. So können Hoteliers Zusatzumsätze und operative Abläufe besser strukturieren."
    ],
    faq: [
      {
        question: "Was ist PMSSPA?",
        answer:
          "PMSSPA ist ein PMSLogic-Modul für Spa, Wellness, Termine, Ressourcen und Zusatzleistungen im Hotelkontext."
      },
      {
        question: "Können eigene Zusatzbereiche definiert werden?",
        answer:
          "Ja. PMSZusatzbereiche ist dafür gedacht, individuelle Bereiche wie Tagung, Parken, Frühstück, Verleih oder Services flexibel abzubilden."
      }
    ]
  },
  {
    slug: "channel-manager-integrationen",
    label: "Channel Manager & Integrationen",
    eyebrow: "PMSConnect",
    title: "Hotelsoftware mit Channel Manager Prozessen und Integrationen",
    metaTitle: "Hotelsoftware mit Channel Manager und API | PMSLogic",
    metaDescription:
      "PMSLogic ist vorbereitet für typische Integrationen wie Channel Manager, Booking.com, Airbnb, Expedia, Google Hotel Ads, Zahlungen, Buchhaltung und API.",
    lead:
      "PMSConnect betrachtet Buchungskanäle, Direktbuchungen, API, Zahlungen, Buchhaltung, Kassensysteme und Smart Locks als Teil einer zusammenhängenden Systemlandschaft.",
    promise:
      "Schnittstellen werden transparent geplant statt pauschal versprochen.",
    outcomes: [
      "Typische Buchungskanäle und Vertriebsprozesse einordnen",
      "Mögliche Integrationen sauber prüfen",
      "API- und Automatisierungsbedarf früh berücksichtigen",
      "Mehrere Systeme in klare Prozesse bringen"
    ],
    modules: [
      {
        title: "PMSChannelManager",
        text: "Channel-Manager-Prozesse für Raten, Verfügbarkeiten und Vertriebskanäle vorbereiten."
      },
      {
        title: "PMSIntegrationen",
        text: "Typische Schnittstellen zu Vertrieb, Zahlungen, Buchhaltung, Türen, E-Mail und Kalendern planen."
      },
      {
        title: "PMSAPI",
        text: "API-orientierte Struktur für individuelle Prozesse und Automatisierungen."
      }
    ],
    process: ["Systeme erfassen", "Datenfluss prüfen", "Integration planen", "Prozess testen", "Team einführen"],
    seoText: [
      "Hotelsoftware mit Channel Manager und API muss zu den realen Buchungswegen eines Betriebs passen. PMSLogic formuliert konkrete Anbieter bewusst als mögliche oder typische Integrationen, bis Anforderungen technisch geprüft wurden.",
      "Diese transparente Herangehensweise stärkt Vertrauen und verhindert überzogene Schnittstellenversprechen."
    ],
    faq: [
      {
        question: "Sind Booking.com, Airbnb oder Expedia integriert?",
        answer:
          "Diese Anbieter werden als mögliche oder typische Integrationen betrachtet. Die konkrete Verfügbarkeit prüfen wir transparent in der Demo."
      },
      {
        question: "Gibt es eine API?",
        answer:
          "PMSConnect ist API-orientiert gedacht und kann individuelle Systemverbindungen unterstützen."
      }
    ]
  },
  {
    slug: "reporting-revenue",
    label: "Reporting & Revenue",
    eyebrow: "Auswertung",
    title: "Hotel Reporting und Revenue-Auswertung im Cloud PMS",
    metaTitle: "Hotel Reporting und Revenue Software | PMSLogic PMSRevenue",
    metaDescription:
      "PMSLogic unterstützt Umsatzanalyse, Forecasting, Ratenmanagement, Reporting und Auslastungsentscheidungen für moderne Hotels.",
    lead:
      "PMSRevenue hilft, Auslastung, Umsatz, Nachfrage, Aufenthalte und operative Entwicklungen besser einzuordnen.",
    promise:
      "Bessere Entscheidungen entstehen, wenn Kennzahlen verständlich und nah am Betrieb sichtbar sind.",
    outcomes: [
      "Belegung und Umsatzentwicklung klar sehen",
      "Nachfrage und Forecasting strukturierter einordnen",
      "Ratenmanagement bewusster vorbereiten",
      "Reports für Management und Team verständlich machen"
    ],
    modules: [
      {
        title: "PMSUmsatzanalyse",
        text: "Umsatz, Belegung und Aufenthalte verständlich auswerten."
      },
      {
        title: "PMSForecasting",
        text: "Nachfrageentwicklung vorausdenken und operative Planung verbessern."
      },
      {
        title: "PMSReporting",
        text: "Berichte für Management, Team und Verwaltung kompakt darstellen."
      }
    ],
    process: ["Daten sammeln", "Kennzahlen sehen", "Nachfrage bewerten", "Rate anpassen", "Entwicklung prüfen"],
    seoText: [
      "Hotelmanagement Software sollte nicht nur Daten speichern, sondern Entscheidungen vorbereiten. PMSLogic verbindet Reporting, Forecasting und Revenue-Hinweise mit operativen PMS-Daten.",
      "So können Hotels Auslastung, Preise, Nachfrage und Teamplanung in einem gemeinsamen Kontext betrachten."
    ],
    faq: [
      {
        question: "Kann PMSLogic Umsatz und Belegung auswerten?",
        answer:
          "Ja. PMSRevenue und PMSReporting sind für Auswertungen rund um Umsatz, Belegung und Nachfrage konzipiert."
      },
      {
        question: "Unterstützt PMSLogic Forecasting?",
        answer:
          "PMSForecasting hilft, Nachfrage und Auslastung für kommende Zeiträume besser einzuordnen."
      }
    ]
  },
  {
    slug: "ki-automatisierung",
    label: "KI & Automatisierung",
    eyebrow: "PMSAI",
    title: "Hotelsoftware mit KI und Automatisierung",
    metaTitle: "Hotelsoftware mit KI | PMSLogic PMSAI Automatisierung",
    metaDescription:
      "PMSAI unterstützt Hotelteams mit Antwortvorschlägen, Zusammenfassungen, Aufgabenhinweisen, Erinnerungen, Upselling-Ideen und Prognoseimpulsen.",
    lead:
      "PMSAI ergänzt PMSLogic um kontrollierbare KI-Unterstützung für Kommunikation, Zusammenfassungen, Aufgaben, Upselling und operative Empfehlungen.",
    promise:
      "Smarte Assistenz für wiederkehrende Arbeit, ohne die persönliche Entscheidung des Teams zu ersetzen.",
    outcomes: [
      "Antwortentwürfe für Gästeanfragen vorbereiten",
      "Reservierungen und Gästehistorie schneller zusammenfassen",
      "Offene Aufgaben und Erinnerungen sichtbarer machen",
      "Upselling- und Auslastungsideen strukturiert prüfen"
    ],
    modules: [
      {
        title: "PMSAI",
        text: "KI-Assistenz für Texte, Zusammenfassungen, Empfehlungen und Hinweise im PMS-Kontext."
      },
      {
        title: "PMSAutomationen",
        text: "Wiederkehrende Erinnerungen, Statushinweise und Aufgabenprozesse besser nachhalten."
      },
      {
        title: "PMSGuest",
        text: "Kommunikation, Nachrichten und Zusatzleistungen mit KI-Unterstützung verbinden."
      }
    ],
    process: ["Kontext erkennen", "Vorschlag erzeugen", "Team prüft", "Aktion ausführen", "Ergebnis dokumentieren"],
    seoText: [
      "Hotelsoftware mit KI ist besonders hilfreich, wenn die KI den Kontext des Betriebs kennt. PMSAI arbeitet mit Reservierungen, Gästedaten, Aufgaben und Nachrichten innerhalb von PMSLogic.",
      "Die KI bleibt Assistenz: Sie beschleunigt Vorbereitung und Orientierung, während Hotelteams final entscheiden."
    ],
    faq: [
      {
        question: "Was kann PMSAI automatisieren?",
        answer:
          "PMSAI unterstützt bei Entwürfen, Zusammenfassungen, Erinnerungen, Aufgabenhinweisen und Empfehlungen. Vollautomatische Entscheidungen sind nicht das Ziel."
      },
      {
        question: "Ist PMSAI rechtlich riskant?",
        answer:
          "PMSAI ist als kontrollierbare Assistenz gedacht. Inhalte sollten vom Team geprüft werden, bevor sie verwendet werden."
      }
    ]
  }
];

export type AudiencePage = {
  slug: string;
  label: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  benefits: string[];
  seoText: string[];
  faq: FaqItem[];
};

export const audiencePages: AudiencePage[] = [
  {
    slug: "hotelsoftware-hotelanlagen",
    label: "Hotelanlagen & Resorts",
    title: "Hotelsoftware für Hotelanlagen und Resorts",
    metaTitle: "Hotelsoftware für Hotelanlagen und Resorts | PMSLogic Cloud PMS",
    metaDescription:
      "PMSLogic unterstützt Hotelanlagen und Resorts mit Hotel PMS, Housekeeping, Rechnungen, Gästekommunikation, Zusatzbereichen, PMSSPA und PMSAI.",
    intro:
      "Hotelanlagen und Resorts brauchen ein PMS, das Zimmer, Gäste, Teams, Leistungen und Zusatzbereiche gemeinsam betrachtet. PMSLogic verbindet Reservierungen, Housekeeping, Abrechnung, Gästekommunikation, PMSSPA und Reporting in einer klaren Cloud-Struktur.",
    highlights: [
      "Zimmer, Kategorien, Bereiche und Zusatzleistungen gemeinsam verwalten",
      "Frontdesk, Housekeeping, Spa, Services und Verwaltung besser verbinden",
      "Mehr Überblick über Aufenthalte, Ressourcen, Aufgaben und Umsätze"
    ],
    benefits: [
      "PMSBelegungsplan für Zimmer und Kategorien",
      "PMSHousekeeping für vorbereitete Einheiten",
      "PMSSPA für Wellness, Termine und Zusatzbereiche",
      "PMSRechnungen für transparente Abrechnung",
      "PMSReporting für Auswertung und Management"
    ],
    seoText: [
      "Als Hotelsoftware für Hotelanlagen und Resorts konzentriert sich PMSLogic auf zusammenhängende Abläufe: Reservierungen prüfen, Gäste betreuen, Zimmer vorbereiten, Zusatzleistungen organisieren, Rechnungen erstellen und offene Aufgaben im Blick behalten.",
      "Das Cloud PMS Hotel ist für Betriebe gemacht, die mehrere Bereiche, Leistungen und Teams professionell verbinden möchten. So wird digitale Hotelverwaltung nicht an die Größe eines Hauses gekoppelt, sondern an die Struktur seiner Prozesse."
    ],
    faq: [
      {
        question: "Ist PMSLogic für Hotelanlagen mit mehreren Bereichen geeignet?",
        answer:
          "Ja. PMSLogic ist darauf ausgelegt, Zimmer, Teams, Zusatzbereiche, Wellness, Aufgaben und Abrechnung miteinander zu verbinden."
      },
      {
        question: "Kann PMSLogic Spa- und Zusatzleistungen abbilden?",
        answer:
          "Ja. PMSSPA und PMSZusatzbereiche sind für Wellness, Termine, Ressourcen und individuelle Leistungen vorgesehen."
      }
    ]
  },
  {
    slug: "hotelsoftware-pensionen",
    label: "Pensionen",
    title: "Hotelsoftware für Pensionen",
    metaTitle: "Hotelsoftware für Pensionen | PMSLogic Hotel PMS",
    metaDescription:
      "PMSLogic unterstützt Pensionen mit Reservierungen, Gästeverwaltung, Rechnungen, Housekeeping und klarer digitaler Hotelverwaltung.",
    intro:
      "Pensionen arbeiten oft persönlich, direkt und mit schlanken Teams. PMSLogic hilft, diese Nähe zu erhalten und gleichzeitig Reservierungen, Rechnungen und Zimmerstatus professionell zu organisieren.",
    highlights: [
      "Einfacher Überblick über Zimmer und Gäste",
      "Strukturierte Abläufe für kleine Teams",
      "Gästehistorie und Hinweise schnell verfügbar"
    ],
    benefits: [
      "PMSReservierungen für telefonische und digitale Anfragen",
      "PMSGästeverwaltung für Stammgäste und Präferenzen",
      "PMSMeldeschein für administrative Abläufe",
      "PMSNachrichten für nachvollziehbare Kommunikation",
      "PMSMobile für Aufgaben unterwegs"
    ],
    seoText: [
      "Eine Hotelsoftware für Pensionen muss verständlich bleiben und trotzdem professionelle Funktionen bieten. PMSLogic verbindet Gäste, Buchungen, Zimmer und Rechnungen in einer Oberfläche, die auf den Tagesbetrieb ausgerichtet ist.",
      "So können Pensionen ihre persönliche Betreuung bewahren und gleichzeitig die digitale Hotelverwaltung modernisieren."
    ],
    faq: [
      {
        question: "Eignet sich PMSLogic für familiengeführte Pensionen?",
        answer:
          "Ja. Die Software unterstützt einfache Übergaben, klare Zimmerübersichten und nachvollziehbare Gästeinformationen."
      },
      {
        question: "Hilft PMSLogic bei wiederkehrenden Gästen?",
        answer:
          "Ja. Gästeprofile halten Aufenthalte, Hinweise und Präferenzen im Kontext fest."
      }
    ]
  },
  {
    slug: "hotelsoftware-boutique-hotels",
    label: "Boutique-Hotels",
    title: "Hotelsoftware für Boutique-Hotels",
    metaTitle: "Hotelsoftware für Boutique Hotels | PMSLogic PMS Software",
    metaDescription:
      "PMSLogic ist moderne PMS Software für Boutique-Hotels mit Gästekommunikation, Upselling, Housekeeping, Frontdesk und PMSAI.",
    intro:
      "Boutique-Hotels leben von Details, Atmosphäre und persönlichem Service. PMSLogic sorgt dafür, dass diese Details im Betrieb sichtbar bleiben - vom Gästeprofil bis zur Zimmerfreigabe.",
    highlights: [
      "Gästepräferenzen und interne Hinweise im Kontext",
      "Professionelle Kommunikation vor und nach dem Aufenthalt",
      "Upselling-Potenziale strukturiert erkennen"
    ],
    benefits: [
      "PMSGästeverwaltung für personalisierten Service",
      "PMSUpselling für Zusatzleistungen und Arrangements",
      "PMSAI für Gästemails und Zusammenfassungen",
      "PMSRevenue für bessere Auslastungsentscheidungen",
      "PMSReporting für Management-Überblick"
    ],
    seoText: [
      "Hotelsoftware für Boutique Hotels muss mehr leisten als eine reine Zimmerliste. PMSLogic unterstützt Servicequalität, Teamkommunikation und operative Klarheit, damit jedes Detail zum richtigen Zeitpunkt sichtbar wird.",
      "Das moderne Hotel PMS verbindet Frontdesk, Housekeeping, Gästekommunikation, Abrechnung und KI-Unterstützung in einem professionellen System."
    ],
    faq: [
      {
        question: "Unterstützt PMSLogic individuelle Gästewünsche?",
        answer:
          "Ja. Hinweise, Präferenzen und interne Notizen können direkt im Gast- oder Reservierungskontext gepflegt werden."
      },
      {
        question: "Kann PMSLogic Upselling unterstützen?",
        answer:
          "Ja. Zusatzleistungen lassen sich strukturieren und PMSAI kann passende Vorschläge vorbereiten."
      }
    ]
  },
  {
    slug: "hotelsoftware-aparthotels",
    label: "Aparthotels",
    title: "Hotelsoftware für Aparthotels",
    metaTitle: "Hotelsoftware für Aparthotels | PMSLogic Cloud PMS",
    metaDescription:
      "PMSLogic unterstützt Aparthotels mit Einheitenverwaltung, Long-Stay-Prozessen, Housekeeping, Rechnungen und Multi-Property-Struktur.",
    intro:
      "Aparthotels benötigen klare Einheiten, flexible Aufenthalte und verlässliche Abläufe zwischen Frontdesk, Housekeeping und Verwaltung. PMSLogic bildet diese Prozesse in einem modernen Cloud PMS ab.",
    highlights: [
      "Einheiten, Kategorien und Aufenthalte übersichtlich verwalten",
      "Long-Stay- und Kurzaufenthalte sauber abbilden",
      "Operative Aufgaben mit Belegung und Rechnung verbinden"
    ],
    benefits: [
      "PMSZimmerverwaltung für Apartments und Kategorien",
      "PMSKalender für längere Aufenthalte",
      "PMSHousekeeping für flexible Reinigungsrhythmen",
      "PMSRechnungen für transparente Leistungen",
      "PMSMultiProperty für mehrere Standorte"
    ],
    seoText: [
      "Eine Hotelsoftware für Aparthotels muss klassische Hotelprozesse und wohnähnliche Aufenthalte verbinden. PMSLogic hilft, Einheiten, Leistungen, Gäste und operative Aufgaben sauber zu strukturieren.",
      "Das Property Management System Hotel unterstützt Aparthotels bei Reservierung, Abrechnung, Housekeeping und standortübergreifender Übersicht."
    ],
    faq: [
      {
        question: "Kann PMSLogic Apartments und Zimmer gemeinsam verwalten?",
        answer:
          "Ja. PMSZimmerverwaltung ist für verschiedene Einheiten, Kategorien und Unterkunftsstrukturen ausgelegt."
      },
      {
        question: "Ist PMSLogic für Long-Stay-Aufenthalte geeignet?",
        answer:
          "Ja. Längere Aufenthalte können mit Kalender, Aufgaben, Rechnungen und Gastinformationen strukturiert werden."
      }
    ]
  },
  {
    slug: "hotelsoftware-ferienunterkuenfte",
    label: "Ferienunterkünfte",
    title: "Hotelsoftware für Ferienunterkünfte",
    metaTitle: "Hotelsoftware für Ferienunterkünfte | PMSLogic",
    metaDescription:
      "PMSLogic ist Software für Ferienunterkünfte mit Reservierungen, Einheiten, Gästeverwaltung, Rechnungen, Aufgaben und typischen Integrationen.",
    intro:
      "Ferienunterkünfte brauchen Übersicht über Einheiten, Aufenthalte, Reinigungen, Schlüsselprozesse und Gästekommunikation. PMSLogic bringt diese Abläufe in eine professionelle Hotelmanagement Software.",
    highlights: [
      "Einheiten und Belegung klar sichtbar",
      "Reinigung, Wartung und Übergaben strukturieren",
      "Gästeanfragen schneller und konsistenter beantworten"
    ],
    benefits: [
      "PMSBelegungsplan für alle Einheiten",
      "PMSAufgaben für Reinigung und Übergabe",
      "PMSGästekommunikation für klare Informationen",
      "PMSIntegrationen für typische Buchungswege",
      "PMSAI für Antwortentwürfe und Erinnerungen"
    ],
    seoText: [
      "PMSLogic unterstützt die digitale Verwaltung von Ferienunterkünften, ohne den Betrieb wie ein klassisches Großhotel zu behandeln. Einheiten, Gäste, Aufgaben und Rechnungen bleiben miteinander verbunden.",
      "So wird Hotelsoftware für Ferienunterkünfte zu einem zentralen Arbeitsbereich für Buchungen, Housekeeping, Kommunikation und Auswertung."
    ],
    faq: [
      {
        question: "Ist PMSLogic nur für Hotels oder auch für Ferienunterkünfte?",
        answer:
          "PMSLogic ist auch für Ferienunterkünfte geeignet, wenn Reservierungen, Einheiten, Gäste und Aufgaben professionell verwaltet werden sollen."
      },
      {
        question: "Kann PMSLogic Reinigung und Wartung abbilden?",
        answer:
          "Ja. Aufgaben, Reinigungsstatus und Wartungshinweise können direkt mit Einheiten und Aufenthalten verbunden werden."
      }
    ]
  },
  {
    slug: "hotelsoftware-hotelgruppen",
    label: "Hotelgruppen",
    title: "Hotelsoftware für Hotelgruppen",
    metaTitle: "Hotelsoftware für Hotelgruppen | PMSLogic Multi Property PMS",
    metaDescription:
      "PMSLogic unterstützt Hotelgruppen mit Multi-Property-Struktur, Reporting, Rollen, Integrationen und klaren Prozessen je Standort.",
    intro:
      "Hotelgruppen benötigen Standardisierung, ohne die Besonderheiten einzelner Häuser zu verlieren. PMSLogic hilft, mehrere Standorte, Teams und Kennzahlen in einer gemeinsamen PMS-Struktur zu führen.",
    highlights: [
      "Mehrere Häuser und Einheiten strukturiert verwalten",
      "Standortübergreifende Auswertung und klare Rollen",
      "Einheitliche Prozesse bei lokaler Flexibilität"
    ],
    benefits: [
      "PMSMultiProperty für mehrere Standorte",
      "PMSReporting für Management-Übersicht",
      "PMSAPI für Systemlandschaften",
      "PMSTeam für Rollen und Zuständigkeiten",
      "PMSRevenue für gruppenweite Steuerung"
    ],
    seoText: [
      "Hotelsoftware für Hotelgruppen muss lokale Abläufe und zentrale Steuerung zusammenbringen. PMSLogic ist darauf ausgerichtet, mehrere Häuser, Teams und Datenpunkte übersichtlich zu verbinden.",
      "Mit PMSConnect, PMSMultiProperty und PMSReporting entsteht ein klarer Rahmen für operative Hotelprozesse und Managemententscheidungen."
    ],
    faq: [
      {
        question: "Kann PMSLogic mehrere Hotels abbilden?",
        answer:
          "PMSMultiProperty ist für die Verwaltung mehrerer Häuser oder Einheiten konzipiert."
      },
      {
        question: "Gibt es standortübergreifende Reports?",
        answer:
          "PMSReporting kann Kennzahlen standortbezogen und übergreifend strukturieren."
      }
    ]
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  date: string;
  readingTime: string;
  excerpt: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  faq: FaqItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "was-ist-ein-hotel-pms",
    title: "Was ist ein Hotel PMS?",
    metaTitle: "Was ist ein Hotel PMS? Definition, Funktionen und Vorteile",
    metaDescription:
      "Ein Hotel PMS erklärt: Was ein Property Management System im Hotel leistet, welche Funktionen wichtig sind und worauf Hotels bei Software achten sollten.",
    image: "/blog-images/was-ist-hotel-pms.jpg",
    imageAlt:
      "Hotelmanager und Rezeptionistin betrachten ein PMS-Dashboard an der Hotelrezeption",
    date: "2026-06-16",
    readingTime: "6 Minuten",
    excerpt:
      "Ein Hotel PMS ist das operative Zentrum der digitalen Hotelverwaltung. Der Beitrag erklärt die wichtigsten Aufgaben, Funktionen und Auswahlkriterien.",
    intro:
      "Ein Hotel PMS, kurz für Property Management System, ist die Software, die den täglichen Hotelbetrieb strukturiert. Es verbindet Reservierungen, Zimmer, Gäste, Frontdesk, Housekeeping und Abrechnung.",
    sections: [
      {
        title: "Wofür ein Hotel PMS gebraucht wird",
        body: [
          "Hotels arbeiten mit vielen Informationen, die sich ständig ändern: neue Buchungen, Anreisen, Abreisen, Zimmerstatus, Gästewünsche, Zahlungen und Aufgaben. Ein PMS bringt diese Informationen in einen gemeinsamen Arbeitsbereich.",
          "Dadurch müssen Teams weniger zwischen Tabellen, E-Mail-Postfächern, Papierlisten und einzelnen Tools wechseln. Gute Hotelsoftware macht sichtbar, was als Nächstes wichtig ist."
        ]
      },
      {
        title: "Zentrale Funktionen eines Property Management Systems",
        body: [
          "Zu den wichtigsten PMS-Funktionen gehören Reservierungsmanagement, Belegungsplan, Gästeverwaltung, Zimmerverwaltung, Check-in, Check-out, Housekeeping, Rechnungen, Zahlungsstatus, Dokumente, Reporting und Integrationen.",
          "Moderne Systeme ergänzen diese Basis zunehmend durch mobile Nutzung, Automatisierungen, Gästekommunikation und KI-gestützte Assistenz."
        ]
      },
      {
        title: "Warum Cloud PMS für viele Betriebe sinnvoll ist",
        body: [
          "Cloudbasierte Hotelsoftware erleichtert den Zugriff für unterschiedliche Rollen im Team und kann besser mit modernen Schnittstellen, mobilen Geräten und standortübergreifenden Prozessen zusammenspielen.",
          "Wichtig ist dabei nicht nur Technik, sondern Alltagstauglichkeit: Ein PMS sollte die Arbeitsweise im Hotel abbilden und nicht unnötig komplizieren."
        ]
      }
    ],
    faq: [
      {
        question: "Ist PMS dasselbe wie Hotelsoftware?",
        answer:
          "PMS ist der operative Kern einer Hotelsoftware. Hotelsoftware kann zusätzlich Bereiche wie Marketing, CRM, Revenue, Integrationen oder KI umfassen."
      },
      {
        question: "Brauchen kleine Hotels ein PMS?",
        answer:
          "Auch kleine Hotels profitieren von einem PMS, wenn Reservierungen, Zimmerstatus, Gäste und Rechnungen nicht mehr zuverlässig über Tabellen oder Papierlisten gesteuert werden sollen."
      }
    ]
  },
  {
    slug: "hotelsoftware-auswaehlen",
    title: "Hotelsoftware auswählen: Worauf Hotels achten sollten",
    metaTitle: "Hotelsoftware auswählen | Checkliste für Hotels und Pensionen",
    metaDescription:
      "Hotelsoftware auswählen: wichtige Kriterien für PMS, Reservierungen, Housekeeping, Rechnungen, Integrationen, Cloud, Support und Einführung.",
    image: "/blog-images/hotelsoftware-auswaehlen.jpg",
    imageAlt:
      "Hotelteam vergleicht Hotelsoftware auf Laptop und Tablet in einem modernen Hotelbüro",
    date: "2026-06-16",
    readingTime: "7 Minuten",
    excerpt:
      "Die richtige Hotelsoftware muss zum Betrieb passen. Diese Checkliste hilft bei Funktionen, Prozessen, Einführung und Demo-Vorbereitung.",
    intro:
      "Hotelsoftware entscheidet mit darüber, wie ruhig oder hektisch der Alltag im Betrieb wirkt. Wer ein neues PMS auswählt, sollte deshalb nicht nur Funktionen vergleichen, sondern echte Abläufe prüfen.",
    sections: [
      {
        title: "Mit den eigenen Prozessen beginnen",
        body: [
          "Vor der Auswahl lohnt sich eine kurze Bestandsaufnahme: Wie kommen Buchungen herein? Welche Informationen fehlen häufig? Wo entstehen doppelte Eingaben? Welche Aufgaben gehen bei Übergaben verloren?",
          "Eine gute Demo sollte genau diese Fragen aufnehmen und zeigen, wie die Software im konkreten Hotelalltag hilft."
        ]
      },
      {
        title: "Pflichtfunktionen sauber prüfen",
        body: [
          "Zu den Pflichtfunktionen zählen Reservierungen, Belegungsplan, Gästeverwaltung, Zimmerstatus, Frontdesk, Housekeeping, Rechnungen, Dokumente und grundlegende Auswertungen.",
          "Je nach Betrieb sind zusätzlich Booking Engine, Channel-Manager-Prozesse, Zahlungsanbieter, Buchhaltung, Smart Locks, API oder Multi-Property-Funktionen wichtig."
        ]
      },
      {
        title: "Einführung und Support ernst nehmen",
        body: [
          "Selbst gute Hotelsoftware kann scheitern, wenn Einführung und Teamtraining fehlen. Fragen Sie nach persönlicher Begleitung, Migrationsmöglichkeiten, Rollen im Team und Supportwegen.",
          "Der beste Test ist eine Demo, in der reale Situationen durchgespielt werden: Anreise, Zimmerwechsel, offene Zahlung, Housekeeping-Priorität, Gastnachricht und Rechnungsabschluss."
        ]
      }
    ],
    faq: [
      {
        question: "Sollte man Hotelsoftware kostenlos testen?",
        answer:
          "Eine kostenlose Demo ist sehr sinnvoll. Wichtig ist, dass sie den eigenen Betrieb berücksichtigt und nicht nur Standardfunktionen zeigt."
      },
      {
        question: "Welche Rolle spielen Integrationen?",
        answer:
          "Integrationen sind wichtig, sollten aber konkret geprüft werden. Entscheidend ist, welche Systeme tatsächlich genutzt werden und welche Datenflüsse gebraucht werden."
      }
    ]
  },
  {
    slug: "reservierungssoftware-hotel-belegungsplan",
    title: "Reservierungssoftware Hotel: Buchungen und Belegungsplan klar steuern",
    metaTitle: "Reservierungssoftware Hotel | Belegungsplan Software für Hotels",
    metaDescription:
      "Reservierungssoftware Hotel erklärt: Wie PMSLogic Buchungen, Belegungsplan, Gästeverwaltung und Frontdesk in einem Hotel PMS verbindet.",
    image: "/blog-images/reservierungssoftware-hotel.jpg",
    imageAlt:
      "Rezeptionsteam plant Reservierungen mit einer Belegungsplan Software im Hotel",
    date: "2026-06-16",
    readingTime: "8 Minuten",
    excerpt:
      "Reservierungssoftware sollte mehr können als Buchungen speichern. Entscheidend ist, wie Belegung, Gäste, Zimmer und Aufgaben zusammenarbeiten.",
    intro:
      "Reservierungssoftware im Hotel ist einer der wichtigsten Bausteine digitaler Hotelverwaltung. Sie entscheidet, wie schnell Teams Anfragen beantworten, Zimmer planen und Anreisen vorbereiten können.",
    sections: [
      {
        title: "Warum Reservierungssoftware der operative Startpunkt ist",
        body: [
          "Jede Buchung löst Folgeprozesse aus: Zimmer werden blockiert, Gästeprofile entstehen, Anzahlungen oder Rechnungen werden vorbereitet und Housekeeping muss wissen, welche Einheiten wann bereit sein müssen.",
          "Eine gute Reservierungssoftware Hotel verbindet diese Schritte direkt mit dem PMS, statt Buchungen isoliert in einer Liste zu führen."
        ]
      },
      {
        title: "Belegungsplan Software Hotel richtig nutzen",
        body: [
          "Der Belegungsplan zeigt nicht nur freie Zimmer. Er macht Anreisen, Abreisen, Lücken, Kategorien und operative Engpässe sichtbar.",
          "PMSLogic nutzt PMSBelegungsplan und PMSReservierungen, um Frontdesk, Zimmerplanung und Gästeverwaltung in einem klaren Arbeitsfluss zu halten."
        ]
      },
      {
        title: "Von der Anfrage bis zur Anreise",
        body: [
          "Im Idealfall wird aus einer Anfrage ein Angebot, daraus eine Reservierung und daraus ein vorbereiteter Aufenthalt. Notizen, Gästedaten und Aufgaben bleiben dabei im Kontext.",
          "So wird Reservierungssoftware zum verbindenden System zwischen Vertrieb, Frontdesk, Housekeeping und Abrechnung."
        ]
      }
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Reservierungssoftware und Hotel PMS?",
        answer:
          "Reservierungssoftware fokussiert Buchungen und Verfügbarkeiten. Ein Hotel PMS verbindet Reservierungen zusätzlich mit Gästen, Zimmern, Housekeeping, Rechnungen und Reporting."
      },
      {
        question: "Warum ist ein visueller Belegungsplan wichtig?",
        answer:
          "Ein visueller Belegungsplan hilft, Verfügbarkeiten, Lücken, Anreisen und Abreisen schneller zu erkennen und bessere Entscheidungen im Frontdesk zu treffen."
      }
    ]
  },
  {
    slug: "channel-manager-booking-engine-hotel",
    title: "Channel Manager Hotel und Booking Engine: Portale und Direktbuchungen verbinden",
    metaTitle: "Channel Manager Hotel und Booking Engine | PMSLogic Ratgeber",
    metaDescription:
      "Channel Manager Hotel und Booking Engine erklärt: Wie Hotels Verfügbarkeiten, Portale, Direktbuchungen und PMS-Prozesse sauber verbinden.",
    image: "/blog-images/channel-manager-booking-engine.jpg",
    imageAlt:
      "Hotelmanager prüft Channel Manager und Booking Engine Prozesse auf mehreren Bildschirmen",
    date: "2026-06-16",
    readingTime: "8 Minuten",
    excerpt:
      "Online-Vertrieb funktioniert nur sauber, wenn Channel Manager, Booking Engine und Hotel PMS gemeinsam gedacht werden.",
    intro:
      "Hotels verkaufen über mehrere Kanäle: Direktbuchung, Portale, Anfragen, Stammgäste und manchmal mehrere Standorte. Channel Manager und Booking Engine sollen diese Wege technisch und operativ zusammenbringen.",
    sections: [
      {
        title: "Was ein Channel Manager im Hotel leistet",
        body: [
          "Ein Channel Manager unterstützt Hotels dabei, Verfügbarkeiten und Raten über relevante Buchungskanäle hinweg zu steuern. Ziel ist, Überbuchungen zu vermeiden und Vertriebskanäle effizienter zu verwalten.",
          "Wichtig ist die Verbindung zum Hotel PMS: Ohne saubere PMS-Daten bleiben Raten, Zimmerstatus und Buchungen anfällig für manuelle Fehler."
        ]
      },
      {
        title: "Warum eine Booking Engine wichtig ist",
        body: [
          "Eine Booking Engine Hotel unterstützt Direktbuchungen über die eigene Website. Für Hotels ist das besonders interessant, weil Direktbuchungen näher am eigenen Gastkontakt liegen.",
          "PMSLogic betrachtet Booking Engine und Channel-Manager-Prozesse als Teil von PMSChannels und PMSConnect, damit Buchungen nicht getrennt vom Hotelbetrieb verwaltet werden."
        ]
      },
      {
        title: "Integrationen transparent prüfen",
        body: [
          "Nicht jede Integration ist automatisch sinnvoll oder sofort verfügbar. Deshalb sollten Hotels klären, welche Kanäle wirklich genutzt werden, welche Daten fließen müssen und wie Fehlerfälle behandelt werden.",
          "Eine seriöse Demo sollte mögliche oder typische Integrationen transparent einordnen, statt pauschal alle Anbieter zu versprechen."
        ]
      }
    ],
    faq: [
      {
        question: "Ist ein Channel Manager dasselbe wie eine Booking Engine?",
        answer:
          "Nein. Ein Channel Manager steuert externe Vertriebskanäle, eine Booking Engine ermöglicht Direktbuchungen über eigene Kanäle."
      },
      {
        question: "Sollte der Channel Manager mit dem PMS verbunden sein?",
        answer:
          "Ja. Die Verbindung zum PMS ist wichtig, damit Verfügbarkeiten, Raten und Reservierungen nicht manuell doppelt gepflegt werden müssen."
      }
    ]
  },
  {
    slug: "housekeeping-software-hotel-zimmerstatus",
    title: "Housekeeping Software Hotel: Zimmerstatus und Aufgaben sauber steuern",
    metaTitle: "Housekeeping Software Hotel | Zimmerstatus, Aufgaben und PMS",
    metaDescription:
      "Housekeeping Software Hotel erklärt: Wie PMSLogic Reinigungsstatus, Aufgaben, Wartung, mobile Nutzung und Frontdesk verbindet.",
    image: "/blog-images/housekeeping-software-hotel.jpg",
    imageAlt:
      "Housekeeping-Mitarbeiterin aktualisiert Zimmerstatus per Tablet im Hotel",
    date: "2026-06-16",
    readingTime: "7 Minuten",
    excerpt:
      "Housekeeping Software wird besonders wertvoll, wenn Zimmerstatus, Aufgaben und Frontdesk in Echtzeit zusammenspielen.",
    intro:
      "Housekeeping ist ein operativer Kernprozess im Hotel. Wenn Reinigungsstatus, Wartung, Aufgaben und Frontdesk nicht zusammenarbeiten, entstehen Wartezeiten, Rückfragen und unnötige Übergaben.",
    sections: [
      {
        title: "Zimmerstatus als gemeinsame Wahrheit",
        body: [
          "Frontdesk und Housekeeping brauchen denselben Stand: Welche Zimmer sind belegt, frei, in Reinigung, geprüft oder gesperrt? Je klarer dieser Status sichtbar ist, desto ruhiger laufen Anreise und Check-out.",
          "PMSLogic verbindet PMSHousekeeping, PMSReinigungsstatus und PMSAufgaben mit dem Belegungsplan."
        ]
      },
      {
        title: "Aufgaben und Wartung im Kontext",
        body: [
          "Housekeeping Software Hotel sollte nicht nur eine Reinigungscheckliste sein. Defekte, Sonderwünsche, Babybetten, Minibar-Prüfung oder Prioritäten gehören direkt an Zimmer, Aufenthalt oder Aufgabe.",
          "Mit PMSWartung und PMSAufgaben können Hotels operative Themen besser dokumentieren und nachhalten."
        ]
      },
      {
        title: "Mobile Nutzung für Teams im Haus",
        body: [
          "Housekeeping arbeitet nicht am festen Schreibtisch. Mobile Ansichten helfen, Statusänderungen, Aufgaben und Rückfragen direkt dort zu bearbeiten, wo sie entstehen.",
          "Dadurch wird Housekeeping zu einem sichtbaren Teil der digitalen Hotelverwaltung statt zu einer parallelen Liste."
        ]
      }
    ],
    faq: [
      {
        question: "Was bringt Housekeeping Software im Hotel?",
        answer:
          "Sie macht Reinigungsstatus, Aufgaben, Wartung und Prioritäten sichtbar und verbindet diese Informationen mit Frontdesk und Reservierungen."
      },
      {
        question: "Kann Housekeeping mobil genutzt werden?",
        answer:
          "PMSLogic ist responsive aufgebaut und unterstützt wichtige Aufgaben- und Statusprozesse auch auf mobilen Geräten."
      }
    ]
  }
];

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

export function createMetadata({
  title,
  description,
  path,
  keywords = seoKeywords,
  image = defaultSeoImage,
  type = "website",
  index = true
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  index?: boolean;
}): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "de-DE": canonical
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "de_DE",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Hotelsoftware`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    robots: {
      index,
      follow: index,
      googleBot: {
        index,
        follow: index,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: legalConfig.company,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: legalConfig.phone,
  logo: absoluteUrl("/pmslogo.png"),
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Großer Kamp 5a",
    postalCode: "31633",
    addressLocality: "Leese",
    addressCountry: "DE"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Demo-Anfrage und Kundenkontakt",
    email: siteConfig.email,
    telephone: legalConfig.phone,
    availableLanguage: ["de-DE"]
  },
  brand: {
    "@type": "Brand",
    name: siteConfig.name
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: "PMSLogic Hotelsoftware",
  url: siteConfig.url,
  inLanguage: "de-DE",
  publisher: organizationSchema
};

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Hotel Property Management System",
    operatingSystem: "Web",
    url: siteConfig.url,
    image: absoluteUrl(defaultSeoImage),
    description: siteConfig.description,
    provider: organizationSchema,
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Hotels, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen"
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/demo"),
      category: "Kostenlose Demo-Anfrage"
    },
    featureList: featureGroups.flatMap((group) =>
      group.items.map((item) => item.name)
    )
  };
}

export function serviceSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.label,
    description: service.metaDescription,
    url: absoluteUrl(`/leistungen/${service.slug}`),
    provider: organizationSchema,
    areaServed: {
      "@type": "Country",
      name: "Deutschland"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Hotellerie und Unterkunftsbetriebe"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.label} Module`,
      itemListElement: service.modules.map((module, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: module.title,
          description: module.text
        }
      }))
    }
  };
}

export function webPageSchema({
  name,
  description,
  path,
  primaryImage = defaultSeoImage
}: {
  name: string;
  description: string;
  path: string;
  primaryImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "de-DE",
    isPartOf: websiteSchema,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(primaryImage)
    },
    publisher: organizationSchema
  };
}

export function itemListSchema({
  name,
  description,
  items
}: {
  name: string;
  description: string;
  items: Array<{ name: string; path: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
      description: item.description
    }))
  };
}

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PMSLogic Website Navigation",
  itemListElement: primaryRoutes
    .filter((route) => route !== "/datenschutz" && route !== "/impressum" && route !== "/agb")
    .map((route, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: navigationLabels[route] ?? route,
      url: absoluteUrl(route)
    }))
};

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "de-DE",
    articleSection: "Hotelsoftware Ratgeber",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/pmslogo.png")
      }
    },
    isPartOf: websiteSchema,
    mainEntityOfPage: absoluteUrl(`/ratgeber/${post.slug}`)
  };
}
