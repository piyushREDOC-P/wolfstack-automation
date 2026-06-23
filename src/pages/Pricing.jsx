import { useState } from "react";
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

// ─── Shared Icons ────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[15px] h-[15px] flex-shrink-0 mt-0.5" style={{ color: c.gold }}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200"
    style={{ color: c.gold, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// ─── Eyebrow + Section heading helpers ───────────────────────────────────────
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

// ─── PAGE HEADER ─────────────────────────────────────────────────────────────
function PageHeader() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="max-w-5xl mx-auto px-8 pt-20 pb-5 text-center">
      <FadeIn>
        <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: c.gold, borderColor: c.line }}>
          Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
          Plans built to launch you —{" "}
          <span style={{ color: c.gold }}>and stay with you</span>
        </h1>
        <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: c.muted, lineHeight: "1.85" }}>
          Wolf Stack pricing isn't a one-time invoice. Every plan is designed to put a working website or automated system in your hands, then keep it performing long after launch.
        </p>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button onClick={() => scrollTo("website-plans")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
            style={{ background: c.navy, color: c.cream, border: `1px solid ${c.navy}` }}
            onMouseEnter={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.borderColor = c.gold; }}
            onMouseLeave={e => { e.currentTarget.style.background = c.navy; e.currentTarget.style.borderColor = c.navy; }}>
            View Website Plans
          </button>
          <button onClick={() => window.location.href = "/contact"}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
            style={{ background: "transparent", color: c.navy, border: `1px solid ${c.line}` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.navy; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = c.line; }}>
            Book a Strategy Call
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

