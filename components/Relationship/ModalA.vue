<template>
  <div>
    <t-modal header="Modal 1" v-model="isShow" @closed="Closed">
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

      <template v-slot:footer>
        <div class="flex justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            @click="ShowSub"
          >
            Show ModalB
          </button>

          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button"
            @click="isShow = false"
          >
            Cancel
          </button>
        </div>
      </template>
    </t-modal>

    <modal-b ref="modalB" v-model="isShowSub" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch, Ref } from 'vue-property-decorator';
import VueTailwind from 'vue-tailwind';
import { TModal } from 'vue-tailwind/dist/components';

import { SaveLocalStorage, GetLocalStorage } from '~/components/Relationship/Modules/LocalStorageController';
import ModalB from '~/components/Relationship/ModalB.vue';
import { Relationship } from '~/components/Relationship/Modules/Relationship';

@Component({
  name: 'ModalA',
  components: {
    TModal,
    ModalB,
  },
})
export default class ModalA extends Vue {
  @Prop() public value!: boolean;

  @Emit() public OnClick(): void {}
  @Emit() public input(value: boolean) {}

  @Watch('value') private showChange(val: boolean, oldVal: boolean) {
    this.isShow = val;
  }

  @Watch('isShowSub') private isShowSubChange(val: boolean, oldVal: boolean) {
    this.isShowSub = val;
    this.isShow = true;
  }

  @Watch('inpTxt') private inpTxtChange(val: string, oldVal: string) {
    this.inpTxt = val;
    // ローカルストレージへ保存
    const relation = this.relationship._Name();
    SaveLocalStorage(`${relation}-InputText`, val ?? '');
  }

  @Watch('inpNum') private inpNumChange(val: number, oldVal: number) {
    this.inpNum = val;
    // ローカルストレージへ保存
    const relation = this.relationship._Name();
    SaveLocalStorage(`${relation}-InputNumber`, val);
  }

  @Ref() modalB: ModalB | undefined;

  private isShow: boolean = false;

  private isShowSub: boolean = false;

  private inpTxt: string = '';
  private inpNum: number = 0;

  private relationship: Relationship = new Relationship();

  public Init(relationship: string[]) {
    // 関係性の初期化
    this.relationship._Init(this.$options.name ?? 'ModalA', relationship);

    // モーダルBの初期化
    this.modalB?.Init(this.relationship._Get());

    // 関係性の取得
    const relation = this.relationship._Name();

    // ローカルストレージから取得
    this.inpTxt = GetLocalStorage(`${relation}-InputText`);
    this.inpNum = GetLocalStorage(`${relation}-InputNumber`);
  }

  private Closed() {
    this.isShow = false;
    this.input(this.isShow);
  }

  private ShowSub() {
    this.isShowSub = true;
  }
}
</script>