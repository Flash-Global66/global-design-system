# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 6
fecha: 2026-10-13
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 2
escenarios: 49/49
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió por indicación del orquestador'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 193 tests passed (ronda 5: 187; +1 en useAutoScroll.spec, +5 en scroll.util.spec)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 805 tests passed · 0 failed'
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
    obtenido: '45 paquetes compilan y están registrados (base: 44); assets/scss/index.scss compila'
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
  - cmd: GBP_PACKAGE_TOKEN=dummy calcifer check
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'exit 0 sin hallazgos, pero no revisó ningún archivo: «SIN REVISAR: ningún validador miró este diff, y son 74 archivos». eslint, check-architecture y test se saltan porque ya los corre CI'
    coincide: no_verificado
```

## Veredicto: pasa

- Las 14 tareas cumplen su `listo cuando`.
- «Scroll cerca del borde» tiene evidencia y ninguna prueba lo contradice.
- Todos los comandos que se pudieron correr dan lo declarado.
- No hay reincidencias.

Se verificó la rama `claude/draggable-cards-component-5829e2`, en el HEAD `978ae066`, contra la base `93d2d0a4`.

**Sobre `calcifer check`:** en esta ronda salió con exit 0 pero no revisó ningún archivo, porque dio por hecho que eslint, check-architecture y los tests los corre CI. Por eso esa fila queda como `no_verificado`. Esos tres validadores se corrieron igual como comandos del plan y dieron limpio, así que la cobertura no baja.

## Cumplidas (14 de 14)

**Tareas 2, 3, 5, 6 y de la 8 a la 14.** El criterio no cambió y los commits nuevos no tocan sus archivos. La evidencia es la de la ronda 5, con 193 de 193 tests en verde.

**Tarea 7, «Ampliado tras el review»** (`components/drag-list/src/shared/composables/useAutoScroll.ts`)

- **Qué cambió:** `tick` delega en `pickScrollContainer`, en `components/drag-list/src/shared/utils/scroll.util.ts`. Si no hay ningún contenedor, no hace nada.
- **Test de la ampliación:** «con contenedores anidados desplaza la lista que desborda y no el wrapper», en `tests/shared/composables/useAutoScroll.spec.ts`.
- **Rojo previo:** se razonó, no se reprodujo. El código anterior desplazaba el wrapper, así que el test tenía que fallar.
- **Tests de `pickScrollContainer`:** 5 en `tests/shared/utils/scroll.util.spec.ts`. Cubren el más interno, que se salte el más interno cuando no desborda, cada eje, los contenedores fuera del puntero o nulos, y el `null`.
- **Criterio original:** sigue cumplido.

**Tarea 4** (`scroll.util.ts`): `pickScrollContainer` cae en archivos de esta tarea, pero la ampliación de la tarea 7 lo nombra.

**Tarea 1** (`engine.type.ts`)

- `PickScrollContainerOptions` vive en `shared/types/`.
- `focusIndex` pasa a `ShallowRef` en las tres interfaces. Es la anotación del `shallowRef` que la tarea 8 ya registraba, y no cambia nada en ejecución.
- `vue-tsc` da exit 0.

## A medias

Ninguna.

## De más

Son los dos mismos de las rondas 4 y 5:

1. Los ajustes de layout `gap-sm`, `shrink-0`, `whitespace-nowrap` e `items-stretch` siguen sin un `listo cuando`.
2. La story «Horizontal con inicio y fin» y `createApproversFlowRender`.

**Un detalle del registro:** la ampliación de la tarea 7 nombra `scroll.util.ts`, pero no lo agrega a `archivos:`. Tampoco menciona `scroll.util.spec.ts` ni el retipado de `focusIndex`. No cuenta como de más, porque son consecuencias directas de la ampliación y de la tarea 8.

## Escenarios (49 de 49 con evidencia)

- **48 escenarios:** la misma evidencia que en la ronda 5.
- **«Scroll cerca del borde»:**
  - **Evidencia:**
    - `useAutoScroll.spec`: desplaza cerca del borde, no desplaza lejos del borde y se detiene.
    - `scroll.util.spec`: el eje vertical.
    - `useDragList.spec`: la lista del destino entra entre los contenedores, con el eje correcto.
  - **Juicio:** se cumple. Ahora el caso horizontal funciona de verdad, porque desplaza la lista con `overflow-x-auto` y no el wrapper.
  - **Matiz:** en vertical, el paquete no le pone `overflow-y` a ningún panel, así que que haya scroll vertical depende del CSS de quien lo consume. Todo esto está probado solo en jsdom.

## ¿El cambio de `createContainer` rebaja algún caso?

No.

- No cambió ninguna aserción.
- El mock (`scrollWidth` 900 / `clientWidth` 300, `scrollHeight` 800 / `clientHeight` 400) fija la precondición «un destino con scroll», que jsdom no puede dar por sí solo.
- Los tests negativos siguen dependiendo de su propia causa.

**Hueco menor:** a nivel composable no hay un test de un contenedor único que no desborda. Ese caso solo lo cubre el util.

## Con qué se probó

- **`calcifer check`:** exit 0, pero sin revisar archivos.
- **`calcifer rules`:** no hay `.claude/rules` en el worktree.
- **Comandos de «Cómo se verifica»:** los 13 que se corrieron coinciden. «Preparar el entorno» queda `no_verificado`.
- **Lo que este veredicto no cubre:**
  - el navegador: el auto-scroll horizontal anidado solo se probó en jsdom;
  - iOS Safari real;
  - `storybook build`, que sigue fallando por el OOM ya conocido.
