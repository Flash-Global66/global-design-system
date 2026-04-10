import { computed, ref, readonly, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { FlagProps } from '../flag.props';
import { FLAG_SIZES } from '../constants/flag.constants';
import { FlagState } from '../types/flag.types';

const FLAG_ASSET_URLS = import.meta.glob('../assets/flags/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

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

  const containerStyle = computed<Record<string, string>>(() => ({
    width: sizeValue.value,
    height: sizeValue.value,
    minWidth: sizeValue.value,
    minHeight: sizeValue.value,
  }));

  const imageSrc = ref<string>('');

  function resolveImageSrc(name: string): void {
    const assetPath = `../assets/flags/${String(name).toLowerCase().trim()}.svg`;
    const resolvedSrc = FLAG_ASSET_URLS[assetPath];
    if (!name || !resolvedSrc) {
      console.warn(`[GFlag] No asset found for code "${name}". Path tried: ${assetPath}`);
      imageSrc.value = '';
      hasError.value = true;
      return;
    }
    imageSrc.value = resolvedSrc;
  }

  resolveImageSrc(props.name ?? '');

  const handleImageError = (): void => {
    console.warn(`[GFlag] Failed to load SVG for code "${props.name}" from: ${imageSrc.value}`);
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
  
  watch(() => props.name, (name) => {
    isLoaded.value = false;
    hasError.value = false;
    resolveImageSrc(name ?? '');
  });

  return {
    sizeValue,
    containerStyle,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageError
  };
};