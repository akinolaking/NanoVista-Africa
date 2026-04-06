import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import ParallaxBreak from '@/components/ParallaxBreak'
import MissionSection from '@/components/MissionSection'
import EndorsementSection from '@/components/EndorsementSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CollectionsSection from '@/components/CollectionsSection'
import StoreCTA from '@/components/StoreCTA'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      {/* Boots IntersectionObserver scroll reveal on all .sr elements */}
      <ScrollRevealInit />

      <Header />

      <main>
        {/* Hero Slider — id="home" */}
        <HeroSlider />

        {/* About — id="about" */}
        <AboutSection />

        {/* Parallax break 1 */}
        <ParallaxBreak
          imageUrl="/images/parallax-about.jpg"
          alt="Child demonstrating NanoVista flexible frame"
        />

        {/* Mission green band */}
        <MissionSection />

        {/* Endorsement split: purple + logos */}
        <EndorsementSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Collections — id="collections" */}
        <CollectionsSection />

        {/* Store CTA — id="store" */}
        <StoreCTA />

        {/* Parallax break 3 */}
        <ParallaxBreak
          imageUrl="/images/parallax-store.jpg"
          alt="Find your nearest NanoVista stockist"
        />

        {/* Contact — id="contact" */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
