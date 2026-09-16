import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, provide } from 'vue';
import {
  useId,
  idInjectionKey,
  type IdInjectionContext,
} from '../../src/composables/useId';

/**
 * Mounts a parent providing `injection` and a child that calls `useId()`
 * `count` times. `provide`/`inject` only crosses component boundaries in
 * Vue, so a real parent → child tree is required to exercise it (a
 * component cannot `inject` a value it `provide`s to itself).
 */
const runWithIdInjection = (
  injection: IdInjectionContext,
  count = 1,
): string[] => {
  const ids: string[] = [];
  const Child = defineComponent({
    setup() {
      for (let i = 0; i < count; i++) {
        ids.push(useId().value);
      }
      return () => null;
    },
  });
  const Parent = defineComponent({
    setup() {
      provide(idInjectionKey, injection);
      return () => h(Child);
    },
  });
  createApp(Parent).mount(document.createElement('div'));
  return ids;
};

describe('useId', () => {
  it('generates unique ids for sequential calls sharing the injected counter', () => {
    const ids = runWithIdInjection({ prefix: 7, current: 0 }, 3);
    expect(new Set(ids).size).toBe(3);
  });

  it('produces the same id for the same injected prefix/current — SSR/client hydration parity', () => {
    const serverIds = runWithIdInjection({ prefix: 99, current: 0 }, 1);
    const clientIds = runWithIdInjection({ prefix: 99, current: 0 }, 1);
    expect(serverIds[0]).toBe(clientIds[0]);
  });

  it('derives the id deterministically from prefix + current, never from randomness', () => {
    const idsA = runWithIdInjection({ prefix: 1, current: 0 }, 1);
    const idsB = runWithIdInjection({ prefix: 1, current: 0 }, 1);
    expect(idsA[0]).toBe(idsB[0]);
    expect(idsA[0]).toMatch(/^gui-id-1-0$/);
  });

  it('respects an explicit deterministic id, bypassing the counter', () => {
    const Child = defineComponent({
      setup() {
        return () => null;
      },
    });
    let explicit: string | undefined;
    const Wrapper = defineComponent({
      setup() {
        explicit = useId('explicit-id').value;
        return () => h(Child);
      },
    });
    createApp(Wrapper).mount(document.createElement('div'));
    expect(explicit).toBe('explicit-id');
  });
});
