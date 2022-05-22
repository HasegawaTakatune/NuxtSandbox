<template>
  <div :class="classes.wrapper">
    <div :class="{ 'input_base-horizontal': isHorizontal }">
      <label :class="classes.title" for="" v-text="title"></label>
      <slot name="input" :class="classes.input"></slot>
    </div>
    <p :class="classes.validater" v-text="message"></p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Classes from "@/components/Modules/Classes";
import Validate from "~/components/Modules/Validate";

@Component
export default class InputBase extends Vue {
  @Prop({ type: String, required: false })
  protected id: string = "";

  @Prop({ type: String, required: false })
  protected title: string = "";

  @Prop({ type: String, required: false })
  protected placeholder: string = "";

  @Prop({ type: Classes, required: false })
  protected classes: Classes = {
    wrapper: "",
    title: "",
    input: "",
    validater: "",
  };

  @Prop({ type: String, required: false })
  protected message: String = "";

  @Prop({ type: Boolean, required: false })
  protected isHorizontal: Boolean = false;

  @Prop({ type: String, required: false })
  protected rule: Array<String> = [];

  @Prop({ type: Number, required: false })
  protected length: Number = 9999;

  public Validation(value: any) {
    let message: Array<String> = [];

    this.rule.forEach((options) => {
      switch (options) {
        case Validate.REQUIRED:
          console.log(`${value} rule required!!`);
          message.push("rule required!!");
          break;

        case Validate.ALPHA_ONLY:
          console.log("rule alpha only!!");
          message.push("rule alpha only!!");
          break;

        case Validate.MAX_LENGTH:
          console.log("rule max length!!");
          message.push("rule max length!!");
          break;

        case Validate.MIN_LENGTH:
          console.log("rule min length!!");
          message.push("rule min length!!");
          break;

        case Validate.POSTAL_CODE:
          console.log("rule postal code!!");
          message.push("rule postal code!!");
          break;

        default:
          break;
      }
    });

    return message;
  }
}
</script>

<style scoped>
.input_base-horizontal {
  display: inline-block;
}
</style>