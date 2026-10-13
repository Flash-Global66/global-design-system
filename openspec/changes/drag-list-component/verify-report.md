# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-10-13
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 2
escenarios: 48/48
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió por indicación del orquestador: necesita tokens privados'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 175 tests passed (ronda 2: 171, +4 de resolveDropAnchor)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 787 tests passed · 0 failed'
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
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'sin la variable da exit 1 (yarn no encuentra GBP_PACKAGE_TOKEN en .yarnrc.yml y el paso test no corre); con GBP_PACKAGE_TOKEN=dummy da exit 0: eslint limpio, check-architecture sin carpetas tocadas, test 19 archivos y 175 tests en verde, 57 de 73 archivos revisados'
    coincide: true
```

## Veredicto: pasa

- **Tareas:** las 14 siguen cumpliendo su `listo cuando`. Los dos commits posteriores a la ronda 2 (`010551a8` y `d27e80d9`) no rompen ningún criterio.
- **Comandos:** todos los que se pudieron correr dan lo que declara el plan. Solo «preparar el entorno» queda `no_verificado`.
- **Escenarios:** los 48 tienen evidencia.
- **De más:** 2 cambios, que no tumban el veredicto.
- **Reincidencias:** ninguna. El `tareas_a_medias` de la ronda 2 estaba vacío y sigue vacío.
- **Dónde se verificó:** checkout principal, rama `claude/draggable-cards-component-5829e2`, HEAD `d27e80d9`.

## Cumplidas (14 de 14)

**Tareas 1, 2, 4, 5, 7, 8, 9, 12 y 14.** No cambiaron desde `42933299`: la evidencia es la de la ronda 2, y la suite sigue en verde.

**Tarea 3** · `components/drag-list/src/shared/utils/zone.util.ts`

- `resolveDragZone` no cambió.
- Su spec sigue cubriendo «la zona se decide por el centro».
- `resolveDropAnchor` es un agregado (ver «De más»).

**Tarea 6** · `components/drag-list/src/shared/composables/usePointerDrag.ts`

- La zona sale de `resolveDropAnchor`, que por dentro usa `resolveDragZone`.
- `dropIndex` sigue saliendo de `calculateDropIndex`, ahora con el ancla en lugar del centro.
- Los 10 tests pasan.

**Tarea 10** · `drop-overlay.style.scss` y `source-panel.style.scss`

- El overlay conserva `absolute inset-0` y `pointer-events: none`, y suma `p-md` y `text-center`.
- El panel de origen pasa a `flex-1`.
- `prefers-reduced-motion` sigue presente.

**Tarea 11** · `target-panel.style.scss`

- Usa `flex-1` en el panel y suma `gap-xs` en la lista horizontal.
- El layout y `touch-action: manipulation` siguen intactos.

**Tarea 13** · `components/drag-list/src/DragList/drag-list.style.scss`

- **«La zona de quitar mide al menos 48 px» se sigue cumpliendo.** `--gui-drag-list-zone-min-height` da 86 px: 2·`spacing.md` (16 px) + `fontSize.5[1]` (28 px) + `spacing.xs` (8 px) + `fontSize.2[1]` (18 px). Reemplaza al `min-height: 48px` de `__source`. En el navegador se midió en 88 px.
- `theme()` en SCSS tiene precedentes en el repo: `drawer`, `dialog`, `quote` e `icon-button`.
- `check-styles` compila. El comando de «sin lógica» da 0 y el de movimiento reducido da 3.
- **Nota para el review:** la constante `DRAG_THRESHOLDS.minZoneSize: 48` de la tarea 1 no la usa el código, ni antes ni ahora. El mínimo real vive en el SCSS.

## A medias

Ninguna.

## De más (2)

Los 8 archivos que cambiaron después de la ronda 2 están todos en el `archivos:` de alguna tarea. Lo que sobra es comportamiento, no archivos.

**1. El puntero decide la zona cuando el centro del ghost queda afuera** (`d27e80d9`)

- **Archivos:** `zone.util.ts` (`resolveDropAnchor`), `usePointerDrag.ts`, `zone.util.spec.ts` (4 tests) y `specs/g-drag-list/spec.md`.
- **Por qué es de más:** ningún `listo cuando` lo pide, y `tasks.md` no lo registra como «Ampliado en el apply» en las tareas 3 y 6.
- **El cambio a la spec es legítimo:**
  - No rebaja nada: cancelar en ese caso era lo que la spec vieja permitía.
  - Salió de una prueba manual con un defecto real.
  - «La zona se decide por el centro» sigue valiendo.
  - «Soltar fuera cancela» sigue cubierto, por un test nuevo y por el de `usePointerDrag`.
  - «Gesto apagado» queda protegido por el test «el puntero tampoco habilita quitar si no corresponde».

**Observaciones para el plan:**

1. **El requisito quedó en un lugar demasiado acotado.** La frase nueva vive en «Quitar arrastrando de vuelta al origen», pero el escenario agregado es de agregar: la regla vale para las dos zonas.
2. **Falta escenario y test para quitar con el puntero.** El caso es: el arrastre sale del destino, el centro queda fuera de las dos zonas y el puntero está sobre el origen, con `dragToRemove` activo.
3. **Falta registrar la ampliación en `tasks.md`**, en las tareas 3 y 6.

**2. Ajustes de layout que ningún criterio pedía** (`010551a8` y la parte de estilos de `d27e80d9`)

- `min-height` también en `__target`.
- `flex-1` en los paneles.
- `p-md` y `text-center` en el overlay.
- `gap-xs` en la lista horizontal.

Caen dentro de las tareas 10, 11 y 13, no contradicen ningún criterio y responden a lo que pidió el dev al probar a mano.

## Escenarios (48 de 48 con evidencia)

- **47 escenarios:** la misma evidencia que en la ronda 2.
- **«Con una tarjeta más ancha que la zona, decide el puntero»:**
  - Test de `zone.util.spec.ts` «con el centro fuera de las dos zonas y el puntero dentro de una, decide el puntero», que da `{ zone: 'target', anchor: pointer }`.
  - Cableado de `usePointerDrag.ts` (`point: drop.anchor`).
  - Ningún test de `usePointerDrag` recorre este caso de punta a punta. «Se agrega en la posición del puntero» descansa en la prueba del orquestador en el navegador: soltar en x=300 agregó «Plátano» después de «Manzana».

## Con qué se probó

- **`calcifer check`:**
  - Sin `GBP_PACKAGE_TOKEN`: exit 1, porque yarn no la encuentra en `.yarnrc.yml` y el paso `test` no corre.
  - Con `GBP_PACKAGE_TOKEN=dummy`: exit 0. eslint limpio, 19 archivos y 175 tests en verde, 57 de 73 archivos revisados.
  - Los 16 archivos restantes son SCSS, `package.json` y `tsconfig.json`. Los SCSS los cubre `check-styles`.
- **`calcifer rules`:** `zone.util.ts` queda bajo `clean-code`, `code-comments` y `algorithmic-complexity`, que son del review. Ninguna choca con una tarea.
- **Lo que no cubre este veredicto:**
  - El overlay y la caída al puntero en el navegador descansan en la medición del orquestador.
  - iOS Safari real y el teclado en el navegador siguen sin verificar.
  - `storybook build` sigue fallando por OOM del docgen.
