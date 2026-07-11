import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, inject, ref } from 'vue';
import {
  FORWARD_REF_INJECTION_KEY,
  useForwardRef,
  useForwardRefDirective,
} from '../../src/composables/useForwardRef';

describe('useForwardRef', () => {
  it('provides FORWARD_REF_INJECTION_KEY with a setForwardRef that writes into the given ref', () => {
    const forwardRef = ref<HTMLElement | null>(null);
    let injected: ReturnType<typeof inject> | undefined;

    const Child = defineComponent({
      setup() {
        injected = inject(FORWARD_REF_INJECTION_KEY);
        return () => null;
      },
    });

    const Parent = defineComponent({
      setup() {
        useForwardRef(forwardRef);
        return () => h(Child);
      },
    });

    const app = createApp(Parent);
    app.mount(document.createElement('div'));

    expect(injected).toBeDefined();
    expect(typeof injected?.setForwardRef).toBe('function');

    const el = document.createElement('div');
    injected!.setForwardRef(el);
    expect(forwardRef.value).toBe(el);

    app.unmount();
  });

  it('setForwardRef overwrites the previous value on repeated calls', () => {
    const forwardRef = ref<HTMLElement | null>(null);
    let injected: ReturnType<typeof inject> | undefined;

    const Child = defineComponent({
      setup() {
        injected = inject(FORWARD_REF_INJECTION_KEY);
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        useForwardRef(forwardRef);
        return () => h(Child);
      },
    });

    const app = createApp(Parent);
    app.mount(document.createElement('div'));

    const first = document.createElement('span');
    const second = document.createElement('p');
    injected!.setForwardRef(first);
    expect(forwardRef.value).toBe(first);
    injected!.setForwardRef(second);
    expect(forwardRef.value).toBe(second);

    app.unmount();
  });
});

describe('useForwardRefDirective', () => {
  it('calls setForwardRef with the bound element on mounted', () => {
    const calls: unknown[] = [];
    const directive = useForwardRefDirective(el => calls.push(el));

    const el = document.createElement('div');
    directive.mounted?.(el, {} as any, {} as any, {} as any);

    expect(calls).toEqual([el]);
  });

  it('calls setForwardRef with the bound element on updated', () => {
    const calls: unknown[] = [];
    const directive = useForwardRefDirective(el => calls.push(el));

    const el = document.createElement('div');
    directive.updated?.(el, {} as any, {} as any, {} as any);

    expect(calls).toEqual([el]);
  });

  it('calls setForwardRef with null on unmounted', () => {
    const calls: unknown[] = [];
    const directive = useForwardRefDirective(el => calls.push(el));

    directive.unmounted?.(
      document.createElement('div'),
      {} as any,
      {} as any,
      {} as any,
    );

    expect(calls).toEqual([null]);
  });

  it('returns a fresh directive object referencing the same setForwardRef on every call', () => {
    const setForwardRef = () => {};
    const directiveA = useForwardRefDirective(setForwardRef);
    const directiveB = useForwardRefDirective(setForwardRef);

    expect(directiveA).not.toBe(directiveB);
    expect(typeof directiveA.mounted).toBe('function');
    expect(typeof directiveA.updated).toBe('function');
    expect(typeof directiveA.unmounted).toBe('function');
  });
});

describe('shared-symbol handshake', () => {
  it('useForwardRef and useForwardRefDirective communicate through the exact same FORWARD_REF_INJECTION_KEY symbol', () => {
    const forwardRef = ref<HTMLElement | null>(null);
    let receivedKey: symbol | undefined;

    const Child = defineComponent({
      directives: {
        forwardRef: useForwardRefDirective(el => {
          const injection = inject(FORWARD_REF_INJECTION_KEY);
          injection?.setForwardRef(el);
        }),
      },
      setup() {
        const injection = inject(FORWARD_REF_INJECTION_KEY);
        receivedKey = FORWARD_REF_INJECTION_KEY as unknown as symbol;
        return () =>
          h('div', {
            ref: (el: unknown) => injection?.setForwardRef(el),
          });
      },
    });

    const Parent = defineComponent({
      setup() {
        useForwardRef(forwardRef);
        return () => h(Child);
      },
    });

    const app = createApp(Parent);
    const container = document.createElement('div');
    app.mount(container);

    expect(receivedKey).toBe(FORWARD_REF_INJECTION_KEY);
    expect(forwardRef.value).toBeInstanceOf(HTMLElement);

    app.unmount();
  });
});
