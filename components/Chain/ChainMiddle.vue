<script lang="ts">
import ChainFirst from './ChainFirst.vue';
import { ChainData, Chain } from './Modules/DataType';

export default ChainFirst.extend({
  components: { ChainFirst },
  name: 'ChainMiddle',

  data(): ChainData {
    return {
      chain: new Chain('middle-id', 'Middle', ''),
    };
  },

  watch: {
    'chain.inputValue': function () {
      console.log(`Chain middle name: ${this.chain.inputValue}`);
      Chain.names.set(this.$options.name, this.chain.inputValue);
    },
  },

  methods: {
    InputValueMiddle(e: any) {
      console.log(`Called ${this.$options.name}`);

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
    <chain-first />
    <label :for="chain.id">{{ chain.label }}</label>
    <span>:</span>
    <input
      class="border-solid border-2 border-gray-600 rounded-md"
      :id="chain.id"
      type="text"
      v-model="chain.inputValue"
      @input="InputValueMiddle;"
    />
  </span>
</template>