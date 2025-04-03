<template>
  <div 
    :class="ns.b('container')" 
    ref="imageContainer"
    :style="{
      width: sizeValue,
      height: sizeValue,
      minWidth: sizeValue,
      minHeight: sizeValue
    }"
  >
    <img 
      v-if="isLoaded"
      :src="imageSrc" 
      :alt="name" 
      :class="ns.b()"
    />
    <div 
      v-else
      :class="ns.e('placeholder')"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "element-plus";
import { imageProps, validateImageProps } from './utils/image.props';
import { useImage } from './hooks/useImage';

const props = defineProps(imageProps);

validateImageProps(props);

const ns = useNamespace('image');

const {
  sizeValue,
  isLoaded,
  imageSrc,
  imageContainer
} = useImage(props);
</script>
