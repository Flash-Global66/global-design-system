import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { defineComponent, nextTick } from 'vue';
import { render } from '@testing-library/vue';
import Skeleton from '../Skeleton.vue';
import SkeletonItem from '../SkeletonItem.vue';

/**
 * Regression suite for WU3 (ep-extraction-v6): Skeleton previously wrapped
 * `ElSkeleton` from element-plus. This suite proves:
 *  1. the native `<div>` render (no `element-plus` involved, no `el-skeleton*`
 *     classes leaking without a ConfigProvider — same parity gap WU1/badge found)
 *  2. `loading`/`count`/`rows`/`animated`/`throttle` behave exactly like EP's
 *     own `ElSkeleton` (defaults: animated=false, count=1, rows=3, loading=true)
 *  3. the default slot renders instead of the skeleton items when not loading
 */
describe('Skeleton (render nativo — sin ElSkeleton)', () => {
  it('loading=true (default) renderiza un <div> nativo con clase gui-skeleton, sin clases el-skeleton*', () => {
    const { container } = render(Skeleton);
    const root = container.firstElementChild as HTMLElement;
    expect(root.tagName).toBe('DIV');
    expect(root).toHaveClass('gui-skeleton');
    expect(root.className).not.toMatch(/el-skeleton/);
  });

  it('con los valores por defecto (count=1, rows=3) renderiza 1 item "first" + 3 items "paragraph"', () => {
    const { container } = render(Skeleton);
    const items = container.querySelectorAll('.gui-skeleton__item');
    // 1 "first" p-item + 3 paragraph p-items per count iteration (count defaults to 1)
    expect(items.length).toBe(4);
    expect(container.querySelectorAll('.is-first').length).toBe(1);
  });

  it('la ultima fila (rows > 1) recibe la clase is-last', () => {
    const { container } = render(Skeleton, { props: { rows: 2 } });
    const paragraphItems = container.querySelectorAll(
      '.gui-skeleton__paragraph',
    );
    expect(paragraphItems.length).toBe(2);
    expect(paragraphItems[paragraphItems.length - 1]).toHaveClass('is-last');
    expect(paragraphItems[0]).not.toHaveClass('is-last');
  });

  it('rows=1 no marca ningun item paragraph como is-last (EP solo marca last cuando rows > 1)', () => {
    const { container } = render(Skeleton, { props: { rows: 1 } });
    const paragraphItems = container.querySelectorAll(
      '.gui-skeleton__paragraph',
    );
    expect(paragraphItems.length).toBe(1);
    expect(paragraphItems[0]).not.toHaveClass('is-last');
  });

  it('count=2 duplica el bloque completo de items (1 first + rows paragraph) por cada count', () => {
    const { container } = render(Skeleton, { props: { count: 2, rows: 2 } });
    const items = container.querySelectorAll('.gui-skeleton__item');
    // count(2) * (1 first + 2 paragraph) = 6
    expect(items.length).toBe(6);
    expect(container.querySelectorAll('.is-first').length).toBe(2);
  });

  it('animated=true agrega la clase is-animated al root', () => {
    const { container } = render(Skeleton, { props: { animated: true } });
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('is-animated');
  });

  it('animated=false (default) no agrega la clase is-animated', () => {
    const { container } = render(Skeleton);
    const root = container.firstElementChild as HTMLElement;
    expect(root).not.toHaveClass('is-animated');
  });

  it('loading=false renderiza el slot default en lugar de los skeleton items', () => {
    const { container, getByText } = render(Skeleton, {
      props: { loading: false },
      slots: { default: 'contenido real' },
    });
    expect(getByText('contenido real')).toBeInTheDocument();
    expect(container.querySelectorAll('.gui-skeleton__item').length).toBe(0);
  });

  it('el slot "template" reemplaza el template por defecto de los items', () => {
    const { getByTestId } = render(Skeleton, {
      slots: { template: '<div data-testid="custom-template" />' },
    });
    expect(getByTestId('custom-template')).toBeInTheDocument();
  });

  it('renderiza componentes SkeletonItem reales (mismo Symbol/registro de variant="p")', () => {
    const Wrapper = defineComponent({
      components: { Skeleton, SkeletonItem },
      template: '<Skeleton />',
    });
    const { container } = render(Wrapper);
    const first = container.querySelector(
      '.gui-skeleton__item.gui-skeleton__p',
    );
    expect(first).toBeTruthy();
  });

  describe('throttle', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('throttle=0 (default) refleja loading inmediatamente, sin delay', () => {
      const { container } = render(Skeleton, {
        props: { loading: true, throttle: 0 },
      });
      expect(
        container.querySelectorAll('.gui-skeleton__item').length,
      ).toBeGreaterThan(0);
    });

    it('throttle > 0 retrasa la transicion a loading=true tras el mount', async () => {
      const { container } = render(Skeleton, {
        props: { loading: true, throttle: 200 },
      });
      // immediately after mount, still not flipped (initVal defaults to false)
      expect(container.querySelectorAll('.gui-skeleton__item').length).toBe(0);

      vi.advanceTimersByTime(200);
      await nextTick();
      expect(
        container.querySelectorAll('.gui-skeleton__item').length,
      ).toBeGreaterThan(0);
    });

    it('acepta la forma objeto { leading, trailing, initVal } sin disparar el warning de Vue "Invalid prop"', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Skeleton, {
        props: {
          loading: true,
          throttle: { leading: 50, trailing: 50, initVal: false },
        },
      });

      const invalidPropWarning = warnSpy.mock.calls.some(call =>
        call.some(
          arg => typeof arg === 'string' && arg.includes('Invalid prop'),
        ),
      );
      expect(invalidPropWarning).toBe(false);

      warnSpy.mockRestore();
    });
  });
});
