# Verificación · quote-footer-slot

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-09-28
tareas_a_medias: []
cumplidas: 3/3
a_medias: 0
de_mas: 1
escenarios: 3/3
comandos:
  - cmd: "zsh -lic 'yarn build'"
    exit: 0
    esperado: 'exit 0'
    obtenido: '42/42 componentes construidos, «✅ All components built successfully», exit 0'
    coincide: true
  - cmd: 'npx vitest run --project unit components/quote'
    exit: 0
    esperado: 'Test Files 5 passed (5) (provisional, el verify pone el número real)'
    obtenido: 'Test Files 5 passed (5), Tests 40 passed (40)'
    coincide: true
  - cmd: 'npx vitest run --project unit components/quote/tests/Quote.spec.ts'
    exit: 0
    esperado: 'Tests passed ≥ 11, 0 failed'
    obtenido: 'Tests 11 passed (11)'
    coincide: true
  - cmd: 'npx vue-tsc --noEmit -p components/quote/tsconfig.json'
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: 'npx eslint components/quote/src/quote.vue components/quote/src/quote.type.ts components/quote/tests/Quote.spec.ts stories/quote.stories.ts --max-warnings 0'
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: "zsh -lic 'yarn styles:check'"
    exit: 0
    esperado: 'exit 0, 44 paquetes'
    obtenido: 'exit 0, «44 paquete(s) con ./styles.scss compilan»'
    coincide: true
  - cmd: "zsh -lic 'yarn arch:check' 2>&1 | grep -ci quote"
    exit: 1
    esperado: '0'
    obtenido: '0 (grep sale 1 porque no hubo match, es el conteo declarado el que importa)'
    coincide: true
  - cmd: "git diff e9afdc0c -- components/quote/src/quote.styles.scss | grep -c '^-[^-]'"
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'git diff --name-only e9afdc0c -- components/quote/package.json components/quote/CHANGELOG.md | wc -l'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: "git diff e9afdc0c -- components/quote/src/quote.ts components/quote/src/use-quote.ts | grep -c '^-[^-]'"
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'calcifer check (zsh -lic)'
    exit: 0
    esperado: 'no_declarado por el proposal; pedido por la tarea de verify'
    obtenido: 'eslint: limpio; check-architecture: limpio; test: 1 archivo del cambio, 11 tests passed; «ok: la rama pasa la validación (5 de 8 archivos revisados)». Los 3 archivos openspec/ quedan fuera de todo validador (esperado, según el propio proposal)'
    coincide: true
  - cmd: "curl -s 'http://localhost:6006/index.json' | grep -o 'form-quote--with-footer[a-z-]*' | sort -u"
    exit: 0
    esperado: 'las dos stories registradas'
    obtenido: 'form-quote--with-footer / form-quote--with-footer-error'
    coincide: true
```

## Qué se cumplió

**Tarea 1 · Slot `footer` en la card, tipado, con su spec** — cumplida.

- `components/quote/src/quote.vue`: agrega `<div v-if="$slots.footer" :class="ns.e('footer')"><slot name="footer" /></div>` inmediatamente después del cierre de `__input-to`, dentro de `__card`; `defineSlots<QuoteSlots>()` con `import type { QuoteSlots } from './quote.type'`.
- `components/quote/src/quote.type.ts`: agrega `export interface QuoteSlots { action?: () => unknown; footer?: () => unknown }`.
- `components/quote/tests/Quote.spec.ts`: `describe('GQuote — slot footer')` con exactamente los 3 casos pedidos (sin slot / con slot / con slot + `action: 'FromError'`), usando `mountQuote` extendido para aceptar `slots`. Los 3 casos pasan (`npx vitest run .../Quote.spec.ts` → 11/11, los 8 previos + los 3 nuevos). `vue-tsc` exit 0 confirma que `defineSlots` con `action` incluido no rompe el tipado existente.

**Tarea 2 · Estilo del footer** — cumplida.

- `components/quote/src/quote.styles.scss`: agrega `@include e("footer") { @apply border-t border-blue-50 px-md py-lg; }` junto a `e("input-to")`, dentro de `@include b("quote")`. El diff del archivo es solo adición (`git diff e9afdc0c -- quote.styles.scss | grep -c '^-[^-]'` → 0). `yarn styles:check` exit 0, 44 paquetes.

**Tarea 3 · Story «Con footer» y doc del slot** — cumplida.

- `stories/quote.stories.ts`: importa `GRadio, GRadioGroup` desde `'../components/radio'`; agrega `export const WithFooter: Story` (`name: 'Con footer'`) con `GRadioGroup` en `<template #footer>`, opciones «ACH local (USD)» / «SWIFT (USD)», `v-model` a un `ref`; agrega `WithFooterError` con `action="FromError"` y `error-message`. La descripción del componente suma `### Slots` documentando `action` y `footer`. Confirmé independientemente (sin browser) que las dos stories están registradas: `curl .../index.json` devuelve `form-quote--with-footer` y `form-quote--with-footer-error`. El renderizado visual en sí (footer dentro de la card, separador, radios visibles, borde de error encerrando el footer) lo verificó el orquestador en el navegador — yo no tengo acceso a browser, así que esa parte específica queda `no_verificado` por mi parte, aunque el hallazgo del orquestador (clases, hijos, bordes computados) es consistente con lo que el código y los tests muestran.

