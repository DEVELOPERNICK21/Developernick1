import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

interface IslandButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export default function IslandButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: IslandButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'bg-brand-accent text-black hover:bg-brand-accent2 hover:shadow-glow-lg'
      : 'border border-white/10 bg-white/5 text-brand-muted hover:border-brand-accent/50 hover:text-white'

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 dark:bg-white/10">
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
    </a>
  )
}
