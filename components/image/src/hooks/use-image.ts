import { computed, ref, onMounted, onBeforeUnmount, watch, readonly } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ImageProps } from '../image.props';
import { IMAGE_SIZES } from '../constants/image.constants';
import { ImageState } from '../types/image.types';

const illustrations = import.meta.glob<string>('../assets/illustrations/*.webp', {
  query: '?url',
  import: 'default',
});

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
  let stopObserver: Function | null = null;

  const sizeValue = computed<string>(() => IMAGE_SIZES[props.size as keyof typeof IMAGE_SIZES]);

  const resolveSrc = async (): Promise<void> => {
    const loader = illustrations[`../assets/illustrations/${props.name}.webp`];
    if (!loader) {
      hasError.value = true;
      return;
    }
    try {
      imageSrc.value = await loader();
    } catch {
      hasError.value = true;
    }
  };

  const handleImageError = (): void => {
    hasError.value = true;
  };

  const loadImage = async (): Promise<void> => {
    await resolveSrc();
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
    imageSrc.value = '';
    setupObserver();
  });

  return {
    sizeValue,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageError
  };
};
