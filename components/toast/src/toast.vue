<template>
  <transition :name="ns.b('fade')" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :id="id"
      :class="[ns.b(), ns.m(props.type), ns.m(props.size), customClass, horizontalClass]"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="onClick"
    >
      <g-icon-font :class="[ns.e('icon'), ns.m(props.type)]" :name="toastIcon" />
      <div :class="ns.e('group')">
        <div v-show="message" :class="ns.e('content')">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <!-- Caution here, message could've been compromised, never use user's input as message -->
            <p v-else v-html="message" />
          </slot>
        </div>
      </div>
      <g-icon-font v-if="showClose" :class="ns.e('closeBtn')" @click.stop="close" name="solid times" />
      <!-- Progress bar -->
      <div v-if="showProgress && duration > 0" :class="ns.e('progress')">
        <div 
          :class="[ns.e('progress-bar'), ns.m(props.type)]" 
          :style="{ animationDuration: `${duration}ms` }"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useEventListener, useTimeoutFn } from "@vueuse/core";
import { EVENT_CODE } from "element-plus/es/constants/index.mjs";
import { GIconFont, type IconString } from "@flash-global66/g-icon-font";
import { useZIndex, useNamespace } from "element-plus";
import { toastEmits, toastProps } from "./toast";
import { type ToastType } from "./toast.types";

import type { CSSProperties } from "vue";

defineOptions({
  name: "GToast",
});

const props = defineProps(toastProps);
defineEmits(toastEmits);

const { nextZIndex, currentZIndex } = useZIndex();
const ns = useNamespace("toast");

const visible = ref(false);
let timer: (() => void) | undefined = undefined;

const TOAST_ICONS: Record<ToastType, IconString> = {
  success: "solid check-circle",
  info: "solid info-circle", 
  warning: "solid exclamation-triangle",
  error: "solid times-circle",
} as const;

const toastIcon = computed(() => TOAST_ICONS[props.type]);

const horizontalClass = computed(() => (props.position.endsWith("right") ? "right" : "left"));

const verticalProperty = computed(() => (props.position.startsWith("top") ? "top" : "bottom"));

const positionStyle = computed<CSSProperties>(() => {
  return {
    [verticalProperty.value]: `${props.offset}px`,
    zIndex: props.zIndex ?? currentZIndex.value,
  };
});

function startTimer() {
  if (props.duration > 0) {
    const { stop: stopTimer } = useTimeoutFn(() => {
      if (visible.value) close();
    }, props.duration);
    timer = stopTimer;
  }
}

function clearTimer() {
  timer?.();
}

function close() {
  visible.value = false;
}

function onKeydown({ code }: KeyboardEvent) {
  if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
    clearTimer(); // press delete/backspace clear timer
  } else if (code === EVENT_CODE.esc) {
    // press esc to close the notification
    if (visible.value) {
      close();
    }
  } else {
    startTimer(); // resume timer
  }
}

// lifecycle
onMounted(() => {
  startTimer();
  nextZIndex();
  visible.value = true;
});

useEventListener(document, "keydown", onKeydown);

defineExpose({
  visible,
  /** @description close notification */
  close,
});
</script>

