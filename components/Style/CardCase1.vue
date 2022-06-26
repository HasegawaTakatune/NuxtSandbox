<script>
import { stringify } from 'querystring';
import Vue from 'vue';

export default Vue.extend({
  name: 'CardCase1',

  props: {
    type: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      wrapper: '',
      title: '',
      mainSentence: '',
    };
  },

  computed: {
    cardType() {
      if (!this.type) return '';

      if (this.type === 'colorful') {
      } else if (['primary', 'warning', 'danger'].includes(this.type)) {
        return `--${this.type}`;
      }

      return '';
    },
  },
});
</script>

<template>
  <div v-if="type !== 'colorful'">
    <div :class="`ProfileCard__wrapper${cardType}`">
      <article class="ProfileCard__card">
        <div class="ProfileCard__header">
          <p :class="`ProfileCard__title${cardType}`">自己紹介</p>
          <figure :class="`ProfileCard__figure${cardType}`">
            <img src="@/static/reryka_logo_plane2.png" alt="RerykA" class="ProfileCard__image" />
          </figure>
        </div>
        <div class="ProfileCard__body">
          <p :class="`ProfileCard__main_sentence${cardType}`">
            闇落ちモンスター　Rank：☆★★★★★★★★ <br />
            属性：闇 <br />
            弱点：陽 <br />
          </p>
        </div>
      </article>
    </div>
  </div>
  <div v-else>
    <div :class="`ProfileCard__wrapper--primary`">
      <article class="ProfileCard__card">
        <div class="ProfileCard__header">
          <p :class="`ProfileCard__title--warning`">自己紹介</p>
          <figure :class="`ProfileCard__figure--warning`">
            <img src="@/static/reryka_logo_plane2.png" alt="RerykA" class="ProfileCard__image" />
          </figure>
        </div>
        <div class="ProfileCard__body">
          <p :class="`ProfileCard__main_sentence--danger`">
            闇落ちモンスター　Rank：☆★★★★★★★★ <br />
            属性：闇 <br />
            弱点：陽 <br />
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
