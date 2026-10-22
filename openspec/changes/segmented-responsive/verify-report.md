# Verificación · segmented-responsive

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-10-22
tareas_a_medias: []
cumplidas: 3/3
a_medias: 0
de_mas: 4
escenarios: 6/6
comandos:
  - cmd: node ../../../node_modules/vitest/vitest.mjs run 2>&1 | rg "Test Files|Tests "
    exit: 0
    esperado: '0 fallidos; archivos >= 77 (base 76 archivos / 551 tests)'
    obtenido: '77 passed (77) · 554 passed (554)'
    coincide: true
  - cmd: node ../../../node_modules/vitest/vitest.mjs run components/segmented 2>&1 | rg "Test Files"
    exit: 0
    esperado: '1 passed, 0 fallidos'
    obtenido: 'Test Files 1 passed (1) · Tests 3 passed (3)'
    coincide: true
  - cmd: node ../../../node_modules/eslint/bin/eslint.js components/segmented/src/Segmented.vue components/segmented/tests/Segmented.spec.ts stories/segmented.stories.ts --max-warnings 0; echo $?
    exit: 0
    esperado: 'exit 0 (base: 3 errores, exit 1)'
    obtenido: 'sin salida, exit 0'
    coincide: true
  - cmd: rg -c "nightBlue-900|everBlue-900|everBlue-100" components/segmented/src/segmented.styles.scss
    exit: 1
    esperado: 'sin coincidencias (exit 1)'
    obtenido: 'sin coincidencias, exit 1'
    coincide: true
  - cmd: rg -c "@include res\(" components/segmented/src/segmented.styles.scss
    exit: 0
    esperado: '>= 2'
    obtenido: '2'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD
    exit: 0
    esperado: 'solo openspec/changes/segmented-responsive/**, Segmented.vue, segmented.styles.scss, Segmented.spec.ts y stories/segmented.stories.ts; nunca CHANGELOG.md'
    obtenido: 'exactamente esos 7 archivos (3 de openspec + los 4 de código); sin CHANGELOG.md'
    coincide: true
  - cmd: spec de HEAD corrido contra el Segmented.vue de ee000ea6 (copia en el scratchpad, ya borrada; el worktree no se tocó)
    exit: 1
    esperado: 'el spec falla antes del cambio y pasa después (criterio de la tarea 1)'
    obtenido: "antes: 2 failed / 1 passed (expected '100%' to be '44px'; expected '100%' to be '40px'). Después: 3 passed"
    coincide: true
  - cmd: calcifer check ee000ea6
    exit: 0
    esperado: 'el plan no lo declara'
    obtenido: 'SIN REVISAR: ningún validador miró los 7 archivos (eslint y test los delega a CI; check-architecture no existe en este repo). Sin base explícita, `calcifer check` aborta con exit 1 porque develop/main/release comparten ancestro.'
    coincide: no_declarado
  - cmd: compilar segmented.styles.scss con preprocessCSS (stdout, al scratchpad) en HEAD y en ee000ea6, y diff entre las dos salidas
    exit: 0
    esperado: 'el plan no lo declara'
    obtenido: 'ver escenarios. Fuera de las media queries el único cambio son 3 declaraciones de color; las media queries 991px y 767px salen después de `.gui-segmented--md/--sm .gui-segmented__item` con especificidad 0,2,0 igual'
    coincide: no_declarado
  - cmd: browser-verify en Storybook, story Responsive, a 375px y 800px contra los nodos Figma 3525:60952 y 3525:60330
    exit: null
    esperado: '375px vertical con indicador sobre «Secundarias»; 800px horizontal compacto a todo el ancho; el indicador se reubica al cruzar 768px y 992px'
    obtenido: 'no corrido: necesita Storybook levantado y no es automatizable en jsdom. El plan lo deriva a browser-verify'
    coincide: no_verificado
