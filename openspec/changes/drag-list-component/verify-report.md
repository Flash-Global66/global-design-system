# Verificación · drag-list-component

```yaml
veredicto: no pasa
ronda: 1
fecha: 2026-10-13
vuelve_a: plan
tareas_a_medias: [13]
cumplidas: 13/14
a_medias: 1
de_mas: 6
escenarios: 46/47
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && … yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió por indicación del orquestador (tokens privados; lerna compila en el checkout principal). Hay dist/ en 42 de 60 components/*'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 165 tests passed'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 777 tests passed · 0 failed'
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
    obtenido: '0 (el exit 1 es de grep -c cuando no hay coincidencias)'
    coincide: true
  - cmd: node scripts/check-styles.mjs
    exit: 0
    esperado: 'exit 0 y un paquete más compila que en la línea base'
    obtenido: '45 paquetes compilan y están registrados (base: 44 @use en assets/scss/index.scss de 93d2d0a4)'
    coincide: true
  - cmd: 'node -e "…deps fuera de vue/@vueuse/core/@flash-global66/g-*…"'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -ci sortable yarn.lock
    exit: 1
    esperado: '0'
    obtenido: '0 (exit 1 de grep sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 93d2d0a4 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '1 (assets/scss/index.scss)'
    coincide: false
  - cmd: "git diff --name-only 93d2d0a4 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos nuevos (no lo declara el plan, lo pidió el orquestador)'
    obtenido: 'no corrió ningún validador local: eslint, check-architecture y test quedan delegados a CI; 72 archivos SIN REVISAR'
    coincide: no_verificado
```

**Veredicto: no pasa.** Hay dos motivos, y cada uno se arregla en un lugar distinto:

- **Plan.** El comando «archivos tocados fuera del change» espera `0` y da `1`. El criterio choca con el `listo cuando` de la tarea 13, que exige registrar el paquete en `assets/scss/index.scss`.
- **Apply.** La tarea 13 está tildada, pero su `index.vue` no es template puro.

Va a `plan` porque el apply no puede corregir el valor esperado de un comando. Cuando el plan lo corrija, la tarea 13 vuelve al apply.

## Cumplidas (13 de 14)

1. **Paquete y contrato.**
   - Lo prueban `components/drag-list/package.json`, `tsconfig.json`, `index.ts`, `src/DragList/constants/drag-list.constant.ts`, `src/shared/types/drag-list.type.ts`, `src/shared/constants/{drag,texts}.constant.ts`, `tests/DragList/props.spec.ts` y la entrada nueva en `yarn.lock`.
   - Pasan check-architecture (0) y vue-tsc.
   - **No se puede comprobar el rojo previo de `props.spec.ts`:** el spec y el código entraron en el mismo commit. Pasa lo mismo con el TDD de todas las tareas.
2. **Utils de lista.** `src/shared/utils/list.util.ts` y su spec (28 tests). Los cuatro escenarios con nombre y `getPreviewItems` tienen test.
3. **Inserción y zona.** `drop.util.ts` y `zone.util.ts`, con sus specs. Están los cuatro casos de `calculateDropIndex` y «la zona se decide por el centro».
4. **Activación, auto-scroll y overlays.** `activation.util.ts`, `scroll.util.ts` y `overlay.util.ts`, con sus specs. El de activación usa `it.each` para los selectores no arrastrables.
5. **Anunciador.** `useLiveAnnouncer.ts` y su spec: interpolación y re-anuncio en el siguiente tick.
6. **Motor de puntero.** `usePointerDrag.ts` y su spec, que cubre los seis casos del criterio.
   - `touchmove` con `passive: false` se registra recién al activar y se quita en `reset`.
   - El cache de rects se invalida con el scroll.
7. **Auto-scroll.** `useAutoScroll.ts` y su spec.
   - Con delta 0 no pausa el rAF: saltea el frame.
   - Cuenta como cumplida. Leído literalmente, el criterio impediría retomar el scroll cuando el puntero vuelve al borde: es una nota sobre la redacción del plan.
