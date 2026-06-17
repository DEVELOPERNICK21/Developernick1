'use client'

import { useEffect, useRef, useState } from 'react'

const SPOTLIGHT_R = 260

export function useSpotlight(smoothing = 0.1) {
  const mouse = useRef({ x: -999, y: -999 })
  const smooth = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>()
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * smoothing
      smooth.current.y += (mouse.current.y - smooth.current.y) * smoothing
      setCursorPos({ x: smooth.current.x, y: smooth.current.y })
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [smoothing])

  return { cursorPos, enabled, radius: SPOTLIGHT_R }
}
