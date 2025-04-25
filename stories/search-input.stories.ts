import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { GSearchInput } from '@flash-global66/g-search-input/index.ts'
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts"
import { action } from '@storybook/addon-actions'

import { version, peerDependencies } from '@flash-global66/g-search-input/package.json'
import { generatePeerDepsList, generatePeerDepsInstalls } from "../helper/documentation-stories"

const meta: Meta<typeof GSearchInput> = {
  title: "Form/SearchInput",
  component: GSearchInput,
  parameters: {
    docs: {
      description: {
        component: `
El componente SearchInput proporciona un campo de búsqueda optimizado con funcionalidades avanzadas como debounce, estados de carga y limpieza automática. Es ideal para implementar búsquedas en tiempo real, filtros en tablas o listados, y cualquier situación donde se requiera una búsqueda eficiente y con buena experiencia de usuario.

> Versión actual: ${version}

## Características
- Campo de búsqueda con icono de lupa integrado
- Botón de limpiar automático cuando hay texto
- Tiempo de debounce configurable para optimizar llamadas
- Soporte para estados de carga (skeleton y búsqueda en progreso)
- Integración completa con el sistema de diseño
- Optimización de rendimiento para búsquedas en tiempo real
- Hereda todas las propiedades del componente Input

### Instalación

\`\`\`bash
yarn add @flash-global66/g-search-input
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GSearchInput } from '@flash-global66/g-search-input'

# recomendado importar en los estilos globales
import '@flash-global66/g-search-input/styles.scss'
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

\`\`\`html
<template>
  <g-search-input 
    v-model="search"
    placeholder="Buscar..."
    @search="handleSearch"
    @clear="handleClear"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');

const handleSearch = (query) => {
  // Aquí puedes implementar tu lógica de búsqueda
  console.log('Buscando:', query);
};

const handleClear = () => {
  // Lógica para cuando se limpia el input
  console.log('Búsqueda borrada');
};
</script>
\`\`\`
`
      }
    }
  },
  argTypes: {
    modelValue: {
      control: "text",
      description: "Valor del input (v-model)",
      table: {
        type: { summary: "string" },
        category: "Propiedades principales",
      },
    },
    placeholder: {
      control: "text",
      description: "Texto placeholder del input",
      table: {
        type: { summary: "string" },
        category: "Contenido",
      },
    },
    label: {
      control: "text",
      description: "Etiqueta del input",
      table: {
        type: { summary: "string" },
        category: "Contenido",
      },
    },
    helpText: {
      control: "text",
      description: "Texto de ayuda",
      table: {
        type: { summary: "string" },
        category: "Contenido",
      },
    },
    messageError: {
      control: "text",
      description: "Mensaje de error a mostrar",
      table: {
        type: { summary: "string" },
        category: "Estado y apariencia",
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el input",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Estado y apariencia",
      },
    },
    initialLoading: {
      control: "boolean",
      description: "Estado de carga inicial (skeleton)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Estado y apariencia",
      },
    },
    searchingLoading: {
      control: "boolean",
      description: "Estado de búsqueda en progreso",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Estado y apariencia",
      },
    },
    debounceTime: {
      control: "number",
      description: "Tiempo de espera para el debounce (ms)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
        category: "Comportamiento",
      },
    },
    "onUpdate:modelValue": {
      description: "Se emite al actualizar el valor",
      table: {
        category: "Eventos",
        type: { summary: "(value: string) => void" },
      },
    },
    onSearch: {
      description: "Se emite al realizar una búsqueda (con debounce o al presionar Enter)",
      table: {
        category: "Eventos",
        type: { summary: "(query: string) => void" },
      },
    },
    onClear: {
      description: "Se emite al limpiar el input",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    placeholder: 'Buscar...',
    label: '',
    helpText: '',
    messageError: '',
    disabled: false,
    initialLoading: false,
    searchingLoading: false,
    debounceTime: 300,
  }
};

export default meta;
type Story = StoryObj<typeof GSearchInput>;

export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente SearchInput. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: `
<g-search-input
  v-model="search"
  placeholder="Buscar..."
  @search="onSearch"
  @clear="onClear"
/>
`, language: 'html'
      }
    }
  },
  render: (args) => ({
    components: { GSearchInput, GConfigProvider },
    setup() {
      const search = ref('')
      return { 
        args,
        search,
        onSearch: action('search'),
        onClear: action('clear')
      }
    },
    template: `
      <g-config-provider>
        <g-search-input
          v-model="search"
          v-bind="args"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    `
  })
}

