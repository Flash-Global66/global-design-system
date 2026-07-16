<template>
  <div
    ref="tableWrapper"
    :class="[
      {
        [ns.m('fit')]: fit,
        [ns.m('striped')]: stripe,
        [ns.m('border')]: border || isGroup,
        [ns.m('hidden')]: isHidden,
        [ns.m('group')]: isGroup,
        [ns.m('fluid-height')]: maxHeight,
        [ns.m('scrollable-x')]: layout.scrollX.value,
        [ns.m('scrollable-y')]: layout.scrollY.value,
        [ns.m('enable-row-hover')]: !store.states.isComplex.value,
        [ns.m('enable-row-transition')]:
          (store.states.data.value || []).length !== 0 &&
          (store.states.data.value || []).length < 100,
        'has-footer': showSummary
      },
      ns.m(tableSize),
      className,
      ns.b(),
      ns.m(`layout-${tableLayout}`)
    ]"
    :style="style"
    :data-prefix="ns.namespace.value"
    @mouseleave="handleMouseLeave"
  >
    <div :class="ns.e('inner-wrapper')">
      <div ref="hiddenColumns" class="hidden-columns">
        <slot />
      </div>
      <div
        v-if="showHeader && tableLayout === 'fixed'"
        ref="headerWrapper"
        v-mousewheel="handleHeaderFooterMousewheel"
        :class="ns.e('header-wrapper')"
      >
        <table
          ref="tableHeader"
          :class="ns.e('header')"
          :style="tableBodyStyles"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          <hColgroup :columns="store.states.columns.value" :table-layout="tableLayout" />
          <table-header
            ref="tableHeaderRef"
            :border="border"
            :default-sort="defaultSort"
            :store="store"
            :append-filter-panel-to="appendFilterPanelTo"
            :allow-drag-last-column="allowDragLastColumn"
            @set-drag-visible="setDragVisible"
          />
        </table>
      </div>
      <div ref="bodyWrapper" :class="ns.e('body-wrapper')">
        <g-scrollbar
          ref="scrollBarRef"
          :view-style="scrollbarViewStyle"
          :wrap-style="scrollbarStyle"
          :always="scrollbarAlwaysOn"
          :tabindex="scrollbarTabindex"
          @scroll="$emit('scroll', $event)"
        >
          <table
            ref="tableBody"
            :class="ns.e('body')"
            cellspacing="0"
            cellpadding="0"
            border="0"
            :style="{
              width: bodyWidth,
              tableLayout
            }"
          >
            <hColgroup :columns="store.states.columns.value" :table-layout="tableLayout" />
            <table-header
              v-if="showHeader && tableLayout === 'auto'"
              ref="tableHeaderRef"
              :class="ns.e('body-header')"
              :border="border"
              :default-sort="defaultSort"
              :store="store"
              :append-filter-panel-to="appendFilterPanelTo"
              @set-drag-visible="setDragVisible"
            />
            <table-body
              :context="context"
              :highlight="highlightCurrentRow"
              :row-class-name="rowClassName"
              :tooltip-effect="tooltipEffect"
              :tooltip-options="tooltipOptions"
              :row-style="rowStyle"
              :store="store"
              :stripe="stripe"
            />
            <table-footer
              v-if="showSummary && tableLayout === 'auto'"
              :class="ns.e('body-footer')"
              :border="border"
              :default-sort="defaultSort"
              :store="store"
              :sum-text="computedSumText"
              :summary-method="summaryMethod"
            />
          </table>
          <div
            v-if="isEmpty"
            ref="emptyBlock"
            :style="emptyBlockStyle"
            :class="ns.e('empty-block')"
          >
            <span :class="ns.e('empty-text')">
              <slot name="empty">{{ computedEmptyText }}</slot>
            </span>
          </div>
          <div v-if="$slots.append" ref="appendWrapper" :class="ns.e('append-wrapper')">
            <slot name="append" />
          </div>
        </g-scrollbar>
      </div>
      <div
        v-if="showSummary && tableLayout === 'fixed'"
        v-show="!isEmpty"
        ref="footerWrapper"
        v-mousewheel="handleHeaderFooterMousewheel"
        :class="ns.e('footer-wrapper')"
      >
        <table
          :class="ns.e('footer')"
          cellspacing="0"
          cellpadding="0"
          border="0"
          :style="tableBodyStyles"
        >
          <hColgroup :columns="store.states.columns.value" :table-layout="tableLayout" />
          <table-footer
            :border="border"
            :default-sort="defaultSort"
            :store="store"
            :sum-text="computedSumText"
            :summary-method="summaryMethod"
          />
        </table>
      </div>
      <div v-if="border || isGroup" :class="ns.e('border-left-patch')" />
    </div>
    <div v-show="resizeProxyVisible" ref="resizeProxy" :class="ns.e('column-resize-proxy')" />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineComponent } from 'vue'
import { Mousewheel } from '@flash-global66/g-utils'
import GScrollbar from '@flash-global66/g-scrollbar'
import TableHeader from '../components/TableHeader'
import TableBody from '../components/TableBody'
import TableFooter from '../components/TableFooter'
import defaultProps from './defaults'
import { hColgroup } from '../shared/utils/render.util'
import { useTable } from './useTable'

export default defineComponent({
  name: 'GTable',
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    GScrollbar,
    hColgroup
  },
  props: defaultProps,
    emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-mouse-enter',
    'cell-mouse-leave',
    'cell-contextmenu',
    'cell-click',
    'cell-dblclick',
    'row-click',
    'row-contextmenu',
    'row-dblclick',
    'header-click',
    'header-contextmenu',
    'sort-change',
    'filter-change',
    'current-change',
    'header-dragend',
    'expand-change',
    'scroll',
    'cell-edit-open',
    'cell-edit-close',
    'cell-edit-change',
    'cell-edit-validate'
  ],
  setup(props) {
    return useTable(props)
  }
})
</script>
