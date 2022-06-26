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
    <div class="ProfileCard__wrapper--primary">
      <article class="ProfileCard__card">
        <div class="ProfileCard__header">
          <p class="ProfileCard__title--primary">自己紹介</p>
          <figure class="ProfileCard__figure--primary">
            <img src="@/static/reryka_logo_plane2.png" alt="RerykA" class="ProfileCard__image" />
          </figure>
        </div>
        <div class="ProfileCard__body">
          <p class="ProfileCard__main_sentence--primary">
            闇落ちモンスター　Rank：☆★★★★★★★★ <br />
            属性：闇 <br />
            弱点：陽 <br />
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .ProfileCard {
//   &__wrapper {
//     width: 380px;
//     margin: 2rem auto;

//     background-color: #fff;

//     box-shadow: 0 4px 15px rgb(255, 255, 255);
//     overflow: hidden;
//     border-radius: 8px;
//   }

//   &__wrapper--primary {
//     width: 380px;
//     margin: 2rem auto;

//     background-color: #eaf5ff;

//     box-shadow: 0 4px 15px #5edef2;
//     overflow: hidden;
//     border-radius: 8px;
//   }

//   &__card {
//     padding-bottom: 0.5rem;

//     color: #212121;
//     // background-color: #fff;

//     box-shadow: 0 0 0px rgba(0, 0, 0, 0.16);
//     text-decoration: none;
//   }

//   &__header {
//     display: flex;
//     flex-wrap: wrap;
//   }

//   &__title {
//     padding: 1rem 1.5rem 0;

//     font-size: 1.6rem;
//     font-weight: bold;
//     text-decoration: none;
//     border-bottom: solid 3px black;

//     order: 1;
//   }

//   &__title--primary {
//     color: #0f0f70;

//     padding: 1rem 1.5rem 0;

//     font-size: 1.6rem;
//     font-weight: bold;
//     text-decoration: none;
//     border-bottom: solid 3px #0f0f70;

//     order: 1;
//   }

//   &__figure {
//     margin: 0;
//     order: 0;
//   }

//   &__figure--primary {
//     margin: 0;
//     order: 0;

//     background-color: #fff;
//     border: double #4949fa;
//     border-radius: 2.5%;
//   }

//   &__image {
//     width: 100%;
//   }

//   // &__imageg--primary {
//   //   width: 100%;
//   // }

//   &__body {
//     padding: 0 1.5rem;
//   }

//   &__main_sentence {
//     font-size: 0.8rem;
//     text-decoration: none;
//   }

//   &__main_sentence--primary {
//     color: #0f0fbc;

//     font-size: 0.8rem;
//     text-decoration: none;
//   }
// }

//  .ProfileCard__wrapper {
//    width: 380px;
//    margin: 2rem auto;

//    background-color: #fff;

//    box-shadow: 0 4px 15px rgb(255, 255, 255);
//    overflow: hidden;
//    border-radius: 8px;
//  }

// .ProfileCard__card {
//   padding-bottom: 0.5rem;

//   color: #212121;
//   background-color: #fff;

//   box-shadow: 0 0 0px rgba(0, 0, 0, .16);
//   text-decoration: none;
// }

// .ProfileCard__header {
//   display: flex;
//   flex-wrap: wrap;
// }

// .ProfileCard__title {
//   padding: 1rem 1.5rem 0;

//   font-size: 1.6rem;
//   font-weight: bold;
//   text-decoration: none;
//   border-bottom: solid 3px black;

//   order: 1;
// }

// .ProfileCard__figure {
//   margin: 0;
//   order: 0;
// }

// .ProfileCard__image {
//   width: 100%;
// }

// .ProfileCard__body {
//   padding: 0 1.5rem;
// }

// .ProfileCard__main_sentence {
//   font-size: .8rem;
//   text-decoration: none;
// }
</style>
