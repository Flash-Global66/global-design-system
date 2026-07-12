import { isClient } from '../utils/dom.util';
import { isArray } from '../utils/array.util';
import { isElement } from '../utils/dom.util';

import type {
  ComponentPublicInstance,
  DirectiveBinding,
  ObjectDirective,
} from 'vue';

/**
 * Portado byte-exact desde la directiva `ClickOutside` de element-plus 2.9.7
 * (`es/directives/click-outside/index.mjs`).
 *
 * Mantiene estado a nivel de módulo (`nodeList`, `startClick`) porque el par
 * `mousedown`/`mouseup` se escucha UNA sola vez a nivel de `document` para
 * toda la app (no por instancia), y cada elemento bindeado registra sus
 * propios handlers en el `Map`. Se usa `mousedown`+`mouseup` (no `click`)
 * para poder distinguir un click real de una selección de texto arrastrada
 * con el mouse que termina fuera del elemento original.
 */
type DocumentHandler = (
  mouseup: MouseEvent,
  mousedown: MouseEvent | undefined,
) => void;
type FlushList = Map<
  HTMLElement,
  {
    documentHandler: DocumentHandler;
    bindingFn: (...args: unknown[]) => unknown;
  }[]
>;

const nodeList: FlushList = new Map();

if (isClient) {
  let startClick: MouseEvent | undefined;
  document.addEventListener('mousedown', (e: MouseEvent) => (startClick = e));
  document.addEventListener('mouseup', (e: MouseEvent) => {
    if (startClick) {
      for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
          documentHandler(e, startClick);
        }
      }
      startClick = undefined;
    }
  });
}

function createDocumentHandler(
  el: HTMLElement,
  binding: DirectiveBinding,
): DocumentHandler {
  let excludes: HTMLElement[] = [];
  if (isArray(binding.arg)) {
    excludes = binding.arg as HTMLElement[];
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg as unknown as HTMLElement);
  }
  return function (mouseup, mousedown) {
    const popperRef = (
      binding.instance as ComponentPublicInstance<{ popperRef: HTMLElement }>
    ).popperRef;
    const mouseUpTarget = mouseup.target as Node;
    const mouseDownTarget = mousedown?.target as Node;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl =
      el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;

    const isTargetExcluded =
      (excludes.length &&
        excludes.some(item => item?.contains(mouseUpTarget))) ||
      (excludes.length && excludes.includes(mouseDownTarget as HTMLElement));
    const isContainedByPopper =
      popperRef &&
      (popperRef.contains(mouseUpTarget) ||
        popperRef.contains(mouseDownTarget));
    if (
      isBound ||
      isTargetExists ||
      isContainedByEl ||
      isSelf ||
      isTargetExcluded ||
      isContainedByPopper
    ) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}

type ClickOutsideHandler = (...args: unknown[]) => unknown;

const ClickOutside: ObjectDirective<HTMLElement, ClickOutsideHandler> = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }

    nodeList.get(el)!.push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }

    const handlers = nodeList.get(el)!;
    const oldHandlerIndex = handlers.findIndex(
      item => item.bindingFn === binding.oldValue,
    );
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    };

    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  },
};

export default ClickOutside;
