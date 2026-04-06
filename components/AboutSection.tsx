const STATS = [
  { num: '#1',   label: "Children's brand\nin Spain" },
  { num: '300+', label: 'Frame styles\navailable' },
  { num: '0–16', label: 'Years — full\nage range' },
  { num: '100%', label: 'Clinically\nendorsed' },
] as const

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-[100px] px-6">
      <div className="max-w-page mx-auto">

        <span className="kicker sr">Indestructible &amp; Flexible Children&rsquo;s Glasses</span>

        {/* Outlined heading — wide container lets it sit on 2 lines naturally */}
        <h2
          className="sr d1 font-heading font-bold uppercase tracking-tight mb-7"
          style={{
            fontSize: 'clamp(36px, 5vw, 72px)',
            WebkitTextStroke: '3px #8dc63f',
            color: 'transparent',
            lineHeight: 0.96,
          }}
        >
          Experts in Children Visual Health
        </h2>

        {/* Description — max 2 lines, left-aligned */}
        <p className="sr d2 font-body text-[#555] leading-[1.75] text-[clamp(15px,1.4vw,17px)] max-w-[640px] mb-10">
          Stop replacing broken frames. Built from Siliflex&trade; &mdash; endorsed by
          paediatricians worldwide, now available across Nigeria &amp; West Africa.
        </p>

        {/* Seals — local image, left-aligned */}
        <div className="sr d3 flex mb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/seals.jpg"
            alt="Siliflex Patented — 3 Year Warranty — Eco Friendly — BPA Free"
            loading="lazy"
            width={460}
            height={140}
            className="max-w-[460px] w-full rounded-lg"
          />
        </div>

        {/* Stats bar — 3px gap gives visible cell separation */}
        <div
          className="sr d4 grid grid-cols-2 md:grid-cols-4 border border-[#e8e8e8] rounded-card overflow-hidden"
          style={{ background: '#e8e8e8', gap: '3px' }}
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
