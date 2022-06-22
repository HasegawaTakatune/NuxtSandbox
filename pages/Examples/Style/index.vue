<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Style/Card.vue';

export default Vue.extend({
  components: {
    Card,
  },

  layout: 'default',
  name: 'Style',

  data() {
    return {};
  },
});
</script>

<template>
  <div>
    <Card />
  </div>
</template>