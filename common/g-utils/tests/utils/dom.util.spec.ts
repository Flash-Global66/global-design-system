import { describe, it, expect } from 'vitest';
import {
  isClient,
  isElement,
  addClass,
  removeClass,
  hasClass,
  rAF,
} from '../../src/utils/dom.util';

describe('isClient', () => {
  it('is a boolean, safe to evaluate without throwing (SSR-safe)', () => {
    expect(typeof isClient).toBe('boolean');
  });

  it('is true in this jsdom test environment', () => {
    expect(isClient).toBe(true);
  });
});

describe('isElement', () => {
  it('returns true for DOM elements', () => {
    expect(isElement(document.createElement('div'))).toBe(true);
  });

  it('returns false for non-elements', () => {
    expect(isElement({})).toBe(false);
    expect(isElement(null)).toBe(false);
  });
});

describe('class helpers', () => {
  it('addClass adds one or more space-separated classes', () => {
    const el = document.createElement('div');
    addClass(el, 'foo bar');
    expect(el.classList.contains('foo')).toBe(true);
    expect(el.classList.contains('bar')).toBe(true);
  });

  it('removeClass removes classes', () => {
    const el = document.createElement('div');
    el.className = 'foo bar';
    removeClass(el, 'foo');
    expect(el.classList.contains('foo')).toBe(false);
    expect(el.classList.contains('bar')).toBe(true);
  });

  it('hasClass detects a single class', () => {
    const el = document.createElement('div');
    el.className = 'foo';
    expect(hasClass(el, 'foo')).toBe(true);
    expect(hasClass(el, 'bar')).toBe(false);
  });

  it('hasClass throws when given a class string containing spaces', () => {
    const el = document.createElement('div');
    expect(() => hasClass(el, 'foo bar')).toThrow();
  });

  it('is a no-op on null elements', () => {
    expect(() => addClass(null, 'foo')).not.toThrow();
    expect(() => removeClass(null, 'foo')).not.toThrow();
    expect(hasClass(null, 'foo')).toBe(false);
  });
});

describe('rAF', () => {
  it('schedules the callback and eventually invokes it', async () => {
    await new Promise<void>(resolve => {
      rAF(() => resolve());
    });
  });
});
