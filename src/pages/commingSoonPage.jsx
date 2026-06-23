import { useState, useEffect } from "react";
import FadeIn from "../components/FadeIn";

const c = {
  cream: "#F8F4EB",
  creamDeep: "#EFE8D6",
  navy: "#172537",
  navyDeep: "#0E1A28",
  gold: "#B8862E",
  goldLight: "#D9B068",
  ink: "#2B2B28",
  line: "#DCD3BC",
  muted: "#5A5648",
  faint: "#9A9180",
};

// ─── Shared Helpers ──────────────────────────────────────────────────────────
const Eyebrow = ({ children }) => (
  <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: c.gold }}>
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-center text-3xl mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
    {children}
  </h2>
);

const SectionSub = ({ children }) => (
  <p className="text-center text-sm leading-relaxed max-w-xl mx-auto mb-11" style={{ color: c.muted, lineHeight: "1.7" }}>
    {children}
  </p>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 inline-block ml-1">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// Using reusable FadeIn component from src/components/FadeIn.jsx

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onScrollTo }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center px-8 pt-24 pb-24 overflow-hidden"
      style={{ background: c.cream, minHeight: "92vh" }}
    >
      {/* Star-field dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(217,176,104,0.45) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "200px 200px, 80px 80px",
          backgroundPosition: "0 0, 40px 40px",
          animation: "drift 60s linear infinite",
        }}
      />
      {/* Radial overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(184,134,46,0.12), transparent), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(23,37,55,0.6), transparent)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase rounded-full px-5 py-2 mb-8 border"
          style={{ color: c.gold, borderColor: c.gold }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: c.gold,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          What's coming next at Wolf Stack
        </div>

        <h1
          className="text-4xl sm:text-6xl leading-tight mb-6 font-semibold"
          style={{ fontFamily: "'Fraunces', serif", color: c.navy, letterSpacing: "-0.5px" }}
        >
          The next chapter is
          <br />
          <em style={{ fontStyle: "italic", color: c.gold }}>already being built</em>
          <br />
          <span style={{ color: c.muted }}>— are you on the list?</span>
        </h1>

        <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: c.muted, lineHeight: "1.85" }}>
          Wolf Stack Automation is expanding far beyond websites and workflows. AI-powered tools, intelligent backends, voice systems, and predictive business intelligence — built for the businesses that want to move first.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <button
            onClick={() => onScrollTo("services")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
            style={{ background: c.gold, color: c.navyDeep, border: "none", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.background = c.goldLight; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            See What's Coming
          </button>
          <button
            onClick={() => onScrollTo("early-access")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
            style={{ background: "transparent", color: c.cream, border: `1px solid rgba(248,244,235,0.3)`, cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.cream; e.currentTarget.style.background = "rgba(248,244,235,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(248,244,235,0.3)"; e.currentTarget.style.background = "transparent"; }}
          >
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50"
        style={{ animation: "bobUp 2.8s ease-in-out infinite" }}
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ color: c.gold }}>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" style={{ color: c.gold }}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes drift { 0%{ background-position: 0 0, 40px 40px; } 100%{ background-position: 200px 200px, 120px 120px; } }
        @keyframes pulse { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.45; transform:scale(0.75); } }
        @keyframes bobUp { 0%,100%{ transform:translateX(-50%) translateY(0); } 50%{ transform:translateX(-50%) translateY(7px); } }
      `}</style>
    </div>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
const STATUS = {
  dev: { label: "In Development", color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.25)" },
  coming: { label: "Coming Soon", color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
  research: { label: "In Research", color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)" },
};

function ServiceCard({ icon, title, tagline, desc, bullets, eta, status }) {
  const [hovered, setHovered] = useState(false);
  const s = STATUS[status];

  return (
    <div
      className="flex flex-col p-8 relative overflow-hidden transition-all duration-250"
      style={{
        background: hovered ? "rgba(255,255,255,0.95)" : c.creamDeep,
        border: `1px solid ${c.line}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderRadius: "20px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: "radial-gradient(circle at 30% 30%, rgba(184,134,46,0.08), transparent 60%)",
        }}
      />

      {/* Status badge */}
      <div
        className="inline-flex items-center gap-1.5 text-[9.5px] font-bold tracking-wider uppercase rounded-full px-2.5 py-1 mb-4 self-start"
        style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
        {s.label}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
        style={{ background: "rgba(184,134,46,0.1)", border: "1px solid rgba(184,134,46,0.2)" }}
      >
        {icon}
      </div>

      <h3 className="text-xl mb-1.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>{title}</h3>
      <div className="text-xs font-semibold mb-3 tracking-wide" style={{ color: c.gold }}>{tagline}</div>
      <p className="text-sm mb-4 flex-1" style={{ color: c.muted, lineHeight: "1.8" }}>{desc}</p>

      <ul className="flex flex-col gap-2 mb-5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-xs" style={{ color: c.muted, lineHeight: "1.5" }}>
            <span style={{ color: c.gold, flexShrink: 0, marginTop: "2px" }}>→</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="text-xs mt-auto" style={{ color: c.faint }}>{eta}</div>
    </div>
  );
}

