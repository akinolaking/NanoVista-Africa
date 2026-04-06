import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a NanoVista Store | Nigeria & West Africa",
  description: "Locate your nearest authorised NanoVista optical store in Nigeria, Ghana, Senegal and across West Africa.",
};

const stores = [
  { city: "Lagos", country: "Nigeria", flag: "🇳🇬", stores: [
    { name: "VisionCare Lagos Island", address: "14 Marina Street, Lagos Island, Lagos", phone: "+234 801 234 5678", area: "Lagos Island" },
    { name: "Apex Opticians Victoria Island", address: "25 Adeola Odeku Street, Victoria Island, Lagos", phone: "+234 802 345 6789", area: "Victoria Island" },
    { name: "ClearSight Ikeja", address: "7 Obafemi Awolowo Way, Ikeja, Lagos", phone: "+234 803 456 7890", area: "Ikeja" },
    { name: "EyeCare Plus Lekki", address: "32 Admiralty Way, Lekki Phase 1, Lagos", phone: "+234 804 567 8901", area: "Lekki" },
  ]},
  { city: "Abuja", country: "Nigeria", flag: "🇳🇬", stores: [
    { name: "Capital Vision Centre", address: "Plot 1234 Ahmadu Bello Way, Central Business District, Abuja", phone: "+234 805 678 9012", area: "CBD" },
    { name: "NanoVista Abuja Authorised", address: "Wuse 2 Shopping Plaza, Abuja", phone: "+234 806 789 0123", area: "Wuse 2" },
  ]},
  { city: "Port Harcourt", country: "Nigeria", flag: "🇳🇬", stores: [
    { name: "Rivers Eye Clinic & Optical", address: "12 Rumuola Road, Port Harcourt", phone: "+234 807 890 1234", area: "Rumuola" },
  ]},
  { city: "Accra", country: "Ghana", flag: "🇬🇭", stores: [
    { name: "Accra Eye Specialists", address: "14 Oxford Street, Osu, Accra", phone: "+233 20 123 4567", area: "Osu" },
    { name: "GhanaSight Opticians", address: "Airport City Mall, Accra", phone: "+233 24 234 5678", area: "Airport City" },
  ]},
  { city: "Dakar", country: "Senegal", flag: "🇸🇳", stores: [
    { name: "Optique Dakar Vision", address: "Avenue Cheikh Anta Diop, Dakar", phone: "+221 77 123 4567", area: "Plateau" },
  ]},
];

export default function FindAStore() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">
            AUTHORISED STOCKISTS
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
            FIND A STORE
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            NanoVista is only available through authorised optical professionals.
            Find your nearest stockist below.
          </p>
        </div>
      </section>

      {/* Search bar */}
      <section className="bg-[#e30613] py-6">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex bg-white overflow-hidden">
            <input
              type="text"
              placeholder="Search by city, area or postcode..."
              className="flex-1 px-4 py-3 text-sm font-heading text-gray-800 outline-none"
            />
            <button className="bg-[#1a1a1a] text-white px-6 py-3 text-xs font-heading font-bold tracking-wider hover:bg-black transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* Stores by city */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-14">
          {stores.map((cityGroup) => (
            <div key={cityGroup.city}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#e30613]">
                <span className="text-2xl">{cityGroup.flag}</span>
                <div>
                  <h2 className="text-2xl font-heading font-black text-[#1a1a1a]">{cityGroup.city}</h2>
                  <p className="text-xs font-heading text-gray-400 tracking-wider">{cityGroup.country}</p>
                </div>
                <span className="ml-auto bg-[#f7f7f7] text-gray-500 text-xs font-heading font-bold px-3 py-1">
                  {cityGroup.stores.length} {cityGroup.stores.length === 1 ? "STORE" : "STORES"}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cityGroup.stores.map((store) => (
                  <div key={store.name} className="border border-gray-100 p-5 hover:border-[#e30613] transition-colors group">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-heading font-bold text-[#1a1a1a] text-sm group-hover:text-[#e30613] transition-colors">
                        {store.name}
                      </h3>
                      <span className="bg-[#e30613] text-white text-[10px] font-heading font-bold px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                        AUTHORISED
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2 leading-relaxed">📍 {store.address}</p>
                    <p className="text-gray-500 text-xs mb-4">📞 {store.phone}</p>
                    <div className="flex gap-2">
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`}
                        className="text-xs font-heading font-bold border border-[#e30613] text-[#e30613] px-3 py-1.5 hover:bg-[#e30613] hover:text-white transition-colors">
                        CALL
                      </a>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-heading font-bold border border-gray-300 text-gray-600 px-3 py-1.5 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors">
                        DIRECTIONS
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Not in your city? */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
          <div className="bg-[#f7f7f7] border border-gray-200 p-8 text-center">
            <h3 className="font-heading font-black text-[#1a1a1a] text-xl mb-3">
              Don't see your city?
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              We're expanding rapidly. If NanoVista isn't yet in your city, let us know —
              or ask your local optical store to apply to become an authorised stockist.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/contact"
                className="bg-[#e30613] text-white text-xs font-heading font-bold px-6 py-3 hover:bg-red-700 transition-colors tracking-wider">
                NOTIFY ME WHEN AVAILABLE
              </a>
              <a href="/become-a-stockist"
                className="border border-[#1a1a1a] text-[#1a1a1a] text-xs font-heading font-bold px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors tracking-wider">
                REFER AN OPTICIAN
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
