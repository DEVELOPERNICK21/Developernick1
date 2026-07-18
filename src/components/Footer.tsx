import ClassicLogo from '@/components/classic/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg px-6 py-10 sm:px-10 md:px-16">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <ClassicLogo size={28} />
          <span className="text-sm text-brand-muted">Nick Kubde © 2026</span>
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/developernick1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-muted transition-colors duration-700 ease-glass hover:text-white"
          >
            Instagram
          </a>
          <a
            href="mailto:developernick1@gmail.com"
            className="text-sm text-brand-muted transition-colors duration-700 ease-glass hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
