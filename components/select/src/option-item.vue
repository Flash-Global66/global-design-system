<template>
  <li
    :aria-selected="selected"
    :data-test="`item:${getTitle(item)}`"
    :style="style"
    :class="[
      ns.be('dropdown', 'item'),
      ns.is('selected', selected),
      ns.is('disabled', disabled),
      ns.is('created', created),
      ns.is('hovering', hovering),
    ]"
    @mousemove="hoverItem"
    @click.stop="selectOptionClick"
  >
    <div :class="ns.bem('dropdown', 'item', 'inner')">
      <slot :item="item" :index="index" :disabled="disabled">
        <g-icon-font
          v-if="Boolean(getIcon(item))"
          :name="getIcon(item)"
          :class="ns.bem('dropdown', 'item', 'icon')"
        />
        <div :class="ns.bem('dropdown', 'item', 'content')">
          <span :class="ns.bem('dropdown', 'item', 'title')">{{
            getTitle(item)
          }}</span>
          <span
            v-if="Boolean(getDescription(item))"
            :class="ns.bem('dropdown', 'item', 'description')"
          >
            {{ getDescription(item) }}
          </span>
        </div>
      </slot>
      <g-icon-font
        v-if="selected && multiple"
        :class="ns.bem('dropdown', 'item', 'check')"
        name="solid check"
        aria-hidden="true"
        size="xl"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useNamespace } from "element-plus";
import { useOption } from "./hooks/use-option";
import { useProps } from "./hooks/use-props";
import { OptionProps, optionEmits } from "./defaults";
import { selectV2InjectionKey } from "./types/token";
import { GIconFont } from "@flash-global66/g-icon-font";

export default defineComponent({
  props: OptionProps,
  emits: optionEmits,
  components: { GIconFont },
  setup(props, { emit }) {
    const select = inject(selectV2InjectionKey)!;
    const ns = useNamespace("select");
    const { hoverItem, selectOptionClick } = useOption(props, { emit });
    const { getIcon, getTitle, getDescription } = useProps(select.props);
    const multiple = select.props.multiple;

    return {
      ns,
      hoverItem,
      selectOptionClick,
      getTitle,
      getDescription,
      getIcon,
      multiple,
    };
  },
});
</script>
