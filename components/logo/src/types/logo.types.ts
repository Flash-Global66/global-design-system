import type { Ref, ComputedRef } from 'vue';
import { LOGO_NAMES, LOGO_SIZES } from '../constants/logo.constants';

export type LogoName = typeof LOGO_NAMES[number];

export type LogoSize = keyof typeof LOGO_SIZES;

export interface LogoState {
  isLoaded: Ref<boolean>;
  hasError: Ref<boolean>;
  sizeValue: ComputedRef<string>;
  containerStyle: ComputedRef<Record<string, string>>;
  imageStyle: ComputedRef<Record<string, string>>;
  imageSrc: Readonly<Ref<string>>;
  imageContainer: Ref<HTMLElement | null>;
  handleImageError: () => void;
}
