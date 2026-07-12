import { isFunction } from '../utils/function.util';

import type { ObjectDirective } from 'vue';

/** Intervalo (ms) entre repeticiones mientras el botón sigue presionado. */
export const REPEAT_INTERVAL = 100;
/** Retraso (ms) antes de que comience la repetición automática. */
export const REPEAT_DELAY = 600;

/** Opciones de la directiva `vRepeatClick`. */
interface RepeatClickOptions {
  interval?: number;
  delay?: number;
  handler: (...args: unknown[]) => unknown;
}

/** Valor aceptado por `vRepeatClick`: un handler directo o un objeto de opciones. */
type RepeatClickValue = RepeatClickOptions | RepeatClickOptions['handler'];

/**
 * Directiva que repite la ejecución de un handler mientras se mantiene
 * presionado el botón izquierdo del mouse: se dispara una vez de inmediato,
 * espera `delay` ms y luego repite cada `interval` ms hasta `mouseup`.
 *
 * Copiada del algoritmo exacto de element-plus (`es/directives/repeat-click`)
 * para mantener paridad con los consumidores migrados (ej: `time-picker`).
 */
export const vRepeatClick: ObjectDirective<HTMLElement, RepeatClickValue> = {
  beforeMount(el, binding) {
    const value = binding.value;
    const options: Partial<RepeatClickOptions> = isFunction(value) ? {} : value;
    const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = options;

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let delayId: ReturnType<typeof setTimeout> | undefined;

    const handler = () => (isFunction(value) ? value() : value.handler());

    const clear = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = undefined;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    el.addEventListener('mousedown', (evt: MouseEvent) => {
      if (evt.button !== 0) return;
      clear();
      handler();
      document.addEventListener('mouseup', () => clear(), { once: true });
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler();
        }, interval);
      }, delay);
    });
  },
};

export default vRepeatClick;
