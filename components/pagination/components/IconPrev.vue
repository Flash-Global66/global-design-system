<template>
  <font-awesome-icon :icon="['far', 'angle-left']" />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/pro-regular-svg-icons';

library.add( faTimesCircle );

export default defineComponent({
  name: 'IconArrow',
  components: {
    FontAwesomeIcon
  },
});
</script>