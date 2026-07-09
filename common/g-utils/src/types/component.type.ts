/**
 * Tamaños de componente soportados por el Design System.
 *
 * Copiado del tipo `ComponentSize` de element-plus para mantener
 * compatibilidad con los consumidores migrados.
 */
export type ComponentSize = 'large' | 'default' | 'small';

/**
 * Valores runtime válidos para el tamaño de un componente.
 *
 * Incluye `''` (cadena vacía) para mantener paridad con el validador de
 * element-plus, aunque el tipo `ComponentSize` la omite intencionalmente.
 * Es la fuente de verdad para `isValidComponentSize` y para la prop de
 * tamaño construida en `@flash-global66/g-hooks` (`useSizeProp`).
 */
export const componentSizes = ['', 'default', 'small', 'large'] as const;
