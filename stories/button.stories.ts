import { StoryFn, Meta } from '@storybook/vue3'
import { GButton } from '@flash-global66/g-button/index.ts'

// TYPES
import { generateIconOptions } from './icon-font.stories'

// CONSTANTS
import { action } from '@storybook/addon-actions'

export default {
  title: 'Basic/Button',
  component: GButton,
  parameters: {
    docs: {
      description: {
        component: `
### Uso básico

Ejemplo de uso básico:

\`\`\` vue
<g-button variant="primary" title="Primary Button"/>
\`\`\`
      `
    }
  }
},  argTypes: {
    // Current Props - Variant & Style
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Variante visual del botón',
      table: {
        type: { summary: 'string' },
        category: 'Principales'
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Principales'
      }
    },
    title: {
      control: 'text',
      description: 'Texto del botón (preferencia sobre el slot)',
      table: {
        category: 'Principales',
        type: { summary: 'string' },
        defaultValue: { summary: 'Button Text' }
      }
    },

    // Behavior Props
    typeNative: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Tipo nativo del botón HTML',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
        category: 'Comportamiento'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Muestra estado de carga',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' }
      }
    },

    // Iconos
    iconLeft: {
      control: 'select',
      options: generateIconOptions(),
      description:
        "Icono izquierdo renderizado utilizando el componente IconFont.\n\nVer [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.\n\nEjemplo 'solid check''",
      table: {
        type: { summary: 'Iconos' },
        defaultValue: { summary: '' },
      }
    },

    iconRight: {
      control: 'select',
      options: generateIconOptions(),
      description:
        "Icono derecho renderizado utilizando el componente IconFont.\n\nVer [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.\n\nEjemplo 'solid arrow-right'",
      table: {
        type: { summary: 'Iconos' },
        defaultValue: { summary: '' },
      }
    },

    autofocus: {
      control: 'boolean',
      description:
        'El botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' }
      }
    },
    download: {
      control: 'text',
      description:
        'Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.\n\n ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.',
      table: {
        defaultValue: { summary: 'undefined' },
        category: 'Enlaces',
        type: { summary: 'string' }
      }
    },

    // Link Props
    href: {
      control: 'text',
      description: 'Convierte el botón en un enlace',
      table: {
        category: 'Enlaces',
        type: { summary: 'string' }
      }
    },
    target: {
      control: 'text',
      description: 'Atributo target del enlace',
      table: {
        category: 'Enlaces',
        type: { summary: 'string' }
      }
    },
    full: {
      control: 'boolean',
      description: 'Botón de ancho completo',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' }
      }
    },

    // Accesibilidad
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta accesible para el botón',
      table: {
        category: 'Accesibilidad',
        type: { summary: 'string' }
      }
    },
    // Events
    onClick: {
      description:
        'Se dispara al hacer clic en el botón. No se dispara si el botón está deshabilitado.',
      table: {
        category: 'Events',
        type: { summary: '(event: Event) => void' }
      }
    },
    onMousedown: {
      description:
        'Se dispara cuando se presiona el botón del mouse. No se dispara si el botón está deshabilitado.',
      table: {
        category: 'Events',
        type: { summary: '(event: Event) => void' }
      }
    },
    default: {
      constrol: 'text',
      description: 'Slot por defecto del botón',
      table: {
        category: 'Slots',
        type: { summary: 'string | Component' }
      }
    },
  }
} as Meta<typeof GButton>

// Base template
const Template: StoryFn<typeof GButton> = (args) => ({
  components: { GButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <g-button v-bind="args" />
  `
})

// Current API Stories
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  title: 'Primary Button prueba'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  title: 'Secondary Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  title: 'Tertiary Button'
}

// States Stories
export const States = () => ({
  components: { GButton },
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Primary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="primary" title="Enabled"/>
          <g-button variant="primary" disabled title="Disabled"/>
          <g-button variant="primary" loading title="Loading"/>
        </div>
      </div>
      
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Secondary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="secondary" title="Enabled"/>
          <g-button variant="secondary" disabled title="Disabled"/>
          <g-button variant="secondary" loading title="Loading"/>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-bold">Tertiary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="tertiary" title="Enabled"/>
          <g-button variant="tertiary" disabled title="Disabled"/>
          <g-button variant="tertiary" loading title="Loading"/>
        </div>
      </div>
    </div>
  `
})

// Add new story for icons
export const WithIcons = () => ({
  components: { GButton },
  template: `
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  `
})

export const Sizes = () => ({
  components: { GButton },
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Button Sizes</h3>
        <div class="flex gap-4 items-center">
          <g-button 
            variant="primary" 
            size="sm" 
            title="Small Button"
          />
          <g-button 
            variant="primary" 
            size="md" 
            title="Medium Button"
          />
        </div>
      </div>
    </div>
  `
})

export const IconSizes = () => ({
  components: { GButton },
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones pequeños con iconos</h3>
        <div class="flex gap-4 items-center">
          <g-button 
            variant="primary" 
            size="sm" 
            title="Icon Left"
            icon-left="solid arrow-left"
          />
          <g-button 
            variant="secondary" 
            size="sm" 
            title="Icon Right"
            icon-right="solid arrow-right"
          />
          <g-button 
            variant="tertiary" 
            size="sm" 
            title="Both Icons"
            icon-left="solid check"
            icon-right="solid arrow-right"
          />
        </div>
      </div>
      
      <div class="space-y-2 mt-8">
        <h3 class="text-lg font-bold">Botones medianos con iconos</h3>
        <div class="flex gap-4 items-center">
          <g-button 
            variant="primary" 
            size="md" 
            title="Icon Left"
            icon-left="solid arrow-left"
          />
          <g-button 
            variant="secondary" 
            size="md" 
            title="Icon Right"
            icon-right="solid arrow-right"
          />
          <g-button 
            variant="tertiary" 
            size="md" 
            title="Both Icons"
            icon-left="solid check"
            icon-right="solid arrow-right"
          />
        </div>
      </div>
    </div>
  `
})
