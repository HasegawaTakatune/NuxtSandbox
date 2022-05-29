<script lang="ts">
import Vue from 'vue';
import { ChainFirst, Dictionary, ChainData, Chain } from './Modules/DataType';

export default Vue.extend({
  name: 'ChainFirst',

  // props: {
  //   GettName: Function,
  //   name: String,
  // },

  data(): ChainData {
    return {
      chain: new Chain('first-id', 'First', ''),
      // firstId: 'first-id',
      // firstLabel: 'First',
      // firstName: '',
      // names: new Dictionary(),
    };
  },

  // watch: {
  //   name: function (value: string): void {
  //     const out = this.ConcatName(this.firstName, value);
  //     this.$emit('on-input', out);
  //   },
  // },

  methods: {
    // TestMethod(value: any) {
    //   console.log(`TestMethod: ${this.$options.name}`);
    //   console.log(`Called  ${value}`);
    // },

    // ConcatName(front?: string, back?: string): string | null {
    //   const FRONT = 1;
    //   const BACK = 2;
    //   const BOTH = 3;

    //   const type = (front ? 1 : 0) + (back ? 2 : 0);
    //   let result: any = null;

    //   switch (type) {
    //     case FRONT:
    //       result = front;
    //       break;

    //     case BACK:
    //       result = back;
    //       break;

    //     case BOTH:
    //       result = `${front}-${back}`;
    //       break;

    //     default:
    //       break;
    //   }
    //   return result ?? null;
    // },

    InputFirstValue(e: any) {
      Chain.names.set(this.$options.name, e.target.value);
      // // console.log(e);
      // // console.log(e.target.value);

      // this.names.set(this.$options.name, e.target.value);
      // // console.log(`key: ${this.$options.name} value: ${this.names.join('-', this.$options.name)}`);

      // const out = this.ConcatName(e.target.value, this.name);
      // this.$emit('on-input', out);
    },
  },

  mounted() {
    Chain.names.push(this.$options.name, this.chain.inputValue);
    //   this.names.push(this.$options.name, this.name);
    //   // console.log(`Called mounted ${this.$options.name}`);
    //   this.TestMethod(this.$options.name);
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
      v-model="chain.name"
      @input="InputFirstValue"
    />
  </span>
</template>