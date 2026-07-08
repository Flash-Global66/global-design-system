import { describe, it, expect } from 'vitest';
import { throwError } from '../../src/utils/error.util';

describe('throwError', () => {
  it('throws an Error whose message contains both scope and message', () => {
    expect(() =>
      throwError('useProp', 'must be called inside setup()'),
    ).toThrow(/\[useProp\] must be called inside setup\(\)/);
  });

  it('never returns normally', () => {
    let reached = false;
    try {
      throwError('scope', 'msg');
      reached = true;
    } catch {
      // expected
    }
    expect(reached).toBe(false);
  });
});
