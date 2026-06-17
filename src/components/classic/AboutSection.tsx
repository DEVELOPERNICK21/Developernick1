import TerminalCard from '@/components/TerminalCard'

export default function ClassicAboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 md:px-16 bg-brand-surface border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-4">About</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
            Developer.<br />Creator.<br />Builder.
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Five years building React Native apps — from architecture decisions to App Store submissions.
            I&apos;ve shipped apps for events, time tracking, and Singapore-based consumer products.
          </p>
          <p className="text-brand-muted leading-relaxed mb-4">
            Based in Pune, India. I work across both platforms — iOS and Android — and care about clean
            architecture, fast load times, and offline reliability.
          </p>
          <p className="text-brand-muted leading-relaxed">
            Outside of code, I run a fitness & content creation side — building Instagram presence and
            working on personal brand projects. Two tracks, one focus: build things that ship.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="mailto:developernick1@gmail.com"
              className="bg-brand-accent hover:bg-brand-accent2 text-black text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-95 hover:shadow-glow"
            >
              Get in touch
            </a>
            <a
              href="https://www.instagram.com/developernick1/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
            >
              Instagram
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  )
}
