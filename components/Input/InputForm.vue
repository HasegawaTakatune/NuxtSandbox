<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'InputForm',
  components: {},
})
export default class InputForm extends Vue {
  @Prop() public id?: string;
  @Prop() public label: string | undefined;
  @Prop() public value: any;
  @Prop({ default: 'text' }) public type?: string;
  @Prop() public options?: Array<any>;
  @Prop() public unit?: string;
  @Prop({ default: 'horizontal' }) public direction?: string; // horizontal vertical

  @Emit() public input() {
    return this.inputValue;
  }

  @Watch('value') private WatchValue() {
    this.inputValue = this.value;
  }

  @Watch('inputValue') private WatchInputValue() {
    this.input();
  }

  private inputValue: any = null;
}
</script>

<template>
  <div :class="`form-${direction}`">
    <label :for="id" class="w-16 pr-2" v-if="label">{{ label }}</label>
    <div>
      <input
        :id="id"
        v-if="type === 'text' || type === 'number'"
        class="border-solid border-2 border-gray-600 rounded-md"
        :type="type"
        v-model="inputValue"
      />
      <select
        :id="id"
        v-else-if="type === 'select'"
        v-model="inputValue"
        class="form-select appearance-none block m-0 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
      <slot name="side"></slot>
    </div>
  </div>
</template>
