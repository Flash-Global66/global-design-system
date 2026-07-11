import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { effectScope } from 'vue';
import { useTimeout } from '../../src/composables/useTimeout';

describe('useTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('invokes the callback after the requested delay', () => {
    const { registerTimeout } = useTimeout();
    const fn = vi.fn();

    registerTimeout(fn, 200);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('cancels a pending timeout when registerTimeout is called again before it fires', () => {
    const { registerTimeout } = useTimeout();
    const first = vi.fn();
    const second = vi.fn();

    registerTimeout(first, 200);
    vi.advanceTimersByTime(100);
    registerTimeout(second, 200);
    vi.advanceTimersByTime(200);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('cancelTimeout stops a pending callback from firing', () => {
    const { registerTimeout, cancelTimeout } = useTimeout();
    const fn = vi.fn();

    registerTimeout(fn, 200);
    cancelTimeout();
    vi.advanceTimersByTime(200);

    expect(fn).not.toHaveBeenCalled();
  });

  it('cancels the pending timeout automatically when the owning effect scope is disposed', () => {
    const fn = vi.fn();
    const scope = effectScope();

    scope.run(() => {
      const { registerTimeout } = useTimeout();
      registerTimeout(fn, 200);
    });

    scope.stop();
    vi.advanceTimersByTime(200);

    expect(fn).not.toHaveBeenCalled();
  });
});
