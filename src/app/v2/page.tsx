'use client'

import HeroSection from '@/components/v2/HeroSection'
import MarqueeSection from '@/components/v2/MarqueeSection'
import ModelParallaxBridge from '@/components/v2/ModelParallaxBridge'
import AboutSection from '@/components/v2/AboutSection'
import ServicesSection from '@/components/v2/ServicesSection'
import ProjectsSection from '@/components/v2/ProjectsSection'

export default function V2Page() {
  return (
    <main className="overflow-x-clip font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <ModelParallaxBridge />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
