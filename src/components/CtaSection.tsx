import AnimateIn from './AnimateIn'
import IslandButton from '@/components/classic/IslandButton'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-brand-bg px-6 py-32 text-center sm:px-10 md:px-16 md:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-3xl" />
      </div>

      <AnimateIn className="relative z-10">
        <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
          Let&apos;s work
        </span>
        <h2
          className="mb-4 text-4xl font-black text-white sm:text-5xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          Got a project?
        </h2>
        <p className="mx-auto mb-10 max-w-md text-brand-muted">
          I&apos;m available for React Native projects, full-time roles, and freelance work. Let&apos;s
          build something that ships.
        </p>
        <IslandButton href="mailto:developernick1@gmail.com">
          developernick1@gmail.com
        </IslandButton>
      </AnimateIn>
    </section>
  )
}
