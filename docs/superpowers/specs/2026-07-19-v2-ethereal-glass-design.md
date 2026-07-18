# V2 Portfolio — Ethereal Glass Visual Redesign

**Date:** 2026-07-19  
**Route:** `/v2`  
**Status:** Approved for planning  
**Approach:** Elevate in place — full visual pass; keep cinematic motion / 3D / marquee / sticky projects

## Goal

Elevate `/v2` to the same Ethereal Glass system as classic `/`, while preserving Kanit + cyan gradient headings and the cinematic motion identity (floating models, phone marquee, sticky project phones). Classic `/` stays unchanged.

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Surface | `/v2` full visual pass |
| Vibe | Ethereal Glass (shared with classic) |
| Relation to classic | Shared system — reuse DoubleBezel / IslandButton / classic tokens; keep Kanit + cyan gradient as cinematic accent |
| Execution | Elevate in place (Approach 1) |

## Visual system

- Reuse classic Ethereal Glass tokens (`classic.*` where appropriate), cyan `#00E5FF` / `#00B8D4`
- Film grain on `/v2` main (`film-grain`)
- DoubleBezel for major containers (about terminal, service clusters if applicable, project cards)
- IslandButton for primary CTAs
- Keep **Kanit** on `/v2` main; keep `.hero-heading` cyan gradient for large titles
- Custom cubic-bezier; `backdrop-blur` only on fixed island nav / overlays
- Animate primarily `transform` / `opacity`

## Page architecture

### Nav (in Hero)
- Floating glass island (pattern from classic Navbar), keep active-section underline/color
- Morph hamburger + overlay on mobile if needed; desktop can stay horizontal links in island

### Hero
- Keep avatar, floating 3D models, “Hi, i'm nick” gradient heading
- Tighten CTAs to IslandButton / Magnet-compatible wrappers
- Brand-level presence remains strong

### Marquee + Model parallax bridge
- Keep existing motion systems
- Light glass framing / section breathing only — no motion rewrite

### About
- Use `TerminalCard variant="classic"` (DoubleBezel)
- Soften borders to `border-white/10`; more whitespace

### Skills (Services)
- Move off pure white full-bleed into dark glass continuity (tinted glass panel or bezel clusters on OLED bg)
- Keep numbered service list structure

### Projects
- Sticky phone showcases unchanged in behavior
- “More work” `ProjectCard` → `variant="classic"`

### Contact
- IslandButton mailto
- Quiet hairline footer / logo treatment

## Implementation boundaries

### In scope
- `src/app/v2/page.tsx`
- `src/components/v2/*`
- Reuse `src/components/classic/DoubleBezel.tsx`, `IslandButton.tsx`
- Shared `ProjectCard` / `TerminalCard` classic variants (already exist)

### Out of scope
- Classic `/` restyling
- Content rewrite
- Rewriting Framer scroll/parallax math unless required for polish

## Success criteria

- [ ] `/v2` reads as Ethereal Glass sibling of classic
- [ ] Kanit + cyan gradient headings preserved
- [ ] Island nav; DoubleBezel surfaces; IslandButton CTAs
- [ ] Skills no longer breaks OLED continuity with harsh white full-bleed
- [ ] Marquee / 3D / sticky projects still work
- [ ] Classic `/` unchanged
- [ ] Mobile stacks cleanly; lint + build pass

## Next step

Write implementation plan, then execute.
