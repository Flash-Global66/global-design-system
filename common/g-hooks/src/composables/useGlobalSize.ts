import { computed, inject, unref } from 'vue';
import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { ComponentSize } from '@flash-global66/g-utils';

/** Contexto de inyección para el tamaño global de componentes del Design System. */
export interface SizeInjectionContext {
  size?: ComponentSize | Ref<ComponentSize>;
}

/**
 * Clave de inyección usada por un proveedor global (ej: `ConfigProvider`) para
 * propagar el tamaño por defecto de los componentes a sus descendientes.
 *
 * Copiado del algoritmo `SIZE_INJECTION_KEY` de element-plus.
 */
export const sizeInjectionKey: InjectionKey<SizeInjectionContext> =
  Symbol('gSizeInjection');

/**
 * Lee el tamaño global inyectado por el proveedor más cercano.
 *
 * DEVIATION respecto a element-plus (decisión de diseño de este cambio):
 * element-plus retorna `''` cuando no hay proveedor; esta implementación
 * retorna `'default'`, alineado con `ComponentSize` del Design System.
 *
 * Debe llamarse únicamente dentro de `setup()`.
 *
 * @returns Un `ComputedRef<ComponentSize>` con el tamaño activo.
 */
export const useGlobalSize = (): ComputedRef<ComponentSize> => {
  const injectedSize = inject(sizeInjectionKey, {});
  return computed(() => unref(injectedSize.size) || 'default');
};
