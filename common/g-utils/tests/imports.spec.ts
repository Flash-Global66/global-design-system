/**
 * Smoke test: verifies that all public exports from @flash-global66/g-utils
 * resolve correctly via the workspace package name.
 *
 * This test intentionally imports from the barrel index to exercise the
 * full resolution path (workspace → index.ts → src/*.ts).
 */
import { describe, it, expect } from 'vitest';
import {
  buildProps,
  definePropType,
  withInstall,
  withNoopInstall,
  isBoolean,
  isString,
  debugWarn,
  useNamespace,
  isArray,
  ensureArray,
  isNumber,
  addUnit,
  NOOP,
  isFunction,
  composeEventHandlers,
  isUndefined,
  isPropAbsent,
  hasOwn,
  getProp,
  isClient,
  isElement,
  throwError,
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  EVENT_CODE,
} from '@flash-global66/g-utils';
import { ref } from 'vue';

describe('@flash-global66/g-utils barrel exports', () => {
  it('exports buildProps as a function', () => {
    expect(typeof buildProps).toBe('function');
  });

  it('exports definePropType as a function', () => {
    expect(typeof definePropType).toBe('function');
  });

  it('exports withInstall as a function', () => {
    expect(typeof withInstall).toBe('function');
  });

  it('exports withNoopInstall as a function', () => {
    expect(typeof withNoopInstall).toBe('function');
  });

  it('exports isBoolean as a function', () => {
    expect(typeof isBoolean).toBe('function');
  });

  it('exports isString as a function', () => {
    expect(typeof isString).toBe('function');
  });

  it('exports debugWarn as a function', () => {
    expect(typeof debugWarn).toBe('function');
  });

  it('exports useNamespace as a function', () => {
    expect(typeof useNamespace).toBe('function');
  });

  it('buildProps resolves a prop definition', () => {
    const props = buildProps({
      variant: { type: String, default: 'primary' },
    });
    expect(props.variant).toBeDefined();
  });

  it('useNamespace produces correct class with gui namespace', () => {
    const ns = useNamespace('button', ref('gui'));
    expect(ns.b()).toBe('gui-button');
    expect(ns.e('content')).toBe('gui-button__content');
    expect(ns.m('variant-primary')).toBe('gui-button--variant-primary');
    expect(ns.is('disabled', true)).toBe('is-disabled');
  });

  it('exports the WU-1 array/number/function/object/dom utilities', () => {
    expect(isArray([1])).toBe(true);
    expect(ensureArray(undefined)).toEqual([]);
    expect(isNumber(1)).toBe(true);
    expect(addUnit(1)).toBe('1px');
    expect(typeof NOOP).toBe('function');
    expect(isFunction(NOOP)).toBe(true);
    expect(typeof composeEventHandlers).toBe('function');
    expect(isUndefined(undefined)).toBe(true);
    expect(isPropAbsent(null)).toBe(true);
    expect(hasOwn({ a: 1 }, 'a')).toBe(true);
    expect(getProp({ a: { b: 1 } }, 'a.b').value).toBe(1);
    expect(typeof isClient).toBe('boolean');
    expect(isElement(document.createElement('div'))).toBe(true);
    expect(() => throwError('scope', 'msg')).toThrow();
  });

  it('exports the WU-1 event constants', () => {
    expect(UPDATE_MODEL_EVENT).toBe('update:modelValue');
    expect(CHANGE_EVENT).toBe('change');
    expect(EVENT_CODE.esc).toBe('Escape');
  });
});
