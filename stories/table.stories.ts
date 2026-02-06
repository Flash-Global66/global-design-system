import { h, ref } from 'vue'
import { StoryObj } from '@storybook/vue3'

// COMPONENTS
import { GTable, TableInstance, GTableColumn, useTableCellSelect, useTableCellInput, GCellEdit, type TableTooltipData } from '../components/table/index.ts'
import { GButton } from '@flash-global66/g-button'
import { GLink } from '@flash-global66/g-link'
import { GTag } from '@flash-global66/g-tag'
import { GIconFont } from '@flash-global66/g-icon-font'
import { GIconButton } from '@flash-global66/g-icon-button'
import { GSelect } from '@flash-global66/g-select'
import { GInput } from '@flash-global66/g-input'

// CONFIG
import { GConfigProvider } from '../components/config-provider'
import { version, peerDependencies } from '../components/table/package.json'
import { generatePeerDepsInstalls } from '../helper/documentation-stories'

const meta = {
  title: 'Data/Table',
  component: GTable,
  parameters: {
    docs: {
      description: {
        component: `\`GTable\` - Componente de tabla altamente configurable y extensible para mostrar datos tabulares de manera eficiente y atractiva.

> La versión de este componente es \`${version}\`.

**Características principales:**

- Filas expandibles y colapsables.
- Selección de filas con soporte para selección múltiple.
- Ordenamiento y filtrado de columnas.
- Columnas fijas (izquierda/derecha) y ancladas.
- Celdas editables: \`cell-type="input"\` / \`cell-type="select"\` con composables, o \`GCellEdit\` para UI personalizada (ver sección **Celdas editables** más abajo).
- Validación de celdas compatible con \`async-validator\` y \`GForm\`.
- Tooltips en celdas y formateador personalizado.
- Soporte para datos en árbol y carga perezosa.

**Instalación**

\`\`\`bash
yarn add @flash-global66/g-table
\`\`\`

**Dependencias**

Este componente requiere:

${Object.entries(peerDependencies || {}).map(([pkg, v]) => `> - ${pkg}: ${v}`).join('\n') || '> No tiene dependencias.'}

**Importación básica**

\`\`\`typescript
import { GTable, GTableColumn } from '@flash-global66/g-table'
import '@flash-global66/g-table/styles.scss'
\`\`\`

**Ejemplo de uso**

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
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' }
]
</script>
\`\`\`

**Instalar dependencias del componente**

\`\`\`bash
# Dependencias @flash-global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

---

## Celdas editables

Para implementar celdas editables (input, select o UI personalizada con \`GCellEdit\`), expansión del overlay, eventos y validación, consulte la guía dedicada:

👉 **[Guía: Celdas editables en Table](/docs/concept-guide-celdas-editables-en-table--docs)**

En esta documentación de Table encontrará las historias de ejemplo: **Celda tipo select**, **Celda tipo input**, **Celda personalizada con GCellEdit**, **Eventos de celdas editables** y las de expansión.
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
    cellEditOpen: {
      name: 'cell-edit-open',
      description: 'Celda editable entra en modo edición (click o foco)',
      control: false,
      table: {
        category: 'Eventos',
        type: { summary: 'Function', detail: '(row: any, column: any) => void' }
      }
    },
    cellEditClose: {
      name: 'cell-edit-close',
      description: 'Celda editable sale de modo edición (blur o Enter)',
      control: false,
      table: {
        category: 'Eventos',
        type: { summary: 'Function', detail: '(row: any, column: any) => void' }
      }
    },
    cellEditChange: {
      name: 'cell-edit-change',
      description: 'Valor de celda editable cambió (input o select)',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, newValue: any, oldValue: any) => void'
        }
      }
    },
    cellEditValidate: {
      name: 'cell-edit-validate',
      description: 'Validación de celda editable terminó (solo columnas con validación)',
      control: false,
      table: {
        category: 'Eventos',
        type: {
          summary: 'Function',
          detail: '(row: any, column: any, result: { valid: boolean, message: string }) => void'
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
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: `Tabla básica con columnas definidas por \`prop\`, \`label\` y \`width\`. Los datos se pasan mediante la prop \`data\`.`
      }
    }
  },
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
    components: { GTable, GConfigProvider, GTableColumn, GIconButton },
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
        <g-table-column fixed="right" label="Operations" min-width="100" align="center">
          <template #default>
            <div class="flex items-center justify-center gap-2">
              <g-icon-button
                variant="grey"
                icon="regular pen"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
              />
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
      <g-table :data="tableData" style="width: 100%" height="450">
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

      const handleEdit = (index: number, row: any) => {
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

/** Implementación de celda tipo select: useTableCellSelect + cell-type="select" + :cell-options. La UI (GSelect) está en el UI system. */

export const TableCellSelect: Story = {
  name: 'Celda tipo select (cell-type)',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** columna que debe mostrar y editar un valor desde una lista fija (estado, categoría, rol). No requiere template ni slot.

**Pasos:** (1) Definir opciones \`{ value, title }\` (o \`label\`). (2) \`useTableCellSelect(tableData, { options, useRowIndex: true })\` → \`cellOptions\`. (3) En la columna: \`cell-type="select"\` y \`:cell-options="cellOptions"\`. Click en la celda abre el select; blur o Enter cierra.

**Label:** \`input-label\` en \`GTableColumn\` o \`label\` en \`cellOptions\`; se muestra sobre el select en modo edición.

**Ejemplo de implementación:**

\`\`\`vue
<template>
  <g-table :data="tableData" border>
    <g-table-column prop="name" label="Nombre" />
    <g-table-column
      prop="status"
      label="Estado"
      cell-type="select"
      :cell-options="cellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellSelect } from '@flash-global66/g-table'

const tableData = ref([
  { name: 'María', status: 'active' },
  { name: 'Juan', status: 'pending' },
  { name: 'Ana', status: 'inactive' }
])

const statusOptions = [
  { value: 'active', title: 'Activo' },
  { value: 'pending', title: 'Pendiente' },
  { value: 'inactive', title: 'Inactivo' }
]

const { cellOptions } = useTableCellSelect(tableData, {
  options: statusOptions,
  useRowIndex: true
})
</script>
\`\`\``
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { id: 1, name: 'María González', email: 'maria@example.com', department: 'IT', role: 'admin', status: 'active', phone: '+34 600 123 456', location: 'Madrid', joinDate: '2020-01-15', comment: 'Excelente desempeño en el proyecto Q4. Lideró el desarrollo de nuevas funcionalidades y mejoró significativamente la eficiencia del equipo.' },
        { id: 2, name: 'Juan Pérez', email: 'juan@example.com', department: 'Sales', role: 'user', status: 'pending', phone: '+34 600 234 567', location: 'Barcelona', joinDate: '2021-03-20', comment: '' },
        { id: 3, name: 'Ana Martínez', email: 'ana@example.com', department: 'Marketing', role: 'editor', status: 'inactive', phone: '+34 600 345 678', location: 'Valencia', joinDate: '2019-11-10', comment: 'Lideró la campaña de verano con resultados destacados. Incrementó el engagement en redes sociales en un 40% y generó más de 10,000 leads calificados.' },
        { id: 4, name: 'Carlos Rodríguez', email: 'carlos@example.com', department: 'IT', role: 'user', status: 'active', phone: '+34 600 456 789', location: 'Madrid', joinDate: '2022-05-08', comment: '' },
        { id: 5, name: 'Laura Sánchez', email: 'laura@example.com', department: 'HR', role: 'admin', status: 'pending', phone: '+34 600 567 890', location: 'Sevilla', joinDate: '2020-07-12', comment: 'Coordinó exitosamente el proceso de onboarding de 25 nuevos empleados durante el último trimestre, reduciendo el tiempo de incorporación en un 30%.' },
        { id: 6, name: 'Pedro López', email: 'pedro@example.com', department: 'Sales', role: 'editor', status: 'active', phone: '+34 600 678 901', location: 'Barcelona', joinDate: '2021-09-25', comment: '' },
        { id: 7, name: 'Sofía Fernández', email: 'sofia@example.com', department: 'Marketing', role: 'user', status: 'inactive', phone: '+34 600 789 012', location: 'Valencia', joinDate: '2023-02-14', comment: 'Especialista en redes sociales y contenido digital. Gestiona las cuentas corporativas y desarrolla estrategias de contenido que han aumentado el alcance orgánico.' },
        { id: 8, name: 'Diego Torres', email: 'diego@example.com', department: 'IT', role: 'admin', status: 'active', phone: '+34 600 890 123', location: 'Madrid', joinDate: '2018-06-30', comment: '' },
        { id: 9, name: 'Carmen Ruiz', email: 'carmen@example.com', department: 'Sales', role: 'user', status: 'pending', phone: '+34 600 901 234', location: 'Barcelona', joinDate: '2022-11-05', comment: 'Nuevo en el equipo, mostrando gran potencial. Ha cerrado 5 deals importantes en su primer mes y demuestra excelente capacidad de comunicación con clientes.' },
        { id: 10, name: 'Miguel Herrera', email: 'miguel@example.com', department: 'Marketing', role: 'editor', status: 'active', phone: '+34 600 012 345', location: 'Valencia', joinDate: '2021-04-18', comment: '' }
      ])
      const statusOptions = [
        { value: 'active', title: 'Activo' },
        { value: 'pending', title: 'Pendiente' },
        { value: 'inactive', title: 'Inactivo' }
      ]
      const roleOptions = [
        { value: 'admin', title: 'Administrador' },
        { value: 'editor', title: 'Editor' },
        { value: 'user', title: 'Usuario' }
      ]
      const departmentOptions = [
        { value: 'IT', title: 'Tecnología' },
        { value: 'Sales', title: 'Ventas' },
        { value: 'Marketing', title: 'Marketing' },
        { value: 'HR', title: 'Recursos Humanos' }
      ]
      
      const { cellOptions: statusCellOptions } = useTableCellSelect(tableData, {
        options: statusOptions,
        label: 'Estado',
        useRowIndex: true
      })
      const { cellOptions: roleCellOptions } = useTableCellSelect(tableData, {
        options: roleOptions,
        useRowIndex: true
      })
      const { cellOptions: departmentCellOptions } = useTableCellSelect(tableData, {
        options: departmentOptions,
        useRowIndex: true
      })
      const { cellOptions: joinDateCellOptions } = useTableCellInput(tableData, {
        label: 'Fecha Ingreso',
        placeholder: 'YYYY-MM-DD',
        useRowIndex: true
      })
      const { cellOptions: commentCellOptions } = useTableCellInput(tableData, {
        label: 'Detalle',
        placeholder: 'Opcional',
        rows: 3,
        useRowIndex: true
      })
      return { tableData, statusCellOptions, roleCellOptions, departmentCellOptions, joinDateCellOptions, commentCellOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" 
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column prop="email" label="Email" width="200" />
        <g-table-column
          prop="department"
          label="Departamento"
          width="150"
          cell-type="select"
          :cell-options="departmentCellOptions"
          input-label="Departamento del usuario"
        />
        <g-table-column
          prop="role"
          label="Rol"
          width="150"
          cell-type="select"
          :cell-options="roleCellOptions"
          input-label="Rol del usuario"
        />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
          input-label="Estado del usuario"
        />
        <g-table-column prop="phone" label="Teléfono" width="150" />
        <g-table-column prop="location" label="Ubicación" width="120" />
        <g-table-column prop="joinDate" label="Fecha Ingreso" width="140" cell-type="input" :cell-options="joinDateCellOptions" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
      </g-table>
    </g-config-provider>`
  })
}


export const TableCellInput: Story = {
  name: 'Celda tipo input (cell-type)',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** columna que debe mostrar y editar texto (o número) con un input estándar. No requiere template ni slot.

**Pasos:** (1) \`useTableCellInput(tableData, { placeholder, useRowIndex: true, ... })\` → \`cellOptions\`. (2) En la columna: \`cell-type="input"\` y \`:cell-options="cellOptions"\`. Click en la celda abre el input; blur o Enter cierra.

**Opciones útiles:** \`placeholder\`, \`label\` / \`input-label\` (label sobre el input en edición), \`emptyActionText\` / \`empty-action-text\` (texto cuando está vacío; al hacer click activa edición), \`expandColspan\` / \`expand-colspan\` (columnas que abarca el overlay; por defecto 2), \`expandDirection\` (\`"left"\` | \`"right"\`), \`rules\` (validación).

**Textarea:** pase \`rows\` en \`useTableCellInput\`; se renderiza un textarea y la fila puede crecer en altura. Cerrar con \`Ctrl+Enter\` o \`Cmd+Enter\`.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { name: 'María', comment: 'Inversión inicial para el proyecto Q4', notes: 'Revisar detalles adicionales con el equipo de finanzas antes de aprobar el presupuesto completo.' },
        { name: 'Juan', comment: '', notes: '' },
        { name: 'Ana', comment: 'Gastos de marketing', notes: 'Incluir campaña de redes sociales y publicidad digital para el próximo trimestre.' }
      ])
      const { cellOptions } = useTableCellInput(tableData, {
        label: 'Detalle',
        placeholder: 'Opcional',
        useRowIndex: true
      })
      const { cellOptions: notesCellOptions } = useTableCellInput(tableData, {
        label: 'Notas',
        placeholder: 'Agregar notas adicionales...',
        rows: 3,
        useRowIndex: true
      })
      return { tableData, cellOptions, notesCellOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData"
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
        <g-table-column
          prop="notes"
          label="Notas"
          cell-type="input"
          empty-action-text="Click para agregar notas"
          input-label="Notas"
        />
      </g-table>
    </g-config-provider>`
  })
}

