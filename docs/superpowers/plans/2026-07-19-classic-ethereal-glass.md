# Classic Ethereal Glass Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the classic `/` homepage to Ethereal Glass + Editorial Split agency quality while leaving `/v2` visually and functionally unchanged.

**Architecture:** Elevate-in-place full visual pass. Add small classic-only primitives (`DoubleBezel`, `IslandButton`), restyle classic-only sections freely, and give shared `ProjectCard` / `TerminalCard` an opt-in `variant="classic"` so `/v2` keeps defaults. Font swap scopes Plus Jakarta Sans to the classic page wrapper to protect Kanit on `/v2`.

**Tech Stack:** Next.js 14 App Router, React 18, Tailwind CSS 3.4, Framer Motion (existing), next/font (Plus Jakarta Sans + existing Playfair / JetBrains Mono), Lucide icons (light usage only where already present).

**Spec:** `docs/superpowers/specs/2026-07-19-classic-ethereal-glass-design.md`

## Global Constraints

- Touch classic `/` only for visual outcomes; `/v2` must remain unchanged
- Do not change default styles of `ProjectCard` or `TerminalCard` — use `variant="classic"`
- No Inter; classic uses Plus Jakarta Sans + Playfair Display + JetBrains Mono
- Keep cyan accent `#00E5FF` / `#00B8D4`
- Hero first viewport: brand + one headline + one sentence + CTA group + visual plane — no stats
- Stats relocate to About as quiet meta
- Double-bezel on major containers; island nav; custom cubic-bezier only
- Animate only `transform` / `opacity`; `backdrop-blur` only on fixed/sticky nav & mobile overlay
- No test suite in repo — verify with `npm run lint`, `npm run build`, and visual checklist
- Follow high-end-visual-design skill anti-patterns (no Inter, no harsh borders/shadows, no edge-glued nav)

---

## File map

| File | Responsibility |
|------|----------------|
| `src/app/layout.tsx` | Add Plus Jakarta Sans variable; stop applying Inter as body default |
| `src/app/page.tsx` | Wrap classic main with `font-sans` (Jakarta) + grain host class |
| `tailwind.config.ts` | Point `font-sans` at Jakarta; deepen brand tokens slightly |
| `src/app/globals.css` | Grain overlay, easing tokens, section-reveal bezier update |
| `src/components/classic/DoubleBezel.tsx` | **Create** nested shell/core wrapper |
| `src/components/classic/IslandButton.tsx` | **Create** nested trailing-icon CTA |
| `src/components/classic/Navbar.tsx` | Floating island nav + morph menu |
| `src/components/classic/HeroSection.tsx` | Editorial Split; remove stats; brand signal |
| `src/components/classic/AboutSection.tsx` | Stats meta + bezel terminal + IslandButton |
| `src/components/AppMiniCard.tsx` | Classic-only polish (safe — classic-only consumer) |
| `src/components/ProjectCard.tsx` | Add `variant?: 'default' \| 'classic'` |
| `src/components/TerminalCard.tsx` | Add `variant?: 'default' \| 'classic'` |
| `src/components/WorkSection.tsx` | Breathing space + classic ProjectCard |
| `src/components/SkillsSection.tsx` | Double-bezel skill groups |
| `src/components/CtaSection.tsx` | Nested CTA + breathing space |
| `src/components/Footer.tsx` | Quieter hairline footer |
| `src/components/AnimateIn.tsx` | Align delay/easing with glass motion (classic-only consumer) |

---

### Task 1: Tokens, fonts, and grain atmosphere

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: none
- Produces: `--font-sans` = Plus Jakarta Sans; Tailwind `font-sans` points at it; `.film-grain` utility; classic page applies `font-sans`

- [ ] **Step 1: Swap fonts in layout**

In `src/app/layout.tsx`, remove Inter import/usage. Add:

```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono, Kanit, Playfair_Display } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})
```

Keep JetBrains Mono, Kanit, Playfair. On `<html>`:

```tsx
<html
  lang="en"
  className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${kanit.variable} ${playfair.variable}`}
>
  <body className="bg-brand-bg text-brand-text antialiased">{children}</body>
</html>
```

Do **not** put `font-sans` on `<body>` (protects `/v2` from inheriting Jakarta as the primary face; v2 uses `font-kanit` on its main).

- [ ] **Step 2: Point Tailwind `font-sans` at Jakarta; soften tokens**

In `tailwind.config.ts`:

```ts
colors: {
  brand: {
    bg: '#050505',
    surface: '#0E0E0E',
    border: '#1F1F1F',
    accent: '#00E5FF',
    accent2: '#00B8D4',
    text: '#F5F5F5',
    light: '#D7E2EA',
    muted: '#6B7280',
    tag: '#111118',
  },
},
fontFamily: {
  sans: ['var(--font-sans)', 'sans-serif'],
  mono: ['var(--font-mono)', 'monospace'],
  kanit: ['var(--font-kanit)', 'sans-serif'],
  display: ['var(--font-display)', 'serif'],
},
```

Keep existing `glow` / `glow-lg` shadows (cyan ambient, not harsh black drops).

- [ ] **Step 3: Add film grain + motion tokens in CSS**

Append to `src/app/globals.css` (classic utilities section):

```css
.film-grain::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.ease-glass {
  transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}
