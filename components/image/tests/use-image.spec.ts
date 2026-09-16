import { describe, it, expect } from 'vitest';
import { createApp, reactive, nextTick } from 'vue';
import { withSetup } from '../../../tests/utils/withSetup';
import { useImage } from '../src/hooks/use-image';
import { imageBaseUrlKey } from '../src/constants/image.constants';
import type { ImageProps } from '../src/image.props';
import type { ImageState } from '../src/types/image.types';

const makeProps = (overrides: Partial<ImageProps> = {}): ImageProps =>
  reactive({
    name: 'document',
    size: 'md',
    lazyLoad: false,
    ...overrides,
  }) as ImageProps;

function withProvidedBaseUrl(
  baseUrl: string,
  props: ImageProps,
): { result: ImageState } {
  let result!: ImageState;

  const app = createApp({
    setup() {
      result = useImage(props);
      return () => null;
    },
  });

  app.provide(imageBaseUrlKey, baseUrl);
  app.mount(document.createElement('div'));

  return { result };
}

describe('useImage', () => {
  it('resuelve la URL con la base por defecto', () => {
    const { result } = withSetup(() => useImage(makeProps()));
    expect(result.imageSrc.value).toBe('/illustrations/document.webp');
  });

  it('usa la base inyectada con imageBaseUrlKey', () => {
    const { result } = withProvidedBaseUrl(
      'https://cdn.example.com/illustrations',
      makeProps({ name: 'wallet' }),
    );
    expect(result.imageSrc.value).toBe(
      'https://cdn.example.com/illustrations/wallet.webp',
    );
  });

  it('elimina los slashes finales de la base inyectada', () => {
    const { result } = withProvidedBaseUrl(
      'https://cdn.example.com/illustrations//',
      makeProps({ name: 'wallet' }),
    );
    expect(result.imageSrc.value).toBe(
      'https://cdn.example.com/illustrations/wallet.webp',
    );
  });

  it('marca error y no arma URL si el nombre no existe', () => {
    const { result } = withSetup(() =>
      useImage(makeProps({ name: 'no-existe' as ImageProps['name'] })),
    );
    expect(result.hasError.value).toBe(true);
    expect(result.imageSrc.value).toBe('');
  });

  it('marca cargada la imagen tras el evento load', () => {
    const { result } = withSetup(() => useImage(makeProps()));
    expect(result.isLoaded.value).toBe(false);

    result.handleImageLoad();
    expect(result.isLoaded.value).toBe(true);
  });

  it('marca error tras el evento error', () => {
    const { result } = withSetup(() => useImage(makeProps()));

    result.handleImageError();
    expect(result.hasError.value).toBe(true);
  });

  it('reintenta con una ilustración nueva tras un error previo', async () => {
    const props = makeProps();
    const { result } = withSetup(() => useImage(props));

    result.handleImageError();
    expect(result.hasError.value).toBe(true);

    props.name = 'wallet';
    await nextTick();

    expect(result.hasError.value).toBe(false);
    expect(result.imageSrc.value).toBe('/illustrations/wallet.webp');
  });

  it('no resuelve la URL hasta entrar al viewport cuando lazyLoad está activo', () => {
    const { result } = withSetup(() => useImage(makeProps({ lazyLoad: true })));
    expect(result.imageSrc.value).toBe('');
  });
});
