"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={isOpen ? "site-header menu-open" : "site-header"}>
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {mainNavLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/demo" className="btn btn-primary btn-small">
            Kostenlose Demo anfragen
          </Link>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Navigation schließen" : "Navigation öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-nav-section">
            {mainNavLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-nav-actions">
            <Link href="/demo" className="btn btn-primary">
              Demo mit PMSLogic starten
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
