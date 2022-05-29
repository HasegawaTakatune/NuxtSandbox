<template>
  <chain-last />
</template>

<script lang="ts">
import Vue from "vue";
import ChainLast from "~/components/Chain/ChainLast.vue";

export default Vue.extend({
  components: { ChainLast },
  name: "ChainPage",
});
</script>
