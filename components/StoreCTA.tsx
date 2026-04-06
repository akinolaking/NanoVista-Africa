const STORE_URL = 'https://optixwarehouse.com.ng/store/nanoafrica/'

const AGE_PILLS = [
  'Babies 0\u20133',
  'Children 4\u20139',
  'Teens 10\u201316',
  'Sunglasses',
  'Sport',
  'Blue Light',
] as const

export default function StoreCTA() {
  return (
    <section
      id="store"
      className="relative overflow-hidden py-[100px] px-6"
      style={{ background: '#8dc63f' }}
    >
      {/* Gradient + dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(106,170,30,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-page mx-auto relative z-10">

        <span className="kicker-white sr">Official West Africa Collection</span>

        <h2
          className="sr d1 font-heading font-bold text-white uppercase leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
        >
          Browse the Full NanoVista Africa Range
        </h2>

        <p
          className="sr d2 font-body text-white/90 leading-[1.8] max-w-[580px] mb-11"
          style={{ fontSize: 'clamp(15px, 1.6vw, 19px)' }}
        >
          All frames &mdash; prescription glasses, sunglasses, sports eyewear and
          blue light protection &mdash; available now through our authorised West Africa
          partner. Nigeria, Ghana, Senegal and beyond.
        </p>

        {/* CTA buttons */}
        <div className="sr d3 flex flex-wrap gap-4 mb-11">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '14px', padding: '17px 54px' }}
          >
            Shop Now at Optix Warehouse
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            Browse All Frames
          </a>
        </div>

        <p className="sr d4 font-body text-[13px] text-white/65 mb-10">
          Genuine NanoVista products. Official West Africa franchise.
        </p>

        {/* Age pills */}
        <div className="sr d5 flex flex-wrap gap-2.5">
          {AGE_PILLS.map((pill) => (
            <span
              key={pill}
              className="font-heading font-bold text-[10px] tracking-[0.1em] uppercase text-white border-[1.5px] border-white/50 rounded-pill px-[18px] py-[7px] transition-all duration-200 hover:bg-white hover:text-primary hover:border-white cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
