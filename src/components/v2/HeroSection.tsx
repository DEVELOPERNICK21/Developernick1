'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Magnet from './Magnet'
import ScrollModel from './ScrollModel'
import { AVATAR_URL, HERO_FLOATING_MODELS } from '@/lib/constants'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const activeSection = useActiveSection(['projects', 'skills', 'about', 'contact'])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.88])
  const avatarRotate = useTransform(scrollYProgress, [0, 1], [0, -6])
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.12])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100dvh] min-h-[640px] flex-col overflow-x-clip overflow-y-visible bg-brand-bg"
    >
      <div className="hero-avatar-stage absolute inset-0 z-0" aria-hidden />

      {HERO_FLOATING_MODELS.map(model => (
        <ScrollModel key={model.alt} {...model} containerRef={sectionRef} />
      ))}

      <FadeIn delay={0} y={-20}>
        <nav className="relative z-40 flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] font-medium uppercase tracking-wider transition-all duration-300 sm:text-sm md:text-lg lg:text-[1.4rem] ${
                  isActive
                    ? 'text-brand-accent opacity-100'
                    : 'text-brand-light opacity-60 hover:opacity-100'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </FadeIn>

      <motion.div
        className="relative z-10 overflow-hidden px-5 pt-2 sm:px-0 sm:pt-0"
        style={{ y: headingY, opacity: headingOpacity }}
      >
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mx-auto mt-2 w-fit text-left font-black uppercase tracking-tight sm:mt-4 sm:w-full sm:whitespace-nowrap sm:text-[14vw] sm:leading-[0.9] md:-mt-2 md:text-[15vw] lg:text-[16vw]">
            <span className="block text-[28vw] leading-[0.82] sm:hidden">Hi,</span>
            <span className="block text-[36vw] leading-[0.82] sm:hidden">i&apos;m nick</span>
            <span className="hidden sm:inline">Hi, i&apos;m nick</span>
          </h1>
        </FadeIn>
      </motion.div>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center"
      >
        <motion.div
          className="pointer-events-auto relative flex justify-center"
          style={{ y: avatarY, scale: avatarScale, rotate: avatarRotate, willChange: 'transform' }}
        >
          <div className="hero-avatar-float relative flex justify-center">
            <div
              className="hero-avatar-glow absolute left-1/2 top-[38%] z-0 h-[55%] w-[85%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            <div
              className="hero-avatar-shadow absolute bottom-[2%] left-1/2 z-0 h-10 w-[72%] -translate-x-1/2 sm:bottom-[4%] sm:h-14 sm:w-[68%] md:h-16"
              aria-hidden
            />
            <Magnet padding={120} strength={2.5} tilt={0.08} className="relative z-10">
              <Image
                src={AVATAR_URL}
                alt="Nick Kubde"
                width={720}
                height={880}
                className="relative z-10 w-[min(94vw,440px)] sm:w-[min(72vw,500px)] md:w-[min(58vw,560px)] lg:w-[min(50vw,640px)] xl:w-[680px]"
                style={{
                  filter:
                    'drop-shadow(0 0 40px rgba(0, 229, 255, 0.22)) drop-shadow(0 16px 32px rgba(0, 0, 0, 0.5))',
                }}
                priority
              />
            </Magnet>
          </div>
        </motion.div>
      </FadeIn>

      <div className="relative z-30 mt-auto flex items-end justify-between gap-3 px-5 pb-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[130px] font-light uppercase leading-snug tracking-wide text-brand-light sm:max-w-[200px] md:max-w-[280px] lg:max-w-[300px]"
            style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1.5rem)' }}
          >
            a react native developer driven by shipping apps that work offline
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
