import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ExpertsSection from "@/components/ExpertsSection";
import MissionSection from "@/components/MissionSection";
import Testimonials from "@/components/Testimonials";
import TrueExperts from "@/components/TrueExperts";
import BrowseCTA from "@/components/BrowseCTA";
import FindStore from "@/components/FindStore";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        {/* Layer 2 — Hero Slider */}
        <HeroSlider />

        {/* Layer 3+4 — Experts + Parallax Photo 1 */}
        <ExpertsSection />

        {/* Layer 5+6 — Mission green band + Endorsement split */}
        <MissionSection />

        {/* Layer 7+8 — Testimonials carousel + Parallax Photo 2 */}
        <Testimonials />

        {/* Layer 9+10 — True Experts parallax band + white intro */}
        <TrueExperts />

        {/* Layer 11+12 — Browse CTA (replaces shop) + Parallax Photo 3 */}
        <BrowseCTA />

        {/* Layer 13 — Find Your Store */}
        <FindStore />
      </main>

      {/* Layer 14 — Footer */}
      <Footer />
    </>
  );
}
