'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '@/lib/projects'
import type { Project } from '@/lib/projects'
import PhoneFrame from './PhoneFrame'

const withPreviews = projects.filter(p => p.previewImages?.marquee)

const ROW_COUNT = 5
const REPEAT_COUNT = 6

function MarqueeRow({
  items,
  direction,
  offset,
  rowIndex,
}: {
  items: Project[]
  direction: 'right' | 'left'
  offset: number
  rowIndex: number
}) {
  const repeated = Array.from({ length: REPEAT_COUNT }, () => items).flat()
  const stagger = rowIndex * 90
  const base = offset + stagger
  const translateX = direction === 'right' ? base - 60 : -(base - 60)

  return (
    <div
      className="flex w-max items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-5"
      style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
    >
      {repeated.map((project, i) => {
        const href = project.links[0]?.href ?? '#projects'
        const src = project.previewImages!.marquee
        const name = project.heroTitle ?? project.title.split('—')[0].trim()

        return (
          <a
            key={`${project.title}-${rowIndex}-${i}`}
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative flex-shrink-0 transition-transform duration-500 ease-out hover:z-10 hover:scale-[1.05]"
          >
            <PhoneFrame
              src={src}
              alt={name}
              heightStyle="clamp(175px, 19vw, 265px)"
              className="drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            />
            <span className="pointer-events-none absolute -bottom-4 left-1/2 w-max -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-muted opacity-0 transition-opacity duration-300 group-hover:text-brand-accent group-hover:opacity-100 sm:text-[10px]">
              {name}
            </span>
          </a>
        )
      })}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  const rows = Array.from({ length: ROW_COUNT }, (_, i) => ({
    direction: (i % 2 === 0 ? 'right' : 'left') as 'right' | 'left',
    rowIndex: i,
  }))

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.38
      setOffset(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (withPreviews.length === 0) return null

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-brand-bg pb-16 pt-24 sm:pb-20 sm:pt-32 md:pb-24 md:pt-40"
    >
      <p className="relative z-10 mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-brand-accent sm:mb-6">
        Apps shipped
      </p>

      <div className="relative w-full overflow-hidden">
        {/* subtle glow behind the wall */}
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
                  items={withPreviews}
                  direction={row.direction}
                  offset={offset}
                  rowIndex={row.rowIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
