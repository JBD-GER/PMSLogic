import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  siteConfig,
  siteNavigationSchema,
  websiteSchema
} from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PMSLogic | Moderne Hotelsoftware und Cloud Hotel PMS",
    template: "%s"
  },
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon.png",
        type: "image/png"
      }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0066E6",
  colorScheme: "light"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body>
        <JsonLd id="organization-jsonld" data={organizationSchema} />
        <JsonLd id="website-jsonld" data={websiteSchema} />
        <JsonLd id="site-navigation-jsonld" data={siteNavigationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
