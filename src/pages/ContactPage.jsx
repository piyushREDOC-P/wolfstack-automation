import { useState } from "react";
import FadeIn from "../components/FadeIn";

// ─── Tailwind CSS custom values note ───────────────────────────────────────
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

const WHATSAPP_NUMBER = "918446608156"; // country code + number, no '+' or spaces

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" style={{ color: colors.gold }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.79.65 2.65a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.43-1.22a2 2 0 012.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0122 16.92z" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200" style={{ color: colors.gold }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── Page Header ────────────────────────────────────────────────────────────
function PageHeader() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-20 pb-5 text-center">
      <FadeIn>
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{ color: colors.gold, borderColor: colors.line }}
        >
          Contact Us
        </span>
        <h1
          className="font-serif text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          Let's talk about{" "}
          <span style={{ color: colors.gold }}>what's slowing you down</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: colors.muted, lineHeight: "1.85" }}>
          Tell us a little about your business and what you're hoping to fix or build. We reply within one business day
          with next steps — no automated runaround.
        </p>
      </FadeIn>
    </div>
  );
}

// ─── Info Card ──────────────────────────────────────────────────────────────
function InfoCard({ icon, title, children }) {
  return (
    <div
      className="bg-white rounded-[18px] border p-6 flex gap-4 items-start"
      style={{ borderColor: colors.line }}
    >
      <div
        className="w-[42px] h-[42px] rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(184,134,46,0.10)" }}
      >
        {icon}
      </div>
      <div>
        <h4
          className="text-base mb-1"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          {title}
        </h4>
        <div className="text-sm leading-relaxed" style={{ color: colors.muted }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Hours Card ─────────────────────────────────────────────────────────────
function HoursCard() {
  const rows = [
    { label: "Monday – Friday", value: "9:00 AM – 7:00 PM" },
    { label: "Saturday", value: "10:00 AM – 2:00 PM" },
    { label: "Sunday", value: "Closed" },
    { label: "Average Reply Time", value: "Under 24 hours" },
  ];
  return (
    <div className="rounded-[18px] p-6" style={{ background: colors.navy }}>
      <h4
        className="text-base mb-4"
        style={{ fontFamily: "'Fraunces', serif", color: colors.goldLight }}
      >
        Response Times
      </h4>
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex justify-between text-xs py-2"
          style={{
            borderBottom: i < rows.length - 1 ? "1px solid rgba(248,244,235,0.1)" : "none",
            color: "#C9D1DA",
          }}
        >
          <span>{row.label}</span>
          <span style={{ color: colors.cream, fontWeight: 500 }}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Contact Form ───────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const fieldStyle = (name) => ({
    border: `1px solid ${focused === name ? colors.gold : colors.line}`,
    borderRadius: 10,
    padding: "12px 14px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 13.5,
    color: colors.ink,
    background: focused === name ? "#fff" : colors.cream,
    outline: "none",
    transition: "border-color .15s, background .15s",
    width: "100%",
  });

  const Label = ({ children }) => (
    <label className="text-xs font-semibold" style={{ color: colors.navy }}>
      {children}
    </label>
  );

  const handleSubmit = () => {
    const text = [
      "*New Enquiry — Wolf Stack Automation*",
      "",
      `*Name:* ${form.name || "-"}`,
      `*Email:* ${form.email || "-"}`,
      `*Phone:* ${form.phone || "-"}`,
      `*Interested In:* ${form.service}`,
      `*Message:* ${form.message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="bg-white rounded-[22px] border p-10 flex flex-col items-center justify-center text-center gap-4"
        style={{ borderColor: colors.line, minHeight: 340 }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
          style={{ background: "rgba(184,134,46,0.12)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="2" className="w-7 h-7">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
          Opening WhatsApp...
        </h3>
        <p className="text-sm" style={{ color: colors.muted }}>
          We've prepared your message — just hit send on WhatsApp and we'll reply within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold mt-2"
          style={{ color: colors.gold, background: "none", border: "none", cursor: "pointer" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[22px] border px-9 py-10" style={{ borderColor: colors.line }}>
      <h3 className="text-xl mb-1.5" style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}>
        Send us a message
      </h3>
      <p className="text-sm mb-7" style={{ color: colors.muted }}>
        Fill this out and we'll get back to you with the right next step — whether that's a quick answer or a strategy call.
      </p>

      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Full Name</Label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={update("name")}
              style={fieldStyle("fname")}
              onFocus={() => setFocused("fname")}
              onBlur={() => setFocused("")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Email Address</Label>
            <input
              type="email"
              placeholder="you@business.com"
              value={form.email}
              onChange={update("email")}
              style={fieldStyle("femail")}
              onFocus={() => setFocused("femail")}
              onBlur={() => setFocused("")}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Phone Number</Label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              value={form.phone}
              onChange={update("phone")}
              style={fieldStyle("fphone")}
              onFocus={() => setFocused("fphone")}
              onBlur={() => setFocused("")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>What are you interested in?</Label>
            <select
              value={form.service}
              onChange={update("service")}
              style={fieldStyle("fservice")}
              onFocus={() => setFocused("fservice")}
              onBlur={() => setFocused("")}
            >
              {[
                "Web Development",
                "Business Automation",
                "Website Management",
                "Website Maintenance",
                "Lead Capture Systems",
                "Process Optimization",
                "Not sure yet",
              ].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-1.5">
          <Label>Tell us about your business</Label>
          <textarea
            rows={5}
            placeholder="What's slowing you down right now? What are you hoping to fix or build?"
            value={form.message}
            onChange={update("message")}
            style={{ ...fieldStyle("fmessage"), resize: "vertical", minHeight: 110 }}
            onFocus={() => setFocused("fmessage")}
            onBlur={() => setFocused("")}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-1.5 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
          style={{
            background: colors.navy,
            color: colors.cream,
            border: `1px solid ${colors.navy}`,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.gold;
            e.currentTarget.style.borderColor = colors.gold;
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(184,134,46,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = colors.navy;
            e.currentTarget.style.borderColor = colors.navy;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Send via WhatsApp
        </button>
        <p className="text-center text-xs" style={{ color: colors.faint }}>
          We typically reply within one business day.
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
        {/* Left: info stack */}
        <div className="flex flex-col gap-4">
          <FadeIn>
            <InfoCard icon={<MailIcon />} title="Email">
              <a
                href="mailto:wolfstackautomation@gmail.com"
                className="font-medium transition-colors duration-150"
                style={{ color: colors.navy }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.navy)}
              >
                wolfstackautomation@gmail.com
              </a>
            </InfoCard>
          </FadeIn>

          <FadeIn delay={60}>
            <InfoCard icon={<PhoneIcon />} title="Phone">
              <a
                href="tel:+918446608156"
                className="font-medium transition-colors duration-150"
                style={{ color: colors.navy }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.navy)}
              >
                +91 84466 08156
              </a>
            </InfoCard>
          </FadeIn>

          <FadeIn delay={120}>
            <HoursCard />
          </FadeIn>
        </div>

        {/* Right: form */}
        <FadeIn delay={80}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Next Steps ──────────────────────────────────────────────────────────────
function NextSteps() {
  const steps = [
    {
      num: "01",
      title: "We Review Your Message",
      desc: "We read what you've shared and look at your current website or workflows before we respond.",
    },
    {
      num: "02",
      title: "We Schedule a Call",
      desc: "A short call to understand your business, your goals, and where time is currently being lost.",
    },
    {
      num: "03",
      title: "You Get a Clear Plan",
      desc: "We follow up with a straightforward proposal — what we'd build, what it costs, and how long it takes.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5"
          style={{ color: colors.gold }}
        >
          What Happens Next
        </p>
        <h2
          className="text-center text-3xl mb-12"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          From message to a clear plan
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 70}>
            <div className="text-center px-4 py-2">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 text-sm"
                style={{
                  background: colors.navy,
                  color: colors.cream,
                  fontFamily: "'Fraunces', serif",
                }}
              >
                {s.num}
              </div>
              <h4 className="text-sm font-semibold mb-2" style={{ color: colors.navy }}>
                {s.title}
              </h4>
              <p className="text-xs leading-relaxed max-w-[260px] mx-auto" style={{ color: colors.muted, lineHeight: "1.7" }}>
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How soon will I hear back?",
    a: "Within one business day, usually sooner. If your message comes in outside working hours, we'll respond the next business morning.",
  },
  {
    q: "Is the first call free?",
    a: "Yes. The first call is a no-cost conversation to understand your business and see if we're the right fit — there's no obligation attached.",
  },
  {
    q: "Do I need to know exactly what I want before contacting you?",
    a: "No. Most clients start by describing a problem, not a solution. We'll help you figure out what to actually build.",
  },
  {
    q: "Can we talk on a call instead of filling out the form?",
    a: "Of course — you're welcome to call or email us directly using the details on this page.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white border rounded-2xl overflow-hidden"
      style={{ borderColor: colors.line }}
    >
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
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height .25s ease",
        }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: colors.muted, lineHeight: "1.75" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

function QuickFaq() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <FadeIn>
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5"
          style={{ color: colors.gold }}
        >
          Before You Reach Out
        </p>
        <h2
          className="text-center text-3xl mb-10"
          style={{ fontFamily: "'Fraunces', serif", color: colors.navy }}
        >
          A few quick answers
        </h2>
      </FadeIn>
      <div className="max-w-2xl mx-auto flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 50}>
            <FaqItem {...f} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div style={{ background: colors.cream, color: colors.ink, fontFamily: "'Inter', sans-serif" }}>
      {/* 
        NOTE: Navbar aur Footer yahan include nahi hain — 
        unhe apne existing components se wrap karo:
        <Navbar />
        <ContactPage />
        <Footer />
      */}
      <PageHeader />
      <ContactSection />
      <NextSteps />
      <QuickFaq />
    </div>
  );
}