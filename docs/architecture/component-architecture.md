# Arquitectura Canónica de Componentes

**Última actualización:** Junio 2026
**Responsable:** Equipo de Diseño y Desarrollo

## Índice

- [1. Por qué este patrón](#1-por-qué-este-patrón)
- [2. Estructura canónica de carpetas](#2-estructura-canónica-de-carpetas)
- [3. Convenciones de naming](#3-convenciones-de-naming)
- [4. Separación de responsabilidades](#4-separación-de-responsabilidades)
- [5. Campos de package.json](#5-campos-de-packagejson)
- [6. Backward-compatibility](#6-backward-compatibility)
- [7. Tests](#7-tests)
- [8. JSDoc en español](#8-jsdoc-en-español)
- [9. Checklist de publicación](#9-checklist-de-publicación)

---

## 1. Por qué este patrón

El Design System es una **librería publicable** (`@flash-global66/g-*`), no una aplicación. Eso impone restricciones distintas:

- El barrel `index.ts` es **obligatorio**: es el punto de entrada público del paquete npm.
- Las dependencias de Element Plus se **eliminan progresivamente**; en su lugar se usa `@flash-global66/g-utils`.
- Los estilos se compilan **en el consumidor**, por eso `g-utils` se distribuye como código fuente (source-only).
- La **paridad CSS** (clases `gui-*`) es un contrato irrompible: los consumidores en producción (front-b2b) dependen de ellas.

---

## 2. Estructura canónica de carpetas

```
components/<Name>/
├── index.ts                    # barrel público obligatorio
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CHANGELOG.md
├── src/
│   ├── <Name>.vue              # PascalCase — template puro, delega lógica al composable
│   ├── composables/
│   │   ├── use<Name>.ts        # lógica principal del componente
│   │   └── use<SubFeature>.ts  # sub-lógica extraída si amerita
│   ├── props/
│   │   └── <name>.props.ts    # props + emits + validadores
│   ├── constants/
│   │   └── <name>.constant.ts # arrays as const — fuente de verdad de variantes
│   ├── types/
│   │   └── <name>.type.ts     # tipos derivados de constants
│   └── styles/
│       └── <name>.style.scss  # singular — usa mixins de @flash-global66/g-utils
└── tests/                      # espeja la estructura de src/
    ├── <Name>.spec.ts
    ├── composables/
    │   └── use<Name>.spec.ts
    └── props/
        └── <name>.props.spec.ts
```

El componente `components/button/` es el ejemplo canónico completo de esta estructura.

---

## 3. Convenciones de naming

| Elemento | Convención | Ejemplo |
|---|---|---|
| Carpeta del paquete | kebab-case (nombre npm) | `g-button/` |
| Archivo `.vue` | PascalCase | `Button.vue` |
| Composables | `use<Name>.ts` camelCase | `useButton.ts` |
| Props | `<name>.props.ts` | `button.props.ts` |
| Constantes | `<name>.constant.ts` | `button.constant.ts` |
| Tipos | `<name>.type.ts` | `button.type.ts` |
| Estilos | `<name>.style.scss` (singular) | `button.style.scss` |
| Tests | `<Name>.spec.ts` / `use<Name>.spec.ts` | `Button.spec.ts` |

**NUNCA** kebab-case en archivos fuente (`.vue`, `.ts`, `.scss`). Los nombres de paquete npm son la única excepción.

---

## 4. Separación de responsabilidades

### 4.1 `<Name>.vue` — Template puro

El componente Vue es una **capa delgada de presentación**. Solo declara props/emits, instancia el composable principal y renderiza. Cero lógica de negocio.

```vue
<script setup lang="ts">
import { useNamespace } from '@flash-global66/g-utils'
import { buttonProps, buttonEmits, validateButtonProps } from './props/button.props'
import { useButton } from './composables/useButton'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
validateButtonProps(props)

const ns = useNamespace('button')
const { componentId, allAttrs, shouldShowLeftIcon, shouldShowRightIcon } = useButton(props, emit)
</script>
```

**Zero imports de element-plus** en `src/`.

### 4.2 `composables/use<Name>.ts` — Lógica

Toda la lógica reactiva y los event handlers van aquí. El composable recibe `props` y `emit`, retorna el estado que necesita el template.

### 4.3 `props/<name>.props.ts` — Props, emits y validadores

Usa `buildProps` de `@flash-global66/g-utils`. Los tipos vienen de `../types/<name>.type`, los valores permitidos de `../constants/<name>.constant`.

### 4.4 `constants/<name>.constant.ts` — Fuente de verdad

Arrays `as const` de los que se derivan los tipos TypeScript y los validadores en runtime.

```ts
export const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const
export const BUTTON_SIZES = ['sm', 'md'] as const
```

### 4.5 `types/<name>.type.ts` — Tipos derivados

Los tipos se **derivan** de las constantes para evitar duplicación:

```ts
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]
```

### 4.6 `styles/<name>.style.scss` — El namespace `gui`

`gui` (Global UI) es el namespace permanente de este Design System. Cada archivo de estilos lo declara explícitamente:

```scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
@use '@flash-global66/g-utils/mixins' as *;

@include b('button') {
  @include m('variant-primary') { /* ... */ }
  @include when(disabled) { /* ... */ }
}
```

Esto genera clases `gui-button`, `gui-button--variant-primary`, `is-disabled`. El namespace `gui` es un contrato con los consumidores; **nunca cambia en producción**.

### 4.7 `index.ts` — Barrel público

```ts
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

## 5. Campos de package.json

```json
{
  "name": "@flash-global66/g-<name>",
  "buildable": true,
  "sideEffects": ["**/*.css", "**/*.scss", "dist/index.css"],
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/types/index.d.ts"
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
- `sideEffects` previene que el bundler elimine los estilos por tree-shaking.
- `exports["./styles.scss"]` apunta al archivo **fuente**, no al dist compilado.
- Las dependencias internas `@flash-global66/g-*` van en `dependencies`, no en `peerDependencies`.
- `vue` y librerías externas van en `peerDependencies`.
- **Sin `element-plus`** en ninguna sección de deps del componente migrado.

---

## 6. Backward-compatibility

> Esta regla es **no negociable** mientras los consumidores en producción dependan de las clases CSS actuales.

Al migrar un componente existente:

1. Las **clases CSS** (`gui-button`, `gui-button--variant-primary`, `is-disabled`) no cambian nunca.
2. La **API pública** (props, emits, slots, exports) no cambia.
3. El export `exports["./styles.scss"]` se mantiene activo apuntando al nuevo path fuente.
4. El nombre del export (`GButton`) se mantiene idéntico.

Verifica con los tests de clases exactas y el diff CSS de tu SCSS compilado vs. el baseline anterior.

---

## 7. Tests

La suite de tests espeja la estructura de `src/`:

```
tests/
├── <Name>.spec.ts           # mount() + toHaveClass para clases exactas
├── composables/
│   └── use<Name>.spec.ts    # withSetup() desde tests/utils/withSetup.ts
└── props/
    └── <name>.props.spec.ts # validateX → spy sobre debugWarn
```

Ejecutar desde la raíz del monorepo:

```bash
export PATH="$HOME/.nvm/versions/node/v20.19.3/bin:$PATH"
./node_modules/.bin/vitest run
```

---

## 8. JSDoc en español

Toda la API pública se documenta en **español**. Los nombres de código permanecen en inglés.

```ts
/**
 * Lógica del componente Button: estado reactivo, atributos derivados
 * y manejadores de interacción.
 *
 * @param props - Props resueltas del componente.
 * @param emit - Función emit del componente.
 */
export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => { ... }
```

---

## 9. Checklist de publicación

Un componente puede entrar a revisión solo cuando:

- [ ] Estructura de carpetas sigue el árbol canónico de esta guía
- [ ] Zero `import ... from 'element-plus'` en `src/` e `index.ts`
- [ ] El diff CSS (nuevo vs. baseline) es vacío
- [ ] Todos los tests pasan (`vitest run` verde)
- [ ] `exports["./styles.scss"]` resuelve correctamente
- [ ] JSDoc en español en toda la API pública

---

## Recursos relacionados

- `docs/architecture/utils-package.md` — convención de paquetes utilitarios (g-utils, g-hooks, g-tokens)
- `docs/storybook/story-documentation.md` — cómo escribir la documentación de una story
- Ejemplo canónico completo: `components/button/` en este repositorio
