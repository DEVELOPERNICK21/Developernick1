import { skillGroups } from '@/lib/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 md:px-16 bg-brand-bg border-t border-brand-border">
      <div className="flex items-end justify-between mb-14 border-b border-brand-border pb-6">
        <div>
          <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-2">Toolkit</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
            What I work with
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map(g => (
          <div
            key={g.category}
            className="bg-brand-surface border border-brand-border rounded-2xl p-6 hover:border-brand-accent/20 transition-all"
          >
            <span className="font-mono text-[10px] text-brand-accent tracking-widest uppercase block mb-4">
              {g.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(s => (
                <span key={s} className="text-sm text-brand-muted hover:text-white transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
