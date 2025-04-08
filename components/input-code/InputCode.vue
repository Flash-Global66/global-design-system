<script lang="ts">
export default { name: "GInputCode" };
</script>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  ref,
  toRef,
  onBeforeUpdate,
  computed,
  onMounted,
} from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/pro-solid-svg-icons";

const props = defineProps({
  password: {
    type: Boolean,
    default: false,
  },
  textError: {
    type: String,
    default: "",
  },
  hideTextError: {
    type: Boolean,
    default: false,
  },
  fields: {
    type: Number,
    default: 4,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: true,
  },
  iconPassword: {
    type: Boolean,
    default: true,
  },
  classInput: {
    type: String,
    default: "",
  },
  classContent: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["change", "complete", "validate"]);

const KEY_CODE = {
  backspace: 8,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const values = ref<string[]>([]);
const iRefs = ref<number[]>([]);
const inputs = ref<HTMLInputElement[]>([]);
const fields = toRef(props, "fields");
const autoFocusIndex = ref(0);
const autoFocus = true;
const showPassword = ref(true);
const currentFocus = ref(0);
const isComplete = ref(false);

const initVals = () => {
  let vals: string[] = [];

  if (values?.value?.length) {
    for (let i = 0; i < fields.value; i++) {
      vals.push(values.value[i] || "");
    }
    autoFocusIndex.value =
      values.value.length >= fields.value ? 0 : values.value.length;
  } else {
    vals = Array(fields.value).fill("");
  }

  iRefs.value = [];
  for (let i = 0; i < fields.value; i++) {
    iRefs.value.push(i + 1);
  }
  values.value = vals;
};

const styleInputCode = computed(() => {
  if (!!props.textError) return "gui-input-code-text-error";

  if (isComplete.value) return "gui-input-code-text-success";

  return "text-blue-3";
});

const classContentInput = (index: number) => {
  if (!props.password || !showPassword.value) return "";

  if (index !== currentFocus.value && !values.value[index].length)
    return "circle";
  if (index !== currentFocus.value && values.value[index].length)
    return "point";

  return "";
};

function onFocus(e, index: number) {
  currentFocus.value = index;
  e.target.select(e);
}

function onBlur() {
  currentFocus.value = -1;
}

const onValueChange = (e) => {
  const index = parseInt(e.target.dataset.id);
  e.target.value = e.target.value.replace(/[^\d]/gi, "");

  let next: number;
  const value: string = e.target.value;
  values.value = Object.assign([], values.value);

  if (e.target.value === "" || !e.target.validity.valid) {
    return triggerChange(values.value);
  }

  if (value.length > 1) {
    let nextIndex = value.length + index - 1;
    if (nextIndex >= fields.value) {
      nextIndex = fields.value - 1;
    }
    next = iRefs.value[nextIndex];
    const split = value.split("");
    split.forEach((item, i) => {
      const cursor = index + i;
      if (cursor < fields.value) {
        values.value[cursor] = item;
      }
    });
  } else {
    next = iRefs.value[index + 1];
    values.value[index] = value;
  }
  if (next) {
    const element = inputs.value[next];
    element.focus();
    element.select();
  }
  triggerChange(values.value);
};

const onPaste = (e) => {
  const code = e.clipboardData.getData("text");

  if (!isNaN(code) && code.length === 6) {
    const codeSplit = code.split("");

    for (let i = 0; i < fields.value; i++) {
      values.value[i] = codeSplit[i];
    }

    inputs.value[fields.value - 1].focus();
  }
};

const onKeyDown = (e) => {
  const index = parseInt(e.target.dataset.id);

  const prevIndex = index - 1;
  const nextIndex = index + 1;
  const prev = iRefs.value[prevIndex];
  const next = iRefs.value[nextIndex];
  switch (e.keyCode) {
    case KEY_CODE.backspace: {
      e.preventDefault();
      const vals = [...values.value];
      if (values.value[index]) {
        vals[index] = "";
        values.value = vals;
        triggerChange(vals);
      } else if (prev) {
        vals[prevIndex] = "";
        inputs.value[prev].focus();
        values.value = vals;
        triggerChange(vals);
      }
      break;
    }
    case KEY_CODE.left:
      e.preventDefault();
      if (prev) {
        inputs.value[prev].focus();
      }
      break;
    case KEY_CODE.right:
      e.preventDefault();
      if (next) {
        inputs.value[next].focus();
      }
      break;
    case KEY_CODE.up:
    case KEY_CODE.down:
      e.preventDefault();
      break;
    case KEY_CODE.enter:
      e.preventDefault();
      emit("validate");
      break;
    default:
      // this.handleKeys[index] = true;
      break;
  }
};

const triggerChange = (val = values.value) => {
  const value = val.join("");
  isComplete.value = value.length >= fields.value;
  emit("change", value);
  emit("complete", isComplete.value);
};

const setInputs = (el, index) => {
  if (el) inputs.value[index] = el as HTMLInputElement;
};

const clearValues = () => {
  values.value = values.value.map(() => "");
  inputs.value[1].focus();
};

initVals();

onBeforeUpdate(() => {
  inputs.value = [];
});

onMounted(() => {
  const firstInputElement = document.querySelector(
    '[data-id="0"]'
  ) as HTMLInputElement;
  if (firstInputElement) {
    firstInputElement.focus();
  }
});

defineExpose({
  clearValues,
});
</script>

<template>
  <section class="gui-input-code-wrapper">
    <div class="gui-input-code-container">
      <div :class="classContent" class="gui-input-content">
        <div
          v-for="(item, index) in values"
          :key="index"
          class="gui-input-item"
          :class="[
            { password: password },
            { error: !!textError },
            { success: isComplete },
            { disabled: disabled },
            classContentInput(index),
          ]"
        >
          <input
            :ref="(el) => setInputs(el, index + 1)"
            :class="[classInput ? classInput : `gui-input ${styleInputCode}`]"
            type="tel"
            pattern="[0-9]+"
            :autoFocus="autoFocus && index === autoFocusIndex"
            :data-id="index"
            :value="item"
            :required="props.required"
            :disabled="props.disabled"
            maxlength="1"
            @input="onValueChange"
            @focus="(e) => onFocus(e, index)"
            @blur="onBlur"
            @keydown="onKeyDown"
            @paste="onPaste"
          />
        </div>
      </div>
      <div
        v-if="password && iconPassword"
        @click="showPassword = !showPassword"
        class="gui-input-code-password"
      >
        <font-awesome-icon v-if="!showPassword" :icon="faEye" />
        <font-awesome-icon v-else :icon="faEyeSlash" />

        <p class="gui-input-code-icon">
          {{ showPassword ? "Mostrar" : "Ocultar" }}
        </p>
      </div>
    </div>

    <!-- 
      @slot error custom message error.
     -->
    <slot name="error">
      <p v-if="!!textError && !hideTextError" class="gui-input-code-error">
        {{ textError }}
      </p>
    </slot>
  </section>
</template>
