'use client'

import { Smartphone, Code2, Layers, Cpu } from 'lucide-react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'
import TerminalCard from '@/components/TerminalCard'

const DECORATIONS = [
  { Icon: Smartphone, className: 'absolute top-[6%] left-[3%] md:left-[6%]', delay: 0.1, x: -60, color: '#00E5FF' },
  { Icon: Code2, className: 'absolute bottom-[10%] left-[5%] md:left-[10%]', delay: 0.25, x: -60, color: '#00B8D4' },
  { Icon: Layers, className: 'absolute top-[6%] right-[3%] md:right-[6%]', delay: 0.15, x: 60, color: '#00E5FF' },
  { Icon: Cpu, className: 'absolute bottom-[10%] right-[5%] md:right-[10%]', delay: 0.3, x: 60, color: '#00B8D4' },
]

const ABOUT_TEXT =
  "Five years building React Native apps — from architecture to App Store submission. I've shipped apps for events, time tracking, and Singapore-based consumer products. Based in Pune, India. Two platforms, one focus: build things that ship."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {DECORATIONS.map(({ Icon, className, delay, x, color }) => (
        <FadeIn key={className} delay={delay} x={x} y={0} duration={0.9} className={className}>
          <Icon
            className="opacity-80"
            style={{ width: 'clamp(80px, 12vw, 160px)', height: 'clamp(80px, 12vw, 160px)', color }}
            strokeWidth={1}
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
          <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:flex-1">
            <AnimatedText text={ABOUT_TEXT} />
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
