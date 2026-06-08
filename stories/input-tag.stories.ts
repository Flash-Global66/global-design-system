import type { Meta, StoryObj } from '@storybook/vue3'
import { reactive, ref } from 'vue'
import { action } from '@storybook/addon-actions'

import { GInputTag, InputTagInstance } from '@flash-global66/g-input-tag/index.ts'
import '@flash-global66/g-input-tag/styles.scss'
import { GInput } from '@flash-global66/g-input/index.ts'
import '@flash-global66/g-input/styles.scss'
import { GConfigProvider } from '../components/config-provider'
import { GForm, GFormItem, FormInstance } from '@flash-global66/g-form/index.ts'
import { GButton } from '@flash-global66/g-button/index.ts'

import { version, peerDependencies } from '@flash-global66/g-input-tag/package.json'
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories'

const meta: Meta<typeof GInputTag> = {
  title: 'Form/InputTag',
  component: GInputTag,
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GInputTag\` permite crear y gestionar una colección de etiquetas (tags) como un input,
ideal para filtros multi-valor, listados, palabras clave y formularios con valores múltiples.

> Versión actual: ${version}

## Características
- Añade tags con Enter/Space, delimitadores o pegando valores.
- Límite máximo de tags configurable.
- Etiquetas colapsables con tooltip de desbordamiento.
- Reordenamiento por drag & drop.
- Integración con \`GForm\` (validación \`change\` y \`blur\`).
- Limpieza con icono y soporte de \`readonly\`/\`disabled\`.
- Icono de cierre y de clear personalizables mediante \`IconString\`.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-input-tag
\`\`\`

### Importación del componente

\`\`\`typescript
import { GInputTag } from '@flash-global66/g-input-tag'
import '@flash-global66/g-input-tag/styles.scss'
\`\`\`

## Dependencias
${generatePeerDepsList(peerDependencies)}

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-input-tag
    v-model="tags"
    placeholder="Escribe y presiona Enter"
    @add-tag="onAdd"
    @remove-tag="onRemove"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GInputTag } from '@flash-global66/g-input-tag';

const tags = ref(['vue', 'ts']);
const onAdd = (value) => console.log('añadido', value);
const onRemove = (value) => console.log('eliminado', value);
</script>
\`\`\`
`
      }
    }
  },
  argTypes: {
    modelValue: {
      control: 'object',
      description: 'Listado de tags (v-model)',
      table: {
        type: { summary: 'string[]' },
        category: 'Datos'
      }
    },
    max: {
      control: 'number',
      description: 'Número máximo de tags permitidos',
      table: { category: 'Comportamiento' }
    },
    tagType: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error', 'grey'],
      description: 'Tipo de tag (color)',
      table: { category: 'Apariencia' }
    },
    tagEffect: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Efecto visual del tag',
      table: { category: 'Apariencia' }
    },
    effect: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Tema del tooltip de overflow',
      table: { category: 'Apariencia' }
    },
    trigger: {
      control: { type: 'select' },
      options: ['Enter', 'Space'],
      description: 'Tecla que confirma el tag',
      table: { category: 'Comportamiento' }
    },
    draggable: {
      control: 'boolean',
      description: 'Permite reordenar los tags arrastrándolos',
      table: { category: 'Comportamiento' }
    },
    delimiter: {
      control: 'text',
      description: 'Carácter o expresión que separa tags (por ejemplo, ",")',
      table: { category: 'Comportamiento' }
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
      description: 'Tamaño del input',
      table: { category: 'Apariencia' }
    },
    clearable: {
      control: 'boolean',
      description: 'Muestra el botón para limpiar',
      table: { category: 'Comportamiento' }
    },
    clearIcon: {
      control: 'text',
      description: 'Icono de clear (IconString, p. ej. "regular circle-xmark")',
      table: { category: 'Apariencia' }
    },
    helpText: {
      control: 'text',
      description: 'Texto de ayuda mostrado debajo del input tag',
      table: { category: 'Contenido' }
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el input y la gestión de tags',
      table: { category: 'Estado' }
    },
    readonly: {
      control: 'boolean',
      description: 'Sólo lectura',
      table: { category: 'Estado' }
    },
    validateEvent: {
      control: 'boolean',
      description: 'Emite eventos de validación hacia GFormItem',
      table: { category: 'Form' }
    },
    collapseTags: {
      control: 'boolean',
      description: 'Colapsa los tags en un indicador "+N"',
      table: { category: 'Apariencia' }
    },
    collapseTagsTooltip: {
      control: 'boolean',
      description: 'Muestra tooltip con los tags colapsados',
      table: { category: 'Apariencia' }
    },
    maxCollapseTags: {
      control: 'number',
      description: 'Cantidad de tags visibles antes de colapsar',
      table: { category: 'Apariencia' }
    },
    saveOnBlur: {
      control: 'boolean',
      description: 'Guarda el contenido del input al perder el foco',
      table: { category: 'Comportamiento' }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input',
      table: { category: 'Contenido' }
    },
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar el listado de tags',
      table: { category: 'Eventos' }
    },
    onChange: {
      description: 'Se emite cuando cambia el listado de tags',
      table: { category: 'Eventos' }
    },
    onAddTag: {
      description: 'Se emite al añadir un nuevo tag',
      table: { category: 'Eventos' }
    },
    onRemoveTag: {
      description: 'Se emite al eliminar un tag',
      table: { category: 'Eventos' }
    },
    onDragTag: {
      description: 'Se emite al reordenar un tag',
      table: { category: 'Eventos' }
    },
    onClear: {
      description: 'Se emite al limpiar todos los tags',
      table: { category: 'Eventos' }
    }
  },
  args: {
    modelValue: ['vue', 'typescript'],
    placeholder: 'Escribe y presiona Enter',
    tagType: 'info',
    tagEffect: 'light',
    effect: 'light',
    trigger: 'Enter',
    draggable: false,
    delimiter: '',
    size: 'default',
    clearable: true,
    clearIcon: 'regular circle-xmark',
    disabled: false,
    readonly: false,
    validateEvent: true,
    collapseTags: false,
    collapseTagsTooltip: false,
    maxCollapseTags: 1,
    saveOnBlur: true,
    helpText: 'Escribe un tag y presiona Enter'
  }
}

