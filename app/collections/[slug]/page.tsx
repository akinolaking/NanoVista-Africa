import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const collectionData: Record<string, {
  title: string; sub: string; color: string; bg: string; icon: string;
  desc: string; longDesc: string; ageRange: string; features: string[];
}> = {
  "nano-baby": {
    title: "NANO BABY", sub: "Ages 0–3", color: "#FF6B9D", bg: "#fff0f6", icon: "👶",
    desc: "Ultra-soft, flexible frames with adjustable headbands for the tiniest wearers.",
    longDesc: "Nano Baby is NanoVista's specialist line for infants and toddlers from birth to 3 years. The frames use the softest grade of Siliflex™ material, with an integrated adjustable headband system that holds glasses securely without discomfort. Designed in consultation with paediatric ophthalmologists.",
    ageRange: "0–3 years",
    features: ["Siliflex™ ultra-soft material", "Integrated adjustable headband", "No sharp edges or metal parts", "CE certified for infant use", "Available in prescription and sun versions", "Adjustable nose bridge"],
  },
  "nano-indestructible": {
    title: "NANO INDESTRUCTIBLE", sub: "Ages 4–12", color: "#e30613", bg: "#fff5f5", icon: "💪",
    desc: "Our flagship line. Siliflex™ material — bend it, twist it, it always returns to shape.",
    longDesc: "Nano Indestructible is the collection that built NanoVista's reputation. Made from Siliflex™ — a proprietary memory polymer that returns to its original shape after any deformation — these frames are truly indestructible in daily use. The dual fastening system (adjustable temples + interchangeable elastic band) ensures a perfect fit for active children.",
    ageRange: "4–12 years",
    features: ["Siliflex™ memory material", "Dual fastening system", "Adjustable temple length", "Interchangeable elastic band", "100+ frame styles", "Prescription and sun versions"],
  },
  "nano-glow": {
    title: "NANO GLOW", sub: "Ages 4–12", color: "#9c27b0", bg: "#f9f0ff", icon: "✨",
    desc: "Glow-in-the-dark frames that kids absolutely love — functional and fun.",
    longDesc: "Nano Glow takes the indestructibility of the Siliflex™ core collection and adds a genuinely magical twist: the frames glow in the dark. Kids love them, parents love how easy they are to find. Same clinical standards, same indestructible build — with added fun.",
    ageRange: "4–12 years",
    features: ["Glow-in-the-dark Siliflex™ material", "All Nano Indestructible features included", "Charges in natural or artificial light", "Available in prescription versions", "Bright daytime colours", "Safe, non-toxic pigments"],
  },
  "nano-sport": {
    title: "NANO SPORT", sub: "Ages 4–16", color: "#2196F3", bg: "#f0f8ff", icon: "⚽",
    desc: "Sports protective eyewear. Prescription available. CE certified for impact protection.",
    longDesc: "Nano Sport is NanoVista's dedicated sports protective eyewear line. Standard prescription glasses do not carry impact ratings — Nano Sport frames are CE EN 166 certified for sports use. Available with prescription lenses, they are the safe, clinically correct choice for active children in contact and non-contact sport.",
    ageRange: "4–16 years",
    features: ["CE EN 166 impact certified", "Prescription available", "Anti-slip rubber grip zones", "Adjustable strap system", "Wide peripheral vision design", "UV400 lens options"],
  },
  "nano-cool": {
    title: "NANO COOL", sub: "Ages 4–12", color: "#f7941d", bg: "#fff8f0", icon: "😎",
    desc: "Acetate frames for kids ready for a more grown-up look. Trendy shapes, vibrant colours.",
    longDesc: "Nano Cool is the acetate collection for children who want something more fashion-forward. Made from premium bio-acetate with the same optical precision as the Siliflex™ range, Nano Cool frames come in bold, trend-led shapes and colour combinations. Recommended for children transitioning away from the full-flex indestructible range.",
    ageRange: "4–12 years",
    features: ["Premium bio-acetate construction", "Fashion-forward shapes", "Hinge reinforcement", "Wide colour and pattern range", "Prescription ready", "Spring hinges on selected models"],
  },
  "nano-metal": {
    title: "NANO METAL", sub: "Ages 8–16", color: "#607D8B", bg: "#f5f7f8", icon: "🔩",
    desc: "Lightweight metal frames with full Nano flexibility. Sophisticated styles for older kids.",
    longDesc: "Nano Metal brings NanoVista's engineering expertise to ultra-lightweight metal frames for older children and teens. Despite using premium stainless steel and titanium alloys, Nano Metal frames retain the flexibility and durability characteristics the brand is known for. Perfect for tweens and teens who want a more mature aesthetic.",
    ageRange: "8–16 years",
    features: ["Stainless steel and titanium options", "Featherweight construction", "Flexible titanium temples", "Adult-adjacent sizing", "Minimalist and trend designs", "Prescription and optical blue light versions"],
  },
  "nano-custom-fit": {
    title: "NANO CUSTOM FIT", sub: "Ages 0–14", color: "#4CAF50", bg: "#f0fff4", icon: "🎯",
    desc: "For challenging facial profiles. Expert-fitted for difficult bridge measurements.",
    longDesc: "Nano Custom Fit is NanoVista's specialist solution for children with challenging facial profiles — flat nose bridges, high cheekbones, or wide head measurements that make standard frames difficult to fit correctly. This collection should always be fitted by an expert optical professional and is not recommended for self-selection.",
    ageRange: "0–14 years",
    features: ["Extended bridge size range", "Adjustable pad arms", "Wide head measurements available", "Expert fitting required", "Full prescription capability", "Available in baby and child sizes"],
  },
  "nano-sol": {
    title: "NANO SOL", sub: "Ages 0+", color: "#FF9800", bg: "#fffaf0", icon: "🌞",
    desc: "UV-protective sunglasses for every age. Style meets protection under the African sun.",
    longDesc: "Nano Sol is the complete NanoVista sunglasses range — spanning from baby sun protection through to teen fashion sunglasses. All Nano Sol lenses carry CE EN ISO 12312-1 certification and offer UV400 protection. Under the West African sun, UV protection for children from the earliest age is essential.",
    ageRange: "0+ years",
    features: ["UV400 certified lenses", "CE EN ISO 12312-1 certified", "Polarised options available", "Prescription solar clip-on versions", "Baby headband versions", "100+ frame styles"],
  },
};

