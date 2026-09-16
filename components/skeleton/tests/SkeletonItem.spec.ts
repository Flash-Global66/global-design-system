import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import SkeletonItem from '../SkeletonItem.vue';
import { SkeletonVariant } from '../skeleton.type';

/**
 * Regression suite for WU3 (ep-extraction-v6): SkeletonItem previously wrapped
 * `ElSkeletonItem` from element-plus. This suite proves:
 *  1. the native `<div>` render (no `element-plus` involved, no `el-skeleton*`
 *     classes leaking without a ConfigProvider — same parity gap WU1/badge found)
 *  2. every `variant` produces the correct `gui-skeleton__{variant}` BEM class
 *  3. the `image` variant renders the same inline SVG glyph the EP icon used
 *     (`PictureFilled`), without importing `@element-plus/icons-vue`
 */
describe('SkeletonItem (render nativo — sin ElSkeletonItem)', () => {
  it('renderiza un <div> nativo con clase gui-skeleton__item, sin clases el-skeleton*', () => {
    const { container } = render(SkeletonItem);
    const root = container.firstElementChild as HTMLElement;
    expect(root.tagName).toBe('DIV');
    expect(root).toHaveClass('gui-skeleton__item');
    expect(root.className).not.toMatch(/el-skeleton/);
  });

  it('usa "text" como variant por defecto', () => {
    const { container } = render(SkeletonItem);
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('gui-skeleton__text');
  });

  it.each([
    ['circle', 'gui-skeleton__circle'],
    ['rect', 'gui-skeleton__rect'],
    ['h1', 'gui-skeleton__h1'],
    ['h3', 'gui-skeleton__h3'],
    ['text', 'gui-skeleton__text'],
    ['caption', 'gui-skeleton__caption'],
    ['p', 'gui-skeleton__p'],
    ['image', 'gui-skeleton__image'],
    ['button', 'gui-skeleton__button'],
  ] as [SkeletonVariant, string][])(
    'variant="%s" produce la clase %s',
    (variant, expectedClass) => {
      const { container } = render(SkeletonItem, { props: { variant } });
      const root = container.firstElementChild as HTMLElement;
      expect(root).toHaveClass('gui-skeleton__item');
      expect(root).toHaveClass(expectedClass);
    },
  );

  it('variant="image" renderiza el mismo glyph SVG que usaba ElSkeletonItem (PictureFilled), sin depender de @element-plus/icons-vue', () => {
    const { container } = render(SkeletonItem, { props: { variant: 'image' } });
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg).toHaveAttribute('viewBox', '0 0 1024 1024');
    const path = svg?.querySelector('path');
    expect(path).toHaveAttribute('fill', 'currentColor');
    expect(path?.getAttribute('d')).toMatch(/^M96 896/);
  });

  it('variants distintas de "image" no renderizan ningun svg', () => {
    const { container } = render(SkeletonItem, { props: { variant: 'text' } });
    expect(container.querySelector('svg')).toBeNull();
  });
});
