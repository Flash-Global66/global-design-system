<template>
  <g-dialog
    :model-value="alertState.showAlert"
    :show-close="!alertState.hideButtonClose"
    :title="alertState.title"
    :footer-buttons="footerButtons"
    @close="closeAlert"
  >
    <template #image>
      <g-image 
        v-if="alertState.imageName || alertState.type" 
        :name="imageName" 
        :size="alertState.imageSize || 'lg'" 
      />
    </template>

    <div
      v-if="alertState.description"
      class="text-center text-4 font-normal text-secondary-txt hyphens-manual"
      v-html="alertState.description"
    />
  </g-dialog>
</template>

<script setup lang="ts">
import { onUnmounted, watch, computed, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
import { GImage, ImageName } from '@flash-global66/g-image';
import { GDialog } from '../index';
import { useAlertInject } from './hooks/use-provide-alert';
import { AlertType, FooterButton } from './types/types';

const alertState = useAlertInject();
const instance = getCurrentInstance();

const hasRouter = !!instance?.appContext.config.globalProperties.$router;
const route = hasRouter ? useRoute() : null;

if (hasRouter && route) {
  watch(
    () => route.fullPath,
    () => {
      closeAlert();
    }
  );
}

const imageMapping: Record<AlertType, ImageName> = {
  success: 'check',
  error: 'prohibited-red',
  warning: 'warning-sign-yellow',
  info: 'information',
  important: 'alert'
};

const imageName = computed(() => alertState.imageName || (alertState.type ? imageMapping[alertState.type] : 'information'));

function closeAlert() {
  alertState.hideAlert();
}

onUnmounted(() => {
  closeAlert();
});

const footerButtons = computed<FooterButton[]>(() => {
  const buttons: FooterButton[] = [];
  
  if (alertState.primaryText) {
    buttons.push({
      text: alertState.primaryText,
      variant: 'primary',
      onClick: () => alertState.onNext({ isPrimary: true, isSecondary: false }),
    });
  }
  
  if (alertState.secondaryText) {
    buttons.push({
      text: alertState.secondaryText,
      variant: 'tertiary',
      onClick: () => alertState.onNext({ isPrimary: false, isSecondary: true }),
    });
  }
  
  return alertState.reverseButtons ? buttons.reverse() : buttons;
});
</script>