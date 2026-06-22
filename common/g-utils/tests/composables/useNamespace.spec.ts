import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { useNamespace } from '../../src/composables/useNamespace'

describe('useNamespace', () => {
  describe('b() — block class', () => {
    it('returns the block class with gui namespace', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.b()).toBe('gui-button')
    })

    it('appends blockSuffix when provided', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.b('group')).toBe('gui-button-group')
    })

    it('usa el namespace gui por defecto cuando no se pasa override', () => {
      const ns = useNamespace('button')
      expect(ns.b()).toBe('gui-button')
    })
  })

  describe('e() — element class', () => {
    it('returns element class', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.e('icon-left')).toBe('gui-button__icon-left')
    })

    it('returns empty string when element is undefined', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.e(undefined)).toBe('')
    })

    it('returns content element class', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.e('content')).toBe('gui-button__content')
    })
  })

  describe('m() — modifier class', () => {
    it('returns modifier class', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.m('variant-primary')).toBe('gui-button--variant-primary')
    })

    it('returns sm modifier class', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.m('sm')).toBe('gui-button--sm')
    })

    it('returns md modifier class', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.m('md')).toBe('gui-button--md')
    })

    it('returns empty string when modifier is undefined', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.m(undefined)).toBe('')
    })
  })

  describe('is() — state class', () => {
    it('returns is-disabled when state is true', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('disabled', true)).toBe('is-disabled')
    })

    it('returns empty string when state is false', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('disabled', false)).toBe('')
    })

    it('returns is-loading when state is true', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('loading', true)).toBe('is-loading')
    })

    it('returns is-full when state is true', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('full', true)).toBe('is-full')
    })

    it('returns is-href when state is true', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('href', true)).toBe('is-href')
    })

    it('defaults state to true when not provided', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.is('disabled')).toBe('is-disabled')
    })
  })

  describe('namespace property', () => {
    it('exposes the computed namespace', () => {
      const ns = useNamespace('button', ref('gui'))
      expect(ns.namespace.value).toBe('gui')
    })
  })
})
