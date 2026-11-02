# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 8
fecha: 2026-11-02
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 2
escenarios: 49/49
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió, por indicación del orquestador'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 195 tests passed (igual que en la ronda 7)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '101 archivos passed · 901 tests passed · 0 failed (ronda 7: 98/807; la suba viene de los specs que trajo el merge de release)'
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
    obtenido: '0 (el exit 1 es de grep -c sin coincidencias)'
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
    obtenido: '0 (el exit 1 es de grep sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 9c5ca2f7 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0 (con la base vieja 93d2d0a4 da 100, todos de release)'
    coincide: true
  - cmd: "git diff 9c5ca2f7 -- assets/scss/index.scss | grep -c '^[+-][^+-]'"
    exit: 0
    esperado: '1'
    obtenido: '1'
    coincide: true
  - cmd: "grep -l 'prefers-reduced-motion' …drag-list.style.scss …drag-ghost.style.scss …drop-overlay.style.scss | wc -l"
    exit: 0
    esperado: '3'
    obtenido: '3'
    coincide: true
  - cmd: "awk '/<script/,/<\\/script>/' components/drag-list/src/DragList/index.vue | grep -cE 'computed\\(|function |=>'"
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 es de grep -c sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 9c5ca2f7 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: GBP_PACKAGE_TOKEN=dummy calcifer check 9c5ca2f7
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'exit 0, pero «SIN REVISAR: ningún validador miró este diff, y son 74 archivos». eslint, check-architecture y test se delegan a CI'
    coincide: no_verificado
```

## Veredicto: pasa

Se verificó el HEAD `3295487f` (detached, igual a la punta de `erik/EM-XX/feat/add-drag-list-component`) contra la Base `9c5ca2f7`. Los 13 comandos ejecutables de «Cómo se verifica» dan lo que el plan declara. El único a medias de la ronda 7 (tarea 9) está resuelto, y ningún escenario queda contradicho.

## ¿Es legítimo el cambio de Base de `93d2d0a4` a `9c5ca2f7`?

Sí. No es el plan acomodándose para que el criterio pase:

- **`9c5ca2f7` es el merge-base real.** `git merge-base HEAD origin/release` da exactamente `9c5ca2f7`, y el merge `ca1e8d6c` tiene como padres a `3dbcbd4e` (ronda 7) y `9c5ca2f7`.
- **La base vieja queda dentro de la nueva.** `93d2d0a4` es ancestro de `9c5ca2f7`, con 75 commits de release entre los dos.
- **Lo que mide el diff no cambió.** El parche de código del change, sin `openspec/`, es idéntico byte a byte en `93d2d0a4..3dbcbd4e` y en `9c5ca2f7..ca1e8d6c`; solo difiere la línea `index <hash>` de `yarn.lock`. Son 74 archivos en los dos casos.
- **El merge no metió nada del change.** `yarn.lock` contra la nueva base solo suma el bloque de `g-drag-list` (13 líneas), y ningún `package.json` ajeno a drag-list cambia.

Con la base vieja, «archivos fuera del change» da 100, todos de release (menu, date-picker, time-picker, segmented, quote, CHANGELOGs, `openspec/archive`). Medir contra `93d2d0a4` le atribuiría al plan trabajo ajeno. La nota del proposal deja dicho el motivo y el hash anterior.

## Cumplidas (14 de 14)

**Tareas 1 a 6, 8 y de la 10 a la 13.** Su código no cambió desde la ronda 7, y su evidencia sigue en verde: 195/195 en el paquete, 901/901 en la suite, `vue-tsc` y eslint en exit 0.

**Tarea 7** (`useAutoScroll.ts`, `useAutoScroll.spec.ts`, `scroll.util.ts`, `scroll.util.spec.ts`)

- La firma del criterio, `useAutoScroll({ containers, pointer, isActive })`, coincide con `useAutoScroll.ts:17-20` y con `UseAutoScrollOptions` en `engine.type.ts:86-90`, que no tiene `axis`.
- `archivos:` incluye `scroll.util.ts` y su spec, y la ampliación nombra lo que se tocó de las tareas 9 y 1. Quedan cubiertos los dos hallazgos menores de la ronda 7.

**Tarea 9** (`useDragList.ts`, `useDragList.spec.ts`)

- La ampliación anterior ya no dice «con eje `x`», y la de «tras el review 3» afirma que no se pasa eje y que los contenedores incluyen el panel y la lista del destino.
- `useDragList.ts:259-263` llama a `useAutoScroll` con `containers: () => [sourceEl, targetEl, getTargetListEl()]`, sin `axis`, y `useDragList.spec.ts:74-85` verifica `toContain(panel)`, `toContain(list)` y `not.toHaveProperty('axis')`.
- Estaba en el `tareas_a_medias` de la ronda 7 y ahora cumple: no reincide.

**Tarea 14** (`stories/drag-list.stories.ts`)

- `d5a4071b` agrega `flex justify-center` al `<span>` del slot `#target-item` de la story `StartAndEnd` («Inicio y fin»). Esa story está nombrada en el `listo cuando` de la tarea 14, así que el cambio cae dentro de ella. Eslint en exit 0.
- «Storybook compila y se ven en el navegador» sigue sin verificarse por el OOM conocido.

## A medias

Ninguna.

## De más

Los dos ya conocidos de las rondas 4 a 7, pedidos por el dev:

1. Los ajustes de layout `gap-sm`, `shrink-0`, `whitespace-nowrap` e `items-stretch`.
2. La story «Horizontal con inicio y fin» (`HorizontalFlow`, `createApproversFlowRender`).

Esta ronda no agrega nada: `d5a4071b` va dentro de la tarea 14, los cambios de `openspec` son el registro del change y el merge de release queda fuera del diff medido desde la Base.

## Escenarios (49 de 49 con evidencia)

`specs/g-drag-list/spec.md` no cambió desde la ronda 7, y el código tampoco salvo una clase CSS en una story. Los 49 escenarios conservan su evidencia, con 195/195 en verde. «Scroll cerca del borde» sigue probado solo en jsdom.

## Con qué se probó

- **`calcifer check 9c5ca2f7`:** exit 0, pero no revisa archivos (74 sin revisar) porque delega eslint, check-architecture y test a CI. Esos tres se corrieron como comandos del plan y dieron limpio.
- **Comandos de «Cómo se verifica»:** los 13 ejecutables coinciden. No hubo fallos por paquetes faltantes tras el merge.
- **Lo que este veredicto no cubre:** «Preparar el entorno» (`no_verificado`), Storybook en el navegador, iOS Safari y `storybook build` (OOM conocido).
