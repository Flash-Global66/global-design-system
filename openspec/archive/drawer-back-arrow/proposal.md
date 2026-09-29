# Flecha de volver opcional en el header del drawer, que emite `back`

> **Rama:** `brayan/feat/drawer-back-arrow`
> **Base:** `ee000ea6`
> **HU:** pendiente

## Por qué

El header del drawer hoy solo puede mostrar el botón de cerrar. El diseño pide una flecha de volver
a la izquierda de esa misma fila, con el `×` quedando a la derecha, para los flujos donde el drawer
es un paso dentro de una secuencia y no una pantalla terminal.

## Alcance

Una prop opcional `showBack` (default `false`) que renderiza un `g-icon-button` con
`"regular arrow-left"` a la izquierda de la fila superior del header, y que al click emite **`back`**
y nada más. **No cierra el drawer**: qué significa «volver» lo decide el consumidor — para un design
system, asumir la navegación es imponer una política que no le toca.

El icono está verificado contra la **allowlist de tipos** (`components/icon-font/src/icon-sets.ts`),
que es de donde se construye `IconString` y que **no es la misma lista** que la lib de glifos: un
nombre puede estar en la lib y no compilar. `arrow-left` está en `solid` (:63), `regular` (:144) y
`light` (:262).

### El detalle de layout, que es donde está la trampa

El header es `flex flex-col` y `container-close` se va a la derecha con `self-end` sobre el eje
cruzado (`drawer.styles.scss:11-13`). Para poner `<` a la izquierda y `×` a la derecha en la misma
fila, esa fila pasa a ser un flex horizontal a lo ancho.

**El reflejo de usar `justify-between` rompe el caso actual:** con un solo hijo, `justify-between` lo
manda a la _izquierda_, así que todo drawer existente sin flecha vería su `×` saltar de la derecha a
la izquierda. La solución que funciona en los cuatro casos es **`ml-auto` en el close**, porque
`margin-left: auto` no depende de cuántos hermanos haya.

| `showBack` | `showClose` | resultado                       |
| ---------- | ----------- | ------------------------------- |
| sí         | sí          | `<` izquierda · `×` derecha     |
| no         | sí          | `×` derecha — **igual que hoy** |
| sí         | no          | `<` izquierda                   |
| no         | no          | el contenedor no se renderiza   |

### Tres cosas del código que condicionan la implementación

1. **`drawerEmits = dialogEmits`** (`drawer.ts:58`) es una reasignación, no un objeto propio. Agregar
   `back` obliga a `{ ...dialogEmits, back: () => true }`.
2. **`defineEmits(drawerEmits);`** (`drawer.vue:131`) descarta el retorno. Para emitir hace falta
   `const emit = defineEmits(drawerEmits)`.
3. **El contenedor es `v-if="props.showClose"`** (`drawer.vue:49`). Si solo viene la flecha, no se
   renderiza nada: la condición pasa a `showClose || showBack`.

## Fuera de alcance

- **Que `back` cierre el drawer, navegue, o toque el historial.** Emite y se acaba.
- **Un slot para personalizar la flecha** (`#back`). Nadie lo pidió y agrega superficie de API.
- **Tocar `showClose`, `withHeader` ni el resto del header.** Título, descripción y `customHeader`
  quedan como están.
- **`components/drawer/src/styles/drawer.scss`** (capa tema). Sus reglas de header ya las pisa la
  capa Tailwind; tocarla no mueve un pixel y ensucia el baseline `drawer-theme`.
- **Exportar un tipo `DrawerEmits`.** Hoy no existe; crearlo es otro cambio.
- Las 4 declaraciones muertas de la capa tema y el rot de `targets.json:56-58`. Deuda preexistente.

## Restricciones

- **El template no lleva utilidades de Tailwind sueltas.** En `drawer.vue:44-79` cada `class` es un
  `ns.e()` o `ns.em()`, y todo el `@apply` vive en `drawer.styles.scss`. El `ml-auto` va como
  modificador BEM (`ns.em('header','close')`), no escrito en el template.
- **Solo tokens del scale del proyecto** (`tailwind.config.cjs`). Nada de valores arbitrarios.
- **El baseline de paridad se regenera con el script**, nunca a mano:
  `node scripts/scss-parity.mjs --update drawer`. `drawer.styles.scss` es target
  (`targets.json:46-47`) y **el workflow de PR no corre `scss:parity`**, así que un baseline
  desfasado no lo avisa nada.
- **Tensión de naming, dicha para que el review la pueda discutir:** `naming.md` pide booleanos con
  `is`/`has`/`should`/`can`/`did`, y `showBack` no cumple. Se elige igual por consistencia con
  `showClose`, su hermano literal en el mismo header. Un `shouldShowBack` al lado de `showClose` es
  peor API que la inconsistencia con la rule.