export const CustomCellEdit: Story = {
  name: 'Celda personalizada con GCellEdit',
  parameters: {
    docs: {
      description: {
        story: `**GCellEdit** permite crear celdas editables con vista y edición totalmente personalizadas (varios controles, otro diseño). Se usa dentro del slot \`#default\` de \`GTableColumn\`.

**Qué hace el componente:** alterna entre vista y edición (con transición), expande el overlay según \`expand-direction\` y \`expand-colspan\`, **cierra al hacer clic fuera** de la celda y **enfoca automáticamente** el primer input/textarea/select dentro del slot \`#edit\`.

**Props:** \`v-model\` (estado de edición por fila, p. ej. \`row.isEditing\`), \`row\`, \`column\`, \`index\`, \`prop\` (nombre del campo), \`expand-direction\` (\`"left"\` | \`"right"\`), \`expand-colspan\` (columnas que abarca).

**Slots:**
- \`#view="{ toggle }"\` — Contenido en modo solo lectura. Click o Enter/Espacio entra en edición.
- \`#edit="{ close }"\` — Contenido en modo edición. Llame \`close()\` para cerrar (p. ej. en \`@keydown.enter\` y \`@blur\` del input). No es obligatorio poner \`autofocus\` en el input: el componente intenta enfocar el primer input/textarea/select al abrir.

**Datos:** cada fila debe tener una propiedad booleana para el estado de edición (aquí \`isEditing\`).`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider, GCellEdit, GInput },
    setup() {
      const tableData = ref([
        { name: 'Producto A', color: '#ff0000', customValue: 'Valor 1', isEditing: false },
        { name: 'Producto B', color: '#00ff00', customValue: 'Valor 2', isEditing: false },
        { name: 'Producto C', color: '#0000ff', customValue: 'Valor 3', isEditing: false }
      ])
      
      return { tableData }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        
        <g-table-column prop="customValue" label="Custom Edit" width="200">
          <template #default="{ row, column, $index }">
            <g-cell-edit
              v-model="row.isEditing"
              :row="row"
              :column="column"
              :index="$index"
              prop="customValue"
              expand-direction="left"
              expand-colspan="1"
            >
              <template #view="{ toggle }">
                <div class="w-full flex items-center justify-between">
                  <span>{{ row.customValue }}</span>
                </div>
              </template>
              
              <template #edit="{ close }">
                 <div class="flex items-center gap-2 w-full px-2">
                    <g-input v-model="row.customValue" size="small" @keydown.enter="close" @blur="close" autofocus class="w-full" />
                 </div>
              </template>
            </g-cell-edit>
          </template>
        </g-table-column>
        
        <g-table-column prop="color" label="Otro Campo" />
      </g-table>
    </g-config-provider>`
  })
}

/** Casos de uso: expansión configurable (expand-colspan, expand-direction). */

export const TableCellExpandRight: Story = {
  name: 'Expansión hacia la derecha (expand-direction="right")',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** cuando la celda editable está a la izquierda o en el centro y quiere que el overlay ocupe más espacio hacia la derecha (p. ej. comentarios largos).

**Qué demuestra:** \`expand-direction="right"\` (por defecto) y \`expand-colspan="3"\`: al editar, el overlay abarca la celda actual y 2 columnas más a la derecha. El overlay no se desplaza (\`leftOffset\` = 0). Configure \`expandColspan\` en \`useTableCellInput\` o \`expand-colspan\` en \`GTableColumn\`.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { name: 'A', comment: 'Texto corto', extra: 'Col extra' },
        { name: 'B', comment: '', extra: '' },
        { name: 'C', comment: 'Otro comentario largo para ver expansión', extra: '' }
      ])
      const { cellOptions } = useTableCellInput(tableData, {
        placeholder: 'Editar...',
        useRowIndex: true,
        expandColspan: 3,
        expandDirection: 'right'
      })
      return { tableData, cellOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="name" label="Col 2" width="120" />
        <g-table-column
          prop="comment"
          label="Comentario (expand right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="cellOptions"
        />
        <g-table-column prop="extra" label="Col 4" width="120" />
        <g-table-column prop="extra" label="Col 5" width="120" />
      </g-table>
    </g-config-provider>`
  })
}

export const TableCellExpandLeft: Story = {
  name: 'Expansión hacia la izquierda (expand-direction="left")',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** cuando la celda editable está a la derecha o es una de las últimas columnas y quiere que el overlay crezca hacia la izquierda (evitar que se salga por la derecha).

**Qué demuestra:** \`expand-direction="left"\` y \`expand-colspan="2"\`: al editar, el overlay abarca la columna anterior y la actual; se desplaza a la izquierda (\`leftOffset\` > 0). Configure \`expandDirection: 'left'\` y \`expandColspan\` en \`useTableCellInput\` o las props equivalentes en \`GTableColumn\`.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { name: 'A', comment: 'Texto', notes: 'Notas' },
        { name: 'B', comment: '', notes: '' },
        { name: 'C', comment: 'Ver expansión a la izquierda', notes: '' }
      ])
      const { cellOptions } = useTableCellInput(tableData, {
        placeholder: 'Editar...',
        useRowIndex: true,
        expandColspan: 2,
        expandDirection: 'left'
      })
      return { tableData, cellOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="notes" label="Notas" width="140" />
        <g-table-column
          prop="comment"
          label="Comentario (expand left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="cellOptions"
        />
        <g-table-column prop="name" label="Col 4" width="120" />
      </g-table>
    </g-config-provider>`
  })
}

