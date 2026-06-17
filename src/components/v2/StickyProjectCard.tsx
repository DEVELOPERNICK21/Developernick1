'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Project } from '@/lib/projects'
import LiveProjectButton from './LiveProjectButton'
import PhoneFan from './PhoneFan'

const cardRadius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

interface StickyProjectCardProps {
  project: Project
  index: number
  total: number
}

function getCategory(label: string) {
  return label.split('·')[0]?.trim() ?? label
}

function getDisplayName(project: Project) {
  return project.heroTitle ?? project.title.split('—')[0].trim()
}

export default function StickyProjectCard({ project, index, total }: StickyProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const primaryLink = project.links[0]?.href
  const previews = project.previewImages?.sticky
  const name = getDisplayName(project)

  return (
    <div
      ref={containerRef}
      className="relative mb-14 last:mb-0 sm:mb-0 sm:h-[95vh] sm:min-h-[680px]"
    >
      <div
        className="sm:sticky"
        style={{ top: `calc(6rem + ${index * 28}px)`, zIndex: index + 1 }}
      >
        <motion.div
          style={{ scale: isDesktop ? scale : 1 }}
          className={`border-2 border-[#D7E2EA] bg-brand-bg p-4 sm:p-6 md:p-8 ${cardRadius}`}
        >
          <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="shrink-0 font-black leading-none text-brand-light"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  {getCategory(project.label)}
                </p>
                <h3
                  className="font-medium uppercase text-brand-light"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                >
                  {name}
                </h3>
              </div>
            </div>
            {primaryLink && (
              <div className="shrink-0 sm:ml-auto">
                <LiveProjectButton href={primaryLink} />
              </div>
            )}
          </div>

          {previews && <PhoneFan images={previews} alt={name} />}

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-muted sm:mt-6 md:text-base">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 font-mono text-[10px] text-brand-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
