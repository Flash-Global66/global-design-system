<script lang='ts'>
export default { name: 'GCollapseContent' }
</script>

<script lang='ts' setup>
import { provide, ref, watch, PropType } from 'vue';
import { ProviderGCollapse } from './config/providerCollapse';

// TYPES
import { ChangeCollapse, ValueCollapse } from './collapse.type';

const props = defineProps({
  modelValue: {
    type: Number as PropType<ValueCollapse>,
    default: null,
  },
  default: {
    type: Number as PropType<number | string>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  accordion: {
    type: Boolean,
    default: false,
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', update: ValueCollapse): void
  (e: 'click-collapse', change: ChangeCollapse): void
}>();

const count = ref(0);
const active = ref<ValueCollapse>(props.modelValue || props.default);
const accordion = ref(props.accordion);
const disabled = ref(props.disabled);
const hideIcon = ref(props.hideIcon);

if (!props.accordion && props.modelValue !== undefined && !Array.isArray(props.modelValue)) {
  console.error('El v-model no es un array. Envuelva su referencia en un array.')
}

if (props.accordion && Array.isArray(props.modelValue)) {
  console.error('El v-model es un array. Su referencia debe ser en un tipo primitivo.')
}

if (!props.modelValue) {
  if(accordion.value) {
    active.value = props.default;
  } else {
    active.value = props.default !== null ? [props.default] : [];
  }
}

watch(
  () => props.modelValue,
  (newValue: ValueCollapse) => {
    if (Array.isArray(newValue)) {
      console.log(newValue[0], typeof newValue)
    }
    active.value = newValue;
  },
  { deep: true, immediate: true }
);

watch(
  () => props.disabled,
  (newValue) => {
    disabled.value = newValue;
  }
);

watch(
  () => props.hideIcon,
  (newValue) => {
    hideIcon.value = newValue;
  }
);

const setActiveItem = (item: string | number, visible: boolean) => {
  let itemNew: NonNullable<ValueCollapse> = item;
  const itemOld = active.value;

  if (accordion.value && visible) {
    active.value = item
  }

  if (!accordion.value && Array.isArray(active.value)) {
    const actives = active.value;

    const findIndex = actives.findIndex(val => val === item);
    if (findIndex !== -1) {
      actives.splice(findIndex, 1)
    } else {
      actives.push(item);
    }

    itemNew = actives;
    active.value = actives;
  }

  emit('click-collapse', {
    itemOld,
    itemNew,
    itemCurrent: item,
    visible
  });

  emit('update:modelValue', itemNew);

}

provide(ProviderGCollapse, {
  count,
  active,
  accordion,
  disabled,
  hideIcon,
  setActiveItem,
});
</script>

<template>
  <div class="gui-accordion">
    <slot></slot>
  </div>
</template>
