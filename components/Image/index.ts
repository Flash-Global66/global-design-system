import GImage from "./src/Image.vue";
import { useImage } from "./src/hooks/useImage";
import { SIZE_MAP, IMAGE_NAMES } from './src/constants/image.constants';
import type { ImageName, ImageSize, ImageState } from './src/types/image.types';
import { imageProps, validateImageProps } from './src/utils/image.props';
import type { ImageProps } from './src/utils/image.props';

export { 
  GImage,
  useImage,
  SIZE_MAP,
  IMAGE_NAMES,
  imageProps, 
  validateImageProps
};

export type {
  ImageName,
  ImageSize,
  ImageState,
  ImageProps
};
