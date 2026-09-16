import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '@flash-global66/g-utils';
import type {
  BenefitsCardHeadingLevel,
  BenefitsCardItem,
} from '../types/benefits-card.type';
import {
  BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  BENEFITS_CARD_HEADING_LEVELS,
  BENEFITS_CARD_MAX_BENEFITS,
  BENEFITS_CARD_MIN_BENEFITS,
} from '../constants/benefits-card.constant';

/**
 * El diseño está pensado para entre 3 y 5 beneficios. Una lista vacía se
 * acepta porque es el estado habitual mientras el contenido termina de cargar.
 */
export function isBenefitsCountValid(benefits: BenefitsCardItem[]): boolean {
  const count = benefits.length;

  return (
    count === 0 ||
    (count >= BENEFITS_CARD_MIN_BENEFITS && count <= BENEFITS_CARD_MAX_BENEFITS)
  );
}

export const benefitsCardProps = buildProps({
  /**
   * Título principal. El slot `title` lo reemplaza cuando el título necesita
   * marcado, como una línea con dos pesos.
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * Bajada que acompaña al título.
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * Beneficios que se muestran como píldoras, cada uno con ícono y texto
   * corto. En desarrollo Vue avisa si hay menos de 3 o más de 5.
   */
  benefits: {
    type: definePropType<BenefitsCardItem[]>(Array),
    default: () => [],
    validator: isBenefitsCountValid,
  },
  /**
   * Nivel del encabezado del título, para respetar el outline de la página.
   */
  headingLevel: {
    type: definePropType<BenefitsCardHeadingLevel>(Number),
    values: BENEFITS_CARD_HEADING_LEVELS,
    default: BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  },
} as const);

export type BenefitsCardProps = ExtractPropTypes<typeof benefitsCardProps>;
