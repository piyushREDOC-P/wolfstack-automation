import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, WhatsAppCard, CtaBanner } from './PlanPageShared';

export default function ProfessionalCarePage() {
  const features = [
    { title: 'Everything in Essential', desc: 'All Essential Care services plus more proactive work.' },
    { title: 'Performance Optimization', desc: 'Improve load times, caching and image delivery for better UX.' },
    { title: 'Monthly Reports', desc: 'Detailed monthly reports covering uptime, performance and security.' },
    { title: 'Priority Support', desc: 'Faster response SLA and prioritized ticket queue.' },
    { title: 'Bug Fixes', desc: 'Fixes for functional regressions and minor feature issues.' },
  ];

  const faqs = [
    { q: 'Will you make larger feature changes?', a: 'Professional Care covers bug fixes and small improvements; larger feature work is scoped separately.' },
    { q: 'How is priority support delivered?', a: 'Tickets from Professional Care customers are triaged ahead of Essential Care requests.' },
    { q: 'Can you help with performance audits?', a: 'Yes — we include basic performance optimizations and can perform a deeper audit on request.' },
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
            Professional Care
          </h1>
          <p className="text-base max-w-xl mx-auto mb-4 leading-relaxed" style={{ color: c.muted }}>
            For businesses that rely on their site daily — proactive monitoring and faster support.
          </p>
          <div className="text-[28px] mb-6 font-bold" style={{ color: c.navy }}>
            ₹1,999 <span className="text-sm font-normal" style={{ color: c.faint }}>/ month</span>
          </div>
        </div>
      </FadeIn>

      {/* ─── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>What's Included</Eyebrow>
          <SectionTitle>Proactive maintenance and faster fixes</SectionTitle>
          <SectionSub>Designed for sites with regular traffic and business dependence.</SectionSub>
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

      {/* ─── MONTHLY CHECKLIST ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Monthly Checklist</Eyebrow>
          <SectionTitle>What we do each month</SectionTitle>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 bg-white border rounded-2xl p-7 shadow-sm" style={{ borderColor: c.line }}>
            <ul className="list-disc pl-5 space-y-2.5 text-sm leading-relaxed" style={{ color: c.ink }}>
              <li>All Essential Care checks and updates.</li>
              <li>Performance tuning and cache revalidation.</li>
              <li>Security scans and remediation for detected issues.</li>
              <li>Detailed monthly report and recommendations.</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle>Process and communication</SectionTitle>
          <SectionSub>Tickets, triage and scheduled improvements.</SectionSub>
        </FadeIn>

        <FadeIn delay={120} className="mt-8">
          <ProcessSection steps={[
            { title: 'Report', desc: 'Send issue via WhatsApp or email with context.' },
            { title: 'Prioritize', desc: 'We assign a priority and schedule the fix quickly.' },
            { title: 'Improve', desc: 'Apply optimizations and verify results.' },
            { title: 'Document', desc: 'Include notes in your monthly report.' },
          ]} />
        </FadeIn>
      </section>

      {/* ─── SUPPORT & SLA ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Support & SLA</Eyebrow>
          <SectionTitle>Faster response commitments</SectionTitle>
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={80}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>Response</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>Initial response within 8 business hours for priority tickets.</p>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>Deliverables</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>Monthly performance checks and a prioritized backlog for improvements.</p>
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

      {/* ─── READY TO UPGRADE ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Ready to upgrade?</Eyebrow>
          <SectionTitle>Start Professional Care</SectionTitle>
          <SectionSub>Priority handling and proactive improvements to keep your business running.</SectionSub>
        </FadeIn>

        <FadeIn delay={100} className="mt-8">
          <WhatsAppCard planName="Professional Care" />
        </FadeIn>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="Priority support" 
          title="Professional Care" 
          sub="Faster response and proactive maintenance for active sites." 
          primaryLabel="Get in touch" 
          primaryHref="/contact-us" 
          secondaryLabel="Back to Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}