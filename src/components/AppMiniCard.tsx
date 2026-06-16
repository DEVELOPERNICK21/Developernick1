import { LucideIcon } from 'lucide-react'
import AppIcon from './AppIcon'

interface Props {
  icon: LucideIcon
  iconUrl?: string
  title: string
  meta: string
  badge: string
  href?: string
}

export default function AppMiniCard({ icon, iconUrl, title, meta, badge, href }: Props) {
  const content = (
    <>
      <AppIcon iconUrl={iconUrl} fallback={icon} alt={title} size="sm" />
      <div className="flex flex-col min-w-0">
        <span className="text-white text-sm font-semibold truncate">{title}</span>
        <span className="font-mono text-[10px] text-brand-muted">{meta}</span>
        <span className="font-mono text-[10px] bg-brand-accent/15 text-brand-accent px-2 py-0.5 rounded-full mt-1 w-fit">{badge}</span>
      </div>
    </>
  )

  const className = 'bg-brand-surface border border-brand-border rounded-2xl p-4 flex items-center gap-3 hover:border-brand-accent/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
        {content}
      </a>
    )
  }

  return <div className={`group ${className} cursor-default`}>{content}</div>
}
