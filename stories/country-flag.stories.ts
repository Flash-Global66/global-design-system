import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { GCountryFlag, ALL_FLAG_CODES, FLAG_SIZES } from '@flash-global66/g-country-flag/index.ts';
import { GSegmented } from '@flash-global66/g-segmented';
import { GInput } from '@flash-global66/g-input';
import { GButton } from '@flash-global66/g-button';
import { GIconFont } from '@flash-global66/g-icon-font';
import { GConfigProvider } from '../components/config-provider';
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories';
import { version, peerDependencies } from '@flash-global66/g-country-flag/package.json';

const meta: Meta<typeof GCountryFlag> = {
  title: 'Basic/CountryFlag',
  component: GCountryFlag,
  parameters: {
    docs: {
      description: {
        component: `
El componente CountryFlag muestra banderas de países y códigos especiales mediante imágenes SVG optimizadas con lazy loading.

> Versión actual: ${version}

## Características
- Colección de banderas de todos los países del mundo (ISO 3166-1 alpha-2)
- Códigos especiales: EU, ALL_COUNTRY, PYUSD, USDC, USDT
- Siete tamaños diferentes para adaptarse a diversos contextos
- Forma circular por defecto (los SVGs están diseñados como círculos)
- Lazy loading para optimizar el rendimiento
- Tipado estricto para autocompletado de códigos de país y tamaños

## Instalación

\`\`\`bash
yarn add @flash-global66/g-country-flag
\`\`\`

## Importación del componente
\`\`\`typescript
// Importar donde se va a utilizar
import { GCountryFlag } from '@flash-global66/g-country-flag'

// Recomendado: importar en los estilos globales
@use '@flash-global66/g-country-flag/styles.scss'
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

## Tamaños disponibles
- **xs**: 16x16 px
- **sm**: 24x24 px
- **md**: 32x32 px (predeterminado)
- **lg**: 40x40 px
- **xl**: 48x48 px
- **2xl**: 128x128 px
- **3xl**: 256x256 px

## Agregar nuevas banderas al componente

1. Coloca el archivo SVG en \`components/country-flag/src/assets/flags/\` con el código ISO en minúsculas (ej: \`co.svg\`)
2. Añade el código en \`src/constants/country-flag.constants.ts\` dentro de \`COUNTRIES_CODE\` o \`SPECIAL_CODES\`
3. Ejecuta \`yarn build country-flag\`
        `
      }
    }
  },
  argTypes: {
    name: {
      description: 'Código ISO 3166-1 alpha-2 del país o código especial',
      control: 'select',
      options: ALL_FLAG_CODES,
      table: {
        category: 'Principal',
        type: { summary: 'FlagCode' },
        defaultValue: { summary: 'CO' },
      }
    },
    size: {
      description: 'Tamaño de la bandera',
      control: 'select',
      options: Object.keys(FLAG_SIZES),
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    lazyLoad: {
      description: 'Activa la carga diferida: la bandera se carga solo cuando entra en el viewport',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      }
    }
  },
  args: {
    name: 'CO',
    size: 'md',
    lazyLoad: true
  }
} as Meta;

export default meta;
type Story = StoryObj<typeof GCountryFlag>;

