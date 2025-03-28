<template>
  <el-pagination
    v-bind="{ ...$attrs, ...$props }"
    @update:current-page="(e) => $emit('update:current-page', e)"
    @update:page-size="(e) => $emit('update:page-size', e)"
    @size-change="(e) => $emit('size-change', e)"
    @current-change="(e) => $emit('current-change', e)"
    @prev-click="(e) => $emit('prev-click', e)"
    @next-click="(e) => $emit('next-click', e)"
  />
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import { ElPagination } from "element-plus";

import IconNext from './components/IconNext.vue';
import IconPrev from './components/IconPrev.vue';

type LayoutKey =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | '->'
  | 'total'
  | 'sizes'
  | 'slot';

export default defineComponent({
  name: 'GDialog',
  components: {
    ElPagination,
  },
  emits: ['update:current-page', 'update:page-size', 'size-change', 'current-change', 'prev-click', 'next-click'],
  props: {
    /**
     * @description total item count
     */
    total: Number,
    /**
     * @description options of item count per page
     */
    pageSize: Number,
    /**
     * @description default initial value of page size
     */
    defaultPageSize: Number,
    /**
     * @description current page number
     */
    currentPage: Number,
    /**
     * @description default initial value of current-page
     */
    defaultCurrentPage: Number,
    /**
     * @description total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required
     */
    pageCount: Number,
    /**
     * @description number of pagers. Pagination collapses when the total page count exceeds this value
     */
    pagerCount: {
      type: Number,
      validator: (value: number) => {
        return (
          Number.isInteger(value) &&
          Math.trunc(value) === value &&
          value > 4 &&
          value < 22 &&
          value % 2 === 1
        )
      },
      default: 7,
    },
    /**
     * @description layout of Pagination, elements separated with a comma
     */
    layout: {
      type: String,
      default: (
        ['prev', 'pager', 'next', 'jumper', '->', 'total'] as LayoutKey[]
      ).join(', '),
    },
    /**
     * @description item count of each page
     */
    pageSizes: {
      type: Array as PropType<number[]>,
      default: () => ([10, 20, 30, 40, 50, 100]),
    },
    /**
     * @description custom class name for the page size Select's dropdown
     */
    popperClass: {
      type: String,
      default: '',
    },
    /**
     * @description text for the prev button
     */
    prevText: {
      type: String,
      default: '',
    },
    /**
     * @description icon for the prev button, higher priority of `prev-text`
     */
    prevIcon: {
      type: [String, Object, Function] as PropType<string | Component>,
      default: () => IconPrev,
    },
    /**
     * @description text for the next button
     */
    nextText: {
      type: String,
      default: '',
    },
    /**
     * @description icon for the next button, higher priority of `next-text`
     */
    nextIcon: {
      type: [String, Object, Function] as PropType<string | Component>,
      default: () => IconNext,
    },
    /**
     * @description whether to use small pagination
     */
    small: Boolean,
    /**
     * @description whether the buttons have a background color
     */
    background: Boolean,
    /**
     * @description whether Pagination is disabled
     */
    disabled: Boolean,
    /**
     * @description whether to hide when there's only one page
     */
    hideOnSinglePage: Boolean,
  },
  setup() {

    return {
      IconNext,
      IconPrev
    }
  }
});
</script>
