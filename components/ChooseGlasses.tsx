export default function ChooseGlasses() {
  return (
    <section>
      {/* Text block */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            How do I choose the best glasses for my child? Great question, right?
            We already know that, finding perfect glasses for your child has been
            an extremely complicated task…until now!
          </p>
          <a
            href="/find-a-store"
            className="inline-block bg-[#8dc63f] hover:bg-[#6ba82e] text-white font-heading font-bold text-sm tracking-widest px-10 py-4 rounded-full transition-colors"
          >
            DISCOVER THEM!
          </a>
        </div>
      </div>

      {/* Full-width photo */}
      <div className="w-full overflow-hidden" style={{ height: "clamp(320px, 40vw, 560px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffbb6b6e843?auto=format&fit=crop&w=1920&q=80"
          alt="Children with NanoVista flexible glasses"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
