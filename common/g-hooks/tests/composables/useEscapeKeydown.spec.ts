import { describe, it, expect, vi } from 'vitest';
import { createApp, defineComponent } from 'vue';
import { useEscapeKeydown } from '../../src/composables/useEscapeKeydown';

/**
 * Mounts a component that registers `handler` via `useEscapeKeydown` on
 * setup. Returns the `unmount` function so tests can assert cleanup.
 */
const mountWithEscapeKeydown = (handler: (event: KeyboardEvent) => void) => {
  const Component = defineComponent({
    setup() {
      useEscapeKeydown(handler);
      return () => null;
    },
  });
  const app = createApp(Component);
  app.mount(document.createElement('div'));
  return () => app.unmount();
};

const dispatchKeydown = (code: string) => {
  document.dispatchEvent(new KeyboardEvent('keydown', { code }));
};

describe('useEscapeKeydown', () => {
  it('invokes the handler when the Escape key is pressed', () => {
    const handler = vi.fn();
    mountWithEscapeKeydown(handler);

    dispatchKeydown('Escape');

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('is a no-op for keys other than Escape', () => {
    const handler = vi.fn();
    mountWithEscapeKeydown(handler);

    dispatchKeydown('Enter');
    dispatchKeydown('Tab');

    expect(handler).not.toHaveBeenCalled();
  });

  it('stops invoking the handler after the component unmounts (listener cleanup)', () => {
    const handler = vi.fn();
    const unmount = mountWithEscapeKeydown(handler);

    unmount();
    dispatchKeydown('Escape');

    expect(handler).not.toHaveBeenCalled();
  });

  it('invokes every currently-mounted handler on the same Escape keydown', () => {
    const handlerA = vi.fn();
    const handlerB = vi.fn();
    mountWithEscapeKeydown(handlerA);
    mountWithEscapeKeydown(handlerB);

    dispatchKeydown('Escape');

    expect(handlerA).toHaveBeenCalledTimes(1);
    expect(handlerB).toHaveBeenCalledTimes(1);
  });

  it('keeps invoking remaining handlers when only one of several unmounts (partial teardown of the shared listener)', () => {
    const handlerA = vi.fn();
    const handlerB = vi.fn();
    const unmountA = mountWithEscapeKeydown(handlerA);
    mountWithEscapeKeydown(handlerB);

    unmountA();
    dispatchKeydown('Escape');

    expect(handlerA).not.toHaveBeenCalled();
    expect(handlerB).toHaveBeenCalledTimes(1);
  });
});
