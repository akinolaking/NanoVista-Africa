"use client";

const BASE = "https://nano-vista.com/wp-content/uploads";
const SHOP_URL = "https://optixwarehouse.com.ng/store/nanoafrica/";

export default function BrowseCTA() {
  return (
    <>
      {/* Green CTA band — replaces all product/collection grid sections */}
      <section
        className="w-full py-20 px-6 text-center"
        style={{ background: "#8dc63f" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="reveal font-heading font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">
            Official NanoVista Africa Collection
          </p>

          <h2
            className="reveal reveal-delay-1 font-heading font-black text-white uppercase leading-tight mb-6"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Browse the Full<br />NanoVista Africa Range
          </h2>

          <p className="reveal reveal-delay-2 font-body text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            All frames — prescription glasses, sunglasses, sports eyewear and blue light protection —
            available now through our authorised West Africa partner.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill text-base px-12 py-4 shadow-lg"
              style={{ fontSize: "15px" }}
            >
              Shop Now
            </a>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline"
            >
              Browse All Frames
            </a>
          </div>

          {/* Age badges row */}
          <div className="reveal reveal-delay-4 flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Babies 0–3",
              "Children 4–9",
              "Teens 10–16",
              "Sunglasses",
              "Sport",
              "Blue Light",
            ].map((label) => (
              <span
                key={label}
                className="font-heading font-bold text-xs text-white border border-white/50 rounded-full px-4 py-1.5 tracking-wide"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax photo break 3 — find your store banner */}
      <div
        className="parallax-bg w-full"
        style={{
          backgroundImage: `url(${BASE}/2025/07/Banner_Web_LocalizaTuOptica_ENG.jpg)`,
          height: "clamp(260px, 36vw, 440px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
