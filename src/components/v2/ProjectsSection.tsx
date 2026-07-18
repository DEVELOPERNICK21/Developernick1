'use client'

import { projects, stickyProjects } from '@/lib/projects'
import StickyProjectCard from './StickyProjectCard'
import ProjectCard from '@/components/ProjectCard'
import FadeIn from './FadeIn'

const moreProjects = projects.filter(p => !p.stickyFeatured)

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] border-t border-white/10 bg-classic-bg px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
      >
        Projects
      </h2>

      <div className="mx-auto max-w-6xl">
        {stickyProjects.map((project, index) => (
          <StickyProjectCard
            key={project.title}
            project={project}
            index={index}
            total={stickyProjects.length}
          />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl">
          <FadeIn>
            <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-brand-muted">
              More work
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <ProjectCard project={p} variant="classic" />
              </FadeIn>
            ))}
          </div>
        </div>
      )}

    </section>
  )
}
