## Classic ethereal glass — final branch polish (2026-07-19)

- **IslandButton**: Removed `dark:bg-white/10` from trailing icon pill; kept `bg-black/10` for both primary and ghost variants.
- **Navbar**: Close mobile overlay and clear scroll lock when viewport crosses `md` (768px); added Escape key to dismiss overlay.
- **CtaSection**: `border-t border-white/10` (replacing `border-brand-border`).
- **SkillsSection**: `DoubleBezel` outer wrapper gets `className="h-full"` for equal card heights in grid.

Commit: `fix(classic): polish island button dark mode and nav overlay edge cases`
