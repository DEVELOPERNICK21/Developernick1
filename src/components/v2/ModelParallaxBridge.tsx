'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ModelParallaxBridge() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 1, 0.15])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-24 items-center justify-center overflow-hidden bg-brand-bg sm:h-32"
      aria-hidden
    >
      <motion.div
        className="absolute h-24 w-24 rounded-full bg-brand-accent/20 blur-3xl"
        style={{ opacity: glowOpacity }}
      />
      <motion.div
        className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"
        style={{ scaleX: lineScale }}
      />
    </section>
  )
}
