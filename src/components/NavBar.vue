<template>
  <div class="flex justify-between flex-col md:flex-row lg:mx-0 mx-5 mt-5">
    <div class="md:self-center">
      <img src="logo.svg" alt="logo">
    </div>
    <div class="flex self-center mt-5 md:mt-0 rounded-large border-solid border-none shadow divide-x-2 divide-gray-100 cursor-pointer"
         @click="toggleModal">
      <div class="px-4 py-3">Helsinki, Finland</div>
      <div class="px-4 py-3">Add guests</div>
      <div class="px-4 py-3 text-red-500 material-icons">search</div>
    </div>
  </div>
  <teleport to="#app">
    <Modal v-click-outside="toggleModal" v-model:show="showModal"
           overflow/>
  </teleport>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "NavBar",
  components: {
    Modal
  },
  data: () => ({
    showModal: false
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>

</style>
