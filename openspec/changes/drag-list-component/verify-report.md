# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 2
fecha: 2026-10-13
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 0
escenarios: 47/47
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió por indicación del orquestador: necesita tokens privados y lerna compila en el checkout principal, no en el worktree'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 171 tests passed'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 783 tests passed · 0 failed'
    coincide: true
  - cmd: npx vue-tsc --noEmit -p components/drag-list/tsconfig.json
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: npx eslint components/drag-list stories/drag-list.stories.ts --ext .vue,.ts --max-warnings 0
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: 'node scripts/check-architecture.mjs | grep -c drag-list'
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 viene de grep -c cuando no hay coincidencias)'
    coincide: true
  - cmd: node scripts/check-styles.mjs
    exit: 0
    esperado: 'exit 0, y compila un paquete más que en la línea base'
    obtenido: 'compilan y están registrados 45 paquetes (base: 44); assets/scss/index.scss compila'
    coincide: true
  - cmd: 'node -e "…deps fuera de vue/@vueuse/core/@flash-global66/g-*…"'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -ci sortable yarn.lock
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 viene de grep sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 93d2d0a4 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: "git diff 93d2d0a4 -- assets/scss/index.scss | grep -c '^[+-][^+-]'"
    exit: 0
    esperado: '1'
    obtenido: '1 (+@use "@flash-global66/g-drag-list/styles.scss" as *;)'
    coincide: true
  - cmd: "grep -l 'prefers-reduced-motion' …drag-list.style.scss …drag-ghost.style.scss …drop-overlay.style.scss | wc -l"
    exit: 0
    esperado: '3'
    obtenido: '3'
    coincide: true
  - cmd: "awk '/<script/,/<\\/script>/' components/drag-list/src/DragList/index.vue | grep -cE 'computed\\(|function |=>'"
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 viene de grep -c sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 93d2d0a4 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'no corrió ningún validador: eslint, check-architecture y test quedan delegados a CI; marca 73 archivos como SIN REVISAR'
    coincide: no_verificado
