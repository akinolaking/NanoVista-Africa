const testimonials = [
  {
    quote:
      "My son is extremely active and breaks everything. He's had his NanoVista frames for over a year — still perfect. Worth every penny.",
    name: "Adaeze O.",
    location: "Lagos, Nigeria",
    flag: "🇳🇬",
    product: "Nano Indestructible",
    stars: 5,
  },
  {
    quote:
      "The optician recommended NanoVista for my daughter's prescription. The fitting was easy, she loves wearing them, and we haven't had a single break in 18 months.",
    name: "Kwame A.",
    location: "Accra, Ghana",
    flag: "🇬🇭",
    product: "Nano Custom Fit",
    stars: 5,
  },
  {
    quote:
      "I spent so much money replacing cheap frames every few months. Since switching to NanoVista, not one problem. The glow models are my son's favourite too.",
    name: "Blessing I.",
    location: "Abuja, Nigeria",
    flag: "🇳🇬",
    product: "Nano Glow",
    stars: 5,
  },
  {
    quote:
      "As an optometrist, I confidently recommend NanoVista to all my paediatric patients. The Siliflex material and the adjustable temple system are genuinely superior.",
    name: "Dr. Funmilayo A.",
    location: "Port Harcourt, Nigeria",
    flag: "🇳🇬",
    product: "Professional Endorsement",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#e30613">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-3 border border-[#e30613] px-3 py-1">
            PARENT STORIES
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1a1a1a] mb-4">
            THE TRUE EXPERTS SPEAK.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Parents across West Africa share their experience with NanoVista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-lift bg-white p-6 border border-gray-100 relative"
            >
              {/* Quote mark */}
              <div className="text-6xl font-heading font-black text-[#e30613] opacity-10 absolute top-2 left-4 leading-none select-none">
                "
              </div>

              <div className="relative z-10">
                <Stars count={t.stars} />
                <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                  "{t.quote}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-heading font-bold text-[#1a1a1a] text-sm">
                    {t.flag} {t.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.location}</div>
                  <div className="inline-block mt-2 bg-[#fff5f5] text-[#e30613] text-[10px] font-heading font-bold px-2 py-0.5 tracking-wider">
                    {t.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Endorsement logos */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <p className="text-center text-xs font-heading font-bold tracking-[0.2em] text-gray-400 mb-8">
            CLINICALLY ENDORSED BY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {[
              "Hospital Sant Joan de Déu",
              "World-Leading Ophthalmologists",
              "Paediatric Optometrists Network",
              "Independent Clinical Studies",
            ].map((org) => (
              <div
                key={org}
                className="text-xs font-heading font-bold text-gray-500 text-center"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
