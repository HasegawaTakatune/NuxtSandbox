<template>
  <input-base>
    <template v-slot:input>
      <input :class="classes.input" type="input" v-model="inputValue" />
    </template>
  </input-base>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputBase from '@/classes/input-base'

@Component({})
export default class InputText extends InputBase {
  public validation(value: string): void {
    this.message = value === '' ? '必須入力です' : ''
  }
}
</script>
