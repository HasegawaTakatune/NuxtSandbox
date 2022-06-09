<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'InputFrame',

  props: {
    id: {
      type: String,
      required: false,
    },
    value: {
      type: String | Object,
      default: () => {
        return null;
      },
      required: false,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String, // text, cxheckbox, select
      default: 'text',
      required: false,
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
      required: false,
    },
  },

  data() {
    return {
      originValue: null,
    };
  },

  watch: {
    value: function (val, _) {
      console.log('watch value');
      this.originValue = val;
    },
  },

  computed: {
    ShowValue() {
      if (this.type === 'checkbox') {
        return this.originValue?.map((val) => `${val.label}: ${val.checked}`).join('<br>');
      } else if (this.type === 'select') {
        return this.originValue;
      }
      return this.originValue;
    },
  },

  created() {
    this.originValue = this.value;
  },
});
</script>

<template>
  <div>
    <label :for="id">{{ label }} </label>
    <input v-if="type === 'text'" type="text" v-model="originValue" class="border-solid border-2 border-gray-600 rounded-md" />

    <div v-else-if="type === 'checkbox'">
      <span v-for="(val, index) in originValue" :key="index" class="form-check">
        <input type="checkbox" :id="val.id" v-model="val.checked" />
        <label :for="val.id">{{ val.label }} </label>
      </span>
    </div>

    <dev v-else-if="type === 'select'">
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
            v-model="originValue"
            class="
              form-select
              appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            aria-label="Default select example"
          >
            <option v-for="(option, index) in options" :key="index">{{ option }}</option>
          </select>
        </div>
      </div>
    </dev>

    <div>
      <span v-once>
        Init value:
        <span v-html="ShowValue"></span>
      </span>
      <br />
      Now value:
      <span v-html="ShowValue"></span>
    </div>
  </div>
</template>

