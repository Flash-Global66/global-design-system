/**
 * Portado byte-exact desde `PatchFlags` de element-plus 2.9.7
 * (`es/utils/vue/vnode.mjs`, re-exportado como enum interno de Vue).
 *
 * Marca de bits que optimiza el diffing de VNodes creados manualmente con
 * `createVNode`/`h`: le indica al renderer qué partes del nodo (clase,
 * estilo, props, eventos, etc.) pueden cambiar en actualizaciones futuras,
 * evitando comparaciones innecesarias.
 */
export enum PatchFlags {
  TEXT = 1,
  CLASS = 2,
  STYLE = 4,
  PROPS = 8,
  FULL_PROPS = 16,
  HYDRATE_EVENTS = 32,
  STABLE_FRAGMENT = 64,
  KEYED_FRAGMENT = 128,
  UNKEYED_FRAGMENT = 256,
  NEED_PATCH = 512,
  DYNAMIC_SLOTS = 1024,
  HOISTED = -1,
  BAIL = -2,
}
