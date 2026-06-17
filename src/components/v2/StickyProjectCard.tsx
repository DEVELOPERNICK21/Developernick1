'use client'

import { useRef } from 'react'
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
    <div ref={containerRef} className="relative h-[95vh] min-h-[680px]">
      <div className="sticky" style={{ top: `calc(6rem + ${index * 28}px)` }}>
        <motion.div
          style={{ scale }}
          className={`border-2 border-[#D7E2EA] bg-brand-bg p-4 sm:p-6 md:p-8 ${cardRadius}`}
        >
          <div className="mb-4 flex flex-col gap-5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:gap-8">
              <span
                className="font-black leading-none text-brand-light"
                style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
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
            {primaryLink && <LiveProjectButton href={primaryLink} />}
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
