# Verificación · drawer-back-arrow

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-09-23
tareas_a_medias: []
cumplidas: 3/3
a_medias: 0
de_mas: 2
escenarios: 4/4
comandos:
  - cmd: rg -n "showBack|back:" components/drawer/src/drawer.ts ; rg -n "arrow-left|handleBack|const emit" components/drawer/src/drawer.vue
    exit: 0
    esperado: 'showBack prop booleana + back dentro del objeto de emits; icono "regular arrow-left", handler que emite back, const emit = defineEmits(...)'
    obtenido: 'drawer.ts:42 showBack · :64 back: () => true (ya no `= dialogEmits`) · drawer.vue:54 arrow-left · :55 @click=handleBack · :141 const emit = defineEmits · :219 function handleBack'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run components/drawer
    exit: 0
    esperado: 'exit=0 y cero fallidos, con los cuatro casos del listo cuando de la tarea 1 presentes como tests'
    obtenido: 'Test Files 1 passed (1) · Tests 4 passed (4) · 0 failed'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run 2>&1 | rg -o "FAIL\s+\S+\.spec\.ts" | sd 'FAIL\s+' '' | sort -u
    exit: 1
    esperado: 'exactamente components/benefits-card/tests/BenefitsCard.spec.ts y ninguna otra; exit=1 es el valor correcto; 1 failed | 76 passed (77)'
    obtenido: 'components/benefits-card/tests/BenefitsCard.spec.ts · exit=1 · Test Files 1 failed | 76 passed (77)'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run # sobre git archive ee000ea6 extraído a temporal
    exit: 1
    esperado: '1 failed | 75 passed (76) en ee000ea6'
    obtenido: 'Test Files 1 failed | 75 passed (76) · mismo archivo, mismo caso, misma causa (fal/fingerprint)'
    coincide: true
  - cmd: npx tailwindcss -c tailwind.config.cjs -i scripts/scss-parity/baseline/drawer.css -o /tmp/drawer.resolved.css ; los dos awk
    exit: 0
    esperado: 'container-close resuelve a display:flex, align-items:center y ancho completo; close resuelve a margin-left:auto; align-self:flex-end ya no aparece'
    obtenido: 'display:flex; width:100%; align-items:center · margin-left:auto · sin align-self'
    coincide: true
  - cmd: node scripts/scss-parity.mjs drawer drawer-theme
    exit: 0
    esperado: 'exit=0, con OK: drawer y OK: drawer-theme'
    obtenido: 'OK: drawer · OK: drawer-theme · exit=0'
    coincide: true
  - cmd: node scripts/scss-parity.mjs 2>&1 | sed -nE '...' | sort | rg -v '^OK '
    exit: 1
    esperado: 'el plan NO pegó la lista; solo la invariante — ningún target de drawer y ningún nombre que no estuviera ya roto en Base'
    obtenido: 'ERROR table, table-column-theme, table-theme · MISMATCH quote, select, select-v2-theme — lista idéntica a la de Base, medida sobre git archive ee000ea6; ningún drawer, ningún nombre nuevo'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD
    exit: 0
    esperado: 'los seis archivos + proposal.md, tasks.md y specs/drawer/spec.md; components/drawer/src/styles/drawer.scss NO aparece'
    obtenido: 'exactamente esos nueve; drawer.scss ausente'
    coincide: true
  - cmd: calcifer check origin/main
    exit: 0
    esperado: 'el plan no declaró resultado para este comando'
    obtenido: 'SIN REVISAR — ningún validador miró los 9 archivos: eslint y test los delega a los workflows de CI'
    coincide: no_verificado
