import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import { GSearchInput } from '@flash-global66/g-search-input/index.ts'
import { GConfigProvider } from '../components/config-provider'
import { action } from '@storybook/addon-actions'
import { version } from '../components/search-input/package.json'

export default {
  title: "Form/SearchInput",
  component: GSearchInput,
  parameters: {
    docs: {
      description: {
        component: `
# Search Input Component

El componente SearchInput proporciona una manera optimizada para implementar campos de búsqueda con funcionalidades avanzadas.

> Versión actual: ${version}
>
> Este componente está basado en G-Input y desarrollado siguiendo los lineamientos del Global Design System

## Características
- Campo de búsqueda con icono de lupa integrado
- Botón de limpiar automático cuando hay texto
- Tiempo de debounce configurable para optimizar llamadas
- Soporte para estados de carga (skeleton y búsqueda en progreso)
- Integración completa con el sistema de diseño
- Optimización de rendimiento para búsquedas en tiempo real

## Instalación

\`\`\`bash
yarn add @flash-global66/g-search-input
\`\`\`

## Dependencias
Este componente extiende la funcionalidad de G-Input y requiere las siguientes dependencias:
- **@flash-global66/g-input**: Componente base para la entrada de texto
- **@flash-global66/g-skeleton**: Para mostrar estados de carga
- **@flash-global66/g-icon-font**: Para los iconos de búsqueda y limpiar
- **@vueuse/core**: Para la funcionalidad de debounce

\`\`\`bash
# Instalar dependencias requeridas
yarn add @flash-global66/g-input @flash-global66/g-skeleton @flash-global66/g-icon-font @vueuse/core
\`\`\`

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
// Importar estilos del SearchInput
@use '@flash-global66/g-search-input/styles.scss' as *;

// Importar los estilos de los componentes dependientes
@use '@flash-global66/g-input/styles.scss' as *;
@use '@flash-global66/g-skeleton/skeleton-item.styles.scss' as *;
\`\`\`

## Uso básico

\`\`\`vue
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

## Optimización de búsquedas
- El componente implementa debounce para evitar múltiples llamadas innecesarias
- El tiempo de espera es configurable mediante la propiedad \`debounceTime\` (ms)
- La búsqueda se dispara automáticamente con el evento @search

## Eventos
- **update:modelValue**: Se emite cuando cambia el valor del input
- **search**: Se emite cuando se realiza una búsqueda (después del debounce o al presionar Enter)
- **clear**: Se emite cuando se limpia el input con el botón X

## Métodos expuestos
El componente expone los siguientes métodos que puedes utilizar mediante refs:

- **focus()**: Enfoca el campo de búsqueda
- **blur()**: Quita el foco del campo de búsqueda
- **clear()**: Limpia el campo de búsqueda y emite los eventos correspondientes

\`\`\`vue
<template>
  <g-search-input ref="searchInputRef" v-model="search" />
  <g-button @click="focusSearch">Enfocar búsqueda</g-button>
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';
import { GButton } from '@flash-global66/g-button';

const search = ref('');
const searchInputRef = ref(null);

const focusSearch = () => {
  searchInputRef.value.focus();
};
</script>
\`\`\`

## Contexto de uso recomendado
El componente SearchInput está diseñado para:
- Barras de búsqueda en aplicaciones web
- Filtros en tablas y listados
- Búsqueda en tiempo real con debounce
- Formularios que requieren campos de búsqueda optimizados

## Herencia de propiedades
SearchInput extiende todas las propiedades disponibles en G-Input, por lo que puedes usar cualquier propiedad de G-Input directamente en SearchInput.
`,
      },
      source: {
        language: "vue",
        format: true,
      },
    },
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
} as Meta<typeof GSearchInput>;

const Template: StoryFn<typeof GSearchInput> = (args) => ({
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

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Buscar...'
}

Basic.parameters = {
  docs: {
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
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Buscar',
  placeholder: 'Buscar',
  helpText: 'Escribe para buscar'
}

WithLabel.parameters = {
  docs: {
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
};

export const States = () => ({
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

States.parameters = {
  docs: {
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
</div>
`, language: 'html'
    }
  }
}

export const WithDebounce = () => ({
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
WithDebounce.parameters = {
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
}

