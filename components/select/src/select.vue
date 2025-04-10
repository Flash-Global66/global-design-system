<template>
  <div class="selectContainer">
    <div
      ref="selectRef"
      v-click-outside:[popperRef]="handleClickOutside"
      :class="[nsSelect.b(), nsSelect.is('error', isErrorKls)]"
      @mouseenter="states.inputHovering = true"
      @mouseleave="states.inputHovering = false"
    >
      <g-tooltip
        ref="tooltipRef"
        :visible="dropdownMenuVisible"
        :teleported="teleported"
        is-component
        :popper-class="`${nsSelect.e('popper')} ${popperClass ?? ''}`"
        :gpu-acceleration="false"
        :stop-popper-mouse-event="false"
        :popper-options="popperOptions"
        :fallback-placements="fallbackPlacements"
        :effect="effect"
        :placement="placement"
        pure
        :transition="`${nsSelect.namespace.value}-zoom-in-top`"
        trigger="click"
        :persistent="persistent"
        :append-to="appendTo"
        :show-arrow="showArrow"
        :offset="offset"
        @before-show="handleMenuEnter"
        @hide="states.isBeforeHide = false"
      >
        <template #default>
          <div
            ref="wrapperRef"
            :class="[
              nsSelect.e('wrapper'),
              nsSelect.is('focused', isFocused),
              nsSelect.is('hovering', states.inputHovering),
              nsSelect.is('filterable', filterable),
              nsSelect.is('disabled', selectDisabled),
              nsSelect.is('complete', !isFocused && Boolean(hasModelValue))
            ]"
            @click.prevent="toggleMenu"
          >
            <div ref="prefixRef" :class="nsSelect.e('prefix')">
              <slot name="prefix">
                <g-icon-font
                  v-if="prefixIcon"
                  :class="[nsSelect.e('icon'), nsSelect.e('prefix-icon')]"
                  :name="prefixIcon"
                />
              </slot>
            </div>

            <div
              ref="selectionRef"
              :class="[
                nsSelect.e('selection'),
                nsSelect.is('near', multiple && !$slots.prefix && !!modelValue.length)
              ]"
            >
              <slot v-if="multiple" name="tag">
                <div
                  v-for="item in showTagList"
                  :key="getValueKey(getValue(item))"
                  :class="nsSelect.e('selected-item')"
                >
                  <g-tag
                    :closable="!selectDisabled && !getDisabled(item)"
                    :type="tagType"
                    :effect="tagEffect"
                    disable-transitions
                    :style="tagStyle"
                    @close="deleteTag($event, item)"
                  >
                    <span :class="nsSelect.e('tags-text')">
                      <slot name="selectedLabel" :label="getTitle(item)" :value="getValue(item)">
                        {{ getTitle(item) }}
                      </slot>
                    </span>
                  </g-tag>
                </div>

                <g-tooltip
                  v-if="collapseTags && modelValue.length > maxCollapseTags"
                  ref="tagTooltipRef"
                  :disabled="dropdownMenuVisible || !collapseTagsTooltip"
                  :fallback-placements="['bottom', 'top', 'right', 'left']"
                  :effect="effect"
                  placement="bottom"
                  :teleported="teleported"
                >
                  <template #default>
                    <div ref="collapseItemRef" :class="nsSelect.e('selected-item')">
                      <g-tag
                        :closable="false"
                        :type="tagType"
                        :effect="tagEffect"
                        :style="collapseTagStyle"
                        disable-transitions
                      >
                        <span :class="nsSelect.e('tags-text')">
                          + {{ modelValue.length - maxCollapseTags }}
                        </span>
                      </g-tag>
                    </div>
                  </template>
                  <template #content>
                    <div ref="tagMenuRef" :class="nsSelect.e('selection')">
                      <div
                        v-for="selected in collapseTagList"
                        :key="getValueKey(getValue(selected))"
                        :class="nsSelect.e('selected-item')"
                      >
                        <g-tag
                          class="in-tooltip"
                          :closable="!selectDisabled && !getDisabled(selected)"
                          :type="tagType"
                          :effect="tagEffect"
                          disable-transitions
                          @close="deleteTag($event, selected)"
                        >
                          <span :class="nsSelect.e('tags-text')">
                            <slot
                              name="selectedLabel"
                              :label="getTitle(selected)"
                              :value="getValue(selected)"
                            >
                              {{ getTitle(selected) }}
                            </slot>
                          </span>
                        </g-tag>
                      </div>
                    </div>
                  </template>
                </g-tooltip>
              </slot>
              <div
                :class="[
                  nsSelect.e('selected-item'),
                  nsSelect.e('input-wrapper'),
                  nsSelect.is('hidden', !filterable),
                  nsSelect.is('withIcon', Boolean(prefixIcon))
                ]"
              >
                <input
                  :id="inputId"
                  ref="inputRef"
                  v-model="states.inputValue"
                  :style="inputStyle"
                  :autocomplete="autocomplete"
                  :tabindex="tabindex"
                  aria-autocomplete="list"
                  aria-haspopup="listbox"
                  autocapitalize="off"
                  :aria-expanded="expanded"
                  :aria-label="ariaLabel"
                  :class="[nsSelect.e('input')]"
                  :disabled="selectDisabled"
                  role="combobox"
                  :readonly="!filterable"
                  spellcheck="false"
                  type="text"
                  :name="name"
                  @input="onInput"
                  @compositionstart="handleCompositionStart"
                  @compositionupdate="handleCompositionUpdate"
                  @compositionend="handleCompositionEnd"
                  @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                  @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                  @keydown.enter.stop.prevent="onKeyboardSelect"
                  @keydown.esc.stop.prevent="handleEsc"
                  @keydown.delete.stop="handleDel"
                  @click.stop="toggleMenu"
                />
                <span
                  v-if="filterable"
                  ref="calculatorRef"
                  aria-hidden="true"
                  :class="nsSelect.e('input-calculator')"
                  v-text="states.inputValue"
                />
              </div>
              <div v-if="label" :class="[nsSelect.e('label')]" :style="labelStyle">{{ label }}</div>
              <div
                v-if="shouldShowPlaceholder"
                :class="[
                  nsSelect.e('selected-item'),
                  nsSelect.e('placeholder'),
                  nsSelect.is('transparent', !hasModelValue || (expanded && !states.inputValue)),
                  'dynamic-label-select'
                ]"
              >
                <slot
                  v-if="hasModelValue"
                  name="selectedLabel"
                  :label="currentPlaceholder"
                  :value="modelValue"
                >
                  <span>{{ currentPlaceholder }}</span>
                </slot>
                <span v-else>{{ currentPlaceholder }}</span>
              </div>
            </div>
            <div ref="suffixRef" :class="nsSelect.e('suffix')">
              <g-icon-font
                v-if="iconComponent && showArrow"
                v-show="!showClearBtn"
                :class="[nsSelect.e('caret'), nsInput.e('icon'), iconReverse]"
                :name="iconComponent"
              />
              <g-icon-font
                v-if="showClearBtn && clearIcon"
                :class="[nsSelect.e('caret'), nsInput.e('icon'), nsSelect.e('clear')]"
                @click.prevent.stop="handleClear"
                name="regular circle-xmark"
              />
            </div>
          </div>
        </template>
        <template #content>
          <el-select-menu
            ref="menuRef"
            :data="filteredOptions"
            :width="popperSize"
            :hovering-index="states.hoveringIndex"
            :scrollbar-always-on="scrollbarAlwaysOn"
          >
            <template v-if="$slots.header" #header>
              <div :class="nsSelect.be('dropdown', 'header')">
                <slot name="header" />
              </div>
            </template>
            <template #default="scope">
              <slot v-bind="scope" />
            </template>
            <template v-if="$slots.loading && loading" #loading>
              <div :class="nsSelect.be('dropdown', 'loading')">
                <slot name="loading" />
              </div>
            </template>
            <template v-else-if="loading || filteredOptions.length === 0" #empty>
              <div v-if="filteredOptions.length === 0 && !loading">
                <slot name="empty" v-if="$slots.empty" />
                <div v-else :class="nsSelect.be('dropdown', 'empty')">
                  <span :class="nsSelect.bem('dropdown', 'empty', 'title')">
                    No hay coincidencias
                  </span>
                  <span :class="nsSelect.bem('dropdown', 'empty', 'description')">
                    Revisa tu búsqueda o intenta con otras palabras
                  </span>
                </div>
              </div>
              <div v-if="loading" :class="nsSelect.be('dropdown', 'loading')">
                <g-icon-font name="solid spinner" spin-pulse />
              </div>
            </template>
            <template v-if="$slots.footer" #footer>
              <div :class="nsSelect.be('dropdown', 'footer')">
                <slot name="footer" />
              </div>
            </template>
          </el-select-menu>
        </template>
      </g-tooltip>
    </div>
    <slot name="helpText">
      <div v-if="hasHelpInfo" :class="[nsSelect.e('help')]">
        <p :key="selectError ? 'error' : 'help'" :class="helpTextKls">
          {{ selectError ? descriptionError : helpText }}
        </p>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRefs, useSlots } from 'vue'
