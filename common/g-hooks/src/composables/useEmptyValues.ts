import { computed, getCurrentInstance, inject, ref } from 'vue';
import { buildProps, debugWarn, isFunction } from '@flash-global66/g-utils';

import type { ExtractPropTypes, InjectionKey, Ref } from 'vue';

/**
 * Portado byte-exact desde `useEmptyValues`/`useEmptyValuesProps` de
 * element-plus 2.9.7 (`es/hooks/use-empty-values/index.mjs`).
 *
 * Resolución de `select` (design §2.3, pregunta abierta corregida): el
 * contexto de valores vacíos lo provee el CONFIG-PROVIDER, no el contexto de
 * formulario — por eso este hook vive en `g-hooks` (sin acoplamiento a
 * `g-form`), igual que `useGlobalConfig`.
 *
 * Usa su propia clave de inyección DS-nativa `gEmptyValuesContextKey`
 * (símbolo distinto al de `useGlobalConfig`, per design §2.3's nota de
 * simetría — no acopla `select` a `dialog`). Igual que el shim de
 * `useGlobalConfig`, la isla `config-provider` (permanente, fuera de
 * alcance) sigue proveyendo la clave de element-plus, nunca esta, así que el
 * `inject` de este hook siempre cae al valor por defecto — comportamiento
 * idéntico al actual salvo que un consumidor use el (no documentado) paso de
 * `empty-values`/`value-on-clear` directamente al config-provider, en cuyo
 * caso caería al default en lugar de heredar ese valor.
 */
export const gEmptyValuesContextKey: InjectionKey<Ref<EmptyValuesContext>> =
  Symbol('gEmptyValuesContextKey');

export const SCOPE = 'use-empty-values';
export const DEFAULT_EMPTY_VALUES = ['', undefined, null];
export const DEFAULT_VALUE_ON_CLEAR = undefined;

export const useEmptyValuesProps = buildProps({
  /**
   * @description valores vacíos soportados por el componente
   */
  emptyValues: Array,
  /**
   * @description valor retornado al limpiar; para usar `undefined`, pasar `() => undefined`
   */
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: undefined,
    validator: (val: unknown) =>
      isFunction(val) ? !(val as () => unknown)() : !val,
  },
} as const);

export type EmptyValuesContext = ExtractPropTypes<typeof useEmptyValuesProps>;

export const useEmptyValues = (
  props: EmptyValuesContext,
  defaultValue?: null | undefined,
) => {
  const config = getCurrentInstance()
    ? inject(gEmptyValuesContextKey, ref<EmptyValuesContext>({}))
    : ref<EmptyValuesContext>({});

  const emptyValues = computed(
    () => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES,
  );

  const valueOnClear = computed(() => {
    if (isFunction(props.valueOnClear)) {
      return props.valueOnClear();
    } else if (props.valueOnClear !== undefined) {
      return props.valueOnClear;
    } else if (isFunction(config.value.valueOnClear)) {
      return config.value.valueOnClear();
    } else if (config.value.valueOnClear !== undefined) {
      return config.value.valueOnClear;
    }
    return defaultValue !== undefined ? defaultValue : DEFAULT_VALUE_ON_CLEAR;
  });

  const isEmptyValue = (value: unknown) => {
    return emptyValues.value.includes(value);
  };

  if (!emptyValues.value.includes(valueOnClear.value)) {
    debugWarn(SCOPE, 'value-on-clear should be a value of empty-values');
  }

  return {
    emptyValues,
    valueOnClear,
    isEmptyValue,
  };
};