```

## Qué se cumplió (3/3)

- **Tarea 1, indicador en los dos ejes** (`78f82465`)
  - `components/segmented/src/Segmented.vue`: `updateSelect` asigna `state.height` y `state.translateY`, y `selectedStyle` usa `height: ${h}px` y `translate(X, Y)`.
  - `components/segmented/tests/Segmented.spec.ts`: cubre el caso vertical (`translate(0px, 48px)`, alto `44px`), el horizontal (`translate(104px, 0px)`) y la emisión de `update:modelValue` / `change`.
  - Falla antes del cambio y pasa después: comprobado contra el `Segmented.vue` base, con 2 fallos y 1 pasado.
- **Tarea 2, layout responsive y colores** (`953d12d6`), en `components/segmented/src/segmented.styles.scss`
  - Colores `text-secondary-txt` (#434A5C), `text-primary-def` (#203478) y `border-blue-100` (#c5d0ec). Los 3 colores viejos ya no aparecen.
  - `res('sm-and-down')`: bloque flex a todo el ancho con padding .25rem, ítem con padding .25rem / .5rem, label .875rem / 1.375rem / 600.
  - `res('xs')`: grupo en columna, ítem con `width:100%; flex:none`.
  - Las media queries se emiten después de `--md` / `--sm` con la misma especificidad (0,2,0), así que la cascada gana.
  - Desktop solo cambia en 3 colores.
- **Tarea 3, story** (`452701c3`)
  - Nueva story `Responsive` con 4 opciones, `regular info-circle` en el slot `default` y `block`.
  - Los 3 errores de `args` están resueltos y eslint sale con 0.
  - Los commits coinciden literalmente con el plan.

## Qué quedó a medias

Nada.

## Qué se hizo de más (4)

1. **Reformateo de `stories/segmented.stories.ts`**: unas 100 líneas de formato que vienen probablemente de `lint-staged` (eslint --fix + prettier). No hacían falta para el lint. Es ruido de revisión, sin impacto funcional.
2. **Regla de hover del label con `font-semibold` bajo 992px**: está justificada, porque el hover preexistente (0,5,0) le ganaba al semibold (0,3,0). Pero ningún criterio la nombra.
3. **`gap-xxs` en el ítem bajo 992px**: sale del Figma (gap 4px), pero ni el criterio ni los escenarios lo nombran.
4. **`size="sm"` en el ícono de la story**: elección del subagente, porque el diseño no lo especifica.

## Sobre el reformateo del criterio (`ec9740ef`)

Fue legítimo, solo formato:

- Comparado palabra por palabra, el único cambio es «Colores» → «colores».
- Normalizados, los dos textos son idénticos: 566 caracteres cada uno.
- Se hizo antes de cualquier commit de implementación.

## Escenarios (6/6)

| Escenario                             | Evidencia                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Mobile apila las opciones             | CSS compilado (`max-width:767px`, columna, ítem a todo el ancho). Falta ver el render a 375px  |
| Tablet mantiene la fila compacta      | CSS compilado (`max-width:991px`, flex a todo el ancho, compacto). Falta ver el render a 800px |
| Desktop conserva el layout actual     | diff del CSS compilado entre base y HEAD: solo cambian 3 colores                               |
| Selección en vertical                 | test 1 de `Segmented.spec.ts`                                                                  |
| Selección en horizontal               | test 2 de `Segmented.spec.ts`                                                                  |
| Opción seleccionada y no seleccionada | CSS compilado y `tailwind.config.cjs`                                                          |

## Hallazgos sobre el plan (no frenan)

- Ningún comando de «Cómo se verifica» comprueba la cascada del CSS: la evidencia de 4 escenarios salió de una compilación ad hoc.
- `ds-styles-delivery` cita `yarn styles:check`, pero ese script no existe en este checkout.
- `calcifer check ee000ea6` no revisó ningún archivo (SIN REVISAR), así que su exit 0 no es evidencia.
- El criterio visual sigue `no_verificado` hasta que corra `browser-verify`.
