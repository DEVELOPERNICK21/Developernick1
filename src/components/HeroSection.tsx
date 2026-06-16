'use client'
import AppMiniCard from './AppMiniCard'
import { heroProjects } from '@/lib/projects'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 pt-24 pb-16 bg-brand-bg overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <span
          className="anim-fade-up font-mono text-xs text-brand-accent tracking-[0.2em] uppercase mb-6 block"
          style={{ animationDelay: '0s' }}
        >
          5 years · React Native · Pune, India
        </span>

        <h1 className="text-white leading-[0.92] mb-6">
          <span
            className="anim-fade-up block text-6xl sm:text-7xl md:text-8xl font-black"
            style={{ letterSpacing: '-0.04em', animationDelay: '0.1s' }}
          >
            Apps that
          </span>
          <span
            className="anim-fade-up block text-6xl sm:text-7xl md:text-8xl font-black text-brand-accent"
            style={{ letterSpacing: '-0.04em', animationDelay: '0.2s' }}
          >
            ship.
          </span>
        </h1>

        <p
          className="anim-fade-up text-brand-muted text-base sm:text-lg leading-relaxed max-w-lg"
          style={{ animationDelay: '0.35s' }}
        >
          I build React Native apps from zero to store — clean architecture, offline-first, and fast. Five years, six live apps, two platforms.
        </p>

        <div
          className="anim-fade-up flex flex-wrap gap-4 mt-10"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#work"
            className="bg-brand-accent hover:bg-brand-accent2 text-black font-semibold px-7 py-3 rounded-full text-sm transition-all hover:scale-[1.03] active:scale-95 hover:shadow-glow-lg"
          >
            See My Work
          </a>
          <a
            href="#"
            className="border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-white font-medium px-7 py-3 rounded-full text-sm transition-all"
          >
            Download CV
          </a>
        </div>

        <div
          className="anim-fade-in flex gap-8 sm:gap-12 mt-16 border-t border-brand-border pt-10"
          style={{ animationDelay: '0.7s' }}
        >
          {[
            { value: '6+', label: 'Live Apps' },
            { value: '2',  label: 'Platforms' },
            { value: '5',  label: 'Years Experience' },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-brand-muted tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-3 w-[240px] hidden lg:flex">
        {heroProjects.map(p => (
          <AppMiniCard
            key={p.title}
            icon={p.icon}
            iconUrl={p.iconUrl}
            title={p.heroTitle ?? p.title}
            meta={p.heroMeta ?? p.label}
            badge={p.heroBadge ?? 'Live'}
            href={p.links[0]?.href}
          />
        ))}
      </div>
    </section>
  )
}
