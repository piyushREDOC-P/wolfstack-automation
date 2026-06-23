import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-gold flex-shrink-0">
    <path d="M5 13l4 4L19 7" />
  </svg>
)

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  const isActive = (to) => path === to
  const isAboutGroupActive = ['/services', '/about-us', '/m-s', '/review'].includes(path)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  // Reusable class builder for desktop nav links
  const linkClass = (active) =>
    `text-sm font-medium px-4 py-2.5 rounded-full transition-colors ${
      active ? 'text-gold bg-gold/[0.08]' : 'text-muted hover:text-gold hover:bg-gold/[0.08]'
    }`

  const dropdownLinkClass = (active) =>
    `flex w-full px-3.5 py-2.5 rounded-[10px] text-[13.5px] ${
      active ? 'text-gold bg-gold/[0.08] font-medium' : 'text-ink hover:bg-gold/[0.08] hover:text-gold'
    }`

  const mobileLinkClass = (active) =>
    `px-4 py-[13px] text-[14.5px] rounded-[10px] ${
      active ? 'text-gold bg-gold/[0.08] font-medium' : 'text-ink hover:bg-gold/[0.08] hover:text-gold'
    }`

  const navigate = useNavigate()

  return (
    <>
      <div
        className={`sticky z-[200] flex justify-center px-6 transition-[top,padding] duration-200 ${
          stuck ? 'top-0' : 'top-[18px]'
        }`}
      >
        <nav
          className={`w-full max-w-[1180px] bg-[rgba(255,253,248,0.82)] backdrop-blur-md border border-line rounded-full flex items-center justify-between py-[9px] pl-[18px] pr-3 transition-shadow duration-200 ${
            stuck ? 'shadow-[0_14px_34px_rgba(43,38,28,0.14)]' : 'shadow-[0_10px_30px_rgba(43,38,28,0.08)]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 whitespace-nowrap cursor-pointer">
            <div className="font-display text-[18px] font-medium leading-[1.05] tracking-[0.2px]">
              <span className="text-navy">WOLF</span>
              <span className="text-gold">STACK</span>
              <span className="block font-sans text-[8.5px] font-semibold tracking-[2.2px] text-faint mt-[1px]">
                AUTOMATION
              </span>
            </div>
          </Link>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            <div className="relative group">
              <Link to="/" className={linkClass(isActive('/'))}>
                Home
              </Link>
            </div>

            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-full bg-transparent border-none cursor-pointer transition-colors ${
                  isAboutGroupActive ? 'text-gold bg-gold/[0.08]' : 'text-muted hover:text-gold hover:bg-gold/[0.08]'
                }`}
              >
                About
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[11px] h-[11px] transition-transform group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Bridge + dropdown — no gap, hover stays continuous */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-white border border-line rounded-2xl shadow-[0_18px_40px_rgba(43,38,28,0.16)] p-2.5 min-w-[200px]">
                  <a href="/services" className={dropdownLinkClass(isActive('/services'))}>Services</a>
                  <a href="/about-us" className={dropdownLinkClass(isActive('/about-us'))}>About Us</a>
                  <a href="/m-s" className={dropdownLinkClass(isActive('/m-s'))}>Maintenance &amp; Support</a>
                  <a href="/review" className={dropdownLinkClass(isActive('/review'))}>Review</a>
                  <a href="/donate" className={dropdownLinkClass(isActive('/donate'))}>Donate</a>
                </div>
              </div>
            </div>

            <a href="/pricing" className={linkClass(isActive('/pricing'))}>Pricing</a>
            <a href="/contact-us" className={linkClass(isActive('/contact-us'))}>Contact Us</a>
          </div>

          {/* Right actions - desktop */}
          <div className="hidden md:flex items-center gap-1.5">
            <button onClick={() => {navigate('/comming-soon')}} className="text-[13.5px] font-medium text-muted bg-transparent border border-line rounded-full px-4 py-2.5 cursor-pointer transition-colors hover:text-navy hover:border-navy hover:bg-navy/[0.04]">
              Comming soon
            </button>
            <button onClick={() => {navigate('/contact-us')}} className="font-sans text-[13.5px] font-semibold text-cream bg-navy border border-navy rounded-full px-5 py-2.5 cursor-pointer transition-all hover:bg-gold hover:border-gold hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(184,134,46,0.35)]">
              Get in touch
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex w-[38px] h-[38px] rounded-full bg-transparent border border-line items-center justify-center flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span className="relative w-4 h-[1.4px] bg-navy block">
              <span className="absolute left-0 -top-[5px] w-4 h-[1.4px] bg-navy" />
              <span className="absolute left-0 top-[5px] w-4 h-[1.4px] bg-navy" />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-3 right-3 flex flex-col bg-[rgba(255,253,248,0.98)] backdrop-blur-md border border-line rounded-[20px] max-h-[calc(100vh-100px)] overflow-y-auto z-[9999] p-2 shadow-[0_14px_30px_rgba(43,38,28,0.15)]">
          <Link to="/" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/'))}>Home</Link>
          <button
            onClick={() => setMobileAboutOpen((v) => !v)}
            className={`flex items-center justify-between w-full bg-none border-none cursor-pointer font-sans px-4 py-[13px] text-[14.5px] rounded-[10px] ${
              isAboutGroupActive ? 'text-gold bg-gold/[0.08] font-medium' : 'text-ink hover:bg-gold/[0.08] hover:text-gold'
            }`}
          >
            About <span className="text-[11px]">▾</span>
          </button>
          {mobileAboutOpen && (
            <div className="flex flex-col pl-4">
              <Link to="/services" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/services'))}>Services</Link>
              <Link to="/about-us" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/about-us'))}>About Us</Link>
              <Link to="/m-s" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/m-s'))}>Maintenance &amp; Support</Link>
              <Link to="/review" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/review'))}>Review</Link>
            </div>
          )}
          <Link to="/pricing" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/pricing'))}>Pricing</Link>
          <Link to="/contact-us" onClick={() => setMobileOpen(false)} className={mobileLinkClass(isActive('/contact-us'))}>Contact Us</Link>
          <div className="flex flex-col gap-2 px-2.5 pt-3 pb-1.5 border-t border-line mt-1.5">
            <button onClick={() => { setMobileOpen(false); navigate('/comming-soon'); }}
              className="w-full border border-line rounded-full py-2.5 text-[13.5px] font-medium text-muted">
              Comming soon
            </button>
            <button onClick={() => { setMobileOpen(false); navigate('/contact-us'); }}
              className="w-full bg-navy text-cream rounded-full py-2.5 text-[13.5px] font-semibold">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </>
  )
}