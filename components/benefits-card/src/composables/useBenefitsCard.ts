import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type { BenefitsCardProps } from '../props/benefits-card.props';

interface BenefitsCardState {
  ns: ReturnType<typeof useNamespace>;
  headingTag: ComputedRef<string>;
}

/**
 * Lógica del componente BenefitsCard: clases BEM y etiqueta del encabezado
 * derivada de `headingLevel`.
 *
 * @param props - Props resueltas del componente.
 * @returns El namespace BEM y la etiqueta (`h1`..`h6`) que consume el template.
 */
export function useBenefitsCard(props: BenefitsCardProps): BenefitsCardState {
  const ns = useNamespace('benefits-card');
  const headingTag = computed(() => `h${props.headingLevel}`);

  return { ns, headingTag };
}
