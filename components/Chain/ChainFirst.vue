<script lang="ts">
import Vue from 'vue';
import { ChainData, Chain } from './Modules/DataType';

export default Vue.extend({
  name: 'ChainFirst',

  data(): ChainData {
    return {
      chain: new Chain('first-id', 'First', ''),
    };
  },

  methods: {
    InputFirstValue(e: any) {
      Chain.names.set(this.$options.name, e.target.value);
    },
  },

  mounted() {
    Chain.names.push(this.$options.name, this.chain.inputValue);
  },
});
</script>

<template>
  <span>
    <label :for="chain.id">{{ chain.label }}</label>
    <span>:</span>
    <input
      class="border-solid border-2 border-gray-600 rounded-md"
      :id="chain.id"
      type="text"
      v-model="chain.inputValue"
      @input="InputFirstValue"
    />
  </span>
</template>