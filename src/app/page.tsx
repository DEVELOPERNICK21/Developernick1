import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WorkSection from '@/components/WorkSection'
import SkillsSection from '@/components/SkillsSection'
import AboutSection from '@/components/AboutSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
