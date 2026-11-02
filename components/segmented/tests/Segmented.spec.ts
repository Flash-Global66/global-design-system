import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { fireEvent, render, screen } from '@testing-library/vue';
import Segmented from '../src/Segmented.vue';
import type { OptionSegmented } from '../src/segmented.type';

const OPTIONS: OptionSegmented[] = ['uno', 'dos', 'tres'].map(label => ({
  label,
  value: label,
}));
const SELECTED_CLASS = 'is-selected';
const INDICATOR_SELECTOR = '.gui-segmented__item-selected';

interface ItemLayout {
  width: number;
  height: number;
  offsetLeft: number;
  offsetTop: number;
}

function isSelectedItem(element: Element) {
  return element.classList.contains(SELECTED_CLASS);
}

function mockSelectedItemLayout(layout: ItemLayout) {
  vi.spyOn(HTMLElement.prototype, 'offsetLeft', 'get').mockImplementation(
    function (this: HTMLElement) {
      return isSelectedItem(this) ? layout.offsetLeft : 0;
    },
  );
  vi.spyOn(HTMLElement.prototype, 'offsetTop', 'get').mockImplementation(
    function (this: HTMLElement) {
      return isSelectedItem(this) ? layout.offsetTop : 0;
    },
  );
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
    function (this: Element) {
      const isSelected = isSelectedItem(this);
      return {
        width: isSelected ? layout.width : 0,
        height: isSelected ? layout.height : 0,
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        toJSON: () => ({}),
      } as DOMRect;
    },
  );
}

async function renderSelecting(value: string) {
  const view = render(Segmented, {
    props: { options: OPTIONS, modelValue: OPTIONS[0].value },
  });
  await view.rerender({ modelValue: value });
  await nextTick();
  const indicator = view.container.querySelector(
    INDICATOR_SELECTOR,
  ) as HTMLElement;
  return { ...view, indicator };
}

describe('GSegmented', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('el indicador toma el alto del ítem seleccionado y se mueve en X e Y cuando el ítem está apilado', async () => {
    mockSelectedItemLayout({
      width: 120,
      height: 44,
      offsetLeft: 0,
      offsetTop: 48,
    });

    const { indicator } = await renderSelecting('dos');

    expect(indicator.style.width).toBe('120px');
    expect(indicator.style.height).toBe('44px');
    expect(indicator.style.transform).toBe('translate(0px, 48px)');
  });

  it('el indicador sigue moviéndose en X cuando los ítems van en fila', async () => {
    mockSelectedItemLayout({
      width: 100,
      height: 40,
      offsetLeft: 104,
      offsetTop: 0,
    });

    const { indicator } = await renderSelecting('dos');

    expect(indicator.style.width).toBe('100px');
    expect(indicator.style.height).toBe('40px');
    expect(indicator.style.transform).toBe('translate(104px, 0px)');
  });

  it('elegir una opción emite update:modelValue y change con su valor', async () => {
    const { emitted } = render(Segmented, {
      props: { options: OPTIONS, modelValue: OPTIONS[0].value },
    });

    await fireEvent.click(screen.getByText('tres'));

    expect(emitted()['update:modelValue']).toEqual([['tres']]);
    expect(emitted().change).toEqual([['tres']]);
  });
});
