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
});
