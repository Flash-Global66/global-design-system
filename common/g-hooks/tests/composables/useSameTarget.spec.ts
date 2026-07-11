import { describe, it, expect, vi } from 'vitest';
import { useSameTarget } from '../../src/composables/useSameTarget';

const makeMouseEvent = (
  target: EventTarget,
  currentTarget: EventTarget,
): MouseEvent => {
  const event = new MouseEvent('click');
  Object.defineProperty(event, 'target', { value: target });
  Object.defineProperty(event, 'currentTarget', { value: currentTarget });
  return event;
};

describe('useSameTarget', () => {
  it('returns NOOP handlers for click/mousedown/mouseup when no handler is provided', () => {
    const { onClick, onMousedown, onMouseup } = useSameTarget(undefined);

    expect(() => onClick(makeMouseEvent(document, document))).not.toThrow();
    expect(() => onMousedown(makeMouseEvent(document, document))).not.toThrow();
    expect(() => onMouseup(makeMouseEvent(document, document))).not.toThrow();
  });

  it('invokes the handler when mousedown and mouseup/click both target the currentTarget', () => {
    const handler = vi.fn();
    const container = document.createElement('div');
    const { onClick, onMousedown, onMouseup } = useSameTarget(handler);

    onMousedown(makeMouseEvent(container, container));
    onMouseup(makeMouseEvent(container, container));
    onClick(makeMouseEvent(container, container));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does NOT invoke the handler when mousedown started on a different target (drag-selection guard)', () => {
    const handler = vi.fn();
    const container = document.createElement('div');
    const child = document.createElement('span');
    const { onClick, onMousedown, onMouseup } = useSameTarget(handler);

    onMousedown(makeMouseEvent(child, container));
    onMouseup(makeMouseEvent(container, container));
    onClick(makeMouseEvent(container, container));

    expect(handler).not.toHaveBeenCalled();
  });

  it('does NOT invoke the handler when mouseup landed on a different target', () => {
    const handler = vi.fn();
    const container = document.createElement('div');
    const child = document.createElement('span');
    const { onClick, onMousedown, onMouseup } = useSameTarget(handler);

    onMousedown(makeMouseEvent(container, container));
    onMouseup(makeMouseEvent(child, container));
    onClick(makeMouseEvent(container, container));

    expect(handler).not.toHaveBeenCalled();
  });

  it('resets the same-target flags after each click, requiring a fresh mousedown+mouseup pair', () => {
    const handler = vi.fn();
    const container = document.createElement('div');
    const { onClick, onMousedown, onMouseup } = useSameTarget(handler);

    onMousedown(makeMouseEvent(container, container));
    onMouseup(makeMouseEvent(container, container));
    onClick(makeMouseEvent(container, container));
    expect(handler).toHaveBeenCalledTimes(1);

    // Second click without a preceding mousedown/mouseup pair must NOT fire.
    onClick(makeMouseEvent(container, container));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
