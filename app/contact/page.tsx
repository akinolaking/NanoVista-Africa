import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NanoVista Africa",
  description: "Get in touch with NanoVista Africa. Enquiries for parents, optical professionals, and stockist applications.",
};

const contactDetails = [
  { icon: "📧", label: "Email", val: "info@nanovista.africa" },
  { icon: "📞", label: "Phone (Nigeria)", val: "+234 800 NANOVISTA" },
  { icon: "💬", label: "WhatsApp", val: "+234 800 626 684 82" },
  { icon: "📍", label: "Headquarters", val: "Lagos, Nigeria" },
];

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">CONTACT US</h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Whether you are a parent with a question, an optician interested in stocking NanoVista, or a press enquiry — we are here.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-heading font-black text-[#1a1a1a] mb-8">CONTACT DETAILS</h2>
            <div className="space-y-6">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-xs font-heading font-bold text-gray-400 tracking-wider mb-1">{c.label}</div>
                    <div className="text-sm font-heading font-semibold text-[#1a1a1a]">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-[#f7f7f7] border border-gray-200">
              <h3 className="font-heading font-bold text-[#1a1a1a] text-sm mb-2">OPTICAL PROFESSIONALS</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                For stockist applications, trade enquiries, and wholesale pricing — please use the dedicated stockist application form.
              </p>
              <a href="/become-a-stockist"
                className="inline-block text-xs font-heading font-bold bg-[#e30613] text-white px-5 py-2 hover:bg-red-700 transition-colors tracking-wider">
                APPLY AS STOCKIST →
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-heading font-black text-[#1a1a1a] mb-8">SEND A MESSAGE</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
