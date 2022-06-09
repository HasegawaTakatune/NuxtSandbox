<script>
import Vue from 'vue';

import Card from '~/components/Prop/Card.vue';

export default Vue.extend({
  layout: 'default',
  components: { Card },
  name: 'Prop',

  computed: {
    ShowInputCheckbox() {
      return this.inputCheckbox?.map((val) => `<${val.label}: ${val.checked}>`).join(' - ');
    },
  },

  data() {
    return {
      inputText: 'Default text',
      inputCheckbox: [],
    };
  },

  mounted() {
    for (let i = 1; i < 5; i++) {
      this.inputCheckbox.push({ id: `value${i}`, label: `Value${i}`, checked: i % 2 === 0 });
    }
  },
});
</script>

<template>
  <div>
    <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
      <h2 class="font-bold text-purple-900">Prop and Emit</h2>

      <card :input-text="inputText" :inputCheckbox="inputCheckbox" />
    </div>

    <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Props values</h5>
      Text: {{ inputText }}
      <br />
      Checkbox: {{ ShowInputCheckbox }}
      <br />
    </div>
  </div>
</template>

