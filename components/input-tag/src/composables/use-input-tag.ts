import { computed, ref, shallowRef, watch } from 'vue';
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
  NOOP,
} from '@flash-global66/g-utils';
import { useComposition, useFocusController } from '@flash-global66/g-hooks';
import { useFormDisabled } from '@flash-global66/g-form';

import type { ShallowRef } from 'vue';
import type { TooltipInstance } from '@flash-global66/g-tooltip';
import type { FormItemContext } from '@flash-global66/g-form';
import type { InputTagProps } from '../input-tag';

const ensureArray = (value: string | string[]): string[] =>
  Array.isArray(value) ? value : [value];

const getEventCode = (event: KeyboardEvent): string => {
  const code = event.code || event.key;
  return code;
};

const isAndroid = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /android/i.test(navigator.userAgent);
};

interface UseInputTagOptions {
  props: InputTagProps;
  emit: (event: string, ...args: unknown[]) => void;
  formItem?: FormItemContext;
}

export function useInputTag({ props, emit, formItem }: UseInputTagOptions) {
  const disabled = useFormDisabled();
  // GForm does not export `useFormSize`; fall back to local prop with a safe default.
  const size = computed(() => props.size ?? 'default');

  const inputRef: ShallowRef<HTMLInputElement | undefined> = shallowRef();
  const inputValue = ref<string>('');
  const tagTooltipRef = ref<TooltipInstance>();

  const tagSize = computed<'xs' | 'sm' | 'md'>(() => {
    if (size.value === 'small') return 'xs';
    if (size.value === 'large') return 'md';
    return 'sm';
  });
  const placeholder = computed(() => {
    return props.modelValue?.length ? undefined : props.placeholder;
  });
  const closable = computed(() => !(props.readonly || disabled.value));
  const inputLimit = computed(() => {
    if (props.max === undefined || props.max === null) return false;
    const maxValue = props.max as number;
    return (props.modelValue?.length ?? 0) >= maxValue;
  });
  const showTagList = computed(() => {
    if (props.collapseTags) {
      return props.modelValue?.slice(0, props.maxCollapseTags);
    }
    return props.modelValue;
  });
  const collapseTagList = computed(() => {
    if (props.collapseTags) {
      return props.modelValue?.slice(props.maxCollapseTags);
    }
    return [];
  });

  const addTagsEmit = (value: string | string[]) => {
    if (props.readonly || disabled.value) return;
    const current = props.modelValue ?? [];
    const incoming = ensureArray(value);
    const filtered: string[] = [];
    for (const item of incoming) {
      if (!current.includes(item) && !filtered.includes(item)) {
        filtered.push(item);
      }
    }
    if (props.max !== undefined && props.max !== null) {
      const maxInsert = Math.max((props.max as number) - current.length, 0);
      filtered.splice(maxInsert);
    }
    if (!filtered.length) {
      inputValue.value = '';
      return;
    }
    const list = [...current, ...filtered];
    const emitted = filtered.length === 1 ? filtered[0] : filtered;

    emit(UPDATE_MODEL_EVENT, list);
    emit(CHANGE_EVENT, list);
    emit('add-tag', emitted);
    inputValue.value = '';
  };

  const getDelimitedTags = (input: string) => {
    const parts = input.split(props.delimiter as string);
    const tags =
      parts.length > 1 ? parts.map(val => val.trim()).filter(Boolean) : [];
    return tags.length === 1 ? tags[0] : (tags as string | string[]);
  };

  const handlePaste = (event: ClipboardEvent) => {
    const pasted = event.clipboardData?.getData('text');
    if (
      props.readonly ||
      disabled.value ||
      inputLimit.value ||
      !props.delimiter ||
      !pasted
    ) {
      return;
    }
    const target = event.target as HTMLInputElement;
    const { selectionStart, selectionEnd, value } = target;
    const start = selectionStart ?? 0;
    const end = selectionEnd ?? 0;
    const nextValue = value.slice(0, start) + pasted + value.slice(end);
    const tags = getDelimitedTags(nextValue) as string | string[];
    if (Array.isArray(tags) ? tags.length : Boolean(tags)) {
      addTagsEmit(tags);
      emit(INPUT_EVENT, inputValue.value);
      event.preventDefault();
    }
  };

  const handleInput = () => {
    if (inputLimit.value) {
      inputValue.value = '';
      emit(INPUT_EVENT, '');
      return;
    }

    if (isComposing.value) return;
    if (props.delimiter && inputValue.value) {
      const tags = getDelimitedTags(inputValue.value);
      const list = Array.isArray(tags) ? tags : tags ? [tags] : [];
      if (list.length) {
        addTagsEmit(list);
      }
    }
    emit(INPUT_EVENT, inputValue.value);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (isComposing.value) return;
    const code = getEventCode(event);

    switch (code) {
      case props.trigger:
        event.preventDefault();
        event.stopPropagation();
        handleAddTag();
        break;
      case EVENT_CODE.numpadEnter:
        if (props.trigger === EVENT_CODE.enter) {
          event.preventDefault();
          event.stopPropagation();
          handleAddTag();
        }
        break;
      case EVENT_CODE.backspace:
        if (props.readonly || disabled.value) return;
        if (!inputValue.value && props.modelValue?.length) {
          event.preventDefault();
          event.stopPropagation();
          handleRemoveTag(props.modelValue.length - 1);
        }
        break;
    }
  };

  const handleKeyup = (event: KeyboardEvent) => {
    if (isComposing.value || !isAndroid()) return;
    const code = getEventCode(event);

    switch (code) {
      case EVENT_CODE.space:
        if (props.trigger === EVENT_CODE.space) {
          event.preventDefault();
          event.stopPropagation();
          handleAddTag();
        }
        break;
    }
  };

  const handleAddTag = () => {
    if (props.readonly || disabled.value) return;
    const value = inputValue.value?.trim();
    if (!value || inputLimit.value) return;
    addTagsEmit(value);
  };

  const handleRemoveTag = (index: number) => {
    if (props.readonly || disabled.value) return;
    const value = (props.modelValue ?? []).slice();
    const [item] = value.splice(index, 1);

    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
    emit('remove-tag', item, index);
  };

  const handleClear = () => {
    if (props.readonly || disabled.value) return;
    const value: string[] = [];
    inputValue.value = '';
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
    emit(INPUT_EVENT, '');
    emit('clear');
  };

  const handleDragged = (
    draggingIndex: number,
    dropIndex: number,
    type: 'before' | 'after',
  ) => {
    if (props.readonly || disabled.value) return;
    const value = (props.modelValue ?? []).slice();
    const [draggedItem] = value.splice(draggingIndex, 1);
    const step =
      dropIndex > draggingIndex && type === 'before'
        ? -1
        : dropIndex < draggingIndex && type === 'after'
          ? 1
          : 0;

    value.splice(dropIndex + step, 0, draggedItem);
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
    emit('drag-tag', draggingIndex, dropIndex + step, draggedItem);
  };

  const focus = () => {
    inputRef.value?.focus();
  };

  const blur = () => {
    inputRef.value?.blur();
  };

  const handleFocus = (event: FocusEvent) => {
    emit('focus', event);
  };

  const handleBlur = (event: FocusEvent) => {
    emit('blur', event);
  };

  const { wrapperRef, isFocused } = useFocusController(inputRef, {
    beforeBlur(event) {
      // Tooltip may capture focus when expanded; preserve focus inside it.
      const tooltip = tagTooltipRef.value as unknown as
        | {
            isFocusInsideContent?: (e: FocusEvent) => boolean;
          }
        | undefined;
      const guard = tooltip?.isFocusInsideContent;
      return typeof guard === 'function' ? Boolean(guard(event)) : false;
    },
    afterBlur() {
      if (props.saveOnBlur) {
        handleAddTag();
      } else {
        inputValue.value = '';
      }

      if (props.validateEvent) {
        formItem?.validate?.('blur').catch(NOOP);
      }
    },
  });

  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  } = useComposition({ afterComposition: handleInput });

  watch(
    () => props.modelValue,
    () => {
      if (props.validateEvent) {
        formItem?.validate?.(CHANGE_EVENT).catch(NOOP);
      }
    },
  );

  return {
    inputRef,
    wrapperRef,
    tagTooltipRef,
    isFocused,
    isComposing,
    inputValue,
    size,
    tagSize,
    placeholder,
    closable,
    disabled,
    inputLimit,
    showTagList,
    collapseTagList,
    handleDragged,
    handlePaste,
    handleInput,
    handleKeydown,
    handleKeyup,
    handleAddTag,
    handleRemoveTag,
    handleClear,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleFocus,
    handleBlur,
    focus,
    blur,
  };
}
