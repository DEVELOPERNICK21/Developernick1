'use client'

import HeroSection from '@/components/v2/HeroSection'
import MarqueeSection from '@/components/v2/MarqueeSection'
import ModelParallaxBridge from '@/components/v2/ModelParallaxBridge'
import AboutSection from '@/components/v2/AboutSection'
import ServicesSection from '@/components/v2/ServicesSection'
import ProjectsSection from '@/components/v2/ProjectsSection'
import ContactSection from '@/components/v2/ContactSection'

export default function V2Page() {
  return (
    <main className="film-grain overflow-x-clip bg-classic-bg font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <ModelParallaxBridge />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
