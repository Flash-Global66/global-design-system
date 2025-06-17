<template>
  <div :class="rootKls">
    <button
      :id="scopedHeadId"
      :class="headKls"
      :aria-expanded="isActive"
      :aria-controls="scopedContentId"
      :aria-describedby="scopedContentId"
      :tabindex="disabled ? -1 : 0"
      type="button"
      @click="handleHeaderClick"
      @keydown.space.enter.stop.prevent="handleEnterClick"
      @focus="handleFocus"
      @blur="focusing = false"
    >
      <div :class="contentHeaderKls">
        <div v-if="iconsLeft.length > 0" :class="iconsLeftKls">
          <g-icon-font
            v-for="(icon, index) in iconsLeft"
            :key="index"
            :name="icon.icon"
            :class="icon.icon === 'regular angle-right' ? arrowKls : ''"
            @click.stop="icon?.onClick && icon?.onClick(name, icon.icon, isActive!)"
            :spin="icon.spin"
          />
        </div>
        <div :class="contentHeaderTextKls">
          <slot name="header" :is-active="isActive">
            <h5 :class="itemTitleKls">
              {{ title }}
            </h5>
            <span>
              {{ description }}
            </span>
          </slot>
        </div>
      </div>
      <div v-if="iconsRight.length > 0" :class="iconsRightKls">
        <g-icon-font
          v-for="(icon, index) in iconsRight"
          :key="index"
          :name="icon.icon"
          :class="icon.icon === 'regular angle-right' ? arrowKls : ''"
          @click.stop="icon?.onClick && icon.onClick(name, icon.icon, isActive!)"
          :spin="icon.spin"
        />
      </div>
    </button>

    <g-collapse-transition>
      <div
        v-show="isActive"
        :id="scopedContentId"
        role="region"
        :class="itemWrapperKls"
        :aria-hidden="!isActive"
        :aria-labelledby="scopedHeadId"
      >
        <div :class="itemContentKls">
          <div v-if="content" v-html="content" />
          <slot v-else />
        </div>
      </div>
    </g-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import GCollapseTransition from '@flash-global66/g-collapse-transition'
import { GIconFont } from '@flash-global66/g-icon-font'
import { collapseItemProps } from './collapse-item'
import { useCollapseItem, useCollapseItemDOM } from './use-collapse-item'

defineOptions({
  name: 'GCollapseItem'
})

const props = defineProps(collapseItemProps)
const {
  focusing,
  id,
  isActive,
  handleFocus,
  handleHeaderClick,
  handleEnterClick,
  content,
  iconsLeft,
  iconsRight,
  name
} = useCollapseItem(props)

const {
  arrowKls,
  headKls,
  rootKls,
  itemTitleKls,
  itemWrapperKls,
  itemContentKls,
  scopedContentId,
  scopedHeadId,
  contentHeaderKls,
  iconsLeftKls,
  iconsRightKls,
  contentHeaderTextKls
} = useCollapseItemDOM(props, { focusing, isActive, id })

defineExpose({
  /** @description current collapse-item whether active */
  isActive
})
</script>
