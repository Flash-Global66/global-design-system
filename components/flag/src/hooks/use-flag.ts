import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { FlagProps } from '../flag.props';
import { FLAG_SIZES } from '../constants/flag.constants';
import { FlagState } from '../types/flag.types';

/**
 * Hook to handle the functionality of the Flag component
 * @param props - The props of the Flag component
 * @returns State and methods for the Flag component
 */
export const useFlag = (props: FlagProps): FlagState => {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  let stopObserver: (() => void) | null = null;
  
  const sizeValue = computed<string>(() => FLAG_SIZES[props.size as keyof typeof FLAG_SIZES]);

  const imageSrc = ref<string>('');

  function resolveImageSrc(name: string): void {
    try {
      imageSrc.value = new URL(`../assets/flags/${String(name).toLowerCase()}.svg`, import.meta.url).href;
    } catch {
      imageSrc.value = '';
      hasError.value = true;
    }
  }

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
    resolveImageSrc(props.name ?? '');
    setupObserver();
  });

  onBeforeUnmount(() => {
    if (stopObserver) {
      stopObserver();
    }
  });
  
  watch(() => props.name, (name) => {
    isLoaded.value = false;
    hasError.value = false;
    resolveImageSrc(name ?? '');
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