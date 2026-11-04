import { describe, expect, it, vi } from 'vitest';
import { reactive } from 'vue';
import { LINK_ACTIVATION_KEYS } from '../../src/Link/constants/link.constant';
import { useLink } from '../../src/Link/useLink';
import type { LinkProps } from '../../src/Link/types/link.type';

function setup(overrides: Partial<LinkProps> = {}) {
  const props = reactive({
    type: 'primary',
    size: 'md',
    underline: false,
    disabled: false,
    href: '',
    target: '_self',
    iconLeft: '',
    iconRight: '',
    status: 'default',
    ...overrides,
  }) as LinkProps;
  const emit = vi.fn();
  const link = useLink(props, emit);
  return { props, emit, ...link };
}

function createKeydown(code: string) {
  const element = document.createElement('a');
  const clickSpy = vi.spyOn(element, 'click');
  const event = new KeyboardEvent('keydown', { code, cancelable: true });
  Object.defineProperty(event, 'currentTarget', { value: element });
  return { event, clickSpy };
}

describe('useLink', () => {
  describe('atributos de accesibilidad', () => {
    it('sin href es un botón enfocable', () => {
      const { role, tabindex, ariaDisabled } = setup();
      expect(role.value).toBe('button');
      expect(tabindex.value).toBe(0);
      expect(ariaDisabled.value).toBeUndefined();
    });

    it('sin href y disabled quita tabindex y marca aria-disabled', () => {
      const { role, tabindex, ariaDisabled } = setup({ disabled: true });
      expect(role.value).toBe('button');
      expect(tabindex.value).toBeUndefined();
      expect(ariaDisabled.value).toBe('true');
    });

    it('con href no tiene role ni tabindex', () => {
      const { role, tabindex, ariaDisabled } = setup({ href: '/inicio' });
      expect(role.value).toBeUndefined();
      expect(tabindex.value).toBeUndefined();
      expect(ariaDisabled.value).toBeUndefined();
    });

    it('con href y disabled marca aria-disabled', () => {
      const { role, ariaDisabled } = setup({ href: '/inicio', disabled: true });
      expect(role.value).toBeUndefined();
      expect(ariaDisabled.value).toBe('true');
    });

    it('reacciona al cambio de props', () => {
      const { props, role, tabindex } = setup();
      props.href = '/inicio';
      expect(role.value).toBeUndefined();
      expect(tabindex.value).toBeUndefined();
    });
  });

  describe('handleKeydown', () => {
    it('declara Enter, NumpadEnter y Space como teclas de activación', () => {
      expect(LINK_ACTIVATION_KEYS).toEqual(['Enter', 'NumpadEnter', 'Space']);
    });

    it.each(['Enter', 'NumpadEnter', 'Space'])(
      '%s previene el default y dispara click en el elemento',
      code => {
        const { handleKeydown } = setup();
        const { event, clickSpy } = createKeydown(code);
        handleKeydown(event);
        expect(event.defaultPrevented).toBe(true);
        expect(clickSpy).toHaveBeenCalledTimes(1);
      },
    );

    it('ignora otras teclas', () => {
      const { handleKeydown } = setup();
      const { event, clickSpy } = createKeydown('KeyA');
      handleKeydown(event);
      expect(event.defaultPrevented).toBe(false);
      expect(clickSpy).not.toHaveBeenCalled();
    });

    it('ignora todo si está disabled', () => {
      const { handleKeydown } = setup({ disabled: true });
      const { event, clickSpy } = createKeydown('Space');
      handleKeydown(event);
      expect(event.defaultPrevented).toBe(false);
      expect(clickSpy).not.toHaveBeenCalled();
    });

    it('ignora todo si hay href', () => {
      const { handleKeydown } = setup({ href: '/inicio' });
      const { event, clickSpy } = createKeydown('Space');
      handleKeydown(event);
      expect(event.defaultPrevented).toBe(false);
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('handleClick', () => {
    it('emite click con el MouseEvent', () => {
      const { handleClick, emit } = setup();
      const event = new MouseEvent('click');
      handleClick(event);
      expect(emit).toHaveBeenCalledWith('click', event);
    });

    it('no emite si está disabled', () => {
      const { handleClick, emit } = setup({ disabled: true });
      handleClick(new MouseEvent('click'));
      expect(emit).not.toHaveBeenCalled();
    });
  });
});
