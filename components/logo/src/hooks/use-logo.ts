import { computed, ref, readonly, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { LogoProps } from '../logo.props';
import { LOGO_SIZES } from '../constants/logo.constants';
import type { LogoState } from '../types/logo.types';

const LOGO_ASSET_LOADERS = import.meta.glob('../assets/logos/*.svg', {
  import: 'default',
}) as Record<string, () => Promise<string>>;

export function useLogo(props: LogoProps): LogoState {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  const imageSrc = ref<string>('');
  let stopObserver: (() => void) | null = null;

  const sizeValue = computed<string>(
    () => LOGO_SIZES[props.size as keyof typeof LOGO_SIZES] ?? LOGO_SIZES.md
  );

  const containerStyle = computed<Record<string, string>>(() => {
    const base: Record<string, string> = {
      height: sizeValue.value,
      minHeight: sizeValue.value,
    };

    if (!isLoaded.value || hasError.value) {
      return {
        ...base,
        width: sizeValue.value,
        minWidth: sizeValue.value,
      };
    }

    return base;
  });

  const imageStyle = computed<Record<string, string>>(() => ({
    height: sizeValue.value,
    width: 'auto',
    maxHeight: sizeValue.value,
    filter: props.filter ?? 'none',
  }));

  async function resolveImageSrc(name: string): Promise<void> {
    const assetPath = `../assets/logos/${String(name).toLowerCase().trim()}.svg`;
    const loader = LOGO_ASSET_LOADERS[assetPath];
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

    const onIntersect = async (): Promise<void> => {
      await resolveImageSrc(props.name ?? '');
      if (!hasError.value) {
        loadImage();
      }
    };

    if (imageContainer.value) {
      const { stop } = useIntersectionObserver(
        imageContainer,
        async ([{ isIntersecting }]) => {
          if (isIntersecting) {
            stop();
            await onIntersect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );
      stopObserver = stop;
    } else {
      onIntersect();
    }
  };

  onMounted(async () => {
    if (!props.lazyLoad) {
      await resolveImageSrc(props.name ?? '');
    }
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
    if (!props.lazyLoad) {
      await resolveImageSrc(name ?? '');
      if (!hasError.value) {
        setupObserver();
      }
    } else {
      setupObserver();
    }
  });

  return {
    sizeValue,
    containerStyle,
    imageStyle,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageError,
  };
}
