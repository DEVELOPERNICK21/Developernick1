'use client'

import DoubleBezel from '@/components/classic/DoubleBezel'

export default function TerminalCard({
  variant = 'default',
}: {
  variant?: 'default' | 'classic'
}) {
  const terminalChrome = (
    <div className="min-w-[320px]">
      <div className="flex items-center gap-2 border-b border-brand-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-[10px] text-brand-muted">nick@portfolio ~</span>
      </div>
      <div className="p-5 font-mono text-[11px] leading-7 sm:text-sm">
        <p>
          <span className="text-brand-accent">$</span>{' '}
          <span className="text-white">whoami</span>
        </p>
        <p className="text-brand-muted">Nick Kubde — React Native Developer</p>
        <p className="mt-2">
          <span className="text-brand-accent">$</span>{' '}
          <span className="text-white">cat experience.json</span>
        </p>
        <p className="text-brand-muted">{'{'}</p>
        <p className="text-brand-muted pl-4">&quot;years&quot;: 5,</p>
        <p className="text-brand-muted pl-4">&quot;apps_shipped&quot;: 6,</p>
        <p className="text-brand-muted pl-4">
          &quot;platforms&quot;: [&quot;iOS&quot;, &quot;Android&quot;],
        </p>
        <p className="text-brand-muted pl-4">&quot;location&quot;: &quot;Pune, India&quot;</p>
        <p className="text-brand-muted">{'}'}</p>
        <p className="mt-2">
          <span className="text-brand-accent">$</span>{' '}
          <span className="text-white">echo $STATUS</span>
        </p>
        <p className="text-[#27C93F]">
          Open to new opportunities<span className="cursor-blink">_</span>
        </p>
      </div>
    </div>
  )

  if (variant === 'classic') {
    return (
      <DoubleBezel className="w-full" innerClassName="overflow-hidden">
        <div className="w-full overflow-x-auto bg-brand-bg">{terminalChrome}</div>
      </DoubleBezel>
    )
  }

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-brand-border bg-brand-bg">
      {terminalChrome}
    </div>
  )
}
