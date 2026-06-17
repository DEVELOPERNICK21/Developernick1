import ClassicLogo from '@/components/classic/Logo'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 md:px-16 py-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-bg">
      <div className="flex items-center gap-3">
        <ClassicLogo size={28} />
        <span className="text-brand-muted text-sm">Nick Kubde © 2026</span>
      </div>
      <div className="flex gap-6">
        <a href="https://www.instagram.com/developernick1/" target="_blank" rel="noopener noreferrer"
           className="text-sm text-brand-muted hover:text-white transition-colors">
          Instagram
        </a>
        <a href="mailto:developernick1@gmail.com"
           className="text-sm text-brand-muted hover:text-white transition-colors">
          Email
        </a>
      </div>
    </footer>
  )
}
