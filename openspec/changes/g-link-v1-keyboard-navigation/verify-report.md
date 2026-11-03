# Verificación · g-link-v1-keyboard-navigation

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-11-03
tareas_a_medias: []
cumplidas: 5/5
a_medias: 0
de_mas: 2
escenarios: 6/6
comandos:
  - cmd: ../../../node_modules/.bin/vitest run --project unit 2>&1 | tail -4
    exit: 0
    esperado: '0 failed · Test Files >= 85 · Tests > 709'
    obtenido: 'Test Files 85 passed (85) · Tests 745 passed (745)'
    coincide: true
  - cmd: ../../../node_modules/.bin/vitest run --project unit components/link 2>&1 | tail -4
    exit: 0
    esperado: '2 archivos, todos en verde'
    obtenido: 'Test Files 2 passed (2) · Tests 36 passed (36)'
    coincide: true
  - cmd: ../../../node_modules/.bin/eslint components/link stories/link.stories.ts --ext .vue,.ts --max-warnings 0
    exit: 0
    esperado: 'sin salida, exit=0'
    obtenido: 'sin salida, exit=0'
    coincide: true
  - cmd: 'compilación por ruta de components/link/src/Link/link.style.scss + diff contra $SCRATCH/g-link.antes.css'
    exit: 1
    esperado: 'solo las líneas de :focus-visible (después de la tarea 4)'
    obtenido: "220 -> 226 líneas; se agrega .gui-link:focus-visible { outline-style: solid; outline-color: var(--color-primary) } más '}' y '.gui-link {' por el corte del bloque"
    coincide: true
  - cmd: '(cd components/link && vite build --outDir $SCRATCH/verify-link-dist --emptyOutDir) && ls'
    exit: 0
    esperado: 'index.js e index.mjs'
    obtenido: '✓ built · index.js, index.mjs'
    coincide: true
  - cmd: git diff --name-only 55ca1e8a..HEAD -- . ':!openspec' | sort
    exit: 0
    esperado: 'solo components/link/** y stories/link.stories.ts'
    obtenido: '11 archivos en components/link/** + stories/link.stories.ts'
    coincide: true
  - cmd: '(cd components/link && vue-tsc --project tsconfig.json --declarationDir/--outDir al scratchpad)'
    exit: 0
    esperado: 'sin errores y sin compilar tests/ (listo cuando de la tarea 2)'
    obtenido: 'sin errores; emite index.d.ts y 4 .d.ts de src/Link, nada de tests/'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos (el plan no declaró un resultado)'
    obtenido: "sin hallazgos, pero 'SIN REVISAR': ningún validador local cubrió los 15 archivos (eslint, check-architecture y test quedan para CI)"
    coincide: true
```

## Qué se cumplió (5/5)

1. **Migración al arquetipo**: `components/link/src/Link/{index.vue,useLink.ts,constants/link.constant.ts,types/link.type.ts,link.style.scss}` y `components/link/tests/Link/index.spec.ts`. El `.scss` se movió sin cambios (`R100` en 571b5020). `index.ts` exporta `GLink`, `linkProps`, `linkEmits`, `LinkProps`, `LinkEmits` y `LinkInstance`, sin `export *` ni default (son los mismos exports que tenía `link.ts` en Base). En ese commit, `package.json` solo cambia `exports["./styles.scss"]`, y `table.stories.ts` no se tocó. El spec de caracterización existe y pasa; el historial no permite comprobar que se escribió antes del movimiento, porque va en el mismo commit.
2. **Buildable**: `components/link/package.json`, `vite.config.ts` y `tsconfig.json` siguen la plantilla de `inline` (`buildable`, `dist`, `files`, scripts, peers `vue` y `g-icon-font`, `1.0.0-0`). El build y vue-tsc pasan, y vue-tsc no compila `tests/`.
3. **Botón con teclado**: `useLink.ts`, `link.constant.ts` (`LINK_ACTIVATION_KEYS` con `EVENT_CODE` y JSDoc de `href`), `tests/Link/index.spec.ts` y `tests/Link/useLink.spec.ts`. Cada punto del criterio tiene un test, y el commit trae `!` y `BREAKING CHANGE:`.
4. **Foco visible**: `link.style.scss`. En el fuente solo se agrega `&:focus-visible`. Las líneas `}` y `.gui-link {` del diff compilado aparecen porque la regla parte en dos el bloque compilado; el segundo pedazo queda sin declaraciones, así que el CSS efectivo no cambia. Se cumple en lo sustancial. A la letra, «solo las líneas» se podía cumplir poniendo la regla al final del bloque `b(link)`.
5. **Story**: `stories/link.stories.ts`. Los 9 props van en `Props (Padre)` con tipo y default de la constante, `click` en `Eventos (Padre)`, y `default` e `icon` en `Slots (Padre)`. Las stories previas siguen intactas, se agregó `WithoutHref`, y eslint da 0.

## Qué quedó a medias

Ninguna.

## Qué se hizo de más (2)

- `useLink.ts` y `tests/Link/index.spec.ts`: `aria-disabled="true"` se aplica también a un link **con** `href` y `disabled`. La tarea 3 lo pedía solo sin href, y el criterio del cambio entero dice «con href se comporta como antes, salvo el anillo de foco».
- `stories/link.stories.ts`: se agregaron dos viñetas a la descripción del componente (botón con teclado y anillo de foco), que la tarea 5 no pedía.

## Decisiones del apply

Legítimas:

- `GLink.Link` tampoco existía en Base.
- La cabecera de Element Plus ya estaba.
- `1.0.0-0` lo pide la tarea 2 y el dev lo reconfirmó.

## Escenarios (6/6 con evidencia)

- Tab, Enter/Espacio y disabled sin href: `tests/Link/index.spec.ts`.
- Con href no es botón: «no agrega role ni tabindex» y «Espacio no activa el link».
- Disabled con href no navega: se prueban los atributos. Que no emita al hacer click se prueba de forma indirecta en `useLink.spec`, que corre sin href.
- El estilo agrega solo la regla de foco: lo prueba el diff compilado por ruta.

`calcifer check` salió con exit 0 sin validadores locales (delega en CI). Los comandos del plan se corrieron uno por uno.
