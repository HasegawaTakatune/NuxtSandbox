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
      <meta charset="utf-8" />
      <title>NuxtSandbox</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Nuxtプロジェクトのサンプル広場" />
      <meta name="keywords" content=",,," />
      <meta name="application-name" content="NuxtSandbox" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NuxtSandbox" />
      <meta property="og:image" content="https://hasegawatakatune.github.io/NuxtSandbox/reryka_logo_plane.png" />
      <meta name="twitter:card" content="summary" />
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
      <link rel="icon" type="image/x-icon" href="https://hasegawatakatune.github.io/NuxtSandbox/reryka_logo_plane.png" />
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

main{
  padding-top: 5vh;
}
</style>