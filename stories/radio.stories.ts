import { Meta, StoryFn, StoryObj } from '@storybook/vue3'

// COMPONENTS
import { GRadio } from '../components/radio'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { RadioProps } from '@flash-global66/g-radio/index.ts'

const meta: Meta<typeof GRadio> = {
  title: 'Form/Radio/Single',
  component: GRadio,
  parameters: {
    docs: {
      description: {
        component: `
Uso básico
Componente de selección única entre un grupo de opciones.

Ejemplo básico:

\`\`\`vue
<g-radio v-model="selected" label="Opción 1" value="1" />
\`\`\`
`
      }
    }
  },
  argTypes: {
    // Principales
    modelValue: {
      description: 'Valor del modelo (v-model)',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'Principales'
      }
    },
    label: {
      description: 'Etiqueta visible del radio',
      control: 'text',
      table: {
        category: 'Principales',
        type: { summary: 'string | number | boolean' }
      }
    },
    value: {
      description: 'Valor único del radio',
      control: 'object',
      table: {
        category: 'Principales',
        type: { summary: 'string | number | boolean' }
      }
    },
    // Estados
    disabled: {
      description: 'Deshabilita el componente',
      control: 'boolean',
      table: {
        category: 'Estados',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // Atributos HTML
    name: {
      description: 'Atributo name nativo para agrupación',
      control: 'text',
      table: {
        category: 'Atributos HTML',
        type: { summary: 'string' }
      }
    },

    // Eventos
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar la selección',
      table: {
        category: 'Eventos',
        type: { summary: 'string | number | boolean' }
      }
    },
    onChange: {
      description: 'Se emite al cambiar la selección',
      table: {
        category: 'Eventos',
        type: { summary: 'string | number | boolean' }
      }
    },

    // Slots
    default: {
      description: 'Slot para contenido personalizado para radio',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    }
  },
  args: {
    disabled: false,
    label: 'Etiqueta del radio',
    modelValue: false,
    value: 'valor-radio',
    name: 'radio-group'
  } as Partial<RadioProps>
}

export default meta
type Story = StoryObj<typeof GRadio>

const Template: StoryFn<RadioProps> = (args: RadioProps, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GRadio, GConfigProvider },
  setup() {
    return { args }
  },
  template: `
    <g-config-provider>
      <g-radio v-bind="args" v-model="args.modelValue" />
    </g-config-provider>
  `
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Opción predeterminada',
  // value: 'valor-radio'
}