import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, onMounted } from 'vue';
import { GImage, IMAGE_NAMES, SIZE_MAP } from '@flash-global66/g-image/index.ts';
import { GSegmented } from '@flash-global66/g-segmented';
import { GInput } from '@flash-global66/g-input';
import { GButton } from '@flash-global66/g-button';
import { GIconFont } from "@flash-global66/g-icon-font";
import { GConfigProvider } from "../components/config-provider";

const meta: Meta<typeof GImage> = {
  title: 'Basic/Image',
  component: GImage,
  parameters: {
    docs: {
      description: {
        component: `
# Image Component

El componente Image proporciona una manera sencilla y optimizada de mostrar ilustraciones predefinidas con distintos tamaños:

## Características
- Colección de ilustraciones predefinidas listas para usar
- Siete tamaños diferentes para adaptarse a diversos contextos
- Lazy loading para optimizar el rendimiento
- Tipado estricto para autocompletado de nombres y tamaños

## Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-image
\`\`\`

## Dependencias
Este componente requiere:
- @vueuse/core (para el lazy loading)

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/b2b-ui-image/image.styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-image name="document" size="md" />
</template>

<script setup>
import { GImage } from '@flash-global66/b2b-ui-image';
</script>
\`\`\`

## Tamaños disponibles
- **xs**: 44x44 px
- **sm**: 64x64 px
- **md**: 80x80 px (predeterminado)
- **lg**: 112x112 px
- **xl**: 160x160 px
- **xxl**: 208x208 px
- **xxxl**: 260x260 px

## Optimizaciones de rendimiento
### Lazy Loading
- El componente utiliza IntersectionObserver para cargar las imágenes sólo cuando son visibles
- Esto mejora significativamente el rendimiento en páginas con múltiples ilustraciones
- Puedes desactivar esta función con \`lazyLoad=false\`

## Agregar nuevas ilustraciones al componente

Para añadir nuevas imágenes al componente:

1. **Añadir el archivo**
   - Coloca el archivo WebP en \`components/Image/assets/illustrations/\`

2. **Actualizar las constantes**
   - Modifica \`src/constants/image.constants.ts\` para incluir el nuevo nombre en \`IMAGE_NAMES\`
   - Ejemplo: Añade 'new-illustration' al array \`IMAGE_NAMES\`

3. **Construir el componente**
   - Ejecuta \`yarn build-image-component\` para actualizar el componente

## Tipado estricto y autocompletado
El componente utiliza TypeScript para proporcionar tipado estricto, lo que permite:
- Autocompletado de nombres de ilustraciones en tu editor
- Validación en tiempo de compilación para evitar errores
- Advertencias si se usa un nombre que no existe en el conjunto de ilustraciones
        `
      }
    }
  },
  argTypes: {
    name: {
      description: 'Nombre de la ilustración',
      control: 'select',
      options: IMAGE_NAMES,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'document' },
      }
    },
    size: {
      description: 'Tamaño de la ilustración',
      control: 'select',
      options: Object.keys(SIZE_MAP),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    lazyLoad: {
      description: 'Activar carga diferida de imágenes',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      }
    }
  },
  args: {
    name: 'document',
    size: 'md',
    lazyLoad: true
  }
} as Meta;

export default meta;
type Story = StoryObj<typeof GImage>;

