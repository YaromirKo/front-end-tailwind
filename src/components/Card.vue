<template>
  <div class="max-w-md">

    <img class="h-64 w-full object-cover rounded-db-large" :src="apartment.photo" alt="photo">

    <div class="grid grid-flow-col my-4">
      <div v-if="apartment.superHost" class="w-28 text-center rounded-full border-solid border-2 border-gray-700 font-bold text-gray-700 mr-3">SUPER HOST</div>
      <div class="flex items-center font-medium text-gray-600">{{ apartment.type }}<span v-if="apartment.beds">{{ `. ${apartment.beds} beds` }}</span></div>
      <div class="flex justify-end items-center">
        <span class="material-icons text-red-500">star</span>{{ apartment.rating }}
      </div>
    </div>

    <p class="text-gray-700 text-sm">
      {{apartment.title}}
    </p><p class="text-gray-700 text-sm">
      {{apartment.city}}
    </p>

  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['apartment']
}
</script>

<style scoped>

</style>
