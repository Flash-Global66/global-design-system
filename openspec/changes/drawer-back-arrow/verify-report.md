# Verificación · drawer-back-arrow

```yaml
veredicto: pasa
ronda: 2
fecha: 2026-09-29
tareas_a_medias: []
cumplidas: 3/3
a_medias: 0
de_mas: 5
escenarios: 4/4
comandos:
  - cmd: rg -n "showBack|back:" components/drawer/src/drawer.ts ; rg -n "arrow-left|handleBack|const emit" components/drawer/src/drawer.vue
    exit: 0
    esperado: 'showBack prop booleana + back dentro del objeto de emits; icono "regular arrow-left", handler que emite back, const emit = defineEmits(...)'
    obtenido: 'drawer.ts:42 showBack · :64 back: () => true · drawer.vue:54 arrow-left · :56 @click=handleBack · :142 const emit = defineEmits · :220 function handleBack'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run components/drawer
    exit: 0
    esperado: 'exit=0 y cero fallidos, con los cuatro casos del listo cuando de la tarea 1 presentes como tests'
    obtenido: 'Test Files 1 passed (1) · Tests 4 passed (4) · 0 failed'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run 2>&1 | rg -o "FAIL\s+\S+\.spec\.ts" | sd 'FAIL\s+' '' | sort -u
    exit: 0
    esperado: 'solo components/benefits-card/tests/BenefitsCard.spec.ts · exit=1 · 1 failed | 76 passed (77). Invariante VINCULANTE segun el plan: ningun nombre nuevo; la lista puede encogerse sin romper nada'
    obtenido: 'lista VACIA · exit=0 · Test Files 77 passed (77) · Tests 555 passed (555). La lista se encogio a cero: el entorno de este run resuelve los sets Pro de FontAwesome. Invariante cumplida'
    coincide: true
  - cmd: npx tailwindcss -c tailwind.config.cjs -i scripts/scss-parity/baseline/drawer.css -o /tmp/drawer.resolved.css ; los dos awk
    exit: 0
    esperado: 'container-close resuelve a display:flex, align-items:center y ancho completo; close resuelve a margin-left:auto; align-self:flex-end ya no aparece'
    obtenido: 'display:flex; width:100%; align-items:center · margin-left:auto · align-self ausente en todo el archivo'
    coincide: true
  - cmd: node scripts/scss-parity.mjs drawer drawer-theme
    exit: 0
    esperado: 'exit=0, con OK: drawer y OK: drawer-theme'
    obtenido: 'OK: drawer · OK: drawer-theme · exit=0'
    coincide: true
  - cmd: node scripts/scss-parity.mjs 2>&1 | sed -nE '...' | sort | rg -v '^OK '
    exit: 1
    esperado: 'el plan NO pego lista literal; solo la invariante — ningun target de drawer y ningun nombre que no estuviera ya roto en Base'
    obtenido: 'ERROR table, table-column-theme, table-theme · MISMATCH quote, select, select-v2-theme — identica a la lista de Base medida en ronda 1; ningun drawer, ningun nombre nuevo'
    coincide: true
  - cmd: node scripts/scss-parity.mjs --update drawer ; git diff scripts/scss-parity/baseline/drawer.css
    exit: 0
    esperado: 'restriccion del proposal: el baseline se regenera con el script, nunca a mano'
    obtenido: 'baseline actualizado: drawer · git diff VACIO — el baseline commiteado es byte-identico al que emite el script, incluidas las reglas nuevas de --back'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD
    exit: 0
    esperado: 'los seis archivos de codigo + proposal.md, tasks.md y specs/drawer/spec.md = 9; components/drawer/src/styles/drawer.scss NO aparece'
    obtenido: '10 archivos: los nueve declarados + openspec/changes/drawer-back-arrow/verify-report.md (el registro obligatorio de la ronda 1, que no existia cuando el plan escribio la linea). drawer.scss ausente: la capa tema quedo intacta'
    coincide: true
  - cmd: calcifer check origin/main
    exit: 0
    esperado: 'el plan no declaro resultado para este comando'
    obtenido: 'SIN REVISAR — ningun validador miro los 10 archivos: eslint lo delega a pr-checks.yml, test a desploy-develop.yml, y no trae check-architecture'
    coincide: no_verificado
```

---

## La auditoría de cascada

No alcanzó con leer el fuente ni el CSS compilado: se compiló un stylesheet en el orden real de `assets/scss/index.scss` (drawer en `:25`, icon-button en `:36`), se pasó por Tailwind con el config del repo, y se computó el ganador de cascada con postcss + `postcss-selector-parser` sobre el set de clases real del botón (`gui-icon-button gui-icon-button--variant-grey gui-icon-button--medium gui-drawer__header--back`; los defaults salen de `components/icon-button/src/icon-button.ts:64` y `:85`).

**`af245055` estaba muerto — confirmado:**

```
spec=0,1,0 orden=32  .gui-drawer__header--back { width: auto }
spec=0,1,0 orden=50  .gui-icon-button { width: 3rem }
GANADOR width = 3rem
```

