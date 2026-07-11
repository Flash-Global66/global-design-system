import { getCurrentScope, onScopeDispose } from 'vue';

/**
 * Equivalente local de `tryOnScopeDispose` de `@vueuse/core`.
 *
 * element-plus importa `tryOnScopeDispose` desde `@vueuse/core`, pero
 * `g-hooks` no depende de ese paquete. Vue 3.2+ ya expone `getCurrentScope`/
 * `onScopeDispose` de forma nativa, así que replicamos el algoritmo exacto de
 * `@vueuse/core` (registrar el callback solo si hay un `effectScope` activo,
 * evitando el warning de Vue) sin añadir una dependencia nueva.
 *
 * @param fn - Callback a ejecutar cuando el `effectScope` actual se detiene.
 * @returns `true` si había un `effectScope` activo y se registró el callback.
 */
const tryOnScopeDispose = (fn: () => void): boolean => {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
};

/**
 * Portado byte-exact desde `useTimeout` de element-plus 2.9.7
 * (`es/hooks/use-timeout/index.mjs`).
 *
 * Envuelve `window.setTimeout`/`window.clearTimeout` garantizando que solo
 * exista un temporizador activo a la vez: registrar uno nuevo cancela
 * automáticamente el anterior. El temporizador pendiente también se cancela
 * al destruirse el `effectScope` propietario (evita fugas de memoria).
 */
export const useTimeout = () => {
  let timeoutHandle: number;

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };

  const cancelTimeout = () => window.clearTimeout(timeoutHandle);

  tryOnScopeDispose(() => cancelTimeout());

  return {
    registerTimeout,
    cancelTimeout,
  };
};
