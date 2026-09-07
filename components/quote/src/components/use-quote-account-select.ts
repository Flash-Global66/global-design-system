import { ref, computed } from 'vue'
import type { SetupContext, Ref, ComputedRef } from 'vue'
import { quoteAccountSelectEmits } from './quote-account-select'
import type { QuoteAccountSelectProps } from './quote-account-select'
import type { QuoteAccount } from '../quote.type'

type QuoteAccountSelectEmit = SetupContext<typeof quoteAccountSelectEmits>['emit']

export interface QuoteAccountGroup {
  currencyCode: string
  accounts: QuoteAccount[]
}

export interface UseQuoteAccountSelectReturn {
  searchQuery: Ref<string>
  isDropdownOpen: Ref<boolean>
  dropdownRef: Ref<{ handleOpen: () => void } | null>
  dropdownPopperId: string
  triggerId: string
  groupedAccounts: ComputedRef<QuoteAccountGroup[]>
  filteredGroups: ComputedRef<QuoteAccountGroup[]>
  selectedAccount: ComputedRef<QuoteAccount | null>
  badgeLabel: ComputedRef<string>
  isPrimarySelected: ComputedRef<boolean>
  handleAccountSelect: (account: QuoteAccount) => void
  onDropdownVisibleChange: (visible: boolean) => void
}

export function useQuoteAccountSelect(
  props: QuoteAccountSelectProps,
  emit: QuoteAccountSelectEmit
): UseQuoteAccountSelectReturn {
  const dropdownPopperId = `g-qas-${crypto.randomUUID().slice(0, 8)}`
  const triggerId = `g-qas-trigger-${crypto.randomUUID().slice(0, 8)}`

  const dropdownRef = ref<{ handleOpen: () => void } | null>(null)
  const searchQuery = ref('')
  const isDropdownOpen = ref(false)

  /**
   * Agrupa en un solo pase con Map: el orden de las claves es el orden de
   * aparición en `accounts`, no alfabético — ese orden lo decide quien arma
   * el array (producto), no este composable.
   */
  const groupedAccounts = computed<QuoteAccountGroup[]>(() => {
    const groups = new Map<string, QuoteAccount[]>()
    for (const account of props.accounts ?? []) {
      const group = groups.get(account.currencyCode)
      if (group) {
        group.push(account)
      } else {
        groups.set(account.currencyCode, [account])
      }
    }
    return Array.from(groups, ([currencyCode, accounts]) => ({ currencyCode, accounts }))
  })

  const filteredGroups = computed<QuoteAccountGroup[]>(() => {
    if (!searchQuery.value) return groupedAccounts.value
    const query = searchQuery.value.toLowerCase()
    return groupedAccounts.value
      .map((group) => ({
        currencyCode: group.currencyCode,
        accounts: group.accounts.filter(
          (account) =>
            account.name.toLowerCase().includes(query) ||
            account.description.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.accounts.length > 0)
  })

  const selectedAccount = computed<QuoteAccount | null>(
    () => (props.accounts ?? []).find((account) => account.id === props.accountId) ?? null
  )

  const badgeLabel = computed<string>(() => {
    if (!selectedAccount.value) return ''
    return selectedAccount.value.isPrimary
      ? props.primaryAccountLabel
      : (selectedAccount.value.badgeLabel ?? '')
  })

  const isPrimarySelected = computed<boolean>(() => Boolean(selectedAccount.value?.isPrimary))

  function handleAccountSelect(account: QuoteAccount): void {
    emit('account-change', account)
  }

  function onDropdownVisibleChange(visible: boolean): void {
    isDropdownOpen.value = visible
    if (!visible) {
      searchQuery.value = ''
    }
  }

  return {
    searchQuery,
    isDropdownOpen,
    dropdownRef,
    dropdownPopperId,
    triggerId,
    groupedAccounts,
    filteredGroups,
    selectedAccount,
    badgeLabel,
    isPrimarySelected,
    handleAccountSelect,
    onDropdownVisibleChange,
  }
}