```

## El criterio reescrito: corrección legítima, no acomodo

No se le creyó nada y se midió. Se extrajo `ee000ea6` con `git archive`, se le enlazó `node_modules` y se corrió la suite completa sobre ese árbol:

- **`BenefitsCard.spec.ts` falla de verdad en `Base`.** `exit=1`, `Test Files 1 failed | 75 passed (76)`, `Tests 1 failed | 550 passed (551)`. Mismo archivo, **mismo caso** (`dibuja el ícono de cada beneficio y lo oculta a los lectores de pantalla`, `AssertionError: expected null not to be null` en `BenefitsCard.spec.ts:173`), misma causa (`Could not find one or more icon(s) { prefix: 'fal', iconName: 'fingerprint' }`). En HEAD: `1 failed | 76 passed (77)`, `+1` archivo que es el `Drawer.spec.ts` nuevo.
- **Los dos números que el commit pegó coinciden exactos con la medición**, y el `+1` de archivos está justificado: `Drawer.spec.ts` es alta (`--diff-filter=A` lo confirma).
- El criterio viejo (`exit=0`, cero fallidos) **era inalcanzable en `Base`**: nunca fue un criterio válido, era una suposición. Y el propio plan lo había marcado `_(provisional — el verify pega el número real)_`. Reemplazar un provisional por un valor medido es exactamente el protocolo que el plan declaró. **Es corrección, no acomodo.**

Dicho eso, la reescritura dejó tres cosas que sí son hallazgos sobre el plan:

**1. La invariante es ciega a un fallo nuevo dentro de `BenefitsCard.spec.ts`, y se confirmó.** Vitest emite una línea `FAIL <path> > <nombre del caso>` **por caso fallido**, no por archivo; el `sort -u` del comando las colapsa. Hoy hay exactamente 1 línea cruda. Si un segundo caso de ese mismo archivo se pusiera en rojo, la salida sería byte-idéntica y la invariante pasaría. Los números en prosa tampoco lo atajan: `1 failed | 76 passed (77)` es la línea **Test Files**, no la de casos. Fijar la línea `Tests 1 failed | 554 passed (555)` cerraba el agujero. El criterio viejo era imposible, pero no era ciego.

**2. Quedó una frase huérfana, y es la que más cuesta.** El preámbulo nuevo afirma: _«Los que dependían de un valor se midieron durante el apply y ya están pegados acá: no queda ninguna expectativa provisional»_. No es cierto: **§4 bloque 2 es el único comando de toda la sección sin salida esperada declarada** — dice _«La lista de `Base` se mide corriendo el mismo comando sobre `git archive ee000ea6`»_, o sea deja el valor sin medir. El preámbulo viejo (_«los marcados `provisional` los reemplaza la ronda 1 del verify»_) era honesto sobre §4; el nuevo lo tapa con una promesa que la sección no honra. Costó una corrida completa de paridad sobre el árbol base resolverlo.

**3. El comando declarado no emite los números que la prosa declara.** El pipe `rg -o "FAIL..."` descarta la línea de resumen, así que corriendo el comando tal cual **no se pueden verificar** los conteos citados. La unidad sí es coherente (archivos, según _«con el drawer sumando su archivo»_), pero es inobservable desde el comando.

Menor, en §2 primer bloque: _«con los cuatro casos del `listo cuando` presentes como tests»_ tampoco es observable — la salida por defecto dice `(4 tests)` sin nombres. Se verificaron leyendo `components/drawer/tests/Drawer.spec.ts`.

## Qué se cumplió — 3 de 3

**Tarea 1 · Prop `showBack`, emit `back` y la flecha.** `components/drawer/src/drawer.ts:42` (prop booleana, default `false`) y `:59-65`, donde `drawerEmits` deja de ser la reasignación y pasa a `{ ...dialogEmits, back: () => true }`. `components/drawer/src/drawer.vue:49` cambia el `v-if` a `showClose || showBack`, `:52-56` mete el `g-icon-button` con `"regular arrow-left"` **antes** del close, `:141` es `const emit = defineEmits(drawerEmits)` y `:219-221` el handler. Los cuatro casos del `listo cuando` están en `components/drawer/tests/Drawer.spec.ts` con `render`/`fireEvent`/`emitted()`, en verde (`4 passed`, `exit=0`).

**Tarea 2 · Layout.** `components/drawer/src/drawer.styles.scss:11-15`: `container-close` pasa de `self-end` a `w-full flex items-center`, y aparece el modificador `close` con `ml-auto`. Verificado **resuelto por Tailwind**, no leído del fuente: `display:flex`, `width:100%`, `align-items:center`, `margin-left:auto`, y `align-self` ya no aparece. `scss-parity drawer drawer-theme` sale `exit=0` con los dos `OK`, y `drawer-theme` no cambió (no está en el `--name-only`). Se probó además que el baseline se regeneró **con el script**: al correr `node scripts/scss-parity.mjs --update drawer` el diff quedó vacío.

**Tarea 3 · Storybook.** `stories/drawer.stories.ts:169-179`: `showBack` en `argTypes` con `control: 'boolean'`, descripción y `defaultValue: false`, inmediatamente después de `showClose` (`:159`), como pedía el criterio. La story de combinaciones lo menciona en tres lugares: la descripción (`:1062`), una opción nueva `onlyBack` (`:1111-1114`) cableada con `:show-back` (`:1164`), y su bloque explicativo (`:1185-1189`).

## Qué quedó a medias — nada

Ningún `listo cuando` sin cumplir. Los tres están declarados y los tres se verifican con archivo.

## Qué se hizo de más — 2

**1. `stories/drawer.stories.ts` · barrido de prettier sobre el archivo entero.** Es el grueso del diff: 528 líneas cambiadas donde el cambio real son ~20. Es el reformateo de comillas dobles a simples que fuerza `.prettierrc` (`singleQuote: true`) vía `lint-staged` (`"*.{vue,ts,js,jsx,tsx}": ["eslint --fix", "prettier --write"]`). **Se verificó content-neutral**: se pasó la versión de `Base` por prettier con el config del repo y se comparó contra HEAD — quedan 43 líneas de diferencia y todas son `showBack`, el import removido, o whitespace final. **No hay nada semántico escondido.** Gana la rule, no es falta; pero son ~508 líneas que ningún criterio revisó y tienen que estar dichas.

**2. `stories/drawer.stories.ts:5` · import `DrawerInstance` removido.** **Fue la decisión correcta y se comprobó**: se copió el archivo de `Base` a un probe y se le corrió eslint — `5:19 error 'DrawerInstance' is defined but never used @typescript-eslint/no-unused-vars`. Estaba muerto desde antes (única aparición: el import), la tarea no podía commitear sin sacarlo y `--no-verify` habría movido el fallo a CI. No estaba en ningún `listo cuando`, así que va en la lista, pero como acierto.

## Escenarios — 4 de 4 con evidencia

| Escenario                                               | Qué lo prueba                                                                                                                                                                                                                                                           |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Con la flecha activa, el click emite `back` y no cierra | `Drawer.spec.ts:35-49` — `emitted().back` toHaveLength(1), `emitted().close` undefined, `emitted()['update:modelValue']` undefined. Cubre los tres THEN                                                                                                                 |
| Sin la prop, el header no cambia                        | `Drawer.spec.ts:8-20` (1 botón, sin `fa-arrow-left`, con `fa-xmark`) + «alineado a la derecha» por §3: `margin-left:auto` funciona con un hijo solo, y §4 `OK: drawer` confirma que el baseline no movió nada más                                                       |
| Solo flecha, sin cerrar                                 | `Drawer.spec.ts:51-63` — la fila se renderiza, 1 botón, `fa-arrow-left` presente y `fa-xmark` ausente                                                                                                                                                                   |
| Convivencia de los dos botones                          | `Drawer.spec.ts:22-33` para el orden y la misma fila (`buttons[0]` arrow-left, `buttons[1]` xmark dentro de `.gui-drawer__header--container-close`) + §3 para el «pegado a cada borde»: `display:flex` + `width:100%` en el contenedor y `margin-left:auto` en el close |

Ninguno queda `no probado`. El de convivencia se apoya en dos fuentes porque el test da orden en el DOM y la posición visual la da el CSS resuelto; está bien repartido.

## Lo demás que se miró

**Validación.** `calcifer check` pidió desambiguar la base (`origin/main` y `origin/release` comparten ancestro); corrido como `calcifer check origin/main` sale `exit=0` pero reporta **`SIN REVISAR`** para los 9 archivos: delega eslint a `pr-checks.yml` y test a `desploy-develop.yml`, y no trae `check-architecture`. **No aportó hallazgos ni cobertura**, así que el veredicto no se apoya en él — se apoya en los comandos del plan, que sí se corrieron.

**El emit `back` fuera de la tabla de eventos.** Confirmado: `argTypes` §5 «Eventos y Métodos» (`:388` en adelante) documenta `open`, `close`, `open-auto-focus`, `close-auto-focus`, `handle-close`, `after-enter`, `after-leave` — y no `back`. Es decisión tomada, no cuenta como falta. Un matiz a favor: `@back="onBack"` sí aparece en el snippet de uso de la story de combinaciones (`:1089`), así que en Storybook el emit no es invisible, solo está fuera de la tabla.

**Higiene.** Árbol limpio, probes borrados, symlink `node_modules` intacto. Los artefactos de medición quedaron en el scratchpad, fuera del repo.
