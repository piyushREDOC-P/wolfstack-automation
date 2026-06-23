import { useState, useEffect, useRef } from "react";

// ─── FadeIn (inline — no separate import needed) ──────────────────────────────
function FadeIn({ children, delay = 0, duration = 500, distance = 24, threshold = 0.08, style = {}, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
      transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
      willChange: "opacity, transform",
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Colors ───────────────────────────────────────────────────────────────────
const colors = {
  cream:     "#F8F4EB",
  creamDeep: "#EFE8D6",
  navy:      "#172537",
  navyDeep:  "#0E1A28",
  gold:      "#B8862E",
  goldLight: "#D9B068",
  ink:       "#2B2B28",
  line:      "#DCD3BC",
  muted:     "#5A5648",
  faint:     "#9A9180",
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const BackupIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);
const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 13l4-4M12 5v1" />
  </svg>
);
const BugIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <rect x="7" y="8" width="10" height="10" rx="5" />
    <path d="M9 8V6a3 3 0 016 0v2M4 11h3M17 11h3M4 17h3M17 17h3M9 4l-1.5-1.5M15 4l1.5-1.5" />
  </svg>
);
const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M4 4v5h5M20 20v-5h-5" />
    <path d="M4.5 9a8 8 0 0113.9-4.5L20 9M19.5 15a8 8 0 01-13.9 4.5L4 15" />
  </svg>
);
const PhoneSupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" style={{ color: colors.gold }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.79.65 2.65a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.43-1.22a2 2 0 012.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0122 16.92z" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0" style={{ color: colors.gold }}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0" style={{ color: colors.faint }}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0" style={{ color: colors.gold }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M12 9v4M12 17h.01" />
    <path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
  </svg>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <FadeIn duration={700} distance={30}>
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-10 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: colors.gold, borderColor: colors.line }}
        >
          Maintenance &amp; Support
        </span>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          A website is never{" "}
          <span style={{ color: colors.gold }}>"done" — it's maintained</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: colors.muted, lineHeight: "1.85" }}>
          Most sites break quietly — slow loading, outdated plugins, broken forms — and nobody
          notices until a customer complains or leaves. We make sure that never happens to yours.
        </p>
      </div>
    </FadeIn>
  );
}

