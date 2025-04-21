import type { Meta, StoryObj } from '@storybook/vue3';

import { GSegmented } from '@flash-global66/g-segmented/index.ts';
import { GConfigProvider } from '../components/config-provider';
import { ref } from 'vue';

const meta: Meta<typeof GSegmented> = {
  title: 'Data/Segmented',
  component: GSegmented,
  parameters: {
    docs: {
      description: {
        component: 'Componente de selección que permite elegir entre múltiples opciones.'
      }
    }
  },
  argTypes: {
    options: {
      description: 'Opciones del segmentado',
      control: 'object',
      table: {
        type: {
          summary: 'Option[]',
          detail: `
            type Option =
              | {
                  label: string
                  value: string | number | boolean
                  disabled?: boolean
                  [key: string]: any
                }
              | string
              | number
              | boolean
          ` 
        },
      }
    },
    modelValue: {
      description: 'Valor del modelo (v-model)',
      table: {
        type: { summary: 'string | number | boolean' }
      }
    },
    block: {
      description: 'Ajusta el ancho al contenedor padre',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    variant: {
      description: 'Variante del componente',
      control: 'select',
      options: ['default', 'primary'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    messageError: {
      description: 'Mensaje de error',
      control: 'text',
      table: {
        type: { summary: 'string' },
      }
    },
    helpText: {
      description: 'Texto de ayuda',
      control: 'text',
      table: {
        type: { summary: 'string' },
      }
    },
    size: {
      description: 'Tamaño del componente',
      control: 'select',
      options: ['sm', 'md'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    disabled: {
      description: 'Deshabilita el componente',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    validateEvent: {
      description: 'Activa la validación del formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    id: {
      description: 'ID nativo del input',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    name: {
      description: 'Atributo name nativo',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    ariaLabel: {
      description: 'Etiqueta ARIA para accesibilidad',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    classItem: {
      description: 'Clase personalizada para cada opción',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    'onUpdate:modelValue': {
      description: 'Se emite cuando cambia el valor seleccionado',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'events'
      }
    },
    'onChange': {
      description: 'Se emite cuando el usuario cambia la selección',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'events'
      }
    },
    default: {
      description: 'Slot personalizado para el contenido de cada opción',
      table: {
        type: { summary: 'slot' },
        category: 'slots'
      },
    },
    help: {
      description: 'Slot de ayuda',
      control: 'text',
      table: {
        type: { summary: 'slot' },
        category: 'slots'
      }
    },
  },
  args: {
    options: [
      { label: 'Persona', value: 'person', disabled: false },
      { label: 'Empresa', value: 'company', disabled: false },
    ],
    block: false,
    size: 'md',
    disabled: false,
    validateEvent: true,
    id: '',
    name: '',
  }
};

export default meta;
type Story = StoryObj<typeof GSegmented>;

export const Primary: Story = {
  render: (args) => ({
    components: { GSegmented , GConfigProvider},
    setup() {
      const value = ref('person')
      return { args, value };
    },
    template: `
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
          v-bind="args"
        />
      </g-config-provider>
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Permite deshabilitar el componente completo o opciones individuales cuando ciertas selecciones no deben estar disponibles.'
      }
    }
  },
  render: (args) => ({
    components: { GSegmented, GConfigProvider },
    setup() {
      const value = ref('person')
      return { 
        value,
        options: [
          { label: 'Persona', value: 'person' },
          { label: 'Empresa', value: 'company', disabled: true },
          { label: 'Grupo', value: 'group' },
          { label: 'Global66', value: 'global66' },
          { label: 'Transferencias', value: 'transfers' },
        ]
      };
    },
    template: `
      <div class="space-y-4">
        <g-config-provider>
          <g-segmented
            v-model="value"
            :options="options"
            disabled
          />
          <div class="my-4" />
          <g-segmented
            v-model="value"
            :options="options"
          />
        </g-config-provider>
      </div>
    `,
  }),
};


export const Block: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Extiende el componente para ocupar el ancho completo del contenedor padre, útil para mantener alineación con otros elementos.'
      }
    }
  },
  render: (args) => ({
    components: { GSegmented, GConfigProvider },
    setup() {
      const value = ref('person')
      return { 
        value,
        options: [
          { label: 'Persona', value: 'person' },
          { label: 'Empresa', value: 'company' },
          { label: 'Grupo', value: 'group' },
        ]
      };
    },
    template: `
      <g-config-provider>
        <div class="w-full">
          <g-segmented
            v-model="value"
            :options="options"
            block
          />
        </div>
      </g-config-provider>
    `,
  }),
};

export const CustomContent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Permite personalizar el contenido de cada opción usando el slot default. El slot recibe un scope con la propiedad item que contiene toda la información de la opción actual.'
      }
    }
  },
  render: (args) => ({
    components: { GSegmented, GConfigProvider },
    setup() {
      const value = ref('fruits')
      return { 
        value,
        options: [
          { label: 'Frutas', value: 'fruits', emoji: '🍎' },
          { label: 'Vegetales', value: 'vegetables', emoji: '🥕' },
          { label: 'Postres', value: 'desserts', emoji: '🍰' },
          { label: 'Bebidas', value: 'drinks', emoji: '🍹' },
        ]
      };
    },
    template: `
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
        >
          <template #default="{ item }">
            <div class="flex flex-col items-center gap-2 p-2">
              <span style="font-size: 24px">{{ item.emoji }}</span>
              <div>{{ item.label }}</div>
            </div>
          </template>
        </g-segmented>
      </g-config-provider>
    `,
  }),
};