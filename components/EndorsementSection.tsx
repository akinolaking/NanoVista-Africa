import Image from 'next/image'

const LOGOS = [
  { src: '/images/logo-sjd.png', alt: "Sant Joan de Déu Barcelona Hospital",    width: 120, height: 52 },
  { src: '/images/logo-sfo.png', alt: "Société Française d'Ophtalmologie",      width: 110, height: 52 },
  { src: '/images/logo-aao.png', alt: 'American Academy of Ophthalmology',      width: 120, height: 52 },
] as const

export default function EndorsementSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">

      {/* Purple left panel */}
      <div
        className="sr-left relative overflow-hidden flex items-center px-8 md:px-[60px] py-16 md:py-[80px]"
        style={{ background: '#9b59b6' }}
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
        <p
          className="relative z-10 font-heading font-bold text-white leading-[1.55]"
          style={{ fontSize: 'clamp(17px, 2.2vw, 26px)' }}
        >
          The most recommended brand of children&rsquo;s glasses by paediatricians
          and ophthalmologists worldwide &mdash; now serving Nigeria and West Africa.
        </p>
      </div>

      {/* Logos right panel */}
      <div className="sr-right bg-white flex flex-col items-center justify-center gap-10 px-8 md:px-[52px] py-14 md:py-[64px]">
        <span className="font-heading font-bold text-[9px] tracking-[0.3em] uppercase text-[#ccc]">
          Clinically Endorsed By
        </span>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-[52px] w-auto object-contain grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-200"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
