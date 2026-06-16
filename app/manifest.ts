import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PMSLogic Hotelsoftware",
    short_name: "PMSLogic",
    description:
      "Moderne Hotelsoftware und Cloud Hotel PMS für Reservierungen, Frontdesk, Housekeeping, Rechnungen, Integrationen und PMSAI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066E6",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
