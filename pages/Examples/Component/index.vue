<script>
import Vue from 'vue';

import InputForm from '~/components/Input/InputForm.vue';

export default Vue.extend({
  components: {
    InputForm,
  },

  layout: 'default',
  name: 'ComponentPage',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: '入力コンポーネントサンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: '入力コンポーネントサンプル' },
      ],
    };
  },

  data() {
    return {
      textValue1: '',
      textValue2: '',

      numberValue1: 0,
      numberValue2: 0,
      result: 0,

      selectValue1: null,
      selectValue2: null,

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
    };
  },

  methods: {
    onClickOpt() {
      this.result = Number.parseInt(this.numberValue1) + Number.parseInt(this.numberValue2);
    },
  },
});
</script>

<template>
  <div class="grid mx-8 px-4 p-6 w-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="contents-group">
      <input-form class="mx-4" id="input-text1" v-model="textValue1" type="text" label="Text" direction="horizontal" />
      <input-form class="mx-4" id="input-text2" v-model="textValue2" type="text" label="Text" direction="vertical" />
    </div>

    <div class="contents-group">
      <input-form
        class="mx-4"
        id="input-select1"
        v-model="selectValue1"
        type="select"
        label="Select"
        direction="horizontal"
        :options="options"
      />
      <input-form
        class="mx-4"
        id="input-select2"
        v-model="selectValue2"
        type="select"
        label="Select"
        direction="vertical"
        :options="options"
      />
    </div>

    <div class="contents-group">
      <input-form class="mx-4" id="input-number1" v-model="numberValue1" type="number" label="Addition">
        <template slot="side"> <span class="pl-8">+</span> </template>
      </input-form>
      <input-form class="mx-4" id="input-number2" v-model="numberValue2" type="number" label="">
        <template slot="side"
          ><button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            @click="onClickOpt"
          >
            =
          </button></template
        >
      </input-form>
      <span>{{ result }}</span>
    </div>

    <input-form class="mx-4" id="input-number1" type="number" label="Number">
      <template slot="side"> <span class="pl-8">cm</span> </template>
    </input-form>
  </div>
</template>

<style>
.grid {
  display: grid;
}

.contents-group {
  display: inline-flex;
  height: 100px;
  place-items: center;
}
</style>
