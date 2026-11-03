# Verificación · g-link-v1-keyboard-navigation

```yaml
veredicto: no pasa
ronda: 2
fecha: 2026-11-03
vuelve_a: plan
tareas_a_medias: [4]
cumplidas: 4/5
a_medias: 1
de_mas: 4
escenarios: 5/6
comandos:
  - cmd: ../../../node_modules/.bin/vitest run --project unit 2>&1 | tail -4
    exit: 0
    esperado: '0 failed · Test Files >= 85 · Tests > 709'
    obtenido: 'Test Files 85 passed (85) · Tests 745 passed (745)'
    coincide: true
  - cmd: ../../../node_modules/.bin/vitest run --project unit components/link 2>&1 | tail -4
    exit: 0
    esperado: '2 archivos, todos en verde'
    obtenido: 'Test Files 2 passed (2) · Tests 36 passed (36) (Link.spec.ts 22, useLink.spec.ts 14)'
    coincide: true
  - cmd: ../../../node_modules/.bin/eslint components/link stories/link.stories.ts --ext .vue,.ts --max-warnings 0
    exit: 0
    esperado: 'sin salida, exit=0'
    obtenido: 'sin salida, exit=0'
    coincide: true
  - cmd: 'compilación por ruta de components/link/src/Link/link.style.scss + diff contra $SCRATCH/g-link.antes.css'
    exit: 1
    esperado: 'solo las líneas de :focus-visible de la regla .gui-link:focus-visible (tarea 4)'
    obtenido: '220 -> 229 líneas: el bloque .gui-link:focus-visible de la ronda 1 (6 líneas) MÁS una regla nueva, .gui-link.gui-link--tertiary:focus-visible { outline-color: #FFFFFF; } (3 líneas)'
    coincide: false
  - cmd: '(cd components/link && vite build --outDir $SCRATCH/verify-r2-link-dist --emptyOutDir) && ls'
    exit: 0
    esperado: 'index.js e index.mjs'
    obtenido: '✓ built · index.js, index.mjs'
    coincide: true
  - cmd: git diff --name-only 55ca1e8a..HEAD -- . ':!openspec' | sort
    exit: 0
    esperado: 'solo components/link/** y stories/link.stories.ts'
    obtenido: '11 archivos en components/link/** + stories/link.stories.ts'
    coincide: true
  - cmd: '(cd components/link && vue-tsc --project tsconfig.json --declaration --emitDeclarationOnly --declarationDir $SCRATCH/vtsc-r2)'
    exit: 0
    esperado: 'sin errores y sin compilar tests/ (listo cuando de la tarea 2)'
    obtenido: 'sin errores; 5 .d.ts (index, useLink, index.vue, link.type, link.constant), nada de tests/'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'sin hallazgos (el plan no declaró un resultado)'
    obtenido: "sin hallazgos, pero 'SIN REVISAR': ningún validador local cubrió los 16 archivos (eslint, check-architecture y test quedan para CI)"
    coincide: true
```

Contexto: la ronda 1 pasó (5/5, 6/6). Después entraron tres commits que corrigen hallazgos de un code review: `5da9ac1c` (anillo blanco en tertiary), `2e95bf0e` (`LinkInstance` y `UseLinkReturn` en `types/`, spec renombrado a `Link.spec.ts`) y `1b5cfa39` (ruta de estilos en la story). El rename del spec quedó dentro de `5da9ac1c` y no en `2e95bf0e`, porque `git mv` lo había dejado staged.

## Qué se cumplió (4/5)

1. **Migración**: `components/link/src/Link/{index.vue,useLink.ts,constants/link.constant.ts,types/link.type.ts,link.style.scss}` y `components/link/index.ts`. `index.ts` sigue exportando los 6 nombres, sin `export *` ni default. El spec de caracterización ahora es `tests/Link/Link.spec.ts`; las tareas 1 y 3 dicen `index.spec.ts`, pero manda la rule `ds-component-layers` (principio 4).
2. **Buildable**: `package.json`, `vite.config.ts` y `tsconfig.json`. Pasan el build y vue-tsc.
3. **Botón con teclado**: `useLink.ts`, `link.constant.ts`, `tests/Link/Link.spec.ts` y `tests/Link/useLink.spec.ts`. El rename y `UseLinkReturn` no cambian el comportamiento.
4. **Story**: `stories/link.stories.ts`, con eslint en 0.

## Qué quedó a medias

- **Tarea 4**: el criterio pide que el diff compilado muestre **solo** la regla `.gui-link:focus-visible`, y ahora aparece además `.gui-link.gui-link--tertiary:focus-visible { outline-color: #FFFFFF; }`. Por la misma razón quedan contradichos el escenario «El estilo exportado agrega solo la regla de foco» y el texto del Requirement («Todo `GLink` SHALL mostrar un contorno `outline-primary-def`»).
  - El cambio de código se justifica: el tertiary va sobre `bg-primary-def`, y ahí un anillo `primary-def` no se ve.
  - Lo que falla es el criterio, que no previó esa variante. Hay que corregir el plan (la tarea 4, el Requirement y su escenario), no revertir el commit.

## Qué se hizo de más (4)

- `aria-disabled` también con href, y las dos viñetas de la story (ya reportados en la ronda 1).
- `UseLinkReturn` y la anotación de retorno de `useLink`, por la rule `typescript-types`.
- La ruta de estilos de la story corregida a `@flash-global66/g-link/styles.scss` (el error ya estaba en Base).

## Escenarios (5/6)

- Los 5 de teclado y href siguen cubiertos por `tests/Link/Link.spec.ts` y `tests/Link/useLink.spec.ts`.
- «El estilo exportado agrega solo la regla de foco» queda **contradicho** por el diff compilado; no es un caso sin probar.
