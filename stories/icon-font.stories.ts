import type { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import { GIconFont } from "@flash-global66/g-icon-font/index.ts";
import { GConfigProvider } from "../components/config-provider";
import { ICON_SETS } from "@flash-global66/g-icon-font/index.ts";
import { GSegmented } from "@flash-global66/g-segmented/index.ts";
import { GInput } from "@flash-global66/g-input/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";
import {
  version,
  peerDependencies,
} from "@flash-global66/g-icon-font/package.json";
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
  generateIconOptions,
} from "../helper/documentation-stories";

const meta: Meta<typeof GIconFont> = {
  title: "Basic/IconFont",
  component: GIconFont,
  parameters: {
    docs: {
      description: {
        component: `
El componente IconFont es un wrapper de <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a> 6 Pro que permite usar iconos de forma sencilla, tipada y consistente en toda la aplicación. Facilita la implementación de iconos mediante una sintaxis simple y proporciona autocompletado gracias al tipado estricto.

> Versión actual: ${version}

## Características
- Integración con Font Awesome 6 Pro
- Múltiples pesos/estilos de iconos disponibles
- Tipado estricto para autocompletado
- Fácil de implementar y mantener
- Tamaños personalizables
- Animaciones y transformaciones

### Instalación

\`\`\`bash
yarn add @flash-global66/g-icon-font
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GIconFont } from '@flash-global66/g-icon-font'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

## Cómo añadir nuevos iconos al componente

Para extender la biblioteca con iconos adicionales de Font Awesome, sigue estos pasos:

1. **Busca y selecciona** el icono deseado en <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a> (requiere licencia Pro para iconos premium)

2. **Agrega la importación** en el archivo correspondiente de la carpeta \`src/lib/\` según el peso del icono:
   - \`fas-solid-pro.ts\` para iconos solid (fas)
   - \`far-regular-pro.ts\` para iconos regular (far)
   - \`fal-light-pro.ts\` para iconos light (fal)
   - \`fab-free.ts\` para iconos de marcas (fab)
   - \`fad-duotone-pro.ts\` para iconos duotone (fad)

3. **Registra el nombre** del icono en \`src/icon-sets.ts\` para habilitar el autocompletado y validación de tipos

### Ejemplo de uso
Pesos disponibles
- **solid**: Iconos sólidos (fas)
- **regular**: Iconos con trazo medio (far)
- **light**: Iconos con trazo fino (fal)
- **brands**: Logos de marcas (fab)
- **duotone**: Iconos de dos tonos (fad)

\`\`\`ts
<script setup lang="ts">
import { GIconFont } from '@flash-global66/g-icon-font';
</script>

<template>
  <g-icon-font name="solid user" />
</template>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    name: {
      description: "Nombre completo del icono (peso + nombre)",
      control: "select",
      options: generateIconOptions(),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "solid user" },
      },
    },
    size: {
      description: "Tamaño del icono",
      control: "select",
      options: [
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "1x",
        "2x",
        "3x",
        "4x",
        "5x",
        "6x",
        "7x",
        "8x",
        "9x",
        "10x",
        "16px",
        "24px",
        "32px",
        "48px",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    fixedWidth: {
      description: "Usar ancho fijo independientemente del icono",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    rotation: {
      description: "Rotación del icono en grados",
      control: "select",
      options: [0, 90, 180, 270],
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "undefined" },
      },
    },
    spin: {
      description: "Aplica una animación de giro continuo",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    pulse: {
      description: "Aplica una animación de giro en 8 pasos",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    pull: {
      description: "Alineación del icono (izquierda o derecha)",
      control: "select",
      options: ["left", "right"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    bounce: {
      description: "Aplica una animación de rebote",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    shake: {
      description: "Aplica una animación de sacudida",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    beat: {
      description: "Aplica una animación de latido",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fade: {
      description: "Aplica una animación de desvanecimiento",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    beatFade: {
      description: "Combina las animaciones de latido y desvanecimiento",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    title: {
      description: "Título para el icono (útil para accesibilidad)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    ariaLabel: {
      description: "Etiqueta ARIA para el icono (accesibilidad)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    ariaHidden: {
      description:
        "Indica si el icono debe ser ocultado para lectores de pantalla",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  args: {
    name: "solid user",
    size: "2xl",
  },
} as Meta;

export default meta
type Story = StoryObj<typeof GIconFont>

export const Primary: Story = {
  name: "Uso básico",
  render: (args) => ({
    components: { GIconFont, GConfigProvider },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-icon-font v-bind="args"/>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Galería: Story = {
  name: "Galería de iconos",
  parameters: {
    docs: {
      description: {
        story:
          "Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋",
      },
    },
  },
  render: () => ({
    components: { GIconFont, GConfigProvider, GSegmented, GInput, GButton },
    setup() {
      const selectedWeight = ref("regular");
      const searchTerm = ref("");

      const filteredIcons = computed(() => {
        if (!searchTerm.value.trim()) {
          // Ordenamos alfabéticamente todos los conjuntos de iconos
          return Object.entries(ICON_SETS).reduce((sorted, [weight, icons]) => {
            sorted[weight] = [...icons].sort((a, b) => a.localeCompare(b));
            return sorted;
          }, {} as typeof ICON_SETS);
        }

        const searchTermLower = searchTerm.value.toLowerCase().trim();

        // Filtramos y ordenamos alfabéticamente los resultados
        return Object.entries(ICON_SETS).reduce((filtered, [weight, icons]) => {
          filtered[weight] = [...icons]
            .filter((icon) => icon.toLowerCase().includes(searchTermLower))
            .sort((a, b) => a.localeCompare(b));
          return filtered;
        }, {} as typeof ICON_SETS);
      });

      const clearSearch = () => {
        searchTerm.value = "";
      };

      const weightOptions = Object.keys(ICON_SETS).map((weight) => ({
        label: weight.charAt(0).toUpperCase() + weight.slice(1),
        value: weight,
      }));

      const copyIconName = (iconName: string) => {
        navigator.clipboard
          .writeText(iconName)
          .then(() => {
            console.log("Nombre del icono copiado al portapapeles");
          })
          .catch(() => {
            alert("No se pudo copiar el nombre del icono");
          });
      };

      return {
        iconSets: ICON_SETS,
        selectedWeight,
        weightOptions,
        copyIconName,
        searchTerm,
        clearSearch,
        filteredIcons,
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedWeight"
            :options="weightOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
            >
              Limpiar
            </g-button>
          </div>


          <div v-for="(icons, weight) in filteredIcons" :key="weight">
            <div v-if="selectedWeight === weight">
              <h3 class="text-lg font-medium mb-4 capitalize">{{ weight }}</h3>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="icon in icons"
                  :key="icon"
                  class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600 relative overflow-hidden transition-all duration-300"
                  :class="{ 'copy-animation': copiedIcon === \`\${weight} \${icon}\` }"
                  @click="copyIconName(\`\${weight} \${icon}\`)"
                >
                  <g-icon-font 
                    :name="\`\${weight} \${icon}\`" 
                    class="text-6 mb-2" 
                    :class="{ 'invisible': copiedIcon === \`\${weight} \${icon}\` }"
                  />
                  <span 
                    class="text-xs text-center" 
                    :class="{ 'invisible': copiedIcon === \`\${weight} \${icon}\` }"
                  >
                    {{ icon }}
                  </span>

                  <div v-if="copiedIcon === \`\${weight} \${icon}\` " class="absolute inset-0 bg-emerald-50 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 copy-feedback">
                    <div class="text-emerald-600 mb-1">
                      <g-icon-font name="solid check-circle" size="lg" />
                    </div>
                    <span class="text-xs font-medium text-emerald-700">¡Copiado!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Sizes: Story = {
  name: "Tamaños",
  parameters: {
    docs: {
      description: {
        story:
          "El componente admite diferentes tamaños, ya sea utilizando las constantes predefinidas de Font Awesome o valores personalizados (px, em, rem). No es necesario declararlo en la propiedad size. También se puede usar la propiedad class",
      },
    },
  },
  render: () => ({
    components: { GIconFont, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap items-end gap-6">
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="xs" />
            <span class="text-xs mt-2">xs</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="sm" />
            <span class="text-xs mt-2">sm</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" />
            <span class="text-xs mt-2">default</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="lg" />
            <span class="text-xs mt-2">lg</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="xl" />
            <span class="text-xs mt-2">xl</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="2xl" />
            <span class="text-xs mt-2">2xl</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="1x" />
            <span class="text-xs mt-2">1x</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="2x" />
            <span class="text-xs mt-2">2x</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="3x" />
            <span class="text-xs mt-2">3x</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="24px" />
            <span class="text-xs mt-2">24px</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid user" size="2em" />
            <span class="text-xs mt-2">2em</span>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Animations: Story = {
  name: "Animaciones",
  parameters: {
    docs: {
      description: {
        story:
          "El componente soporta diversas animaciones incorporadas de Font Awesome. Estas animaciones se activan mediante propiedades booleanas y son útiles para indicar estados como carga, procesamiento o llamar la atención del usuario. Utiliza animaciones con moderación y propósito",
      },
    },
  },
  render: () => ({
    components: { GIconFont, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap gap-lg">
          <div class="flex flex-col items-center">
            <g-icon-font name="solid spinner" spin size="2x" />
            <span class="text-xs mt-2">spin</span>
            <span class="text-xs text-gray-500">Giro continuo</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="solid spinner" pulse size="2x" />
            <span class="text-xs mt-2">pulse</span>
            <span class="text-xs text-gray-500">Giro en 8 pasos</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="regular bell" bounce size="2x" />
            <span class="text-xs mt-2">bounce</span>
            <span class="text-xs text-gray-500">Efecto rebote</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="regular bell" shake size="2x" />
            <span class="text-xs mt-2">shake</span>
            <span class="text-xs text-gray-500">Movimiento lateral</span>
          </div>

          <div class="flex flex-col items-center">
            <g-icon-font name="regular heart" beat size="2x" />
            <span class="text-xs mt-2">beat</span>
            <span class="text-xs text-gray-500">Efecto latido</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="regular heart" fade size="2x" />
            <span class="text-xs mt-2">fade</span>
            <span class="text-xs text-gray-500">Desvanecimiento</span>
          </div>
          <div class="flex flex-col items-center">
            <g-icon-font name="regular heart" beatFade size="2x" />
            <span class="text-xs mt-2">beatFade</span>
            <span class="text-xs text-gray-500">Latido con desvanecimiento</span>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const TransformationsAndStyling: Story = {
  name: "Transformaciones y Estilización",
  parameters: {
    docs: {
      description: {
        story:
          "El componente permite aplicar diversas transformaciones como rotación y diferentes estilos visuales.",
      },
    },
  },
  render: () => ({
    components: { GIconFont, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <h3 class="text-lg font-medium">Rotación</h3>
          <div class="flex flex-wrap gap-8">
            <div class="flex flex-col items-center">
              <g-icon-font name="solid arrow-right" size="2x" />
              <span class="text-xs mt-2">Original</span>
            </div>
            <div class="flex flex-col items-center">
              <g-icon-font name="solid arrow-right" rotation="90" size="2x" />
              <span class="text-xs mt-2">rotation="90"</span>
            </div>
            <div class="flex flex-col items-center">
              <g-icon-font name="solid arrow-right" rotation="180" size="2x" />
              <span class="text-xs mt-2">rotation="180"</span>
            </div>
            <div class="flex flex-col items-center">
              <g-icon-font name="solid arrow-right" rotation="270" size="2x" />
              <span class="text-xs mt-2">rotation="270"</span>
            </div>
          </div>

          <h3 class="text-lg font-medium mt-8">Ancho fijo</h3>
          <div class="flex gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2">Sin ancho fijo</h4>
              <div class="bg-gray-100 p-4 rounded w-40 border border-gray-300">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center">
                    <g-icon-font name="solid home" class="border border-red-500" />
                    <span class="text-sm ml-2">Inicio</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid user" class="border border-red-500" />
                    <span class="text-sm ml-2">Perfil</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid ellipsis-v" class="border border-red-500" />
                    <span class="text-sm ml-2">Estadísticas</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid question-circle" class="border border-red-500" />
                    <span class="text-sm ml-2">Ayuda</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-sm font-medium mb-2">Con ancho fijo</h4>
              <div class="bg-gray-100 p-4 rounded w-40">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center">
                    <g-icon-font name="solid home" fixedWidth class="border border-red-500" />
                    <span class="text-sm ml-2">Inicio</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid user" fixedWidth class="border border-red-500" />
                    <span class="text-sm ml-2">Perfil</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid ellipsis-v" fixedWidth class="border border-red-500" />
                    <span class="text-sm ml-2">Estadísticas</span>
                  </div>
                  <div class="flex items-center">
                    <g-icon-font name="solid question-circle" fixedWidth class="border border-red-500" />
                    <span class="text-sm ml-2">Ayuda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>El ancho fijo (<code>fixedWidth</code>) es especialmente útil en menús, listas y navegación, donde se necesita alineación consistente independientemente del ancho natural del icono.</p>
        </div>
      </g-config-provider>
    `,
  }),
};
