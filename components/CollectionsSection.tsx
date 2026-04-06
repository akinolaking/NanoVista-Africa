import Image from 'next/image'

const STORE_URL = 'https://optixwarehouse.com.ng/store/nanoafrica/'

const COLLECTIONS = [
  { image: '/images/col-baby.jpg',          name: 'Nano Baby',          age: 'Ages 0\u20133',  delay: 'd1' },
  { image: '/images/col-indestructible.jpg', name: 'Nano Indestructible', age: 'Ages 4\u201312', delay: 'd2' },
  { image: '/images/col-sport.jpg',          name: 'Nano Sport',          age: 'Ages 4\u201316', delay: 'd3' },
  { image: '/images/col-cool.jpg',           name: 'Nano Cool',           age: 'Ages 4\u201312', delay: 'd1' },
  { image: '/images/col-glow.jpg',           name: 'Nano Glow',           age: 'Ages 4\u201312', delay: 'd2' },
  { image: '/images/col-metal.jpg',          name: 'Nano Metal',          age: 'Ages 8\u201316', delay: 'd3' },
] as const

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-white py-[100px] px-6">
      <div className="max-w-page mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="kicker sr">Browse by Collection</span>
          <h2
            className="sr d1 font-heading font-bold uppercase text-body mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 54px)', lineHeight: 1 }}
          >
            True Experts in Children&rsquo;s Glasses
          </h2>
          <p className="sr d2 font-body text-[#555] text-[clamp(15px,1.4vw,17px)] leading-[1.85] max-w-[560px]">
            Every collection is designed for a specific age, need and lifestyle.
            Browse all frames at our authorised West Africa partner store.
          </p>
        </div>

        {/* 3-column grid — 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS.map((col) => (
            <a
              key={col.name}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`col-card sr ${col.delay} group`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={col.image}
                  alt={`${col.name} — ${col.age}`}
                  width={600}
                  height={220}
                  className="w-full h-[220px] object-cover object-center transition-transform duration-450 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Label bar */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ background: '#8dc63f' }}
              >
                <div>
                  <div className="font-heading font-extrabold text-[12px] tracking-[0.12em] uppercase text-white">
                    {col.name}
                  </div>
                  <div className="font-body text-[11px] font-bold text-white/75 mt-0.5">
                    {col.age}
                  </div>
                </div>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-1"
                  style={{ background: 'rgba(255,255,255,0.22)' }}
                >
                  <ArrowIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
