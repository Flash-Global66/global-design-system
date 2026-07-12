<script lang="ts" setup>
import { useNamespace } from '@flash-global66/g-utils';
import { useFormSize } from '@flash-global66/g-form';
import { computed, ref } from 'vue';
import { GIconFont } from '@flash-global66/g-icon-font';
import { inlineEmits, inlineProps } from './inline';

const props = defineProps(inlineProps);
const emits = defineEmits(inlineEmits);

const visible = ref(true);

const ns = useNamespace('inline');
const inlineSize = useFormSize();

const inlineRef = ref<HTMLElement | null>(null);

const inlineClass = computed(() => [
  ns.b(),
  ns.m(inlineSize.value),
  ns.m(props.type),
  props.shadow && ns.m('shadow'),
  !props.border && ns.m('no-border'),
  ns.m(`icon-align-${props.iconAlign}`),
]);

function onClose(event: MouseEvent) {
  visible.value = false;
  emits('close', event);
}
</script>

<template>
  <transition :name="ns.m('fade')">
    <div
      v-if="visible"
      :class="inlineClass"
      ref="inlineRef"
      :aria-label="ariaLabel || 'inline'"
    >
      <div v-if="iconFill" :class="ns.e('icon-fill')">
        <g-icon-font
          aria-label="icon informative"
          :class="ns.e('icon')"
          :name="icon"
        />
      </div>
      <g-icon-font
        v-else
        aria-label="icon informative"
        :class="ns.e('icon')"
        :name="icon"
      />
      <div>
        <h3 v-if="title" :class="[ns.e('title')]">{{ title }}</h3>
        <p :class="[ns.e('description')]">
          <slot name="default">
            {{ description }}
          </slot>
        </p>
        <div v-if="links.length" role="group" :class="[ns.e('links')]">
          <button
            v-for="(link, idx) in links"
            :key="idx"
            @click="link.action()"
            :class="[ns.e('link'), showArrow && ns.em('link', 'arrow')]"
            :aria-label="link.ariaLabel || link.label"
            type="button"
          >
            {{ link.label }}
            <g-icon-font
              v-if="showArrow"
              name="regular chevron-right"
              :class="ns.e('link-arrow')"
            />
          </button>
        </div>
      </div>
      <g-icon-font
        v-if="!hideClose"
        role="button"
        aria-label="close inline"
        @click="onClose"
        :class="ns.e('close')"
        name="regular times"
      />
    </div>
  </transition>
</template>
