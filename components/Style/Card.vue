<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileCard',

  props: {},

  data() {
    return {};
  },
});
</script>

<template>
  <div>
    <!-- <div class="ProfileCard__wrapper card-radius_02"> -->
    <div class="ProfileCard__wrapper">
      <article class="ProfileCard__card">
        <div class="ProfileCard__header">
          <p class="ProfileCard__title">自己紹介</p>
          <figure class="ProfileCard__figure">
            <img src="@/static/reryka_logo_plane2.png" alt="RerykA" class="ProfileCard__image" />
          </figure>
        </div>
        <div class="ProfileCard__body">
          <p class="ProfileCard__main_sentence">
            闇落ちモンスター　Rank：☆★★★★★★★★ <br />
            属性：闇 <br />
            弱点：陽 <br />
            自己暗示により能力を一時的にあげている（と思い込んでいる）<br />
            雰囲気に敏感でテレポートして逃げるため、遭遇率が非常に低い。<br />
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
/* .ProfileCard {
  &__wrapper {
width: 380px;
  margin: 1rem auto;

  background-color: #fff;

  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgb(255, 255, 255);
  }
} */

 .ProfileCard__wrapper {
   width: 380px;
   margin: 1rem auto;

  background-color: #fff;

  overflow: hidden;
   border-radius: 8px;
   box-shadow: 0 4px 15px rgb(255, 255, 255);
 }

.ProfileCard__card {
  background-color: #fff;
  box-shadow: 0 0 0px rgba(0, 0, 0, .16);
  color: #212121;
  text-decoration: none;
}

.ProfileCard__header {
  display: flex;
  flex-wrap: wrap;
}

.ProfileCard__title {
  padding: 1rem 1.5rem 0;
  font-size: 1.6rem;
  order: 1;
  font-weight: bold;
  text-decoration: none;
  /*線の種類（実線） 太さ 色*/
  border-bottom: solid 3px black;

}

.ProfileCard__figure {
  margin: 0;
  order: 0;
}

.ProfileCard__image {
  width: 100%;
}

.ProfileCard__body {
  padding: 0 1.5rem;
}

.ProfileCard__main_sentence {
  font-size: .8rem;
  text-align:center;
  text-decoration: none;
}
</style>