export async function generateStaticParams() {
  return Object.keys(collectionData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const col = collectionData[params.slug];
  if (!col) return { title: "Collection | NanoVista Africa" };
  return {
    title: `${col.title} | NanoVista Africa`,
    description: col.desc,
  };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const col = collectionData[params.slug];

  if (!col) {
    return (
      <main>
        <Navbar />
        <div className="py-40 text-center">
          <h1 className="text-2xl font-heading font-black text-[#1a1a1a]">Collection not found</h1>
          <a href="/collections" className="mt-6 inline-block text-[#e30613] font-heading font-bold text-sm">← All Collections</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ background: col.bg }}>
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <a href="/" className="text-xs font-heading font-bold text-gray-400 hover:text-[#e30613] transition-colors mb-8 inline-block">
            ← BACK TO HOME
          </a>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{col.icon}</div>
              <div className="text-xs font-heading font-bold tracking-[0.2em] mb-3" style={{ color: col.color }}>
                {col.sub}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-[#1a1a1a] mb-4 leading-none">
                {col.title}
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{col.desc}</p>
              <div className="inline-block border text-sm font-heading font-bold px-4 py-2" style={{ borderColor: col.color, color: col.color }}>
                🎯 AGE RANGE: {col.ageRange}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="bg-white border border-gray-100 rounded-2xl p-12 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 200 80" className="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="40" r="30" fill="none" stroke={col.color} strokeWidth="6" opacity="0.6"/>
                <circle cx="145" cy="40" r="30" fill="none" stroke={col.color} strokeWidth="6" opacity="0.6"/>
                <line x1="85" y1="40" x2="115" y2="40" stroke={col.color} strokeWidth="5"/>
                <line x1="10" y1="35" x2="25" y2="40" stroke={col.color} strokeWidth="4" strokeLinecap="round"/>
                <line x1="175" y1="40" x2="190" y2="35" stroke={col.color} strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About + features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading font-black text-[#1a1a1a] mb-4">ABOUT THIS COLLECTION</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{col.longDesc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-black text-[#1a1a1a] mb-4">KEY FEATURES</h2>
            <ul className="space-y-3">
              {col.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: col.color }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Find a store CTA */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-heading font-black text-white text-2xl mb-3">
            Try {col.title} in store
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            NanoVista frames should be fitted by an authorised optical professional for the best result.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/find-a-store"
              className="bg-[#e30613] text-white text-xs font-heading font-bold px-8 py-3 hover:bg-red-700 transition-colors tracking-wider">
              FIND A STORE →
            </a>
            <a href="/"
              className="border border-gray-600 text-gray-300 text-xs font-heading font-bold px-8 py-3 hover:border-white hover:text-white transition-colors tracking-wider">
              ALL COLLECTIONS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
