<template>
  <figure
    :class="ns.b('container')"
    ref="imageContainer"
    :style="{
      width: sizeValue,
      height: sizeValue,
      minWidth: sizeValue,
      minHeight: sizeValue,
    }"
  >
    <img
      v-if="imageSrc && !hasError"
      v-show="isLoaded"
      :src="imageSrc"
      :alt="name"
      :class="ns.b()"
      @load="handleImageLoad"
      @error="handleImageError"
    />
    <div
      v-if="!isLoaded && !hasError"
      :class="ns.e('placeholder')"
      role="img"
      :aria-label="`Cargando imagen: ${name}`"
    />
    <div
      v-if="hasError"
      :class="[ns.e('placeholder'), `text-size-${size}`]"
      role="img"
      aria-label="Error al cargar la imagen"
    >
      404
    </div>
  </figure>
</template>

<script setup lang="ts">
import { useNamespace } from '@flash-global66/g-utils';
import { imageProps, validateImageProps } from './image.props';
import { useImage } from './hooks/use-image';

const props = defineProps(imageProps);

validateImageProps(props);

const ns = useNamespace('image');

const {
  sizeValue,
  isLoaded,
  imageSrc,
  imageContainer,
  handleImageLoad,
  handleImageError,
  hasError,
} = useImage(props);
</script>
