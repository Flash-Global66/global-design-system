import { computed, useSlots } from 'vue';
import type { ComputedRef } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { useId } from '@flash-global66/g-hooks';
import type { BenefitsCardProps } from '../props/benefits-card.props';

interface BenefitsCardState {
  ns: ReturnType<typeof useNamespace>;
  headingTag: ComputedRef<string>;
  titleId: ComputedRef<string>;
  hasTitle: () => boolean;
  labelledBy: () => string | undefined;
  label: () => string | undefined;
}

/**
 * Lógica del componente BenefitsCard: clases BEM, etiqueta del encabezado
 * derivada de `headingLevel` y el nombre accesible de la región.
 *
 * La tarjeta es un `section`, y un `section` sin nombre accesible no se expone
 * como región: el lector de pantalla no lo anuncia ni lo lista entre los
 * puntos de referencia de la página. Con título, la región se nombra con el
 * encabezado vía `aria-labelledby`; sin título, con la prop `ariaLabel`.
 *
 * @param props - Props resueltas del componente.
 * @returns Namespace BEM, etiqueta del encabezado y atributos de nombre accesible.
 */
export function useBenefitsCard(props: BenefitsCardProps): BenefitsCardState {
  const ns = useNamespace('benefits-card');
  const slots = useSlots();
  const titleId = useId();

  const headingTag = computed(() => `h${props.headingLevel}`);

  // Los tres de abajo son funciones y no `computed` a propósito: el objeto que
  // devuelve `useSlots()` no es reactivo, Vue lo muta en su lugar sin disparar
  // ningún efecto. Dentro de un `computed` el valor queda cacheado y el
  // encabezado no aparece ni desaparece cuando el consumidor provee el slot
  // `title` de forma condicional, y con él se cae el nombre accesible de la
  // región. Como funciones se evalúan en cada render, que es lo que hace falta.
  const hasTitle = () => Boolean(props.title || slots.title);
  const labelledBy = () => (hasTitle() ? titleId.value : undefined);
  const label = () => (hasTitle() ? undefined : props.ariaLabel || undefined);

  return { ns, headingTag, titleId, hasTitle, labelledBy, label };
}
