# Documentación de Stories en Storybook

> **Fuente de verdad para escribir la documentación de componentes en Storybook.**
> Consulta también la guía interactiva: `Concept/Guide/Components Documentation Guide`.

## Regla de idioma

| Qué | Idioma |
|---|---|
| Títulos de secciones, descripciones, categorías de argTypes | Español |
| Nombres de props, tipos, interfaces, métodos, variables | Inglés |
| Comentarios en el código de la story | Inglés |

Esta regla aplica a toda la documentación del DS. El razonamiento: las descripciones las leen desarrolladores hispanohablantes; el código técnico debe ser compatible con tooling internacional.

---

## Orden de navegación en Storybook (objetivo)

El DS sigue el orden inspirado en Strapi Docs:

1. **Welcome** — página de bienvenida y estado del DS
2. **Getting Started** — instalación, configuración, primeros pasos
3. **Foundations** — Colores → Tipografía → Espaciado → Radio → Sombras → Z-Index
4. **Components** — agrupados por categoría (Basic, Form, Feedback, etc.)
5. **Concepts** — guías técnicas (Estructura de Componentes, Documentación, etc.)

El `title` de cada story define su posición en la navegación. Usa este formato:

```ts
title: 'Basic/Button'          // Components → Basic → Button
title: 'Form/Input'            // Components → Form → Input
title: 'Concept/Guide/...'     // Concepts → Guide → ...
title: 'Colores/Foundations'   // Foundations → Colors
```

---

## Estructura de un archivo de story

Un archivo de story tiene siempre tres partes:

1. **Meta object** (default export) — configuración del componente en Storybook
2. **Story exports** — cada ejemplo del componente
3. **Tipos** — `type Story = StoryObj<ComponenteProps>`

```ts
// stories/button.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { GButton } from '@flash-global66/g-button/index.ts'
import type { ButtonProps } from '@flash-global66/g-button'

const meta: Meta<ButtonProps> = {
  title: 'Basic/Button',
  component: GButton,
  tags: ['autodocs'],            // activa la página de docs automática
  parameters: { /* ... */ },
  argTypes: { /* ... */ }
}

export default meta
type Story = StoryObj<ButtonProps>

export const Basic: Story = { /* ... */ }
export const Variants: Story = { /* ... */ }
```

---

## El meta object

### `parameters.docs.description.component`

El string de descripción del componente. Es markdown y aparece en la página de docs automática. Estructura recomendada:

```ts
parameters: {
  docs: {
    description: {
      component: `
## Descripción

