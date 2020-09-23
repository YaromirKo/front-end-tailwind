<template>
  <div class="lg:mx-0 mx-5 mt-16">
    <div class="flex justify-between items-end">
      <div class="text-center text-2xl font-bold">Stays in Finland</div>
      <div class="text-center">12+ stays</div>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-auto gap-8 mt-8">
      <div class="flex justify-center items-center" v-for="item in 10" :key="item">
        <Card :i="item"/>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Content",
  components: {
    Card
  }
}
</script>

<style scoped>

</style>
