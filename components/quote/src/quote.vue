<template>
  <div :class="ns.b()">
    <p v-if="availableBalance" :class="ns.e('available')">
      {{ availableLabel }}
      <span :class="ns.e('available-value')">{{ availableBalance }}</span>
    </p>

    <div :class="ns.e('card-group')">
    <div :class="[ns.e('card'), ns.is('error', hasCardError)]">
      <div
        v-if="!singleInput"
        :class="ns.e('input-from')"
      >
        <quote-input
          :label="fromLabel"
          :value="fromAmount"
          :currency-code="fromCurrency"
          :currencies="fromCurrencies"
          :flag-code="props.fromFlagCode ?? fromCurrencyObj?.flagCountryCode"
          :is-fading="isSwapFading"
          :is-disabled="isDisabled"
          :has-error="action === 'FromError' || action === 'Error'"
          :is-empty-value="action === 'NoValue'"
          :quote-done="isFromQuoteDone"
          :placeholder="fromPlaceholder"
          :empty-results-text="emptyResultsText"
          @input="onFromInput"
          @blur="emit('from-blur', $event)"
          @focus="onFromFocus"
          @currency-change="emit('from-currency-change', $event)"
        />
      </div>

      <div v-if="!singleInput && showSwap" :class="ns.e('divider')">
        <button
          type="button"
          :class="ns.e('swap-btn')"
          :disabled="isDisabled"
          :aria-label="swapAriaLabel"
          @click="onSwap"
        >
          <span :class="ns.e('swap-icon')" :style="{ transform: swapTransform }">
            <g-icon-font name="duotone arrows-repeat" />
          </span>
        </button>
      </div>

      <div :class="ns.e('input-to')">
        <quote-input
          :label="toLabel"
          :value="toAmount"
          :currency-code="toCurrency"
          :currencies="toCurrencies"
          :flag-code="props.toFlagCode ?? toCurrencyObj?.flagCountryCode"
          :is-fading="isSwapFading"
          :is-disabled="isDisabled"
          :has-error="action === 'ToError'"
          :is-empty-value="action === 'NoValue'"
          :is-result="true"
          :quote-done="isToQuoteDone"
          :placeholder="toPlaceholder"
          :empty-results-text="emptyResultsText"
          @input="onToInput"
          @blur="emit('to-blur', $event)"
          @focus="onToFocus"
          @currency-change="emit('to-currency-change', $event)"
        />
      </div>

    </div>

    <div v-if="hasCardError" :class="ns.e('action')">
      <slot name="action">
        <button
          type="button"
          :class="ns.e('action-link')"
          @click="emit('action-click')"
        >
          {{ actionText }}
          <g-icon-font name="regular chevron-right" />
        </button>
      </slot>
    </div>

    <p v-if="errorMessage" :class="ns.e('error-message')">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from 'element-plus'
import { GIconFont } from '@flash-global66/g-icon-font'
import QuoteInput from './components/quote-input.vue'
import { quoteProps, quoteEmits } from './quote'
import { useQuote } from './use-quote'

defineOptions({ name: 'GQuote' })

const ns = useNamespace('quote')
const props = defineProps(quoteProps)
const emit = defineEmits(quoteEmits)

const {
  hasCardError,
  fromCurrencyObj,
  toCurrencyObj,
  isFromQuoteDone,
  isToQuoteDone,
  fromPlaceholder,
  toPlaceholder,
  swapTransform,
  isSwapFading,
  onFromInput,
  onToInput,
  onFromFocus,
  onToFocus,
  onSwap,
} = useQuote(props, emit)
</script>
