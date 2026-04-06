import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NanoVista Africa | Nigeria & West Africa Franchise",
  description: "NanoVista Africa is the official NanoVista franchise for Nigeria and West Africa, bringing the #1 children's eyewear brand to the region.",
};

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a1a1a] py-24 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="ag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#ag)"/>
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">
            OUR STORY
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-none">
            NANOVISTA<br/><span className="text-[#e30613]">AFRICA.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Bringing the world's leading children's eyewear brand to Nigeria and West Africa —
            one optician, one family, one child at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-heading font-black text-[#1a1a1a] mb-4">THE NANOVISTA STORY</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              NanoVista was founded in Spain with a single obsession: creating the best children's
              eyewear in the world. Through years of material research and collaboration with
              paediatric ophthalmologists, they developed Siliflex™ — a memory polymer that makes
              frames genuinely indestructible for daily child use.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Today, NanoVista is the #1 children's eyewear brand in Spain, endorsed by independent
              clinical studies and recommended by paediatricians and ophthalmologists worldwide.
              The range covers every age from newborn to 16 years, across prescription, sport, and
              sunglasses categories.
            </p>
          </div>

          <div className="border-l-4 border-[#e30613] pl-6">
            <h2 className="text-2xl font-heading font-black text-[#1a1a1a] mb-4">WHY AFRICA?</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Children's visual health in Nigeria and West Africa is underserved. Millions of children
              go without corrective eyewear — either because access is limited, or because the eyewear
              available isn't built to withstand the reality of active childhood in the region's climate.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              NanoVista Africa was established to change that. As the official franchise holder for
              Nigeria and West Africa, we work exclusively with authorised optical professionals to
              make genuine, clinically endorsed NanoVista eyewear available across the region.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-black text-[#1a1a1a] mb-4">OUR COMMITMENT</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Every NanoVista product sold through NanoVista Africa is a genuine, original product —
              not a copy or a grey-market import. We maintain the same standards of clinical endorsement,
              product integrity, and professional service that NanoVista is known for globally.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f7f7f7] border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "#1", label: "Children's eyewear brand in Spain" },
              { num: "300+", label: "Frame styles available" },
              { num: "0–16", label: "Years — full age coverage" },
              { num: "6+", label: "Countries across West Africa" },
            ].map((s) => (
              <div key={s.label} className="py-8">
                <div className="text-4xl font-heading font-black text-[#e30613] mb-2">{s.num}</div>
                <p className="text-gray-500 text-xs font-heading font-semibold tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-heading font-black text-[#1a1a1a] text-2xl mb-3">Ready to find NanoVista near you?</h3>
          <p className="text-gray-500 text-sm mb-6">Locate your nearest authorised NanoVista Africa optical store.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/find-a-store" className="bg-[#e30613] text-white text-xs font-heading font-bold px-8 py-3 hover:bg-red-700 transition-colors tracking-wider">
              FIND A STORE →
            </a>
            <a href="/become-a-stockist" className="border border-[#1a1a1a] text-[#1a1a1a] text-xs font-heading font-bold px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors tracking-wider">
              BECOME A STOCKIST
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
