# Arquitectura Canónica de Componentes

> **Fuente de verdad para crear o migrar componentes del Global Design System.**
> Consulta también la guía interactiva en Storybook: `Concept/Guide/Estructura de Componentes`.

## Por qué este patrón

El Design System es una **librería publicable** (`@flash-global66/g-*`), no una aplicación. Eso impone restricciones distintas a las de un proyecto B2B:

- El barrel `index.ts` es **obligatorio**: es el punto de entrada público del paquete.
- Las dependencias de Element Plus se **eliminan progresivamente**; en su lugar se usa `@flash-global66/g-utils`.
- Los estilos se compilan **en el consumidor**, por eso g-utils se distribuye como código fuente (source-only).
- La **paridad CSS** (clases `gui-*`) es un contrato irrompible: los consumidores en producción (ej: front-b2b) dependen de ellas.

---

## Estructura canónica de carpetas

```
components/<Name>/              # PascalCase — mismo que el componente .vue
├── index.ts                    # barrel público obligatorio (withInstall de @flash-global66/g-utils)
├── package.json                # ver sección "Campos de package.json"
├── vite.config.ts
├── tsconfig.json
├── CHANGELOG.md
├── src/
│   ├── <Name>.vue              # PascalCase. Template puro + script setup; delega lógica al composable
│   ├── composables/
│   │   ├── use<Name>.ts        # camelCase: lógica principal del componente
│   │   └── use<SubFeature>.ts  # camelCase: sub-lógica extraída (ej: useRipple)
│   ├── props/
│   │   └── <name>.props.ts    # props + emits + validadores (buildProps de g-utils)
│   ├── constants/
│   │   └── <name>.constant.ts # arrays `as const` — fuente de verdad de variantes/tipos
│   ├── types/
│   │   └── <name>.type.ts     # tipos derivados de constants + tipos de dominio
│   └── styles/
│       └── <name>.style.scss  # SINGULAR .style.scss; mixins de @flash-global66/g-utils
└── tests/                      # espeja src/
    ├── <Name>.spec.ts
    ├── composables/
    │   ├── use<Name>.spec.ts
    │   └── use<SubFeature>.spec.ts
    └── props/
        └── <name>.props.spec.ts
```

### Ejemplo real: `components/button/`

```
components/button/
├── index.ts
├── package.json
├── src/
│   ├── Button.vue
│   ├── composables/
│   │   ├── useButton.ts
│   │   └── useRipple.ts
│   ├── props/
│   │   └── button.props.ts
│   ├── constants/
│   │   └── button.constant.ts
│   ├── types/
│   │   └── button.type.ts
│   └── styles/
│       └── button.style.scss
└── tests/
    ├── Button.spec.ts
    ├── composables/
    │   ├── useButton.spec.ts
    │   └── useRipple.spec.ts
    └── props/
        └── button.props.spec.ts
```

---

## Reglas de naming

| Elemento | Convención | Ejemplo |
|---|---|---|
| Carpeta del componente | PascalCase | `Button/` |
| Carpeta de paquete NPM | kebab-case (nombre del paquete) | `@flash-global66/g-button` |
| Archivo `.vue` | PascalCase | `Button.vue` |
| Composables | `use<Name>.ts` camelCase | `useButton.ts`, `useRipple.ts` |
| Props | `<name>.props.ts` | `button.props.ts` |
| Constantes | `<name>.constant.ts` | `button.constant.ts` |
| Tipos | `<name>.type.ts` | `button.type.ts` |
| Estilos | `<name>.style.scss` (singular) | `button.style.scss` |
| Tests | `<Name>.spec.ts` / `use<Name>.spec.ts` | `Button.spec.ts` |

**NUNCA** uses kebab-case en archivos fuente (`.vue`, `.ts`, `.scss`). Los nombres de paquete NPM (`@flash-global66/g-*`) son una excepción propia del ecosistema de paquetes.

---

## Separación de responsabilidades del SFC

### `<Name>.vue` — Template puro

El componente Vue es una **capa delgada de presentación**. Solo debe:

1. Declarar props y emits importándolos desde `./props/<name>.props`
2. Instanciar el composable principal (`use<Name>`)
3. Usar `useNamespace` de `@flash-global66/g-utils` para clases BEM
4. Renderizar el template con las clases y estado que le entrega el composable

