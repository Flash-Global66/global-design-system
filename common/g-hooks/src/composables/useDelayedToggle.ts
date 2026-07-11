import { unref } from 'vue';
import { buildProps, isNumber } from '@flash-global66/g-utils';
import { useTimeout } from './useTimeout';

import type { ExtractPropTypes, ToRefs } from 'vue';

/**
 * Portado byte-exact desde `useDelayedToggle`/`useDelayedToggleProps` de
 * element-plus 2.9.7 (`es/hooks/use-delayed-toggle/index.mjs`).
 *
 * Define los tres retardos configurables que comparten los componentes tipo
 * popper (tooltip, popover, dropdown, ...): tiempo de espera antes de
 * mostrarse, antes de ocultarse, y cierre automático tras un tiempo abierto.
 */
export const useDelayedToggleProps = buildProps({
  /**
   * @description retardo antes de mostrarse, en milisegundos.
   */
  showAfter: {
    type: Number,
    default: 0,
  },
  /**
   * @description retardo antes de ocultarse, en milisegundos.
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description cierre automático tras estar abierto, en milisegundos (0 lo desactiva).
   */
  autoClose: {
    type: Number,
    default: 0,
  },
} as const);

export type UseDelayedToggleProps = {
  open: (event?: Event) => void;
  close: (event?: Event) => void;
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>;

/**
 * Orquesta la apertura/cierre retardado de un elemento tipo popper.
 *
 * `onOpen` programa la invocación de `open` tras `showAfter` ms; si
 * `autoClose` es un número positivo, además programa `close` tras ese tiempo
 * una vez abierto. `onClose` cancela cualquier auto-cierre pendiente y
 * programa `close` tras `hideAfter` ms. Cada llamada a `registerTimeout`
 * cancela el temporizador anterior de su propio `useTimeout`, así que
 * aperturas/cierres rápidos y sucesivos nunca disparan un doble-invoke.
 */
export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close,
}: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose,
  } = useTimeout();

  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };

  const onClose = (event?: Event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };

  return {
    onOpen,
    onClose,
  };
};
