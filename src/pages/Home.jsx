import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const Check = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${className} text-gold flex-shrink-0`}>
    <path d="M5 13l4 4L19 7" />
  </svg>
)

const services = [
  {
    title: 'Web Development',
    desc: 'Custom-built business websites engineered for speed, clarity, and conversion — designed around how your customers actually decide, not a template dressed up to look custom.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" /></svg>,
  },
  {
    title: 'Business Automation',
    desc: "We connect your tools and automate the repetitive work — follow-ups, data entry, reporting — so your team's time goes toward decisions, not data shuffling.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1-1.4 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.1a1.6 1.6 0 001.4-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3h0a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.1a1.6 1.6 0 001 1.5h0a1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8v0a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z" /></svg>,
  },
  {
    title: 'Website Management',
    desc: "Ongoing oversight of your site's content, performance, and presentation — so it keeps representing your business correctly while you focus elsewhere.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>,
  },
  {
    title: 'Website Maintenance',
    desc: "Regular backups, security checks, and software updates that keep your website fast, current, and protected against the things you'd rather not think about.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /></svg>,
  },
  {
    title: 'Lead Capture Systems',
    desc: 'Forms, funnels, and follow-up sequences engineered to turn visitors into conversations automatically — before they have the chance to leave.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  },
  {
    title: 'Process Optimization',
    desc: 'We map how work actually moves through your business and rebuild the slow, manual parts into systems that run on their own.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-gold"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>,
  },
]

const benefits = [
  { mark: '⏱', title: 'Save Time', desc: 'Repetitive admin work — data entry, follow-ups, reporting — gets handled automatically, returning hours to your week instead of your inbox.' },
  { mark: '⚙', title: 'Improve Efficiency', desc: 'Information moves between your tools without manual handoffs, so work progresses on its own instead of waiting on someone to notice it.' },
  { mark: '↓', title: 'Reduce Workload', desc: "Fewer dropped tasks, fewer reminders, fewer things only one person knows how to do — your operations keep running even when you're not watching them." },
]

const processSteps = [
  { num: '01', title: 'Discovery & Audit', desc: 'We review your current website, tools, and workflows to find exactly where time and leads are being lost.' },
  { num: '02', title: 'Strategy & Roadmap', desc: 'A clear, written plan outlining what gets built, what gets automated, and in what order.' },
  { num: '03', title: 'Design & Development', desc: 'We build your website and supporting systems, with regular check-ins so there are no surprises at the end.' },
  { num: '04', title: 'Automation & Integration', desc: 'Your tools are connected and workflows automated, then tested against how your business actually operates.' },
  { num: '05', title: 'Launch, Support & Optimization', desc: 'We go live, monitor performance, and refine the systems as your business and its needs grow.' },
]

const whyItems = [
  'Transparent, Fixed Pricing',
  'Fast, Reliable Delivery',
  'Custom-Built, Never Templated',
  'Dedicated Ongoing Support',
  'Deep Automation Expertise',
  'Security-First Approach',
  'One Partner, Full Stack',
  'Systems Built to Scale With You',
]

const maintCards = [
  { title: 'Automated Backups', desc: 'Your site is backed up on a regular schedule, so nothing is ever lost to a bad update or an unexpected error.', icon: <path d="M21 12a9 9 0 11-2.64-6.36M21 4v6h-6" /> },
  { title: 'Software & Plugin Updates', desc: "We keep your site's core software current, closing security gaps before they become problems.", icon: <path d="M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0112-3.5M19 15a7 7 0 01-12 3.5" /> },
  { title: 'Uptime Monitoring', desc: 'Your site is monitored around the clock, with alerts the moment something goes down.', icon: <path d="M3 12h4l3-9 4 18 3-9h4" /> },
  { title: 'Security Hardening', desc: 'We take website security seriously and make every reasonable effort to protect your website through ongoing monitoring, maintenance, updates, and security-focused best practices.', icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /> },
  { title: 'Bug Fixes', desc: "When something breaks, it's fixed — usually before you notice it was broken in the first place.", icon: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /> },
  { title: 'Content Updates', desc: 'Need a price changed or a page updated? We handle the small edits that would otherwise sit on your to-do list.', icon: <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /> },
  { title: 'Performance Monitoring', desc: 'We track load times and site health, optimizing before slowness ever becomes a lost customer.', icon: <path d="M3 3v18h18M7 14l4-4 3 3 5-5" /> },
  { title: 'Ongoing Improvements', desc: "Your site doesn't stay static — we refine layout, copy, and conversion paths as we learn what's actually working.", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></> },
]

const showcase = [
  {
    eyebrow: 'Sales & Leads',
    title: 'Capturing and converting faster',
    items: [
      'New leads instantly routed to the right person',
      'Follow-up sequences triggered automatically',
      'Quotes and proposals generated without manual entry',
    ],
  },
  {
    eyebrow: 'Customer Communication',
    title: 'Staying in touch without the effort',
    items: [
      'Appointment reminders sent automatically',
      'Order and status updates delivered in real time',
      'Review and feedback requests, sent at the right moment',
    ],
  },
  {
    eyebrow: 'Operations & Reporting',
    title: 'Visibility without the spreadsheets',
    items: [
      'Daily and weekly reports compiled automatically',
      'Inventory and data kept in sync across your tools',
      'Alerts when numbers move outside expected ranges',
    ],
  },
  {
    eyebrow: 'Onboarding & Admin',
    title: 'The paperwork that runs itself',
    items: [
      'New client paperwork generated and sent automatically',
      'Welcome sequences triggered the moment someone signs on',
      'Internal handoffs between teams happening without a reminder',
    ],
  },
]

const results = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '95%', label: 'Client Retention Rate' },
  { num: '99.9%', label: 'Average Site Uptime' },
  { num: '3x', label: 'Average Time Saved on Admin Work' },
  { num: '24/7', label: 'Automated Monitoring' },
  { num: '100+', label: 'Automated Workflows Running' },
]

const faqs = [
  { q: 'What does Wolf Stack Automation actually do?', a: 'We design and build business websites, automate the manual processes behind them, and keep both running through ongoing maintenance and support — as one connected service rather than three separate vendors.' },
  { q: 'How is this different from hiring a developer or buying automation software separately?', a: "A freelance developer typically stops at launch, and off-the-shelf automation tools assume you'll configure them yourself. We design, build, connect, and maintain the whole system — so it's accountable to one team, not stitched together from several." },
  { q: 'How long does a typical project take?', a: "Most website projects take two to four weeks from kickoff to launch. Automation timelines vary depending on how many tools and workflows are involved, and we'll give you a clear estimate after the discovery call." },
  { q: 'What happens after my website launches?', a: 'Launch is the starting point, not the finish line. Your site moves into ongoing management and maintenance — backups, updates, monitoring, and small content edits — so it keeps performing without you having to think about it.' },
  { q: 'Can you automate processes that are unique to my business?', a: 'Yes. During discovery, we map your specific workflows rather than applying a generic template, and build automation around how your business actually operates.' },
  { q: 'Do I need any technical knowledge to work with you?', a: "No. We handle the technical implementation and explain everything in plain terms. You'll always know what was built, why, and how to ask for changes." },
  { q: "What's included in website maintenance?", a: 'Backups, software updates, uptime and performance monitoring, security checks, bug fixes, and minor content updates are all included — full details are outlined in the section above.' },
  { q: 'How is pricing structured?', a: 'Project work is quoted as a fixed price after discovery, and ongoing management is billed as a flat monthly rate — no hourly surprises, no hidden fees.' },
  { q: 'What if I already have a website?', a: 'We can take over management and maintenance of your existing site, layer automation on top of it, or rebuild it entirely — whichever makes the most sense after we review what you have.' },
  { q: 'How quickly can automation be implemented?', a: 'Simple workflows can often be live within a week. More involved automation, spanning several tools, typically takes two to three weeks including testing.' },
  { q: 'Is my data secure?', a: "Yes. We follow security-first practices across every system we build — access controls, encrypted connections, and regular monitoring — and we're happy to walk through the specifics on a call." },
  { q: 'Do you offer ongoing support after the initial build?', a: "Yes — ongoing support is core to how we work. Most clients stay on a management plan so their systems keep improving as the business grows, not just on the day they launch." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between px-[22px] py-[18px] font-sans text-[14.5px] font-semibold text-navy"
      >
        {q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 text-gold flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[300px]' : 'max-h-0'}`}>
        <p className="px-[22px] pb-5 text-[13.5px] text-muted leading-[1.75]">{a}</p>
      </div>
    </div>
  )
}


