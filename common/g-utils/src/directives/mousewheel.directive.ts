import normalizeWheel from 'normalize-wheel-es';

import type { ObjectDirective } from 'vue';

/**
 * Handler enlazado a la directiva `Mousewheel`. En runtime recibe el evento
 * `WheelEvent` nativo y su versión normalizada por `normalize-wheel-es`.
 *
 * Se tipa de forma laxa (igual que `ClickOutside`/`vRepeatClick`) para no
 * exponer el tipo de terceros `NormalizedWheelEvent` en la API pública de
 * `g-utils` (evita fugas de nombres privados en los `.d.ts` de los consumidores).
 */
type MousewheelHandler = (...args: unknown[]) => unknown;

/**
 * Registra un listener `wheel` (pasivo) sobre el elemento y normaliza el
 * evento con `normalize-wheel-es` antes de delegar en el callback, que recibe
 * el evento nativo y su versión normalizada.
 */
const mousewheel = (
  element: HTMLElement,
  callback: MousewheelHandler,
): void => {
  if (element && element.addEventListener) {
    element.addEventListener(
      'wheel',
      function (this: HTMLElement, event: WheelEvent) {
        const normalized = normalizeWheel(event);
        if (callback) {
          Reflect.apply(callback, this, [event, normalized]);
        }
      },
      { passive: true },
    );
  }
};

/**
 * Directiva que escucha el scroll de rueda sobre un elemento y entrega tanto
 * el evento nativo como su versión normalizada al handler enlazado.
 *
 * Copiada del algoritmo exacto de element-plus (`es/directives/mousewheel`)
 * para mantener paridad con los consumidores migrados (ej: `table`).
 */
export const Mousewheel: ObjectDirective<HTMLElement, MousewheelHandler> = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  },
};

export default Mousewheel;
