// external imports
import { ref } from 'vue';
import { StoryObj } from '@storybook/vue3-vite';

// components
import { GTooltip, TooltipInstance } from '@flash-global66/g-tooltip';
// import { GTooltip, TooltipInstance } from '../components/tooltip/index'
import { GIconFont } from '@flash-global66/g-icon-font';
import { GButton } from '@flash-global66/g-button';
import { GRadioGroup } from '@flash-global66/g-radio';
import { GSelect } from '@flash-global66/g-select';

// config provider
import { GConfigProvider } from '../components/config-provider';

const meta = {
  title: 'Feedback/Tooltip',
  component: GTooltip,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GTooltip\` - Componente que muestra información adicional al pasar el mouse o hacer clic en un elemento.

> Este componente usa la versión \`2.9.7\` de Element Plus.

**Características principales:**

- Soporte para HTML en el contenido.
- Posicionamiento flexible (arriba, abajo, izquierda, derecha).
- Soporte para múltiples disparadores (hover, clic, foco).
- Soporte para flechas y transiciones.
- Soporte para teletransportación y referencias virtuales.
- Soporte para accesibilidad (ARIA).
- Soporte para eventos de teclado.
- Soporte para desplazamiento y tiempo de espera.
- Soporte para cierre automático y persistente.
- Soporte para contenido dinámico y slots.
- Soporte para eventos de apertura y cierre.

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-tooltip
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-icon-button
> - @flash-global66/g-teleport
> - @flash-global66/g-focus-trap
> - @flash-global66/g-popper
> - @flash-global66/g-slot

📥 **Importación básica**

\`\`\`typescript
import { GTooltip } from '@flash-global66/g-tooltip'
import '@flash-global66/g-tooltip/styles.scss'
\`\`\`
`,
      },
    },
  },
  argTypes: {
    // 1. Estado y Control
    visible: {
      name: 'visible / v-model:visible',
      description: 'Visibilidad del tooltip',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    disabled: {
      description: 'Deshabilita el tooltip',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    persistent: {
      description: 'Tooltip persistente',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closable: {
      description: 'Habilita el botón de cerrar',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    // 2. Contenido y Texto
    content: {
      description: 'Contenido del tooltip (solo para HTML)',
      control: 'text',
      table: {
        category: 'Contenido y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    rawContent: {
      name: 'raw-content',
      description: 'Contenido como string HTML',
      control: 'boolean',
      table: {
        category: 'Contenido y Texto',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      description: 'Título del tooltip',
      control: 'text',
      table: {
        category: 'Contenido y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    description: {
      description: 'Descripción del tooltip',
      control: 'text',
      table: {
        category: 'Contenido y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },

    // 3. Posición y Apariencia
    appendTo: {
      name: 'append-to',
      description: 'Elemento de adjunto del tooltip',
      control: 'text',
      table: {
        category: 'Posición y Apariencia',
        type: { summary: 'string | HTMLElement' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placement: {
      description: 'Posición del tooltip',
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      table: {
        category: 'Posición y Apariencia',
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: "'bottom'" },
      },
    },
    offset: {
      description: 'Desplazamiento del tooltip',
      control: 'number',
      table: {
        category: 'Posición y Apariencia',
        type: { summary: 'number' },
        defaultValue: { summary: '12' },
      },
    },
    showArrow: {
      name: 'show-arrow',
      description: 'Mostrar flecha indicadora',
      control: 'boolean',
      table: {
        category: 'Posición y Apariencia',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    transition: {
      description: 'Nombre de la transición',
      control: 'text',
      table: {
        category: 'Posición y Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    teleported: {
      description: 'Teletransporta el tooltip al elemento append-to',
      control: 'boolean',
      table: {
        category: 'Posición y Apariencia',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },

    // 4. Comportamiento y Temporización
    trigger: {
      description: 'Tipo de activación',
      control: 'select',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: "'hover' | 'click' | 'focus' | 'contextmenu'" },
        defaultValue: { summary: "'hover'" },
      },
    },
    showAfter: {
      name: 'show-after',
      description: 'Retraso para mostrar (ms)',
      control: 'number',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    hideAfter: {
      name: 'hide-after',
      description: 'Retraso para ocultar (ms)',
      control: 'number',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    autoClose: {
      name: 'auto-close',
      description: 'Tiempo de cierre automático (ms)',
      control: 'number',
      table: {
        category: 'Comportamiento y Temporización',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },

    // 5. Configuración Avanzada
    popperOptions: {
      name: 'popper-options',
      description: 'Opciones de Popper.js',
      control: 'object',
      table: {
        category: 'Configuración Avanzada',
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    virtualRef: {
      description: 'Referencia virtual',
      control: false,
      table: {
        category: 'Configuración Avanzada',
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: 'undefined' },
      },
    },
    triggerKeys: {
      description: 'Teclas de activación',
      control: false,
      table: {
        category: 'Configuración Avanzada',
        type: { summary: 'string[]' },
        defaultValue: { summary: 'undefined' },
      },
    },

    // 6. Slots
    default: {
      description: 'Elemento disparador del tooltip',
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'Slot' },
      },
    },
    Content: {
      name: 'content',
      description: 'Contenido personalizado del tooltip',
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'Slot' },
      },
    },

    // 7. Métodos Expuestos
    popperRef: {
      name: 'popper-ref',
      description: 'Referencia del popper',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: {
          summary: 'object',
          detail: `Ref<PopperInstance | undefined>`,
        },
      },
    },
    contentRef: {
      name: 'content-ref',
      description: 'Referencia del contenido',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: {
          summary: 'object',
          detail: `Ref<TooltipContentInstance | undefined>`,
        },
      },
    },
    isFocusInsideContent: {
      name: 'is-focus-inside-content',
      description: 'Si el foco está dentro del contenido',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    updatePopper: {
      name: 'update-popper',
      description: 'Actualiza el popper',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    onOpen: {
      name: 'on-open',
      description: 'Evento emitido al abrir el tooltip',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    onClose: {
      name: 'on-close',
      description: 'Evento emitido al cerrar el tooltip',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    hide: {
      description: 'Oculta el tooltip',
      control: false,
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    title: 'Tooltip title',
    closable: false,
    rawContent: false,
    placement: 'bottom',
    visible: null,
    disabled: false,
    appendTo: undefined,
    content: '',
    offset: 12,
    popperOptions: {},
    showAfter: 0,
    showArrow: true,
    hideAfter: 200,
    description:
      'Los comercios recurrentes te permiten realizar transacciones más ágiles.',
    trigger: 'hover',
    autoClose: 0,
    persistent: false,
    teleported: true,
  },
};
export default meta;
type Story = StoryObj<TooltipInstance>;

export const Basic: Story = {
  name: 'Básico',
  render: args => ({
    components: { GTooltip, GConfigProvider, GButton },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex items-center justify-center h-80 w-full">
          <g-tooltip v-bind="args">
            <g-button>Hover me</g-button>
          </g-tooltip>
        </div>
      </g-config-provider>
    `,
  }),
};

export const allPostions: Story = {
  name: 'Todas las posiciones',
  parameters: {
    docs: {
      description: {
        story: `Combinación de todas las posiciones disponibles para el tooltip.

\`top\` y \`bottom\` son las posiciones por defecto.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GTooltip, GRadioGroup, GIconFont, GSelect },
    setup() {
      const position = ref('top');
      const trigger = ref('hover');
      const triggers = [
        { value: 'click', title: 'Click' },
        { value: 'hover', title: 'Hover' },
        { value: 'focus', title: 'Focus' },
        { value: 'contextmenu', title: 'Context Menu' },
      ];

      const optionsSelect = [
        { value: 'top', title: 'Top' },
        { value: 'top-start', title: 'Top Start' },
        { value: 'top-end', title: 'Top End' },
        { value: 'bottom', title: 'Bottom' },
        { value: 'bottom-start', title: 'Bottom Start' },
        { value: 'bottom-end', title: 'Bottom End' },
        { value: 'left', title: 'Left' },
        { value: 'left-start', title: 'Left Start' },
        { value: 'left-end', title: 'Left End' },
        { value: 'right', title: 'Right' },
        { value: 'right-start', title: 'Right Start' },
        { value: 'right-end', title: 'Right End' },
      ];

      return { position, optionsSelect, triggers, trigger };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center w-full gap-md mb-4">
            <g-select
              v-model="position"
              :options="optionsSelect"
              name="tooltip-position-select"
              id="custom-select"
              placeholder="Selecciona una posición"
              label="Posición"
            />
            <g-select
              v-model="trigger"
              :options="triggers"
              name="tooltip-trigger-select"
              id="custom-select"
              placeholder="Selecciona un disparador"
              label="Disparador"
            />
          </div>
          <div class="flex items-center justify-center w-full h-72">
            <g-tooltip 
              :placement="position" 
              title="Información adicional" 
              description="Haz clic aquí para obtener más detalles sobre esta función o característica."
              closable
              :trigger="trigger"
            >
              <g-icon-font name="regular info-circle" />
            </g-tooltip>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const visibilityControlled: Story = {
  name: 'Control de visibilidad',
  parameters: {
    docs: {
      description: {
        story: `Controla la visibilidad del tooltip mediante el uso de la propiedad \`visible\`. Esto permite mostrar u ocultar el tooltip programáticamente.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GTooltip, GButton },
    setup() {
      const visible = ref(false);

      const closeTooltip = () => {
        visible.value = false;
      };
      const openTooltip = () => {
        visible.value = true;
      };

      return { visible, closeTooltip, openTooltip };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-row items-center justify-center w-full">
          <g-tooltip
            :visible="visible"
            title="Ejemplo visibilidad"
            description="Haz clic aquí para obtener más detalles sobre esta función o característica."
          >
            <g-button 
              @mouseenter="openTooltip"
              @mouseleave="closeTooltip"
            >
              Mostrar tooltip con hover
            </g-button>
          </g-tooltip>
        </div>
      </g-config-provider>
    `,
  }),
};

export const singleton: Story = {
  name: 'Singleton',
  parameters: {
    docs: {
      description: {
        story: `Tooltip singleton que se comparte entre varios elementos. Esto significa que se comparte la misma instancia de tooltip entre varios elementos, lo que permite que solo un tooltip esté visible a la vez.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GTooltip, GButton },
    setup() {
      const buttonRef = ref();
      const tooltipRef = ref();
      const visible = ref(false);

      return { buttonRef, tooltipRef, visible };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-row gap-sm w-full items-center justify-center">
          <g-button
            v-for="i in 3"
            :key="i"
            @mouseover="(e) => (buttonRef = e.currentTarget)"
            @click="visible = !visible"
          >
            Click para abrir tooltip
          </g-button>
        </div>
        <g-tooltip
          ref="tooltipRef"
          :visible="visible"
          :popper-options="{
            modifiers: [
              {
                name: 'computeStyles',
                options: {
                  adaptive: false,
                  enabled: false,
                },
              },
            ],
          }"
          :virtual-ref="buttonRef"
          virtual-triggering
          popper-class="singleton-tooltip transition-transform duration-300 [transition-timing-function:var(--el-transition-function-fast-bezier)]"
          title="Ejemplo singleton"
          description="Puedes cerrar el tooltip haciendo click en cualquier botón."
        />
      </g-config-provider>
    `,
  }),
};
