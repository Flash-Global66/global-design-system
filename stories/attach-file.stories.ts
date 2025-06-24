import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, reactive } from "vue";
import { action } from '@storybook/addon-actions';

import { GAttachFile } from "@flash-global66/g-attach-file/index.ts";
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { GForm, GFormItem } from "@flash-global66/g-form/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";
import { GInput } from "@flash-global66/g-input/index.ts";

import { version, peerDependencies } from "@flash-global66/g-attach-file/package.json";
import { generatePeerDepsList, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta<typeof GAttachFile> = {
  title: "Form/Attach File",
  component: GAttachFile,
  parameters: {
    docs: {
      description: {
        component: `
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (zona de arrastre).

> Versión actual: ${version}

## Características

- **Dos tipos de visualización**: \`default\` (compacto) y \`drag-drop\` (zona de arrastre)
- **Validaciones automáticas**: Tamaño, tipo y cantidad de archivos
- **Progreso de carga**: Indicadores por archivo individual
- **Integración con formularios**: Compatible con validaciones híbridas
- **Accesibilidad**: Soporte completo para lectores de pantalla

## Tipos disponibles

### Tipo "default"
Presenta una interfaz horizontal con título, información y botón de acción en línea.

### Tipo "drag-drop"  
Área de arrastre con lista externa.

## Manejo de Estados de Error

### Instalación

\`\`\`bash
yarn add @flash-global66/g-attach-file
\`\`\`

### Importación

\`\`\`typescript
import { GAttachFile } from '@flash-global66/g-attach-file'
import '@flash-global66/g-attach-file/attach-file.styles.scss'
\`\`\`

## Dependencias
Se realizaron pruebas con las siguientes versiones. Puede funcionar con otras versiones, pero no se garantiza compatibilidad.
${generatePeerDepsList(peerDependencies)}

> Consultar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas  
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

## Ejemplos de Uso

### Básico con Validaciones Automáticas

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const validationErrors = ref<string[]>([])

const handleValidationError = (errors: ValidationError[]) => {
  validationErrors.value = errors.map(error => {
    switch (error.type) {
      case 'file-size-exceeded':
        return \`"\${error.file.name}" excede \${error.data.maxSize}\`
      case 'invalid-file-type':
        return \`"\${error.file.name}" no es un tipo válido\`
      case 'max-files-exceeded':
        return \`Máximo \${error.data.maxFiles} archivos permitidos\`
      default:
        return 'Error de validación'
    }
  })
}
</script>

<template>
  <g-attach-file 
    v-model="files"
    :accept-ext-names="['.pdf', '.doc', '.docx']"
    max-size="10MB"
    :max-files="3"
    title="Seleccionar documentos"
    info-text="PDF o Word, máximo 10MB y 3 archivos"
    @validation-error="handleValidationError"
  />
  
  <div v-if="validationErrors.length" class="error-messages">
    <p v-for="error in validationErrors" :key="error">{{ error }}</p>
  </div>
</template>
\`\`\`

### Manejo de Errores en Listado

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
// Ejemplo con archivos precargados:
// const files = ref<File[]>([
//   new File([''], 'documento1.pdf', { type: 'application/pdf' }),
//   new File([''], 'documento2.pdf', { type: 'application/pdf' }),
//   new File([''], 'documento3.pdf', { type: 'application/pdf' })
// ])

const fileErrors = ref<Record<number, string>>({
  0: "Error de conexión al servidor",
  2: "Archivo corrupto detectado"
})

const handleRetry = () => {
  fileErrors.value = {}
}
</script>

<template>
  <g-attach-file 
    v-model="files"
    :file-errors="fileErrors"
    title="Documentos cargados"
    @on-retry="handleRetry"
  />
</template>
\`\`\`

### Integración con Formularios

\`\`\`html
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'

const formData = reactive({
  documents: [] as File[]
})

const rules = {
  documents: [
    { required: true, message: 'Los documentos son obligatorios', trigger: 'change' },
    {
      validator: (rule: any, files: File[], callback: any) => {
        const hasPdf = files.some(f => f.name.endsWith('.pdf'))
        if (!hasPdf) {
          callback(new Error('Debe incluir al menos un archivo PDF'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}
</script>

<template>
  <g-form :model="formData" :rules="rules">
    <g-form-item label="Documentos" prop="documents">
      <g-attach-file 
        v-model="formData.documents"
        type="drag-drop"
        :accept-ext-names="['.pdf', '.doc', '.docx']"
        max-size="10MB"
        :max-files="3"
        upload-button-text="Seleccionar documentos"
        upload-text=" o arrastra archivos aquí"
      />
    </g-form-item>
  </g-form>
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    modelValue: {
      description: "Array de archivos seleccionados (v-model)",
      control: "object",
      table: {
        category: "Principales",
        type: { summary: "File[]" },
        defaultValue: { summary: "[]" },
      },
    },
    type: {
      description: "Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",
      control: "select",
      options: ["default", "drag-drop"],
      table: {
        category: "Principales",
        type: { summary: "'default' | 'drag-drop'" },
        defaultValue: { summary: "'default'" },
      },
    },
    mode: {
      description: "Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",
      control: "select",
      options: ["upload", "download"],
      table: {
        category: "Principales",
        type: { summary: "'upload' | 'download'" },
        defaultValue: { summary: "'upload'" },
      },
    },
    multiple: {
      description: "Permite seleccionar múltiples archivos mediante el input file.",
      control: "boolean",
      table: {
        category: "Principales",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    acceptExtNames: {
      description: "Array de extensiones permitidas. El componente valida automáticamente y emite eventos de error.",
      control: "object",
      table: {
        category: "Validación Automática",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    maxSize: {
      description: "Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite eventos de error.",
      control: "text",
      table: {
        category: "Validación Automática",
        type: { summary: "string" },
        defaultValue: { summary: "'10MB'" },
      },
    },
    maxFiles: {
      description: "Número máximo de archivos. El componente valida automáticamente y emite eventos de error.",
      control: "number",
      table: {
        category: "Validación Automática",
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },

    uploading: {
      description: "Estado de carga/upload en progreso. Muestra indicadores de carga.",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    uploadError: {
      description: "Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",
      control: "select",
      options: [false, true, "Error personalizado en la carga"],
      table: {
        category: "Estados",
        type: { summary: "boolean | string" },
        defaultValue: { summary: "false" },
      },
    },
    fileErrors: {
      description: "Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",
      control: "object",
      table: {
        category: "Estados",
        type: { summary: "Record<number, string>" },
        defaultValue: { summary: "{}" },
      },
    },
    fileProgress: {
      description: "Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",
      control: "object",
      table: {
        category: "Estados",
        type: { summary: "Record<number, number>" },
        defaultValue: { summary: "{}" },
      },
    },
    disabled: {
      description: "Deshabilita el componente completamente.",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    title: {
      description: "Título del componente. Solo visible en tipo 'default'.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "'Seleccionar archivo'" },
      },
    },
    uploadButtonText: {
      description: "Texto del botón de carga. Se usa en tipo 'drag-drop'.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "'Haz clic para cargar'" },
      },
    },
    uploadText: {
      description: "Texto adicional junto al botón. Solo para tipo 'drag-drop'.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "'un archivo o arrástralo aquí'" },
      },
    },
    restrictionText: {
      description: "Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    infoText: {
      description: "Texto informativo adicional. Solo para tipo 'default'.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },

    validateEvent: {
      description: "Activa la validación del formulario cuando se modifican los archivos.",
      control: "boolean",
      table: {
        category: "Formularios",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    inputId: {
      description: "ID único para los elementos internos de accesibilidad.",
      control: "text",
      table: {
        category: "Formularios",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    "onUpdate:modelValue": {
      description: "Evento emitido cuando cambian los archivos seleccionados.",
      table: {
        category: "Eventos",
      },
    },
    onChange: {
      description: "Evento emitido cuando se modifica la selección de archivos.",
      table: {
        category: "Eventos",
      },
    },
    onError: {
      description: "Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",
      table: {
        category: "Eventos",
      },
    },
    "onValidation-error": {
      description: "Evento emitido con errores de validación estructurados. Permite manejo personalizado de mensajes de error.",
      table: {
        category: "Eventos",
      },
    },
    onRetry: {
      description: "Evento emitido cuando se hace clic en reintentar después de un error.",
      table: {
        category: "Eventos",
      },
    },
    onClearProgress: {
      description: "Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",
      table: {
        category: "Eventos",
      },
    },
    onDownload: {
      description: "Evento emitido en modo download cuando se hace clic en el botón.",
      table: {
        category: "Eventos",
      },
    },

    addFiles: {
      description: "Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",
      table: {
        category: "Métodos Públicos",
        type: { summary: "(files: File[]) => void" },
      },
    },
  },
  args: {
    type: "default",
    mode: "upload",
    modelValue: [],
    multiple: true,
    acceptExtNames: [],
    maxSize: "10MB",
    maxFiles: undefined,
    uploading: false,
    uploadError: false,
    fileErrors: {},
    fileProgress: {},
    disabled: false,
    title: "Seleccionar archivo",
    uploadButtonText: "Haz clic para cargar",
    uploadText: "un archivo o arrástralo aquí",
    restrictionText: "",
    infoText: "",
    validateEvent: true,
    inputId: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof GAttachFile>;

export const Primary: Story = {
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story: "Implementación básica del componente con configuración estándar. Permite explorar todas las propiedades disponibles desde los controles."
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
</script>

<template>
  <g-attach-file 
    v-model="files"
    title="Seleccionar archivo"
    info-text="Puede cargar cualquier tipo de archivo"
  />
</template>`
      }
    }
  },
  render: (args) => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const files = ref<File[]>([]);

      return { args, files };
    },
    template: `
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `
  })
};

