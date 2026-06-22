# Documentación de Stories en Storybook

**Última actualización:** Junio 2026
**Responsable:** Equipo de Diseño y Desarrollo

> Esta guía documenta las convenciones de stories del DS. El archivo de referencia más
> actualizado siempre es `stories/button.stories.ts` — es el ejemplo canónico.

---

## Regla de idioma

| Qué | Idioma |
|---|---|
| Descripciones, categorías de argTypes, textos del usuario | Español |
| Nombres de props, tipos, variables, comentarios en código | Inglés |

---

## Estructura de un archivo de story

Un archivo de story tiene tres partes:

1. **Meta object** (default export) — configuración del componente en Storybook
2. **Story exports** — cada ejemplo del componente
3. **Tipos** — `type Story = StoryObj<ComponenteProps>`

```ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { GButton } from '@flash-global66/g-button/index.ts'
import type { ButtonProps } from '@flash-global66/g-button'

const meta: Meta<ButtonProps> = {
  title: 'Basic/Button',
  component: GButton,
  tags: ['autodocs'],
  argTypes: { /* ver sección argTypes */ },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Basic: Story = { /* ... */ }
```

**Importa siempre desde el entrypoint del paquete**, nunca desde rutas internas:

```ts
// ✅ correcto
import { GButton } from '@flash-global66/g-button/index.ts'
import type { ButtonProps } from '@flash-global66/g-button'

// ❌ incorrecto
import { GButton } from '../../components/button/src/Button.vue'
```

---

## argTypes — categorías en español

Organiza las props en categorías descriptivas mediante `table.category`:

| Categoría | Qué incluye |
|---|---|
| `Principales` | Props de identidad (variant, size, value, model) |
| `Estilo y apariencia` | Props visuales secundarias (color, shape, density) |
| `Comportamiento` | disabled, loading, readonly, autofocus |
| `Navegación` | href, target, download |
| `Iconos` | iconLeft, iconRight, icon |
| `Eventos` | onClick, onChange, onInput |
| `Slots` | default, prefix, suffix, header, footer |
| `Accesibilidad` | ariaLabel, role, tabIndex |

---

## Tipos de story

| Tipo | Cuándo usarlo |
|---|---|
| `args` directo | Story controlable — el usuario ajusta valores desde el panel lateral |
| `render: () => (...)` | Presentación — muestra variantes o casos específicos sin controles |
| `render: (args) => (...)` | Controlable con template personalizado |

---

## Navegación en Storybook

El `title` del meta object define la posición en la barra lateral. Estructura objetivo del DS:

```
Welcome
Getting Started
Foundations / Colores, Tipografía, Espaciado, Radio, Sombras, Z-Index
Components / Basic, Form, Feedback…
Concepts / Guías técnicas
```

Usando en el title:

```ts
title: 'Basic/Button'       // Components → Basic → Button
title: 'Form/Input'         // Components → Form → Input
title: 'Colores/Foundations'// Foundations → Colors
```

---

## Referencia: button.stories.ts

`stories/button.stories.ts` es el archivo más completo y actualizado del DS. Consultarlo para ver en contexto real:

- La descripción del componente en `parameters.docs.description.component`
- La definición de `argTypes` con categorías en español
- La mezcla de stories controlables y de presentación
- El patrón de importación del componente y sus tipos

---

## Recursos relacionados

- `docs/architecture/component-architecture.md` — cómo crear el componente antes de documentarlo
- Storybook 8 docs: https://storybook.js.org/docs/writing-stories
