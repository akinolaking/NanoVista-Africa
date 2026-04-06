"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search, Globe } from "lucide-react";

const NAV = [
  {
    label: "Prescription Glasses",
    children: ["Glasses for Babies 0-3", "Children's Glasses 4-9", "Pre-teens and Teens 10-16"],
  },
  {
    label: "Sports Protective Eyewear",
    children: ["Prescription Sports Glasses"],
  },
  {
    label: "Myopia Lenses",
    children: ["Glasses for Myopia Management", "Single Vision Lenses"],
  },
  {
    label: "Sunglasses",
    children: ["Sunglasses for Babies", "Prescription Sunglasses", "Non-Prescription Sunglasses"],
  },
  {
    label: "Collections",
    children: ["Nano Baby", "Nano Indestructible", "Nano Glow", "Nano Custom Fit", "Nano Metal", "Nano Cool", "Nano Sol", "Nano Sport"],
  },
  { label: "Find Your Store", children: [] },
  { label: "Learn with Nano", children: [] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: "#8dc63f" }}>
      {/* Top row: logo + utility */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 select-none">
          <img
            src="https://nano-vista.com/wp-content/uploads/2021/08/logotipo-Blanco-Nano.svg"
            alt="NanoVista Africa"
            className="h-9 w-auto"
            onError={(e) => {
              // Fallback text logo if CDN blocked
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).nextElementSibling!.classList.remove("hidden");
            }}
          />
          {/* Text fallback */}
          <span className="hidden font-heading font-black text-white text-2xl tracking-tight">
            nano<span className="text-white opacity-80">VISTA</span>
          </span>
          <span className="ml-2 text-[10px] font-heading font-bold text-white/80 tracking-widest hidden sm:block">
            AFRICA
          </span>
        </a>

        {/* Utility: language + search */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 text-white/90 text-xs font-heading font-semibold cursor-pointer hover:text-white transition-colors">
            <Globe size={14} />
            <span className="ml-1">English</span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-sm px-3 py-1.5">
            <Search size={13} className="text-white" />
            <input
              type="text"
              placeholder="Search glasses..."
              className="bg-transparent text-white text-xs placeholder-white/70 outline-none w-32 font-body"
            />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Nav row — desktop */}
      <div className="hidden md:block border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-center">
            {NAV.map((item, i) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center gap-1 px-4 py-3 text-white font-heading font-bold text-[11px] tracking-widest uppercase hover:text-white/70 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="mt-px opacity-70">
                      <path d="M1.5 3L4 5.5L6.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </a>
                {item.children.length > 0 && activeDropdown === i && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl border-t-2 z-50" style={{ borderColor: "#8dc63f" }}>
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-5 py-3 text-[11px] font-heading font-semibold uppercase tracking-wide text-gray-700 border-b border-gray-100 hover:text-[#8dc63f] hover:bg-gray-50 transition-colors last:border-0"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          {NAV.map((item, i) => (
            <div key={item.label} className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-bold text-sm uppercase tracking-wide text-gray-800"
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
              >
                {item.label}
                {item.children.length > 0 && (
                  <span className="text-lg leading-none">{mobileExpanded === i ? "−" : "+"}</span>
                )}
              </button>
              {item.children.length > 0 && mobileExpanded === i && (
                <div className="bg-gray-50 pb-2">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-8 py-2.5 text-xs font-heading font-semibold uppercase tracking-wide text-gray-500 hover:text-[#8dc63f]"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-6">
            <a
              href="https://optixwarehouse.com.ng/store/nanoafrica/"
              className="btn-pill w-full text-center block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse Collection
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
