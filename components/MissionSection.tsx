export default function MissionSection() {
  return (
    <section
      className="relative overflow-hidden py-[100px] px-6"
      style={{ background: '#8dc63f' }}
    >
      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-page mx-auto relative z-10">
        <span className="kicker-white sr">At NanoVista Africa We Have A</span>

        <h2
          className="sr d1 font-heading font-bold text-white uppercase leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(34px, 5.5vw, 68px)' }}
        >
          Super Mission:
        </h2>

        <p className="sr d2 font-body text-white/90 leading-[1.85] mb-4 max-w-[640px]"
          style={{ fontSize: 'clamp(15px, 1.6vw, 19px)' }}
        >
          Continuous innovation to always offer the best glasses for babies, children
          and teenagers across Nigeria and West Africa. Because your child&rsquo;s
          visual health is not &ldquo;child&rsquo;s play&rdquo;.
        </p>

        <p className="sr d3 font-body text-white/70 text-[15px] leading-[1.7]">
          Stop replacing broken frames every few months. Start with Nano.
        </p>
      </div>
    </section>
  )
}
