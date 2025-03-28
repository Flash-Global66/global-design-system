<template>
  <el-badge v-bind="filteredAttrs">
    <slot />
  </el-badge>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, StyleValue } from 'vue';
import { ElBadge } from 'element-plus';

// TYPES
import { BadgeType } from './badge.type';


export default defineComponent({
  name: 'GBadge',
  components: {
    ElBadge,
  },
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
      default: () => ({})
    },
    /**
     * @description set offset of the badge
     */
    offset: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [0, 0]
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
  setup(props, { emit, slots, attrs }) {
    const filteredAttrs = computed(() => {
      const result = { ...props, ...attrs } as Record<string, unknown>;
      const excludeKeys = [];

      excludeKeys.forEach(key => delete result[key]);

      return result;
    });

    return {
      filteredAttrs,
    }
  }
});</script>
