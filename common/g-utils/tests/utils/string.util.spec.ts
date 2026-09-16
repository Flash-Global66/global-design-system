import { describe, it, expect } from 'vitest';
import { escapeStringRegexp } from '../../src/utils/string.util';

describe('escapeStringRegexp', () => {
  it('escapa los caracteres especiales de regex', () => {
    expect(escapeStringRegexp('a.b*c?')).toBe('a\\.b\\*c\\?');
    expect(escapeStringRegexp('[test]')).toBe('\\[test\\]');
    expect(escapeStringRegexp('(group)')).toBe('\\(group\\)');
    expect(escapeStringRegexp('a|b')).toBe('a\\|b');
    expect(escapeStringRegexp('{a}')).toBe('\\{a\\}');
    expect(escapeStringRegexp('a$b^c')).toBe('a\\$b\\^c');
    expect(escapeStringRegexp('a+b')).toBe('a\\+b');
  });

  it('escapa el guion como \\x2d (no como clase de caracteres)', () => {
    expect(escapeStringRegexp('a-b')).toBe('a\\x2db');
  });

  it('retorna cadena vacía escapada cuando no se pasa argumento', () => {
    expect(escapeStringRegexp()).toBe('');
  });

  it('deja intactos los caracteres normales', () => {
    expect(escapeStringRegexp('hello world')).toBe('hello world');
  });

  it('el resultado es usable como patrón de RegExp válido', () => {
    const pattern = escapeStringRegexp('a.b(c)');
    expect(() => new RegExp(pattern)).not.toThrow();
    expect(new RegExp(pattern).test('a.b(c)')).toBe(true);
    expect(new RegExp(pattern).test('aXb-c-')).toBe(false);
  });
});
