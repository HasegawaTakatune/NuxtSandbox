<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'default',
  name: 'Home',

  data() {
    return {
      rooting: [
        { name: 'Chain', to: '/Examples/Chain' },
        { name: 'Relationship', to: '/Examples/Relationship' },
        { name: 'Prop', to: '/Examples/Prop' },
      ],
    };
  },
});
</script>

<template>
  <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md bg-gray-700 text-blue-500">
    <h1 class="mb-4 font-bold text-center">Index</h1>
    <div class="text-center grid grid-cols-3 gap-2">
      <div v-for="(value, index) in rooting" :key="index">
        <nuxt-link
          class="
            py-2
            px-24
            text-sm
            bg-gray-800
            font-semibold
            rounded-md
            shadow-lg
            focus:outline-none
            border-double border-4 border-blue-500
          "
          :to="value.to"
        >
          {{ value.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>