```

Update `.section-reveal` transition timing to `cubic-bezier(0.32, 0.72, 0, 1)`.

- [ ] **Step 4: Scope font + grain on classic page**

In `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="font-sans film-grain">
      <ClassicNavbar />
      <ClassicHeroSection />
      <WorkSection />
      <SkillsSection />
      <ClassicAboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`  
Expected: PASS. Spot-check `/v2` still uses Kanit headings.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/app/globals.css tailwind.config.ts
git commit -m "feat(classic): add Jakarta font, tokens, and film grain"
```

---

### Task 2: Classic primitives — DoubleBezel + IslandButton

**Files:**
- Create: `src/components/classic/DoubleBezel.tsx`
- Create: `src/components/classic/IslandButton.tsx`

**Interfaces:**
- Consumes: none
- Produces:
  - `DoubleBezel({ children, className?, innerClassName? })`
  - `IslandButton({ href, children, variant?: 'primary' | 'ghost', external?: boolean, className? })`

- [ ] **Step 1: Create DoubleBezel**

```tsx
// src/components/classic/DoubleBezel.tsx
import { ReactNode } from 'react'

interface DoubleBezelProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export default function DoubleBezel({
  children,
  className = '',
  innerClassName = '',
}: DoubleBezelProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.03] p-1.5 ${className}`}
    >
      <div
        className={`rounded-[calc(2rem-0.375rem)] bg-brand-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create IslandButton**

```tsx
// src/components/classic/IslandButton.tsx
import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

interface IslandButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export default function IslandButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: IslandButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'bg-brand-accent text-black hover:bg-brand-accent2 hover:shadow-glow-lg'
      : 'border border-white/10 bg-white/5 text-brand-muted hover:border-brand-accent/50 hover:text-white'

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 dark:bg-white/10">
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
    </a>
  )
}
```

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit` (or `npm run build`)  
Expected: PASS with new files included.

- [ ] **Step 4: Commit**

```bash
git add src/components/classic/DoubleBezel.tsx src/components/classic/IslandButton.tsx
git commit -m "feat(classic): add DoubleBezel and IslandButton primitives"
```

---

### Task 3: Floating island navbar

**Files:**
- Modify: `src/components/classic/Navbar.tsx`

**Interfaces:**
- Consumes: `IslandButton`, `ClassicLogo`
- Produces: floating glass island nav with morph hamburger + full-screen overlay

- [ ] **Step 1: Replace edge-glued nav with island shell**

Rewrite `ClassicNavbar` structure:

- Outer: `fixed top-0 left-0 right-0 z-[100] flex justify-center pt-5 px-4 pointer-events-none`
- Inner island: `pointer-events-auto w-full max-w-5xl rounded-full border border-white/10 bg-brand-bg/70 backdrop-blur-xl px-4 sm:px-6 py-3 flex items-center justify-between`
- Desktop links stay text; Hire Me uses `<IslandButton href="mailto:..." >Hire Me</IslandButton>` (compact padding ok via `className`)
- Mobile menu button: two/three lines that morph to X with `rotate-45` / `-rotate-45` absolute positioning (no Lucide X swap-only)
- Open state: fixed inset overlay `bg-black/80 backdrop-blur-3xl` with links staggered `translate-y-12 opacity-0` → visible with delays `100/150/200ms` using `transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`

Keep existing `navLinks` and mailto address.

- [ ] **Step 2: Verify visually**

Run: `npm run dev` → open `/`  
Check: nav floats, not full-bleed bar; mobile overlay works; `/v2` unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/components/classic/Navbar.tsx
git commit -m "feat(classic): replace sticky bar with floating island nav"
```

---

### Task 4: Hero Editorial Split

**Files:**
- Modify: `src/components/classic/HeroSection.tsx`
- Modify: `src/components/AppMiniCard.tsx`

**Interfaces:**
- Consumes: `IslandButton`, `AppMiniCard`, `RevealLayer`, `useSpotlight`, `heroProjects`
- Produces: first-viewport Editorial Split without stats; brand-level name signal

- [ ] **Step 1: Restyle AppMiniCard for glass (classic-only)**

Update `AppMiniCard` outer classes to soft glass (no hard `border-brand-border`):

```tsx
const className =
  'rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 flex items-center gap-3 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-glow'