export const TableCellExpandLastColumn: Story = {
  name: 'Última columna editable (siempre expande a la izquierda)',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** tabla donde la última columna es editable (p. ej. notas, comentarios). El componente fuerza expansión a la izquierda para no salirse del borde derecho.

**Qué demuestra:** cuando la celda editable es la **última columna**, el overlay siempre expande hacia la **izquierda**; no hace falta indicar \`expand-direction\` en este caso. Combine con \`expand-colspan\` si quiere abarcar más de una columna.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { name: 'María', status: 'active', notes: 'Revisar presupuesto Q4' },
        { name: 'Juan', status: 'pending', notes: '' },
        { name: 'Ana', status: 'inactive', notes: 'Seguimiento con cliente' }
      ])
      const { cellOptions: statusCellOptions } = useTableCellSelect(tableData, {
        options: [
          { value: 'active', title: 'Activo' },
          { value: 'pending', title: 'Pendiente' },
          { value: 'inactive', title: 'Inactivo' }
        ],
        useRowIndex: true
      })
      const { cellOptions: notesCellOptions } = useTableCellInput(tableData, {
        placeholder: 'Notas (última columna)...',
        useRowIndex: true
      })
      return { tableData, statusCellOptions, notesCellOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="140" />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
        />
        <g-table-column
          prop="notes"
          label="Notas (última columna)"
          cell-type="input"
          :cell-options="notesCellOptions"
        />
      </g-table>
    </g-config-provider>`
  })
}

