import { describe, it, expect, vi } from 'vitest';
import { nextTick } from 'vue';
import { useComposition } from '../../src/composables/useComposition';

const makeEvent = (
  type: 'compositionstart' | 'compositionupdate' | 'compositionend',
  value = '',
): CompositionEvent =>
  ({ type, target: { value } }) as unknown as CompositionEvent;

describe('useComposition', () => {
  it('compositionstart sets isComposing = true and emits the raw event', () => {
    const emit = vi.fn();
    const { isComposing, handleCompositionStart } = useComposition({
      afterComposition: vi.fn(),
      emit,
    });

    const event = makeEvent('compositionstart');
    handleCompositionStart(event);

    expect(isComposing.value).toBe(true);
    expect(emit).toHaveBeenCalledWith('compositionstart', event);
  });

  it('compositionupdate keeps composing when the last typed character is NOT Korean (EP Firefox guard)', () => {
    const { isComposing, handleCompositionStart, handleCompositionUpdate } =
      useComposition({ afterComposition: vi.fn() });

    handleCompositionStart(makeEvent('compositionstart'));
    handleCompositionUpdate(makeEvent('compositionupdate', 'hello'));

    expect(isComposing.value).toBe(true);
  });

  it('compositionupdate flips isComposing to false when the last typed character IS Korean (EP Firefox guard)', () => {
    const { isComposing, handleCompositionStart, handleCompositionUpdate } =
      useComposition({ afterComposition: vi.fn() });

    handleCompositionStart(makeEvent('compositionstart'));
    // U+AC00 (가) is a Hangul syllable — matches the Korean unicode ranges.
    handleCompositionUpdate(makeEvent('compositionupdate', '가'));

    expect(isComposing.value).toBe(false);
  });

  it('compositionend sets isComposing = false and invokes afterComposition after nextTick, when it was composing', async () => {
    const afterComposition = vi.fn();
    const { isComposing, handleCompositionStart, handleCompositionEnd } =
      useComposition({ afterComposition });

    handleCompositionStart(makeEvent('compositionstart'));
    const endEvent = makeEvent('compositionend');
    handleCompositionEnd(endEvent);

    expect(isComposing.value).toBe(false);
    expect(afterComposition).not.toHaveBeenCalled();

    await nextTick();
    expect(afterComposition).toHaveBeenCalledWith(endEvent);
  });

  it('compositionend is a no-op (does not call afterComposition) when it was not composing', async () => {
    const afterComposition = vi.fn();
    const { handleCompositionEnd } = useComposition({ afterComposition });

    handleCompositionEnd(makeEvent('compositionend'));
    await nextTick();

    expect(afterComposition).not.toHaveBeenCalled();
  });

  it('handleComposition dispatches to handleCompositionEnd for "compositionend" events', async () => {
    const afterComposition = vi.fn();
    const { handleCompositionStart, handleComposition } = useComposition({
      afterComposition,
    });

    handleCompositionStart(makeEvent('compositionstart'));
    const endEvent = makeEvent('compositionend');
    handleComposition(endEvent);
    await nextTick();

    expect(afterComposition).toHaveBeenCalledWith(endEvent);
  });

  it('handleComposition dispatches to handleCompositionUpdate for any other event type', () => {
    const { isComposing, handleCompositionStart, handleComposition } =
      useComposition({ afterComposition: vi.fn() });

    handleCompositionStart(makeEvent('compositionstart'));
    handleComposition(makeEvent('compositionupdate', '가'));

    expect(isComposing.value).toBe(false);
  });

  it('works without an emit function (emit is optional)', () => {
    const { isComposing, handleCompositionStart } = useComposition({
      afterComposition: vi.fn(),
    });

    expect(() =>
      handleCompositionStart(makeEvent('compositionstart')),
    ).not.toThrow();
    expect(isComposing.value).toBe(true);
  });
});
