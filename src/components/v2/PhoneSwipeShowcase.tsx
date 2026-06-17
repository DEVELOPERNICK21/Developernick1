'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import PhoneFrame from './PhoneFrame'

interface PhoneSwipeShowcaseProps {
  images: [string, string, string]
  alt: string
}

export default function PhoneSwipeShowcase({ images, alt }: PhoneSwipeShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const syncActiveIndex = useCallback(() => {
    const track = trackRef.current
    if (!track || track.clientWidth === 0) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActive(Math.min(Math.max(index, 0), images.length - 1))
  }, [images.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    syncActiveIndex()
    track.addEventListener('scroll', syncActiveIndex, { passive: true })
    return () => track.removeEventListener('scroll', syncActiveIndex)
  }, [syncActiveIndex])

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
    setActive(index)
  }

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label={`${alt} screenshots`}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="flex w-full flex-shrink-0 snap-center snap-always items-center justify-center px-1"
            aria-hidden={active !== i}
          >
            <PhoneFrame
              src={src}
              alt={`${alt} screen ${i + 1}`}
              widthStyle="min(100%, 240px)"
              premium
              className="mx-auto"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Screenshot navigation">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Screen ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-border hover:bg-brand-muted'
            }`}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2.5">
        {images.map((src, i) => (
          <button
            key={`thumb-${src}`}
            type="button"
            aria-label={`Show screen ${i + 1}`}
            onClick={() => goTo(i)}
            className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              active === i
                ? 'border-brand-accent opacity-100 shadow-[0_0_16px_rgba(0,229,255,0.25)]'
                : 'border-brand-border opacity-55 hover:opacity-80'
            }`}
            style={{ width: 44, height: 76 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover object-top"
              draggable={false}
            />
          </button>
        ))}
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-muted">
        Swipe to explore
      </p>
    </div>
  )
}
