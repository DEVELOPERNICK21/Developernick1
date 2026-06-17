'use client'

import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import AnimateIn from './AnimateIn'

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 sm:px-10 md:px-16 bg-brand-bg border-t border-brand-border">
      <AnimateIn>
        <div className="flex items-end justify-between mb-14 border-b border-brand-border pb-6">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-2">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
              What I&apos;ve built
            </h2>
          </div>
          <span className="font-mono text-sm text-brand-muted hidden sm:block">6 apps shipped</span>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <AnimateIn key={p.title} delay={i * 80} className={p.featured ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} />
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
