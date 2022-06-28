<script lang="ts">
import { Vue, Component, Watch, Ref } from 'vue-property-decorator';

import { SaveLocalStorage, GetLocalStorage } from '~/components/Relationship/Modules/LocalStorageController';
import ModalA from '~/components/Relationship/ModalA.vue';

@Component({
  layout: 'default',
  name: 'RelationshipPage',
  head: () => {
    return {
      title: 'Relationship',
      meta: [
        { hid: 'description', name: 'description', content: '階層上でのローカルストレージ保存名の設定サンプル' },
        { hid: 'og:title', name: 'og:title', content: 'Relationship' },
        { hid: 'og:description', name: 'og:description', content: '階層上でのローカルストレージ保存名の設定サンプル' },
      ],
    };
  },
  components: {
    ModalA,
  },
})
export default class RelationshipPage extends Vue {
  @Watch('inpTxt') private inpTxtChange(val: string, oldVal: string) {
    this.inpTxt = val;
    // ローカルストレージへ保存
    SaveLocalStorage(`${this.componentName}-InputText`, val ?? '');
  }

  @Watch('inpNum') private inpNumChange(val: number, oldVal: number) {
    this.inpNum = val;
    // ローカルストレージへ保存
    SaveLocalStorage(`${this.componentName}-InputNumber`, val);
  }

  @Ref() modalA: ModalA | undefined;

  private componentName: string = 'RelationshipIndex';

  private show: boolean = false;

  private inpTxt: string = '';
  private inpNum: number = 0;

  mounted() {
    this.componentName = this.$options.name ?? 'RelationshipIndex';

    // モーダルAの初期化
    this.modalA?.Init([this.componentName]);

    // ローカルストレージから取得
    this.inpTxt = GetLocalStorage(`${this.componentName}-InputText`);
    this.inpNum = GetLocalStorage(`${this.componentName}-InputNumber`);
  }
}
</script>

<template>
  <div>
    <modal-a ref="modalA" v-model="show" />

    <div class="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
      <h2 class="font-bold text-purple-900">Relationship</h2>

      <div>
        <label for="page-text">
          Input Text
          <input
            class="pl-2 my-1 border-solid border-2 border-gray-600 rounded-md"
            id="page-text"
            v-model="inpTxt"
            placeholder="text"
            type="text"
          />
        </label>
      </div>

      <div>
        <label for="page-number">
          Input Number
          <input
            class="pl-2 my-1 border-solid border-2 border-gray-600 rounded-md"
            id="number-text"
            v-model="inpNum"
            placeholder="number"
            type="number"
          />
        </label>
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="show = true"
      >
        Show Modal
      </button>

      <nuxt-link
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="button"
        to="/Examples/Relationship/other"
      >
        Other Page
      </nuxt-link>
    </div>
  </div>
</template>