export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* HERO */}
      <div className="max-w-[1240px] mx-auto px-8 pt-[90px] pb-[60px] grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,640px)_1fr] gap-6 items-center" id="home">
        <div className="hidden lg:flex flex-col gap-4.5">
          <FadeIn>
            <div className="bg-white border border-line rounded-2xl px-[18px] py-4 shadow-[0_16px_36px_rgba(43,38,28,0.10)] text-[13px] max-w-[230px] animate-floaty">
              <div className="font-display text-[13.5px] text-navy mb-2.5 flex items-center gap-1.5">📊 Live Operations</div>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> 50+ Systems Deployed</li>
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> 24/7 Automated Workflows</li>
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> 99.9% Uptime Monitoring</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="text-center">
          <FadeIn>
            <span className="inline-block text-[11.5px] tracking-[2px] text-gold font-semibold uppercase border border-line rounded-full px-4 py-1.5 mb-[22px]">
              Web Development · Business Automation · Digital Operations
            </span>
            <h1 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.16] text-navy mb-[18px]">
              Quietly powerful systems, <span className="text-gold">built to run your business without you</span>
            </h1>
          </FadeIn>

          <FadeIn delay={60}>
            <div className="space-y-3.5">
              <p className="text-[15px] leading-[1.85] text-muted max-w-[560px] mx-auto">
                Wolf Stack Automation designs, builds, and maintains the digital infrastructure growing businesses depend on — from polished, conversion-ready websites to the automated systems working behind them.
              </p>
              <p className="text-[15px] leading-[1.85] text-muted max-w-[560px] mx-auto">
                We replace scattered tools and manual processes with connected systems that capture leads, move work forward, and keep your digital presence performing — every day, without your attention.
              </p>
              <p className="text-[15px] leading-[1.85] text-muted max-w-[560px] mx-auto">
                The result is a business that runs on systems, not stress.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="flex gap-3.5 justify-center mt-6 flex-wrap">
              <button onClick={() => (navigate('/contact-us'))} className="px-[26px] py-[13px] rounded-full text-sm font-semibold cursor-pointer bg-navy text-cream border border-navy hover:bg-gold hover:border-gold transition-colors">
                Book a Strategy Call
              </button>
              <button onClick={() => {navigate('/services')}} className="px-[26px] py-[13px] rounded-full text-sm font-semibold cursor-pointer bg-transparent text-navy border border-line hover:border-navy transition-colors">
                Explore Our Services
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="hidden lg:flex flex-col gap-4.5 items-end">
          <FadeIn delay={60}>
            <div className="bg-white border border-line rounded-2xl px-[18px] py-4 shadow-[0_16px_36px_rgba(43,38,28,0.10)] text-[13px] max-w-[230px] animate-floaty [animation-delay:.6s]">
              <div className="font-display text-[13.5px] text-navy mb-2.5 flex items-center gap-1.5">🛠️ What We Build</div>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> Custom Business Websites</li>
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> End-to-End Automation</li>
                <li className="flex items-center gap-1.5 text-muted text-[12.5px]"><Check className="w-[13px] h-[13px]" /> Lead Capture Systems</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* TRUST */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="trust">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">Why Businesses Trust Us</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">Built for businesses that can&apos;t afford downtime</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            We operate as an extension of your team — not a vendor you have to chase. Every engagement is built on clear communication, measurable outcomes, and systems that are documented, not mysterious.
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="flex items-center gap-2.5 bg-white border border-line rounded-2xl px-4 py-4 text-[13px] font-medium text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px] text-gold flex-shrink-0"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /></svg>
              Security-First Infrastructure
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-line rounded-2xl px-4 py-4 text-[13px] font-medium text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px] text-gold flex-shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              Transparent Reporting
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-line rounded-2xl px-4 py-4 text-[13px] font-medium text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px] text-gold flex-shrink-0"><path d="M21 11.5a8.38 8.38 0 01-9 8.4A8.5 8.5 0 113 12a8.38 8.38 0 018.4-9 8.5 8.5 0 019.6 8.5z" /></svg>
              Direct, Dedicated Support
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-line rounded-2xl px-4 py-4 text-[13px] font-medium text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px] text-gold flex-shrink-0"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>
              Fixed, Transparent Pricing
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="text-center">
            <p className="text-[11.5px] tracking-[1.5px] uppercase text-faint mb-4.5">Industries We Serve</p>
            <div className="flex justify-center gap-2.5 flex-wrap">
              {['Retail & E-Commerce', 'Hospitality', 'Professional Services', 'Healthcare & Wellness', 'Real Estate', 'Education'].map((tag) => (
                <span key={tag} className="text-[13px] text-navy border border-line rounded-full px-[18px] py-2 bg-white">{tag}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="services">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">What We Offer</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">One partner, every system your business runs on</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            From the first impression to the systems running quietly behind it, we build and maintain the digital backbone your business depends on.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 60}>
              <div className="bg-white border border-line rounded-[18px] px-[26px] py-8 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(43,38,28,0.12)] hover:border-gold-light">
                <div className="w-[46px] h-[46px] rounded-xl bg-gold/10 flex items-center justify-center mb-[18px]">{s.icon}</div>
                <h3 className="font-display text-[18px] text-navy mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-muted leading-[1.7]">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="benefits">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">The Outcome</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">Less time managing. More time growing.</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            Every system we build is judged by one standard: does it give you back time, reduce friction, or remove a task you shouldn&apos;t have to think about?
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-[22px]">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 60}>
              <div className="text-center px-3 py-2">
                <div className="w-[54px] h-[54px] rounded-full border-[1.4px] border-gold-light flex items-center justify-center mx-auto mb-[18px] font-display text-[18px] text-gold">
                  {b.mark}
                </div>
                <h3 className="font-display text-[17px] text-navy mb-2.5">{b.title}</h3>
                <p className="text-[13.5px] text-muted leading-[1.75] max-w-[300px] mx-auto">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="process">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">How It Works</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">From first call to a system that runs itself</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            A clear, structured process — no guesswork, no scope creep, no surprises along the way.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-[30px] md:gap-0">
          {processSteps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 60}>
              <div className="relative text-center px-3.5">
                {i !== 0 && <div className="hidden md:block absolute top-6 left-[-50%] right-1/2 h-px bg-line" />}
                <div className="w-12 h-12 rounded-full bg-navy text-cream font-display text-[15px] flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h4 className="text-sm text-navy mb-1.5 font-semibold">{step.title}</h4>
                <p className="text-[12.5px] text-muted leading-[1.6]">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="why">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">Why Wolf Stack</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-9">Built for businesses that move fast</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyItems.map((item, i) => (
            <FadeIn key={item} delay={i * 40}>
              <div className="flex items-center gap-3 bg-white border border-line rounded-2xl px-[18px] py-4 text-sm text-ink font-medium">
                <Check />
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="max-w-[1180px] mx-auto px-8 py-16 bg-cream-deep rounded-[26px]" id="maintenance">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">Maintenance &amp; Support</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">A website that&apos;s looked after, not left alone</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            A site that launches well and is never maintained slowly becomes a liability. We keep yours current, secure, and performing — quietly, in the background.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px]">
          {maintCards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 50}>
              <div className="bg-white border border-line rounded-2xl p-[22px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-navy/[0.06] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px] text-navy">{c.icon}</svg>
                </div>
                <h4 className="font-display text-[15px] text-navy mb-1.5">{c.title}</h4>
                <p className="text-[12.5px] text-muted leading-[1.65]">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* AUTOMATION SHOWCASE */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="automation">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">Automation Showcase</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">What we automate, in practice</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            Every business has its own version of the same problem — good work, slowed down by manual steps. Here&apos;s where automation typically makes the biggest difference.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {showcase.map((s, i) => (
            <FadeIn key={s.title} delay={i * 60}>
              <div className="bg-white border border-line rounded-[18px] p-7">
                <div className="text-[11px] tracking-[1.5px] uppercase text-gold font-semibold mb-2.5">{s.eyebrow}</div>
                <h3 className="font-display text-[18px] text-navy mb-3.5">{s.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13.5px] text-muted leading-[1.6]">
                      <Check className="w-3.5 h-3.5 mt-[3px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-[1180px] mx-auto px-8 py-16 bg-navy rounded-[26px]" id="results">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold-light font-semibold uppercase mb-2.5">By The Numbers</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-cream text-center mb-3.5">Results that speak for themselves</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2.5">
          {results.map((r, i) => (
            <FadeIn key={r.label} delay={i * 50}>
              <div className="text-center">
                <div className="font-display text-[34px] sm:text-[38px] text-gold-light mb-1.5">{r.num}</div>
                <div className="text-[13px] text-[#C9D1DA]">{r.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="faq">
        <FadeIn>
          <div className="text-center text-[11.5px] tracking-[2px] text-gold font-semibold uppercase mb-2.5">Frequently Asked</div>
          <h2 className="font-display text-[26px] sm:text-[30px] text-navy text-center mb-3.5">Questions, answered plainly</h2>
          <p className="text-center text-muted text-[14.5px] max-w-[560px] mx-auto mb-11 leading-[1.7]">
            If you don&apos;t see your question here, it&apos;s a fair reason to book a call.
          </p>
        </FadeIn>
        <div className="max-w-[780px] mx-auto flex flex-col gap-2.5">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 30}>
              <FaqItem q={f.q} a={f.a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1180px] mx-auto px-8 py-16" id="contact">
        <FadeIn>
          <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep rounded-[28px] text-center px-8 py-[72px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,176,104,0.16),transparent_60%)]" />
            <div className="relative text-[11.5px] tracking-[2px] text-gold-light font-semibold uppercase mb-3.5">Let&apos;s Talk</div>
            <h2 className="relative font-display text-[26px] sm:text-[34px] text-cream mb-3.5 max-w-[600px] mx-auto">
              Ready to stop chasing your business?
            </h2>
            <p className="relative text-[14.5px] text-[#C9D1DA] max-w-[480px] mx-auto mb-[30px] leading-[1.75]">
              Book a strategy call and we&apos;ll show you exactly where your website, workflows, and operations are costing you time — and what it would take to fix it.
            </p>
            <div className="relative flex gap-3.5 justify-center flex-wrap">
              <button className="px-[26px] py-[13px] rounded-full text-sm font-semibold cursor-pointer bg-gold border border-gold text-navy-deep hover:bg-gold-light hover:border-gold-light transition-colors">
                Book a Strategy Call
              </button>
              <button className="px-[26px] py-[13px] rounded-full text-sm font-semibold cursor-pointer bg-transparent text-cream border border-[rgba(248,244,235,0.3)] hover:border-cream transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}