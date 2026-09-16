import { describe, it, expect, vi, afterEach } from 'vitest';
import { ref } from 'vue';
import { useLockscreen } from '../../src/composables/useLockscreen';

describe('useLockscreen', () => {
  afterEach(() => {
    vi.useRealTimers();
    document.body.className = '';
    document.body.style.width = '';
  });

  it('lanza un error si trigger no es un ref', () => {
    // @ts-expect-error validamos el guard en tiempo de ejecución
    expect(() => useLockscreen(false)).toThrow();
  });

  it('agrega la clase de bloqueo al body cuando el trigger pasa a true', async () => {
    const visible = ref(false);
    useLockscreen(visible);

    visible.value = true;
    await vi.waitFor(() => {
      expect(document.body.className).toContain('gui-popup-parent--hidden');
    });
  });

  it('remueve la clase de bloqueo tras un delay cuando el trigger vuelve a false', async () => {
    vi.useFakeTimers();
    const visible = ref(false);
    useLockscreen(visible);

    visible.value = true;
    await vi.advanceTimersByTimeAsync(0);
    expect(document.body.className).toContain('gui-popup-parent--hidden');

    visible.value = false;
    await vi.advanceTimersByTimeAsync(0);
    // El cleanup usa un setTimeout(200ms); antes de que corra sigue bloqueado.
    expect(document.body.className).toContain('gui-popup-parent--hidden');

    await vi.advanceTimersByTimeAsync(200);
    expect(document.body.className).not.toContain('gui-popup-parent--hidden');
  });
});
