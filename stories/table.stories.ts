import { h, ref } from 'vue'
import { StoryObj } from '@storybook/vue3'

// COMPONENTS
import { GTable, TableInstance, GTableColumn, type TableTooltipData } from '@flash-global66/g-table'
import { GButton } from '@flash-global66/g-button'
import { GLink } from '@flash-global66/g-link'
import { GTag } from '@flash-global66/g-tag'
import { GIconFont } from '@flash-global66/g-icon-font'
import { GIconButton } from '@flash-global66/g-icon-button'
import { GSelect } from '@flash-global66/g-select'
import { GInput } from '@flash-global66/g-input'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { version, peerDependencies } from '@flash-global66/g-table/package.json'
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories'

const meta = {
  title: 'Data/Table',
  component: GTable,
  parameters: {
    docs: {
      description: {
        component: `\`GTable\` - Un componente de tabla altamente configurable y extensible para mostrar datos tabulares de manera eficiente y atractiva.

> La versión de este componente es \`${version}\`.

### Características principales:

- Soporte para filas expandibles y colapsables.
- Selección de filas con soporte para selección múltiple.
- Soporte para ordenamiento de columnas.
- Soporte para filtrado de datos.
- Soporte para columnas fijas y ancladas.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-table
\`\`\`

### Importación básica

\`\`\`typescript
import { GTable, GTableColumn } from '@flash-global66/g-table'
import '@flash-global66/g-table/styles.scss'
import GIconButton from '../components/icon-button/dist/types/index';
\`\`\`

### Dependencias

Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.

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
  <g-table :data="tableData" style="width: 100%" stripe border>
    <g-table-column prop="date" label="Date" width="180" />
    <g-table-column prop="name" label="Name" width="180" />
    <g-table-column prop="address" label="Address" />
  </g-table>
</template>

<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
\`\`\`
`
      }
    }
  },

  argTypes: {
    // 1. Datos y Contenido
    data: {
      description: 'Datos a mostrar en la tabla',
      control: 'object',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'Array<Object>' },
        defaultValue: { summary: '[]' }
      }
    },
    emptyText: {
      name: 'empty-text',
      description: 'Texto a mostrar cuando no hay datos',
      control: 'text',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: 'No Data' }
      }
    },
    sumText: {
      name: 'sum-text',
      description: 'Texto para la fila de resumen',
      control: 'text',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: 'Total' }
      }
    },
    load: {
      name: 'load',
      description: 'Función para carga perezosa',
      control: false,
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'Function' },
        defaultValue: { summary: '' }
      }
    },
    treeProps: {
      name: 'tree-props',
      description: 'Propiedades para filas anidadas',
      control: 'object',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    expandRowKeys: {
      name: 'expand-row-keys',
      description: 'Claves de filas expandidas por defecto',
      control: 'object',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'Array<string | number>' },
        defaultValue: { summary: '[]' }
      }
    },
    rowKey: {
      name: 'row-key',
      description:
        'Clave de datos de fila, utilizada para optimizar la representación. Obligatoria if reserve-selection está true o se muestran los datos del árbol. Cuando su tipo es cadena, se admite el acceso multinivel (p. ej., user.info.id), pero no se admite user.info[0].id; en ese caso, se debe usar la función.',
      control: 'text',
      table: {
        category: 'Datos y Contenido',
        type: { summary: 'string | Function' },
        defaultValue: { summary: '' }
      }
    },

    // 2. Apariencia Visual
    height: {
      description: 'Altura de la tabla',
      control: 'number',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'number' },
        defaultValue: { summary: 'auto' }
      }
    },
    maxHeight: {
      name: 'max-height',
      description: 'Altura máxima de la tabla',
      control: 'number',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'number' },
        defaultValue: { summary: 'auto' }
      }
    },
    stripe: {
      description: 'Filas con fondo alternado',
      control: 'boolean',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    border: {
      description: 'Mostrar bordes',
      control: 'boolean',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fit: {
      description: 'Ajustar columnas al contenedor',
      control: 'boolean',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showHeader: {
      name: 'show-header',
      description: 'Mostrar encabezado',
      control: 'boolean',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    rowClassName: {
      name: 'row-class-name',
      description: 'Clase CSS para filas',
      control: 'text',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    rowStyle: {
      name: 'row-style',
      description: 'Estilo CSS para filas',
      control: 'object',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    cellClassName: {
      name: 'cell-class-name',
      description: 'Clase CSS para celdas',
      control: 'text',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    headerCellClassName: {
      name: 'header-cell-class-name',
      description: 'Clase CSS para celdas de encabezado',
      control: 'text',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    headerCellStyle: {
      name: 'header-cell-style',
      description: 'Estilo CSS para celdas de encabezado',
      control: 'object',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    headerRowClassName: {
      name: 'header-row-class-name',
      description: 'Clase CSS para filas de encabezado',
      control: 'text',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    headerRowStyle: {
      name: 'header-row-style',
      description: 'Estilo CSS para filas de encabezado',
      control: 'object',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    indent: {
      description: 'Indentación para filas anidadas',
      control: 'number',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'number' },
        defaultValue: { summary: '16' }
      }
    },
    tableLayout: {
      name: 'table-layout',
      description: 'Diseño de la tabla (fixed/auto)',
      control: 'select',
      options: ['fixed', 'auto'],
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'string' },
        defaultValue: { summary: 'fixed' }
      }
    },
    scrollbarTabindex: {
      name: 'scrollbar-tabindex',
      description: 'Tabindex para barra de desplazamiento',
      control: 'number',
      table: {
        category: 'Apariencia Visual',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    // 3. Comportamiento y Funcionalidad
    highlightCurrentRow: {
      name: 'highlight-current-row',
      description: 'Resaltar fila actual',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    currentRowKey: {
      name: 'current-row-key',
      description: 'Clave de la fila actual',
      control: 'text',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    defaultExpandAll: {
      name: 'default-expand-all',
      description:
        'Especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna type="expand" o contiene datos de estructura de árbol',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    defaultSort: {
      name: 'default-sort',
      description:
        'Establece la columna y orden por defecto. la propiedad prop es utilizada para establecer la columna de ordenamiento por defecto, la propiedad order es utilizada para definir el tipo de orden por defecto',
      control: 'object',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    showSummary: {
      name: 'show-summary',
      description: 'Mostrar fila de resumen',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    selectOnIndeterminate: {
      name: 'select-on-indeterminate',
      description: 'Seleccionar en estado indeterminado',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    lazy: {
      description: 'Usar carga perezosa',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    scrollbarAlwaysOn: {
      name: 'scrollbar-always-on',
      description: 'Barra de desplazamiento siempre visible',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    showOverflowTooltip: {
      name: 'show-overflow-tooltip',
      description: 'Mostrar tooltip en desbordamiento',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    flexible: {
      name: 'flexible',
      description: 'Tabla adaptable al contenedor',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    allowDragLastColumn: {
      name: 'allow-drag-last-column',
      description: 'Permitir arrastrar última columna',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    preserveExpandedContent: {
      name: 'preserve-expanded-content',
      description: 'Preservar contenido expandido',
      control: 'boolean',
      table: {
        category: 'Comportamiento y Funcionalidad',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // 4. Herramientas Avanzadas
    tooltipOptions: {
      name: 'tooltip-options',
      description: 'Opciones para tooltips',
      control: 'object',
      table: {
        category: 'Herramientas Avanzadas',
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' }
      }
    },
    appendFilterPanelTo: {
      name: 'append-filter-panel-to',
      description: 'Ubicación para renderizar panel de filtro',
      control: 'text',
      table: {
        category: 'Herramientas Avanzadas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    tooltipFormatter: {
      name: 'tooltip-formatter',
      description: 'Formateador de tooltips',
      control: false,
      table: {
        category: 'Herramientas Avanzadas',
        type: { summary: 'Function' },
        defaultValue: { summary: '' }
      }
    },

    // 5. Eventos
    select: {
      description: 'Evento de selección de fila',
      control: false,
      table: {
        category: 'Eventos',
        type: { summary: 'Function', detail: '<T = any>(selection: T[], row: T) => void' }
      }
    },
    selectAll: {
      name: 'select-all',
      description: 'Evento de selección de todas las filas',
      control: false,
      table: {
        category: 'Eventos',
        type: { summary: 'Function', detail: '(selection: any[]) => void' }
      }
    },
    selectionChange: {
      name: 'selection-change',
      description: 'Evento de cambio de selección',
      control: false,
      table: {
        category: 'Eventos',
        type: { summary: 'Function', detail: '(newSelection: any[]) => void' }
      }
    },
    cellMouseEnter: {
      name: 'cell-mouse-enter',
      description: 'Evento de entrada del mouse en una celda',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void'
        }
      }
    },
    cellMouseLeave: {
      name: 'cell-mouse-leave',
      description: 'Evento de salida del mouse de una celda',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void'
        }
      }
    },
    cellClick: {
      name: 'cell-click',
      description: 'Evento de clic en una celda',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void'
        }
      }
    },
    cellDbClick: {
      name: 'cell-bd-click',
      description: 'Evento de doble clic en una celda',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void'
        }
      }
    },
    cellContextMenu: {
      name: 'cell-context-menu',
      description: 'Evento de click derecho en una celda',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void'
        }
      }
    },
    rowClick: {
      name: 'row-click',
      description: 'Evento de clic en una fila',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, event: Event) => void'
        }
      }
    },
    rowDbClick: {
      name: 'row-bd-click',
      description: 'Evento de doble clic en una fila',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, event: Event) => void'
        }
      }
    },
    rowContextMenu: {
      name: 'row-context-menu',
      description: 'Evento de click derecho en una fila',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, event: Event) => void'
        }
      }
    },
    headerClick: {
      name: 'header-click',
      description: 'Evento de clic en el encabezado',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(column: any, event: MouseEvent) => void'
        }
      }
    },
    headerContextMenu: {
      name: 'header-context-menu',
      description: 'Evento de click derecho en el encabezado',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(column: any, event: MouseEvent) => void'
        }
      }
    },
    sortChange: {
      name: 'sort-change',
      description: 'Evento de cambio de ordenamiento',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(data: {column: any, prop: string, order: any }) => void'
        }
      }
    },
    currentChange: {
      name: 'current-change',
      description: 'Evento de cambio de fila actual',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(currentRow: any, oldCurrentRow: any) => void'
        }
      }
    },
    headerDragend: {
      name: 'header-dragend',
      description: 'Evento de finalización de arrastre del encabezado',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(newWidth: number, oldWidth: number, column: any, event: MouseEvent) => void'
        }
      }
    },
    expandChange: {
      name: 'expand-change',
      description: 'Evento de cambio de expansión de fila',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void'
        }
      }
    },
    scroll: {
      description: 'Evento de desplazamiento de la tabla',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '({ scrollLeft: number, scrollTop: number }) => void'
        }
      }
    },

    // 6. Slots
    default: {
      name: 'default',
      description: 'Slot para contenido personalizado en las celdas',
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    },
    append: {
      name: 'append',
      description:
        'Slot para insertarse después de la última fila. Es posible que necesite este espacio si desea implementar scroll infinito para la tabla. Este slot se mostrará por encima de la fila de resumen si la hay.',
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    },
    empty: {
      name: 'empty',
      description: 'Slot para contenido personalizado cuando no hay datos',
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    },

    // 8. Exposes
    clearSelection: {
      description: 'Función para limpiar selección',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => void' }
      }
    },
    getSelectionRows: {
      description: 'Obtener filas seleccionadas',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => any[]' }
      }
    },
    toggleRowSelection: {
      description: 'Alternar selección de una fila',
      control: false,
      table: {
        category: 'Exposes',
        type: {
          summary: 'Function',
          detail: '(row: any, selected?: boolean, ignoreSelectable = true) => void'
        }
      }
    },
    toggleAllSelection: {
      description: 'Alternar selección de todas las filas',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => void' }
      }
    },
    toggleRowExpansion: {
      description: 'Alternar expansión de una fila',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(row: any, expanded?: boolean) => void' }
      }
    },
    setCurrentRow: {
      description: 'Establecer fila actual',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(row: any) => void' }
      }
    },
    clearSort: {
      description: 'Limpiar ordenamiento',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => void' }
      }
    },
    clearFilter: {
      description: 'Limpiar filtros',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => void' }
      }
    },
    doLayout: {
      description: 'Forzar re-diseño de la tabla',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '() => void' }
      }
    },
    sort: {
      description: 'Ordenar datos de la tabla',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(prop: string, order?: string) => void' }
      }
    },
    scrollTo: {
      description: 'Desplazar la tabla a una posición específica',
      control: false,
      table: {
        category: 'Exposes',
        type: {
          summary: 'Function',
          detail: '(options: number | ScrollToOptions, yCoord?: number) => void'
        }
      }
    },
    setScrollTop: {
      name: 'set-scroll-top',
      description: 'Establecer posición de desplazamiento vertical',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(scrollTop: number) => void' }
      }
    },
    setScrollLeft: {
      name: 'set-scroll-left',
      description: 'Establecer posición de desplazamiento horizontal',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(scrollLeft: number) => void' }
      }
    },
    columns: {
      description: 'Obtener columnas de la tabla',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Array', detail: 'TableColumnCtx<T>[]' }
      }
    },
    updateKeyChildren: {
      description: 'Actualizar hijos de una clave específica',
      control: false,
      table: {
        category: 'Exposes',
        type: { summary: 'Function', detail: '(key: string, data: T[]) => void' }
      }
    },

    // 9. Propiedades de Columnas
    type: {
      description: 'Tipo de columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'enum', detail: '"selection" | "index" | "expand" | "default"' },
        defaultValue: { summary: 'default' }
      }
    },
    index: {
      description: 'Índice de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    label: {
      description: 'Etiqueta de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    columnKey: {
      name: 'column-key',
      description: 'Clave única para la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    prop: {
      description: 'Propiedad de los datos para esta columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    width: {
      description: 'Ancho de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string | number' },
        defaultValue: { summary: '' }
      }
    },
    minWidth: {
      name: 'min-width',
      description: 'Ancho mínimo de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string | number' },
        defaultValue: { summary: '' }
      }
    },
    fixed: {
      description: 'Fijar columna a la izquierda o derecha',
      control: false,
      options: ['left', 'right', false],
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string | boolean' },
        defaultValue: { summary: false }
      }
    },
    renderHeader: {
      name: 'render-header',
      description: 'Función para renderizar el encabezado de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Function', detail: '(data: { column: any, $index: number }) => void' },
        defaultValue: { summary: '' }
      }
    },
    sortable: {
      description: 'Habilitar ordenamiento para la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    sortMethod: {
      name: 'sort-method',
      description: 'Método personalizado para ordenar la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Function', detail: '(a: any, b: any) => number' },
        defaultValue: { summary: '' }
      }
    },
    sortBy: {
      name: 'sort-by',
      description: 'Propiedad o propiedades para ordenar la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '' }
      }
    },
    sortOrders: {
      name: 'sort-orders',
      description: 'Ordenes de ordenamiento permitidos',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Array<string>' },
        defaultValue: { summary: ['ascending', 'descending'] }
      }
    },
    resizable: {
      description: 'Habilitar redimensionamiento de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    formatter: {
      description: 'Función para formatear el contenido de la celda',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, cellValue: any, index: number) => VNode | string'
        },
        defaultValue: { summary: '' }
      }
    },
    showOverflowTooltipColumn: {
      name: 'show-overflow-tooltip',
      description: 'Mostrar tooltip en desbordamiento de la celda',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    align: {
      description: 'Alineación del contenido de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'enum', detail: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' }
      }
    },
    headerAlign: {
      name: 'header-align',
      description: 'Alineación del encabezado de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'enum', detail: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' }
      }
    },
    className: {
      name: 'class-name',
      description: 'Clase CSS para la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    labelClassName: {
      name: 'label-class-name',
      description: 'Clase CSS para la etiqueta de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    selectable: {
      name: 'selectable',
      description: 'Función para determinar si una fila es seleccionable',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Function', detail: '(row: any, index: number) => boolean' },
        defaultValue: { summary: '' }
      }
    },
    reserveSelection: {
      name: 'reserve-selection',
      description: 'Preservar selección entre cambios de datos',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    filters: {
      name: 'filters',
      description: 'Filtros para la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Array<{ text: string, value: any }>' },
        defaultValue: { summary: '[]' }
      }
    },
    filterPlacement: {
      name: 'filter-placement',
      description: 'Ubicación del filtro en la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: {
          summary: 'enum',
          detail:
            '"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"'
        },
        defaultValue: { summary: 'bottom-start' }
      }
    },
    filterClassName: {
      name: 'filter-class-name',
      description: 'Clase CSS para el filtro de la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    filterMultiple: {
      name: 'filter-multiple',
      description: 'Permitir múltiples selecciones en el filtro',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    filterMethod: {
      name: 'filter-method',
      description:
        'Método para filtrado de datos. Si filter-multiple está activado, este método será llamado varias veces por cada fila, y se mostrará la fila si la llamada devuelve true',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Function', detail: '(value: any, row: any, column: any) => void' },
        defaultValue: { summary: '' }
      }
    },
    filteredValue: {
      name: 'filtered-value',
      description:
        'El valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla es renderizado con render-header',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: { summary: 'Array<string>' },
        defaultValue: { summary: '[]' }
      }
    },
    tooltipFormatterColumn: {
      name: 'tooltip-formatter',
      description: 'Formateador de tooltip para la columna',
      control: false,
      table: {
        category: 'Propiedades de Columnas',
        type: {
          summary: 'Function',
          detail: '(data: { row: any, column: any, cellValue: any }) => VNode | string'
        },
        defaultValue: { summary: '' }
      }
    },

    // 10. Slots de Columnas
    defaultColumn: {
      name: 'default',
      description: 'Slot para contenido personalizado en las celdas de la columna',
      control: false,
      table: {
        category: 'Slots de Columnas',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    },
    header: {
      name: 'header',
      description: 'Slot para contenido personalizado en el encabezado de la columna',
      control: false,
      table: {
        category: 'Slots de Columnas',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    },
    filterIcon: {
      name: 'filter-icon',
      description: 'Slot para el ícono del filtro de la columna',
      control: false,
      table: {
        category: 'Slots de Columnas',
        type: { summary: 'Slot' },
        defaultValue: { summary: '' }
      }
    }
  },

  args: {
    data: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ],
    height: 'auto',
    maxHeight: 'auto',
    stripe: false,
    border: false,
    fit: true,
    emptyText: 'No data',
    rowClassName: '',
    rowKey: '',
    rowStyle: {},
    headerRowClassName: '',
    headerRowStyle: {},
    indent: 16,
    tableLayout: 'auto',
    scrollbarTabindex: 0,
    highlightCurrentRow: false,
    currentRowKey: '',
    defaultExpandAll: false,
    defaultSort: {},
    showSummary: false,
    selectOnIndeterminate: false,
    lazy: false,
    scrollbarAlwaysOn: false,
    showOverflowTooltip: false,
    flexible: false,
    allowDragLastColumn: false,
    preserveExpandedContent: false,
    tooltipOptions: {},
    appendFilterPanelTo: '',
    tooltipFormatter: null,
    highlight: false,
    showHeader: true,
    sumText: '',
    treeProps: {},
    expandRowKeys: undefined,
    cellClassName: '',
    headerCellClassName: '',
    headerCellStyle: {}
  }
}
export default meta
type Story = StoryObj<TableInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GTable, GConfigProvider, GTableColumn },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <g-table v-bind="args" style="width: 100%">
          <g-table-column prop="date" label="Date" width="180" />
          <g-table-column prop="name" label="Name" width="180" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </g-config-provider>
    `
  })
}

export const prefixAndSuffix: Story = {
  name: 'Tabla con fondo y borde',
  parameters: {
    docs: {
      description: {
        story: `Tabla con fondo y borde, con filas alternas de color diferente.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" stripe border>
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`
  })
}

export const withStatus: Story = {
  name: 'Tabla con estados',
  parameters: {
    docs: {
      description: {
        story: `Puede destacar el contenido de la tabla para distinguir entre "success, information, warning, danger" y otros estados.

