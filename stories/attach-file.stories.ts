import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, reactive } from "vue";
import { action } from '@storybook/addon-actions';

import { GAttachFile } from "@flash-global66/g-attach-file/index.ts";
import type { ValidationError } from "@flash-global66/g-attach-file/index.ts";
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
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${version}

## Características

- Dos tipos de visualización: \`default\` (compacto) y \`drag-drop\` (arrastrar y soltar)
- Validaciones automáticas: Tamaño, tipo y cantidad de archivos
- Progreso de carga: Indicadores por archivo individual
- Integración con formularios: Compatible con validaciones híbridas
- Accesibilidad: Soporte completo para lectores de pantalla

### Instalación

\`\`\`bash
yarn add @flash-global66/g-attach-file
\`\`\`

### Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GAttachFile } from '@flash-global66/g-attach-file'

# recomendado importar en los estilos globales
import '@flash-global66/g-attach-file/attach-file.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes versiones. Puede funcionar con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

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
      description: "Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",
      control: "object",
      table: {
        category: "Validación Automática",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    maxSize: {
      description: "Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",
      control: "text",
      table: {
        category: "Validación Automática",
        type: { summary: "string | undefined" },
        defaultValue: { summary: "'10MB'" },
      },
    },
    maxFiles: {
      description: "Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",
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
    downloadUrl: {
      description: "URL del archivo para descargar. Se muestra como un link debajo del texto informativo. Solo visible en tipo 'default' cuando se proporciona junto con downloadLinkText.",
      control: "text",
      table: {
        category: "Interfaz",
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    downloadLinkText: {
      description: "Texto del enlace de descarga. Requerido junto con downloadUrl para mostrar el link. Solo visible en tipo 'default'.",
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
      description: "ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",
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
        type: { summary: "(files: File[]) => void" },
      },
    },
    onChange: {
      description: "Evento emitido cuando se modifica la selección de archivos.",
      table: {
        category: "Eventos",
        type: { summary: "(files: File[]) => void" },
      },
    },
    onError: {
      description: "Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",
      table: {
        category: "Eventos",
        type: { summary: "(error: string | Error) => void" },
      },
    },
    onValidationError: {
      description: "Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",
      table: {
        category: "Eventos",
        type: { summary: "(errors: ValidationError[]) => void" },
      },
    },
    onRetry: {
      description: "Evento emitido cuando se hace clic en reintentar después de un error.",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },
    onClearProgress: {
      description: "Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },
    onDownload: {
      description: "Evento emitido en modo download cuando se hace clic en el botón.",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },

    addFiles: {
      description: "Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",
      table: {
        category: "Métodos Públicos",
        type: { summary: "(files: File[]) => void" },
      },
    },

    "extra-content": {
      description: "Slot para agregar contenido adicional debajo de la lista de archivos. Útil para mostrar mensajes de error personalizados, información adicional o validaciones externas. Solo disponible en tipo 'default'.",
      table: {
        category: "Slots",
        type: { summary: "Slot" },
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
    downloadUrl: "",
    downloadLinkText: "",
    validateEvent: true,
    inputId: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof GAttachFile>;

export const Primary: Story = {
  name: "Básico",
  args: {
    maxSize: "",
    acceptExtNames: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."
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
    max-size=""
    :accept-ext-names="[]"
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
  name: "Arrastrar y Soltar",
  parameters: {
    docs: {
      description: {
        story: "El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"
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
    max-size=""
    :accept-ext-names="[]"
    upload-button-text="Seleccionar archivos"
    upload-text=" o arrastra aquí"
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

      const handleValidationError = (errors: ValidationError[]) => {
        action('validation-error')(errors);
      };

      const handleChange = (selectedFiles: File[]) => {
        action('change')(selectedFiles);
      };

      return { files, handleUpdate, handleValidationError, handleChange };
    },
    template: `
      <g-config-provider>
        <g-attach-file 
          v-model="files"
          type="drag-drop"
          upload-button-text="Seleccionar archivos"
          upload-text=" o arrastra aquí"
          :multiple="true"
          max-size=""
          :accept-ext-names="[]"
          @update:model-value="handleUpdate"
          @change="handleChange"
          @validation-error="handleValidationError"
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

