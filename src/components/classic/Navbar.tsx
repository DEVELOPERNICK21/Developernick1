'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import IslandButton from '@/components/classic/IslandButton'
import ClassicLogo from './Logo'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
]

export default function ClassicNavbar() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus()
      wasOpenRef.current = true
    } else if (wasOpenRef.current) {
      menuButtonRef.current?.focus()
      wasOpenRef.current = false
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const mq = window.matchMedia('(min-width: 768px)')
    const handleViewportChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setOpen(false)
    }

    handleViewportChange(mq)
    mq.addEventListener('change', handleViewportChange)
    return () => mq.removeEventListener('change', handleViewportChange)
  }, [open])

  useEffect(() => {
    if (!open || !overlayRef.current) return

    const overlay = overlayRef.current

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }

      if (e.key !== 'Tab') return

      const focusable = Array.from(
        overlay.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => el.tabIndex !== -1)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <nav className="pointer-events-none fixed left-0 right-0 top-0 z-[100] flex justify-center px-4 pt-5">
      <div
        ref={overlayRef}
        className={`pointer-events-auto fixed inset-0 bg-black/80 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-7 px-6 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`text-4xl font-semibold tracking-tight text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <IslandButton
            href="mailto:developernick1@gmail.com"
            className={`mt-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            Hire Me
          </IslandButton>
        </div>
      </div>

      <div className="pointer-events-auto relative z-10 flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-brand-bg/70 px-4 py-3 backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <ClassicLogo size={36} />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none">Nick Kubde</span>
            <span className="font-mono text-[10px] text-brand-accent tracking-widest uppercase hidden sm:block">
              React Native Dev
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-brand-muted transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <IslandButton
            href="mailto:developernick1@gmail.com"
            className="hidden py-2 pl-5 pr-2 md:inline-flex"
          >
            Hire Me
          </IslandButton>
          <button
            ref={menuButtonRef}
            onClick={() => setOpen(o => !o)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-brand-muted transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
