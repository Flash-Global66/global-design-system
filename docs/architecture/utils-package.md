# Convención de Paquetes Utilitarios

> **Fuente de verdad para crear paquetes utilitarios internos del Design System.**
> Ejemplo canónico: `common/g-utils/` (`@flash-global66/g-utils`).

## Propósito de los paquetes utilitarios

Los paquetes utilitarios (`g-utils`, `g-hooks`, `g-tokens`, etc.) son **librerías de infraestructura** compartidas por los componentes del DS. No son componentes Vue publicables en sí mismos — son las herramientas que los componentes usan internamente.

Características que los distinguen de un paquete de componentes:

| Aspecto | Paquete de componente | Paquete utilitario |
|---|---|---|
| Contiene `.vue` | Sí | No |
| `buildable` | `true` | `false` (source-only) |
| Distribuido como | Bundle compilado (dist/) | Código fuente (TS + SCSS) |
| Compilado por | El propio paquete (`vite build`) | El consumidor (Vitest `deps.inline`, bundler del consumidor) |
| Contiene estilos SCSS | Solo el propio componente | Mixins reutilizables para todos los componentes |

---

## Estructura canónica

```
common/<package-name>/          # kebab-case
├── index.ts                    # barrel público
├── package.json                # buildable: false — ver campos abajo
├── README.md                   # documentación del paquete
├── src/
│   ├── utils/                  # funciones TS puras
│   │   └── <name>.util.ts      # sufijo .util.ts
│   ├── composables/            # hooks Vue
│   │   └── use<Name>.ts        # prefijo use
│   └── types/                  # tipos compartidos
│       └── <name>.type.ts      # sufijo .type.ts
├── styles/                     # mixins y config SCSS (si aplica)
│   ├── config.scss             # variables !default ($namespace, separadores)
│   ├── function.scss           # funciones Sass puras (sin output CSS)
│   └── mixins.scss             # mixins b/e/m/when
└── tests/                      # espeja src/ y styles/
    ├── utils/
    │   └── <name>.util.spec.ts
    └── composables/
        └── use<Name>.spec.ts
```

### Ejemplo real: `common/g-utils/`

```
common/g-utils/
├── index.ts
├── package.json
├── README.md
├── src/
│   ├── utils/
│   │   ├── props.util.ts        # buildProps, definePropType, buildProp
│   │   ├── install.util.ts      # withInstall, withNoopInstall
│   │   ├── error.util.ts        # debugWarn
│   │   └── validators.util.ts   # isBoolean, isString, isObject
│   ├── composables/
│   │   └── useNamespace.ts      # useNamespace, useGetDerivedNamespace, namespaceContextKey
│   └── types/
│       └── sfc.type.ts          # SFCWithInstall, NamespaceHelpers
├── styles/
│   ├── config.scss              # $namespace: 'el' !default, separadores BEM
│   ├── function.scss            # hitAllSpecialNestRule, bem (funciones Sass puras)
│   └── mixins.scss              # @include b/e/m/when con @at-root
└── tests/
    └── composables/
        └── useNamespace.spec.ts
```

---

## API pública expuesta por g-utils

### TypeScript (`import from '@flash-global66/g-utils'`)

| Símbolo | Tipo | Descripción |
|---|---|---|
| `buildProps<T>` | función | Construye el mapa completo de props de un componente Vue |
| `buildProp` | función | Construye y valida una prop individual |
| `definePropType<T>` | función | Define el tipo de una prop con inferencia genérica |
| `withInstall<T,E>` | función | Envuelve un componente Vue añadiendo `install(app)` |
| `withNoopInstall<T>` | función | Variante de withInstall para sub-componentes |
| `SFCWithInstall<T>` | tipo | `T & Plugin` — tipo del componente instalable |
| `isBoolean` | type guard | Verifica si un valor es `boolean` |
| `isString` | type guard | Verifica si un valor es `string` |
| `debugWarn` | función | Emite `console.warn('[scope] msg')` fuera de producción |
| `useNamespace` | composable | Genera clases BEM con namespace configurable |
| `namespaceContextKey` | InjectionKey | Clave para propagar namespace vía `provide/inject` |
| `useGetDerivedNamespace` | composable | Resuelve el namespace efectivo con jerarquía de prioridad |
| `NamespaceHelpers` | interfaz | Tipo del objeto retornado por `useNamespace` |

