'use client'

import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import AnimateIn from './AnimateIn'

export default function WorkSection() {
  return (
    <section id="work" className="bg-brand-bg border-t border-white/10 px-6 py-32 sm:px-10 md:px-16 md:py-40">
      <AnimateIn>
        <div className="mb-14 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-2">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
              What I&apos;ve built
            </h2>
          </div>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <AnimateIn key={p.title} delay={i * 80} className={p.featured ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} variant="classic" />
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