import { isArray } from 'element-plus/es/utils/index.mjs'
import { ClickOutside } from 'element-plus'
import { GTooltip } from '@flash-global66/g-tooltip'
import { GTag } from '@flash-global66/g-tag'
import { GIconFont } from '@flash-global66/g-icon-font'
import { useCalcInputWidth } from 'element-plus'
import ElSelectMenu from './select-dropdown'
import useSelect from './hooks/use-select'
import { SelectProps, selectEmits } from './defaults'
import { selectV2InjectionKey } from './types/token'

export default defineComponent({
  name: 'GSelect',
  components: {
    ElSelectMenu,
    GTag,
    GTooltip,
    GIconFont
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: selectEmits,
  setup(props, { emit }) {
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props
      const fallback = multiple ? [] : undefined
      // When it is array, we check if this is multi-select.
      // Based on the result we get
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback
      }
      return multiple ? fallback : rawModelValue
    })

    const API = useSelect(
      reactive({
        ...toRefs(props),
        modelValue,
        slots: useSlots()
      }),
      emit
    )
    const { calculatorRef, inputStyle } = useCalcInputWidth()

    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
        modelValue
      }),
      expanded: API.expanded,
      tooltipRef: API.tooltipRef,
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect
    })

    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel
      }
      return API.states.cachedOptions.map((i) => i.label as string)
    })

    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle
    }
  }
})
</script>
