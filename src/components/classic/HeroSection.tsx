'use client'

import AppMiniCard from '@/components/AppMiniCard'
import RevealLayer from '@/components/RevealLayer'
import { heroProjects } from '@/lib/projects'
import { useSpotlight } from '@/hooks/useSpotlight'

export default function ClassicHeroSection() {
  const { cursorPos, enabled, radius } = useSpotlight(0.1)

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh', minHeight: '100dvh' }}
    >
      <div className="absolute inset-0 z-10 hero-base-bg hero-zoom" aria-hidden />

      <RevealLayer
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={radius}
        enabled={enabled}
      />

      <div className="absolute inset-0 z-30 hero-vignette pointer-events-none" aria-hidden />

      <div className="relative z-50 flex h-full flex-col justify-center px-6 sm:px-10 md:px-16 pt-24 pb-16">
        <div className="max-w-4xl">
          <span
            className="hero-anim hero-fade-anim font-mono text-xs text-brand-accent tracking-[0.2em] uppercase mb-6 block"
            style={{ animationDelay: '0.15s' }}
          >
            5 years · React Native · Pune, India
          </span>

          <h1 className="text-white leading-[0.92] mb-6">
            <span
              className="hero-anim hero-reveal-anim block font-display italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Apps that
            </span>
            <span
              className="hero-anim hero-reveal-anim block font-black text-5xl sm:text-7xl md:text-8xl text-brand-accent -mt-1"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              ship.
            </span>
          </h1>

          <p
            className="hero-anim hero-fade-anim text-brand-muted text-base sm:text-lg leading-relaxed max-w-lg"
            style={{ animationDelay: '0.55s' }}
          >
            I build React Native apps from zero to store — clean architecture, offline-first, and fast.
            Five years, six live apps, two platforms.
          </p>

          <div
            className="hero-anim hero-fade-anim flex flex-wrap gap-4 mt-10"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href="#work"
              className="bg-brand-accent hover:bg-brand-accent2 text-black font-semibold px-7 py-3 rounded-full text-sm transition-all hover:scale-[1.03] active:scale-95 hover:shadow-glow-lg"
            >
              See My Work
            </a>
            <a
              href="#about"
              className="border border-white/10 hover:border-brand-accent/50 bg-white/5 backdrop-blur-sm text-brand-muted hover:text-white font-medium px-7 py-3 rounded-full text-sm transition-all"
            >
              About Me
            </a>
          </div>

          <div
            className="hero-anim hero-fade-anim flex gap-8 sm:gap-12 mt-16 border-t border-white/10 pt-10"
            style={{ animationDelay: '0.85s' }}
          >
            {[
              { value: '6+', label: 'Live Apps' },
              { value: '2', label: 'Platforms' },
              { value: '5', label: 'Years Experience' },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono text-3xl font-bold text-white">{s.value}</span>
                <span className="text-xs text-brand-muted tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-10 xl:right-16 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 w-[240px] lg:flex">
        {heroProjects.map((p, i) => (
          <div
            key={p.title}
            className="hero-anim hero-fade-anim"
            style={{ animationDelay: `${0.9 + i * 0.12}s` }}
          >
            <AppMiniCard
              icon={p.icon}
              iconUrl={p.iconUrl}
              title={p.heroTitle ?? p.title}
              meta={p.heroMeta ?? p.label}
              badge={p.heroBadge ?? 'Live'}
              href={p.links[0]?.href}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
