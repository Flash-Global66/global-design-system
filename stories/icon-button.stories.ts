import type { Meta, StoryObj } from "@storybook/vue3";

import { GIconButton } from '@flash-global66/g-icon-button/index.ts';
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";

import { version, peerDependencies } from "@flash-global66/g-icon-button/package.json";
import { generatePeerDepsList, generateIconOptions, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta = {
  title: "Basic/IconButton",
  component: GIconButton,
  parameters: {
    docs: {
      description: {
        component: `
El componente IconButton permite crear botones circulares que solo contienen un ícono. Es útil para acciones comunes donde el ícono es universalmente reconocido o cuando el espacio es limitado en la interfaz.

> Versión actual: ${version}

## Características
- Múltiples variantes visuales (grey, black, blue)
- Dos tamaños disponibles (medium, small)
- Opción para mostrar borde
- Compatible con enlaces (href)
- Efecto ripple al hacer clic

### Instalación

\`\`\`bash
yarn add @flash-global66/g-icon-button
\`\`\`

### Importación del componente
\`\`\`typescript
import { GIconButton } from '@flash-global66/g-icon-button'
import '@flash-global66/g-icon-button/styles.scss'
\`\`\`

## Dependencias

Este componente requiere:

${generatePeerDepsList(peerDependencies)}

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GIconButton } from '@flash-global66/g-icon-button';
</script>

<template>
  <g-icon-button
    variant="grey"
    icon="solid check"
    size="medium"
  />
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    // Current Props - Variant & Style
    variant: {
      control: "select",
      options: ["grey", "black", "blue"],
      description: "Variante visual del icono botón",
      table: {
        type: { summary: "string" },
        category: "Principales",
      },
    },
    size: {
      control: "select",
      options: ["medium", "small"],
      description: "Tamaño del icono botón",
      table: {
        type: { summary: "string" },
        category: "Principales",
      },
    },
    border: {
      control: "boolean",
      description: "Muestra un borde alrededor del botón",
      table: {
        type: { summary: "boolean" },
        category: "Principales",
      },
    },
    rounded: {
      control: "boolean",
      description: "Hace que el borde sea completamente redondeado (requiere border: true)",
      table: {
        type: { summary: "boolean" },
        category: "Principales",
      },
    },

    // Iconos
    icon: {
      description: "Icono a mostrar en el botón.",
      control: "select",
      options: generateIconOptions(),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "solid check" },
      },
    },
    autofocus: {
      control: "boolean",
      description:
        "El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el icono botón",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    download: {
      control: "text",
      description: "Especifica que el elemento se descargará cuando el usuario haga clic en el enlace",
      table: {
        defaultValue: { summary: "undefined" },
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Link Props
    href: {
      control: "text",
      description: "Convierte el icono botón en un enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },
    target: {
      control: "text",
      description: "Atributo target del enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Events
    onClick: {
      description: "Evento para el clic en el botón.",
      table: {
        category: "Eventos",
      },
    },
    onMousedown: {
      description: "Evento para cuando se presiona el mouse sobre el botón.",
      table: {
        category: "Eventos",
      },
    },
  },
  args: {
    icon: "solid check",
    variant: "grey",
    size: "medium",
    disabled: false,
    border: false,
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: `
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
`, language: 'html',
      },
    }
  },
  render: (args) => ({
    components: { GIconButton, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    `
  })
};

export const Variants: Story = {
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos.'
      },
      source: {
        code: `
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="solid user"
          />
          <g-icon-button 
            variant="black"
            icon="solid envelope"
          />
          <g-icon-button 
            variant="blue"
            icon="solid question-circle"
          />
        </div>
      </g-config-provider>
    `
  })
};

export const Sizes: Story = {
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño).'
      },
      source: {
        code: `
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            size="medium"
            icon="solid paper-plane"
          />
          <g-icon-button 
            size="small"
            icon="solid paper-plane"
          />
        </div>
      </g-config-provider>
    `
  })
};

export const Border: Story = {
  name: 'Con borde',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede mostrarse con un borde utilizando la propiedad border. Esta propiedad puede aplicarse a ambos tamaños (medium y small).'
      },
      source: {
        code: `
<!-- Tamaño medium con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="medium" />
<g-icon-button variant="black" icon="solid lock" border size="medium" />
<g-icon-button variant="blue" icon="solid lock" border size="medium" />

<!-- Tamaño small con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="small" />
<g-icon-button variant="black" icon="solid lock" border size="small" />
<g-icon-button variant="blue" icon="solid lock" border size="small" />
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="medium" />
              <g-icon-button variant="black" icon="solid lock" border size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="small" />
              <g-icon-button variant="black" icon="solid lock" border size="small" />
              <g-icon-button variant="blue" icon="solid lock" border size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const RoundedBorder: Story = {
  name: 'Borde completamente redondeado',
  parameters: {
    docs: {
      description: {
        story: 'Cuando se usan las propiedades border y rounded juntas, el componente muestra un borde completamente redondeado (rounded-full).'
      },
      source: {
        code: `
<!-- Tamaño medium con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />

<!-- Tamaño small con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
<g-icon-button variant="black" icon="solid lock" border rounded size="small" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const Disabled: Story = {
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede deshabilitarse utilizando la propiedad disabled.'
      },
      source: {
        code: `
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="regular ban"
            disabled
          />
          <g-icon-button 
            variant="black"
            icon="solid user-slash"
            disabled
          />
          <g-icon-button 
            variant="blue"
            icon="solid times-circle"
            disabled
          />
        </div>
      </g-config-provider>
    `
  })
};

export const AsLink: Story = {
  name: 'Como enlace',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede funcionar como un enlace utilizando la propiedad href.'
      },
      source: {
        code: `
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
`, language: 'html',
      },
    }
  },
  render: () => ({
    components: { GIconButton, GConfigProvider },
    template: `
      <g-config-provider>
        <g-icon-button 
          variant="blue"
          icon="solid arrow-up-from-bracket"
          href="https://www.example.com"
          target="_blank"
        />
      </g-config-provider>
    `
  })
};




