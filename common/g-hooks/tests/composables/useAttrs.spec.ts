import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, nextTick, ref } from 'vue';
import { useAttrs } from '../../src/composables/useAttrs';

/**
 * Mounts a child under a parent so `$attrs` (non-prop, non-emit bindings
 * passed by the parent) are populated, then exposes whatever `useAttrs()`
 * returns via the `onReady` callback for assertions.
 */
const mountWithAttrs = (
  parentAttrs: Record<string, unknown>,
  onReady: (attrs: Record<string, unknown>) => void,
  useAttrsParams?: Parameters<typeof useAttrs>[0],
) => {
  const Child = defineComponent({
    setup() {
      const attrs = useAttrs(useAttrsParams);
      onReady(attrs.value);
      return () => null;
    },
  });
  const Parent = defineComponent({
    setup() {
      return () => h(Child, parentAttrs);
    },
  });
  createApp(Parent).mount(document.createElement('div'));
};

describe('useAttrs', () => {
  it('excludes class and style by default', () => {
    let result: Record<string, unknown> = {};
    mountWithAttrs(
      { class: 'foo', style: { color: 'red' }, 'data-testid': 'x' },
      attrs => {
        result = attrs;
      },
    );

    expect(result).toEqual({ 'data-testid': 'x' });
  });

  it('also excludes keys provided via excludeKeys', () => {
    let result: Record<string, unknown> = {};
    mountWithAttrs(
      { class: 'foo', tabindex: '0', role: 'button' },
      attrs => {
        result = attrs;
      },
      { excludeKeys: ref(['role']) },
    );

    expect(result).toEqual({ tabindex: '0' });
  });

  it('strips on[A-Z]* listener attrs when excludeListeners is true', () => {
    let result: Record<string, unknown> = {};
    mountWithAttrs(
      { onClick: () => undefined, onCustomEvent: () => undefined, id: 'x' },
      attrs => {
        result = attrs;
      },
      { excludeListeners: true },
    );

    expect(result).toEqual({ id: 'x' });
  });

  it('keeps on[A-Z]* listener attrs when excludeListeners is false (default)', () => {
    const onClick = () => undefined;
    let result: Record<string, unknown> = {};
    mountWithAttrs({ onClick, id: 'x' }, attrs => {
      result = attrs;
    });

    expect(result.onClick).toBe(onClick);
    expect(result.id).toBe('x');
  });

  it('does not exclude a lowercase "on..." attribute — only on[A-Z]* listeners match', () => {
    let result: Record<string, unknown> = {};
    mountWithAttrs(
      { online: 'true' },
      attrs => {
        result = attrs;
      },
      { excludeListeners: true },
    );

    expect(result).toEqual({ online: 'true' });
  });

  it('reacts to attrs changing after mount (stays a live computed)', async () => {
    let capturedAttrs: { value: Record<string, unknown> } | undefined;
    const extra = ref<Record<string, unknown>>({ 'data-testid': 'a' });

    const Child = defineComponent({
      setup() {
        capturedAttrs = useAttrs();
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        return () => h(Child, extra.value);
      },
    });
    createApp(Parent).mount(document.createElement('div'));

    expect(capturedAttrs!.value).toEqual({ 'data-testid': 'a' });

    extra.value = { 'data-testid': 'b' };
    await nextTick();

    expect(capturedAttrs!.value).toEqual({ 'data-testid': 'b' });
  });

  it('returns an empty, non-throwing computed when called outside an active component instance', () => {
    let attrs: ReturnType<typeof useAttrs> | undefined;
    expect(() => {
      attrs = useAttrs();
    }).not.toThrow();
    expect(attrs!.value).toEqual({});
  });
});
