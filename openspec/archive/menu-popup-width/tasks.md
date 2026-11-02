# Tareas · the collapsed sub-menu popup fits its items

Constraints every sub-agent receives (detail in `proposal.md`): only g-menu, nothing under `components/tooltip/` or another component; legacy package without `src/`, don't migrate it; no inline comments; `CHANGELOG.md` and `version` are never edited by hand; don't add or remove public props; `yarn styles:check` keeps exiting 0. Package tests: `npx vitest run --project unit components/menu`.

---

- [x] **1 · The sub-menu popup no longer uses the tooltip box**
  - archivos: `components/menu/MenuSub.vue`, `components/menu/tests/MenuSub.spec.ts`, `components/menu/tests/MenuItem.spec.ts`
  - depende de: ninguna
  - listo cuando: TDD, red first.
    - The popup `<g-tooltip>` in `MenuSub.vue` gets `is-component`. Nothing else in its bindings changes.
    - `MenuSub.spec.ts`, in `describe('popup mode ...')`: the `.gui-popper` that contains `.gui-menu--popup-container` does not have the class `gui-popper__tooltip`. This assertion fails without the fix.
    - `MenuItem.spec.ts`, in the existing `describe('collapsed tooltip')`: the popper that contains `.gui-menu-tooltip__label` still has `gui-popper__tooltip`. This is a guard that the label tooltip keeps its box.
    - The keyboard tests in `MenuSub.spec.ts` (Enter/Space/ArrowRight open, Escape closes) stay green unchanged.
  - commit: `fix(menu): the collapsed sub-menu popup grows to fit its items`

- [x] **2 · Collapsed story with a long item and a badged item**
  - archivos: `stories/menu.stories.ts`
  - depende de: ninguna
  - listo cuando: in the template that `CollapsedWithBadges` uses, the "Integraciones" sub-menu (`index="4"`) gains two children: "Programa de Referidos", and "API transaccional" with a "Nuevo" label next to it. The label reuses the same classes as the "Nuevo" badge already in the sub-menu title. The existing items stay. The story renders without console errors.
  - commit: `docs(menu): long and badged popup items in the collapsed story`

The two tasks touch disjoint files and can run in parallel.
