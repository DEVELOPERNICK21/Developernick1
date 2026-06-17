'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  tilt?: number
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  tilt = 0.06,
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const inRange =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding

      if (inRange) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        setActive(true)
        setPosition({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        })
      } else {
        setActive(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(1200px) translate3d(${position.x}px, ${position.y}px, 0) rotateX(${-position.y * tilt}deg) rotateY(${position.x * tilt}deg)`,
        transition: active ? 'transform 0.25s ease-out' : 'transform 0.7s ease-in-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
