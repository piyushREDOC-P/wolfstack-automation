import { useState, useEffect, useRef } from "react";

// ─── FadeIn (inline) ──────────────────────────────────────────────────────────
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

// ─── AnimatedBar — rating bar that fills when visible ────────────────────────
function AnimatedBar({ score }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFilled(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full h-2 rounded-full overflow-hidden" style={{ background: colors.creamDeep }}>
      <div
        style={{
          height: "100%",
          borderRadius: 9999,
          background: colors.gold,
          width: filled ? `${(score / 5) * 100}%` : "0%",
          transition: "width 1s cubic-bezier(.4,0,.2,1)",
        }}
      />
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
const StarIcon = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" fill={filled ? colors.gold : "none"} stroke={colors.gold} strokeWidth="1.5" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill={colors.gold} className="w-8 h-8 opacity-20">
    <path d="M7 7c-2.5 0-4.5 2-4.5 4.5S4.5 16 7 16c.3 0 .6 0 .9-.1C7.4 17.8 6 19 4 19v2c4 0 6.5-2.5 6.5-6.5V11C10.5 9 9 7 7 7zm10 0c-2.5 0-4.5 2-4.5 4.5S14.5 16 17 16c.3 0 .6 0 .9-.1-.5 1.9-1.9 3.1-3.9 3.1v2c4 0 6.5-2.5 6.5-6.5V11C20.5 9 19 7 17 7z" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0" style={{ color: colors.gold }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < count} />)}
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <FadeIn duration={700} distance={30}>
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-10 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: colors.gold, borderColor: colors.line }}
        >
          Client Reviews
        </span>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          What businesses say{" "}
          <span style={{ color: colors.gold }}>after working with us</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-xl mx-auto mb-8" style={{ color: colors.muted, lineHeight: "1.85" }}>
          We don't just hand off a project and disappear. Here's what clients say about working
          with Wolf Stack Automation — before, during, and long after launch.
        </p>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <FadeIn delay={100} distance={16}>
            <div className="text-center">
              <div className="flex justify-center mb-1"><Stars count={5} /></div>
              <p className="text-xs" style={{ color: colors.muted }}>Average rating</p>
            </div>
          </FadeIn>
          <div className="w-px h-10" style={{ background: colors.line }} />
          <FadeIn delay={180} distance={16}>
            <div className="text-center">
              <p className="text-2xl" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>30+</p>
              <p className="text-xs" style={{ color: colors.muted }}>Projects delivered</p>
            </div>
          </FadeIn>
          <div className="w-px h-10" style={{ background: colors.line }} />
          <FadeIn delay={260} distance={16}>
            <div className="text-center">
              <p className="text-2xl" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>92%</p>
              <p className="text-xs" style={{ color: colors.muted }}>Clients who stay on for support</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── REVIEW DATA ──────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Rohan Deshmukh", role: "Owner, Deshmukh Furnishings", rating: 5,
    text: "Our old site looked like it was built in 2010 — slow, and nobody could find anything. WSA rebuilt it in under three weeks and we started getting inquiries from the site within days of launch. The thing that stood out was how clearly they explained everything, no confusing tech talk.",
  },
  {
    name: "Sneha Kulkarni", role: "Founder, Studio Bloom", rating: 5,
    text: "I run a small design studio and was manually replying to every enquiry. WSA set up an automated lead system that routes everything straight to my WhatsApp with follow-up reminders. It probably saves me 5-6 hours a week now, and I never miss a lead anymore.",
  },
  {
    name: "Aditya Joshi", role: "Director, Joshi Logistics", rating: 5,
    text: "What I appreciated most was the honesty. They told us we didn't need half the features we initially asked for, and built something simpler that actually worked better for our team. Saved us money and gave us a cleaner result.",
  },
  {
    name: "Priya Nair", role: "Co-founder, Nair Wellness Clinic", rating: 4,
    text: "Great experience overall. The booking automation they built has cut down our front-desk calls significantly. Took a little longer than expected to get the calendar sync working perfectly, but their support team stuck with it until it was right.",
  },
  {
    name: "Vikram Shah", role: "Owner, Shah Auto Parts", rating: 5,
    text: "We've been on their maintenance plan for over a year now. Twice they caught and fixed issues before we even noticed anything was wrong. That kind of proactive support is hard to find from a web agency.",
  },
  {
    name: "Ananya Iyer", role: "Marketing Lead, Iyer Realty", rating: 5,
    text: "The site WSA built for us converts noticeably better than our old one — cleaner layout, faster load times, and the lead capture forms actually work properly now. Communication throughout the project was quick and clear.",
  },
  {
    name: "Karan Malhotra", role: "Founder, Malhotra Exports", rating: 5,
    text: "Process optimization was the real win for us. They mapped out our entire order workflow and automated three steps we didn't even realize were slowing us down. Genuinely changed how our team works day to day.",
  },
  {
    name: "Divya Reddy", role: "Owner, Reddy Home Décor", rating: 4,
    text: "Solid work on the website and very responsive during the build. Would have liked a couple more design options to choose from upfront, but the end result turned out better than what I originally imagined.",
  },
];

