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
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M8 12l3 3 5-5M3 12l4-4 3 3M21 12l-4-4-3 3" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M12 3l8 4-8 4-8-4 8-4z" />
    <path d="M4 11l8 4 8-4M4 15l8 4 8-4" />
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

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-20 pb-10 text-center">
      <FadeIn>
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: colors.gold, borderColor: colors.line }}
        >
          About Us
        </span>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          We build the systems behind{" "}
          <span style={{ color: colors.gold }}>businesses that run smoothly</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: colors.muted, lineHeight: "1.85" }}>
          Wolf Stack Automation started with a simple frustration — too many small businesses
          running on duct-taped websites and manual work that should've been automated years ago.
          We exist to fix that.
        </p>
      </FadeIn>
    </div>
  );
}

// ─── Story / Mission ────────────────────────────────────────────────────────
function StorySection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: colors.gold }}>
              Our Story
            </p>
            <h2 className="text-3xl mb-5" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
              Built by people who were tired of slow, clunky web work
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: colors.muted, lineHeight: "1.85" }}>
              <p>
                Wolf Stack Automation began as a small web development practice — building sites,
                fixing broken ones, and quietly noticing the same problem everywhere: businesses
                were spending hours every week on tasks a simple system could handle in seconds.
              </p>
              <p>
                That observation became our focus. We stopped just building websites and started
                building businesses better infrastructure — sites that actually convert, workflows
                that run on their own, and support that doesn't disappear after the invoice is paid.
              </p>
              <p>
                We also saw how most agencies work: a project gets delivered, the relationship ends,
                and the client is left to figure out updates, bugs, and growth on their own. That
                didn't sit right with us. So we built WSA around ongoing partnership instead of
                one-off delivery — management and maintenance plans included from day one.
              </p>
              <p>
                Today we work with small and growing businesses across India, handling everything
                from web development to ongoing automation and maintenance — so our clients can
                focus on running their business, not babysitting their tech.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div
            className="rounded-[24px] p-10 flex flex-col gap-7"
            style={{ background: colors.navy }}
          >
            {[
              { num: "50+", label: "Hours saved weekly across client workflows" },
              { num: "1 Day", label: "Average first response time" },
              { num: "100%", label: "Of clients get a dedicated point of contact" },
              { num: "11+", label: "Pages and systems built per typical engagement" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-4">
                <span
                  className="text-3xl"
                  style={{ fontFamily: "'Fraunces', serif", color: colors.goldLight }}
                >
                  {stat.num}
                </span>
                <span className="text-xs leading-relaxed" style={{ color: "#C9D1DA" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Values ──────────────────────────────────────────────────────────────────
function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-[18px] border p-6" style={{ borderColor: colors.line }}>
      <div
        className="w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-4"
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

function ValuesSection() {
  const values = [
    {
      icon: <TargetIcon />,
      title: "Clarity Over Jargon",
      desc: "We explain what we're building and why — no confusing tech-speak, no inflated proposals.",
    },
    {
      icon: <ClockIcon />,
      title: "Speed With Substance",
      desc: "We move fast without skipping the details that make a site or system actually work long-term.",
    },
    {
      icon: <HandshakeIcon />,
      title: "Real Partnership",
      desc: "We're not a one-time vendor. Most of our clients stay with us for ongoing support and growth.",
    },
    {
      icon: <SparkIcon />,
      title: "Built To Automate",
      desc: "Every project we touch, we look for the manual step that doesn't need to be manual anymore.",
    },
    {
      icon: <ShieldIcon />,
      title: "Reliability First",
      desc: "Sites and systems that stay up, stay secure, and don't break the moment we look away.",
    },
    {
      icon: <LayersIcon />,
      title: "Right-Sized Solutions",
      desc: "We don't oversell a 10-page platform when a focused 5-page site solves the actual problem.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          What Drives Us
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          The principles behind every project
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((v, i) => (
          <FadeIn key={v.title} delay={i * 60}>
            <ValueCard {...v} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── How We Work ─────────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand the Business",
      desc: "Before touching any code, we learn how you actually work — your workflow, your customers, and where time or leads are leaking.",
    },
    {
      num: "02",
      title: "Plan the Right Build",
      desc: "We map out exactly what's needed — a site, an automation, or both — and give you a clear scope and timeline upfront.",
    },
    {
      num: "03",
      title: "Build & Review Together",
      desc: "We build in stages and share progress along the way, so there are no surprises when it's time to launch.",
    },
    {
      num: "04",
      title: "Launch & Stay On",
      desc: "Once live, we don't disappear. Maintenance, updates, and support continue for as long as you need us.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          How We Work
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          A process built around no surprises
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 60}>
            <div className="relative px-2">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4 text-sm"
                style={{ background: colors.navy, color: colors.cream, fontFamily: "'Fraunces', serif" }}
              >
                {s.num}
              </div>
              <h4 className="text-sm font-semibold mb-2" style={{ color: colors.navy }}>
                {s.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: colors.muted, lineHeight: "1.7" }}>
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[22px] left-[calc(100%-4px)] w-[calc(100%-30px)] h-px"
                  style={{ background: colors.line }}
                />
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Why Choose Us (comparison) ──────────────────────────────────────────────
function ComparisonSection() {
  const rows = [
    { label: "Ongoing support after launch", us: true, them: false },
    { label: "Clear, fixed-scope proposals", us: true, them: false },
    { label: "Automation built into the workflow", us: true, them: false },
    { label: "Direct access to who's building your project", us: true, them: false },
    { label: "Reply time under 24 hours", us: true, them: false },
    { label: "Generic templates, no customization", us: false, them: true },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          Why Businesses Choose Us
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Not your typical web agency
        </h2>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="bg-white rounded-[22px] border overflow-hidden max-w-2xl mx-auto" style={{ borderColor: colors.line }}>
          <div
            className="grid grid-cols-[1fr_90px_90px] px-6 py-4 text-xs font-semibold uppercase tracking-wide"
            style={{ background: colors.navy, color: colors.cream }}
          >
            <span>What Matters</span>
            <span className="text-center" style={{ color: colors.goldLight }}>WSA</span>
            <span className="text-center" style={{ color: "#9AA6B2" }}>Typical Agency</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className="grid grid-cols-[1fr_90px_90px] px-6 py-4 items-center text-sm"
              style={{
                color: colors.ink,
                borderTop: i === 0 ? "none" : `1px solid ${colors.line}`,
              }}
            >
              <span>{r.label}</span>
              <span className="flex justify-center">{r.us ? <CheckIcon /> : <XIcon />}</span>
              <span className="flex justify-center">{r.them ? <CheckIcon /> : <XIcon />}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <div
          className="rounded-[28px] px-10 py-14 text-center"
          style={{ background: colors.navy }}
        >
          <h2
            className="text-3xl mb-4"
            style={{ fontFamily: "'Fraunces', serif", color: colors.cream }}
          >
            Let's fix what's slowing your business down
          </h2>
          <p className="text-sm max-w-md mx-auto mb-7" style={{ color: "#C9D1DA", lineHeight: "1.8" }}>
            Tell us where you're stuck — a clunky site, a manual process, or just not enough hours
            in the day. We'll tell you what we'd build.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="/m-s" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: colors.gold, color: colors.navyDeep }}>Website Care</a>
            <a href="/contact-us" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: 'transparent', color: colors.cream, border: '1px solid rgba(248,244,235,0.3)' }}>Get in Touch</a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  return (
    <div style={{ background: colors.cream, color: colors.ink, fontFamily: "'Inter', sans-serif" }}>
      {/* 
        Navbar aur Footer yahan include nahi hain — apne existing components se wrap karo:
        <Navbar />
        <AboutUsPage />
        <Footer />
      */}
      <Hero />
      <StorySection />
      <ValuesSection />
      <ProcessSection />
      <ComparisonSection />
      <CtaSection />
    </div>
  );
}