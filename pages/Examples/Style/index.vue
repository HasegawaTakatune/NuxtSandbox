<script>
import Vue from 'vue';

import CardCase1 from '~/components/Style/CardCase1.vue';
import CardCase2 from '~/components/Style/CardCase2.vue';
import CardsModal from '~/components/Style/CardsModal.vue';

export default Vue.extend({
  components: {
    CardCase1,
    CardCase2,
    CardsModal,
  },

  layout: 'default',
  name: 'Style',

  head() {
    return {
      title: this.$options.name,
      meta: [
        { hid: 'description', name: 'description', content: 'SCSSスタイルの作り分けサンプル' },
        { hid: 'og:title', name: 'og:title', content: this.$options.name },
        { hid: 'og:description', name: 'og:description', content: 'SCSSスタイルの作り分けサンプル' },
      ],
    };
  },

  data() {
    return {
      defaultOptions: ['primary', 'warning', 'danger'],
      vanpOptions: ['violet', 'wine', 'blood'],

      type: '',

      pattern: 'pattern1',
      patterns: ['pattern1', 'pattern2'],
    };
  },

  mounted() {
    this.options = this.defaultOptions;
  },

  methods: {
    ShowModal() {
      this.$refs.CardsModal?.ShowModal();
    },
  },

  computed: {
    changePattern() {
      if (this.pattern === 'pattern1') {
        this.type = this.defaultOptions[0];
        return this.defaultOptions;
      } else {
        this.type = this.vanpOptions[0];
        return this.vanpOptions;
      }
    },
  },
});
</script>

<template>
  <div class="Style-sample">
    <div class="flex justify-center">
      <div class="my-3 xl:w-96">
        <select
          v-model="type"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-bold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option></option>
          <option v-for="(option, index) in changePattern" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="my-3 xl:w-96">
        <select
          v-model="pattern"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-bold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option v-for="(option, index) in patterns" :key="index">{{ option }}</option>
        </select>
      </div>
    </div>

    <CardCase1 v-if="pattern === 'pattern1'" :type="type" />
    <CardCase2 v-else :type="type" />

    <div class="w-full text-center">
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="ShowModal"
      >
        Cards
      </button>
      <div>
        <a
          class="text-teal-200 underline-offset-8"
          href="https://github.com/HasegawaTakatune/NuxtSandbox/blob/main/components/Style/css/style.scss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Card style
        </a>
      </div>
    </div>
    <CardsModal ref="CardsModal">
      <template v-slot:body>
        <div v-if="pattern === 'pattern1'">
          <CardCase1 />
          <CardCase1 type="primary" />
          <CardCase1 type="warning" />
          <CardCase1 type="danger" />
          <CardCase1 type="colorful" />
        </div>
        <div v-else>
          <CardCase2 />
          <CardCase2 type="violet" />
          <CardCase2 type="wine" />
          <CardCase2 type="blood" />
        </div>
      </template>
    </CardsModal>
  </div>
</template>
