<script lang='ts'>
export default { name: 'GButtonCard' }
</script>

<script lang='ts' setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  note: {
    type: String,
    default: '',
  },
  icon: {
    type: Array,
    default: () => [''],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconRounded: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: ''
  },
})

const emit = defineEmits(['click'])

function onClick (event: Event) {
  event.preventDefault();
  emit('click');
}
</script>

<template>
  <div class="">
    <section
      @click="onClick"
      class="card group"
      :class="[
        disabled ? 'card-disabled' : 'card-active',
        height.length ? height : 'card-height',
      ]"
    >
      <slot name="image">
        <div :class="{ 'w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center': iconRounded }">
          <fa-icon class="text-blue-1 text-12 duration-200 group-hover:text-gray-3" :icon="icon" />
        </div>
      </slot>
  
      <slot name="title">
        <h4
          :class="disabled ? 'text-gray-5' : 'text-gray-2'"
          class=" font-semibold text-6 leading-6 mb-2 text mt-5"
          v-html="title"
        />
      </slot>
      <slot name="subtitle">
        <p
          :class="disabled ? 'text-gray-5' : 'text-gray-2'"
          class="leading-6 text"
          v-html="subtitle"
        />
      </slot>
    </section>
    <slot name="note">
      <p
        v-if="note.length"
        class="text-center font-normal text-3 mt-4"
        :class="disabled ? 'text-gray-4' : 'text-gray-2'"
        v-html="note"
      />
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.text {
  @apply group-hover:text-gray-3 duration-200 w-4/5 text-center;
}

.card {
  @apply rounded-md flex flex-col justify-center items-center border-[1px] duration-200;
}

.card-disabled {
  @apply cursor-not-allowed bg-transparent border-gray-7;
}

.card-active {
  @apply cursor-pointer bg-white shadow-md border-transparent hover:border-blue-3;
}

.card-height {
  @apply min-h-[200px];
}

</style>