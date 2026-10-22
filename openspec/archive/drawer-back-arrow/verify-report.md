# Verificación · drawer-back-arrow

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-09-29
tareas_a_medias: []
cumplidas: 4/4
a_medias: 0
de_mas: 2
escenarios: 6/6
comandos:
  - cmd: rg -n "showBack|back:" components/drawer/src/drawer.ts ; rg -n "arrow-left|handleBack|const emit" components/drawer/src/drawer.vue
    exit: 0
    esperado: 'showBack prop booleana + back dentro del objeto de emits; icono "regular arrow-left", handler que emite back, const emit = defineEmits(...)'
    obtenido: 'drawer.ts:42 showBack · :64 back: () => true · drawer.vue:54 arrow-left · :56 @click=handleBack · :142 const emit = defineEmits · :220 function handleBack'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run components/drawer
    exit: 0
    esperado: 'exit=0 y cero fallidos, con los cuatro casos del listo cuando de la tarea 1 presentes como tests'
    obtenido: 'Test Files 1 passed (1) · Tests 4 passed (4) · los cuatro casos en Drawer.spec.ts:8, :22, :36, :51'
    coincide: true
  - cmd: node node_modules/vitest/vitest.mjs run 2>&1 | rg -o "FAIL\s+\S+\.spec\.ts" | sd 'FAIL\s+' '' | sort -u
    exit: 0
    esperado: 'exactamente components/benefits-card/tests/BenefitsCard.spec.ts y ninguna otra · exit=1. Invariante VINCULANTE declarada por el plan: ningun nombre nuevo; la lista puede encogerse sin romper nada'
    obtenido: 'lista VACIA · exit=0 · Test Files 77 passed (77) · Tests 555 passed (555). Invariante cumplida; el valor literal que el plan cita quedo desactualizado (igual que en ronda 2)'
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
    esperado: 'sin lista literal; solo la invariante — ningun target de drawer y ningun nombre que no estuviera ya roto en Base'
    obtenido: 'ERROR table, table-column-theme, table-theme · MISMATCH quote, select, select-v2-theme — identica a Base; ningun drawer, ningun nombre nuevo'
    coincide: true
  - cmd: node scripts/scss-parity.mjs --update drawer ; git diff scripts/scss-parity/baseline/drawer.css
    exit: 0
    esperado: 'restriccion del proposal: el baseline se regenera con el script, nunca a mano'
    obtenido: 'baseline actualizado: drawer · git diff VACIO — byte-identico al que emite el script'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD
    exit: 0
    esperado: 'los seis archivos de codigo + proposal.md, tasks.md y specs/drawer/spec.md = 9; components/drawer/src/styles/drawer.scss NO aparece'
    obtenido: '10 archivos: los nueve declarados + verify-report.md (el registro obligatorio, que no existia cuando se escribio la linea). drawer.scss ausente: la capa tema quedo intacta'
    coincide: true
  - cmd: '§6a · cat drawer.css icon-button.css > /tmp/cascada.css ; npx tailwindcss ... ; rg ... | rg -B 1 "width:"'
    exit: 0
    esperado: '.gui-drawer__header--back.gui-icon-button (0,2,0) con width:auto, y .gui-icon-button (0,1,0) con width:3rem DESPUES. Invariante vinculante: el selector del ancho tiene que ser compuesto'
    obtenido: ':175 .gui-drawer__header--back.gui-icon-button { width:auto } · :288 .gui-icon-button { width:3rem }. Compuesto y gana por especificidad. El comando emite ademas 4 pares que el bloque declarado no muestra (--border, --small, :hover .hover-effect, __ripple): ruido, no contradiccion'
    coincide: true
  - cmd: rg -c "^\.gui-drawer__header--back \{" /tmp/cascada.resolved.css
    exit: 1
    esperado: '0 — si aparece una regla de una sola clase sobre --back, es la forma que ya fallo'
    obtenido: 'sin salida · exit=1 (cero ocurrencias). rg -c NO imprime 0 sin --include-zero: el valor literal que el plan declara es inalcanzable con el comando tal como esta escrito. La sustancia se cumple: cero reglas de una clase'
    coincide: true
  - cmd: rg -n "gui-drawer__header--back \.hover-effect" -A 2 /tmp/cascada.resolved.css
    exit: 0
    esperado: 'display: none'
    obtenido: ':179 .gui-drawer__header--back .hover-effect { display: none }'
    coincide: true
  - cmd: calcifer check origin/main
    exit: 0
    esperado: 'el plan no declaro resultado para este comando'
    obtenido: 'SIN REVISAR — ningun validador miro los 10 archivos: eslint lo delega a pr-checks.yml, test a desploy-develop.yml, y no trae check-architecture'
    coincide: no_verificado
