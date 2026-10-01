export interface UseEditableCellOptions {
  useRowIndex?: boolean;
  rowKey?: string;
}

export interface EditableCellApi {
  getEditing: (row: unknown, prop: string, index?: number) => boolean;
  toggle: (row: unknown, prop: string, index?: number) => void;
  setEditing: (key: string | null) => void;
}
