"use client";

export default function TrueExperts() {
  return (
    <>
      {/* Parallax green band — large outlined text — matches screenshot exactly */}
      <section
        className="parallax-bg w-full flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{
          background: "#8dc63f",
          minHeight: "clamp(280px, 40vw, 480px)",
        }}
      >
        {/* Outlined / hollow heading — exactly as seen in screenshot */}
        <div
          className="reveal font-heading font-black uppercase leading-none"
          style={{
            fontSize: "clamp(52px, 11vw, 140px)",
            WebkitTextStroke: "2px white",
            color: "transparent",
            lineHeight: 0.95,
          }}
        >
          <div>TRUE</div>
          <div>EXPERTS</div>
          <div style={{ fontSize: "clamp(30px, 6.5vw, 84px)" }}>IN CHILDREN'S</div>
          <div style={{ fontSize: "clamp(30px, 6.5vw, 84px)" }}>GLASSES</div>
        </div>

        {/* "REALLY!" — solid white, bold */}
        <p
          className="reveal reveal-delay-2 font-heading font-black text-white uppercase mt-6"
          style={{ fontSize: "clamp(22px, 4vw, 48px)", letterSpacing: "0.05em" }}
        >
          REALLY!
        </p>
      </section>

      {/* White section below — body text intro to Browse CTA */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="reveal font-body text-gray-500 text-base leading-relaxed mb-3">
            We cover all needs in glasses for children and young people across Nigeria and West Africa.
          </p>
          <p className="reveal reveal-delay-1 font-body text-gray-500 text-base leading-relaxed mb-3">
            Frames for prescription glasses, sunglasses and blue light blocking glasses.
          </p>
          <p className="reveal reveal-delay-2 font-body text-gray-500 text-base leading-relaxed">
            From 0 to 16 years of age.
          </p>
        </div>
      </section>
    </>
  );
}
