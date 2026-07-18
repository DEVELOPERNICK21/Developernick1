import TerminalCard from '@/components/TerminalCard'
import IslandButton from '@/components/classic/IslandButton'

export default function ClassicAboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-brand-bg px-6 py-32 sm:px-10 md:px-16 md:py-40"
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
            About
          </span>
          <h2
            className="mb-6 text-4xl font-black text-white sm:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Developer.
            <br />
            Creator.
            <br />
            Builder.
          </h2>
          <p className="mb-4 leading-relaxed text-brand-muted">
            Five years building React Native apps — from architecture decisions to App Store submissions.
            I&apos;ve shipped apps for events, time tracking, and Singapore-based consumer products.
          </p>
          <p className="mb-4 leading-relaxed text-brand-muted">
            Based in Pune, India. I work across both platforms — iOS and Android — and care about clean
            architecture, fast load times, and offline reliability.
          </p>
          <p className="leading-relaxed text-brand-muted">
            Outside of code, I run a fitness & content creation side — building Instagram presence and
            working on personal brand projects. Two tracks, one focus: build things that ship.
          </p>
          <div className="mt-10 flex gap-8 border-t border-white/10 pt-8 sm:gap-12">
            {[
              { value: '6+', label: 'Live Apps' },
              { value: '2', label: 'Platforms' },
              { value: '5', label: 'Years' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wide text-brand-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <IslandButton href="mailto:developernick1@gmail.com">Get in touch</IslandButton>
            <IslandButton
              href="https://www.instagram.com/developernick1/"
              variant="ghost"
              external
            >
              Instagram
            </IslandButton>
          </div>
        </div>

        <TerminalCard variant="classic" />
      </div>
    </section>
  )
}
