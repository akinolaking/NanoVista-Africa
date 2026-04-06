import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AgeNav from "@/components/AgeNav";
import Collections from "@/components/Collections";
import Mission from "@/components/Mission";
import AfricaSection from "@/components/AfricaSection";
import Testimonials from "@/components/Testimonials";
import FindStore from "@/components/FindStore";
import StockistBanner from "@/components/StockistBanner";
import LearnSection from "@/components/LearnSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <AgeNav />
      <Collections />
      <Mission />
      <AfricaSection />
      <Testimonials />
      <FindStore />
      <StockistBanner />
      <LearnSection />
      <Footer />
    </main>
  );
}
