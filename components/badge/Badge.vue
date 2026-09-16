<template>
  <div :class="ns.b()">
    <slot />
    <transition :name="`${ns.namespace.value}-zoom-in-center`">
      <sup
        v-show="!hidden && (content || isDot || !!$slots.content)"
        :class="contentClasses"
        :style="contentStyle"
      >
        <slot name="content" :value="content">{{ content }}</slot>
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, StyleValue } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';

// TYPES
import { BadgeType } from './badge.type';

const addUnit = (value: number, defaultUnit = 'px'): string =>
  value ? `${value}${defaultUnit}` : '';

export default defineComponent({
  name: 'GBadge',
  props: {
    /**
     * @description display value.
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
     */
    max: {
      type: Number,
      default: 99,
    },
    /**
     * @description if a little dot is displayed.
     */
    isDot: Boolean,
    /**
     * @description hidden badge.
     */
    hidden: Boolean,
    /**
     * @description badge type.
     */
    type: {
      type: String as PropType<BadgeType>,
      default: 'danger',
    },
    /**
     * @description whether to show badge when value is zero.
     */
    showZero: {
      type: Boolean,
      default: true,
    },
    /**
     * @description customize dot background color
     */
    color: String,
    /**
     * @description CSS style of badge
     */
    badgeStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
      default: () => ({}),
    },
    /**
     * @description set offset of the badge
     */
    offset: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [0, 0],
    },
    /**
     * @description custom class name of badge
     */
    badgeClass: {
      type: String,
    },
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change',
    'visible-change',
    'remove-tag',
    'clear',
    'blur',
    'focus',
  ],
  setup(props, { slots }) {
    const ns = useNamespace('badge');

    const content = computed(() => {
      if (props.isDot) return '';

      const { value, max } = props;
      const isNumericValue = typeof value === 'number';
      const isNumericMax = typeof max === 'number';

      if (isNumericValue && isNumericMax) {
        return max < value ? `${max}+` : `${value}`;
      }

      return `${value}`;
    });

    const contentClasses = computed(() => [
      ns.e('content'),
      ns.em('content', props.type),
      ns.is('fixed', !!slots.default),
      ns.is('dot', props.isDot),
      ns.is('hide-zero', !props.showZero && props.value === 0),
      props.badgeClass,
    ]);

    const contentStyle = computed(() => {
      const [offsetX, offsetY] = props.offset;

      return [
        {
          backgroundColor: props.color,
          marginRight: addUnit(-offsetX),
          marginTop: addUnit(offsetY),
        },
        props.badgeStyle ?? {},
      ];
    });

    return {
      ns,
      content,
      contentClasses,
      contentStyle,
    };
  },
});
</script>