## Cómo se verifica

**Estos comandos no se pudieron correr en la fase de plan** (el worktree no tiene `node_modules` y
enlazarlo es una escritura, que el modo plan bloquea), así que se escribieron como **forma e
invariante**. Los que dependían de un valor se midieron durante el apply y ya están pegados acá: no
queda ninguna expectativa provisional.

### 0 · Preparar el entorno (el `rm -rf` es parte del comando)

```bash
rm -rf node_modules && ln -s ../../../node_modules node_modules
```

El enlace alcanza porque `@flash-global66/*` son symlinks a `common/` y `components/`, que son
fuente y no build. Está en `.gitignore:3`. El `rm -rf` va primero porque un run fallido de
`scss-parity.mjs` deja un directorio `node_modules/.cache` y entonces el `ln -s` cae _dentro_.
Al terminar todo: `rm node_modules`.

### 1 · La prop y el emit existen y están conectados

```bash
rg -n "showBack|back:" components/drawer/src/drawer.ts
rg -n "arrow-left|handleBack|const emit" components/drawer/src/drawer.vue
```

Esperado: en `drawer.ts`, `showBack` como prop booleana y `back` dentro del objeto de emits (ya no
`drawerEmits = dialogEmits` a secas). En `drawer.vue`, el icono `"regular arrow-left"`, un handler
que emite `back`, y `const emit = defineEmits(...)` — sin ese `const`, el handler no compila.

### 2 · El comportamiento, que es el criterio del cambio entero

```bash
node node_modules/vitest/vitest.mjs run components/drawer; echo "exit=$?"
```

Esperado: `exit=0` y **cero fallidos**, con los cuatro casos del `listo cuando` de la tarea 1
presentes como tests. El criterio vinculante es el `0 failed` y que
`components/drawer/tests/Drawer.spec.ts` exista y corra — no el conteo, que crece.

La suite completa es otra pregunta, y **su criterio NO es «cero fallidos»**: el repo ya viene con un
archivo en rojo desde `Base`. Medido con el mismo comando en los dos lados —
`1 failed | 75 passed (76)` en `ee000ea6` y `1 failed | 76 passed (77)` en HEAD, con el drawer
sumando su archivo:

```bash
node node_modules/vitest/vitest.mjs run 2>&1 | rg -o "FAIL\s+\S+\.spec\.ts" | sd 'FAIL\s+' '' | sort -u
```

Esperado: exactamente esta línea y ninguna otra —

```
components/benefits-card/tests/BenefitsCard.spec.ts
```

**La invariante, que es el criterio vinculante:** en esa lista no aparece ningún archivo que no
estuviera ya fallando en `Base`. La lista puede _encogerse_ sin romper nada; lo que la rompe es un
nombre nuevo. El run completo sale `exit=1` y **ese es el valor correcto**, igual que en `Base`.

Ese único fallo es **ambiental y ajeno a este cambio**: `GIconFont` renderiza
`<font-awesome-icon v-if="selectedIcon">` y el glifo no resuelve —
`Could not find one or more icon(s) { prefix: 'fal', iconName: 'fingerprint' }`—, porque los sets
Pro de FontAwesome vienen del registry privado que gatea `GBP_PACKAGE_TOKEN`. CI tiene el token y lo
ve verde.

### 3 · El layout, resuelto por Tailwind y no leído del config

```bash
npx tailwindcss -c tailwind.config.cjs -i scripts/scss-parity/baseline/drawer.css -o /tmp/drawer.resolved.css
awk '/gui-drawer__header--container-close \{/{f=1} f&&/display:|align-items:|width:/{print} /^\}/{f=0}' /tmp/drawer.resolved.css
awk '/gui-drawer__header--close \{/{f=1} f&&/margin-left:/{print} /^\}/{f=0}' /tmp/drawer.resolved.css
```

Esperado: el contenedor resuelve a `display: flex`, `align-items: center` y ancho completo; el
modificador del close resuelve a `margin-left: auto`. Mide **declaraciones resueltas** por la misma
pipeline que corre el consumidor, no texto fuente ni el config leído a mano.

Y la invariante que protege lo que ya andaba: **`align-self: flex-end` ya no aparece** en el
contenedor, porque es justo la regla que se reemplaza.

### 4 · La paridad byte-exacta, con su invariante

```bash
node scripts/scss-parity.mjs drawer drawer-theme; echo "exit=$?"
```

Esperado: `exit=0`, con `OK: drawer` y `OK: drawer-theme`.

