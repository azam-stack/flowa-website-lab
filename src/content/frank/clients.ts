/**
 * The client logos in the marquee (brief §3.4): Adversus, Generaxion,
 * Lemon Marketing, DataPeeps and PartnerTeam. The files in public/logos
 * were supplied by the companies themselves and are used as supplied
 * (see the live site's history for how each was processed). Links are
 * kept. `scale` is a per-logo optical correction set by eye at 1440px.
 */
export type Client = { name: string; slug: string; url: string; scale?: number; format?: "svg" | "png" };

export const clients: Client[] = [
  { name: "Adversus", slug: "adversus", url: "https://adversus.io", format: "png", scale: 0.9 },
  { name: "Generaxion", slug: "generaxion", url: "https://generaxion.com", format: "png", scale: 0.66 },
  { name: "Lemon Marketing", slug: "lemon-marketing", url: "https://lemonmarketing.dk", format: "png", scale: 1.1 },
  { name: "DataPeeps", slug: "datapeeps", url: "https://datapeeps.dk", format: "svg", scale: 1.2 },
  { name: "PartnerTeam", slug: "partner-team", url: "https://partnerteam.dk", format: "png", scale: 1.25 },
];