Utilice row-class-name en el-table para agregar clases personalizadas a una fila específica. De esa manera podrá darle diseño con esas clases.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-05',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]

      const tableRowClassName = ({ row, rowIndex }: { row: any; rowIndex: number }) => {
        if (rowIndex === 1) return '!bg-error-bg group !bg-opacity-50 opacity-75 hover:!opacity-100'
        if (rowIndex === 3) return '!bg-success-bg group !bg-opacity-50 opacity-75 hover:!opacity-100'
        if (rowIndex === 5) return '!bg-warning-bg group !bg-opacity-50 opacity-75 hover:!opacity-100'
        if (rowIndex === 7) return '!bg-info-bg group !bg-opacity-50 opacity-75 hover:!opacity-100'
        return ''
      }

      const cellClassName = ({
        row,
        column,
        rowIndex
      }: {
        row: any
        column: any
        rowIndex: number
      }) => {
        if (rowIndex === 1) return 'group-hover:!bg-error-bg'
        if (rowIndex === 3) return 'group-hover:!bg-success-bg'
        if (rowIndex === 5) return 'group-hover:!bg-warning-bg'
        if (rowIndex === 7) return 'group-hover:!bg-info-bg'
        return ''
      }

      return { tableData, tableRowClassName, cellClassName }
    },
    template: `
    <g-config-provider>
      <g-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        :cell-class-name="cellClassName"
      >
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`
  })
}

