<script lang='ts'>
export default { name: 'GCollapseItem' }
</script>

<script lang='ts' setup>
import { ref, inject, computed, watch } from 'vue';
import {
  ProviderGCollapse,
  initialGCollapse,
} from './config/providerCollapse';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';

const props = defineProps({
  classHead: {
    type: String,
    default: '',
  },
  classIcon: {
    type: String,
    default: '',
  },
  classContent: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
    default: '',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['open', 'close', 'opened', 'closed', 'click-item']);

const { count, active, disabled, accordion, setActiveItem, hideIcon } = inject(
  ProviderGCollapse,
  initialGCollapse
);

const itemKey = ref<number | string | null>(props.name ? props.name : count.value++);
const visible = ref(false);

const isDisabled = computed(() => disabled.value || props.disabled)
const isHideIcon = computed(() => hideIcon.value || props.hideIcon)

const stylesHeadCustom = computed(() => {
  return [
    props.classHead.length ? props.classHead : 'flex w-full justify-between border-solid border-2 border-gray-18 px-4 sm:px-6 py-3 rounded-md flex-1 items-center',
    !props.classHead.length && isDisabled.value ? 'bg-gray-18 text-gray-4' : 'bg-white text-gray-1 font-medium',
    isDisabled.value ? 'cursor-not-allowed select-none' : 'cursor-pointer',
  ]
})

const stylesIconCustom = computed(() => {
  return [
    props.classIcon.length ? props.classIcon : 'flex items-center text-6',
    isDisabled.value ? 'text-gray-5' : 'text-gray-3',
    { 'active-icon': visible.value },
  ]
})

watch(
  active,
  () => {
    fillVisible()
  }
)

function fillVisible () {
  if (accordion.value && Array.isArray(active.value)) {
    visible.value = active.value.includes(itemKey.value);
  } else {
    visible.value = Boolean(active.value === itemKey.value)
  }
}
fillVisible();

function toggleVisibility (e: Event) {
  e.preventDefault();
  if (isDisabled.value) return;

  visible.value = !visible.value
  setActiveItem(itemKey.value, visible.value);

  emit('click-item', { 
    event: e,
    itemKey: itemKey.value,
    visible: visible.value,
    disabled: disabled.value
  });
}

function onBeforeEnter(el: HTMLElement) {
  el.style.height = '0px';
}

function onEnter(el: HTMLElement) {
  emit('open');
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px';
  });
}

function onAfterEnter(el: HTMLElement) {
  emit('opened');
  el.style.height = 'auto';
}

function onBeforeLeave(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px';
}

function onLeave(el: HTMLElement) {
  emit('close');
  requestAnimationFrame(() => {
    el.style.height = '0';
  });
}

function onAfterLeave(el: HTMLElement) {
  emit('close');
  requestAnimationFrame(() => {
    el.style.height = '0';
  });
}

</script>

<template>
  <section>
    <div @click="toggleVisibility">
      <slot name="head" :active="visible" :disabled="disabled">
        <button :class="[stylesHeadCustom, { active: visible }]" :aria-disabled="disabled">
          <slot name="title" :active="visible" :disabled="disabled">
            {{ title }}
          </slot>

          <div class="flex">
            <slot name="icon" :active="visible" :disabled="disabled">
              <div v-if="!isHideIcon" :class="[...stylesIconCustom, 'duration-200']">
                <font-awesome-icon :icon="['far', 'chevron-down']" />
              </div>
            </slot>
            <slot name="right" :active="visible" :disabled="disabled" />
          </div>
        </button>
      </slot>
    </div>

    <transition
      name="gui-collapse"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"

      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-show="visible" :class="classContent">
        <slot name="content" :active="visible" :disabled="disabled"></slot>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
* {
  will-change: height;
}

.active-icon {
  @apply -rotate-180;
}
</style>

<style>
.gui-collapse-enter-active,
.gui-collapse-leave-active {
  transition: height .3s ease-in-out;
  overflow: hidden;
}
.gui-collapse-enter,
.gui-collapse-leave-to {
  height: 0;
}
</style>
