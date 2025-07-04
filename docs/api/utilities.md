# Utilities and APIs

This document covers the utility functions, composables, and APIs available across the Global66 Design System.

## Table of Contents

- [Theming Utilities](#theming-utilities)
- [Common Composables](#common-composables)
- [Type Definitions](#type-definitions)
- [Build Tools](#build-tools)
- [Configuration](#configuration)

## Theming Utilities

### `tGlobalTheme`

The main theme configuration object that extends Tailwind CSS with Global66 design tokens.

```typescript
import { tGlobalTheme } from '@flash-global66/g-common'

// Usage in tailwind.config.js
module.exports = {
  theme: {
    ...tGlobalTheme
  }
}
```

#### Color System

```typescript
// Available color families
const colors = {
  // Primary brand colors
  blue: {
    1: '#2C4398',    // Primary brand blue
    2: '#1433B4',    // Dark blue
    3: '#2746C7',    // Medium blue
    4: '#3F5EDF',    // Light blue
    5: '#869EFF',    // Lighter blue
    6: '#9DB0FF',    // Very light blue
    7: '#4267B2',    // Facebook blue
    8: '#8891BD',    // Muted blue
    9: '#6A75A9',    // Darker muted blue
    10: '#CCD1EB',   // Very light blue
    11: '#4F5694',   // Dark purple-blue
    12: '#6F75B8',   // Medium purple-blue
    13: '#8386C2',   // Light purple-blue
  },
  
  // Neutral colors
  gray: {
    1: '#343E68',    // Darkest gray
    2: '#4F5A95',    // Dark gray
    3: '#5D6EB5',    // Medium-dark gray
    4: '#8B97CB',    // Medium gray
    5: '#9AA5D3',    // Medium-light gray
    6: '#B3BDE5',    // Light gray
    7: '#D7DCF0',    // Very light gray
    8: '#E1E5F5',    // Ultra light gray
    9: '#F4F6FE',    // Background gray
    10: '#F5F7FF',   // Background light
    11: '#FAFBFF',   // Background lightest
    12: '#ADADAD',   // Neutral gray
    13: '#9194A1',   // Cool gray
    14: '#EAEDF8',   // Border gray
    15: '#BFBFBF',   // Medium neutral
    16: '#9C9C9C',   // Dark neutral
    17: '#EBEBEB',   // Light neutral
    18: '#E4E8F6',   // Blue-tinted gray
    19: '#475694',   // Dark blue-gray
  },
  
  // Status colors
  green: {
    1: '#00B682',    // Success primary
    2: '#00C48C',    // Success light
    3: '#01D196',    // Success bright
    4: '#7CDFC5',    // Success pale
    5: '#DDF2F3',    // Success background
    6: '#E8F3E6',    // Success lightest
    7: '#178406',    // Success dark
  },
  
  red: {
    1: '#FF647C',    // Error primary
    2: '#FFB1BD',    // Error light
    3: '#FFEFF2',    // Error background
    4: '#F6E6E6',    // Error lightest
    5: '#A30101',    // Error dark
    6: '#EA596F',    // Error medium
  },
  
  yellow: {
    1: '#FFD153',    // Warning primary
    2: '#FCE5A9',    // Warning light
    3: '#FFFAEE',    // Warning background
    4: '#F7F3E6',    // Warning lightest
    5: '#CA9400',    // Warning dark
    6: '#B08A01',    // Warning darker
    7: '#E9B72D',    // Warning medium
    8: '#FCBB0A',    // Warning bright
  }
}
```

#### Typography

```typescript
const typography = {
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
  },
  fontSize: {
    '8px': '8px',
    '13px': '13px',
  }
}
```

#### Spacing and Layout

```typescript
const layout = {
  borderRadius: {
    xl: '10px',
  },
  borderWidth: {
    3: '3px',
  },
  minHeight: (theme) => ({
    ...theme('spacing'),
    '3/4': '75vh',
    '1/2': '50vh',
    '1/4': '25vh',
  }),
  minWidth: {
    '250px': '250px',
  },
  width: {
    fit: 'fit-content',
  },
  maxWidth: {
    '1/5': '20%',
  },
  scale: {
    101: '1.01',
    102: '1.02',
    103: '1.03',
    104: '1.04',
  },
  screens: {
    'md-lg': '950px',
    '3xl': '1900px',
  }
}
```

#### Shadows

```typescript
const shadows = {
  boxShadow: {
    content: '0px 2px 10px rgba(0, 0, 0, 0.04)',
    input: '0px 2px 10px rgba(0, 0, 0, 0.04)',
    input2: 'rgb(0 0 0 / 0.05) 0px 0px 0px 1px, 0 1px 2px 0 rgb(0 0 0 / 0.05)',
    button: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    menu: '0px 4px 4px rgba(0, 0, 0, 0.22);',
    radio: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    customDiverter: '0px 3px 10px rgba(0, 0, 0, 0.14)',
  }
}
```

### `tGlobalVariants`

Extended Tailwind variants for component states.

```typescript
import { tGlobalVariants } from '@flash-global66/g-common'

// Usage in tailwind.config.js
module.exports = {
  variants: {
    ...tGlobalVariants
  }
}
```

Available variants:
- `hover`, `focus`, `active`, `disabled` for opacity
- `hover`, `focus`, `active`, `disabled`, `label-checked` for background/text colors
- `last` for border width

### `tGlobalPlugins`

Custom Tailwind plugins for special behaviors.

```typescript
import { tGlobalPlugins } from '@flash-global66/g-common'

// Usage in tailwind.config.js
module.exports = {
  plugins: [
    ...tGlobalPlugins
  ]
}
```

#### Label-Checked Variant

Applies styles when a radio/checkbox input is checked:

```css
/* Generated CSS */
input[type="radio"]:checked ~ .label-checked\:bg-blue-3 {
  background-color: #2746C7;
}
```

## Common Composables

### `useNamespace`

Creates BEM-style CSS class names for components.

```typescript
import { useNamespace } from 'element-plus'

const ns = useNamespace('button', ref('gui'))

// Available methods
ns.b()                    // 'gui-button'
ns.e('content')          // 'gui-button__content'
ns.m('primary')          // 'gui-button--primary'
ns.is('disabled', true)  // 'is-disabled'
ns.is('loading', false)  // ''
```

#### Usage in Components

```vue
<script setup lang="ts">
import { useNamespace } from 'element-plus'
import { computed, ref } from 'vue'

const ns = useNamespace('my-component', ref('gui'))

const classes = computed(() => [
  ns.b(),                          // Base class
  ns.m(`variant-${props.variant}`), // Modifier for variant
  ns.m(props.size),                // Size modifier
  ns.is('disabled', props.disabled), // State class
  ns.is('loading', props.loading)    // Loading state
])
</script>

<template>
  <div :class="classes">
    <div :class="ns.e('header')">Header</div>
    <div :class="ns.e('content')">Content</div>
    <div :class="ns.e('footer')">Footer</div>
  </div>
</template>
```

### `buildProps`

Type-safe prop definition utility from Element Plus.

```typescript
import { buildProps, definePropType } from 'element-plus/es/utils'
import type { ExtractPropTypes, PropType } from 'vue'

// Define props with full type safety
export const myComponentProps = buildProps({
  /**
   * Component variant
   */
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  /**
   * Whether component is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Custom configuration object
   */
  config: {
    type: definePropType<MyConfig>(Object),
    default: () => ({}),
  },
} as const)

// Extract prop types
export type MyComponentProps = ExtractPropTypes<typeof myComponentProps>
```

#### Prop Validation

```typescript
export function validateMyComponentProps(props: MyComponentProps) {
  if (!['primary', 'secondary'].includes(props.variant)) {
    console.warn(`Invalid variant: ${props.variant}`)
  }
}
```

## Type Definitions

### Common Types

```typescript
// Icon string format for FontAwesome
export type IconString = string // Format: "weight icon-name" e.g., "solid check"

// Component sizes
export type Size = 'sm' | 'md' | 'lg'

// Component variants
export type Variant = 'primary' | 'secondary' | 'tertiary'

// Component states
export interface ComponentState {
  disabled?: boolean
  loading?: boolean
  error?: boolean
}

// Accessibility props
export interface AccessibilityProps {
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
}
```

### Form Types

```typescript
// Form validation rules
export interface FormRule {
  required?: boolean
  message?: string
  type?: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'email' | 'url'
  min?: number
  max?: number
  validator?: (rule: any, value: any, callback: (error?: Error) => void) => void
  asyncValidator?: (rule: any, value: any) => Promise<void>
}

export interface FormRules {
  [key: string]: FormRule[]
}

// Form item prop types
export type FormItemProp = string | string[]
```

### Event Types

```typescript
// Common event emitters
export interface ButtonEmits {
  click: (event: MouseEvent) => boolean
  mousedown: (event: MouseEvent) => boolean
}

export interface InputEmits {
  'update:modelValue': (value: string) => boolean
  input: (value: string) => boolean
  change: (value: string) => boolean
  focus: (event: FocusEvent) => boolean
  blur: (event: FocusEvent) => boolean
  clear: () => boolean
}
```

## Build Tools

### Component Build Configuration

Each component includes its own build configuration:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'GComponent',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "declaration": true,
    "declarationMap": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Configuration

### Global Configuration Provider

```typescript
import { createApp } from 'vue'
import { ConfigProvider } from '@flash-global66/g-config-provider'
import { es } from '@flash-global66/g-common/lang'

const app = createApp(App)

// Configure global settings
app.use(ConfigProvider, {
  // Internationalization
  locale: es,
  
  // Theme configuration
  theme: 'global66',
  
  // Component defaults
  size: 'md',
  
  // Z-index management
  zIndex: {
    popper: 2000,
    modal: 3000,
    toast: 4000
  }
})
```

### Environment Configuration

```typescript
// Create environment-specific configurations
interface AppConfig {
  apiBaseUrl: string
  environment: 'development' | 'staging' | 'production'
  features: {
    enableAnalytics: boolean
    enableDebugMode: boolean
  }
}

const config: AppConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableDebugMode: import.meta.env.VITE_DEBUG_MODE === 'true'
  }
}
```

### Component Instance Methods

Many components expose methods through template refs:

```typescript
// Button component methods
interface ButtonInstance {
  focus: () => void
  blur: () => void
}

// Input component methods
interface InputInstance {
  focus: () => void
  blur: () => void
  select: () => void
  clear: () => void
}

// Form component methods
interface FormInstance {
  validate: (callback?: (valid: boolean, fields?: any) => void) => Promise<boolean>
  validateField: (props: string | string[], callback?: Function) => void
  resetFields: (props?: string | string[]) => void
  clearValidate: (props?: string | string[]) => void
  scrollToField: (prop: string) => void
}
```

### Usage Examples

```vue
<template>
  <div>
    <g-input ref="inputRef" v-model="value" />
    <g-form ref="formRef" :model="formData" :rules="rules">
      <!-- form content -->
    </g-form>
    
    <g-button @click="focusInput">Focus Input</g-button>
    <g-button @click="validateForm">Validate Form</g-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { InputInstance, FormInstance } from '@flash-global66/g-input'

const inputRef = ref<InputInstance>()
const formRef = ref<FormInstance>()

const focusInput = () => {
  inputRef.value?.focus()
}

const validateForm = async () => {
  const isValid = await formRef.value?.validate()
  console.log('Form is valid:', isValid)
}
</script>
```

## Internationalization

### Language Configuration

```typescript
// Spanish locale (default)
export const es = {
  name: "es",
  el: {
    datepicker: {
      now: "Ahora",
      today: "Hoy",
      cancel: "Cancelar",
      clear: "Limpiar",
      confirm: "Aceptar",
      // ... more translations
    }
  }
}
```

### Adding Custom Translations

```typescript
import { es } from '@flash-global66/g-common/lang'

// Extend existing translations
const customEs = {
  ...es,
  myApp: {
    welcome: "Bienvenido",
    logout: "Cerrar sesión",
    settings: "Configuración"
  }
}

// Use in ConfigProvider
app.use(ConfigProvider, {
  locale: customEs
})
```

## Testing Utilities

### Component Testing Helpers

```typescript
import { mount } from '@vue/test-utils'
import type { ComponentMountingOptions } from '@vue/test-utils'

// Helper for mounting components with default props
export function mountComponent<T>(
  component: T, 
  options: ComponentMountingOptions<T> = {}
) {
  return mount(component, {
    global: {
      plugins: [ConfigProvider],
      stubs: {
        teleport: true
      }
    },
    ...options
  })
}

// Helper for testing form validation
export async function validateFormField(
  wrapper: any, 
  fieldName: string, 
  value: any
) {
  const form = wrapper.findComponent({ name: 'GForm' })
  await form.vm.validateField(fieldName)
  return form.vm.fields[fieldName]?.errors || []
}
```

### Mock Utilities

```typescript
// Mock API responses
export const mockApiResponse = <T>(data: T, delay = 100): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

// Mock form validation
export const mockFormValidation = (isValid = true, errors = {}) => {
  return jest.fn((callback) => {
    if (callback) {
      callback(isValid, errors)
    }
    return Promise.resolve(isValid)
  })
}
```

---

This utilities documentation provides comprehensive coverage of the APIs, helpers, and configuration options available in the Global66 Design System. For component-specific APIs, refer to the individual component documentation.