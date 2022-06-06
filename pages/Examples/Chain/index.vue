<template>
  <div>
    <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
      <h2 class="font-bold text-purple-900">Chain data</h2>
      <chain-last />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChainLast from '~/components/Chain/ChainLast.vue';

export default Vue.extend({
  layout: 'default',
  components: { ChainLast },
  name: 'ChainPage',
});
</script>
