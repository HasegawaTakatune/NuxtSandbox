<template>
  <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md bg-gray-700 text-blue-500">
    <h1 class="font-bold text-center">Index</h1>
    <div class="grid-cols-6">
      <nuxt-link
        class="py-2 px-24 text-sm bg-gray-800 font-semibold rounded-md shadow-lg focus:outline-none border-double border-4 border-blue-500"
        to="/Examples/Chain"
      >
        Chain
      </nuxt-link>

      <nuxt-link
        class="py-2 px-24 text-sm bg-gray-800 font-semibold rounded-md shadow-lg focus:outline-none border-double border-4 border-blue-500"
        to="/Examples/Relationship"
      >
        Relationship
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
});
</script>
