"use client";
import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "PRESCRIPTION GLASSES",
    href: "/prescription-glasses",
    children: [
      { label: "Glasses for Babies (0–3)", href: "/prescription-glasses/babies" },
      { label: "Children's Glasses (4–9)", href: "/prescription-glasses/children" },
      { label: "Pre-teens & Teens (10–16)", href: "/prescription-glasses/teens" },
    ],
  },
  { label: "SPORTS PROTECTIVE EYEWEAR", href: "/sports-eyewear" },
  { label: "MYOPIA LENSES", href: "/myopia-lenses" },
  { label: "SUNGLASSES", href: "/sunglasses" },
  { label: "FIND YOUR STORE", href: "/find-a-store" },
  { label: "LEARN WITH NANO", href: "/learn" },
];

function NanoLogo() {
  return (
    <svg width="148" height="48" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="30" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="28" fill="white">nano</text>
      <text x="2" y="44" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="13" fill="white" letterSpacing="1">VISTA</text>
      <text x="70" y="44" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill="rgba(255,255,255,0.85)" letterSpacing="2">AFRICA</text>
      <text x="108" y="32" fontFamily="sans-serif" fontSize="22" fill="white">🖐</text>
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#8dc63f] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <NanoLogo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="dropdown">
                <a
                  href={item.href}
                  className="nav-link flex items-center gap-1 text-white text-[10.5px] font-heading font-bold tracking-wider hover:text-white/80 transition-colors py-5 whitespace-nowrap"
                >
                  {item.label}
                  <ChevronDown size={11} />
                </a>
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-xs font-heading font-semibold text-gray-700 hover:bg-[#f0f9e0] hover:text-[#6ba82e] transition-colors tracking-wide"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-white text-[10.5px] font-heading font-bold tracking-wider hover:text-white/80 transition-colors py-5 whitespace-nowrap"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right: search + mobile toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-white/80 transition-colors p-1"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-[#6ba82e] px-4 py-3">
          <div className="max-w-xl mx-auto flex items-center gap-2 bg-white rounded-full px-4 py-2">
            <Search size={16} className="text-gray-400 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search glasses..."
              className="flex-1 text-sm outline-none text-gray-700 font-heading"
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#6ba82e] border-t border-white/20">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex items-center justify-between px-5 py-3 text-white text-xs font-heading font-bold tracking-wider text-left border-b border-white/10"
                onClick={() =>
                  setExpandedMobile(expandedMobile === item.label ? null : item.label)
                }
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${expandedMobile === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </button>
              {item.children && expandedMobile === item.label && (
                <div className="bg-[#5b8731]">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-8 py-2.5 text-xs font-heading font-semibold text-white/90 hover:text-white border-b border-white/10"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