// ─── REVIEW CARD ──────────────────────────────────────────────────────────────
function ReviewCard({ name, role, rating, text }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="bg-white rounded-[20px] border p-7 flex flex-col h-full"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderColor: hov ? colors.goldLight : colors.line,
        boxShadow: hov ? "0 16px 32px rgba(43,38,28,0.10)" : "none",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "border-color .2s, box-shadow .2s, transform .2s",
      }}
    >
      <QuoteIcon />
      <div className="my-3"><Stars count={rating} /></div>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: colors.ink, lineHeight: "1.8" }}>
        {text}
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${colors.line}` }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0"
          style={{ background: colors.navy, color: colors.goldLight, fontFamily: "'Fraunces', serif" }}
        >
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: colors.navy }}>{name}</p>
          <p className="text-xs" style={{ color: colors.muted }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

function ReviewsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 65} distance={22}>
            <ReviewCard {...r} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── SERVICE RATINGS (animated bars) ─────────────────────────────────────────
function ServiceRatings() {
  const items = [
    { label: "Web Development",      score: 4.9 },
    { label: "Business Automation",  score: 4.8 },
    { label: "Website Management",   score: 4.9 },
    { label: "Website Maintenance",  score: 5.0 },
    { label: "Lead Capture Systems", score: 4.7 },
    { label: "Process Optimization", score: 4.8 },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: colors.gold }}>
          By The Numbers
        </p>
        <h2 className="text-center text-3xl mb-12" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          How clients rate each service
        </h2>
      </FadeIn>
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        {items.map((it, i) => (
          <FadeIn key={it.label} delay={i * 70} distance={16}>
            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-sm font-medium" style={{ color: colors.navy }}>{it.label}</span>
                <span className="text-sm" style={{ color: colors.gold, fontFamily: "'Fraunces', serif" }}>
                  {it.score.toFixed(1)} / 5
                </span>
              </div>
              <AnimatedBar score={it.score} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── HIGHLIGHT STRIP (auto-scrolling marquee) ─────────────────────────────────
const MARQUEE_CSS = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 28s linear infinite; }
  .marquee-track:hover { animation-play-state: paused; }
`;

function HighlightStrip() {
  const highlights = [
    "\"Saved us 5-6 hours a week on lead follow-ups.\" — Sneha Kulkarni",
    "\"Caught and fixed issues before we even noticed.\" — Vikram Shah",
    "\"Changed how our team works day to day.\" — Karan Malhotra",
    "\"Inquiries started coming in within days of launch.\" — Rohan Deshmukh",
    "\"Built something simpler that actually worked better.\" — Aditya Joshi",
    "\"That kind of proactive support is hard to find.\" — Vikram Shah",
  ];
  // Duplicate for seamless loop
  const all = [...highlights, ...highlights];
  return (
    <section style={{ background: colors.navy, overflow: "hidden", padding: "36px 0" }}>
      <style>{MARQUEE_CSS}</style>
      <div className="marquee-track" style={{ display: "flex", gap: 56, whiteSpace: "nowrap", width: "max-content" }}>
        {all.map((h, i) => (
          <span key={i} style={{ fontSize: 13, color: "#C9D1DA", flexShrink: 0 }}>
            <span style={{ color: colors.goldLight, marginRight: 10 }}>✦</span>
            {h}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Are these reviews verified?",                    a: "Yes, every review shown here comes from a completed project or active maintenance client. We don't publish reviews we haven't collected directly." },
  { q: "Can I see examples of the actual websites built?",a: "Absolutely — reach out through the contact page and we'll share relevant portfolio examples based on the type of business you run." },
  { q: "What happens if I'm not happy with the work?",   a: "We build in review rounds throughout the project specifically so issues get caught early, not after launch. If something's not right, we fix it as part of the engagement." },
  { q: "Do you work with businesses outside India?",     a: "Most of our current clients are India-based, but we do take on remote projects elsewhere — reach out and we'll let you know if it's a good fit." },
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
          Before You Reach Out
        </p>
        <h2 className="text-center text-3xl mb-10" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Questions about our reviews
        </h2>
      </FadeIn>
      <div className="max-w-2xl mx-auto flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 60} distance={16}>
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
            Become our next success story
          </h2>
          <p className="text-sm max-w-md mx-auto mb-7" style={{ color: "#C9D1DA", lineHeight: "1.8" }}>
            Tell us about your business and what's slowing it down — we'll show you exactly how we'd fix it.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
            style={{ background: colors.gold, color: colors.navyDeep }}
          >
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function ReviewPage() {
  return (
    <div style={{ background: colors.cream, color: colors.ink, fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <ReviewsGrid />
      <ServiceRatings />
      <HighlightStrip />
      <FaqSection />
      <CtaSection />
    </div>
  );
}