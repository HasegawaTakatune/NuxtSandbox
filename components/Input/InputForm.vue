<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'InputForm',
  components: {},
})
export default class InputForm extends Vue {
  @Prop() public id?: string = '';
  @Prop() public label!: string;
  @Prop() public value!: any;
  @Prop() public type: string = 'text';
  @Prop() public options!: Array<any>;
  @Prop() public unit!: string;
  @Prop() public direction: string = 'horizontal';

  @Emit() public input() {
    return this.inputValue;
  }

  @Watch('value') private WatchValue() {
    this.inputValue = this.value;
  }

  @Watch('inputValue') private WatchInputValue() {
    this.input();
  }

  private inputValue: any;
}
</script>

<template>
  <div :class="direction === 'vertical' ? 'form-vertical' : 'form-horizontal'">
    <label class="w-16 pr-2" v-if="label" :for="id">{{ label }}</label>
    <div>
      <input
        :id="id"
        class="border-solid border-2 border-gray-600 rounded-md"
        v-if="type === 'text' || type === 'number'"
        :type="type"
        v-model="inputValue"
      />
      <select :id="id" v-else-if="type === 'select'" v-model="inputValue">
        <option
          class="form-select appearance-none block w-full m-0 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          v-for="(option, index) in options"
          :key="index"
        >
          {{ options }}
        </option>
      </select>
      <slot name="side"></slot>
    </div>
  </div>
</template>
