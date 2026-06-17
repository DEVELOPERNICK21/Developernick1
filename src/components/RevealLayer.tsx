'use client'

import { useEffect, useRef } from 'react'

interface RevealLayerProps {
  cursorX: number
  cursorY: number
  radius: number
  enabled: boolean
}

export default function RevealLayer({ cursorX, cursorY, radius, enabled }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current
    const reveal = revealRef.current
    if (!canvas || !reveal) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current
    const reveal = revealRef.current
    if (!canvas || !reveal) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, radius)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.4, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)')
    gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)')
    gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(cursorX, cursorY, radius, 0, Math.PI * 2)
    ctx.fill()

    const maskUrl = canvas.toDataURL()
    reveal.style.maskImage = `url(${maskUrl})`
    reveal.style.webkitMaskImage = `url(${maskUrl})`
    reveal.style.maskSize = '100% 100%'
    reveal.style.webkitMaskSize = '100% 100%'
  }, [cursorX, cursorY, radius, enabled])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ display: 'none' }} aria-hidden />
      <div
        ref={revealRef}
        className={`absolute inset-0 z-20 pointer-events-none hero-reveal-bg ${enabled ? '' : 'hero-reveal-static'}`}
        aria-hidden
      />
    </>
  )
}
