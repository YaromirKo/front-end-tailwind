<template>
  <div class="flex justify-center">
    <div class="md:w-1/2 w-4/5 my-12 py-5 border-t-2 border-gray-400 text-center">
      <a href="https://portfolio.devchallenges.io/YaromirKo">YaromirKo</a>
      <span class="mx-1">@</span>
      <a href="https://devchallenges.io/">DevChallenges.io</a>
      <span class="ml-5">{{getYear}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    getYear() {
      const thereat = 2020
      let now = (new Date()).getFullYear()
      return thereat !== now ? `${thereat} - ${now}` : thereat
    }
  }
}
</script>

<style scoped>

</style>
