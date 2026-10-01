/**
 * Site-wide configuration for Frank by Flowa. Anything that differs
 * between environments is read from Vite env variables here, in one
 * place, and nowhere else.
 *
 * - VITE_CONTACT_ENDPOINT: the POST endpoint for contact and quote
 *   submissions (the backend/ Cloudflare Worker). The deploy workflow
 *   already passes it. For a local test worker, set it in .env.local.
 *   Unset: the forms open the visitor's email client and say so.
 * - VITE_CLIENT_DASHBOARD_URL: the "Client dashboard" nav link. Unset:
 *   the link is not rendered at all.
 * - VITE_SITE_URL: the canonical origin of this draft. Defaults to the
 *   GitHub Pages preview.
 * - VITE_DRAFT: "false" removes the noindex meta. Default: draft on.
 */
const env = import.meta.env;

export const SITE_CONFIG = {
  name: "Frank by Flowa",
  company: "Flowa",
  siteUrl: ((env.VITE_SITE_URL as string | undefined) || "https://azam-stack.github.io/flowa-website-lab").replace(/\/$/, ""),
  locale: "en_GB",
  lang: "en-GB",
  draft: (env.VITE_DRAFT as string | undefined) !== "false",
  leadEndpoint: (env.VITE_CONTACT_ENDPOINT as string | undefined) || null,
  clientDashboardUrl: (env.VITE_CLIENT_DASHBOARD_URL as string | undefined) || null,
  /** Draft analytics only: events stay in window.dataLayer. Nothing is beaconed anywhere. */
  analyticsEndpoint: null as string | null,
  email: "info@flowa.dk",
  ogImage: "/og-image.png",
} as const;
