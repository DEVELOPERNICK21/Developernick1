'use client'

import FadeIn from './FadeIn'
import Logo from '@/components/Logo'
import IslandButton from '@/components/classic/IslandButton'

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative border-t border-white/10 bg-classic-bg px-5 py-24 text-center sm:px-8 sm:py-32 md:px-10 md:py-40"
      >
        <FadeIn y={40}>
          <h2
            className="hero-heading mb-6 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 130px)' }}
          >
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="mx-auto mb-12 max-w-md font-light text-brand-muted"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
          >
            Open to freelance and full-time roles.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap justify-center gap-4">
            <IslandButton href="mailto:nikhilkubde21@gmail.com">
              nikhilkubde21@gmail.com
            </IslandButton>
            <IslandButton
              href="https://www.instagram.com/nikhil__kubde"
              variant="ghost"
              external
            >
              @nikhil__kubde
            </IslandButton>
          </div>
        </FadeIn>
      </section>

      <footer className="flex items-center justify-center gap-3 border-t border-white/10 bg-classic-bg py-10">
        <Logo size={20} />
        <span className="text-xs text-brand-muted">Nick Kubde · Developer Nick © 2026</span>
      </footer>
    </>
  )
}
