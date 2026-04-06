const cities = [
  { name: "Lagos", country: "Nigeria", flag: "🇳🇬", stores: 12 },
  { name: "Abuja", country: "Nigeria", flag: "🇳🇬", stores: 7 },
  { name: "Port Harcourt", country: "Nigeria", flag: "🇳🇬", stores: 4 },
  { name: "Accra", country: "Ghana", flag: "🇬🇭", stores: 5 },
  { name: "Dakar", country: "Senegal", flag: "🇸🇳", stores: 3 },
  { name: "Nairobi", country: "Kenya", flag: "🇰🇪", stores: 2 },
];

export default function AfricaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Map/visual side */}
          <div className="relative">
            <div className="bg-[#f7f7f7] rounded-2xl p-8 relative overflow-hidden">
              {/* Africa outline SVG */}
              <svg
                viewBox="0 0 300 400"
                className="w-full max-w-xs mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified Africa continent */}
                <path
                  d="M130,20 C160,15 200,25 220,45 C240,65 245,90 248,115 C252,145 245,165 248,190 C252,215 268,230 268,255 C268,285 255,310 240,330 C220,355 195,370 170,375 C145,380 120,370 105,355 C85,335 75,310 65,285 C55,260 50,235 55,210 C60,185 75,170 72,145 C68,120 52,105 50,80 C48,55 65,30 85,22 C100,16 115,22 130,20Z"
                  fill="#f0f0f0"
                  stroke="#ddd"
                  strokeWidth="2"
                />
                {/* Pulse dots for cities */}
                {/* Lagos */}
                <circle cx="120" cy="230" r="8" fill="#e30613" opacity="0.2" />
                <circle cx="120" cy="230" r="5" fill="#e30613" opacity="0.5" />
                <circle cx="120" cy="230" r="3" fill="#e30613" />
                {/* Abuja */}
                <circle cx="135" cy="210" r="6" fill="#e30613" opacity="0.2" />
                <circle cx="135" cy="210" r="4" fill="#e30613" opacity="0.5" />
                <circle cx="135" cy="210" r="2.5" fill="#e30613" />
                {/* Accra */}
                <circle cx="105" cy="225" r="6" fill="#e30613" opacity="0.2" />
                <circle cx="105" cy="225" r="4" fill="#e30613" opacity="0.5" />
                <circle cx="105" cy="225" r="2.5" fill="#e30613" />
                {/* Dakar */}
                <circle cx="68" cy="175" r="5" fill="#f7941d" opacity="0.5" />
                <circle cx="68" cy="175" r="2.5" fill="#f7941d" />
                {/* Port Harcourt */}
                <circle cx="130" cy="242" r="5" fill="#e30613" opacity="0.5" />
                <circle cx="130" cy="242" r="2.5" fill="#e30613" />
                {/* Legend labels */}
                <text x="126" y="226" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">Lagos</text>
                <text x="141" y="208" fontSize="6" fill="#1a1a1a" fontFamily="sans-serif">Abuja</text>
                <text x="75" y="222" fontSize="6" fill="#1a1a1a" fontFamily="sans-serif">Accra</text>
                <text x="40" y="172" fontSize="6" fill="#1a1a1a" fontFamily="sans-serif">Dakar</text>
                <text x="133" y="254" fontSize="6" fill="#1a1a1a" fontFamily="sans-serif">PH</text>
              </svg>

              {/* Expanding badge */}
              <div className="absolute top-4 right-4 bg-[#e30613] text-white text-xs font-heading font-bold px-3 py-2 rounded">
                EXPANDING NETWORK
              </div>
            </div>

            {/* City chips below map */}
            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs font-heading font-semibold text-gray-700"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                  <span className="text-[#e30613] font-bold">{c.stores} stores</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">
              NANOVISTA AFRICA
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1a1a1a] leading-none mb-6">
              BRINGING WORLD-CLASS
              <br />
              <span className="text-[#e30613]">EYEWEAR TO AFRICA.</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              NanoVista Africa is the official franchise of NanoVista for
              Nigeria and West Africa. We work exclusively with authorised
              optical professionals — ensuring every child gets properly fitted,
              clinically appropriate eyewear.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our network of partner optical stores spans Lagos, Abuja, Port
              Harcourt, Accra and beyond — and is growing rapidly. Look for the
              official NanoVista Africa badge in your nearest optical store.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Official franchise — genuine NanoVista products",
                "Authorised optical professionals only",
                "Full range of prescription & non-prescription frames",
                "Dedicated after-sales support in Nigeria",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#e30613] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/find-a-store"
                className="inline-flex items-center gap-2 bg-[#e30613] text-white text-sm font-heading font-bold px-6 py-3 hover:bg-red-700 transition-colors tracking-wider"
              >
                FIND A STORE →
              </a>
              <a
                href="/become-a-stockist"
                className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-heading font-bold px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors tracking-wider"
              >
                BECOME A STOCKIST
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