### SCSS (`@use '@flash-global66/g-utils/mixins' as *`)

| Mixin | Output | Ejemplo |
|---|---|---|
| `@include b('button')` | `.gui-button { ... }` | Bloque BEM |
| `@include e('content')` | `&__content { ... }` | Elemento BEM |
| `@include m('variant-primary')` | `&--variant-primary { ... }` | Modificador BEM |
| `@include when(disabled)` | `&.is-disabled { ... }` | Estado BEM |

Para cambiar el namespace al compilar un componente individual:

```scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
@use '@flash-global66/g-utils/mixins' as *;
```

---

## `package.json` de un paquete utilitario

```json
{
  "name": "@flash-global66/g-utils",
  "version": "0.1.0",
  "buildable": false,
  "exports": {
    ".":         "./index.ts",
    "./mixins":  "./styles/mixins.scss",
    "./config":  "./styles/config.scss"
  },
  "peerDependencies": {
    "vue": "^3.2.0"
  }
}
```

Diferencias clave respecto al package.json de un componente:
- `"buildable": false` — no se compila a dist; se distribuye como fuente.
- No hay `main`, `module`, `types` — el consumidor resuelve desde el source.
- `exports` incluye entradas SCSS para que Sass resuelva los mixins por nombre de paquete.
- No hay `sideEffects` — no hay CSS de salida.

---

## Resolución en tests y builds

Dado que g-utils es source-only, los consumidores necesitan configurar su pipeline para compilar el código TypeScript de `@flash-global66/*`. En Vitest se hace con `deps.inline`:

```ts
// vitest.config.ts (raíz del monorepo)
export default defineConfig({
  test: {
    deps: {
      inline: [/@flash-global66\/.*/]  // procesa los workspace packages como fuente
    }
  }
})
```

En un bundler de componentes (Vite), el workspace resolution ya lo maneja automáticamente porque `exports["."]` apunta a `.ts` fuente.

---

## Reglas de naming dentro del paquete utilitario

- `src/utils/*.util.ts` — funciones puras, sin estado global.
- `src/composables/use<Name>.ts` — solo composables Vue (usan `ref`, `computed`, `inject`, etc.).
- `src/types/*.type.ts` — solo tipos e interfaces, sin lógica.
- `styles/` — archivos SCSS sin output CSS propio; solo definen variables, funciones y mixins.
- Tests en `tests/` espejando exactamente la estructura de `src/`.

---

## JSDoc en español

Igual que en los componentes, toda la API pública se documenta en español:

```ts
/**
 * Construye y valida el mapa completo de props de un componente Vue.
 *
 * @param props - Objeto con las definiciones de todas las props del componente.
 * @returns El mismo objeto con cada prop procesada y validada.
 */
export const buildProps = <T extends Record<string, any>>(props: T): T => { ... }
```

---

## Extensión del patrón: futuros paquetes

Este mismo patrón aplica a todos los paquetes utilitarios del DS:

| Paquete (futuro) | Contenido esperado |
|---|---|
| `@flash-global66/g-hooks` | Composables de uso general no ligados a un componente específico |
| `@flash-global66/g-tokens` | Design tokens (colores, espaciado, tipografía) como variables CSS y TS |

La estructura de carpetas y las reglas de naming son **idénticas** a las de `g-utils`.

---

## Recursos relacionados

- `docs/architecture/component-architecture.md` — arquitectura canónica de componentes
- `common/g-utils/README.md` — documentación del paquete g-utils
- `docs/storybook/story-documentation.md` — cómo documentar componentes en Storybook
