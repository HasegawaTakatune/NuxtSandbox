<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

// ローカルストレージ保存の確認用の別ページ
@Component({
  layout: 'default',
  name: 'RelationshipOtherPage',
})
export default class RelationshipOtherPage extends Vue {}
</script>

<template>
  <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
    <h2 class="font-bold text-purple-900">Relationship Other</h2>
    <nuxt-link
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="/Examples/Relationship"
    >
      Return Page
    </nuxt-link>
  </div>
</template>
