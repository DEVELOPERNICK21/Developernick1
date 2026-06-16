'use client'

export default function TerminalCard() {
  return (
    <div className="bg-brand-bg border border-brand-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="font-mono text-[10px] text-brand-muted ml-2">nick@portfolio ~</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        <p><span className="text-brand-accent">$</span> <span className="text-white">whoami</span></p>
        <p className="text-brand-muted">Nick Kubde — React Native Developer</p>
        <p className="mt-2"><span className="text-brand-accent">$</span> <span className="text-white">cat experience.json</span></p>
        <p className="text-brand-muted">{'{'}</p>
        <p className="text-brand-muted pl-4">&quot;years&quot;: 5,</p>
        <p className="text-brand-muted pl-4">&quot;apps_shipped&quot;: 6,</p>
        <p className="text-brand-muted pl-4">&quot;platforms&quot;: [&quot;iOS&quot;, &quot;Android&quot;],</p>
        <p className="text-brand-muted pl-4">&quot;location&quot;: &quot;Pune, India&quot;</p>
        <p className="text-brand-muted">{'}'}</p>
        <p className="mt-2"><span className="text-brand-accent">$</span> <span className="text-white">echo $STATUS</span></p>
        <p className="text-[#27C93F]">
          Open to new opportunities<span className="cursor-blink">_</span>
        </p>
      </div>
    </div>
  )
}
