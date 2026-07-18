'use client'

import AppMiniCard from '@/components/AppMiniCard'
import RevealLayer from '@/components/RevealLayer'
import IslandButton from '@/components/classic/IslandButton'
import { heroProjects } from '@/lib/projects'
import { useSpotlight } from '@/hooks/useSpotlight'

export default function ClassicHeroSection() {
  const { cursorPos, enabled, radius } = useSpotlight(0.1)

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 hero-base-bg hero-zoom" aria-hidden />

      <RevealLayer
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={radius}
        enabled={enabled}
      />

      <div className="absolute inset-0 z-30 hero-vignette pointer-events-none" aria-hidden />

      <div className="relative z-50 mx-auto flex min-h-[100dvh] w-full max-w-[96rem] items-center px-4 py-28 sm:px-10 md:px-16 lg:py-32">
        <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="w-full max-w-xl lg:w-1/2">
            <span
              className="hero-anim hero-fade-anim mb-5 block font-mono text-[10px] uppercase tracking-[0.24em] text-brand-muted"
              style={{ animationDelay: '0.12s' }}
            >
              React Native · Pune, India
            </span>
            <span
              className="hero-anim hero-reveal-anim mb-8 block font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
              style={{ animationDelay: '0.2s' }}
            >
              Developer Nick
            </span>

            <h1 className="mb-7 leading-[0.88] text-white">
              <span
                className="hero-anim hero-reveal-anim block font-display text-6xl font-normal italic sm:text-7xl md:text-8xl"
                style={{ letterSpacing: '-0.055em', animationDelay: '0.3s' }}
              >
                Apps that
              </span>
              <span
                className="hero-anim hero-reveal-anim -mt-1 block text-6xl font-black text-brand-accent sm:text-7xl md:text-8xl"
                style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
              >
                ship.
              </span>
            </h1>

            <p
              className="hero-anim hero-fade-anim max-w-lg text-base leading-relaxed text-brand-muted sm:text-lg"
              style={{ animationDelay: '0.55s' }}
            >
              I build React Native apps from zero to store — clean architecture,
              offline-first resilience, and product experiences made to last.
            </p>

            <div
              className="hero-anim hero-fade-anim mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: '0.68s' }}
            >
              <IslandButton href="#work">See My Work</IslandButton>
              <IslandButton href="#about" variant="ghost">
                About Me
              </IslandButton>
            </div>

            <div className="mt-12 flex flex-col gap-3 lg:hidden">
              {heroProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="hero-anim hero-fade-anim"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <AppMiniCard
                    icon={project.icon}
                    iconUrl={project.iconUrl}
                    title={project.heroTitle ?? project.title}
                    meta={project.heroMeta ?? project.label}
                    badge={project.heroBadge ?? 'Live'}
                    href={project.links[0]?.href}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full max-w-sm flex-col gap-4 lg:flex lg:w-[36%]">
            {heroProjects.map((project, index) => (
              <div
                key={project.title}
                className="hero-anim hero-fade-anim"
                style={{ animationDelay: `${0.74 + index * 0.12}s` }}
              >
                <AppMiniCard
                  icon={project.icon}
                  iconUrl={project.iconUrl}
                  title={project.heroTitle ?? project.title}
                  meta={project.heroMeta ?? project.label}
                  badge={project.heroBadge ?? 'Live'}
                  href={project.links[0]?.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