```

(Safe: only classic hero imports this.)

- [ ] **Step 2: Rebuild hero content block**

In `ClassicHeroSection`:

1. Keep spotlight / vignette atmosphere.
2. Left column (`max-w-xl` / `lg:w-1/2`):
   - Eyebrow can stay mono location line OR become microscopic pill — keep one short meta line only
   - Add brand signal above or integrated with headline: e.g. small “Developer Nick” / “Nick Kubde” that still reads as brand (Playfair or bold grotesk) — must pass brand test if nav were removed
   - Keep headline: Playfair italic “Apps that” + accent “ship.”
   - Keep one supporting paragraph
   - CTAs: `<IslandButton href="#work">See My Work</IslandButton>` + ghost `<IslandButton href="#about" variant="ghost">About Me</IslandButton>`
3. **Remove** the stats strip (`6+ Live Apps` block) entirely from hero
4. Right column desktop: keep stacked `AppMiniCard`s
5. Mobile: after CTAs, show the same mini cards in a vertical stack (`flex lg:hidden`)

Use `min-h-[100dvh]` instead of fixed `h-[100dvh]` if needed for iOS safety (spec/skill preference).

- [ ] **Step 3: Verify**

Open `/` — first viewport has no stats; brand visible; desktop split works; mobile stacks previews under CTAs.

- [ ] **Step 4: Commit**

```bash
git add src/components/classic/HeroSection.tsx src/components/AppMiniCard.tsx
git commit -m "feat(classic): editorial-split hero without stats strip"
```

---

### Task 5: Work section + classic ProjectCard variant

**Files:**
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/WorkSection.tsx`
- Modify: `src/components/v2/ProjectsSection.tsx` (only if needed to keep explicit `variant` default — prefer default param so no v2 edit)

**Interfaces:**
- Consumes: `DoubleBezel`
- Produces: `ProjectCard({ project, variant?: 'default' | 'classic' })` — default preserves current markup/classes

- [ ] **Step 1: Add variant to ProjectCard**

```tsx
export default function ProjectCard({
  project,
  variant = 'default',
}: {
  project: Project
  variant?: 'default' | 'classic'
}) {
```

When `variant === 'default'`, keep existing article markup exactly.

When `variant === 'classic'`, wrap content in `DoubleBezel` and use inner padding/`border-0`/`bg-transparent` styles — hairline handled by bezel; hover uses accent glow via group on inner core. Do not change default branch classes.

- [ ] **Step 2: Update WorkSection**

- Increase section padding to `py-32 md:py-40`
- Soften header divider to `border-white/10`
- Remove competing right-side “6 apps shipped” clutter if it fights the headline (stats live in About now)
- Pass `variant="classic"`:

```tsx
<ProjectCard project={p} variant="classic" />
```

- [ ] **Step 3: Verify `/` and `/v2`**

- `/` work cards show double-bezel
- `/v2` “More work” cards look identical to before (default variant)

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/WorkSection.tsx
git commit -m "feat(classic): double-bezel project cards via classic variant"
```

---

### Task 6: Skills section glass clusters

**Files:**
- Modify: `src/components/SkillsSection.tsx`

**Interfaces:**
- Consumes: `DoubleBezel`, `AnimateIn`
- Produces: bezel-wrapped skill groups; classic-only (safe)

- [ ] **Step 1: Restyle skill cards**

Wrap each skill group:

```tsx
<DoubleBezel innerClassName="p-6 h-full">
  <span className="font-mono text-[10px] text-brand-accent tracking-[0.2em] uppercase block mb-4">
    {g.category}
  </span>
  <div className="flex flex-wrap gap-2">
    {g.skills.map(s => (
      <span key={s} className="text-sm text-brand-muted transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white">
        {s}
      </span>
    ))}
  </div>
