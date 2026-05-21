import { computed, ref, readonly, onMounted, onBeforeUnmount, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { LogoProps } from '../logo.props';
import { LOGO_FILTERS, LOGO_PLACEHOLDER_SIZES, LOGO_SIZES } from '../constants/logo.constants';
import type { LogoFilter } from '../types/logo.types';
import type { LogoState } from '../types/logo.types';

const LOGO_ASSET_LOADERS = import.meta.glob('../assets/logos/*.svg', {
  import: 'default',
}) as Record<string, () => Promise<string>>;

export function useLogo(props: LogoProps): LogoState {
  const isLoaded = ref<boolean>(false);
  const hasError = ref<boolean>(false);
  const imageContainer = ref<HTMLElement | null>(null);
  const imageSrc = ref<string>('');
  const aspectRatio = ref<number | null>(null);
  let stopObserver: (() => void) | null = null;

  const hasColor = computed<boolean>(() => Boolean(props.color?.trim()));
  const hasSizeCustom = computed<boolean>(() => Boolean(props.sizeCustom?.trim()));
  const usesPresetSize = computed<boolean>(() => !hasSizeCustom.value);

  const sizeValue = computed<string>(
    () => LOGO_SIZES[props.size as keyof typeof LOGO_SIZES] ?? LOGO_SIZES.md
  );

  const heightFromCustomWidth = computed<string>(() => {
    if (!hasSizeCustom.value || !aspectRatio.value) {
      return 'auto';
    }
    const widthPx = parseFloat(props.sizeCustom!.trim());
    if (Number.isNaN(widthPx)) {
      return 'auto';
    }
    return `${widthPx / aspectRatio.value}px`;
  });

  const heightValue = computed<string>(() =>
    usesPresetSize.value ? sizeValue.value : heightFromCustomWidth.value
  );

  const widthValue = computed<string>(() => {
    if (hasSizeCustom.value) {
      return props.sizeCustom!.trim();
    }
    return 'auto';
  });

  const placeholderSizeKey = computed(
    () =>
      (usesPresetSize.value
        ? props.size
        : 'md') as keyof typeof LOGO_PLACEHOLDER_SIZES
  );

  const containerStyle = computed<Record<string, string>>(() => {
    const placeholderSize =
      LOGO_PLACEHOLDER_SIZES[placeholderSizeKey.value] ?? LOGO_PLACEHOLDER_SIZES.md;

    if (!isLoaded.value || hasError.value) {
      return {
        width: placeholderSize.width,
        minWidth: placeholderSize.width,
        height: placeholderSize.height,
        minHeight: placeholderSize.height,
      };
    }

    if (usesPresetSize.value) {
      const style: Record<string, string> = {
        height: heightValue.value,
        minHeight: heightValue.value,
      };
      return style;
    }

    const style: Record<string, string> = {
      width: widthValue.value,
      minWidth: widthValue.value,
      height: heightValue.value,
      minHeight: heightValue.value,
    };
    return style;
  });

  const filterValue = computed<string>(() => {
    const key = props.filter as LogoFilter;
    return LOGO_FILTERS[key] ?? LOGO_FILTERS.none;
  });

  const imageStyle = computed<Record<string, string>>(() => {
    const filter = filterValue.value;
    const style: Record<string, string> = { filter };

    if (usesPresetSize.value) {
      style.height = heightValue.value;
      style.width = widthValue.value;
      style.maxHeight = heightValue.value;
      return style;
    }

    style.width = widthValue.value;
    style.height = heightValue.value;
    style.maxWidth = widthValue.value;
    return style;
  });

  const colorBoxStyle = computed<Record<string, string>>(() => {
    const height = heightValue.value;
    const style: Record<string, string> = {
      display: 'inline-block',
      height,
      width: widthValue.value,
      minHeight: height,
      backgroundColor: props.color?.trim() ?? '',
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      filter: filterValue.value,
    };

    if (imageSrc.value) {
      const maskUrl = `url("${imageSrc.value}")`;
      style.maskImage = maskUrl;
      style.WebkitMaskImage = maskUrl;
    }

    return style;
  });

  function loadAspectRatio(src: string): void {
    aspectRatio.value = null;
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        aspectRatio.value = img.naturalWidth / img.naturalHeight;
      }
    };
    img.src = src;
  }

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

  watch(imageSrc, (src) => {
    if (src) {
      loadAspectRatio(src);
    } else {
      aspectRatio.value = null;
    }
  });

  watch(() => props.name, async (name) => {
    isLoaded.value = false;
    hasError.value = false;
    aspectRatio.value = null;
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
    colorBoxStyle,
    hasColor,
    isLoaded,
    hasError,
    imageSrc: readonly(imageSrc),
    imageContainer,
    handleImageError,
  };
}
