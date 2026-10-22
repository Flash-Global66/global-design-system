# Tareas: segmented-responsive

- [x] **1 · El indicador sigue al ítem seleccionado en los dos ejes**
  - archivos: `components/segmented/src/Segmented.vue`, `components/segmented/tests/Segmented.spec.ts`
  - depende de: ninguna
  - listo cuando: hay spec nuevo que, con `getBoundingClientRect`/`offsetLeft`/`offsetTop` simulados sobre el ítem seleccionado, comprueba que el indicador recibe el alto del ítem y un `transform` con X e Y (caso vertical: `offsetTop > 0`). También comprueba que el caso horizontal sigue moviéndose en X, y que elegir una opción emite `update:modelValue` y `change`. El spec falla antes del cambio y pasa después, y `Segmented.vue` usa `state.height` y `state.translateY`.
  - commit: `fix(segmented): el indicador de selección se ubica también en vertical`

- [x] **2 · Layout responsive y colores del diseño**
  - archivos: `components/segmented/src/segmented.styles.scss`
  - depende de: ninguna
  - listo cuando: colores en todos los tamaños: ítem `text-secondary-txt`, label seleccionado `text-primary-def` y borde del indicador `border-blue-100`. Desaparecen `nightBlue-900`, `everBlue-900` y `everBlue-100`. Bajo `res('sm-and-down', $breakpoints-spec)` (<992px): el bloque pasa a `display:flex` con ancho completo y padding `xxs`; el ítem a `px-xxs py-xs`, ganando sobre `--md` y `--sm`; el label a `text-3 font-semibold`. Bajo `res('xs')` (<768px): el grupo pasa a `flex-direction: column` y cada ítem ocupa todo el ancho, sin crecer en alto. Desktop no cambia salvo colores.
  - commit: `feat(segmented): layout responsive para mobile y tablet`

- [x] **3 · Story que muestra el caso del diseño**
  - archivos: `stories/segmented.stories.ts`
  - depende de: ninguna
  - listo cuando: hay una story `Responsive` con las 4 opciones del diseño, «Secundarias» con `regular info-circle` vía slot `default` y `block`. Los 3 errores de `args` sin usar quedan resueltos, y `eslint --max-warnings 0` sobre el archivo sale 0.
  - commit: `docs(segmented): story del comportamiento responsive`

- [x] **4 · Desktop usa el estilo compacto de tablet (re-plan)**
  - archivos: `components/segmented/src/segmented.styles.scss`
  - depende de: 2
  - listo cuando: en todos los anchos el bloque tiene padding `xxs`, el ítem `px-xxs py-xs gap-xxs` y el label `text-3 font-semibold`, incluidos el seleccionado y el hover. Desaparecen los paddings de `m('md')`/`m('sm')` y el `text-4`. `res('sm-and-down')` queda solo con el ancho completo (`flex w-full`) y `res('xs')` sin cambios. En el CSS compilado, fuera de las media queries, el label sale con `.875rem / 1.375rem / 600` y ninguna regla posterior de mayor o igual especificidad lo pisa.
  - commit: `feat(segmented): desktop usa el estilo compacto de tablet`
