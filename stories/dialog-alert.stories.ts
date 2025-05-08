import type { Meta, StoryObj } from "@storybook/vue3";

import { GButton } from "@flash-global66/g-button/index.ts";
import { openAlert, type DialogAlertInstance } from "@flash-global66/g-dialog-alert/index.ts";
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { IMAGE_NAMES, IMAGE_SIZES } from '@flash-global66/g-image/index.ts';

import { version, peerDependencies } from "@flash-global66/g-dialog-alert/package.json";
import { generatePeerDepsList, generatePeerDepsInstalls } from "../helper/documentation-stories";

const AlertExampleWrapper = {
  name: 'AlertExampleWrapper',
  props: {
    codeExample: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => slots.default ? slots.default() : null;
  }
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
El componente Dialog Alert permite invocar alertas directamente mediante funciones.

> Versión actual: ${version}

## Características
- Diferentes tipos de alerta (success, error, warning, info, important)
- Títulos y descripciones personalizables
- Hasta tres botones de acción (primario, secundario, terciario)
- Imágenes personalizables con diferentes tamaños
- API programática mediante Promise

### Instalación

\`\`\`bash
yarn add @flash-global66/g-dialog-alert
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { openAlert } from '@flash-global66/g-dialog-alert';

# recomendado importar en los estilos globales
import '@flash-global66/g-dialog-alert/styles.scss';
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

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
    // Usuario cerró el diálogo con X o clic fuera
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
  },
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

export default meta;
type Story = StoryObj<DialogAlertInstance>;

export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente Dialog Alert. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: `
// Importar el componente
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta básica
openAlert({
  type: "info",
  title: "Título de ejemplo",
  description: "Esta es una descripción de ejemplo",
  primaryText: "Aceptar",
  secondaryText: "Cancelar"
});`
      }
    }
  },
  render: (args) => ({
    components: { GButton, AlertExampleWrapper },
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

      const codeExample = `
// Importar la función openAlert
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta con opciones personalizadas
openAlert({
  type: "${args.type}",
  title: "${args.title || "Título de ejemplo"}",
  description: "${args.description || "Descripción de ejemplo"}",
  primaryText: "${args.primaryText}",
  secondaryText: "${args.secondaryText}",
  tertiaryText: "${args.tertiaryText}",
  hideButtonClose: ${args.hideButtonClose},
  ${args.imageName ? `imageName: "${args.imageName}",` : ''}
  ${args.imageSize ? `imageSize: "${args.imageSize}"` : ''}
});`;

      return { showAlert, codeExample };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-4 p-4">
          <p class="mb-4 text-gray-600">
            Haz clic en el botón para mostrar una alerta con las propiedades seleccionadas.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar Alerta Personalizada</GButton>
        </div>
      </alert-example-wrapper>
    `
  })
};

export const AllTypes: Story = {
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 5 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, error, warning, info e important.'
      },
      source: {
        code: `
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

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});`
      }
    }
  },
  render: () => ({
    components: { GButton, AlertExampleWrapper },
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
          title: "Advertencia",
          description: "Esta acción podría tener consecuencias.",
          primaryText: "Continuar",
          secondaryText: "Cancelar"
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
          primaryText: "Actualizar ahora",
          secondaryText: "Más tarde"
        });
      };
      
      const codeExample = `
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

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});`;
      
      return {
        showSuccessAlert,
        showErrorAlert,
        showWarningAlert,
        showInfoAlert,
        showImportantAlert,
        codeExample
      };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Éxito</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de éxito e icono de verificación.
              </p>
              <GButton @click="showSuccessAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Error</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de error e icono de prohibición.
              </p>
              <GButton @click="showErrorAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Advertencia</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de advertencia y dos botones.
              </p>
              <GButton @click="showWarningAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Información</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje informativo.
              </p>
              <GButton @click="showInfoAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Importante</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta importante para mensajes críticos.
              </p>
              <GButton @click="showImportantAlert" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `
  })
};

export const MultipleButtons: Story = {
  name: 'Botones múltiples',
  parameters: {
    docs: {
      description: {
        story: 'El componente admite hasta tres botones diferentes: primario, secundario y terciario, lo que permite opciones más detalladas de interacción.'
      },
      source: {
        code: `
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});`
      }
    }
  },
  render: () => ({
    components: { GButton, AlertExampleWrapper },
    setup() {
      const showOneButton = () => {
        openAlert({
          type: "info",
          title: "Un botón",
          description: "Alerta con un solo botón de acción.",
          primaryText: "Aceptar"
        });
      };

      const showTwoButtons = () => {
        openAlert({
          type: "warning",
          title: "Dos botones",
          description: "Alerta con dos botones de acción.",
          primaryText: "Continuar",
          secondaryText: "Cancelar"
        });
      };

      const showThreeButtons = () => {
        openAlert({
          type: "warning",
          title: "Tres botones",
          description: "¿Qué acción deseas realizar?",
          primaryText: "Guardar cambios",
          secondaryText: "Descartar",
          tertiaryText: "Ver detalles"
        });
      };
      
      const codeExample = `
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});`;
      
      return {
        showOneButton,
        showTwoButtons,
        showThreeButtons,
        codeExample
      };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Un botón</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con un solo botón primario.
              </p>
              <GButton @click="showOneButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Dos botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario y secundario.
              </p>
              <GButton @click="showTwoButtons" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Tres botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario, secundario y terciario.
              </p>
              <GButton @click="showThreeButtons" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `
  })
};

