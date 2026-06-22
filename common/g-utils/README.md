# @flash-global66/g-utils

Paquete de utilidades internas del Global Design System. Reemplaza la dependencia
directa de `element-plus` para las funciones de utilidad, composables y mixins SCSS
que comparten los componentes.

> **Source-only** (`buildable: false`): se distribuye como código fuente (TS + SCSS),
> no como bundle compilado. Los consumidores ya compilan los `.ts` de `@flash-global66/*`
> (vía `deps.inline` en sus tests / su propio build).

## Qué expone

| Capa | Contenido |
|------|-----------|
| `utils/` | `buildProps`, `definePropType`, `buildProp`, `withInstall`, `withNoopInstall`, `isBoolean`, `isString`, `debugWarn` |
| `composables/` | `useNamespace` (helper BEM), `namespaceContextKey`, `useGetDerivedNamespace` |
| `types/` | `SFCWithInstall`, `NamespaceHelpers` |
| `styles/` | mixins SCSS `b()`, `e()`, `m()`, `when()` + módulo `config` (namespace reconfigurable) |

## Uso en TypeScript

```ts
import { buildProps, withInstall, useNamespace } from '@flash-global66/g-utils'
import type { SFCWithInstall } from '@flash-global66/g-utils'

const ns = useNamespace('button')      // ns.b() => 'el-button' (o 'gui-button' si el namespace está configurado)
const ns2 = useNamespace('button', ref('gui')) // ns2.b() => 'gui-button'
```

## Uso en SCSS

```scss
@use '@flash-global66/g-utils/mixins' as *;

@include b('button') {        // .gui-button { ... }  (con namespace configurado)
  @include m('primary') { }   // &--primary
  @include e('icon') { }      // &__icon
  @include when(disabled) { } // &.is-disabled
}
```

El namespace por defecto es `el` (igual que element-plus). El `config-provider`
lo reconfigura globalmente a `gui` mediante:

```scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
```

## Estructura (convención de paquete utilitario)

```
src/
├── utils/        # utilidades TS puras (*.util.ts)
├── composables/  # hooks Vue (useX.ts)
└── types/        # tipos compartidos (*.type.ts)
styles/           # config.scss · function.scss · mixins.scss
tests/            # espeja src/ + styles/
```

Toda la API pública está documentada con JSDoc en español.
