<template>
  <figure 
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
      v-if="isLoaded && !hasError"
      :src="imageSrc" 
      :alt="name" 
      :class="ns.b()"
      @error="handleImageError"
    />
    <div 
      v-else-if="!hasError"
      :class="ns.e('placeholder')"
      role="img"
      :aria-label="`Cargando imagen: ${name}`"
    />
    <div 
      v-else
      :class="[ns.e('placeholder'), `text-size-${size}`]"
      role="img"
      aria-label="Error al cargar la imagen"
    >
      404
    </div>
  </figure>
</template>


<script setup lang="ts">
import { useNamespace } from "element-plus";
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
  handleImageError,
  hasError
} = useImage(props);
</script>
