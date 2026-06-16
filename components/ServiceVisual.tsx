import {
  ArrowRight,
  Bot,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  CreditCard,
  DatabaseZap,
  MessageSquareText,
  Sparkles
} from "lucide-react";

const icons = [
  CalendarCheck,
  ClipboardCheck,
  MessageSquareText,
  CreditCard,
  ChartNoAxesCombined,
  DatabaseZap,
  Bot,
  Sparkles
];

export function ServiceVisual({
  title,
  steps
}: {
  title: string;
  steps: string[];
}) {
  return (
    <figure className="service-visual" aria-label={`${title} Prozessgrafik`}>
      <figcaption className="sr-only">
        Vereinfachte Prozessgrafik für {title}: {steps.join(", ")}.
      </figcaption>
      <div className="service-visual-head">
        <span>PMSLogic Flow</span>
        <strong>{title}</strong>
      </div>
      <div className="service-flow">
        {steps.map((step, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div className="service-flow-item" key={step}>
              <div className="service-flow-icon">
                <Icon aria-hidden="true" />
              </div>
              <span>{step}</span>
              {index < steps.length - 1 ? (
                <ArrowRight className="service-flow-arrow" aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export function BlogGraphic({ label }: { label: string }) {
  return (
    <figure className="blog-graphic" aria-label={`${label} Ratgebergrafik`}>
      <figcaption className="sr-only">
        Abstrakte Ratgebergrafik mit Hotelsoftware-Prozess und PMSLogic
        Kontrollpunkten.
      </figcaption>
      <div className="blog-graphic-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="blog-graphic-card">
        <p className="eyebrow">Ratgeber</p>
        <h3>{label}</h3>
        <div className="blog-graphic-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </figure>
  );
}
