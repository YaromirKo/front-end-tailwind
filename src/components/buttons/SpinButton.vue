<template>
  <div class="flex justify-center items-center">
    <button @click="minus" class="border-solid border-2 border-gray-400 rounded px-3 py-1 text-1xl font-bold text-gray-400 focus:outline-none">-</button>
    <input type="number" size="3" v-model.number="num" :min="min" :max="max" class="w-10 text-center border-none focus:outline-none">
    <button @click="add" class="border-solid border-2 border-gray-400 rounded px-3 py-1 text-1xl font-bold text-gray-400 focus:outline-none">+</button>
  </div>
</template>

<script>
export default {
  name: "SpinButton",
  props: {
    modelValue: Number,
    max: {
      type: Number,
      default: 10
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data: ()=>({
    num: 0
  }),
  created() {
    this.num = this.modelValue
  },
  watch: {
    num() {
      if (this.num > this.max || this.num < this.min) this.num = 0
      this.changeNum(this.num)
    }
  },
  methods: {
    changeNum(num) {
      this.$emit('update:modelValue', num)
    },
    add() {
      if (this.num < this.max) this.num++
    },
    minus() {
      if (this.num > this.min) this.num--
    }
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
