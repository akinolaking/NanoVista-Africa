function SjdLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 80 60" className="h-14" xmlns="http://www.w3.org/2000/svg">
        {/* SJD simplified logo */}
        <text x="4" y="36" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="28" fill="#c0392b">SJD</text>
      </svg>
      <p className="text-xs font-heading font-semibold text-gray-600 text-center leading-tight">
        Sant Joan de Déu<br />
        <span className="text-gray-400 font-normal">Barcelona · Hospital</span>
      </p>
    </div>
  );
}

function SfoLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 90 60" className="h-14" xmlns="http://www.w3.org/2000/svg">
        {/* SFO simplified arc logo */}
        <path d="M10,50 Q45,10 80,50" fill="none" stroke="#1a9fd4" strokeWidth="4" />
        <text x="28" y="48" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="20" fill="#1a9fd4">SFO</text>
      </svg>
      <p className="text-xs font-heading font-semibold text-gray-600 text-center leading-tight">
        Société Française<br />
        <span className="text-gray-400 font-normal">d&apos;Ophtalmologie</span>
      </p>
    </div>
  );
}

function AaoLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 60 60" className="h-14" xmlns="http://www.w3.org/2000/svg">
        {/* AAO starburst simplified */}
        <circle cx="30" cy="30" r="26" fill="none" stroke="#2c3e7a" strokeWidth="2" />
        <circle cx="30" cy="30" r="18" fill="none" stroke="#2c3e7a" strokeWidth="1" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={30 + 18 * Math.cos(rad)}
              y1={30 + 18 * Math.sin(rad)}
              x2={30 + 26 * Math.cos(rad)}
              y2={30 + 26 * Math.sin(rad)}
              stroke="#2c3e7a"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
      <p className="text-xs font-heading font-semibold text-gray-600 text-center leading-tight">
        American Academy<br />
        <span className="text-gray-400 font-normal">of Ophthalmology®</span>
      </p>
    </div>
  );
}

export default function EndorsementsSection() {
  return (
    <section className="bg-white">
      {/* Part A: Purple box + institution logos */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 items-stretch">
          {/* Purple box */}
          <div
            className="md:w-2/5 p-10 flex items-center"
            style={{ backgroundColor: "#8e44ad" }}
          >
            <p className="text-white font-heading font-bold text-lg md:text-xl leading-snug">
              That is why we are now the most recommended brand of children&apos;s glasses,
              by pediatricians and ophthalmologists worldwide.
            </p>
          </div>

          {/* Institution logos */}
          <div className="md:w-3/5 bg-gray-50 p-10 flex flex-wrap items-center justify-center gap-10">
            <SjdLogo />
            <SfoLogo />
            <AaoLogo />
          </div>
        </div>
      </div>

      {/* Part B: "YOU, fathers and mothers" */}
      <div className="py-12 px-4 text-center border-t border-gray-100">
        <p className="text-gray-500 text-base md:text-lg mb-4">
          But what really &ldquo;fills us with pride and satisfaction&rdquo;? is the recommendation of the true experts…
        </p>
        <h2 className="font-heading font-black leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          <span className="text-[#8dc63f]">YOU,</span>
        </h2>
        <p className="font-heading font-black text-[#8dc63f] text-2xl md:text-3xl mt-2">
          fathers and mothers of the world!
        </p>
      </div>
    </section>
  );
}
