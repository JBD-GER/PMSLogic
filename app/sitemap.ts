import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  audiencePages,
  blogPosts,
  primaryRoutes,
  servicePages
} from "@/lib/content";

const defaultLastModified = new Date("2026-06-16");

function routePriority(route: string) {
  if (route === "/") return 1;
  if (route === "/demo" || route === "/kontakt") return 0.94;
  if (route === "/leistungen" || route === "/funktionen") return 0.9;
  if (route.startsWith("/leistungen/")) return 0.86;
  if (route === "/zielgruppen" || route.startsWith("/hotelsoftware-")) return 0.84;
  if (route === "/integrationen" || route === "/faq") return 0.82;
  if (route === "/ratgeber") return 0.8;
  if (route.startsWith("/ratgeber/")) return 0.76;
  if (route === "/datenschutz" || route === "/impressum" || route === "/agb") return 0.25;
  return 0.7;
}

function routeChangeFrequency(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/" || route === "/ratgeber" || route.startsWith("/ratgeber/")) return "weekly";
  if (route === "/datenschutz" || route === "/impressum" || route === "/agb") return "yearly";
  return "monthly";
}

function routeLastModified(route: string) {
  const blogPost = blogPosts.find((post) => `/ratgeber/${post.slug}` === route);
  return blogPost ? new Date(blogPost.date) : defaultLastModified;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...primaryRoutes,
    ...servicePages.map((service) => `/leistungen/${service.slug}`),
    ...audiencePages.map((page) => `/${page.slug}`),
    ...blogPosts.map((post) => `/ratgeber/${post.slug}`)
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: absoluteUrl(route),
    lastModified: routeLastModified(route),
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route)
  }));
}
