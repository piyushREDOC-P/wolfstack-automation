import { useState } from "react";

export const c = {
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

// ─── QR SVG (shared, placeholder) ────────────────────────────────────────────
export const QrSvg = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#172537" style={{ width: "100%", height: "auto", display: "block", borderRadius: 6 }}>
    {[
      [0,0],[0,8],[0,16],[0,24],[0,32],[0,40],[0,48],[0,72],[0,88],[0,104],[0,112],[0,120],[0,144],[0,152],[0,160],[0,168],[0,176],[0,184],[0,192],
      [8,0],[8,48],[8,64],[8,72],[8,80],[8,128],[8,144],[8,192],
      [16,0],[16,16],[16,24],[16,32],[16,48],[16,72],[16,80],[16,88],[16,96],[16,128],[16,144],[16,160],[16,168],[16,176],[16,192],
      [24,0],[24,16],[24,24],[24,32],[24,48],[24,64],[24,88],[24,128],[24,144],[24,160],[24,168],[24,176],[24,192],
      [32,0],[32,16],[32,24],[32,32],[32,48],[32,64],[32,80],[32,88],[32,104],[32,128],[32,144],[32,160],[32,168],[32,176],[32,192],
      [40,0],[40,48],[40,72],[40,88],[40,144],[40,192],
      [48,0],[48,8],[48,16],[48,24],[48,32],[48,40],[48,48],[48,72],[48,112],[48,128],[48,144],[48,152],[48,160],[48,168],[48,176],[48,184],[48,192],
      [56,64],[56,88],[56,120],
      [64,0],[64,32],[64,56],[64,64],[64,72],[64,80],[64,112],[64,136],[64,144],[64,184],
      [72,0],[72,32],[72,56],[72,80],[72,88],[72,104],[72,112],[72,120],[72,152],[72,160],[72,176],[72,192],
      [80,0],[80,8],[80,16],[80,40],[80,48],[80,64],[80,72],[80,80],[80,96],[80,112],[80,120],[80,152],[80,160],[80,168],[80,184],
      [88,0],[88,8],[88,16],[88,56],[88,64],[88,72],[88,96],[88,112],[88,128],[88,144],[88,160],[88,176],
      [96,0],[96,8],[96,16],[96,24],[96,40],[96,56],[96,64],[96,96],[96,112],[96,120],[96,144],[96,168],[96,176],
      [104,32],[104,64],[104,72],[104,80],[104,88],[104,160],
      [112,0],[112,64],[112,80],[112,88],[112,104],[112,120],[112,136],[112,160],[112,184],
      [120,0],[120,16],[120,64],[120,80],[120,112],[120,120],[120,144],[120,160],[120,176],
      [128,16],[128,40],[128,64],[128,120],[128,128],[128,136],[128,176],
      [136,88],[136,120],[136,136],[136,152],[136,160],
      [144,0],[144,8],[144,16],[144,24],[144,32],[144,40],[144,48],[144,64],[144,88],[144,96],[144,144],[144,160],[144,176],[144,184],
      [152,0],[152,48],[152,64],[152,80],[152,88],[152,96],[152,160],[152,176],[152,184],
      [160,0],[160,16],[160,24],[160,32],[160,48],[160,80],[160,96],[160,136],[160,160],[160,192],
      [168,0],[168,16],[168,24],[168,32],[168,48],[168,96],[168,112],[168,136],[168,184],[168,192],
      [176,0],[176,16],[176,24],[176,32],[176,48],[176,72],[176,80],[176,88],[176,96],[176,104],[176,144],[176,152],
      [184,0],[184,48],[184,80],[184,104],[184,128],[184,144],[184,184],[184,192],
      [192,0],[192,8],[192,16],[192,24],[192,32],[192,40],[192,48],[192,96],[192,144],[192,152],[192,160],[192,168],[192,176],[192,184],[192,192],
    ].map(([x, y], i) => <rect key={i} x={x} y={y} width="8" height="8" />)}
  </svg>
);

// ─── Shared helpers ────────────────────────────────────────────────────────
export const Eyebrow = ({ children }) => (
  <p className="text-center text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: c.gold }}>
    {children}
  </p>
);

export const SectionTitle = ({ children }) => (
  <h2 className="text-center text-[28px] mb-3.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
    {children}
  </h2>
);

export const SectionSub = ({ children }) => (
  <p className="text-center text-sm max-w-xl mx-auto mb-10" style={{ color: c.muted, lineHeight: "1.7" }}>
    {children}
  </p>
);

export const ChevronIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200"
    style={{ color: c.gold, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── FAQ Item ──────────────────────────────────────────────────────────────
export function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border rounded-2xl overflow-hidden" style={{ borderColor: c.line }}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between px-6 py-4 text-sm font-semibold"
        style={{ color: c.navy, background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
        {q} <ChevronIcon open={open} />
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height .25s ease" }}>
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: c.muted, lineHeight: "1.75" }}>{a}</p>
      </div>
    </div>
  );
}

