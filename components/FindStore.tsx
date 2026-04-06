export default function FindStore() {
  return (
    <section className="py-20 bg-[#e30613] relative overflow-hidden">
      {/* Background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="fp" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fp)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-white/20 text-white text-xs font-heading font-bold tracking-[0.25em] px-3 py-1 mb-6">
          AUTHORISED STOCKISTS
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-none">
          FIND YOUR
          <br />
          NEAREST STORE.
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          NanoVista is only available through authorised optical professionals.
          Use our store locator to find a certified stockist near you in Nigeria
          and West Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/find-a-store"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#e30613] text-sm font-heading font-black px-8 py-4 hover:bg-gray-100 transition-colors tracking-wider"
          >
            🔍 FIND A STORE
          </a>
          <a
            href="/become-a-stockist"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white text-sm font-heading font-bold px-8 py-4 hover:bg-white/10 transition-colors tracking-wider"
          >
            BECOME A STOCKIST →
          </a>
        </div>

        {/* Quick city links */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Accra", "Dakar"].map(
            (city) => (
              <a
                key={city}
                href={`/find-a-store?city=${city.toLowerCase()}`}
                className="text-xs font-heading font-semibold text-white/70 hover:text-white border border-white/30 hover:border-white px-3 py-1.5 transition-colors"
              >
                {city}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