const services = [
  {
    icon: "🤖", status: "coming",
    title: "AI Business Integration", tagline: "Your business, supercharged by AI",
    desc: "We design and embed LLM-powered assistants, decision engines, and intelligent workflows directly into your existing business systems — not as a demo, but as a genuine operational layer.",
    bullets: ["Custom AI chatbots trained on your products and tone", "AI-powered lead qualification, 24/7", "Document generation — contracts, proposals, quotes — automated", "Intelligent email triage with context-aware routing", "AI knowledge bases for teams or customer self-service"],
    eta: "Estimated launch: Q3 2025",
  },
  {
    icon: "⚙️", status: "coming",
    title: "Advanced Backend Systems", tagline: "Infrastructure your business can actually grow on",
    desc: "Custom-engineered backend systems built from the ground up for your specific operations — not off-the-shelf platforms forced into your use case.",
    bullets: ["RESTful and GraphQL API development, documented and tested", "Custom database architecture modelled to your data", "Role-based access control for multi-user systems", "Webhooks and event-driven systems that react in real time", "Serverless deployment on AWS Lambda, Cloudflare, or Vercel Edge"],
    eta: "Estimated launch: Q3 2025",
  },
  {
    icon: "📱", status: "coming",
    title: "Mobile App Development", tagline: "Your business in your customers' pockets",
    desc: "Cross-platform mobile applications built with React Native — one codebase running natively on both iOS and Android, without sacrificing the feel of a native app.",
    bullets: ["React Native — one codebase, two native apps", "Push notifications, offline mode, camera/location integration", "Custom admin panels to manage content without a developer", "App Store and Google Play submission handled end-to-end", "In-app payment via Razorpay, Stripe, or PhonePe"],
    eta: "Estimated launch: Q4 2025",
  },
  {
    icon: "📊", status: "coming",
    title: "Business Intelligence Dashboards", tagline: "Your numbers, finally telling a story",
    desc: "Custom analytics dashboards that pull from all your tools — website, CRM, payments, inventory — into one real-time view, so you're not toggling between five tabs.",
    bullets: ["Unified dashboards connecting website, CRM, payment, and ops data", "Custom KPIs designed around what actually matters for your business", "Automated daily/weekly email reports so the numbers come to you", "Predictive revenue and lead forecasting", "Anomaly detection that alerts when something moves unexpectedly"],
    eta: "Estimated launch: Q4 2025",
  },
  {
    icon: "🎙️", status: "coming",
    title: "AI Voice & Phone Systems", tagline: "Answer every call, even when you can't",
    desc: "Intelligent voice automation that handles inbound calls, qualifies callers, answers FAQs, books appointments, and escalates genuine leads — 24 hours a day.",
    bullets: ["AI voice agents with a natural, brand-consistent voice", "Automated appointment booking synced to your calendar", "FAQ handling for pricing, hours, and services without a human", "Lead qualification and call routing to the right team member", "Call transcription, summary, and CRM logging after every call"],
    eta: "Estimated launch: Q1 2026",
  },
  {
    icon: "🛒", status: "coming",
    title: "Custom E-Commerce Systems", tagline: "An online store built for how you actually sell",
    desc: "Custom-built e-commerce for businesses whose model doesn't fit what Shopify or WooCommerce offer — whether that's B2B ordering, subscriptions, or complex pricing logic.",
    bullets: ["Custom product catalogues, variants, and pricing logic", "B2B ordering portals with per-account pricing", "Subscription and recurring billing integration", "Multi-gateway payment: Razorpay, PhonePe, UPI, cards, and BNPL", "Automated order confirmation, fulfilment updates, and returns"],
    eta: "Estimated launch: Q4 2025",
  },
  {
    icon: "💬", status: "coming",
    title: "WhatsApp Business Automation", tagline: "Your most-used channel, running on autopilot",
    desc: "End-to-end WhatsApp Business API automation — from first message through qualification, follow-up, booking, and post-service feedback — without manual intervention.",
    bullets: ["Official WhatsApp Business API integration (Meta verified)", "Automated lead qualification flows from incoming messages", "Broadcast campaigns to opted-in customers with personalised variables", "Appointment booking, reminders, and rescheduling over WhatsApp", "Post-service follow-up and review request sequences"],
    eta: "Estimated launch: Q3 2025",
  },
  {
    icon: "🗂️", status: "coming",
    title: "Custom CRM & ERP Systems", tagline: "Manage customers and operations in one place",
    desc: "Bespoke CRM and lightweight ERP designed around your business processes — not a generic SaaS product you have to adapt yourself.",
    bullets: ["Custom CRM with contact, deal, and pipeline management", "Sales pipeline tracking with stage-based automation", "Customer communication history in one timeline per contact", "Invoice generation and payment tracking", "Role-based team access, activity logs, and performance tracking"],
    eta: "Estimated launch: Q1 2026",
  },
  {
    icon: "🔐", status: "coming",
    title: "Cybersecurity Audits & Hardening", tagline: "Know where you're vulnerable before someone else does",
    desc: "Structured security audits, penetration testing, and remediation for businesses that store customer data, handle payments, or operate critical web systems.",
    bullets: ["Website and API vulnerability assessments and penetration testing", "SSL/TLS configuration review and hardening", "OWASP Top 10 audit and remediation", "Data handling review against Indian IT Act compliance", "Incident response planning and staff awareness documentation"],
    eta: "Estimated launch: Q2 2026",
  },
];

