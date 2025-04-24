import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, onMounted, ref } from 'vue'
import { GIconFont } from '../components/icon-font'
import { GConfigProvider } from '../components/config-provider'
import { ICON_SETS } from '../components/icon-font/iconSets'
import { GSegmented } from '@flash-global66/g-segmented/index.ts'
import { GInput } from '../components/input'
import { GButton } from '@flash-global66/g-button/index.ts'

export const generateIconOptions = () => {
  const options: string[] = []

  Object.entries(ICON_SETS).forEach(([weight, icons]) => {
    icons.forEach((icon) => {
      options.push(`${weight} ${icon}`)
    })
  })

  return options
}

const meta: Meta<typeof GIconFont> = {
  title: 'Basic/IconFont',
  component: GIconFont,
  parameters: {
    docs: {
      description: {
        component: `
## Descripción
Componente wrapper de <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a> 6 Pro que permite usar iconos de forma sencilla y tipada.

## Uso
Para usar un icono necesitas especificar dos partes:
1. El peso o estilo del icono (solid, regular, light, etc)
2. El nombre del icono

Ejemplo: \`name="regular home"\`

## Pesos disponibles
- **solid**: Iconos sólidos (rellenos)
- **regular**: Iconos con trazo medio  
- **light**: Iconos con trazo fino
- **brands**: Logos de marcas
- **duotone**: Iconos de dos tonos

## Agregar nuevos iconos
1. Identifica el icono en <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a>
2. Agrega la importación en la carpeta src del componente según el peso
3. Registra el nombre en el archivo iconSets.ts

## Autocompletado
El editor te mostrará las opciones disponibles gracias al tipado estricto.
        `
      }
    }
  },
  argTypes: {
    name: {
      description: 'Nombre completo del icono (peso + nombre)',
      control: 'select',
      options: generateIconOptions(),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid user' }
      }
    }
  },
  args: {
    name: 'solid user'
  }
} as Meta

export default meta
type Story = StoryObj<typeof GIconFont>

export const Primary: Story = {
  name: 'Uso básico',
  render: (args) => ({
    components: { GIconFont, GConfigProvider },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-icon-font v-bind="args" class="text-8 text-grey-700"/>
        </div>
      </g-config-provider>
    `
  })
}

export const Galería: Story = {
  name: 'Galería de iconos',
  parameters: {
    docs: {
      description: {
        story:
          'Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋'
      }
    }
  },
  render: () => ({
    components: { GIconFont, GConfigProvider, GSegmented, GInput, GButton },
    setup() {
      const selectedWeight = ref('regular')
      const searchTerm = ref('')
      const copiedIcon = ref<string | null>(null)

      const filteredIcons = computed(() => {
        if (!searchTerm.value.trim()) {
          return ICON_SETS
        }

        const searchTermLower = searchTerm.value.toLowerCase().trim()

        return Object.entries(ICON_SETS).reduce((filtered, [weight, icons]) => {
          filtered[weight] = icons.filter((icon) => icon.toLowerCase().includes(searchTermLower))
          return filtered
        }, {} as typeof ICON_SETS)
      })

      const clearSearch = () => {
        searchTerm.value = ''
      }

      const weightOptions = Object.keys(ICON_SETS).map((weight) => ({
        label: weight.charAt(0).toUpperCase() + weight.slice(1),
        value: weight
      }))

      const copyIconName = (imageName: string) => {
        navigator.clipboard
          .writeText(imageName)
          .then(() => {
            copiedIcon.value = imageName
            setTimeout(() => {
              copiedIcon.value = null
            }, 1500)
            console.log('Nombre de la ilustración copiado al portapapeles')
          })
          .catch(() => {
            alert('No se pudo copiar el nombre de la ilustración')
          })
      }

      onMounted(() => {
        const styleElement = document.createElement('style')
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
              `
        document.head.appendChild(styleElement)

        return () => {
          if (styleElement.parentNode) {
            styleElement.parentNode.removeChild(styleElement)
          }
        }
      })

      return {
        iconSets: ICON_SETS,
        selectedWeight,
        weightOptions,
        copyIconName,
        searchTerm,
        clearSearch,
        filteredIcons,
        copiedIcon
      }
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
    `
  })
}
