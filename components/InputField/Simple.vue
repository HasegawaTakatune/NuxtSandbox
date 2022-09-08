<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Simple',

  props: {
    id: { type: String, defaut: 'input-field', required: true },
    classes: { type: Object, default: { wrapper: '', label: '', input: '' }, required: false },
    label: { type: String, default: '', required: false },
    value: { type: String, default: '', required: false },
  },

  data() {
    return {
      originValue: '',
    };
  },

  methods: {},

  mounted() {
    this.originValue = this.value;
  },
});
</script>

<template>
  <div :class="classes.wrapper">
    <label :for="id" :class="classes.label">{{ label }}</label>
    <input :id="id" type="text" v-model="originValue" :class="classes.input" />
  </div>
</template>
