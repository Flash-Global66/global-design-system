import type { ComponentPublicInstance, Ref } from 'vue';
import { isFunction } from './function.util';

/**
 * Portado byte-exact desde `composeRefs` de element-plus 2.9.7
 * (`es/utils/vue/refs.mjs`).
 *
 * Combina múltiples refs (objetos `Ref` o funciones setter) en un único
 * callback ref: al invocarlo, propaga el mismo elemento a cada uno de los
 * refs recibidos. Útil cuando un componente necesita exponer el mismo
 * elemento DOM a más de una fuente de referencias (por ejemplo, el ref
 * interno de un composable y el ref de un contexto inyectado).
 *
 * Distinto de `composeEventHandlers` (que combina manejadores de eventos,
 * no referencias de elementos).
 */
export type RefSetter = (
  el: Element | ComponentPublicInstance | null | undefined,
) => void;

export const composeRefs = (
  ...refs: (Ref<HTMLElement | undefined | null> | RefSetter)[]
) => {
  return (el: Element | ComponentPublicInstance | null | undefined) => {
    refs.forEach(ref => {
      if (isFunction(ref)) {
        ref(el);
      } else {
        ref.value = el as HTMLElement | undefined | null;
      }
    });
  };
};
