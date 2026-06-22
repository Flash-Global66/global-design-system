---
name: document-stories
description: >
  Escribir o actualizar la documentación de una story de Storybook para un componente
  del Global Design System. Activa cuando el usuario pide "documentar componente en Storybook",
  "crear story para X", "añadir argTypes", "agregar la documentación del componente",
  "categorías de Storybook", o cuando pide crear un archivo *.stories.ts.
---

# Skill: Documentar Stories de Storybook

## Contexto

El DS usa Storybook 8 + Vue 3.5 + TypeScript. Las stories se escriben en TypeScript (`*.stories.ts`).
La fuente de verdad completa está en `docs/storybook/story-documentation.md`.
El ejemplo más completo es `stories/button.stories.ts`.

---

## Regla de idioma (no negociable)

| Qué | Idioma |
|---|---|
| Descripciones, categorías de argTypes, títulos de secciones | **Español** |
| Nombres de props, tipos, variables, métodos, comentarios de código | **Inglés** |

Ejemplo correcto:
```ts
variant: {
  description: 'Variante visual del botón',   // descripción en español
  table: { category: 'Estilo y apariencia' }   // categoría en español
}
```

---

## Estructura del archivo de story

```ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { G<Name> } from '@flash-global66/g-<name>/index.ts'
import type { <Name>Props } from '@flash-global66/g-<name>'

// 1. Meta object (default export)
const meta: Meta<<Name>Props> = {
  title: '<Category>/<Name>',   // define la posición en la navegación
  component: G<Name>,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `<!-- descripción en markdown -->`,
      },
    },
  },
  argTypes: {
    // una entrada por prop/emit/slot
  },
}

export default meta
type Story = StoryObj<<Name>Props>

// 2. Stories individuales
export const Basic: Story = { /* ... */ }
export const Variants: Story = { /* ... */ }
```

---

## Títulos y navegación

El `title` determina la posición en el árbol de navegación de Storybook:

| `title` | Posición |
|---|---|
| `'Basic/Button'` | Components → Basic → Button |
| `'Form/Input'` | Components → Form → Input |
| `'Feedback/Toast'` | Components → Feedback → Toast |
| `'Concept/Guide/...'` | Concepts → Guide → ... |
| `'Colores/Foundations'` | Foundations → Colores |

Categorías existentes en el DS: `Basic`, `Form`, `Feedback`, `Navigation`, `Layout`.

---

## `parameters.docs.description.component`

Markdown completo de la descripción del componente. Estructura recomendada:

```ts
component: `
## Descripción

El componente \`G<Name>\` [descripción del propósito].

### Características principales
- [Característica 1]
- [Característica 2]

### Instalación

\`\`\`bash
yarn add @flash-global66/g-<name>
\`\`\`

### Importación

\`\`\`ts
import { G<Name> } from '@flash-global66/g-<name>'
import '@flash-global66/g-<name>/styles.scss'
\`\`\`

### Dependencias internas
- [\`@flash-global66/g-utils\`](/docs/...)
`
```

---

## argTypes — plantilla completa con categorías en español

```ts
argTypes: {
  // --- Principales ---
  variant: {
    description: 'Variante visual del componente',
    control: 'select',
    options: ['primary', 'secondary', 'tertiary'],
    table: {
      category: 'Principales',
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
    },
  },

  // --- Estilo y apariencia ---
  size: {
    description: 'Tamaño del componente',
    control: 'select',
    options: ['sm', 'md'],
    table: {
      category: 'Estilo y apariencia',
      type: { summary: 'string' },
      defaultValue: { summary: 'md' },
    },
  },

  // --- Comportamiento ---
  disabled: {
    description: 'Deshabilita la interacción con el componente',
    control: 'boolean',
    table: {
      category: 'Comportamiento',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  loading: {
    description: 'Activa el estado de carga',
    control: 'boolean',
    table: {
      category: 'Comportamiento',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },

  // --- Eventos ---
  onClick: {
    description: 'Se dispara cuando el usuario hace clic en el componente habilitado',
    action: 'click',
    table: {
      category: 'Eventos',
      type: { summary: '(event: MouseEvent) => void' },
    },
  },

  // --- Slots ---
  default: {
    description: 'Contenido principal del componente',
    table: {
      category: 'Slots',
      type: { summary: 'VNode | string' },
    },
  },

  // --- Accesibilidad ---
  ariaLabel: {
    description: 'Etiqueta ARIA para mejorar la accesibilidad cuando el texto visible no es suficiente',
    control: 'text',
    table: {
      category: 'Accesibilidad',
      type: { summary: 'string' },
    },
  },
}
```

### Categorías estándar del DS

| Categoría | Qué incluye |
|---|---|
| `Principales` | variant, size, value, modelValue — identidad del componente |
| `Estilo y apariencia` | color, shape, density, theme |
| `Comportamiento` | disabled, loading, readonly, autofocus |
| `Navegación` | href, target, download |
| `Iconos` | iconLeft, iconRight, icon |
| `Eventos` | onClick, onChange, onInput, onBlur |
| `Slots` | default, prefix, suffix, header, footer |
| `Accesibilidad` | ariaLabel, role, tabIndex |
| `Métodos expuestos` | focus(), blur(), reset(), validate() |

---

## Stories individuales

### Story controlable (con `args`)

```ts
export const Playground: Story = {
  name: 'Interactivo',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo controlable. Ajusta las props desde el panel lateral.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}
```

### Story de presentación (con `render`)

```ts
export const AllVariants: Story = {
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'Las tres variantes visuales disponibles.',
      },
    },
  },
  render: () => ({
    components: { G<Name> },
    template: `
      <div class="flex gap-4">
        <g-<name> variant="primary" title="Primario" />
        <g-<name> variant="secondary" title="Secundario" />
        <g-<name> variant="tertiary" title="Terciario" />
      </div>
    `,
  }),
}
```

### Story controlable con render personalizado

```ts
export const WithIcon: Story = {
  name: 'Con iconos',
  render: (args) => ({
    components: { G<Name> },
    setup() { return { args } },
    template: `<g-<name> v-bind="args" />`,
  }),
  args: {
    variant: 'primary',
    iconLeft: 'solid check',
  },
}
```

---

## Importaciones en stories

```ts
// Correcto: importar desde el entrypoint del paquete
import { GButton } from '@flash-global66/g-button/index.ts'
import type { ButtonProps } from '@flash-global66/g-button'

// Incorrecto: nunca importar desde rutas internas
import { GButton } from '../components/button/src/Button.vue'  // NO
```

---

## Ejemplo de referencia

El archivo `stories/button.stories.ts` es la story más completa del DS actualmente.
Abrelo para ver:

- Cómo se define el meta completo con `parameters.docs.description.component`
- Todas las categorías de argTypes en español (`Principales`, `Comportamiento`, `Iconos`, etc.)
- Mezcla de stories controlables y de presentación
- Uso de `action` para capturar eventos en el panel

---

## Referencias

- Documentación completa: `docs/storybook/story-documentation.md`
- Guía interactiva en Storybook: `Concept/Guide/Components Documentation Guide`
- Ejemplo canónico: `stories/button.stories.ts`
- Crear el componente primero: `.ai/skills/create-component/SKILL.md`
