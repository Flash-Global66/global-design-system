import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref } from 'vue';
import { useDelayedToggle } from '../../src/composables/useDelayedToggle';

describe('useDelayedToggle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('onOpen waits showAfter ms before invoking open', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onOpen } = useDelayedToggle({
      showAfter: ref(300),
      hideAfter: ref(200),
      autoClose: ref(0),
      open,
      close,
    });

    onOpen();
    expect(open).not.toHaveBeenCalled();

    vi.advanceTimersByTime(299);
    expect(open).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(open).toHaveBeenCalledTimes(1);
  });

  it('onClose waits hideAfter ms before invoking close', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onClose } = useDelayedToggle({
      showAfter: ref(0),
      hideAfter: ref(200),
      autoClose: ref(0),
      open,
      close,
    });

    onClose();
    expect(close).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(close).toHaveBeenCalledTimes(1);
  });

  it('autoClose triggers close after the configured duration once opened', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onOpen } = useDelayedToggle({
      showAfter: ref(0),
      hideAfter: ref(200),
      autoClose: ref(500),
      open,
      close,
    });

    onOpen();
    vi.advanceTimersByTime(0);
    expect(open).toHaveBeenCalledTimes(1);
    expect(close).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);
    expect(close).toHaveBeenCalledTimes(1);
  });

  it('does not schedule autoClose when autoClose is 0', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onOpen } = useDelayedToggle({
      showAfter: ref(0),
      hideAfter: ref(200),
      autoClose: ref(0),
      open,
      close,
    });

    onOpen();
    vi.advanceTimersByTime(0);
    expect(open).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(10000);
    expect(close).not.toHaveBeenCalled();
  });

  it('rapid open then close cancels the pending open timer — no double-invoke', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: ref(300),
      hideAfter: ref(200),
      autoClose: ref(0),
      open,
      close,
    });

    onOpen();
    vi.advanceTimersByTime(100);
    onClose();
    vi.advanceTimersByTime(300);

    expect(open).not.toHaveBeenCalled();
    expect(close).toHaveBeenCalledTimes(1);
  });

  it('rapid close then open cancels the pending autoClose timer from a previous open', () => {
    const open = vi.fn();
    const close = vi.fn();
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: ref(0),
      hideAfter: ref(0),
      autoClose: ref(500),
      open,
      close,
    });

    onOpen();
    vi.advanceTimersByTime(0);
    expect(open).toHaveBeenCalledTimes(1);

    // Antes de que dispare el autoClose, se solicita un cierre explícito.
    onClose();
    vi.advanceTimersByTime(0);
    expect(close).toHaveBeenCalledTimes(1);

    // El autoClose original ya fue cancelado por el cierre explícito.
    vi.advanceTimersByTime(500);
    expect(close).toHaveBeenCalledTimes(1);
  });
});
