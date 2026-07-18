import ClassicNavbar from '@/components/classic/Navbar'
import ClassicHeroSection from '@/components/classic/HeroSection'
import WorkSection from '@/components/WorkSection'
import SkillsSection from '@/components/SkillsSection'
import ClassicAboutSection from '@/components/classic/AboutSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="font-sans film-grain">
      <ClassicNavbar />
      <ClassicHeroSection />
      <WorkSection />
      <SkillsSection />
      <ClassicAboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
