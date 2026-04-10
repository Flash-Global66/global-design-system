import { Ref, ComputedRef } from 'vue';
import { COUNTRIES_CODE, SPECIAL_CODES, FLAG_SIZES } from '../constants/flag.constants';

export type CountryCode = typeof COUNTRIES_CODE[number];

export type SpecialCode = typeof SPECIAL_CODES[number];

export type FlagCode = CountryCode | SpecialCode;

export type FlagSize = keyof typeof FLAG_SIZES;

export type FlagLazyLoad = boolean;

export interface FlagState {
  isLoaded: Ref<boolean>;
  hasError: Ref<boolean>;
  sizeValue: ComputedRef<string>;
  imageSrc: ComputedRef<string>;
  imageContainer: Ref<HTMLElement | null>;
  handleImageError: () => void;
}
