import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, WhatsAppCard, CtaBanner } from './PlanPageShared';

export default function PremiumCarePage() {
  const features = [
    { title: 'Everything in Professional', desc: 'All Professional Care features plus a dedicated engineer and higher-touch support.' },
    { title: 'Dedicated Support', desc: 'A named contact and faster SLA for mission-critical issues.' },
    { title: 'Unlimited Minor Updates', desc: 'Small content and configuration updates handled without extra charges.' },
    { title: 'Weekly Monitoring', desc: 'Weekly health checks with in-depth reports and remediation.' },
    { title: 'Emergency Assistance', desc: 'Rapid response for site outages and critical incidents.' },
  ];

  const faqs = [
    { q: 'Do you provide a dedicated engineer?', a: 'Premium Care customers get a named contact for coordination and quicker resolutions.' },
    { q: 'Are major feature builds included?', a: 'Major feature work is quoted separately; Premium Care focuses on maintenance and support.' },
    { q: 'How do emergency incidents work?', a: 'Emergency incidents are escalated immediately and handled according to the emergency SLA.' },
  ];

  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <FadeIn direction="down">
        <div className="max-w-4xl mx-auto px-8 pt-16 pb-6 text-center">
          <a href="/pricing" className="inline-flex items-center gap-1.5 text-xs mb-6 transition-opacity hover:opacity-75" style={{ color: c.faint }}>
            ← Back to Pricing
          </a>
          <h1 className="text-4xl sm:text-5xl mb-3.5 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
            Premium Care
          </h1>
          <p className="text-base max-w-xl mx-auto mb-4 leading-relaxed" style={{ color: c.muted }}>
            Top-tier coverage with dedicated support and proactive weekly remediation.
          </p>
          <div className="text-[28px] mb-6 font-bold" style={{ color: c.navy }}>
            ₹4,999 <span className="text-sm font-normal" style={{ color: c.faint }}>/ month</span>
          </div>
        </div>
      </FadeIn>

      {/* ─── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>What's Included</Eyebrow>
          <SectionTitle>Premium support for mission-critical sites</SectionTitle>
          <SectionSub>Higher-touch support, weekly remediation and a named contact.</SectionSub>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 70}>
              <div 
                className="bg-white border rounded-2xl p-6 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm" 
                style={{ borderColor: c.line }}
              >
                <h3 className="font-semibold text-lg mb-2" style={{ color: c.navy }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── WEEKLY CHECKLIST ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Weekly Checklist</Eyebrow>
          <SectionTitle>Active monitoring and remediation</SectionTitle>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 bg-white border rounded-2xl p-7 shadow-sm" style={{ borderColor: c.line }}>
            <ul className="list-disc pl-5 space-y-2.5 text-sm leading-relaxed" style={{ color: c.ink }}>
              <li>Weekly performance and security audits with fixes applied.</li>
              <li>Verify and test backups; maintain multiple restore points.</li>
              <li>Continuous uptime checks and automatic failover monitoring.</li>
              <li>Unlimited minor content and configuration updates.</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle>Dedicated coordination</SectionTitle>
          <SectionSub>Fast escalation paths and a named support engineer.</SectionSub>
        </FadeIn>

        <FadeIn delay={120} className="mt-8">
          <ProcessSection steps={[
            { title: 'Contact', desc: 'Reach the dedicated contact via WhatsApp or email.' },
            { title: 'Escalate', desc: 'Critical incidents are escalated immediately and worked on continuously.' },
            { title: 'Remediate', desc: 'We apply fixes, coordinate any third-party reliance, and restore services.' },
            { title: 'Review', desc: 'Weekly summaries and strategic recommendations.' },
          ]} />
        </FadeIn>
      </section>

      {/* ─── SUPPORT & SLA ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Support & SLA</Eyebrow>
          <SectionTitle>Emergency response and dedicated support</SectionTitle>
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={80}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>SLA</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>Initial response within 1 hour for emergency incidents; rapid remediation until resolved.</p>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>Account</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>Named engineer and regular strategy syncs to keep you ahead of issues.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQS ─────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Common Questions</Eyebrow>
          <SectionTitle>FAQs</SectionTitle>
        </FadeIn>

        <div className="mt-6 flex flex-col gap-3.5">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 80}>
              <FaqItem q={f.q} a={f.a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── START PREMIUM CARE ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Ready for Premium</Eyebrow>
          <SectionTitle>Start Premium Care</SectionTitle>
          <SectionSub>Highest level of support for mission-critical websites.</SectionSub>
        </FadeIn>

        <FadeIn delay={100} className="mt-8">
          <WhatsAppCard planName="Premium Care" />
        </FadeIn>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="Top-tier" 
          title="Premium Care" 
          sub="Dedicated support and weekly monitoring for mission-critical sites." 
          primaryLabel="Get in touch" 
          primaryHref="/contact-us" 
          secondaryLabel="Back to Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}