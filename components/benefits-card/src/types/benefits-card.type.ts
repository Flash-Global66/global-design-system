import type { IconString } from '@flash-global66/g-icon-font';
import type { BENEFITS_CARD_HEADING_LEVELS } from '../constants/benefits-card.constant';

export interface BenefitsCardItem {
  icon: IconString;
  text: string;
}

export type BenefitsCardHeadingLevel =
  (typeof BENEFITS_CARD_HEADING_LEVELS)[number];
