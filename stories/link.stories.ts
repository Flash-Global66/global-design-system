import { Meta, StoryObj } from '@storybook/vue3';
import { GLink } from '../components/link';
import { GConfigProvider } from '../components/config-provider';

const meta: Meta<typeof GLink> = {
  title: 'Basic/Link',
  component: GLink,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Tipo de estilo del link. Define la apariencia visual y el color del link.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del link. Afecta tanto al tamaño del texto como de los íconos.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    underline: {
      control: { type: 'boolean' },
      description: 'Define si el link muestra un underline permanente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el link, impidiendo la interacción del usuario y aplicando estilos visuales de deshabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'URL a la que apunta el link, igual que el atributo href nativo de HTML.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Define cómo se abre el link, igual que el atributo target nativo de HTML.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
      },
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'Nombre del ícono a mostrar a la izquierda del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-left").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Nombre del ícono a mostrar a la derecha del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-right").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'inline'],
      description: 'Status del link: default (link independiente) o inline (para texto con enlaces).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Link Component

El componente Link proporciona un link versátil y personalizable para la navegación y acciones:

## Características
- Dos tipos de link (primary, secondary)
- Opción para mostrar underline permanente
- Tres tamaños disponibles: small (sm), medium (md) y large (lg)
- Soporte para íconos a la izquierda y derecha
- Estados de hover, active y disabled
- Compatible con atributos nativos de links HTML

## Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-link
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/b2b-ui-icon-font

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/b2b-ui-link/link.styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <!-- Link primario (por defecto) -->
  <g-link href="https://empresas.global66.com/">link primario</g-link>
  
  <!-- Link secundario -->
  <g-link 
    type="secondary"
    icon-right="regular chevron-right"
    href="https://empresas.global66.com/"
    target="_blank"
  >
    link secundario con icono
  </g-link>
  
  <!-- Link con underline permanente -->
  <g-link underline href="https://empresas.global66.com/">
    link con underline
  </g-link>
</template>

<script setup>
import { GLink } from '@flash-global66/b2b-ui-link';
</script>
\`\`\`
`
      }
    }
  },
  args: {
    type: 'primary',
    size: 'md',
    underline: false,
    disabled: false,
    href: 'https://empresas.global66.com/',
    target: '_blank',
    iconLeft: undefined,
    iconRight: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof GLink>;

export const Default: Story = {
  name: 'Default link',
  args: {
    default: 'default link',
  },
  render: (args) => ({
    components: { GLink, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "link básico con estilo por defecto y configuración estándar."
      },
      source: {
        code: `
<g-link href="https://empresas.global66.com/">link por defecto</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const WithIcons: Story = {
  name: 'Links con íconos',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Link with right icon</h3>
            <g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">Next page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with left icon</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">Previous page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with both icons</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">External link</g-link>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual."
      },
      source: {
        code: `
<g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">
  link con ícono a la derecha
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">
  link con ícono a la izquierda
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">
  link con íconos en ambos lados
</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const Sizes: Story = {
  name: 'Tamaños de link',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Small</h3>
            <g-link size="sm" href="https://empresas.global66.com/" icon-right="regular chevron-right">Small link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Medium (Default)</h3>
            <g-link size="md" href="https://empresas.global66.com/" icon-right="regular chevron-right">Medium link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Large</h3>
            <g-link size="lg" href="https://empresas.global66.com/" icon-right="regular chevron-right">Large link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Todos los tamaños con íconos</h3>
            <div class="flex flex-col gap-4 items-start">
              <g-link size="sm" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Small link</g-link>
              <g-link size="md" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Medium link</g-link>
              <g-link size="lg" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Large link</g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg)."
      },
      source: {
        code: `
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const Types: Story = {
  name: 'Tipos de link',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary</h3>
            <g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary</h3>
            <g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary con underline</h3>
            <g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con underline</h3>
            <g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes tipos de estilo: primary y secondary, con y sin underline."
      },
      source: {
        code: `
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

// Add a new story for links with both icons and underline
export const IconsWithUnderline: Story = {
  name: 'Links con íconos y underline',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary con íconos y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular arrow-left" 
              icon-right="regular arrow-right" 
              href="https://empresas.global66.com/"
            >
              Link con íconos y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary solo con ícono izquierdo y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular external-link" 
              href="https://empresas.global66.com/"
            >
              Link con ícono izquierdo y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con íconos y underline</h3>
            <g-link 
              type="secondary" 
              underline 
              icon-left="regular envelope" 
              icon-right="regular arrow-up-right-from-square" 
              href="https://empresas.global66.com/"
              target="_blank"
            >
              Link secundario con íconos y underline
            </g-link>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Links que combinan íconos y underline permanente, mostrando diferentes variaciones."
      },
      source: {
        code: `
<g-link 
  type="primary" 
  underline 
  icon-left="regular arrow-left" 
  icon-right="regular arrow-right" 
  href="https://empresas.global66.com/"
>
  Link con íconos y underline
</g-link>

<g-link 
  type="primary" 
  underline 
  icon-left="regular external-link" 
  href="https://empresas.global66.com/"
>
  Link con ícono izquierdo y underline
</g-link>

<g-link 
  type="secondary" 
  underline 
  icon-left="regular envelope" 
  icon-right="regular arrow-up-right-from-square" 
  href="https://empresas.global66.com/"
  target="_blank"
>
  Link secundario con íconos y underline
</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const DisabledState: Story = {
  name: 'Link deshabilitado',
  args: {
    disabled: true,
    default: 'link deshabilitado',
    iconRight: 'regular chevron-right',
  },
  render: (args) => ({
    components: { GLink, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "links en estado deshabilitado que no permiten interacción."
      },
      source: {
        code: `
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const ExternalLinks: Story = {
  name: 'Links externos',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
            Abre en nueva pestaña
          </g-link>
          <g-link href="https://empresas.global66.com/" target="_self">
            Abre en la misma pestaña
          </g-link>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "links que apuntan a sitios externos, con diferentes configuraciones del atributo target."
      },
      source: {
        code: `
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

export const LinkStatus: Story = {
  name: 'Estados del link',
  render: () => ({
    components: { GLink, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Default Status</h3>
            <g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Inline Status</h3>
            <p class="mb-2">Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto)."
      },
      source: {
        code: `
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>`,
        language: "html",
        type: "auto",
      },
    },
  },
};