// ─── TWO PATHS ────────────────────────────────────────────────────────────────
function TwoPaths() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const paths = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px]" style={{ color: c.gold }}>
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" />
        </svg>
      ),
      title: "Website Plans",
      desc: "A one-time project to design, build, and launch your website — choose Starter, Growth, or Business Pro based on how much your business needs.",
      cta: "See website plans",
      scrollId: "website-plans",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px]" style={{ color: c.gold }}>
          <path d="M21 12a9 9 0 11-2.64-6.36M21 4v6h-6" />
        </svg>
      ),
      title: "Maintenance Membership",
      desc: "An ongoing monthly plan that keeps your website secure, updated, and supported — the recurring partnership that most established clients stay on.",
      cta: "See membership plans",
      scrollId: "membership",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="paths">
      <FadeIn>
        <Eyebrow>Two Ways To Work With Us</Eyebrow>
        <SectionTitle>A plan for building, and a plan for staying ahead</SectionTitle>
        <SectionSub>
          Most clients start with a Website Plan to get built and launched, then move onto a Maintenance Membership to keep things secure, current, and improving long after.
        </SectionSub>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {paths.map((p, i) => (
          <FadeIn key={p.title} delay={i * 70}>
            <div className="bg-white border rounded-[20px] p-7 flex flex-col gap-2.5" style={{ borderColor: c.line }}>
              <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-2"
                style={{ background: "rgba(184,134,46,0.10)" }}>
                {p.icon}
              </div>
              <h3 className="text-[19px]" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.muted, lineHeight: "1.75" }}>{p.desc}</p>
              <button onClick={() => scrollTo(p.scrollId)}
                className="mt-1.5 self-start flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150"
                style={{ color: c.gold, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = c.navy}
                onMouseLeave={e => e.currentTarget.style.color = c.gold}>
                {p.cta} <ArrowIcon />
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── PLAN CARD ────────────────────────────────────────────────────────────────
function PlanCard({ tier, name, tagline, price, perLabel, features, ctaLabel, featured, badge, compact = false, slug }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white border rounded-[20px] flex flex-col relative transition-all duration-200"
      style={{
        borderColor: featured ? c.gold : hovered ? c.goldLight : c.line,
        borderWidth: featured ? "1.5px" : "1px",
        boxShadow: featured
          ? `0 18px 40px rgba(184,134,46,0.16)`
          : hovered
          ? "0 20px 40px rgba(43,38,28,0.12)"
          : "none",
        transform: hovered && !featured ? "translateY(-6px)" : "none",
        padding: compact ? "28px 24px" : "32px 28px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap"
          style={{ background: c.navy, color: c.goldLight, letterSpacing: ".5px" }}>
          {badge}
        </div>
      )}
      {tier && <div className="text-2xl mb-2.5">{tier}</div>}
      <h3 className="text-xl mb-1" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>{name}</h3>
      <div className="text-xs mb-4" style={{ color: c.faint }}>{tagline}</div>
      <div className="text-[28px] mb-1" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
        {price} <span className="font-sans text-sm font-medium" style={{ color: c.faint }}>{perLabel}</span>
      </div>
      <div className="h-px my-4" style={{ background: c.line }} />
      <ul className="flex flex-col gap-2.5 flex-1 mb-6">
        {features.map((f) => (
          <li key={f} className="flex gap-2 text-sm" style={{ color: c.muted, lineHeight: "1.5" }}>
            <CheckIcon /> {f}
          </li>
        ))}
      </ul>
      <button
        className="w-full py-3 rounded-full text-sm font-semibold transition-all duration-150"
        onClick={() => {
          if (slug) window.location.href = `/pricing/${slug}`;
          else window.location.href = "/contact";
        }}
        style={{
          background: featured ? c.navy : "transparent",
          color: featured ? c.cream : c.navy,
          border: `1px solid ${featured ? c.navy : c.line}`,
          cursor: "pointer",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.borderColor = c.gold; e.currentTarget.style.color = c.cream; }}
        onMouseLeave={e => { e.currentTarget.style.background = featured ? c.navy : "transparent"; e.currentTarget.style.borderColor = featured ? c.navy : c.line; e.currentTarget.style.color = featured ? c.cream : c.navy; }}>
        {ctaLabel}
      </button>
    </div>
  );
}

// ─── WEBSITE PLANS ────────────────────────────────────────────────────────────
const websitePlans = [
  {
    tier: "🥉",
    name: "Starter",
    slug: "starter-plan",
    tagline: "Perfect for small businesses",
    price: "₹4,999",
    perLabel: "– ₹9,999",
    features: ["Professional Website", "Mobile Responsive Design", "Contact Form", "WhatsApp Integration", "Basic SEO Setup", "5 Pages", "1 Month Support"],
    ctaLabel: "Choose Starter",
    featured: false,
    badge: null,
  },
  {
    tier: "🥈",
    name: "Growth",
    slug: "growth-plan",
    tagline: "For growing businesses",
    price: "₹14,999",
    perLabel: "– ₹24,999",
    features: ["Everything in Starter", "Custom Design", "Lead Capture System", "Google Maps Integration", "Speed Optimization", "Blog Section", "Advanced SEO Setup", "3 Months Support"],
    ctaLabel: "Choose Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "🥇",
    name: "Business Pro",
    slug: "business-pro-plan",
    tagline: "Complete digital presence",
    price: "₹29,999",
    perLabel: "+",
    features: ["Everything in Growth", "Custom Dashboard", "Business Automation", "Client Portal", "Advanced Forms", "Email Automation", "Priority Support", "6 Months Maintenance"],
    ctaLabel: "Choose Business Pro",
    featured: false,
    badge: null,
  },
];

function WebsitePlans() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="website-plans">
      <FadeIn>
        <Eyebrow>Website Plans</Eyebrow>
        <SectionTitle>Choose the build that matches your business</SectionTitle>
        <SectionSub>
          Every plan includes a fully custom, mobile-responsive website — the difference is in scope, design depth, and how much is built in from day one.
        </SectionSub>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch max-w-none md:max-w-none mx-auto">
        {websitePlans.map((p, i) => (
          <FadeIn key={p.name} delay={i * 70}>
            <PlanCard {...p} slug={p.slug} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── MAINTENANCE MEMBERSHIP ───────────────────────────────────────────────────
const membershipPlans = [
  {
    name: "Essential Care",
    slug: "essential-care",
    tagline: "For sites that just need to stay healthy",
    price: "₹999",
    perLabel: "/month",
    features: ["Security Updates", "Backup Monitoring", "Minor Content Changes", "Monthly Health Check"],
    ctaLabel: "Choose Essential",
    featured: false,
    badge: null,
  },
  {
    name: "Professional Care",
    slug: "professional-care",
    tagline: "For businesses that depend on their site",
    price: "₹1,999",
    perLabel: "/month",
    features: ["Everything in Essential", "Performance Optimization", "Monthly Reports", "Priority Support", "Bug Fixes"],
    ctaLabel: "Choose Professional",
    featured: true,
    badge: "Recommended",
  },
  {
    name: "Premium Care",
    slug: "premium-care",
    tagline: "For businesses that can't afford downtime",
    price: "₹4,999",
    perLabel: "/month",
    features: ["Everything in Professional", "Dedicated Support", "Unlimited Minor Updates", "Weekly Monitoring", "Emergency Assistance"],
    ctaLabel: "Choose Premium",
    featured: false,
    badge: null,
  },
];

function MaintenanceMembership() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="membership">
      <div className="rounded-[26px] px-8 py-14" style={{ background: c.creamDeep }}>
        <FadeIn>
          <Eyebrow>Maintenance Membership</Eyebrow>
          <SectionTitle>Website Care, on a plan that fits</SectionTitle>
          <SectionSub>
            A website that launches well and is never looked after slowly becomes a liability. Membership keeps yours secure, current, and improving — without you having to remember to ask.
          </SectionSub>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {membershipPlans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 70}>
              <PlanCard {...p} compact slug={p.slug} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY / BENEFITS ───────────────────────────────────────────────────────────
const benefits = [
  "Priority Support",
  "Faster Response Times",
  "Regular Website Health Checks",
  "Ongoing Technical Assistance",
  "Exclusive Member Discounts",
  "Performance Monitoring",
  "Security Reviews",
  "Long-Term Partnership",
];

function Benefits() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="benefits">
      <FadeIn>
        <Eyebrow>What's Included</Eyebrow>
        <SectionTitle>Why businesses become Wolf Stack members</SectionTitle>
        <SectionSub>
          Membership isn't a maintenance fee — it's a standing relationship with the team that built your systems.
        </SectionSub>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map((b, i) => (
          <FadeIn key={b} delay={i * 40}>
            <div className="flex items-center gap-3 bg-white border rounded-2xl px-4 py-4 text-sm font-medium"
              style={{ borderColor: c.line, color: c.ink }}>
              <CheckIcon /> {b}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Do I need a maintenance plan?", a: "Not mandatory, but recommended to keep your website updated, secure, and performing efficiently. Most clients move onto a membership once their site is live." },
  { q: "Can I upgrade later?", a: "Yes. Plans can be upgraded anytime — both website plans and maintenance memberships — as your business and its needs grow." },
  { q: "Are there hidden charges?", a: "No. All project costs are discussed and agreed before work begins, and membership pricing is fixed and shown upfront." },
  { q: "How long does development take?", a: "Typically 1–4 weeks, depending on project scope — Starter builds move fastest, while Business Pro projects with automation take longer." },
  { q: "Can I get automation without a new website?", a: "Yes — automation can be added to an existing website or set of tools as a standalone project. Pricing depends on scope, so get in touch for a custom quote." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border rounded-2xl overflow-hidden" style={{ borderColor: c.line }}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between px-6 py-4 text-sm font-semibold"
        style={{ color: c.navy, background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
        {q}
        <ChevronIcon open={open} />
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height .25s ease" }}>
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: c.muted, lineHeight: "1.75" }}>{a}</p>
      </div>
    </div>
  );
}

function PricingFaq() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="faq">
      <FadeIn>
        <Eyebrow>Frequently Asked</Eyebrow>
        <SectionTitle>Pricing, answered plainly</SectionTitle>
      </FadeIn>
      <div className="max-w-2xl mx-auto flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 40}>
            <FaqItem {...f} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── FINAL CTA BANNER ─────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16" id="contact">
      <FadeIn>
        <div className="rounded-[28px] text-center px-8 py-[72px] relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${c.navy}, ${c.navyDeep})` }}>
          {/* subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(217,176,104,0.16), transparent 60%)" }} />
          <p className="relative text-xs font-semibold tracking-widest uppercase mb-3.5" style={{ color: c.goldLight }}>
            Let's Talk
          </p>
          <h2 className="relative text-3xl mb-3.5 max-w-lg mx-auto" style={{ fontFamily: "'Fraunces', serif", color: c.cream }}>
            Ready to build something better?
          </h2>
          <p className="relative text-sm max-w-md mx-auto mb-8" style={{ color: "#C9D1DA", lineHeight: "1.75" }}>
            Let's create a website and automation system that works for your business today and scales with you tomorrow.
          </p>
          <div className="relative flex justify-center">
            <button onClick={() => window.location.href = "/contact-us"}
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
              style={{ background: c.gold, color: c.navyDeep, border: `1px solid ${c.gold}`, cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.background = c.goldLight; e.currentTarget.style.borderColor = c.goldLight; }}
              onMouseLeave={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.borderColor = c.gold; }}>
              Get in touch
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      {/*
        Navbar aur Footer wrap karo bahar se:
        <Navbar />
        <PricingPage />
        <Footer />
      */}
      <PageHeader />
      <TwoPaths />
      <WebsitePlans />
      <MaintenanceMembership />
      <Benefits />
      <PricingFaq />
      <CtaBanner />
    </div>
  );
}