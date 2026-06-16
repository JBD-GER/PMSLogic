import {
  BarChart3,
  BedDouble,
  Bot,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  DatabaseZap,
  FileText,
  MessagesSquare,
  Network,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { FeatureGroup } from "@/lib/content";

const iconSet = [
  CalendarDays,
  BedDouble,
  UsersRound,
  ClipboardCheck,
  FileText,
  CreditCard,
  MessagesSquare,
  BarChart3,
  Network,
  Bot,
  DatabaseZap,
  Sparkles
];

export function FeatureGroupSection({
  group,
  index
}: {
  group: FeatureGroup;
  index: number;
}) {
  const GroupIcon = iconSet[index % iconSet.length];

  return (
    <section className="feature-group" id={group.title.toLowerCase()}>
      <div className="feature-group-head">
        <div className="feature-group-icon">
          <GroupIcon aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">{group.eyebrow}</p>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
        </div>
      </div>
      <div className="feature-card-grid">
        {group.items.map((item, itemIndex) => {
          const ItemIcon = iconSet[(index + itemIndex + 1) % iconSet.length];

          return (
            <article className="feature-card" key={item.name}>
              <div className="mini-icon">
                <ItemIcon aria-hidden="true" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CompactFeatureGrid({
  items
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="compact-grid">
      {items.map((item, index) => {
        const Icon = iconSet[index % iconSet.length];

        return (
          <article className="compact-card" key={item.title}>
            <div className="mini-icon">
              <Icon aria-hidden="true" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
