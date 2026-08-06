import {
  computed,
  inject,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  readonly,
} from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { ImageProps } from '../image.props';
import {
  ILLUSTRATION_EXTENSION,
  IMAGE_BASE_URL_DEFAULT,
  IMAGE_NAMES,
  IMAGE_SIZES,
  imageBaseUrlKey,
} from '../constants/image.constants';
import type { ImageName, ImageState } from '../types/image.types';

/**
 * Hook to handle the functionality of the Image component
 * @param props - The props of the Image component
 * @returns State and methods for the Image component
 */
export const useImage = (props: ImageProps): ImageState => {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  const imageSrc = ref<string>('');
  const baseUrl = inject(imageBaseUrlKey, IMAGE_BASE_URL_DEFAULT);
  let stopObserver: (() => void) | null = null;

  const sizeValue = computed<string>(
    () => IMAGE_SIZES[props.size as keyof typeof IMAGE_SIZES],
  );

  const handleImageLoad = (): void => {
    isLoaded.value = true;
  };

  const handleImageError = (): void => {
    hasError.value = true;
  };

  const loadImage = (): void => {
    if (!IMAGE_NAMES.includes(props.name as ImageName)) {
      hasError.value = true;
      return;
    }

    imageSrc.value = `${baseUrl}/${props.name}.${ILLUSTRATION_EXTENSION}`;
  };

  const setupObserver = (): void => {
    if (!props.lazyLoad) {
      loadImage();
      return;
    }

    if (stopObserver) {
      stopObserver();
      stopObserver = null;
    }

    if (imageContainer.value) {
      const { stop } = useIntersectionObserver(
        imageContainer,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            loadImage();
            stop();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        },
      );

      stopObserver = stop;
    }
  };

  onMounted(() => {
    setupObserver();
  });

  onBeforeUnmount(() => {
    if (stopObserver) {
      stopObserver();
    }
  });

  watch(
    () => props.name,
    () => {
      isLoaded.value = false;
      imageSrc.value = '';
      hasError.value = false;
      setupObserver();
    },
  );

  return {
    sizeValue,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageLoad,
    handleImageError,
  };
};
