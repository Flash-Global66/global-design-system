import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import BenefitsCard from './src/BenefitsCard.vue';
import { benefitsCardProps } from './src/props/benefits-card.props';
import {
  BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  BENEFITS_CARD_HEADING_LEVELS,
} from './src/constants/benefits-card.constant';
import type { BenefitsCardProps } from './src/props/benefits-card.props';

export const GBenefitsCard: SFCWithInstall<typeof BenefitsCard> =
  withInstall(BenefitsCard);

export default GBenefitsCard;

export * from './src/types/benefits-card.type';

export type BenefitsCardInstance = InstanceType<typeof BenefitsCard>;

export {
  benefitsCardProps,
  BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  BENEFITS_CARD_HEADING_LEVELS,
};

export type { BenefitsCardProps };
