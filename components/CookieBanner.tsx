"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "pmslogic-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey) === "set") {
      setIsVisible(false);
    }
  }, []);

  function saveChoice(value: "accepted" | "declined") {
    window.localStorage.setItem(storageKey, "set");
    window.localStorage.setItem(`${storageKey}-value`, value);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-label="Cookie-Hinweis">
      <div>
        <strong>Cookie-Hinweis</strong>
        <p>
          Wir verwenden technisch notwendige Funktionen für den Betrieb dieser
          Website. Weitere Informationen finden Sie in der{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>
      </div>
      <div className="cookie-actions">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => saveChoice("declined")}
        >
          Ablehnen
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => saveChoice("accepted")}
        >
          Akzeptieren
        </button>
      </div>
    </aside>
  );
}