export const withFixed: Story = {
  name: 'Tabla con columnas fijas',
  parameters: {
    docs: {
      description: {
        story: `Cuando se tienen demasiadas columnas, puede fijar algunas de ellas.

El atributo fixed es utilizado en el-table-column, este acepta un Boolean. Si es true, la columna será fijada a la izquierda. También acepta dos tipos: 'left' y 'right', ambos indican donde debe ser fijada la columna.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GButton },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }
      ]

      const handleClick = () => {
        console.log('click')
      }

      return { tableData, handleClick }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column fixed prop="date" label="Date" width="150" />
        <g-table-column prop="name" label="Name" width="120" />
        <g-table-column prop="state" label="State" width="120" />
        <g-table-column prop="city" label="City" width="120" />
        <g-table-column prop="address" label="Address" width="600" />
        <g-table-column prop="zip" label="Zip" width="120" />
        <g-table-column fixed="right" label="Operations" min-width="160">
          <template #default>
            <div class="flex items-center gap-2">
              <g-button type="primary" size="sm" @click="handleClick">
                Detail
              </g-button>
              <g-button type="primary" size="sm">Edit</g-button>
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>`
  })
}

export const withLongHeader: Story = {
  name: 'Tabla con encabezado agrupado',
  parameters: {
    docs: {
      description: {
        story: `Cuando la estructura de datos es compleja, puede usar la cabecera de grupo para mostrar la jerarquía de datos.

Solo necesita colocar el-table-column dentro de otro el-table-column, de esta forma logrará agruparles.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GButton },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }
      ]

      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="250">
        <g-table-column prop="date" label="Date" />
        <g-table-column prop="name" label="Name" />
        <g-table-column prop="zip" label="Zip" />
        <g-table-column label="Address Info" fixed="right">
          <g-table-column prop="state" label="State" />
          <g-table-column prop="city" label="City" />
          <g-table-column prop="address" label="Address" min-width="200" />
        </g-table-column>
      </g-table>
    </g-config-provider>`
  })
}

export const selectabale: Story = {
  name: 'Tabla con selección de filas',
  parameters: {
    docs: {
      description: {
        story: `Tabla con selección de filas, permitiendo seleccionar múltiples filas y realizar acciones sobre ellas. Adicionalmente cuenta con la funcion de mostrar tooltips en celdas con contenido largo.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GButton },
    setup() {
      const tableData = [
        {
          date: '2016-05-04',
          name: 'Aleyna Kutzner',
          address: 'Lohrbergstr. 86c, Süd Lilli, Saarland'
        },
        {
          date: '2016-05-03',
          name: 'Helen Jacobi',
          address: '760 A Street, South Frankfield, Illinois'
        },
        {
          date: '2016-05-02',
          name: 'Brandon Deckert',
          address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen'
        },
        {
          date: '2016-05-01',
          name: 'Margie Smith',
          address: '23618 Windsor Drive, West Ricardoview, Idaho'
        }
      ]

      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column type="selection" width="55" />
        <g-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </g-table-column>
        <g-table-column property="name" label="Name" width="120" />
        <g-table-column
          property="address"
          label="use show-overflow-tooltip"
          width="240"
          show-overflow-tooltip
        />
        <g-table-column property="address" label="address" />
      </g-table>
    </g-config-provider>`
  })
}

export const collapse: Story = {
  name: 'Tabla con filas expandibles',
  parameters: {
    docs: {
      description: {
        story: `Cuando el contenido de la fila es demasiado largo y no quiere mostrar la barra de desplazamiento horizontal, puede usar la función de fila expandible.

Puede activar la fila expandible estableciendo la propiedad type="expand" o con slots. La plantilla para el-table-column se mostrará como el contenido de la fila expandible, y puede acceder a los mismos atributos que cuando está usando slots en plantillas de columnas personalizadas.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GButton },
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
          family: [
            {
              name: 'Jerry',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Spike',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            },
            {
              name: 'Tyke',
              state: 'California',
              city: 'San Francisco',
              address: '3650 21st St, San Francisco',
              zip: 'CA 94114'
            }
          ]
        }
      ]

      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <g-table-column type="expand">
          <template #default="props">
            <div>
              <p m="t-0 b-2">State: {{ props.row.state }}</p>
              <p m="t-0 b-2">City: {{ props.row.city }}</p>
              <p m="t-0 b-2">Address: {{ props.row.address }}</p>
              <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              <h3>Family</h3>
              <g-table :data="props.row.family" border>
                <g-table-column label="Name" prop="name" />
                <g-table-column label="State" prop="state" />
                <g-table-column label="City" prop="city" />
                <g-table-column label="Address" prop="address" />
                <g-table-column label="Zip" prop="zip" />
              </g-table>
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Date" prop="date" />
        <g-table-column label="Name" prop="name" />
      </g-table>
    </g-config-provider>`
  })
}

export const withLazyAndLoad: Story = {
  name: 'Tabla con encabezado agrupado',
  parameters: {
    docs: {
      description: {
        story: `Puede visualizar datos con una estructura de árbol. Cuando la fila contiene el campo children, se trata como datos anidados. Para renderizar datos anidados, la propiedad row-key es necesaria. Además, los datos de registros secundarios se pueden cargar de forma asíncrona. Establezca la propiedad lazy de la tabla a true y la función que usara a load. Especifique el atributo hasChildren en la fila para determinar qué fila contiene descendencia. Tanto children como hasChildren pueden configurarse a través de tree-props.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn },
    setup() {
      const tableData = [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ]
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]

      const tableData1 = [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true,
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]

      const load = (row: any, treeNode: unknown, resolve: (data: any[]) => void) => {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ])
        }, 1000)
      }

      return { tableData, load, tableData1 }
    },
    template: `
    <g-config-provider>
      <div>
        <g-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
        >
          <g-table-column prop="date" label="Date" sortable />
          <g-table-column prop="name" label="Name" sortable />
          <g-table-column prop="address" label="Address" sortable />
        </g-table>

        <g-table
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <g-table-column prop="date" label="Date" />
          <g-table-column prop="name" label="Name" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </div>
    </g-config-provider>`
  })
}

export const withTooltipFormatter: Story = {
  name: 'Tabla con formateador de tooltip',
  parameters: {
    docs: {
      description: {
        story: `Tabla con formateador de tooltip, mostrando información adicional al pasar el cursor sobre las celdas.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GLink, GTag },
    setup() {
      const tableData = [
        {
          address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
          tags: ['Office', 'Home', 'Park', 'Garden'],
          url: 'https://github.com/element-plus/element-plus/issues'
        },
        {
          address: '760 A Street, South Frankfield, Illinois',
          tags: ['error', 'warning', 'success', 'info'],
          url: 'https://github.com/element-plus/element-plus/pulls'
        },
        {
          address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
          tags: ['one', 'two', 'three', 'four', 'five'],
          url: 'https://github.com/element-plus/element-plus/discussions'
        },
        {
          address: '23618 Windsor Drive, West Ricardoview, Idaho',
          tags: ['blue', 'white', 'dark', 'gray', 'red', 'bright'],
          url: 'https://github.com/element-plus/element-plus/actions'
        }
      ]

      const tableRowFormatter = (data: TableTooltipData<any>) => {
        return `${data.cellValue}: table formatter`
      }

      const withVNode = (data: TableTooltipData<any>) => {
        return h(GLink, { type: 'primary', href: data.cellValue }, () =>
          h('span', null, data.cellValue)
        )
      }

      const tagsFormatter = (data: TableTooltipData<any>) => {
        return data.row.tags.join(', ')
      }

      return { tableData, tableRowFormatter, withVNode, tagsFormatter }
    },
    template: `
    <g-config-provider>
      <g-table
        :data="tableData"
        show-overflow-tooltip
        :tooltip-formatter="tableRowFormatter"
        style="width: 100%"
        border
      >
        <g-table-column
          prop="address"
          label="extends table formatter"
          width="240"
        />
        <g-table-column
          prop="tags"
          label="formatter object"
          width="240"
          :tooltip-formatter="tagsFormatter"
        >
          <template #default="{ row }">
            <div class="flex gap-2">
              <g-tag
                v-for="tag in row.tags"
                :key="tag"
                type="info"
              >
                {{ tag }}
              </g-tag>
            </div>
          </template>
        </g-table-column>
        <g-table-column
          prop="url"
          label="with vnode"
          width="240"
          :tooltip-formatter="withVNode"
        />
      </g-table>
    </g-config-provider>`
  })
}

export const tableEditable: Story = {
  name: 'Tabla con columnas editables y eliminables',
  parameters: {
    docs: {
      description: {
        story: `Tabla con columnas editables y eliminables, permitiendo modificar el contenido de las celdas y eliminar filas.`
      }
    }
  },
  render: () => ({
    components: { GTable, GConfigProvider, GTableColumn, GIconFont, GSelect, GInput, GIconButton },
    setup() {
      const tableData = ref([
        {
          mode: 'send',
          currency: 'USD',
          amount: 1000,
          reason: 'initial-investment',
          detail: 'Este es un detalle de la inversión inicial realizada en el proyecto.',
          isEditable: false
        },
        {
          mode: 'receive',
          currency: 'EUR',
          amount: 500,
          reason: 'marketing-expenses',
          detail:
            'Este es una descripción detallada de los gastos de marketing asociados con el proyecto.',
          isEditable: false
        },
        {
          mode: 'send',
          currency: 'GBP',
          amount: 750,
          reason: 'operational-costs',
          detail: 'Este es una descripción detallada de los costos operativos del proyecto.',
          isEditable: false
        },
        {
          mode: 'receive',
          currency: 'JPY',
          amount: 3000,
          reason: 'miscellaneous-expenses',
          detail: 'Este es una descripción detallada de los gastos misceláneos del proyecto.',
          isEditable: false
        },
        {
          mode: 'send',
          currency: 'AUD',
          amount: 1200,
          reason: 'travel-expenses',
          detail:
            'Este es una descripción detallada de los gastos de viaje relacionados con el proyecto.',
          isEditable: false
        },
        {
          mode: 'send',
          currency: 'CAD',
          amount: 800,
          reason: 'consulting-fees',
          detail:
            'Este es una descripción detallada de los honorarios de consultoría del proyecto.',
          isEditable: false
        }
      ])

      const handleClick = () => {
        console.log('click')
      }

      const handleEdit = (index: number, row) => {
        tableData.value.splice(index, 1, {
          ...row,
          isEditable: !row.isEditable
        })
      }

      const deleteRow = (index: number) => {
        tableData.value.splice(index, 1)
      }

      return { tableData, handleClick, handleEdit, deleteRow }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="100%" border>
        <g-table-column prop="mode" label="Modalidad">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.mode"
                :options="[
                  { title: 'Send', value: 'send', icon: 'regular gift' },
                  { title: 'Receive', value: 'receive', icon: 'regular money-bill-alt' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.mode }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="currency" label="Moneda">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.currency"
                :options="[
                  { title: 'USD', value: 'USD' },
                  { title: 'EUR', value: 'EUR' },
                  { title: 'GBP', value: 'GBP' },
                  { title: 'JPY', value: 'JPY' },
                  { title: 'AUD', value: 'AUD' },
                  { title: 'CAD', value: 'CAD' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.currency }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="amount" label="Monto">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model.number="scope.row.amount"
                type="number"
                @change="handleClick"
              >
                <template #suffix>
                  <div class="flex gap-2 items-center">
                    <span class="text-gray-4">{{ scope.row.currency }}</span>
                  </div>
                </template>
              </g-input>
            </div>
            <div v-else>
              {{ scope.row.amount }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="reason" label="Razón">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.reason"
                :options="[
                  { title: 'Inversión incial', value: 'initial-investment' },
                  { title: 'Gastos de marketing', value: 'marketing-expenses' },
                  { title: 'Costos operativos', value: 'operational-costs' },
                  { title: 'Gastos misceláneos', value: 'miscellaneous-expenses' },
                  { title: 'Gastos de viaje', value: 'travel-expenses' },
                  { title: 'Honorarios de consultoría', value: 'consulting-fees' }
                ]"
                @change="handleClick"
                :fit-input-width="240"
              />
            </div>
            <div v-else>
              {{ scope.row.reason }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="detail" label="Detalle" width="300">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model="scope.row.detail"
                type="text"
                label="Detalle"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.detail }}
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Acciones" align="center" width="100">
          <template #default="scope">
            <div class="flex items-center justify-center items gap-2">
              <g-icon-button
                v-if="!scope.row.isEditable"
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular pen"
                size="small" 
              />
              <g-icon-button
                v-else
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular check"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
                @click="deleteRow(scope.$index)"
              />
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>`
  })
}
