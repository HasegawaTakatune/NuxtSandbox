<script lang="ts">
import func from '~/vue-temp/vue-editor-bridge';
import ChainMiddle from './ChainMiddle.vue';
import { ChainLast, ChainData, Chain } from './Modules/DataType';

export default ChainMiddle.extend({
  components: { ChainMiddle },
  name: 'ChainLast',

  data(): ChainData {
    return {
      chain: new Chain('chain-last', 'Last', ''),
      //   lastId: 'chain-last',
      //   lastLabel: 'Last',
      //   lastName: '',
      //   fullName: '',
    };
  },

  computed: {
    fullName: function () {
      return Chain.names.join('-');
    },
  },

  methods: {
    InputValue(e: any) {
      Chain.names.set(this.$options.name, e.target.value);
      //   this.names.set(this.$options.name, e.target.value);
      //   console.log(`key: ${this.$options.name} value: ${this.names.join('-', this.$options.name)}`);
      //   console.log(this.names);
    },

    OnInput(name: any) {
      //   console.log(`Name: ${name}`);
      //   this.fullName = name;
    },
  },

  mounted() {
    Chain.names.push(this.$options.name, this.chain.inputValue);
    // this.names.push(this.$options.name, this.name);
    // // console.log(`Called mounted ${this.$options.name}`);
    // this.TestMethod(this.$options.name);
  },
});
</script>

<template>
  <div>
    <div>
      <chain-middle @on-input="OnInput" />
      <label :for="chain.id">{{ chain.label }}</label>
      <span>:</span>
      <input
        class="border-solid border-2 border-gray-600 rounded-md"
        :id="chain.id"
        type="text"
        v-model="chain.name"
        @input="InputValue"
      />
    </div>
    Name: {{ fullName }}
  </div>
</template>