```vue
<!-- components/button/src/Button.vue -->
<template>
  <component :is="componentId" v-bind="allAttrs" :class="classes">
    <!-- template puro -->
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNamespace } from '@flash-global66/g-utils'
import { buttonProps, buttonEmits, validateButtonProps } from './props/button.props'
import { useButton } from './composables/useButton'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

validateButtonProps(props)

const { componentId, ripples, removeRipple, allAttrs, shouldShowLeftIcon, shouldShowRightIcon } = useButton(props, emit)

const ns = useNamespace('button', ref('gui'))

const classes = computed(() => [
  ns.b(),
  ns.m(`variant-${props.variant}`),
  ns.m(props.size ?? 'md'),
  ns.is('disabled', props.disabled || props.loading),
  ns.is('loading', props.loading),
  ns.is('full', props.full),
].filter(Boolean))
</script>
```

**Zero imports de element-plus** en `src/`.

### `composables/use<Name>.ts` — Lógica

Toda la lógica reactiva y los event handlers van aquí. El composable recibe `props` y `emit`, retorna el estado que necesita el template.

```ts
// components/button/src/composables/useButton.ts
import { computed, ref } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonEmits, ButtonProps } from '../props/button.props'
import { useRipple } from './useRipple'

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  // lógica aquí
  return { componentId, ripples, removeRipple, allAttrs, shouldShowLeftIcon, shouldShowRightIcon }
}
```

### `props/<name>.props.ts` — Props, emits y validadores

Usa `buildProps` de `@flash-global66/g-utils`. Los tipos se importan desde `../types/<name>.type`. Los valores permitidos vienen de `../constants/<name>.constant`.

```ts
// components/button/src/props/button.props.ts
import { buildProps, debugWarn, isBoolean, isString } from '@flash-global66/g-utils'
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../constants/button.constant'
import type { ButtonVariant, ButtonSize } from '../types/button.type'

export const buttonProps = buildProps({
  variant: { type: String as PropType<ButtonVariant>, default: 'primary' },
  // ... 14 props totales
})

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  mousedown: (evt: MouseEvent) => evt instanceof MouseEvent,
}
```

### `constants/<name>.constant.ts` — Fuente de verdad de variantes

Arrays `as const` — de aquí se derivan los tipos TypeScript y los validadores en runtime.

```ts
// components/button/src/constants/button.constant.ts
export const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const
export const BUTTON_SIZES = ['sm', 'md'] as const
export const BUTTON_NATIVE_TYPES = ['button', 'submit', 'reset'] as const
```

### `types/<name>.type.ts` — Tipos derivados

Los tipos se **derivan** de las constantes para evitar duplicación:

```ts
// components/button/src/types/button.type.ts
import type { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_NATIVE_TYPES } from '../constants/button.constant'

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]  // 'primary' | 'secondary' | 'tertiary'
export type ButtonSize    = (typeof BUTTON_SIZES)[number]     // 'sm' | 'md'
export type ButtonNativeType = (typeof BUTTON_NATIVE_TYPES)[number]

export type ButtonState = 'default' | 'loading' | 'disabled'
export interface Ripple { id: number; x: number; y: number }
```

### `styles/<name>.style.scss` — Estilos BEM

Usa **exclusivamente** los mixins de `@flash-global66/g-utils`. El namespace `gui` se configura en la primera línea:

```scss
// components/button/src/styles/button.style.scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
@use '@flash-global66/g-utils/mixins' as *;

@include b('button') {
  // estilos base

  @include m('variant-primary') { /* ... */ }
  @include m('md') { /* ... */ }
  @include when(disabled) { @apply cursor-not-allowed; }
  @include e('content') { /* ... */ }
}
```

**Zero `@use` directives de element-plus** en el archivo de estilos.

---

## `index.ts` — Barrel público

```ts
// components/button/index.ts
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils'
import Button from './src/Button.vue'

export const GButton: SFCWithInstall<typeof Button> & { Button: typeof Button } =
  withInstall(Button, { Button })

export default GButton
export * from './src/types/button.type'
export type ButtonInstance = InstanceType<typeof Button>
```

