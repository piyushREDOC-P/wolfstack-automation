import { useState } from "react";
import FadeIn from "../components/FadeIn";

const colors = {
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

// ─── Icons ──────────────────────────────────────────────────────────────────
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V21a2 2 0 11-4 0v-.09a1.7 1.7 0 00-1-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H3a2 2 0 110-4h.09a1.7 1.7 0 001.55-1 1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34h0a1.7 1.7 0 001-1.55V3a2 2 0 114 0v.09a1.7 1.7 0 001 1.55h0a1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87v0a1.7 1.7 0 001.55 1H21a2 2 0 110 4h-.09a1.7 1.7 0 00-1.55 1z" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M14.7 6.3a4 4 0 105 5L13 19a2 2 0 11-3-3l7.7-7.7a4 4 0 10.0001 .0001z" />
    <path d="M9 9L4 4M4 4l2-2 4 4-2 2z" />
  </svg>
);

const MagnetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M6 4v6a6 6 0 0012 0V4" />
    <path d="M6 4H2M22 4h-4M6 4l0 0M2 9h4M22 9h-4" />
  </svg>
);

const FlowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <path d="M9 6h4a3 3 0 013 3v6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0" style={{ color: colors.gold }}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200" style={{ color: colors.gold }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-20 pb-10 text-center">
      <FadeIn>
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: colors.gold, borderColor: colors.line }}
        >
          Our Services
        </span>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          Everything your business needs to{" "}
          <span style={{ color: colors.gold }}>run without friction</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: colors.muted, lineHeight: "1.85" }}>
          From the website that represents you online to the systems that quietly run in the
          background — we build, manage, and maintain it all, so nothing falls on you.
        </p>
      </FadeIn>
    </div>
  );
}

// ─── Service Data ────────────────────────────────────────────────────────────
const services = [
  {
    icon: <CodeIcon />,
    tag: "Build",
    title: "Web Development",
    desc:
      "Custom websites built from scratch — fast, responsive, and designed to actually convert visitors into customers, not just look nice.",
    features: [
      "Custom design, not templates",
      "Mobile-first, fully responsive",
      "SEO-friendly structure from day one",
      "Built on modern, fast-loading stacks",
    ],
  },
  {
    icon: <BoltIcon />,
    tag: "Automate",
    title: "Business Automation",
    desc:
      "We identify the repetitive manual work in your business and automate it — bookings, follow-ups, data entry, notifications, and more.",
    features: [
      "Workflow mapping before automation",
      "Integrations across the tools you already use",
      "Automated emails, reminders & notifications",
      "Built on tools like n8n for easy future edits",
    ],
  },
  {
    icon: <SettingsIcon />,
    tag: "Manage",
    title: "Website Management",
    desc:
      "We handle the day-to-day of running your site — content updates, new pages, small design tweaks — so you never need to touch code.",
    features: [
      "Regular content & copy updates",
      "New page additions as you grow",
      "Design tweaks without a fresh project",
      "A direct line to a dedicated point of contact",
    ],
  },
  {
    icon: <WrenchIcon />,
    tag: "Maintain",
    title: "Website Maintenance",
    desc:
      "Behind-the-scenes upkeep that keeps your site fast, secure, and online — backups, updates, monitoring, and fast fixes when needed.",
    features: [
      "Uptime & performance monitoring",
      "Regular backups and security checks",
      "Plugin / dependency updates",
      "Fast turnaround on bug fixes",
    ],
  },
  {
    icon: <MagnetIcon />,
    tag: "Capture",
    title: "Lead Capture Systems",
    desc:
      "Forms, landing pages, and follow-up flows designed specifically to turn website traffic into actual leads in your inbox or CRM.",
    features: [
      "High-converting forms & landing pages",
      "Automatic lead routing to email / WhatsApp / CRM",
      "Instant follow-up sequences",
      "Tracking so you know what's actually working",
    ],
  },
  {
    icon: <FlowIcon />,
    tag: "Optimize",
    title: "Process Optimization",
    desc:
      "A deeper look at how your business operates end-to-end, mapping out where time and money are leaking and fixing it systematically.",
    features: [
      "Full workflow audit of current operations",
      "Bottleneck identification across teams",
      "Custom-built systems to close the gaps",
      "Ongoing review as your business scales",
    ],
  },
];

function ServiceCard({ service, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <div
      className="bg-white rounded-[20px] border overflow-hidden transition-all duration-200"
      style={{ borderColor: isOpen ? colors.gold : colors.line }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center gap-5 text-left px-7 py-6 bg-transparent border-none cursor-pointer"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(184,134,46,0.10)" }}
        >
          {service.icon}
        </div>
        <div className="flex-1">
          <span
            className="text-[11px] font-semibold tracking-widest uppercase"
            style={{ color: colors.gold }}
          >
            {service.tag}
          </span>
          <h3
            className="text-lg sm:text-xl mt-0.5"
            style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
          >
            {service.title}
          </h3>
        </div>
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>
          <ChevronIcon />
        </span>
      </button>

      <div style={{ maxHeight: isOpen ? 400 : 0, overflow: "hidden", transition: "max-height .25s ease" }}>
        <div className="px-7 pb-7">
          <p className="text-sm leading-relaxed mb-5" style={{ color: colors.muted, lineHeight: "1.8" }}>
            {service.desc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <span className="mt-0.5"><CheckIcon /></span>
                <span className="text-sm" style={{ color: colors.ink }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesList() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="max-w-4xl mx-auto px-8 py-12">
      <div className="flex flex-col gap-4">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 60}>
            <ServiceCard
              service={s}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Process strip ────────────────────────────────────────────────────────────
function ProcessStrip() {
  const steps = [
    { num: "01", title: "Tell Us The Problem", desc: "A slow site, manual busywork, missed leads — whatever it is." },
    { num: "02", title: "We Scope The Fix", desc: "A clear plan and price, no vague proposals or hidden add-ons." },
    { num: "03", title: "We Build It", desc: "Built in stages, with progress shared as we go." },
    { num: "04", title: "We Stay On", desc: "Ongoing management & maintenance once it's live." },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          How It Works
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Simple, start to finish
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 60}>
            <div className="px-2">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4 text-sm"
                style={{ background: colors.navy, color: colors.cream, fontFamily: "'Fraunces', serif" }}
              >
                {s.num}
              </div>
              <h4 className="text-sm font-semibold mb-2" style={{ color: colors.navy }}>{s.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: colors.muted, lineHeight: "1.7" }}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <div className="rounded-[28px] px-10 py-14 text-center" style={{ background: colors.navy }}>
          <h2 className="text-3xl mb-4" style={{ fontFamily: "'Fraunces', serif", color: colors.cream }}>
            Not sure which service you need?
          </h2>
          <p className="text-sm max-w-md mx-auto mb-7" style={{ color: "#C9D1DA", lineHeight: "1.8" }}>
            Most clients don't either, at first. Tell us what's slowing you down and we'll tell you
            exactly what to build.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">

          <a  href="/contact-us"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
              style={{ background: colors.gold, color: colors.navyDeep }}
            >
              Get in Touch
            </a>

          <a href="/pricing"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-150"
              style={{ borderColor: "rgba(248,244,235,0.3)", color: colors.cream }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div style={{ background: colors.cream, color: colors.ink, fontFamily: "'Inter', sans-serif" }}>
      {/* 
        Navbar aur Footer yahan include nahi hain — apne existing components se wrap karo:
        <Navbar />
        <ServicesPage />
        <Footer />
      */}
      <Hero />
      <ServicesList />
      <ProcessStrip />
      <CtaSection />
    </div>
  );
}