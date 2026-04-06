"use client";

const BASE = "https://nano-vista.com/wp-content/uploads";

export default function ExpertsSection() {
  return (
    <>
      {/* White section: heading + seals */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Green kicker — uppercase, small */}
          <p
            className="reveal font-heading font-bold text-xs tracking-widest uppercase mb-4"
            style={{ color: "#8dc63f" }}
          >
            Indestructible and Flexible Children's Glasses
          </p>

          {/* Large outlined heading — matches screenshot hollow text style */}
          <h2
            className="reveal reveal-delay-1 font-heading font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(36px, 7vw, 88px)",
              WebkitTextStroke: "2px #8dc63f",
              color: "transparent",
              lineHeight: 1.05,
            }}
          >
            Experts in Children<br />Visual Health
          </h2>

          <p className="reveal reveal-delay-2 font-body text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
            And no, it is not just us saying this. When we say that NanoVista is the best-selling brand
            of glasses for children and adolescents, we do so with the confidence of having been
            endorsed by the most important independent studies.
          </p>

          {/* Siliflex / Warranty / Eco / BPA seals — Info-Sellos-ING-v5.jpg */}
          <div className="reveal reveal-delay-3 flex justify-center">
            <img
              src={`${BASE}/2021/09/Info-Sellos-ING-v5.jpg`}
              alt="Siliflex Patented, Warranty 3 Years, Eco Friendly, BPA Free"
              className="max-w-md w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Parallax photo break 1 — child bending frame */}
      <div
        className="parallax-bg w-full"
        style={{
          backgroundImage: `url(${BASE}/2024/09/Imagen_HomeWeb.jpg)`,
          height: "clamp(280px, 38vw, 480px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
