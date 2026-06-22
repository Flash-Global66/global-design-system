import type { App, Plugin } from 'vue'

/** Función vacía (no-op) reutilizable; equivalente al `NOOP` interno de Vue. */
const NOOP = (): void => {}

/**
 * Tipo auxiliar que combina un componente Vue (`T`) con la interfaz `Plugin` de Vue.
 *
 * Permite registrar el componente directamente mediante `app.use(Component)`.
 *
 * @template T - Tipo del componente SFC original.
 */
export type SFCWithInstall<T> = T & Plugin

/**
 * Adjunta un método `install` a un componente principal y a sus subcomponentes opcionales,
 * lo que permite registrarlos todos con `app.use()`.
 *
 * @param main - El componente principal que recibirá el método `install`.
 * @param extra - Mapa opcional de subcomponentes que también se registrarán
 *   y se adjuntarán como propiedades del componente principal.
 * @returns El componente principal enriquecido con `SFCWithInstall<T>` y las entradas de `extra`.
 *
 * @example
 * import MyButton from './MyButton.vue'
 * import MyButtonGroup from './MyButtonGroup.vue'
 *
 * export const GButton = withInstall(MyButton, { MyButtonGroup })
 * // app.use(GButton) registra MyButton y MyButtonGroup simultáneamente.
 */
export const withInstall = <T, E extends Record<string, unknown>>(
  main: T,
  extra?: E,
): SFCWithInstall<T> & E => {
  ;(main as any).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component((comp as any).name, comp as any)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }

  return main as SFCWithInstall<T> & E
}

/**
 * Adjunta un método `install` vacío (no-op) a un componente.
 *
 * Útil para subcomponentes que no deben registrarse de forma independiente
 * pero necesitan cumplir con la interfaz `Plugin` por razones de tipado.
 *
 * @param component - El componente al que se le asignará el install vacío.
 * @returns El componente con `SFCWithInstall<T>`.
 *
 * @example
 * export const GButtonGroup = withNoopInstall(MyButtonGroup)
 */
export const withNoopInstall = <T>(component: T): SFCWithInstall<T> => {
  ;(component as any).install = NOOP
  return component as SFCWithInstall<T>
}
