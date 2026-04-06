"use client";

export default function FindStore() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Large stacked outlined text — matches screenshot exactly */}
        <div
          className="reveal font-heading font-black uppercase leading-none mb-2"
          style={{
            fontSize: "clamp(40px, 8.5vw, 110px)",
            WebkitTextStroke: "2px #8dc63f",
            color: "transparent",
            lineHeight: 0.95,
          }}
        >
          <div>FIND YOUR</div>
          <div>NEAREST</div>
          <div>NANO GLASSES</div>
        </div>

        {/* "STORE" — solid green fill, not outlined */}
        <div
          className="reveal reveal-delay-1 font-heading font-black uppercase mb-10"
          style={{
            fontSize: "clamp(40px, 8.5vw, 110px)",
            color: "#8dc63f",
            lineHeight: 0.95,
          }}
        >
          STORE
        </div>

        {/* Pill CTA */}
        <div className="reveal reveal-delay-2">
          <a
            href="mailto:info@nanovista.africa"
            className="btn-pill inline-block"
          >
            Find a Stockist Near You
          </a>
        </div>

        {/* Contact row */}
        <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400 font-body">
          <a href="tel:+2348000626684" className="hover:text-[#8dc63f] transition-colors">
            +234 800 NANOVISTA
          </a>
          <span className="hidden sm:block">|</span>
          <a href="mailto:info@nanovista.africa" className="hover:text-[#8dc63f] transition-colors">
            info@nanovista.africa
          </a>
          <span className="hidden sm:block">|</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </section>
  );
}
