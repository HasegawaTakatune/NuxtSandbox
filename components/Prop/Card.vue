<script>
import Vue from 'vue';
import InputFrame from './InputFrame.vue';

export default Vue.extend({
  components: {
    InputFrame,
  },
  name: 'Card',

  props: {
    inputText: {
      type: String,
      required: true,
    },

    inputCheckbox: {
      type: Array,
      required: true,
    },

    inputSelect: {
      type: String,
      required: true,
    },

    inputObject: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      options: [
        'スコティッシュフォールド',
        'アメリカンショートヘア',
        'ラグドール',
        'ブリティッシュショートヘア',
        'ロシアンブルー',
        'マンチカン',
        'ベンガル猫',
        'シャム猫',
      ],

      reactiveObj: null,
    };
  },
});
</script>

<template>
  <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Component</h5>
    </div>

    <input-frame type="text" label="Inpu Text" :value="inputText" />
    <br />
    <input-frame type="checkbox" label="Inpu Checkbox" :value="inputCheckbox" />
    <br />
    <input-frame type="select" label="Input Select" :value="inputSelect" :options="options" />
    <br />
    <br />
    <p>Objects</p>
    <input-frame type="text" label="Inpu Text" :value="inputObject" />
    <br />
    <input-frame type="select" label="Input Select" :value="inputObject.select" :options="options" />
    <br />
  </div>
</template>
