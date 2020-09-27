<template>
  <div class="lg:mx-0 mx-5 mt-16">
    <div class="flex justify-between items-end">
      <div class="text-center text-2xl font-bold">Stays in Finland</div>
      <div class="text-center">12+ stays</div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-auto gap-8 mt-8" v-if="store.state.apartments.length !== 0">
      <span class="flex justify-center items-center" v-for="(apartment, index) in store.state.apartments" :key="index">
        <Card  :apartment="apartment"/>
      </span>
    </div>
    <div v-else class="text-center">No results found</div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import {injectStore} from "@/store/state";

export default {
  name: "Content",
  components: {
    Card
  },
  setup() {
    return { store: injectStore() };
  }
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>
