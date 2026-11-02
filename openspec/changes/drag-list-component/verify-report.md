# Verificación · drag-list-component

```yaml
veredicto: no pasa
ronda: 7
fecha: 2026-11-02
vuelve_a: plan
tareas_a_medias: [9]
cumplidas: 13/14
a_medias: 1
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
    obtenido: '19 passed (19) · 195 tests passed (ronda 6: 193; +2 en useAutoScroll.spec)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 807 tests passed · 0 failed'
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
  - cmd: "git diff --name-only 93d2d0a4 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: "git diff 93d2d0a4 -- assets/scss/index.scss | grep -c '^[+-][^+-]'"
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
  - cmd: "git diff --name-only 93d2d0a4 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: GBP_PACKAGE_TOKEN=dummy calcifer check 93d2d0a4
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'exit 0, pero «SIN REVISAR: ningún validador miró este diff, y son 74 archivos»: eslint, check-architecture y test se delegan a CI. Sin base, `calcifer check` da exit 1 porque no puede elegir entre origin/develop y origin/release'
    coincide: no_verificado
```

## Veredicto: no pasa, y vuelve al plan, no al apply

El código está bien: todos los comandos que se pudieron correr dan lo declarado, y ningún escenario queda contradicho. Lo que no cierra es el registro. El commit `1bba60ce` cambió el comportamiento que el `listo cuando` de la tarea 9 afirma («con eje `x`») y no la amplió, así que ahora las tareas 7 y 9 dicen cosas incompatibles. La tarea 9 no reincide (el `tareas_a_medias` de la ronda 6 estaba vacío), pero lo que está mal es el criterio y no la implementación: por eso vuelve a `plan`.

Se verificó el HEAD `1bba60ce` (detached) contra la base `93d2d0a4`. El único cambio de código desde la ronda 6 es ese commit.

## Cumplidas (13 de 14)

**Tareas 2, 3, 4, 5, 6, 8 y de la 10 a la 14.** El commit no toca sus archivos ni su criterio. Su evidencia es la de la ronda 6 y sigue en verde: 195/195 en el paquete y 807/807 en la suite.

**Tarea 1** (`components/drag-list/src/shared/types/engine.type.ts`)

- Se quitaron `DragListAxis` y `UseAutoScrollOptions.axis`.
- El criterio no nombra ninguno de los dos, y `engine.type.ts` no se reexporta: un grep de `DragListAxis` en `src/` e `index.ts` da 0.
- `vue-tsc` da exit 0. Sigue cumplida.

**Tarea 7** (`useAutoScroll.ts` y `useAutoScroll.spec.ts`)

- **Lo que pide la ampliación del review 3 está hecho:** `tick` recorre `['vertical', 'horizontal']`, cada eje elige su contenedor con `pickScrollContainer`, y un eje sin contenedor o con delta 0 hace `continue` sin cortar al otro.
- **Tests nuevos:** «desplaza en vertical un contenedor que solo desborda en y, sin depender de la dirección» y «cada eje elige su propio contenedor: el wrapper en y y la lista en x».
- **Rojo previo:** razonado, no reproducido por el verificador. Con el código anterior, sin `axis` el eje caía en horizontal; el contenedor del primer test no desborda en x, así que `scrollTop` quedaba en 100. Es consistente con el rojo declarado.
- **Juicio sobre la ampliación: es legítima, no es el plan acomodándose a lo hecho.**
  - Sale del requisito de la spec: el panel con scroll «SHALL desplazarse en esa dirección», la del borde al que se acerca el puntero. El criterio original, con un `axis` derivado de `direction`, no podía cumplirlo para un origen que desborda en vertical con la lista horizontal.
  - Agrega tests que antes fallaban y no rebaja ninguna aserción previa: los 7 tests anteriores solo pierden el argumento `axis` y conservan sus `expect`.
- **Hallazgo menor del plan:**
  - El texto original sigue diciendo `useAutoScroll({ containers, pointer, axis, isActive })`, una firma que ya no existe. La nota dice «se quita la opción `axis`», así que se lee como sustitución, pero obliga a leer el criterio entero para saber qué vale.
  - Tampoco se agregaron a `archivos:` `useDragList.ts`, `useDragList.spec.ts` ni `engine.type.ts`, que el commit tocó. Son de las tareas 9, 13 y 1.

## A medias

**Tarea 9 · Orquestador `useDragList`**

- **Qué afirma:** su `listo cuando`, en «Ampliado tras el review», dice: «el auto-scroll recibe también la lista `[data-drag-target-list]` […] con eje `x`».
- **Qué cambió:** `1bba60ce` quitó de `useDragList.ts` la línea `axis: () => (props.direction === 'horizontal' ? 'x' : 'y')`, y el test de `useDragList.spec.ts` pasó de afirmar `axis() === 'x'` a afirmar `not.toHaveProperty('axis')`.
- **Por qué cuenta como a medias:** la tarea sigue tildada con un criterio que el código y su propio test contradicen, y no recibió ninguna ampliación.
- **La intención se cumple:** la lista sigue entre los contenedores (afirmado), y con la lista desbordada en x se desplaza en x (test anidado de `useAutoScroll.spec`).
- **A quién le toca:** a quien mantiene el plan, no al apply.

## De más

Son los dos ya conocidos de las rondas 4 a 6, pedidos por el dev:

1. Los ajustes de layout `gap-sm`, `shrink-0`, `whitespace-nowrap` e `items-stretch`, sin `listo cuando`.
2. La story «Horizontal con inicio y fin», con `createApproversFlowRender`.

El commit nuevo no agrega nada de más: todo lo que toca es consecuencia de la ampliación de la tarea 7.

## Escenarios (49 de 49 con evidencia)

- **48 escenarios:** la misma evidencia que en la ronda 6, en verde.
- **«Scroll cerca del borde»:** en `useAutoScroll.spec`, «desplaza cerca del borde», la detención al apagar `isActive` y el nuevo de «solo desborda en y»; en `useDragList.spec`, la lista del destino entra en los contenedores. Ninguna prueba lo contradice. Todo está probado solo en jsdom.

## Con qué se probó

- **`calcifer check`:** sin argumento da exit 1, porque no puede elegir entre `origin/develop` y `origin/release`. Con la base `93d2d0a4` da exit 0 pero no revisa archivos (74 sin revisar), porque delega eslint, check-architecture y test a CI. Esos tres se corrieron igual como comandos del plan y dieron limpio.
- **`calcifer rules`:** no hay `.claude/rules` en el worktree.
- **Comandos de «Cómo se verifica»:** los 13 que se corrieron coinciden. «Preparar el entorno» queda `no_verificado`.
- **Lo que este veredicto no cubre:** el navegador, iOS Safari y `storybook build` (OOM conocido).
