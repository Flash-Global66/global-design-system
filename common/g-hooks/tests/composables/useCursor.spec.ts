import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { useCursor } from '../../src/composables/useCursor';

const makeFakeInput = (
  value: string,
  selectionStart: number,
  selectionEnd: number,
) => {
  const state = { value, selectionStart, selectionEnd };
  return {
    get value() {
      return state.value;
    },
    set value(v: string) {
      state.value = v;
    },
    get selectionStart() {
      return state.selectionStart;
    },
    get selectionEnd() {
      return state.selectionEnd;
    },
    setSelectionRange: (start: number, end: number) => {
      state.selectionStart = start;
      state.selectionEnd = end;
    },
  } as unknown as HTMLInputElement;
};

describe('useCursor', () => {
  it('restores the cursor position after the tail of the string is preserved (e.g. a char inserted mid-value)', () => {
    const fakeInput = makeFakeInput('helloworld', 5, 5);
    const inputRef = ref<HTMLInputElement | undefined>(fakeInput);
    const [record, restore] = useCursor(inputRef);

    record();
    // Simulate inserting "X" at the cursor: "hello" + "X" + "world"
    fakeInput.value = 'helloXworld';
    restore();

    expect(fakeInput.selectionStart).toBe(6);
    expect(fakeInput.selectionEnd).toBe(6);
  });

  it('restores to the end of the value when neither the before nor after text can be matched', () => {
    const fakeInput = makeFakeInput('abc', 1, 1);
    const inputRef = ref<HTMLInputElement | undefined>(fakeInput);
    const [record, restore] = useCursor(inputRef);

    record();
    fakeInput.value = 'xyz';
    restore();

    expect(fakeInput.selectionStart).toBe(3);
  });

  it('does not throw and is a no-op when record() is called with an undefined input ref', () => {
    const inputRef = ref<HTMLInputElement | undefined>(undefined);
    const [record, restore] = useCursor(inputRef);

    expect(() => record()).not.toThrow();
    expect(() => restore()).not.toThrow();
  });

  it('restore() is a no-op when record() was never called first', () => {
    const fakeInput = makeFakeInput('abc', 1, 1);
    const inputRef = ref<HTMLInputElement | undefined>(fakeInput);
    const [, restore] = useCursor(inputRef);

    expect(() => restore()).not.toThrow();
    expect(fakeInput.selectionStart).toBe(1);
  });

  it('is a no-op when selectionStart/selectionEnd are null (e.g. input type="number")', () => {
    const fakeInput = {
      value: 'abc',
      selectionStart: null,
      selectionEnd: null,
      setSelectionRange: () => undefined,
    } as unknown as HTMLInputElement;
    const inputRef = ref<HTMLInputElement | undefined>(fakeInput);
    const [record, restore] = useCursor(inputRef);

    record();
    expect(() => restore()).not.toThrow();
  });
});