El componente \`GButton\` es el botón de acción principal del Design System.
Soporta variantes visual, estados de carga/deshabilitado y efecto ripple.

### Características principales
- Tres variantes: \`primary\`, \`secondary\`, \`tertiary\`
- Dos tamaños: \`sm\`, \`md\`
- Estado de carga con animación de puntos
- Efecto ripple al hacer clic
- Soporte para iconos izquierdo y derecho

### Instalación

\`\`\`bash
yarn add @flash-global66/g-button
\`\`\`

### Importación

\`\`\`ts
import { GButton } from '@flash-global66/g-button'
import '@flash-global66/g-button/styles.scss'
\`\`\`

### Dependencias internas
- [\`@flash-global66/g-icon-font\`](/docs/basic-iconfont--docs)
- [\`@flash-global66/g-form\`](/docs/form-form--docs)
      `
    }
  }
}
```

---

## argTypes — categorías en español

Organiza las props en categorías descriptivas. El campo `table.category` es el que aparece en Storybook:

```ts
argTypes: {
  // Categoría: Principales
  variant: {
    description: 'Variante visual del botón',
    control: 'select',
    options: ['primary', 'secondary', 'tertiary'],
    table: {
      category: 'Principales',
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' }
    }
  },

  // Categoría: Estilo y apariencia
  size: {
    description: 'Tamaño del botón',
    control: 'select',
    options: ['sm', 'md'],
    table: {
      category: 'Estilo y apariencia',
      type: { summary: 'string' },
      defaultValue: { summary: 'md' }
    }
  },

  // Categoría: Comportamiento
  disabled: {
    description: 'Deshabilita la interacción con el botón',
    control: 'boolean',
    table: {
      category: 'Comportamiento',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },

  // Categoría: Eventos
  onClick: {
    description: 'Se dispara cuando el usuario hace clic en el botón habilitado',
    action: 'click',
    table: {
      category: 'Eventos',
      type: { summary: '(event: MouseEvent) => void' }
    }
  },

  // Categoría: Slots
  default: {
    description: 'Contenido textual del botón (alternativa a la prop `title`)',
    table: {
      category: 'Slots',
      type: { summary: 'VNode | string' }
    }
  },

  // Categoría: Accesibilidad
  ariaLabel: {
    description: 'Etiqueta ARIA cuando el texto visible no es suficientemente descriptivo',
    control: 'text',
    table: {
      category: 'Accesibilidad',
      type: { summary: 'string' }
    }
  }
}
```

### Categorías estándar recomendadas

| Categoría | Qué incluye |
|---|---|
| `Principales` | Props de identidad del componente (variant, size, value, model) |
| `Estilo y apariencia` | Props visuales secundarias (color, shape, density) |
| `Comportamiento` | disabled, loading, readonly, autofocus |
| `Navegación` | href, target, download — para componentes con enlace |
| `Iconos` | iconLeft, iconRight, icon |
| `Eventos` | onClick, onChange, onInput, onSubmit |
| `Slots` | default, prefix, suffix, header, footer |
| `Accesibilidad` | ariaLabel, ariaDescribedBy, role, tabIndex |
| `Métodos expuestos` | focus(), blur(), reset(), validate() (en `defineExpose`) |

---

## Stories individuales

Cada story es un objeto con `name`, `parameters.docs.description.story` y `render` (o `args` para stories controlables):

```ts
// Story controlable con args
export const Playground: Story = {
  name: 'Interactivo',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo controlable con todos los controles disponibles en el panel lateral.'
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    title: 'Botón',
    disabled: false,
    loading: false,
  }
}

// Story de presentación con render function
export const AllVariants: Story = {
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'Las tres variantes disponibles: primaria, secundaria y terciaria.'
      }
    }
  },
  render: () => ({
    components: { GButton },
    template: `
      <div class="flex gap-4">
        <g-button variant="primary" title="Primario" />
        <g-button variant="secondary" title="Secundario" />
        <g-button variant="tertiary" title="Terciario" />
      </div>
    `
  })
}
```

### Tipos de story y cuándo usar cada uno

| Tipo | Cuándo usarlo |
|---|---|
| `args` directo | Story controlable — el usuario ajusta valores desde el panel |
| `render: () => (...)` | Presentación — muestra variantes o casos específicos sin controles |
| `render: (args) => (...)` | Controlable con template personalizado — más flexibilidad que `args` solo |

---

## Patrón de importación en stories

```ts
// Importar el componente desde su entrypoint de paquete
import { GButton } from '@flash-global66/g-button/index.ts'

// Importar tipos desde el paquete (nunca desde rutas internas de src/)
import type { ButtonProps } from '@flash-global66/g-button'

// Helpers del DS (si los hay)
import { generateIconOptions } from '../helper/documentation-stories'
```

**No importes** desde rutas internas del componente (`../../components/button/src/...`). Usa siempre el entrypoint del paquete.

---

## Referencia: button.stories.ts

El archivo `stories/button.stories.ts` es el ejemplo más completo y actualizado del DS. Cuando tengas dudas, ábrelo como referencia de:

- Cómo escribir el `parameters.docs.description.component`
- Cómo definir `argTypes` con categorías en español
- Cómo mezclar stories controlables y de presentación
- Cómo importar el componente y sus tipos

---

## Recursos relacionados

- `docs/architecture/component-architecture.md` — cómo crear el componente antes de documentarlo
- `stories/concepts/components-documentation-guide.mdx` — guía interactiva en Storybook
- `stories/concepts/component-structure-guide.mdx` — guía de estructura en Storybook
- Storybook 8 docs: https://storybook.js.org/docs/writing-stories
