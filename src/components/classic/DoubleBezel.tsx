import { ReactNode } from 'react'

interface DoubleBezelProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export default function DoubleBezel({
  children,
  className = '',
  innerClassName = '',
}: DoubleBezelProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.03] p-1.5 ${className}`}
    >
      <div
        className={`rounded-[calc(2rem-0.375rem)] bg-classic-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
