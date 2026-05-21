import type { Ref, ComputedRef } from 'vue';
import { LOGO_FILTERS, LOGO_NAMES, LOGO_SIZES } from '../constants/logo.constants';

export type LogoName = typeof LOGO_NAMES[number];

export type LogoSize = keyof typeof LOGO_SIZES;

export type LogoFilter = keyof typeof LOGO_FILTERS;

export interface LogoState {
  isLoaded: Ref<boolean>;
  hasError: Ref<boolean>;
  hasColor: ComputedRef<boolean>;
  sizeValue: ComputedRef<string>;
  containerStyle: ComputedRef<Record<string, string>>;
  imageStyle: ComputedRef<Record<string, string>>;
  colorBoxStyle: ComputedRef<Record<string, string>>;
  imageSrc: Readonly<Ref<string>>;
  imageContainer: Ref<HTMLElement | null>;
  handleImageError: () => void;
}
