import FadeIn from "../../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, WhatsAppCard, CtaBanner } from './PlanPageShared';

function PageHeader() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  
  return (
    <div className="max-w-4xl mx-auto px-8 pt-16 pb-3 text-center">
      <FadeIn direction="down">
        <a href="/pricing" className="inline-flex items-center gap-1.5 text-xs mb-7 transition-colors duration-150" style={{ color: c.faint, textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M15 18l-6-6 6-6" /></svg>
          Back to Pricing
        </a>
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 border" style={{ color: c.gold, borderColor: c.line }}>Website Plan</span>
        </div>
        <h1 className="text-4xl sm:text-5xl mb-3.5 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>Growth</h1>
        <p className="text-base max-w-xl mx-auto mb-7" style={{ color: c.muted, lineHeight: '1.8' }}>A conversion-focused build with lead systems and performance work to grow your business.</p>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="text-[34px] font-bold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>₹14,999 – ₹24,999</span>
          <span className="text-xs" style={{ color: c.faint }}>One-time project investment · Final price confirmed after discovery</span>
        </div>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button onClick={() => scrollTo('connect-now')} className="px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 shadow-sm" style={{ background: c.navy, color: c.cream, border: `1px solid ${c.navy}` }}>
            Get Started — Secure Spot
          </button>
          <button onClick={() => window.location.href = '/contact-us'} className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150 hover:bg-white" style={{ background: 'transparent', color: c.navy, border: `1px solid ${c.line}` }}>
            Talk To Us First
          </button>
        </div>
      </FadeIn>
    </div>
  )
}

const features = [
  { num: '01', title: 'Everything in Starter', desc: 'All Starter features plus design depth.' },
  { num: '02', title: 'Custom Design', desc: 'Design tailored to your brand and conversion goals.' },
  { num: '03', title: 'Lead Capture System', desc: 'Forms and funnels that capture and route leads.' },
  { num: '04', title: 'Speed Optimization', desc: 'Performance tuning so pages load fast and convert.' },
  { num: '05', title: 'Advanced SEO Setup', desc: 'Keyword mapping and technical SEO tasks.' },
]

const faqs = [
  { q: 'How long does Growth take?', a: 'Typically 2–4 weeks depending on scope.' },
  { q: 'Can I upgrade later?', a: 'Yes — you can move to Business Pro for automation and dashboards.' },
]

export default function GrowthPlanPage() {
  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ─── HEADER BLOCK ───────────────────────────────────────────────── */}
      <PageHeader />
      
      {/* ─── OVERVIEW SECTION ───────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10" id="overview">
        <FadeIn delay={100}>
          <p className="text-sm leading-loose mb-4" style={{ color: c.muted }}>Growth adds conversion-focused features and lead systems to Starter.</p>
        </FadeIn>
      </section>
      
      {/* ─── WHAT'S INCLUDED SECTION ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10" id="included">
        <FadeIn>
          <Eyebrow>Features</Eyebrow>
          <SectionTitle>What's Included</SectionTitle>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          {features.map((f, i) => (
            <FadeIn key={f.num} delay={i * 70}>
              <div className="bg-white border rounded-2xl p-6 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm" style={{ borderColor: c.line }}>
                <div className="text-xs font-semibold tracking-wide mb-2.5" style={{ color: c.gold }}>{f.num}</div>
                <h4 className="text-base font-semibold mb-2" style={{ color: c.navy }}>{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      
      {/* ─── PROCESS PIPELINE SECTION ───────────────────────────────────── */}
      <section className="py-6">
        <FadeIn delay={120}>
          <ProcessSection 
            steps={[
              { title: 'Discovery Call', desc: 'We map goals' }, 
              { title: 'Design', desc: 'We design and iterate' }, 
              { title: 'Build', desc: 'We develop and test' }, 
              { title: 'Launch', desc: 'We handover and support' }
            ]} 
            title="How Growth is delivered" 
            sub="Designed to convert and capture leads" 
          />
        </FadeIn>
      </section>
      
      {/* ─── CONNECT / WHATSAPP INTERACTION ────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-10" id="connect-now">
        <FadeIn>
          <WhatsAppCard planName="Growth" />
        </FadeIn>
      </section>
      
      {/* ─── FAQ MODULE SECTION ────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-10">
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
      
      {/* ─── GLOBAL CTA BANNER ─────────────────────────────────────────── */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="Ready to grow?" 
          title="Start with Growth" 
          sub="We can scope features and timeline on a short call" 
          primaryLabel="Book a Strategy Call" 
          primaryHref="/contact-us" 
          secondaryLabel="Back to Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}