
import type { Meta, StoryObj } from "@storybook/vue3";
import { GInput, InputInstance } from "../components/input";
import { GConfigProvider } from "../components/config-provider";
import { reactive, ref } from "vue";
import { generateIconOptions } from "../helper/documentation-stories";
import { prefix } from "@fortawesome/pro-solid-svg-icons";

const meta: Meta<InputInstance> = {
  title: "Form/Input",
  component: GInput,
  parameters: {
    docs: {
      description: {
        component: `El componente Input es un campo de entrada enriquecido que soporta:
        
- Etiquetas flotantes (floating labels)
- Validación integrada
- Estados de carga y error
- Íconos prefix y suffix
- Texto de ayuda
- Límite de caracteres
- Formateo de entrada
- Modo contraseña con visibilidad toggle

### Instalación

\`\`\`bash
yarn add @flash-global66/g-input
\`\`\`

### Importación

\`\`\`typescript
import { GInput } from '@flash-global66/g-input'
import '@flash-global66/g-input/input.styles.scss'
\`\`\`
`
      }
    }
  },
  argTypes: {
    modelValue: {
      description: "Valor del input (v-model)",
      control: {
        type: undefined,
      },
      table: {
        type: { summary: "string | number | null" }
      }
    },
    label: {
      description: "Etiqueta flotante del input",
      control: "text",
    },
    prefixIcon: {
      description: "Ícono al inicio del input",
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    suffixIcon: {
      description: "Ícono al final del input",
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    showPassword: {
      description: "Muestra/oculta el contenido del campo password",
      control: "boolean"
    },
    formatter: {
      description: "Función para formatear el valor de entrada",
      table: {
        type: { summary: "(value: string) => string" }
      }
    },
    parser: {
      description: "Función para parsear el valor antes de emitirlo",
      table: {
        type: { summary: "(value: string) => string" }
      }
    },
    helpText: {
      description: "Texto de ayuda mostrado debajo del input",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" }
      }
    },
    loading: {
      description: "Muestra estado de carga en el input",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    minlength: {
      description: "Longitud mínima del valor del input. (nativo)",
      control: "number",
      table: {
        type: { summary: "string | number" }
      }
    },
    showWordLimit: {
      description: "Muestra contador de caracteres",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    validateEvent: {
      description: "Activa la validación del formulario en eventos",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" }
      }
    },
    isEvent: {
      description: "Indica si el input es controlado por eventos",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    autofocus: {
      description: "Enfoca automáticamente el input al montar",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    type: {
      description: "Tipo de input",
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
      defaultValue: "text"
    },
    ref: {
      description: "Referencia al elemento raíz",
      table: {
        category: "Expuesto",
        type: { summary: "HTMLElement" }
      }
    },
    isComposing: {
      description: "Estado de composición del input",
      table: {
        category: "Expuesto",
        type: { summary: "boolean" }
      }
    },
    focus: {
      description: "Enfoca el input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    blur: {
      description: "Quita el foco del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    select: {
      description: "Selecciona todo el texto del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    clear: {
      description: "Limpia el valor del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    messageError: {
      description: "Mensaje de error",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" }
      }
    }
  },
  args: {
    label: 'Etiqueta',
    placeholder: 'Placeholder',
    suffixIcon: undefined,
    prefixIcon: undefined,
    showPassword: false,
    helpText: '',
    messageError: undefined,
    loading: false,
    minlength: undefined,
    showWordLimit: false,
    validateEvent: true,
    isEvent: false,
    autofocus: false,
    disabled: false,
    maxlength: 50,
    type: 'text',
  }
};
export default meta;
type Story = StoryObj<InputInstance>;

// Ejemplo Básico
export const Basic: Story = {
  name: "Básico",
  render: (args) => ({
    components: { GInput, GConfigProvider },
    setup() {
      const name = ref('');
      
      return { name, args }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input v-bind="args" v-model="name" />
        </div>
      </g-config-provider>
    `
  })
};
export const PaymentForm: Story = {
  name: "Formulario de Pago",
  parameters: {
    docs: {
      description: {
        story: `
- **Número de Tarjeta**: 
  - Usa formatter/parser para formateo automático XXXX XXXX XXXX XXXX
  - Prefix-icon: regular landmark
  - Maxlength: 19 caracteres (16 números + 3 espacios)

- **Titular**: 
  - Campo de texto simple
  - Prefix-icon: user
  - Placeholder guía al usuario sobre el formato esperado

- **Fecha Vencimiento**: 
  - Prefix-icon: calendar
  - Maxlength: 5 caracteres (formato MM/YY)

- **CVV**: 
  - Tipo password con toggle de visibilidad
  - Prefix-icon: regular lock-alt
  - Maxlength: 4 dígitos
  - Incluye showPassword para alternar visibilidad

### Formateo de Tarjeta

El input de tarjeta implementa formatter/parser para mejor experiencia:

\`\`\`typescript
// Formatea visualmente: 4111111111111111 -> 4111 1111 1111 1111
const formatCardNumber = (value: string) => {
  if (!value) return ''
  const numbers = value.replace(/\s/g, '')
  const groups = numbers.match(/.{1,4}/g) || []
  return groups.join(' ')
}

// Mantiene datos limpios: 4111 1111 1111 1111 -> 4111111111111111
const parseCardNumber = (value: string) => {
  return value.replace(/\s/g, '')
}
\`\`\`
`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const formData = reactive({
        cardNumber: '',
        titular: '',
        expDate: '',
        cvv: ''
      })

      const formatCardNumber = (value: string) => {
        if (!value) return ''
        const numbers = value.replace(/\s/g, '')
        const groups = numbers.match(/.{1,4}/g) || []
        return groups.join(' ')
      }

      const parseCardNumber = (value: string) => {
        return value.replace(/\s/g, '')
      }
      
      return { 
        formData,
        formatCardNumber,
        parseCardNumber
      }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <div class="grid grid-cols-2 gap-4">
            <g-input 
              v-model="formData.cardNumber"
              label="Número de Tarjeta"
              placeholder="1234 5678 9012 3456"
              maxlength="19"
              prefix-icon="regular landmark"
              :formatter="formatCardNumber"
              :parser="parseCardNumber"
            />
            <g-input 
              v-model="formData.titular"
              label="Titular"
              placeholder="Como aparece en la tarjeta"
              prefix-icon="regular user"
            />
            <g-input 
              v-model="formData.expDate"
              label="Fecha Vencimiento"
              placeholder="MM/YY"
              maxlength="5"
              prefix-icon="regular calendar"
            />
            <g-input 
              v-model="formData.cvv"
              label="CVV"
              type="password"
              maxlength="4"
              show-password
              prefix-icon="regular lock-alt"
            />
          </div>

          <div class="bg-gray-100 p-4 rounded">
            <pre class="text-sm">{{ formData }}</pre>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const CharacterCount: Story = {
  name: "Conteo de Caracteres",
  parameters: {
    docs: {
      description: {
        story: `El input puede mostrar un contador de caracteres usando la propiedad showWordLimit junto con maxlength:

- Muestra el conteo actual/máximo (ej: 12/100)
- Se actualiza en tiempo real mientras el usuario escribe
- Útil para campos con límite como tweets, mensajes o descripciones`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const tweet = ref('')
      const description = ref('')
      
      return { tweet, description }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            v-model="tweet"
            label="Tweet"
            placeholder="¿Qué está pasando?"
            maxlength="280"
            show-word-limit
            help-text="Máximo 280 caracteres"
          />
          <g-input 
            v-model="description"
            label="Descripción corta"
            placeholder="Describe tu producto"
            maxlength="100"
            show-word-limit
            help-text="Sé conciso y claro"
          />
        </div>
      </g-config-provider>
    `
  })
};

export const CustomSlots: Story = {
  name: "Slots Personalizados",
  parameters: {
    docs: {
      description: {
        story: `Los slots prefix y suffix permiten insertar contenido personalizado al inicio o final del input:

- **slot:prefix**: Contenido al inicio del input (izquierda)
- **slot:suffix**: Contenido al final del input (derecha)

Ideal para mostrar símbolos de moneda, unidades de medida o contenido personalizado.`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const formData = reactive({
        amountCOP: '',
        amountCLP: ''
      });
      
      return { formData }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            v-model="formData.amountCOP"
            label="Monto en Pesos Colombianos"
            placeholder="0.00"
          >
            <template #prefix>
              <span class="text-gray-500 font-medium">COP</span>
            </template>
          </g-input>

          <g-input 
            v-model="formData.amountCLP"
            label="Monto en Pesos Chilenos"
            placeholder="0.00"
          >
            <template #suffix>
              <span class="text-gray-500 font-medium">CLP</span>
            </template>
          </g-input>
        </div>
      </g-config-provider>
    `
  })
};


export const States: Story = {
  name: "Estados",
  parameters: {
    docs: {
      description: {
        story: `Los inputs pueden tener diferentes estados que indican su comportamiento y apariencia:

- **Enabled**: Estado inicial del input, listo para recibir datos
- **Completed**: Cuando el input ya contiene datos ingresados
- **Disabled**: Input deshabilitado, no permite interacción
- **Readonly**: Permite ver pero no modificar el contenido
- **Evento**: Input controlado por eventos externos (ej: modal)
- **Error**: Muestra estado de error con mensaje
- **Loading**: Estado de carga durante operaciones asíncronas`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const states = reactive({
        enabled: '',
        completed: 'Input con contenido',
        disabled: 'Input deshabilitado',
        readonly: 'Input readonly',
        event: '',
        error: '',
        loading: 'Input loading'
      })

      function handleClick(e: MouseEvent) {
        alert('Click en el input')
      }
      
      return { states, handleClick }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            v-model="states.enabled"
            label="Enabled"
            help-text="Input en estado inicial, listo para recibir datos"
          />
          <g-input 
            v-model="states.completed"
            label="Completed"
            help-text="Input que ya contiene información ingresada"
          />
          <g-input 
            v-model="states.disabled"
            label="Disabled"
            disabled
            help-text="Input deshabilitado, no permite ninguna interacción"
          />
          <g-input 
            v-model="states.readonly"
            label="Readonly"
            readonly
            help-text="Permite ver pero no modificar el contenido"
          />
          <g-input 
            v-model="states.event"
            label="Evento"
            is-event
            @click="handleClick"
            suffix-icon="regular chevron-down"
            help-text="Click para abrir modal de selección"
          />
          <g-input 
            v-model="states.error"
            label="Error"
            message-error="Este campo contiene un error"
            help-text="Ejemplo de input con estado de error"
          />
          <g-input 
            v-model="states.loading"
            label="Loading"
            loading
            help-text="Estado durante operaciones asíncronas"
          />
        </div>
      </g-config-provider>
    `
  })
};

