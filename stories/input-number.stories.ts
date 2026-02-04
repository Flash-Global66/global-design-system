import { Meta, StoryObj } from '@storybook/vue3'
import { ref, watch } from 'vue'
import { GInputNumber } from '../components/input-number'
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { version, peerDependencies } from '../components/input-number/package.json'
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories'

export default {
  title: 'Form/Input Number',
  component: GInputNumber,
  parameters: {
    docs: {
      description: {
        component: `
El componente Input Number permite a los usuarios ingresar y modificar valores numéricos mediante teclado o botones de control.

> Versión actual: ${version}

## Características
- Entrada numérica controlada
- Botones de incremento y decremento
- Configuración de pasos (step) y precisión
- Límites máximo y mínimo
- Diferentes tamaños y estados (disabled, readonly)
- Soporte para decimales

### Instalación

\`\`\`bash
yarn add @flash-global66/g-input-number
\`\`\`

### Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GInputNumber } from '@flash-global66/g-input-number'

# recomendado importar en los estilos globales
import '@flash-global66/g-input-number/input-number.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`
`
      }
    }
  },
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Valor vinculado (v-model)',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
    },
    step: {
      control: 'number',
      description: 'Paso incremental',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    stepStrictly: {
      control: 'boolean',
      description: 'Solo permite múltiplos del paso',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    max: {
      control: 'number',
      description: 'Valor máximo permitido',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'Number.MAX_SAFE_INTEGER' },
      },
    },
    min: {
      control: 'number',
      description: 'Valor mínimo permitido',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'Number.MIN_SAFE_INTEGER' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Modo solo lectura',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: 'Tamaño del componente',
      table: {
        type: { summary: 'ComponentSize' },
        defaultValue: { summary: 'default' },
      },
    },
    controls: {
      control: 'boolean',
      description: 'Mostrar botones de control',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    controlsPosition: {
      control: 'select',
      options: ['', 'right'],
      description: 'Posición de los controles',
      table: {
        type: { summary: '"" | "right"' },
        defaultValue: { summary: '""' },
      },
    },
    valueOnClear: {
      control: 'select',
      options: ['min', 'max', 0, null],
      description: 'Valor al limpiar el input',
      table: {
        type: { summary: '"min" | "max" | number | null' },
        defaultValue: { summary: 'null' },
      },
    },
    name: {
      control: 'text',
      description: 'Atributo name nativo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de ayuda (placeholder)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    precision: {
      control: 'number',
      description: 'Precisión de decimales',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    validateEvent: {
      control: 'boolean',
      description: 'Activar validación de formulario',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta aria-label nativa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    inputmode: {
      control: 'text',
      description: 'Modo de entrada nativo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Alineación del texto',
      table: {
        type: { summary: '"left" | "right" | "center"' },
        defaultValue: { summary: 'center' },
      },
    },
    disabledScientific: {
      control: 'boolean',
      description: 'Deshabilitar notación científica (e.g. \'e\', \'E\')',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    // Slots
    prefix: {
      description: 'Contenido personalizado al inicio del input',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
      },
    },
    suffix: {
      description: 'Contenido personalizado al final del input',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
      },
    },
    // Eventos
    onChange: {
      action: 'change',
      description: 'Se dispara cuando el valor cambia',
      table: {
        category: 'Eventos',
        type: { summary: '(cur: number | undefined, prev: number | undefined) => void' },
      },
    },
    onInput: {
      action: 'input',
      description: 'Se dispara cuando el input cambia',
      table: {
        category: 'Eventos',
        type: { summary: '(val: number | null | undefined) => void' },
      },
    },
    onFocus: {
      action: 'focus',
      description: 'Se dispara cuando el input obtiene foco',
      table: {
        category: 'Eventos',
        type: { summary: '(event: FocusEvent) => void' },
      },
    },
    onBlur: {
      action: 'blur',
      description: 'Se dispara cuando el input pierde foco',
      table: {
        category: 'Eventos',
        type: { summary: '(event: FocusEvent) => void' },
      },
    },
  },
} as Meta<typeof GInputNumber>

type Story = StoryObj<typeof GInputNumber>

const render: Story['render'] = (args) => ({
  components: { GInputNumber, GConfigProvider },
  setup() {
    const modelValue = ref(args.modelValue ?? 1)
    watch(
      () => args.modelValue,
      (newVal) => {
        modelValue.value = newVal ?? 1
      }
    )
    return { args, modelValue }
  },
  template: `
    <g-config-provider>
      <g-input-number v-bind="args" v-model="modelValue" />
    </g-config-provider>
  `,
})

export const Default: Story = {
  name: 'Por defecto',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente `g-input-number` con sus propiedades por defecto.',
      },
    },
  },
  render,
  args: {
    modelValue: 1,
    placeholder: 'Ingresa un número',
  },
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente `g-input-number` deshabilitado.',
      },
    },
  },
  render,
  args: {
    modelValue: 1,
    disabled: true,
    placeholder: 'Input deshabilitado',
  },
}

export const Readonly: Story = {
  name: 'Solo lectura',
  parameters: {
    docs: {
      description: {
        story: 'Si no se requiere que el valor pueda ser modificado, activa esta propiedad.',
      },
    },
  },
  render,
  args: {
    modelValue: 1,
    readonly: true,
    placeholder: 'Input solo lectura',
  },
}

export const ControlsRight: Story = {
  name: 'Controles a la derecha',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente `g-input-number` con los controles a la derecha.',
      },
    },
  },
  render,
  args: {
    modelValue: 1,
    controlsPosition: 'right',
  },
}

export const StepStrictly: Story = {
  name: 'Paso estricto',
  parameters: {
    docs: {
      description: {
        story: 'Si necesitas que el valor sea siempre múltiplo del paso, activa esta propiedad.',
      },
    },
  },
  render,
  args: {
    modelValue: 2,
    step: 2,
    stepStrictly: true,
  },
}

export const MinMax: Story = {
  name: 'Min/Max',
  parameters: {
    docs: {
      description: {
        story: 'Si necesitas limitar el valor mínimo y máximo, limita el valor con las propiedades `min` y `max`.',
      },
    },
  },
  render,
  args: {
    modelValue: 5,
    min: 0,
    max: 10,
  },
}

export const Size: Story = {
  name: 'Tamaño',
  parameters: {
    docs: {
      description: {
        story: 'Usa el atributo `size` para configurar tamaños adicionales `large`, `default` o `small`.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const defaultValue = ref(1)
      const smallValue = ref(3)
      const largeValue = ref(7)
      return { defaultValue, smallValue, largeValue }
    },
    template: `
      <g-config-provider>
        <div class="flex items-center gap-4">
          <g-input-number v-model="largeValue" size="large" />
          <g-input-number v-model="defaultValue" size="default" />
          <g-input-number v-model="smallValue" size="small" />
        </div>
      </g-config-provider>
    `,
  }),
}

export const Alignment: Story = {
  name: 'Alineación',
  parameters: {
    docs: {
      description: {
        story: 'Usa el atributo `align` para configurar la alineación del texto con `left`, `right`, o `center`.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const leftValue = ref(123)
      const centerValue = ref(456)
      const rightValue = ref(789)
      return { leftValue, centerValue, rightValue }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input-number v-model="leftValue" align="left" />
          <g-input-number v-model="centerValue" align="center" />
          <g-input-number v-model="rightValue" align="right" />
        </div>
      </g-config-provider>
    `,
  }),
}

export const WithoutControls: Story = {
  name: 'Sin controles',
  parameters: {
    docs: {
      description: {
        story: 'Configura `controls` a `false` para ocultar los botones de control.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const modelValue = ref(10)
      return { modelValue }
    },
    template: '<g-config-provider><g-input-number v-model="modelValue" :controls="false" /></g-config-provider>',
  }),
}

export const CustomStep: Story = {
  name: 'Paso personalizado',
  parameters: {
    docs: {
      description: {
        story: 'Usa `step` para configurar el valor de incremento/decremento. Usa `stepStrictly` para asegurar que el valor sea siempre múltiplo del paso.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const step2 = ref(2)
      const step10 = ref(10)
      const stepStrictly = ref(0)
      return { step2, step10, stepStrictly }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2</p>
            <g-input-number v-model="step2" :step="2" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 10</p>
            <g-input-number v-model="step10" :step="10" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2 (Estricto)</p>
            <g-input-number v-model="stepStrictly" :step="2" :step-strictly="true" />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
}

export const DecimalPrecision: Story = {
  name: 'Precisión decimal',
  parameters: {
    docs: {
      description: {
        story: 'Usa `precision` para configurar el número de decimales. Usa `step` con valores decimales para un control fino.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const precision2 = ref(1.23)
      const precision4 = ref(1.2345)
      const decimalStep = ref(0.5)
      return { precision2, precision4, decimalStep }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 2</p>
            <g-input-number v-model="precision2" :precision="2" :step="0.01" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 4</p>
            <g-input-number v-model="precision4" :precision="4" :step="0.0001" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 0.5</p>
            <g-input-number v-model="decimalStep" :step="0.5" />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
}

export const WithPlaceholder: Story = {
  name: 'Con placeholder',
  parameters: {
    docs: {
      description: {
        story: 'Usa `placeholder` para mostrar una ayuda cuando el input está vacío.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const modelValue = ref(null)
      return { modelValue }
    },
    template: '<g-config-provider><g-input-number v-model="modelValue" placeholder="Ingresa un número" /></g-config-provider>',
  }),
}

export const AllSizes: Story = {
  name: 'Todos los tamaños',
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños disponibles con diferentes configuraciones.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const smallDefault = ref(1)
      const smallRight = ref(2)
      const defaultDefault = ref(3)
      const defaultRight = ref(4)
      const largeDefault = ref(5)
      const largeRight = ref(6)
      return { smallDefault, smallRight, defaultDefault, defaultRight, largeDefault, largeRight }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Pequeño</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="smallDefault" size="small" />
              <g-input-number v-model="smallRight" size="small" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Por Defecto</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="defaultDefault" size="default" />
              <g-input-number v-model="defaultRight" size="default" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Grande</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="largeDefault" size="large" />
              <g-input-number v-model="largeRight" size="large" controls-position="right" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
}

export const WithPrefixSuffix: Story = {
  name: 'Con Prefijo y Sufijo',
  parameters: {
    docs: {
      description: {
        story: 'Usa los slots `prefix` y `suffix` para agregar contenido personalizado al input.',
      },
    },
  },
  render: () => ({
    components: { GInputNumber, GConfigProvider },
    setup() {
      const modelValue = ref(10)
      return { modelValue }
    },
    template: `
      <g-config-provider>
        <g-input-number v-model="modelValue">
          <template #prefix>
            <span class="text-gray-500 font-medium">$</span>
          </template>
          <template #suffix>
            <span class="text-gray-500 font-medium">USD</span>
          </template>
        </g-input-number>
      </g-config-provider>
    `,
  }),
}