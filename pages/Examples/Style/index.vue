<script>
import Vue from 'vue';

import CardCase1 from '~/components/Style/CardCase1.vue';
import CardsModal from '~/components/Style/CardsModal.vue';

export default Vue.extend({
  components: {
    CardCase1,
    CardsModal,
  },

  layout: 'default',
  name: 'Style',

  data() {
    return {
      type: '',
      options: ['primary', 'warning', 'danger'],
    };
  },

  methods: {
    ShowModal() {
      this.$refs.CardsModal?.ShowModal();
    },
  },
});
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="my-3 xl:w-96">
        <select
          v-model="type"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-bold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option></option>
          <option v-for="(option, index) in options" :key="index">{{ option }}</option>
        </select>
      </div>
    </div>

    <CardCase1 :type="type" />

    <div class="w-full text-center">
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="ShowModal"
      >
        Cards
      </button>
    </div>
    <CardsModal ref="CardsModal">
      <template v-slot:body>
        <CardCase1 />
        <CardCase1 type="primary" />
        <CardCase1 type="warning" />
        <CardCase1 type="danger" />
      </template>
    </CardsModal>
  </div>
</template>
