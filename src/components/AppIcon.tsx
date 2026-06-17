'use client'

import Image from 'next/image'
import { useState } from 'react'
import { LucideIcon } from 'lucide-react'

const sizeMap = {
  sm: { box: 36, icon: 16 },
  md: { box: 44, icon: 20 },
  lg: { box: 56, icon: 24 },
  xl: { box: 120, icon: 32 },
}

interface AppIconProps {
  iconUrl?: string
  fallback: LucideIcon
  alt: string
  size?: keyof typeof sizeMap
  className?: string
}

export default function AppIcon({
  iconUrl,
  fallback: Fallback,
  alt,
  size = 'md',
  className = '',
}: AppIconProps) {
  const { box, icon } = sizeMap[size]
  const [failed, setFailed] = useState(false)

  if (iconUrl && !failed) {
    return (
      <div
        className={`relative flex-shrink-0 overflow-hidden rounded-[22%] border border-brand-border bg-brand-surface shadow-sm transition-all duration-300 group-hover:border-brand-accent/50 group-hover:shadow-glow ${className}`}
        style={{ width: box, height: box }}
      >
        <Image
          src={iconUrl}
          alt={alt}
          width={box}
          height={box}
          className="h-full w-full object-contain p-1"
          unoptimized
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-accent/10 transition-all duration-300 group-hover:border-brand-accent/50 ${className}`}
      style={{ width: box, height: box }}
    >
      <Fallback style={{ width: icon, height: icon }} className="text-brand-accent" />
    </div>
  )
}
