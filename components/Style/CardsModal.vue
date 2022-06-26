<script lang="ts">
import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import { TModal } from 'vue-tailwind/dist/components';

export default Vue.extend({
  name: 'CardsModal',

  components: {
    TModal,
  },

  props: {},

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    ShowModal() {
      this.isShow = true;
    },

    CloseModal() {
      this.isShow = false;
    },
  },
});
</script>

<template>
  <div>
    <t-modal header="All cards" v-model="isShow">
      <slot name="body"></slot>

      <template v-slot:footer>
        <div class="flex justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            @click="isShow = false"
          >
            Close
          </button>
        </div>
      </template>
    </t-modal>
  </div>
</template>
