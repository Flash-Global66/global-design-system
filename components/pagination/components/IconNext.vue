<template>
  <font-awesome-icon :icon="['far', 'angle-right']" />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';

library.add( faChevronDown );

export default defineComponent({
  name: 'IconArrow',
  components: {
    FontAwesomeIcon
  },
});
</script>