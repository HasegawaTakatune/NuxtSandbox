<template>
  <v-card class="mx-auto" width="1000" outlined>
    <input-text :value="value1"></input-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import InputText from '@/components/InputComponents/input-text.vue'

export default Vue.extend({
  components: {
    InputText,
  },

  data() {
    return {
      value1: '',
    }
  },
})
</script>