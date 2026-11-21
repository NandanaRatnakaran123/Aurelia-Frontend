import type { Metadata } from "next";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Aurelia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Aurelia Events — Luxury Event Management",
  description:
    "Aurelia is a luxury event planning and design studio crafting weddings, social events and corporate celebrations to be treasured.",
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: siteConfig.name, type: "website" },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}
