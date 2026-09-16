import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '@flash-global66/g-utils';
import type {
  BenefitsCardHeadingLevel,
  BenefitsCardItem,
} from '../types/benefits-card.type';
import {
  BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  BENEFITS_CARD_HEADING_LEVELS,
} from '../constants/benefits-card.constant';

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
   * corto. La tarjeta crece en alto con la cantidad.
   */
  benefits: {
    type: definePropType<BenefitsCardItem[]>(Array),
    default: () => [],
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
