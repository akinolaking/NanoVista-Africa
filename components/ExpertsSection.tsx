function SiliflexBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#8dc63f" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      <text x="60" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="2">PATENTED</text>
      <text x="60" y="62" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="14" fill="white" letterSpacing="1">SILIFLEX</text>
      <text x="60" y="80" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="2">PATENTED</text>
    </svg>
  );
}

function WarrantyBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#1a9fd4" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      <text x="60" y="40" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill="white" letterSpacing="1">WARRANTY</text>
      <text x="60" y="68" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="28" fill="white">3</text>
      <text x="60" y="85" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill="white" letterSpacing="1">YEARS</text>
    </svg>
  );
}

function EcoBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#1a9fd4" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      <text x="60" y="50" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="18" fill="white">ECO</text>
      <text x="60" y="68" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="10" fill="white" letterSpacing="1">FRIENDLY</text>
      {/* leaf */}
      <path d="M52,80 Q60,72 68,80 Q60,88 52,80Z" fill="white" opacity="0.8" />
    </svg>
  );
}

function BpaFreeBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#8dc63f" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      <text x="60" y="48" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill="white" letterSpacing="1">HYPOALLERGENIC</text>
      <text x="60" y="66" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="14" fill="white">BPA</text>
      <text x="60" y="82" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="14" fill="white">FREE</text>
      {/* leaf */}
      <path d="M80,58 Q88,66 80,74 Q72,66 80,58Z" fill="white" opacity="0.7" />
    </svg>
  );
}

export default function ExpertsSection() {
  return (
    <section>
      {/* Text + badges */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#8dc63f] font-heading font-bold text-sm tracking-widest uppercase mb-4">
            Indestructible and Flexible Children&apos;s Glasses
          </p>
          <h2
            className="font-heading font-black text-stroke-green leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            EXPERTS IN CHILDREN<br />VISUAL HEALTH
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            And no, it&apos;s not just us saying this. When we say that NanoVista is the
            best-selling brand of glasses for children and adolescents, we do so with
            the confidence of having been endorsed by the most important independent studies.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-8">
            <SiliflexBadge />
            <WarrantyBadge />
            <EcoBadge />
            <BpaFreeBadge />
          </div>
        </div>
      </div>

      {/* Full-width photo */}
      <div className="w-full overflow-hidden" style={{ height: "clamp(320px, 38vw, 540px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1632933920934-c93c00e41b4e?auto=format&fit=crop&w=1920&q=80"
          alt="Child with NanoVista glasses"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
