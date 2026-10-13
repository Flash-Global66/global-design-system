# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 4
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
    obtenido: 'no se corrió por indicación del orquestador: el entorno ya estaba preparado'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 178 tests passed (ronda 3: 175; +1 en zone.util.spec, +2 en usePointerDrag.spec)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 790 tests passed · 0 failed'
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
    obtenido: 'ok: la rama pasa la validación. 57 de 73 archivos revisados, 19 archivos y 178 tests en verde'
    coincide: true
```

## Veredicto: pasa

- Las 14 tareas siguen cumpliendo su `listo cuando`.
- Todos los comandos que se pudieron correr dan lo que declara el plan.
- Los 49 escenarios tienen evidencia.
- No hay reincidencias: el `tareas_a_medias` de la ronda 3 estaba vacío y sigue vacío.
- Se verificó en el checkout principal, rama `claude/draggable-cards-component-5829e2`, HEAD `f38745a0`, con base `93d2d0a4`.

## Cumplidas (14 de 14)

**Tareas 1, 2, 4, 5, 7, 8, 9, 10 y 12.** Ningún commit posterior a la ronda 3 las tocó. La evidencia es la de la ronda 3, y la suite sigue en verde.

**Tarea 3** · `components/drag-list/tests/shared/utils/zone.util.spec.ts`

- Suma el caso «desde el destino, con el centro fuera de las dos zonas y el puntero sobre el origen, quita», que da `{ zone: 'source', anchor: pointer }`.
- El texto «Ampliado en el apply» de `tasks.md` dice «cinco casos»: el `describe('resolveDropAnchor')` tiene 5 `it(`. Coincide.

**Tarea 6** · `components/drag-list/tests/shared/composables/usePointerDrag.spec.ts`

- Suma dos casos de punta a punta:
  - el puntero sobre el origen da `zone: 'source'` y `toIndex: -1`;
  - el puntero sobre el destino da `zone: 'target'` y `dropIndex`/`toIndex` en `1`.
- La ampliación quedó registrada en `tasks.md`.

**Tarea 11** · `components/drag-list/src/components/TargetPanel/target-panel.style.scss`

- La lista lleva `gap-sm` en las dos direcciones.
- En horizontal, `item`, `connector`, `node` y `empty` llevan `shrink-0`, y `node` y `empty` llevan además `whitespace-nowrap`.
- Siguen intactos el layout según `direction` y `touch-action: manipulation`.
- `overflow-x-auto` se mantiene: con `shrink-0`, el contenido desborda y se desplaza en vez de comprimirse.

**Tarea 13** · `components/drag-list/src/DragList/drag-list.style.scss`

En vertical, `items-start` pasó a `items-stretch`. Lo que cambia y lo que no:

- **«La zona de quitar mide al menos 48 px» mantiene su significado.** El mínimo sigue en `min-height: var(--gui-drag-list-zone-min-height)` (86 px). `items-stretch` solo agranda el origen hasta el alto del destino, nunca lo achica.
- **Refuerza «el panel de origen completo SHALL ser la zona de quitar».** El hueco debajo de un origen corto ahora es panel, y por lo tanto zona.
- **No choca con «Soltar fuera cancela».** Fuera del bloque raíz se sigue cancelando, y el test «soltar fuera de toda zona llama a onCancel» sigue en verde.
- **Solo aplica a vertical.**
- `check-styles` compila, el comando de movimiento reducido da 3 y el de «sin lógica» da 0.

**Tarea 14** · `stories/drag-list.stories.ts`

- «Flujo con fin» se arma con `createApproversFlowRender({ direction: 'vertical', endNode: 'Cierre del informe', containerClass: 'w-full max-w-[760px]' })`, sin perder ninguno de sus elementos.
- Siguen todas las stories que pide el criterio.
- «Storybook compila y se ven en el navegador» descansa en la prueba manual del dev. `storybook build` sigue fallando por el OOM ya conocido del docgen.

## A medias

Ninguna.

## De más (2)

**1. Más ajustes de layout que ningún criterio pedía** (`d93b2a3d` y `3025b1a5`, sumados a los de la ronda 3)

- **Qué cambió:** `gap-sm` en la lista del destino, `shrink-0` y `whitespace-nowrap` en horizontal, e `items-stretch` en vertical.
- **Por qué no tumba el veredicto:** los archivos están en el `archivos:` de las tareas 11 y 13, no contradicen ningún criterio ni escenario y responden a defectos visuales que el dev encontró en Storybook.
- **Por qué se cuenta igual:** ningún `listo cuando` los cubre y `tasks.md` no los registra como «Ampliado en el apply». Además, `items-stretch` cambia qué área acepta quitar, y eso es comportamiento, no solo estética.

**2. Story nueva «Horizontal con inicio y fin» y el factor `createApproversFlowRender`** (`354d68bf` y `f38745a0`)

- Caen en el archivo de la tarea 14, pero la lista de stories de su criterio no la incluye.
- La pidió el dev y no reemplaza ni rompe ninguna de las declaradas.

**Lo que dejó de ser «de más».** El «De más» 1 de la ronda 3 (el puntero decide la zona) quedó registrado como «Ampliado en el apply» en las tareas 3 y 6, con su escenario y sus tests.

**Estado de las observaciones de la ronda 3:**

1. **Sin resolver, como se acordó.** La frase «si el centro queda fuera de las dos zonas, SHALL decidirla el puntero» sigue en el requisito «Quitar arrastrando de vuelta al origen» (spec.md:176), aunque vale también para agregar.
2. **Resuelta.** Escenario nuevo (spec.md:208) y tests en `zone.util.spec.ts` y `usePointerDrag.spec.ts`.
3. **Resuelta.** La ampliación quedó registrada en las tareas 3 y 6.

## Escenarios (49 de 49 con evidencia)

- **48 escenarios:** la misma evidencia que en la ronda 3. Además, «Con una tarjeta más ancha que la zona, decide el puntero» ahora tiene un test de punta a punta en `usePointerDrag.spec.ts` (`toIndex: 1`).
- **«Quitar con el centro del ghost fuera de las zonas, decide el puntero»** (nuevo):
  - Lo prueban `zone.util.spec.ts` y `usePointerDrag.spec.ts`, que da `onDrop({ origin: 'target', zone: 'source', toIndex: -1 })`.
  - La emisión de `remove(item, index, 'drag')` a partir de ese `onDrop` la cubre el mismo cableado de `useDragList` que prueba el escenario de quitar arrastrando.

## Con qué se probó

- **`calcifer check`** (con `GBP_PACKAGE_TOKEN=dummy`): exit 0, con 57 de 73 archivos revisados. Los 16 restantes son SCSS, `package.json` y `tsconfig.json`; los SCSS los cubre `check-styles`.
- **Comandos de «Cómo se verifica»:** todos coinciden. «Preparar el entorno» queda `no_verificado`.
- **Lo que este veredicto no cubre:**
  - El criterio del cambio entero en el navegador descansa en la medición del dev y del orquestador.
  - iOS Safari real sigue sin verificar.
  - `storybook build` sigue fallando por OOM del docgen.
