import Image from 'next/image'

const STATS = [
  { num: '#1',   label: "Children's brand\nin Spain" },
  { num: '300+', label: 'Frame styles\navailable' },
  { num: '0–16', label: 'Years — full\nage range' },
  { num: '100%', label: 'Clinically\nendorsed' },
] as const

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-[100px] px-6">
      <div className="max-w-md mx-auto text-center">

        <span className="kicker sr">Indestructible &amp; Flexible Children&rsquo;s Glasses</span>

        {/* Outlined heading — NanoVista brand signature */}
        <h2
          className="sr d1 font-heading font-black uppercase leading-none tracking-tight mb-7"
          style={{
            fontSize: 'clamp(40px, 8vw, 104px)',
            WebkitTextStroke: '3px #8dc63f',
            color: 'transparent',
            lineHeight: 0.96,
          }}
        >
          Experts in Children<br />Visual Health
        </h2>

        <p className="sr d2 font-body text-[#555] leading-[1.85] text-[clamp(15px,1.4vw,17px)] max-w-[680px] mx-auto mb-12">
          Your child&rsquo;s glasses should survive them — not the other way around.
          NanoVista Africa brings the world&rsquo;s leading children&rsquo;s eyewear brand
          to Nigeria and West Africa. Clinically endorsed, paediatrician-recommended,
          and built from Siliflex&trade; — the only material that bends, stretches and
          always comes back.
        </p>

        {/* Seals — Siliflex / Warranty / Eco / BPA Free */}
        <div className="sr d3 flex justify-center mb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://nano-vista.com/wp-content/uploads/2021/09/Info-Sellos-ING-v5.jpg"
            alt="Siliflex Patented — 3 Year Warranty — Eco Friendly — BPA Free"
            loading="lazy"
            width={460}
            height={140}
            className="max-w-[460px] w-full rounded-lg"
          />
        </div>

        {/* Stats bar — Paper data display component */}
        <div
          className="sr d4 grid grid-cols-2 md:grid-cols-4 border border-[#e8e8e8] rounded-card overflow-hidden"
          style={{ background: '#e8e8e8', gap: '1px' }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.num}
              className="stat-cell"
            >
              <div
                className="font-heading font-black text-primary leading-none mb-1.5"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {stat.num}
              </div>
              <div className="font-body text-[12px] font-semibold text-[#999] uppercase tracking-[0.06em] leading-snug whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
