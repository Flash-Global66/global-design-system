import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { GRadio, GRadioGroup } from '../components/radio'
import { GConfigProvider } from '../components/config-provider'

const meta: Meta<typeof GRadioGroup> = {
  title: 'Form/Radio/Group',
  component: GRadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
### Uso básico
Grupo de radios que permite selección única con validación. Los radios puedesn agregarse como hijos usando slots 
o mediante la propiedad \`options\`.

Ejemplo con slots:

\`\`\`vue
<g-radio-group 
  v-bind="args"
  v-model="selectedValue"
>
  <g-radio label="Importaciones" value="ValueA" />
  <g-radio label="Inversiones" value="ValueB" />
</g-radio-group>
\`\`\`

Ejemplo con opciones predefinidas:

\`\`\`vue
<g-radio-group
  v-bind="args"
  v-model="selectedValue"
  :options="options"
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    // Estados
    disabled: {
      description: 'Deshabilita todo el grupo',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Estados'
      }
    },

    // Apariencia
    layout: {
      description: 'Diseño del grupo',
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'layoutType', detail: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
        category: 'Apariencia'
      }
    },

    // Principales
    options: {
      description: 'Array de opciones para construir el grupo de checkboxes',
      control: 'object',
      table: {
        type: {
          summary: 'Option[]',
          detail: `
          type Option = {
value: string | number | boolean
label?: string | number
disabled?: boolean
}
        `
        },
        defaultValue: { summary: '[]' },
        category: 'Principales'
      }
    },
    modelValue: {
      description: 'Valor seleccionado (v-model)',
      control: 'text',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'Principales'
      }
    },
    name: {
      description: 'Atributo name para agrupar los radios',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Validación'
      }
    },

    // Validación
    validateEvent: {
      description: 'Activa validación de formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Validación'
      }
    },

    // Accesibilidad
    ariaLabel: {
      description: 'Etiqueta ARIA para el grupo',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Accesibilidad'
      }
    },

    id: {
      description: 'ID HTML nativo',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Accesibilidad'
      }
    },

    // Slots
    default: {
      description: 'Slot para contenido personalizado de cada checkbox',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    }
  },
  args: {
    options: [],
    modelValue: '',
    disabled: false,
    layout: 'horizontal',
    validateEvent: true,
    name: 'radio-group',
    ariaLabel: 'Grupo de opciones exclusivas',
    id: 'custom-radio-group'
  }
}
export default meta

type Story = StoryObj<typeof GRadioGroup>

const Template: Story = {
  render: (args) => ({
    components: { GRadioGroup, GRadio, GConfigProvider },
    setup() {
      const selectedValue = ref('Value B')
      const options = [
        { value: 'Value A', label: 'Importaciones' },
        { value: 'Value B', label: 'Inversiones' },
        { value: 'Value C', label: 'Exportaciones' },
        { value: 'Value D', label: 'Transferencias', disabled: true },
        { value: 'Value E', label: 'Otros' }
      ]
      return { args, selectedValue, options }
    },
    template: `
    <g-config-provider>
      <g-radio-group 
        v-bind="args"
        v-model="selectedValue"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valor seleccionado: {{ selectedValue }}
      </div>
    </g-config-provider>
    `
  })
}
export const Basic: Story = {
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Grupo básico de radios con selección única. Muestra el funcionamiento básico del v-model con valores string.'
      }
    }
  }
}

export const DisabledGroup: Story = {
  ...Template,
  args: {
    disabled: true,
    modelValue: 'ValueA'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grupo completo deshabilitado. Todos los radios están no interactivos excepto los que tienen disabled individual.'
      }
    }
  }
}

export const VerticalLayout: Story = {
  ...Template,
  args: {
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Radios apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado.'
      }
    }
  }
}
