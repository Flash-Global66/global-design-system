<template>
  <section :class="ns.b()">
    <div :class="ns.e('body')">
      <component
        :is="headingTag"
        v-if="title || $slots.title"
        :class="ns.e('title')"
      >
        <slot name="title">{{ title }}</slot>
      </component>
      <p v-if="description" :class="ns.e('description')">
        {{ description }}
      </p>
      <ul :class="ns.e('benefits')">
        <li
          v-for="benefit in benefits"
          :key="`${benefit.icon} ${benefit.text}`"
          :class="ns.e('benefit')"
        >
          <span :class="ns.e('benefit-icon')" aria-hidden="true">
            <g-icon-font :name="benefit.icon" />
          </span>
          <span :class="ns.e('benefit-text')">{{ benefit.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GIconFont } from '@flash-global66/g-icon-font';
import { benefitsCardProps } from './props/benefits-card.props';
import { useBenefitsCard } from './composables/useBenefitsCard';

defineOptions({
  name: 'GBenefitsCard',
});

const props = defineProps(benefitsCardProps);

const { ns, headingTag } = useBenefitsCard(props);
</script>

<style lang="scss" src="./styles/benefits-card.style.scss"></style>
