import { provide } from 'vue';
import type { InjectionKey, ObjectDirective, Ref } from 'vue';

/**
 * Portado byte-exact desde el módulo `useForwardRef` de element-plus 2.9.7
 * (`es/hooks/use-forward-ref/index.mjs`).
 *
 * Este módulo es el ÚNICO dueño de la familia forward-ref: `useForwardRef`,
 * `useForwardRefDirective` y `FORWARD_REF_INJECTION_KEY` nunca deben
 * separarse en dos módulos o paquetes. Todos los consumidores (`slot` y,
 * más adelante, `popper`) proveen/inyectan a través de esta misma instancia
 * de `Symbol()` exportada: separar las definiciones rompería el handshake
 * de provide/inject al crear dos símbolos distintos.
 */

type ForwardRefSetter = <T>(el: T) => void;

export type ForwardRefInjectionContext = {
  setForwardRef: ForwardRefSetter;
};

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> =
  Symbol.for('elForwardRef');

export const useForwardRef = <T>(forwardRef: Ref<T | null>): void => {
  const setForwardRef = ((el: T) => {
    forwardRef.value = el;
  }) as ForwardRefSetter;

  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef,
  });
};

export const useForwardRefDirective = (
  setForwardRef: ForwardRefSetter,
): ObjectDirective => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    },
  };
};
