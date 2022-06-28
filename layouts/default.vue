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
  <html lang="ja">
    <head>
      <link rel="icon" type="image/x-icon" href="https://hasegawatakatune.github.io/NuxtSandbox/reryka_logo_plane.png" />
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
    </head>
    <body>
      <Header />
      <main>
        <Nuxt />
      </main>
      <Footer />
    </body>
  </html>
</template>

<style scoped>
body {
  height: 100vh;
  background-color: rgb(91, 91, 91);
}

main {
  padding-top: 5vh;
}
</style>
