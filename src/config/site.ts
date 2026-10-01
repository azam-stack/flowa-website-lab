/**
 * Site-wide configuration for the Frank draft. Anything that differs
 * between environments is read from Vite env variables here, in one
 * place, and nowhere else.
 *
 * The draft never reads the live site's variables (VITE_CONTACT_ENDPOINT,
 * VITE_BOOKING_URL, VITE_ANALYTICS_ENDPOINT): brief §0 forbids touching
 * the live forms, their endpoints and the production analytics property.
 *
 * - VITE_DRAFT_LEAD_ENDPOINT: the draft environment's own POST endpoint
 *   for contact and quote submissions (a separate deployment of
 *   backend/). Unset: the forms open the visitor's email client and say so.
 * - VITE_CLIENT_DASHBOARD_URL: the "Client dashboard" nav link. Unset:
 *   the link is not rendered at all. [CONFIRM]
 * - VITE_SITE_URL: the canonical origin of this draft. Defaults to the
 *   GitHub Pages preview.
 * - VITE_DRAFT: "false" removes the noindex meta. Default: draft on.
 */
const env = import.meta.env;

export const SITE_CONFIG = {
  name: "Frank by FLOWA",
  company: "FLOWA",
  siteUrl: ((env.VITE_SITE_URL as string | undefined) || "https://azam-stack.github.io/flowa-website-lab").replace(/\/$/, ""),
  locale: "en_GB",
  lang: "en-GB",
  draft: (env.VITE_DRAFT as string | undefined) !== "false",
  leadEndpoint: (env.VITE_DRAFT_LEAD_ENDPOINT as string | undefined) || null,
  clientDashboardUrl: (env.VITE_CLIENT_DASHBOARD_URL as string | undefined) || null,
  /** Draft analytics only: events stay in window.dataLayer. Nothing is beaconed anywhere. */
  analyticsEndpoint: null as string | null,
  email: "info@flowa.dk",
  ogImage: "/og-image.png",
} as const;
