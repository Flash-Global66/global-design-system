import { describe, it, expect } from 'vitest';
import {
  isBoolean,
  isString,
  isValidComponentSize,
  isPromise,
  isDate,
  isEmpty,
} from '../../src/utils/validators.util';
import type { ComponentSize } from '../../src/types/component.type';

describe('isBoolean', () => {
  it('returns true for true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('returns true for false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('returns false for a string', () => {
    expect(isBoolean('true')).toBe(false);
  });

  it('returns false for a number', () => {
    expect(isBoolean(0)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  it('narrows type to boolean in TS', () => {
    const val: unknown = true;
    if (isBoolean(val)) {
      // TypeScript should accept this without error
      const _b: boolean = val;
      expect(typeof _b).toBe('boolean');
    }
  });
});

describe('isString', () => {
  it('returns true for a non-empty string', () => {
    expect(isString('hello')).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isString('')).toBe(true);
  });

  it('returns false for a boolean', () => {
    expect(isString(true)).toBe(false);
  });

  it('returns false for a number', () => {
    expect(isString(42)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isString(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });
});

describe('isValidComponentSize', () => {
  it.each(['', 'default', 'small', 'large'])(
    'returns true for the EP-valid value %j',
    val => {
      expect(isValidComponentSize(val)).toBe(true);
    },
  );

  it.each(['medium', 'xl', 'huge'])(
    'returns false for the invalid value %j',
    val => {
      expect(isValidComponentSize(val)).toBe(false);
    },
  );

  it('narrows the type to ComponentSize | "" in TS', () => {
    const val: string = 'default';
    if (isValidComponentSize(val)) {
      // TypeScript should accept this without error
      const _narrowed: ComponentSize | '' = val;
      expect(typeof _narrowed).toBe('string');
    }
  });
});

describe('isPromise', () => {
  it('returns true for a native Promise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });

  it('returns true for a {then, catch}-shaped thenable', () => {
    const thenable = { then: () => {}, catch: () => {} };
    expect(isPromise(thenable)).toBe(true);
  });

  it('returns true for a callable thenable (a function with then/catch attached)', () => {
    const callableThenable = () => {};
    callableThenable.then = () => {};
    callableThenable.catch = () => {};
    expect(isPromise(callableThenable)).toBe(true);
  });

  it('returns false for a plain object', () => {
    expect(isPromise({})).toBe(false);
  });

  it('returns false for null', () => {
    expect(isPromise(null)).toBe(false);
  });

  it('returns false for a function', () => {
    expect(isPromise(() => {})).toBe(false);
  });

  it('returns false for an object missing catch', () => {
    expect(isPromise({ then: () => {} })).toBe(false);
  });
});

describe('isDate', () => {
  it('returns true for a Date instance', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('returns false for a date-like string', () => {
    expect(isDate('2020-01-01')).toBe(false);
  });

  it('returns false for a timestamp number', () => {
    expect(isDate(1577836800000)).toBe(false);
  });

  it('returns false for null and plain objects', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate({})).toBe(false);
  });
});

describe('isEmpty', () => {
  it('treats falsy values other than 0 as empty', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  it('treats 0 as NOT empty', () => {
    expect(isEmpty(0)).toBe(false);
  });

  it('treats an empty array/object as empty and a populated one as not', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('treats a non-empty string as not empty', () => {
    expect(isEmpty('x')).toBe(false);
  });
});