`withInstall` adjunta el método `install(app)` para uso global con `app.use(GButton)`.

---

## Campos de `package.json`

```json
{
  "name": "@flash-global66/g-<name>",
  "version": "0.1.0",
  "buildable": true,
  "sideEffects": ["**/*.css", "**/*.scss", "dist/index.css"],
  "main":   "dist/index.js",
  "module": "dist/index.mjs",
  "types":  "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import":  "./dist/index.mjs",
      "require": "./dist/index.js",
      "types":   "./dist/types/index.d.ts"
    },
    "./styles.scss": "./src/styles/<name>.style.scss",
    "./*": "./*"
  },
  "dependencies": {
    "@flash-global66/g-utils": "^0.1.0"
  },
  "peerDependencies": {
    "vue": "^3.2.0"
  }
}
```

Reglas clave:
- `sideEffects` previene el tree-shaking de estilos.
- `exports["./styles.scss"]` apunta al **archivo fuente** (no al dist compilado). Esto preserva la backward-compat con consumidores que importan los estilos directamente.
- Las dependencias de `g-*` van en `dependencies` (no `peerDependencies`), ya que forman la capa interna del DS.
- `vue` y librerías externas de UI van en `peerDependencies`.
- **Sin `element-plus` en ninguna sección** de deps del componente migrado.

---

## Backward-compatibility

> Esta regla es **no negociable** mientras front-b2b esté en producción.

Al migrar un componente existente:

1. Las **clases CSS** (`gui-button`, `gui-button--variant-primary`, `is-disabled`, etc.) NO cambian nunca.
2. La **API pública** (props, emits, slots, exports) NO cambia.
3. La clave `exports["./styles.scss"]` se mantiene activa y apunta al nuevo path de fuente.
4. El export `GButton` (nombre de export) se mantiene idéntico.

Verifica con los tests de clases exactas (`Button.spec.ts`) y el diff CSS de tu SCSS compilado vs. el baseline anterior.

---

## JSDoc en español

Toda la API pública del componente se documenta en **español**:

```ts
/**
 * Lógica del componente Button: estado reactivo, atributos derivados y manejadores
 * de interacción (click, mousedown, teclado, ripple).
 *
 * @param props - Props resueltas del componente.
 * @param emit - Función `emit` del componente para propagar eventos.
 */
export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => { ... }
```

Los nombres de código (variables, funciones, tipos) permanecen en inglés. Las descripciones, parámetros y anotaciones van en español.

---

## Tests

La suite de tests sigue la misma estructura de `src/`:

```
tests/
├── <Name>.spec.ts           # mount() + clases exactas con toHaveClass
├── composables/
│   ├── use<Name>.spec.ts    # withSetup() desde tests/utils/withSetup.ts
│   └── use<SubFeature>.spec.ts
└── props/
    └── <name>.props.spec.ts # validateX → debugWarn spy
```

Correr desde la raíz del monorepo:

```bash
export PATH="$HOME/.nvm/versions/node/v20.19.3/bin:$PATH"
./node_modules/.bin/vitest run
```

**No uses `yarn test`** — el script está disponible pero `vitest run` directamente evita problemas de PATH con Node 20 en algunas configuraciones de shell.

Ver detalles de la estrategia de tests en `docs/architecture/utils-package.md` y la guía de Storybook en `docs/storybook/story-documentation.md`.

---

## Cuándo NO está listo un componente para publicar

Un componente puede entrar a revisión solo cuando:

- [ ] La estructura de carpetas sigue el árbol canónico de esta guía
- [ ] Zero `import ... from 'element-plus'` en `src/` e `index.ts`
- [ ] El diff CSS (nuevo vs. baseline) es vacío
- [ ] Todos los tests pasan (`vitest run` verde)
- [ ] `exports["./styles.scss"]` resuelve correctamente
- [ ] JSDoc en español en toda la API pública

---

## Recursos relacionados

- Storybook: `Concept/Guide/Estructura de Componentes` — vista interactiva de esta guía
- `docs/architecture/utils-package.md` — convención de paquetes utilitarios (g-utils, g-hooks, g-tokens)
- `docs/storybook/story-documentation.md` — cómo escribir la documentación de una story
- Ejemplo canónico completo: `components/button/` en este repositorio
