"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">NAME *</label>
          <input type="text" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">EMAIL *</label>
          <input type="email" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
      </div>
      <div>
        <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">SUBJECT</label>
        <select className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors bg-white">
          <option>Parent / product enquiry</option>
          <option>Find a stockist near me</option>
          <option>Trade / wholesale enquiry</option>
          <option>Press enquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">MESSAGE *</label>
        <textarea
          required
          rows={5}
          className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#e30613] text-white text-sm font-heading font-black py-4 tracking-wider hover:bg-red-700 transition-colors"
      >
        SEND MESSAGE →
      </button>
    </form>
  );
}