export const FlujoCargaCompleto: Story = {
  name: "Flujo de Carga Completo",
  parameters: {
    docs: {
      description: {
        story: `
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider, GForm, GFormItem, GButton, GInput },
    setup() {
      const files = ref<File[]>([])
      const uploading = ref(false)
      const uploadError = ref(false)
      const validationErrorMsg = ref('')
      const maxFilesErrorMsg = ref('')
      const fileProgress = ref({})
      const fileErrors = ref({})
      
      const simulateUpload = async (filesArray: File[]) => {
        if (filesArray.length === 0) return
        
        uploading.value = true
        uploadError.value = false
        fileErrors.value = {}
        fileProgress.value = {}
        
        for (let i = 0; i < filesArray.length; i++) {
          fileProgress.value = { ...fileProgress.value, [i]: 0 }
        }
        
       
        const progressSteps = 20
        const stepDelay = 150 
        
        for (let step = 0; step <= progressSteps; step++) {
          await new Promise(resolve => setTimeout(resolve, stepDelay))
          
          const progressPercent = Math.round((step / progressSteps) * 100)
          
          for (let i = 0; i < filesArray.length; i++) {
            const randomVariation = Math.random() * 10 - 5
            const adjustedProgress = Math.min(100, Math.max(0, progressPercent + randomVariation))
            fileProgress.value = { ...fileProgress.value, [i]: Math.round(adjustedProgress) }
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const shouldFail = Math.random() < 0.6
        
        if (shouldFail) {
          const errorFileIndex = Math.floor(Math.random() * filesArray.length)
          const errorMessages = [
            'Error de conexión al servidor',
            'Archivo corrupto detectado',
            'Formato no soportado por el servidor',
            'Timeout en la carga'
          ]
          const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)]
          
          fileErrors.value = { [errorFileIndex]: randomError }
        } 
        
        uploading.value = false
      }
      
      function handleValidationError(errors: ValidationError[]) {
        let generalMsg = ''
        let maxFilesError = ''
        
        errors.forEach((error) => {
          if (!error) return;
          if (error.type === 'file-size-exceeded') {
            const sizeMB = Math.round((error.file?.size || 0) / (1024 * 1024) * 100) / 100
            generalMsg = `"${error.file?.name}" (${sizeMB}MB) excede el límite de ${error.data?.maxSize || '2MB'}`
          } else if (error.type === 'invalid-file-type') {
            generalMsg = `"${error.file?.name}" tipo no válido. Solo ${error.data?.acceptedExtensions?.join(', ') || 'tipos específicos'}`
          } else if (error.type === 'max-files-exceeded') {
            maxFilesError = `Máximo ${error.data?.maxFiles} archivos permitidos (intentaste subir ${error.data?.totalAttempted || 'varios'})`
          }
        })
        
        validationErrorMsg.value = generalMsg
        maxFilesErrorMsg.value = maxFilesError
      }
      
      function handleUpdate(selectedFiles: File[]) {
        console.log('📁 Archivos actualizados:', selectedFiles.length)
        files.value = selectedFiles
        
        if (selectedFiles.length >= 0) {
          validationErrorMsg.value = ''
          maxFilesErrorMsg.value = ''
        }
        
        if (selectedFiles.length > 0 && !uploading.value) {
          simulateUpload(selectedFiles)
        }
      }
      
      function handleRetry() {
        uploadError.value = false
        fileErrors.value = {}
        fileProgress.value = {}
        validationErrorMsg.value = ''
        maxFilesErrorMsg.value = ''
        
        if (files.value.length > 0) {
          simulateUpload(files.value)
        }
      }
      
      function handleClearAll() {
        files.value = []
        uploading.value = false
        uploadError.value = false
        validationErrorMsg.value = ''
        maxFilesErrorMsg.value = ''
        fileProgress.value = {}
        fileErrors.value = {}
      }
      
      return { 
        files, 
        uploading,
        uploadError,
        validationErrorMsg, 
        maxFilesErrorMsg,
        fileProgress,
        fileErrors,
        handleValidationError, 
        handleUpdate, 
        handleRetry,
        handleClearAll
      }
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <g-attach-file 
            v-model="files"
            type="default"
            max-size="2MB"
            :max-files="2"
            title="Simulador de Carga de Archivos"
            info-text="Máximo 2MB por archivo, 2 archivos total"
            :multiple="true"
            :uploading="uploading"
            :upload-error="uploadError"
            :file-progress="fileProgress"
            :file-errors="fileErrors"
            :errors="[validationErrorMsg, maxFilesErrorMsg].filter(Boolean)"
            @validation-error="handleValidationError"
            @update:model-value="handleUpdate"
            @on-retry="handleRetry"
          />
          
          <div class="flex gap-2">
            <g-button 
              @click="handleClearAll"
              class="px-4 py-2"
              :disabled="uploading"
            >
              Limpiar Todo
            </g-button>
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
 ` },
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
        </div>
      </g-config-provider>
    `
  })
};

export const DownloadLink: Story = {
  name: "Con Link de Descarga",
  parameters: {
    docs: {
      description: {
        story: `
Ejemplo del componente con un link de descarga integrado. Útil cuando se necesita proporcionar un archivo de plantilla o referencia junto con la opción de carga.

### Características:
- **downloadUrl**: URL del archivo a descargar
- **downloadLinkText**: Texto del enlace (requerido si se usa downloadUrl)
- **slot extra-content**: Permite agregar contenido adicional dentro del componente (errores, mensajes, etc.)
        `
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GIconFont } from '@flash-global66/g-icon-font'

const files = ref<File[]>([])
</script>

<template>
  <!-- Con link de descarga -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
    :accept-ext-names="['.pdf']"
    max-size="10MB"
  />

  <!-- Con slot para contenido adicional (errores) -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
  >
    <template #extra-content>
      <div class="flex items-start gap-xs">
        <g-icon-font name="solid times" class="text-error-def" />
        <div>
          <p class="font-semibold text-error-def">Documento rechazado por:</p>
          <ol class="list-decimal pl-md text-secondary-txt text-2">
            <li>Certificado de existencia superior a 30 días.</li>
            <li>El representante legal no coincide.</li>
          </ol>
        </div>
      </div>
    </template>
  </g-attach-file>
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const files = ref<File[]>([]);
      const filesWithError = ref<File[]>([]);

      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };

      return { files, filesWithError, handleUpdate };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con link de descarga</h4>
            <g-attach-file 
              v-model="files"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con slot de errores de validación</h4>
            <g-attach-file 
              v-model="filesWithError"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
            >
              <template #extra-content>
                <div class="flex items-start gap-2">
                  <span class="text-red-500 text-lg">✕</span>
                  <div>
                    <p class="font-semibold text-red-700">Documento rechazado por:</p>
                    <ol class="list-decimal pl-5 text-gray-700 text-sm mt-1 space-y-1">
                      <li>Certificado de existencia superior a 30 días.</li>
                      <li>Certificado de existencia incorrecto. El representante legal del Certificado de existencia no coincide con el representante legal de quien hizo el registro.</li>
                    </ol>
                  </div>
                </div>
              </template>
            </g-attach-file>
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Sin link de descarga (comportamiento normal)</h4>
            <g-attach-file 
              v-model="files"
              title="Documento adicional"
              info-text="Adjunta cualquier documento relevante."
              :accept-ext-names="['.pdf', '.doc', '.docx']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
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
        story: `Integración del componente GAttachFile con GForm y validaciones de formulario.`
      },
      source: {
        code: `<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'

const formRef = ref()
const formData = reactive({
  name: '',
  documents: [] as File[]
})

const rules = {
  name: [
    { required: true, message: 'El nombre es requerido', trigger: 'blur' }
  ],
  documents: [
    { required: true, message: 'Debe adjuntar documentos', trigger: 'change' }
  ]
}

const handleSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    alert('¡Documentos enviados exitosamente!')
  }
}
</script>

<template>
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
        type="drag-drop"
        :multiple="true"
        :max-files="3"
        max-size="5MB"
        :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
        upload-button-text="Seleccionar documentos"
        upload-text=" o arrastra archivos aquí"
      />
    </g-form-item>

    <g-button variant="primary" @click="handleSubmit">
      Enviar Documentos
    </g-button>
  </g-form>
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

      const handleValidationError = (errors: ValidationError[]) => {
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
        </div>
      </g-config-provider>
    `
  })
};

export const AddFilesMethod: Story = {
  name: "Método addFiles",
  parameters: {
    docs: {
      description: {
        story: `Método  \`addFiles\` que permite agregar archivos programáticamente al componente.`
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const attachFileRef = ref()

const addMockFiles = () => {
  // Crear archivos de ejemplo
  const mockFiles = [
    new File(['contenido'], 'documento1.pdf', { type: 'application/pdf' }),
    new File(['contenido'], 'imagen1.jpg', { type: 'image/jpeg' })
  ]
  
  // Usar el método addFiles para agregar los archivos
  attachFileRef.value?.addFiles(mockFiles)
}
</script>

<template>
  <g-attach-file 
    ref="attachFileRef"
    v-model="files"
    title="Agregar archivos programáticamente"
    :accept-ext-names="['.pdf', '.jpg', '.png']"
    max-size="5MB"
    :max-files="3"
  />
  
  <g-button @click="addMockFiles">
    Agregar archivos de ejemplo
  </g-button>
</template>`
      }
    }
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider, GButton },
    setup() {
      const files = ref<File[]>([])
      const attachFileRef = ref()
      
      const addMockFiles = () => {
        const mockFiles = [
          new File(['contenido PDF de ejemplo'], 'documento-ejemplo.pdf', { type: 'application/pdf' }),
          new File(['contenido imagen de ejemplo'], 'imagen-ejemplo.jpg', { type: 'image/jpeg' })
        ]
        
        Object.defineProperty(mockFiles[0], 'size', { value: 1024 * 500 })
        Object.defineProperty(mockFiles[1], 'size', { value: 1024 * 800 })
        
        if (attachFileRef.value?.addFiles) {
          attachFileRef.value.addFiles(mockFiles)
        }
      }
      
      const addSingleFile = () => {
        const singleFile = new File(['contenido de texto'], 'nota.txt', { type: 'text/plain' })
        Object.defineProperty(singleFile, 'size', { value: 1024 * 100 })
        
        if (attachFileRef.value?.addFiles) {
          attachFileRef.value.addFiles([singleFile])
        }
      }
      
      const clearFiles = () => {
        files.value = []
      }

      return { 
        files, 
        attachFileRef, 
        addMockFiles, 
        addSingleFile,
        clearFiles
      }
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            ref="attachFileRef"
            v-model="files"
            title="Agregar archivos programáticamente"
            info-text="Usa los botones de abajo para agregar archivos sin selector"
            :accept-ext-names="['.pdf', '.jpg', '.png', '.txt']"
            max-size="5MB"
            :max-files="3"
            :multiple="true"
          />
          
          <div class="flex gap-2 flex-wrap">
            <g-button @click="addMockFiles" variant="primary">
              Agregar 2 archivos
            </g-button>
            
            <g-button @click="addSingleFile" variant="secondary">
             Agregar 1 archivo
            </g-button>
            
            <g-button @click="clearFiles" variant="tertiary">
               Limpiar
            </g-button>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium text-gray-900 mb-2">Información</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>addFiles()</strong> aplica todas las validaciones automáticas</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `
  })
};