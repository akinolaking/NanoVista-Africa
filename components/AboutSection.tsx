import Image from 'next/image'

const STATS = [
  { num: '#1',   label: "Children's brand\nin Spain" },
  { num: '300+', label: 'Frame styles\navailable' },
  { num: '0–16', label: 'Years — full\nage range' },
  { num: '100%', label: 'Clinically\nendorsed' },
] as const

const SEALS = [
  { icon: '🛡️', label: 'Siliflex™ Patented' },
  { icon: '✓',  label: '3 Year Warranty' },
  { icon: '🌿', label: 'Eco Friendly' },
  { icon: '○',  label: 'BPA Free' },
] as const

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-[100px] px-6">
      <div className="max-w-md mx-auto text-center">

        <span className="kicker sr">Indestructible &amp; Flexible Children&rsquo;s Glasses</span>

        {/* Outlined heading — NanoVista brand signature */}
        <h2
          className="sr d1 font-heading font-bold uppercase leading-none tracking-tight mb-7"
          style={{
            fontSize: 'clamp(40px, 8vw, 104px)',
            WebkitTextStroke: '3px #8dc63f',
            color: 'transparent',
            lineHeight: 0.96,
          }}
        >
          Experts in Children<br />Visual Health
        </h2>

        {/* 2-line max description */}
        <p className="sr d2 font-body text-[#555] leading-[1.75] text-[clamp(15px,1.4vw,17px)] mb-10">
          Stop replacing broken frames. Built from Siliflex&trade; &mdash; endorsed by
          paediatricians worldwide, now available across Nigeria &amp; West Africa.
        </p>

        {/* Seals — inline badges replacing hotlink-blocked CDN image */}
        <div className="sr d3 flex flex-wrap justify-center gap-3 mb-14">
          {SEALS.map((seal) => (
            <div
              key={seal.label}
              className="flex items-center gap-1.5 border border-[#8dc63f] rounded-pill px-4 py-2"
            >
              <span className="text-[13px]" aria-hidden="true">{seal.icon}</span>
              <span className="font-heading font-bold text-[10px] tracking-[0.08em] uppercase text-[#555]">
                {seal.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="sr d4 grid grid-cols-2 md:grid-cols-4 border border-[#e8e8e8] rounded-card overflow-hidden"
          style={{ background: '#e8e8e8', gap: '1px' }}
        >
          {STATS.map((stat) => (
            <div key={stat.num} className="stat-cell">
              <div
                className="font-heading font-bold text-primary leading-none mb-1.5"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
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
