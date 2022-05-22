<template>
  <InputBase>
    <template v-slot:input>
      <input :class="classes.input" type="input" v-model="inputValue" />
    </template>
  </InputBase>
</template>
<script>
import InputBase from '@/Classes/InputBase'

export default {
  components: {
    InputBase,
  },

  data() {
    return {
      inputValue: String,
    }
  },
}
</script>
