<script lang="ts" setup>
import {
  useFormSize,
  useNamespace,
} from "element-plus";
import { computed, defineComponent, PropType, reactive, ref, watch } from "vue";
import { GIconFont } from '@flash-global66/g-icon-font';
import { inlineProps } from "./inline";
import { debugWarn } from "element-plus/es/utils/index.mjs";;

const props = defineProps(inlineProps)

const visible = ref(true);

const ns = useNamespace('inline')
const inlineSize = useFormSize()

const inlineRef = ref<HTMLElement | null>(null)

const inlineClass = computed(() => [
  ns.b(),
  ns.m(inlineSize.value),
  ns.m(props.type),
])

async function onClose() {
  visible.value = false;
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
      <g-icon-font
        aria-label="icon informative"
        :class="[ns.e('icon')]" :name="icon"
      />
      <div class="">
        <h3 :class="[ns.e('title')]"> {{ title }} </h3>
        <p v-if="description" :class="[ns.e('description')]">
          <slot>
            {{ description }}
          </slot>
        </p>
        <div
          v-if="links.length"
          role="group"
          :class="[ns.e('links')]"
        >
          <button
            v-for="(link, idx) in links"
            :key="idx"
            @click="link.action" 
            :class="[ns.e('link')]"
            :aria-label="link.ariaLabel || link.label"
            type="button"
          >
            {{ link.label }}
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