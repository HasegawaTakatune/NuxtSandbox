<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Footer',
});
</script>
<template>
  <footer>
    <h5>RerykA</h5>
  </footer>
</template>
<style scoped>
footer {
    width: 100%;
    height: 3vh;
    background-color: rgb(72, 63, 63);
    padding: 5px 50px 0 50px;

    text-align: end;

    position: fixed;
    bottom: 0;
    left: 0;
}

footer h5{
    color: rgb(227, 227, 221);
    font-weight: 400;
}
</style>