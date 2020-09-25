<template>
  <!--Modal-->
  <div v-if="show" @click.self="close" class="fixed w-full h-full top-0 left-0">
    <div class="lg:h-modal h-modal-mob flex items-center justify-center bg-gray-400">
      <button @click="close">close</button>
    </div>
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
