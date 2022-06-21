<script>
import Vue from 'vue';
export default Vue.extend({
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
    <div>
      <Nuxt />
    </div>
  </html>
</template>
