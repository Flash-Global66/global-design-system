import GImage from './src/Image.vue';
import { useImage } from './src/hooks/use-image';
import {
  IMAGE_SIZES,
  IMAGE_NAMES,
  IMAGE_BASE_URL_DEFAULT,
  imageBaseUrlKey,
} from './src/constants/image.constants';
import type { ImageName, ImageSize, ImageState } from './src/types/image.types';
import { imageProps, validateImageProps } from './src/image.props';
import type { ImageProps } from './src/image.props';

export {
  GImage,
  useImage,
  IMAGE_SIZES,
  IMAGE_NAMES,
  IMAGE_BASE_URL_DEFAULT,
  imageBaseUrlKey,
  imageProps,
  validateImageProps,
};

export type { ImageName, ImageSize, ImageState, ImageProps };
