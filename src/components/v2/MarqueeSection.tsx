'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/projects'

const withIcons = projects.filter(p => p.iconUrl)

function MarqueeRow({
  items,
  direction,
  offset,
}: {
  items: typeof withIcons
  direction: 'right' | 'left'
  offset: number
}) {
  const doubled = [...items, ...items]
  const translateX = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
    >
      {doubled.map((project, i) => (
        <div
          key={`${project.title}-${i}`}
          className="relative flex h-[200px] w-[200px] flex-shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-4 sm:h-[240px] sm:w-[280px] md:h-[270px] md:w-[320px]"
        >
          <div className="relative h-[70%] w-[70%]">
            <Image
              src={project.iconUrl!}
              alt={project.title}
              fill
              className="object-contain"
              sizes="200px"
              unoptimized
            />
          </div>
          <span className="truncate text-center font-mono text-[10px] uppercase tracking-wider text-brand-muted">
            {project.heroTitle ?? project.title.split('—')[0].trim()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  const row1 = withIcons.slice(0, Math.ceil(withIcons.length / 2))
  const row2 = withIcons.slice(Math.ceil(withIcons.length / 2))

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (withIcons.length === 0) return null

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-brand-bg pb-10 pt-16 sm:pt-24 md:pt-32"
    >
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-brand-accent">
        Apps shipped
      </p>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1.length ? row1 : withIcons} direction="right" offset={offset} />
        <MarqueeRow items={row2.length ? row2 : withIcons} direction="left" offset={offset} />
      </div>
    </section>
  )
}
