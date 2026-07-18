'use client'

import FadeIn from './FadeIn'
import DoubleBezel from '@/components/classic/DoubleBezel'
import { services } from '@/lib/services'

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] border-t border-white/10 bg-classic-bg px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
      >
        Skills
      </h2>

      <div className="mx-auto max-w-5xl space-y-4">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <DoubleBezel className="h-full" innerClassName="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <span
                  className="flex-shrink-0 font-black text-brand-accent"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 96px)', lineHeight: 1 }}
                >
                  {service.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-medium uppercase text-white"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="max-w-2xl font-light leading-relaxed text-brand-muted"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </DoubleBezel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
