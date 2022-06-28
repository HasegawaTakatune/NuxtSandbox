<script>
import Vue from 'vue';
import Card from '~/components/Prop/Card.vue';

export default Vue.extend({
  components: { Card },

  layout: 'default',
  name: 'Prop',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: '型別の値渡しのサンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: '型別の値渡しのサンプル' },
      ],
    };
  },

  computed: {
    ShowInputCheckbox() {
      return this.inputCheckbox?.map((val) => ` ${val.label}: ${val.checked} `).join(' ');
    },
  },

  data() {
    return {
      inputText: 'Default text',
      inputCheckbox: [],
      inputSelected: 'ブリティッシュショートヘア',

      inputObject: {
        text: 'Default object',
        select: { id: 3, name: 'ブリティッシュショートヘア' },
      },
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
      <h2 class="font-bold text-purple-900">Prop</h2>

      <card :input-text="inputText" :inputCheckbox="inputCheckbox" :inputSelect="inputSelected" :inputObject="inputObject" />
    </div>

    <div class="ml-8">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Parent values</h5>
      Text: {{ inputText }}
      <br />
      Checkbox: {{ ShowInputCheckbox }}
      <br />
      Select: {{ inputSelected }}
      <br />
      <br />
      Object Text: {{ inputObject.text }}
      <br />
      Object Select: {{ inputObject.select }}
    </div>
  </div>
</template>
