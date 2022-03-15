<template>
  <div :class="classes.wrapper">
    <div>
      <label :class="classes.title" for="" v-text="title"></label>
      <slot name="input"></slot>
    </div>
    <p :class="classes.validater" v-text="message"></p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue, Emit } from 'vue-property-decorator'
import InputClasses from '@/modules/input-classes'

@Component
export default class InputBase extends Vue {
  @Prop({ type: String, required: true })
  public value: string = ''

  @Prop({ type: String, required: false, default: '' })
  public title: string = ''

  @Prop({ type: String, required: false, default: '' })
  public placeholder: string = ''

  @Prop({ type: InputClasses, required: false, default: '' })
  public classes: InputClasses = {
    wrapper: '',
    title: '',
    input: '',
    validater: '',
  }

  protected inputValue: string = ''
  protected message: string = ''

  public init(): void {
    // 初期化処理
    // ライフサイクルのメソッドをオーバーライドして使うと、親クラスと子クラスそれぞれで初期化処理が
    // 呼ばれてしまう。親クラスの初期化をオーバーライドすることで、初期化タイミングを合わせる。
  }

  validate({ params }: { params: any }) {
    this.validation(params.inputValue)
  }

  public validation(value: string): void {
    // バリデーションチェック
  }

  @Watch('value')
  protected onInputValue(newValue: string, oldValue: string) {
    this.inputValue = newValue
  }

  @Emit() protected onInput(): void {}

  created() {
    this.init()
  }
}
</script>