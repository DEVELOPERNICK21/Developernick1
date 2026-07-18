# V2 Ethereal Glass Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate `/v2` to Ethereal Glass using shared classic primitives while preserving Kanit, cyan gradient headings, and cinematic motion (3D models, marquee, sticky phones).

**Architecture:** Elevate in place. Reuse `DoubleBezel` and `IslandButton`. Add floating island nav to v2 hero. Restyle skills off white full-bleed. Pass `variant="classic"` to shared cards. Grain on v2 main.

**Tech Stack:** Next.js 14, React 18, Tailwind, Framer Motion, existing v2 components + classic primitives.

**Spec:** `docs/superpowers/specs/2026-07-19-v2-ethereal-glass-design.md`

## Global Constraints

- Touch only `/v2` surface (`src/app/v2/page.tsx`, `src/components/v2/*`) plus shared variant props already supported
- Classic `/` must remain unchanged
- Keep Kanit on v2 main; keep `.hero-heading` cyan gradient titles
- Reuse DoubleBezel + IslandButton — do not duplicate primitives
- Preserve marquee / ScrollModel / sticky project behavior
- Skills must leave harsh white full-bleed OLED break
- Verify with `npm run lint && npm run build` (no test suite)
- Custom cubic-bezier; blur only on fixed nav/overlay

---

## File map

| File | Responsibility |
|------|----------------|
| `src/app/v2/page.tsx` | Add `film-grain` (+ optional `bg-classic-bg`) |
| `src/components/v2/HeroSection.tsx` | Island nav + IslandButton CTAs |
| `src/components/v2/AboutSection.tsx` | Soft borders; `TerminalCard variant="classic"` |
| `src/components/v2/ServicesSection.tsx` | Dark glass skills (no white full-bleed) |
| `src/components/v2/ProjectsSection.tsx` | `ProjectCard variant="classic"` |
| `src/components/v2/ContactSection.tsx` | IslandButton CTAs; quieter chrome |
| `src/components/v2/MarqueeSection.tsx` | Light glass framing / breathing only |
| `src/components/v2/ContactButton.tsx` | Prefer IslandButton or match its pattern |

---

### Task 1: V2 page atmosphere + island hero nav + CTAs

**Files:**
- Modify: `src/app/v2/page.tsx`
- Modify: `src/components/v2/HeroSection.tsx`
- Modify: `src/components/v2/ContactButton.tsx` (if used in hero)

**Interfaces:**
- Consumes: `IslandButton` from `@/components/classic/IslandButton`
- Produces: grain on v2 main; floating island nav; IslandButton primary CTA

- [ ] **Step 1:** On `v2/page.tsx` main, add `film-grain` (and `bg-classic-bg` if needed for OLED continuity). Keep `font-kanit` and `overflow-x-clip`.

- [ ] **Step 2:** Refactor hero nav into a floating glass island (centered top, `rounded-full`, `border-white/10`, `bg-brand-bg/70`, `backdrop-blur-xl`). Preserve `NAV_LINKS` + `useActiveSection` active styles. Mobile: collapse to island + morph overlay OR keep compact island with wrap — must work below 768px.

- [ ] **Step 3:** Replace primary hero CTA(s) with `IslandButton` (mailto / contact). Keep Magnet wrapper if it still feels good around IslandButton; if conflict, prefer IslandButton alone.

- [ ] **Step 4:** Use `min-h-[100dvh]` instead of rigid `h-[100dvh]` if it improves iOS safety without breaking parallax.

- [ ] **Step 5:** `npm run lint && npm run build` — PASS

- [ ] **Step 6:** Commit `feat(v2): island nav, grain, and IslandButton hero CTAs`

---

### Task 2: About + Skills glass continuity

**Files:**
- Modify: `src/components/v2/AboutSection.tsx`
- Modify: `src/components/v2/ServicesSection.tsx`

**Interfaces:**
- Consumes: `TerminalCard variant="classic"`, optionally `DoubleBezel`
- Produces: dark glass skills; bezeld about terminal

- [ ] **Step 1:** About — soften borders to `border-white/10`; use `<TerminalCard variant="classic" />`; keep copy.

- [ ] **Step 2:** Skills — replace white `bg-white` full-bleed with `bg-classic-bg` or `bg-brand-bg` and glass/bezel rows. Numbered list stays. Text colors flip to light-on-dark (white / muted / accent). Large heading can keep Kanit uppercase; use `.hero-heading` or white `font-black` consistent with other v2 dark sections.

- [ ] **Step 3:** Verify lint/build. Commit `feat(v2): glass about terminal and dark skills section`

---

### Task 3: Projects classic cards + contact polish + marquee framing

**Files:**
- Modify: `src/components/v2/ProjectsSection.tsx`
- Modify: `src/components/v2/ContactSection.tsx`
- Modify: `src/components/v2/MarqueeSection.tsx` (light touch)

**Interfaces:**
- Consumes: `ProjectCard variant="classic"`, `IslandButton`
- Produces: classic bezel more-work cards; IslandButton contact; subtle marquee polish

- [ ] **Step 1:** ProjectsSection — pass `variant="classic"` to `ProjectCard`. Do not change StickyProjectCard behavior.

- [ ] **Step 2:** ContactSection — replace gradient mailto pills with `IslandButton`; keep large `.hero-heading` title; quieter footer chrome (`border-white/10`).

- [ ] **Step 3:** MarqueeSection — only spacing / eyebrow / border softening; do not rewrite animation.

- [ ] **Step 4:** lint/build PASS. Commit `feat(v2): classic project cards and glass contact`

---

### Task 4: Final QA

- [ ] Checklist against spec success criteria
- [ ] Spot-check classic `/` unchanged
- [ ] Spot-check `/v2` motion still works (build + code sanity)
- [ ] `npm run lint && npm run build`
- [ ] Commit only if fixes needed

---

## Spec coverage

| Requirement | Task |
|-------------|------|
| Film grain on v2 | 1 |
| Island nav | 1 |
| IslandButton CTAs | 1, 3 |
| Keep Kanit + hero-heading | 1–3 |
| Terminal classic variant | 2 |
| Skills leave white full-bleed | 2 |
| ProjectCard classic | 3 |
| Preserve marquee/3D/sticky | 1–3 (no rewrite) |
| Classic `/` unchanged | all |
