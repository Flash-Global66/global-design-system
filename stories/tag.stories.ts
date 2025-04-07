import { StoryObj } from '@storybook/vue3'
import { reactive } from 'vue'

// COMPONENTS
import { GTag, TagInstance } from '@flash-global66/g-tag'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { generateIconOptions } from './icon-font.stories'

const meta = {
  title: 'Data/Tag',
  component: GTag,
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
type Story = StoryObj<TagInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GTag, GConfigProvider },
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

export const allCombination: Story = {
  name: 'Combinaciones de colores y tamaños',
  parameters: {
    docs: {
      description: {
        story: `Combinaciones de todos los colores y tamaños disponibles.

> - **📋 Nota**: Puedes copiar el código de cada tag haciendo clic en ellos.`
      }
    }
  },
  render: () => ({
    components: { GTag, GConfigProvider },
    setup() {
      const state = reactive({
        types: ['success', 'info', 'warning', 'error', 'grey'],
        sizes: ['xs', 'sm', 'md'],
        effects: ['dark', 'light']
      })

      const copyTag = async (type: string, size: string, effect: string) => {
        const text = `<g-tag
  type="${type}"
  size="${size}"
  effect="${effect}"
  text="Etiqueta"
  prefix-icon="solid check"
  suffix-icon="solid check"
/>`
        try {
          await navigator.clipboard.writeText(text)
        } catch (err) {
          console.error('Failed to copy: ', err)
        }
      }

      return { state, copyTag }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="effect in state.effects" :key="effect">
                <g-tag
                  :type="type"
                  :size="size"
                  :effect="effect"
                  text="Etiqueta"
                  prefix-icon="solid check"
                  suffix-icon="solid check"
                  @click="() => copyTag(type, size, effect)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
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
    components: { GTag, GConfigProvider },
    setup() {
      return {}
    },
    template: `
    <g-config-provider>
      <div class="flex flex-row gap-4">
        <g-tag
          type="success"
          size="sm"
          effect="light"
        >
          <template #prefix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/co.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
          <template #default>COP</template>
        </g-tag>
        <g-tag
          type="info"
          size="sm"
          effect="light"
        >
          <template #default>USD</template>
          <template #suffix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/us.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
        </g-tag>
      </div>
    </g-config-provider>`
  })
}

export const closableDynamic: Story = {
  name: 'Tags eliminables',
  parameters: {
    docs: {
      description: {
        story: `Tags que se pueden eliminar al hacer clic en el botón de cerrar.`
      }
    }
  },
  render: () => ({
    components: { GTag, GConfigProvider },
    setup() {
      const initTags = [
        { text: 'Tag 1', type: 'warning', effect: 'light' },
        { text: 'Tag 2', type: 'grey', effect: 'light' },
        { text: 'Tag 3', type: 'success', effect: 'light' },
        { text: 'Tag 4', type: 'info', effect: 'light' },
        { text: 'Tag 5', type: 'error', effect: 'light' },
        { text: 'Tag 6', type: 'warning', effect: 'dark' },
        { text: 'Tag 7', type: 'grey', effect: 'dark' },
        { text: 'Tag 8', type: 'success', effect: 'dark' },
        { text: 'Tag 9', type: 'info', effect: 'dark' },
        { text: 'Tag 10', type: 'error', effect: 'dark' }
      ]
      const dynamicTags = reactive([...initTags])

      const handleClose = (tag: string) => {
        if (dynamicTags.length === 1) {
          dynamicTags.splice(-1, 1, ...initTags)
          return
        }

        dynamicTags.splice(
          dynamicTags.findIndex((item) => item.text === tag),
          1
        )
      }

      return { dynamicTags, handleClose }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-tag
            v-for="(tag, index) in dynamicTags"
            :key="tag.text"
            :type="tag.type"
            :effect="tag.effect"
            :text="tag.text"
            :disable-transitions="false"
            closable
            @close="() => handleClose(tag.text)"
          />
        </div>
      </g-config-provider>
    `
  })
}