// ─── PROBLEM SECTION ──────────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    "Plugins and dependencies go out of date silently, opening security gaps",
    "Forms stop submitting and nobody finds out until a lead is lost",
    "Sites slow down over time as content, images, and scripts pile up",
    "A single hack or crash can take your site offline for days without monitoring",
    "Browser and device updates can break layouts that worked fine last year",
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left column */}
        <FadeIn delay={0} distance={28}>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: colors.gold }}>
              Why It Matters
            </p>
            <h2 className="text-3xl mb-5" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
              What happens when a site gets left alone
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: colors.muted, lineHeight: "1.85" }}>
              Most businesses only think about their website on launch day — and then again the
              day something breaks. In between, small issues build up quietly until they become
              expensive ones. Here's what we typically find on sites that haven't been maintained:
            </p>
            <div className="flex flex-col gap-3">
              {problems.map((p, i) => (
                <FadeIn key={p} delay={i * 60} distance={16}>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5"><AlertIcon /></span>
                    <span className="text-sm" style={{ color: colors.ink }}>{p}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right stats card */}
        <FadeIn delay={120} distance={28}>
          <div className="rounded-[24px] p-10" style={{ background: colors.navy }}>
            <h4 className="text-lg mb-5" style={{ fontFamily: "'Fraunces', serif", color: colors.goldLight }}>
              The cost of doing nothing
            </h4>
            <div className="flex flex-col gap-5">
              {[
                { stat: "53%",  label: "of visitors leave a site that takes over 3 seconds to load" },
                { stat: "$0",   label: "is what most leaks cost to fix early — vs. thousands after a breach" },
                { stat: "Days", label: "is how long an unmonitored site can stay down before anyone notices" },
              ].map((s, i) => (
                <FadeIn key={s.label} delay={i * 80} distance={14}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl flex-shrink-0" style={{ fontFamily: "'Fraunces', serif", color: colors.goldLight }}>
                      {s.stat}
                    </span>
                    <span className="text-xs leading-relaxed" style={{ color: "#C9D1DA" }}>{s.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── INCLUDED SECTION ─────────────────────────────────────────────────────────
function IncludedCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-[18px] border p-6" style={{ borderColor: colors.line }}>
      <div
        className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-4"
        style={{ background: "rgba(184,134,46,0.10)" }}
      >
        {icon}
      </div>
      <h4 className="text-base mb-2" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: colors.muted, lineHeight: "1.75" }}>
        {desc}
      </p>
    </div>
  );
}

function IncludedSection() {
  const items = [
    { icon: <ShieldIcon />,      title: "Security Monitoring",   desc: "Continuous checks for vulnerabilities, malware, and suspicious activity, with fast response if anything is found." },
    { icon: <BackupIcon />,      title: "Automated Backups",     desc: "Regular backups stored safely off-site, so a bad update or attack never means starting from zero." },
    { icon: <SpeedIcon />,       title: "Performance Monitoring",desc: "We track load times and uptime continuously, optimizing before slowness ever affects a real visitor." },
    { icon: <RefreshIcon />,     title: "Updates & Patching",    desc: "Plugins, dependencies, and core software kept current, closing security gaps before they're exploited." },
    { icon: <BugIcon />,         title: "Bug Fixes",             desc: "Broken forms, layout issues, or unexpected errors get fixed fast — usually before you even notice them." },
    { icon: <PhoneSupportIcon />,title: "Direct Support Line",   desc: "A real point of contact you can message directly — no ticket queues, no generic support inbox." },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          What's Included
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Everything that keeps your site running
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <FadeIn key={it.title} delay={i * 70} distance={22}>
            <IncludedCard {...it} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── PLANS SECTION ────────────────────────────────────────────────────────────
function PlanCard({ name, price, desc, features, highlighted, slug }) {
  return (
    <div
      className="rounded-[22px] border p-8 flex flex-col"
      style={{
        borderColor:  highlighted ? colors.gold : colors.line,
        background:   highlighted ? colors.navy : "white",
        transform:    highlighted ? "translateY(-8px)" : "none",
        boxShadow:    highlighted ? "0 20px 40px rgba(23,37,55,0.25)" : "none",
      }}
    >
      {highlighted && (
        <span
          className="self-start text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
          style={{ background: colors.gold, color: colors.navyDeep }}
        >
          Most Popular
        </span>
      )}
      <h3 className="text-xl mb-1" style={{ fontFamily: "'Fraunces', serif", color: highlighted ? colors.cream : colors.navy }}>
        {name}
      </h3>
      <p className="text-xs mb-5" style={{ color: highlighted ? "#9AA6B2" : colors.muted }}>{desc}</p>
      <div className="mb-6">
        <span className="text-3xl" style={{ fontFamily: "'Fraunces', serif", color: highlighted ? colors.goldLight : colors.navy }}>
          {price}
        </span>
        <span className="text-xs ml-1" style={{ color: highlighted ? "#9AA6B2" : colors.faint }}>/ month</span>
      </div>
      <div className="flex flex-col gap-3 mb-7 flex-1">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <span className="mt-0.5" style={{ color: highlighted ? colors.goldLight : colors.gold }}>
              <CheckIcon />
            </span>
            <span className="text-sm" style={{ color: highlighted ? "#E8ECEF" : colors.ink }}>{f}</span>
          </div>
        ))}
      </div>
      <a
        href={`/pricing/${slug}`}
        className="text-center py-3 rounded-full text-sm font-semibold transition-all duration-150"
        style={{ background: highlighted ? colors.gold : colors.navy, color: highlighted ? colors.navyDeep : colors.cream }}
      >
        Get Started
      </a>
    </div>
  );
}

function PlansSection() {
  const plans = [
    {
      name: "Essential Care", price: "₹999", slug: "essential-care",
      desc: "For sites that just need to stay safe and online",
      features: ["Security updates", "Backup monitoring", "Minor content changes", "Monthly health check"],
    },
    {
      name: "Professional Care", price: "₹1,999", slug: "professional-care", highlighted: true,
      desc: "For active businesses relying on their site daily",
      features: ["Everything in Essential", "Performance optimization", "Monthly reports", "Priority support", "Bug fixes"],
    },
    {
      name: "Premium Care", price: "₹4,999", slug: "premium-care",
      desc: "For businesses that can't afford downtime",
      features: ["Everything in Professional", "Dedicated support", "Unlimited minor updates", "Weekly monitoring", "Emergency assistance"],
    },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          Support Plans
        </p>
        <h2 className="text-center text-3xl mb-3" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Pick the level of care your site needs
        </h2>
        <p className="text-center text-sm max-w-md mx-auto mb-12" style={{ color: colors.muted }}>
          Every plan can be adjusted to fit your specific site and business. These are starting points, not fixed boxes.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {plans.map((p, i) => (
          <FadeIn key={p.name} delay={i * 90} distance={26}>
            <PlanCard {...p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── COMPARISON SECTION ───────────────────────────────────────────────────────
function ComparisonSection() {
  const rows = [
    { label: "Security patched regularly",             us: true,  them: false },
    { label: "Backups taken automatically",            us: true,  them: false },
    { label: "Downtime caught and fixed fast",         us: true,  them: false },
    { label: "Site speed actively monitored",          us: true,  them: false },
    { label: "A real person to call when something breaks", us: true, them: false },
    { label: "Hope nothing goes wrong",                us: false, them: true  },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          With vs. Without
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          What a maintenance plan actually changes
        </h2>
      </FadeIn>
      <FadeIn delay={100} distance={20}>
        <div className="bg-white rounded-[22px] border overflow-hidden max-w-2xl mx-auto" style={{ borderColor: colors.line }}>
          <div
            className="grid grid-cols-[1fr_90px_90px] px-6 py-4 text-xs font-semibold uppercase tracking-wide"
            style={{ background: colors.navy, color: colors.cream }}
          >
            <span>What Matters</span>
            <span className="text-center" style={{ color: colors.goldLight }}>With WSA</span>
            <span className="text-center" style={{ color: "#9AA6B2" }}>Without</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className="grid grid-cols-[1fr_90px_90px] px-6 py-4 items-center text-sm"
              style={{ color: colors.ink, borderTop: i === 0 ? "none" : `1px solid ${colors.line}` }}
            >
              <span>{r.label}</span>
              <span className="flex justify-center">{r.us   ? <CheckIcon /> : <XIcon />}</span>
              <span className="flex justify-center">{r.them ? <CheckIcon /> : <XIcon />}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "What counts as a 'content update'?",                  a: "Text changes, swapping images, updating prices or offers, adding a new team member, or small tweaks to existing pages. Adding entirely new pages or features is scoped separately." },
  { q: "What happens if my site goes down outside business hours?", a: "Higher-tier plans include real-time monitoring with alerts, so we're notified immediately and can respond fast, even outside standard hours, for critical issues." },
  { q: "Can I switch plans later?",                           a: "Yes. As your site and business grow, you can move up (or down) a tier any time — we'll adjust at your next billing cycle." },
  { q: "Do you maintain sites you didn't build?",             a: "In most cases yes. We'll do a quick technical audit first to understand the existing setup before bringing it onto a maintenance plan." },
  { q: "Is hosting included in these plans?",                 a: "Hosting is billed separately based on your provider and traffic needs. We can recommend and set up hosting if you don't already have it." },
  { q: "What's NOT included in maintenance?",                 a: "Major redesigns, new feature builds, or large automation projects are scoped and quoted separately — maintenance covers keeping your existing site healthy, not building new things." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border rounded-2xl overflow-hidden" style={{ borderColor: colors.line }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between px-6 py-4 text-sm font-semibold"
        style={{ color: colors.navy, background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
      >
        {q}
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s", display: "flex" }}>
          <ChevronIcon />
        </span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height .25s ease" }}>
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: colors.muted, lineHeight: "1.75" }}>{a}</p>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          Common Questions
        </p>
        <h2 className="text-center text-3xl mb-10" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Maintenance &amp; Support FAQs
        </h2>
      </FadeIn>
      <div className="max-w-2xl mx-auto flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 55} distance={16}>
            <FaqItem {...f} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn distance={30}>
        <div className="rounded-[28px] px-10 py-14 text-center" style={{ background: colors.navy }}>
          <h2 className="text-3xl mb-4" style={{ fontFamily: "'Fraunces', serif", color: colors.cream }}>
            Stop hoping nothing breaks
          </h2>
          <p className="text-sm max-w-md mx-auto mb-7" style={{ color: "#C9D1DA", lineHeight: "1.8" }}>
            Get a real plan keeping your site secure, fast, and online — with a real person on the other end.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
            style={{ background: colors.gold, color: colors.navyDeep }}
          >
            Talk To Us
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function MaintenanceSupportPage() {
  return (
    <div style={{ background: colors.cream, color: colors.ink, fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <ProblemSection />
      <IncludedSection />
      <PlansSection />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}