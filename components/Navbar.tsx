"use client";
import { useState } from "react";
import { Search, Menu, X, ChevronDown, MapPin } from "lucide-react";

const collections = [
  { label: "Nano Baby (0–3)", href: "/collections/nano-baby" },
  { label: "Nano Indestructible", href: "/collections/nano-indestructible" },
  { label: "Nano Glow", href: "/collections/nano-glow" },
  { label: "Nano Cool", href: "/collections/nano-cool" },
  { label: "Nano Custom Fit", href: "/collections/nano-custom-fit" },
  { label: "Nano Metal", href: "/collections/nano-metal" },
  { label: "Nano Sport", href: "/collections/nano-sport" },
  { label: "Nano Sol (Sunglasses)", href: "/collections/nano-sol" },
];

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
  {
    label: "SUNGLASSES",
    href: "/sunglasses",
    children: [
      { label: "Sunglasses for Babies", href: "/sunglasses/babies" },
      { label: "Prescription Sunglasses", href: "/sunglasses/prescription" },
      { label: "Non-Prescription Sunglasses", href: "/sunglasses/non-prescription" },
    ],
  },
  {
    label: "COLLECTIONS",
    href: "/collections",
    children: collections,
  },
  { label: "FIND A STORE", href: "/find-a-store" },
  { label: "LEARN WITH NANO", href: "/learn" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#e30613] text-white text-xs py-2 px-4 text-center font-heading font-semibold tracking-wider">
        🇳🇬 OFFICIAL NANOVISTA FRANCHISE FOR NIGERIA &amp; WEST AFRICA — FREE SHIPPING ON ORDERS OVER ₦50,000
      </div>

      {/* Main Nav */}
      <header className="bg-[#1a1a1a] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <NanoLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="dropdown">
                <a
                  href={item.href}
                  className="nav-link flex items-center gap-1 text-white text-xs font-heading font-bold tracking-wider hover:text-[#e30613] transition-colors py-5"
                >
                  {item.label}
                  {item.children && <ChevronDown size={12} />}
                </a>
                {item.children && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm font-heading font-medium text-[#1a1a1a] hover:bg-[#f7f7f7] hover:text-[#e30613] border-b border-gray-100 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-[#e30613] transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a
              href="/find-a-store"
              className="hidden md:flex items-center gap-1 bg-[#e30613] text-white text-xs font-heading font-bold px-4 py-2 hover:bg-red-700 transition-colors"
            >
              <MapPin size={14} />
              FIND STORE
            </a>
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="bg-white border-t border-gray-200 px-4 py-3">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <Search size={18} className="text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search collections, styles, age groups..."
                className="flex-1 text-sm outline-none text-gray-700 font-heading"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#222] border-t border-gray-700 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setExpandedMobile(
                      expandedMobile === item.label ? null : item.label
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-4 text-white text-xs font-heading font-bold tracking-wider border-b border-gray-700"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        expandedMobile === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.children && expandedMobile === item.label && (
                  <div className="bg-[#111]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-8 py-3 text-gray-300 text-sm font-heading hover:text-[#e30613] border-b border-gray-800 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/find-a-store"
              className="flex items-center justify-center gap-2 m-4 bg-[#e30613] text-white text-sm font-heading font-bold py-3 px-6"
            >
              <MapPin size={16} />
              FIND A STORE NEAR YOU
            </a>
          </div>
        )}
      </header>
    </>
  );
}

function NanoLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* NANO word mark */}
        <text
          x="0"
          y="28"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="26"
          fill="white"
          letterSpacing="1"
        >
          NANO
        </text>
        <text
          x="72"
          y="28"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="26"
          fill="#e30613"
          letterSpacing="1"
        >
          VISTA
        </text>
        {/* Africa sub-label */}
        <text
          x="1"
          y="36"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
          fontSize="9"
          fill="#e30613"
          letterSpacing="3"
        >
          AFRICA
        </text>
      </svg>
    </div>
  );
}