export default meta
type Story = StoryObj<typeof GInputTag>

export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag.'
      }
    }
  },
  render: (args) => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tags = ref<string[]>(['vue', 'ts'])
      return { args, tags, onAdd: action('add-tag'), onRemove: action('remove-tag') }
    },
    template: `
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          v-bind="args"
          @add-tag="onAdd"
          @remove-tag="onRemove"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `
  })
}

export const LimitsAndDuplicates: Story = {
  name: 'Límite y duplicados',
  parameters: {
    docs: {
      description: {
        story:
          'Define un máximo de tags con la prop `max`. Los tags duplicados se bloquean automáticamente al añadir con Enter.'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tags = ref<string[]>(['vue', 'ts'])
      return { tags, onAdd: action('add-tag') }
    },
    template: `
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `
  })
}

export const Delimiter: Story = {
  name: 'Delimitador',
  parameters: {
    docs: {
      description: {
        story:
          'Con la prop `delimiter` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter).'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tags = ref<string[]>(['vue'])
      return { tags, onAdd: action('add-tag') }
    },
    template: `
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          delimiter=","
          placeholder="Escribe valores separados por coma"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `
  })
}

export const CollapsedTags: Story = {
  name: 'Tags colapsados',
  parameters: {
    docs: {
      description: {
        story:
          'Cuando hay muchos tags, `collapseTags` muestra los primeros y un indicador "+N" con tooltip para ver el resto.'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tags = ref<string[]>(['vue', 'ts', 'css', 'html', 'js', 'scss', 'tailwind'])
      return { tags }
    },
    template: `
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="2"
          placeholder="Lista larga de tags"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `
  })
}

