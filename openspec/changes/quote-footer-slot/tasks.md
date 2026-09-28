# Tareas · slot `footer` en la card de GQuote

Restricciones que todo subagente recibe (detalle en `proposal.md`): BEM con `@include e(...)` y `ns.e(...)`; tipos con nombre en `src/quote.type.ts`, nunca en el `<script setup>`; solo tokens del DS (`px-md`, `py-lg`, `border-t`, `border-blue-50`), ningún `px` literal; sin comentarios en línea; `CHANGELOG.md` y `version` no se tocan a mano; no cambiar props, emits, `use-quote.ts` ni los estilos de `__card`, `__action`, `__available`, `__error-message`. Los specs del paquete necesitan `zsh -lic 'yarn build'` antes de correr (sin `dist/` de `g-country-flag` no resuelven).

---

- [x] **1 · Slot `footer` en la card, tipado, con su spec**
  - archivos: `components/quote/src/quote.vue`, `components/quote/src/quote.type.ts`, `components/quote/tests/Quote.spec.ts`
  - depende de: ninguna
  - listo cuando: TDD, primero el spec en rojo. En `Quote.spec.ts`, un `describe('GQuote — slot footer')` con tres casos: (a) **sin slot**: no existe `.gui-quote__footer`, y los hijos de `.gui-quote__card` son exactamente `['gui-quote__input-from', 'gui-quote__divider', 'gui-quote__input-to']`, en ese orden (invariante de «el DOM queda igual»); (b) **con slot**: `.gui-quote__footer` existe, su `parentElement` es `.gui-quote__card`, su `previousElementSibling` es `.gui-quote__input-to` y contiene el contenido del slot; (c) **con slot y `action: 'FromError'`**: el footer está dentro de `.gui-quote__card.is-error`, y `.gui-quote__action` y `.gui-quote__error-message` siguen **fuera** de `__card`. Se monta con `slots: { footer: '<p data-test="footer">x</p>' }` usando el helper `mountQuote`, extendido para aceptar `slots`. Después, en `quote.vue`, el `<div v-if="$slots.footer" :class="ns.e('footer')"><slot name="footer" /></div>` inmediatamente después del cierre de `__input-to` (l.88), dentro de `__card`. En `quote.type.ts`, `export interface QuoteSlots { action?: () => unknown; footer?: () => unknown }` (o la firma que vue-tsc acepte para slots sin props). En `quote.vue`, `defineSlots<QuoteSlots>()` con `import type`. Los 8 casos existentes siguen verdes.
  - commit: `feat(quote): slot footer dentro de la card`

- [x] **2 · Estilo del footer**
  - archivos: `components/quote/src/quote.styles.scss`
  - depende de: ninguna
  - listo cuando: dentro de `@include b("quote")`, junto a `e("input-to")`, existe `@include e("footer") { @apply border-t border-blue-50 px-md py-lg; }`. El diff de este archivo **solo agrega líneas** (ninguna `-` fuera del encabezado del diff). `yarn styles:check` sale 0.
  - commit: `feat(quote): separador y padding del footer de la card`

- [ ] **3 · Story «Con footer» y doc del slot**
  - archivos: `stories/quote.stories.ts`
  - depende de: 1, 2
  - listo cuando: hay un `export const WithFooter: Story` (name `'Con footer'`) que renderiza `GQuote` con un `GRadioGroup` en `<template #footer>`, con opciones «ACH local (USD)» / «SWIFT (USD)» y `v-model` a un `ref`. `GRadio`/`GRadioGroup` se importan desde `'../components/radio'`. Hay una segunda variante con `action="FromError"` y `error-message`, para ver el borde rojo encerrando el footer. La descripción del componente (`meta.parameters.docs.description.component`) suma una sección `### Slots` con `action` y `footer` (dónde se renderiza, que sin contenido no aparece, que no agrega lógica). Storybook compila y las dos stories se ven en el navegador: el footer dentro de la card, debajo de «Tu contacto recibe», con el separador, y «Disponible» / action / error-message en su lugar.
  - commit: `docs(quote): story con GRadioGroup en el slot footer`

Tareas 1 y 2 corren en paralelo (archivos disjuntos). La 3 espera a las dos.
