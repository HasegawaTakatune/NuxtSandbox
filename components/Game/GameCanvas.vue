<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'GameCanvas',

  data() {
    return {
      canvas: null,
    };
  },

  methods: {},

  mounted() {
    console.log('test');
    this.canvas = this.$refs.canvas;
    let context = canvas.getContext('2d');
    context.beginPath();
    context.rect(20, 40, 50, 50);
    context.fillStyle = '#FF0000';
    context.fill();
    context.closePath();
  },
});
</script>

<template>
  <canvas id="canvas" ref="canvas" width="480" height="320"></canvas>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

canvas {
  background: #eee;
  display: block;
  margin: 0 auto;
}
</style>
