import { nextTick, ref, toValue } from 'vue';
import type { MaybeRefOrGetter } from 'vue';
import type { DragListTexts } from '../types/drag-list.type';
import type {
  AnnounceParams,
  UseLiveAnnouncerReturn,
} from '../types/engine.type';

/**
 * Anunciador para lector de pantalla: interpola el texto y fuerza el re-anuncio.
 */
export function useLiveAnnouncer(
  texts: MaybeRefOrGetter<DragListTexts>,
): UseLiveAnnouncerReturn {
  const message = ref('');

  function interpolate(template: string, params: AnnounceParams): string {
    return template
      .replace(/\{label\}/g, params.label ?? '')
      .replace(/\{position\}/g, String(params.position ?? ''))
      .replace(/\{total\}/g, String(params.total ?? ''));
  }

  function announce(
    key: keyof DragListTexts,
    params: AnnounceParams = {},
  ): void {
    const next = interpolate(toValue(texts)[key], params);
    message.value = '';
    void nextTick(() => {
      message.value = next;
    });
  }

  return { message, announce };
}
