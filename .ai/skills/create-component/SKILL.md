---
name: create-component
description: >
  Crear o migrar un componente al patrón canónico del Global Design System.
  Activa cuando el usuario pide "crear componente", "migrar componente",
  "añadir nuevo componente al DS", "estructura de componente", o cuando
  pide crear archivos de un componente G* (ej: GTag, GModal, GBadge).
---

# Skill: Crear / Migrar un Componente del Design System

## Contexto

El Global Design System es una **librería publicable** (`@flash-global66/g-*`), no una aplicación.
Los componentes se distribuyen como paquetes NPM independientes.
La fuente de verdad completa está en `docs/architecture/component-architecture.md`.
El ejemplo canónico completo es `components/button/`.

---

## Árbol de archivos obligatorio

```
components/<Name>/              # PascalCase
├── index.ts                    # barrel público con withInstall
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CHANGELOG.md
├── src/
│   ├── <Name>.vue              # template puro, sin lógica
│   ├── composables/
│   │   └── use<Name>.ts        # lógica reactiva + event handlers
│   ├── props/
│   │   └── <name>.props.ts    # buildProps + emits + validateXProps
│   ├── constants/
│   │   └── <name>.constant.ts # arrays `as const` de variantes/tipos
│   ├── types/
│   │   └── <name>.type.ts     # tipos derivados de constants
│   └── styles/
│       └── <name>.style.scss  # mixins de g-utils, namespace gui
└── tests/
    ├── <Name>.spec.ts
    ├── composables/
    │   └── use<Name>.spec.ts
    └── props/
        └── <name>.props.spec.ts
```

**Regla de naming**:
- Carpeta y `.vue`: PascalCase (`Button/`, `Button.vue`)
- Composables: `use<Name>.ts` camelCase
- Props/constantes/tipos/estilos: `<name>.props.ts`, `<name>.constant.ts`, `<name>.type.ts`, `<name>.style.scss`
- NUNCA kebab-case en archivos fuente

---

## Patrones de código a seguir

### `index.ts` — barrel público

```ts
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils'
import <Name> from './src/<Name>.vue'

export const G<Name>: SFCWithInstall<typeof <Name>> & { <Name>: typeof <Name> } =
  withInstall(<Name>, { <Name> })

export default G<Name>
export * from './src/types/<name>.type'
export type <Name>Instance = InstanceType<typeof <Name>>
```

### `<Name>.vue` — template puro

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNamespace } from '@flash-global66/g-utils'
import { <name>Props, <name>Emits, validate<Name>Props } from './props/<name>.props'
import { use<Name> } from './composables/use<Name>'

const props = defineProps(<name>Props)
const emit = defineEmits(<name>Emits)
validate<Name>Props(props)

const { /* estado del composable */ } = use<Name>(props, emit)
const ns = useNamespace('<name>', ref('gui'))

const classes = computed(() => [
  ns.b(),
  // ns.m(`variant-${props.variant}`),
  // ns.is('disabled', props.disabled),
].filter(Boolean))
</script>
```

**Cero imports de element-plus** en `src/`.

### `constants/<name>.constant.ts`

```ts
/** Variantes visuales del componente. Fuente de verdad para tipos y validadores. */
export const <NAME>_VARIANTS = ['primary', 'secondary'] as const
export const <NAME>_SIZES    = ['sm', 'md'] as const
```

### `types/<name>.type.ts`

```ts
import type { <NAME>_VARIANTS, <NAME>_SIZES } from '../constants/<name>.constant'

/** Variante del componente. Derivada de {@link <NAME>_VARIANTS}. */
export type <Name>Variant = (typeof <NAME>_VARIANTS)[number]
export type <Name>Size    = (typeof <NAME>_SIZES)[number]
```

### `props/<name>.props.ts`

```ts
import { buildProps, debugWarn, isBoolean, isString } from '@flash-global66/g-utils'
import type { <Name>Variant, <Name>Size } from '../types/<name>.type'
import { <NAME>_VARIANTS, <NAME>_SIZES } from '../constants/<name>.constant'

