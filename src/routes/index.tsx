import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nandha Traders | Indian Rice & Urad Dal Supplier" },
      { name: "description", content: "Premium Indian rice varieties and urad dal from Nandha Traders, Perambalur, Tamil Nadu." },
      { property: "og:title", content: "Nandha Traders | Indian Rice & Urad Dal Supplier" },
      { property: "og:description", content: "Premium Indian rice varieties and urad dal from Nandha Traders, Perambalur, Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  // The real deliverable is the pure static site in /public/site. Sending the
  // browser there directly (instead of framing it) keeps native scrolling,
  // sticky headers and the address bar working on phones.
  loader: () => {
    throw redirect({ href: "/site/index.html" });
  },
});
