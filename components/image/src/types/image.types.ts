import { Ref, ComputedRef } from 'vue';
import { IMAGE_NAMES, IMAGE_SIZES } from '../constants/image.constants';

export type ImageName = typeof IMAGE_NAMES[number];

export type ImageSize = keyof typeof IMAGE_SIZES;

export type ImageLazyLoad = boolean;

export interface ImageState {
  isLoaded: Ref<boolean>;
  hasError: Ref<boolean>;
  sizeValue: ComputedRef<string>;
  imageSrc: ComputedRef<string>;
  imageContainer: Ref<HTMLElement | null>;
  handleImageError: () => void;
}