export const <name>Props = buildProps({
  variant: { type: String as PropType<<Name>Variant>, default: 'primary' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  // ... props adicionales
})

export const <name>Emits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type <Name>Props = ExtractPropTypes<typeof <name>Props>

/** Valida en runtime (solo fuera de producción) las props del componente. */
export function validate<Name>Props(props: <Name>Props) {
  if (!<NAME>_VARIANTS.includes(props.variant)) {
    debugWarn('<Name>', `Invalid prop "variant": received "${props.variant}".`)
  }
}
```

### `styles/<name>.style.scss`

```scss
@use '@flash-global66/g-utils/config' with ($namespace: 'gui');
@use '@flash-global66/g-utils/mixins' as *;

@include b('<name>') {
  // estilos base

  @include m('variant-primary') { /* ... */ }
  @include m('md') { /* ... */ }
  @include when(disabled) { @apply cursor-not-allowed; }
  @include e('content') { /* ... */ }
}
```

### `package.json`

```json
{
  "name": "@flash-global66/g-<name>",
  "buildable": true,
  "sideEffects": ["**/*.css", "**/*.scss", "dist/index.css"],
  "main":   "dist/index.js",
  "module": "dist/index.mjs",
  "types":  "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./styles.scss": "./src/styles/<name>.style.scss",
    "./*": "./*"
  },
  "dependencies": { "@flash-global66/g-utils": "^0.1.0" },
  "peerDependencies": { "vue": "^3.2.0" }
}
```

---

## Tests — qué cubrir

### `tests/<Name>.spec.ts` — render + clases exactas

```ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { G<Name> } from '../index'

describe('G<Name>', () => {
  it('aplica la clase base', () => {
    const wrapper = mount(G<Name>, { props: { variant: 'primary' } })
    expect(wrapper.find('.<ns>-<name>').exists()).toBe(true)
    expect(wrapper.classes()).toContain('gui-<name>')
  })

  it('aplica clase de variante', () => {
    const wrapper = mount(G<Name>, { props: { variant: 'secondary' } })
    expect(wrapper.classes()).toContain('gui-<name>--variant-secondary')
  })

  it('aplica is-disabled cuando disabled=true', () => {
    const wrapper = mount(G<Name>, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('is-disabled')
  })
})
```

### `tests/composables/use<Name>.spec.ts` — lógica con withSetup

```ts
import { withSetup } from '../../tests/utils/withSetup'
import { use<Name> } from '../../components/<name>/src/composables/use<Name>'

describe('use<Name>', () => {
  it('bloquea el click cuando está deshabilitado', () => {
    const { result } = withSetup(() => use<Name>({ disabled: true }, vi.fn()))
    // asserts
  })
})
```

### `tests/props/<name>.props.spec.ts` — validadores

```ts
import { vi, describe, it, expect } from 'vitest'
import * as gUtils from '@flash-global66/g-utils'
import { validate<Name>Props } from '../../components/<name>/src/props/<name>.props'

describe('validate<Name>Props', () => {
  it('emite debugWarn con variante inválida', () => {
    const spy = vi.spyOn(gUtils, 'debugWarn').mockImplementation(() => {})
    validate<Name>Props({ variant: 'invalid' as any, disabled: false })
    expect(spy).toHaveBeenCalledWith('<Name>', expect.stringContaining('variant'))
  })
})
```

Correr los tests desde la raíz:

```bash
export PATH="$HOME/.nvm/versions/node/v20.19.3/bin:$PATH"
./node_modules/.bin/vitest run
```

---

## Checklist antes de PR

- [ ] Árbol de archivos completo (todos los sufijos correctos)
- [ ] `index.ts` usa `withInstall` de `@flash-global66/g-utils`
- [ ] `grep -r 'element-plus' components/<name>/src/` retorna 0
- [ ] `<name>.style.scss` usa `@use '@flash-global66/g-utils/...'`
- [ ] `package.json` tiene `sideEffects` y `exports["./styles.scss"]`
- [ ] JSDoc en español en toda la API pública
- [ ] Tests pasan: `vitest run` verde
- [ ] Si es migración: diff CSS vs. baseline vacío (backward-compat garantizada)
- [ ] Si es migración: clases CSS en `<Name>.spec.ts` coinciden exactamente con las anteriores

---

## Referencias

- Documentación completa: `docs/architecture/component-architecture.md`
- Ejemplo canónico: `components/button/` (estructura completa, tests y estilos migrados)
- Paquete utilitario: `common/g-utils/` y `docs/architecture/utils-package.md`
- Documentar la story del componente: `.ai/skills/document-stories/SKILL.md`
