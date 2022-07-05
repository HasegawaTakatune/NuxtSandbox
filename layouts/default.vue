<script>
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  name: 'Default',
});
</script>

<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  padding-top: 5vh;
}
</style>