```bash
node scripts/scss-parity.mjs 2>&1 \
  | sed -nE 's/^\[scss-parity\] OK: (.+)$/OK \1/p; s/^\[scss-parity\] MISMATCH en "([^"]+)".*$/MISMATCH \1/p; s/^\[scss-parity\] ERROR compilando "([^"]+)".*$/ERROR \1/p' \
  | sort | rg -v '^OK '
```

El run completo sale **`exit=1`, y ese es el valor correcto**: lo era también antes de este cambio,
por targets rotos **preexistentes**. **La invariante, que es el criterio vinculante:** en esa salida
no aparece ningún target de drawer, y no aparece ningún nombre que no estuviera ya roto en `Base`.
La lista puede _encogerse_ sin romper nada; lo que la rompe es un nombre nuevo, que sería este
cambio habiendo tocado algo ajeno. La lista de `Base` se mide corriendo el mismo comando sobre
`git archive ee000ea6` extraído a un temporal.

### 5 · El alcance, anclado a `Base`

```bash
git diff --name-only ee000ea6..HEAD
```

Esperado: exactamente estos seis y ninguno más — `components/drawer/src/drawer.ts`,
`components/drawer/src/drawer.vue`, `components/drawer/tests/Drawer.spec.ts`,
`components/drawer/src/drawer.styles.scss`, `scripts/scss-parity/baseline/drawer.css`,
`stories/drawer.stories.ts` — más este `proposal.md`, su `tasks.md` y `specs/drawer/spec.md`.

En particular **`components/drawer/src/styles/drawer.scss` NO aparece**: la capa tema queda intacta.

### 6 · El chrome de la flecha, midiendo el GANADOR de cascada y no la presencia de la regla

Esta sección se agregó **después** de que las tareas 1-3 ya estaban hechas y verificadas, y existe por un
error concreto: el commit `af245055` puso `@apply w-auto` en `.gui-drawer__header--back` y **no hacía
nada**. La regla estaba en el fuente y en el CSS compilado, se aplicaba al elemento correcto, y el botón
seguía midiendo 48px — porque `.gui-icon-button { width: 3rem }` tiene **la misma especificidad** (una
clase) y se importa **después** (`assets/scss/index.scss:36` contra `:25`). Ningún comando de las
secciones 1-5 podía detectarlo: la §3 solo mira `container-close` y `close`.

**Comprobar que una regla existe no verifica nada. Hay que comprobar que gana.**

```bash
cat scripts/scss-parity/baseline/drawer.css scripts/scss-parity/baseline/icon-button.css > /tmp/cascada.css
npx tailwindcss -c tailwind.config.cjs -i /tmp/cascada.css -o /tmp/cascada.resolved.css
rg -n "^\.gui-(drawer__header--back|icon-button)[^,{]*\s*\{" -A 8 /tmp/cascada.resolved.css \
  | rg "^\d+[:-]\.gui|width:" | rg -B 1 "width:"
```

El `cat` respeta el orden real de `assets/scss/index.scss`: drawer (`:25`) antes que icon-button (`:36`).

Esperado, las dos reglas que compiten por el ancho del botón de volver:

```
.gui-drawer__header--back.gui-icon-button {   ← DOS clases (0,2,0)
  width: auto;
.gui-icon-button {                             ← UNA clase (0,1,0), y va DESPUÉS
  width: 3rem;
```

**La invariante, que es el criterio vinculante:** el selector que fija `width` sobre el botón de volver
tiene que ser **compuesto** —dos clases—, porque su competidor es de una sola y viene después. Un
selector de una clase pierde por orden y la regla queda muerta en silencio.

```bash
rg -c "^\.gui-drawer__header--back \{" /tmp/cascada.resolved.css
```

Esperado: **`0`**. Si aparece una regla de una sola clase sobre `--back`, es justo la forma que ya falló.

```bash
rg -n "gui-drawer__header--back \.hover-effect" -A 2 /tmp/cascada.resolved.css
```

Esperado: `display: none`. Esta sí gana siempre, y por otro motivo: **ninguna regla de icon-button
declara `display` sobre `.hover-effect`** (solo `width`, `height` y `background`), así que no hay
competencia. Los ripples son hijos de ese span, así que caen con él.

**Lo que este criterio NO cubre, dicho para que nadie lo suponga:** el área táctil. Con el botón en
`w-auto` queda en ~17.5×48, por debajo del mínimo recomendado para touch. Se evaluó `-ml-4` como
alternativa —alineaba el glifo conservando los 48px— y **se eligió `w-auto` a sabiendas**. Es una
decisión tomada, no un descuido, y ningún comando la mide.

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.
