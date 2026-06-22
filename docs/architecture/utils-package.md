# Convención de Paquetes Utilitarios

**Última actualización:** Junio 2026
**Responsable:** Equipo de Diseño y Desarrollo

## Índice

- [1. Propósito](#1-propósito)
- [2. Estructura canónica](#2-estructura-canónica)
- [3. Convenciones de naming](#3-convenciones-de-naming)
- [4. package.json de un paquete utilitario](#4-packagejson-de-un-paquete-utilitario)
- [5. API pública de g-utils](#5-api-pública-de-g-utils)
- [6. Resolución en tests y builds](#6-resolución-en-tests-y-builds)
- [7. JSDoc en español](#7-jsdoc-en-español)
- [8. Extensión del patrón](#8-extensión-del-patrón)

---

## 1. Propósito

Los paquetes utilitarios (`g-utils`, `g-hooks`, `g-tokens`, etc.) son **librerías de infraestructura** compartidas por los componentes del DS. No son componentes Vue publicables — son las herramientas que los componentes usan internamente.

| Aspecto | Paquete de componente | Paquete utilitario |
|---|---|---|
| Contiene `.vue` | Sí | No |
| `buildable` | `true` | `false` (source-only) |
| Distribuido como | Bundle compilado (`dist/`) | Código fuente (TS + SCSS) |
| Compilado por | El propio paquete (`vite build`) | El consumidor (Vitest `deps.inline`, bundler del consumidor) |
| Contiene estilos SCSS | Solo los del propio componente | Mixins reutilizables para todos los componentes |

---

## 2. Estructura canónica

```
common/<package-name>/
├── index.ts                    # barrel público
├── package.json                # buildable: false — ver sección 4
├── src/
│   ├── utils/                  # funciones TS puras
│   │   └── <name>.util.ts      # sufijo .util.ts
│   ├── composables/            # hooks Vue
│   │   └── use<Name>.ts        # prefijo use
│   └── types/                  # tipos compartidos
│       └── <name>.type.ts      # sufijo .type.ts
├── styles/                     # mixins y config SCSS (si aplica)
│   ├── config.scss             # variables $namespace y separadores BEM
│   ├── function.scss           # funciones Sass puras (sin output CSS)
│   └── mixins.scss             # mixins b/e/m/when
└── tests/                      # espeja src/
    ├── utils/
    │   └── <name>.util.spec.ts
    └── composables/
        └── use<Name>.spec.ts
```

El paquete `common/g-utils/` es el ejemplo canónico de esta estructura.

---

## 3. Convenciones de naming

- `src/utils/*.util.ts` — funciones puras, sin estado global
- `src/composables/use<Name>.ts` — solo composables Vue (`ref`, `computed`, `inject`, etc.)
- `src/types/*.type.ts` — solo tipos e interfaces, sin lógica
- `styles/` — SCSS sin output CSS propio; solo variables, funciones y mixins
- Tests en `tests/` espejando exactamente la estructura de `src/`

Aplica el mismo criterio de naming camelCase que en los componentes. **NUNCA** kebab-case en archivos fuente.

---

## 4. package.json de un paquete utilitario

```json
{
  "name": "@flash-global66/g-utils",
  "version": "0.1.0",
  "buildable": false,
  "type": "module",
  "exports": {
    ".":        "./index.ts",
    "./mixins": "./styles/mixins.scss",
    "./config": "./styles/config.scss"
  },
  "sideEffects": ["**/*.scss", "**/*.css"],
  "peerDependencies": {
    "vue": "^3.2.0"
  }
}
```

Diferencias clave respecto al `package.json` de un componente:
- `"buildable": false` — no se compila a `dist`; se distribuye como código fuente.
- No hay `main`, `module`, `types` — el consumidor resuelve desde el source.
- `exports` incluye entradas SCSS para que Sass resuelva los mixins por nombre de paquete.
- `sideEffects` cubre los SCSS para que el bundler no los elimine.

---

## 5. API pública de g-utils

### TypeScript (`import from '@flash-global66/g-utils'`)

| Símbolo | Tipo | Descripción |
|---|---|---|
| `buildProps<T>` | función | Construye el mapa completo de props de un componente Vue |
| `buildProp` | función | Construye y valida una prop individual |
| `definePropType<T>` | función | Define el tipo de una prop con inferencia genérica |
| `withInstall<T,E>` | función | Envuelve un componente Vue añadiendo `install(app)` |
| `withNoopInstall<T>` | función | Variante de `withInstall` para sub-componentes |
| `SFCWithInstall<T>` | tipo | `T & Plugin` — tipo del componente instalable |
| `isBoolean` | type guard | Verifica si un valor es `boolean` |
| `isString` | type guard | Verifica si un valor es `string` |
| `isObject` | type guard | Verifica si un valor es un objeto no nulo |
| `debugWarn` | función | Emite `console.warn('[scope] msg')` solo fuera de producción |
| `useNamespace` | composable | Genera clases BEM con namespace configurable |
| `namespaceContextKey` | InjectionKey | Clave para propagar namespace vía `provide/inject` |
| `useGetDerivedNamespace` | composable | Resuelve el namespace efectivo con jerarquía de prioridad |
| `NamespaceHelpers` | interfaz | Tipo del objeto retornado por `useNamespace` |

### SCSS — namespace `gui`

El namespace `gui` (Global UI) es el estándar permanente del DS. Está configurado como valor por defecto en `g-utils/styles/config.scss`. Cada componente lo declara explícitamente al inicio de su SCSS:

```scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
@use '@flash-global66/g-utils/mixins' as *;

@include b('button') {                          // → .gui-button
  @include e('content') { /* ... */ }           // → .gui-button__content
  @include m('variant-primary') { /* ... */ }   // → .gui-button--variant-primary
  @include when(disabled) { /* ... */ }         // → .gui-button.is-disabled
}
```

La declaración explícita de `$namespace: 'gui'` documenta la intención aunque sea el valor por defecto.

---

## 6. Resolución en tests y builds

`g-utils` es source-only, por lo que los consumidores deben configurar su pipeline para compilar el código TypeScript de `@flash-global66/*`. En Vitest:

```ts
// vitest.config.ts (raíz del monorepo)
export default defineConfig({
  test: {
    deps: {
      inline: [/@flash-global66\/.*/]
    }
  }
})
```

En un bundler (Vite), el workspace resolution ya lo maneja automáticamente porque `exports["."]` apunta al source `.ts`.

---

## 7. JSDoc en español

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

Los nombres de código (variables, funciones, tipos) permanecen en inglés.

---

## 8. Extensión del patrón

Este mismo patrón aplica a todos los paquetes utilitarios futuros del DS:

| Paquete | Contenido esperado |
|---|---|
| `@flash-global66/g-hooks` | Composables de uso general no ligados a un componente específico |
| `@flash-global66/g-tokens` | Design tokens (colores, espaciado, tipografía) como variables CSS y TS |

La estructura de carpetas y las reglas de naming son **idénticas** a las de `g-utils`.

---

## Recursos relacionados

- `docs/architecture/component-architecture.md` — arquitectura canónica de componentes
- `docs/storybook/story-documentation.md` — cómo documentar componentes en Storybook
