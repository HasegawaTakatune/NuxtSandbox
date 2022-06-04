<template>
  <div>
    <modal-a v-model="show" />

    <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
      <h2 class="font-bold text-purple-900">Relationship</h2>

      <button @click="show = true">Shop ModalA</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ModalA from '~/components/Relationship/ModalA.vue';

export default Vue.extend({
  components: { ModalA },
  name: 'RelationshipPage',

  data() {
    return {
      show: false,
    };
  },
});
</script>
