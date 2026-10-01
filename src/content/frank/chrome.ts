/**
 * Global chrome copy for "Frank by FLOWA": announcement bar, navigation,
 * chat widget, logo marquee and footer. Brief §3. Every string here is
 * taken from the brief; nothing is invented.
 *
 * Items marked [CONFIRM] are deliberately left as written in the brief.
 * They are either hidden behind a flag or shown as a visible placeholder
 * and must be resolved before launch.
 */
export const announcement = {
  lead: "Meet Frank,",
  rest: " your new AI outbound agent",
  href: "/frank",
  ariaLabel: "Meet Frank, your new AI outbound agent",
} as const;

export type MenuItem = { title: string; description: string; href: string; icon: "frank" | "steps" | "signals" | "mail" | "linkedin" | "cases" | "faq" | "about" | "contact" };
export type MenuGroup = { key: string; label: string; items: MenuItem[] };

export const nav = {
  groups: [
    {
      key: "product",
      label: "Product",
      items: [
        { title: "Frank – AI Outbound Agent", description: "Meet the agent that fills your calendar.", href: "/frank", icon: "frank" },
        { title: "How Frank works", description: "Target, reach, qualify, book.", href: "/how-it-works", icon: "steps" },
        { title: "Signals Frank watches", description: "The buying signals behind every meeting.", href: "/signals", icon: "signals" },
        { title: "Channels: Email", description: "Verified data, deliverability, sequences.", href: "/channels/email", icon: "mail" },
        { title: "Channels: LinkedIn", description: "One-to-one notes and messages.", href: "/channels/linkedin", icon: "linkedin" },
      ],
    },
    {
      key: "resources",
      label: "Resources",
      items: [
        { title: "Cases", description: "Meetings Frank has created, documented.", href: "/cases", icon: "cases" },
        { title: "FAQ", description: "Straight answers to the usual questions.", href: "/faq", icon: "faq" },
      ],
    },
    {
      key: "company",
      label: "Company",
      items: [
        { title: "About us", description: "The people behind Frank.", href: "/about", icon: "about" },
        { title: "Contact", description: "Talk to Ahmed or Anton.", href: "/contact", icon: "contact" },
      ],
    },
  ] as MenuGroup[],
  pricing: { label: "Pricing", href: "/pricing" },
  /**
   * Hidden until FLOWA provides a URL. [CONFIRM] Client dashboard URL.
   * While `href` is null the link is not rendered at all.
   */
  clientDashboard: { label: "Client dashboard", href: null as string | null },
  demo: { label: "Book a demo", href: "/demo" },
  menuOpen: "Open menu",
  menuClose: "Close menu",
  skipToContent: "Skip to content",
} as const;

export const chat = {
  greeting: "Hi, I'm Frank. Want me to fill your calendar?",
  meta: "Frank · now",
  placeholder: "Ask Frank anything",
  bookMeeting: "Book a meeting",
  bookMeetingHref: "/demo",
  send: "Send",
  open: "Open chat with Frank",
  close: "Close chat",
  quickRepliesHeading: "Here is what I can help with:",
  quickReplies: [
    { label: "How does Frank work?", href: "/how-it-works" },
    { label: "What does it cost?", href: "/pricing" },
    { label: "Book a meeting", href: "/demo" },
  ],
} as const;

export const marquee = {
  heading: "Companies Frank has booked meetings for",
} as const;

export const footer = {
  tagline: "Frank finds the buyers. You close the deals.",
  email: "info@flowa.dk",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Frank", href: "/frank" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Signals", href: "/signals" },
        { label: "Email", href: "/channels/email" },
        { label: "LinkedIn", href: "/channels/linkedin" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Cases", href: "/cases" },
        { label: "Contact", href: "/contact" },
      ],
    },
    { heading: "Resources", links: [{ label: "FAQ", href: "/faq" }] },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
        { label: "Terms", href: "/terms" },
        { label: "Refunds", href: "/refunds" },
      ],
    },
  ],
  bottom: "© 2026 FLOWA. Frank is an AI agent built and operated by FLOWA.",
} as const;

/** Shared call-to-action labels. */
export const cta = {
  demo: "Book a demo",
  demoHref: "/demo",
  quote: "Get my quote",
  contact: "Get in touch",
} as const;
