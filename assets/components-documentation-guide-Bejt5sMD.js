import{af as n,ag as s}from"./index-Cx0cs9Aw.js";import{u as i}from"./index-dSk5yaT9.js";import"./iframe-bySc_Cox.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CeQnsxAM.js";import"./index-DrFu-skq.js";function o(a){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Concept/Guide/Components Documentation Guide"}),`
`,n.jsx(e.h3,{id:"guía-para-la-documentación-de-componentes-en-b2b-ui-framework",children:"Guía para la Documentación de Componentes en B2B UI Framework"}),`
`,n.jsx(e.h2,{id:"introducción",children:"Introducción"}),`
`,n.jsx(e.p,{children:"Esta guía establece los lineamientos para crear una documentación uniforme y completa para los componentes de nuestra biblioteca B2B UI Framework. Una documentación bien estructurada facilita la adopción de los componentes y mejora la experiencia del desarrollador."}),`
`,n.jsx(e.h3,{id:"estructura-general",children:"Estructura General"}),`
`,n.jsx(e.p,{children:"El archivo de documentación debe seguir esta estructura:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Agregar el title del componente manualmente para evitar errores si se cambia el nombre del archivo."}),`
`,n.jsx(e.li,{children:"Descripción general del componente"}),`
`,n.jsx(e.li,{children:"Características principales"}),`
`,n.jsx(e.li,{children:"Instrucciones de instalación e importación"}),`
`,n.jsx(e.li,{children:"Dependencias internas y externas"}),`
`,n.jsx(e.li,{children:"Definición de propiedades (argTypes)"}),`
`,n.jsx(e.li,{children:"Ejemplos prácticos de uso"}),`
`,n.jsx(e.li,{children:"La documentación debe estar en español (títulos, descripciones, categorías)"}),`
`,n.jsx(e.li,{children:"Si el componente tiene variantes, tamaños, etc. se deben agregar como ejemplos."}),`
`,n.jsx(e.li,{children:"Los elementos técnicos deben mantenerse en inglés (nombres de propiedades, métodos, types, interfaces, variables)"}),`
`,n.jsx(e.li,{children:"El nombre del archivo debe estar en kebab-case (ej: button-component.stories.ts)"}),`
`,n.jsx(e.li,{children:"El nombre de la sección debe estar en inglés (ej: Basic/Button)"}),`
`,n.jsx(e.li,{children:"Elementos Esenciales"}),`
`]}),`
`,n.jsx(e.h3,{id:"descripción-del-componente",children:"Descripción del Componente"}),`
`,n.jsx(e.p,{children:"Debe incluir:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Descripción concisa del propósito del componente"}),`
`,n.jsx(e.li,{children:"Version del componente. Esto se puede importar directamente desde el package.json"}),`
`,n.jsx(e.li,{children:"Si usaste element plus como base se debe indicar la version de element plus que usaste"}),`
`,n.jsx(e.li,{children:"Contexto de uso recomendado"}),`
`,n.jsx(e.li,{children:"Funcionalidades principales destacadas"}),`
`]}),`
`,n.jsx(e.h3,{id:"instalación-e-importación",children:"Instalación e Importación"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Instalación
yarn add @flash-global66/g-componente

// Importación
import { GComponente } from '@flash-global66/g-componente'
import '@flash-global66/g-componente/componente.styles.scss'
`})}),`
`,n.jsx(e.h3,{id:"dependencias",children:"Dependencias"}),`
`,n.jsx(e.h4,{id:"internas-de-nuestra-biblioteca",children:"Internas (de nuestra biblioteca)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/ui-button--docs",children:"GButton"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/form-input--docs",children:"GInput"})}),`
`]}),`
`,n.jsx(e.h4,{id:"externas-de-terceros",children:"Externas (de terceros)"}),`
`,n.jsx(e.p,{children:"Este componente utiliza la biblioteca [Nombre]. Para instalarla:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add nombre-biblioteca
`})}),`
`,n.jsxs(e.p,{children:["Para más información, consulte la ",n.jsx(e.a,{href:"https://global66.com",rel:"nofollow",children:"documentación oficial"}),"."]}),`
`,n.jsx(e.h3,{id:"4-definición-de-propiedades-argtypes",children:"4. Definición de Propiedades (ArgTypes)"}),`
`,n.jsx(e.p,{children:"Las propiedades deben organizarse en categorías en español:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Propiedades principales"}),`
`,n.jsx(e.li,{children:"Estilo y apariencia"}),`
`,n.jsx(e.li,{children:"Comportamiento"}),`
`,n.jsx(e.li,{children:"Eventos"}),`
`,n.jsx(e.li,{children:"Slots"}),`
`,n.jsx(e.li,{children:"Accesibilidad"}),`
`,n.jsx(e.li,{children:"Métodos expuestos"}),`
`,n.jsx(e.li,{children:"Etc."}),`
`]}),`
`,n.jsx(e.p,{children:"Cada propiedad debe incluir:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Descripción clara"}),`
`,n.jsx(e.li,{children:"Tipo de datos esperado"}),`
`,n.jsx(e.li,{children:"Valor por defecto (cuando corresponda)"}),`
`,n.jsx(e.li,{children:"Control adecuado para Storybook"}),`
`]}),`
`,n.jsx(e.h3,{id:"recomendaciones-generales",children:"Recomendaciones Generales"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Mantenga ejemplos actualizados: Los ejemplos deben reflejar la funcionalidad actual del componente."}),`
`,n.jsx(e.li,{children:"Sea conciso pero completo: Proporcione suficiente información sin ser excesivamente detallado."}),`
`,n.jsx(e.li,{children:"Considere diferentes casos de uso: Incluya ejemplos para diferentes contextos y configuraciones."}),`
`,n.jsx(e.li,{children:"Documente props de accesibilidad: Siempre mencione las propiedades relacionadas con la accesibilidad."}),`
`,n.jsx(e.li,{children:"Proporcione una navegación clara: Use enlaces a documentación relacionada cuando sea relevante."}),`
`]}),`
`,n.jsx(e.h3,{id:"uso-de-ia-para-generar-documentación",children:"Uso de IA para Generar Documentación"}),`
`,n.jsx(e.p,{children:"Si utiliza una IA como apoyo para generar la documentación:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proporcione el componente como contexto a la IA"}),`
`,n.jsx(e.li,{children:"Incluya esta guía como referencia para el formato"}),`
`,n.jsx(e.li,{children:"Revise y analice cuidadosamente el resultado generado"}),`
`,n.jsx(e.li,{children:"Corrija cualquier inconsistencia o error"}),`
`,n.jsx(e.li,{children:"Asegúrese de que los ejemplos sean correctos y funcionales"}),`
`,n.jsx(e.li,{children:"Verifique que la documentación sea comprensible para otros desarrolladores"}),`
`]}),`
`,n.jsx(e.h2,{id:"ejemplos-prácticos",children:"Ejemplos Prácticos"}),`
`,n.jsx(e.h3,{id:"estructura-de-un-archivo-de-documentación-completo",children:"Estructura de un Archivo de Documentación Completo"}),`
`,n.jsx(e.p,{children:"A continuación se muestra un script base para la creación de documentación de componentes o también se puede guiar de los componentes Tag, Button, Input, etc. :"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, reactive } from 'vue'
import { GComponente } from '../components/GComponente'
import type { ComponenteProps } from '../components/GComponente'

const meta: Meta<ComponenteProps> = {
  title: 'Basic/Componente',
  component: GComponente,
  parameters: {
    docs: {
      description: {
        component: \`
## Descripción

El componente \\\`GComponente\\\` permite [descripción breve de su funcionalidad principal].

### Características principales
- [Característica 1]
- [Característica 2]
- [Característica 3]

### Instalación

\\\`\\\`\\\`bash
yarn add @flash-global66/g-componente
\\\`\\\`\\\`

### Importación

\\\`\\\`\\\`typescript
import { GComponente } from '@flash-global66/g-componente'
import '@flash-global66/g-componente/componente.styles.scss'
\\\`\\\`\\\`

### Dependencias
Este componente utiliza los siguientes componentes internos:
- [GButton](/docs/ui-button--docs)
- [GInput](/docs/form-input--docs)

### Dependencias externas
Este componente utiliza la biblioteca [Nombre]. Para instalarla:

\\\`\\\`\\\`bash
yarn add nombre-biblioteca
\\\`\\\`\\\`

Para más información, consulte la [documentación oficial](https://link-a-documentacion.com).
\`
      }
    }
  },
  argTypes: {
    // Propiedades principales
    value: {
      description: 'Valor seleccionado o ingresado en el componente',
      control: 'text',
      table: {
        category: 'Propiedades principales',
        type: { summary: 'string | number' },
        defaultValue: { summary: '""' }
      }
    },
    
    // Estilo y apariencia
    variant: {
      description: 'Variante visual del componente',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        category: 'Estilo y apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      description: 'Tamaño del componente',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Estilo y apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    
    // Comportamiento
    disabled: {
      description: 'Deshabilita la interacción con el componente',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    
    // Eventos
    onChange: {
      description: 'Se dispara cuando cambia el valor del componente',
      action: 'changed',
      table: {
        category: 'Eventos',
        type: { summary: '(value: any) => void' }
      }
    },
    onClick: {
      description: 'Se dispara cuando se hace clic en el componente',
      action: 'clicked',
      table: {
        category: 'Eventos',
        type: { summary: '(event: Event) => void' }
      }
    },
    
    // Slots
    default: {
      description: 'Contenido principal del componente',
      table: {
        category: 'Slots',
        type: { summary: 'ReactNode' }
      }
    },
    prefix: {
      description: 'Contenido que se muestra antes del contenido principal',
      table: {
        category: 'Slots',
        type: { summary: 'ReactNode' }
      }
    },
    suffix: {
      description: 'Contenido que se muestra después del contenido principal',
      table: {
        category: 'Slots',
        type: { summary: 'ReactNode' }
      }
    },
    
    // Accesibilidad
    ariaLabel: {
      description: 'Etiqueta ARIA para mejorar la accesibilidad',
      control: 'text',
      table: {
        category: 'Accesibilidad',
        type: { summary: 'string' }
      }
    }
  }
}

export default meta
type Story = StoryObj<ComponenteProps>

// Ejemplo Básico Controlable
export const Basic: Story = {
  name: 'Ejemplo básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico de uso del componente con controles interactivos.'
      }
    }
  },
  args: {
    // Valores iniciales para los controles
    value: '',
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  render: (args) => ({
    components: { GComponente },
    setup() {
      return { args }
    },
    template: \`
      <g-componente v-bind="args">
        Contenido del componente
      </g-componente>
    \`
  })
}

// Variantes Visuales
export const Variants: Story = {
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'El componente admite diferentes variantes visuales que se pueden usar según el contexto.'
      }
    }
  },
  render: () => ({
    components: { GComponente },
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <g-componente variant="primary">Variante primaria</g-componente>
          <g-componente variant="secondary">Variante secundaria</g-componente>
          <g-componente variant="tertiary">Variante terciaria</g-componente>
        </div>
        
        <h3 class="text-lg font-medium mt-4">Tamaños</h3>
        <div class="flex items-center gap-4">
          <g-componente size="sm">Pequeño</g-componente>
          <g-componente size="md">Mediano</g-componente>
          <g-componente size="lg">Grande</g-componente>
        </div>
      </div>
    \`
  })
}

// Caso de Uso Avanzado
export const AdvancedUsage: Story = {
  name: 'Caso de uso avanzado',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra un caso de uso avanzado con funcionalidades específicas.
        
#### Consideraciones importantes
- El componente maneja estados internos complejos
- Se puede personalizar completamente a través de slots
- La validación de datos se realiza automáticamente\`
      }
    }
  },
  render: () => ({
    components: { GComponente },
    setup() {
      const value = ref('');
      const items = reactive([
        { id: 1, name: 'Opción 1' },
        { id: 2, name: 'Opción 2' },
        { id: 3, name: 'Opción 3' }
      ]);
      
      function handleChange(newValue) {
        value.value = newValue;
        // Lógica adicional
      }
      
      return { value, items, handleChange }
    },
    template: \`
      <div class="p-4 border rounded">
        <h3 class="text-lg font-medium mb-2">Implementación avanzada</h3>
        <g-componente 
          v-model="value"
          @change="handleChange"
          variant="primary"
        >
          <template #prefix>
            <span class="text-gray-500">Prefijo personalizado</span>
          </template>
          
          <!-- Contenido principal -->
          <div v-for="item in items" :key="item.id">
            {{ item.name }}
          </div>
          
          <template #suffix>
            <span class="text-gray-500">Sufijo personalizado</span>
          </template>
        </g-componente>
        
        <div class="mt-4">
          <strong>Valor actual:</strong> {{ value }}
        </div>
      </div>
    \`
  })
}
`})})]})}function u(a={}){const{wrapper:e}={...i(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(o,{...a})}):o(a)}export{u as default};
