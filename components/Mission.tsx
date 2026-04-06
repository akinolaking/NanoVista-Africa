const pillars = [
  {
    icon: "🛡️",
    title: "INDESTRUCTIBLE",
    desc: "Siliflex™ — NanoVista's proprietary material flexes under pressure and always returns to its original shape. School bags, sports fields, playground chaos: no problem.",
  },
  {
    icon: "🔬",
    title: "CLINICALLY ENDORSED",
    desc: "Recommended by paediatricians and ophthalmologists worldwide. Endorsed by independent studies including Hospital Sant Joan de Déu, Barcelona.",
  },
  {
    icon: "🎨",
    title: "300+ STYLES",
    desc: "Children have personalities. Our collections reflect that — from bold and bright to minimal and sleek, there is a NanoVista for every child.",
  },
  {
    icon: "👁️",
    title: "VISUAL HEALTH FIRST",
    desc: "We take children's visual health seriously. Every product is designed with comfort, safety, and optical precision as the non-negotiables.",
  },
];

export default function Mission() {
  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="mp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#mp)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text block */}
          <div>
            <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">
              OUR MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-none mb-6">
              WE HAVE A{" "}
              <span className="text-[#e30613]">SUPER MISSION.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Continuous innovation to always offer the best glasses for babies,
              children and teenagers. Because for us, children's visual health
              is not "child's play".
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              NanoVista Africa brings this mission to Nigeria and West Africa —
              partnering with optical professionals to ensure every child in the
              region has access to world-class eyewear.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/collections/nano-indestructible"
                className="inline-flex items-center gap-2 bg-[#e30613] text-white text-sm font-heading font-bold px-6 py-3 hover:bg-red-700 transition-colors tracking-wider"
              >
                EXPLORE COLLECTIONS →
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 text-sm font-heading font-bold px-6 py-3 hover:border-white hover:text-white transition-colors tracking-wider"
              >
                ABOUT US
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "#1", label: "Leading children's eyewear brand in Spain" },
              { num: "300+", label: "Frame styles across all collections" },
              { num: "0–16", label: "Years — full coverage from baby to teen" },
              { num: "100%", label: "Clinically endorsed by paediatric experts" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-gray-700 p-6 hover:border-[#e30613] transition-colors group"
              >
                <div className="text-4xl font-heading font-black text-[#e30613] mb-2 group-hover:scale-110 transition-transform inline-block">
                  {s.num}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="border border-gray-700 p-6 hover:border-[#e30613] transition-colors group"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-bold text-white text-sm tracking-wider mb-3 group-hover:text-[#e30613] transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