export const Primary: Story = {
  name: 'Uso básico',
  render: (args) => ({
    components: { GImage, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-image v-bind="args" />
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<!-- Ejemplo de uso básico -->
<template>
  <g-image name="document" size="md" />
</template>

<script setup>
import { GImage } from '@flash-global66/b2b-ui-image';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Tamaños disponibles',
  render: (args) => ({
    components: { GImage, GConfigProvider },
    setup() {
      const sizes = Object.keys(SIZE_MAP);
      return { 
        args, 
        sizes,
        SIZE_MAP
      };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-end">
          <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
            <!-- Contenedor con altura y anchura fijas basadas en el tamaño -->
            <div class="flex items-center justify-center" 
                 :style="{ width: SIZE_MAP[size], height: SIZE_MAP[size], minHeight: SIZE_MAP[size], minWidth: SIZE_MAP[size] }">
              <g-image v-bind="args" :size="size" />
            </div>
            <span class="mt-2 text-sm text-gray-500">{{ size }} ({{ SIZE_MAP[size] }})</span>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<!-- Ejemplo de uso con diferentes tamaños -->
<template>
  <!-- Tamaño xs: 44x44px -->
  <g-image name="document" size="xs" />
  
  <!-- Tamaño sm: 64x64px -->
  <g-image name="document" size="sm" />
  
  <!-- Tamaño md: 80x80px (por defecto) -->
  <g-image name="document" size="md" />
  
  <!-- Tamaño lg: 112x112px -->
  <g-image name="document" size="lg" />
  
  <!-- Tamaño xl: 160x160px -->
  <g-image name="document" size="xl" />
  
  <!-- Tamaño xxl: 208x208px -->
  <g-image name="document" size="xxl" />
  
  <!-- Tamaño xxxl: 260x260px -->
  <g-image name="document" size="xxxl" />
</template>

<script setup>
import { GImage } from '@flash-global66/b2b-ui-image';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const Gallery: Story = {
  name: 'Galería de ilustraciones',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de ilustraciones disponibles en el sistema. Haz clic en cualquier ilustración para copiar su nombre. 📋'
      },
      source: {
        code: `
<!-- Ejemplo para mostrar múltiples imágenes en una galería -->
<template>
  <div class="gallery-container">
    <!-- Puedes iterar sobre las imágenes disponibles -->
    <div v-for="imageName in ['document', 'user', 'check', 'email']" :key="imageName" class="image-item">
      <g-image :name="imageName" size="md" />
      <span class="image-name">{{ imageName }}</span>
    </div>
  </div>
</template>

<script setup>
import { GImage } from '@flash-global66/b2b-ui-image';

// Todos los nombres de imágenes disponibles
// Puedes importar la constante IMAGE_NAMES desde el paquete
// import { IMAGE_NAMES } from '@flash-global66/b2b-ui-image';
</script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.image-name {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #666;
}
</style>
`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: { GImage, GConfigProvider, GSegmented, GInput, GButton, GIconFont },
    setup() {
      const selectedSize = ref('md');
      const searchTerm = ref('');
      const copiedImage = ref<string | null>(null);
      
      const sizeOptions = Object.keys(SIZE_MAP).map(size => ({
        label: size.toUpperCase(),
        value: size
      }));

      const filteredImages = ref<string[]>([...IMAGE_NAMES]);
      
      const gridColumns = computed(() => {
        switch(selectedSize.value) {
          case 'xs':
          case 'sm': 
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8';
          case 'md':
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
          case 'lg':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
          case 'xl':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
          case 'xxl':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
          case 'xxxl':
            return 'grid-cols-1 sm:grid-cols-2';
          default:
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
        }
      });

      const updateFilteredImages = () => {
        if (!searchTerm.value.trim()) {
          filteredImages.value = [...IMAGE_NAMES];
          return;
        }
        
        const searchTermLower = searchTerm.value.toLowerCase().trim();
        filteredImages.value = IMAGE_NAMES.filter(name => 
          name.toLowerCase().includes(searchTermLower)
        );
      };

      const clearSearch = () => {
        searchTerm.value = '';
        updateFilteredImages();
      };

      const copyImageName = (imageName: string) => {
        navigator.clipboard.writeText(imageName)
          .then(() => {
            copiedImage.value = imageName;
            setTimeout(() => {
              copiedImage.value = null;
            }, 1500);
            console.log('Nombre de la ilustración copiado al portapapeles');
          })
          .catch(() => {
            alert('No se pudo copiar el nombre de la ilustración');
          });
      };

      onMounted(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          .copy-animation {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-color: #10b981;
            z-index: 10;
          }
          
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          
          .copy-feedback {
            animation: fadeInOut 1.5s ease forwards;
          }
        `;
        document.head.appendChild(styleElement);
        
        return () => {
          if (styleElement.parentNode) {
            styleElement.parentNode.removeChild(styleElement);
          }
        };
      });

      return {
        IMAGE_NAMES,
        SIZE_MAP,
        selectedSize,
        sizeOptions,
        searchTerm,
        clearSearch,
        copyImageName,
        filteredImages,
        updateFilteredImages,
        copiedImage,
        gridColumns
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedSize"
            :options="sizeOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar ilustración..."
              class="w-full max-w-md"
              inputSize="small"
              @input="updateFilteredImages"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="sm" />
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

          <div :class="['grid gap-4 md:gap-6', gridColumns]">
            <div
              v-for="name in filteredImages"
              :key="name"
              class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600 relative overflow-hidden transition-all duration-300"
              :class="{ 'copy-animation': copiedImage === name }"
              @click="copyImageName(name)"
            >
              <!-- Contenedor mejorado con dimensiones fijas para que no se corten las imágenes -->
              <div class="flex items-center justify-center mb-2 overflow-visible" 
                   :style="{ 
                     width: SIZE_MAP[selectedSize], 
                     height: SIZE_MAP[selectedSize], 
                     minHeight: SIZE_MAP[selectedSize],
                     minWidth: SIZE_MAP[selectedSize]
                   }">
                <g-image :name="name" :size="selectedSize" />
              </div>
              <span class="text-xs text-center">{{ name }}</span>
              
              <!-- Success overlay that appears when copied -->
              <div v-if="copiedImage === name" class="absolute inset-0 bg-emerald-50 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 copy-feedback">
                <div class="text-emerald-600 mb-1">
                  <g-icon-font name="solid check-circle" size="lg" />
                </div>
                <span class="text-xs font-medium text-emerald-700">¡Copiado!</span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
};