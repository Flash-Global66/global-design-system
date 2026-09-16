<template>
  <div :class="ns.b()">
    <g-dropdown
      ref="dropdownRef"
      :id="triggerId"
      trigger="click"
      placement="bottom-end"
      :popper-class="`${ns.e('dropdown-popper')} ${dropdownPopperId}`"
      :disabled="isDisabled"
      @command="handleAccountSelect"
      @visible-change="onDropdownVisibleChange"
    >
      <div :class="ns.e('trigger')">
        <div :class="ns.e('trigger-row')">
          <g-country-flag
            v-if="flagCode ?? selectedAccount?.flagCountryCode"
            :name="(flagCode ?? selectedAccount?.flagCountryCode)!"
            size="xs"
            aria-hidden="true"
          />
          <span :class="ns.e('code')">{{ currencyCode || selectedAccount?.currencyCode }}</span>
          <g-icon-font name="regular chevron-down" />
        </div>

        <span
          v-if="badgeLabel"
          :class="[ns.e('badge'), ns.is('primary', isPrimarySelected)]"
        >
          {{ badgeLabel }}
        </span>
      </div>

      <template #dropdown>
        <div :class="ns.e('panel')">
          <div :class="ns.e('search')">
            <g-input
              v-model="searchQuery"
              type="search"
              suffix-icon="regular search"
              :placeholder="searchPlaceholder"
            />
          </div>

          <g-dropdown-menu :class="ns.e('list')">
            <template v-for="group in filteredGroups" :key="group.currencyCode">
              <p :class="ns.e('group-header')">{{ group.currencyCode }}</p>

              <g-dropdown-item
                v-for="account in group.accounts"
                :key="account.id"
                :command="account"
                :title="account.name"
                :class="[ns.e('item'), ns.is('selected', account.id === accountId)]"
              >
                <g-country-flag
                  :name="account.flagCountryCode"
                  size="md"
                  aria-hidden="true"
                />
                <span :class="ns.e('item-body')">
                  <span :class="ns.e('item-title')">{{ account.name }}</span>
                  <span :class="ns.e('item-description')">{{ account.description }}</span>
                </span>
              </g-dropdown-item>
            </template>

            <p v-if="filteredGroups.length === 0" :class="ns.e('empty')">
              {{ emptyResultsText }}
            </p>
          </g-dropdown-menu>
        </div>
      </template>
    </g-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@flash-global66/g-utils';
import { GIconFont } from '@flash-global66/g-icon-font';
import { GCountryFlag } from '@flash-global66/g-country-flag';
import { GInput } from '@flash-global66/g-input';
import {
  GDropdown,
  GDropdownMenu,
  GDropdownItem,
} from '@flash-global66/g-dropdown';
import { quoteAccountSelectProps, quoteAccountSelectEmits } from './quote-account-select';
import { useQuoteAccountSelect } from './use-quote-account-select';

defineOptions({ name: 'GQuoteAccountSelect' });

const ns = useNamespace('quote-account-select');
const props = defineProps(quoteAccountSelectProps);
const emit = defineEmits(quoteAccountSelectEmits);

const {
  searchQuery,
  dropdownRef,
  dropdownPopperId,
  triggerId,
  filteredGroups,
  selectedAccount,
  badgeLabel,
  isPrimarySelected,
  handleAccountSelect,
  onDropdownVisibleChange,
} = useQuoteAccountSelect(props, emit);
</script>