export const Draggable: Story = {
  name: 'Reordenable (drag & drop)',
  parameters: {
    docs: {
      description: {
        story: 'Habilita `draggable` para permitir reordenar los tags arrastrándolos.'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tags = ref<string[]>(['primero', 'segundo', 'tercero', 'cuarto'])
      return { tags, onDrag: action('drag-tag') }
    },
    template: `
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          draggable
          placeholder="Arrastra los tags"
          @drag-tag="onDrag"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `
  })
}

export const DisabledAndReadonly: Story = {
  name: 'Disabled y Readonly',
  parameters: {
    docs: {
      description: {
        story:
          'En estado `disabled` o `readonly` no se pueden añadir ni eliminar tags. El botón de clear tampoco está disponible.'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider },
    setup() {
      const tagsA = ref<string[]>(['vue', 'ts'])
      const tagsB = ref<string[]>(['vue', 'ts'])
      return { tagsA, tagsB }
    },
    template: `
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <strong>Disabled</strong>
            <g-input-tag v-model="tagsA" disabled />
          </div>
          <div>
            <strong>Readonly</strong>
            <g-input-tag v-model="tagsB" readonly />
          </div>
        </div>
      </g-config-provider>
    `
  })
}

export const FormValidation: Story = {
  name: 'Integración con GForm',
  parameters: {
    docs: {
      description: {
        story:
          'Cuando el componente está dentro de un `GFormItem` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur).'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GConfigProvider, GForm, GFormItem, GButton },
    setup() {
      const formRef = ref<FormInstance>()
      const model = reactive<Record<string, string[]>>({ tags: [] })
      const submit = async () => {
        const valid = await formRef.value?.validate().catch(() => false)
        action('submit')(valid ? 'valid' : 'invalid')
      }
      return { formRef, model, submit }
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="model">
          <g-form-item
            label="Tags"
            prop="tags"
            show-message="child"
            :rules="[
              { type: 'array', required: true, message: 'Agrega al menos un tag', trigger: 'change' },
              { type: 'array', min: 2, message: 'Necesitas al menos 2 tags', trigger: 'change' }
            ]"
          >
            <g-input-tag
              v-model="model.tags"
              placeholder="Mínimo 2 tags"
              help-text="Agrega al menos dos tecnologías"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
      </g-config-provider>
    `
  })
}

export const ParentFormRules: Story = {
  name: 'Reglas desde GForm padre',
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo comparativo con `GInput` y `GInputTag` usando reglas definidas en el `GForm` padre. `GInputTag` requiere reglas de tipo `array` para validar correctamente tags vacíos o incompletos.'
      }
    }
  },
  render: () => ({
    components: { GInputTag, GInput, GConfigProvider, GForm, GFormItem, GButton },
    setup() {
      const formRef = ref<FormInstance>()
      const model = reactive({
        name: '',
        tags: [] as string[]
      })
      const rules = {
        name: [
          { required: true, message: 'Ingresa un nombre', trigger: 'change' },
          { min: 3, message: 'El nombre debe tener al menos 3 caracteres', trigger: 'change' }
        ],
        tags: [
          { type: 'array', required: true, message: 'Agrega al menos un tag', trigger: 'change' },
          { type: 'array', min: 2, message: 'Necesitas al menos 2 tags', trigger: 'change' }
        ]
      }
      const submit = async () => {
        const valid = await formRef.value?.validate().catch(() => false)
        action('parent-rules-submit')(valid ? 'valid' : 'invalid')
      }
      return { formRef, model, rules, submit }
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="model" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="name" show-message="child">
            <g-input
              v-model="model.name"
              label="Nombre"
              placeholder="Ingresa un nombre"
              help-text="Mínimo 3 caracteres"
            />
          </g-form-item>

          <g-form-item prop="tags" show-message="child">
            <g-input-tag
              v-model="model.tags"
              placeholder="Agrega tecnologías"
              help-text="Agrega al menos dos tags"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ model }}</pre>
      </g-config-provider>
    `
  })
}
