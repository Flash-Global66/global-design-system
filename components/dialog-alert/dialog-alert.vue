<template>
  <g-dialog
    :model-value="showAlert"
    :show-close="!hideButtonClose"
    :title="title"
    :footer-buttons="footerButtons"
    append-to-body
    @close="handleClose"
  >
    <template #image>
      <g-image 
        v-if="imageName || type" 
        :name="computedImageName" 
        :size="computedImageSize" 
      />
    </template>

    <div
      v-if="description"
      class="text-center text-4 font-normal text-secondary-txt hyphens-manual"
      v-html="description"
    />
  </g-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GImage, ImageName, type ImageSize } from '@flash-global66/g-image';
import { GDialog } from '@flash-global66/g-dialog';
import { AlertType, FooterButton } from './types/types';

const props = defineProps({
  showAlert: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => AlertType,
    default: 'info'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  imageName: {
    type: String as () => ImageName,
    default: ''
  },
  imageSize: {
    type: String as () => ImageSize,
    default: 'lg'
  },
  primaryText: {
    type: String,
    default: ''
  },
  secondaryText: {
    type: String,
    default: ''
  },
  reverseButtons: {
    type: Boolean,
    default: false
  },
  hideButtonClose: {
    type: Boolean,
    default: false
  }
});


const emit = defineEmits(['close', 'next']);

const imageMapping: Record<AlertType, ImageName> = {
  success: 'check',
  error: 'prohibited-red',
  warning: 'warning-sign-yellow',
  info: 'information',
  important: 'alert'
};

const computedImageName = computed(() => props.imageName || (props.type ? imageMapping[props.type] : 'information'));
const computedImageSize = computed<ImageSize>(() => props.imageSize as ImageSize || 'lg');

function handleClose() {
  emit('close');
}

const footerButtons = computed<FooterButton[]>(() => {
  const buttons: FooterButton[] = [];
  
  if (props.primaryText) {
    buttons.push({
      text: props.primaryText,
      variant: 'primary',
      onClick: () => emit('next', { isPrimary: true, isSecondary: false }),
    });
  }
  
  if (props.secondaryText) {
    buttons.push({
      text: props.secondaryText,
      variant: 'tertiary',
      onClick: () => emit('next', { isPrimary: false, isSecondary: true }),
    });
  }
  
  return props.reverseButtons ? buttons.reverse() : buttons;
});
</script>