import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, WhatsAppCard, CtaBanner } from './PlanPageShared';

export default function EssentialCarePage() {
  const features = [
    { title: 'Security Updates', desc: 'Apply CMS, plugin and theme updates weekly to prevent vulnerabilities.' },
    { title: 'Backup Monitoring', desc: 'Daily automated backups with weekly restore verifications.' },
    { title: 'Minor Content Changes', desc: 'Up to 2 small content edits per month (text, images).' },
    { title: 'Monthly Health Check', desc: 'Performance, uptime and SEO sanity checks with a short report.' },
  ];

  const faqs = [
    { q: 'How quickly do you respond?', a: 'We typically respond within 24 hours on business days for Essential Care requests.' },
    { q: 'Can I upgrade later?', a: 'Yes — you can upgrade to Growth or Business Pro anytime without downtime.' },
    { q: 'Are emergency fixes included?', a: 'Critical site outages are prioritized; non-critical fixes follow the monthly cadence.' },
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
            Essential Care
          </h1>
          <p className="text-base max-w-xl mx-auto mb-4 leading-relaxed" style={{ color: c.muted }}>
            Basic website care to keep things healthy and secure — perfect for small sites and brochure websites.
          </p>
          <div className="text-[28px] mb-6 font-bold" style={{ color: c.navy }}>
            ₹999 <span className="text-sm font-normal" style={{ color: c.faint }}>/ month</span>
          </div>
        </div>
      </FadeIn>

      {/* ─── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>What's Included</Eyebrow>
          <SectionTitle>Essential maintenance for small sites</SectionTitle>
          <SectionSub>Everything you need to keep the site safe, backed up and up-to-date.</SectionSub>
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
          <SectionTitle>What we do every month</SectionTitle>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 bg-white border rounded-2xl p-7 shadow-sm" style={{ borderColor: c.line }}>
            <ul className="list-disc pl-5 space-y-2.5 text-sm leading-relaxed" style={{ color: c.ink }}>
              <li>Apply security and compatibility updates to the CMS and plugins.</li>
              <li>Verify daily backups and test restore snapshots.</li>
              <li>Run uptime and performance scans; fix small regressions.</li>
              <li>Perform a content sanity check and minor content edits on request.</li>
              <li>Produce a short monthly health summary emailed to you.</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle>Simple, predictable support</SectionTitle>
          <SectionSub>Fast triage, monthly maintenance windows, clear communication.</SectionSub>
        </FadeIn>

        <FadeIn delay={120} className="mt-8">
          <ProcessSection steps={[
            { title: 'Report', desc: 'Open a ticket via WhatsApp or email — include screenshots when possible.' },
            { title: 'Triage', desc: 'We confirm severity and schedule the work during the next maintenance window.' },
            { title: 'Fix & Verify', desc: 'Apply changes, run tests and verify the site is healthy.' },
            { title: 'Report', desc: 'You receive a short report summarizing the work done.' },
          ]} />
        </FadeIn>
      </section>

      {/* ─── SUPPORT & SLA ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Support & SLA</Eyebrow>
          <SectionTitle>Response times and priorities</SectionTitle>
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={80}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>Response</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>Initial response within 24 business hours. Critical outages are accelerated.</p>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="bg-white border rounded-2xl p-6 h-full shadow-sm" style={{ borderColor: c.line }}>
              <h4 className="font-semibold text-base mb-2" style={{ color: c.navy }}>Support Channels</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>WhatsApp is preferred for quick requests; email for reports and billing.</p>
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

      {/* ─── GET ESSENTIAL CARE ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Ready to start?</Eyebrow>
          <SectionTitle>Get Essential Care</SectionTitle>
          <SectionSub>Quick setup and simple billing — start protecting your site this month.</SectionSub>
        </FadeIn>

        <FadeIn delay={100} className="mt-8">
          <WhatsAppCard planName="Essential Care" />
        </FadeIn>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="Keep it running" 
          title="Essential Care" 
          sub="Affordable basics to keep your site secure and online." 
          primaryLabel="Get in touch" 
          primaryHref="/contact-us" 
          secondaryLabel="Back to Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}