export const WithoutCloseButton: Story = {
  name: 'Sin botón cerrar',
  parameters: {
    docs: {
      description: {
        story: 'Cuando necesitas que el usuario realice una acción específica, puedes ocultar el botón de cierre con la propiedad hideButtonClose.'
      },
      source: {
        code: `
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});`
      }
    }
  },
  render: () => ({
    components: { GButton, AlertExampleWrapper },
    setup() {
      const showWithCloseButton = () => {
        openAlert({
          type: "info",
          title: "Con botón de cierre",
          description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
          primaryText: "Aceptar"
        });
      };

      const showWithoutCloseButton = () => {
        openAlert({
          type: "important",
          title: "Sin botón de cierre",
          description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
          primaryText: "Aceptar",
          secondaryText: "Cancelar",
          hideButtonClose: true
        });
      };
      
      const codeExample = `
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});`;
      
      return {
        showWithCloseButton,
        showWithoutCloseButton,
        codeExample
      };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Con botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Comportamiento por defecto con botón X.
              </p>
              <GButton @click="showWithCloseButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Sin botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta sin botón X, forzando al usuario a elegir una opción.
              </p>
              <GButton @click="showWithoutCloseButton" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `
  })
};

export const CustomImages: Story = {
  name: 'Imágenes personalizadas',
  parameters: {
    docs: {
      description: {
        story: 'Puedes personalizar la imagen mostrada en la alerta, así como su tamaño.'
      },
      source: {
        code: `
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});`
      }
    }
  },
  render: () => ({
    components: { GButton, AlertExampleWrapper },
    setup() {
      const showDefaultImage = () => {
        openAlert({
          type: "success",
          title: "Imagen por defecto",
          description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
          primaryText: "Aceptar"
        });
      };

      const showCustomImage = () => {
        openAlert({
          title: "Imagen personalizada",
          description: "Esta alerta usa una imagen personalizada.",
          primaryText: "Entendido",
          imageName: "globe"
        });
      };

      const showLargeImage = () => {
        openAlert({
          title: "Imagen grande (3XL)",
          description: "Esta alerta muestra una imagen con tamaño 3XL.",
          primaryText: "Entendido",
          imageName: "globe",
          imageSize: "3xl"
        });
      };
      
      const codeExample = `
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});`;
      
      return {
        showDefaultImage,
        showCustomImage,
        showLargeImage,
        codeExample
      };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen por defecto</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Imagen automática según el tipo de alerta.
              </p>
              <GButton @click="showDefaultImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen personalizada</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen personalizada.
              </p>
              <GButton @click="showCustomImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen grande</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen de tamaño 3XL.
              </p>
              <GButton @click="showLargeImage" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `
  })
};

export const PromiseHandling: Story = {
  name: 'Manejo de promesas',
  parameters: {
    docs: {
      description: {
        story: 'El método openAlert devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta, lo que permite encadenar operaciones.'
      },
      source: {
        code: `
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});`
      }
    }
  },
  render: () => ({
    components: { GButton, AlertExampleWrapper },
    setup() {
      const showConfirmationFlow = () => {
        openAlert({
          type: "warning",
          title: "Confirmar operación",
          description: "¿Estás seguro de realizar esta operación?",
          primaryText: "Sí, continuar",
          secondaryText: "No, cancelar"
        }).then(result => {
          if (result.isPrimary) {
            setTimeout(() => {
              openAlert({
                type: "success",
                title: "Operación completada",
                description: "La operación se ha completado correctamente.",
                primaryText: "Aceptar"
              });
            }, 1000);
          } else if (result.isSecondary || result.dismissedByClose) {
            openAlert({
              type: "info",
              title: "Operación cancelada",
              description: "Has cancelado la operación.",
              primaryText: "Entendido"
            });
          }
        });
      };
      
      const codeExample = `
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});`;
      
      return { 
        showConfirmationFlow,
        codeExample
      };
    },
    template: `
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Flujo de confirmación</h3>
            <p class="text-sm text-gray-600 mb-4">
              Demuestra cómo encadenar alertas usando promesas para crear un flujo de interacción.
            </p>
            <GButton @click="showConfirmationFlow" variant="primary">Iniciar flujo</GButton>
          </div>
        </div>
      </alert-example-wrapper>
    `
  })
};