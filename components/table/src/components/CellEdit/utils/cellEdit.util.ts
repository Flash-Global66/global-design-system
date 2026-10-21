import {
  FOCUSABLE_SELECTOR,
  POPPER_SELECTORS,
} from '../constants/cellEdit.constant';

export function focusFirstInput(el: HTMLElement | null | undefined): void {
  if (!el) return;
  const focusable = el.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
  if (focusable && typeof focusable.focus === 'function') {
    focusable.focus();
  }
}

export function isInsidePopper(target: Node): boolean {
  const el = target as HTMLElement;
  return Boolean(el.closest?.(POPPER_SELECTORS));
}
