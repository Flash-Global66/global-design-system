import { computed, getCurrentInstance, inject, unref } from 'vue';
import type { ComputedRef, InjectionKey, Ref } from 'vue';
import {
  debugWarn,
  isClient,
  useGetDerivedNamespace,
} from '@flash-global66/g-utils';

/** Valor auxiliar que puede ser `T` directo o un `Ref<T>`. */
type MaybeRef<T> = T | Ref<T>;

/** Contexto de inyección usado para generar IDs deterministas entre SSR y cliente. */
export interface IdInjectionContext {
  /** Prefijo numérico compartido por todas las instancias de la app. */
  prefix: number;
  /** Contador incremental, compartido y mutado en cada llamada a `useId()`. */
  current: number;
}

/**
 * Clave de inyección para el contexto de generación de IDs.
 *
 * Copiado del algoritmo `ID_INJECTION_KEY` de element-plus. Un servidor SSR
 * debe proveer este contexto (vía `app.provide(idInjectionKey, {...})`) con
 * un `prefix`/`current` deterministas para que el cliente pueda hidratar
 * generando exactamente los mismos IDs.
 */
export const idInjectionKey: InjectionKey<IdInjectionContext> =
  Symbol('gIdInjection');

const defaultIdInjection: IdInjectionContext = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0,
};

/**
 * Resuelve el contexto de inyección de IDs activo, o el valor por defecto
 * (con prefijo aleatorio) si no hay ninguno provisto.
 */
export const useIdInjection = (): IdInjectionContext =>
  getCurrentInstance()
    ? inject(idInjectionKey, defaultIdInjection)
    : defaultIdInjection;

/**
 * Genera un ID único por instancia, estable entre SSR e hidratación de
 * cliente.
 *
 * Copiado byte a byte del algoritmo `useId` de element-plus (contador +
 * `idInjectionKey` vía `provide`/`inject`) para evitar cualquier deriva de
 * comportamiento. NUNCA usa valores aleatorios por llamada — eso rompería la
 * hidratación SSR.
 *
 * Debe llamarse únicamente dentro de `setup()`.
 *
 * @param deterministicId - ID explícito (o `Ref` a uno) que, si se provee,
 *   evita la generación automática.
 * @returns Un `ComputedRef<string>` con el ID resuelto.
 */
export const useId = (
  deterministicId?: MaybeRef<string>,
): ComputedRef<string> => {
  const idInjection = useIdInjection();

  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide an id provider to ensure the hydration process succeeds
usage: app.provide(idInjectionKey, {
  prefix: number,
  current: number,
})`,
    );
  }

  const namespace = useGetDerivedNamespace();

  return computed(
    () =>
      unref(deterministicId) ||
      `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`,
  );
};
