<script lang="ts" setup>
import { computed, PropType } from "vue";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GProgress } from "@flash-global66/g-progress";
import { useBreakpoint } from "../composables/useBreakpoint";

import {
  GStepperItemInstance,
  GStepperArrowLeftProperties,
  GStepProgressProperties,
} from "../type/stepper";

const props = defineProps({
  progressPercentage: {
    type: Number,
    default: 0,
  },
  hideRightHeader: Boolean,
  hideLeftHeader: Boolean,
  hideStepCounter: Boolean,
  hideStepperProgress: Boolean,
  showCenterLogo: Boolean,
  backArrowFunction: {
    type: Function,
    default: () => {},
  },
  backArrowProperties: {
    type: Object as PropType<GStepperArrowLeftProperties>,
    default: () => ({ hide: false, disabled: false }),
  },
  stepProgressProperties: {
    type: Object as PropType<GStepProgressProperties>,
  },
  itemsWithDot: {
    type: Array as PropType<GStepperItemInstance[]>,
    default: () => [],
  },
});

const { isMobile, isDesktop } = useBreakpoint();

const emit = defineEmits(["click-left-header", "click-right-header"]);

function onLeftHeader() {
  emit("click-left-header");
}

function onRightHeader() {
  emit("click-right-header");
}
</script>

<template>
  <div class="bg-white">
    <div
      class="flex items-center"
      :class="{
        'h-[90px] max-w-5xl mx-auto px-5': isDesktop,
        'justify-between px-6 py-4 text-gray-6': isMobile,
      }"
    >
      <section
        v-if="!hideLeftHeader"
        :class="{
          'flex justify-center items-center h-full pr-5': isDesktop,
          'top-btn-left': isMobile,
        }"
      >
        <div class="flex justify-center items-center h-full">
          <slot name="left-mobile-header">
            <div
              v-if="!backArrowProperties.hide"
              class="header-btn"
              :class="{
                'cursor-not-allowed bg-gray-7 hover:text-gray-5':
                  backArrowProperties.disabled,
                'ml-5': isDesktop,
                'ml-0': isMobile,
              }"
              @click="backArrowFunction()"
            >
              <GIconFont name="solid arrow-left" />
            </div>
          </slot>
        </div>
      </section>

      <section
        class="flex items-center"
        :class="{
          'flex-1 relative': isDesktop,
          'flex-1 px-4': isMobile,
        }"
      >
        <div class="flex flex-col relative flex-1">
          <section
            v-if="isMobile && !hideStepCounter"
            class="flex items-center mb-1 text-gray-2 font-semibold text-3"
          >
            Paso {{ stepProgressProperties?.index }} de
            {{ itemsWithDot.length }}
          </section>

          <GProgress
            v-if="!hideStepperProgress"
            :percentage="progressPercentage"
            :show-text="false"
          />
        </div>
      </section>

      <section
        v-if="!hideRightHeader"
        :class="{
          'flex justify-center items-center h-full ml-6': isDesktop,
          'top-btn-right': isMobile,
        }"
      >
        <slot name="right-header">
          <div
            class="header-btn"
            :class="{ '-mr-3': isMobile }"
            @click="onRightHeader"
          >
            <GIconFont name="regular times" size="lg" />
          </div>
        </slot>
        <slot v-if="isDesktop" name="right-header-custom-space" />
      </section>

      <div v-if="isMobile">
        <slot name="right-header-custom-space"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@config "../../../../tailwind.config.ts";

.step-title {
  @apply w-full text-grey-400 font-semibold flex justify-between mb-4 mt-1;
}

.header-btn {
  @apply transition duration-300 ease-in-out
        flex justify-center items-center
        text-everBlue-200 hover:text-everBlue-400
        text-6 rounded-full w-10 h-10
        hover:bg-grey-50 cursor-pointer;
}

.header-stepper {
  .top-btn-left {
    @apply text-6;
  }

  .top-btn-right {
    @apply text-4;
    @apply flex items-center font-medium;
  }
}
</style>
