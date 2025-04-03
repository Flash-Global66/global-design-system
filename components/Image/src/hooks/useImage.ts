import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ImageProps } from '../image.props';
import { SIZE_MAP } from '../constants/image.constants';
import { ImageState } from '../types/image.types';

/**
 * Hook to handle the functionality of the Image component
 * @param props - The props of the Image component
 * @returns State and methods for the Image component
 */
export const useImage = (props: ImageProps): ImageState => {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  let stopObserver: Function | null = null;
  
  const sizeValue = computed<string>(() => SIZE_MAP[props.size as keyof typeof SIZE_MAP]);
  
  const imageSrc = computed<string>(() => {
    try {
      return new URL(`../assets/illustrations/${props.name}.webp`, import.meta.url).href;
    } catch (error) {
      hasError.value = true;
      return '';
    }
  });

  const handleImageError = (): void => {
    hasError.value = true;
  };

  const loadImage = (): void => {
    isLoaded.value = true;
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
        }
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
  
  watch(() => props.name, () => {
    isLoaded.value = false;
    setupObserver();
  });

  return {
    sizeValue,
    isLoaded,
    hasError,
    imageSrc,
    imageContainer,
    handleImageError
  };
};