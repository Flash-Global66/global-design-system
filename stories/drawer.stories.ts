import { StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

// COMPONENTS
import GDrawer, { DrawerInstance } from '@flash-global66/g-drawer'
import { GButton } from '@flash-global66/g-button'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { FooterButton } from '@flash-global66/g-dialog'
import { GTag } from '@flash-global66/g-tag'
import { GRadioGroup } from '@flash-global66/g-radio'

const meta = {
  title: 'Feedback/Drawer',
  component: GDrawer,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GDrawer\` - Componente de diálogo extensible de cualquier lado de la pantalla.

Un elemento de diálogo que se desliza desde el borde de la ventana para revelar contenido adicional. Puede ser usado para mostrar información adicional, formularios, mensajes, etc.

> Este componente usa la versión \`2.9.6\` de Element Plus.

**Características principales:**

- Título y descripción
- Posición y tamaño personalizado
- Botones de acción en el pie
- Cierre con clic fuera del drawer
- Cierre con tecla ESC
- Cierre con botón de cierre
- Contenido personalizado

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-drawer
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-overlay
> - @flash-global66/g-focus-trap
> - @flash-global66/g-teleport
> - @flash-global66/g-dialog
> - @flash-global66/g-button
> - @flash-global66/g-icon-button

📥 **Importación básica**

\`\`\`typescript
import { GDrawer } from '@flash-global66/g-drawer'
import '@flash-global66/g-drawer/styles.scss'
\`\`\`
`
      }
    }
  },
  argTypes: {
    // 1. Estado y Configuración Principal
    modelValue: {
      name: 'v-model',
      description: 'Estado de visibilidad del drawer',
      control: 'boolean',
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    lockScroll: {
      name: 'lock-scroll',
      description: 'Bloquear scroll del body',
      control: 'boolean',
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    destroyOnClose: {
      name: 'destroy-on-close',
      description: 'Destruir al cerrar',
      control: 'boolean',
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // 2. Apariencia y Estilo
    title: {
      name: 'title',
      description: 'Título del drawer',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    description: {
      name: 'description',
      description: 'Descripción del drawer',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    footerButtons: {
      name: 'footer-buttons',
      control: 'object',
      description: `Array de configuración para los botones del footer (máximo 3 botones)`,
      table: {
        category: 'Apariencia y Estilo',
        defaultValue: { summary: '[]' },
        type: {
          summary: 'FooterButton[]',
          detail: `{
  text: string,
  onClick: () => void,
  variant: 'primary' | 'secondary' | 'tertiary'
}`
        }
      }
    },
    width: {
      name: 'width',
      description: 'Ancho del drawer',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string | number' },
        defaultValue: { summary: "'30%'" }
      }
    },
    direction: {
      name: 'direction',
      description: 'Dirección de apertura del drawer',
      control: 'select',
      options: ['ltr', 'rtl', 'ttb', 'btt'],
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "'rtl'" }
      }
    },
    modalFade: {
      name: 'modalFade',
      description: 'Efecto de desvanecimiento del modal',
      control: 'boolean',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    modal: {
      description: 'Debe mostrar la capa de sombra',
      control: 'boolean',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    zIndex: {
      description: 'Z-index del drawer',
      control: 'number',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'number' },
        defaultValue: { summary: '' }
      }
    },
    modalClass: {
      name: 'modal-class',
      description: 'Clase del modal',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    bodyClass: {
      name: 'body-class',
      description: 'Clase del body',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    footerClass: {
      name: 'footer-class',
      description: 'Clase del footer',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },

    // 3. Comportamiento y Temporización
    closeOnClickModal: {
      name: 'close-on-click-modal',
      description: 'Cerrar al hacer clic en el modal',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    closeOnPressEscape: {
      name: 'close-on-press-escape',
      description: 'Cerrar al presionar ESC',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    beforeClose: {
      name: 'before-close',
      description: 'Detiene el cierre si se establece',
      control: false,
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: '() => void' }
      }
    },
    openDelay: {
      name: 'open-delay',
      description: 'Retraso en abrir el drawer',
      control: 'number',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    closeDelay: {
      name: 'close-delay',
      description: 'Retraso en cerrar el drawer',
      control: 'number',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    // 4. Ubicación en el DOM
    appendToBody: {
      name: 'append-to-body',
      description: 'Si el drawer debe ser anexado al body',
      control: 'boolean',
      table: {
        category: 'Ubicación en el DOM',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    appendTo: {
      name: 'append-to',
      description: 'Elemento al que se anexa el drawer',
      control: 'text',
      table: {
        category: 'Ubicación en el DOM',
        type: { summary: 'string' },
        defaultValue: { summary: 'body' }
      }
    },

    // 5. Eventos y Métodos
    open: {
      name: 'open',
      description: 'Se activa cuando se abre el drawer',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    opened: {
      description: 'Se activa al finalizar la animación de apertura',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    close: {
      name: 'close',
      description: 'Se activa cuando se cierra el drawer',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    closed: {
      description: 'Se activa al finalizar la animación de cierre',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    openAutoFocus: {
      name: 'open-auto-focus',
      description: 'Enfoca contenido después de abrir',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    closeAutoFocus: {
      name: 'close-auto-focus',
      description: 'Enfoca contenido después de cerrar',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    handleClose: {
      name: 'handle-close',
      description: 'Método para cerrar el drawer',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    afterEnter: {
      name: 'after-enter',
      description: 'Evento post transición de entrada',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },
    afterLeave: {
      name: 'after-leave',
      description: 'Evento post transición de salida',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '() => void' }
      }
    },

    // 6. Slots
    default: {
      description: 'Contenido principal del drawer',
      table: {
        category: 'Slots',
        type: { summary: 'Slot' }
      },
      control: false
    },
    customHeader: {
      name: 'custom-header',
      description: 'Header personalizado',
      table: {
        category: 'Slots',
        type: { summary: 'Slot' }
      },
      control: false
    },
    footer: {
      description: 'Contenido del footer',
      table: {
        category: 'Slots',
        type: { summary: 'Slot' }
      },
      control: false
    }
  },
  args: {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    width: '30%',
    modalFade: true,
    direction: 'rtl',
    appendToBody: true,
    appendTo: 'body',
    lockScroll: true,
    closeOnClickModal: true,
    closeOnPressEscape: true,
    openDelay: 0,
    closeDelay: 0,
    destroyOnClose: false,
    modal: true,
    modalClass: '',
    bodyClass: '',
    footerClass: '',
    zIndex: 10,
    footerButtons: [
      {
        text: 'Guardar',
        onClick: () => {},
        variant: 'primary'
      }
    ]
  }
}
export default meta
type Story = StoryObj<DrawerInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GDrawer, GConfigProvider, GButton },
    setup() {
      const drawer = ref(false)

      return { drawer, args }
    },
    template: `
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer v-model="drawer" v-bind="args">
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `
  })
}

export const withAllTypesOfButtons: Story = {
  name: 'Todas las combinaciones de botones',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo se ven los botones en el footer del drawer.

- Botones de acción en el footer
- Variante de botones
- Organización de botones en el footer`
      }
    }
  },
  render: () => ({
    components: { GDrawer, GConfigProvider, GButton },
    setup() {
      const drawer = ref<boolean>(false)
      const buttons = ref<FooterButton[]>([])

      const handleClose = () => {
        drawer.value = false
      }

      const handleOpen = (quantity: number) => {
        drawer.value = true
        buttons.value = buildButtons(quantity)
      }

      const mapTypesButtons: Record<number, FooterButton> = {
        1: {
          text: 'Guardar',
          onClick: handleClose,
          variant: 'primary'
        },
        2: {
          text: 'Cancelar',
          onClick: handleClose,
          variant: 'secondary'
        },
        3: {
          text: 'Eliminar',
          onClick: handleClose,
          variant: 'tertiary'
        }
      }

      const buildButtons = (quantity: number) => {
        const buttons: FooterButton[] = []
        for (let i = 0; i < quantity; i++) {
          buttons.push(mapTypesButtons[i + 1])
        }
        return buttons
      }

      return { drawer, handleClose, handleOpen, buttons }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-4">
          <g-button @click="handleOpen(1)">
            Abrir drawer con 1 botón
          </g-button>
          <g-button @click="handleOpen(2)">
            Abrir drawer con 2 botones
          </g-button>
          <g-button @click="handleOpen(3)">
            Abrir drawer con 3 botones
          </g-button>
        </div>

        <g-drawer 
          v-model="drawer" 
          title="Botones" 
          description="Este es un ejemplo de cómo se ven los botones en el footer del drawer."
          append-to-body
          :footer-buttons="buttons"
          @close="handleClose"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `
  })
}

export const allDirections: Story = {
  name: 'Todas las direcciones',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo se ven los drawers en todas las direcciones.

- Dirección de apertura
- Título y descripción`
      }
    }
  },
  render: () => ({
    components: { GDrawer, GConfigProvider, GButton, GRadioGroup },
    setup() {
      const drawer = ref<boolean>(false)
      const direction = ref<string>('rtl')
      const directions = [
        { value: 'ltr', label: 'Izquierda a derecha' },
        { value: 'rtl', label: 'Derecha a izquierda' },
        { value: 'ttb', label: 'Arriba a abajo' },
        { value: 'btt', label: 'Abajo a arriba' }
      ]

      return { drawer, directions, direction }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <g-radio-group
            v-model="direction"
            :options="directions"
          />
          <g-button @click="drawer = true">
            Abrir drawer
          </g-button>
        </div>
        <g-drawer 
          v-model="drawer" 
          title="Dirección" 
          description="Este es un ejemplo de cómo se ven los drawers en todas las direcciones."
          append-to-body
          :direction="direction"
          :footer-buttons="[
            {
              text: 'Guardar',
              onClick: () => (drawer = false),
              variant: 'primary'
            }
          ]"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `
  })
}

export const withCustomHeader: Story = {
  name: 'Con header personalizado',
  parameters: {
    docs: {
      description: {
        story: `Este ejemplo muestra cómo se ve un drawer con un header personalizado.

- Header personalizado
- Título y descripción`
      }
    }
  },
  render: () => ({
    components: { GDrawer, GConfigProvider, GButton, GTag },
    setup() {
      const drawer = ref<boolean>(false)
      const items = Array(12).fill({ send: '$100.000,00 CLP', convert: '$87.000,00 CLP' })

      return { drawer, items }
    },
    template: `
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer 
          v-model="drawer" 
          title="Detalle Completo" 
          description="Transacción creada por: Michael Murduck\n Aprobador: Joan Rojas"
          append-to-body
          :footer-buttons="[
            { 
              text: 'Guardar', 
              onClick: () => (drawer = false), 
              variant: 'primary' 
            },
            { 
              text: 'Cancelar', 
              onClick: () => (drawer = false), 
              variant: 'secondary' 
            }
          ]"
        >
          <template #customHeader>
            <div class="flex justify-start items-center flex-row gap-2">
              <g-tag text="warning" type="warning" effect="light" />
              <g-tag text="success" type="success" effect="light" />
              <g-tag text="info" type="info" effect="light" />
            </div>
          </template>
          <div class="flex flex-col gap-1 justify-center items-center">
            <template v-for="(item, index) in items" :key="index">
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Tú envias:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.send }}</span>
              </div>
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Monto a convertir:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.convert }}</span>
              </div>
            </template>
          </div>
        </g-drawer>
      </g-config-provider>
    `
  })
}
