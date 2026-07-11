import { describe, it, expect, afterEach } from 'vitest';
import {
  isClient,
  isElement,
  addClass,
  removeClass,
  hasClass,
  rAF,
  isFocusable,
  getStyle,
  getScrollBarWidth,
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

describe('isFocusable', () => {
  it('returns true for a link with an href', () => {
    const link = document.createElement('a');
    link.setAttribute('href', '/foo');
    expect(isFocusable(link)).toBe(true);
  });

  it('returns false for a link without an href', () => {
    const link = document.createElement('a');
    expect(isFocusable(link)).toBe(false);
  });

  it('returns true for an enabled button', () => {
    expect(isFocusable(document.createElement('button'))).toBe(true);
  });

  it('returns false for a disabled button', () => {
    const button = document.createElement('button');
    button.setAttribute('disabled', '');
    expect(isFocusable(button)).toBe(false);
  });

  it('returns true for a text input', () => {
    const input = document.createElement('input');
    input.type = 'text';
    expect(isFocusable(input)).toBe(true);
  });

  it('returns false for a hidden input', () => {
    const input = document.createElement('input');
    input.type = 'hidden';
    expect(isFocusable(input)).toBe(false);
  });

  it('returns false for a file input', () => {
    const input = document.createElement('input');
    input.type = 'file';
    expect(isFocusable(input)).toBe(false);
  });

  it('returns false for a link with href but rel="ignore"', () => {
    const link = document.createElement('a');
    link.setAttribute('href', '/foo');
    link.setAttribute('rel', 'ignore');
    expect(isFocusable(link)).toBe(false);
  });

  it('returns true for a select element', () => {
    expect(isFocusable(document.createElement('select'))).toBe(true);
  });

  it('returns true for a textarea element', () => {
    expect(isFocusable(document.createElement('textarea'))).toBe(true);
  });

  it('returns true for a plain div with tabindex="0"', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    expect(isFocusable(div)).toBe(true);
  });

  it('returns false for a plain div with no tabindex (defaults to -1)', () => {
    expect(isFocusable(document.createElement('div'))).toBe(false);
  });

  it('returns false for an element explicitly set to tabindex="-1"', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '-1');
    expect(isFocusable(div)).toBe(false);
  });

  it('returns false for an element with aria-disabled="true"', () => {
    const button = document.createElement('button');
    button.setAttribute('aria-disabled', 'true');
    expect(isFocusable(button)).toBe(false);
  });
});

describe('getStyle', () => {
  it('retorna el valor inline cuando el estilo está seteado directamente', () => {
    const el = document.createElement('div');
    el.style.width = '100px';
    expect(getStyle(el, 'width')).toBe('100px');
  });

  it('convierte a camelCase el nombre de la propiedad (ej: "overflow-y" -> "overflowY")', () => {
    const el = document.createElement('div');
    el.style.overflowY = 'scroll';
    expect(getStyle(el, 'overflow-y')).toBe('scroll');
  });

  it('retorna cadena vacía cuando falta el elemento o el nombre de estilo', () => {
    expect(getStyle(null, 'width')).toBe('');
    expect(getStyle(document.createElement('div'), '')).toBe('');
  });
});

describe('getScrollBarWidth', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('retorna un número y no deja el elemento auxiliar en el DOM tras medir (memoiza el resultado)', () => {
    const width = getScrollBarWidth('gui');
    expect(typeof width).toBe('number');
    expect(document.querySelector('.gui-scrollbar__wrap')).toBeNull();
  });
});