</DoubleBezel>
```

Section: `py-32 md:py-40`, header border `border-white/10`.

- [ ] **Step 2: Verify**

Skills cards read as nested glass plates; mobile single column.

- [ ] **Step 3: Commit**

```bash
git add src/components/SkillsSection.tsx
git commit -m "feat(classic): glass bezel skill clusters"
```

---

### Task 7: About — stats relocation + classic TerminalCard

**Files:**
- Modify: `src/components/TerminalCard.tsx`
- Modify: `src/components/classic/AboutSection.tsx`

**Interfaces:**
- Consumes: `DoubleBezel`, `IslandButton`
- Produces: `TerminalCard({ variant?: 'default' | 'classic' })`; About hosts relocated stats

- [ ] **Step 1: Add TerminalCard variant**

```tsx
export default function TerminalCard({
  variant = 'default',
}: {
  variant?: 'default' | 'classic'
}) {
```

- `default`: existing outer classes unchanged
- `classic`: wrap existing terminal chrome in `DoubleBezel` with `innerClassName="overflow-hidden"` and remove outer hard border (border comes from bezel)

Classic About imports:

```tsx
import TerminalCard from '@/components/TerminalCard'
// ...
<TerminalCard variant="classic" />
```

v2 About keeps `<TerminalCard />` (default).

- [ ] **Step 2: Relocate stats into About**

Under the About copy (before CTAs), add quiet meta row:

```tsx
<div className="mt-10 flex gap-8 sm:gap-12 border-t border-white/10 pt-8">
  {[
    { value: '6+', label: 'Live Apps' },
    { value: '2', label: 'Platforms' },
    { value: '5', label: 'Years' },
  ].map(s => (
    <div key={s.label} className="flex flex-col gap-1">
      <span className="font-mono text-2xl font-bold text-white">{s.value}</span>
      <span className="text-[10px] uppercase tracking-wide text-brand-muted">{s.label}</span>
    </div>
  ))}
</div>
```

Replace Get in touch button with `<IslandButton href="mailto:developernick1@gmail.com">Get in touch</IslandButton>`; keep Instagram as ghost IslandButton or secondary link.

Section padding `py-32 md:py-40`; remove heavy `bg-brand-surface` full-bleed if it fights Ethereal Glass — prefer `bg-brand-bg` with soft mesh optional.

- [ ] **Step 3: Verify**

Hero has no stats; About shows stats; `/v2` terminal unchanged.

- [ ] **Step 4: Commit**

```bash
git add src/components/TerminalCard.tsx src/components/classic/AboutSection.tsx
git commit -m "feat(classic): about stats + classic terminal bezel"
```

---

### Task 8: CTA + Footer polish

**Files:**
- Modify: `src/components/CtaSection.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `IslandButton`, `AnimateIn`, `ClassicLogo`
- Produces: nested Hire CTA; quiet hairline footer

- [ ] **Step 1: CTA**

- `py-32 md:py-40`
- Keep soft accent radial (already present)
- Replace mailto `<a>` with:

```tsx
<IslandButton href="mailto:developernick1@gmail.com">
  developernick1@gmail.com
</IslandButton>
```

- [ ] **Step 2: Footer**

```tsx
<footer className="border-t border-white/10 bg-brand-bg px-6 py-10 sm:px-10 md:px-16">
  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
    <div className="flex items-center gap-3">
      <ClassicLogo size={28} />
      <span className="text-sm text-brand-muted">Nick Kubde © 2026</span>
    </div>
    <div className="flex gap-8">
      {/* Instagram + Email links with ease-glass hover */}
    </div>
  </div>
</footer>
```

No card chrome.

- [ ] **Step 3: Verify + build**

Run: `npm run lint && npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/CtaSection.tsx src/components/Footer.tsx
git commit -m "feat(classic): polish CTA and footer for Ethereal Glass"
```

---

### Task 9: Final QA against success criteria

**Files:**
- Read-only verification across classic + v2

**Interfaces:**
- Consumes: all prior tasks
- Produces: QA confirmation (no new features)

- [ ] **Step 1: Spec checklist**

Verify each success criterion from the design spec:

1. Brand test on first viewport
2. No Inter in classic (`grep -r Inter src/app/layout.tsx` → no match)
3. Double-bezel on project/skill/terminal classic surfaces
4. Hero has no stats strip
5. Island nav + mobile overlay
6. Custom easings present
7. Classic cohesive end-to-end
8. `/v2` unchanged (visual spot-check + ProjectCard/TerminalCard default path)
9. Mobile stack clean below 768px

- [ ] **Step 2: Regression commands**

```bash
npm run lint
npm run build
```

Expected: both PASS.

- [ ] **Step 3: Commit only if QA fixes were needed**

If fixes were required, commit them with a clear message; otherwise no empty commit.

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| Ethereal Glass vibe / cyan accent | 1, 3–8 |
| Plus Jakarta Sans; drop Inter | 1 |
| Film grain | 1 |
| Double-bezel containers | 2, 5, 6, 7 |
| Island nav + morph menu | 3 |
| Editorial Split hero; no stats | 4 |
| Stats → About | 7 |
| Island / nested CTAs | 2, 3, 4, 7, 8 |
| Work / Skills / About / CTA / Footer pass | 5–8 |
| Shared card variants for `/v2` safety | 5, 7 |
| Font isolation from `/v2` | 1 |
| Mobile collapse | 3, 4, 9 |
| Motion / blur constraints | 1, 3, globals |

## Placeholder / consistency notes

- `IslandButton` and `DoubleBezel` signatures are stable across Tasks 2–8
- `variant="classic"` naming is consistent on `ProjectCard` and `TerminalCard`
- No TBD / deferred implementation steps remain
