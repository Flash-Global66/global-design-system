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
El componente Attach File permite a los usuarios subir archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (por defecto) y drag-drop (arrastrar y soltar).

> Versión actual: ${version}

## Características

- **Dos tipos de visualización**: 'default' (por defecto) y 'drag-drop'
- **Estados visuales claros**: idle, uploading, uploaded, error
- **Soporte para arrastrar y soltar** archivos (tipo dropzone)
- **Selección de archivos mediante clic**
- **Barras de progreso** durante la carga
- **Validación de tipos de archivo** y tamaño
- **Estados deshabilitado y de error**
- **Interfaz responsiva y accesible**

## Tipos disponibles

### Tipo "default" (por defecto)
- **Diseño compacto**: Ideal para formularios y espacios reducidos
- **Estados claros**: Inicial, cargando, éxito y error con indicadores visuales
- **Interfaz horizontal**: Título + información + botón en línea

### Tipo "drag-drop"
- **Área de arrastre prominente**: Zona visual amplia para arrastrar archivos
- **Funcionalidad destacada**: Ideal cuando subir archivos es la acción principal
- **Lista externa**: Archivos mostrados fuera del área de arrastre

### Instalación

\`\`\`bash
yarn add @flash-global66/attach-file
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GAttachFile } from '@flash-global66/attach-file'

# recomendado importar en los estilos globales
import '@flash-global66/attach-file/attach-file.styles.scss'
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

### Ejemplo de uso

\`\`\`ts
<script setup lang="ts">
import { GAttachFile } from '@flash-global66/attach-file';
import { ref } from 'vue';

const files = ref<File[]>([]);
</script>

<template>
  <!-- Tipo default (por defecto) -->
  <g-attach-file 
    v-model="files"
    type="default"
    :accept-ext-names="['.pdf','.doc','.docx']"
    max-size="10MB"
    title="Seleccionar documento"
    info-text="Archivos PDF o Word, máximo 10MB"
  />

  <!-- Tipo drag-drop -->
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    :accept-ext-names="['.jpg','.jpeg','.png']"
    max-size="2MB"
    upload-button-text="Seleccionar imágenes"
    upload-text=" o arrastra archivos aquí"
  />
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {

    type: {
      description: "Tipo de visualización del componente",
      control: "select",
      options: ["default", "drag-drop"],
      table: {
        type: { summary: "'default' | 'drag-drop'" },
        defaultValue: { summary: "'default'" },
      },
    },
    mode: {
      description: "Modo de funcionamiento del componente",
      control: "select",
      options: ["upload", "download"],
      table: {
        type: { summary: "'upload' | 'download'" },
        defaultValue: { summary: "'upload'" },
      },
    },
    modelValue: {
      description: "Array de archivos seleccionados",
      control: "object",
      table: {
        type: { summary: "File[]" },
        defaultValue: { summary: "[]" },
      },
    },

    acceptExtNames: {
      description: "Array de extensiones de archivo permitidas",
      control: "object",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    maxSize: {
      description: "Tamaño máximo de archivo en formato legible (ej: '10MB', '500KB', '1.5GB')",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'10MB'" },
      },
    },
    maxFiles: {
      description: "Número máximo de archivos permitidos",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    multiple: {
      description: "Permite seleccionar múltiples archivos",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    uploading: {
      description: "Estado de carga/upload en progreso",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    uploadProgress: {
      description: "Progreso de upload (0-100)",
      control: { type: "range", min: 0, max: 100, step: 1 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    uploadError: {
      description: "Mensaje de error del backend/servidor",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    disabled: {
      description: "Deshabilita el componente",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    title: {
      description: "Título del componente (solo para tipo default)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'Seleccionar archivo'" },
      },
    },
    uploadButtonText: {
      description: "Texto del botón de carga (para tipo drag-drop). Para el tipo default, usar la propiedad title.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'Haz clic para cargar'" },
      },
    },
    uploadText: {
      description: "Texto adicional junto al botón (solo tipo dropzone)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'un archivo o arrástralo aquí'" },
      },
    },
    restrictionText: {
      description: "Texto personalizado de restricciones (para tipo drag-drop)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    infoText: {
      description: "Texto personalizado de información adicional (solo para tipo default)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    validateEvent: {
      description: "Activa la validación del formulario cuando se agregan o eliminan archivos",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    inputId: {
      description: "ID único para los elementos internos de accesibilidad. Se usa para generar IDs únicos para aria-describedby y evitar conflictos cuando hay múltiples componentes en la misma página",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accesibilidad"
      },
    },
    id: {
      description: "ID único para el elemento raíz del componente. Se utiliza principalmente para integración con formularios y referencias externas",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Formularios"
      },
    },
    "onUpdate:modelValue": {
      description: "Evento emitido cuando cambian los archivos seleccionados",
      table: {
        category: "Eventos",
      },
    },
    onChange: {
      description: "Evento emitido cuando se modifica la selección de archivos",
      table: {
        category: "Eventos",
      },
    },
    onError: {
      description: "Evento emitido cuando hay errores de validación",
      table: {
        category: "Eventos",
      },
    },
    onRetry: {
      description: "Evento emitido cuando se hace clic en reintentar después de un error de backend",
      table: {
        category: "Eventos",
      },
    },
    default: {
      description: "Contenido personalizado.",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
    },
  },
  args: {
    type: "default",
    acceptExtNames: [],
    maxSize: "",
    multiple: true,
    uploading: false,
    uploadProgress: 0,
    uploadError: "",
    disabled: false,
    title: "Seleccionar archivo",
    uploadButtonText: "Haz clic para cargar",
    uploadText: "un archivo o arrástralo aquí",
    restrictionText: "",
    infoText: "Puede subir cualquier tipo de archivo",
    modelValue: [],
    validateEvent: true,
    id: "",
  },
};

export default meta;
type Story = StoryObj<typeof GAttachFile>;

export const Primary: Story = {
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo básico del componente Attach File sin restricciones de tipo de archivo o tamaño. Desde los controles puedes probar todas las propiedades disponibles.",
      },
      source: {
        code: `
