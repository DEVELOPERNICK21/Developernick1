import { ExternalLink } from 'lucide-react'
import { Project } from '@/lib/projects'
import DoubleBezel from '@/components/classic/DoubleBezel'
import AppIcon from './AppIcon'

export default function ProjectCard({
  project,
  variant = 'default',
}: {
  project: Project
  variant?: 'default' | 'classic'
}) {
  const { label, title, description, tags, links, featured, icon, iconUrl } = project
  const primaryLink = links[0]?.href

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label={`Open ${title}`}
          >
            <AppIcon iconUrl={iconUrl} fallback={icon} alt={title} size={featured ? 'lg' : 'md'} />
          </a>
        ) : (
          <AppIcon iconUrl={iconUrl} fallback={icon} alt={title} size={featured ? 'lg' : 'md'} />
        )}
        {featured && (
          <span className="font-mono text-[10px] text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full tracking-widest uppercase">
            Featured
          </span>
        )}
      </div>

      <span className="font-mono text-[10px] text-brand-muted tracking-widest uppercase">{label}</span>

      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ letterSpacing: '-0.02em' }}>
        {title}
      </h3>

      <p className="text-brand-muted text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(t => (
          <span
            key={t}
            className="font-mono text-[10px] text-brand-muted bg-brand-tag border border-brand-border px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-brand-accent hover:text-white transition-colors font-medium underline-offset-2 hover:underline"
          >
            {l.label} <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </>
  )

  if (variant === 'classic') {
    return (
      <DoubleBezel
        className="h-full"
        innerClassName="group h-full transition-shadow duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-glow"
      >
        <article className="flex h-full flex-col gap-5 border-0 bg-transparent p-6 sm:p-8">
          {content}
        </article>
      </DoubleBezel>
    )
  }

  return (
    <article className={`
      group bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8
      flex flex-col gap-5
      hover:border-brand-accent/40 hover:shadow-glow transition-all duration-300
    `}>
      {content}
    </article>
  )
}
