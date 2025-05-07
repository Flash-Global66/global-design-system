<template>
  <div 
    :ref="composedDialogRef" 
    :class="dialogKls" 
    :style="style" 
    tabindex="-1"
  >
    <!-- Header -->
    <header 
      ref="headerRef"
      :class="[ns.e('header'), headerClass]"
      v-if="showClose">
      <button 
        v-if="showClose"
        aria-label="Close"
        :class="ns.e('headerbtn')"
        type="button"
        @click="handleClose">
        <g-icon-font name="regular times" :class="ns.e('close')" />
      </button>
    </header>

    <!-- Body -->
    <div :id="bodyId" :class="[ns.e('body'), bodyClass]">
      <div>
        <div v-if="$slots.image" :class="ns.e('image')">
          <slot name="image" />
        </div>
        
        <span 
          v-if="title" 
          :class="ns.e('title')" 
          role="heading" 
          :aria-level="ariaLevel">
          {{ title }}
        </span>

        <div :class="ns.e('content')">
          <slot />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer :class="[ns.e('footer'), footerClass]">
      <slot name="footer">
        <div v-if="props.footerButtons?.length" :class="[ns.e('footer-buttons'), buttonLayoutClass]">
          <g-button
            v-for="(button, index) in displayButtons"
            :key="index"
            :variant="button.variant"
            full
            @click="button.onClick"
          >
            {{ button.text }}
          </g-button>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GButton } from "@flash-global66/g-button";
import { FOCUS_TRAP_INJECTION_KEY } from "@flash-global66/g-focus-trap";
import { composeRefs } from "element-plus/es/utils/index";
import { useDraggable } from "element-plus/es/hooks/index";
import { dialogInjectionKey } from "./constants";
import { dialogContentEmits, dialogContentProps, validateDialogProps } from "./dialog-content";

const props = defineProps(dialogContentProps);
const emit = defineEmits(dialogContentEmits);

validateDialogProps(props);

const { dialogRef, headerRef, bodyId, ns, style, displayButtons, buttonLayoutClass } = inject(dialogInjectionKey)!;
const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY, {
  focusTrapRef: dialogRef,
  onKeydown: () => {}
})!;

const dialogKls = computed(() => {
  const mode = props.fullscreen ? 'fullscreen' : (props.sizeMode || 'default');
  
  const cls = [
    ns.b(),
    ns.is("draggable", props.draggable),
    ns.is("align-center", props.alignCenter),
    ns.is(mode)
  ];
  return cls;
});

const composedDialogRef = composeRefs(focusTrapRef, dialogRef);

const draggable = computed(() => props.draggable && !props.fullscreen);
const overflow = computed(() => props.overflow);

const { resetPosition } = useDraggable(dialogRef, dialogRef, draggable, overflow);

defineExpose({
  resetPosition,
});

const handleClose = () => {
  emit("close");
};

</script>