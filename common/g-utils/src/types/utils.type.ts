/**
 * Tipos compartidos del paquete `@flash-global66/g-utils`.
 *
 * Este módulo centraliza los tipos públicos que son consumidos por los
 * componentes del Design System. Importarlos desde aquí garantiza una
 * única fuente de verdad y facilita el tree-shaking.
 */

export type { SFCWithInstall } from '../utils/install.util';
export type { NamespaceHelpers } from '../composables/useNamespace';

/**
 * Representa un valor que puede ser `T` o un array de `T`.
 *
 * Copiado del tipo `Arrayable<T>` de element-plus, usado extensivamente en
 * las props de validación y de forms.
 */
export type Arrayable<T> = T | T[];
