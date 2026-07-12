/**
 * Constantes de eventos y códigos de teclado compartidas por los componentes
 * del Design System. Copiadas exactamente de element-plus para mantener
 * paridad de comportamiento con los consumidores migrados.
 */

/** Nombre del evento estándar de Vue para `v-model`. */
export const UPDATE_MODEL_EVENT = 'update:modelValue';

/** Nombre del evento estándar para cambios confirmados de valor. */
export const CHANGE_EVENT = 'change';

/** Nombre del evento estándar de entrada (mientras el usuario escribe). */
export const INPUT_EVENT = 'input';

/**
 * Mapa de códigos de tecla (`KeyboardEvent.code`) usados en interacciones de teclado.
 *
 * Intencionalmente NO usa `as const`: element-plus's own `.d.ts` (`es/constants/aria.d.ts`)
 * widens every property to plain `string`, not literal types. Consumers that compare
 * a runtime-computed `string` against `EVENT_CODE.x` (e.g. via `Array.includes`) rely on
 * that widened contract; narrowing here would be a byte-fidelity regression relative to EP.
 */
export const EVENT_CODE: {
  tab: string;
  enter: string;
  space: string;
  left: string;
  up: string;
  right: string;
  down: string;
  esc: string;
  delete: string;
  backspace: string;
  numpadEnter: string;
  pageUp: string;
  pageDown: string;
  home: string;
  end: string;
} = {
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
};
