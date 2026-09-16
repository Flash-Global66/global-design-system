<template>
  <div class="gui-popover-wrapper">
    <g-tooltip
      ref="tooltipRef"
      :trigger="trigger"
      :placement="placement"
      :disabled="disabled"
      :visible="visible"
      :transition="transition"
      :popper-options="popperOptions"
      :tabindex="tabindex"
      :content="content"
      :offset="offset"
      :show-after="showAfter"
      :hide-after="hideAfter"
      :auto-close="autoClose"
      :show-arrow="showArrow"
      :aria-label="title"
      :effect="effect"
      :enterable="enterable"
      :popper-class="kls"
      :popper-style="style"
      :teleported="teleported"
      :persistent="persistent"
      :gpu-acceleration="gpuAcceleration"
      @update:visible="handleUpdateVisible"
      @before-show="beforeEnter"
      @before-hide="beforeLeave"
      @show="handleShow"
      @hide="handleHide"
    >
      <template #content>
        <!--
          @slot default text content of popover
        -->
        <div v-if="title" :class="ns.e('title')" role="title">
          {{ title }}
        </div>
        <slot>{{ content }}</slot>
      </template>

      <template #default>
        <!--
          @slot reference HTML element that triggers popover
        -->
        <slot name="reference" />
      </template>
    </g-tooltip>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  normalizeClass,
  PropType,
  ref,
  StyleValue,
  unref,
} from 'vue';
import { addUnit, useNamespace } from '@flash-global66/g-utils';
import GTooltip, {
  useTooltipTriggerProps,
  useTooltipContentProps,
} from '@flash-global66/g-tooltip';
import { dropdownProps } from '@flash-global66/g-dropdown';

import type { TooltipInstance } from '@flash-global66/g-tooltip';

type ClassObjectType = Record<string, boolean>;
type ClassType = string | ClassObjectType | ClassType[];

const updateEventKeyRaw = 'onUpdate:visible';

