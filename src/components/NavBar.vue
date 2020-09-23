<template>
  <div class="flex justify-between flex-col md:flex-row sm:mx-24 mx-5 mt-5">
    <div class="md:self-center">
      <img src="logo.svg" alt="logo">
    </div>
    <div class="flex justify-center mt-5 md:mt-0">
      <div class="flex rounded-large border-solid border-2 border-none shadow divide-x-2 divide-gray-100">
        <div class="text-center px-4 py-3">Helsinki, Finland</div>
        <div class="text-center px-4 py-3">Add guests</div>
        <div class="text-center px-4 py-3 text-red-500 material-icons">search</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>
