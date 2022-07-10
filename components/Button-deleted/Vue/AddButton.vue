<script lang="ts">
import Vue from "vue";
import ButtonBase from "./ButtonBase.vue";

export type DataType = {
  isDown: Boolean;
};

export default ButtonBase.extend({
  name: "AddButtonVue",

  components: {
    ButtonBase: {
      methods: {
        Init(): void {
          console.log(`Created >> ${this.name}`);
          this.Init();
        },

        MouseDown(): void {
          this.isDown = true;
          this.MouseDown();
        },

        MouseUp(): void {
          this.isDown = false;
          this.MouseUp();
        },
      },
    },
  },

  data(): DataType {
    return {
      isDown: false,
    };
  },
});
</script>

<template>
  <div>
    <button-base></button-base>
    <p v-if="isDown">Press</p>
  </div>
</template>