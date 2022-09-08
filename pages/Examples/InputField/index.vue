<script>
import Vue from 'vue';

import Simple from '~/components/InputField/Simple.vue';

export default Vue.extend({
  components: {
    Simple,
  },

  layout: 'default',
  name: 'InputField',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: '入力コンポーネントサンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: '入力コンポーネントサンプル' },
      ],
    };
  },

  data() {
    return {};
  },

  methods: {},
});
</script>

<template>
  <div class="frame">
    <simple id="simple1" value="test1" label="Label1" :classes="{ wrapper: 'input-frame' }" />
    <simple id="simple2" value="test2" label="Label2" :classes="{ wrapper: 'input-frame', label: 'input-block' }" />
  </div>
</template>

<style>
.frame {
  margin: 4rem;
}

.input-frame {
  margin: 1rem;
}

.input-block {
  display: block;
}
</style>
