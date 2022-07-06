<script>
import Vue from 'vue';

import InputForm from '~/components/Input/InputForm.vue';

export default Vue.extend({
  components: {
    InputForm,
  },

  layout: 'default',
  name: 'ComponentPage',

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

  data() {
    return {
      textValue: '',
    };
  },
});
</script>

<template>
  <div class="px-4">
    <input-form id="input-text" type="text" label="Text" v-model="textValue" />
  </div>
</template>
