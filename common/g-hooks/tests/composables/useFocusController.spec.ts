import { describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';
import { useFocusController } from '../../src/composables/useFocusController';

interface FakeTarget {
  focus: () => void;
}

const makeTarget = (): FakeTarget => ({ focus: vi.fn() });

describe('useFocusController', () => {
  it('handleFocus sets isFocused = true and fires afterFocus', () => {
    const afterFocus = vi.fn();
    const target = ref<FakeTarget>();
    const { isFocused, handleFocus } = useFocusController(target, {
      afterFocus,
    });

    handleFocus(new FocusEvent('focus'));

    expect(isFocused.value).toBe(true);
    expect(afterFocus).toHaveBeenCalledTimes(1);
  });

  it('beforeFocus can veto focus: isFocused stays false and afterFocus is not called', () => {
    const afterFocus = vi.fn();
    const target = ref<FakeTarget>();
    const { isFocused, handleFocus } = useFocusController(target, {
      beforeFocus: () => true,
      afterFocus,
    });

    handleFocus(new FocusEvent('focus'));

    expect(isFocused.value).toBe(false);
    expect(afterFocus).not.toHaveBeenCalled();
  });

  it('handleFocus is idempotent — a second call while already focused does not re-fire afterFocus', () => {
    const afterFocus = vi.fn();
    const target = ref<FakeTarget>();
    const { handleFocus } = useFocusController(target, { afterFocus });

    handleFocus(new FocusEvent('focus'));
    handleFocus(new FocusEvent('focus'));

    expect(afterFocus).toHaveBeenCalledTimes(1);
  });

  it('handleBlur sets isFocused = false and fires afterBlur', () => {
    const afterBlur = vi.fn();
    const target = ref<FakeTarget>();
    const { isFocused, handleFocus, handleBlur } = useFocusController(target, {
      afterBlur,
    });

    handleFocus(new FocusEvent('focus'));
    handleBlur(new FocusEvent('blur'));

    expect(isFocused.value).toBe(false);
    expect(afterBlur).toHaveBeenCalledTimes(1);
  });

  it('beforeBlur can veto blur: isFocused stays true and afterBlur is not called', () => {
    const afterBlur = vi.fn();
    const target = ref<FakeTarget>();
    const { isFocused, handleFocus, handleBlur } = useFocusController(target, {
      beforeBlur: () => true,
      afterBlur,
    });

    handleFocus(new FocusEvent('focus'));
    handleBlur(new FocusEvent('blur'));

    expect(isFocused.value).toBe(true);
    expect(afterBlur).not.toHaveBeenCalled();
  });

  it('blur is suppressed when focus moves to an element still contained by wrapperRef', () => {
    const afterBlur = vi.fn();
    const target = ref<FakeTarget>();
    const { wrapperRef, isFocused, handleFocus, handleBlur } =
      useFocusController(target, { afterBlur });

    const wrapperEl = document.createElement('div');
    const innerButton = document.createElement('button');
    wrapperEl.appendChild(innerButton);
    wrapperRef.value = wrapperEl;

    handleFocus(new FocusEvent('focus'));
    handleBlur(new FocusEvent('blur', { relatedTarget: innerButton }));

    expect(isFocused.value).toBe(true);
    expect(afterBlur).not.toHaveBeenCalled();
  });

  // `handleClick` is wired internally onto wrapperRef's native `click`
  // listener (capture phase) and is not part of the public return, matching
  // element-plus's contract. It is exercised here via a real click event.
  it('a click on wrapperRef calls target.focus()', () => {
    const target = ref<FakeTarget>(makeTarget());
    const { wrapperRef } = useFocusController(target);

    const wrapperEl = document.createElement('div');
    wrapperRef.value = wrapperEl;

    wrapperEl.dispatchEvent(new MouseEvent('click'));

    expect(target.value?.focus).toHaveBeenCalledTimes(1);
  });

  it('a click on wrapperRef is a no-op (no throw) when the target ref is empty', () => {
    const target = ref<FakeTarget>();
    const { wrapperRef } = useFocusController(target);

    const wrapperEl = document.createElement('div');
    wrapperRef.value = wrapperEl;

    expect(() =>
      wrapperEl.dispatchEvent(new MouseEvent('click')),
    ).not.toThrow();
  });

  it('a click on wrapperRef does not steal focus when a different focusable element inside it already holds focus', () => {
    const target = ref<FakeTarget>(makeTarget());
    const { wrapperRef } = useFocusController(target);

    const wrapperEl = document.createElement('div');
    const innerButton = document.createElement('button');
    wrapperEl.appendChild(innerButton);
    document.body.appendChild(wrapperEl);
    wrapperRef.value = wrapperEl;

    innerButton.focus();
    expect(document.activeElement).toBe(innerButton);

    wrapperEl.dispatchEvent(new MouseEvent('click'));

    expect(target.value?.focus).not.toHaveBeenCalled();

    document.body.removeChild(wrapperEl);
  });

  it('auto-wires focus/blur listeners onto whatever element is assigned to wrapperRef', () => {
    const afterFocus = vi.fn();
    const afterBlur = vi.fn();
    const target = ref<FakeTarget>();
    const { wrapperRef, isFocused } = useFocusController(target, {
      afterFocus,
      afterBlur,
    });

    const wrapperEl = document.createElement('div');
    wrapperRef.value = wrapperEl;

    wrapperEl.dispatchEvent(new FocusEvent('focus'));
    expect(isFocused.value).toBe(true);
    expect(afterFocus).toHaveBeenCalledTimes(1);

    wrapperEl.dispatchEvent(new FocusEvent('blur'));
    expect(isFocused.value).toBe(false);
    expect(afterBlur).toHaveBeenCalledTimes(1);
  });

  it('marks the bound wrapper element as programmatically focusable (tabindex="-1")', () => {
    const target = ref<FakeTarget>();
    const { wrapperRef } = useFocusController(target);

    const wrapperEl = document.createElement('div');
    wrapperRef.value = wrapperEl;

    expect(wrapperEl.getAttribute('tabindex')).toBe('-1');
  });
});
