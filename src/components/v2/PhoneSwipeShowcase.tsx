'use client'

import { useRef, useState } from 'react'
import PhoneFrame from './PhoneFrame'

interface PhoneSwipeShowcaseProps {
  images: [string, string, string]
  alt: string
}

const SWIPE_THRESHOLD = 48
const LOCK_THRESHOLD = 10

export default function PhoneSwipeShowcase({ images, alt }: PhoneSwipeShowcaseProps) {
  const [active, setActive] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const touchRef = useRef<{ x: number; y: number; locked: 'horizontal' | 'vertical' | null }>({
    x: 0,
    y: 0,
    locked: null,
  })

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(index, images.length - 1)))
    setDragOffset(0)
    setIsDragging(false)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      locked: null,
    }
    setIsDragging(false)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = touchRef.current
    const dx = e.touches[0].clientX - touch.x
    const dy = e.touches[0].clientY - touch.y

    if (touch.locked === null) {
      if (Math.abs(dx) < LOCK_THRESHOLD && Math.abs(dy) < LOCK_THRESHOLD) return
      touch.locked = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical'
    }

    if (touch.locked === 'vertical') return

    setIsDragging(true)
    setDragOffset(dx)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = touchRef.current

    if (touch.locked === 'horizontal') {
      const dx = e.changedTouches[0].clientX - touch.x
      if (dx < -SWIPE_THRESHOLD) goTo(active + 1)
      else if (dx > SWIPE_THRESHOLD) goTo(active - 1)
      else {
        setDragOffset(0)
        setIsDragging(false)
      }
    }

    touchRef.current = { x: 0, y: 0, locked: null }
  }

  const onTouchCancel = () => {
    setDragOffset(0)
    setIsDragging(false)
    touchRef.current = { x: 0, y: 0, locked: null }
  }

  return (
    <div className="w-full">
      <div
        className="touch-pan-y overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
        aria-roledescription="carousel"
        aria-label={`${alt} screenshots`}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${active * 100}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.32s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="flex w-full flex-shrink-0 items-center justify-center px-1"
              aria-hidden={active !== i}
            >
              <PhoneFrame
                src={src}
                alt={`${alt} screen ${i + 1}`}
                widthStyle="min(100%, 240px)"
                premium
                className="mx-auto pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
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
        Tap thumbnails or swipe sideways
      </p>
    </div>
  )
}
