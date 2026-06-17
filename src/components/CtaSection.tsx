import AnimateIn from './AnimateIn'

export default function CtaSection() {
  return (
    <section className="py-20 px-6 sm:px-10 md:px-16 bg-brand-bg border-t border-brand-border text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <AnimateIn className="relative z-10">
        <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-4">Let&apos;s work</span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
          Got a project?
        </h2>
        <p className="text-brand-muted mb-10 max-w-md mx-auto">
          I&apos;m available for React Native projects, full-time roles, and freelance work. Let&apos;s build something that ships.
        </p>
        <a
          href="mailto:developernick1@gmail.com"
          className="inline-block bg-brand-accent hover:bg-brand-accent2 text-black font-semibold px-8 py-4 rounded-full text-sm transition-all hover:scale-[1.03] active:scale-95 hover:shadow-glow-lg"
        >
          developernick1@gmail.com
        </a>
      </AnimateIn>
    </section>
  )
}
