import { provide } from 'vue';
import type { InjectionKey, ObjectDirective, Ref } from 'vue';

/**
 * Ported byte-exact from element-plus 2.9.7's `useForwardRef` module
 * (`es/hooks/use-forward-ref/index.mjs`).
 *
 * This module is the SOLE owner of the forward-ref family: `useForwardRef`,
 * `useForwardRefDirective`, and `FORWARD_REF_INJECTION_KEY` must never be
 * split across two modules or packages. Every consumer (`slot`, later
 * `popper`) provides/injects through this exact same exported `Symbol()`
 * instance — splitting the definitions would break the provide/inject
 * handshake by creating two distinct symbols.
 */

type ForwardRefSetter = <T>(el: T) => void;

export type ForwardRefInjectionContext = {
  setForwardRef: ForwardRefSetter;
};

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> =
  Symbol('elForwardRef');

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