Misma especificidad, icon-button después → gana `w-12`. Coincide exacto con los 48px medidos en el navegador.

**`379bae82` sí gana — confirmado:**

```
spec=0,1,0 orden=50  .gui-icon-button { width: 3rem }
spec=0,2,0 orden=32  .gui-drawer__header--back.gui-icon-button { width: auto }
GANADOR width = auto
```

(0,2,0) gana por especificidad, así que el orden de import ya no importa. `.gui-icon-button` no tiene padding propio (`icon-button.styles.scss:16` es `rounded-full h-12 w-12 duration-200 relative`), y `.hover-effect` es `position:absolute`, así que no contribuye al ancho: con `w-auto` el ancho es el del glifo. Consistente con los 17.5px medidos.

**El `display:none` del hover-effect (de `58ede408`) gana siempre:**

```
spec=0,1,0 orden=77  .hover-effect { width: 0px; height: 0px }
spec=0,2,0 orden=33  .gui-drawer__header--back .hover-effect { display: none }
spec=0,3,0 orden=75  .gui-icon-button:active .hover-effect { background-color: ... }
spec=0,3,0 orden=76  .gui-icon-button:hover .hover-effect { width: 100%; height: 100% }
GANADOR display = none
```

Ninguna regla de icon-button declara `display` sobre `.hover-effect` — solo `width`/`height`/`background`. Así que aplica incondicionalmente, también en `:hover` y `:active`. Los ripples son hijos de ese span (`IconButton.vue:5-19`), así que caen con él. **Esa regla nunca estuvo en riesgo**: el problema fue solo el ancho.

**Un riesgo revisado y descartado midiendo, no suponiendo:** ocultar el span podía dejar los ripples colgados, porque `IconButton.vue:16` los limpia con `@animationend` y un elemento en `display:none` no anima. No pasa: `components/icon-button/src/use-ripple.ts:20` los remueve con `useTimeoutFn(..., 700)`, que corre igual. No hay fuga de estado.

---

## Qué se cumplió — 3 de 3

**Tarea 1 · Prop `showBack`, emit `back` y la flecha.** `drawer.ts:42` (prop booleana) y `:64` (`back: () => true` dentro del objeto). `drawer.vue:49` (`v-if="showClose || showBack"`), `:52-57` (el `g-icon-button` con `"regular arrow-left"` antes del close), `:142` (`const emit = defineEmits`), `:220` (`handleBack`). Los cuatro casos del `listo cuando` están en `components/drawer/tests/Drawer.spec.ts:8-63` con `render`/`fireEvent`/`emitted()`, en verde. **Los tres commits nuevos no tocaron nada de esto**: el único cambio en `drawer.vue` es el `:class` de la línea 55.

**Tarea 2 · Layout de la fila superior.** `drawer.styles.scss:11-13` (`container-close` con `w-full flex items-center`) y `:30-32` (modificador `close` con `ml-auto`). Verificado **resuelto por Tailwind**: `display:flex`, `width:100%`, `align-items:center`, `margin-left:auto`, y `align-self` ya no aparece en ninguna parte. `scss-parity drawer drawer-theme` → `exit=0`. El baseline es byte-idéntico al que emite `--update drawer`, incluidas las reglas nuevas: no se editó a mano.

**Tarea 3 · Storybook.** `stories/drawer.stories.ts:169-172` (`showBack` en `argTypes`) y `:504` (`defaultValue: false`). La story de combinaciones lo menciona en `:1062`, `:1113`, `:1164` y `:1184-1189`. Sin tocar por los tres commits.

**Ninguno de los tres commits nuevos rompe un criterio que la ronda 1 dio por bueno.** Verificado contra el §3 del `proposal.md`: sus tres declaraciones y su invariante (`align-self:flex-end` ausente) siguen intactas. El modificador `back` es un selector nuevo y disjunto.

---

## Qué quedó a medias — nada

Ningún `listo cuando` sin cumplir. `tareas_a_medias: []`, igual que la ronda 1 — no hay reincidencia.

---

## Qué se hizo de más — 5

**Los tres commits nuevos son `de_mas`, y no fue una decisión ajustada:** ningún `listo cuando` los pide, ni de refilón. El de la tarea 2 habla de `container-close` y del modificador `close`; el de la tarea 1, del render y del emit. Ninguno menciona hover, ripple ni ancho del botón.

**1. `58ede408` · apagado de hover y ripple.** `drawer.vue:55` + `drawer.styles.scss:26-28` + baseline. Cambia el _feedback de interacción_ de un botón: el back arrow deja de tener affordance de hover y de pulsación, a diferencia de todos los demás `g-icon-button` del DS. Ningún criterio lo pidió, ningún test lo cubre, ningún escenario lo describe.

**2. `af245055` · el `w-auto` que no hacía nada.** Su efecto neto es nulo y `379bae82` lo supersede, pero **si alguien hace cherry-pick o stackea PRs por commit, `af245055` solo reintroduce el bug**.

