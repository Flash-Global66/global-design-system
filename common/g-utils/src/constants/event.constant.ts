/**
 * Constantes de eventos y códigos de teclado compartidas por los componentes
 * del Design System. Copiadas exactamente de element-plus para mantener
 * paridad de comportamiento con los consumidores migrados.
 */

/** Nombre del evento estándar de Vue para `v-model`. */
export const UPDATE_MODEL_EVENT = 'update:modelValue';

/** Nombre del evento estándar para cambios confirmados de valor. */
export const CHANGE_EVENT = 'change';

/** Mapa de códigos de tecla (`KeyboardEvent.code`) usados en interacciones de teclado. */
export const EVENT_CODE = {
  tab: 'Tab',
  enter: 'Enter',
  space: 'Space',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown',
  esc: 'Escape',
  delete: 'Delete',
  backspace: 'Backspace',
  numpadEnter: 'NumpadEnter',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  home: 'Home',
  end: 'End',
} as const;
