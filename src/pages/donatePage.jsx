import FadeIn from "../components/FadeIn";
import { c, Eyebrow, SectionTitle, SectionSub, FaqItem, ProcessSection, WhatsAppCard, CtaBanner } from './pricing/PlanPageShared';

function DonatePageHeader() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  
  return (
    <div className="max-w-4xl mx-auto px-8 pt-16 pb-3 text-center">
      <FadeIn direction="down">
        <a href="/" className="inline-flex items-center gap-1.5 text-xs mb-7 transition-opacity hover:opacity-75" style={{ color: c.faint, textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M15 18l-6-6 6-6" /></svg>
          Back to Home
        </a>
        
        <div className="flex justify-center gap-2 mb-5 flex-wrap">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 border" style={{ color: c.gold, borderColor: c.line }}>
            Wolfstack Automation · Institutional Vision
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl mb-4 font-semibold tracking-tight leading-tight" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
          Fueling a Tech Powerhouse.<br />Building Without Compromise.
        </h1>
        
        <p className="text-base max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: c.muted }}>
          We are executing a definitive master plan to build a massive, generation-defining technology entity under Wolfstack Automation. We design hyper-scale infrastructure, engineer resilient ecosystems, and challenge monolithic industry standards. If you want to see an independent, high-conviction technology giant rise, your capital backing makes it possible.
        </p>
        
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <span className="text-[28px] font-bold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
            Open Capital Foundation
          </span>
          <span className="text-xs max-w-md mx-auto leading-relaxed" style={{ color: c.faint }}>
            Flexible Contributions · Zero corporate interference · 100% focused on pure technology R&D and scaling talent.
          </span>
        </div>
        
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button 
            onClick={() => scrollTo('allocation')} 
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 shadow-sm" 
            style={{ background: c.navy, color: c.cream, border: `1px solid ${c.navy}` }}
          >
            Back Our Vision — Donate Now
          </button>
          <a 
            href="mailto:wolfstackautomation@gmail.com?subject=Strategic%20Partnership%20Inquiry"
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-white inline-flex items-center" 
            style={{ background: 'transparent', color: c.navy, border: `1px solid ${c.line}`, textDecoration: 'none' }}
          >
            Email Corporate Desk
          </a>
        </div>
      </FadeIn>
    </div>
  )
}

const pillars = [
  { num: '01', title: 'Sovereign Core Architecture', desc: 'Building complex high-performance systems from the bare metal up, ensuring absolute operational autonomy for Wolfstack Automation.' },
  { num: '02', title: 'Elite Engineering Core', desc: 'Sourcing and assembling an uncompromising team of elite systems architects, automation experts, and designers.' },
  { num: '03', title: 'High-Performance Compute', desc: 'Acquiring massive cloud infrastructure, low-latency routing clusters, and continuous stress-testing frameworks.' },
  { num: '04', title: 'Absolute Ecosystem Freedom', desc: 'By declining short-sighted venture capital control, we prioritize technical engineering excellence over hasty monetization.' },
  { num: '05', title: 'Global Scaling Pipelines', desc: 'Deploying secure data fabrics and high-availability modules capable of handling millions of automation streams seamlessly.' },
]

const faqs = [
  { q: 'How is my contribution utilized?', a: 'Every rupee goes directly into our core development budget — specifically targeting heavy compute power, advanced automation arrays, and technical talent acquisition.' },
  { q: 'Can corporate entities provide backing?', a: 'Yes. If you represent an organization looking to back deep independent innovation, please connect directly via wolfstackautomation@gmail.com.' },
  { q: 'What is the long-term roadmap?', a: 'We operate in high-precision engineering cycles. The immediate milestone focuses on launching robust core data protocols, followed by full stack expansion.' },
]

export default function DonateVisionPage() {
  return (
    <div style={{ background: c.cream, color: c.ink, fontFamily: "'Inter', sans-serif" }}>
      
      {/* HEADER BLOCK */}
      <DonatePageHeader />
      
      {/* RE-ARCHITECTED OVERVIEW BLOCK */}
      <section className="max-w-5xl mx-auto px-8 py-12" id="overview">
        <FadeIn delay={100}>
          <div className="border-l-2 pl-6" style={{ borderColor: c.gold }}>
            <p className="text-base leading-relaxed font-medium" style={{ color: c.navy }}>
              The tech landscape is crowded with short-term, derivative software. At Wolfstack Automation, we believe the future belongs to companies that build deep, foundational intellectual property. Your contribution isn't a simple tip — it is the primary engine that ensures we scale fast, expand our research capabilities, and establish a world-class institutional structure.
            </p>
          </div>
        </FadeIn>
      </section>
      
      {/* THE NUMBERED PILLARS SECTION */}
      <section className="max-w-5xl mx-auto px-8 py-10" id="included">
        <FadeIn>
          <Eyebrow>The Foundation</Eyebrow>
          <SectionTitle>Where your donation directly allocates</SectionTitle>
          <SectionSub>A highly disciplined capital deployment model focused exclusively on operational growth and scaling metrics.</SectionSub>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {pillars.map((p, i) => (
            <FadeIn key={p.num} delay={i * 70}>
              <div className="bg-white border rounded-2xl p-6 h-full shadow-sm transition-transform duration-200 hover:-translate-y-1" style={{ borderColor: c.line }}>
                <div className="text-xs font-bold tracking-widest mb-3" style={{ color: c.gold }}>{p.num}</div>
                <h4 className="text-base font-semibold mb-2" style={{ color: c.navy }}>{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      
      {/* THE CORPORATE PHASES PIPELINE */}
      <section className="py-6">
        <ProcessSection 
          steps={[
            { title: 'Deep R&D Phase', desc: 'Isolating critical bottlenecks, compiling underlying core IP, and validating architectural integrity.' },
            { title: 'Talent Acceleration', desc: 'Onboarding top tier technical professionals and setting up scalable internal workflows.' },
            { title: 'Infrastructure Scale', desc: 'Deploying distributed edge setups, cloud processing pipelines, and ironclad security parameters.' },
            { title: 'Ecosystem Launch', desc: 'Unveiling a robust commercial entity built entirely on a solid foundations of organic community backing.' }
          ]} 
          title="Our Execution Strategy" 
          sub="How we systematically deploy resources to transition from an agile team to a tech behemoth." 
        />
      </section>
      
      {/* RE-DESIGNED DONATION INTERACTION SYSTEM */}
      <section className="max-w-4xl mx-auto px-8 py-12 text-center" id="allocation">
        <FadeIn>
          <div className="bg-white border rounded-3xl p-8 sm:p-12 shadow-sm" style={{ borderColor: c.line }}>
            <Eyebrow>Secure Transfer Pipeline</Eyebrow>
            <h3 className="text-2xl sm:text-3xl mb-4 font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
              Initialize Capital Support
            </h3>
            <p className="text-sm max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: c.muted }}>
              To ensure all transaction values scale with zero overhead loss, we coordinate donations directly through our verified, secure communication channels. Simply use the official WhatsApp portal below or reach out directly over email to establish infrastructure funding.
            </p>
            
            <div className="inline-block bg-neutral-50 border rounded-2xl p-6 text-left max-w-md w-full mb-6 mx-auto" style={{ borderColor: c.line }}>
              <span className="text-[10px] uppercase tracking-widest font-bold block mb-1" style={{ color: c.gold }}>Official Channels</span>
              <h5 className="font-semibold text-sm mb-2" style={{ color: c.navy }}>Direct Coordinates</h5>
              <p className="text-xs leading-relaxed mb-2" style={{ color: c.muted }}>
                <strong>WhatsApp:</strong> +91 8446608156
              </p>
              <p className="text-xs leading-relaxed" style={{ color: c.muted }}>
                <strong>Corporate Desk:</strong> wolfstackautomation@gmail.com
              </p>
              <p className="text-xs leading-relaxed" style={{ color: c.muted }}>
                <strong>UPI ID:</strong> 8767745214@mbk
              </p>
            </div>
            
            <div className="mt-2">
              <WhatsAppCard planName="Vision Donation Portal" />
            </div>
          </div>
        </FadeIn>
      </section>
      
      {/* THE FAQ MODULE */}
      <section className="max-w-4xl mx-auto px-8 py-10">
        <FadeIn>
          <Eyebrow>Transparency Protocol</Eyebrow>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </FadeIn>

        <div className="mt-6 flex flex-col gap-3.5">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 80}>
              <FaqItem q={f.q} a={f.a} />
            </FadeIn>
          ))}
        </div>
      </section>
      
      {/* FINAL GLOBAL CONVICTION CTA */}
      <FadeIn direction="up">
        <CtaBanner 
          eyebrow="The Next Tech Horizon" 
          title="Back Wolfstack Automation" 
          sub="Be a critical pillar in a company dedicated to raw engineering logic, sovereign execution, and massive industry transformation." 
          primaryLabel="Connect via WhatsApp" 
          primaryHref="https://wa.me/918446608156?text=Hi!%20I%20want%20to%20contribute%20capital%20to%20back%20the%20vision%20of%20Wolfstack%20Automation." 
          secondaryLabel="Explore Core Pricing" 
          secondaryHref="/pricing" 
        />
      </FadeIn>

    </div>
  );
}