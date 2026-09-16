import { computed, getCurrentInstance } from 'vue';
import type { ComputedRef } from 'vue';
import { debugWarn } from '@flash-global66/g-utils';

const SCOPE = 'useAttrs';

/** Claves excluidas por defecto, sin importar `excludeKeys`. */
export const DEFAULT_EXCLUDE_KEYS = ['class', 'style'];

/** Coincide con handlers de evento tipo `onClick`, `onCustomEvent`, etc. */
export const LISTENER_PREFIX = /^on[A-Z]/;

/** Opciones de entrada de la versión "EP-flavored" de `useAttrs`. */
export interface UseAttrsOptions {
  /** Si es `true`, también excluye cualquier atributo que matchee `LISTENER_PREFIX`. */
  excludeListeners?: boolean;
  /** Claves adicionales a excluir, además de `DEFAULT_EXCLUDE_KEYS`. */
  excludeKeys?: ComputedRef<string[]>;
}

/**
 * Versión "EP-flavored" de `useAttrs`, DISTINTA del `useAttrs` nativo de
 * Vue (`input.vue` importa ambos: el nativo como `useRawAttrs` y este como
 * `useAttrs`).
 *
 * Copiado byte a byte del algoritmo `useAttrs` de element-plus: excluye
 * `class`/`style` siempre, excluye `excludeKeys` adicionales, y — si
 * `excludeListeners` es `true` — excluye además cualquier atributo que
 * matchee `LISTENER_PREFIX` (`on[A-Z]*`).
 *
 * Debe llamarse dentro de `setup()`; si no hay una instancia de componente
 * activa, emite un `debugWarn` (solo en desarrollo) y retorna un
 * `ComputedRef` vacío en lugar de lanzar.
 *
 * @param params - `excludeListeners` y `excludeKeys` opcionales.
 * @returns Un `ComputedRef` reactivo con los `$attrs` filtrados.
 */
export const useAttrs = (
  params: UseAttrsOptions = {},
): ComputedRef<Record<string, unknown>> => {
  const { excludeListeners = false, excludeKeys } = params;

  const allExcludeKeys = computed(() =>
    (excludeKeys?.value ?? []).concat(DEFAULT_EXCLUDE_KEYS),
  );

  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn(
      SCOPE,
      'getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function.',
    );
    return computed(() => ({}));
  }

  return computed(() =>
    Object.fromEntries(
      Object.entries(
        (instance.proxy?.$attrs as Record<string, unknown> | undefined) ?? {},
      ).filter(
        ([key]) =>
          !allExcludeKeys.value.includes(key) &&
          !(excludeListeners && LISTENER_PREFIX.test(key)),
      ),
    ),
  );
};