**3. `379bae82` · el selector compuesto.** Es el arreglo correcto y gana la cascada. Costo registrado: `drawer.styles.scss` ahora **hardcodea el nombre de bloque de otro componente**. Si `icon-button` renombra su bloque, o si el drawer cambia de componente para la flecha, la regla vuelve a morir en silencio — el mismo modo de falla que ya mordió una vez.

**4 y 5 · Los dos de la ronda 1, que siguen en el diff:** el barrido de prettier sobre `stories/drawer.stories.ts` (528 líneas, content-neutral) y el import muerto `DrawerInstance` removido en `:5`.

**El área táctil.** Con el botón en 17.5×48 queda por debajo del mínimo recomendado para touch. Se ofreció `-ml-4` dos veces y el dev eligió `w-auto` sabiendo el costo. **Es decisión tomada, no descuido, y no cuenta como falta.** Pero es un cambio de comportamiento que ningún criterio revisó.

---

## Escenarios — 4 de 4 con evidencia

| Escenario                                               | Qué lo prueba                                                                                                                                                                                                                                                    |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Con la flecha activa, el click emite `back` y no cierra | `Drawer.spec.ts:36-49` — `emitted().back` longitud 1, `close` undefined, `update:modelValue` undefined. Intacto tras los tres commits                                                                                                                            |
| Sin la prop, el header no cambia                        | `Drawer.spec.ts:8-20` + §3 resuelto por Tailwind. Las reglas nuevas no lo tocan: viven bajo `--back`, que solo existe cuando `showBack` es true                                                                                                                  |
| Solo flecha, sin cerrar                                 | `Drawer.spec.ts:51-63`                                                                                                                                                                                                                                           |
| Convivencia de los dos botones                          | `Drawer.spec.ts:22-34` + §3 + la medición en el DOM. **Mejoró con los commits**: «pegada al borde izquierdo» era ambiguo antes (caja a ras, glifo a 39.3px contra título a 24px); con `379bae82` el glifo está en 24. Pasó de ambiguo a inequívocamente cumplido |

---

## El spec quedó desactualizado

**No miente, pero ya no describe todo lo que el componente hace.**

- El `Requirement: Flecha de volver opcional en el header` dice «renderiza un botón de icono con `arrow-left`... y emite el evento `back`». Sigue siendo **literalmente cierto**, y por eso no tumba el veredicto.
- Lo que no dice es que **ese botón no se comporta como los demás botones de icono del DS**: sin fondo de hover, sin ripple, y con una caja que no es la de 48×48 de `g-icon-button`. Tres divergencias, cero palabras en el spec.
- **El riesgo:** el archive copia este delta a `openspec/specs/` y ahí se vuelve la verdad del sistema. Quien lea el requisito en seis meses va a asumir un `g-icon-button` estándar.

**Esto tendría que haber vuelto al `plan`.** Tres commits de código de producción llegaron sin tarea, sin `listo cuando`, sin test y sin escenario — y uno fue un no-op que ningún comando de «Cómo se verifica» podía detectar, porque el §3 solo mira `container-close` y `close`. **La sección de verificación no cubre el modificador `back`**, así que el falso verde de `af245055` no fue mala suerte: fue el hueco previsible de un cambio que se saltó la planificación.

No es `no pasa` porque no hay tarea a medias ni comando declarado que falle. Pero **antes de archivar corresponde una pasada corta por `plan`** que produzca: (a) una tarea con su `listo cuando` para el chrome de la flecha, (b) un escenario que declare el comportamiento sin hover y la caja ajustada con su costo táctil aceptado, y (c) un comando que mida el **ganador de cascada**, no la presencia de la regla.

---

## Lo demás que se miró

**Validación.** `calcifer check origin/main` sale `exit=0` pero reporta `SIN REVISAR` para los 10 archivos. No aportó cobertura. `calcifer rules` confirma que **ninguna rule gobierna los `.scss`** más allá de `calcifer-mcp-g66.md`: no hay regla que el `w-auto` viole, ni ninguna que lo hubiera atajado.

**Dos hallazgos del plan que reinciden de la ronda 1.** (a) El §4 bloque 2 sigue sin declarar salida esperada. (b) El pipe `rg -o "FAIL..."` del §2 descarta la línea de resumen, así que los conteos que la prosa cita no son observables desde el comando.

**Dato nuevo: la suite completa salió verde.** `77 passed (77)`, `555 passed (555)`, `exit=0`, con la lista de `FAIL` vacía. `BenefitsCard.spec.ts` ya no falla en este entorno: el `node_modules` enlazado resuelve los sets Pro de FontAwesome. **No frena** porque el plan designó la invariante como criterio vinculante y autorizó que la lista se encoja. Queda dicho para que el `proposal.md` no siga afirmando un `exit=1` que este entorno ya no reproduce.

**Higiene.** Worktree en HEAD detached sobre `379bae82`, contenido idéntico a la rama. `node_modules` enlazado y borrado al terminar; `git status --porcelain` vacío.
