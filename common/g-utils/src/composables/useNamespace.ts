import { computed, getCurrentInstance, inject, ref, unref } from 'vue';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

/** Espacio de nombres del Global Design System. */
export const defaultNamespace = 'gui';

/** Prefijo fijo para clases de estado BEM (ej: `is-disabled`). */
const statePrefix = 'is-';

/**
 * Clave de inyección para propagar el espacio de nombres BEM mediante `provide/inject`.
 *
 * Permite que un componente padre (por ejemplo, un ConfigProvider) configure
 * el namespace para todos sus descendientes sin necesidad de prop-drilling.
 *
 * @example
 * // En el componente proveedor:
 * provide(namespaceContextKey, ref('gui'))
 */
export const namespaceContextKey: InjectionKey<Ref<string>> = Symbol.for(
  'namespaceContextKey',
);

/**
 * Genera clases BEM combinando namespace, bloque, sufijo de bloque, elemento y modificador.
 *
 * @param namespace - Prefijo del sistema de diseño (ej: `'gui'`).
 * @param block - Nombre del bloque BEM (ej: `'button'`).
 * @param blockSuffix - Sufijo adicional del bloque (ej: `'group'`).
 * @param element - Elemento BEM (ej: `'icon-left'`).
 * @param modifier - Modificador BEM (ej: `'variant-primary'`).
 * @returns La clase CSS resultante.
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
): string => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

/**
 * Resuelve el espacio de nombres derivado en función de la jerarquía de componentes.
 *
 * Prioridad de resolución:
 * 1. `namespaceOverrides` explícito.
 * 2. Valor inyectado mediante `namespaceContextKey` (si existe instancia activa de Vue).
 * 3. `defaultNamespace` (`'gui'`).
 *
 * @param namespaceOverrides - Ref opcional para sobreescribir el namespace directamente.
 * @returns `ComputedRef<string>` con el namespace efectivo.
 *
 * @example
 * const ns = useGetDerivedNamespace(ref('gui'))
 * console.log(ns.value) // 'gui'
 */
export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string>,
): ComputedRef<string> => {
  const derivedNamespace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace));

  const namespace = computed(() => unref(derivedNamespace) || defaultNamespace);
  return namespace;
};

/**
 * Conjunto de métodos de ayuda para generar clases BEM con el namespace activo.
 *
 * Todos los métodos retornan una cadena vacía cuando el argumento requerido no se provee,
 * lo que permite usarlos de forma segura en expresiones de clase condicionales de Vue.
 */
export interface NamespaceHelpers {
  /** `ComputedRef` con el namespace activo (ej: `'gui'`). */
  namespace: ComputedRef<string>;
  /** Retorna la clase del bloque: `{ns}-{block}`. */
  b(blockSuffix?: string): string;
  /** Retorna la clase del elemento: `{ns}-{block}__{element}`. */
  e(element?: string): string;
  /** Retorna la clase del modificador: `{ns}-{block}--{modifier}`. */
  m(modifier?: string): string;
  /** Retorna bloque + elemento: `{ns}-{block}-{blockSuffix}__{element}`. */
  be(blockSuffix: string, element: string): string;
  /** Retorna elemento + modificador: `{ns}-{block}__{element}--{modifier}`. */
  em(element: string, modifier: string): string;
  /** Retorna bloque + modificador: `{ns}-{block}-{blockSuffix}--{modifier}`. */
  bm(blockSuffix: string, modifier: string): string;
  /** Retorna bloque + elemento + modificador completo. */
  bem(blockSuffix: string, element: string, modifier: string): string;
  /** Retorna clase de estado: `is-{name}` si `state` es verdadero, cadena vacía si no. */
  is(name: string, state?: boolean | unknown): string;
  /** Genera variables CSS con prefijo de namespace: `--{ns}-{key}`. */
  cssVar(object: Record<string, string>): Record<string, string>;
  /** Genera el nombre de una variable CSS con prefijo de namespace. */
  cssVarName(name: string): string;
  /** Genera variables CSS con prefijo de bloque: `--{ns}-{block}-{key}`. */
  cssVarBlock(object: Record<string, string>): Record<string, string>;
  /** Genera el nombre de una variable CSS con prefijo de bloque. */
  cssVarBlockName(name: string): string;
}

/**
 * Composable principal para la generación de clases BEM en componentes del Design System.
 *
 * Proporciona una API idéntica a `useNamespace` de element-plus, con soporte para
 * namespace configurable mediante `provide/inject` o por parámetro directo.
 *
 * @param block - Nombre del bloque BEM del componente (ej: `'button'`).
 * @param namespaceOverrides - Ref opcional para sobreescribir el namespace (ej: `ref('gui')`).
 * @returns Objeto con todos los métodos de generación BEM y el namespace activo.
 *
 * @example
 * // En un componente Vue:
 * const ns = useNamespace('button')
 * ns.b()                        // 'gui-button'
 * ns.e('icon-left')             // 'gui-button__icon-left'
 * ns.m('variant-primary')       // 'gui-button--variant-primary'
 * ns.is('disabled', true)       // 'is-disabled'
 * ns.is('disabled', false)      // ''
 */
export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string>,
): NamespaceHelpers => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);

  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix, '', '');

  const e = (element?: string) =>
    element ? _bem(namespace.value, block, '', element, '') : '';

  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, '', '', modifier) : '';

  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : '';

  const em = (element: string, modifier: string) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : '';

  const bm = (blockSuffix: string, modifier: string) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : '';

  const bem = (blockSuffix: string, element: string, modifier: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : '';

  const is = (name: string, ...args: [boolean?] | [unknown]): string => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : '';
  };

  const cssVar = (object: Record<string, string>): Record<string, string> => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };

  const cssVarBlock = (
    object: Record<string, string>,
  ): Record<string, string> => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };

  const cssVarName = (name: string) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name: string) =>
    `--${namespace.value}-${block}-${name}`;

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  };
};
