<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CardCase2',

  props: {
    type: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {};
  },

  computed: {
    cardType() {
      if (!this.type) return '';

      if (['violet', 'wine', 'blood'].includes(this.type)) {
        return this.type;
      }

      return '';
    },
  },
});
</script>

<template>
  <div :class="cardType">
    <div class="VanpCard__wrapper">
      <article class="VanpCard__card">
        <div class="VanpCard__header">
          <p class="VanpCard__title">自己紹介</p>
          <figure class="VanpCard__figure">
            <img src="@/static/reryka_logo_plane2.png" alt="RerykA" class="VanpCard__image" />
          </figure>
        </div>
        <div class="VanpCard__body">
          <p class="VanpCard__main_sentence">
            闇落ちモンスター　Rank：☆★★★★★★★★ <br />
            属性：闇 <br />
            弱点：陽 <br />
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