export const TableCellExpandAllCases: Story = {
  name: 'Todos los casos de expansión en una tabla',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** referencia rápida de los tres comportamientos de expansión en una sola tabla.

**Qué demuestra:** **Col 3** — \`expand-direction="right"\` y \`expand-colspan="3"\` (overlay a la derecha). **Col 5** — \`expand-direction="left"\` y \`expand-colspan="2"\` (overlay a la izquierda). **Col 7** — última columna; siempre expande a la izquierda sin configurar \`expand-direction\`.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { id: 1, a: 'A1', b: 'B1', commentRight: 'Expand right 3', d: 'D1', commentLeft: 'Expand left 2', f: 'F1', lastCol: 'Última col' },
        { id: 2, a: 'A2', b: 'B2', commentRight: '', d: 'D2', commentLeft: '', f: 'F2', lastCol: '' },
        { id: 3, a: 'A3', b: 'B3', commentRight: 'Texto largo para ver overlay', d: 'D3', commentLeft: 'Overlay a la izquierda', f: 'F3', lastCol: 'Siempre left' }
      ])
      const { cellOptions: rightOptions } = useTableCellInput(tableData, {
        placeholder: 'Editar (right 3)...',
        useRowIndex: true,
        expandColspan: 3,
        expandDirection: 'right'
      })
      const { cellOptions: leftOptions } = useTableCellInput(tableData, {
        placeholder: 'Editar (left 2)...',
        useRowIndex: true,
        expandColspan: 2,
        expandDirection: 'left'
      })
      const { cellOptions: lastOptions } = useTableCellInput(tableData, {
        placeholder: 'Última col...',
        useRowIndex: true
      })
      return { tableData, rightOptions, leftOptions, lastOptions }
    },
    template: `
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="a" label="Col 1" width="90" />
        <g-table-column prop="b" label="Col 2" width="90" />
        <g-table-column
          prop="commentRight"
          label="Col 3 (right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="rightOptions"
        />
        <g-table-column prop="d" label="Col 4" width="90" />
        <g-table-column
          prop="commentLeft"
          label="Col 5 (left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="leftOptions"
        />
        <g-table-column prop="f" label="Col 6" width="90" />
        <g-table-column
          prop="lastCol"
          label="Col 7 (última)"
          cell-type="input"
          :cell-options="lastOptions"
        />
      </g-table>
    </g-config-provider>`
  })
}

export const TableCellValidation: Story = {
  name: 'Celda con validación (rules)',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** columnas tipo input donde el valor debe cumplir reglas (requerido, email, rango, etc.) antes de considerar la edición válida.

**Qué demuestra:** pase \`rules\` en las opciones de \`useTableCellInput\` (compatible con \`async-validator\` y \`GForm\`). La tabla emite \`cell-edit-validate\` con \`{ valid, message }\`. Opcionales: \`onValidationFailed\`, \`onValidationSuccess\` y la API \`validation.clearAllValidation()\` para limpiar errores.

**Características:**
- Validación en \`blur\` (al salir de la celda) y/o \`change\` (al escribir)
- Mensajes de error personalizados
- Estados visuales de error
- API para limpiar validación programáticamente

**Reglas disponibles:**
- \`required\`: Campo requerido
- \`type\`: Tipo de dato (email, url, number, etc.)
- \`min/max\`: Longitud mínima/máxima
- \`pattern\`: Expresión regular
- \`validator\`: Función de validación personalizada

**Ejemplo de implementación:**

\`\`\`vue
<template>
  <g-table :data="tableData">
    <g-table-column
      prop="email"
      label="Email"
      cell-type="input"
      :cell-options="emailCellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellInput } from '@flash-global66/g-table'

const tableData = ref([
  { id: 1, name: 'Juan', email: '' },
  { id: 2, name: 'María', email: 'maria@example.com' }
])

const { cellOptions: emailCellOptions, validation } = useTableCellInput(tableData, {
  label: 'Email',
  placeholder: 'correo@ejemplo.com',
  rules: [
    { required: true, message: 'El email es requerido', trigger: 'blur' },
    { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
  ],
  useRowIndex: true,
  onValidationFailed: (errors, row, prop, index) => {
    console.log('Validación fallida:', errors)
  }
})

// Limpiar validación programáticamente
const clearAllErrors = () => validation?.clearAllValidation()
</script>
\`\`\``
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider, GButton },
    setup() {
      const tableData = ref([
        { id: 1, name: 'Juan Pérez', email: '', age: '', website: '' },
        { id: 2, name: 'María García', email: 'maria@example.com', age: '28', website: 'https://maria.dev' },
        { id: 3, name: 'Carlos López', email: 'carlos-invalid', age: '150', website: 'not-a-url' },
        { id: 4, name: 'Ana Martínez', email: '', age: '', website: '' }
      ])

      const { cellOptions: emailCellOptions, validation: emailValidation } = useTableCellInput(tableData, {
        label: 'Email',
        placeholder: 'correo@ejemplo.com',
        emptyActionText: 'Agregar email',
        rules: [
          { required: true, message: 'El email es requerido', trigger: 'blur' },
          { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
        ],
        useRowIndex: true,
        onValidationFailed: (errors, row, prop, index) => {
          console.log('Email validación fallida:', { errors, row, prop, index })
        }
      })

      const { cellOptions: ageCellOptions, validation: ageValidation } = useTableCellInput(tableData, {
        label: 'Edad',
        placeholder: '18-120',
        emptyActionText: 'Agregar edad',
        type: 'number',
        rules: [
          { required: true, message: 'La edad es requerida', trigger: 'blur' },
          {
            type: 'number',
            transform: (value: string) => Number(value),
            message: 'Debe ser un número',
            trigger: 'blur'
          },
          {
            type: 'number',
            transform: (value: string) => Number(value),
            min: 18,
            max: 120,
            message: 'La edad debe estar entre 18 y 120',
            trigger: 'blur'
          }
        ],
        useRowIndex: true
      })

      const { cellOptions: websiteCellOptions, validation: websiteValidation } = useTableCellInput(tableData, {
        label: 'Sitio web',
        placeholder: 'https://ejemplo.com',
        emptyActionText: 'Agregar URL',
        rules: [
          { type: 'url', message: 'Ingresa una URL válida (ej: https://...)', trigger: 'blur' }
        ],
        useRowIndex: true
      })

      const clearAllValidations = () => {
        emailValidation?.clearAllValidation()
        ageValidation?.clearAllValidation()
        websiteValidation?.clearAllValidation()
      }

      return {
        tableData,
        emailCellOptions,
        ageCellOptions,
        websiteCellOptions,
        clearAllValidations
      }
    },
    template: `
    <g-config-provider>
      <div class="mb-md">
        <g-button @click="clearAllValidations">Limpiar validaciones</g-button>
      </div>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column
          prop="email"
          label="Email (required + email)"
          width="220"
          cell-type="input"
          :cell-options="emailCellOptions"
        />
        <g-table-column
          prop="age"
          label="Edad (18-120)"
          width="150"
          cell-type="input"
          :cell-options="ageCellOptions"
        />
        <g-table-column
          prop="website"
          label="Website (URL)"
          width="220"
          cell-type="input"
          :cell-options="websiteCellOptions"
        />
      </g-table>
      <div class="mt-md text-gray-500 text-3">
        <p><strong>Instrucciones:</strong> Haz click en una celda para editarla. Al salir (blur), se validará el contenido.</p>
        <p>Prueba dejando campos vacíos, ingresando emails inválidos, edades fuera de rango, o URLs mal formadas.</p>
      </div>
    </g-config-provider>`
  })
}

