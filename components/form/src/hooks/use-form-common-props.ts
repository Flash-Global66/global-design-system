import { computed, inject, unref } from 'vue';
import { useGlobalSize, useProp } from '@flash-global66/g-hooks';
import { formContextKey } from '../constants';

import type { ComponentSize } from '@flash-global66/g-utils';
import type { MaybeRef } from '@vueuse/core';

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled');
  const form = inject(formContextKey, undefined);
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false,
  );
};

/**
 * Resuelve el tamaño efectivo de un control de formulario.
 *
 * Basado en el algoritmo `useFormSize` de element-plus, PRESERVANDO su
 * comportamiento tal cual existe hoy en el Design System: `g-form` no
 * expone una prop `size` en `formProps`/`formItemProps`, por lo que NO
 * existe un nivel de contexto de formulario que leer (a diferencia de
 * element-plus, que sí lo tiene). Esta es una migración pura, no una
 * funcionalidad nueva — ver design.md §2.1.
 *
 * Precedencia (de mayor a menor): prop explícita `size` > `fallback` >
 * `useGlobalSize()` > `'default'`.
 *
 * @param fallback - Valor a usar si no hay prop `size` explícita.
 * @param ignore - Permite neutralizar el nivel `prop` y/o `global`.
 */
export const useFormSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop' | 'global', boolean>> = {},
) => {
  const size = ignore.prop
    ? computed<ComponentSize | undefined>(() => undefined)
    : useProp<ComponentSize>('size');
  const globalConfig = ignore.global
    ? computed<ComponentSize | undefined>(() => undefined)
    : useGlobalSize();
  return computed<ComponentSize>(
    () => size.value || unref(fallback) || globalConfig.value || 'default',
  );
};
