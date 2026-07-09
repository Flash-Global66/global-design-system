import type { Ref } from 'vue';

/** Snapshot de la posición del cursor capturado por `record()`. */
interface CursorSelectionInfo {
  selectionStart: number;
  selectionEnd: number;
  value: string;
  beforeTxt?: string;
  afterTxt?: string;
}

/** Elemento sobre el que `useCursor` opera. */
export type UseCursorTarget = Ref<
  HTMLInputElement | HTMLTextAreaElement | undefined
>;

/** Tupla `[record, restore]` retornada por `useCursor`. */
export type UseCursorReturn = [record: () => void, restore: () => void];

/**
 * Preserva la posición del cursor de un `<input>`/`<textarea>` a través de
 * una reescritura programática de su `value` (ej: al aplicar un
 * `formatter`).
 *
 * Copiado byte a byte del algoritmo `useCursor` de element-plus: `record()`
 * captura la selección + el texto antes/después de ella; `restore()`
 * intenta reubicar el cursor comparando el nuevo valor contra ese snapshot
 * (coincidencia por sufijo, luego por prefijo, luego por búsqueda del
 * último carácter anterior al cursor; si nada coincide, cae al final del
 * valor).
 *
 * @param input - `Ref` al elemento nativo. Ambas funciones son no-op si el
 *   ref está vacío.
 */
export const useCursor = (input: UseCursorTarget): UseCursorReturn => {
  let selectionInfo: CursorSelectionInfo | undefined;

  const record = (): void => {
    if (input.value == null) return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null) return;

    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));

    selectionInfo = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt,
    };
  };

  const restore = (): void => {
    if (input.value == null || selectionInfo == null) return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
    if (beforeTxt == null || afterTxt == null || selectionStart == null) {
      return;
    }

    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  };

  return [record, restore];
};
