<script>
import Vue from 'vue';

import GameCanvas from '~/components/Game/GameCanvas.vue';

export default Vue.extend({
  components: {
    GameCanvas,
  },

  layout: 'default',
  name: 'Game',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: 'ブロック崩しゲームのVue化練習' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: 'ブロック崩しゲームのVue化練習' },
      ],
    };
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
});
</script>

<template>
  <div>
    <game-canvas></game-canvas>
  </div>
</template>
