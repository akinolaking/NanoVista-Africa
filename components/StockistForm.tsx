"use client";

export default function StockistForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">PRACTICE NAME *</label>
          <input type="text" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">YOUR NAME *</label>
          <input type="text" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">EMAIL ADDRESS *</label>
          <input type="email" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">PHONE NUMBER *</label>
          <input type="tel" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">CITY *</label>
          <input type="text" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
        </div>
        <div>
          <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">COUNTRY *</label>
          <select required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors bg-white">
            <option value="">Select country</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Senegal</option>
            <option>Côte d&apos;Ivoire</option>
            <option>Cameroon</option>
            <option>Kenya</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">PRACTICE ADDRESS *</label>
        <input type="text" required className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors"/>
      </div>
      <div>
        <label className="block text-xs font-heading font-bold text-[#1a1a1a] tracking-wider mb-1.5">TELL US ABOUT YOUR PRACTICE</label>
        <textarea
          rows={4}
          placeholder="How long have you been operating? How many dispensing staff? Do you currently carry children's eyewear?"
          className="w-full border border-gray-200 px-4 py-3 text-sm font-heading outline-none focus:border-[#e30613] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#e30613] text-white text-sm font-heading font-black py-4 tracking-wider hover:bg-red-700 transition-colors"
      >
        SUBMIT APPLICATION →
      </button>
      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to our privacy policy. We&apos;ll only use your details to process your application.
      </p>
    </form>
  );
}