export const DragDrop: Story = {
  name: "Zona de Arrastre",
  parameters: {
    docs: {
      description: {
        story: "El tipo 'drag-drop' proporciona una zona de arrastre prominente, ideal cuando la carga de archivos es la acción principal de la interfaz."
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
</script>

<template>
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    :accept-ext-names="['.jpg', '.jpeg', '.png', '.gif']"
    max-size="5MB"
    upload-button-text="Seleccionar imágenes"
    upload-text=" o arrastra archivos aquí"
    restriction-text="Solo imágenes JPG, PNG o GIF hasta 5MB"
    :multiple="true"
  />
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const files = ref<File[]>([]);

      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };

      return { files, handleUpdate };
    },
    template: `
      <g-config-provider>
        <g-attach-file 
          v-model="files"
          type="drag-drop"
          :accept-ext-names="['.jpg', '.jpeg', '.png', '.gif']"
          max-size="5MB"
          upload-button-text="Seleccionar imágenes"
          upload-text=" o arrastra archivos aquí"
          restriction-text="Solo imágenes JPG, PNG o GIF hasta 5MB"
          :multiple="true"
          @update:model-value="handleUpdate"
        />
      </g-config-provider>
    `
  })
};

export const ComponentStates: Story = {
  name: "Estados del Componente",
  parameters: {
    docs: {
      description: {
        story: `
Demostración completa de todos los estados visuales disponibles en ambos tipos de visualización.

### Estados implementados:
- **Activo**: Estado inicial listo para recibir archivos
- **Cargando**: Durante el proceso de upload con indicadores de progreso  
- **Error**: Cuando ocurren fallos con retroalimentación visual clara
- **Deshabilitado**: Componente inactivo con indicadores apropiados

Cada estado proporciona retroalimentación visual clara y acciones contextualmente apropiadas.
        `
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const normalFiles = ref<File[]>([])
const uploadingFiles = ref<File[]>([/* archivos de demostración */])
const errorFiles = ref<File[]>([/* archivo con error */])
const fileErrors = ref({ 0: "Error de conexión al servidor" })

const handleRetry = () => {
  fileErrors.value = {}
}
</script>

<template>
  <g-attach-file 
    v-model="normalFiles"
    title="Seleccionar documento"
    info-text="PDF o Word, máximo 10MB"
  />

  <g-attach-file 
    v-model="uploadingFiles"
    title="Subiendo archivos..."
    :uploading="true"
    :file-progress="{ 0: 65, 1: 45 }"
  />

  <g-attach-file 
    v-model="errorFiles"
    title="Seleccionar documento"
    :file-errors="fileErrors"
    @on-retry="handleRetry"
  />

  <g-attach-file 
    title="Componente deshabilitado"
    info-text="Este campo no está disponible"
    disabled
  />
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const createMockFile = (name: string, size: number = 1024000, type: string = "application/pdf") => {
        const file = new File([""], name, { type });
        Object.defineProperty(file, "size", { value: size });
        return file;
      };

      const normalFiles = ref<File[]>([]);
      const uploadingFiles = ref<File[]>([
        createMockFile("documento1.pdf", 1024000),
        createMockFile("imagen1.jpg", 2048000, "image/jpeg")
      ]);
      const errorFiles = ref<File[]>([createMockFile("documento_error.pdf")]);
      const disabledFiles = ref<File[]>([]);

      const fileErrors = ref<Record<number, string>>({ 0: "Error de conexión al servidor" });

      const handleUpdate = (filesRef: any) => (selectedFiles: File[]) => {
        filesRef.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };

      const handleRetry = () => {
        action('onRetry')();
        errorFiles.value = [];
        fileErrors.value = {};
      };

      return { 
        normalFiles, 
        uploadingFiles, 
        errorFiles, 
        disabledFiles, 
        fileErrors,
        handleUpdate,
        handleRetry 
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Default</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="default"
                  :accept-ext-names="['.pdf', '.doc']"
                  max-size="10MB"
                  title="Seleccionar documento"
                  info-text="PDF o Word, máximo 10MB"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="default"
                  title="Subiendo archivos..."
                  :uploading="true"
                  :file-progress="{ 0: 65, 1: 45 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="default"
                  title="Seleccionar documento"
                  :upload-error="true"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="default"
                  title="Componente deshabilitado"
                  info-text="Este campo no está disponible"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Drag & Drop</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="drag-drop"
                  :accept-ext-names="['.jpg', '.png']"
                  max-size="5MB"
                  upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :uploading="true"
                  :file-progress="{ 0: 70, 1: 85 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="drag-drop"
                upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :file-errors="fileErrors"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const ValidacionesAutomaticas: Story = {
  name: "Validaciones Automáticas",
  parameters: {
    docs: {
      description: {
        story: `
Demostración del sistema de validaciones automáticas y manejo de eventos estructurados.

### Validaciones implementadas:
- **Tamaño de archivo**: Verificación contra \`maxSize\` en bytes reales
- **Tipos de archivo**: Validación de extensiones mediante \`acceptExtNames\`
- **Límite de archivos**: Control de cantidad máxima con \`maxFiles\`

### Evento validation-error
El componente emite eventos estructurados que permiten personalización completa de mensajes:

\`\`\`typescript
{
  type: 'file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded',
  file?: File,
  data: { /* información técnica específica */ }
}
\`\`\`

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar archivo .txt o .exe → Error de tipo  
- Cargar más de 2 archivos → Error de cantidad
        `
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const validationErrors = ref<string[]>([])

const handleValidationError = (errors: ValidationError[]) => {
  const customMessages = errors.map(error => {
    switch (error.type) {
      case 'file-size-exceeded':
        return \`"\${error.file?.name}" excede \${error.data?.maxSize}\`
      case 'invalid-file-type':
        const extensions = error.data?.acceptedExtensions?.join(', ')
        return \`"\${error.file?.name}" no es válido. Permitidos: \${extensions}\`
      case 'max-files-exceeded':
        return \`Solo puede agregar \${error.data?.allowedNewFiles} archivo(s) más\`
      default:
        return 'Error de validación'
    }
  })
  
  validationErrors.value = customMessages
  setTimeout(() => validationErrors.value = [], 6000)
}
</script>

<template>
  <div v-if="validationErrors.length" class="error-display">
    <h4>Errores de Validación</h4>
    <ul>
      <li v-for="error in validationErrors" :key="error">{{ error }}</li>
    </ul>
  </div>

  <g-attach-file 
    v-model="files"
    :accept-ext-names="['.pdf', '.doc', '.docx']"
    max-size="1MB"
    :max-files="2"
    title="Seleccionar documentos (validaciones activas)"
    info-text="PDF o Word, máximo 1MB y 2 archivos"
    :multiple="true"
    @validation-error="handleValidationError"
  />
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const files = ref<File[]>([]);
      const validationErrors = ref<string[]>([]);

      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        validationErrors.value = [];
        action('update:model-value')(selectedFiles);
      };

      const handleValidationError = (errors: Array<{type: string, file?: File, data?: any}>) => {
        action('validation-error')(errors);
        
        const customMessages = errors.map(error => {
          switch (error.type) {
            case 'file-size-exceeded':
              return `El archivo "${error.file?.name}" excede el tamaño máximo de ${error.data?.maxSize}`;
            case 'invalid-file-type':
              const extensions = error.data?.acceptedExtensions?.join(', ');
              return `El archivo "${error.file?.name}" no es válido. Solo se permiten: ${extensions}`;
            case 'max-files-exceeded':
              const hasAllowedFiles = error.data?.allowedNewFiles > 0;
              return hasAllowedFiles 
                ? `Se pueden agregar ${error.data?.allowedNewFiles} archivo(s) adicional(es)`
                : `Límite de ${error.data?.maxFiles} archivos alcanzado`;
            default:
              return 'Error de validación desconocido';
          }
        });
        
        validationErrors.value = customMessages;
        
        setTimeout(() => {
          validationErrors.value = [];
        }, 6000);
      };

      return { 
        files, 
        validationErrors, 
        handleUpdate, 
        handleValidationError 
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 class="text-base font-semibold text-green-900 mb-2">Validaciones Automáticas Activas</h3>
            <p class="text-sm text-green-800">
              Restricciones: Solo PDF/DOC/DOCX, máximo 1MB por archivo, máximo 2 archivos.
              Para probar las validaciones, seleccione archivos que excedan estas restricciones.
            </p>
          </div>

          <div v-if="validationErrors.length > 0" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="text-sm font-semibold text-red-900 mb-2">Errores de Validación</h4>
            <ul class="text-sm text-red-800 space-y-1">
              <li v-for="error in validationErrors" :key="error" class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                {{ error }}
              </li>
            </ul>
            <p class="text-xs text-red-600 mt-2 italic">Los errores se ocultan automáticamente en 6 segundos</p>
          </div>

          <g-attach-file 
            v-model="files"
            type="default"
            :accept-ext-names="['.pdf', '.doc', '.docx']"
            max-size="1MB"
            :max-files="2"
            title="Seleccionar documentos (con validaciones)"
            info-text="Solo PDF o Word, máximo 1MB y 2 archivos"
            :multiple="true"
            @update:model-value="handleUpdate"
            @validation-error="handleValidationError"
          />

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 class="text-sm font-semibold text-blue-900 mb-2">Estructura del Evento</h4>
            <p class="text-sm text-blue-800 mb-2">
              El evento <code>validation-error</code> incluye datos estructurados:
            </p>
            <pre class="text-xs text-blue-700 bg-blue-100 p-3 rounded overflow-x-auto"><code>// Ejemplo de error de tamaño
{
  type: 'file-size-exceeded',
  file: File, // objeto del archivo
  data: {
    maxSize: '1MB',
    actualSize: 2097152 // bytes
  }
}</code></pre>
            <p class="text-xs text-blue-600 mt-2">
              <strong>Ventaja:</strong> La implementación puede crear mensajes en cualquier idioma o formato.
            </p>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const DownloadMode: Story = {
  name: "Modo Descarga",
  parameters: {
    docs: {
      description: {
        story: `
En modo descarga, el componente cambia su comportamiento para mostrar un icono de descarga y emitir un evento 'download' en lugar de abrir el selector de archivos.

### Casos de uso:
- Descargar plantillas o documentos modelo
- Obtener archivos de referencia o ejemplos
- Exportar datos procesados o reportes

El evento \`download\` debe ser manejado por el componente padre para implementar la lógica de descarga específica según las necesidades de la aplicación.
        `
      },
      source: {
        code: `<script setup lang="ts">
import { GAttachFile } from '@flash-global66/g-attach-file'

const handleDownload = () => {
  // Implementar lógica de descarga específica
  const link = document.createElement('a')
  link.href = 'data:text/plain;charset=utf-8,Contenido del archivo'
  link.download = 'plantilla-ejemplo.txt'
  link.click()
}
</script>

<template>
  <g-attach-file 
    mode="download"
    title="Descargar plantilla"
    info-text="Haz clic para descargar el archivo de plantilla"
    @download="handleDownload"
  />
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const handleDownload = () => {
        action('download')();
        
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.';
        link.download = 'plantilla-ejemplo.txt';
        link.click();
      };

      return { handleDownload };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            mode="download"
            title="Descargar plantilla"
            info-text="Haz clic para descargar el archivo de plantilla"
            @download="handleDownload"
          />
          
          <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium text-gray-900 mb-2">Información</h4>
            <p class="text-sm text-gray-700">
              En modo descarga, el componente emite el evento <code>download</code> que debe ser manejado 
              por la implementación para ejecutar la lógica específica de descarga requerida.
            </p>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const FormIntegration: Story = {
  name: "Integración con Formularios",
  parameters: {
    docs: {
      description: {
        story: `
Implementación práctica del patrón de validación híbrida recomendado para aplicaciones empresariales.

### Arquitectura de Validación Híbrida:

1. **Validaciones técnicas automáticas**: El componente procesa automáticamente \`maxSize\`, \`acceptExtNames\` y \`maxFiles\`
2. **Validaciones de reglas de negocio**: El formulario aplica validators personalizados para lógica específica del dominio
3. **Doble capa de protección**: Retroalimentación inmediata + validación contextual completa

### Flujo de validación:
- Selección de archivos → Validación técnica inmediata
- Archivos válidos → Se integran al modelo de datos
- Envío de formulario → Validación de reglas de negocio
- Errores contextuales → Mostrados automáticamente por FormItem

Este patrón proporciona una experiencia óptima combinando usabilidad inmediata con robustez empresarial.
        `
      },
      source: {
        code: `<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GButton, GInput } from '@flash-global66/g-components'

const formRef = ref()
const formData = reactive({
  name: '',
  documents: [] as File[]
})

const rules = {
  name: [
    { required: true, message: 'El nombre es obligatorio', trigger: 'blur' },
    { min: 3, message: 'Mínimo 3 caracteres', trigger: 'blur' }
  ],
  documents: [
    { required: true, message: 'Debe adjuntar documentos', trigger: 'change' },
    {
      validator: (rule: any, files: File[], callback: any) => {
        const hasPdf = files.some(f => f.name.endsWith('.pdf'))
        if (!hasPdf) {
          callback(new Error('Debe incluir al menos un archivo PDF'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}

const validationErrors = ref<string[]>([])

const handleSubmit = async () => {
  try {
    const valid = await formRef.value.validate()
    if (valid) {
      alert('¡Documentos enviados exitosamente!')
    }
  } catch (error) {
    console.error('Error de validación:', error)
  }
}

const handleValidationError = (errors: ValidationError[]) => {
  const messages = errors.map(error => {
    switch (error.type) {
      case 'file-size-exceeded':
        return \`"\${error.file?.name}" excede \${error.data?.maxSize}\`
      case 'invalid-file-type':
        return \`"\${error.file?.name}" tipo no válido\`
      case 'max-files-exceeded':
        return \`Máximo \${error.data?.maxFiles} archivos\`
      default:
        return 'Error de validación'
    }
  })
  
  validationErrors.value = messages
  setTimeout(() => validationErrors.value = [], 5000)
}
</script>

<template>
  <div class="form-container">
    <h2>Envío de Documentos</h2>
    
    <div v-if="validationErrors.length" class="validation-errors">
      <h4>Errores de validación automática:</h4>
      <ul>
        <li v-for="error in validationErrors" :key="error">{{ error }}</li>
      </ul>
    </div>
    
    <g-form ref="formRef" :model="formData" :rules="rules">
      <g-form-item prop="name" show-message="parent">
        <g-input 
          v-model="formData.name"
          label="Nombre completo"
          placeholder="Ingrese su nombre"
        />
      </g-form-item>

      <g-form-item prop="documents" show-message="parent">
        <g-attach-file
          v-model="formData.documents"
          title="Documentos requeridos"
          info-text="PDF o imágenes, máximo 5MB cada uno"
          type="drag-drop"
          :multiple="true"
          :max-files="3"
          max-size="5MB"
          :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
          upload-button-text="Seleccionar documentos"
          upload-text=" o arrastra archivos aquí"
          @validation-error="handleValidationError"
        />
      </g-form-item>

      <div class="form-actions">
        <g-button variant="primary" @click="handleSubmit">
          Enviar Documentos
        </g-button>
        <g-button variant="secondary" @click="formRef.resetFields()">
          Limpiar
        </g-button>
      </div>
    </g-form>
  </div>
</template>`
      }
    }
  },
  render: () => ({
    components: { 
      GAttachFile, 
      GConfigProvider, 
      GForm, 
      GFormItem, 
      GButton, 
      GInput 
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        name: '',
        documents: [] as File[]
      });

      const rules = {
        name: [
          { required: true, message: 'El nombre es requerido', trigger: 'blur' },
          { min: 3, message: 'Mínimo 3 caracteres', trigger: 'blur' }
        ],
        documents: [
          { 
            required: true, 
            message: 'Debe adjuntar al menos un documento', 
            trigger: 'change' 
          },
          {
            validator: (rule: any, files: File[], callback: any) => {
              if (!files || files.length === 0) {
                callback(new Error('Los documentos son obligatorios'));
                return;
              }
              
              const hasPdf = files.some(file => file.name.toLowerCase().endsWith('.pdf'));
              if (!hasPdf) {
                callback(new Error('Debe incluir al menos un documento PDF'));
                return;
              }
              
              const hasDescriptiveName = files.every(file => {
                const name = file.name.toLowerCase();
                return name.length > 10 || 
                       name.includes('documento') || 
                       name.includes('certificado') ||
                       name.includes('comprobante');
              });
              
              if (!hasDescriptiveName) {
                callback(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));
                return;
              }
              
              callback();
            },
            trigger: 'change'
          }
        ]
      };

      const validationErrors = ref<string[]>([]);

      async function handleSubmit() {
        if (!formRef.value) return;
        
        try {
          const valid = await formRef.value.validate();
          if (valid) {
            console.log('Formulario válido:', formData);
            alert('¡Documentos enviados exitosamente!');
          }
        } catch (error) {
          console.error('Error de validación:', error);
        }
      }

      function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
        validationErrors.value = [];
      }

      const handleValidationError = (errors: Array<{type: string, file?: File, data?: any}>) => {
        action('validation-error')(errors);
        
        const messages = errors.map(error => {
          switch (error.type) {
            case 'file-size-exceeded':
              return `"${error.file?.name}" excede ${error.data?.maxSize}`;
            case 'invalid-file-type':
              return `"${error.file?.name}" tipo no válido. Solo ${error.data?.acceptedExtensions?.join(', ')}`;
            case 'max-files-exceeded':
              return `Máximo ${error.data?.maxFiles} archivos permitidos`;
            default:
              return 'Error de validación';
          }
        });
        
        validationErrors.value = messages;
        setTimeout(() => validationErrors.value = [], 5000);
      };

      return { 
        formRef,
        formData, 
        rules,
        validationErrors,
        handleSubmit, 
        handleReset,
        handleValidationError
      };
    },
    template: `
      <g-config-provider>
        <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
          <h2 class="text-xl font-bold mb-6 text-gray-900">Envío de Documentos</h2>
          
          <div v-if="validationErrors.length > 0" class="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 class="text-sm font-semibold text-red-900 mb-1">Errores de validación automática:</h4>
            <ul class="text-sm text-red-800 space-y-1">
              <li v-for="error in validationErrors" :key="error">• {{ error }}</li>
            </ul>
          </div>
          
          <g-form 
            ref="formRef" 
            :model="formData" 
            :rules="rules"
            class="space-y-4"
          >
            <g-form-item prop="name" show-message="parent">
              <g-input 
                v-model="formData.name"
                label="Nombre completo"
                placeholder="Ingrese su nombre"
              />
            </g-form-item>

            <g-form-item prop="documents" show-message="parent">
              <g-attach-file
                v-model="formData.documents"
                title="Documentos requeridos"
                info-text="PDF o imágenes, máximo 5MB cada uno y 3 archivos total"
                type="drag-drop"
                :multiple="true"
                :max-files="3"
                max-size="5MB"
                :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
                upload-button-text="Seleccionar documentos"
                upload-text=" o arrastra archivos aquí"
                restriction-text="Se requiere al menos un PDF con nombre descriptivo"
                @validation-error="handleValidationError"
              />
            </g-form-item>

            <div class="flex gap-3 pt-4">
              <g-button 
                variant="primary" 
                @click="handleSubmit"
                class="flex-1"
              >
                Enviar Documentos
              </g-button>
              <g-button 
                variant="secondary" 
                @click="handleReset"
              >
                Limpiar
              </g-button>
            </div>
          </g-form>

          <div class="mt-6 space-y-4">
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 class="font-semibold text-green-900 mb-2">Validaciones Automáticas (Componente)</h4>
              <ul class="text-sm text-green-800 space-y-1">
                <li>• Tamaño máximo: 5MB por archivo</li>
                <li>• Tipos permitidos: PDF, JPG, PNG</li>
                <li>• Cantidad máxima: 3 archivos</li>
                <li>• <strong>Feedback inmediato</strong> al seleccionar</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 class="font-semibold text-blue-900 mb-2">Validaciones de Negocio (Formulario)</h4>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• Campo obligatorio</li>
                <li>• Al menos un archivo PDF</li>
                <li>• Nombres descriptivos requeridos</li>
                <li>• <strong>Validación al enviar</strong> formulario</li>
              </ul>
            </div>

            <div class="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 class="font-semibold text-amber-900 mb-2">Patrón Híbrido Recomendado</h4>
              <p class="text-sm text-amber-800">
                <strong>Doble capa:</strong> Validación automática para UX + Reglas de negocio para lógica específica. 
                El usuario recibe feedback inmediato y validación completa al enviar.
              </p>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
};