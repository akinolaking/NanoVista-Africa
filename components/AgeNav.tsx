const ageGroups = [
  { label: "NANO BABY", sub: "0–3 yrs", icon: "👶", href: "/collections/nano-baby", color: "#FF6B9D" },
  { label: "NANO TODDLER", sub: "2–4 yrs", icon: "🧒", href: "/collections/nano-indestructible", color: "#f7941d" },
  { label: "KIDS", sub: "4–9 yrs", icon: "🧑", href: "/collections/nano-indestructible", color: "#e30613" },
  { label: "PRE-TEEN", sub: "9–12 yrs", icon: "👦", href: "/collections/nano-cool", color: "#9c27b0" },
  { label: "TEEN", sub: "12–16 yrs", icon: "🧑‍🦱", href: "/collections/nano-metal", color: "#1a1a1a" },
  { label: "SPORT", sub: "All ages", icon: "⚽", href: "/collections/nano-sport", color: "#2196F3" },
];

export default function AgeNav() {
  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-heading font-bold text-gray-400 tracking-[0.25em] mb-6">
          SHOP BY AGE GROUP
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {ageGroups.map((ag) => (
            <a
              key={ag.label}
              href={ag.href}
              className="card-lift flex flex-col items-center gap-2 p-4 border border-gray-100 rounded-xl hover:border-[#e30613] group transition-all text-center"
            >
              <span className="text-3xl">{ag.icon}</span>
              <span
                className="text-xs font-heading font-black tracking-wider group-hover:text-[#e30613] transition-colors"
                style={{ color: ag.color }}
              >
                {ag.label}
              </span>
              <span className="text-[10px] text-gray-400 font-heading">{ag.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
