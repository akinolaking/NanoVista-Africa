import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ChooseGlasses from "@/components/ChooseGlasses";
import ExpertsSection from "@/components/ExpertsSection";
import Mission from "@/components/Mission";
import EndorsementsSection from "@/components/EndorsementsSection";
import Testimonials from "@/components/Testimonials";
import FindStore from "@/components/FindStore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <ChooseGlasses />
      <ExpertsSection />
      <Mission />
      <EndorsementsSection />
      <Testimonials />
      <FindStore />
      <Footer />
    </main>
  );
}
