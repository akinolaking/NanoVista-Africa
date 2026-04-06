"use client";

const collections = [
  {
    id: "nano-baby",
    label: "NANO BABY",
    sub: "Ages 0–3",
    color: "#FF6B9D",
    bg: "#fff0f6",
    icon: "👶",
    desc: "Ultra-soft, flexible frames with adjustable headbands for the tiniest wearers.",
    href: "/collections/nano-baby",
  },
  {
    id: "nano-indestructible",
    label: "NANO INDESTRUCTIBLE",
    sub: "Ages 4–12",
    color: "#e30613",
    bg: "#fff5f5",
    icon: "💪",
    desc: "Our flagship line. Siliflex™ material — bend it, twist it, it always returns to shape.",
    href: "/collections/nano-indestructible",
    featured: true,
  },
  {
    id: "nano-glow",
    label: "NANO GLOW",
    sub: "Ages 4–12",
    color: "#9c27b0",
    bg: "#f9f0ff",
    icon: "✨",
    desc: "Glow-in-the-dark frames that kids absolutely love — functional and fun.",
    href: "/collections/nano-glow",
  },
  {
    id: "nano-sport",
    label: "NANO SPORT",
    sub: "Ages 4–16",
    color: "#2196F3",
    bg: "#f0f8ff",
    icon: "⚽",
    desc: "Sports protective eyewear. Prescription available. CE certified for impact protection.",
    href: "/collections/nano-sport",
  },
  {
    id: "nano-cool",
    label: "NANO COOL",
    sub: "Ages 4–12",
    color: "#f7941d",
    bg: "#fff8f0",
    icon: "😎",
    desc: "Acetate frames for kids ready for a more grown-up look. Trendy shapes, vibrant colours.",
    href: "/collections/nano-cool",
  },
  {
    id: "nano-metal",
    label: "NANO METAL",
    sub: "Ages 8–16",
    color: "#607D8B",
    bg: "#f5f7f8",
    icon: "🔩",
    desc: "Lightweight metal frames with full Nano flexibility. Sophisticated styles for older kids.",
    href: "/collections/nano-metal",
  },
  {
    id: "nano-custom-fit",
    label: "NANO CUSTOM FIT",
    sub: "Ages 0–14",
    color: "#4CAF50",
    bg: "#f0fff4",
    icon: "🎯",
    desc: "For challenging facial profiles. Expert-fitted for difficult bridge measurements.",
    href: "/collections/nano-custom-fit",
  },
  {
    id: "nano-sol",
    label: "NANO SOL",
    sub: "Ages 0+",
    color: "#FF9800",
    bg: "#fffaf0",
    icon: "🌞",
    desc: "UV-protective sunglasses for every age. Style meets protection under the African sun.",
    href: "/collections/nano-sol",
  },
];

export default function Collections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-3 border border-[#e30613] px-3 py-1">
            OUR COLLECTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1a1a1a] mb-4">
            GLASSES FOR EVERY CHILD
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            From newborn to teenage years — NanoVista covers every stage with
            indestructible, stylish, clinically endorsed eyewear.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collections.map((col) => (
            <a
              key={col.id}
              href={col.href}
              className={`card-lift group block rounded-xl p-5 relative overflow-hidden border transition-all ${
                col.featured ? "border-[#e30613] ring-2 ring-[#e30613]/20" : "border-gray-100"
              }`}
              style={{ background: col.bg }}
            >
              {col.featured && (
                <span className="absolute top-3 right-3 bg-[#e30613] text-white text-[10px] font-heading font-bold px-2 py-0.5 tracking-wider">
                  BESTSELLER
                </span>
              )}
              <div className="text-3xl mb-3">{col.icon}</div>
              <div
                className="text-xs font-heading font-bold tracking-wider mb-1"
                style={{ color: col.color }}
              >
                {col.sub}
              </div>
              <h3 className="font-heading font-black text-[#1a1a1a] text-sm mb-2 leading-tight">
                {col.label}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                {col.desc}
              </p>
              <div
                className="mt-4 text-xs font-heading font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: col.color }}
              >
                EXPLORE →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
