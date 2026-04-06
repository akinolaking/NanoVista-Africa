import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StockistForm from "@/components/StockistForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a NanoVista Stockist | Nigeria & West Africa",
  description: "Apply to become an authorised NanoVista optical stockist in Nigeria and West Africa.",
};

const benefits = [
  { icon: "🏆", title: "Exclusive Authorisation", desc: "Carry the #1 children's eyewear brand in Spain — officially licensed for Nigeria and West Africa." },
  { icon: "📦", title: "Full Product Range", desc: "Access all NanoVista collections: Baby, Indestructible, Glow, Cool, Metal, Sport, Custom Fit and Sol." },
  { icon: "🎓", title: "Professional Training", desc: "Comprehensive product training for your optical team, including fitting guides and clinical materials." },
  { icon: "📣", title: "Marketing Support", desc: "In-store POS materials, digital assets, and regional campaign support to drive footfall to your practice." },
  { icon: "💰", title: "Competitive Margins", desc: "Attractive wholesale pricing with tiered margin structures based on volume." },
  { icon: "🤝", title: "Dedicated Account Support", desc: "A dedicated NanoVista Africa account manager available to you throughout the partnership." },
];

const steps = [
  { num: "01", title: "Submit Your Application", desc: "Complete the form below. We review within 3 working days." },
  { num: "02", title: "Eligibility Review", desc: "We verify your optical credentials and practice location." },
  { num: "03", title: "Onboarding & Training", desc: "Full product training and starter stock pack arranged." },
  { num: "04", title: "Launch Your Range", desc: "Go live with NanoVista. Marketing support activated." },
];

export default function BecomeAStockist() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#1a1a1a] py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">OPTICAL PROFESSIONALS</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-none">
            BECOME AN AUTHORISED<br /><span className="text-[#e30613]">NANOVISTA STOCKIST.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join the growing network of optical practices across Nigeria and West Africa carrying the leading children's eyewear brand.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-[#1a1a1a] mb-3">WHY STOCK NANOVISTA?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-gray-100 p-6 hover:border-[#e30613] transition-colors group">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-heading font-bold text-[#1a1a1a] text-sm mb-2 group-hover:text-[#e30613] transition-colors tracking-wide">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-[#1a1a1a] mb-3">HOW IT WORKS</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-4xl font-heading font-black text-[#e30613] mb-3">{s.num}</div>
                <h3 className="font-heading font-bold text-[#1a1a1a] text-sm mb-2 tracking-wide">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="apply">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-black text-[#1a1a1a] mb-3">APPLY NOW</h2>
            <p className="text-gray-500 text-sm">Complete this form and our team will respond within 3 working days.</p>
          </div>
          <StockistForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
