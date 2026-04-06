export default function StockistBanner() {
  return (
    <section className="py-16 bg-[#f7f7f7] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Optical professionals */}
          <div className="bg-[#1a1a1a] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="3"/>
                <circle cx="30" cy="50" r="18" fill="none" stroke="white" strokeWidth="3"/>
                <circle cx="70" cy="50" r="18" fill="none" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-xs font-heading font-bold text-[#e30613] tracking-[0.2em] mb-3">FOR OPTICAL PROFESSIONALS</div>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 leading-tight">
                BECOME AN AUTHORISED<br />NANOVISTA STOCKIST
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Join the growing network of optical stores across Nigeria and West Africa carrying
                NanoVista. Benefit from full training, marketing support, and access to the
                complete product range.
              </p>
              <a
                href="/become-a-stockist"
                className="inline-flex items-center gap-2 bg-[#e30613] text-white text-xs font-heading font-bold px-6 py-3 hover:bg-red-700 transition-colors tracking-wider"
              >
                APPLY NOW →
              </a>
            </div>
          </div>

          {/* Parents */}
          <div className="bg-white border border-gray-200 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 text-6xl opacity-10 flex items-center justify-center">
              👁️
            </div>
            <div className="relative z-10">
              <div className="text-xs font-heading font-bold text-[#e30613] tracking-[0.2em] mb-3">FOR PARENTS</div>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-[#1a1a1a] mb-4 leading-tight">
                NOT SURE WHICH<br />FRAME TO CHOOSE?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our visual health guide helps you understand your child's needs by age group,
                activity level, and prescription type. Or speak to one of our authorised optical
                professionals in your city.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/learn/choosing-right-frame"
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-xs font-heading font-bold px-6 py-3 hover:bg-[#e30613] transition-colors tracking-wider"
                >
                  READ THE GUIDE →
                </a>
                <a
                  href="/find-a-store"
                  className="inline-flex items-center gap-2 border border-gray-300 text-[#1a1a1a] text-xs font-heading font-bold px-6 py-3 hover:border-[#e30613] hover:text-[#e30613] transition-colors tracking-wider"
                >
                  FIND A STORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
