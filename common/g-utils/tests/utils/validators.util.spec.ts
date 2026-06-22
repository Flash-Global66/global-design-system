import { describe, it, expect } from 'vitest'
import { isBoolean, isString } from '../../src/utils/validators.util'

describe('isBoolean', () => {
  it('returns true for true', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('returns true for false', () => {
    expect(isBoolean(false)).toBe(true)
  })

  it('returns false for a string', () => {
    expect(isBoolean('true')).toBe(false)
  })

  it('returns false for a number', () => {
    expect(isBoolean(0)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false)
  })

  it('narrows type to boolean in TS', () => {
    const val: unknown = true
    if (isBoolean(val)) {
      // TypeScript should accept this without error
      const _b: boolean = val
      expect(typeof _b).toBe('boolean')
    }
  })
})

describe('isString', () => {
  it('returns true for a non-empty string', () => {
    expect(isString('hello')).toBe(true)
  })

  it('returns true for empty string', () => {
    expect(isString('')).toBe(true)
  })

  it('returns false for a boolean', () => {
    expect(isString(true)).toBe(false)
  })

  it('returns false for a number', () => {
    expect(isString(42)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isString(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isString(undefined)).toBe(false)
  })
})
