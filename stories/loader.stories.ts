import type { Meta, StoryObj } from "@storybook/vue3";
import { Loader } from '../components/loader';
import { showLoader, loaderMessage } from '../components/loader/loader.provider';
import { watch } from 'vue';
import { version, peerDependencies } from '../components/loader/package.json';
import { generatePeerDepsList, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta<typeof Loader> = {
  title: 'Feedback/Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: `
El componente Loader es un indicador de carga global que se superpone a la interfaz. Útil para indicar procesos asíncronos bloqueantes y evitar interacciones indeseadas.

> Versión actual: ${version}

## Características
- Indicador de carga visual (spinner).
- Mensaje opcional personalizable.
- Iterador de mensajes para loaders extensos, con opción de aleatorizar mensajes.
- Control global mediante provider/composable.
- Fondo semitransparente para bloquear interacción.
- Transiciones suaves de entrada y salida.

## Instalación

\`\`\`bash
yarn add @flash-global66/g-loader
\`\`\`

## Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { Loader } from '@flash-global66/g-loader'

# importar el provider y métodos de control desde donde se debe disparar
import { showGLoader, setLoaderMessage } from '@flash-global66/g-loader'
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

### Métodos de Control
Para controlar el loader desde cualquier parte de la aplicación:

- **showGLoader(show: boolean)**: Muestra u oculta el loader.
- **setLoaderMessage(config: string | SetLoaderMessageParams)**: Establece el mensaje del loader, con las siguientes condiciones:
  - Si config es un string único, se establece como el mensaje único del loader
  - Si config es un objeto con el formato \`\`\`{ messages: string[]; duration?: number; shuffle?: boolean; }\`\`\`, se iterarán los mensajes para mostrarse de acuerdo a la duración establecida en segundos.
  - Si se establece el parámetro shuffle en true, los mensajes se mostrarán de manera aleatoria.
}

\`\`\`typescript
// Mostrar loader
showGLoader(true);

// Establecer mensaje
setLoaderMessage('Cargando recursos...');

// o establecer array de mensajes
setLoaderMessage({ messages: ['Cargando recursos', 'Ya casi', 'Estamos terminando de mostrar el loader' ], duration: 5 });


// Ocultar loader
showGLoader(false);
\`\`\`
        `
      }
    }
  },
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Controla la visibilidad del loader.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    message: {
      control: 'text',
      description: 'Mensaje opcional a mostrar debajo del spinner.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { Loader },
    template: `
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,
    setup() {
      return { args };
    }
  }),
  args: {
    show: true
  }
};

export const WithMessage: Story = {
  name: 'Con Mensaje',
  render: (args) => ({
    components: { Loader },
    template: `
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,
    setup() {
      return { args };
    }
  }),
  args: {
    show: true,
    message: 'Estamos procesando tu solicitud. Esto puede tomar unos momentos. Tomate un café'
  }
};

export const Interactive: Story = {
  name: 'Interactivo',
  parameters: {
    docs: {
      description: {
        story: 'Esta historia demuestra el uso interactivo del loader. Haz clic en el botón para simular una carga de 3 segundos.',
      },
    },
  },
  render: (args) => ({
    components: { Loader },
    template: `
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-4">
         <Loader :show="showLoader" :message="loaderMessage" />
         
         <div class="z-0 flex flex-col gap-4 items-center">
           <p class="text-gray-600">Interactúa con los controles para probar el loader global.</p>
           <button @click="toggleLoader" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              {{ showLoader ? 'Ocultar Loader' : 'Mostrar Loader (3s)' }}
           </button>
         </div>
      </div>
    `,
    setup() {
      watch(() => args.show, (val) => {
        showLoader.value = !!val;
      });
      watch(() => args.message, (val) => {
        loaderMessage.value = val || '';
      });

      const toggleLoader = () => {
        showLoader.value = !showLoader.value;
        if (showLoader.value) {
          loaderMessage.value = args.message || 'Cargando...';
          setTimeout(() => {
            showLoader.value = false;
          }, 3000);
        }
      };

      return { args, showLoader, loaderMessage, toggleLoader };
    }
  }),
  args: {
    show: false,
    message: 'Cargando datos...'
  }
};