<template>
  <!--Modal-->
  <div v-if="show" class="fixed w-full md:h-modal h-modal-mob top-0 left-0 flex items-center justify-center bg-gray-400">
    <button @click="close">close</button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overflow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      if (this.overflow) document.body.style.overflow = this.show ? 'hidden' : 'visible'
    }
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    }
  }
}
</script>

<style>

</style>
