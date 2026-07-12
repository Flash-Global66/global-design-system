import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  vRepeatClick,
  REPEAT_DELAY,
  REPEAT_INTERVAL,
} from '../../src/directives/repeatClick.directive';
import type { DirectiveBinding } from 'vue';

const mount = (value: DirectiveBinding['value']) => {
  const el = document.createElement('button');
  document.body.appendChild(el);
  vRepeatClick.beforeMount(el, { value } as DirectiveBinding);
  return el;
};

const mousedown = (el: HTMLElement) =>
  el.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

describe('vRepeatClick', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  it('invokes the handler once immediately on left mousedown', () => {
    const handler = vi.fn();
    const el = mount(handler);
    mousedown(el);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('ignores non-left mouse buttons', () => {
    const handler = vi.fn();
    const el = mount(handler);
    el.dispatchEvent(new MouseEvent('mousedown', { button: 2 }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('repeats the handler after the delay, then on each interval', () => {
    const handler = vi.fn();
    const el = mount(handler);
    mousedown(el);
    expect(handler).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(REPEAT_DELAY);
    vi.advanceTimersByTime(REPEAT_INTERVAL * 3);
    expect(handler.mock.calls.length).toBeGreaterThanOrEqual(4);
  });

  it('stops repeating after mouseup', () => {
    const handler = vi.fn();
    const el = mount(handler);
    mousedown(el);
    vi.advanceTimersByTime(REPEAT_DELAY);
    document.dispatchEvent(new MouseEvent('mouseup'));
    const callsAfterStop = handler.mock.calls.length;
    vi.advanceTimersByTime(REPEAT_INTERVAL * 5);
    expect(handler.mock.calls.length).toBe(callsAfterStop);
  });

  it('accepts an options object with a handler and custom timings', () => {
    const handler = vi.fn();
    const el = mount({ handler, interval: 50, delay: 200 });
    mousedown(el);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
