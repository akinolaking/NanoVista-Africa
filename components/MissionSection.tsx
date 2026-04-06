"use client";

const BASE = "https://nano-vista.com/wp-content/uploads";

export default function MissionSection() {
  return (
    <>
      {/* Green mission band */}
      <section
        className="w-full py-20 px-6 text-center"
        style={{ background: "#8dc63f" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="reveal font-heading font-semibold text-white/90 text-xs tracking-widest uppercase mb-4">
            At NanoVista Africa We Have A
          </p>
          <h2 className="reveal reveal-delay-1 font-heading font-black text-white uppercase leading-tight mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Super Mission:
          </h2>
          <p className="reveal reveal-delay-2 font-body font-medium text-white text-base md:text-lg leading-relaxed mb-4">
            Continuous innovation to always offer the best glasses for babies, children and teenagers.
          </p>
          <p className="reveal reveal-delay-3 font-body text-white/80 text-sm md:text-base leading-relaxed">
            Because for us, children's visual health is not "child's play".
          </p>
        </div>
      </section>

      {/* Split: purple left + endorsement logos right */}
      <section className="w-full" style={{ background: "#f4f4f4" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          {/* Purple panel */}
          <div
            className="reveal flex items-center px-10 py-14"
            style={{ background: "#9b59b6" }}
          >
            <p className="font-heading font-bold text-white text-lg md:text-xl leading-relaxed">
              That is why we are now the most recommended brand of children's glasses,
              by paediatricians and ophthalmologists worldwide.
            </p>
          </div>

          {/* Endorsement logos */}
          <div className="reveal reveal-delay-2 flex flex-col items-center justify-center gap-8 px-10 py-14 bg-white">
            <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-400 text-center mb-2">
              Endorsed by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <img
                src={`${BASE}/2021/06/SJD-Nano-logo.png`}
                alt="Sant Joan de Déu Barcelona Hospital"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={`${BASE}/2021/06/logo-sfo-1.png`}
                alt="Société Française d'Ophtalmologie"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={`${BASE}/2021/06/aao_logo_2x-1.png`}
                alt="American Academy of Ophthalmology"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
