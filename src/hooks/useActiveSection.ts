'use client'

import { useEffect, useRef, useState } from 'react'

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  const ratios = useRef<Record<string, number>>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios.current[id] = entry.intersectionRatio

          // Pick the id with the highest current intersection ratio
          let best = ''
          let bestRatio = 0
          for (const [k, v] of Object.entries(ratios.current)) {
            if (v > bestRatio) {
              bestRatio = v
              best = k
            }
          }
          if (best) setActive(best)
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-15% 0px -15% 0px' },
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [ids])

  return active
}
