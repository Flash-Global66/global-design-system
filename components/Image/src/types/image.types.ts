import { Ref, ComputedRef } from 'vue';
import { IMAGE_NAMES, SIZE_MAP } from '../constants/image.constants';

export type ImageName = typeof IMAGE_NAMES[number];

export type ImageSize = keyof typeof SIZE_MAP;

export type ImageLazyLoad = boolean;

export interface ImageState {
  isLoaded: Ref<boolean>;
  sizeValue: ComputedRef<string>;
  imageSrc: ComputedRef<string>;
  imageContainer: Ref<HTMLElement | null>;
}