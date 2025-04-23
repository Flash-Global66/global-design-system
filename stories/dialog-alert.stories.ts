import { StoryFn, Meta } from "@storybook/vue3";
import { ref } from "vue";

import DialogAlert from "../components/dialog-alert/dialog-alert.vue";
import { GButton } from "@flash-global66/g-button";
import { GConfigProvider } from "../components/config-provider";
import { GImage } from "@flash-global66/g-image";
import { version } from '../components/dialog-alert/package.json';

export default {
  title: "Data/Dialog Alert",
  component: DialogAlert,
  decorators: [
    (story) => ({
      components: { story, GConfigProvider },
      template: `<GConfigProvider><story /></GConfigProvider>`,
    }),
  ],
  argTypes: {
    showAlert: {
      control: "boolean",
      description: "Controla la visibilidad del dialog alert",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    type: {
      control: "select",
      options: ["success", "error", "warning", "info", "important"],
      description: "Tipo de alerta que determina los estilos y la imagen predeterminada",
      table: {
        defaultValue: { summary: "info" },
      },
    },
    title: {
      control: "text",
      description: "Título de la alerta",
      table: {
        defaultValue: { summary: "" },
      },
    },
    description: {
      control: "text",
      description: "Mensaje principal de la alerta",
      table: {
        defaultValue: { summary: "" },
      },
    },
    imageName: {
      control: "text",
      description: "Nombre de la imagen a mostrar (sobrescribe la imagen predeterminada del tipo)",
      table: {
        defaultValue: { summary: "" },
      },
    },
    imageSize: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "Tamaño de la imagen",
      table: {
        defaultValue: { summary: "lg" },
      },
    },
    primaryText: {
      control: "text",
      description: "Texto del botón principal",
      table: {
        defaultValue: { summary: "" },
      },
    },
    secondaryText: {
      control: "text",
      description: "Texto del botón secundario",
      table: {
        defaultValue: { summary: "" },
      },
    },
    reverseButtons: {
      control: "boolean",
      description: "Invierte el orden de los botones",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    hideButtonClose: {
      control: "boolean",
      description: "Oculta el botón de cerrar (X) en la esquina superior",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    'onClose': {
      description: 'Se emite cuando se cierra la alerta',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' }
      }
    },
    'onNext': {
      description: 'Se emite cuando se hace clic en alguno de los botones',
      table: {
        category: 'Eventos',
        type: { summary: '(action: { isPrimary: boolean, isSecondary: boolean }) => void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
Proporciona una manera programática de mostrar alertas y diálogos 
de confirmación sin necesidad de configurar providers.

> Versión actual: ${version}

## Características principales
- API programática para mostrar alertas desde cualquier parte de la aplicación
- 5 tipos predefinidos: success, error, warning, info, important
- Soporte para personalización de imágenes
- Opciones para uno o dos botones de acción

## Instalación

\`\`\`bash
yarn add @flash-global66/g-dialog-alert
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/g-dialog
- @flash-global66/g-button
- @flash-global66/g-image

## Uso básico

\`\`\`js
import { openAlert } from '@flash-global66/g-dialog-alert';

// Mostrar una alerta de éxito
openAlert({
  type: 'success',
  title: 'Operación completada',
  description: 'Los cambios han sido guardados correctamente',
  primaryText: 'Aceptar'
}).then(result => {
  if (result.isPrimary) {
    // Usuario hizo clic en el botón primario (Aceptar)
  }
});

// Mostrar una alerta de confirmación con dos botones
openAlert({
  type: 'warning',
  title: 'Confirmar acción',
  description: '¿Está seguro que desea eliminar este registro?',
  primaryText: 'Sí, eliminar',
  secondaryText: 'No, cancelar'
}).then(result => {
  if (result.isPrimary) {
    // Usuario confirmó la acción (Sí, eliminar)
  } else if (result.isSecondary) {
    // Usuario canceló la acción (No, cancelar)
  }
});
\`\`\`
`,
      },
    },
    status: {
      type: 'stable',
    }
  },
};

export const AlertExamples = () => ({
  components: { DialogAlert, GButton, GImage },
  setup() {
    const showSuccess = ref(false);
    const showError = ref(false);
    const showWarning = ref(false);
    const showInfo = ref(false);
    const showImportant = ref(false);
    const showCustom = ref(false);
    
    const closeSuccess = () => { showSuccess.value = false; };
    const closeError = () => { showError.value = false; };
    const closeWarning = () => { showWarning.value = false; };
    const closeInfo = () => { showInfo.value = false; };
    const closeImportant = () => { showImportant.value = false; };
    const closeCustom = () => { showCustom.value = false; };
    
    return {
      showSuccess,
      showError,
      showWarning,
      showInfo,
      showImportant,
      showCustom,
      closeSuccess,
      closeError,
      closeWarning,
      closeInfo,
      closeImportant,
      closeCustom
    };
  },
  template: `
    <div class="space-y-8 p-4">
      <h2 class="text-xl font-bold mb-4">Ejemplos de alertas</h2>
      <p class="mb-4">Haz clic en los botones para ver ejemplos de los diferentes tipos de alertas.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Alerta de éxito -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Éxito</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje de éxito e icono de verificación.
          </p>
          <GButton @click="showSuccess = true" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de error -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Error</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje de error e icono de prohibición.
          </p>
          <GButton @click="showError = true" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de advertencia -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Advertencia</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje de advertencia y dos botones.
          </p>
          <GButton @click="showWarning = true" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de información -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Información</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje informativo.
          </p>
          <GButton @click="showInfo = true" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta importante -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Importante</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta para mensajes importantes con icono de alerta.
          </p>
          <GButton @click="showImportant = true" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta personalizada -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Personalizada</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con imagen y tamaño personalizados.
          </p>
          <GButton @click="showCustom = true" variant="primary">Mostrar</GButton>
        </div>
      </div>
      
      <!-- Alertas modales -->
      <DialogAlert
        v-if="showSuccess"
        :showAlert="showSuccess"
        type="success"
        title="Operación exitosa"
        description="Los datos se han guardado correctamente."
        primaryText="Aceptar"
        @close="closeSuccess"
        @next="closeSuccess"
      />
      
      <DialogAlert
        v-if="showError"
        :showAlert="showError"
        type="error"
        title="Error"
        description="No se ha podido completar la operación."
        primaryText="Entendido"
        @close="closeError"
        @next="closeError"
      />
      
      <DialogAlert
        v-if="showWarning"
        :showAlert="showWarning"
        type="warning"
        title="Confirmar acción"
        description="¿Estás seguro de que deseas continuar? Esta acción no se puede deshacer."
        primaryText="Confirmar"
        secondaryText="Cancelar"
        :reverseButtons="true"
        @close="closeWarning"
        @next="closeWarning"
      />
      
      <DialogAlert
        v-if="showInfo"
        :showAlert="showInfo"
        type="info"
        title="Información"
        description="Te informamos que el sistema estará en mantenimiento mañana."
        primaryText="Entendido"
        @close="closeInfo"
        @next="closeInfo"
      />
      
      <DialogAlert
        v-if="showImportant"
        :showAlert="showImportant"
        type="important"
        title="Importante"
        description="Debes actualizar tu contraseña antes de continuar."
        primaryText="Actualizar"
        secondaryText="Más tarde"
        @close="closeImportant"
        @next="closeImportant"
      />
      
      <!-- Alerta personalizada con imagen y tamaño -->
      <DialogAlert
        v-if="showCustom"
        :showAlert="showCustom"
        type="info"
        title="Tamaño 3XL"
        description="Esta alerta muestra una imagen con tamaño 3XL."
        primaryText="Entendido"
        imageName="globe"
        imageSize="3xl"
        @close="closeCustom"
        @next="closeCustom"
      />
    </div>
  `,
});

AlertExamples.parameters = {
  docs: {
    description: {
      story: "Ejemplos de los diferentes tipos de alertas disponibles en el componente dialog-alert."
    },
    source: {
      code: `
// Usando el componente de forma programática
import { openAlert } from '@flash-global66/g-dialog-alert';

// Alerta de éxito
openAlert({
  type: "success",
  title: "Operación exitosa",
  description: "Los datos se han guardado correctamente.",
  primaryText: "Aceptar"
});

// Alerta de error
openAlert({
  type: "error",
  title: "Error",
  description: "No se ha podido completar la operación.",
  primaryText: "Entendido"
});

// Alerta de advertencia con dos botones
openAlert({
  type: "warning",
  title: "Confirmar acción",
  description: "¿Estás seguro de que deseas continuar? Esta acción no se puede deshacer.",
  primaryText: "Confirmar",
  secondaryText: "Cancelar",
  reverseButtons: true
});

// Alerta con imagen personalizada y tamaño
openAlert({
  type: "info",
  title: "Tamaño 3XL",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});
`
    }
  }
};

