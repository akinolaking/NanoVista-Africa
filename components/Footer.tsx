"use client";
const footerLinks = {
  collections: [
    { label: "Nano Baby (0–3)", href: "/collections/nano-baby" },
    { label: "Nano Indestructible", href: "/collections/nano-indestructible" },
    { label: "Nano Glow", href: "/collections/nano-glow" },
    { label: "Nano Sport", href: "/collections/nano-sport" },
    { label: "Nano Cool", href: "/collections/nano-cool" },
    { label: "Nano Metal", href: "/collections/nano-metal" },
    { label: "Nano Sol (Sunglasses)", href: "/collections/nano-sol" },
  ],
  company: [
    { label: "About NanoVista Africa", href: "/about" },
    { label: "Become a Stockist", href: "/become-a-stockist" },
    { label: "Find a Store", href: "/find-a-store" },
    { label: "Learn With Nano", href: "/learn" },
    { label: "Contact Us", href: "/contact" },
  ],
  eyeHealth: [
    { label: "Does My Child Need Glasses?", href: "/learn/signs-child-needs-glasses" },
    { label: "Myopia in Children", href: "/learn/myopia-west-africa" },
    { label: "How to Clean Glasses", href: "/learn/how-to-clean-glasses" },
    { label: "Choosing the Right Frame", href: "/learn/choosing-right-frame" },
    { label: "Visual Health Guide", href: "/learn/visual-health-guide" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      {/* Top newsletter strip */}
      <div className="bg-[#e30613] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-white text-xl mb-1">
              STAY INFORMED ON CHILDREN'S EYE HEALTH
            </h3>
            <p className="text-white/80 text-sm">
              Tips, product launches and stockist updates — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-0 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 text-sm font-heading text-gray-800 outline-none w-full md:w-72 bg-white"
            />
            <button
              type="submit"
              className="bg-[#1a1a1a] text-white text-xs font-heading font-bold px-5 py-3 tracking-wider hover:bg-black transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <svg width="160" height="44" viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
              <text x="0" y="32" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="30" fill="white" letterSpacing="1">NANO</text>
              <text x="82" y="32" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="30" fill="#e30613" letterSpacing="1">VISTA</text>
              <text x="1" y="43" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="9" fill="#e30613" letterSpacing="4">AFRICA</text>
            </svg>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Official NanoVista franchise for Nigeria and West Africa. The #1
              brand in indestructible children's eyewear — now serving families
              across the region.
            </p>
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "#", icon: "📸" },
                { label: "Facebook", href: "#", icon: "👥" },
                { label: "WhatsApp", href: "#", icon: "💬" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-gray-700 flex items-center justify-center text-sm hover:border-[#e30613] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] mb-5 pb-3 border-b border-gray-800">
              COLLECTIONS
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] mb-5 pb-3 border-b border-gray-800">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Eye Health */}
          <div>
            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] mb-5 pb-3 border-b border-gray-800">
              EYE HEALTH
            </h4>
            <ul className="space-y-3">
              {footerLinks.eyeHealth.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact block */}
            <div className="mt-8 space-y-2">
              <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] mb-3 pb-3 border-b border-gray-800">
                CONTACT
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                📧 info@nanovista.africa
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                📞 +234 800 NANOVISTA
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                💬 WhatsApp: +234 800 626 684 82
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-gray-800 py-4 overflow-hidden">
        <div className="ticker-inner text-xs font-heading font-bold text-gray-600 tracking-[0.2em]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8">
              INDESTRUCTIBLE &nbsp;·&nbsp; FLEXIBLE &nbsp;·&nbsp; CLINICALLY
              ENDORSED &nbsp;·&nbsp; NANO BABY &nbsp;·&nbsp; NANO INDESTRUCTIBLE
              &nbsp;·&nbsp; NANO SPORT &nbsp;·&nbsp; NANO GLOW &nbsp;·&nbsp;
              NANO COOL &nbsp;·&nbsp; FIND YOUR STORE &nbsp;·&nbsp; NIGERIA
              &nbsp;·&nbsp; WEST AFRICA
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs font-heading">
            © {new Date().getFullYear()} NanoVista Africa. All rights reserved.
            Official franchise of NanoVista Spain.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Cookie Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-600 text-xs font-heading hover:text-gray-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