export const WithLabel: Story = {
  name: 'Con etiqueta',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede incluir una etiqueta y texto de ayuda para mejorar la comprensión del usuario.'
      },
      source: {
        code: `
<g-search-input
  v-model="search"
  label="Buscar"
  placeholder="Buscar"
  help-text="Escribe para buscar"
  @search="onSearch"
  @clear="onClear"
/>
`, language: "html",
      },
    },
  },
  render: (args) => ({
    components: { GSearchInput, GConfigProvider },
    setup() {
      const search = ref('')
      return { 
        search,
        onSearch: action('search'),
        onClear: action('clear')
      }
    },
    template: `
      <g-config-provider>
        <g-search-input
          v-model="search"
          label="Buscar"
          placeholder="Buscar"
          help-text="Escribe para buscar"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    `
  })
}

export const States: Story = {
  name: 'Estados',
  parameters: {
    docs: {
      description: {
        story: 'El componente SearchInput tiene varios estados que representan diferentes situaciones de uso: normal, error, deshabilitado, carga de búsqueda y carga inicial.'
      },
      source: {
        code: `
<!-- Estado normal -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda normal"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de error -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda con error"
  message-error="Ha ocurrido un error"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado deshabilitado -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda deshabilitada"
  disabled
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de búsqueda en progreso -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda en progreso"
  searching-loading
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de carga inicial -->
<g-search-input
  placeholder="Carga inicial"
  initial-loading
/>
`, language: 'html'
      }
    }
  },
  render: () => ({
    components: { GSearchInput, GConfigProvider },
    setup() {
      const search = ref('')
      return { 
        search,
        onSearch: action('search'),
        onClear: action('clear')
      }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-semibold mb-2">Estado normal</h3>
            <p class="text-sm text-gray-500 mb-2">Estado predeterminado del componente con funcionalidad completa.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda normal"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de error</h3>
            <p class="text-sm text-gray-500 mb-2">Se muestra cuando hay un error en la búsqueda o validación.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda con error"
              message-error="Ha ocurrido un error"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado deshabilitado</h3>
            <p class="text-sm text-gray-500 mb-2">El componente no permite interacción cuando está deshabilitado.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda deshabilitada"
              disabled
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de búsqueda en progreso</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un indicador de carga durante la búsqueda.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda en progreso"
              searching-loading
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga inicial</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un skeleton cuando el componente está cargando datos iniciales.</p>
            <g-search-input
              placeholder="Carga inicial"
              initial-loading
            />
          </div>
        </div>
      </g-config-provider>
    `
  })
}

export const WithDebounce: Story = {
  name: 'Uso de debounce',
  parameters: {
    docs: {
      description: {
        story: 'El componente SearchInput incluye funcionalidad de debounce para optimizar las búsquedas, evitando llamadas innecesarias mientras el usuario está escribiendo.'
      },
      source: {
        code: `
<template>
  <g-search-input
    v-model="search"
    placeholder="Escribe para buscar..."
    :debounce-time="1000"
    @search="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const lastSearch = ref('');

const handleSearch = (query) => {
  lastSearch.value = query;
  // Aquí realizarías la llamada a tu API de búsqueda
};
</script>
`, language: 'html'
      }
    }
  },
  render: () => ({
    components: { GSearchInput, GConfigProvider },
    setup() {
      const search = ref('')
      const lastSearch = ref('')
      const searchCount = ref(0)
      
      const handleSearch = (query: string) => {
        lastSearch.value = query
        searchCount.value++
        action('search')(query)
      }
      
      return { search, lastSearch, searchCount, handleSearch }
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Debounce en acción</h3>
            <p class="text-sm text-gray-600 mb-4">
              El debounce espera hasta que el usuario deje de escribir antes de emitir el evento de búsqueda.
              En este ejemplo, se configura un tiempo de espera de <strong>1000ms (1 segundo)</strong>.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Escribe para buscar..."
              :debounce-time="1000"
              @search="handleSearch"
            />
            
            <div class="mt-4 p-3 bg-white rounded border text-sm">
              <div class="mb-2">
                <span class="font-medium">Valor actual:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ search }}</span>
                <span class="text-gray-400 ml-2">(se actualiza en tiempo real)</span>
              </div>
              <div>
                <span class="font-medium">Última búsqueda:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ lastSearch }}</span>
                <span class="text-gray-400 ml-2">(se actualiza después del debounce o al presionar Enter)</span>
              </div>
              <div class="mt-2 text-gray-500">
                Número de búsquedas realizadas: {{ searchCount }}
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">¿Cómo funciona el debounce?</h3>
            <ol class="list-decimal pl-5 space-y-2 text-sm">
              <li>Cuando escribes en el campo de búsqueda, el componente actualiza el v-model inmediatamente</li>
              <li>El componente espera el tiempo configurado (debounceTime) antes de emitir el evento <code>search</code></li>
              <li>Si sigues escribiendo dentro de ese tiempo, el temporizador se reinicia</li>
              <li>Solo cuando dejas de escribir por el tiempo configurado, o presionas Enter, se emite el evento</li>
              <li>Esto reduce significativamente el número de búsquedas y mejora el rendimiento</li>
            </ol>
          </div>
        </div>
      </g-config-provider>
    `
  })
}

export const ApiIntegration: Story = {
  name: 'Integración con API',
  parameters: {
    docs: {
      description: {
        story: 'Este ejemplo muestra cómo integrar el componente SearchInput con una API, manejando estados de carga, resultados y errores.'
      },
      source: {
        code: `
<template>
  <g-search-input
    v-model="search"
    placeholder="Buscar nombres..."
    :searching-loading="isSearching"
    :message-error="errorMessage"
    :debounce-time="500"
    @search="searchInApi"
    @clear="handleClear"
  />
  
  <!-- Resultados -->
  <div v-if="isSearching">
    Buscando nombres...
  </div>
  
  <div v-else-if="hasError">
    Error: {{ errorMessage }}
  </div>
  
  <div v-else-if="searchResults.length === 0 && search">
    No se encontraron nombres que coincidan con "{{ search }}"
  </div>
  
  <div v-else-if="searchResults.length > 0">
    <div>Resultados ({{ searchResults.length }}):</div>
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const isSearching = ref(false);
const hasError = ref(false);
const searchResults = ref([]);
const errorMessage = ref('');

const searchInApi = async (query) => {
  isSearching.value = true;
  hasError.value = false;
  errorMessage.value = '';
  
  try {
    // Reemplazar con tu llamada a API real
    const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
    
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    
    const data = await response.json();
    searchResults.value = data.results;
  } catch (error) {
    hasError.value = true;
    errorMessage.value = error.message;
  } finally {
    isSearching.value = false;
  }
};

const handleClear = () => {
  searchResults.value = [];
  hasError.value = false;
  errorMessage.value = '';
};
</script>
`, language: 'html'
      }
    }
  },
  render: () => ({
    components: { GSearchInput, GConfigProvider },
    setup() {
      const search = ref('')
      const isSearching = ref(false)
      const hasError = ref(false)
      const searchResults = ref<{ id: number; name: string; }[]>([])
      const errorMessage = ref('')
      
      const mockData = [
        { id: 1, name: 'Juan Pérez' },
        { id: 2, name: 'María López' },
        { id: 3, name: 'Carlos González' },
        { id: 4, name: 'Ana Martínez' },
        { id: 5, name: 'Ricardo Ruben' },
        { id: 6, name: 'Lucía Rodríguez' },
        { id: 7, name: 'Alejandro Morales' },
        { id: 8, name: 'Valentina Torres' },
        { id: 9, name: 'Diego Hernández' },
        { id: 10, name: 'Sofía Ramírez' },
      ]
      
      const searchInApi = (query) => {
        
        isSearching.value = true
        hasError.value = false
        errorMessage.value = ''
        searchResults.value = []
        
        setTimeout(() => {
          try {
            if (Math.random() < 0.2 && query.length > 0) {
              throw new Error('Error de conexión al servidor')
            }
            
            if (query) {
              searchResults.value = mockData.filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase())
              )
            } else {
              searchResults.value = []
            }
            
            action('API search success')(searchResults.value)
          } catch (error) {
            hasError.value = true
            errorMessage.value = error.message
            action('API search error')(error.message)
          } finally {
            isSearching.value = false
          }
        }, 1000)
      }
      
      const handleClear = () => {
        searchResults.value = []
        hasError.value = false
        errorMessage.value = ''
        action('clear')()
      }
      
      return { 
        search, 
        isSearching, 
        hasError, 
        searchResults, 
        errorMessage, 
        searchInApi,
        handleClear
      }
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Simulación de búsqueda en API</h3>
            <p class="text-sm text-gray-600 mb-4">
              Este ejemplo simula una integración completa con una API de búsqueda de nombres.
              <br>
              El tiempo de respuesta es de aproximadamente 1 segundo y hay un 20% de probabilidad de error.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Buscar nombres..."
              :searching-loading="isSearching"
              :message-error="errorMessage"
              :debounce-time="500"
              @search="searchInApi"
              @clear="handleClear"
            />
            
            <div class="mt-4 p-3 bg-white rounded border">
              <div v-if="isSearching" class="text-sm text-gray-500">
                Buscando nombres...
              </div>
              
              <div v-else-if="hasError" class="text-sm text-red-500">
                Error: {{ errorMessage }}
              </div>
              
              <div v-else-if="searchResults.length === 0 && search" class="text-sm text-gray-500">
                No se encontraron nombres que coincidan con "{{ search }}"
              </div>
              
              <div v-else-if="searchResults.length > 0" class="text-sm">
                <div class="font-medium mb-2">Resultados ({{ searchResults.length }}):</div>
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="result in searchResults" :key="result.id">
                    {{ result.name }}
                  </li>
                </ul>
              </div>
              
              <div v-else class="text-sm text-gray-500">
                Escribe para buscar nombres
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  })
}

