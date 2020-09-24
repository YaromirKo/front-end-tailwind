<template>
  <div class="max-w-md">

    <img class="w-full rounded-db-large" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="photo">

    <div class="grid grid-flow-col my-4">
      <div class="flex justify-center items-center rounded-full border-solid border-2 border-gray-700 font-bold text-gray-700">SUPER HOST</div>
      <div class="flex items-center ml-3 font-medium text-gray-600">The Coldest Sunset</div>
      <div class="flex justify-end items-center">
        <span class=" material-icons text-red-500">star</span>4
      </div>
    </div>

    <p class="text-gray-700 text-sm">
      title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>

  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['i']
}
</script>

<style scoped>

</style>
