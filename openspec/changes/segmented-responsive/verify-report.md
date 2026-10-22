# Verificación · segmented-responsive

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-10-22
tareas_a_medias: []
cumplidas: 4/4
a_medias: 0
de_mas: 3
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
  - cmd: rg -c "p-4;|px-4 py-2|text-4" components/segmented/src/segmented.styles.scss
    exit: 1
    esperado: 'sin coincidencias (exit 1); base medida antes de la tarea 4: 3'
    obtenido: 'sin coincidencias, exit 1'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD
    exit: 0
    esperado: 'solo openspec/changes/segmented-responsive/**, Segmented.vue, segmented.styles.scss, Segmented.spec.ts y stories/segmented.stories.ts; nunca CHANGELOG.md'
    obtenido: 'exactamente 8 archivos: 4 de openspec/changes/segmented-responsive/ (proposal, spec, tasks, verify-report) + los 4 de código; sin CHANGELOG.md'
    coincide: true
  - cmd: spec de HEAD corrido contra el Segmented.vue de ee000ea6 (copia en el scratchpad; el worktree no se tocó)
    exit: 1
    esperado: 'el spec falla antes del cambio y pasa después (criterio de la tarea 1)'
    obtenido: "antes: 2 failed / 1 passed (expected '100%' to be '44px'; expected '100%' to be '40px'). Después: 3 passed (comando 2)"
    coincide: true
  - cmd: calcifer check ee000ea6
    exit: 0
    esperado: 'el plan no lo declara'
    obtenido: 'SIN REVISAR: ningún validador miró los 8 archivos (eslint y test los delega a CI; check-architecture no existe en este repo). Sin base explícita aborta con exit 1. El exit 0 no es evidencia.'
    coincide: no_declarado
  - cmd: compilar segmented.styles.scss con preprocessCSS en HEAD y en ee000ea6 (scratchpad), y diff
    exit: 0
    esperado: 'el plan no lo declara'
    obtenido: 'HEAD compilado idéntico al task4.css del scratchpad. Contra la base, fuera de las media queries no cambia ninguna declaración de width, display ni flex del bloque; sí cambian paddings, tipografía, colores, hover, transition y se borran --md/--sm. Ver escenarios.'
    coincide: no_declarado
  - cmd: browser-verify en Storybook, story Responsive, a 375px / 800px / 1100px contra los nodos Figma 3525:60952 y 3525:60330
    exit: null
    esperado: '375px vertical con indicador sobre «Secundarias»; 800px horizontal compacto a todo el ancho; 1100px mismo estilo compacto; el indicador se reubica al cruzar 768px y 992px'
    obtenido: 'no corrido: calcifer 0.45.0 no tiene `browser-verify` (no aparece en `calcifer --help`) y yo no tengo navegador. La revisión manual del dev no es evidencia acreditada.'
    coincide: no_verificado
```

## Qué se cumplió (4/4)

- **Tarea 1, indicador en los dos ejes**
  - `Segmented.vue`: `updateSelect` asigna `state.height` y `state.translateY`, y `selectedStyle` emite `height: Npx` y `translate(X, Y)`.
  - `tests/Segmented.spec.ts`: 3 tests (vertical, horizontal y emisión de eventos).
  - Contra el `Segmented.vue` de `ee000ea6` fallan 2 de 3.
- **Tarea 2, layout responsive y colores**
  - Colores `--color-txt-secondary` (#434A5C), `--color-primary` (#203478) y borde #c5d0ec. Los 3 colores viejos ya no están.
  - `res('xs')`: el grupo pasa a columna y el ítem queda a todo el ancho.
  - `res('sm-and-down')`: el bloque queda `display:flex; width:100%`.
  - Su cláusula de desktop quedó superada por la tarea 4: está anotado en `tasks.md`.
- **Tarea 3, story**
  - `Responsive` con las 4 opciones, «Secundarias» con `regular info-circle` en el slot `default`, y `block`.
  - Los 3 errores de lint están resueltos y eslint sale 0.
- **Tarea 4, desktop compacto** (`29f8def5`)
  - Fuera de las media queries: bloque con padding .25rem, ítem con gap .25rem y padding .5rem .25rem, label .875rem / 1.375rem / 600.
  - Ninguna regla posterior pisa el label.
  - Ya no existen `--md`/`--sm`, el `text-4` ni el hover con `font-medium`.
  - `res('sm-and-down')` queda solo con el ancho completo.

## Qué quedó a medias

Nada.

## Qué se hizo de más (3)

1. **Reformateo de `stories/segmented.stories.ts`** por lint-staged: unas 112 líneas agregadas y 62 borradas, de las que solo unas 40 son la story pedida. Es ruido de revisión.
2. **`size="sm"` en el ícono de la story**: elección del implementador, el diseño no lo especifica.
3. **`transition-all` → `transition-colors` en el ítem** (`0a232097`): está justificado por el desfase del indicador al cruzar el breakpoint, pero ningún criterio lo nombra.

## Escenarios (6/6, ninguno contradicho)

| Escenario                                | Evidencia                                                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile apila las opciones                | CSS compilado (`max-width:767px`, columna). Revisión manual no acreditada a 375px                                                         |
| Tablet mantiene la fila compacta         | CSS compilado (`max-width:991px`, flex a todo el ancho). Revisión manual no acreditada a 800px                                            |
| Desktop usa el estilo compacto de tablet | CSS compilado fuera de las media queries, y diff compilado entre base y HEAD sin cambios de ancho. Revisión manual no acreditada a 1100px |
| Selección en layout vertical             | test 1 de `Segmented.spec.ts`                                                                                                             |
| Selección en layout horizontal           | test 2 de `Segmented.spec.ts`                                                                                                             |
| Opción seleccionada y no seleccionada    | CSS compilado y `tailwind.config.cjs`                                                                                                     |

## Juicio sobre `cba85aa1` (corrección del re-plan): legítima

La premisa «el ancho en desktop lo decide `block`» era falsa y preexistente:

- El wrapper `flex flex-col` de `Segmented.vue:2` es el mismo en `ee000ea6` y en HEAD, y estira al bloque.
- `29f8def5` no agrega ninguna regla de ancho, y `cba85aa1` no toca `tasks.md` ni ningún `listo cuando`.
- La redacción nueva («el mismo ancho que antes») se puede comprobar con el diff del CSS compilado.

## Hallazgos sobre el plan (no frenan)

1. **El `listo cuando` de la tarea 2 quedó obsoleto en su cláusula de desktop.** Ya está anotado en `tasks.md` como superado por la tarea 4.
2. **`browser-verify` no existe en calcifer 0.45.0.** El criterio visual queda `no_verificado`, con la revisión manual del dev como indicio.
3. **La prop `size` quedó sin efecto visual**, pero su control sigue en la story.
4. **Falta un comando declarado para el ancho en desktop.** La evidencia sale del diff compilado ad hoc.

## Historial

- **Ronda 1: pasa** (3/3).
- **Ronda 2: pasa** (3/3). Suma el fix `0a232097` y la revisión manual en Storybook.
- **Ronda 3: pasa** (4/4). Suma el re-plan (desktop compacto, tarea 4) y la corrección `cba85aa1`.
