'use client'

import FadeIn from './FadeIn'
import Logo from '@/components/Logo'

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative bg-brand-bg px-5 py-24 text-center sm:px-8 sm:py-32 md:px-10 md:py-40"
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
            <a
              href="mailto:nikhilkubde21@gmail.com"
              className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-black transition-transform hover:scale-[1.03] active:scale-95 sm:px-10 sm:py-3.5 sm:text-sm"
              style={{
                background:
                  'linear-gradient(123deg, #000428 7%, #00E5FF 37%, #00B8D4 72%, #004e64 100%)',
                boxShadow:
                  '0px 4px 4px rgba(0, 229, 255, 0.25), 4px 4px 12px rgba(0, 184, 212, 0.4) inset',
                outline: '2px solid rgba(0, 229, 255, 0.6)',
                outlineOffset: '-3px',
              }}
            >
              nikhilkubde21@gmail.com
            </a>

            <a
              href="https://www.instagram.com/nikhil__kubde"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-brand-accent/40 px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-light transition-colors hover:bg-brand-accent/10 sm:text-sm"
            >
              @nikhil__kubde
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="flex items-center justify-center gap-3 border-t border-brand-border bg-brand-bg py-8">
        <Logo size={20} />
        <span className="text-xs text-brand-muted">Nick Kubde · Developer Nick © 2026</span>
      </footer>
    </>
  )
}
