'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-brand-border bg-brand-bg/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={36} />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none">Nick Kubde</span>
            <span className="font-mono text-[10px] text-brand-accent tracking-widest uppercase hidden sm:block">React Native Dev</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-brand-muted hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:developernick1@gmail.com"
            className="hidden md:block bg-brand-accent hover:bg-brand-accent2 text-black text-sm font-semibold px-5 py-2 rounded-full transition-all hover:scale-[1.02] active:scale-95 hover:shadow-glow"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden text-brand-muted hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-brand-muted hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:developernick1@gmail.com"
            className="bg-brand-accent text-black text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
