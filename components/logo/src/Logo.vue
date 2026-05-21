<template>
  <figure
    :class="ns.e('container')"
    ref="imageContainer"
    :style="containerStyle"
  >
    <span
      v-if="isLoaded && !hasError && hasColor"
      :class="ns.e('color')"
      :style="colorBoxStyle"
      role="img"
      :aria-label="name"
    />
    <img
      v-else-if="isLoaded && !hasError"
      :src="imageSrc"
      :alt="name"
      :class="ns.b()"
      :style="imageStyle"
      @error="handleImageError"
    />
    <div
      v-else-if="!hasError"
      :class="ns.e('placeholder')"
      role="img"
      :aria-label="`Cargando logo: ${name}`"
    />
    <div
      v-else
      :class="[ns.e('placeholder'), `text-size-${size}`]"
      role="img"
      :aria-label="`Error al cargar el logo: ${name}`"
    >
      404
    </div>
  </figure>
</template>

<script setup lang="ts">
import { useNamespace } from 'element-plus';
import { logoProps, validateLogoProps } from './logo.props';
import { useLogo } from './hooks/use-logo';

defineOptions({ name: 'GLogo' });

const props = defineProps(logoProps);

validateLogoProps(props);

const ns = useNamespace('logo');

const {
  containerStyle,
  imageStyle,
  colorBoxStyle,
  hasColor,
  isLoaded,
  imageSrc,
  imageContainer,
  handleImageError,
  hasError,
} = useLogo(props);
</script>
