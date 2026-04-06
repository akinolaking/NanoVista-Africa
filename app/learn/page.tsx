import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn With Nano | Children's Eye Health | NanoVista Africa",
  description: "Expert advice on children's eye health, myopia, vision development and choosing the right glasses. From NanoVista Africa.",
};

const posts = [
  {
    category: "EYE HEALTH",
    title: "How to Tell If Your Child Needs Glasses",
    excerpt: "Many vision problems go undetected in children because they don't know what 'normal' vision looks like. Here are the signs every parent should know.",
    href: "/learn/signs-child-needs-glasses",
    icon: "👁️",
    date: "March 2025",
    readTime: "4 min read",
  },
  {
    category: "MYOPIA",
    title: "Myopia in Children: A Growing Challenge in West Africa",
    excerpt: "Screen time, indoor lifestyles, and genetic factors are driving a myopia surge in Nigerian and Ghanaian children. What parents need to know now.",
    href: "/learn/myopia-west-africa",
    icon: "📱",
    date: "February 2025",
    readTime: "6 min read",
  },
  {
    category: "CARE TIPS",
    title: "How to Clean Your Child's Glasses (The Right Way)",
    excerpt: "Fingerprints, smudges, and dust are relentless. Here's the safe, effective way to clean prescription lenses without scratching the coating.",
    href: "/learn/how-to-clean-glasses",
    icon: "🧽",
    date: "January 2025",
    readTime: "3 min read",
  },
  {
    category: "BUYING GUIDE",
    title: "How to Choose the Right Frame for Your Child",
    excerpt: "Bridge width, temple length, frame material — choosing glasses for a child is more technical than most parents realise. A practical guide.",
    href: "/learn/choosing-right-frame",
    icon: "🕶️",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    category: "VISUAL HEALTH",
    title: "The Most Common Eye Conditions in Children",
    excerpt: "From amblyopia (lazy eye) to strabismus and astigmatism — the conditions that most commonly affect paediatric vision and how they're treated.",
    href: "/learn/common-eye-conditions-children",
    icon: "🏥",
    date: "November 2024",
    readTime: "7 min read",
  },
  {
    category: "SPORT",
    title: "Why Children Need Sports-Specific Eyewear",
    excerpt: "Standard prescription glasses are not impact-rated. For sport, your child needs dedicated protective eyewear — here's why it matters.",
    href: "/learn/sports-eyewear-children",
    icon: "⚽",
    date: "October 2024",
    readTime: "4 min read",
  },
];

const categories = ["ALL", "EYE HEALTH", "MYOPIA", "CARE TIPS", "BUYING GUIDE", "VISUAL HEALTH", "SPORT"];

export default function Learn() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-4 border border-[#e30613] px-3 py-1">
            LEARN WITH NANO
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
            CHILDREN'S EYE HEALTH
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Expert advice for parents and caregivers across Nigeria and West Africa.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 text-xs font-heading font-bold px-4 py-2 tracking-wider transition-colors ${
                cat === "ALL"
                  ? "bg-[#e30613] text-white"
                  : "border border-gray-200 text-gray-500 hover:border-[#e30613] hover:text-[#e30613]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="group border border-gray-100 overflow-hidden hover:border-[#e30613] transition-colors"
              >
                <div className="bg-[#f7f7f7] h-44 flex items-center justify-center text-6xl group-hover:bg-[#fff5f5] transition-colors">
                  {post.icon}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-heading font-bold text-[#e30613] tracking-wider">{post.category}</span>
                    <span className="text-[10px] text-gray-400">{post.date}</span>
                    <span className="text-[10px] text-gray-400 ml-auto">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-black text-[#1a1a1a] text-base mb-2 leading-snug group-hover:text-[#e30613] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-xs font-heading font-bold text-[#e30613] opacity-0 group-hover:opacity-100 transition-opacity">
                    READ MORE →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f7f7f7] border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-heading font-black text-[#1a1a1a] text-xl mb-3">Have a question about your child's vision?</h3>
          <p className="text-gray-500 text-sm mb-6">Find your nearest NanoVista-authorised optical professional for a proper examination.</p>
          <a href="/find-a-store"
            className="inline-block bg-[#e30613] text-white text-xs font-heading font-bold px-8 py-3 hover:bg-red-700 transition-colors tracking-wider">
            FIND A STORE →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
