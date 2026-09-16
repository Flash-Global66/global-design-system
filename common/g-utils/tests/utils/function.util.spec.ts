import { describe, it, expect, vi } from 'vitest';
import {
  NOOP,
  isFunction,
  composeEventHandlers,
  whenMouse,
} from '../../src/utils/function.util';

describe('NOOP', () => {
  it('is callable and returns undefined', () => {
    expect(NOOP()).toBeUndefined();
  });
});

describe('isFunction', () => {
  it('returns true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(NOOP)).toBe(true);
  });

  it('returns false for non-functions', () => {
    expect(isFunction('fn')).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
});

describe('composeEventHandlers', () => {
  it('calls both handlers in order when theirsHandler does not prevent the event', () => {
    // NOTE: handlers intentionally return `undefined` (not the `push()`
    // result, which is a truthy length) — a truthy return means "prevented".
    const calls: string[] = [];
    const handler = composeEventHandlers<Event>(
      () => {
        calls.push('theirs');
      },
      () => {
        calls.push('ours');
      },
    );
    handler({} as Event);
    expect(calls).toEqual(['theirs', 'ours']);
  });

  it('skips oursHandler when theirsHandler returns a truthy (defaultPrevented) value', () => {
    const ours = vi.fn();
    const handler = composeEventHandlers<Event>(() => true, ours);
    handler({} as Event);
    expect(ours).not.toHaveBeenCalled();
  });

  it('always calls oursHandler when checkForDefaultPrevented is false', () => {
    const ours = vi.fn();
    const handler = composeEventHandlers<Event>(() => true, ours, {
      checkForDefaultPrevented: false,
    });
    handler({} as Event);
    expect(ours).toHaveBeenCalledTimes(1);
  });

  it('tolerates missing handlers', () => {
    const handler = composeEventHandlers<Event>(undefined, undefined);
    expect(() => handler({} as Event)).not.toThrow();
  });
});

describe('whenMouse', () => {
  it('invokes the handler for mouse pointer events', () => {
    const inner = vi.fn(() => 'ok');
    const wrapped = whenMouse(inner);
    const event = { pointerType: 'mouse' } as PointerEvent;
    const result = wrapped(event);
    expect(inner).toHaveBeenCalledWith(event);
    expect(result).toBe('ok');
  });

  it('ignores touch pointer events (returns undefined, does not call the handler)', () => {
    const inner = vi.fn();
    const wrapped = whenMouse(inner);
    const result = wrapped({ pointerType: 'touch' } as PointerEvent);
    expect(inner).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('ignores pen pointer events', () => {
    const inner = vi.fn();
    const wrapped = whenMouse(inner);
    wrapped({ pointerType: 'pen' } as PointerEvent);
    expect(inner).not.toHaveBeenCalled();
  });
});
