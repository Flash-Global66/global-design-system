import { ref } from 'vue';

const defaultEditingState = ref<string | null>(null);
const isAnyValidating = ref(false);

/**
 * Estado reactivo de las celdas `cell-type="input"`, a nivel de módulo: lo comparten todas las
 * tablas de la página. `defaultEditingState` es la celda en edición cuando `cellOptions` no trae
 * su propio `getEditing`/`toggle`/`setEditing`; `isAnyValidating` bloquea abrir otra celda
 * mientras una validación async está en curso.
 */
export function useInputCellState() {
  return { defaultEditingState, isAnyValidating };
}
