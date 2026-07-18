import { skillGroups } from '@/lib/skills'
import DoubleBezel from '@/components/classic/DoubleBezel'
import AnimateIn from './AnimateIn'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 md:py-40 px-6 sm:px-10 md:px-16 bg-brand-bg border-t border-white/10">
      <AnimateIn>
        <div className="flex items-end justify-between mb-14 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-2">Toolkit</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
              What I work with
            </h2>
          </div>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <AnimateIn key={g.category} delay={i * 60}>
            <DoubleBezel innerClassName="p-6 h-full">
              <span className="font-mono text-[10px] text-brand-accent tracking-[0.2em] uppercase block mb-4">
                {g.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(s => (
                  <span
                    key={s}
                    className="text-sm text-brand-muted transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </DoubleBezel>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
