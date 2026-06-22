# Arquitectura Canónica de Componentes

**Última actualización:** Junio 2026
**Responsable:** Equipo de Diseño y Desarrollo

---

## 1. Por qué este patrón

El Design System es una **librería publicable** (`@flash-global66/g-*`), no una aplicación. Eso impone restricciones distintas a las de un proyecto Vue normal:

- El barrel `index.ts` es **obligatorio**: es el contrato de entrada del paquete npm.
- Los estilos se compilan **en el build del DS**: el SCSS se procesa y se distribuye como CSS compilado en `dist/`.
- Las **clases CSS** (`gui-button`, `gui-button--variant-primary`, `is-disabled`) son un contrato con los consumidores en producción y no pueden cambiar sin una migración coordinada.

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

| Elemento            | Convención                             | Ejemplo              |
| ------------------- | -------------------------------------- | -------------------- |
| Carpeta del paquete | kebab-case (nombre npm)                | `g-button/`          |
| Archivo `.vue`      | PascalCase                             | `Button.vue`         |
| Composables         | `use<Name>.ts` camelCase               | `useButton.ts`       |
| Props               | `<name>.props.ts`                      | `button.props.ts`    |
| Constantes          | `<name>.constant.ts`                   | `button.constant.ts` |
| Tipos               | `<name>.type.ts`                       | `button.type.ts`     |
| Estilos             | `<name>.style.scss` (singular)         | `button.style.scss`  |
| Tests               | `<Name>.spec.ts` / `use<Name>.spec.ts` | `Button.spec.ts`     |

**NUNCA** kebab-case en archivos fuente (`.vue`, `.ts`, `.scss`). Los nombres de paquete npm son la única excepción.

---

## 4. Separación de responsabilidades

### 4.1 `<Name>.vue` — Template puro

El componente Vue es una **capa delgada de presentación**. Solo declara props/emits, instancia el composable principal y renderiza. Toda la reactividad, los event handlers y el cálculo de clases viven en el composable.

### 4.2 `composables/use<Name>.ts` — Lógica

Toda la lógica reactiva y los event handlers van aquí. El composable recibe `props` y `emit`, retorna el estado que necesita el template. Incluye el cálculo de clases BEM via `useNamespace`.

### 4.3 `props/<name>.props.ts` — Props, emits y validadores

Usa `buildProps` de `@flash-global66/g-utils`. Los tipos vienen de `../types/<name>.type`, los valores permitidos de `../constants/<name>.constant`.

### 4.4 `constants/<name>.constant.ts` — Fuente de verdad

Arrays `as const` de los que se derivan los tipos TypeScript y los validadores en runtime.

```ts
export const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
export const BUTTON_SIZES = ['sm', 'md'] as const;
```

### 4.5 `types/<name>.type.ts` — Tipos derivados

Los tipos se **derivan** de las constantes para evitar duplicación:

```ts
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
```

### 4.6 `styles/<name>.style.scss` — Estilos BEM

```scss
@use 'sass:map';
@use '@flash-global66/g-utils/mixins' as *;

@include b('button') {
  @include m('variant-primary') {
    /* ... */
  }
  @include when(disabled) {
    /* ... */
  }
}
```

Genera clases `gui-button`, `gui-button--variant-primary`, `is-disabled`. No se declara `$namespace` explícitamente — el default `gui` viene del sistema de módulos de Sass (ver [`docs/architecture/utils-package.md`](utils-package.md)).

### 4.7 `index.ts` — Barrel público

```ts
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import Button from './src/Button.vue';

export const GButton: SFCWithInstall<typeof Button> & {
  Button: typeof Button;
} = withInstall(Button, { Button });

export default GButton;
export * from './src/types/button.type';
export type ButtonInstance = InstanceType<typeof Button>;
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

- `sideEffects` evita que el bundler elimine los estilos por tree-shaking.
- `exports["./styles.scss"]` apunta al archivo **fuente** para consumidores que quieran compilar el SCSS ellos mismos.
- Las dependencias internas `@flash-global66/g-*` van en `dependencies`, no en `peerDependencies`.

---

## 6. Tests

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

## 7. JSDoc en español

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

## Recursos relacionados

- [`docs/architecture/utils-package.md`](utils-package.md) — convención de paquetes utilitarios
- Ejemplo canónico completo: `components/button/` en este repositorio
