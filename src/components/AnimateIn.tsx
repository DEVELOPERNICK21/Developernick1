'use client'

import { useInView } from '@/hooks/useInView'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateIn({ children, className = '', delay = 0 }: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`section-reveal ${inView ? 'section-reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