<g-attach-file 
  v-model="files"
  type="default"
  title="Seleccionar archivo"
  info-text="Puede subir cualquier tipo de archivo"
  @update:model-value="handleUpdate"
/>
`, language: 'html'
      }
    },
  },
  render: (args) => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const files = ref<File[]>([]);

      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };

      return { args, files, handleUpdate };
    },
    template: `
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
          @update:model-value="handleUpdate"
        />
      </g-config-provider>
    `,
  }),
};

export const WithInfoText: Story = {
  name: "Con texto informativo",
  parameters: {
    docs: {
      description: {
        story: "El componente puede incluir texto de información personalizado para mejorar la comprensión del usuario.",
      },
      source: {
        code: `
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  info-text="Solo PDF o Word, máximo 10MB"
  title="Seleccionar documento"
/>
`, language: "html",
      },
    },
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
          type="default"
          :accept-ext-names="['.pdf','.doc','.docx']"
          max-size="10MB"
          info-text="Solo PDF o Word, máximo 10MB"
          title="Seleccionar documento"
          @update:model-value="handleUpdate"
        />
      </g-config-provider>
    `,
  }),
};

export const States: Story = {
  name: "Estados",
  parameters: {
    docs: {
      description: {
        story:
          "El componente Attach File tiene varios estados que representan diferentes situaciones de uso: normal, carga en progreso (múltiples archivos y archivo único), error y deshabilitado.",
        source: {
          code: `
<!-- Estado normal -->
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  info-text="Max. 10MB, PDF o Word"
  title="Seleccionar documento"
/>

<!-- Estado de carga en progreso (múltiples archivos) -->
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  title="Seleccionar documento"
  :uploading="true"
  :upload-progress="60"
  :multiple="true"
/>

<!-- Estado de carga en progreso (archivo único) -->
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  title="Subiendo documento"
  info-text="Por favor espere mientras se sube el archivo"
  :uploading="true"
  :upload-progress="75"
  :multiple="false"
/>

<!-- Estado de error -->
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  title="Seleccionar documento"
  upload-error="Error al subir el archivo. Intente nuevamente."
/>

<!-- Estado deshabilitado -->
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  title="Seleccionar documento"
  disabled
/>
`,
          language: "html",
        },
      },
    },
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const createMockFile = (name, size) => {
        const file = new File([""], name, { type: "application/pdf" });
        Object.defineProperty(file, "size", { value: size });
        return file;
      };

      const files1 = ref([]);
      const files2 = ref([
        createMockFile("ejemplo1.pdf", 1024000),
        createMockFile("ejemplo2.doc", 2048000),
        createMockFile("ejemplo3.docx", 3072000),
      ]);
      const files3 = ref([createMockFile("documento_con_error.pdf", 2048000)]);
      const files4 = ref([]);
      const files5 = ref([createMockFile("contrato-importante.pdf", 2048000)]);

      const handleUpdate = (index) => (selectedFiles) => {
        if (index === 1) files1.value = selectedFiles;
        else if (index === 2) files2.value = selectedFiles;
        else if (index === 3) files3.value = selectedFiles;
        else if (index === 4) files4.value = selectedFiles;
        else if (index === 5) files5.value = selectedFiles;
      };

      return { files1, files2, files3, files4, files5, handleUpdate };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-semibold mb-2">Estado normal</h3>
            <g-attach-file 
              v-model="files1"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              info-text="Max. 10MB, PDF o Word"
              title="Seleccionar documento"
              @update:model-value="handleUpdate(1)"
            />
          </div>

          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga en progreso (múltiples archivos)</h3>
            <g-attach-file 
              v-model="files2"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              title="Seleccionar documento"
              :uploading="true"
              :upload-progress="60"
              :multiple="true"
              @update:model-value="handleUpdate(2)"
            />
          </div>

          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga en progreso (archivo único)</h3>
            <g-attach-file 
              v-model="files5"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              title="Subiendo documento"
              info-text="Por favor espere mientras se sube el archivo"
              :uploading="true"
              :upload-progress="75"
              :multiple="false"
              @update:model-value="handleUpdate(5)"
            />
          </div>

          <div>
            <h3 class="text-base font-semibold mb-2">Estado de error</h3>
            <g-attach-file 
              v-model="files3"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              title="Seleccionar documento"
              upload-error="Error al subir el archivo. Intente nuevamente."
              @update:model-value="handleUpdate(3)"
            />
          </div>

          <div>
            <h3 class="text-base font-semibold mb-2">Estado deshabilitado</h3>
            <g-attach-file 
              v-model="files4"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              title="Seleccionar documento"
              disabled
              @update:model-value="handleUpdate(4)"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DragDrop: Story = {
  name: "Tipo Drag & Drop",
  parameters: {
    docs: {
      description: {
        story: "El componente Attach File ofrece una visualización alternativa tipo 'drag-drop' ideal para situaciones donde se quiere destacar la funcionalidad de arrastrar y soltar.",
      },
      source: {
        code: `
<g-attach-file 
  v-model="files"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Seleccionar imágenes"
  upload-text=" o arrastra archivos aquí"
/>
`, language: 'html'
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
        <div class="space-y-4">
          <p class="text-sm text-gray-600">
            El tipo drag-drop proporciona una interfaz más visual y prominente para la carga de archivos, ideal para situaciones donde la subida de archivos es la acción principal.
          </p>
          
          <g-attach-file 
            v-model="files"
            type="drag-drop"
            :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
            max-size="10MB"
            upload-button-text="Seleccionar imágenes"
            upload-text=" o arrastra archivos aquí"
            :multiple="true"
            @update:model-value="handleUpdate"
          />
        </div>
      </g-config-provider>
    `
  })
};

export const DragDropStates: Story = {
  name: "Drag & Drop Estados",
  parameters: {
    docs: {
      description: {
        story:
          "El componente Attach File en modo drag-drop también tiene varios estados que representan diferentes situaciones de uso: normal, carga en progreso, error y deshabilitado.",
      },
      source: {
        code: `
<!-- Estado normal -->
<g-attach-file 
  v-model="files"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Seleccionar imágenes"
  upload-text=" o arrastra archivos aquí"
/>

<!-- Estado de carga en progreso -->
<g-attach-file 
  v-model="files"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Seleccionar imágenes"
  upload-text=""
  :uploading="true"
  :upload-progress="60"
  :multiple="true"
/>

<!-- Nota: Para demostrar el estado de carga, se incluyen archivos de ejemplo:
     imagen1.jpg, imagen2.png, imagen3.gif con diferentes tamaños -->

<!-- Estado de error -->
<g-attach-file 
  v-model="files"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Seleccionar imágenes"
  upload-text=" o arrastra archivos aquí"
  upload-error="Error al subir el archivo. Intente nuevamente."
/>

<!-- Estado deshabilitado -->
<g-attach-file 
  v-model="files"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Seleccionar imágenes"
  upload-text=" o arrastra archivos aquí"
  disabled
/>
`,
        language: "html",
      },
    },
  },
  render: () => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const createMockFile = (name: string, size: number = 1024000) => {
        const file = new File([""], name, { type: "image/jpeg" });
        Object.defineProperty(file, "size", { value: size });
        return file;
      };

      const files1 = ref<File[]>([]);

      const files2 = ref<File[]>([
        createMockFile("imagen1.jpg", 1024000),
        createMockFile("imagen2.png", 2048000),
        createMockFile("imagen3.gif", 1536000),
      ]);

      const files3 = ref<File[]>([createMockFile("foto-error.jpg")]);
      const files4 = ref<File[]>([]);

      const handleUpdate = (index: number) => (selectedFiles: File[]) => {
        if (index === 1) files1.value = selectedFiles;
        else if (index === 2) files2.value = selectedFiles;
        else if (index === 3) files3.value = selectedFiles;
        else if (index === 4) files4.value = selectedFiles;

        action("update:model-value")(selectedFiles);
      };

      const handleError = (errors: string[]) => {
        action("error")(errors);
      };

      const handleRetry = () => {
        action("retry")();
        files3.value = [];
      };

      return {
        files1,
        files2,
        files3,
        files4,
        handleUpdate,
        handleError,
        handleRetry,
      };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <div>
            <h3 class="text-base font-semibold mb-2">Estado normal</h3>
            <p class="text-sm text-gray-500 mb-2">Estado predeterminado del componente con funcionalidad completa.</p>
            <g-attach-file 
              v-model="files1"
              type="drag-drop"
              :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
              max-size="10MB"
              upload-button-text="Seleccionar imágenes"
              upload-text=" o arrastra archivos aquí"
              :multiple="true"
              @update:model-value="handleUpdate(1)"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga en progreso</h3>
            <p class="text-sm text-gray-500 mb-2">Se muestra cuando se está subiendo un archivo al servidor.</p>
           <g-attach-file 
  v-model="files2"
  type="drag-drop"
  :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
  max-size="10MB"
  upload-button-text="Subiendo archivos..."
  upload-text=""
  :uploading="true"
  :upload-progress="60"
  :multiple="true"
  @update:model-value="handleUpdate(2)"
/>
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de error</h3>
            <p class="text-sm text-gray-500 mb-2">Se muestra cuando hay un error durante la subida del archivo.</p>
            <g-attach-file 
              v-model="files3"
              type="drag-drop"
              :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
              max-size="10MB"
              upload-button-text="Seleccionar imágenes"
              upload-text=" o arrastra archivos aquí"
              upload-error="Error al subir las imágenes. Intente nuevamente."
              :multiple="true"
              @update:model-value="handleUpdate(3)"
              @error="handleError"
              @retry="handleRetry"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado deshabilitado</h3>
            <p class="text-sm text-gray-500 mb-2">El componente no permite interacción cuando está deshabilitado.</p>
            <g-attach-file 
              v-model="files4"
              type="drag-drop"
              :accept-ext-names="['.jpg','.jpeg','.png','.gif']"
              max-size="10MB"
              upload-button-text="Seleccionar imágenes"
              upload-text=" o arrastra archivos aquí"
              disabled
              :multiple="true"
              @update:model-value="handleUpdate(4)"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Restrictions: Story = {
  name: "Restricciones",
  parameters: {
    docs: {
      description: {
        story: "El componente permite definir restricciones para los archivos como extensiones permitidas, tamaño máximo y número máximo de archivos.",
      },
      source: {
        code: `
<g-attach-file 
  v-model="files"
  type="default"
  :accept-ext-names="['.pdf','.doc','.docx']"
  max-size="10MB"
  :max-files="2"
  title="Seleccionar documento"
  info-text="Solo PDF o Word, máximo 10MB y 2 archivos"
  :multiple="true"
/>

<!-- Para el tipo 'default', usar info-text en lugar de restriction-text -->
<!-- El texto aparece en todos los estados (default, loading, success, error) -->
`, language: 'html'
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
      
      const handleError = (errors: string[]) => {
        action('error')(errors);
      };

      const handleRetry = () => {
        action('retry')();
      };

      return { files, handleUpdate, handleError, handleRetry };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Restricciones personalizadas</h3>
            <p class="text-sm text-gray-600 mb-4">
              Este ejemplo muestra cómo configurar restricciones específicas para los archivos.
              <br>
              - Solo permite archivos PDF y Word (.pdf, .doc, .docx)
              - Tamaño máximo de 10MB por archivo
              - Máximo 2 archivos permitidos
              - Texto de información personalizado que aparece en todos los estados del componente
            </p>
            
            <g-attach-file 
              v-model="files"
              type="default"
              :accept-ext-names="['.pdf','.doc','.docx']"
              max-size="10MB"
              :max-files="2"
              title="Seleccionar documento"
              info-text="Solo PDF o Word, máximo 10MB y 2 archivos"
              :multiple="true"
              @update:model-value="handleUpdate"
              @error="handleError"
              @retry="handleRetry"
            />
          </div>
          
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">¿Cómo funcionan las restricciones?</h3>
            <ol class="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>accept-ext-names:</strong> Define las extensiones de archivo permitidas como array de strings</li>
              <li><strong>max-size:</strong> Establece el tamaño máximo por archivo en formato legible (ej: '10MB')</li>
              <li><strong>max-files:</strong> Limita el número total de archivos que se pueden seleccionar</li>
              <li><strong>info-text:</strong> Para el tipo 'default', personaliza el texto de información adicional que aparece en todos los estados</li>
              <li><strong>restriction-text:</strong> Para el tipo 'drag-drop', personaliza el texto de las restricciones que aparece en el área de arrastre</li>
              <li>Si un archivo no cumple con las restricciones, se emitirá un evento <code>error</code> con el mensaje correspondiente</li>
            </ol>
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
El componente puede funcionar en modo descarga, donde el botón muestra un icono de descarga y emite un evento 'download' en lugar de abrir el selector de archivos.

### Casos de uso:
- Descargar plantillas o documentos modelo
- Obtener archivos de ejemplo
- Exportar datos o reportes

**Nota**: El evento \`download\` debe ser manejado por el componente padre para implementar la lógica de descarga específica.
        `,
      },
      source: {
        code: `
<g-attach-file 
  mode="download"
  title="Descargar plantilla"
  info-text="Haz clic para descargar el archivo de plantilla"
  @download="handleDownload"
/>

<script setup>
function handleDownload() {
  console.log('Descargando archivo...');
  
  const link = document.createElement('a');
  link.href = '/path/to/template.pdf';
  link.download = 'plantilla.pdf';
  link.click();
}
</script>
`, language: 'html'
      }
    },
  },
  render: (args) => ({
    components: { GAttachFile, GConfigProvider },
    setup() {
      const handleDownload = () => {
        action('download')();
        
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.';
        link.download = 'ejemplo-plantilla.txt';
        link.click();
        
        console.log('Archivo descargado exitosamente');
      };

      return { 
        args: {
          ...args,
          mode: 'download',
          title: 'Descargar plantilla',
          infoText: 'Haz clic para descargar el archivo de plantilla'
        }, 
        handleDownload 
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            v-bind="args"
            @download="handleDownload"
          />
          
          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">💡 Ejemplo de implementación</h4>
            <p class="text-sm text-blue-800">
              En modo descarga, el componente emite el evento <code>download</code> que debe ser manejado 
              por el componente padre para implementar la lógica específica de descarga.
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
El componente Attach File se integra perfectamente con el sistema de formularios, proporcionando validación automática y manejo de errores.

## Características de la integración:

- **Validación automática**: Se ejecuta cuando se añaden o eliminan archivos (prop \`validateEvent\`)
- **Errores combinados**: Muestra errores del formulario junto con errores propios del componente
- **Integración con FormItem**: Respeta las reglas de validación definidas en el formulario
- **Estados de error**: El componente refleja visualmente los errores de validación

## Reglas de validación personalizadas:

\`\`\`typescript
const rules = {
  documents: [
    { 
      required: true, 
      message: 'Debe cargar al menos un documento', 
      trigger: 'change' 
    },
    {
      validator: (rule: any, value: File[], callback: any) => {
        if (!value || value.length === 0) {
          callback(new Error('Los documentos son obligatorios'));
        } else if (value.length > 3) {
          callback(new Error('Máximo 3 documentos permitidos'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ]
};
\`\`\`

Este ejemplo muestra un formulario de apertura de cuenta que requiere documentos obligatorios con validaciones específicas.
        `
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
        fullName: '',
        email: '',
        documents: [] as File[],
        identity: [] as File[]
      });

      const rules = {
        fullName: [
          { required: true, message: 'El nombre completo es requerido', trigger: 'blur' },
          { min: 3, message: 'El nombre debe tener al menos 3 caracteres', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'El email es requerido', trigger: 'blur' },
          { type: 'email', message: 'Ingrese un email válido', trigger: 'blur' }
        ],
        documents: [
          { 
            required: true, 
            message: 'Debe cargar al menos un documento financiero', 
            trigger: 'change' 
          },
          {
            validator: (rule: any, value: File[], callback: any) => {
              if (!value || value.length === 0) {
                callback(new Error('Los documentos financieros son obligatorios'));
              } else if (value.length > 3) {
                callback(new Error('Máximo 3 documentos permitidos'));
              } else {
                callback();
              }
            },
            trigger: 'change'
          }
        ],
        identity: [
          { 
            required: true, 
            message: 'El documento de identidad es obligatorio', 
            trigger: 'change' 
          },
          {
            validator: (rule: any, value: File[], callback: any) => {
              if (!value || value.length === 0) {
                callback(new Error('Debe cargar su documento de identidad'));
              } else if (value.length > 1) {
                callback(new Error('Solo se permite un documento de identidad'));
              } else {
                const file = value[0];
                const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
                console.log('Validando tipo de archivo:', file.type);
                if (!validTypes.includes(file.type)) {
                  callback(new Error('El documento debe ser un archivo PDF o imagen (JPG, PNG)'));
                } else {
                  callback();
                }
              }
            },
            trigger: 'change'
          }
        ]
      };

      async function handleSubmit() {
        if (!formRef.value) return;
        
        try {
          const valid = await formRef.value.validate();
          if (valid) {
            console.log('✅ Formulario válido:', formData);
            alert('¡Solicitud de apertura de cuenta enviada exitosamente!');
          } else {
            console.log('❌ Formulario inválido');
          }
        } catch (error) {
          console.error('Error de validación:', error);
        }
      }

      function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }

      function handleDocumentsChange(files: File[]) {
        formData.documents = files;
        action('documents-change')(files);
      }

      function handleIdentityChange(files: File[]) {
        formData.identity = files;
        action('identity-change')(files);
      }

      function handleError(errors: string[]) {
        action('error')(errors);
        console.warn('Errores de validación:', errors);
      }

      return { 
        formRef,
        formData, 
        rules,
        handleSubmit, 
        handleReset,
        handleDocumentsChange,
        handleIdentityChange,
        handleError
      };
    },
    template: `
      <g-config-provider>
        <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
          <h2 class="text-2xl font-bold mb-6 text-gray-900">Apertura de Cuenta</h2>
          
          <g-form 
            ref="formRef" 
            :model="formData" 
            :rules="rules"
            class="space-y-6"
          >
            <!-- Información Personal -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-800">Información Personal</h3>
              
              <g-form-item prop="fullName" show-message="parent">
                <g-input 
                  v-model="formData.fullName"
                  label="Nombre Completo"
                  placeholder="Ingrese su nombre completo"
                  prefix-icon="regular user"
                />
              </g-form-item>
              
              <g-form-item prop="email" show-message="parent">
                <g-input 
                  v-model="formData.email"
                  label="Email"
                  placeholder="ejemplo@correo.com"
                  prefix-icon="regular envelope"
                />
              </g-form-item>
            </div>

            <!-- Documentos Requeridos -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-800">Documentos Requeridos</h3>

              <!-- Documento de Identidad -->
              <g-form-item prop="identity" show-message="parent">
                <g-attach-file
                  v-model="formData.identity"
                  title="Documento de Identidad"
                  info-text="Suba su documento de identidad en formato PDF o imagen (JPG, PNG)"
                  type="default"
                  :multiple="false"
                  :accept-ext-names="['pdf','jpg','jpeg','png']"
                  max-size="10MB"
                  :validate-event="true"
                  @change="handleIdentityChange"
                  @error="handleError"
                />
              </g-form-item>

              <!-- Documentos Adicionales -->
              <g-form-item prop="documents" show-message="parent">
                <g-attach-file
                  v-model="formData.documents"
                  title="Documentos Financieros"
                  info-text="Comprobantes de ingresos, estados de cuenta, referencias bancarias (máximo 3 archivos)"
                  type="drag-drop"
                  :multiple="true"
                  :max-files="3"
                  max-size="10MB"
                  :accept-ext-names="['pdf','doc','docx','jpg','jpeg','png']"
                  :validate-event="true"
                  upload-text="Arrastra y suelta tus documentos financieros aquí"
                  upload-button-text="Seleccionar documentos"
                  restriction-text="PDF, Word, JPG, PNG hasta 10MB"
                  @change="handleDocumentsChange"
                  @error="handleError"
                />
              </g-form-item>
            </div>

            <!-- Botones de acción -->
            <div class="flex gap-4 pt-6 border-t">
              <g-button 
                variant="primary" 
                @click="handleSubmit"
                class="flex-1"
              >
                Enviar Solicitud de Apertura
              </g-button>
              <g-button 
                variant="secondary" 
                @click="handleReset"
              >
                Limpiar Formulario
              </g-button>
            </div>
          </g-form>

          <!-- Información adicional -->
          <div class="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">💡 Integración con Formularios</h4>
            <ul class="text-sm text-blue-800 space-y-1">
              <li>• <strong>Validación automática:</strong> Los errores se muestran al agregar/quitar archivos</li>
              <li>• <strong>Errores combinados:</strong> Se muestran errores del formulario y del componente</li>
              <li>• <strong>validateEvent:</strong> Controla si se dispara validación en eventos change</li>
              <li>• <strong>showMessage:</strong> Configura dónde mostrar mensajes de error (parent/child/none)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `
  })

};