Los 3 commits (`17777b34`, `690594bf`, `fa106f89`) coinciden exactamente con los `commit:` declarados en cada tarea, y `git log -p` sobre `tasks.md` confirma que el único cambio fue `[ ]` → `[x]`: ningún `listo cuando` se tocó durante el apply.

## Qué quedó a medias

Nada. Las 3 tareas cumplen su `listo cuando` completo, con evidencia de test/comando para cada una.

## Qué se hizo de más

**Reformateo de `lint-staged` en dos archivos no declarados por ninguna tarea:**

- `components/quote/src/quote.type.ts`: el hook de pre-commit (`eslint --fix` + `prettier --write`) reescribió todo el archivo agregando `;` al final de cada propiedad de interfaz. Confirmado con el diff completo: cambia solo puntuación, ninguna propiedad, tipo ni exportación se modifica.
- `components/quote/tests/Quote.spec.ts`: el mismo hook re-envolvió líneas existentes (arrow functions sin paréntesis → con paréntesis, llamadas largas partidas en varias líneas). Confirmado con el diff: mismo comportamiento, misma lógica, solo formato. `npx vitest run .../Quote.spec.ts` sigue en 11/11 verde, y `calcifer check` reporta `eslint: limpio`.

Ninguno de los dos es un cambio de comportamiento; ambos quedan explicados por la causa declarada en las facts de la tarea (hook de `lint-staged`), y no bloquean el veredicto.

## Escenarios (`specs/g-quote/spec.md`)

- **Sin slot footer el DOM de la card no cambia** → cubierto por `Quote.spec.ts`: `'sin slot, no renderiza __footer y los hijos de __card quedan igual'` (verde).
- **Con slot footer el contenido queda dentro de la card** → cubierto por `Quote.spec.ts`: `'con slot, renderiza __footer dentro de __card después de __input-to con el contenido del slot'` (verde).
- **En estado de error el borde encierra el footer** → cubierto por `Quote.spec.ts`: `'con slot y action FromError, el footer queda dentro de __card.is-error y __action/__error-message quedan fuera'` (verde).

3/3 con evidencia directa de test, corridos y verdes por el verify en esta ronda.

## Con qué se probó

- **`calcifer check`**: limpio (`eslint: limpio`, `check-architecture: limpio`, `test`: 11/11 en el archivo del cambio). `ok: la rama pasa la validación (5 de 8 archivos revisados)`; los 3 archivos `openspec/` del propio change quedan fuera de todo validador, tal como el proposal ya anticipa.
- **Todos los comandos de «Cómo se verifica»** corrieron y coincidieron con lo declarado (tabla arriba), incluyendo el `yarn build` previo (42/42 componentes, exit 0).
- El criterio visual de Storybook (tarea 3 y criterio de cambio) lo verificó el orquestador en browser; el verify solo confirmó de forma independiente que ambas stories están registradas en el índice de Storybook.
