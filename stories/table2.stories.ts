import { StoryObj } from '@storybook/vue3'

// COMPONENTS
import { GTable, TableInstance, GTableColumn } from '@flash-global66/g-table'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { generateIconOptions } from './icon-font.stories'

const meta = {
  title: 'Data/Table2',
  component: GTable,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GTag\` - Componente de etiqueta personalizable con íconos y opciones avanzadas.

> Este componente usa la versión \`2.9.5\` de Element Plus.

**Características principales:**

- Tamaños personalizables
- Tipos de etiqueta
- Temas de etiqueta
- Iconos personalizables
- Etiqueta cerrable
- Transiciones deshabilitables

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-tag
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-icon-font

📥 **Importación básica**

\`\`\`typescript
import { GTag } from '@flash-global66/g-tag'
import '@flash-global66/g-tag/tag.style.scss'
\`\`\`
`
      }
    }
  },
  argTypes: {
    size: {
      description: 'Tamaño del tag',
      control: 'select',
      options: ['xs', 'sm', 'md'],
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' }
      }
    },
    type: {
      description: 'Tipo de tag',
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'grey'],
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'grey' }
      }
    },
    effect: {
      description: 'Tema del tag',
      control: 'select',
      options: ['dark', 'light'],
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'light' }
      }
    },
    prefixIcon: {
      name: 'prefix-icon',
      description: 'Ícono al inicio del tag',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        category: 'Iconos',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    suffixIcon: {
      name: 'suffix-icon',
      description: 'Ícono al final del tag',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        category: 'Iconos',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    text: {
      description: 'Texto a mostrar en el tag',
      control: 'text',
      table: {
        category: 'Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    closable: {
      description: 'Habilita el botón de cerrar',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disableTransitions: {
      description: 'Deshabilita las transiciones',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    close: {
      description: 'Evento emitido al cerrar',
      action: 'close',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: 'Event', detail: '() => void' },
        defaultValue: { summary: '() => void' }
      },
      control: false
    },
    click: {
      description: 'Evento emitido al hacer clic',
      action: 'click',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: 'Event', detail: '() => void' },
        defaultValue: { summary: '() => void' }
      },
      control: false
    },
    prefix: {
      description: 'slot para el inicio del tag',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      },
      control: false
    },
    default: {
      description: 'slot para el contenido del tag',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      },
      control: false
    },
    suffix: {
      description: 'slot para el final del tag',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      },
      control: false
    }
  },
  args: {
    text: 'Etiqueta',
    size: 'sm',
    type: 'success',
    effect: 'light',
    prefixIcon: '',
    suffixIcon: '',
    closable: false,
    disableTransitions: false
  }
}
export default meta
type Story = StoryObj<TableInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GTable, GConfigProvider },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-tag v-bind="args" />
        </div>
      </g-config-provider>
    `
  })
}

export const prefixAndSuffix: Story = {
  name: 'Banderas como slots al inicio y al final',
  parameters: {
    docs: {
      description: {
        story: `Banderas como slots al inicio y al final del tag.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`
  })
}
