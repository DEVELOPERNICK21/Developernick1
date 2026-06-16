import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

const sizeMap = {
  sm: { box: 36, icon: 16 },
  md: { box: 44, icon: 20 },
  lg: { box: 56, icon: 24 },
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

  if (iconUrl) {
    return (
      <div
        className={`relative flex-shrink-0 overflow-hidden rounded-[22%] border border-brand-border bg-brand-tag shadow-sm transition-all duration-300 group-hover:border-brand-accent/50 group-hover:shadow-glow ${className}`}
        style={{ width: box, height: box }}
      >
        <Image
          src={iconUrl}
          alt={alt}
          width={box}
          height={box}
          className="h-full w-full object-cover"
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
