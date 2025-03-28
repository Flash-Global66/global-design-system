<template>
    <component :is="componentId" ref="_ref" v-bind="allAttrs" :class="classes">
      <g-icon-font :name="icon" :class="ns.e('icon')" />
  
      <span class="hover-effect">
        <!-- Ripple Elements -->
        <transition-group name="ripple">
          <div
            v-for="ripple in ripples"
            :key="ripple.id"
            :class="ns.e('ripple')"
            :style="{
              left: ripple.x + 'px',
              top: ripple.y + 'px'
            }"
            @animationend="removeRipple(ripple.id)"
          />
        </transition-group>
      </span>
    </component>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from "vue";
  import { useNamespace } from "element-plus";
  import { iconButtonEmits, iconButtonProps, validateIconButtonProps } from "./icon-button";
  import { GIconFont } from "@flash-global66/g-icon-font";
  import { useIconButton } from "./use-icon-button";
  
  const props = defineProps(iconButtonProps)
  const emit = defineEmits(iconButtonEmits)
  
  validateIconButtonProps(props)
  
  const {
    _ref,
    componentId,
    ripples,
    removeRipple,
    allAttrs
  } = useIconButton(props, emit)
  
  const ns = useNamespace('icon-button', ref('gui'))
      
  const standardClasses = computed(() => {
    return [
      props.variant && ns.m(`variant-${props.variant}`), 
      props.size && ns.m(props.size),
      props.border && ns.m('border')
    ]
  })
  
  const classes = computed(() => {
    return [
      ns.b(),
      ...standardClasses.value,
      ns.is('disabled', props.disabled),
      ns.is('href', Boolean(props.href)),
    ]
      .flat()
      .filter(Boolean)
  })
  </script>
  