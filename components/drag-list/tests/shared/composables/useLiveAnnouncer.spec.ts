import { describe, it, expect } from 'vitest';
import { nextTick, ref } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useLiveAnnouncer } from '../../../src/shared/composables/useLiveAnnouncer';
import { DEFAULT_DRAG_LIST_TEXTS } from '../../../src/shared/constants/texts.constant';

describe('useLiveAnnouncer', () => {
  it('inicia con el mensaje vacío', () => {
    const { result } = withSetup(() =>
      useLiveAnnouncer(DEFAULT_DRAG_LIST_TEXTS),
    );

    expect(result.message.value).toBe('');
  });

  it('interpola label, position y total en el anuncio de agregado', async () => {
    const { result } = withSetup(() =>
      useLiveAnnouncer(DEFAULT_DRAG_LIST_TEXTS),
    );

    result.announce('announceAdd', {
      label: 'Tarjeta A',
      position: 2,
      total: 2,
    });
    await nextTick();

    expect(result.message.value).toBe('Tarjeta A agregado en posición 2 de 2');
  });

  it('interpola solo el label cuando no hay posición', async () => {
    const { result } = withSetup(() =>
      useLiveAnnouncer(DEFAULT_DRAG_LIST_TEXTS),
    );

    result.announce('announceRemove', { label: 'Tarjeta A' });
    await nextTick();

    expect(result.message.value).toBe('Tarjeta A eliminado');
  });

  it('resuelve los textos reactivos con toValue', async () => {
    const texts = ref({
      ...DEFAULT_DRAG_LIST_TEXTS,
      announceRemove: 'Quitado {label}',
    });
    const { result } = withSetup(() => useLiveAnnouncer(texts));

    result.announce('announceRemove', { label: 'X' });
    await nextTick();

    expect(result.message.value).toBe('Quitado X');
  });

  it('repetir el mismo mensaje lo vacía y lo reasigna en el siguiente tick', async () => {
    const { result } = withSetup(() =>
      useLiveAnnouncer(DEFAULT_DRAG_LIST_TEXTS),
    );

    result.announce('announceRemove', { label: 'A' });
    await nextTick();
    result.announce('announceRemove', { label: 'A' });

    expect(result.message.value).toBe('');
    await nextTick();
    expect(result.message.value).toBe('A eliminado');
  });
});
