<template>
  <div>
    <t-modal header="Title of the modal" v-model="isShow" @closed="Closed">
      <div>Content of the modal.</div>
      <label for="modaal-a-text"
        >Input Text
        <input id="modaal-a-text" v-model="inputText" placeholder="text" />
      </label>
      <template v-slot:footer>
        <div class="flex justify-between">
          <button type="button">Cancel</button>
          <button type="button">Ok</button>
          <button type="button" @click="ShowSub">Show ModalB</button>
        </div>
      </template>
    </t-modal>

    <modal-b v-model="isShowSub" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import VueTailwind from 'vue-tailwind';
import { TModal } from 'vue-tailwind/dist/components';

import ModalB from '~/components/Relationship/ModalB.vue';

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

  @Watch('value') private showChange(val: boolean, oldVaal: boolean) {
    this.isShow = val;
  }
  @Watch('isShowSub') private isShowSubChange(val: boolean, oldVal: boolean) {
    this.isShowSub = val;
    this.isShow = true;
  }

  private isShow: boolean = false;
  private inputText: string = '';

  private isShowSub: boolean = false;

  private Closed() {
    this.isShow = false;
    this.input(this.isShow);
  }

  private ShowSub() {
    this.isShowSub = true;
  }
}
</script>