function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="services" style={{ background: c.cream }}>
      <Eyebrow>Upcoming Services</Eyebrow>
      <h2 className="text-center text-3xl mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
        Nine new capabilities, engineered and incoming
      </h2>
      <p className="text-center text-sm max-w-xl mx-auto mb-12" style={{ color: c.muted, lineHeight: "1.7" }}>
        Every service below is in active development, research, or design. Early access members get first access, launch pricing, and direct input into what gets built first.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 60}>
            <ServiceCard {...s} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
const timelineItems = [
  {
    q: "Q3",
    quarter: "Q3 2025 — In Active Development",
    title: "AI Business Integration · Advanced Backend Systems · WhatsApp Business Automation",
    desc: "The three services furthest along in development. AI Business Integration and WhatsApp Automation are currently in closed beta with two existing clients. Advanced Backend Systems is already available to Business Pro plan clients in a limited capacity.",
  },
  {
    q: "Q4",
    quarter: "Q4 2025 — Coming Soon",
    title: "Mobile App Development · Business Intelligence Dashboards · Custom E-Commerce Systems",
    desc: "Three larger-scope services launching in the final quarter. Mobile App Development and E-Commerce Systems are in the design phase; Business Intelligence Dashboards are being validated with a small group of current clients.",
  },
  {
    q: "Q1",
    quarter: "Q1 2026 — In Research",
    title: "AI Voice & Phone Systems · Custom CRM & ERP Systems",
    desc: "AI Voice Systems require reliable Indian-English voice model performance and telephony API integration — providers are being evaluated. Custom CRM and ERP are being prototyped with two businesses in professional services.",
  },
  {
    q: "Q2",
    quarter: "Q2 2026 — Research Stage",
    title: "Cybersecurity Audits & Hardening",
    desc: "Currently in a structured research phase, establishing the audit framework and remediation process. Early access members will be the first to hear when a launch window is confirmed.",
  },
];

