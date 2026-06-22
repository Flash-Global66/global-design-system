/**
 * CSS output parity test for g-utils SCSS mixins vs element-plus theme-chalk.
 *
 * This test compiles a minimal BEM SCSS snippet using BOTH:
 *   (a) g-utils mixins (with namespace configured to 'gui')
 *   (b) element-plus theme-chalk mixins (with namespace configured to 'gui')
 *
 * The generated CSS selectors MUST be identical.
 *
 * The Sass modern API (compileString) is used so we can supply custom importers
 * without touching the filesystem.
 */
import { describe, it, expect } from 'vitest'
import { compileString } from 'sass'
import { resolve } from 'path'

const ROOT = resolve(__dirname, '../../../')
const G_UTILS_STYLES = resolve(__dirname, '../styles')
const EP_MIXINS = resolve(
  ROOT,
  'node_modules/element-plus/theme-chalk/src/mixins'
)
const EP_COMMON = resolve(
  ROOT,
  'node_modules/element-plus/theme-chalk/src/common'
)

/** Compile SCSS that uses g-utils mixins with $namespace configured to 'gui' */
function compileWithGUtils(scss: string): string {
  const entry = `
    @use 'config' with ($namespace: 'gui');
    @use 'mixins' as *;
    ${scss}
  `
  const result = compileString(entry, {
    loadPaths: [G_UTILS_STYLES],
  })
  return normalizeCSS(result.css)
}

/** Compile SCSS that uses EP mixins with $namespace configured to 'gui' */
function compileWithEP(scss: string): string {
  const entry = `
    @use 'config' with ($namespace: 'gui');
    @use 'mixins' as *;
    ${scss}
  `
  const result = compileString(entry, {
    loadPaths: [EP_MIXINS, EP_COMMON],
  })
  return normalizeCSS(result.css)
}

/** Normalize CSS for comparison: collapse whitespace, remove comments */
function normalizeCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')             // collapse whitespace
    .trim()
}

describe('SCSS BEM mixins parity — g-utils vs element-plus', () => {
  it('b() produces identical root block selector', () => {
    const scss = `@include b('button') { color: red; }`
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })

  it('e() produces identical element selector', () => {
    const scss = `@include b('button') { @include e('content') { display: flex; } }`
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })

  it('m() produces identical modifier selector', () => {
    const scss = `@include b('button') { @include m('variant-primary') { font-weight: bold; } }`
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })

  it('when() produces identical state selector', () => {
    const scss = `@include b('button') { @include when(disabled) { cursor: not-allowed; } }`
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })

  it('combined b/m/e/when produces identical output', () => {
    const scss = `
      @include b('button') {
        color: blue;
        @include m('sm') { font-size: 12px; }
        @include e('icon') { margin: 0; }
        @include when(loading) { cursor: wait; }
      }
    `
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })

  it('nested e inside m produces identical output', () => {
    const scss = `
      @include b('button') {
        @include m('sm') {
          @include e('icon-left') { font-size: 12px; }
        }
      }
    `
    expect(compileWithGUtils(scss)).toBe(compileWithEP(scss))
  })
})

describe('SCSS BEM mixins absolute output verification (namespace=gui)', () => {
  it('b(button) produces .gui-button', () => {
    const scss = `@include b('button') { color: red; }`
    const css = compileWithGUtils(scss)
    expect(css).toContain('.gui-button')
    expect(css).not.toContain('.el-button')
  })

  it('m(variant-primary) inside b(button) produces .gui-button--variant-primary', () => {
    const scss = `@include b('button') { @include m('variant-primary') { font-weight: bold; } }`
    const css = compileWithGUtils(scss)
    expect(css).toContain('.gui-button--variant-primary')
  })

  it('e(content) inside b(button) produces .gui-button__content', () => {
    const scss = `@include b('button') { @include e('content') { display: flex; } }`
    const css = compileWithGUtils(scss)
    expect(css).toContain('.gui-button__content')
  })

  it('when(disabled) inside b(button) produces .gui-button.is-disabled', () => {
    const scss = `@include b('button') { @include when(disabled) { cursor: not-allowed; } }`
    const css = compileWithGUtils(scss)
    expect(css).toContain('.gui-button.is-disabled')
  })
})
