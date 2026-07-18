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

  const className =
    'rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 flex items-center gap-3 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-glow'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
        {content}
      </a>
    )
  }

  return <div className={`group ${className} cursor-default`}>{content}</div>
}
