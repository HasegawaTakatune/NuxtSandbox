<script lang="ts">
import ChainFirst from './ChainFirst.vue';
import { ChainMiddle, ChainData, Chain } from './Modules/DataType';

export default ChainFirst.extend({
  components: { ChainFirst },
  name: 'ChainMiddle',

  //   props: {
  //     name: String,
  //   },

  data(): ChainData {
    return {
      chain: new Chain('middle-id', 'Middle', ''),
      //   middleId: 'middle-id',
      //   middleLabel: 'Middle',
      //   middleName: '',
    };
  },

  //   watch: {
  //     name: function (value: string): void {
  //       this.fullName = `${value}-${this.firstName}`;
  //       console.error(`Call Base Chain >> ${this.fullName}`);
  //     },
  //   },

  methods: {
    InputValueMiddle(e: any) {
      console.log(`Called ${this.$options.name}`);

      Chain.names.set(this.$options.name, e.target.value);
      //   this.names.set(this.$options.name, e.target.value);
      //   //   console.log(`key: ${this.$options.name} value: ${this.names.join('-', this.$options.name)}`);

      //   const out = this.ConcatName(this.middleName, this.name);
      //   this.$emit('on-input', out);
    },
    //   GetName(value: string): string {
    //       let tes = ChainFirst.GetName('test');
    //     return this.$parent.GetName(`${value}-${this.middleName}`);
    //   },

    OnInput(e: any) {
      //   console.log(e);
      //   this.$emit('on-input', e);
    },
  },

  mounted() {
    Chain.names.push(this.$options.name, this.chain.inputValue);

    this.InputValueMiddle('test');

    //   ChainFirst.methods.TestMethod('test');
    // // super.TestMethod('test');
    // this.names.push(this.$options.name, this.name);
    // // console.log(`Called mounted ${this.$options.name}`);
    // // this.TestMehod(this.$options.name);
  },
});
</script>

<template>
  <span>
    <chain-first @on-input="OnInput" />
    <label :for="chain.id">{{ chain.label }}</label>
    <span>:</span>
    <input
      class="border-solid border-2 border-gray-600 rounded-md"
      :id="chain.id"
      type="text"
      v-model="chain.name"
      @input="InputValueMiddle;"
    />
  </span>
</template>