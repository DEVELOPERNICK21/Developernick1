'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '@/lib/projects'
import type { Project } from '@/lib/projects'

const withPreviews = projects.filter(p => p.previewImages?.marquee)

function getDensity() {
  if (typeof window === 'undefined') return { rows: 5, repeats: 4 }
  return window.matchMedia('(max-width: 767px)').matches
    ? { rows: 3, repeats: 3 }
    : { rows: 5, repeats: 4 }
}

function getScrollOffset(section: HTMLElement) {
  const rect = section.getBoundingClientRect()
  return (window.innerHeight - rect.top) * 0.38
}

const MarqueePhone = memo(function MarqueePhone({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="marquee-phone relative flex-shrink-0"
      style={{ height: 'clamp(175px, 19vw, 265px)', aspectRatio: '9 / 19.5' }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] border-2 border-[#3a3a3a] bg-[#121212] shadow-[0_12px_28px_rgba(0,0,0,0.5)]">
        <div className="absolute left-1/2 top-[6px] z-10 h-[8px] w-[30%] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-[4px] overflow-hidden rounded-[1.1rem] bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-contain object-top"
          />
        </div>
      </div>
    </div>
  )
})

const MarqueeRow = memo(function MarqueeRow({
  items,
  direction,
  rowIndex,
  offset,
}: {
  items: Project[]
  direction: 'right' | 'left'
  rowIndex: number
  offset: number
}) {
  const stagger = rowIndex * 90
  const base = offset + stagger
  const translateX = direction === 'right' ? base - 60 : -(base - 60)

  return (
    <motion.div
      className="marquee-row flex w-max items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-5"
      style={{ x: translateX, willChange: 'transform' }}
    >
      {items.map((project, i) => {
        const href = project.links[0]?.href ?? '#projects'
        const src = project.previewImages!.marquee
        const name = project.heroTitle ?? project.title.split('—')[0].trim()

        return (
          <a
            key={`${project.title}-${rowIndex}-${i}`}
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="relative flex-shrink-0"
          >
            <MarqueePhone src={src} alt={name} />
          </a>
        )
      })}
    </motion.div>
  )
})

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const [density, setDensity] = useState({ rows: 5, repeats: 4 })

  const { scrollY } = useScroll()

  const rows = useMemo(
    () =>
      Array.from({ length: density.rows }, (_, i) => ({
        direction: (i % 2 === 0 ? 'right' : 'left') as 'right' | 'left',
        rowIndex: i,
      })),
    [density.rows],
  )

  const repeatedItems = useMemo(
    () => Array.from({ length: density.repeats }, () => withPreviews).flat(),
    [density.repeats],
  )

  const updateOffset = () => {
    const section = sectionRef.current
    if (!section) return
    setOffset(getScrollOffset(section))
  }

  useMotionValueEvent(scrollY, 'change', () => {
    updateOffset()
  })

  useEffect(() => {
    setDensity(getDensity())
    updateOffset()

    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setDensity(getDensity())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  if (withPreviews.length === 0) return null

  return (
    <section
      ref={sectionRef}
      className="marquee-section overflow-hidden border-t border-white/10 bg-classic-bg pb-16 pt-24 sm:pb-20 sm:pt-32 md:pb-24 md:pt-40"
    >
      <p className="relative z-10 mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-brand-accent sm:mb-6">
        Apps shipped
      </p>

      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,229,255,0.06),transparent)]"
          aria-hidden
        />

        <div className="relative flex min-h-[440px] items-center justify-center py-8 sm:min-h-[500px] sm:py-10 md:min-h-[560px] lg:min-h-[620px] lg:py-12">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="marquee-diagonal-lane flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-5">
              {rows.map(row => (
                <MarqueeRow
                  key={row.rowIndex}
                  items={repeatedItems}
                  direction={row.direction}
                  rowIndex={row.rowIndex}
                  offset={offset}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
