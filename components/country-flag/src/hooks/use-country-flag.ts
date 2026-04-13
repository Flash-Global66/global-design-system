import { computed, ref, readonly, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { FlagProps } from '../country-flag.props';
import { FLAG_SIZES } from '../constants/country-flag.constants';
import type { FlagState } from '../types/country-flag.types';

const FLAG_ASSET_LOADERS = import.meta.glob('../assets/flags/*.svg', {
  import: 'default',
}) as Record<string, () => Promise<string>>;

export function useCountryFlag(props: FlagProps): FlagState {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  let stopObserver: (() => void) | null = null;
  
  const sizeValue = computed<string>(() => FLAG_SIZES[props.size as keyof typeof FLAG_SIZES] ?? FLAG_SIZES.md);

  const containerStyle = computed<Record<string, string>>(() => ({
    width: sizeValue.value,
    height: sizeValue.value,
    minWidth: sizeValue.value,
    minHeight: sizeValue.value,
  }));

  const imageSrc = ref<string>('');

  async function resolveImageSrc(name: string): Promise<void> {
    const assetPath = `../assets/flags/${String(name).toLowerCase().trim()}.svg`;
    const loader = FLAG_ASSET_LOADERS[assetPath];
    if (!name || !loader) {
      imageSrc.value = '';
      hasError.value = true;
      return;
    }
    try {
      imageSrc.value = await loader();
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
    } else {
      loadImage();
    }
  };

  onMounted(async () => {
    await resolveImageSrc(props.name ?? '');
    setupObserver();
  });

  onBeforeUnmount(() => {
    if (stopObserver) {
      stopObserver();
    }
  });
  
  watch(() => props.name, async (name) => {
    isLoaded.value = false;
    hasError.value = false;
    if (stopObserver) {
      stopObserver();
      stopObserver = null;
    }
    await resolveImageSrc(name ?? '');
    if (!hasError.value) {
      setupObserver();
    }
  });

  return {
    containerStyle,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageError
  }
}