8. **Teclado.** `useKeyboardReorder.ts` y su spec. Cubre `Espacio ↓ ↓ Espacio` → `onMove(0, 2)`, `Esc`, y los casos con y sin `canRemove`.
9. **Orquestador.** `src/DragList/useDragList.ts` y su spec (26 tests). Cubre las guardas, el warn de duplicados, la traducción de `onDrop`, los anuncios, `itemLabel` y el merge parcial de `texts`.
10. **Origen y overlay.**
    - Los `.vue` y composables de `SourcePanel` y `DropOverlay`, con sus specs.
    - El overlay tiene `pointer-events: none` y `aria-hidden`, va en posición absoluta, usa el ícono plus o trash y anula la transición con reduced-motion.
11. **Destino, nodos y conectores.**
    - Los `.vue` y composables de `TargetPanel`, `FlowNode` y `FlowConnector`, con sus specs.
    - Usa `ol`/`ul`, `<li tabindex="0">` y `touch-action: manipulation`. Los conectores llevan `aria-hidden` y giran.
12. **Ghost.**
    - `DragGhost/index.vue` y `useDragGhost.ts`, con su spec.
    - Usa teleport a `body`, `position: fixed`, `translate3d`, `useZIndex`, `opacity-80`, sombra y `aria-hidden`.
13. **Story.**
    - `stories/drag-list.stories.ts`, con las seis stories: «Simple», «Flujo con fin», «Inicio y fin», «Horizontal», «Repetible» y «Deshabilitado».
    - Usa `g-avatar`, `g-search-input` y `g-icon-button`.
    - «Se ven en el navegador» descansa en la evidencia del orquestador (`storybook dev`).

## A medias

**Tarea 13.** El `listo cuando` dice «`index.vue` es template puro», y `components/drag-list/src/DragList/index.vue` no lo es:

- Declara `rootClass = computed(...)`. El arquetipo (§4.1) pone el cálculo de clases en `use<Nombre>.ts`.
- Declara `getKey`, que duplica la lógica de `getItemKey` de `list.util.ts`.
- Los wrappers de `defineExpose` fijan `via: 'api'` dentro del script.
- check-architecture no lo detecta.
- Contradice el motivo por el que se creó `useDragListFocus.ts`.

El resto del criterio de la 13 se cumple:

- **Composición:**
  - Arma los paneles, los overlays y el ghost.
  - Usa `defineSlots<DragListSlots>()` con los 11 slots.
  - Tiene la región `aria-live="polite"` con `sr-only` y `aria-disabled` en los paneles.
  - Llama a `defineExpose({ add, remove, move })`.
- **Layout:** cambia según `direction`, y `__source` tiene `min-height: 48px`.
- **Estilos y validaciones:** `drag-list.style.scss` agrega los `@use` y anula las transiciones con reduced-motion. Pasan vue-tsc y check-styles.

## De más

Ninguna de estas ampliaciones quedó escrita en `tasks.md`: desde el commit del plan, lo único que cambió ahí son los checkboxes.

1. **`assets/scss/index.scss`**, con la línea `@use "@flash-global66/g-drag-list/styles.scss"`.
   - **Legítimo.** Sin esa línea, check-styles sale con exit 1, y el `listo cuando` de la 13 exige que compile `g-drag-list`.
   - El error es del plan: el comando tiene que excluir este archivo o esperar `1`.
2. **Los `constants/<sub>.constant.ts` de seis subcomponentes.** Legítimos: el arquetipo prohíbe el schema de props en el `.vue`, y al plan le faltaba listarlos.
3. **`src/DragList/useDragListFocus.ts` y `tests/DragList/useDragListFocus.spec.ts`.** Legítimos por el arquetipo, aunque no alcanzaron para que `index.vue` quede template puro.
4. **`DragListPreviewEntry` en `drag-list.type.ts`** (commit `38396ceb`). Legítimo: lo comparten las tareas 2 y 11, y entró en un commit aparte.
5. **`grabbedFromIndex` en `useKeyboardReorder`.** Legítimo y con test. Amplía la API que fijaba la tarea 8.
6. **Commit `ea85f582`.**
   - El `#empty` queda entre los nodos de inicio y fin, como pide el escenario «Destino vacío sin flechas», pero ningún test fija ese orden.
   - Agrega `user-select: none` en los ítems, que nadie pidió.

La exclusión de `tests` en `tsconfig.json` (commit `d476ce85`) no cuenta como de más: el archivo es de la tarea 1 y su criterio de vue-tsc la necesita.

