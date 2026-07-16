export type ExpandDirection = 'left' | 'right'

const MAX_CACHE_SIZE = 500

export const expandedWidthCache: Record<string, number> = {}
export const leftOffsetCache: Record<string, number> = {}

let currentActiveTable: HTMLElement | undefined

const tableIdByElement = new WeakMap<HTMLElement, string>()
let tableIdCounter = 0

const TABLE_ID_PREFIX = 'g-table-exp-'

/**
 * Establece la tabla activa desde un evento o elemento. Se usa para determinar qué tabla usar para los cálculos.
 */
export function setActiveTableFromEvent(e: Event | HTMLElement) {
  const target = (e instanceof Event ? e.target : e) as HTMLElement
  const table = target.closest('.gui-table') as HTMLElement
  if (table) currentActiveTable = table
}

/**
 * Obtiene el elemento raíz de la tabla (el que tiene .gui-table) para cálculos.
 */
function getTableElement(): HTMLElement | undefined {
  return currentActiveTable ?? (document.querySelector('.gui-table') as HTMLElement) ?? undefined
}

/**
 * Asigna o devuelve un id estable por elemento de tabla. Se usa para prefijar las claves de caché
 * y poder limpiar solo las entradas de esa tabla al desmontar.
 */
function getOrSetTableId(tableEl: HTMLElement): string {
  let id = tableIdByElement.get(tableEl)
  if (!id) {
    id = `${TABLE_ID_PREFIX}${++tableIdCounter}`
    tableIdByElement.set(tableEl, id)
  }
  return id
}

/**
 * Aplica el límite de tamaño de la caché eliminando las entradas más antiguas.
 */
function enforceCacheLimit(cache: Record<string, number>, maxSize: number): void {
  const keys = Object.keys(cache)
  if (keys.length > maxSize) {
    const keysToRemove = keys.slice(0, keys.length - maxSize)
    for (const key of keysToRemove) {
      delete cache[key]
    }
  }
}

/**
 * Limpia las entradas de la caché asociadas con una tabla.
 * Debe ser llamado desde el componente de la tabla en onBeforeUnmount
 * pasando el ref del wrapper (el elemento raíz con .gui-table).
 */
export function clearExpansionCacheForTable(tableEl: HTMLElement | null | undefined): void {
  if (!tableEl) return
  const tableId = tableIdByElement.get(tableEl)
  if (!tableId) return
  const prefix = `${tableId}:`
  for (const key of Object.keys(expandedWidthCache)) {
    if (key.startsWith(prefix)) delete expandedWidthCache[key]
  }
  for (const key of Object.keys(leftOffsetCache)) {
    if (key.startsWith(prefix)) delete leftOffsetCache[key]
  }
  tableIdByElement.delete(tableEl)
}

/**
 * Calcula automáticamente el ancho expandido basándose en las columnas de la tabla.
 */
export function getTableCells(): HTMLElement[] | undefined {
  try {
    const tableElement = currentActiveTable || document.querySelector('.gui-table')
    if (!tableElement) return undefined

    const firstDataRow = tableElement.querySelector('tbody tr')
    if (!firstDataRow) return undefined

    return Array.from(firstDataRow.querySelectorAll('td'))
  } catch {
    return undefined
  }
}

/**
 * Calcula automáticamente el offset izquierdo basándose en la dirección y el número de columnas.
 * Última columna: siempre expansión a la izquierda (mantener lógica actual) para evitar que el contenido crezca más que la tabla.
 * Resto: direction 'right' -> 0; direction 'left' -> suma de columnas a la izquierda según expandColspan.
 */
