import {
  Bell,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hotel,
  MessageSquareText,
  Sparkles
} from "lucide-react";

export function DashboardMockup() {
  const rooms = [
    ["101", "Anreise", "clean"],
    ["102", "Bleibt", "occupied"],
    ["103", "Abreise", "dirty"],
    ["201", "Frei", "ready"],
    ["202", "VIP", "occupied"],
    ["203", "Wartung", "blocked"]
  ];

  return (
    <figure
      className="mockup dashboard-mockup"
      aria-label="PMSLogic Dashboard-Mockup mit Belegungsübersicht, Reservierungsliste, Zimmerstatus und Umsatzdiagramm"
    >
      <figcaption className="sr-only">
        Dashboard-Mockup der PMSLogic Hotelsoftware mit Belegungsübersicht,
        Reservierungsliste, Zimmerstatus, Housekeeping und Umsatzdiagramm.
      </figcaption>
      <div className="mockup-topbar">
        <span />
        <span />
        <span />
        <strong>PMSLogic · Tagesübersicht</strong>
      </div>
      <div className="dashboard-layout">
        <aside className="mockup-sidebar">
          {["Frontdesk", "Belegung", "Gäste", "Zimmer", "PMSAI"].map(
            (item, index) => (
              <span key={item} className={index === 0 ? "active" : ""}>
                {item}
              </span>
            )
          )}
        </aside>
        <div className="mockup-main">
          <div className="metric-row">
            <div>
              <span>Anreisen</span>
              <strong>18</strong>
            </div>
            <div>
              <span>Belegung</span>
              <strong>82%</strong>
            </div>
            <div>
              <span>Offene Aufgaben</span>
              <strong>7</strong>
            </div>
          </div>
          <div className="mockup-split">
            <div className="timeline-panel">
              <div className="panel-head">
                <span>Belegungsplan</span>
                <CalendarCheck aria-hidden="true" />
              </div>
              <div className="timeline-grid">
                {rooms.map((room) => (
                  <div className={`room-row ${room[2]}`} key={room[0]}>
                    <span>{room[0]}</span>
                    <div>
                      <span>{room[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reservation-panel">
              <div className="panel-head">
                <span>Reservierungen</span>
                <Clock3 aria-hidden="true" />
              </div>
              {["Müller · Suite", "Hansen · DZ", "Klein · Apartment"].map(
                (item) => (
                  <div className="reservation-row" key={item}>
                    <span>{item}</span>
                    <strong>Heute</strong>
                  </div>
                )
              )}
              <div className="ai-note">
                <Sparkles aria-hidden="true" />
                <span>PMSAI erkennt 3 passende Upselling-Chancen.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function HousekeepingMockup() {
  return (
    <figure
      className="mockup housekeeping-mockup"
      aria-label="Housekeeping-Board der PMSLogic Hotelsoftware mit Reinigungsstatus und Aufgaben"
    >
      <figcaption className="sr-only">
        Housekeeping-Board mit Zimmerstatus, Reinigungsprioritäten und offenen
        Aufgaben.
      </figcaption>
      <div className="mockup-card-head">
        <div>
          <p className="eyebrow">PMSHousekeeping</p>
          <h3>Zimmerstatus</h3>
        </div>
        <CheckCircle2 aria-hidden="true" />
      </div>
      <div className="status-columns">
        <div>
          <span className="status-label">Bereit</span>
          <strong>24</strong>
        </div>
        <div>
          <span className="status-label">In Reinigung</span>
          <strong>9</strong>
        </div>
        <div>
          <span className="status-label">Prüfen</span>
          <strong>5</strong>
        </div>
      </div>
      <div className="task-list">
        {[
          "Suite 203 vorziehen",
          "Babybett in 118 vorbereiten",
          "Minibar-Prüfung Etage 2"
        ].map((task) => (
          <div key={task}>
            <span />
            <p>{task}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function RevenueMockup() {
  return (
    <figure
      className="mockup revenue-mockup"
      aria-label="Umsatzdiagramm und Forecasting-Mockup der PMSLogic Hotelmanagement Software"
    >
      <figcaption className="sr-only">
        Umsatzdiagramm mit Forecasting, Belegung und RevPAR-ähnlichen
        Auswertungen.
      </figcaption>
      <div className="mockup-card-head">
        <div>
          <p className="eyebrow">PMSRevenue</p>
          <h3>Auslastung & Umsatz</h3>
        </div>
        <Euro aria-hidden="true" />
      </div>
      <div className="bar-chart" aria-hidden="true">
        {[42, 64, 58, 76, 84, 70, 92].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="forecast-row">
        <span>Nachfrage nächste 14 Tage</span>
        <strong>steigend</strong>
      </div>
    </figure>
  );
}

export function AIAssistantMockup() {
  return (
    <figure
      className="mockup ai-mockup"
      aria-label="PMSAI Assistenz-Karte mit Antwortvorschlag und Aufgabenhinweisen"
    >
      <figcaption className="sr-only">
        PMSAI Assistenz-Karte mit Zusammenfassung, Antwortvorschlag und
        automatisierten Erinnerungen.
      </figcaption>
      <div className="mockup-card-head">
        <div>
          <p className="eyebrow">PMSAI</p>
          <h3>Assistenz für den Hotelalltag</h3>
        </div>
        <Bot aria-hidden="true" />
      </div>
      <div className="ai-message">
        <MessageSquareText aria-hidden="true" />
        <p>
          Entwurf vorbereitet: Antwort zur frühen Anreise inklusive
          Zimmerstatus und Zusatzangebot.
        </p>
      </div>
      <div className="ai-actions">
        <span>Reservierung zusammenfassen</span>
        <span>Aufgabe erstellen</span>
        <span>Upselling prüfen</span>
      </div>
    </figure>
  );
}

export function DemoRequestCard() {
  return (
    <figure
      className="mockup demo-card"
      aria-label="Demo-Anfrage-Karte für PMSLogic Hotelsoftware"
    >
      <figcaption className="sr-only">
        Demo-Anfrage-Karte mit Unterkunftsdaten und persönlichem Rückruf.
      </figcaption>
      <div className="mockup-card-head">
        <div>
          <p className="eyebrow">Demo-Anfrage</p>
          <h3>Persönlicher Termin</h3>
        </div>
        <Bell aria-hidden="true" />
      </div>
      <div className="demo-preview-fields">
        <span>Vorname</span>
        <span>Nachname</span>
        <span>Firmenname optional</span>
        <span>E-Mail</span>
        <span>Telefonnummer</span>
      </div>
      <div className="demo-preview-confirm">
        <Hotel aria-hidden="true" />
        <p>Wir melden uns zeitnah persönlich bei Ihnen.</p>
      </div>
    </figure>
  );
}
