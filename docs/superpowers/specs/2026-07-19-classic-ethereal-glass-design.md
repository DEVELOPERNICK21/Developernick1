# Classic Portfolio — Ethereal Glass Visual Redesign

**Date:** 2026-07-19  
**Route:** `/` (classic layout only)  
**Status:** Approved for planning  
**Approach:** Elevate in place — full classic visual pass, same content and section order

## Goal

Elevate the classic homepage to agency-tier Ethereal Glass quality using the `high-end-visual-design` taste skill, without rewriting copy or changing information architecture. `/v2` stays untouched.

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Surface | Classic `/` first |
| Vibe | Ethereal Glass (OLED black + soft cyan mesh) |
| Layout archetype | Editorial Split (hero); light structural polish elsewhere |
| Scope | Full classic visual pass — every section restyled |
| Execution | Elevate in place (Approach 1) |

## Visual system

### Color & atmosphere

- Base: near-OLED black (`#0C0C0C` / deepen toward `#050505` if needed)
- Accent: keep cyan `#00E5FF` / `#00B8D4` for brand continuity with `/v2`
- Soft cyan mesh glow in hero only — no purple/indigo defaults
- Fixed film-grain overlay (~3% opacity, `pointer-events: none`, fixed inset)
- Soft hairline borders (`white/10`) instead of harsh gray borders
- Soft ambient glows instead of `shadow-md` / dark drop shadows

### Typography

- Replace **Inter** with **Plus Jakarta Sans** for body/UI (`font-sans`)
- Keep **Playfair Display** for italic display moments (e.g. “Apps that”)
- Keep **JetBrains Mono** for eyebrows and meta labels
- Brand name (“Nick Kubde” / “Developer Nick”) must read as a hero-level signal, not only nav chrome

### Surfaces (Double-Bezel)

All major containers (project cards, skill groups, terminal/about block) use nested architecture:

- **Outer shell:** subtle fill, hairline ring, padding (`p-1.5`–`p-2`), large radius (`rounded-[2rem]`)
- **Inner core:** distinct fill, inset highlight, concentric smaller radius

### Motion

- Custom cubic-bezier only (e.g. `cubic-bezier(0.32, 0.72, 0, 1)`) — no `linear` / default `ease-in-out`
- Scroll entry: fade-up + blur resolve via existing `AnimateIn` / Framer Motion
- CTA: press scale + nested trailing-icon kinetic shift
- Animate only `transform` and `opacity`
- `backdrop-blur` only on fixed/sticky nav and mobile menu overlay

## Page architecture

### Nav

- Floating glass island (detached from top edges), not edge-glued sticky bar
- Links + Hire Me CTA with button-in-button trailing icon
- Mobile: hamburger morphs to X; full-screen glass overlay; staggered link reveal

### Hero (Editorial Split)

First viewport contains only:

1. Brand
2. One headline (“Apps that / ship.”)
3. One supporting sentence
4. One CTA group
5. Dominant visual plane (spotlight/reveal atmosphere + right-side app previews on desktop)

- Left: type + CTAs  
- Right (desktop): stacked live-app mini cards  
- **Stats strip moves out of the hero** into About (as quiet supporting meta — not a hero clutter strip)  
- Mobile: stack type first, then app previews below the CTA group (do not defer to Work)

### Work

- Same projects and order
- Double-bezel project cards; featured remains wider
- Section padding `py-24`–`py-40`
- Eyebrow + headline only — no clutter strips competing with the title

### Skills

- Same content
- Soft glass / bezel clusters instead of flat bordered lists
- One job: toolkit

### About

- Keep terminal/about narrative
- Wrap terminal in double-bezel
- More whitespace; light scroll reveal

### CTA + Footer

- Nested Hire CTA (button-in-button)
- Quiet footer with hairline dividers; no decorative card spam

## Implementation boundaries

### In scope

- `src/app/page.tsx`
- `src/components/classic/*`
- Shared classic consumers: `WorkSection`, `SkillsSection`, `CtaSection`, `Footer`, `ProjectCard`, `AppMiniCard`, `TerminalCard`, `AnimateIn`, related hooks/styles as needed
- `src/app/layout.tsx` font swap (Plus Jakarta Sans)
- `tailwind.config.ts` / `globals.css` token and utility updates for classic Ethereal Glass

### Out of scope

- `src/components/v2/*` and `/v2` page
- Content rewrite (beyond relocating hero stats)
- New sections or route changes

### Suggested local primitives

- Island nav behavior inside `classic/Navbar`
- Reusable double-bezel pattern (component or documented Tailwind recipe)
- Nested trailing-icon CTA for Hire / See My Work

### Shared-component rule (critical)

`ProjectCard` and `TerminalCard` are imported by `/v2` as well. Do **not** restyle their default appearance in a way that changes `/v2`.

Preferred approach:

1. Add an optional `variant` prop (`"classic" | "default"`) **or** create thin classic wrappers under `classic/` that apply Ethereal Glass bezels around unchanged cores
2. Classic page uses the classic variant/wrapper only
3. `/v2` keeps current defaults

Same rule for any other shared primitive discovered during implementation (`AppMiniCard`, `AnimateIn`, etc.): verify consumers before changing defaults.

### Font isolation

Root `layout.tsx` currently sets `font-sans` (Inter) on `<body>`. Swapping to Plus Jakarta Sans is allowed globally only if `/v2` still looks correct (it primarily uses `font-kanit`). If Kanit/v2 appearance regresses, scope Plus Jakarta to the classic page/main wrapper instead of the body.

## Success criteria

- [ ] First viewport passes brand test (recognizably Developer Nick without relying on nav alone)
- [ ] No Inter; Plus Jakarta Sans + Playfair + JetBrains Mono in use
- [ ] Every major card/container uses double-bezel
- [ ] Hero has no stats strip; Editorial Split on desktop
- [ ] Island nav + fluid mobile overlay
- [ ] Custom easings and scroll reveals across classic sections
- [ ] Classic page feels one cohesive system end-to-end
- [ ] `/v2` unchanged visually and functionally
- [ ] Mobile: stacks cleanly below `768px`, no broken overlaps

## Risks & constraints

- Shared components (`ProjectCard`, `TerminalCard`) are used by `/v2` — classic-only variants/wrappers required
- Font swap must not regress `/v2` Kanit styling — isolate if needed
- Performance: keep grain fixed; avoid blur on scrolling content
- Do not reintroduce hero stats, edge-glued nav, or Inter

## Next step

Write an implementation plan via the writing-plans skill after user reviews this spec.
