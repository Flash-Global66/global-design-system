/**
 * CSS output verification test for g-utils SCSS BEM mixins.
 *
 * This test used to ALSO live-compile a comparison target against
 * element-plus's own `theme-chalk/src/mixins` source (a one-time parity
 * proof from the `ep-extraction-scss` initiative, confirming g-utils' ported
 * BEM mixins produced byte-identical selectors to EP's originals). That
 * comparison depended on `element-plus` being present in `node_modules` at
 * test-run time.
 *
 * `ep-extraction-v6` WU10 removes `element-plus` as a dependency of this repo
 * entirely, so that live comparison can no longer run — the parity it proved
 * was already established once and is not expected to drift (g-utils no
 * longer imports anything from element-plus for these mixins). The
 * live-EP-comparison describe block was removed here; the assertions below
 * verify g-utils' own mixin output directly (namespace/selector shape),
 * which needs no element-plus source at all.
 *
 * The Sass modern API (compileString) is used so we can supply custom importers
 * without touching the filesystem.
 */
import { describe, it, expect } from 'vitest';
import { compileString } from 'sass';
import { resolve } from 'path';

const G_UTILS_STYLES = resolve(__dirname, '../styles');

/** Compile SCSS that uses g-utils mixins with $namespace configured to 'gui' */
function compileWithGUtils(scss: string): string {
  const entry = `
    @use 'config' with ($namespace: 'gui');
    @use 'mixins' as *;
    ${scss}
  `;
  const result = compileString(entry, {
    loadPaths: [G_UTILS_STYLES],
  });
  return normalizeCSS(result.css);
}

/** Normalize CSS for comparison: collapse whitespace, remove comments */
function normalizeCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ') // collapse whitespace
    .trim();
}

describe('SCSS BEM mixins absolute output verification (namespace=gui)', () => {
  it('b(button) produces .gui-button', () => {
    const scss = `@include b('button') { color: red; }`;
    const css = compileWithGUtils(scss);
    expect(css).toContain('.gui-button');
    expect(css).not.toContain('.el-button');
  });

  it('m(variant-primary) inside b(button) produces .gui-button--variant-primary', () => {
    const scss = `@include b('button') { @include m('variant-primary') { font-weight: bold; } }`;
    const css = compileWithGUtils(scss);
    expect(css).toContain('.gui-button--variant-primary');
  });

  it('e(content) inside b(button) produces .gui-button__content', () => {
    const scss = `@include b('button') { @include e('content') { display: flex; } }`;
    const css = compileWithGUtils(scss);
    expect(css).toContain('.gui-button__content');
  });

  it('when(disabled) inside b(button) produces .gui-button.is-disabled', () => {
    const scss = `@include b('button') { @include when(disabled) { cursor: not-allowed; } }`;
    const css = compileWithGUtils(scss);
    expect(css).toContain('.gui-button.is-disabled');
  });
});
