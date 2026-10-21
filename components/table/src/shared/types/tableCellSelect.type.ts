export interface TableCellSelectOption {
  value: string | number;
  title?: string;
  label?: string;
  description?: string;
  icon?: string;
}

export type TableCellSelectGetOptions = (
  row: unknown,
) => TableCellSelectOption[];

export interface UseTableCellSelectOptions {
  /** Opciones estáticas del select (formato { value, title } o { value, label }). Se ignora si se provee getOptions. */
  options?: TableCellSelectOption[];
  /** Función que devuelve las opciones por fila. Tiene prioridad sobre options. */
  getOptions?: TableCellSelectGetOptions;
  /** Label del select que se muestra sobre el componente en modo edición */
  label?: string;
  /** Si true, la clave de edición usa el índice de fila (default cuando no hay rowKey) */
  useRowIndex?: boolean;
  /** Propiedad de la fila usada como clave única; si se define, tiene prioridad sobre useRowIndex */
  rowKey?: string;
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number;
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right';
}

export interface TableCellSelectCellOptions {
  options: TableCellSelectOption[];
  /** Función que devuelve las opciones por fila. Si está presente, el renderer la usa en lugar de options. */
  getOptions?: TableCellSelectGetOptions;
  label?: string;
  getEditing: (row: unknown, prop: string, index?: number) => boolean;
  toggle: (row: unknown, prop: string, index?: number) => void;
  setEditing: (key: string | null) => void;
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number;
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right';
}
