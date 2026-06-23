export default function Footer() {
  return (
    <footer className="max-w-[1180px] mx-auto px-8 pt-[60px]">
      <div className="flex items-center justify-between gap-6 pb-[46px] border-b border-line">
        <div>
          <div className="font-display text-[18px] font-medium mb-1">
            <span className="text-navy">WOLF</span>
            <span className="text-gold">STACK</span>
          </div>
          <span className="block font-sans text-[11px] font-semibold tracking-[1px] text-faint">AUTOMATION</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://facebook.com/wolfstack._automation" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-muted hover:text-gold transition-colors">Facebook</a>
          <a href="https://instagram.com/wolfstack_.automation" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-muted hover:text-gold transition-colors">Instagram</a>
          <a href="https://x.com/company" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-muted hover:text-gold transition-colors">X</a>
          <a href="mailto:wolfstackautomation@gmail.com" className="text-[13.5px] text-muted hover:text-gold transition-colors">wolfstackautomation@gmail.com</a>
          <a href="tel:+918446608156" className="text-[13.5px] text-muted hover:text-gold transition-colors">+91 84466 08156</a>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2.5 py-6 pb-10 text-[12.5px] text-faint">
        <span>© 2026 Wolf Stack Automation. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  )
}
