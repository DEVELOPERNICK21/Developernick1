'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Project } from '@/lib/projects'
import AppIcon from '@/components/AppIcon'
import StoreLinkButton from './StoreLinkButton'

const cardRadius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

interface StickyProjectCardProps {
  project: Project
  index: number
  total: number
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

  return (
    <div ref={containerRef} className="relative h-[85vh]">
      <div className="sticky" style={{ top: `calc(6rem + ${index * 28}px)` }}>
        <motion.div
          style={{ scale }}
          className={`border-2 border-brand-accent/40 bg-brand-bg p-4 sm:p-6 md:p-8 ${cardRadius}`}
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <span
                className="font-black leading-none text-brand-light"
                style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <AppIcon
                iconUrl={project.iconUrl}
                fallback={project.icon}
                alt={project.title}
                size="xl"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-brand-accent">
                  {project.label}
                </p>
                <h3
                  className="font-medium uppercase text-brand-light"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
            {primaryLink && <StoreLinkButton href={primaryLink} />}
          </div>

          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 font-mono text-[10px] text-brand-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-brand-accent underline-offset-2 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
