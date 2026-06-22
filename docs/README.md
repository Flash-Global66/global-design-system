# Documentación del Global Design System

Este directorio contiene la documentación técnica del Design System. Complementa la documentación interactiva disponible en Storybook.

## Estructura

```
docs/
├── README.md                          # este archivo
├── architecture/
│   ├── component-architecture.md      # cómo crear/migrar un componente al patrón canónico
│   └── utils-package.md               # convención de paquetes utilitarios (g-utils, g-hooks, g-tokens)
└── storybook/
    └── story-documentation.md         # cómo escribir la documentación de una story
```

## Guías disponibles

### Arquitectura

- **[Arquitectura Canónica de Componentes](./architecture/component-architecture.md)**
  Estructura de carpetas, naming, separación de responsabilidades, integración con `@flash-global66/g-utils`, campos de `package.json` y reglas de backward-compatibility. El componente `button` se usa como ejemplo canónico a lo largo del documento.

- **[Convención de Paquetes Utilitarios](./architecture/utils-package.md)**
  Cómo crear paquetes de infraestructura compartida (`g-utils`, `g-hooks`, `g-tokens`). Incluye la estructura source-only, la API pública de `g-utils` y las reglas de resolución en Vitest.

### Storybook

- **[Documentación de Stories](./storybook/story-documentation.md)**
  Cómo estructurar una story: meta object, argTypes con categorías en español, tipos de story (controlable vs. presentación), patrón de importación y orden de navegación en Storybook.

## Guías interactivas en Storybook

Estas guías también existen en formato interactivo dentro de Storybook bajo `Concept/Guide/`:

- `Concept/Guide/Estructura de Componentes` → `stories/concepts/component-structure-guide.mdx`
- `Concept/Guide/Components Documentation Guide` → `stories/concepts/components-documentation-guide.mdx`

> Las guías en `docs/` son la **fuente de verdad actualizada** al patrón canónico con `@flash-global66/g-utils`.
> Las guías en `stories/concepts/` son su versión interactiva para visualización en Storybook y serán
> evolucionadas para mantenerse en sincronía.

## AI Skills

El directorio `.ai/skills/` contiene skills LLM-first que aceleran la asistencia de IA para tareas frecuentes:

- `.ai/skills/create-component/SKILL.md` — crear/migrar un componente al patrón canónico
- `.ai/skills/document-stories/SKILL.md` — escribir la documentación de una story en Storybook
