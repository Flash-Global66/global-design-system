import { computed, nextTick, ref, watch } from 'vue'
import type { SetupContext } from 'vue'
import type { QuoteProps } from './quote'
import { quoteEmits } from './quote'
import type { Currency } from './quote.type'

type QuoteEmit = SetupContext<typeof quoteEmits>['emit']

const SWAP_FADE_MS = 200

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useQuote(props: QuoteProps, emit: QuoteEmit) {
  const isFromQuoteDone = ref(false)
  const isToQuoteDone = ref(false)

  const fromCurrencyObj = computed(() =>
    props.fromCurrencies?.find((c: Currency) => c.code === props.fromCurrency) ?? null
  )

  const toCurrencyObj = computed(() =>
    props.toCurrencies?.find((c: Currency) => c.code === props.toCurrency) ?? null
  )

  const hasCardError = computed(
    () => props.action === 'FromError' || props.action === 'ToError' || props.action === 'Error'
  )

  const fromPlaceholder = computed(() => {
    const decimals = fromCurrencyObj.value?.decimalPlaces ?? 2
    return decimals > 0
      ? `0${fromCurrencyObj.value?.decimalSeparator ?? ','}${'0'.repeat(decimals)}`
      : '0'
  })

  const toPlaceholder = computed(() => {
    const decimals = toCurrencyObj.value?.decimalPlaces ?? 2
    return decimals > 0
      ? `0${toCurrencyObj.value?.decimalSeparator ?? ','}${'0'.repeat(decimals)}`
      : '0'
  })

  const swapRotation = ref(90)
  const swapTransform = computed(() => `rotate(${swapRotation.value}deg)`)
  const isSwapFading = ref(false)

  watch(
    () => props.isLoading,
    (isLoading, wasLoading) => {
      if (wasLoading && !isLoading) {
        isFromQuoteDone.value = true
        isToQuoteDone.value = true
      }
    }
  )

  function onFromInput(value: string) {
    isFromQuoteDone.value = false
    isToQuoteDone.value = false
    emit('from-input', value)
  }

  function onToInput(value: string) {
    isFromQuoteDone.value = false
    isToQuoteDone.value = false
    emit('to-input', value)
  }

  function onFromFocus() {
    isFromQuoteDone.value = false
    emit('from-focus')
  }

  function onToFocus() {
    isToQuoteDone.value = false
    emit('to-focus')
  }

  async function onSwap() {
    isSwapFading.value = true
    await delay(SWAP_FADE_MS)
    emit('swap', {
      from: props.toCurrency,
      to: props.fromCurrency,
      fromAmount: props.toAmount || '',
      toAmount: props.fromAmount || '',
      fromFlagCode: props.toFlagCode,
      toFlagCode: props.fromFlagCode,
    })
    await nextTick()
    isSwapFading.value = false
    swapRotation.value = (swapRotation.value + 180) % 360
  }

  return {
    isFromQuoteDone,
    isToQuoteDone,
    fromCurrencyObj,
    toCurrencyObj,
    hasCardError,
    fromPlaceholder,
    toPlaceholder,
    swapTransform,
    isSwapFading,
    onFromInput,
    onToInput,
    onFromFocus,
    onToFocus,
    onSwap,
  }
}
