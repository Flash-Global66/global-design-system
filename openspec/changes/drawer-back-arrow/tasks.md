# Tareas

- [ ] **1 · Prop `showBack`, emit `back` y la flecha en el header**
  - archivos: `components/drawer/src/drawer.ts`, `components/drawer/src/drawer.vue`, `components/drawer/tests/Drawer.spec.ts`
  - depende de: ninguna
  - listo cuando: con `show-back` el header renderiza un `g-icon-button` con icono
    `"regular arrow-left"` a la izquierda de la fila del close; el click emite `back` **una vez** y
    **no** emite `close` ni cambia `modelValue`; sin `show-back` (default) el header queda idéntico a
    hoy; con `show-back` y `show-close: false` la fila igual se renderiza con solo la flecha; y el
    spec cubre esos cuatro casos con `@testing-library/vue` (`render` / `fireEvent` / `emitted()`),
    en verde
  - commit: `feat(drawer): optional back arrow that emits back`

- [ ] **2 · Layout de la fila superior del header**
  - archivos: `components/drawer/src/drawer.styles.scss`, `scripts/scss-parity/baseline/drawer.css`
  - depende de: ninguna
  - listo cuando: `container-close` deja de ser `self-end` y pasa a ser una fila completa alineada al
    centro, y existe un modificador para el close con `ml-auto` que lo mantiene a la derecha **haya o
    no haya flecha**; `node scripts/scss-parity.mjs drawer drawer-theme` sale con 0 tras regenerar el
    baseline de `drawer` con `--update`; y `drawer-theme` no cambia
  - commit: `style(drawer): header top row hosts back and close`

- [ ] **3 · Documentar la prop en Storybook**
  - archivos: `stories/drawer.stories.ts`
  - depende de: 1
  - listo cuando: `showBack` aparece en `argTypes` con su control booleano y su descripción, junto a
    `showClose` (que está en `:159`), y la story de combinaciones de header menciona la flecha entre
    las variantes
  - commit: `docs(drawer): document showBack in storybook`

## Nota de ejecución

El worktree no tiene `node_modules`: antes de correr el script de paridad o vitest,
`rm -rf node_modules && ln -s ../../../node_modules node_modules`, y `rm node_modules` al terminar.
El `rm -rf` es parte del comando — un run fallido de `scss-parity.mjs` deja un `node_modules/.cache`
y entonces el `ln -s` cae dentro. Está en `.gitignore:3`, no ensucia el diff.

El baseline de paridad se regenera **con el script** (`--update drawer`), nunca a mano.
