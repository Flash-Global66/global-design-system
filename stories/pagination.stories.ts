// external imports
import { ref, computed } from 'vue'
import { StoryObj } from '@storybook/vue3'

// components
import { GPagination } from '@flash-global66/g-pagination/index.ts'
import { GButton } from '@flash-global66/g-button'

// config provider
import { GConfigProvider } from '../components/config-provider'

const meta = {
  title: 'Data/Pagination',
  component: GPagination,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GPagination\` - Componente para navegar entre múltiples páginas de datos.

> Este componente usa la versión \`2.9.7\` de Element Plus.

**Características principales:**

- Navegación intuitiva entre páginas
- Soporte para paginación controlada
- Manejo automático de límites de página

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-pagination
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-icon-button
> - element-plus
> - vue

📥 **Importación básica**

\`\`\`typescript
import { GPagination } from '@flash-global66/g-pagination'
import '@flash-global66/g-pagination/styles.scss'
\`\`\`
`
      }
    }
  },
  argTypes: {
    // 1. Estado y Control
    currentPage: {
      name: 'current-page / v-model:current-page',
      description: 'Número de página actual. requiere listener (update:current-page) para cambios',
      control: 'number',
      table: {
        category: 'Estado y Control',
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      }
    },
    align: {
      description: 'Alineación del componente',
      control: 'select',
      options: ['left', 'center', 'right'],
      table: {
        category: 'Estado y Control',
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    },
    pageSize: {
      name: 'page-size / v-model:page-size',
      description: 'Número de elementos por página. requiere listener (update:current-size) para cambios',
      control: 'number',
      table: {
        category: 'Estado y Control',
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      }
    },
    disabled: {
      description: 'Deshabilita el componente de paginación',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    hideOnSinglePage: {
      name: 'hide-on-single-page',
      description: 'Oculta la paginación cuando solo hay una página',
      control: 'boolean',
      table: {
        category: 'Estado y Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },

    total: {
      description: 'Número total de elementos',
      control: 'number',
      table: {
        category: 'Estado y Control',
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      }
    },
    pageCount: {
      name: 'page-count',
      description: 'Número total de páginas (alternativa a total). Tiene prioridad sobre total si se proporcionan ambos',
      control: 'number',
      table: {
        category: 'Estado y Control',
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      }
    },
    pagerCount: {
      name: 'pager-count',
      description: 'Número de botones de página mostrados (debe ser impar entre 5 y 21)',
      control: { type: 'range', min: 5, max: 21, step: 2 },
      table: {
        category: 'Estado y Control',
        type: { summary: 'number' },
        defaultValue: { summary: '7' }
      }
    },
    
    // 4. Eventos
    change: {
      description: 'Se dispara cuando cambia la página actual o el tamaño de página',
      table: {
        category: 'Eventos',
        type: { summary: 'function' },
        defaultValue: { summary: '(currentPage: number, pageSize: number) => void' }
      }
    },
    'prev-click': {
      description: 'Se dispara cuando se hace clic en el botón anterior',
      table: {
        category: 'Eventos',
        type: { summary: 'function' },
        defaultValue: { summary: '(currentPage: number) => void' }
      }
    },
    'next-click': {
      description: 'Se dispara cuando se hace clic en el botón siguiente',
      table: {
        category: 'Eventos',
        type: { summary: 'function' },
        defaultValue: { summary: '(currentPage: number) => void' }
      }
    },
    'update:current-page': {
      description: 'Se dispara cuando cambia la página actual (para v-model)',
      table: {
        category: 'Eventos',
        type: { summary: 'function' },
        defaultValue: { summary: '(currentPage: number) => void' }
      }
    },
    'update:page-size': {
      description: 'Se dispara cuando cambia el tamaño de página (para v-model)',
      table: {
        category: 'Eventos',
        type: { summary: 'function' },
        defaultValue: { summary: '(pageSize: number) => void' }
      }
    },
  },
  args: {
    total: 1000,
    align: 'left',
    pagerCount: 7,
    disabled: false,
    hideOnSinglePage: true,
    currentPage: undefined,
    pageSize: undefined,
  }
}
export default meta
type Story = StoryObj<typeof GPagination>

export const Basic: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico de paginación con 1000 elementos totales.'
      }
    }
  },
  render: (args) => ({
    components: { GPagination, GConfigProvider },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <g-pagination v-bind="args" />
      </g-config-provider>
    `
  })
}

export const LargeDataset: Story = {
  name: 'Controlado con v-model',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de paginación controlada con v-model, mostrando la página actual.'
      }
    }
  },
  render: (args) => ({
    components: { GPagination, GConfigProvider },
    setup() {
      const currentPage = ref(1)
      const pageSize = 10
      const total = 10000
      
      const startItem = computed(() => {
        return (currentPage.value - 1) * pageSize + 1
      })
      
      const endItem = computed(() => {
        return Math.min(currentPage.value * pageSize, total)
      })
      
      return { 
        args, 
        currentPage, 
        pageSize, 
        total,
        startItem,
        endItem,
        totalPages: Math.ceil(total / pageSize)
      }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div class="bg-grey-20 p-xs rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">
              Mostrando elementos {{ startItem }} - {{ endItem }} de {{ total }} en total
            </p>
          </div>
          
          <div class="flex justify-center">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
            />
          </div>
        </div>
      </g-config-provider>
    `
  })
}

export const CardPagination: Story = {
  name: 'Paginación de tarjetas',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo práctico de paginación aplicada a una colección de tarjetas, donde cada tarjeta muestra su número y la página actual.'
      }
    }
  },
  render: (args) => ({
    components: { GPagination, GConfigProvider, GButton },
    setup() {
      const currentPage = ref(1)
      const pageSize = ref(6)
      const total = 30
      
      // Generar datos para las tarjetas
      const allCards = Array.from({ length: total }, (_, i) => ({
        id: i + 1,
        content: `Contenido de ejemplo para la tarjeta ${i + 1}`
      }))
      
      const visibleCards = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize.value
        return allCards.slice(startIndex, startIndex + pageSize.value)
      })
      
      return { 
        args, 
        currentPage, 
        pageSize, 
        total, 
        visibleCards,
        totalPages: Math.ceil(total / pageSize.value)
      }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div class="bg-grey-20 p-4 rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">Mostrando {{ visibleCards.length }} tarjetas de {{ total }} en total</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="card in visibleCards" 
              :key="card.id"
              class="border border-grey-200 rounded-lg overflow-hidden flex flex-col"
            >
              <div class="bg-gray-50 p-4 border-b border-grey-200">
                <div class="flex justify-between items-center">
                  <h3 class="font-bold">ID: {{ card.id }}</h3>
                  <span class="bg-primary-500 text-white px-2 py-1 rounded-full text-xs">
                    Página {{ currentPage }}
                  </span>
                </div>
              </div>
              
              <div class="p-4 flex-grow">
                <p>{{ card.content }}</p>
              </div>
              
              <div class="bg-gray-50 p-4 border-t border-grey-200 flex justify-end">
                <g-button size="small">Ver detalles</g-button>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center mt-4">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
              :hide-on-single-page="true"
            />
          </div>
        </div>
      </g-config-provider>
    `
  })
}


