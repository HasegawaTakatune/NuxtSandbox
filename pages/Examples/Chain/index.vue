<script>
import Vue from 'vue';
import ChainLast from '~/components/Chain/ChainLast.vue';

export default Vue.extend({
  components: { ChainLast },

  layout: 'default',
  name: 'ChainPage',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: 'コンポーネント間の連結サンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: 'コンポーネント間の連結サンプル' },
      ],
    };
  },
});
</script>

<template>
  <div>
    <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
      <h2 class="font-bold text-purple-900">Chain data</h2>
      <chain-last />
    </div>
  </div>
</template>
