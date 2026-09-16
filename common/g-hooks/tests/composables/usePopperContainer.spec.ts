import { describe, it, expect, afterEach } from 'vitest';
import { createApp, defineComponent } from 'vue';
import {
  usePopperContainer,
  usePopperContainerId,
} from '../../src/composables/usePopperContainer';

describe('usePopperContainerId', () => {
  it('generates a stable id/selector derived from the namespace and id-injection prefix', () => {
    let captured: ReturnType<typeof usePopperContainerId> | undefined;

    const Child = defineComponent({
      setup() {
        captured = usePopperContainerId();
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(captured!.id.value).toMatch(/^gui-popper-container-\d+$/);
    expect(captured!.selector.value).toBe(`#${captured!.id.value}`);
  });
});

describe('usePopperContainer', () => {
  afterEach(() => {
    document
      .querySelectorAll('[id^="gui-popper-container-"]')
      .forEach(el => el.remove());
  });

  it('creates the teleport container element and appends it to document.body', () => {
    let captured: ReturnType<typeof usePopperContainer> | undefined;

    const Child = defineComponent({
      setup() {
        captured = usePopperContainer();
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    const container = document.body.querySelector(captured!.selector.value);
    expect(container).not.toBeNull();
    expect(container?.id).toBe(captured!.id.value);
  });

  it("always re-creates the container under import.meta.env.MODE === 'test' (byte-exact EP quirk, isolates each test's teleport target)", () => {
    const First = defineComponent({
      setup() {
        usePopperContainer();
        return () => null;
      },
    });
    const Second = defineComponent({
      setup() {
        usePopperContainer();
        return () => null;
      },
    });

    createApp(First).mount(document.createElement('div'));
    createApp(Second).mount(document.createElement('div'));

    // Mismo id (namespace + prefijo de idInjection son estables a nivel de
    // módulo), pero DOS elementos distintos porque `import.meta.env.MODE ===
    // 'test'` (Vitest) fuerza la creación en cada llamada, sin comprobar si
    // ya existe uno.
    expect(
      document.body.querySelectorAll('[id^="gui-popper-container-"]').length,
    ).toBe(2);
  });

  it('reuses the existing container instead of creating a duplicate outside of test mode', () => {
    const originalMode = import.meta.env.MODE;
    (import.meta.env as { MODE: string }).MODE = 'production';

    try {
      let firstId: string | undefined;
      let secondId: string | undefined;

      const First = defineComponent({
        setup() {
          const { id } = usePopperContainer();
          firstId = id.value;
          return () => null;
        },
      });
      const Second = defineComponent({
        setup() {
          const { id } = usePopperContainer();
          secondId = id.value;
          return () => null;
        },
      });

      createApp(First).mount(document.createElement('div'));
      createApp(Second).mount(document.createElement('div'));

      expect(secondId).toBe(firstId);
      expect(document.body.querySelectorAll(`#${firstId}`).length).toBe(1);
    } finally {
      (import.meta.env as { MODE: string }).MODE = originalMode;
    }
  });
});