export function calculateLeftOffset(
  columnIndex: number,
  cacheKey: string,
  expandDirection?: ExpandDirection,
  expandColspan?: number
): number {
  const direction = expandDirection ?? 'right'
  const numCols = Math.max(1, expandColspan ?? 2)
  const tableEl = getTableElement()
  const tableId = tableEl ? getOrSetTableId(tableEl) : 'global'
  const finalCacheKey = `${tableId}:${cacheKey}-offset-${direction}-${numCols}`

  if (leftOffsetCache[finalCacheKey] !== undefined) {
    return leftOffsetCache[finalCacheKey]
  }

  const cells = getTableCells()
  if (!cells) return 0

  const isLastColumn = columnIndex === cells.length - 1
  let offset = 0

  if (isLastColumn) {
    if (columnIndex > 0) {
      offset += cells[columnIndex - 1]?.getBoundingClientRect()?.width || 0
      if (columnIndex > 1) {
        offset += cells[columnIndex - 2]?.getBoundingClientRect()?.width || 0
      }
    }
  } else if (direction === 'left') {
    const startIndex = Math.max(0, columnIndex - numCols + 1)
    for (let i = startIndex; i < columnIndex; i++) {
      offset += cells[i]?.getBoundingClientRect()?.width || 0
    }
  }

  leftOffsetCache[finalCacheKey] = offset
  enforceCacheLimit(leftOffsetCache, MAX_CACHE_SIZE)
  return offset
}

/**
 * Calcula automáticamente el ancho expandido basándose en las columnas de la tabla.
 * direction 'right': ancho = suma de columna actual + hasta (expandColspan - 1) columnas a la derecha; no se suma leftOffset.
 * direction 'left': ancho = suma de hasta (expandColspan - 1) columnas a la izquierda + celda actual.
 * Última columna con direction right: solo columna actual (no hay columnas a la derecha).
 */
export function calculateExpandedWidthSync(
  columnProperty: string,
  columnIndex: number,
  cacheKey: string,
  maxColspan?: number,
  expandDirection?: ExpandDirection
): number | undefined {
  const direction = expandDirection ?? 'right'
  const numCols = Math.max(1, maxColspan ?? 2)
  const tableEl = getTableElement()
  const tableId = tableEl ? getOrSetTableId(tableEl) : 'global'
  const finalCacheKey = `${tableId}:${cacheKey}-expand-${direction}-${numCols}`

  if (expandedWidthCache[finalCacheKey] !== undefined) {
    return expandedWidthCache[finalCacheKey]
  }

  const cells = getTableCells()
  if (!cells) return undefined

  const isLastColumn = columnIndex === cells.length - 1
  let startIndex = 0
  let endIndex = 0

  if (!isLastColumn) {
    if (direction === 'right') {
      startIndex = columnIndex
      endIndex = Math.min(cells.length - 1, columnIndex + numCols - 1)
    } else {
      startIndex = Math.max(0, columnIndex - numCols + 1)
      endIndex = columnIndex
    }
  }

  let totalWidth = 0
  if (isLastColumn) {
    totalWidth += cells[columnIndex]?.getBoundingClientRect()?.width || 0
    if (columnIndex > 0) {
      totalWidth += cells[columnIndex - 1]?.getBoundingClientRect()?.width || 0
      if (columnIndex > 1) {
        totalWidth += cells[columnIndex - 2]?.getBoundingClientRect()?.width || 0
      }
    }
  } else {
    for (let i = startIndex; i <= endIndex; i++) {
      const rect = cells[i]?.getBoundingClientRect()
      const width = rect?.width || 0
      totalWidth += width
    }
  }

  if (totalWidth > 0) {
    expandedWidthCache[finalCacheKey] = totalWidth
    enforceCacheLimit(expandedWidthCache, MAX_CACHE_SIZE)
  }
  return totalWidth > 0 ? totalWidth : undefined
}

/**
 * Actualiza el estilo de la celda padre para permitir desbordamiento cuando sea necesario.
 * Esto es crucial para renderizadores que expanden su contenido más allá de los límites de la celda.
 */
export function setCellOverflow(el: HTMLElement, isVisible: boolean) {
  const cell = el.closest('.cell') as HTMLElement
  if (cell) {
    cell.style.overflow = isVisible ? 'visible' : ''
  }
}
