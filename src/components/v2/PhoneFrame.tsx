'use client'

import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
  /** Tailwind height class, e.g. h-[240px] */
  heightClass?: string
  /** CSS height value, e.g. clamp(240px, 56vw, 380px) — preferred for responsive sizing */
  heightStyle?: string
  /** CSS width value — when set, height follows aspect ratio (useful for full-width mobile mockups) */
  widthStyle?: string
  /** Premium metallic frame for project showcase */
  premium?: boolean
}

export default function PhoneFrame({
  src,
  alt,
  className = '',
  heightClass = 'h-[220px]',
  heightStyle,
  widthStyle,
  premium = false,
}: PhoneFrameProps) {
  const sizeStyle = {
    aspectRatio: '9 / 19.5' as const,
    ...(widthStyle
      ? { width: widthStyle, height: 'auto' as const }
      : heightStyle
        ? { height: heightStyle }
        : {}),
  }
  const sizeClass = heightStyle || widthStyle ? '' : heightClass

  if (!premium) {
    return (
      <div
        className={`relative flex-shrink-0 ${sizeClass} ${className}`}
        style={sizeStyle}
      >
        <div className="absolute inset-0 rounded-[1.6rem] border-[3px] border-[#525252] bg-gradient-to-b from-[#2e2e2e] to-[#141414] shadow-[0_24px_60px_rgba(0,0,0,0.6)] sm:rounded-[1.85rem] sm:border-4">
          <div className="absolute left-1/2 top-[7px] z-10 h-[9px] w-[32%] -translate-x-1/2 rounded-full bg-black sm:top-2 sm:h-[10px]" />
          <div className="absolute inset-[5px] overflow-hidden rounded-[1.2rem] bg-black sm:inset-[6px] sm:rounded-[1.45rem]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-top"
              sizes="220px"
              unoptimized
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`phone-frame-premium relative flex-shrink-0 ${sizeClass} ${className}`}
      style={sizeStyle}
    >
      {/* ground glow */}
      <div
        className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-5 w-[75%] -translate-x-1/2 rounded-full bg-brand-accent/25 blur-xl"
        aria-hidden
      />

      {/* metallic outer shell */}
      <div className="phone-frame-premium-shell absolute inset-0 rounded-[1.65rem] p-[3px] sm:rounded-[1.9rem] sm:p-1">
        <div className="relative h-full w-full rounded-[1.45rem] bg-gradient-to-b from-[#1a1a1c] via-[#0d0d0f] to-[#050506] p-[5px] sm:rounded-[1.7rem] sm:p-[6px]">
          {/* side highlight */}
          <div
            className="pointer-events-none absolute inset-y-6 left-[4px] z-20 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/50 to-transparent"
            aria-hidden
          />
          {/* top rim shine */}
          <div
            className="pointer-events-none absolute inset-x-4 top-[5px] z-20 h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
            aria-hidden
          />

          {/* dynamic island */}
          <div className="absolute left-1/2 top-[9px] z-30 h-[10px] w-[34%] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] sm:top-[10px] sm:h-[11px]" />

          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-black sm:rounded-[1.35rem]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-top"
              sizes={widthStyle ? '(max-width: 640px) 280px, 380px' : '(max-width: 640px) 280px, 380px'}
              unoptimized
            />
            {/* glass reflection */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  )
}
