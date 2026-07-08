import { computed, getCurrentInstance } from 'vue';
import type { ComputedRef } from 'vue';
import { throwError } from '@flash-global66/g-utils';

const SCOPE = 'useProp';

/**
 * Retorna un `ComputedRef` reactivo sobre el valor actual de una prop de la
 * instancia de componente activa.
 *
 * Copiado del algoritmo `useProp` de element-plus, con un guard adicional
 * (decisión de diseño de este cambio): element-plus retorna `undefined`
 * silenciosamente cuando se llama fuera de `setup()`; esta implementación
 * lanza un error explícito para detectar el uso incorrecto más pronto.
 *
 * Debe llamarse únicamente dentro de `setup()`.
 *
 * @param name - Nombre de la prop a leer.
 * @returns Un `ComputedRef<T>` con el valor reactivo de la prop.
 */
export const useProp = <T>(name: string): ComputedRef<T> => {
  const vm = getCurrentInstance();
  if (!vm) {
    throwError(
      SCOPE,
      'useProp() was called without an active component instance. Make sure to call this function inside setup().',
    );
  }
  return computed(
    () =>
      (vm.proxy?.$props as Record<string, unknown> | undefined)?.[name] as T,
  );
};
