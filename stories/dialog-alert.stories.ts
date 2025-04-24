import { GButton } from "@flash-global66/g-button/index.ts";
import { openAlert, type DialogAlertInstance } from "@flash-global66/g-dialog-alert/index.ts";
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { IMAGE_NAMES, IMAGE_SIZES } from '@flash-global66/g-image/index.ts';
import type { Meta, StoryObj } from "@storybook/vue3";

import pkg, { version } from '../components/dialog-alert/package.json';

const generatePeerDepsList = (deps: Record<string, string>): string => {
  if (!deps || Object.keys(deps).length === 0) {
    return 'Sin dependencias.';
  }
  return Object.entries(deps)
    .map(([pkg, version]) => `- ${pkg}: ${version}`)
    .join('\n');
};

const meta: Meta<DialogAlertInstance> = {
  title: "Data/Dialog Alert",
  decorators: [
    (story) => ({
      components: { story, GConfigProvider },
      template: `<GConfigProvider><story /></GConfigProvider>`,
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
El componente Dialog Alert proporciona una manera programática de mostrar alertas y diálogos 
de confirmación sin necesidad de configurar providers.

### Instalación

\`\`\`bash
# Instalar el componente principal
yarn add @flash-global66/g-dialog-alert@${version}

# Instalar las dependencias requeridas con versiones exactas
yarn add ${Object.entries(pkg.peerDependencies)
  .filter(([name]) => name.startsWith('@flash-global66'))
  .map(([name, version]) => `${name}@${version}`)
  .join(' ')}
\`\`\`

### Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
// Importar estilos del Dialog Alert
@use "@flash-global66/g-dialog-alert/styles.scss" as *;
\`\`\`

### Dependencias
${generatePeerDepsList(pkg.peerDependencies)}

### Ejemplo de uso

La función \`openAlert\` devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta:

\`\`\`ts
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: "warning",
  title: "Confirmar cambios",
  description: "¿Qué acción deseas realizar con los cambios?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
}).then(result => {
  if (result.isPrimary) {
    // Usuario quiere guardar
    guardarCambios();
  } else if (result.isSecondary) {
    // Usuario quiere descartar
    descartarCambios();
  } else if (result.isTertiary) {
    // Usuario quiere ver detalles
    mostrarDetalles();
  } else if (result.dismissedByClose) {
    // Usuario cerró el diálogo con X
  }
});
\`\`\`
`
      }
    },
    status: {
      type: 'stable',
    }
  },
  argTypes: {
    type: {
      description: "Tipo de alerta que define el ícono y estilo",
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'important'],
      table: {
        category: 'Principales',
        type: { summary: "'success' | 'error' | 'warning' | 'info' | 'important'" }
      }
    },
    title: {
      description: "Título de la alerta",
      control: 'text',
      table: {
        category: 'Principales',
        type: { summary: 'string' }
      }
    },
    description: {
      description: "Descripción o mensaje de la alerta",
      control: 'text',
      table: {
        category: 'Principales',
        type: { summary: 'string' }
      }
    },
    primaryText: {
      description: "Texto del botón primario",
      control: 'text',
      table: {
        category: 'Botones',
        type: { summary: 'string' }
      }
    },
    secondaryText: {
      description: "Texto del botón secundario",
      control: 'text',
      table: {
        category: 'Botones',
        type: { summary: 'string' }
      }
    },
    tertiaryText: {
      description: "Texto del botón terciario",
      control: 'text',
      table: {
        category: 'Botones',
        type: { summary: 'string' }
      }
    },
    hideButtonClose: {
      description: "Oculta el botón de cerrar (X)",
      control: 'boolean',
      table: {
        category: 'Botones',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    imageName: {
      description: "Nombre de la imagen personalizada",
      control: 'select',
      options: ['', ...IMAGE_NAMES],
      table: {
        category: 'Personalización',
        type: { summary: 'string' }
      }
    },
    imageSize: {
      description: "Tamaño de la imagen",
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      table: {
        category: 'Personalización',
        type: { summary: Object.keys(IMAGE_SIZES).join(' | ') },
        defaultValue: { summary: 'lg' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<DialogAlertInstance>;

export const Playground: Story = {
  render: (args) => ({
    components: { GButton },
    setup() {
      const showAlert = () => {
        openAlert({
          type: args.type,
          title: args.title || "Título de ejemplo",
          description: args.description || "Descripción de ejemplo",
          primaryText: args.primaryText,
          secondaryText: args.secondaryText,
          tertiaryText: args.tertiaryText,
          hideButtonClose: args.hideButtonClose,
          imageName: args.imageName,
          imageSize: args.imageSize,
        });
      };

      return { showAlert };
    },
    template: `
      <div class="space-y-4 p-4">
        <h2 class="text-xl font-bold mb-4">Playground</h2>
        <p class="mb-4 text-gray-600">
          Haz clic en el botón para mostrar una alerta con las propiedades seleccionadas.
        </p>
        <GButton @click="showAlert" variant="primary">Mostrar Alerta Personalizada</GButton>
      </div>
    `
  }),
  args: {
    type: 'info',
    title: 'Título de ejemplo',
    description: 'Esta es una descripción de ejemplo',
    primaryText: 'Aceptar',
    secondaryText: 'Cancelar',
    tertiaryText: '',
    hideButtonClose: false,
    imageName: undefined,
    imageSize: 'lg'
  }
};

export const AlertExamples = () => ({
  components: { GButton },
  setup() {
    const showSuccessAlert = () => {
      openAlert({
        type: "success",
        title: "Operación exitosa",
        description: "Los datos se han guardado correctamente.",
        primaryText: "Aceptar"
      });
    };

    const showErrorAlert = () => {
      openAlert({
        type: "error",
        title: "Error",
        description: "No se ha podido completar la operación.",
        primaryText: "Entendido"
      });
    };

    const showWarningAlert = () => {
      openAlert({
        type: "warning",
        title: "Confirmar acción",
        description: "¿Qué acción deseas realizar?",
        primaryText: "Confirmar",
        secondaryText: "Cancelar",
        tertiaryText: "Ver detalles"
      });
    };

    const showInfoAlert = () => {
      openAlert({
        type: "info",
        title: "Información",
        description: "Te informamos que el sistema estará en mantenimiento mañana.",
        primaryText: "Entendido"
      });
    };

    const showImportantAlert = () => {
      openAlert({
        type: "important",
        title: "Importante",
        description: "Debes actualizar tu contraseña antes de continuar.",
        primaryText: "Actualizar",
        secondaryText: "Más tarde",
        hideButtonClose: true
      });
    };

    const showCustomAlert = () => {
      openAlert({
        title: "Tamaño 3XL",
        description: "Esta alerta muestra una imagen con tamaño 3XL.",
        primaryText: "Entendido",
        imageName: "globe",
        imageSize: "3xl"
      });
    };
    
    return {
      showSuccessAlert,
      showErrorAlert,
      showWarningAlert,
      showInfoAlert,
      showImportantAlert,
      showCustomAlert
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
          <GButton @click="showSuccessAlert" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de error -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Error</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje de error e icono de prohibición.
          </p>
          <GButton @click="showErrorAlert" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de advertencia -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Advertencia</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje de advertencia y tres botones.
          </p>
          <GButton @click="showWarningAlert" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta de información -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Información</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con mensaje informativo.
          </p>
          <GButton @click="showInfoAlert" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta importante -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Importante</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta importante sin botón de cierre.
          </p>
          <GButton @click="showImportantAlert" variant="primary">Mostrar</GButton>
        </div>
        
        <!-- Alerta personalizada -->
        <div class="border rounded-lg p-4 flex flex-col h-full">
          <h3 class="font-semibold mb-2">Personalizada</h3>
          <p class="text-sm text-gray-600 mb-4 flex-grow">
            Alerta con imagen y tamaño personalizados.
          </p>
          <GButton @click="showCustomAlert" variant="primary">Mostrar</GButton>
        </div>
      </div>
    </div>
  `,
});

AlertExamples.parameters = {
  docs: {
    description: {
      story: "Ejemplos de los diferentes tipos de alertas disponibles usando el método programático openAlert()."
    }
  }
};