function Timeline() {
  return (
    <section className="px-6 py-20" id="timeline" style={{ background: c.cream }}>
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Launch Roadmap</Eyebrow>
        <h2 className="text-center text-3xl mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
          What's shipping, and when
        </h2>
        <p className="text-center text-sm max-w-xl mx-auto mb-14" style={{ color: c.muted, lineHeight: "1.7" }}>
          A rough sequence — early access members get notified before each launch, and often get to test before the public does.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, transparent, ${c.line} 10%, ${c.line} 90%, transparent)` }}
          />

          {timelineItems.map((item, i) => (
            <FadeIn key={item.q} delay={i * 80}>
              <div className="grid gap-6 mb-12" style={{ gridTemplateColumns: "48px 1fr" }}>
                {/* Dot */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm flex-shrink-0 relative z-10"
                  style={{
                    background: c.cream,
                    border: `2px solid ${c.gold}`,
                    fontFamily: "'Fraunces', serif",
                    color: c.navy,
                  }}
                >
                  {item.q}
                </div>

                {/* Body */}
                <div className="pt-2.5">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: c.gold }}>
                    {item.quarter}
                  </div>
                  <h4 className="text-lg mb-2" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: c.muted, lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EARLY ACCESS ─────────────────────────────────────────────────────────────
function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const message = `*New Waitlist Signup — Wolf Stack Automation*\n\n*Email:* ${email}\n\nI'm interested in early access to the upcoming services.`;
      const whatsappNumber = "918446608156";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setSubmitted(true);
    }
  };

  return (
    <section className="px-6 py-8" id="early-access" style={{ background: c.cream }}>
      <div
        className="max-w-3xl mx-auto rounded-[28px] px-8 py-16 text-center"
        style={{
          background: c.navy,
          border: `1px solid ${c.line}`,
        }}
      >
        <Eyebrow>Early Access</Eyebrow>
        <h2 className="text-3xl mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.cream }}>
          Be the first to access what's <span style={{ color: c.goldLight }}>coming next</span>
        </h2>
        <p className="text-sm max-w-md mx-auto mb-8" style={{ color: "#C9D1DA", lineHeight: "1.8" }}>
          Join the waitlist and we'll notify you when each service launches — along with early access pricing and the option to be involved in shaping what gets built.
        </p>

        {submitted ? (
          <p className="text-sm font-semibold py-3" style={{ color: c.goldLight }}>
            You're on the list. We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2.5 max-w-md mx-auto mb-3 flex-wrap sm:flex-nowrap">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full px-5 py-3 text-sm outline-none transition-colors duration-150"
              style={{
                background: "rgba(248,244,235,0.1)",
                border: `1px solid rgba(248,244,235,0.2)`,
                color: c.cream,
                fontFamily: "'Inter', sans-serif",
                minWidth: 0,
              }}
              onFocus={e => e.target.style.borderColor = c.gold}
              onBlur={e => e.target.style.borderColor = "rgba(248,244,235,0.2)"}
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-bold flex-shrink-0 transition-all duration-150"
              style={{ background: c.gold, color: c.navyDeep, border: "none", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.background = c.goldLight; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Join Waitlist
            </button>
          </form>
        )}
        <p className="text-xs mb-10" style={{ color: "#6B7A8A" }}>No spam. One email per launch. Unsubscribe any time.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🎯", title: "First Access", desc: "Get access to each service before it opens to the public, often at a reduced price." },
            { icon: "💬", title: "Shape the Product", desc: "Your feedback influences what gets built and prioritised next — directly." },
            { icon: "🔒", title: "Launch Pricing", desc: "Waitlist members receive launch-day rates that aren't available after each service opens publicly." },
          ].map((p) => (
            <FadeIn key={p.title}>
              <div
                className="rounded-xl p-5 text-center"
                style={{ background: "rgba(248,244,235,0.08)", border: `1px solid ${c.line}` }}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <h5 className="text-sm font-semibold mb-1" style={{ color: c.cream }}>{p.title}</h5>
                <p className="text-xs" style={{ color: "#5A6A7A", lineHeight: "1.6" }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PHILOSOPHY ───────────────────────────────────────────────────────────────
const principles = [
  { n: "01", title: "We don't ship until it's ready", desc: "Timelines on this page are estimates, not promises. We'd rather delay a launch than release something that underdelivers. Early access members are always told the honest status — not the optimistic one." },
  { n: "02", title: "Every new service starts with a real client", desc: "We don't build a service and then look for a customer. Every service on this roadmap has been requested by an existing client, and most are being developed in direct collaboration with them." },
  { n: "03", title: "New technology, practical application", desc: "AI, voice systems, and advanced backends are only valuable if they solve a real operational problem. We don't add technology because it's impressive — we add it because it removes work." },
  { n: "04", title: "Everything connects", desc: "Every service we build is designed to work with every other Wolf Stack system. Your future AI chatbot, mobile app, backend, and dashboard should be one connected platform — not six different vendors." },
];

function Philosophy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20" id="philosophy" style={{ background: c.cream }}>
      <Eyebrow>How We Build</Eyebrow>
      <h2 className="text-center text-3xl mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
        The principles behind every service we develop
      </h2>
      <p className="text-center text-sm max-w-xl mx-auto mb-12" style={{ color: c.muted, lineHeight: "1.7" }}>
        Every service on this page is being built to the same standard as what we already deliver — these aren't ideas, they're engineering commitments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {principles.map((p, i) => (
          <FadeIn key={p.n} delay={i * 70}>
            <div
              className="rounded-[18px] p-7"
              style={{ background: c.creamDeep, border: `1px solid ${c.line}` }}
            >
              <div
                className="text-4xl mb-3 leading-none"
                style={{ fontFamily: "'Fraunces', serif", color: "rgba(184,134,46,0.15)" }}
              >
                {p.n}
              </div>
              <h4 className="text-lg mb-2.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>{p.title}</h4>
              <p className="text-sm" style={{ color: c.muted, lineHeight: "1.8" }}>{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function ComingSoonPage() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      {/*
        Wrap bahar se:
        <Navbar />
        <ComingSoonPage />
        <Footer />
      */}
      <Hero onScrollTo={scrollTo} />
      <ServicesSection />
      <Timeline />
      <EarlyAccess />
      <Philosophy />
    </div>
  );
}


