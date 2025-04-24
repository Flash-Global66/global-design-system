import type { Meta, StoryObj } from "@storybook/vue3";

import { GInline } from '@flash-global66/g-inline/index.ts';
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";

import { version, peerDependencies } from '@flash-global66/g-inline/package.json';
import { generatePeerDepsList, generateIconOptions, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta = {
  title: "Data/Inline",
  component: GInline,
  parameters: {
    docs: {
      description: {
        component: `
El componente Inline es utilizado para comunicar información contextual, como estados específicos (éxito, error, advertencia, información) dentro de una página o funcionalidad. Es ideal para mensajes secundarios que no necesitan interrumpir al usuario, como alertas, recordatorios o enlaces relevantes. Este componente asegura que el mensaje sea notorio pero no invasivo, proporcionando claridad visual y textual.

> Versión actual: ${version}

## Características
- Títulos y descripciones 
- Íconos integrados
- Enlaces interactivos
- Diferentes tipos de mensajes (success, info, warning, error)
- Tamaños adaptables (md, sm)
- accesibilidad con etiquetas ARIA

### Instalación

\`\`\`bash
yarn add @flash-global66/g-inline
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GInline } from '@flash-global66/g-inline'

# recomendado importar en los estilos globales
import '@flash-global66/g-inline/inline.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`ts
import { GInline } from '@flash-global66/g-inline';
import { default } from '../components/button-card/ButtonCard.vue';

<g-inline 
  type="info"
  title="Información"
  description="Mensaje informativo"
  icon="solid info-circle"
/>
\`\`\`
`
      }
    }
  },
  argTypes: {
    icon: {
      description: 'Icono a mostrar en el componente `Inline`.',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    title: {
      description: "Título de la información que queremos transmitir.",
      control: "text",
    },
    description: {
      description: "Descripción adicional de la información.",
      control: "text",
    },
    size: {
      description: "Tamaño del componente",
      control: "select",
      options: ["md", "sm"],
      defaultValue: "md",
    },
    hideClose: {
      description: "Indica si se debe ocultar el botón de cierre.",
      control: "boolean",
      defaultValue: false,
    },
    type: {
      description: "Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",
      control: "select",
      options: ["success", "info", "warning", "error"],
      defaultValue: "success",
    },
    links: {
      description: "Lista de enlaces interactivos con etiquetas y acciones.",
      control: "object",
    },
    ariaLabel: {
      description: "Etiqueta ARIA para accesibilidad.",
      control: "text",
    },
    onClose: {
      description: "Evento para el cierre del componente.",
      table: {
        category: 'Eventos',
      }
    },
    default: {
      description: 'Contenido personalizado.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    }
  },
  args: {
    icon: "solid undo-alt",
    title: "Título",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    size: "md",
    hideClose: false,
    type: "success",
    links: [
      {
        label: "Enlace 1",
        action: () => alert("Acción 1"),
      },
      {
        label: "Enlace 2",
        action: () => alert("Acción 2"),
      },
    ],
    ariaLabel: "inline",
  },
};

export default meta;
type Story = StoryObj;
export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles.'
      }
    }
  },
  render: (args) => ({
    components: { GInline, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `
  })
};

// Todos los tipos
export const AllTypes: Story = {
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error.'
      }
    }
  },
  render: () => ({
    components: { GInline, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
          <g-inline 
            type="success"
            icon="solid circle-check"
          >
            hola
          </g-inline>
          <g-inline 
            type="info"
            title="Información"
            description="Mensaje informativo"
            icon="solid info-circle"
          />
          <g-inline 
            type="warning"
            title="Advertencia"
            description="Mensaje de advertencia"
            icon="solid triangle-exclamation"
          />
          <g-inline 
            type="error"
            title="Error"
            description="Mensaje de error"
            icon="solid circle-xmark"
          />
        </div>
      </g-config-provider>
    `
  })
};

// Tamaños disponibles
export const Sizes: Story = {
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI.'
      }
    }
  },
  render: () => ({
    components: { GInline, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            size="md"
            title="Tamaño mediano (md)"
            description="Este es el tamaño por defecto del componente"
            icon="solid info-circle"
          />
          <g-inline 
            size="sm"
            title="Tamaño pequeño (sm)"
            description="Versión más compacta del componente"
            icon="solid info-circle"
          />
        </div>
      </g-config-provider>
    `
  })
};

// Sin botón de cerrar
export const WithoutClose: Story = {
  name: 'Sin botón cerrar',
  parameters: {
    docs: {
      description: {
        story: 'Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose.'
      }
    }
  },
  render: () => ({
    components: { GInline, GConfigProvider },
    template: `
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `
  })
};

// Sin ícono
export const WithoutIcon: Story = {
  name: 'Sin ícono ni enlaces',
  parameters: {
    docs: {
      description: {
        story: 'Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía.'
      }
    }
  },
  render: () => ({
    components: { GInline, GConfigProvider },
    template: `
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `
  })
};