```

**Veredicto: pasa.** La tarea 13, la única a medias en la ronda 1, cumple su `listo cuando`. Los comandos de «Cómo se verifica» que se pudieron correr coinciden con lo que declara el plan. Quedan dos `no_verificado`:

- Preparar el entorno, que no se corrió por indicación del orquestador.
- `calcifer check`, que no corrió ningún validador.

## Si el re-plan es legítimo

Es legítimo y no rebaja el criterio. Antes de aceptar los comandos nuevos, se comprobó que distinguen el estado malo del bueno: se corrieron también sobre el estado de la ronda 1 (`5f4246b0`).

1. **Exclusión de `assets/scss/index.scss`.** Está acotada por el comando nuevo, que exige exactamente 1 línea cambiada. El diff real es esa única línea `@use`. Cualquier otra edición en ese archivo haría fallar el comando.
2. **Movimiento reducido.** El comando distingue los dos estados: en `5f4246b0` da 2 y en HEAD da 3.
3. **`index.vue` sin lógica.** El comando distingue los dos estados: en `5f4246b0` da 4 y en HEAD da 0.
   - El `listo cuando` nuevo de la tarea 13 **endurece** el criterio en vez de rebajarlo. Antes decía «template puro» sin definirlo. Ahora prohíbe explícitamente en el script `computed`, funciones y flechas, y obliga a que `rootClass`, `getKey` y `exposed` vivan en `useDragList`, con tests.
   - Las flechas de los handlers y de los `:ref` siguen en el template. Ya estaban en la ronda 1, que no las marcó. Acotar la regla al script aclara lo que la ronda 1 exigía y no deja pasar nada nuevo.
4. **Las 6 ampliaciones** quedaron escritas en las tareas 1, 8, 10, 11 y 12, cada una marcada «Ampliado en el apply» y con su commit. Coinciden con lo que la ronda 1 había listado.

**Hallazgo menor sobre el plan.** El esperado del vitest del paquete sigue diciendo «≥ 17 … Provisional». El número real hoy es 19 archivos. No cambia el veredicto, porque 19 cumple «≥ 17».

## Cumplidas (14 de 14)

**Tareas 1 a 12 y 14.** Su código no cambió desde la ronda 1 y la evidencia es la misma. Se volvieron a correr todos sus comandos y coinciden.

**Tarea 13**, contra su `listo cuando` nuevo:

- **`components/drag-list/src/DragList/index.vue`.** El script solo tiene `defineOptions`, `defineProps`, `defineEmits`, `defineSlots`, la desestructuración de `useDragList(props, emit)` y `defineExpose(exposed)`. El comando de lógica da 0. La composición, los slots, la región live y `aria-disabled` siguen presentes.
- **`components/drag-list/src/DragList/useDragList.ts`.**
  - `rootClass` es un `computed` con el bloque y el modificador de `direction`.
  - `getKey` reusa `getItemKey` de `list.util.ts`.
  - `exposed: DragListExpose` fija `via: 'api'`.
  - Llama a `useDragListFocus({ focusIndex, targetEl })`.
- **`components/drag-list/tests/DragList/useDragList.spec.ts`.** Suma 6 tests:
  - `rootClass`;
  - `getKey`, con `itemKey` string y función;
  - `exposed.add`, con y sin índice;
  - `exposed.remove` por key;
  - `exposed.move`.
- **Foco:** `useDragListFocus.ts` y su spec.
- **Movimiento reducido.** `drag-list.style.scss` aplica `transition: none !important` sobre `*`, y `components/drag-list/src/components/DragGhost/drag-ghost.style.scss` agrega `@media (prefers-reduced-motion: reduce)`.
- **`assets/scss/index.scss`:** cambia 1 línea.
- **Verificaciones:** `vue-tsc` y `check-styles` (45 paquetes) pasan, y el comando «sin lógica» da 0.

## A medias

Ninguna.

## De más

Ninguna. Los 6 ítems de la ronda 1 ahora los cubren las ampliaciones escritas en `tasks.md`.

El diff `93d2d0a4..HEAD` tiene 73 archivos. Fuera de los que declaran las tareas, solo están los artefactos del change: `proposal.md`, `tasks.md`, `design.md`, `specs/` y `verify-report.md`.

## Escenarios (47 de 47 con evidencia)

- **46 escenarios** tienen la misma evidencia que en la ronda 1, y la suite sigue en verde.
- **«Método expuesto»:** ahora tiene tests directos de `exposed.add`, `exposed.remove` y `exposed.move` en `useDragList.spec.ts`.
- **«Movimiento reducido · Sin animaciones»:** lo cubre el comando de `prefers-reduced-motion`, que da 3. Es evidencia estática: ningún test ejecuta un reordenamiento con `reduce`, porque jsdom no puede hacerlo. La regla raíz anula las transiciones de todas las tarjetas, que es lo que pide el THEN.

## Con qué se probó

- **`calcifer check`.** Salió con exit 0, pero no corrió ningún validador: delega eslint, check-architecture y test a CI y marca 73 archivos como SIN REVISAR. Esos tres se corrieron a mano y salieron limpios.
- **`calcifer rules`.** Dice que en el worktree no hay `.claude/rules`.
- **Lo que no cubre este veredicto:**

| Qué                                 | Estado                                                                                                                                                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| browser-verify                      | No se corrió. El criterio del cambio entero se apoya en la evidencia del orquestador de la ronda 1                                                                                                     |
| Overlays durante el arrastre        | Sin verificar en navegador                                                                                                                                                                             |
| Teclado                             | Sin verificar en navegador                                                                                                                                                                             |
| Vista horizontal a 375 px con touch | Sin verificar en navegador                                                                                                                                                                             |
| iOS Safari real                     | Sin verificar                                                                                                                                                                                          |
| `storybook build`                   | Falla por OOM del docgen del repo                                                                                                                                                                      |
| Runtime después de `c73ba75b`       | No se volvió a ver en el navegador. Ese commit reorganizó `index.vue`; tests y vue-tsc lo cubren, pero una pasada por `storybook dev` confirmaría que `defineExpose(exposed)` y el foco siguen andando |
