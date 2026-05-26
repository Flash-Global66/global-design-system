<template>
  <div
    :class="[
      ns.b(),
      ns.is('disabled', isDisabled),
      ns.is('error', hasError),
    ]"
  >
    <label :for="inputId" :class="ns.e('label')">{{ label }}</label>

    <div :class="[ns.e('row'), ns.is('fading', isFading)]">
      <div :class="ns.e('amount-wrapper')">
        <input
          :id="inputId"
          ref="inputRef"
          :class="[
            ns.e('amount'),
            ns.is('empty', isEmptyValue && numberValue === null),
            ns.is('big', isBig),
            ns.is('error', hasError),
            ns.is('disabled', isDisabled),
          ]"
          type="text"
          inputmode="decimal"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :aria-invalid="hasError"
          autocomplete="off"
          @blur="handleBlur"
          @focus="handleFocus"
        />
      </div>
      <g-dropdown
        ref="dropdownRef"
        trigger="click"
        placement="bottom-end"
        :popper-class="`${ns.e('dropdown-popper')} ${dropdownPopperId}`"
        :disabled="isDisabled || !hasCurrencyOptions"
        @command="handleCurrencySelect"
        @visible-change="onDropdownVisibleChange"
      >
        <div
          :class="[
            ns.e('currency'),
            ns.is('open', isDropdownOpen),
            ns.is('disabled', isDisabled),
          ]"
          :aria-label="`Seleccionar moneda ${currencyCode}`"
        >
          <span :class="ns.e('flag-group')">
            <span :class="ns.e('flag')">
              <slot name="flag">
                <g-country-flag
                  v-if="flagCode || selectedCurrency?.flagCountryCode"
                  :name="(flagCode || selectedCurrency?.flagCountryCode)!"
                  size="xs"
                  aria-hidden="true"
                />
              </slot>
            </span>

            <input
              ref="searchInputRef"
              v-model="searchQuery"
              :class="[
                ns.e('currency-code'),
                ns.is('disabled', isDisabled),
              ]"
              :aria-label="`Buscar moneda, seleccionada: ${currencyCode}`"
              :placeholder="currencyCode"
              :size="((searchQuery || currencyCode).length || 3) + 1"
              :disabled="isDisabled || !hasCurrencyOptions"
              autocomplete="off"
              @click="handleInputClick"
              @input="handleSearchInput"
            />
          </span>

          <span
            v-if="showArrow && hasCurrencyOptions"
            :class="[
              ns.e('arrow'),
              ns.is('disabled', isDisabled),
              ns.is('open', isDropdownOpen),
            ]"
            aria-hidden="true"
          >
            <g-icon-font name="regular chevron-down" />
          </span>
        </div>

        <template #dropdown>
          <g-dropdown-menu :class="ns.e('dropdown')">
            <g-dropdown-item
              v-for="currency in filteredCurrencies"
              :key="`${currency.code}-${currency.name}`"
              :command="currency"
              :title="currency.name"
              :class="{ [ns.is('active')]: currency.code === currencyCode }"
            >
              <span :class="ns.e('dropdown-item')">
                <g-country-flag
                  v-if="currency.flagCountryCode"
                  :name="currency.flagCountryCode"
                  size="md"
                  aria-hidden="true"
                />
                <span :class="ns.e('dropdown-label')">
                  <span :class="ns.e('dropdown-code')">({{ currency.code }})</span>
                  {{ currency.name }}
                </span>
              </span>
            </g-dropdown-item>
            <div v-if="filteredCurrencies.length === 0" :class="ns.e('dropdown-empty')">
              {{ emptyResultsText }}
            </div>
          </g-dropdown-menu>
        </template>
      </g-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from 'element-plus'
import { GIconFont } from '@flash-global66/g-icon-font'
import { GDropdown, GDropdownMenu, GDropdownItem } from '@flash-global66/g-dropdown'
import { GCountryFlag } from '@flash-global66/g-country-flag'
import { quoteInputProps, quoteInputEmits } from './quote-input'
import { useQuoteInput } from './use-quote-input'

defineOptions({ name: 'GQuoteInput' })

const ns = useNamespace('quote-input')
const props = defineProps(quoteInputProps)
const emit = defineEmits(quoteInputEmits)

const {
  inputRef,
  searchInputRef,
  searchQuery,
  isDropdownOpen,
  filteredCurrencies,
  hasCurrencyOptions,
  isBig,
  numberValue,
  selectedCurrency,
  inputId,
  dropdownPopperId,
  dropdownRef,
  handleFocus,
  handleBlur,
  handleCurrencySelect,
  onDropdownVisibleChange,
  handleInputClick,
  handleSearchInput,
} = useQuoteInput(props, emit)
</script>