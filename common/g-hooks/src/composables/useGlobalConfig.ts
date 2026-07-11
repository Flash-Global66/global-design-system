import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue';
import type { InjectionKey, MaybeRef, Ref } from 'vue';

/**
 * Shim DS-nativo de configuración global, inspirado en `useGlobalConfig` de
 * element-plus (`es/components/config-provider/src/hooks/use-global-config.mjs`).
 *
 * Contrato de resolución (de mayor a menor prioridad):
 * 1. El ancestro DS más cercano que haya llamado a `provideGlobalConfig`
 *    (clave de inyección propia `gConfigProviderContextKey`).
 * 2. El ref de módulo `globalConfig` (vacío salvo que algo llame a
 *    `provideGlobalConfig` fuera de un componente — no ocurre en v4).
 * 3. El `defaultValue` provisto en el sitio de la llamada.
 *
 * Deliberadamente NO lee la clave de inyección de element-plus
 * (`configProviderContextKey`): hacerlo reintroduciría el acoplamiento que
 * esta migración elimina. La isla `config-provider` (permanente, fuera de
 * alcance) sigue proveyendo la clave de EP, nunca la de este módulo, por lo
 * que el `inject` de este shim siempre cae al valor por defecto — resultado
 * idéntico al actual, porque la isla fuerza `namespace="gui"` de todas
 * formas.
 */
export interface GlobalConfigContext {
  namespace?: string;
  // reservado para futuras claves (locale, zIndex, size); dialog solo usa
  // `namespace` hoy.
}

export const gConfigProviderContextKey: InjectionKey<Ref<GlobalConfigContext>> =
  Symbol('gConfigProviderContextKey');

// Ref de módulo, fiel al fallback de element-plus (`const globalConfig = ref()`).
const globalConfig = ref<GlobalConfigContext>({});

export function useGlobalConfig<K extends keyof GlobalConfigContext>(
  key: K,
  defaultValue: GlobalConfigContext[K],
): Ref<GlobalConfigContext[K]>;
export function useGlobalConfig(): Ref<GlobalConfigContext>;
export function useGlobalConfig(
  key?: keyof GlobalConfigContext,
  defaultValue?: unknown,
) {
  // Guardia fiel a element-plus: sin instancia activa (p. ej. SSR fuera de
  // setup), se usa directamente el ref de módulo en lugar de `inject`.
  const config = getCurrentInstance()
    ? inject(gConfigProviderContextKey, globalConfig)
    : globalConfig;

  if (key) return computed(() => config.value?.[key] ?? defaultValue);
  return config;
}

/**
 * Contraparte de `useGlobalConfig` para que un ancestro provea contexto.
 * No es utilizada por ningún consumidor de v4 (dialog resuelve siempre al
 * default `"gui"`); se incluye por completitud para futuros proveedores DS.
 */
export function provideGlobalConfig(config: MaybeRef<GlobalConfigContext>) {
  provide(
    gConfigProviderContextKey,
    computed(() => unref(config)),
  );
}
