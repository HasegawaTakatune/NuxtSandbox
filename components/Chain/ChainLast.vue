<script lang="ts">
import ChainMiddle from './ChainMiddle.vue';
import { ChainData, FullName, Chain } from './Modules/DataType';

export default ChainMiddle.extend({
  components: { ChainMiddle },
  name: 'ChainLast',

  data(): ChainData | FullName {
    return {
      chain: new Chain('chain-last', 'Last', ''),
      fullName: '',
    };
  },

  watch: {
    'chain.inputValue': function () {
      Chain.names.set(this.$options.name, this.chain.inputValue);
    },
  },

  methods: {
    SetName() {
      this.$data.fullName = Chain.names.join('-');
    },
  },

  mounted() {
    Chain.names.push(this.$options.name, this.chain.inputValue);
  },
});
</script>

<template>
  <div>
    <div>
      <chain-middle />
      <label :for="chain.id">{{ chain.label }}</label>
      <span>:</span>
      <input class="border-solid border-2 border-gray-600 rounded-md" :id="chain.id" type="text" v-model="chain.inputValue" />
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="SetName"
    >
      Set
    </button>
    <span>Name: {{ fullName }}</span>
  </div>
</template>