```

---

## ¿La corrección del plan (`aad3d49c`) fue legítima?

Las cuatro cosas corrigen huecos reales, y se dice con medición, no con impresión.

### La §6 NO es presencia disfrazada — probado con el contrafáctico

No alcanzaba con correr la §6 sobre HEAD: eso solo muestra que hoy pasa. Se reconstruyó el estado muerto y se le corrieron los mismos comandos:

```
git show af245055:scripts/scss-parity/baseline/drawer.css → .gui-drawer__header--back { width: auto }   ← UNA clase
```

| Comando §6               | HEAD (`379bae82`)                                                   | Estado muerto (`af245055`)                                       |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| §6a · forma del selector | `.gui-drawer__header--back.gui-icon-button` → **compuesto, cumple** | `.gui-drawer__header--back` → **una clase, viola la invariante** |
| §6b · `rg -c`            | sin salida, exit 1 (**cero**)                                       | **`1`**, exit 0 → **falla**                                      |

**El criterio rechaza el estado que realmente shippeó en su momento.** No se puede satisfacer con una regla muerta.

### Pero su título promete más de lo que sus comandos hacen

El encabezado dice «midiendo el **GANADOR** de cascada». **Ningún comando de la §6 computa un ganador.** Computan la _forma_ del selector (compuesto) y la _ausencia_ de la forma mala. Que eso implique el ganador depende de una afirmación en prosa —«su competidor es de una sola y viene después»— calibrada al `icon-button` de hoy.

Modo de falla que queda abierto: si `icon-button` publica una regla de ancho de dos clases posterior (p. ej. `.gui-icon-button.gui-icon-button--medium`), empata en especificidad, gana por orden, **la regla del drawer vuelve a morir en silencio y la §6 sigue en verde**. La ronda 2 sí computó el ganador de verdad (postcss + `postcss-selector-parser`); la §6 adoptó un proxy más barato. Es un guard más estrecho que «la regla existe», pero no es lo que su título dice.

### La tarea 4 retroactiva es registro honesto

1. **La nota en bloque de cita dice exactamente lo que pasó**, incluido que el `[x]` no significa que el apply la corrió.
2. **El `listo cuando` es falsable y de hecho falsa.** Exige que la regla _gane_, no que exista — y rechaza `af245055`.
3. **La línea `commit:` nombra `58ede408` y `379bae82`, y NO nombra `af245055`.** Coherente: el commit muerto no satisface el criterio. Si la tarea se hubiera escrito para justificar lo hecho, los habría listado los tres.

### El spec cumple la forma que el archivado exige

3 requisitos, 6 escenarios, `SHALL` en los tres. Cada escenario con tarea: 1-3 → tarea 1, 4 → tarea 2, **5 y 6 → tarea 4**. El requisito nuevo **declara el costo táctil explícitamente**.

### Las frases huérfanas que quedaron

**El preámbulo de «Cómo se verifica» dice que no queda ninguna expectativa provisional.** Ya no es cierto: (a) la §2 sigue pegando `1 failed | 76 passed (77)`, que las rondas 2 y 3 contradicen; (b) la §6 no se escribió en la fase de plan ni se midió durante el apply — se escribió después de la ronda 2. La §6 lo declara en su primer párrafo, así que no engaña, pero el preámbulo la cubre con un marco que no le corresponde.

**Segundo, más blando:** la sección **«Alcance» nunca se actualizó**. Sigue describiendo el botón «que al click emite `back` y nada más», sin mencionar que se le apaga el chrome. El spec y la tarea 4 lo declaran; el Alcance no.

---

## Qué se cumplió — 4 de 4

**Tarea 1.** `drawer.ts:42` y `:64`; `drawer.vue:49`, `:52-57`, `:142`, `:220`. Los cuatro casos en `Drawer.spec.ts:8, :22, :36, :51`, en verde.

**Tarea 2.** `drawer.styles.scss:11-13` y `:30-32`. Resuelto por Tailwind: `display:flex`, `width:100%`, `align-items:center`, `margin-left:auto`, `align-self` ausente. Baseline byte-idéntico al que emite `--update`.

**Tarea 3.** `stories/drawer.stories.ts:169-176`, `:504`, `:1062`, `:1189`.

**Tarea 4.** `drawer.vue:55`; `drawer.styles.scss:14-29`. Los cuatro criterios verificados: modificador presente, `.hover-effect` en `display:none`, `width:auto` aplicado, y **la regla gana** — compuesto (0,2,0) contra el (0,1,0) de `icon-button`. Respeta la restricción: el `@apply` vive en el `.scss`, el template solo lleva `ns.em()`.

---

## Qué quedó a medias — nada

`tareas_a_medias: []`, igual que las rondas 1 y 2. Sin reincidencia.

---

## Qué se hizo de más — 2 (bajó de 5)

**Los tres commits del chrome ya NO son `de_mas`.** Con la tarea 4 declarada y su `listo cuando` cumplido, `58ede408` y `379bae82` pasan a ser trabajo pedido.

**`af245055` tampoco cuenta:** su aporte al árbol de HEAD es **nulo** — `379bae82` lo supersede dentro de la misma rama, y el criterio de la tarea 4 lo rechaza. Es historia intermedia, no cambio de más. **Queda el riesgo anotado en la ronda 2:** con cherry-pick o PRs stackeados por commit, `af245055` solo reintroduce el bug.

**1. El barrido de prettier sobre `stories/drawer.stories.ts`.** 298 inserciones / 262 borrados donde el cambio real son ~10 líneas: comillas dobles → simples. Ningún `listo cuando` lo pide.

**2. El import muerto `DrawerInstance`**, removido en `:5`. Limpieza correcta, pedida por nadie.

---

## Escenarios — 6 de 6 con evidencia

| #   | Escenario                                               | Qué lo prueba                                                                                                                                                                                                                         |
| --- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Con la flecha activa, el click emite `back` y no cierra | **Test** `Drawer.spec.ts:36`                                                                                                                                                                                                          |
| 2   | Sin la prop, el header no cambia                        | **Test** `Drawer.spec.ts:8` + §3                                                                                                                                                                                                      |
| 3   | Solo flecha, sin cerrar                                 | **Test** `Drawer.spec.ts:51`                                                                                                                                                                                                          |
| 4   | Convivencia de los dos botones                          | **Test** `Drawer.spec.ts:22` + §3                                                                                                                                                                                                     |
| 5   | Sin feedback de hover ni ripple                         | **Comando** §6c — `display: none` en `:179`. Gana siempre: ninguna regla de icon-button declara `display` sobre ese span. **Sin test**                                                                                                |
| 6   | El glifo alineado con el contenido del header           | **Comando** §6a + derivación del CSS resuelto: header `padding-left: 1.5rem` (`:164`), `.gui-icon-button` sin padding ni border (`:288-294`) → glifo y título en 24px. Coincide con la medición en el DOM de la ronda 2. **Sin test** |

**Los dos escenarios nuevos no tienen test automatizado**: los cubre un comando manual del proposal. Es evidencia válida, pero **no corre en CI** — el workflow de PR no ejecuta `scss:parity` ni la §6. Una regresión en el chrome no la atrapa nada automático.

---

## Deuda del plan que `aad3d49c` no tocó, y reincide

- **§2** sigue declarando `1 failed | 76 passed (77)` y «exactamente esta línea y ninguna otra». Medido hoy: **lista vacía, `exit=0`, 77/77 y 555/555**. La invariante vinculante se cumple y el plan autoriza que la lista se encoja, así que no frena — pero el texto afirma un `exit=1` que este entorno no reproduce, por tercera vez.
- **§5** declara 9 archivos y el diff trae 10 (el extra es el `verify-report.md`, registro obligatorio).
- **§4 bloque 2** sigue sin declarar salida esperada.
- **§6b** declara `Esperado: 0` para un `rg -c` que **no puede imprimir `0`** sin `--include-zero`. Discrimina bien, pero el valor declarado es inalcanzable tal como está escrito.

**Higiene.** Worktree en HEAD detached sobre `aad3d49c`. `node_modules` enlazado y borrado al terminar; `git status --porcelain` vacío.