export const TableCellEditEvents: Story = {
  name: 'Eventos de celdas editables',
  parameters: {
    docs: {
      description: {
        story: `**Cuándo usar:** cuando necesita reaccionar a apertura/cierre/cambio de celdas editables (analytics, sincronizar con backend, mostrar mensajes).

**Qué demuestra:** la tabla emite estos eventos cuando se usan celdas editables (tanto con \`cell-type\` como con \`GCellEdit\`):

| Evento | Cuándo se emite | Parámetros |
|--------|------------------|------------|
| \`cell-edit-open\` | La celda entra en modo edición (click o foco) | \`(row, column)\` |
| \`cell-edit-close\` | La celda sale de modo edición (blur, Enter o clic fuera) | \`(row, column)\` |
| \`cell-edit-change\` | El valor de la celda cambió (input o select) | \`(row, column, newValue, oldValue)\` |
| \`cell-edit-validate\` | Terminó la validación de la celda (solo si hay reglas) | \`(row, column, result)\` con \`result.valid\` y \`result.message\` |

Útil para sincronizar estado, analytics o validación externa. En esta historia se registran los últimos eventos en el panel derecho.`
      }
    }
  },
  render: () => ({
    components: { GTable, GTableColumn, GConfigProvider },
    setup() {
      const tableData = ref([
        { id: 1, name: 'Tom', status: 'active', note: '' },
        { id: 2, name: 'Jane', status: 'inactive', note: '' }
      ])
      const eventsLog = ref<Array<{ event: string; payload: string }>>([])
      const maxLog = 12

      const pushLog = (event: string, ...args: unknown[]) => {
        const payload = args.map((a) => (typeof a === 'object' && a !== null && 'property' in a) ? `column.${(a as { property?: string }).property}` : String(a)).join(', ')
        eventsLog.value = [{ event, payload }, ...eventsLog.value].slice(0, maxLog)
      }

      const onCellEditOpen = (row: unknown, column: unknown) => {
        pushLog('cell-edit-open', row, column)
      }
      const onCellEditClose = (row: unknown, column: unknown) => {
        pushLog('cell-edit-close', row, column)
      }
      const onCellEditChange = (row: unknown, column: unknown, newVal: unknown, oldVal: unknown) => {
        pushLog('cell-edit-change', row, column, String(oldVal) + ' -> ' + String(newVal))
      }
      const onCellEditValidate = (row: unknown, column: unknown, result: { valid: boolean; message: string }) => {
        pushLog('cell-edit-validate', row, column, result.valid ? 'valid' : result.message)
      }

      const statusOptions = [
        { value: 'active', title: 'Activo' },
        { value: 'inactive', title: 'Inactivo' }
      ]
      const { cellOptions: statusCellOptions } = useTableCellSelect(tableData, {
        options: statusOptions,
        useRowIndex: true
      })
      const { cellOptions: noteCellOptions } = useTableCellInput(tableData, {
        placeholder: 'Nota',
        useRowIndex: true
      })

      return {
        tableData,
        eventsLog,
        onCellEditOpen,
        onCellEditClose,
        onCellEditChange,
        onCellEditValidate,
        statusCellOptions,
        noteCellOptions
      }
    },
    template: `
    <g-config-provider>
      <div class="flex gap-md">
        <div class="flex-1 min-w-0">
          <g-table
            :data="tableData"
            border
            style="width: 100%"
            :cell-style="{ zIndex: 'auto' }"
            @cell-edit-open="onCellEditOpen"
            @cell-edit-close="onCellEditClose"
            @cell-edit-change="onCellEditChange"
            @cell-edit-validate="onCellEditValidate"
          >
            <g-table-column prop="name" label="Nombre" width="120" />
            <g-table-column
              prop="status"
              label="Estado"
              width="140"
              cell-type="select"
              :cell-options="statusCellOptions"
            />
            <g-table-column
              prop="note"
              label="Nota"
              cell-type="input"
              :cell-options="noteCellOptions"
            />
          </g-table>
        </div>
        <div class="w-72 flex-shrink-0">
          <p class="font-medium text-3 mb-xs">Últimos eventos</p>
          <ul class="text-2 space-y-xxs text-gray-600">
            <li v-for="(entry, i) in eventsLog" :key="i" class="font-mono truncate" :title="entry.payload">
              <span class="text-primary-txt font-medium">{{ entry.event }}</span>
            </li>
            <li v-if="eventsLog.length === 0" class="text-gray-400">Interactúa con las celdas editables</li>
          </ul>
        </div>
      </div>
    </g-config-provider>`
  })
}