**Para el review.** Son restricciones globales de `tasks.md`, no del `listo cuando`, así que no entran en las tres listas:

- Hay un comentario en línea en `src/shared/composables/usePointerDrag.ts:85`.
- Hay tipos con nombre fuera de `drag-list.type.ts`: `UseDragListFocusOptions`, `TargetPanelState`, `UseDragGhostProps`, `PendingDrag`, `RectCache` y `AnnounceParams` (dos veces), entre otros.
- `TargetPanel/index.vue` tiene un `computed` (`lastIndex`).
- `useDragList` no anota su retorno. El orquestador avisó que fue a propósito.

## Escenarios (46 de 47 con evidencia)

Los specs nombrados están en `components/drag-list/tests/`.

- **Transferencia.**
  - Drag en modo simple, botón y «el origen no pierde el elemento»: `useDragList.spec`.
  - Método expuesto: evidencia indirecta, porque el wrapper de `defineExpose` no tiene test propio.
- **Uso único.**
  - Desaparece, el buscador no lo resucita, vuelve a su posición, grupo vacío y origen vacío con motivo: `list.util.spec`.
  - No duplica: `useDragList.spec`.
- **Repetible.** Agregar dos veces y aviso de keys duplicadas: `useDragList.spec`.
- **Ordenado.**
  - Inserción intermedia, reordenar, `moveUp`/`moveDown` y soltar en el mismo lugar: `useDragList.spec`.
  - Sin `ordered`: `useTargetPanel.spec` y `useDragList.spec`.
- **Nodos.**
  - Conexión automática, vacío sin flechas, cantidad de conectores y slot que reemplaza a la prop: `useTargetPanel.spec`.
  - No se inserta por fuera de los nodos: `drop.util.spec`.
- **Dirección horizontal:** `drop.util.spec`.
- **Quitar.**
  - Quitar arrastrando y gesto apagado: `useDragList.spec`.
  - Soltar fuera: `usePointerDrag.spec`.
  - Zona por el centro: `zone.util.spec`.
- **Overlays.** Los cinco escenarios: `overlay.util.spec`.
- **Activación.** Mouse, touch y botones: `usePointerDrag.spec`.
- **Auto-scroll:** `useAutoScroll.spec`.
- **Teclado.** Los cinco escenarios: `useKeyboardReorder.spec` y `useDragList.spec`.
- **Anuncios.** Los tres escenarios: `useDragList.spec` y `useLiveAnnouncer.spec`.
- **Deshabilitado:** `useDragList.spec`.
- **Sin dependencias externas:** el comando de dependencias da `0`.
- **Movimiento reducido · «Sin animaciones»: no probado.** La media query existe en `drag-list.style.scss` y en `drop-overlay.style.scss`, pero ningún test ni comando la ejercita.

## Con qué se probó

- **`calcifer check`:** salió con exit 0, pero no corrió ningún validador. Delega eslint, check-architecture y test a CI, y marca los 72 archivos como SIN REVISAR. Esos tres se corrieron a mano y salieron limpios.
- **Comandos de «Cómo se verifica»:** coinciden todos salvo «archivos fuera del change» (`1` contra `0`). La preparación del entorno queda `no_verificado`.
- **Criterio del cambio entero.** El subagente no corrió browser-verify. Con la evidencia del orquestador (`storybook dev`, «Flujo con fin», consola sin errores):

  | Paso                                                | Estado                                                             |
  | --------------------------------------------------- | ------------------------------------------------------------------ |
  | Agregar con «+», reordenar, quitar y reaparecer     | Confirmado                                                         |
  | Agregar arrastrando                                 | Resultado confirmado; overlays durante el arrastre `no_verificado` |
  | El buscador no la trae de vuelta                    | `no_verificado` en navegador; cubierto por spec                    |
  | Overlay de eliminar y «soltar fuera no cambia nada» | `no_verificado` en navegador                                       |
  | Teclado                                             | `no_verificado` en navegador; cubierto por spec                    |
  | Horizontal a 375 px con touch                       | `no_verificado`                                                    |
  | iOS Safari real                                     | `no_verificado`                                                    |

- **Storybook:** `storybook build` falla por OOM del docgen del repo; `storybook dev` compila.
