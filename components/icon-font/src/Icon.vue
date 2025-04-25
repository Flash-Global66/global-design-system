<template>
  <font-awesome-icon
    v-if="selectedIcon"
    :icon="selectedIcon"
  />
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { debugWarn, isString } from "element-plus/es/utils/index.mjs";;

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import type { IconString } from './types';
import * as SolidPro from './lib/fas-solid-pro';
import * as SolidFree from './lib/fas-solid-free';
import * as RegularPro from './lib/far-regular-pro';
import * as LightPro from './lib/fal-light-pro';
import * as BrandsFree from './lib/fab-free';
import { iconProps } from './icon';

// Registro de iconos
library.add(
  SolidPro,
  SolidFree,
  RegularPro,
  LightPro,
  BrandsFree
);

const props = defineProps(iconProps);

const selectedIcon = computed(() => {
  if(!isString(props.name)) {
    return debugWarn('IconFont', 'Icon name is invalid');
  };
  const [weight, iconName] = props.name.split(' ');
  if (!iconName) return debugWarn('IconFont', 'Icon name has to be in the format: "weight icon-name"');

  const prefix = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    brands: 'fab',
    duotone: 'fad'
  }[weight];

  return [prefix, iconName];
});
</script>