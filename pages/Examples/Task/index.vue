<script>
import Vue from 'vue';

export default Vue.extend({
  components: {},

  layout: 'default',
  name: 'Task',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: 'タスク処理のサンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: 'タスク処理のサンプル' },
      ],
    };
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {},
});
</script>

<template>
  <div></div>
</template>
