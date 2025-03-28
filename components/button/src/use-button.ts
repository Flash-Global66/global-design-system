import { computed, ref } from "vue";
import type { SetupContext } from "vue";
import { useFormItem } from '@flash-global66/g-form/index.js';
import { ButtonEmits, ButtonProps } from "./button";
import { useRipple } from "./use-ripple";

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>["emit"]) => {
  const _disabled = computed(() => props.disabled);
  const _ref = ref<HTMLElement>();
  const { form } = useFormItem();
  const { ripples, handleRipple, removeRipple } = useRipple(() => _disabled.value || props.loading);

  const componentId = computed(() => (!props.href ? "button" : "a"));

  const _props = computed(() => {
    if (!props.href) {
      return {
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.typeNative,
      };
    }
    return {};
  });

  const allAttrs = computed(() => ({
    ..._props.value,
    "aria-disabled": props.disabled,
    "aria-busy": props.loading,
    "aria-label": props.ariaLabel,
    role: props.href ? "link" : "button",
    ...(props.href
      ? { href: props.href, target: props.target, download: props.download }
      : { type: props.typeNative, autofocus: props.autofocus }),
    onClick: handleClick,
    onMousedown: handleMouseDown,
    onPointerdown: handleRipple,
    onKeydown: [
      (e: KeyboardEvent) => e.key === " " && (e.preventDefault(), handleClick(e as any)),
      (e: KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), handleClick(e as any)),
    ],
  }));

  const handleClick = (evt: MouseEvent) => {
    if (_disabled.value || props.loading) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }
    if (props.typeNative === "reset") {
      form?.resetFields();
    }
    emit("click", evt);
  };

  const handleMouseDown = (evt: MouseEvent) => {
    if (_disabled.value || props.loading) {
      evt.preventDefault();
      return;
    }
    emit("mousedown", evt);
  };

  const shouldShowLeftIcon = computed(() => Boolean(props.iconLeft));
  const shouldShowRightIcon = computed(() => Boolean(props.iconRight));

  return {
    _ref,
    _disabled,
    _props,
    handleClick,
    handleMouseDown,
    shouldShowLeftIcon,
    shouldShowRightIcon,
    componentId,
    ripples,
    handleRipple,
    removeRipple,
    allAttrs,
  };
};

