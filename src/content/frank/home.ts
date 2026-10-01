/**
 * Homepage copy, section by section, in the exact order of brief §4.
 * Every string is from the brief. Mock-up data uses fictional names and
 * fictional companies only. [CONFIRM] placeholders are left as written.
 */
export const home = {
  seo: {
    title: "Frank by FLOWA | AI outbound agent that books B2B meetings",
    description: "Frank finds companies with a reason to buy now, reaches decision-makers on email and LinkedIn and books qualified meetings into your calendar.",
  },

  /** 4.1 */
  hero: {
    h1Light: "Your AI agent for ",
    h1Bold: "booking B2B meetings",
    sub: "Frank finds companies with a reason to buy now, starts the conversation on email and LinkedIn, and books qualified meetings into your calendar.",
    demo: "Book a demo",
    video: "See Frank in action",
    /** The video modal. [CONFIRM video] is shown inside the modal as a visible placeholder. */
    videoPlaceholder: "[CONFIRM video] A 60–90 second product video goes here.",
    videoClose: "Close video",
    cards: {
      left: { label: "Spots buying signals", mini: { tag: "New signal", body: "Hiring 2 SDRs", time: "4h ago" } },
      centre: { label: "Frank | AI Outbound Agent" },
      right: { label: "Books qualified meetings", mini: { tag: "Qualified meeting", body: "Head of Sales", time: "Tue 10:00" } },
    },
  },

  /** 4.3 */
  tabbed: {
    eyebrow: "Why Frank",
    h2: "Every meeting starts with a reason",
    sub: "Frank learns what works, then does more of it.",
    mock: {
      countBold: "214",
      countRest: " companies with a signal this week",
      toggle: "Only 10–200 employees",
      promptLead: "Hi there, ",
      promptBold: "who should we reach this week?",
      promptPlaceholder: "Describe your ideal customer",
      search: "Search",
      sources: ["LinkedIn", "Job boards", "Company news", "+ more sources"],
      /** Fictional people at fictional companies. */
      prospects: [
        { name: "Oliver Hart", title: "Head of Sales", company: "Brightline Software", size: "120 employees" },
        { name: "Priya Nair", title: "CRO", company: "Northgate IT Services", size: "85 employees" },
        { name: "Tom Whitfield", title: "Founder", company: "Kestrel Creative", size: "40 employees" },
        { name: "Sofie Madsen", title: "COO", company: "Example SaaS", size: "60 employees" },
      ],
    },
    tabs: [
      { key: "companies", title: "The right companies", feature: "Signal-based targeting.", body: "Frank reads job posts, leadership changes, expansion news and founder posts every day, and only picks companies with a real reason to talk now." },
      { key: "person", title: "The right person", feature: "Verified decision-makers.", body: "Every role is confirmed and every email address is checked before anyone is contacted." },
      { key: "channel", title: "The right channel", feature: "Email and LinkedIn together.", body: "Frank runs coordinated sequences across email and LinkedIn and adapts to how each prospect responds." },
      { key: "words", title: "The right words", feature: "One-to-one personalisation.", body: "Every first line opens with a real fact about the company, so the message reads like it was written for them, because it was." },
    ],
  },

  /** 4.4 */
  sharper: {
    headline: "Frank gets sharper every week",
    cta: "Book a demo",
    caption: "Routes that stop producing meetings are dropped. The ones that work run again.",
  },

  /** 4.5 */
  useCases: {
    eyebrow: "Use cases",
    h2: "One agent, your whole outbound",
    sub: "From the first signal to a meeting in your calendar.",
    items: [
      { key: "signal", title: "Signal-based outbound", body: "Reach companies at the moment they show a need, not months after a list was exported." },
      { key: "email", title: "Cold email at scale", body: "Sequences on verified data, with domain setup and deliverability handled for you." },
      { key: "linkedin", title: "LinkedIn outreach", body: "Connection requests and messages written one to one, where decision-makers already are." },
      { key: "accounts", title: "Named target accounts", body: "Give Frank the companies you want. He finds the people and opens the door." },
      { key: "noshow", title: "No-show recovery", body: "Missed meetings are followed up and rebooked, and a no-show is never counted as delivered." },
      { key: "crm", title: "CRM and live dashboard", body: "Every reply and booked meeting syncs to your CRM. Watch it happen on your live dashboard." },
    ],
  },

  /** 4.6 */
  meet: {
    eyebrow: "Meet Frank",
    h2: "Works while you sleep",
    sub: "One agent. Every step of outbound.",
    nameBar: "Frank | AI Outbound Agent",
    rows: [
      {
        key: "finds",
        frankSide: "left" as const,
        pose: "portrait" as const,
        title: "Finds the buyers",
        sub: "Outbound that runs itself.",
        body: "Frank scans the market daily, scores every company against your ideal customer profile and writes a short research brief: why now, and what to open with.",
        mock: { stat: "1,240 companies scanned", chips: ["Why now: hiring two SDRs", "Open with: new UK office"] },
      },
      {
        key: "books",
        frankSide: "right" as const,
        pose: "laptop" as const,
        title: "Books the meeting",
        sub: "Replies handled. Calendar filled.",
        body: "Frank answers replies, separates genuine interest from a polite yes and books qualified meetings straight into your calendar, with the context you need before you join.",
        mock: { stat: "4 new meetings booked", insight: "Lead qualified for a first meeting" },
      },
      {
        key: "learns",
        frankSide: "left" as const,
        pose: "portrait" as const,
        title: "Keeps learning",
        sub: "Better every week.",
        body: "Frank tracks which signals, messages and channels turn into meetings, and shifts effort to what works for your market.",
        mock: { stat: "3 new signals detected", chips: ["Buying signal", "Buying signal", "Buying signal"], trendLabel: "Reply rate, last 6 weeks" },
      },
    ],
  },

  /** 4.7 */
  calendars: {
    headline: "Built to fill calendars",
    cta: "Book a demo",
  },

  /** 4.8 */
  who: {
    eyebrow: "Who it's for",
    h2: "Pipeline for the whole company",
    sub: "Founders get pipeline. Sales closes. Nobody builds lists.",
    columns: [
      { key: "founders", icon: "trend" as const, title: "Founders and CEOs", body: "Predictable pipeline without hiring an SDR team." },
      { key: "sales", icon: "calendar" as const, title: "Sales teams", body: "Show up to qualified meetings. Skip the prospecting." },
      { key: "revenue", icon: "magnifier" as const, title: "Revenue leaders", body: "One clear view of signals, replies and booked meetings." },
    ],
  },

  /** 4.9 */
  proof: {
    h2Light: "Measured in ",
    h2Bold: "meetings",
    h2Rest: ", not promises",
    /**
     * [CONFIRM: approved client quote, name, title, company]. Until it is
     * approved the real founder quote below is shown instead, as the brief
     * instructs.
     */
    quote: "We'd rather run five campaigns properly than twenty badly. That's why we take on a limited number of clients at a time.",
    quoteName: "Ahmed",
    quoteRole: "Co-founder, FLOWA",
    stats: [
      { value: "6+", label: "years of B2B outbound" },
      { value: "2,000+", label: "meetings booked" },
      { value: "£3.4M+", label: "revenue generated for clients" },
      { value: "£90K+", label: "record annual sale from one meeting" },
    ],
    footnote: "FLOWA's own records, all engagements to date.",
  },

  /** 4.10 */
  contact: {
    h2: "Let Frank prospect. You take the meetings.",
    sub: "See how Frank can build your pipeline, qualify replies and book the meetings your team wants.",
  },

  /** 4.11, built but hidden behind a flag until approved quotes exist. [CONFIRM] */
  testimonials: {
    enabled: false,
    title: "What clients say about Frank",
    prev: "Previous testimonial",
    next: "Next testimonial",
    items: [] as { quote: string; name: string; role: string; company: string }[],
  },

  /** 4.12 */
  finalCta: {
    eyebrow: "See it in action",
    h2: "Frank works. You close.",
    cta: "Book a demo",
  },

  /** 4.13 */
  faq: {
    h2: "Frequently asked questions",
    items: [
      { q: "What is Frank?", a: "Frank is FLOWA's AI outbound agent. He finds companies with a reason to buy now, contacts the right decision-makers on email and LinkedIn, and books qualified meetings into your calendar." },
      { q: "Does Frank replace my sales team?", a: "No. Frank fills the calendar. Your team does what it's best at: the conversation and the close." },
      { q: "Who is behind Frank?", a: "FLOWA's co-founders, Ahmed and Anton. They set up your campaign, agree your qualification criteria with you and oversee the results." },
      { q: "What counts as a qualified meeting?", a: "We agree it with you before we start: role or decision-making authority, genuine interest and a match with your ideal customer profile. It's written down, so there's no ambiguity later." },
      { q: "What does it cost?", a: "It depends on your market and volume. Answer three quick questions on our pricing page and we'll send you a quote within one working day.", link: { label: "Go to pricing", href: "/pricing" } },
      { q: "Who owns the data?", a: "You do. Every list, contact and campaign asset built for you stays yours." },
      { q: "Does Frank work with our CRM?", a: "Yes. Activity and booked meetings sync to the CRM you already use." },
      { q: "How quickly can we start?", a: "After a first call we agree strategy and your ideal customer profile. Onboarding usually starts shortly after." },
    ],
  },

  /** 4.14 */
  trust: {
    h3: "Your data, your pipeline",
    body: "Your data stays yours. Every list, contact and campaign asset belongs to you.",
  },
} as const;
