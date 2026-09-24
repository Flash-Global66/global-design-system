import { ref } from 'vue';
import type { InputCellState } from '../types/cellRenderer.type';

function createInputCellState(): InputCellState {
  return {
    defaultEditingState: ref<string | null>(null),
    isAnyValidating: ref(false),
  };
}

const stateByTable = new WeakMap<object, InputCellState>();
const fallbackTableKey = {};

/**
 * Estado reactivo de las celdas `cell-type="input"`, aislado **por instancia de tabla**: cada
 * `<GTable>` recibe su propio `defaultEditingState`/`isAnyValidating`, indexado por la instancia
 * de tabla (`table`, ya recibida por `renderInputCell` como argumento) en un `WeakMap` — así dos
 * `<GTable>` editables montadas a la vez no pisan el estado de edición de la otra.
 *
 * Antes de este fix, `defaultEditingState`/`isAnyValidating` eran refs de **módulo**, compartidas
 * por todas las tablas de la página. Si `table` no está disponible (llamada sin instancia de
 * tabla, por ejemplo en un test unitario del renderer), cae a un estado compartido de respaldo
 * para no romper esos casos.
 */
export function useInputCellState(table?: object): InputCellState {
  const key = table ?? fallbackTableKey;
  let state = stateByTable.get(key);
  if (!state) {
    state = createInputCellState();
    stateByTable.set(key, state);
  }
  return state;
}
