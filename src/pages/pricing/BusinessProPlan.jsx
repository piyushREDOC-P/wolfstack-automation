import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, ProcessSection, WhatsAppCard, CtaBanner } from './PlanPageShared';

function PageHeader() {
  return (
    <div className="max-w-4xl mx-auto px-8 pt-16 pb-3 text-center">
      <FadeIn direction="down">
        <a href="/pricing" className="inline-flex items-center gap-1.5 text-xs mb-7 transition-colors duration-150" style={{ color: c.faint, textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M15 18l-6-6 6-6" /></svg>
          Back to Pricing
        </a>
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 border" style={{ color: c.gold, borderColor: c.line }}>Enterprise Plan</span>
        </div>
        <h1 className="text-4xl sm:text-5xl mb-3.5 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>Business Pro</h1>
        <p className="text-base max-w-xl mx-auto mb-7" style={{ color: c.muted, lineHeight: '1.8' }}>Full-featured presence with automation and priority support.</p>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="text-[34px] font-bold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>₹29,999+</span>
          <span className="text-xs" style={{ color: c.faint }}>Custom scope investment · Tailored to complex business workflows</span>
        </div>
      </FadeIn>
    </div>
  )
}

const features = [
  { title: 'Custom Dashboard', desc: 'Tailored metrics, user analytics, and unified data views built to your specifications.' },
  { title: 'Business Automation', desc: 'Automated operational workflows, custom API hooks, and task sync systems.' },
  { title: 'Client Portal', desc: 'Secure client interaction environments with gated permissions and file flows.' },
  { title: 'Advanced Forms', desc: 'Multi-step intake funnels, conditional formatting fields, and secure integrations.' },
  { title: 'Email Automation', desc: 'Triggered transaction sequences, dynamic transactional loops, and updates.' },
  { title: 'Priority Support', desc: 'Direct accelerated access lines with elite response commitments.' },
  { title: '6 Months Maintenance', desc: 'Extended routine maintenance windows, backup infrastructure audits, and continuous optimization.' },
]

export default function BusinessProPlanPage() {
  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ─── HEADER BLOCK ───────────────────────────────────────────────── */}
      <PageHeader />
      
      {/* ─── WHAT'S INCLUDED SECTION ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Capabilities</Eyebrow>
          <SectionTitle>What's Included</SectionTitle>
          <SectionSub>Advanced software integration structures designed to scale backend business logic.</SectionSub>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 70}>
              <div className="bg-white border rounded-2xl p-6 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm" style={{ borderColor: c.line }}>
                <h4 className="text-base font-semibold mb-2" style={{ color: c.navy }}>{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      
      {/* ─── PROCESS PIPELINE SECTION ───────────────────────────────────── */}
      <section className="py-6">
        <FadeIn delay={100}>
          <ProcessSection 
            steps={[
              { title: 'Discovery & Integration', desc: 'Plan automation and dashboards' }, 
              { title: 'Build', desc: 'Develop automations and dashboard' }, 
              { title: 'QA', desc: 'Test integrations' }, 
              { title: 'Launch', desc: 'Go live and handover' }
            ]} 
            title="How Business Pro ships" 
            sub="Automation and dashboards delivered end-to-end" 
          />
        </FadeIn>
      </section>
      
      {/* ─── CONNECT CARD SECTION ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <WhatsAppCard planName="Business Pro" />
        </FadeIn>
      </section>
      
      {/* ─── GLOBAL CTA BANNER ─────────────────────────────────────────── */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="Need a custom quote?" 
          title="Business Pro" 
          sub="We price this per-scope — book a call to get exact numbers" 
          primaryLabel="Book a Strategy Call" 
          primaryHref="/contact-us" 
          secondaryLabel="Back to Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}