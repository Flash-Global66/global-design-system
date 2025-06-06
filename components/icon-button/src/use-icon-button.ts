import { computed, ref } from "vue";
import type { SetupContext } from "vue";
import { useFormItem } from "element-plus";
import { IconButtonEmits, IconButtonProps } from "./icon-button";
import { useRipple } from "./use-ripple";

export const useIconButton = (props: IconButtonProps, emit: SetupContext<IconButtonEmits>["emit"]) => {
  const _disabled = computed(() => props.disabled);
  const _ref = ref<HTMLElement>();
  const { form } = useFormItem();
  const { ripples, handleRipple, removeRipple } = useRipple(() => _disabled.value);

  const componentId = computed(() => (!props.href ? "button" : "a"));

  const _props = computed(() => {
    if (!props.href) {
      return {
        disabled: _disabled.value,
        autofocus: props.autofocus,
        type: props.type,
      };
    }
    return {};
  });

  const allAttrs = computed(() => ({
    ..._props.value,
    "aria-disabled": props.disabled,
    role: props.href ? "link" : "button",
    ...(props.href
      ? { href: props.href, target: props.target, download: props.download }
      : { autofocus: props.autofocus }),
    onClick: handleClick,
    onMousedown: handleMouseDown,
    onPointerdown: handleRipple,
    onKeydown: [
      (e: KeyboardEvent) => e.key === " " && (e.preventDefault(), handleClick(e as any)),
      (e: KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), handleClick(e as any)),
    ],
  }));

  const handleClick = (evt: MouseEvent) => {
    if (_disabled.value) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }
    emit("click", evt);
  };

  const handleMouseDown = (evt: MouseEvent) => {
    if (_disabled.value) {
      evt.preventDefault();
      return;
    }
    emit("mousedown", evt);
  };

  return {
    _ref,
    _disabled,
    _props,
    handleClick,
    handleMouseDown,
    ripples,
    handleRipple,
    removeRipple,
    componentId,
    allAttrs,
  };
};

