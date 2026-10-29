# Verificación · menu-popup-width

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-10-29
tareas_a_medias: []
cumplidas: 2/2
a_medias: 0
de_mas: 1
escenarios: 2/2
comandos:
  - cmd: npx vitest run --project unit components/menu | grep -E "Test Files|Tests "
    exit: 0
    esperado: 'Test Files 5 passed; Tests 0 failed, at least 78 passed'
    obtenido: 'Test Files 5 passed (5); Tests 78 passed (78)'
    coincide: true
  - cmd: grep -c "is-component" components/menu/MenuSub.vue
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "gui-popper__tooltip" components/menu/tests/MenuSub.spec.ts
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "gui-popper__tooltip" components/menu/tests/MenuItem.spec.ts
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: git diff --name-only 485dc0ba..HEAD -- components | grep -v '^components/menu/' | wc -l
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: npx eslint components/menu; echo $?
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: yarn styles:check >/dev/null 2>&1; echo $?
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos'
    obtenido: 'ok: eslint limpio, check-architecture limpio, 2 spec files / 47 tests verdes (4 de 7 archivos revisados; los 3 de openspec fuera de todo validador)'
    coincide: true
  - cmd: 'Storybook browser criterion (feedback-menu--collapsed-with-badges, collapsed)'
    exit: n/a
    esperado: 'popper without gui-popper__tooltip, width >= widest item scrollWidth, no item past the right edge; Home tooltip keeps gui-popper__tooltip; Enter/Space/ArrowRight open and Escape closes'
    obtenido: 'orchestrator measurements, cited and not re-run: popper class `gui-popper is-pure is-light`, 296px vs 272px widest item, nothing overflowing; Home tooltip `gui-popper is-dark gui-popper__tooltip`; Enter opens and Escape closes with focus back on the title; no console errors. Dev checked visually in front-b2b'
    coincide: no_verificado
```

**Veredicto: pasa.** The plan states that without a browser-verify run the browser points are `no_verificado` and rest on the specs and greps. That is what happened, so the browser criterion does not block.

## Cumplidas (2/2)

- **Task 1.**
  - `components/menu/MenuSub.vue` adds only `is-component` to the popup `<g-tooltip>`. No other binding changes.
  - `components/menu/tests/MenuSub.spec.ts`, in `describe('popup mode')`, adds "does not wrap the popup in the tooltip box".
  - `components/menu/tests/MenuItem.spec.ts`, in `describe('collapsed tooltip')`, adds "keeps the tooltip box around the label popper".
  - Neither spec has deletions, so the keyboard tests are unchanged and green.
  - "TDD, red first" can't be verified after the fact.
- **Task 2.**
  - `stories/menu.stories.ts` adds "Programa de Referidos" (4-3) and "API transaccional" + "Nuevo" (4-4) to the `index="4"` sub-menu. The existing items stay.
  - Changing the badge color from `bg-primary-500` to `bg-primary-def` is legitimate, not the plan bending:
    - Both badges share `rounded-full bg-primary-def px-2 text-xs text-white`, so the criterion holds literally.
    - `bg-primary-500` does not exist: `tailwind.config.cjs:92` defines `primary-def`, and `primary-500` doesn't appear anywhere in the repo.
    - `tasks.md` was not edited.

## A medias

None.

## De más (1)

- `stories/menu.stories.ts`: the pre-existing Integraciones title badge changed from `bg-primary-500` to `bg-primary-def`. This is a one-line fix to a broken class, needed so both badges share the same classes. Nothing else is beyond the plan.

## Escenarios (2/2)

- **"Collapsed popup shows long and badged items whole":** the class is covered by the new `MenuSub.spec.ts` test. The width and no-overflow check rests on the orchestrator's browser measurement, not a browser-verify run.
- **"Collapsed item label tooltip keeps its box":** covered by the new `MenuItem.spec.ts` test, plus the orchestrator's observation of the Home tooltip.

## Validation

`calcifer check` passed, using `origin/release` as base, because `origin/HEAD` points to `origin/main`, which shares no history with this branch. The 3 `openspec` files fall outside every validator, which is expected.
