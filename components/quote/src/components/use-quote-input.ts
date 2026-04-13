import { ref, watch, computed, nextTick } from 'vue'
import type { SetupContext } from 'vue'
import { useCurrencyInput, CurrencyDisplay } from 'vue-currency-input'
import type { CurrencyInputOptions } from 'vue-currency-input'
import { quoteInputEmits } from './quote-input'
import type { QuoteInputProps } from './quote-input'
import type { Currency } from '../quote.type'

type QuoteInputEmit = SetupContext<typeof quoteInputEmits>['emit']

export function useQuoteInput(props: QuoteInputProps, emit: QuoteInputEmit) {
  const dropdownPopperId = `g-qip-${crypto.randomUUID().slice(0, 8)}`
  const inputId = `g-qi-${crypto.randomUUID().slice(0, 8)}`

  const hasCurrencyOptions = computed(() => (props.currencies?.length ?? 0) > 1)

  const dropdownRef = ref<{ handleOpen: () => void } | null>(null)
  const searchInputRef = ref<HTMLInputElement | null>(null)
  const searchQuery = ref('')
  const isDropdownOpen = ref(false)

  const filteredCurrencies = computed(() => {
    if (!searchQuery.value) return props.currencies ?? []
    const q = searchQuery.value.toLowerCase()
    return (props.currencies ?? []).filter(
      (c) => c.alwaysVisible || c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
    )
  })

  const isFocused = ref(false)
  const isBig = computed(() => isFocused.value && !props.quoteDone && !props.isResult)

  const selectedCurrency = computed<Currency | null>(
    () => props.currencies?.find((c: Currency) => c.code === props.currencyCode) ?? null
  )

  const currencyOptions = computed<CurrencyInputOptions>(() => ({
    currency: 'USD',
    currencyDisplay: CurrencyDisplay.hidden,
    precision: selectedCurrency.value?.decimalPlaces ?? 2,
    locale: selectedCurrency.value?.locale,
    valueRange: { min: 0 },
    useGrouping: true,
    hideGroupingSeparatorOnFocus: false,
    hideCurrencySymbolOnFocus: false,
    hideNegligibleDecimalDigitsOnFocus: false,
  }))

  const { inputRef, numberValue, setValue, setOptions } = useCurrencyInput(
    currencyOptions.value,
    false
  )

  let isExternalUpdate = false

  watch(
    () => props.value,
    (val) => {
      const parsed = val && !isNaN(parseFloat(val)) ? parseFloat(val) : null
      if (parsed !== numberValue.value) {
        isExternalUpdate = true
        setValue(parsed)
      }
    },
    { immediate: true }
  )

  watch(currencyOptions, async (opts) => {
    isExternalUpdate = true
    setOptions(opts)
    await nextTick()
    isExternalUpdate = false
  })

  watch(numberValue, (num) => {
    if (isExternalUpdate) {
      isExternalUpdate = false
      return
    }
    emit('input', num !== null ? String(num) : '')
  })

  function handleFocus() {
    isFocused.value = true
    emit('focus')
  }

  function handleBlur() {
    isFocused.value = false
    emit('blur', numberValue.value !== null ? String(numberValue.value) : '')
  }

  function handleCurrencySelect(currency: Currency) {
    emit('currency-change', currency)
  }

  async function onDropdownVisibleChange(visible: boolean) {
    isDropdownOpen.value = visible
    if (visible) {
      await nextTick()
      searchInputRef.value?.select()
    } else {
      searchQuery.value = ''
    }
  }

  function handleInputClick(e: MouseEvent) {
    if (isDropdownOpen.value) {
      e.stopPropagation()
    }
  }

  function handleSearchInput() {
    if (!isDropdownOpen.value && searchQuery.value) {
      dropdownRef.value?.handleOpen()
    }
  }

  return {
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
  }
}
