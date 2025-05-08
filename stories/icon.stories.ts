import type { Meta, StoryObj } from '@storybook/vue3';
import { Icon } from '../components/icon';
import { GInput } from '../components/input';
import { GButton } from '@flash-global66/g-button/index.ts';
import { GConfigProvider } from '../components/config-provider';
import iconSet from '../components/icon/selection.json';
import { computed, ref } from 'vue';

const meta: Meta<typeof Icon> = {
  title: 'Basic/Icono',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
### ¿Cómo puedo agregar un nuevo ícono?

* Debemos buscar el archivo \`selection.json\` del proyecto. Este archivo contiene una lista de todos los íconos disponibles.
* Carga este archivo en la plataforma IcoMoon.
* Pero antes de agregar nuevos íconos, asegúrate de que no existan en la lista. O que tenga el archivo \`selection.json\` actualizado de la rama principal. Para evitar sobreescrituras de íconos.
* Ahora sí abrimos la plataforma IcoMoon: <a href="https://icomoon.io/app/#/select" target="_blank" rel="noopener noreferrer">icomoon.io</a>
* Seleccionamos la opción de "Import Icons" o arrastramos el archivo \`selection.json\`
* Ahora nos mostrará una lista de los íconos disponibles.
* Ahora cargamos el archivo SVG del nuevo ícono. Si te genera un error de multicolor o trazos ignorados, sigue las instrucciones de la sección de "Solución de Errores Comunes" al final de la documentación.
* Ahora seleccionamos el ícono y hacemos clic en el botón "Generate Font"
* Descargamos el archivo ZIP y descomprimimos el archivo.
* Ahora copiamos el archivo \`selection.json\` y lo reemplazamos en el proyecto.
* Guardamos los cambios en git
* Luego generamos una nueva versión del paquete con el comando \`npx lerna publish\`.

### ¿Puedo usar class para personalizar el ícono?
Sí, puedes usar la propiedad \`class\` para personalizar el ícono. No necesariamente debes usar el size o color para personalizar el ícono.
        `
      }
    }
  },  argTypes: {
    name: {
      description: 'Nombre del icono a mostrar',
      control: 'select',
      options: iconSet.icons.map(icon => icon.properties.name)
    },
    size: {
      description: 'Tamaño del icono',
      control: 'text',
      defaultValue: '1em'
    },
    color: {
      description: 'Color del icono',
      control: 'color'
    }
  },
  args: {
    name: 'users',
    size: '3em',
    color: '#565F75'
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Uso básico
export const Primary: Story = {
  name: 'Uso básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico de uso del componente Icon.'
      }
    }
  },
  render: (args) => ({
    components: { Icon, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <icon v-bind="args" />
      </g-config-provider>
    `
  }),
};

export const IconGallery: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre.'
      }
    }
  },
  render: () => ({
    components: { Icon, GConfigProvider, GInput, GButton },
    setup() {
      const searchTerm = ref('')
      const icons = iconSet.icons.map(icon => ({
        name: icon.properties.name,
      }))

      const filteredIcons = computed(() => {
        if (!searchTerm.value) return icons
        return icons.filter(icon => 
          icon.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        ) || {}
      })

      const copyIconName = (iconName: string) => {
        navigator.clipboard.writeText(iconName)
          .then(() => {
            alert(`🫡"${iconName}" copiado al portapapeles!`)
          })
          .catch(() => {
            alert('No se pudo copiar el nombre del icono')
          })
      }

      const clearSearch = () => {
        searchTerm.value = ''
      }

      return { 
        icons: filteredIcons, 
        copyIconName,
        searchTerm,
        clearSearch 
      }
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-2 p-4 border-b sticky top-0">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <icon name="search" size="18px" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>

          <div
            v-if="icons.length"
            class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
            <div 
              v-for="icon in icons" 
              :key="icon.name"
              class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600"
              @click="copyIconName(icon.name)"
            >
              <icon :name="icon.name" class="text-9 " />
              <span class="mt-2 text-xs text-center">{{ icon.name }}</span>
            </div>
          </div>
          
          <div 
            v-else 
            class="flex flex-col items-center justify-center p-8 text-gray-500"
          >
            <icon name="search" size="32px" class="mb-4 text-gray-400" />
            <p class="text-lg">No se encontraron iconos que coincidan con "{{ searchTerm }}"</p>
            <p class="text-sm">Intenta con otro término de búsqueda</p>
          </div>
        </div>
      </g-config-provider>
    `  })
}

export const IconTroubleshooting: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Solución de Errores Comunes

* Error: Multicolor
* Error: Los trazos se ignoran al generar fuentes o archivos CSH.

Para resolver estos problemas, sigue los pasos a continuación.

Usaremos <a href="https://inkscape.org/es/ " target="_blank" rel="noopener noreferrer">inkscape</a>

* **Abrir el archivo:**
   - Abre el archivo SVG en Inkscape.

* **Seleccionar todos los elementos:**
   - Presiona \`Ctrl + A\` (Windows) o \`Cmd + A\` (macOS) para seleccionar todos los elementos del archivo.

* **Convertir trazos a rutas:**
   - Ve a \`Path\` (Trayecto) > \`Stroke to Path\` (Contorno a trayecto) o presiona \`Ctrl + Alt + C\` (Windows) o \`Cmd + Option + C\` (macOS).

* **Asegurarse de que no haya relleno:**
   - Ve a \`Object\` (Objeto) > \`Fill and Stroke\` (Relleno y trazo) o presiona \`Shift + Ctrl + F\` (Windows) o \`Shift + Cmd + F\` (macOS).
   - En la pestaña de \`Fill\` (Relleno), asegúrate de que la opción de relleno esté desactivada (haz clic en la X).

* **Unir los elementos:**
   - Ve a \`Path\` (Trayecto) > \`Union\` (Unir) o presiona \`Ctrl + +\` (Windows) o \`Cmd + +\` (macOS).

* **Guardar el archivo:**
   - Ve a \`File\` (Archivo) > \`Save As\` (Guardar como) y elige el formato SVG.

+ **Opcional: Cambiar el color de los elementos unidos:**
   - Después de unir los elementos, puedes cambiar el color a negro u otro color deseado.

### Recomendaciones
- Usa SVG monocromáticos
- Verifica que no haya rellenos indeseados
- Unifica todos los trazos antes de exportar
        `
      }
    }
  },
  render: () => ({
    components: { Icon, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex gap-4 items-center">
          <icon name="check" size="24px" class="text-green-500" />
          <span>Ejemplo de ícono correctamente optimizado</span>
        </div>
      </g-config-provider>
    `
  })
};
