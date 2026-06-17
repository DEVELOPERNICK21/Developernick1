'use client'

import { useRef } from 'react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'
import ScrollModel from './ScrollModel'
import TerminalCard from '@/components/TerminalCard'
import { ABOUT_MODELS } from '@/lib/constants'

const ABOUT_TEXT =
  "Five years building React Native apps — from architecture to App Store submission. I've shipped apps for events, time tracking, and Singapore-based consumer products. Based in Pune, India. Two platforms, one focus: build things that ship."

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {ABOUT_MODELS.map(model => (
        <FadeIn
          key={model.alt}
          delay={model.delay ?? 0}
          x={model.x ?? 0}
          y={0}
          duration={0.9}
          className={model.className}
        >
          <ScrollModel
            src={model.src}
            alt={model.alt}
            className="w-full"
            parallaxY={model.parallaxY}
            parallaxRotate={model.parallaxRotate}
            containerRef={sectionRef}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          <div className="flex w-full max-w-[560px] flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:max-w-none lg:flex-1">
            <AnimatedText text={ABOUT_TEXT} className="w-full" />
            <div className="flex flex-wrap justify-center gap-4">
              <ContactButton label="Get in touch" />
              <a
                href="https://www.instagram.com/developernick1/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brand-accent/40 px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-light transition-colors hover:bg-brand-accent/10 sm:text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          <FadeIn delay={0.2} y={30} className="w-full max-w-md lg:flex-1">
            <TerminalCard />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
