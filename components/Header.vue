<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
});
</script>

<template>
  <header>
    <nuxt-link to="/"><h1>Nuxt Sandbox</h1></nuxt-link>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: rgb(53, 52, 52);

  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
}

header h1 {
  color: rgb(227, 227, 221);
  font-size: x-large;
  font-weight: 600;

  padding-top: 10px;
}
</style>
