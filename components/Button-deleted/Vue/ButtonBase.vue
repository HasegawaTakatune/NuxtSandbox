<script lang="ts">
import Vue, { PropType } from "vue";

export type Classes = {
  wrapper: string;
  label: string;
  button: string;
};

export type DataType = {
  press: boolean;
  count: number;
};

export default Vue.extend({
  name: "ButtonBaseVue",

  props: {
    name: String,
    classes: Object as PropType<Classes>,
    label: String,
    placeholder: String,
  },

  data(): DataType {
    return {
      press: false,
      count: 0,
    };
  },

  created(): void {
    this.Init();
  },

  computed: {
    IsPress(): boolean {
      return this.press;
    },

    Count(): number {
      return this.count;
    },
  },

  methods: {
    Init(): void {
      console.log(`Created >> ${this.name}`);
    },

    Add(val: number = 1): void {
      this.count += val;
    },

    MouseDown() {
      console.log("Parent mouse down!!");
    },

    MouseUp() {
      console.log("Parent mouse up!!");
    },
  },
});
</script>

<template>
  <div :class="classes.wrapper">
    <label :class="classes.label" for="name">{{ label }}</label>
    <button
      :class="classes.button"
      :id="name"
      @click="Add"
      @mousedown="MouseDown"
      @mouseup="MouseUp"
      @blur="MouseUp"
    >
      {{ placeholder }}
    </button>
  </div>
</template>