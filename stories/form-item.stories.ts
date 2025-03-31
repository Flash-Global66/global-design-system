import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, reactive } from 'vue'
import { GFormItem, GForm, FormItemInstance } from '@flash-global66/g-form/index.ts'
import { GInput } from '@flash-global66/g-input/index.ts'
import { GSelect } from '@flash-global66/g-select/index.ts'
import { GButton } from '@flash-global66/g-button/index.ts'
import { GConfigProvider } from '../components/config-provider'

const meta: Meta<FormItemInstance> = {
  title: 'Form/Form/Item',
  component: GFormItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GFormItem\` es un contenedor para elementos de formulario que controla los errores de validación y muestra mensajes de error cuando es necesario.

### Características
> - Control de errores de validación
> - Mensajes de error personalizables
> - Integración con Form padre
> - Estados de validación
> - Reseteo individual de campos
> - Soporte para reglas específicas

### Instalación

\`\`\`bash
yarn add @flash-global66/g-form
\`\`\`

### Importación

\`\`\`typescript
import { GFormItem } from '@flash-global66/g-form'
import '@flash-global66/g-form/form.styles.scss'
\`\`\`

### Dependencias
Este componente está diseñado para funcionar dentro de un componente \`Form\`. Para ver la documentación completa del sistema de formularios, visita la [documentación de Form](/docs/form-form--docs).`
      }
    }
  },
  argTypes: {
    prop: {
      description: 'Nombre del campo en el modelo de datos',
      control: 'text',
      table: {
        type: { summary: 'string | string[]' }
      }
    },
    rules: {
      description: 'Reglas de validación específicas para este campo',
      control: 'object',
      table: {
        type: { summary: 'FormItemRule | FormItemRule[]' }
      }
    },
    showMessage: {
      description: 'Controla dónde se muestran los mensajes de error',
      control: 'select',
      options: ['parent', 'child', 'none'],
      table: {
        type: { summary: '"parent" | "child" | "none"' },
        defaultValue: { summary: '"child"' }
      }
    },
    validateMessage: {
      description: 'Mensaje de validación actual',
      table: {
        category: 'Expuesto',
        type: { summary: 'string' }
      }
    },
    shouldShowError: {
      description: 'Indica si se debe mostrar el error en el form item',
      table: {
        category: 'Expuesto',
        type: { summary: 'boolean' }
      }
    },
    shouldShowErrorChild: {
      description: 'Indica si se debe mostrar el error en el componente hijo',
      table: {
        category: 'Expuesto',
        type: { summary: 'boolean' }
      }
    },
    validateState: {
      description: 'Estado actual de la validación',
      table: {
        category: 'Expuesto',
        type: { summary: 'string' }
      }
    },
    validate: {
      description: 'Método para validar el form item',
      table: {
        category: 'Expuesto',
        type: { summary: '() => Promise<void>' }
      }
    },
    clearValidate: {
      description: 'Elimina el estado de validación del campo',
      table: {
        category: 'Expuesto',
        type: { summary: '() => void' }
      }
    },
    resetField: {
      description: 'Reinicia el campo actual y elimina el resultado de la validación',
      table: {
        category: 'Expuesto',
        type: { summary: '() => void' }
      }
    }
  }
}
export default meta
type Story = StoryObj<FormItemInstance>

export const CombinedRules: Story = {
  name: 'Combinación de Reglas',
  parameters: {
    docs: {
      description: {
        story: `Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \`validate-event\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \`validate-event="false"\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \`validate-event="true"\` (por defecto): La validación se dispara automáticamente en eventos de entrada.`
      }
    }
  },
  render: (args) => ({
    components: { GForm, GFormItem, GInput, GConfigProvider, GButton, GSelect },
    setup() {
      const formRef = ref()
      const formData = reactive({
        nombre: '',
        apellido: '',
        edad: '',
        ciudad: ''
      })

      const rules = {
        nombre: [
          { required: true, message: 'El nombre es requerido', trigger: 'blur' },
          { min: 5, message: 'Mínimo 5 caracteres', trigger: 'blur' }
        ],
        apellido: [{ required: true, message: 'El apellido es requerido', trigger: 'blur' }],
        ciudad: [{ required: true, message: 'La ciudad es requerida' }]
      }

      const options = [
        {
          value: 'Bogotá',
          title: 'Bogotá'
        },
        {
          value: 'Medellín',
          title: 'Medellín'
        },
        {
          value: 'Cali',
          title: 'Cali'
        },
        {
          value: 'Barranquilla',
          title: 'Barranquilla'
        }
      ]

      async function handleSubmit() {
        if (!formRef.value) return

        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields)
          } else {
            console.log('error submit!', fields)
          }
        })
      }

      async function handleReset() {
        if (!formRef.value) return
        formRef.value.resetFields()
      }

      return { args, formRef, formData, rules, handleSubmit, handleReset, options }
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre" :show-message="args.showMessage">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          <g-form-item prop="apellido" :show-message="args.showMessage">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item prop="ciudad" :show-message="args.showMessage">
            <g-select
              v-model="formData.ciudad"
              label="Ciudad"
              placeholder="Seleccione una ciudad"
              :options="options"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item 
            prop="edad"
            :show-message="args.showMessage"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `
  })
}

export const MessageBehavior: Story = {
  name: 'Mensajes de Error',
  parameters: {
    docs: {
      description: {
        story: `Demostración de las diferentes formas de mostrar mensajes de error:
        
- \`showMessage="child"\`: El error se muestra en el componente hijo (Input, Select, etc). Este es el valor predeterminado.
- \`showMessage="parent"\`: El error se muestra en el FormItem.
- \`showMessage="none"\`: No se muestra ningún mensaje de error.`
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider, GButton },
    setup() {
      const formRef = ref()
      const formData = reactive({
        campo1: '',
        campo2: '',
        campo3: ''
      })

      const rules = {
        campo1: [{ required: true, message: 'Este campo es requerido', trigger: 'blur' }],
        campo2: [{ required: true, message: 'Este campo es requerido', trigger: 'blur' }],
        campo3: [{ required: true, message: 'Este campo es requerido', trigger: 'blur' }]
      }

      async function handleSubmit() {
        if (!formRef.value) return
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields)
          } else {
            console.log('error submit!', fields)
          }
        })
      }

      async function handleReset() {
        if (!formRef.value) return
        formRef.value.resetFields()
      }

      return { formRef, formData, rules, handleSubmit, handleReset }
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item 
            prop="campo1"
            showMessage="child"
          >
            <g-input 
              v-model="formData.campo1"
              label="Error en Input (child)"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <g-form-item 
            prop="campo2"
            showMessage="parent"
          >
            <g-input 
              v-model="formData.campo2"
              label="Error en FormItem (parent)"
              placeholder="Error se muestra debajo"
            />
          </g-form-item>

          <g-form-item 
            prop="campo3"
            showMessage="none"
          >
            <g-input 
              v-model="formData.campo3"
              label="Sin mensaje de error (none)"
              placeholder="No se muestra ningún error"
            />
          </g-form-item>

          <div style="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Validar</g-button>
            <g-button @click="handleReset" variant="secondary" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `
  })
}