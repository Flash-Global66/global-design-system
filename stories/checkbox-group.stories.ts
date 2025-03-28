import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { GCheckbox, GCheckboxGroup, CheckboxGroupProps } from '@flash-global66/g-checkbox/index.ts'
import { GConfigProvider } from '../components/config-provider'

const meta: Meta<typeof GCheckboxGroup> = {
  title: 'Form/Checkbox/Group',
  component: GCheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GCheckboxGroup\` es un grupo de checkboxes que permite selección múltiple con validación y configuración visual. Existen dos maneras
de construir el grupo: mediante la propiedad \`options\` o con los slots predeterminados.

### Instalación
\`\`\`bash
yarn add @flash-global66/b2b-ui-checkbox
\`\`\`

### Importación

\`\`\`typescript
import { GCheckboxGroup } from '@flash-global66/b2b-ui-checkbox'
import '@flash-global66/b2b-ui-checkbox/checkbox.styles.scss'
\`\`\`

### Ejemplo con slots personalizados:
\`\`\`html
<g-checkbox-group 
  v-bind="args"
  v-model="selectedValues"
>
  <g-checkbox label="Importaciones" value="Value A" />
  <g-checkbox label="Inversiones" value="Value B" />
</g-checkbox-group>
\`\`\`

### Ejemplo con opciones predefinidas:
\`\`\`html
<g-checkbox-group
  v-bind="args"
  v-model="selectedValues"
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

    // Principales
    options: {
      description: 'Array de opciones para construir el grupo de checkboxes',
      control: 'object',
      table: {
        type: {
          summary: 'Option[]',
          detail: `
            type Option = {
  value: CheckboxGroupValueType
  label?: CheckboxGroupValueType
  disabled?: boolean
  checked?: boolean
}
          `
        },
        defaultValue: { summary: '[]' },
        category: 'Principales'
      }
    },
    modelValue: {
      description: 'Valores seleccionados (v-model)',
      control: 'object',
      table: {
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number | boolean>'
        },
        defaultValue: { summary: '[]' },
        category: 'Principales'
      }
    },

    // Validación
    min: {
      description: 'Mínimo de checkboxes seleccionados',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        category: 'Validación'
      }
    },
    max: {
      description: 'Máximo de checkboxes seleccionados',
      control: { type: 'number', min: 1 },
      table: {
        type: { summary: 'number' },
        category: 'Validación'
      }
    },
    validateEvent: {
      description: 'Activa validación de formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Validación'
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

    // Configuración avanzada
    tag: {
      description: 'Elemento HTML contenedor',
      control: 'select',
      options: ['div', 'span', 'fieldset'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
        category: 'Apariencia'
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

    // Eventos
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar los valores',
      table: {
        category: 'Eventos',
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number>'
        }
      }
    },
    onChange: {
      description: 'Se emite al cambiar la selección',
      table: {
        category: 'Eventos',
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number>'
        }
      }
    },

    // Slots
    default: {
      description: 'Slot para contenido personalizado de cada checkbox',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot',
        }
      }
    }
  },
  args: {
    options: [],
    modelValue: [],
    disabled: false,
    layout: 'horizontal',
    tag: 'div',
    min: undefined,
    max: undefined,
    validateEvent: true,
    ariaLabel: 'Grupo de opciones'
  } as Partial<CheckboxGroupProps>
}
export default meta

type Story = StoryObj<typeof GCheckboxGroup>

const Template: Story = {
  render: (args) => ({
    components: { GCheckboxGroup, GCheckbox, GConfigProvider },
    setup() {
      const selectedValues = ref([])
      const options = [
        { value: 'Value A', label: 'Importaciones' },
        { value: 'Value B', label: 'Inversiones'},
        { value: 'Value C', label: 'Exportaciones', checked: true },
        { value: 'Value D', label: 'Transferencias', disabled: true },
        { value: 'Value E', label: 'Otros' }
      ]
      return { args, selectedValues, options }
    },
    template: `
    <g-config-provider>
      <g-checkbox-group 
        v-bind="args"
        v-model="selectedValues"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valores seleccionados: {{ selectedValues }}
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
          'Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto.'
      }
    }
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
    modelValue: ['Value A']
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente.'
      }
    }
  }
}

export const WithLimits: Story = {
  ...Template,
  args: {
    min: 1,
    max: 2
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites.'
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
          'Checkboxes apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado.'
      }
    }
  }
}
