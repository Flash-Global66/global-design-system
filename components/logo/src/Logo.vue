<template>
  <figure
    :class="ns.e('container')"
    ref="imageContainer"
    :style="containerStyle"
  >
    <img
      v-if="isLoaded && !hasError"
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
  isLoaded,
  imageSrc,
  imageContainer,
  handleImageError,
  hasError,
} = useLogo(props);
</script>
