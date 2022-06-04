<template>
  <t-modal header="Title of the modal" v-model="isShow" @closed="Closed">
    Content of the modal.
    <template v-slot:footer>
      <div class="flex justify-between">
        <button type="button">Cancel</button>
        <button type="button">Ok</button>
      </div>
    </template>
  </t-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import VueTailwind from 'vue-tailwind';
import { TModal } from 'vue-tailwind/dist/components';

@Component({
  name: 'ModalB',
  components: {
    TModal,
  },
})
export default class ModalB extends Vue {
  @Prop() public value!: boolean;

  @Emit() private OnClick(): void {}
  @Emit() public input(value: boolean) {}

  @Watch('value') private showChange(val: boolean, oldVaal: boolean) {
    this.isShow = val;
  }

  private isShow: boolean = false;

  private Closed() {
    this.isShow = false;
    this.input(this.isShow);
  }
}
</script>