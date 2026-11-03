# Verificación · g-link-v1-keyboard-navigation

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-11-03
tareas_a_medias: []
cumplidas: 5/5
a_medias: 0
de_mas: 4
escenarios: 7/7
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
    esperado: 'solo .gui-link:focus-visible (solid + primary) y .gui-link.gui-link--tertiary:focus-visible (#FFFFFF), más las líneas } y .gui-link {'
    obtenido: '220 -> 229 líneas: 13a14,19 (}, .gui-link:focus-visible {outline-style: solid; outline-color: var(--color-primary)}, .gui-link {) y 154a161,163 (.gui-link.gui-link--tertiary:focus-visible {outline-color: #FFFFFF})'
    coincide: true
  - cmd: '(cd components/link && vite build --outDir $SCRATCH/verify-r3-link-dist --emptyOutDir) && ls'
    exit: 0
    esperado: 'index.js e index.mjs'
    obtenido: '✓ built · index.js, index.mjs'
    coincide: true
  - cmd: git diff --name-only 55ca1e8a..HEAD -- . ':!openspec' | sort
    exit: 0
    esperado: 'solo components/link/** y stories/link.stories.ts'
    obtenido: '11 archivos en components/link/** + stories/link.stories.ts'
    coincide: true
  - cmd: '(cd components/link && vue-tsc --project tsconfig.json --declaration --emitDeclarationOnly --declarationDir $SCRATCH/vtsc-r3)'
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

El `exit=1` del diff de CSS es el esperado: `diff` sale con 1 cuando hay diferencias, y las que aparecen son exactamente las que pide la tarea 4.

**La corrección del plan (`28a1dc51`) es legítima.** Solo toca `openspec/**`, así que el código es el mismo de la ronda 2. Sigue lo que pidió esa ronda: corregir el criterio en lugar de revertir el commit. Y el criterio no se aflojó: sigue diciendo «solo», nombra los dos selectores con sus valores y admite como únicas líneas extra el `}` y el `.gui-link {` que ya salían en la ronda 1.

## Qué se cumplió (5/5)

1. **Migración**: `components/link/src/Link/{index.vue,useLink.ts,constants/link.constant.ts,types/link.type.ts,link.style.scss}`, `components/link/index.ts` y `tests/Link/Link.spec.ts`.
2. **Buildable**: `components/link/{package.json,vite.config.ts,tsconfig.json}`. Pasan el build y vue-tsc.
3. **Botón con teclado**: `useLink.ts` y `link.constant.ts`, probados en `tests/Link/Link.spec.ts` y `tests/Link/useLink.spec.ts`.
4. **Anillo de foco**: `link.style.scss` tiene la regla `primary-def` en `b(link)` y la blanca en el tertiary. El diff compilado coincide línea por línea con el criterio.
5. **Story**: `stories/link.stories.ts`, con eslint en 0.

## Qué quedó a medias

Ninguna.

## Qué se hizo de más (4, los mismos de la ronda 2)

- `aria-disabled` también en links con href.
- Dos viñetas en la descripción de la story.
- `UseLinkReturn` y la anotación de retorno de `useLink`.
- La ruta de estilos corregida en la story.

## Escenarios (7/7)

- Los 5 de teclado y href: `tests/Link/Link.spec.ts` y `tests/Link/useLink.spec.ts` (36 tests).
- «El estilo exportado agrega solo las reglas de foco»: lo prueba el diff compilado por ruta.
- «El tertiary muestra el anillo blanco»: el diff compilado muestra `outline-color: #FFFFFF` bajo `.gui-link.gui-link--tertiary:focus-visible`, que gana por especificidad. Falta probarlo en un navegador, y el plan deja esa prueba para la fase 2.
