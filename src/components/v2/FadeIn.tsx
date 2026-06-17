'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: ElementType
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}: FadeInProps) {
  const reduced = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x: reduced ? 0 : x, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={
        reduced
          ? { duration: 0.01, delay: 0 }
          : { delay, duration, ease: [0.25, 0.1, 0.25, 1] }
      }
    >
      {children}
    </Component>
  )
}
