const posts = [
  {
    category: "EYE HEALTH",
    title: "How to Tell If Your Child Needs Glasses",
    excerpt:
      "Many vision problems go undetected in children because they don't know what 'normal' vision looks like. Here are the signs every parent should know.",
    href: "/learn/signs-child-needs-glasses",
    icon: "👁️",
    date: "March 2025",
  },
  {
    category: "MYOPIA",
    title: "Myopia in Children: A Growing Challenge in West Africa",
    excerpt:
      "Screen time, indoor lifestyles, and genetic factors are driving a myopia surge in Nigerian and Ghanaian children. What parents need to know now.",
    href: "/learn/myopia-west-africa",
    icon: "📱",
    date: "February 2025",
  },
  {
    category: "CARE TIPS",
    title: "How to Clean Your Child's Glasses (The Right Way)",
    excerpt:
      "Fingerprints, smudges, and dust are relentless. Here's the safe, effective way to clean prescription lenses without scratching the coating.",
    href: "/learn/how-to-clean-glasses",
    icon: "🧽",
    date: "January 2025",
  },
];

export default function LearnSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-heading font-bold tracking-[0.25em] text-[#e30613] mb-3 border border-[#e30613] px-3 py-1">
              LEARN WITH NANO
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1a1a1a]">
              CHILDREN'S EYE HEALTH —<br />
              <span className="text-[#e30613]">WHAT EVERY PARENT</span> SHOULD KNOW.
            </h2>
          </div>
          <a
            href="/learn"
            className="flex-shrink-0 text-sm font-heading font-bold border border-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors tracking-wider"
          >
            ALL ARTICLES →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              className="card-lift group block border border-gray-100 overflow-hidden"
            >
              {/* Visual area */}
              <div className="bg-[#f7f7f7] h-48 flex items-center justify-center text-7xl group-hover:bg-[#fff5f5] transition-colors">
                {post.icon}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-heading font-bold text-[#e30613] tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-heading font-black text-[#1a1a1a] text-lg mb-3 group-hover:text-[#e30613] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-xs font-heading font-bold text-[#e30613] opacity-0 group-hover:opacity-100 transition-opacity">
                  READ MORE →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
