import { StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

// COMPONENTS
import { GDropdown, GDropdownInstance, type actionType } from '@flash-global66/g-dropdown'
import { GButton } from '@flash-global66/g-button'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { GIconButton } from '@flash-global66/g-icon-button'
import { GRadioGroup } from '@flash-global66/g-radio'
import GTag from '@flash-global66/g-tag'

const meta = {
  title: 'Data/Dropdown',
  component: GDropdown,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

Un elemento de interfaz de usuario que permite a los usuarios seleccionar una opción de una lista de opciones. Puede contener texto, iconos y otros elementos interactivos.

> Este componente usa la versión \`2.9.7\` de Element Plus.

**Características principales:**

- Múltiples tipos de disparadores (click, hover, focus).
- Múltiples tipos de contenido (texto, iconos, botones).
- Múltiples tipos de acciones (abrir, cerrar, ejecutar función).
- Soporte para slots personalizados.
- Soporte para eventos personalizados.
- Soporte para accesibilidad (ARIA).

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-dropdown
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-roving-focus-group
> - @flash-global66/g-collection
> - @flash-global66/g-focus-trap
> - @flash-global66/g-icon-font
> - @flash-global66/g-tooltip
> - @flash-global66/g-popper
> - @flash-global66/g-scrollbar
> - @flash-global66/g-slot

📥 **Importación básica**

\`\`\`typescript
import { GDropdown } from '@flash-global66/g-dropdown'
import '@flash-global66/g-dropdown/styles.scss'
\`\`\`
`
      }
    }
  },
  argTypes: {
    // 1. Apariencia y Dimensiones
    maxHeight: {
      name: 'max-height',
      description: 'Altura máxima del drawer',
      control: 'text',
      table: {
        category: 'Apariencia y Dimensiones',
        type: { summary: 'string | number' },
        defaultValue: { summary: '100%' }
      }
    },
    placement: {
      name: 'placement',
      description: 'Ubicación del drawer',
      control: 'select',
      options: ['top', 'bottom', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
      table: {
        category: 'Apariencia y Dimensiones',
        type: { summary: 'string' },
        defaultValue: { summary: 'top' }
      }
    },
    role: {
      description: 'Rol del drawer',
      control: 'text',
      table: {
        category: 'Apariencia y Dimensiones',
        type: { summary: 'string' },
        defaultValue: { summary: 'menu' }
      }
    },
    tabindex: {
      description: 'Tabindex del drawer',
      control: 'number',
      table: {
        category: 'Apariencia y Dimensiones',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    // 2. Comportamiento y Activación
    disabled: {
      description: 'Deshabilitar el drawer',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    actions: {
      description: 'Array de acciones personalizadas para el drawer',
      control: 'object',
      table: {
        category: 'Comportamiento y Activación',
        type: {
          summary: 'actionType[]',
          detail: `
            type OptionType = {
  title: string
  icon?: string
  description?: string
  disabled?: boolean
  action?: () => void
  divider?: boolean
}`
        },
        defaultValue: { summary: '[]' }
      }
    },
    trigger: {
      description: 'Tipo de disparador del drawer',
      control: 'select',
      options: ['click', 'hover', 'contextmenu'],
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'string' },
        defaultValue: { summary: 'hover' }
      }
    },
    triggerKeys: {
      name: 'trigger-keys',
      description: 'Teclas de disparo del drawer',
      control: 'array',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' }
      }
    },
    hideOnClick: {
      name: 'hide-on-click',
      description: 'Ocultar al hacer clic en el drawer',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showTimeout: {
      name: 'show-timeout',
      description: 'Retraso para mostrar el drawer',
      control: 'number',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'number' },
        defaultValue: { summary: '150' }
      }
    },
    hideTimeout: {
      name: 'hide-timeout',
      description: 'Retraso para ocultar el drawer',
      control: 'number',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'number' },
        defaultValue: { summary: '150' }
      }
    },
    teleported: {
      description: 'Teletransporta el dropdown al elemento append-to',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    persistent: {
      description: 'Tooltip persistente',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Activación',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // 3. Eventos y Métodos
    command: {
      name: 'command',
      description: 'Se activa al ejecutar un comando en el drawer',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '(...args: any[]) => void' }
      }
    },
    visibleChange: {
      name: 'visible-change',
      description: 'Se activa al cambiar la visibilidad del drawer',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '(visible: boolean) => void' }
      }
    },
    handleClose: {
      name: 'handle-close',
      description: 'Método para cerrar el dropdown',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    handleOpen: {
      name: 'handle-open',
      description: 'Método para abrir el dropdown',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },

    // 4. Configuración Avanzada
    popperOptions: {
      name: 'popper-options',
      description: 'Opciones de Popper.js',
      control: 'object',
      table: {
        category: 'Configuración Avanzada',
        type: { summary: 'object' },
        defaultValue: { summary: '{}' }
      }
    },

    // 5. Slots
    default: {
      description: 'Disparador del dropdown',
      table: {
        category: 'Slot',
        type: { summary: 'Slot' }
      },
      control: false
    }
  },
  args: {
    maxHeight: '100%',
    disabled: false,
    placement: 'bottom-start',
    trigger: 'hover',
    triggerKeys: ['enter'],
    hideOnClick: true,
    showTimeout: 150,
    hideTimeout: 150,
    role: 'menu',
    tabindex: 0,
    popperOptions: {},
    teleported: true,
    persistent: false,
    actions: [
      {
        title: 'Abrir',
        icon: 'regular arrow-up-right-from-square',
        action: () => {
          console.log('Abrir')
        }
      },
      {
        title: 'Editar',
        icon: 'regular pen',
        action: () => {
          console.log('Editar')
        }
      },
      {
        title: 'Eliminar',
        icon: 'regular trash',
        action: () => {
          console.log('Eliminar')
        }
      },
      {
        title: 'Actualizar',
        icon: 'regular arrows-rotate',
        disabled: true,
        action: () => {
          console.log('Actualizar')
        }
      }
    ]
  }
}
export default meta
type Story = StoryObj<GDropdownInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GDropdown, GConfigProvider, GIconButton },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `
  })
}

export const allTypesOfTriggers: Story = {
  name: 'Todos los tipos de disparadores',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`
      }
    }
  },
  render: () => ({
    components: { GDropdown, GConfigProvider, GRadioGroup, GTag },
    setup() {
      const trigger = ref<string>('click')

      const triggers = [
        { value: 'click', label: 'Click' },
        { value: 'hover', label: 'Hover' },
        { value: 'contextmenu', label: 'Context Menu' }
      ]

      const actions: actionType[] = [
        {
          title: 'Enviar correo',
          icon: 'regular envelope',
          description: 'Esta acción te permite enviar un correo electrónico',
          action: () => {
            console.log('Enviar correo')
          }
        },
        {
          title: 'Buscar',
          icon: 'regular magnifying-glass',
          description: 'Esta acción te permite buscar un elemento',
          action: () => {
            console.log('Buscar')
          }
        },
        {
          title: 'Exportar',
          icon: 'regular arrow-up-from-bracket',
          description: 'Esta acción te permite exportar un elemento',
          action: () => {
            console.log('Exportar')
          }
        }
      ]

      return { actions, triggers, trigger }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-2 w-full items-center justify-center flex-col">
          <g-radio-group v-model="trigger" :options="triggers" />
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown :trigger="trigger" :actions="actions" class="pt-6">
              <g-tag type="success" size="sm">
                {{ trigger }}
              </g-tag>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    `
  })
}

export const commandEvent: Story = {
  name: 'Manejo de la opción de comando',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo manejar el evento de comando.
- Se utiliza un botón para abrir el menú desplegable.
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`
      }
    }
  },
  render: () => ({
    components: { GDropdown, GConfigProvider, GButton, GTag },
    setup() {
      const commandClicked = ref<string>('')
      const actions: actionType[] = [
        {
          title: 'Enviar correo',
          icon: 'regular envelope',
          command: 'send-email',
          description: 'Esta acción te permite enviar un correo electrónico',
          action: () => {
            console.log('Enviar correo')
          }
        },
        {
          title: 'Buscar',
          icon: 'regular magnifying-glass',
          command: 'search',
          description: 'Esta acción te permite buscar un elemento',
          action: () => {
            console.log('Buscar')
          }
        },
        {
          title: 'Exportar',
          icon: 'regular arrow-up-from-bracket',
          command: 'export',
          description: 'Esta acción te permite exportar un elemento',
          action: () => {
            console.log('Exportar')
          }
        }
      ]

      const handleCommand = (command: string) => {
        commandClicked.value = command
      }

      return { actions, handleCommand, commandClicked }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <g-dropdown trigger="click" :actions="actions" @command="handleCommand">
            <g-button type="primary" size="sm">Abrir menú</g-button>
          </g-dropdown>
          <span class="text-2 text-primary-def font-medium flex gap-2 justify-center items-center">
            El comando que se ejecuto fue:
            <g-tag type="info" size="sm" v-if="commandClicked">
              {{ commandClicked }}
            </g-tag>
          </span>
        </div>

      </g-config-provider>
    `
  })
}

export const dropdownMethods: Story = {
  name: 'Métodos del dropdown',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo usar los métodos del dropdown.

- Se utiliza un botón para abrir el menú desplegable.
- Se utiliza un botón para cerrar el menú desplegable.`
      }
    }
  },
  render: () => ({
    components: { GDropdown, GConfigProvider, GButton, GIconButton },
    setup() {
      const dropdownRef = ref<GDropdownInstance | null>(null)
      const countries = ref<actionType[]>([])
      const svgCurrentCountry = ref<string>('')

      const getCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all')
          const data = await response.json()

          const limitedData = data.slice(0, 25)

          const countries = limitedData.map((country) => ({
            icon: country.flags.svg,
            title: country.name.common,
            command: country.flags.svg,
          }))

          return countries
        } catch (error) {
          console.error('Error fetching data:', error)
          return []
        }
      }

      const handleVisibleChange = (visible: boolean) => {
        if (visible && countries.value.length === 0) {
          getCountries().then((data) => {
            countries.value = data
          })
        }
      }

      const handleCommand = (command: string) => {
        svgCurrentCountry.value = command
      }

      return { dropdownRef, handleVisibleChange, countries, handleCommand, svgCurrentCountry }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <div class="flex gap-2">
            <g-button @click="$refs.dropdownRef?.handleOpen()" size="sm">Abrir</g-button>
            <g-button @click="$refs.dropdownRef?.handleClose()" size="sm" variant="secondary">Cerrar</g-button>
          </div>
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown 
              ref="dropdownRef" 
              trigger="click" 
              :actions="countries" 
              @visible-change="handleVisibleChange" 
              max-height="280px" 
              placement="bottom-start"
              class="pt-6"
              @command="handleCommand"
            >
              <template #default>
                <img class="w-[17.5px] h-[17.5px]  rounded-full object-cover" v-if="Boolean(svgCurrentCountry)" :src="svgCurrentCountry" />
                <g-icon-button v-else icon="regular globe" />
              </template>
              <template #option="{ title, icon }">
                <img class="w-8 h-8 rounded-full object-cover mr-4" :src="icon" />
                <div class="text-4 text-secondary-txt font-medium overflow-hidden text-ellipsis w-full">
                  {{ title }}
                </div>
              </template>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    `
  })
}
