<!-- 

  NO FUNCIONA. TOCA REVISAR. El provider y el inject no funcionan bien. en el proyecto que instalo tengo que importarlo de la siguiente manera '../node_modules/@flash-global66/b2b-ui-alert' y no como '@flash-global66/b2b-ui-alert' como deberia ser. Tambien tengo error con las imagenes. No las encuentra.

-->

<template>
  <g-dialog
    :model-value="alertState.showAlert"
    class="max-w-[504px] w-full rounded-lg flex flex-col items-center pt-14 pb-8"
    @close="closeAlert"
  >
    <template #head-title class="">
      <div class="w-content">
        <div class="flex justify-center items-center mx-auto mb-6">
          <img
            v-if="alertState.type"
            class="w-28 h-28"
            :src="getAsset(icons[alertState.type])">

          <img
            v-if="alertState.type === 'custom' && alertState.srcIcon"
            class="w-28 h-28"
            :src="alertState.srcIcon">

        </div>

        <h2
          v-if="alertState.title"
          v-html="alertState.title "
          class="text-6 md:text-8 font-semibold mb-4 text-blue-14 text-center hyphens-manual"
        />
      </div>
    </template>

    <div
      class="w-content text-center text-4 font-medium text-blue-12 hyphens-manual"
      v-html="alertState.description" />

    <template #footer>
      <div
        v-if="alertState.primaryText && alertState.secondaryText"
        class="w-content pt-6 flex flex-col gap-4">
        <g-button
          v-if="alertState.primaryText"
          full
          :size="alertState.buttonSize || 'tiny'"
          :class="{ 'order-3' : alertState.reverseButtons }"
          @click="alertState.onNext({ isPrimary: true, isSecondary: false })">
          {{ alertState.primaryText }}
        </g-button>
        <g-button
          v-if="alertState.secondaryText"
          type="outlined"
          full
          :class="{ 'order-1' : alertState.reverseButtons }"
          :size="alertState.buttonSize || 'tiny'"
          @click="alertState.onNext({ isPrimary: false, isSecondary: true })">
          {{ alertState.secondaryText }}
        </g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// COMPONENTS
import { GDialog } from '@flash-global66/b2b-ui-dialog';
import { GButton } from '@flash-global66/b2b-ui-button';

// COMPOSABLE
import { useAlertInject } from './useProviderAlert';

function getAsset(src?:string){
  if (!src) console.warn('Asset not found');

  return new URL(`./img/${src}`, import.meta.url).href;
}


export default defineComponent({
  name: 'GAlert',
  components: {
    GDialog,
    GButton,
  },
  setup () {

    const alertState = useAlertInject();

    const route = useRoute();

    const icons = {
      success: 'img/success.svg',
      error: 'img/error.svg',
      warning: 'img/warning.svg',
      info: 'img/info.svg',
      important: 'img/important.svg',
    }

    watch(
      () => route.fullPath,
      () => {
        closeAlert()
      }
    );

    function closeAlert() {
      alertState.hideAlert();
    }

    onUnmounted(() => {
      closeAlert();
    });

    return {
      alertState,
      icons,
      getAsset,
      closeAlert,
    };
  }
});

</script>./alert.type