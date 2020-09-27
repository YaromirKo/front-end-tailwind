<template>
  <div class="flex justify-between flex-col md:flex-row lg:mx-0 mt-5">
    <div class="md:self-center">
      <img src="logo.svg" alt="logo">
    </div>
    <div class="flex self-center items-center mt-5 md:mt-0 rounded-large border-solid border-none shadow divide-x-2 divide-gray-100 cursor-pointer">
      <div @click="toggleMenu" class="px-4 py-3">{{city ? `${city}, Finland` : 'Select city'}}</div>
      <div @click="toggleMenu" class="px-4 py-3">{{adults + children === 0 ? 'Add guests' : `${adults + children} guests`}}</div>
      <div @click="toggleMenu"  class="px-4 py-3 text-red-500 material-icons">search</div>
      <div class="px-4 py-3 material-icons"
           v-if="city || adults + children !== 0"
           @click="clearResult">close</div>
    </div>
  </div>

  <teleport to="#modal">
    <Modal v-model:show="showModal">
      <div class="w-full lg:h-modal h-auto bg-white md:pt-20 pt-3 relative">
        <div class="container mx-auto px-2">

          <div class="md:hidden block pb-5">
            <div class="flex justify-between">
              <div class="font-bold text-xs">Edit your search</div>
              <div class="material-icons cursor-pointer" @click="toggleMenu">close</div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 grid-cols-1 rounded-large border-none shadow md:divide-x-2 divide-y-2 md:divide-y-0 divide-gray-100 cursor-pointer">
            <div class="">
              <div @click="tab = 0" class="pl-5 py-3" :class="[getTabStyle(tab === 0)]">
                <div class="text-xs font-extrabold leading-3">LOCATION</div>
                <div class="text-sm font-normal leading-5" :class="{'text-gray-400': tab !== 0}">
                  {{city}} {{country}}
                </div>
              </div>
            </div>
            <div class="">
              <div @click="tab = 1" class="pl-5 py-3" :class="[getTabStyle(tab === 1)]">
                <div class="text-xs font-extrabold leading-3">GUESTS</div>
                <div class="text-sm font-normal leading-5" :class="{'text-gray-400': tab !== 1}">
                  {{adults + children}} guests
                </div>
              </div>
            </div>
            <div class="py-1 hidden md:block">
              <div class="flex justify-center">
                <SearchButton @click="search()"/>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 grid-cols-1 pt-6">
            <div class="pl-5">
              <ul class="overflow-y-auto h-56" v-if="tab === 0">
                <li class="flex pt-5 cursor-pointer"
                    v-for="(city, index) in store.getCities()" :key="index"
                    @click="toggleCity(city.city)">
                  <span class="material-icons">place</span>
                  <span>{{city.city}}, {{city.country}}</span>
                </li>
              </ul>
            </div>
            <div class="pl-5 h-56" v-if="tab === 1">
              <div>
                <div class="font-bold">Adults</div>
                <div class="font-normal text-gray-500">Ages 13 or above</div>
                <div class="flex justify-start pt-2">
                  <SpinButton v-model="adults"/>
                </div>
              </div>
              <div class="pt-6">
                <div class="font-bold">Children</div>
                <div class="font-normal text-gray-500">Ages 2 - 12</div>
                <div class="flex justify-start pt-4">
                  <SpinButton v-model="children"/>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center py-8 ">
            <div class="bottom-0 md:hidden block">
              <SearchButton @click="search"/>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </teleport>

</template>

<script>
import Modal from "@/components/Modal";
import SearchButton from "@/components/buttons/SearchButton";
import SpinButton from "@/components/buttons/SpinButton";
import {injectStore} from "@/store/state";

import {toRefs, reactive} from "vue";

export default {
  name: "NavBar",
  components: {
    Modal,
    SearchButton,
    SpinButton
  },
  setup() {
    const store = injectStore()

    const data = reactive({
      showModal: false,
      tab: 0,
      adults: 0,
      children: 0,
      city: undefined,
      country: store.getCities()[0].country,
    })

    const getTabStyle = (isThis) => {
      return isThis ? 'md:rounded-large md:border-solid md:border-2 md:border-black' : ''
    }
    const toggleMenu = () => {
      data.tab = 0
      data.showModal = !data.showModal
    }
    const toggleCity = (city) => {
      data.city = city
    }
    const clearResult = () => {
      store.filterByCity({})
      data.city = undefined
      data.adults = 0
      data.children = 0
    }
    const search = () => {
      store.filterByCity({
        city: data.city,
        guests: data.adults + data.children
      })
      toggleMenu()
    }

    return {
      ...toRefs(data), store,
      getTabStyle, toggleMenu, toggleCity, search, clearResult
    }
  }
}
</script>

<style scoped>

</style>
