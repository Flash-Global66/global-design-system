import { describe, it, expect } from 'vitest';
import { nextTick } from 'vue';
import { render, fireEvent, screen } from '@testing-library/vue';
import GImage from '../src/Image.vue';

const renderImage = async (props: Record<string, unknown> = {}) => {
  const utils = render(GImage, {
    props: { name: 'document', lazyLoad: false, ...props },
  });

  await nextTick();

  return utils;
};

describe('GImage', () => {
  it('monta la imagen oculta y muestra el placeholder mientras descarga', async () => {
    await renderImage();

    const image = screen.getByAltText('document');
    expect(image).toHaveAttribute('src', '/illustrations/document.webp');
    expect(image).not.toBeVisible();
    expect(screen.getByLabelText('Cargando imagen: document')).toBeVisible();
  });

  it('muestra la imagen y oculta el placeholder cuando termina de cargar', async () => {
    await renderImage();

    const image = screen.getByAltText('document');
    await fireEvent.load(image);

    expect(image).toBeVisible();
    expect(
      screen.queryByLabelText('Cargando imagen: document'),
    ).not.toBeInTheDocument();
  });

  it('muestra el placeholder de error cuando la imagen falla', async () => {
    await renderImage();

    await fireEvent.error(screen.getByAltText('document'));

    expect(screen.getByLabelText('Error al cargar la imagen')).toBeVisible();
    expect(screen.queryByAltText('document')).not.toBeInTheDocument();
  });

  it('muestra el placeholder de error si el nombre no existe', async () => {
    await renderImage({ name: 'no-existe' });

    expect(screen.getByLabelText('Error al cargar la imagen')).toBeVisible();
    expect(screen.queryByAltText('no-existe')).not.toBeInTheDocument();
  });
});
