import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, CtaBanner, WhatsAppCard } from "./PlanPageShared";

// ─── PAGE HEADER ─────────────────────────────────────────────────────────────
function PageHeader() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="max-w-4xl mx-auto px-8 pt-16 pb-3 text-center">
      <FadeIn direction="down">
        <a href="/pricing" className="inline-flex items-center gap-1.5 text-xs mb-7 transition-colors duration-150"
          style={{ color: c.faint, textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.color = c.gold}
          onMouseLeave={e => e.currentTarget.style.color = c.faint}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Pricing
        </a>
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 border"
            style={{ color: c.gold, borderColor: c.line }}>
            Website Plan
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl mb-3.5 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
          Starter
        </h1>
        <p className="text-base max-w-xl mx-auto mb-7" style={{ color: c.muted, lineHeight: "1.8" }}>
          A professional, mobile-ready website that gets your business online properly.
        </p>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="text-[34px] font-bold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>₹4,999 – ₹9,999</span>
          <span className="text-xs" style={{ color: c.faint }}>One-time project investment · Final price confirmed after discovery call</span>
        </div>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button onClick={() => scrollTo("connect-now")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150 shadow-sm"
            style={{ background: c.navy, color: c.cream, border: `1px solid ${c.navy}`, cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.background = c.gold; e.currentTarget.style.borderColor = c.gold; }}
            onMouseLeave={e => { e.currentTarget.style.background = c.navy; e.currentTarget.style.borderColor = c.navy; }}>
            Get Started — Secure Spot
          </button>
          <button onClick={() => window.location.href = "/contact"}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
            style={{ background: "transparent", color: c.navy, border: `1px solid ${c.line}`, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.navy}
            onMouseLeave={e => e.currentTarget.style.borderColor = c.line}>
            Talk To Us First
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

// ─── OVERVIEW ─────────────────────────────────────────────────────────────────
function Overview() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="overview">
      <div className="max-w-2xl mx-auto">
        <FadeIn delay={100}>
          <p className="text-sm leading-loose mb-4" style={{ color: c.muted, lineHeight: "1.9" }}>
            The Starter plan exists for one reason: most small businesses either don't have a website yet, or have one that no longer represents them properly. This plan gets you live with a clean, credible, mobile-friendly website — built around your business, not a recycled template — in as little as one to two weeks.
          </p>
          <p className="text-sm leading-loose mb-6" style={{ color: c.muted, lineHeight: "1.9" }}>
            It's the right starting point if you need a real online presence before you need anything more complex like automation or a custom dashboard. Many of our Growth and Business Pro clients started here first, then upgraded once their business outgrew a simple website.
          </p>
          <h3 className="text-[19px] mb-3 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>Who Starter Is Built For</h3>
          <p className="text-sm leading-loose" style={{ color: c.muted, lineHeight: "1.9" }}>
            Solo founders, local shops, service providers, and small teams who need a working, trustworthy website without paying for features they don't need yet.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
const features = [
  { num: "01", title: "Professional Website", desc: "A custom-designed website built around your business, services, and brand — not a generic template with your logo dropped on top. Every page is built to look and feel intentional." },
  { num: "02", title: "Mobile Responsive Design", desc: "Most of your customers will find you on a phone. Your site is built to look and work cleanly on every screen size, from a small phone to a wide desktop monitor." },
  { num: "03", title: "Contact Form", desc: "A built-in inquiry form sends messages straight to your email, so leads never get lost in a comment box or a contact page no one checks." },
  { num: "04", title: "WhatsApp Integration", desc: "A floating click-to-chat button lets visitors message your business on WhatsApp instantly — the channel most customers already trust and use." },
  { num: "05", title: "Basic SEO Setup", desc: "Page titles, meta descriptions, and proper page structure so Google can actually find, understand, and index your site correctly from day one." },
  { num: "06", title: "5 Pages", desc: "Typically Home, About, Services, Gallery or Portfolio, and Contact — enough structure to represent your business properly without unnecessary pages." },
  { num: "07", title: "1 Month Support", desc: "Any fixes, small tweaks, or adjustments in the first 30 days after launch are covered, so you're not left figuring things out alone." },
];

function Features() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="included">
      <FadeIn>
        <Eyebrow>What's Included</Eyebrow>
        <SectionTitle>Everything that comes with Starter</SectionTitle>
        <SectionSub>Seven essentials that take you from no website, or a poor one, to a working professional presence.</SectionSub>
      </FadeIn>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
        {features.map((f, i) => (
          <FadeIn key={f.num} delay={i * 70}>
            <div className="bg-white border rounded-2xl p-6 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm" style={{ borderColor: c.line }}>
              <div className="text-xs font-semibold tracking-wide mb-2.5" style={{ fontFamily: "'Fraunces', serif", color: c.gold, letterSpacing: "1px" }}>
                {f.num}
              </div>
              <h4 className="text-base font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>{f.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted, lineHeight: "1.75" }}>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Is hosting included?", a: "Hosting setup is arranged as part of the project; ongoing hosting and domain renewal costs are billed separately at actual cost." },
  { q: "Can I add more pages later?", a: "Yes — additional pages can be added anytime, either as a one-off request or by upgrading to the Growth plan." },
  { q: "What do I need to provide?", a: "Your business logo (if you have one), photos, service details, and any text content you'd like used. We can also help write or refine copy." },
  { q: "What happens after the 1 month of support ends?", a: "You can continue on a pay-as-you-go basis for changes, or move onto a Maintenance Membership for ongoing care." },
];

function StarterFaq() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="faq">
      <FadeIn>
        <Eyebrow>Frequently Asked</Eyebrow>
        <SectionTitle>Starter, answered plainly</SectionTitle>
      </FadeIn>
      
      <div className="max-w-2xl mx-auto flex flex-col gap-2.5 mt-6">
        {faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 80}>
            <FaqItem {...f} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
export default function StarterPlanPage() {
  const processSteps = [
    { title: "Discovery Call", desc: "We learn about your business, services, and what the website needs to do." },
    { title: "Content Collection", desc: "You share your logo, photos, and business details; we guide you on what's needed." },
    { title: "Design", desc: "We design your pages around your brand, for your review and feedback." },
    { title: "Development & Review", desc: "The site is built, tested across devices, and refined based on your feedback." },
    { title: "Launch & Handover", desc: "Your website goes live, with a month of support included." },
  ];

  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      
      <PageHeader />
      
      <Overview />
      
      <Features />
      
      <section className="py-6">
        <FadeIn delay={120}>
          <ProcessSection
            steps={processSteps}
            title="From kickoff to launch in about two weeks"
            sub="A simple, structured process — no guesswork, no scope creep."
          />
        </FadeIn>
      </section>
      
      <section className="max-w-4xl mx-auto px-8 py-10" id="connect-now">
        <FadeIn>
          <WhatsAppCard planName="Starter" />
        </FadeIn>
      </section>
      
      <StarterFaq />
      
      <FadeIn direction="up">
        <CtaBanner
          eyebrow="Not Sure Yet?"
          title="Let's talk before you commit to anything"
          sub="If you're not sure Starter is the right fit, a quick call will tell you in five minutes — no pressure, no obligation."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Compare All Plans"
          secondaryHref="/pricing"
        />
      </FadeIn>

    </div>
  );
}