export default defineComponent({
  name: 'GPopover',
  components: {
    GTooltip,
  },
  emits: [
    /**
     * triggers when popover shows
     */
    'show',
    /**
     * triggers when the entering transition before
     */
    'before-enter',
    /**
     * triggers when the entering transition ends
     */
    'after-enter',
    /**
     * triggers when popover hides
     */
    'hide',
    /**
     * triggers when the leaving transition before
     */
    'before-leave',
    /**
     * triggers when the leaving transition ends
     */
    'after-leave',
    /**
     * triggers when the internal visible state settles after closing,
     * keeps `v-model:visible` in sync even when the close was not
     * initiated by the consumer (auto-close, click outside, escape, etc.)
     */
    'update:visible',
  ],
  props: {
    /**
     * how the popover is triggered
     * `click/hover/contextmenu`
     */
    trigger: useTooltipTriggerProps.trigger,
    /**
     * popover placement <br />
     * `top/top-start/top-end` <br />
     * `bottom/bottom-start/bottom-end` <br />
     * `left/left-start/left-end` <br />
     * `right/right-start/right-end`
     */
    placement: dropdownProps.placement,
    /**
     * whether Popover is disabled
     */
    disabled: useTooltipTriggerProps.disabled,
    /**
     * whether popover is visible <br />
     * `visible / v-model:visible`
     */
    visible: useTooltipContentProps.visible,
    /**
     * popover transition animation.
     */
    transition: {
      type: String,
      default: 'gui-fade-in-linear',
    },
    /**
     * parameters for
     * <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a>
     */
    popperOptions: dropdownProps.popperOptions,
    /**
     * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">
     *  tabindex
     * </a> of Popover
     */
    tabindex: dropdownProps.tabindex,
    /**
     * popover content, can be replaced with a default slot
     */
    content: useTooltipContentProps.content,
    /**
     * custom style popper
     */
    popperStyle: {
      type: [String, Array, Object] as PropType<StyleValue>,
    },
    /**
     * custom class name for popover
     */
    popperClass: {
      type: [String, Array, Object] as PropType<ClassType>,
    },
    /**
     * whether popover dropdown is teleported to the body
     */
    teleported: useTooltipContentProps.teleported,
    /**
     * popover title
     */
    title: String,
    /**
     * popover width
     */
    width: {
      type: [String, Number],
      default: 150,
    },
    /**
     * popover offset
     */
    offset: {
      type: Number,
      default: undefined,
    },
    /**
     * delay of appearance, in millisecond
     */
    showAfter: {
      type: Number,
      default: 0,
    },
    /**
     * delay of disappear, in millisecond
     */
    hideAfter: {
      type: Number,
      default: 200,
    },
    /**
     * timeout in milliseconds to hide tooltip
     */
    autoClose: {
      type: Number,
      default: 0,
    },
    /**
     * whether a tooltip arrow is displayed or not.
     */
    showArrow: {
      type: Boolean,
      default: true,
    },
    /**
     * when popover inactive and persistent is false , popover will be destroyed
     */
    persistent: {
      type: Boolean,
      default: true,
    },
    /**
     * whether the popover content is enterable (mouse can move from
     * reference into the content without closing a `hover`-triggered popover)
     */
    enterable: {
      ...useTooltipContentProps.enterable,
      default: true,
    },
    /**
     * popper theme, `light/dark`
     */
    effect: {
      ...useTooltipContentProps.effect,
      default: 'light',
    },
    'onUpdate:visible': {
      type: Function as PropType<(visible: boolean) => void>,
    },
  },
  setup(props, { emit }) {
    const ns = useNamespace('popover');
    const tooltipRef = ref<TooltipInstance>();

    // Captured directly (rather than routed through this component's own
    // `emit`) so it can be re-forwarded verbatim onto the internal
    // `<g-tooltip>`, mirroring element-plus's own real `popover.vue`
    // (`popover2.mjs`), which does the exact same `props[updateEventKeyRaw]`
    // capture-and-forward for the identical reason: `visible` is normally
    // fully managed by the internal tooltip, this component's own
    // `update:visible` emit only needs to fire for the "forced close"
    // case (see `handleHide` below).
    const onUpdateVisible = computed(() => props[updateEventKeyRaw]);
    const handleUpdateVisible = (value: boolean) => {
      onUpdateVisible.value?.(value);
    };

    const popperRef = computed(() => unref(tooltipRef)?.popperRef);

    const style = computed(() => {
      return [
        {
          width: addUnit(props.width),
        },
        props.popperStyle,
      ];
    });

    // `g-tooltip`'s own `tooltip.vue` builds its final `popper-class` via a
    // naive template-string interpolation (`` `${ns.e('tooltip')}
    // ${popperClass ?? ''}` ``) rather than Vue's `normalizeClass` — verified
    // empirically (an array/object here produced a literal
    // "gui-popover,,[object Object]" class). `g-dropdown`'s own real,
    // already-shipped `<g-tooltip>` usage confirms this: it only ever passes
    // a plain string to `popper-class`, never an array/object. Pre-normalize
    // here (matching element-plus's real `popover.vue` shape) before
    // handing it down, instead of passing the raw array/object EP's own
    // source uses.
    const kls = computed(() => {
      return normalizeClass([
        ns.b(),
        props.popperClass,
        { [ns.m('plain')]: !!props.content },
      ]);
    });

    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });

    const hide = () => {
      unref(tooltipRef)?.hide();
    };

    const beforeEnter = () => {
      emit('before-enter');
    };
    const beforeLeave = () => {
      emit('before-leave');
    };
    // `show`/`hide` are the raw tooltip toggle events (carry the original
    // trigger reason/event as payload); `after-enter`/`after-leave` are
    // popover's own element-plus-faithful events (no payload). Both fire
    // together from the same underlying tooltip transition, matching the
    // previous element-plus-wrapped behavior byte-for-byte (confirmed
    // empirically — see tests/Popover.spec.ts).
    const handleShow = (event?: Event) => {
      emit('show', event);
      emit('after-enter');
    };
    const handleHide = (event?: Event) => {
      emit('update:visible', false);
      emit('hide', event);
      emit('after-leave');
    };

    return {
      ns,
      tooltipRef,
      popperRef,
      style,
      kls,
      gpuAcceleration,
      handleUpdateVisible,
      hide,
      beforeEnter,
      beforeLeave,
      handleShow,
      handleHide,
    };
  },
});
</script>