export const Primary: Story = {
  name: 'Uso básico',
  render: (args) => ({
    components: { GCountryFlag, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-country-flag v-bind="args" />
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Uso básico del componente con los valores predeterminados. Permite explorar las props mediante los controles interactivos.'
      },
      source: {
        code: `
<template>
  <g-country-flag name="CO" size="md" />
</template>

<script setup>
import { GCountryFlag } from '@flash-global66/g-country-flag';
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
    components: { GCountryFlag, GConfigProvider },
    setup() {
      const sizes = Object.keys(FLAG_SIZES);
      return { args, sizes, FLAG_SIZES };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-end">
          <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
            <div
              class="flex items-center justify-center"
              :style="{ width: FLAG_SIZES[size], height: FLAG_SIZES[size], minHeight: FLAG_SIZES[size], minWidth: FLAG_SIZES[size] }"
            >
              <g-country-flag v-bind="args" :size="size" />
            </div>
            <span class="mt-2 text-sm text-gray-500">{{ size }} ({{ FLAG_SIZES[size] }})</span>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'El componente ofrece siete tamaños predefinidos (xs a 3xl) para adaptarse a distintos contextos de uso.'
      },
      source: {
        code: `
<template>
  <!-- Tamaño xs: 16x16px -->
  <g-country-flag name="CO" size="xs" />

  <!-- Tamaño sm: 24x24px -->
  <g-country-flag name="CO" size="sm" />

  <!-- Tamaño md: 32x32px (por defecto) -->
  <g-country-flag name="CO" size="md" />

  <!-- Tamaño lg: 40x40px -->
  <g-country-flag name="CO" size="lg" />

  <!-- Tamaño xl: 48x48px -->
  <g-country-flag name="CO" size="xl" />

  <!-- Tamaño 2xl: 128x128px -->
  <g-country-flag name="CO" size="2xl" />

  <!-- Tamaño 3xl: 256x256px -->
  <g-country-flag name="CO" size="3xl" />
</template>

<script setup>
import { GCountryFlag } from '@flash-global66/g-country-flag';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const Gallery: Story = {
  name: 'Galería de banderas',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de todas las banderas disponibles en el sistema. Haz clic en cualquier bandera para copiar su código.'
      },
      source: {
        code: `
<template>
  <div class="gallery-container">
    <div v-for="code in ['CO', 'MX', 'US', 'ES', 'AR']" :key="code" class="flag-item">
      <g-country-flag :name="code" size="md" />
      <span class="flag-code">{{ code }}</span>
    </div>
  </div>
</template>

<script setup>
import { GCountryFlag } from '@flash-global66/g-country-flag';
// import { ALL_FLAG_CODES } from '@flash-global66/g-country-flag';
</script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
}
.flag-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.flag-code {
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
    components: { GCountryFlag, GConfigProvider, GSegmented, GInput, GButton, GIconFont },
    setup() {
      const selectedSize = ref('md');
      const searchTerm = ref('');
      const copiedCode = ref<string | null>(null);

      const sizeOptions = Object.keys(FLAG_SIZES).map(size => ({
        label: size.toUpperCase(),
        value: size
      }));

      const filteredFlags = ref<string[]>([...ALL_FLAG_CODES]);

      const gridMinWidth = computed(() => {
        const size = parseInt(FLAG_SIZES[selectedSize.value as keyof typeof FLAG_SIZES]);
        return `${size + 32}px`;
      });

      const updateFilteredFlags = () => {
        if (!searchTerm.value.trim()) {
          filteredFlags.value = [...ALL_FLAG_CODES];
          return;
        }
        const term = searchTerm.value.toUpperCase().trim();
        filteredFlags.value = ALL_FLAG_CODES.filter(code => code.includes(term));
      };

      const clearSearch = () => {
        searchTerm.value = '';
        updateFilteredFlags();
      };

      const copyFlagCode = (code: string) => {
        navigator.clipboard.writeText(code)
          .then(() => {
            copiedCode.value = code;
            setTimeout(() => { copiedCode.value = null; }, 1500);
          })
          .catch(() => {});
      };

      const styleElement = document.createElement('style');
      styleElement.textContent = `
        @keyframes flagFadeInOut {
          0%   { opacity: 0; transform: translateY(10px); }
          20%  { opacity: 1; transform: translateY(0); }
          80%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .flag-copy-feedback {
          animation: flagFadeInOut 1.5s ease forwards;
        }
      `;

      onMounted(() => {
        document.head.appendChild(styleElement);
      });

      onUnmounted(() => {
        if (styleElement.parentNode) styleElement.parentNode.removeChild(styleElement);
      });

      return {
        ALL_FLAG_CODES,
        FLAG_SIZES,
        selectedSize,
        gridMinWidth,
        sizeOptions,
        searchTerm,
        clearSearch,
        copyFlagCode,
        filteredFlags,
        updateFilteredFlags,
        copiedCode
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
              placeholder="Buscar por código (ej: CO, US, EU)..."
              class="w-full max-w-md"
              inputSize="small"
              @input="updateFilteredFlags"
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

          <div class="grid gap-3" :style="{ gridTemplateColumns: 'repeat(auto-fill, minmax(' + gridMinWidth + ', 1fr))' }">
            <div
              v-for="code in filteredFlags"
              :key="code"
              class="flex bg-white flex-col items-center justify-center p-2 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600 relative overflow-hidden transition-all duration-300"
              :class="{ 'scale-105 shadow-md border-emerald-500 z-10': copiedCode === code }"
              :title="code"
              @click="copyFlagCode(code)"
            >
              <div
                class="flex items-center justify-center mb-1 overflow-visible"
                :style="{
                  width: FLAG_SIZES[selectedSize],
                  height: FLAG_SIZES[selectedSize],
                  minHeight: FLAG_SIZES[selectedSize],
                  minWidth: FLAG_SIZES[selectedSize]
                }"
              >
                <g-country-flag :name="code" :size="selectedSize" />
              </div>
              <span class="text-xs text-center font-mono w-full truncate">{{ code }}</span>

              <div v-if="copiedCode === code" class="absolute inset-0 bg-emerald-50 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 flag-copy-feedback">
                <div class="text-emerald-600 mb-1">
                  <g-icon-font name="solid check-circle" size="sm" />
                </div>
                <span class="text-xs font-medium text-emerald-700">¡Copiado!</span>
              </div>
            </div>
          </div>

          <p v-if="filteredFlags.length === 0" class="text-center text-gray-400 py-8">
            No se encontraron banderas para "{{ searchTerm }}"
          </p>
        </div>
      </g-config-provider>
    `
  })
};

export const ErrorHandling: Story = {
  name: 'Manejo de errores',
  parameters: {
    docs: {
      description: {
        story: 'Demostración de cómo el componente maneja los errores cuando se pasa un código de bandera inválido.'
      },
      source: {
        code: `
<!-- Esta bandera no existe y mostrará el estado de error -->
<g-country-flag name="XX" size="md" />

<script setup>
import { GCountryFlag } from '@flash-global66/g-country-flag';
</script>
`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: { GCountryFlag, GConfigProvider },
    setup() {
      const errorSizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
      return { FLAG_SIZES, errorSizes };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div class="flex flex-wrap gap-6 items-end">
            <div
              v-for="size in errorSizes"
              :key="size"
              class="flex flex-col items-center gap-2"
            >
              <g-country-flag name="XX" :size="size" />
              <span class="text-sm text-gray-500">{{ size }} ({{ FLAG_SIZES[size] }})</span>
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando una bandera no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Este comportamiento se activa en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>La URL del SVG no puede construirse (código de país inválido)</li>
              <li>El archivo SVG existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `
  })
};
