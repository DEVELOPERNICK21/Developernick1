'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Magnet from './Magnet'
import ScrollModel from './ScrollModel'
import { AVATAR_URL, HERO_FLOATING_MODELS } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -180])
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.82])
  const avatarRotate = useTransform(scrollYProgress, [0, 1], [0, -8])
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col overflow-x-clip bg-brand-bg"
    >
      {HERO_FLOATING_MODELS.map(model => (
        <ScrollModel key={model.alt} {...model} containerRef={sectionRef} />
      ))}

      <FadeIn delay={0} y={-20}>
        <nav className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-brand-light transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <motion.div className="overflow-hidden" style={{ y: headingY, opacity: headingOpacity }}>
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[14vw] md:-mt-5 md:text-[15vw] lg:text-[16vw]">
            Hi, i&apos;m nick
          </h1>
        </FadeIn>
      </motion.div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-brand-light sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a react native developer driven by shipping apps that work offline
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0"
      >
        <motion.div
          className="pointer-events-auto"
          style={{ y: avatarY, scale: avatarScale, rotate: avatarRotate, willChange: 'transform' }}
        >
          <Magnet padding={150} strength={3}>
            <Image
              src={AVATAR_URL}
              alt="Nick Kubde"
              width={520}
              height={640}
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] drop-shadow-[0_20px_40px_rgba(0,229,255,0.15)]"
              priority
            />
          </Magnet>
        </motion.div>
      </FadeIn>
    </section>
  )
}