// ─── Process Steps ─────────────────────────────────────────────────────────
export function ProcessSection({ steps, title, sub }) {
  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="process">
      <Eyebrow>How It Works</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      <SectionSub>{sub}</SectionSub>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 relative">
        {steps.map((s, i) => (
          <div key={i} className="text-center px-3 relative">
            {/* connector line */}
            {i > 0 && (
              <div className="hidden sm:block absolute top-[22px] right-[50%] left-[-50%] h-px" style={{ background: c.line }} />
            )}
            <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3.5 relative z-10 text-sm"
              style={{ background: c.navy, color: c.cream, fontFamily: "'Fraunces', serif" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4 className="text-sm font-semibold mb-1.5" style={{ color: c.navy }}>{s.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color: c.muted, lineHeight: "1.6" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Payment Section ────────────────────────────────────────────────────────
export function PaymentSection({ startingPrice }) {
  const [copied, setCopied] = useState(false);
  const upiId = "wolfstackautomation@upi";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="payment">
      <div className="rounded-[26px] px-8 py-12" style={{ background: c.creamDeep }}>
        <Eyebrow>Get Started</Eyebrow>
        <SectionTitle>Reserve your spot with a UPI payment</SectionTitle>
        <SectionSub>
          Scan the QR code or use the UPI ID below. A 50% advance reserves your project slot and gets work started; the balance is due on completion.
        </SectionSub>

        <div className="bg-white border rounded-[22px] p-9 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 items-center max-w-3xl mx-auto"
          style={{ borderColor: c.line }}>
          {/* QR */}
          <div className="rounded-2xl p-3.5 text-center border" style={{ background: c.cream, borderColor: c.line }}>
            <QrSvg />
            <span className="inline-block mt-2.5 text-[9px] tracking-widest uppercase rounded-full px-2.5 py-0.5 border"
              style={{ color: c.gold, borderColor: c.goldLight }}>
              Sample QR
            </span>
            <p className="text-[10.5px] mt-1.5 leading-relaxed" style={{ color: c.faint }}>
              Replace with your real UPI QR before going live.
            </p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-[19px] mb-1.5" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>Pay via UPI</h3>
            <p className="text-xs mb-4 leading-relaxed" style={{ color: c.muted, lineHeight: "1.7" }}>
              Use any UPI app — Google Pay, PhonePe, Paytm, or your bank app — to scan the code or pay directly to the ID below.
            </p>

            {/* UPI ID row */}
            <div className="flex items-center gap-2.5 rounded-xl px-4 py-3 mb-3 border"
              style={{ background: c.cream, borderColor: c.line }}>
              <span className="flex-1 text-sm font-semibold" style={{ color: c.navy, fontFamily: "'Inter', sans-serif" }}>
                {upiId}
              </span>
              <button onClick={handleCopy}
                className="flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150"
                style={{ background: copied ? c.gold : c.navy, color: c.cream, border: "none", cursor: "pointer" }}>
                {copied ? "Copied!" : "Copy ID"}
              </button>
            </div>

            {/* Amount */}
            <div className="flex justify-between items-center rounded-xl px-4 py-3 mb-4 border text-sm font-semibold"
              style={{ background: c.cream, borderColor: c.line, color: c.navy }}>
              <span>Amount</span>
              <span style={{ color: c.gold, fontFamily: "'Fraunces', serif", fontSize: 15 }}>
                Starting from {startingPrice}
              </span>
            </div>

            <div className="text-xs leading-loose" style={{ color: c.muted, lineHeight: "1.9" }}>
              <span style={{ color: c.navy, fontWeight: 600 }}>1.</span> Scan the QR or pay to the UPI ID above.<br />
              <span style={{ color: c.navy, fontWeight: 600 }}>2.</span> Add your business name in the payment note.<br />
              <span style={{ color: c.navy, fontWeight: 600 }}>3.</span> Send the payment screenshot to us on WhatsApp or email.<br />
              <span style={{ color: c.navy, fontWeight: 600 }}>4.</span> We confirm and schedule your discovery call within one business day.
            </div>

            <p className="text-[10.5px] mt-3.5 leading-relaxed" style={{ color: c.faint }}>
              This is placeholder payment information. The UPI ID and QR shown here are not active — replace with real details before accepting live payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────
export function CtaBanner({ eyebrow, title, sub, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  const nav = (href) => window.location.href = href;
  return (
    <section className="max-w-5xl mx-auto px-8 py-14" id="contact">
      <div className="rounded-[28px] text-center px-8 py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${c.navy}, ${c.navyDeep})` }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(217,176,104,0.16), transparent 60%)" }} />
        <p className="relative text-xs font-semibold tracking-widest uppercase mb-3.5" style={{ color: c.goldLight }}>{eyebrow}</p>
        <h2 className="relative text-[30px] mb-3.5 max-w-lg mx-auto" style={{ fontFamily: "'Fraunces', serif", color: c.cream }}>{title}</h2>
        <p className="relative text-sm max-w-md mx-auto mb-7" style={{ color: "#C9D1DA", lineHeight: "1.75" }}>{sub}</p>
        <div className="relative flex gap-3.5 justify-center flex-wrap">
          <button onClick={() => nav(primaryHref)}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
            style={{ background: c.gold, color: c.navyDeep, border: `1px solid ${c.gold}`, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.background = c.goldLight}
            onMouseLeave={e => e.currentTarget.style.background = c.gold}>
            {primaryLabel}
          </button>
          <button onClick={() => nav(secondaryHref)}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-150"
            style={{ background: "transparent", color: c.cream, border: "1px solid rgba(248,244,235,0.3)", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.cream}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(248,244,235,0.3)"}>
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp Interest Card (modal-style toggle) ──────────────────────────
export function WhatsAppCard({ planName }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", business: "", note: "" });
  const [sent, setSent] = useState(false);

  const WA_NUMBER = "918446608156";

  const handleSend = () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    const msg = encodeURIComponent(
      `Hi, I'm interested in the *${planName}* plan.\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Business:* ${form.business || "—"}\n` +
      `*Note:* ${form.note || "—"}\n\n` +
      `Please get in touch with me.`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  const fieldStyle = {
    border: `1px solid ${c.line}`,
    borderRadius: 10,
    padding: "11px 13px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 13.5,
    color: c.ink,
    background: c.cream,
    outline: "none",
    width: "100%",
    transition: "border-color .15s",
  };

  return (
    <div className="max-w-5xl mx-auto px-8 pb-4">
      {/* Toggle button */}
      {!open && (
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 px-7 py-4 rounded-2xl text-sm font-semibold shadow-sm transition-all duration-150"
            style={{ background: "#25D366", color: "#fff", border: "none", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1ebe5d"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            I'm Interested — Let's Talk on WhatsApp
          </button>
        </div>
      )}

      {/* Card */}
      {open && (
        <div className="border rounded-[22px] mb-10 overflow-hidden" style={{ borderColor: c.line, background: "#fff" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-7 py-5 border-b" style={{ borderColor: c.line }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#25D366" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: c.navy }}>Tell us about your interest</p>
                <p className="text-xs" style={{ color: c.faint }}>We'll WhatsApp you within one business day</p>
              </div>
            </div>
            <button onClick={() => { setOpen(false); setSent(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: c.faint, fontSize: 20, lineHeight: 1 }}>
              ×
            </button>
          </div>

          {/* Body */}
          {sent ? (
            <div className="px-7 py-12 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                style={{ background: "rgba(37,211,102,0.12)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" className="w-7 h-7">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h4 className="text-base font-semibold" style={{ fontFamily: "'Fraunces', serif", color: c.navy }}>
                WhatsApp opened!
              </h4>
              <p className="text-sm" style={{ color: c.muted }}>
                Send the pre-filled message — we'll call you back shortly.
              </p>
              <button onClick={() => { setSent(false); setOpen(false); setForm({ name: "", phone: "", business: "", note: "" }); }}
                className="mt-2 text-xs font-medium"
                style={{ color: c.faint, background: "none", border: "none", cursor: "pointer" }}>
                Close
              </button>
            </div>
          ) : (
            <div className="px-7 py-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: c.navy }}>Your Name <span style={{ color: c.gold }}>*</span></label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={fieldStyle}
                    onFocus={e => e.target.style.borderColor = c.gold}
                    onBlur={e => e.target.style.borderColor = c.line}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: c.navy }}>Phone Number <span style={{ color: c.gold }}>*</span></label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={fieldStyle}
                    onFocus={e => e.target.style.borderColor = c.gold}
                    onBlur={e => e.target.style.borderColor = c.line}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: c.navy }}>Business Name</label>
                <input
                  type="text"
                  placeholder="Your business name"
                  value={form.business}
                  onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                  style={fieldStyle}
                  onFocus={e => e.target.style.borderColor = c.gold}
                  onBlur={e => e.target.style.borderColor = c.line}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: c.navy }}>Anything else you'd like us to know?</label>
                <textarea
                  rows={3}
                  placeholder="E.g. what kind of website, timeline, budget questions..."
                  value={form.note}
                  onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                  style={{ ...fieldStyle, resize: "vertical", minHeight: 80 }}
                  onFocus={e => e.target.style.borderColor = c.gold}
                  onBlur={e => e.target.style.borderColor = c.line}
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
                <p className="text-xs" style={{ color: c.faint }}>
                  This will open WhatsApp with a pre-filled message to us.
                </p>
                <button
                  onClick={handleSend}
                  disabled={!form.name.trim() || !form.phone.trim()}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-150"
                  style={{
                    background: (!form.name.trim() || !form.phone.trim()) ? "#ccc" : "#25D366",
                    color: "#fff",
                    border: "none",
                    cursor: (!form.name.trim() || !form.phone.trim()) ? "not-allowed" : "pointer",
                  }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send on WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}