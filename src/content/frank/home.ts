/**
 * Homepage copy, section by section, in the exact order of brief §4.
 * Every string is from the brief. Mock-up data uses fictional names and
 * fictional companies only. Copy v2: Frank finds, researches and drafts;
 * a person at Flowa approves every message; Frank follows up and books.
 */
export const home = {
  seo: {
    title: "Frank by Flowa | AI outbound agent that books B2B meetings",
    description: "Frank spots companies with a real reason to buy, researches the decision-maker and drafts the first message. A person checks every word, then Frank follows up and books the meeting.",
  },

  /** 4.1 */
  hero: {
    h1Light: "Your AI agent for ",
    h1Bold: "booking B2B meetings",
    sub: "Frank finds companies with a real reason to buy and drafts the first message. We approve every word. Frank books the meeting.",
    demo: "Book a demo",
    video: "See Frank in action",
    /** The demo video in the modal: one warm SaaS lead, from signal to booked meeting. */
    videoSrc: "video/frank-in-action.mp4",
    videoPoster: "video/poster.jpg",
    videoNote: "Example is illustrative. People and companies are fictional.",
    videoClose: "Close video",
    cards: {
      left: {
        label: "Spots buying signals",
        mini: { tag: "New signal", body: "Hiring 2 SDRs", time: "4h ago" },
        /** The left card cycles through these every 4 s. */
        cycle: [
          { tag: "New signal", body: "Hiring 2 SDRs", meta: "Brightline Software", time: "4h ago", person: "Oliver Hart" },
          { tag: "LinkedIn post", body: "“Pipeline is thin this quarter”", meta: "Kestrel Creative", time: "1h ago", person: "Tom Whitfield" },
          { tag: "Leadership change", body: "New Head of Sales", meta: "Northgate IT Services", time: "today", person: "Priya Nair" },
        ],
      },
      centre: { label: "Frank | AI Outbound Agent" },
      right: { label: "Books qualified meetings", mini: { tag: "Booked", body: "Priya Nair", time: "Tue 10:00" } },
    },
  },

  /** 4.3 */
  tabbed: {
    eyebrow: "Why Frank",
    h2: "Every meeting starts with a reason",
    sub: "Frank looks for intent, not just names on a list.",
    mock: {
      countBold: "214",
      countRest: " companies with a signal this week",
      toggle: "Only 10–200 employees",
      promptLead: "Hi there, ",
      promptBold: "who should we reach this week?",
      promptPlaceholder: "Describe your ideal customer",
      search: "Search",
      sources: ["LinkedIn posts", "Job ads", "Company news", "Comments"],
      /** Fictional people at fictional companies. */
      prospects: [
        { name: "Oliver Hart", title: "Head of Sales", company: "Brightline Software", size: "120 people", signal: "Hiring SDRs" },
        { name: "Priya Nair", title: "CRO", company: "Northgate IT Services", size: "85 people", signal: "New in role" },
        { name: "Tom Whitfield", title: "Founder", company: "Kestrel Creative", size: "40 people", signal: "Asked for recs" },
        { name: "Sofie Madsen", title: "COO", company: "Example SaaS", size: "60 people", signal: "UK expansion" },
      ],
    },
    tabs: [
      { key: "moment", title: "The right moment", feature: "Live buying signals.", body: "Frank reads LinkedIn posts, comments, job ads and company news every day, and picks up teams with a real reason to talk now." },
      { key: "person", title: "The right person", feature: "Checked against your ICP.", body: "Every lead passes the same checklist and needs a dated signal we can point to. Zero leads beats wrong leads." },
      { key: "words", title: "The right words", feature: "One-to-one drafts.", body: "Frank writes a short first message that opens with the thing they actually said. No templates, no AI-sounding fluff." },
      { key: "hands", title: "The right hands", feature: "A human checks every message.", body: "Nothing goes out until someone at Flowa has read and approved it. That keeps reply rates high and your name safe." },
    ],
  },

  /** 4.4 */
  sharper: {
    headline: "Frank gets sharper every week",
    cta: "Book a demo",
    caption: "Signals and messages that don't turn into meetings are dropped. The ones that work are used again.",
  },

  /** 4.5 */
  useCases: {
    eyebrow: "Use cases",
    h2: "One agent, your whole outbound",
    sub: "From the first signal to a meeting in your calendar.",
    items: [
      { key: "signal", title: "Signal-based outbound", body: "Reach companies at the moment they show a need, not months after a list was exported." },
      { key: "email", title: "Cold email, done carefully", body: "Short sequences on verified data, with domain setup and deliverability handled for you." },
      { key: "linkedin", title: "LinkedIn outreach", body: "Connection notes and messages drafted one to one by Frank and approved by a person before they go out." },
      { key: "accounts", title: "Named target accounts", body: "Give Frank the companies you want. He finds the people and opens the door." },
      { key: "noshow", title: "No-show recovery", body: "Missed meetings are followed up and rebooked, and a no-show is never counted as delivered." },
      { key: "crm", title: "CRM and live dashboard", body: "Every reply and booked meeting syncs to your CRM. Watch it happen on your live dashboard." },
    ],
  },

  /** 4.6 */
  meet: {
    eyebrow: "Meet Frank",
    h2: "Works while you sleep",
    sub: "Frank does the digging. We keep the quality.",
    nameBar: "Frank | AI Outbound Agent",
    rows: [
      {
        key: "finds",
        frankSide: "left" as const,
        pose: "portrait" as const,
        title: "Finds the buyers",
        sub: "Intent, not lists.",
        body: "Every morning Frank scans for people showing a need right now, scores them against your ideal customer profile and writes a short brief: why now, and what to open with.",
        mock: { stat: "1,240 companies scanned", chips: ["Why now: hiring two SDRs", "Open with: new UK office"] },
      },
      {
        key: "writes",
        frankSide: "right" as const,
        pose: "laptop" as const,
        title: "Writes the first line",
        sub: "Drafted by Frank. Approved by a person.",
        body: "Frank drafts a personal message for LinkedIn or email. A Flowa specialist checks it, tweaks it if needed and sends it at a safe, human pace.",
        mock: { stat: "Draft ready for review" },
      },
      {
        key: "books",
        frankSide: "left" as const,
        pose: "thumbs" as const,
        title: "Books the meeting",
        sub: "Replies handled. Calendar filled.",
        body: "When someone replies, we qualify the interest against the criteria we agreed with you, and the meeting lands in your calendar with the context you need.",
        mock: { stat: "4 new meetings booked", insight: "Lead qualified for a first meeting" },
      },
    ],
    caption: "Signals and messages that don't turn into meetings are dropped. The ones that work are used again.",
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
    /** The founder's own quote, until a client quote is approved. */
    quote: "We'd rather run five campaigns properly than twenty badly. That's why we take on a limited number of clients at a time.",
    quoteName: "Ahmed",
    quoteRole: "Co-founder, Flowa",
    stats: [
      { value: "6+", label: "years of B2B outbound" },
      { value: "2,000+", label: "meetings booked" },
      { value: "£3.4M+", label: "revenue generated for clients" },
      { value: "£90K+", label: "record annual sale from one meeting" },
    ],
    footnote: "Flowa's own records, all engagements to date.",
  },

  /** 4.10 */
  contact: {
    h2: "Let Frank prospect. You take the meetings.",
    sub: "See how Frank can build your pipeline, qualify replies and book the meetings your team wants.",
    points: ["A reply from Ahmed or Anton within one working day", "Every message checked by a person", "Your data stays yours"],
  },

  /** 4.11, built but hidden behind a flag until approved quotes exist. */
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
      { q: "What is Frank?", a: "Frank is Flowa's AI outbound agent. He finds companies showing a real reason to buy, researches the decision-maker and drafts the first message. Our team approves every message, and Frank follows up until there's a meeting in your calendar." },
      { q: "Is it all automated?", a: "The research and the drafts are. The sending isn't. A person reads and approves every message, because one bad message costs more than ten good ones earn." },
      { q: "Does Frank replace my sales team?", a: "No. Frank fills the calendar. Your team does what it's best at: the conversation and the close." },
      { q: "Who is behind Frank?", a: "Flowa's co-founders, Ahmed and Anton. They set up your campaign, agree your qualification criteria with you and check the outreach." },
      { q: "Where does Frank find leads?", a: "Public buying signals: LinkedIn posts and comments, job ads, leadership changes and company news. Then verified contact data. No bought lists blasted at scale." },
      { q: "What counts as a qualified meeting?", a: "We agree it with you before we start: role or decision-making authority, genuine interest and a match with your ideal customer profile. It's written down, so there's no ambiguity later." },
      { q: "What does it cost?", a: "It depends on your market and volume. Answer three quick questions on our pricing page and we'll send you a quote within one working day.", link: { label: "Go to pricing", href: "/pricing" } },
      { q: "Who owns the data?", a: "You do. Every list, contact and campaign asset built for you stays yours." },
      { q: "Does Frank work with our CRM?", a: "Booked meetings and replies can be shared with the CRM you already use. We set it up with you during onboarding." },
      { q: "How quickly can we start?", a: "After a first call we agree strategy and your ideal customer profile. Onboarding usually starts shortly after." },
    ],
  },

  /** 4.14 */
  trust: {
    h3: "Your data, your pipeline",
    body: "Your data stays yours. Every list, contact and campaign asset belongs to you.",
  },
} as const;
